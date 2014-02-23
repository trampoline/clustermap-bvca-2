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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24317 = (function (f,fn_handler,meta24318){
this.f = f;
this.fn_handler = fn_handler;
this.meta24318 = meta24318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24317.cljs$lang$type = true;
cljs.core.async.t24317.cljs$lang$ctorStr = "cljs.core.async/t24317";
cljs.core.async.t24317.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24317");
});
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24319){var self__ = this;
var _24319__$1 = this;return self__.meta24318;
});
cljs.core.async.t24317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24319,meta24318__$1){var self__ = this;
var _24319__$1 = this;return (new cljs.core.async.t24317(self__.f,self__.fn_handler,meta24318__$1));
});
cljs.core.async.__GT_t24317 = (function __GT_t24317(f__$1,fn_handler__$1,meta24318){return (new cljs.core.async.t24317(f__$1,fn_handler__$1,meta24318));
});
}
return (new cljs.core.async.t24317(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24321 = buff;if(G__24321)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24321.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24321.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24321);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24321);
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
{var val_24322 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24322) : fn1.call(null,val_24322));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24322) : fn1.call(null,val_24322));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24323 = n;var x_24324 = 0;while(true){
if((x_24324 < n__4248__auto___24323))
{(a[x_24324] = 0);
{
var G__24325 = (x_24324 + 1);
x_24324 = G__24325;
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
var G__24326 = (i + 1);
i = G__24326;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24330 = (function (flag,alt_flag,meta24331){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24331 = meta24331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24330.cljs$lang$type = true;
cljs.core.async.t24330.cljs$lang$ctorStr = "cljs.core.async/t24330";
cljs.core.async.t24330.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24330");
});
cljs.core.async.t24330.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24332){var self__ = this;
var _24332__$1 = this;return self__.meta24331;
});
cljs.core.async.t24330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24332,meta24331__$1){var self__ = this;
var _24332__$1 = this;return (new cljs.core.async.t24330(self__.flag,self__.alt_flag,meta24331__$1));
});
cljs.core.async.__GT_t24330 = (function __GT_t24330(flag__$1,alt_flag__$1,meta24331){return (new cljs.core.async.t24330(flag__$1,alt_flag__$1,meta24331));
});
}
return (new cljs.core.async.t24330(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24336 = (function (cb,flag,alt_handler,meta24337){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24337 = meta24337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24336.cljs$lang$type = true;
cljs.core.async.t24336.cljs$lang$ctorStr = "cljs.core.async/t24336";
cljs.core.async.t24336.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24336");
});
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24338){var self__ = this;
var _24338__$1 = this;return self__.meta24337;
});
cljs.core.async.t24336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24338,meta24337__$1){var self__ = this;
var _24338__$1 = this;return (new cljs.core.async.t24336(self__.cb,self__.flag,self__.alt_handler,meta24337__$1));
});
cljs.core.async.__GT_t24336 = (function __GT_t24336(cb__$1,flag__$1,alt_handler__$1,meta24337){return (new cljs.core.async.t24336(cb__$1,flag__$1,alt_handler__$1,meta24337));
});
}
return (new cljs.core.async.t24336(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$254.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24339_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24339_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24339_SHARP_,port], null)));
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
var G__24340 = (i + 1);
i = G__24340;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$238))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$238], null));
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
var alts_BANG___delegate = function (ports,p__24341){var map__24343 = p__24341;var map__24343__$1 = ((cljs.core.seq_QMARK_(map__24343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24343):map__24343);var opts = map__24343__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24341 = null;if (arguments.length > 1) {
  p__24341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24341);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24344){
var ports = cljs.core.first(arglist__24344);
var p__24341 = cljs.core.rest(arglist__24344);
return alts_BANG___delegate(ports,p__24341);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24352 = (function (ch,f,map_LT_,meta24353){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24353 = meta24353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24352.cljs$lang$type = true;
cljs.core.async.t24352.cljs$lang$ctorStr = "cljs.core.async/t24352";
cljs.core.async.t24352.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24352");
});
cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24355 = (function (fn1,_,meta24353,ch,f,map_LT_,meta24356){
this.fn1 = fn1;
this._ = _;
this.meta24353 = meta24353;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24356 = meta24356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24355.cljs$lang$type = true;
cljs.core.async.t24355.cljs$lang$ctorStr = "cljs.core.async/t24355";
cljs.core.async.t24355.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24355");
});
cljs.core.async.t24355.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24355.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24345_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24345_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24345_SHARP_) : self__.f.call(null,p1__24345_SHARP_)))) : f1.call(null,(((p1__24345_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24345_SHARP_) : self__.f.call(null,p1__24345_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24357){var self__ = this;
var _24357__$1 = this;return self__.meta24356;
});
cljs.core.async.t24355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24357,meta24356__$1){var self__ = this;
var _24357__$1 = this;return (new cljs.core.async.t24355(self__.fn1,self__._,self__.meta24353,self__.ch,self__.f,self__.map_LT_,meta24356__$1));
});
cljs.core.async.__GT_t24355 = (function __GT_t24355(fn1__$1,___$2,meta24353__$1,ch__$2,f__$2,map_LT___$2,meta24356){return (new cljs.core.async.t24355(fn1__$1,___$2,meta24353__$1,ch__$2,f__$2,map_LT___$2,meta24356));
});
}
return (new cljs.core.async.t24355(fn1,___$1,self__.meta24353,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24354){var self__ = this;
var _24354__$1 = this;return self__.meta24353;
});
cljs.core.async.t24352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24354,meta24353__$1){var self__ = this;
var _24354__$1 = this;return (new cljs.core.async.t24352(self__.ch,self__.f,self__.map_LT_,meta24353__$1));
});
cljs.core.async.__GT_t24352 = (function __GT_t24352(ch__$1,f__$1,map_LT___$1,meta24353){return (new cljs.core.async.t24352(ch__$1,f__$1,map_LT___$1,meta24353));
});
}
return (new cljs.core.async.t24352(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24361 = (function (ch,f,map_GT_,meta24362){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24362 = meta24362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24361.cljs$lang$type = true;
cljs.core.async.t24361.cljs$lang$ctorStr = "cljs.core.async/t24361";
cljs.core.async.t24361.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24361");
});
cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24363){var self__ = this;
var _24363__$1 = this;return self__.meta24362;
});
cljs.core.async.t24361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24363,meta24362__$1){var self__ = this;
var _24363__$1 = this;return (new cljs.core.async.t24361(self__.ch,self__.f,self__.map_GT_,meta24362__$1));
});
cljs.core.async.__GT_t24361 = (function __GT_t24361(ch__$1,f__$1,map_GT___$1,meta24362){return (new cljs.core.async.t24361(ch__$1,f__$1,map_GT___$1,meta24362));
});
}
return (new cljs.core.async.t24361(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24367 = (function (ch,p,filter_GT_,meta24368){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24368 = meta24368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24367.cljs$lang$type = true;
cljs.core.async.t24367.cljs$lang$ctorStr = "cljs.core.async/t24367";
cljs.core.async.t24367.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24367");
});
cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24369){var self__ = this;
var _24369__$1 = this;return self__.meta24368;
});
cljs.core.async.t24367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24369,meta24368__$1){var self__ = this;
var _24369__$1 = this;return (new cljs.core.async.t24367(self__.ch,self__.p,self__.filter_GT_,meta24368__$1));
});
cljs.core.async.__GT_t24367 = (function __GT_t24367(ch__$1,p__$1,filter_GT___$1,meta24368){return (new cljs.core.async.t24367(ch__$1,p__$1,filter_GT___$1,meta24368));
});
}
return (new cljs.core.async.t24367(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24431){var state_val_24432 = (state_24431[1]);if((state_val_24432 === 1))
{var state_24431__$1 = state_24431;var statearr_24433_24453 = state_24431__$1;(statearr_24433_24453[2] = null);
(statearr_24433_24453[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24432 === 2))
{var state_24431__$1 = state_24431;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24431__$1,4,ch);
} else
{if((state_val_24432 === 3))
{var inst_24429 = (state_24431[2]);var state_24431__$1 = state_24431;return cljs.core.async.impl.ioc_helpers.return_chan(state_24431__$1,inst_24429);
} else
{if((state_val_24432 === 4))
{var inst_24413 = (state_24431[7]);var inst_24413__$1 = (state_24431[2]);var inst_24414 = (inst_24413__$1 == null);var state_24431__$1 = (function (){var statearr_24434 = state_24431;(statearr_24434[7] = inst_24413__$1);
return statearr_24434;
})();if(cljs.core.truth_(inst_24414))
{var statearr_24435_24454 = state_24431__$1;(statearr_24435_24454[1] = 5);
} else
{var statearr_24436_24455 = state_24431__$1;(statearr_24436_24455[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24432 === 5))
{var inst_24416 = cljs.core.async.close_BANG_(out);var state_24431__$1 = state_24431;var statearr_24437_24456 = state_24431__$1;(statearr_24437_24456[2] = inst_24416);
(statearr_24437_24456[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24432 === 6))
{var inst_24413 = (state_24431[7]);var inst_24418 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24413) : p.call(null,inst_24413));var state_24431__$1 = state_24431;if(cljs.core.truth_(inst_24418))
{var statearr_24438_24457 = state_24431__$1;(statearr_24438_24457[1] = 8);
} else
{var statearr_24439_24458 = state_24431__$1;(statearr_24439_24458[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24432 === 7))
{var inst_24427 = (state_24431[2]);var state_24431__$1 = state_24431;var statearr_24440_24459 = state_24431__$1;(statearr_24440_24459[2] = inst_24427);
(statearr_24440_24459[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24432 === 8))
{var inst_24413 = (state_24431[7]);var state_24431__$1 = state_24431;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24431__$1,11,out,inst_24413);
} else
{if((state_val_24432 === 9))
{var state_24431__$1 = state_24431;var statearr_24441_24460 = state_24431__$1;(statearr_24441_24460[2] = null);
(statearr_24441_24460[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24432 === 10))
{var inst_24424 = (state_24431[2]);var state_24431__$1 = (function (){var statearr_24442 = state_24431;(statearr_24442[8] = inst_24424);
return statearr_24442;
})();var statearr_24443_24461 = state_24431__$1;(statearr_24443_24461[2] = null);
(statearr_24443_24461[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24432 === 11))
{var inst_24421 = (state_24431[2]);var state_24431__$1 = state_24431;var statearr_24444_24462 = state_24431__$1;(statearr_24444_24462[2] = inst_24421);
(statearr_24444_24462[1] = 10);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24448 = [null,null,null,null,null,null,null,null,null];(statearr_24448[0] = state_machine__5507__auto__);
(statearr_24448[1] = 1);
return statearr_24448;
});
var state_machine__5507__auto____1 = (function (state_24431){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24431);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24449){if((e24449 instanceof Object))
{var ex__5510__auto__ = e24449;var statearr_24450_24463 = state_24431;(statearr_24450_24463[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24431);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24464 = state_24431;
state_24431 = G__24464;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24431){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24451 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24452);
return statearr_24451;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24616){var state_val_24617 = (state_24616[1]);if((state_val_24617 === 1))
{var state_24616__$1 = state_24616;var statearr_24618_24655 = state_24616__$1;(statearr_24618_24655[2] = null);
(statearr_24618_24655[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 2))
{var state_24616__$1 = state_24616;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24616__$1,4,in$);
} else
{if((state_val_24617 === 3))
{var inst_24614 = (state_24616[2]);var state_24616__$1 = state_24616;return cljs.core.async.impl.ioc_helpers.return_chan(state_24616__$1,inst_24614);
} else
{if((state_val_24617 === 4))
{var inst_24562 = (state_24616[7]);var inst_24562__$1 = (state_24616[2]);var inst_24563 = (inst_24562__$1 == null);var state_24616__$1 = (function (){var statearr_24619 = state_24616;(statearr_24619[7] = inst_24562__$1);
return statearr_24619;
})();if(cljs.core.truth_(inst_24563))
{var statearr_24620_24656 = state_24616__$1;(statearr_24620_24656[1] = 5);
} else
{var statearr_24621_24657 = state_24616__$1;(statearr_24621_24657[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 5))
{var inst_24565 = cljs.core.async.close_BANG_(out);var state_24616__$1 = state_24616;var statearr_24622_24658 = state_24616__$1;(statearr_24622_24658[2] = inst_24565);
(statearr_24622_24658[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 6))
{var inst_24562 = (state_24616[7]);var inst_24567 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24562) : f.call(null,inst_24562));var inst_24572 = cljs.core.seq(inst_24567);var inst_24573 = inst_24572;var inst_24574 = null;var inst_24575 = 0;var inst_24576 = 0;var state_24616__$1 = (function (){var statearr_24623 = state_24616;(statearr_24623[8] = inst_24576);
(statearr_24623[9] = inst_24575);
(statearr_24623[10] = inst_24573);
(statearr_24623[11] = inst_24574);
return statearr_24623;
})();var statearr_24624_24659 = state_24616__$1;(statearr_24624_24659[2] = null);
(statearr_24624_24659[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 7))
{var inst_24612 = (state_24616[2]);var state_24616__$1 = state_24616;var statearr_24625_24660 = state_24616__$1;(statearr_24625_24660[2] = inst_24612);
(statearr_24625_24660[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 8))
{var inst_24576 = (state_24616[8]);var inst_24575 = (state_24616[9]);var inst_24578 = (inst_24576 < inst_24575);var inst_24579 = inst_24578;var state_24616__$1 = state_24616;if(cljs.core.truth_(inst_24579))
{var statearr_24626_24661 = state_24616__$1;(statearr_24626_24661[1] = 10);
} else
{var statearr_24627_24662 = state_24616__$1;(statearr_24627_24662[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 9))
{var inst_24609 = (state_24616[2]);var state_24616__$1 = (function (){var statearr_24628 = state_24616;(statearr_24628[12] = inst_24609);
return statearr_24628;
})();var statearr_24629_24663 = state_24616__$1;(statearr_24629_24663[2] = null);
(statearr_24629_24663[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 10))
{var inst_24576 = (state_24616[8]);var inst_24574 = (state_24616[11]);var inst_24581 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24574,inst_24576);var state_24616__$1 = state_24616;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24616__$1,13,out,inst_24581);
} else
{if((state_val_24617 === 11))
{var inst_24573 = (state_24616[10]);var inst_24587 = (state_24616[13]);var inst_24587__$1 = cljs.core.seq(inst_24573);var state_24616__$1 = (function (){var statearr_24633 = state_24616;(statearr_24633[13] = inst_24587__$1);
return statearr_24633;
})();if(inst_24587__$1)
{var statearr_24634_24664 = state_24616__$1;(statearr_24634_24664[1] = 14);
} else
{var statearr_24635_24665 = state_24616__$1;(statearr_24635_24665[1] = 15);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 12))
{var inst_24607 = (state_24616[2]);var state_24616__$1 = state_24616;var statearr_24636_24666 = state_24616__$1;(statearr_24636_24666[2] = inst_24607);
(statearr_24636_24666[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 13))
{var inst_24576 = (state_24616[8]);var inst_24575 = (state_24616[9]);var inst_24573 = (state_24616[10]);var inst_24574 = (state_24616[11]);var inst_24583 = (state_24616[2]);var inst_24584 = (inst_24576 + 1);var tmp24630 = inst_24575;var tmp24631 = inst_24573;var tmp24632 = inst_24574;var inst_24573__$1 = tmp24631;var inst_24574__$1 = tmp24632;var inst_24575__$1 = tmp24630;var inst_24576__$1 = inst_24584;var state_24616__$1 = (function (){var statearr_24637 = state_24616;(statearr_24637[8] = inst_24576__$1);
(statearr_24637[9] = inst_24575__$1);
(statearr_24637[10] = inst_24573__$1);
(statearr_24637[11] = inst_24574__$1);
(statearr_24637[14] = inst_24583);
return statearr_24637;
})();var statearr_24638_24667 = state_24616__$1;(statearr_24638_24667[2] = null);
(statearr_24638_24667[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 14))
{var inst_24587 = (state_24616[13]);var inst_24589 = cljs.core.chunked_seq_QMARK_(inst_24587);var state_24616__$1 = state_24616;if(inst_24589)
{var statearr_24639_24668 = state_24616__$1;(statearr_24639_24668[1] = 17);
} else
{var statearr_24640_24669 = state_24616__$1;(statearr_24640_24669[1] = 18);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 15))
{var state_24616__$1 = state_24616;var statearr_24641_24670 = state_24616__$1;(statearr_24641_24670[2] = null);
(statearr_24641_24670[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 16))
{var inst_24605 = (state_24616[2]);var state_24616__$1 = state_24616;var statearr_24642_24671 = state_24616__$1;(statearr_24642_24671[2] = inst_24605);
(statearr_24642_24671[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 17))
{var inst_24587 = (state_24616[13]);var inst_24591 = cljs.core.chunk_first(inst_24587);var inst_24592 = cljs.core.chunk_rest(inst_24587);var inst_24593 = cljs.core.count(inst_24591);var inst_24573 = inst_24592;var inst_24574 = inst_24591;var inst_24575 = inst_24593;var inst_24576 = 0;var state_24616__$1 = (function (){var statearr_24643 = state_24616;(statearr_24643[8] = inst_24576);
(statearr_24643[9] = inst_24575);
(statearr_24643[10] = inst_24573);
(statearr_24643[11] = inst_24574);
return statearr_24643;
})();var statearr_24644_24672 = state_24616__$1;(statearr_24644_24672[2] = null);
(statearr_24644_24672[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 18))
{var inst_24587 = (state_24616[13]);var inst_24596 = cljs.core.first(inst_24587);var state_24616__$1 = state_24616;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24616__$1,20,out,inst_24596);
} else
{if((state_val_24617 === 19))
{var inst_24602 = (state_24616[2]);var state_24616__$1 = state_24616;var statearr_24645_24673 = state_24616__$1;(statearr_24645_24673[2] = inst_24602);
(statearr_24645_24673[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24617 === 20))
{var inst_24587 = (state_24616[13]);var inst_24598 = (state_24616[2]);var inst_24599 = cljs.core.next(inst_24587);var inst_24573 = inst_24599;var inst_24574 = null;var inst_24575 = 0;var inst_24576 = 0;var state_24616__$1 = (function (){var statearr_24646 = state_24616;(statearr_24646[8] = inst_24576);
(statearr_24646[9] = inst_24575);
(statearr_24646[10] = inst_24573);
(statearr_24646[11] = inst_24574);
(statearr_24646[15] = inst_24598);
return statearr_24646;
})();var statearr_24647_24674 = state_24616__$1;(statearr_24647_24674[2] = null);
(statearr_24647_24674[1] = 8);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24651[0] = state_machine__5507__auto__);
(statearr_24651[1] = 1);
return statearr_24651;
});
var state_machine__5507__auto____1 = (function (state_24616){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24616);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24652){if((e24652 instanceof Object))
{var ex__5510__auto__ = e24652;var statearr_24653_24675 = state_24616;(statearr_24653_24675[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24616);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24676 = state_24616;
state_24616 = G__24676;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24616){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24654 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24654;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24736){var state_val_24737 = (state_24736[1]);if((state_val_24737 === 1))
{var state_24736__$1 = state_24736;var statearr_24738_24758 = state_24736__$1;(statearr_24738_24758[2] = null);
(statearr_24738_24758[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24737 === 2))
{var state_24736__$1 = state_24736;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24736__$1,4,from);
} else
{if((state_val_24737 === 3))
{var inst_24734 = (state_24736[2]);var state_24736__$1 = state_24736;return cljs.core.async.impl.ioc_helpers.return_chan(state_24736__$1,inst_24734);
} else
{if((state_val_24737 === 4))
{var inst_24719 = (state_24736[7]);var inst_24719__$1 = (state_24736[2]);var inst_24720 = (inst_24719__$1 == null);var state_24736__$1 = (function (){var statearr_24739 = state_24736;(statearr_24739[7] = inst_24719__$1);
return statearr_24739;
})();if(cljs.core.truth_(inst_24720))
{var statearr_24740_24759 = state_24736__$1;(statearr_24740_24759[1] = 5);
} else
{var statearr_24741_24760 = state_24736__$1;(statearr_24741_24760[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24737 === 5))
{var state_24736__$1 = state_24736;if(cljs.core.truth_(close_QMARK_))
{var statearr_24742_24761 = state_24736__$1;(statearr_24742_24761[1] = 8);
} else
{var statearr_24743_24762 = state_24736__$1;(statearr_24743_24762[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24737 === 6))
{var inst_24719 = (state_24736[7]);var state_24736__$1 = state_24736;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24736__$1,11,to,inst_24719);
} else
{if((state_val_24737 === 7))
{var inst_24732 = (state_24736[2]);var state_24736__$1 = state_24736;var statearr_24744_24763 = state_24736__$1;(statearr_24744_24763[2] = inst_24732);
(statearr_24744_24763[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24737 === 8))
{var inst_24723 = cljs.core.async.close_BANG_(to);var state_24736__$1 = state_24736;var statearr_24745_24764 = state_24736__$1;(statearr_24745_24764[2] = inst_24723);
(statearr_24745_24764[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24737 === 9))
{var state_24736__$1 = state_24736;var statearr_24746_24765 = state_24736__$1;(statearr_24746_24765[2] = null);
(statearr_24746_24765[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24737 === 10))
{var inst_24726 = (state_24736[2]);var state_24736__$1 = state_24736;var statearr_24747_24766 = state_24736__$1;(statearr_24747_24766[2] = inst_24726);
(statearr_24747_24766[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24737 === 11))
{var inst_24729 = (state_24736[2]);var state_24736__$1 = (function (){var statearr_24748 = state_24736;(statearr_24748[8] = inst_24729);
return statearr_24748;
})();var statearr_24749_24767 = state_24736__$1;(statearr_24749_24767[2] = null);
(statearr_24749_24767[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24753 = [null,null,null,null,null,null,null,null,null];(statearr_24753[0] = state_machine__5507__auto__);
(statearr_24753[1] = 1);
return statearr_24753;
});
var state_machine__5507__auto____1 = (function (state_24736){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24736);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24754){if((e24754 instanceof Object))
{var ex__5510__auto__ = e24754;var statearr_24755_24768 = state_24736;(statearr_24755_24768[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24736);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24769 = state_24736;
state_24736 = G__24769;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24736){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24756 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24757);
return statearr_24756;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24834){var state_val_24835 = (state_24834[1]);if((state_val_24835 === 1))
{var state_24834__$1 = state_24834;var statearr_24836_24857 = state_24834__$1;(statearr_24836_24857[2] = null);
(statearr_24836_24857[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 2))
{var state_24834__$1 = state_24834;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24834__$1,4,ch);
} else
{if((state_val_24835 === 3))
{var inst_24832 = (state_24834[2]);var state_24834__$1 = state_24834;return cljs.core.async.impl.ioc_helpers.return_chan(state_24834__$1,inst_24832);
} else
{if((state_val_24835 === 4))
{var inst_24815 = (state_24834[7]);var inst_24815__$1 = (state_24834[2]);var inst_24816 = (inst_24815__$1 == null);var state_24834__$1 = (function (){var statearr_24837 = state_24834;(statearr_24837[7] = inst_24815__$1);
return statearr_24837;
})();if(cljs.core.truth_(inst_24816))
{var statearr_24838_24858 = state_24834__$1;(statearr_24838_24858[1] = 5);
} else
{var statearr_24839_24859 = state_24834__$1;(statearr_24839_24859[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 5))
{var inst_24818 = cljs.core.async.close_BANG_(tc);var inst_24819 = cljs.core.async.close_BANG_(fc);var state_24834__$1 = (function (){var statearr_24840 = state_24834;(statearr_24840[8] = inst_24818);
return statearr_24840;
})();var statearr_24841_24860 = state_24834__$1;(statearr_24841_24860[2] = inst_24819);
(statearr_24841_24860[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 6))
{var inst_24815 = (state_24834[7]);var inst_24821 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24815) : p.call(null,inst_24815));var state_24834__$1 = state_24834;if(cljs.core.truth_(inst_24821))
{var statearr_24842_24861 = state_24834__$1;(statearr_24842_24861[1] = 9);
} else
{var statearr_24843_24862 = state_24834__$1;(statearr_24843_24862[1] = 10);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 7))
{var inst_24830 = (state_24834[2]);var state_24834__$1 = state_24834;var statearr_24844_24863 = state_24834__$1;(statearr_24844_24863[2] = inst_24830);
(statearr_24844_24863[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 8))
{var inst_24827 = (state_24834[2]);var state_24834__$1 = (function (){var statearr_24845 = state_24834;(statearr_24845[9] = inst_24827);
return statearr_24845;
})();var statearr_24846_24864 = state_24834__$1;(statearr_24846_24864[2] = null);
(statearr_24846_24864[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 9))
{var state_24834__$1 = state_24834;var statearr_24847_24865 = state_24834__$1;(statearr_24847_24865[2] = tc);
(statearr_24847_24865[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 10))
{var state_24834__$1 = state_24834;var statearr_24848_24866 = state_24834__$1;(statearr_24848_24866[2] = fc);
(statearr_24848_24866[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24835 === 11))
{var inst_24815 = (state_24834[7]);var inst_24825 = (state_24834[2]);var state_24834__$1 = state_24834;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24834__$1,8,inst_24825,inst_24815);
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
var state_machine__5507__auto____0 = (function (){var statearr_24852 = [null,null,null,null,null,null,null,null,null,null];(statearr_24852[0] = state_machine__5507__auto__);
(statearr_24852[1] = 1);
return statearr_24852;
});
var state_machine__5507__auto____1 = (function (state_24834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24834);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24853){if((e24853 instanceof Object))
{var ex__5510__auto__ = e24853;var statearr_24854_24867 = state_24834;(statearr_24854_24867[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24834);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24868 = state_24834;
state_24834 = G__24868;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24834);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24915){var state_val_24916 = (state_24915[1]);if((state_val_24916 === 7))
{var inst_24911 = (state_24915[2]);var state_24915__$1 = state_24915;var statearr_24917_24933 = state_24915__$1;(statearr_24917_24933[2] = inst_24911);
(statearr_24917_24933[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24916 === 6))
{var inst_24904 = (state_24915[7]);var inst_24901 = (state_24915[8]);var inst_24908 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24901,inst_24904) : f.call(null,inst_24901,inst_24904));var inst_24901__$1 = inst_24908;var state_24915__$1 = (function (){var statearr_24918 = state_24915;(statearr_24918[8] = inst_24901__$1);
return statearr_24918;
})();var statearr_24919_24934 = state_24915__$1;(statearr_24919_24934[2] = null);
(statearr_24919_24934[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24916 === 5))
{var inst_24901 = (state_24915[8]);var state_24915__$1 = state_24915;var statearr_24920_24935 = state_24915__$1;(statearr_24920_24935[2] = inst_24901);
(statearr_24920_24935[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24916 === 4))
{var inst_24904 = (state_24915[7]);var inst_24904__$1 = (state_24915[2]);var inst_24905 = (inst_24904__$1 == null);var state_24915__$1 = (function (){var statearr_24921 = state_24915;(statearr_24921[7] = inst_24904__$1);
return statearr_24921;
})();if(cljs.core.truth_(inst_24905))
{var statearr_24922_24936 = state_24915__$1;(statearr_24922_24936[1] = 5);
} else
{var statearr_24923_24937 = state_24915__$1;(statearr_24923_24937[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24916 === 3))
{var inst_24913 = (state_24915[2]);var state_24915__$1 = state_24915;return cljs.core.async.impl.ioc_helpers.return_chan(state_24915__$1,inst_24913);
} else
{if((state_val_24916 === 2))
{var state_24915__$1 = state_24915;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24915__$1,4,ch);
} else
{if((state_val_24916 === 1))
{var inst_24901 = init;var state_24915__$1 = (function (){var statearr_24924 = state_24915;(statearr_24924[8] = inst_24901);
return statearr_24924;
})();var statearr_24925_24938 = state_24915__$1;(statearr_24925_24938[2] = null);
(statearr_24925_24938[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24929 = [null,null,null,null,null,null,null,null,null];(statearr_24929[0] = state_machine__5507__auto__);
(statearr_24929[1] = 1);
return statearr_24929;
});
var state_machine__5507__auto____1 = (function (state_24915){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24915);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24930){if((e24930 instanceof Object))
{var ex__5510__auto__ = e24930;var statearr_24931_24939 = state_24915;(statearr_24931_24939[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24915);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24940 = state_24915;
state_24915 = G__24940;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24915){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24932 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24932;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25002){var state_val_25003 = (state_25002[1]);if((state_val_25003 === 1))
{var inst_24982 = cljs.core.seq(coll);var inst_24983 = inst_24982;var state_25002__$1 = (function (){var statearr_25004 = state_25002;(statearr_25004[7] = inst_24983);
return statearr_25004;
})();var statearr_25005_25023 = state_25002__$1;(statearr_25005_25023[2] = null);
(statearr_25005_25023[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25003 === 2))
{var inst_24983 = (state_25002[7]);var state_25002__$1 = state_25002;if(cljs.core.truth_(inst_24983))
{var statearr_25006_25024 = state_25002__$1;(statearr_25006_25024[1] = 4);
} else
{var statearr_25007_25025 = state_25002__$1;(statearr_25007_25025[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25003 === 3))
{var inst_25000 = (state_25002[2]);var state_25002__$1 = state_25002;return cljs.core.async.impl.ioc_helpers.return_chan(state_25002__$1,inst_25000);
} else
{if((state_val_25003 === 4))
{var inst_24983 = (state_25002[7]);var inst_24986 = cljs.core.first(inst_24983);var state_25002__$1 = state_25002;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25002__$1,7,ch,inst_24986);
} else
{if((state_val_25003 === 5))
{var state_25002__$1 = state_25002;if(cljs.core.truth_(close_QMARK_))
{var statearr_25008_25026 = state_25002__$1;(statearr_25008_25026[1] = 8);
} else
{var statearr_25009_25027 = state_25002__$1;(statearr_25009_25027[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25003 === 6))
{var inst_24998 = (state_25002[2]);var state_25002__$1 = state_25002;var statearr_25010_25028 = state_25002__$1;(statearr_25010_25028[2] = inst_24998);
(statearr_25010_25028[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25003 === 7))
{var inst_24983 = (state_25002[7]);var inst_24988 = (state_25002[2]);var inst_24989 = cljs.core.next(inst_24983);var inst_24983__$1 = inst_24989;var state_25002__$1 = (function (){var statearr_25011 = state_25002;(statearr_25011[8] = inst_24988);
(statearr_25011[7] = inst_24983__$1);
return statearr_25011;
})();var statearr_25012_25029 = state_25002__$1;(statearr_25012_25029[2] = null);
(statearr_25012_25029[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25003 === 8))
{var inst_24993 = cljs.core.async.close_BANG_(ch);var state_25002__$1 = state_25002;var statearr_25013_25030 = state_25002__$1;(statearr_25013_25030[2] = inst_24993);
(statearr_25013_25030[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25003 === 9))
{var state_25002__$1 = state_25002;var statearr_25014_25031 = state_25002__$1;(statearr_25014_25031[2] = null);
(statearr_25014_25031[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25003 === 10))
{var inst_24996 = (state_25002[2]);var state_25002__$1 = state_25002;var statearr_25015_25032 = state_25002__$1;(statearr_25015_25032[2] = inst_24996);
(statearr_25015_25032[1] = 6);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_25019 = [null,null,null,null,null,null,null,null,null];(statearr_25019[0] = state_machine__5507__auto__);
(statearr_25019[1] = 1);
return statearr_25019;
});
var state_machine__5507__auto____1 = (function (state_25002){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25002);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25020){if((e25020 instanceof Object))
{var ex__5510__auto__ = e25020;var statearr_25021_25033 = state_25002;(statearr_25021_25033[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25002);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25034 = state_25002;
state_25002 = G__25034;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25002){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25022 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_25022;
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
cljs.core.async.Mux = (function (){var obj25036 = {};return obj25036;
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
cljs.core.async.Mult = (function (){var obj25038 = {};return obj25038;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25262 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25262 = (function (cs,ch,mult,meta25263){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25263 = meta25263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25262.cljs$lang$type = true;
cljs.core.async.t25262.cljs$lang$ctorStr = "cljs.core.async/t25262";
cljs.core.async.t25262.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25262");
});})(cs))
;
cljs.core.async.t25262.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25262.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25262.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25262.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25262.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25264){var self__ = this;
var _25264__$1 = this;return self__.meta25263;
});})(cs))
;
cljs.core.async.t25262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25264,meta25263__$1){var self__ = this;
var _25264__$1 = this;return (new cljs.core.async.t25262(self__.cs,self__.ch,self__.mult,meta25263__$1));
});})(cs))
;
cljs.core.async.__GT_t25262 = ((function (cs){
return (function __GT_t25262(cs__$1,ch__$1,mult__$1,meta25263){return (new cljs.core.async.t25262(cs__$1,ch__$1,mult__$1,meta25263));
});})(cs))
;
}
return (new cljs.core.async.t25262(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25399){var state_val_25400 = (state_25399[1]);if((state_val_25400 === 32))
{var inst_25343 = (state_25399[7]);var inst_25267 = (state_25399[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25399,31,Object,null,30);var inst_25350 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25343,inst_25267,done);var state_25399__$1 = state_25399;var statearr_25401_25486 = state_25399__$1;(statearr_25401_25486[2] = inst_25350);
cljs.core.async.impl.ioc_helpers.process_exception(state_25399__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 1))
{var state_25399__$1 = state_25399;var statearr_25402_25487 = state_25399__$1;(statearr_25402_25487[2] = null);
(statearr_25402_25487[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 33))
{var inst_25356 = (state_25399[9]);var inst_25358 = cljs.core.chunked_seq_QMARK_(inst_25356);var state_25399__$1 = state_25399;if(inst_25358)
{var statearr_25403_25488 = state_25399__$1;(statearr_25403_25488[1] = 36);
} else
{var statearr_25404_25489 = state_25399__$1;(statearr_25404_25489[1] = 37);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 2))
{var state_25399__$1 = state_25399;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25399__$1,4,ch);
} else
{if((state_val_25400 === 34))
{var state_25399__$1 = state_25399;var statearr_25405_25490 = state_25399__$1;(statearr_25405_25490[2] = null);
(statearr_25405_25490[1] = 35);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 3))
{var inst_25397 = (state_25399[2]);var state_25399__$1 = state_25399;return cljs.core.async.impl.ioc_helpers.return_chan(state_25399__$1,inst_25397);
} else
{if((state_val_25400 === 35))
{var inst_25381 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25406_25491 = state_25399__$1;(statearr_25406_25491[2] = inst_25381);
(statearr_25406_25491[1] = 29);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 4))
{var inst_25267 = (state_25399[8]);var inst_25267__$1 = (state_25399[2]);var inst_25268 = (inst_25267__$1 == null);var state_25399__$1 = (function (){var statearr_25407 = state_25399;(statearr_25407[8] = inst_25267__$1);
return statearr_25407;
})();if(cljs.core.truth_(inst_25268))
{var statearr_25408_25492 = state_25399__$1;(statearr_25408_25492[1] = 5);
} else
{var statearr_25409_25493 = state_25399__$1;(statearr_25409_25493[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 36))
{var inst_25356 = (state_25399[9]);var inst_25360 = cljs.core.chunk_first(inst_25356);var inst_25361 = cljs.core.chunk_rest(inst_25356);var inst_25362 = cljs.core.count(inst_25360);var inst_25335 = inst_25361;var inst_25336 = inst_25360;var inst_25337 = inst_25362;var inst_25338 = 0;var state_25399__$1 = (function (){var statearr_25410 = state_25399;(statearr_25410[10] = inst_25338);
(statearr_25410[11] = inst_25337);
(statearr_25410[12] = inst_25336);
(statearr_25410[13] = inst_25335);
return statearr_25410;
})();var statearr_25411_25494 = state_25399__$1;(statearr_25411_25494[2] = null);
(statearr_25411_25494[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 5))
{var inst_25274 = cljs.core.deref(cs);var inst_25275 = cljs.core.seq(inst_25274);var inst_25276 = inst_25275;var inst_25277 = null;var inst_25278 = 0;var inst_25279 = 0;var state_25399__$1 = (function (){var statearr_25412 = state_25399;(statearr_25412[14] = inst_25277);
(statearr_25412[15] = inst_25278);
(statearr_25412[16] = inst_25276);
(statearr_25412[17] = inst_25279);
return statearr_25412;
})();var statearr_25413_25495 = state_25399__$1;(statearr_25413_25495[2] = null);
(statearr_25413_25495[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 37))
{var inst_25356 = (state_25399[9]);var inst_25365 = cljs.core.first(inst_25356);var state_25399__$1 = (function (){var statearr_25414 = state_25399;(statearr_25414[18] = inst_25365);
return statearr_25414;
})();var statearr_25415_25496 = state_25399__$1;(statearr_25415_25496[2] = null);
(statearr_25415_25496[1] = 41);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 6))
{var inst_25327 = (state_25399[19]);var inst_25326 = cljs.core.deref(cs);var inst_25327__$1 = cljs.core.keys(inst_25326);var inst_25328 = cljs.core.count(inst_25327__$1);var inst_25329 = cljs.core.reset_BANG_(dctr,inst_25328);var inst_25334 = cljs.core.seq(inst_25327__$1);var inst_25335 = inst_25334;var inst_25336 = null;var inst_25337 = 0;var inst_25338 = 0;var state_25399__$1 = (function (){var statearr_25416 = state_25399;(statearr_25416[10] = inst_25338);
(statearr_25416[19] = inst_25327__$1);
(statearr_25416[11] = inst_25337);
(statearr_25416[12] = inst_25336);
(statearr_25416[20] = inst_25329);
(statearr_25416[13] = inst_25335);
return statearr_25416;
})();var statearr_25417_25497 = state_25399__$1;(statearr_25417_25497[2] = null);
(statearr_25417_25497[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 38))
{var inst_25378 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25418_25498 = state_25399__$1;(statearr_25418_25498[2] = inst_25378);
(statearr_25418_25498[1] = 35);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 7))
{var inst_25395 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25419_25499 = state_25399__$1;(statearr_25419_25499[2] = inst_25395);
(statearr_25419_25499[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 39))
{var inst_25356 = (state_25399[9]);var inst_25374 = (state_25399[2]);var inst_25375 = cljs.core.next(inst_25356);var inst_25335 = inst_25375;var inst_25336 = null;var inst_25337 = 0;var inst_25338 = 0;var state_25399__$1 = (function (){var statearr_25420 = state_25399;(statearr_25420[21] = inst_25374);
(statearr_25420[10] = inst_25338);
(statearr_25420[11] = inst_25337);
(statearr_25420[12] = inst_25336);
(statearr_25420[13] = inst_25335);
return statearr_25420;
})();var statearr_25421_25500 = state_25399__$1;(statearr_25421_25500[2] = null);
(statearr_25421_25500[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 8))
{var inst_25278 = (state_25399[15]);var inst_25279 = (state_25399[17]);var inst_25281 = (inst_25279 < inst_25278);var inst_25282 = inst_25281;var state_25399__$1 = state_25399;if(cljs.core.truth_(inst_25282))
{var statearr_25422_25501 = state_25399__$1;(statearr_25422_25501[1] = 10);
} else
{var statearr_25423_25502 = state_25399__$1;(statearr_25423_25502[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 40))
{var inst_25365 = (state_25399[18]);var inst_25366 = (state_25399[2]);var inst_25367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25368 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25365);var state_25399__$1 = (function (){var statearr_25424 = state_25399;(statearr_25424[22] = inst_25367);
(statearr_25424[23] = inst_25366);
return statearr_25424;
})();var statearr_25425_25503 = state_25399__$1;(statearr_25425_25503[2] = inst_25368);
cljs.core.async.impl.ioc_helpers.process_exception(state_25399__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 9))
{var inst_25324 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25426_25504 = state_25399__$1;(statearr_25426_25504[2] = inst_25324);
(statearr_25426_25504[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 41))
{var inst_25267 = (state_25399[8]);var inst_25365 = (state_25399[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25399,40,Object,null,39);var inst_25372 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25365,inst_25267,done);var state_25399__$1 = state_25399;var statearr_25427_25505 = state_25399__$1;(statearr_25427_25505[2] = inst_25372);
cljs.core.async.impl.ioc_helpers.process_exception(state_25399__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 10))
{var inst_25277 = (state_25399[14]);var inst_25279 = (state_25399[17]);var inst_25285 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25277,inst_25279);var inst_25286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25285,0,null);var inst_25287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25285,1,null);var state_25399__$1 = (function (){var statearr_25428 = state_25399;(statearr_25428[24] = inst_25286);
return statearr_25428;
})();if(cljs.core.truth_(inst_25287))
{var statearr_25429_25506 = state_25399__$1;(statearr_25429_25506[1] = 13);
} else
{var statearr_25430_25507 = state_25399__$1;(statearr_25430_25507[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 42))
{var state_25399__$1 = state_25399;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25399__$1,45,dchan);
} else
{if((state_val_25400 === 11))
{var inst_25296 = (state_25399[25]);var inst_25276 = (state_25399[16]);var inst_25296__$1 = cljs.core.seq(inst_25276);var state_25399__$1 = (function (){var statearr_25431 = state_25399;(statearr_25431[25] = inst_25296__$1);
return statearr_25431;
})();if(inst_25296__$1)
{var statearr_25432_25508 = state_25399__$1;(statearr_25432_25508[1] = 16);
} else
{var statearr_25433_25509 = state_25399__$1;(statearr_25433_25509[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 43))
{var state_25399__$1 = state_25399;var statearr_25434_25510 = state_25399__$1;(statearr_25434_25510[2] = null);
(statearr_25434_25510[1] = 44);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 12))
{var inst_25322 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25435_25511 = state_25399__$1;(statearr_25435_25511[2] = inst_25322);
(statearr_25435_25511[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 44))
{var inst_25392 = (state_25399[2]);var state_25399__$1 = (function (){var statearr_25436 = state_25399;(statearr_25436[26] = inst_25392);
return statearr_25436;
})();var statearr_25437_25512 = state_25399__$1;(statearr_25437_25512[2] = null);
(statearr_25437_25512[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 13))
{var inst_25286 = (state_25399[24]);var inst_25289 = cljs.core.async.close_BANG_(inst_25286);var state_25399__$1 = state_25399;var statearr_25438_25513 = state_25399__$1;(statearr_25438_25513[2] = inst_25289);
(statearr_25438_25513[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 45))
{var inst_25389 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25442_25514 = state_25399__$1;(statearr_25442_25514[2] = inst_25389);
(statearr_25442_25514[1] = 44);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 14))
{var state_25399__$1 = state_25399;var statearr_25443_25515 = state_25399__$1;(statearr_25443_25515[2] = null);
(statearr_25443_25515[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 15))
{var inst_25277 = (state_25399[14]);var inst_25278 = (state_25399[15]);var inst_25276 = (state_25399[16]);var inst_25279 = (state_25399[17]);var inst_25292 = (state_25399[2]);var inst_25293 = (inst_25279 + 1);var tmp25439 = inst_25277;var tmp25440 = inst_25278;var tmp25441 = inst_25276;var inst_25276__$1 = tmp25441;var inst_25277__$1 = tmp25439;var inst_25278__$1 = tmp25440;var inst_25279__$1 = inst_25293;var state_25399__$1 = (function (){var statearr_25444 = state_25399;(statearr_25444[14] = inst_25277__$1);
(statearr_25444[15] = inst_25278__$1);
(statearr_25444[16] = inst_25276__$1);
(statearr_25444[27] = inst_25292);
(statearr_25444[17] = inst_25279__$1);
return statearr_25444;
})();var statearr_25445_25516 = state_25399__$1;(statearr_25445_25516[2] = null);
(statearr_25445_25516[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 16))
{var inst_25296 = (state_25399[25]);var inst_25298 = cljs.core.chunked_seq_QMARK_(inst_25296);var state_25399__$1 = state_25399;if(inst_25298)
{var statearr_25446_25517 = state_25399__$1;(statearr_25446_25517[1] = 19);
} else
{var statearr_25447_25518 = state_25399__$1;(statearr_25447_25518[1] = 20);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 17))
{var state_25399__$1 = state_25399;var statearr_25448_25519 = state_25399__$1;(statearr_25448_25519[2] = null);
(statearr_25448_25519[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 18))
{var inst_25320 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25449_25520 = state_25399__$1;(statearr_25449_25520[2] = inst_25320);
(statearr_25449_25520[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 19))
{var inst_25296 = (state_25399[25]);var inst_25300 = cljs.core.chunk_first(inst_25296);var inst_25301 = cljs.core.chunk_rest(inst_25296);var inst_25302 = cljs.core.count(inst_25300);var inst_25276 = inst_25301;var inst_25277 = inst_25300;var inst_25278 = inst_25302;var inst_25279 = 0;var state_25399__$1 = (function (){var statearr_25450 = state_25399;(statearr_25450[14] = inst_25277);
(statearr_25450[15] = inst_25278);
(statearr_25450[16] = inst_25276);
(statearr_25450[17] = inst_25279);
return statearr_25450;
})();var statearr_25451_25521 = state_25399__$1;(statearr_25451_25521[2] = null);
(statearr_25451_25521[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 20))
{var inst_25296 = (state_25399[25]);var inst_25306 = cljs.core.first(inst_25296);var inst_25307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25306,0,null);var inst_25308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25306,1,null);var state_25399__$1 = (function (){var statearr_25452 = state_25399;(statearr_25452[28] = inst_25307);
return statearr_25452;
})();if(cljs.core.truth_(inst_25308))
{var statearr_25453_25522 = state_25399__$1;(statearr_25453_25522[1] = 22);
} else
{var statearr_25454_25523 = state_25399__$1;(statearr_25454_25523[1] = 23);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 21))
{var inst_25317 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25455_25524 = state_25399__$1;(statearr_25455_25524[2] = inst_25317);
(statearr_25455_25524[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 22))
{var inst_25307 = (state_25399[28]);var inst_25310 = cljs.core.async.close_BANG_(inst_25307);var state_25399__$1 = state_25399;var statearr_25456_25525 = state_25399__$1;(statearr_25456_25525[2] = inst_25310);
(statearr_25456_25525[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 23))
{var state_25399__$1 = state_25399;var statearr_25457_25526 = state_25399__$1;(statearr_25457_25526[2] = null);
(statearr_25457_25526[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 24))
{var inst_25296 = (state_25399[25]);var inst_25313 = (state_25399[2]);var inst_25314 = cljs.core.next(inst_25296);var inst_25276 = inst_25314;var inst_25277 = null;var inst_25278 = 0;var inst_25279 = 0;var state_25399__$1 = (function (){var statearr_25458 = state_25399;(statearr_25458[14] = inst_25277);
(statearr_25458[15] = inst_25278);
(statearr_25458[16] = inst_25276);
(statearr_25458[29] = inst_25313);
(statearr_25458[17] = inst_25279);
return statearr_25458;
})();var statearr_25459_25527 = state_25399__$1;(statearr_25459_25527[2] = null);
(statearr_25459_25527[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 25))
{var inst_25338 = (state_25399[10]);var inst_25337 = (state_25399[11]);var inst_25340 = (inst_25338 < inst_25337);var inst_25341 = inst_25340;var state_25399__$1 = state_25399;if(cljs.core.truth_(inst_25341))
{var statearr_25460_25528 = state_25399__$1;(statearr_25460_25528[1] = 27);
} else
{var statearr_25461_25529 = state_25399__$1;(statearr_25461_25529[1] = 28);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 26))
{var inst_25327 = (state_25399[19]);var inst_25385 = (state_25399[2]);var inst_25386 = cljs.core.seq(inst_25327);var state_25399__$1 = (function (){var statearr_25462 = state_25399;(statearr_25462[30] = inst_25385);
return statearr_25462;
})();if(inst_25386)
{var statearr_25463_25530 = state_25399__$1;(statearr_25463_25530[1] = 42);
} else
{var statearr_25464_25531 = state_25399__$1;(statearr_25464_25531[1] = 43);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 27))
{var inst_25338 = (state_25399[10]);var inst_25336 = (state_25399[12]);var inst_25343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25336,inst_25338);var state_25399__$1 = (function (){var statearr_25465 = state_25399;(statearr_25465[7] = inst_25343);
return statearr_25465;
})();var statearr_25466_25532 = state_25399__$1;(statearr_25466_25532[2] = null);
(statearr_25466_25532[1] = 32);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 28))
{var inst_25335 = (state_25399[13]);var inst_25356 = (state_25399[9]);var inst_25356__$1 = cljs.core.seq(inst_25335);var state_25399__$1 = (function (){var statearr_25470 = state_25399;(statearr_25470[9] = inst_25356__$1);
return statearr_25470;
})();if(inst_25356__$1)
{var statearr_25471_25533 = state_25399__$1;(statearr_25471_25533[1] = 33);
} else
{var statearr_25472_25534 = state_25399__$1;(statearr_25472_25534[1] = 34);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 29))
{var inst_25383 = (state_25399[2]);var state_25399__$1 = state_25399;var statearr_25473_25535 = state_25399__$1;(statearr_25473_25535[2] = inst_25383);
(statearr_25473_25535[1] = 26);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 30))
{var inst_25338 = (state_25399[10]);var inst_25337 = (state_25399[11]);var inst_25336 = (state_25399[12]);var inst_25335 = (state_25399[13]);var inst_25352 = (state_25399[2]);var inst_25353 = (inst_25338 + 1);var tmp25467 = inst_25337;var tmp25468 = inst_25336;var tmp25469 = inst_25335;var inst_25335__$1 = tmp25469;var inst_25336__$1 = tmp25468;var inst_25337__$1 = tmp25467;var inst_25338__$1 = inst_25353;var state_25399__$1 = (function (){var statearr_25474 = state_25399;(statearr_25474[10] = inst_25338__$1);
(statearr_25474[11] = inst_25337__$1);
(statearr_25474[12] = inst_25336__$1);
(statearr_25474[13] = inst_25335__$1);
(statearr_25474[31] = inst_25352);
return statearr_25474;
})();var statearr_25475_25536 = state_25399__$1;(statearr_25475_25536[2] = null);
(statearr_25475_25536[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25400 === 31))
{var inst_25343 = (state_25399[7]);var inst_25344 = (state_25399[2]);var inst_25345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25346 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25343);var state_25399__$1 = (function (){var statearr_25476 = state_25399;(statearr_25476[32] = inst_25345);
(statearr_25476[33] = inst_25344);
return statearr_25476;
})();var statearr_25477_25537 = state_25399__$1;(statearr_25477_25537[2] = inst_25346);
cljs.core.async.impl.ioc_helpers.process_exception(state_25399__$1);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_25481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25481[0] = state_machine__5507__auto__);
(statearr_25481[1] = 1);
return statearr_25481;
});
var state_machine__5507__auto____1 = (function (state_25399){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25399);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25482){if((e25482 instanceof Object))
{var ex__5510__auto__ = e25482;var statearr_25483_25538 = state_25399;(statearr_25483_25538[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25399);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25539 = state_25399;
state_25399 = G__25539;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25399){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25484 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25485);
return statearr_25484;
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
cljs.core.async.Mix = (function (){var obj25541 = {};return obj25541;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,null,cljs.core.constant$keyword$256,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$257);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$256);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$257,chs);var pauses = pick(cljs.core.constant$keyword$255,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$258,solos,cljs.core.constant$keyword$259,pick(cljs.core.constant$keyword$256,chs),cljs.core.constant$keyword$260,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$255)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25651 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25652){
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
this.meta25652 = meta25652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25651.cljs$lang$type = true;
cljs.core.async.t25651.cljs$lang$ctorStr = "cljs.core.async/t25651";
cljs.core.async.t25651.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25651");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25651.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25653){var self__ = this;
var _25653__$1 = this;return self__.meta25652;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25653,meta25652__$1){var self__ = this;
var _25653__$1 = this;return (new cljs.core.async.t25651(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25652__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25651 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25651(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25652){return (new cljs.core.async.t25651(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25652));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25651(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25718){var state_val_25719 = (state_25718[1]);if((state_val_25719 === 1))
{var inst_25657 = (state_25718[7]);var inst_25657__$1 = calc_state();var inst_25658 = cljs.core.seq_QMARK_(inst_25657__$1);var state_25718__$1 = (function (){var statearr_25720 = state_25718;(statearr_25720[7] = inst_25657__$1);
return statearr_25720;
})();if(inst_25658)
{var statearr_25721_25761 = state_25718__$1;(statearr_25721_25761[1] = 2);
} else
{var statearr_25722_25762 = state_25718__$1;(statearr_25722_25762[1] = 3);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 2))
{var inst_25657 = (state_25718[7]);var inst_25660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25657);var state_25718__$1 = state_25718;var statearr_25723_25763 = state_25718__$1;(statearr_25723_25763[2] = inst_25660);
(statearr_25723_25763[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 3))
{var inst_25657 = (state_25718[7]);var state_25718__$1 = state_25718;var statearr_25724_25764 = state_25718__$1;(statearr_25724_25764[2] = inst_25657);
(statearr_25724_25764[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 4))
{var inst_25657 = (state_25718[7]);var inst_25663 = (state_25718[2]);var inst_25664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25663,cljs.core.constant$keyword$260);var inst_25665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25663,cljs.core.constant$keyword$259);var inst_25666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25663,cljs.core.constant$keyword$258);var inst_25667 = inst_25657;var state_25718__$1 = (function (){var statearr_25725 = state_25718;(statearr_25725[8] = inst_25667);
(statearr_25725[9] = inst_25666);
(statearr_25725[10] = inst_25665);
(statearr_25725[11] = inst_25664);
return statearr_25725;
})();var statearr_25726_25765 = state_25718__$1;(statearr_25726_25765[2] = null);
(statearr_25726_25765[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 5))
{var inst_25667 = (state_25718[8]);var inst_25670 = cljs.core.seq_QMARK_(inst_25667);var state_25718__$1 = state_25718;if(inst_25670)
{var statearr_25727_25766 = state_25718__$1;(statearr_25727_25766[1] = 7);
} else
{var statearr_25728_25767 = state_25718__$1;(statearr_25728_25767[1] = 8);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 6))
{var inst_25716 = (state_25718[2]);var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.return_chan(state_25718__$1,inst_25716);
} else
{if((state_val_25719 === 7))
{var inst_25667 = (state_25718[8]);var inst_25672 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25667);var state_25718__$1 = state_25718;var statearr_25729_25768 = state_25718__$1;(statearr_25729_25768[2] = inst_25672);
(statearr_25729_25768[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 8))
{var inst_25667 = (state_25718[8]);var state_25718__$1 = state_25718;var statearr_25730_25769 = state_25718__$1;(statearr_25730_25769[2] = inst_25667);
(statearr_25730_25769[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 9))
{var inst_25675 = (state_25718[12]);var inst_25675__$1 = (state_25718[2]);var inst_25676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25675__$1,cljs.core.constant$keyword$260);var inst_25677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25675__$1,cljs.core.constant$keyword$259);var inst_25678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25675__$1,cljs.core.constant$keyword$258);var state_25718__$1 = (function (){var statearr_25731 = state_25718;(statearr_25731[13] = inst_25678);
(statearr_25731[14] = inst_25677);
(statearr_25731[12] = inst_25675__$1);
return statearr_25731;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25718__$1,10,inst_25676);
} else
{if((state_val_25719 === 10))
{var inst_25682 = (state_25718[15]);var inst_25683 = (state_25718[16]);var inst_25681 = (state_25718[2]);var inst_25682__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25681,0,null);var inst_25683__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25681,1,null);var inst_25684 = (inst_25682__$1 == null);var inst_25685 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25683__$1,change);var inst_25686 = (inst_25684) || (inst_25685);var state_25718__$1 = (function (){var statearr_25732 = state_25718;(statearr_25732[15] = inst_25682__$1);
(statearr_25732[16] = inst_25683__$1);
return statearr_25732;
})();if(cljs.core.truth_(inst_25686))
{var statearr_25733_25770 = state_25718__$1;(statearr_25733_25770[1] = 11);
} else
{var statearr_25734_25771 = state_25718__$1;(statearr_25734_25771[1] = 12);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 11))
{var inst_25682 = (state_25718[15]);var inst_25688 = (inst_25682 == null);var state_25718__$1 = state_25718;if(cljs.core.truth_(inst_25688))
{var statearr_25735_25772 = state_25718__$1;(statearr_25735_25772[1] = 14);
} else
{var statearr_25736_25773 = state_25718__$1;(statearr_25736_25773[1] = 15);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 12))
{var inst_25697 = (state_25718[17]);var inst_25683 = (state_25718[16]);var inst_25678 = (state_25718[13]);var inst_25697__$1 = (inst_25678.cljs$core$IFn$_invoke$arity$1 ? inst_25678.cljs$core$IFn$_invoke$arity$1(inst_25683) : inst_25678.call(null,inst_25683));var state_25718__$1 = (function (){var statearr_25737 = state_25718;(statearr_25737[17] = inst_25697__$1);
return statearr_25737;
})();if(cljs.core.truth_(inst_25697__$1))
{var statearr_25738_25774 = state_25718__$1;(statearr_25738_25774[1] = 17);
} else
{var statearr_25739_25775 = state_25718__$1;(statearr_25739_25775[1] = 18);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 13))
{var inst_25714 = (state_25718[2]);var state_25718__$1 = state_25718;var statearr_25740_25776 = state_25718__$1;(statearr_25740_25776[2] = inst_25714);
(statearr_25740_25776[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 14))
{var inst_25683 = (state_25718[16]);var inst_25690 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25683);var state_25718__$1 = state_25718;var statearr_25741_25777 = state_25718__$1;(statearr_25741_25777[2] = inst_25690);
(statearr_25741_25777[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 15))
{var state_25718__$1 = state_25718;var statearr_25742_25778 = state_25718__$1;(statearr_25742_25778[2] = null);
(statearr_25742_25778[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 16))
{var inst_25693 = (state_25718[2]);var inst_25694 = calc_state();var inst_25667 = inst_25694;var state_25718__$1 = (function (){var statearr_25743 = state_25718;(statearr_25743[18] = inst_25693);
(statearr_25743[8] = inst_25667);
return statearr_25743;
})();var statearr_25744_25779 = state_25718__$1;(statearr_25744_25779[2] = null);
(statearr_25744_25779[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 17))
{var inst_25697 = (state_25718[17]);var state_25718__$1 = state_25718;var statearr_25745_25780 = state_25718__$1;(statearr_25745_25780[2] = inst_25697);
(statearr_25745_25780[1] = 19);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 18))
{var inst_25683 = (state_25718[16]);var inst_25678 = (state_25718[13]);var inst_25677 = (state_25718[14]);var inst_25700 = cljs.core.empty_QMARK_(inst_25678);var inst_25701 = (inst_25677.cljs$core$IFn$_invoke$arity$1 ? inst_25677.cljs$core$IFn$_invoke$arity$1(inst_25683) : inst_25677.call(null,inst_25683));var inst_25702 = cljs.core.not(inst_25701);var inst_25703 = (inst_25700) && (inst_25702);var state_25718__$1 = state_25718;var statearr_25746_25781 = state_25718__$1;(statearr_25746_25781[2] = inst_25703);
(statearr_25746_25781[1] = 19);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 19))
{var inst_25705 = (state_25718[2]);var state_25718__$1 = state_25718;if(cljs.core.truth_(inst_25705))
{var statearr_25747_25782 = state_25718__$1;(statearr_25747_25782[1] = 20);
} else
{var statearr_25748_25783 = state_25718__$1;(statearr_25748_25783[1] = 21);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 20))
{var inst_25682 = (state_25718[15]);var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25718__$1,23,out,inst_25682);
} else
{if((state_val_25719 === 21))
{var state_25718__$1 = state_25718;var statearr_25749_25784 = state_25718__$1;(statearr_25749_25784[2] = null);
(statearr_25749_25784[1] = 22);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 22))
{var inst_25675 = (state_25718[12]);var inst_25711 = (state_25718[2]);var inst_25667 = inst_25675;var state_25718__$1 = (function (){var statearr_25750 = state_25718;(statearr_25750[8] = inst_25667);
(statearr_25750[19] = inst_25711);
return statearr_25750;
})();var statearr_25751_25785 = state_25718__$1;(statearr_25751_25785[2] = null);
(statearr_25751_25785[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25719 === 23))
{var inst_25708 = (state_25718[2]);var state_25718__$1 = state_25718;var statearr_25752_25786 = state_25718__$1;(statearr_25752_25786[2] = inst_25708);
(statearr_25752_25786[1] = 22);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_25756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25756[0] = state_machine__5507__auto__);
(statearr_25756[1] = 1);
return statearr_25756;
});
var state_machine__5507__auto____1 = (function (state_25718){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25718);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25757){if((e25757 instanceof Object))
{var ex__5510__auto__ = e25757;var statearr_25758_25787 = state_25718;(statearr_25758_25787[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25718);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25788 = state_25718;
state_25718 = G__25788;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25718){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25759 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25760);
return statearr_25759;
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
cljs.core.async.Pub = (function (){var obj25790 = {};return obj25790;
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
return (function (p1__25791_SHARP_){if(cljs.core.truth_((p1__25791_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25791_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25791_SHARP_.call(null,topic))))
{return p1__25791_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25791_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25916 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25917){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25917 = meta25917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25916.cljs$lang$type = true;
cljs.core.async.t25916.cljs$lang$ctorStr = "cljs.core.async/t25916";
cljs.core.async.t25916.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25916");
});})(mults,ensure_mult))
;
cljs.core.async.t25916.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25916.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25916.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25916.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25918){var self__ = this;
var _25918__$1 = this;return self__.meta25917;
});})(mults,ensure_mult))
;
cljs.core.async.t25916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25918,meta25917__$1){var self__ = this;
var _25918__$1 = this;return (new cljs.core.async.t25916(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25917__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25916 = ((function (mults,ensure_mult){
return (function __GT_t25916(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25917){return (new cljs.core.async.t25916(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25917));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25916(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___26040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25992){var state_val_25993 = (state_25992[1]);if((state_val_25993 === 1))
{var state_25992__$1 = state_25992;var statearr_25994_26041 = state_25992__$1;(statearr_25994_26041[2] = null);
(statearr_25994_26041[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 2))
{var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25992__$1,4,ch);
} else
{if((state_val_25993 === 3))
{var inst_25990 = (state_25992[2]);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.return_chan(state_25992__$1,inst_25990);
} else
{if((state_val_25993 === 4))
{var inst_25921 = (state_25992[7]);var inst_25921__$1 = (state_25992[2]);var inst_25922 = (inst_25921__$1 == null);var state_25992__$1 = (function (){var statearr_25995 = state_25992;(statearr_25995[7] = inst_25921__$1);
return statearr_25995;
})();if(cljs.core.truth_(inst_25922))
{var statearr_25996_26042 = state_25992__$1;(statearr_25996_26042[1] = 5);
} else
{var statearr_25997_26043 = state_25992__$1;(statearr_25997_26043[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 5))
{var inst_25928 = cljs.core.deref(mults);var inst_25929 = cljs.core.vals(inst_25928);var inst_25930 = cljs.core.seq(inst_25929);var inst_25931 = inst_25930;var inst_25932 = null;var inst_25933 = 0;var inst_25934 = 0;var state_25992__$1 = (function (){var statearr_25998 = state_25992;(statearr_25998[8] = inst_25932);
(statearr_25998[9] = inst_25933);
(statearr_25998[10] = inst_25934);
(statearr_25998[11] = inst_25931);
return statearr_25998;
})();var statearr_25999_26044 = state_25992__$1;(statearr_25999_26044[2] = null);
(statearr_25999_26044[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 6))
{var inst_25971 = (state_25992[12]);var inst_25921 = (state_25992[7]);var inst_25969 = (state_25992[13]);var inst_25969__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25921) : topic_fn.call(null,inst_25921));var inst_25970 = cljs.core.deref(mults);var inst_25971__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25970,inst_25969__$1);var state_25992__$1 = (function (){var statearr_26000 = state_25992;(statearr_26000[12] = inst_25971__$1);
(statearr_26000[13] = inst_25969__$1);
return statearr_26000;
})();if(cljs.core.truth_(inst_25971__$1))
{var statearr_26001_26045 = state_25992__$1;(statearr_26001_26045[1] = 19);
} else
{var statearr_26002_26046 = state_25992__$1;(statearr_26002_26046[1] = 20);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 7))
{var inst_25988 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_26003_26047 = state_25992__$1;(statearr_26003_26047[2] = inst_25988);
(statearr_26003_26047[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 8))
{var inst_25933 = (state_25992[9]);var inst_25934 = (state_25992[10]);var inst_25936 = (inst_25934 < inst_25933);var inst_25937 = inst_25936;var state_25992__$1 = state_25992;if(cljs.core.truth_(inst_25937))
{var statearr_26007_26048 = state_25992__$1;(statearr_26007_26048[1] = 10);
} else
{var statearr_26008_26049 = state_25992__$1;(statearr_26008_26049[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 9))
{var inst_25967 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_26009_26050 = state_25992__$1;(statearr_26009_26050[2] = inst_25967);
(statearr_26009_26050[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 10))
{var inst_25932 = (state_25992[8]);var inst_25933 = (state_25992[9]);var inst_25934 = (state_25992[10]);var inst_25931 = (state_25992[11]);var inst_25939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25932,inst_25934);var inst_25940 = cljs.core.async.muxch_STAR_(inst_25939);var inst_25941 = cljs.core.async.close_BANG_(inst_25940);var inst_25942 = (inst_25934 + 1);var tmp26004 = inst_25932;var tmp26005 = inst_25933;var tmp26006 = inst_25931;var inst_25931__$1 = tmp26006;var inst_25932__$1 = tmp26004;var inst_25933__$1 = tmp26005;var inst_25934__$1 = inst_25942;var state_25992__$1 = (function (){var statearr_26010 = state_25992;(statearr_26010[8] = inst_25932__$1);
(statearr_26010[9] = inst_25933__$1);
(statearr_26010[14] = inst_25941);
(statearr_26010[10] = inst_25934__$1);
(statearr_26010[11] = inst_25931__$1);
return statearr_26010;
})();var statearr_26011_26051 = state_25992__$1;(statearr_26011_26051[2] = null);
(statearr_26011_26051[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 11))
{var inst_25931 = (state_25992[11]);var inst_25945 = (state_25992[15]);var inst_25945__$1 = cljs.core.seq(inst_25931);var state_25992__$1 = (function (){var statearr_26012 = state_25992;(statearr_26012[15] = inst_25945__$1);
return statearr_26012;
})();if(inst_25945__$1)
{var statearr_26013_26052 = state_25992__$1;(statearr_26013_26052[1] = 13);
} else
{var statearr_26014_26053 = state_25992__$1;(statearr_26014_26053[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 12))
{var inst_25965 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_26015_26054 = state_25992__$1;(statearr_26015_26054[2] = inst_25965);
(statearr_26015_26054[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 13))
{var inst_25945 = (state_25992[15]);var inst_25947 = cljs.core.chunked_seq_QMARK_(inst_25945);var state_25992__$1 = state_25992;if(inst_25947)
{var statearr_26016_26055 = state_25992__$1;(statearr_26016_26055[1] = 16);
} else
{var statearr_26017_26056 = state_25992__$1;(statearr_26017_26056[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 14))
{var state_25992__$1 = state_25992;var statearr_26018_26057 = state_25992__$1;(statearr_26018_26057[2] = null);
(statearr_26018_26057[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 15))
{var inst_25963 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_26019_26058 = state_25992__$1;(statearr_26019_26058[2] = inst_25963);
(statearr_26019_26058[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 16))
{var inst_25945 = (state_25992[15]);var inst_25949 = cljs.core.chunk_first(inst_25945);var inst_25950 = cljs.core.chunk_rest(inst_25945);var inst_25951 = cljs.core.count(inst_25949);var inst_25931 = inst_25950;var inst_25932 = inst_25949;var inst_25933 = inst_25951;var inst_25934 = 0;var state_25992__$1 = (function (){var statearr_26020 = state_25992;(statearr_26020[8] = inst_25932);
(statearr_26020[9] = inst_25933);
(statearr_26020[10] = inst_25934);
(statearr_26020[11] = inst_25931);
return statearr_26020;
})();var statearr_26021_26059 = state_25992__$1;(statearr_26021_26059[2] = null);
(statearr_26021_26059[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 17))
{var inst_25945 = (state_25992[15]);var inst_25954 = cljs.core.first(inst_25945);var inst_25955 = cljs.core.async.muxch_STAR_(inst_25954);var inst_25956 = cljs.core.async.close_BANG_(inst_25955);var inst_25957 = cljs.core.next(inst_25945);var inst_25931 = inst_25957;var inst_25932 = null;var inst_25933 = 0;var inst_25934 = 0;var state_25992__$1 = (function (){var statearr_26022 = state_25992;(statearr_26022[8] = inst_25932);
(statearr_26022[9] = inst_25933);
(statearr_26022[10] = inst_25934);
(statearr_26022[11] = inst_25931);
(statearr_26022[16] = inst_25956);
return statearr_26022;
})();var statearr_26023_26060 = state_25992__$1;(statearr_26023_26060[2] = null);
(statearr_26023_26060[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 18))
{var inst_25960 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_26024_26061 = state_25992__$1;(statearr_26024_26061[2] = inst_25960);
(statearr_26024_26061[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 19))
{var state_25992__$1 = state_25992;var statearr_26025_26062 = state_25992__$1;(statearr_26025_26062[2] = null);
(statearr_26025_26062[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 20))
{var state_25992__$1 = state_25992;var statearr_26026_26063 = state_25992__$1;(statearr_26026_26063[2] = null);
(statearr_26026_26063[1] = 21);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 21))
{var inst_25985 = (state_25992[2]);var state_25992__$1 = (function (){var statearr_26027 = state_25992;(statearr_26027[17] = inst_25985);
return statearr_26027;
})();var statearr_26028_26064 = state_25992__$1;(statearr_26028_26064[2] = null);
(statearr_26028_26064[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 22))
{var inst_25982 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_26029_26065 = state_25992__$1;(statearr_26029_26065[2] = inst_25982);
(statearr_26029_26065[1] = 21);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 23))
{var inst_25969 = (state_25992[13]);var inst_25973 = (state_25992[2]);var inst_25974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25969);var state_25992__$1 = (function (){var statearr_26030 = state_25992;(statearr_26030[18] = inst_25973);
return statearr_26030;
})();var statearr_26031_26066 = state_25992__$1;(statearr_26031_26066[2] = inst_25974);
cljs.core.async.impl.ioc_helpers.process_exception(state_25992__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25993 === 24))
{var inst_25971 = (state_25992[12]);var inst_25921 = (state_25992[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25992,23,Object,null,22);var inst_25978 = cljs.core.async.muxch_STAR_(inst_25971);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25992__$1,25,inst_25978,inst_25921);
} else
{if((state_val_25993 === 25))
{var inst_25980 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_26032_26067 = state_25992__$1;(statearr_26032_26067[2] = inst_25980);
cljs.core.async.impl.ioc_helpers.process_exception(state_25992__$1);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26036[0] = state_machine__5507__auto__);
(statearr_26036[1] = 1);
return statearr_26036;
});
var state_machine__5507__auto____1 = (function (state_25992){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25992);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26037){if((e26037 instanceof Object))
{var ex__5510__auto__ = e26037;var statearr_26038_26068 = state_25992;(statearr_26038_26068[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25992);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26069 = state_25992;
state_25992 = G__26069;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25992){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26039 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26040);
return statearr_26039;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26176){var state_val_26177 = (state_26176[1]);if((state_val_26177 === 1))
{var state_26176__$1 = state_26176;var statearr_26178_26207 = state_26176__$1;(statearr_26178_26207[2] = null);
(statearr_26178_26207[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 2))
{var inst_26139 = cljs.core.reset_BANG_(dctr,cnt);var inst_26140 = 0;var state_26176__$1 = (function (){var statearr_26179 = state_26176;(statearr_26179[7] = inst_26140);
(statearr_26179[8] = inst_26139);
return statearr_26179;
})();var statearr_26180_26208 = state_26176__$1;(statearr_26180_26208[2] = null);
(statearr_26180_26208[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 3))
{var inst_26174 = (state_26176[2]);var state_26176__$1 = state_26176;return cljs.core.async.impl.ioc_helpers.return_chan(state_26176__$1,inst_26174);
} else
{if((state_val_26177 === 4))
{var inst_26140 = (state_26176[7]);var inst_26142 = (inst_26140 < cnt);var state_26176__$1 = state_26176;if(cljs.core.truth_(inst_26142))
{var statearr_26181_26209 = state_26176__$1;(statearr_26181_26209[1] = 6);
} else
{var statearr_26182_26210 = state_26176__$1;(statearr_26182_26210[1] = 7);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 5))
{var inst_26160 = (state_26176[2]);var state_26176__$1 = (function (){var statearr_26183 = state_26176;(statearr_26183[9] = inst_26160);
return statearr_26183;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26176__$1,12,dchan);
} else
{if((state_val_26177 === 6))
{var state_26176__$1 = state_26176;var statearr_26184_26211 = state_26176__$1;(statearr_26184_26211[2] = null);
(statearr_26184_26211[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 7))
{var state_26176__$1 = state_26176;var statearr_26185_26212 = state_26176__$1;(statearr_26185_26212[2] = null);
(statearr_26185_26212[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 8))
{var inst_26158 = (state_26176[2]);var state_26176__$1 = state_26176;var statearr_26186_26213 = state_26176__$1;(statearr_26186_26213[2] = inst_26158);
(statearr_26186_26213[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 9))
{var inst_26140 = (state_26176[7]);var inst_26153 = (state_26176[2]);var inst_26154 = (inst_26140 + 1);var inst_26140__$1 = inst_26154;var state_26176__$1 = (function (){var statearr_26187 = state_26176;(statearr_26187[7] = inst_26140__$1);
(statearr_26187[10] = inst_26153);
return statearr_26187;
})();var statearr_26188_26214 = state_26176__$1;(statearr_26188_26214[2] = null);
(statearr_26188_26214[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 10))
{var inst_26144 = (state_26176[2]);var inst_26145 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26176__$1 = (function (){var statearr_26189 = state_26176;(statearr_26189[11] = inst_26144);
return statearr_26189;
})();var statearr_26190_26215 = state_26176__$1;(statearr_26190_26215[2] = inst_26145);
cljs.core.async.impl.ioc_helpers.process_exception(state_26176__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 11))
{var inst_26140 = (state_26176[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26176,10,Object,null,9);var inst_26149 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26140) : chs__$1.call(null,inst_26140));var inst_26150 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26140) : done.call(null,inst_26140));var inst_26151 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26149,inst_26150);var state_26176__$1 = state_26176;var statearr_26191_26216 = state_26176__$1;(statearr_26191_26216[2] = inst_26151);
cljs.core.async.impl.ioc_helpers.process_exception(state_26176__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 12))
{var inst_26162 = (state_26176[12]);var inst_26162__$1 = (state_26176[2]);var inst_26163 = cljs.core.some(cljs.core.nil_QMARK_,inst_26162__$1);var state_26176__$1 = (function (){var statearr_26192 = state_26176;(statearr_26192[12] = inst_26162__$1);
return statearr_26192;
})();if(cljs.core.truth_(inst_26163))
{var statearr_26193_26217 = state_26176__$1;(statearr_26193_26217[1] = 13);
} else
{var statearr_26194_26218 = state_26176__$1;(statearr_26194_26218[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 13))
{var inst_26165 = cljs.core.async.close_BANG_(out);var state_26176__$1 = state_26176;var statearr_26195_26219 = state_26176__$1;(statearr_26195_26219[2] = inst_26165);
(statearr_26195_26219[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 14))
{var inst_26162 = (state_26176[12]);var inst_26167 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26162);var state_26176__$1 = state_26176;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26176__$1,16,out,inst_26167);
} else
{if((state_val_26177 === 15))
{var inst_26172 = (state_26176[2]);var state_26176__$1 = state_26176;var statearr_26196_26220 = state_26176__$1;(statearr_26196_26220[2] = inst_26172);
(statearr_26196_26220[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26177 === 16))
{var inst_26169 = (state_26176[2]);var state_26176__$1 = (function (){var statearr_26197 = state_26176;(statearr_26197[13] = inst_26169);
return statearr_26197;
})();var statearr_26198_26221 = state_26176__$1;(statearr_26198_26221[2] = null);
(statearr_26198_26221[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26202[0] = state_machine__5507__auto__);
(statearr_26202[1] = 1);
return statearr_26202;
});
var state_machine__5507__auto____1 = (function (state_26176){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26176);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26203){if((e26203 instanceof Object))
{var ex__5510__auto__ = e26203;var statearr_26204_26222 = state_26176;(statearr_26204_26222[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26176);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26223 = state_26176;
state_26176 = G__26223;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26176){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26205 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26206);
return statearr_26205;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26307){var state_val_26308 = (state_26307[1]);if((state_val_26308 === 1))
{var inst_26278 = cljs.core.vec(chs);var inst_26279 = inst_26278;var state_26307__$1 = (function (){var statearr_26309 = state_26307;(statearr_26309[7] = inst_26279);
return statearr_26309;
})();var statearr_26310_26332 = state_26307__$1;(statearr_26310_26332[2] = null);
(statearr_26310_26332[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26308 === 2))
{var inst_26279 = (state_26307[7]);var inst_26281 = cljs.core.count(inst_26279);var inst_26282 = (inst_26281 > 0);var state_26307__$1 = state_26307;if(cljs.core.truth_(inst_26282))
{var statearr_26311_26333 = state_26307__$1;(statearr_26311_26333[1] = 4);
} else
{var statearr_26312_26334 = state_26307__$1;(statearr_26312_26334[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26308 === 3))
{var inst_26305 = (state_26307[2]);var state_26307__$1 = state_26307;return cljs.core.async.impl.ioc_helpers.return_chan(state_26307__$1,inst_26305);
} else
{if((state_val_26308 === 4))
{var inst_26279 = (state_26307[7]);var state_26307__$1 = state_26307;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26307__$1,7,inst_26279);
} else
{if((state_val_26308 === 5))
{var inst_26301 = cljs.core.async.close_BANG_(out);var state_26307__$1 = state_26307;var statearr_26313_26335 = state_26307__$1;(statearr_26313_26335[2] = inst_26301);
(statearr_26313_26335[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26308 === 6))
{var inst_26303 = (state_26307[2]);var state_26307__$1 = state_26307;var statearr_26314_26336 = state_26307__$1;(statearr_26314_26336[2] = inst_26303);
(statearr_26314_26336[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26308 === 7))
{var inst_26287 = (state_26307[8]);var inst_26286 = (state_26307[9]);var inst_26286__$1 = (state_26307[2]);var inst_26287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26286__$1,0,null);var inst_26288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26286__$1,1,null);var inst_26289 = (inst_26287__$1 == null);var state_26307__$1 = (function (){var statearr_26315 = state_26307;(statearr_26315[8] = inst_26287__$1);
(statearr_26315[10] = inst_26288);
(statearr_26315[9] = inst_26286__$1);
return statearr_26315;
})();if(cljs.core.truth_(inst_26289))
{var statearr_26316_26337 = state_26307__$1;(statearr_26316_26337[1] = 8);
} else
{var statearr_26317_26338 = state_26307__$1;(statearr_26317_26338[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26308 === 8))
{var inst_26279 = (state_26307[7]);var inst_26287 = (state_26307[8]);var inst_26288 = (state_26307[10]);var inst_26286 = (state_26307[9]);var inst_26291 = (function (){var c = inst_26288;var v = inst_26287;var vec__26284 = inst_26286;var cs = inst_26279;return ((function (c,v,vec__26284,cs,inst_26279,inst_26287,inst_26288,inst_26286,state_val_26308){
return (function (p1__26224_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26224_SHARP_);
});
;})(c,v,vec__26284,cs,inst_26279,inst_26287,inst_26288,inst_26286,state_val_26308))
})();var inst_26292 = cljs.core.filterv(inst_26291,inst_26279);var inst_26279__$1 = inst_26292;var state_26307__$1 = (function (){var statearr_26318 = state_26307;(statearr_26318[7] = inst_26279__$1);
return statearr_26318;
})();var statearr_26319_26339 = state_26307__$1;(statearr_26319_26339[2] = null);
(statearr_26319_26339[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26308 === 9))
{var inst_26287 = (state_26307[8]);var state_26307__$1 = state_26307;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26307__$1,11,out,inst_26287);
} else
{if((state_val_26308 === 10))
{var inst_26299 = (state_26307[2]);var state_26307__$1 = state_26307;var statearr_26321_26340 = state_26307__$1;(statearr_26321_26340[2] = inst_26299);
(statearr_26321_26340[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26308 === 11))
{var inst_26279 = (state_26307[7]);var inst_26296 = (state_26307[2]);var tmp26320 = inst_26279;var inst_26279__$1 = tmp26320;var state_26307__$1 = (function (){var statearr_26322 = state_26307;(statearr_26322[7] = inst_26279__$1);
(statearr_26322[11] = inst_26296);
return statearr_26322;
})();var statearr_26323_26341 = state_26307__$1;(statearr_26323_26341[2] = null);
(statearr_26323_26341[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26327 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26327[0] = state_machine__5507__auto__);
(statearr_26327[1] = 1);
return statearr_26327;
});
var state_machine__5507__auto____1 = (function (state_26307){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26307);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26328){if((e26328 instanceof Object))
{var ex__5510__auto__ = e26328;var statearr_26329_26342 = state_26307;(statearr_26329_26342[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26307);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26343 = state_26307;
state_26307 = G__26343;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26307){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26330 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26331);
return statearr_26330;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26413){var state_val_26414 = (state_26413[1]);if((state_val_26414 === 1))
{var inst_26390 = 0;var state_26413__$1 = (function (){var statearr_26415 = state_26413;(statearr_26415[7] = inst_26390);
return statearr_26415;
})();var statearr_26416_26437 = state_26413__$1;(statearr_26416_26437[2] = null);
(statearr_26416_26437[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26414 === 2))
{var inst_26390 = (state_26413[7]);var inst_26392 = (inst_26390 < n);var state_26413__$1 = state_26413;if(cljs.core.truth_(inst_26392))
{var statearr_26417_26438 = state_26413__$1;(statearr_26417_26438[1] = 4);
} else
{var statearr_26418_26439 = state_26413__$1;(statearr_26418_26439[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26414 === 3))
{var inst_26410 = (state_26413[2]);var inst_26411 = cljs.core.async.close_BANG_(out);var state_26413__$1 = (function (){var statearr_26419 = state_26413;(statearr_26419[8] = inst_26410);
return statearr_26419;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26413__$1,inst_26411);
} else
{if((state_val_26414 === 4))
{var state_26413__$1 = state_26413;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26413__$1,7,ch);
} else
{if((state_val_26414 === 5))
{var state_26413__$1 = state_26413;var statearr_26420_26440 = state_26413__$1;(statearr_26420_26440[2] = null);
(statearr_26420_26440[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26414 === 6))
{var inst_26408 = (state_26413[2]);var state_26413__$1 = state_26413;var statearr_26421_26441 = state_26413__$1;(statearr_26421_26441[2] = inst_26408);
(statearr_26421_26441[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26414 === 7))
{var inst_26395 = (state_26413[9]);var inst_26395__$1 = (state_26413[2]);var inst_26396 = (inst_26395__$1 == null);var inst_26397 = cljs.core.not(inst_26396);var state_26413__$1 = (function (){var statearr_26422 = state_26413;(statearr_26422[9] = inst_26395__$1);
return statearr_26422;
})();if(inst_26397)
{var statearr_26423_26442 = state_26413__$1;(statearr_26423_26442[1] = 8);
} else
{var statearr_26424_26443 = state_26413__$1;(statearr_26424_26443[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26414 === 8))
{var inst_26395 = (state_26413[9]);var state_26413__$1 = state_26413;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26413__$1,11,out,inst_26395);
} else
{if((state_val_26414 === 9))
{var state_26413__$1 = state_26413;var statearr_26425_26444 = state_26413__$1;(statearr_26425_26444[2] = null);
(statearr_26425_26444[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26414 === 10))
{var inst_26405 = (state_26413[2]);var state_26413__$1 = state_26413;var statearr_26426_26445 = state_26413__$1;(statearr_26426_26445[2] = inst_26405);
(statearr_26426_26445[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26414 === 11))
{var inst_26390 = (state_26413[7]);var inst_26400 = (state_26413[2]);var inst_26401 = (inst_26390 + 1);var inst_26390__$1 = inst_26401;var state_26413__$1 = (function (){var statearr_26427 = state_26413;(statearr_26427[7] = inst_26390__$1);
(statearr_26427[10] = inst_26400);
return statearr_26427;
})();var statearr_26428_26446 = state_26413__$1;(statearr_26428_26446[2] = null);
(statearr_26428_26446[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26432 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26432[0] = state_machine__5507__auto__);
(statearr_26432[1] = 1);
return statearr_26432;
});
var state_machine__5507__auto____1 = (function (state_26413){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26413);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26433){if((e26433 instanceof Object))
{var ex__5510__auto__ = e26433;var statearr_26434_26447 = state_26413;(statearr_26434_26447[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26413);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26448 = state_26413;
state_26413 = G__26448;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26413){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26435 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26436);
return statearr_26435;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26520){var state_val_26521 = (state_26520[1]);if((state_val_26521 === 1))
{var inst_26497 = null;var state_26520__$1 = (function (){var statearr_26522 = state_26520;(statearr_26522[7] = inst_26497);
return statearr_26522;
})();var statearr_26523_26546 = state_26520__$1;(statearr_26523_26546[2] = null);
(statearr_26523_26546[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26521 === 2))
{var state_26520__$1 = state_26520;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26520__$1,4,ch);
} else
{if((state_val_26521 === 3))
{var inst_26517 = (state_26520[2]);var inst_26518 = cljs.core.async.close_BANG_(out);var state_26520__$1 = (function (){var statearr_26524 = state_26520;(statearr_26524[8] = inst_26517);
return statearr_26524;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26520__$1,inst_26518);
} else
{if((state_val_26521 === 4))
{var inst_26500 = (state_26520[9]);var inst_26500__$1 = (state_26520[2]);var inst_26501 = (inst_26500__$1 == null);var inst_26502 = cljs.core.not(inst_26501);var state_26520__$1 = (function (){var statearr_26525 = state_26520;(statearr_26525[9] = inst_26500__$1);
return statearr_26525;
})();if(inst_26502)
{var statearr_26526_26547 = state_26520__$1;(statearr_26526_26547[1] = 5);
} else
{var statearr_26527_26548 = state_26520__$1;(statearr_26527_26548[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26521 === 5))
{var inst_26500 = (state_26520[9]);var inst_26497 = (state_26520[7]);var inst_26504 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26500,inst_26497);var state_26520__$1 = state_26520;if(inst_26504)
{var statearr_26528_26549 = state_26520__$1;(statearr_26528_26549[1] = 8);
} else
{var statearr_26529_26550 = state_26520__$1;(statearr_26529_26550[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26521 === 6))
{var state_26520__$1 = state_26520;var statearr_26531_26551 = state_26520__$1;(statearr_26531_26551[2] = null);
(statearr_26531_26551[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26521 === 7))
{var inst_26515 = (state_26520[2]);var state_26520__$1 = state_26520;var statearr_26532_26552 = state_26520__$1;(statearr_26532_26552[2] = inst_26515);
(statearr_26532_26552[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26521 === 8))
{var inst_26497 = (state_26520[7]);var tmp26530 = inst_26497;var inst_26497__$1 = tmp26530;var state_26520__$1 = (function (){var statearr_26533 = state_26520;(statearr_26533[7] = inst_26497__$1);
return statearr_26533;
})();var statearr_26534_26553 = state_26520__$1;(statearr_26534_26553[2] = null);
(statearr_26534_26553[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26521 === 9))
{var inst_26500 = (state_26520[9]);var state_26520__$1 = state_26520;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26520__$1,11,out,inst_26500);
} else
{if((state_val_26521 === 10))
{var inst_26512 = (state_26520[2]);var state_26520__$1 = state_26520;var statearr_26535_26554 = state_26520__$1;(statearr_26535_26554[2] = inst_26512);
(statearr_26535_26554[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26521 === 11))
{var inst_26500 = (state_26520[9]);var inst_26509 = (state_26520[2]);var inst_26497 = inst_26500;var state_26520__$1 = (function (){var statearr_26536 = state_26520;(statearr_26536[10] = inst_26509);
(statearr_26536[7] = inst_26497);
return statearr_26536;
})();var statearr_26537_26555 = state_26520__$1;(statearr_26537_26555[2] = null);
(statearr_26537_26555[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26541 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26541[0] = state_machine__5507__auto__);
(statearr_26541[1] = 1);
return statearr_26541;
});
var state_machine__5507__auto____1 = (function (state_26520){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26520);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26542){if((e26542 instanceof Object))
{var ex__5510__auto__ = e26542;var statearr_26543_26556 = state_26520;(statearr_26543_26556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26520);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26557 = state_26520;
state_26520 = G__26557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26520){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26544 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26545);
return statearr_26544;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26662){var state_val_26663 = (state_26662[1]);if((state_val_26663 === 1))
{var inst_26625 = (new Array(n));var inst_26626 = inst_26625;var inst_26627 = 0;var state_26662__$1 = (function (){var statearr_26664 = state_26662;(statearr_26664[7] = inst_26626);
(statearr_26664[8] = inst_26627);
return statearr_26664;
})();var statearr_26665_26693 = state_26662__$1;(statearr_26665_26693[2] = null);
(statearr_26665_26693[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 2))
{var state_26662__$1 = state_26662;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26662__$1,4,ch);
} else
{if((state_val_26663 === 3))
{var inst_26660 = (state_26662[2]);var state_26662__$1 = state_26662;return cljs.core.async.impl.ioc_helpers.return_chan(state_26662__$1,inst_26660);
} else
{if((state_val_26663 === 4))
{var inst_26630 = (state_26662[9]);var inst_26630__$1 = (state_26662[2]);var inst_26631 = (inst_26630__$1 == null);var inst_26632 = cljs.core.not(inst_26631);var state_26662__$1 = (function (){var statearr_26666 = state_26662;(statearr_26666[9] = inst_26630__$1);
return statearr_26666;
})();if(inst_26632)
{var statearr_26667_26694 = state_26662__$1;(statearr_26667_26694[1] = 5);
} else
{var statearr_26668_26695 = state_26662__$1;(statearr_26668_26695[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 5))
{var inst_26635 = (state_26662[10]);var inst_26626 = (state_26662[7]);var inst_26627 = (state_26662[8]);var inst_26630 = (state_26662[9]);var inst_26634 = (inst_26626[inst_26627] = inst_26630);var inst_26635__$1 = (inst_26627 + 1);var inst_26636 = (inst_26635__$1 < n);var state_26662__$1 = (function (){var statearr_26669 = state_26662;(statearr_26669[10] = inst_26635__$1);
(statearr_26669[11] = inst_26634);
return statearr_26669;
})();if(cljs.core.truth_(inst_26636))
{var statearr_26670_26696 = state_26662__$1;(statearr_26670_26696[1] = 8);
} else
{var statearr_26671_26697 = state_26662__$1;(statearr_26671_26697[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 6))
{var inst_26627 = (state_26662[8]);var inst_26648 = (inst_26627 > 0);var state_26662__$1 = state_26662;if(cljs.core.truth_(inst_26648))
{var statearr_26673_26698 = state_26662__$1;(statearr_26673_26698[1] = 12);
} else
{var statearr_26674_26699 = state_26662__$1;(statearr_26674_26699[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 7))
{var inst_26658 = (state_26662[2]);var state_26662__$1 = state_26662;var statearr_26675_26700 = state_26662__$1;(statearr_26675_26700[2] = inst_26658);
(statearr_26675_26700[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 8))
{var inst_26635 = (state_26662[10]);var inst_26626 = (state_26662[7]);var tmp26672 = inst_26626;var inst_26626__$1 = tmp26672;var inst_26627 = inst_26635;var state_26662__$1 = (function (){var statearr_26676 = state_26662;(statearr_26676[7] = inst_26626__$1);
(statearr_26676[8] = inst_26627);
return statearr_26676;
})();var statearr_26677_26701 = state_26662__$1;(statearr_26677_26701[2] = null);
(statearr_26677_26701[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 9))
{var inst_26626 = (state_26662[7]);var inst_26640 = cljs.core.vec(inst_26626);var state_26662__$1 = state_26662;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26662__$1,11,out,inst_26640);
} else
{if((state_val_26663 === 10))
{var inst_26646 = (state_26662[2]);var state_26662__$1 = state_26662;var statearr_26678_26702 = state_26662__$1;(statearr_26678_26702[2] = inst_26646);
(statearr_26678_26702[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 11))
{var inst_26642 = (state_26662[2]);var inst_26643 = (new Array(n));var inst_26626 = inst_26643;var inst_26627 = 0;var state_26662__$1 = (function (){var statearr_26679 = state_26662;(statearr_26679[7] = inst_26626);
(statearr_26679[8] = inst_26627);
(statearr_26679[12] = inst_26642);
return statearr_26679;
})();var statearr_26680_26703 = state_26662__$1;(statearr_26680_26703[2] = null);
(statearr_26680_26703[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 12))
{var inst_26626 = (state_26662[7]);var inst_26650 = cljs.core.vec(inst_26626);var state_26662__$1 = state_26662;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26662__$1,15,out,inst_26650);
} else
{if((state_val_26663 === 13))
{var state_26662__$1 = state_26662;var statearr_26681_26704 = state_26662__$1;(statearr_26681_26704[2] = null);
(statearr_26681_26704[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 14))
{var inst_26655 = (state_26662[2]);var inst_26656 = cljs.core.async.close_BANG_(out);var state_26662__$1 = (function (){var statearr_26682 = state_26662;(statearr_26682[13] = inst_26655);
return statearr_26682;
})();var statearr_26683_26705 = state_26662__$1;(statearr_26683_26705[2] = inst_26656);
(statearr_26683_26705[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26663 === 15))
{var inst_26652 = (state_26662[2]);var state_26662__$1 = state_26662;var statearr_26684_26706 = state_26662__$1;(statearr_26684_26706[2] = inst_26652);
(statearr_26684_26706[1] = 14);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26688[0] = state_machine__5507__auto__);
(statearr_26688[1] = 1);
return statearr_26688;
});
var state_machine__5507__auto____1 = (function (state_26662){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26662);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26689){if((e26689 instanceof Object))
{var ex__5510__auto__ = e26689;var statearr_26690_26707 = state_26662;(statearr_26690_26707[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26662);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26708 = state_26662;
state_26662 = G__26708;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26662){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26691 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26692);
return statearr_26691;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26821){var state_val_26822 = (state_26821[1]);if((state_val_26822 === 1))
{var inst_26780 = [];var inst_26781 = inst_26780;var inst_26782 = cljs.core.constant$keyword$261;var state_26821__$1 = (function (){var statearr_26823 = state_26821;(statearr_26823[7] = inst_26782);
(statearr_26823[8] = inst_26781);
return statearr_26823;
})();var statearr_26824_26852 = state_26821__$1;(statearr_26824_26852[2] = null);
(statearr_26824_26852[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 2))
{var state_26821__$1 = state_26821;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26821__$1,4,ch);
} else
{if((state_val_26822 === 3))
{var inst_26819 = (state_26821[2]);var state_26821__$1 = state_26821;return cljs.core.async.impl.ioc_helpers.return_chan(state_26821__$1,inst_26819);
} else
{if((state_val_26822 === 4))
{var inst_26785 = (state_26821[9]);var inst_26785__$1 = (state_26821[2]);var inst_26786 = (inst_26785__$1 == null);var inst_26787 = cljs.core.not(inst_26786);var state_26821__$1 = (function (){var statearr_26825 = state_26821;(statearr_26825[9] = inst_26785__$1);
return statearr_26825;
})();if(inst_26787)
{var statearr_26826_26853 = state_26821__$1;(statearr_26826_26853[1] = 5);
} else
{var statearr_26827_26854 = state_26821__$1;(statearr_26827_26854[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 5))
{var inst_26785 = (state_26821[9]);var inst_26782 = (state_26821[7]);var inst_26789 = (state_26821[10]);var inst_26789__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26785) : f.call(null,inst_26785));var inst_26790 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26789__$1,inst_26782);var inst_26791 = cljs.core.keyword_identical_QMARK_(inst_26782,cljs.core.constant$keyword$261);var inst_26792 = (inst_26790) || (inst_26791);var state_26821__$1 = (function (){var statearr_26828 = state_26821;(statearr_26828[10] = inst_26789__$1);
return statearr_26828;
})();if(cljs.core.truth_(inst_26792))
{var statearr_26829_26855 = state_26821__$1;(statearr_26829_26855[1] = 8);
} else
{var statearr_26830_26856 = state_26821__$1;(statearr_26830_26856[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 6))
{var inst_26781 = (state_26821[8]);var inst_26806 = inst_26781.length;var inst_26807 = (inst_26806 > 0);var state_26821__$1 = state_26821;if(cljs.core.truth_(inst_26807))
{var statearr_26832_26857 = state_26821__$1;(statearr_26832_26857[1] = 12);
} else
{var statearr_26833_26858 = state_26821__$1;(statearr_26833_26858[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 7))
{var inst_26817 = (state_26821[2]);var state_26821__$1 = state_26821;var statearr_26834_26859 = state_26821__$1;(statearr_26834_26859[2] = inst_26817);
(statearr_26834_26859[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 8))
{var inst_26785 = (state_26821[9]);var inst_26781 = (state_26821[8]);var inst_26789 = (state_26821[10]);var inst_26794 = inst_26781.push(inst_26785);var tmp26831 = inst_26781;var inst_26781__$1 = tmp26831;var inst_26782 = inst_26789;var state_26821__$1 = (function (){var statearr_26835 = state_26821;(statearr_26835[7] = inst_26782);
(statearr_26835[8] = inst_26781__$1);
(statearr_26835[11] = inst_26794);
return statearr_26835;
})();var statearr_26836_26860 = state_26821__$1;(statearr_26836_26860[2] = null);
(statearr_26836_26860[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 9))
{var inst_26781 = (state_26821[8]);var inst_26797 = cljs.core.vec(inst_26781);var state_26821__$1 = state_26821;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26821__$1,11,out,inst_26797);
} else
{if((state_val_26822 === 10))
{var inst_26804 = (state_26821[2]);var state_26821__$1 = state_26821;var statearr_26837_26861 = state_26821__$1;(statearr_26837_26861[2] = inst_26804);
(statearr_26837_26861[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 11))
{var inst_26785 = (state_26821[9]);var inst_26789 = (state_26821[10]);var inst_26799 = (state_26821[2]);var inst_26800 = [];var inst_26801 = inst_26800.push(inst_26785);var inst_26781 = inst_26800;var inst_26782 = inst_26789;var state_26821__$1 = (function (){var statearr_26838 = state_26821;(statearr_26838[7] = inst_26782);
(statearr_26838[12] = inst_26799);
(statearr_26838[8] = inst_26781);
(statearr_26838[13] = inst_26801);
return statearr_26838;
})();var statearr_26839_26862 = state_26821__$1;(statearr_26839_26862[2] = null);
(statearr_26839_26862[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 12))
{var inst_26781 = (state_26821[8]);var inst_26809 = cljs.core.vec(inst_26781);var state_26821__$1 = state_26821;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26821__$1,15,out,inst_26809);
} else
{if((state_val_26822 === 13))
{var state_26821__$1 = state_26821;var statearr_26840_26863 = state_26821__$1;(statearr_26840_26863[2] = null);
(statearr_26840_26863[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 14))
{var inst_26814 = (state_26821[2]);var inst_26815 = cljs.core.async.close_BANG_(out);var state_26821__$1 = (function (){var statearr_26841 = state_26821;(statearr_26841[14] = inst_26814);
return statearr_26841;
})();var statearr_26842_26864 = state_26821__$1;(statearr_26842_26864[2] = inst_26815);
(statearr_26842_26864[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26822 === 15))
{var inst_26811 = (state_26821[2]);var state_26821__$1 = state_26821;var statearr_26843_26865 = state_26821__$1;(statearr_26843_26865[2] = inst_26811);
(statearr_26843_26865[1] = 14);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26847[0] = state_machine__5507__auto__);
(statearr_26847[1] = 1);
return statearr_26847;
});
var state_machine__5507__auto____1 = (function (state_26821){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26821);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26848){if((e26848 instanceof Object))
{var ex__5510__auto__ = e26848;var statearr_26849_26866 = state_26821;(statearr_26849_26866[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26821);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26867 = state_26821;
state_26821 = G__26867;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26821){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26850 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26851);
return statearr_26850;
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
