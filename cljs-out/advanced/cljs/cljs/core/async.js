// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16418 = (function (f,fn_handler,meta16419){
this.f = f;
this.fn_handler = fn_handler;
this.meta16419 = meta16419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16418.cljs$lang$type = true;
cljs.core.async.t16418.cljs$lang$ctorStr = "cljs.core.async/t16418";
cljs.core.async.t16418.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16418");
});
cljs.core.async.t16418.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16420){var self__ = this;
var _16420__$1 = this;return self__.meta16419;
});
cljs.core.async.t16418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16420,meta16419__$1){var self__ = this;
var _16420__$1 = this;return (new cljs.core.async.t16418(self__.f,self__.fn_handler,meta16419__$1));
});
cljs.core.async.__GT_t16418 = (function __GT_t16418(f__$1,fn_handler__$1,meta16419){return (new cljs.core.async.t16418(f__$1,fn_handler__$1,meta16419));
});
}
return (new cljs.core.async.t16418(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16422 = buff;if(G__16422)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16422.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16422.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__16422);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__16422);
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
{var val_16423 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16423) : fn1.call(null,val_16423));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16423) : fn1.call(null,val_16423));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___16424 = n;var x_16425 = 0;while(true){
if((x_16425 < n__4114__auto___16424))
{(a[x_16425] = 0);
{
var G__16426 = (x_16425 + 1);
x_16425 = G__16426;
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
var G__16427 = (i + 1);
i = G__16427;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t16431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16431 = (function (flag,alt_flag,meta16432){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16432 = meta16432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16431.cljs$lang$type = true;
cljs.core.async.t16431.cljs$lang$ctorStr = "cljs.core.async/t16431";
cljs.core.async.t16431.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16431");
});
cljs.core.async.t16431.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t16431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t16431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16433){var self__ = this;
var _16433__$1 = this;return self__.meta16432;
});
cljs.core.async.t16431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16433,meta16432__$1){var self__ = this;
var _16433__$1 = this;return (new cljs.core.async.t16431(self__.flag,self__.alt_flag,meta16432__$1));
});
cljs.core.async.__GT_t16431 = (function __GT_t16431(flag__$1,alt_flag__$1,meta16432){return (new cljs.core.async.t16431(flag__$1,alt_flag__$1,meta16432));
});
}
return (new cljs.core.async.t16431(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16437 = (function (cb,flag,alt_handler,meta16438){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16438 = meta16438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16437.cljs$lang$type = true;
cljs.core.async.t16437.cljs$lang$ctorStr = "cljs.core.async/t16437";
cljs.core.async.t16437.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16437");
});
cljs.core.async.t16437.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t16437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t16437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16439){var self__ = this;
var _16439__$1 = this;return self__.meta16438;
});
cljs.core.async.t16437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16439,meta16438__$1){var self__ = this;
var _16439__$1 = this;return (new cljs.core.async.t16437(self__.cb,self__.flag,self__.alt_handler,meta16438__$1));
});
cljs.core.async.__GT_t16437 = (function __GT_t16437(cb__$1,flag__$1,alt_handler__$1,meta16438){return (new cljs.core.async.t16437(cb__$1,flag__$1,alt_handler__$1,meta16438));
});
}
return (new cljs.core.async.t16437(cb,flag,alt_handler,null));
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
return (function (p1__16440_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16440_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16440_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16441 = (i + 1);
i = G__16441;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3279__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3279__auto__;
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
var alts_BANG___delegate = function (ports,p__16442){var map__16444 = p__16442;var map__16444__$1 = ((cljs.core.seq_QMARK_(map__16444))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16444):map__16444);var opts = map__16444__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16442 = null;if (arguments.length > 1) {
  p__16442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16442);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16445){
var ports = cljs.core.first(arglist__16445);
var p__16442 = cljs.core.rest(arglist__16445);
return alts_BANG___delegate(ports,p__16442);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16453 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16453 = (function (ch,f,map_LT_,meta16454){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16454 = meta16454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16453.cljs$lang$type = true;
cljs.core.async.t16453.cljs$lang$ctorStr = "cljs.core.async/t16453";
cljs.core.async.t16453.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16453");
});
cljs.core.async.t16453.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t16453.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t16456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16456 = (function (fn1,_,meta16454,ch,f,map_LT_,meta16457){
this.fn1 = fn1;
this._ = _;
this.meta16454 = meta16454;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16457 = meta16457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16456.cljs$lang$type = true;
cljs.core.async.t16456.cljs$lang$ctorStr = "cljs.core.async/t16456";
cljs.core.async.t16456.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16456");
});
cljs.core.async.t16456.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t16456.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t16456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__16446_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__16446_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16446_SHARP_) : self__.f.call(null,p1__16446_SHARP_)))) : f1.call(null,(((p1__16446_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16446_SHARP_) : self__.f.call(null,p1__16446_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t16456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16458){var self__ = this;
var _16458__$1 = this;return self__.meta16457;
});
cljs.core.async.t16456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16458,meta16457__$1){var self__ = this;
var _16458__$1 = this;return (new cljs.core.async.t16456(self__.fn1,self__._,self__.meta16454,self__.ch,self__.f,self__.map_LT_,meta16457__$1));
});
cljs.core.async.__GT_t16456 = (function __GT_t16456(fn1__$1,___$2,meta16454__$1,ch__$2,f__$2,map_LT___$2,meta16457){return (new cljs.core.async.t16456(fn1__$1,___$2,meta16454__$1,ch__$2,f__$2,map_LT___$2,meta16457));
});
}
return (new cljs.core.async.t16456(fn1,___$1,self__.meta16454,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t16453.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t16453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16455){var self__ = this;
var _16455__$1 = this;return self__.meta16454;
});
cljs.core.async.t16453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16455,meta16454__$1){var self__ = this;
var _16455__$1 = this;return (new cljs.core.async.t16453(self__.ch,self__.f,self__.map_LT_,meta16454__$1));
});
cljs.core.async.__GT_t16453 = (function __GT_t16453(ch__$1,f__$1,map_LT___$1,meta16454){return (new cljs.core.async.t16453(ch__$1,f__$1,map_LT___$1,meta16454));
});
}
return (new cljs.core.async.t16453(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16462 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16462 = (function (ch,f,map_GT_,meta16463){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16463 = meta16463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16462.cljs$lang$type = true;
cljs.core.async.t16462.cljs$lang$ctorStr = "cljs.core.async/t16462";
cljs.core.async.t16462.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16462");
});
cljs.core.async.t16462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t16462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t16462.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t16462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16464){var self__ = this;
var _16464__$1 = this;return self__.meta16463;
});
cljs.core.async.t16462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16464,meta16463__$1){var self__ = this;
var _16464__$1 = this;return (new cljs.core.async.t16462(self__.ch,self__.f,self__.map_GT_,meta16463__$1));
});
cljs.core.async.__GT_t16462 = (function __GT_t16462(ch__$1,f__$1,map_GT___$1,meta16463){return (new cljs.core.async.t16462(ch__$1,f__$1,map_GT___$1,meta16463));
});
}
return (new cljs.core.async.t16462(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16468 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16468 = (function (ch,p,filter_GT_,meta16469){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16469 = meta16469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16468.cljs$lang$type = true;
cljs.core.async.t16468.cljs$lang$ctorStr = "cljs.core.async/t16468";
cljs.core.async.t16468.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16468");
});
cljs.core.async.t16468.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t16468.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t16468.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t16468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16470){var self__ = this;
var _16470__$1 = this;return self__.meta16469;
});
cljs.core.async.t16468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16470,meta16469__$1){var self__ = this;
var _16470__$1 = this;return (new cljs.core.async.t16468(self__.ch,self__.p,self__.filter_GT_,meta16469__$1));
});
cljs.core.async.__GT_t16468 = (function __GT_t16468(ch__$1,p__$1,filter_GT___$1,meta16469){return (new cljs.core.async.t16468(ch__$1,p__$1,filter_GT___$1,meta16469));
});
}
return (new cljs.core.async.t16468(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___16553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16532){var state_val_16533 = (state_16532[1]);if((state_val_16533 === 1))
{var state_16532__$1 = state_16532;var statearr_16534_16554 = state_16532__$1;(statearr_16534_16554[2] = null);
(statearr_16534_16554[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16533 === 2))
{var state_16532__$1 = state_16532;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16532__$1,4,ch);
} else
{if((state_val_16533 === 3))
{var inst_16530 = (state_16532[2]);var state_16532__$1 = state_16532;return cljs.core.async.impl.ioc_helpers.return_chan(state_16532__$1,inst_16530);
} else
{if((state_val_16533 === 4))
{var inst_16514 = (state_16532[7]);var inst_16514__$1 = (state_16532[2]);var inst_16515 = (inst_16514__$1 == null);var state_16532__$1 = (function (){var statearr_16535 = state_16532;(statearr_16535[7] = inst_16514__$1);
return statearr_16535;
})();if(cljs.core.truth_(inst_16515))
{var statearr_16536_16555 = state_16532__$1;(statearr_16536_16555[1] = 5);
} else
{var statearr_16537_16556 = state_16532__$1;(statearr_16537_16556[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16533 === 5))
{var inst_16517 = cljs.core.async.close_BANG_(out);var state_16532__$1 = state_16532;var statearr_16538_16557 = state_16532__$1;(statearr_16538_16557[2] = inst_16517);
(statearr_16538_16557[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16533 === 6))
{var inst_16514 = (state_16532[7]);var inst_16519 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16514) : p.call(null,inst_16514));var state_16532__$1 = state_16532;if(cljs.core.truth_(inst_16519))
{var statearr_16539_16558 = state_16532__$1;(statearr_16539_16558[1] = 8);
} else
{var statearr_16540_16559 = state_16532__$1;(statearr_16540_16559[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16533 === 7))
{var inst_16528 = (state_16532[2]);var state_16532__$1 = state_16532;var statearr_16541_16560 = state_16532__$1;(statearr_16541_16560[2] = inst_16528);
(statearr_16541_16560[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16533 === 8))
{var inst_16514 = (state_16532[7]);var state_16532__$1 = state_16532;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16532__$1,11,out,inst_16514);
} else
{if((state_val_16533 === 9))
{var state_16532__$1 = state_16532;var statearr_16542_16561 = state_16532__$1;(statearr_16542_16561[2] = null);
(statearr_16542_16561[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16533 === 10))
{var inst_16525 = (state_16532[2]);var state_16532__$1 = (function (){var statearr_16543 = state_16532;(statearr_16543[8] = inst_16525);
return statearr_16543;
})();var statearr_16544_16562 = state_16532__$1;(statearr_16544_16562[2] = null);
(statearr_16544_16562[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16533 === 11))
{var inst_16522 = (state_16532[2]);var state_16532__$1 = state_16532;var statearr_16545_16563 = state_16532__$1;(statearr_16545_16563[2] = inst_16522);
(statearr_16545_16563[1] = 10);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16549 = (new Array(9));(statearr_16549[0] = state_machine__5792__auto__);
(statearr_16549[1] = 1);
return statearr_16549;
});
var state_machine__5792__auto____1 = (function (state_16532){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_16532);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16550){if((e16550 instanceof Object))
{var ex__5795__auto__ = e16550;var statearr_16551_16564 = state_16532;(statearr_16551_16564[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16532);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__16565 = state_16532;
state_16532 = G__16565;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16532){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16552 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_16552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16553);
return statearr_16552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16717){var state_val_16718 = (state_16717[1]);if((state_val_16718 === 1))
{var state_16717__$1 = state_16717;var statearr_16719_16756 = state_16717__$1;(statearr_16719_16756[2] = null);
(statearr_16719_16756[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 2))
{var state_16717__$1 = state_16717;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16717__$1,4,in$);
} else
{if((state_val_16718 === 3))
{var inst_16715 = (state_16717[2]);var state_16717__$1 = state_16717;return cljs.core.async.impl.ioc_helpers.return_chan(state_16717__$1,inst_16715);
} else
{if((state_val_16718 === 4))
{var inst_16663 = (state_16717[7]);var inst_16663__$1 = (state_16717[2]);var inst_16664 = (inst_16663__$1 == null);var state_16717__$1 = (function (){var statearr_16720 = state_16717;(statearr_16720[7] = inst_16663__$1);
return statearr_16720;
})();if(cljs.core.truth_(inst_16664))
{var statearr_16721_16757 = state_16717__$1;(statearr_16721_16757[1] = 5);
} else
{var statearr_16722_16758 = state_16717__$1;(statearr_16722_16758[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 5))
{var inst_16666 = cljs.core.async.close_BANG_(out);var state_16717__$1 = state_16717;var statearr_16723_16759 = state_16717__$1;(statearr_16723_16759[2] = inst_16666);
(statearr_16723_16759[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 6))
{var inst_16663 = (state_16717[7]);var inst_16668 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16663) : f.call(null,inst_16663));var inst_16673 = cljs.core.seq(inst_16668);var inst_16674 = inst_16673;var inst_16675 = null;var inst_16676 = 0;var inst_16677 = 0;var state_16717__$1 = (function (){var statearr_16724 = state_16717;(statearr_16724[8] = inst_16677);
(statearr_16724[9] = inst_16675);
(statearr_16724[10] = inst_16676);
(statearr_16724[11] = inst_16674);
return statearr_16724;
})();var statearr_16725_16760 = state_16717__$1;(statearr_16725_16760[2] = null);
(statearr_16725_16760[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 7))
{var inst_16713 = (state_16717[2]);var state_16717__$1 = state_16717;var statearr_16726_16761 = state_16717__$1;(statearr_16726_16761[2] = inst_16713);
(statearr_16726_16761[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 8))
{var inst_16677 = (state_16717[8]);var inst_16676 = (state_16717[10]);var inst_16679 = (inst_16677 < inst_16676);var inst_16680 = inst_16679;var state_16717__$1 = state_16717;if(cljs.core.truth_(inst_16680))
{var statearr_16727_16762 = state_16717__$1;(statearr_16727_16762[1] = 10);
} else
{var statearr_16728_16763 = state_16717__$1;(statearr_16728_16763[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 9))
{var inst_16710 = (state_16717[2]);var state_16717__$1 = (function (){var statearr_16729 = state_16717;(statearr_16729[12] = inst_16710);
return statearr_16729;
})();var statearr_16730_16764 = state_16717__$1;(statearr_16730_16764[2] = null);
(statearr_16730_16764[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 10))
{var inst_16677 = (state_16717[8]);var inst_16675 = (state_16717[9]);var inst_16682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16675,inst_16677);var state_16717__$1 = state_16717;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16717__$1,13,out,inst_16682);
} else
{if((state_val_16718 === 11))
{var inst_16674 = (state_16717[11]);var inst_16688 = (state_16717[13]);var inst_16688__$1 = cljs.core.seq(inst_16674);var state_16717__$1 = (function (){var statearr_16734 = state_16717;(statearr_16734[13] = inst_16688__$1);
return statearr_16734;
})();if(inst_16688__$1)
{var statearr_16735_16765 = state_16717__$1;(statearr_16735_16765[1] = 14);
} else
{var statearr_16736_16766 = state_16717__$1;(statearr_16736_16766[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 12))
{var inst_16708 = (state_16717[2]);var state_16717__$1 = state_16717;var statearr_16737_16767 = state_16717__$1;(statearr_16737_16767[2] = inst_16708);
(statearr_16737_16767[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 13))
{var inst_16677 = (state_16717[8]);var inst_16675 = (state_16717[9]);var inst_16676 = (state_16717[10]);var inst_16674 = (state_16717[11]);var inst_16684 = (state_16717[2]);var inst_16685 = (inst_16677 + 1);var tmp16731 = inst_16675;var tmp16732 = inst_16676;var tmp16733 = inst_16674;var inst_16674__$1 = tmp16733;var inst_16675__$1 = tmp16731;var inst_16676__$1 = tmp16732;var inst_16677__$1 = inst_16685;var state_16717__$1 = (function (){var statearr_16738 = state_16717;(statearr_16738[8] = inst_16677__$1);
(statearr_16738[9] = inst_16675__$1);
(statearr_16738[10] = inst_16676__$1);
(statearr_16738[11] = inst_16674__$1);
(statearr_16738[14] = inst_16684);
return statearr_16738;
})();var statearr_16739_16768 = state_16717__$1;(statearr_16739_16768[2] = null);
(statearr_16739_16768[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 14))
{var inst_16688 = (state_16717[13]);var inst_16690 = cljs.core.chunked_seq_QMARK_(inst_16688);var state_16717__$1 = state_16717;if(inst_16690)
{var statearr_16740_16769 = state_16717__$1;(statearr_16740_16769[1] = 17);
} else
{var statearr_16741_16770 = state_16717__$1;(statearr_16741_16770[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 15))
{var state_16717__$1 = state_16717;var statearr_16742_16771 = state_16717__$1;(statearr_16742_16771[2] = null);
(statearr_16742_16771[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 16))
{var inst_16706 = (state_16717[2]);var state_16717__$1 = state_16717;var statearr_16743_16772 = state_16717__$1;(statearr_16743_16772[2] = inst_16706);
(statearr_16743_16772[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 17))
{var inst_16688 = (state_16717[13]);var inst_16692 = cljs.core.chunk_first(inst_16688);var inst_16693 = cljs.core.chunk_rest(inst_16688);var inst_16694 = cljs.core.count(inst_16692);var inst_16674 = inst_16693;var inst_16675 = inst_16692;var inst_16676 = inst_16694;var inst_16677 = 0;var state_16717__$1 = (function (){var statearr_16744 = state_16717;(statearr_16744[8] = inst_16677);
(statearr_16744[9] = inst_16675);
(statearr_16744[10] = inst_16676);
(statearr_16744[11] = inst_16674);
return statearr_16744;
})();var statearr_16745_16773 = state_16717__$1;(statearr_16745_16773[2] = null);
(statearr_16745_16773[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 18))
{var inst_16688 = (state_16717[13]);var inst_16697 = cljs.core.first(inst_16688);var state_16717__$1 = state_16717;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16717__$1,20,out,inst_16697);
} else
{if((state_val_16718 === 19))
{var inst_16703 = (state_16717[2]);var state_16717__$1 = state_16717;var statearr_16746_16774 = state_16717__$1;(statearr_16746_16774[2] = inst_16703);
(statearr_16746_16774[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16718 === 20))
{var inst_16688 = (state_16717[13]);var inst_16699 = (state_16717[2]);var inst_16700 = cljs.core.next(inst_16688);var inst_16674 = inst_16700;var inst_16675 = null;var inst_16676 = 0;var inst_16677 = 0;var state_16717__$1 = (function (){var statearr_16747 = state_16717;(statearr_16747[8] = inst_16677);
(statearr_16747[9] = inst_16675);
(statearr_16747[10] = inst_16676);
(statearr_16747[11] = inst_16674);
(statearr_16747[15] = inst_16699);
return statearr_16747;
})();var statearr_16748_16775 = state_16717__$1;(statearr_16748_16775[2] = null);
(statearr_16748_16775[1] = 8);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16752 = (new Array(16));(statearr_16752[0] = state_machine__5792__auto__);
(statearr_16752[1] = 1);
return statearr_16752;
});
var state_machine__5792__auto____1 = (function (state_16717){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_16717);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16753){if((e16753 instanceof Object))
{var ex__5795__auto__ = e16753;var statearr_16754_16776 = state_16717;(statearr_16754_16776[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16717);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__16777 = state_16717;
state_16717 = G__16777;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16717){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16755 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_16755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_16755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return c__5861__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5861__auto___16858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16837){var state_val_16838 = (state_16837[1]);if((state_val_16838 === 1))
{var state_16837__$1 = state_16837;var statearr_16839_16859 = state_16837__$1;(statearr_16839_16859[2] = null);
(statearr_16839_16859[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16838 === 2))
{var state_16837__$1 = state_16837;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16837__$1,4,from);
} else
{if((state_val_16838 === 3))
{var inst_16835 = (state_16837[2]);var state_16837__$1 = state_16837;return cljs.core.async.impl.ioc_helpers.return_chan(state_16837__$1,inst_16835);
} else
{if((state_val_16838 === 4))
{var inst_16820 = (state_16837[7]);var inst_16820__$1 = (state_16837[2]);var inst_16821 = (inst_16820__$1 == null);var state_16837__$1 = (function (){var statearr_16840 = state_16837;(statearr_16840[7] = inst_16820__$1);
return statearr_16840;
})();if(cljs.core.truth_(inst_16821))
{var statearr_16841_16860 = state_16837__$1;(statearr_16841_16860[1] = 5);
} else
{var statearr_16842_16861 = state_16837__$1;(statearr_16842_16861[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16838 === 5))
{var state_16837__$1 = state_16837;if(cljs.core.truth_(close_QMARK_))
{var statearr_16843_16862 = state_16837__$1;(statearr_16843_16862[1] = 8);
} else
{var statearr_16844_16863 = state_16837__$1;(statearr_16844_16863[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16838 === 6))
{var inst_16820 = (state_16837[7]);var state_16837__$1 = state_16837;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16837__$1,11,to,inst_16820);
} else
{if((state_val_16838 === 7))
{var inst_16833 = (state_16837[2]);var state_16837__$1 = state_16837;var statearr_16845_16864 = state_16837__$1;(statearr_16845_16864[2] = inst_16833);
(statearr_16845_16864[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16838 === 8))
{var inst_16824 = cljs.core.async.close_BANG_(to);var state_16837__$1 = state_16837;var statearr_16846_16865 = state_16837__$1;(statearr_16846_16865[2] = inst_16824);
(statearr_16846_16865[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16838 === 9))
{var state_16837__$1 = state_16837;var statearr_16847_16866 = state_16837__$1;(statearr_16847_16866[2] = null);
(statearr_16847_16866[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16838 === 10))
{var inst_16827 = (state_16837[2]);var state_16837__$1 = state_16837;var statearr_16848_16867 = state_16837__$1;(statearr_16848_16867[2] = inst_16827);
(statearr_16848_16867[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16838 === 11))
{var inst_16830 = (state_16837[2]);var state_16837__$1 = (function (){var statearr_16849 = state_16837;(statearr_16849[8] = inst_16830);
return statearr_16849;
})();var statearr_16850_16868 = state_16837__$1;(statearr_16850_16868[2] = null);
(statearr_16850_16868[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16854 = (new Array(9));(statearr_16854[0] = state_machine__5792__auto__);
(statearr_16854[1] = 1);
return statearr_16854;
});
var state_machine__5792__auto____1 = (function (state_16837){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_16837);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16855){if((e16855 instanceof Object))
{var ex__5795__auto__ = e16855;var statearr_16856_16869 = state_16837;(statearr_16856_16869[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16837);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__16870 = state_16837;
state_16837 = G__16870;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16837){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16857 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_16857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16858);
return statearr_16857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5861__auto___16957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16935){var state_val_16936 = (state_16935[1]);if((state_val_16936 === 1))
{var state_16935__$1 = state_16935;var statearr_16937_16958 = state_16935__$1;(statearr_16937_16958[2] = null);
(statearr_16937_16958[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 2))
{var state_16935__$1 = state_16935;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16935__$1,4,ch);
} else
{if((state_val_16936 === 3))
{var inst_16933 = (state_16935[2]);var state_16935__$1 = state_16935;return cljs.core.async.impl.ioc_helpers.return_chan(state_16935__$1,inst_16933);
} else
{if((state_val_16936 === 4))
{var inst_16916 = (state_16935[7]);var inst_16916__$1 = (state_16935[2]);var inst_16917 = (inst_16916__$1 == null);var state_16935__$1 = (function (){var statearr_16938 = state_16935;(statearr_16938[7] = inst_16916__$1);
return statearr_16938;
})();if(cljs.core.truth_(inst_16917))
{var statearr_16939_16959 = state_16935__$1;(statearr_16939_16959[1] = 5);
} else
{var statearr_16940_16960 = state_16935__$1;(statearr_16940_16960[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 5))
{var inst_16919 = cljs.core.async.close_BANG_(tc);var inst_16920 = cljs.core.async.close_BANG_(fc);var state_16935__$1 = (function (){var statearr_16941 = state_16935;(statearr_16941[8] = inst_16919);
return statearr_16941;
})();var statearr_16942_16961 = state_16935__$1;(statearr_16942_16961[2] = inst_16920);
(statearr_16942_16961[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 6))
{var inst_16916 = (state_16935[7]);var inst_16922 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16916) : p.call(null,inst_16916));var state_16935__$1 = state_16935;if(cljs.core.truth_(inst_16922))
{var statearr_16943_16962 = state_16935__$1;(statearr_16943_16962[1] = 9);
} else
{var statearr_16944_16963 = state_16935__$1;(statearr_16944_16963[1] = 10);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 7))
{var inst_16931 = (state_16935[2]);var state_16935__$1 = state_16935;var statearr_16945_16964 = state_16935__$1;(statearr_16945_16964[2] = inst_16931);
(statearr_16945_16964[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 8))
{var inst_16928 = (state_16935[2]);var state_16935__$1 = (function (){var statearr_16946 = state_16935;(statearr_16946[9] = inst_16928);
return statearr_16946;
})();var statearr_16947_16965 = state_16935__$1;(statearr_16947_16965[2] = null);
(statearr_16947_16965[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 9))
{var state_16935__$1 = state_16935;var statearr_16948_16966 = state_16935__$1;(statearr_16948_16966[2] = tc);
(statearr_16948_16966[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 10))
{var state_16935__$1 = state_16935;var statearr_16949_16967 = state_16935__$1;(statearr_16949_16967[2] = fc);
(statearr_16949_16967[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16936 === 11))
{var inst_16916 = (state_16935[7]);var inst_16926 = (state_16935[2]);var state_16935__$1 = state_16935;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16935__$1,8,inst_16926,inst_16916);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16953 = (new Array(10));(statearr_16953[0] = state_machine__5792__auto__);
(statearr_16953[1] = 1);
return statearr_16953;
});
var state_machine__5792__auto____1 = (function (state_16935){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_16935);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16954){if((e16954 instanceof Object))
{var ex__5795__auto__ = e16954;var statearr_16955_16968 = state_16935;(statearr_16955_16968[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16935);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__16969 = state_16935;
state_16935 = G__16969;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16956 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_16956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16957);
return statearr_16956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17016){var state_val_17017 = (state_17016[1]);if((state_val_17017 === 7))
{var inst_17012 = (state_17016[2]);var state_17016__$1 = state_17016;var statearr_17018_17034 = state_17016__$1;(statearr_17018_17034[2] = inst_17012);
(statearr_17018_17034[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17017 === 6))
{var inst_17005 = (state_17016[7]);var inst_17002 = (state_17016[8]);var inst_17009 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17002,inst_17005) : f.call(null,inst_17002,inst_17005));var inst_17002__$1 = inst_17009;var state_17016__$1 = (function (){var statearr_17019 = state_17016;(statearr_17019[8] = inst_17002__$1);
return statearr_17019;
})();var statearr_17020_17035 = state_17016__$1;(statearr_17020_17035[2] = null);
(statearr_17020_17035[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17017 === 5))
{var inst_17002 = (state_17016[8]);var state_17016__$1 = state_17016;var statearr_17021_17036 = state_17016__$1;(statearr_17021_17036[2] = inst_17002);
(statearr_17021_17036[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17017 === 4))
{var inst_17005 = (state_17016[7]);var inst_17005__$1 = (state_17016[2]);var inst_17006 = (inst_17005__$1 == null);var state_17016__$1 = (function (){var statearr_17022 = state_17016;(statearr_17022[7] = inst_17005__$1);
return statearr_17022;
})();if(cljs.core.truth_(inst_17006))
{var statearr_17023_17037 = state_17016__$1;(statearr_17023_17037[1] = 5);
} else
{var statearr_17024_17038 = state_17016__$1;(statearr_17024_17038[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17017 === 3))
{var inst_17014 = (state_17016[2]);var state_17016__$1 = state_17016;return cljs.core.async.impl.ioc_helpers.return_chan(state_17016__$1,inst_17014);
} else
{if((state_val_17017 === 2))
{var state_17016__$1 = state_17016;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17016__$1,4,ch);
} else
{if((state_val_17017 === 1))
{var inst_17002 = init;var state_17016__$1 = (function (){var statearr_17025 = state_17016;(statearr_17025[8] = inst_17002);
return statearr_17025;
})();var statearr_17026_17039 = state_17016__$1;(statearr_17026_17039[2] = null);
(statearr_17026_17039[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_17030 = (new Array(9));(statearr_17030[0] = state_machine__5792__auto__);
(statearr_17030[1] = 1);
return statearr_17030;
});
var state_machine__5792__auto____1 = (function (state_17016){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_17016);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17031){if((e17031 instanceof Object))
{var ex__5795__auto__ = e17031;var statearr_17032_17040 = state_17016;(statearr_17032_17040[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17016);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e17031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__17041 = state_17016;
state_17016 = G__17041;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17016){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17033 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_17033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_17033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return c__5861__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17103){var state_val_17104 = (state_17103[1]);if((state_val_17104 === 1))
{var inst_17083 = cljs.core.seq(coll);var inst_17084 = inst_17083;var state_17103__$1 = (function (){var statearr_17105 = state_17103;(statearr_17105[7] = inst_17084);
return statearr_17105;
})();var statearr_17106_17124 = state_17103__$1;(statearr_17106_17124[2] = null);
(statearr_17106_17124[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17104 === 2))
{var inst_17084 = (state_17103[7]);var state_17103__$1 = state_17103;if(cljs.core.truth_(inst_17084))
{var statearr_17107_17125 = state_17103__$1;(statearr_17107_17125[1] = 4);
} else
{var statearr_17108_17126 = state_17103__$1;(statearr_17108_17126[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17104 === 3))
{var inst_17101 = (state_17103[2]);var state_17103__$1 = state_17103;return cljs.core.async.impl.ioc_helpers.return_chan(state_17103__$1,inst_17101);
} else
{if((state_val_17104 === 4))
{var inst_17084 = (state_17103[7]);var inst_17087 = cljs.core.first(inst_17084);var state_17103__$1 = state_17103;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17103__$1,7,ch,inst_17087);
} else
{if((state_val_17104 === 5))
{var state_17103__$1 = state_17103;if(cljs.core.truth_(close_QMARK_))
{var statearr_17109_17127 = state_17103__$1;(statearr_17109_17127[1] = 8);
} else
{var statearr_17110_17128 = state_17103__$1;(statearr_17110_17128[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17104 === 6))
{var inst_17099 = (state_17103[2]);var state_17103__$1 = state_17103;var statearr_17111_17129 = state_17103__$1;(statearr_17111_17129[2] = inst_17099);
(statearr_17111_17129[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17104 === 7))
{var inst_17084 = (state_17103[7]);var inst_17089 = (state_17103[2]);var inst_17090 = cljs.core.next(inst_17084);var inst_17084__$1 = inst_17090;var state_17103__$1 = (function (){var statearr_17112 = state_17103;(statearr_17112[8] = inst_17089);
(statearr_17112[7] = inst_17084__$1);
return statearr_17112;
})();var statearr_17113_17130 = state_17103__$1;(statearr_17113_17130[2] = null);
(statearr_17113_17130[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17104 === 8))
{var inst_17094 = cljs.core.async.close_BANG_(ch);var state_17103__$1 = state_17103;var statearr_17114_17131 = state_17103__$1;(statearr_17114_17131[2] = inst_17094);
(statearr_17114_17131[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17104 === 9))
{var state_17103__$1 = state_17103;var statearr_17115_17132 = state_17103__$1;(statearr_17115_17132[2] = null);
(statearr_17115_17132[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17104 === 10))
{var inst_17097 = (state_17103[2]);var state_17103__$1 = state_17103;var statearr_17116_17133 = state_17103__$1;(statearr_17116_17133[2] = inst_17097);
(statearr_17116_17133[1] = 6);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_17120 = (new Array(9));(statearr_17120[0] = state_machine__5792__auto__);
(statearr_17120[1] = 1);
return statearr_17120;
});
var state_machine__5792__auto____1 = (function (state_17103){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_17103);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17121){if((e17121 instanceof Object))
{var ex__5795__auto__ = e17121;var statearr_17122_17134 = state_17103;(statearr_17122_17134[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17103);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e17121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__17135 = state_17103;
state_17103 = G__17135;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17103){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17123 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_17123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_17123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return c__5861__auto__;
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
cljs.core.async.Mux = (function (){var obj17137 = {};return obj17137;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17139 = {};return obj17139;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17363 = (function (cs,ch,mult,meta17364){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17364 = meta17364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17363.cljs$lang$type = true;
cljs.core.async.t17363.cljs$lang$ctorStr = "cljs.core.async/t17363";
cljs.core.async.t17363.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t17363");
});})(cs))
;
cljs.core.async.t17363.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17363.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17363.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17363.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17363.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17365){var self__ = this;
var _17365__$1 = this;return self__.meta17364;
});})(cs))
;
cljs.core.async.t17363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17365,meta17364__$1){var self__ = this;
var _17365__$1 = this;return (new cljs.core.async.t17363(self__.cs,self__.ch,self__.mult,meta17364__$1));
});})(cs))
;
cljs.core.async.__GT_t17363 = ((function (cs){
return (function __GT_t17363(cs__$1,ch__$1,mult__$1,meta17364){return (new cljs.core.async.t17363(cs__$1,ch__$1,mult__$1,meta17364));
});})(cs))
;
}
return (new cljs.core.async.t17363(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5861__auto___17586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17500){var state_val_17501 = (state_17500[1]);if((state_val_17501 === 32))
{var inst_17368 = (state_17500[7]);var inst_17444 = (state_17500[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17500,31,Object,null,30);var inst_17451 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17444,inst_17368,done);var state_17500__$1 = state_17500;var statearr_17502_17587 = state_17500__$1;(statearr_17502_17587[2] = inst_17451);
cljs.core.async.impl.ioc_helpers.process_exception(state_17500__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 1))
{var state_17500__$1 = state_17500;var statearr_17503_17588 = state_17500__$1;(statearr_17503_17588[2] = null);
(statearr_17503_17588[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 33))
{var inst_17457 = (state_17500[9]);var inst_17459 = cljs.core.chunked_seq_QMARK_(inst_17457);var state_17500__$1 = state_17500;if(inst_17459)
{var statearr_17504_17589 = state_17500__$1;(statearr_17504_17589[1] = 36);
} else
{var statearr_17505_17590 = state_17500__$1;(statearr_17505_17590[1] = 37);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 2))
{var state_17500__$1 = state_17500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17500__$1,4,ch);
} else
{if((state_val_17501 === 34))
{var state_17500__$1 = state_17500;var statearr_17506_17591 = state_17500__$1;(statearr_17506_17591[2] = null);
(statearr_17506_17591[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 3))
{var inst_17498 = (state_17500[2]);var state_17500__$1 = state_17500;return cljs.core.async.impl.ioc_helpers.return_chan(state_17500__$1,inst_17498);
} else
{if((state_val_17501 === 35))
{var inst_17482 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17507_17592 = state_17500__$1;(statearr_17507_17592[2] = inst_17482);
(statearr_17507_17592[1] = 29);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 4))
{var inst_17368 = (state_17500[7]);var inst_17368__$1 = (state_17500[2]);var inst_17369 = (inst_17368__$1 == null);var state_17500__$1 = (function (){var statearr_17508 = state_17500;(statearr_17508[7] = inst_17368__$1);
return statearr_17508;
})();if(cljs.core.truth_(inst_17369))
{var statearr_17509_17593 = state_17500__$1;(statearr_17509_17593[1] = 5);
} else
{var statearr_17510_17594 = state_17500__$1;(statearr_17510_17594[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 36))
{var inst_17457 = (state_17500[9]);var inst_17461 = cljs.core.chunk_first(inst_17457);var inst_17462 = cljs.core.chunk_rest(inst_17457);var inst_17463 = cljs.core.count(inst_17461);var inst_17436 = inst_17462;var inst_17437 = inst_17461;var inst_17438 = inst_17463;var inst_17439 = 0;var state_17500__$1 = (function (){var statearr_17511 = state_17500;(statearr_17511[10] = inst_17439);
(statearr_17511[11] = inst_17438);
(statearr_17511[12] = inst_17437);
(statearr_17511[13] = inst_17436);
return statearr_17511;
})();var statearr_17512_17595 = state_17500__$1;(statearr_17512_17595[2] = null);
(statearr_17512_17595[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 5))
{var inst_17375 = cljs.core.deref(cs);var inst_17376 = cljs.core.seq(inst_17375);var inst_17377 = inst_17376;var inst_17378 = null;var inst_17379 = 0;var inst_17380 = 0;var state_17500__$1 = (function (){var statearr_17513 = state_17500;(statearr_17513[14] = inst_17380);
(statearr_17513[15] = inst_17379);
(statearr_17513[16] = inst_17377);
(statearr_17513[17] = inst_17378);
return statearr_17513;
})();var statearr_17514_17596 = state_17500__$1;(statearr_17514_17596[2] = null);
(statearr_17514_17596[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 37))
{var inst_17457 = (state_17500[9]);var inst_17466 = cljs.core.first(inst_17457);var state_17500__$1 = (function (){var statearr_17515 = state_17500;(statearr_17515[18] = inst_17466);
return statearr_17515;
})();var statearr_17516_17597 = state_17500__$1;(statearr_17516_17597[2] = null);
(statearr_17516_17597[1] = 41);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 6))
{var inst_17428 = (state_17500[19]);var inst_17427 = cljs.core.deref(cs);var inst_17428__$1 = cljs.core.keys(inst_17427);var inst_17429 = cljs.core.count(inst_17428__$1);var inst_17430 = cljs.core.reset_BANG_(dctr,inst_17429);var inst_17435 = cljs.core.seq(inst_17428__$1);var inst_17436 = inst_17435;var inst_17437 = null;var inst_17438 = 0;var inst_17439 = 0;var state_17500__$1 = (function (){var statearr_17517 = state_17500;(statearr_17517[20] = inst_17430);
(statearr_17517[10] = inst_17439);
(statearr_17517[11] = inst_17438);
(statearr_17517[12] = inst_17437);
(statearr_17517[13] = inst_17436);
(statearr_17517[19] = inst_17428__$1);
return statearr_17517;
})();var statearr_17518_17598 = state_17500__$1;(statearr_17518_17598[2] = null);
(statearr_17518_17598[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 38))
{var inst_17479 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17519_17599 = state_17500__$1;(statearr_17519_17599[2] = inst_17479);
(statearr_17519_17599[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 7))
{var inst_17496 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17520_17600 = state_17500__$1;(statearr_17520_17600[2] = inst_17496);
(statearr_17520_17600[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 39))
{var inst_17457 = (state_17500[9]);var inst_17475 = (state_17500[2]);var inst_17476 = cljs.core.next(inst_17457);var inst_17436 = inst_17476;var inst_17437 = null;var inst_17438 = 0;var inst_17439 = 0;var state_17500__$1 = (function (){var statearr_17521 = state_17500;(statearr_17521[21] = inst_17475);
(statearr_17521[10] = inst_17439);
(statearr_17521[11] = inst_17438);
(statearr_17521[12] = inst_17437);
(statearr_17521[13] = inst_17436);
return statearr_17521;
})();var statearr_17522_17601 = state_17500__$1;(statearr_17522_17601[2] = null);
(statearr_17522_17601[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 8))
{var inst_17380 = (state_17500[14]);var inst_17379 = (state_17500[15]);var inst_17382 = (inst_17380 < inst_17379);var inst_17383 = inst_17382;var state_17500__$1 = state_17500;if(cljs.core.truth_(inst_17383))
{var statearr_17523_17602 = state_17500__$1;(statearr_17523_17602[1] = 10);
} else
{var statearr_17524_17603 = state_17500__$1;(statearr_17524_17603[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 40))
{var inst_17466 = (state_17500[18]);var inst_17467 = (state_17500[2]);var inst_17468 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_17469 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17466);var state_17500__$1 = (function (){var statearr_17525 = state_17500;(statearr_17525[22] = inst_17467);
(statearr_17525[23] = inst_17468);
return statearr_17525;
})();var statearr_17526_17604 = state_17500__$1;(statearr_17526_17604[2] = inst_17469);
cljs.core.async.impl.ioc_helpers.process_exception(state_17500__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 9))
{var inst_17425 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17527_17605 = state_17500__$1;(statearr_17527_17605[2] = inst_17425);
(statearr_17527_17605[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 41))
{var inst_17368 = (state_17500[7]);var inst_17466 = (state_17500[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17500,40,Object,null,39);var inst_17473 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17466,inst_17368,done);var state_17500__$1 = state_17500;var statearr_17528_17606 = state_17500__$1;(statearr_17528_17606[2] = inst_17473);
cljs.core.async.impl.ioc_helpers.process_exception(state_17500__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 10))
{var inst_17380 = (state_17500[14]);var inst_17378 = (state_17500[17]);var inst_17386 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17378,inst_17380);var inst_17387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17386,0,null);var inst_17388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17386,1,null);var state_17500__$1 = (function (){var statearr_17529 = state_17500;(statearr_17529[24] = inst_17387);
return statearr_17529;
})();if(cljs.core.truth_(inst_17388))
{var statearr_17530_17607 = state_17500__$1;(statearr_17530_17607[1] = 13);
} else
{var statearr_17531_17608 = state_17500__$1;(statearr_17531_17608[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 42))
{var state_17500__$1 = state_17500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17500__$1,45,dchan);
} else
{if((state_val_17501 === 11))
{var inst_17397 = (state_17500[25]);var inst_17377 = (state_17500[16]);var inst_17397__$1 = cljs.core.seq(inst_17377);var state_17500__$1 = (function (){var statearr_17532 = state_17500;(statearr_17532[25] = inst_17397__$1);
return statearr_17532;
})();if(inst_17397__$1)
{var statearr_17533_17609 = state_17500__$1;(statearr_17533_17609[1] = 16);
} else
{var statearr_17534_17610 = state_17500__$1;(statearr_17534_17610[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 43))
{var state_17500__$1 = state_17500;var statearr_17535_17611 = state_17500__$1;(statearr_17535_17611[2] = null);
(statearr_17535_17611[1] = 44);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 12))
{var inst_17423 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17536_17612 = state_17500__$1;(statearr_17536_17612[2] = inst_17423);
(statearr_17536_17612[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 44))
{var inst_17493 = (state_17500[2]);var state_17500__$1 = (function (){var statearr_17537 = state_17500;(statearr_17537[26] = inst_17493);
return statearr_17537;
})();var statearr_17538_17613 = state_17500__$1;(statearr_17538_17613[2] = null);
(statearr_17538_17613[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 13))
{var inst_17387 = (state_17500[24]);var inst_17390 = cljs.core.async.close_BANG_(inst_17387);var state_17500__$1 = state_17500;var statearr_17539_17614 = state_17500__$1;(statearr_17539_17614[2] = inst_17390);
(statearr_17539_17614[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 45))
{var inst_17490 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17543_17615 = state_17500__$1;(statearr_17543_17615[2] = inst_17490);
(statearr_17543_17615[1] = 44);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 14))
{var state_17500__$1 = state_17500;var statearr_17544_17616 = state_17500__$1;(statearr_17544_17616[2] = null);
(statearr_17544_17616[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 15))
{var inst_17380 = (state_17500[14]);var inst_17379 = (state_17500[15]);var inst_17377 = (state_17500[16]);var inst_17378 = (state_17500[17]);var inst_17393 = (state_17500[2]);var inst_17394 = (inst_17380 + 1);var tmp17540 = inst_17379;var tmp17541 = inst_17377;var tmp17542 = inst_17378;var inst_17377__$1 = tmp17541;var inst_17378__$1 = tmp17542;var inst_17379__$1 = tmp17540;var inst_17380__$1 = inst_17394;var state_17500__$1 = (function (){var statearr_17545 = state_17500;(statearr_17545[14] = inst_17380__$1);
(statearr_17545[15] = inst_17379__$1);
(statearr_17545[16] = inst_17377__$1);
(statearr_17545[17] = inst_17378__$1);
(statearr_17545[27] = inst_17393);
return statearr_17545;
})();var statearr_17546_17617 = state_17500__$1;(statearr_17546_17617[2] = null);
(statearr_17546_17617[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 16))
{var inst_17397 = (state_17500[25]);var inst_17399 = cljs.core.chunked_seq_QMARK_(inst_17397);var state_17500__$1 = state_17500;if(inst_17399)
{var statearr_17547_17618 = state_17500__$1;(statearr_17547_17618[1] = 19);
} else
{var statearr_17548_17619 = state_17500__$1;(statearr_17548_17619[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 17))
{var state_17500__$1 = state_17500;var statearr_17549_17620 = state_17500__$1;(statearr_17549_17620[2] = null);
(statearr_17549_17620[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 18))
{var inst_17421 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17550_17621 = state_17500__$1;(statearr_17550_17621[2] = inst_17421);
(statearr_17550_17621[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 19))
{var inst_17397 = (state_17500[25]);var inst_17401 = cljs.core.chunk_first(inst_17397);var inst_17402 = cljs.core.chunk_rest(inst_17397);var inst_17403 = cljs.core.count(inst_17401);var inst_17377 = inst_17402;var inst_17378 = inst_17401;var inst_17379 = inst_17403;var inst_17380 = 0;var state_17500__$1 = (function (){var statearr_17551 = state_17500;(statearr_17551[14] = inst_17380);
(statearr_17551[15] = inst_17379);
(statearr_17551[16] = inst_17377);
(statearr_17551[17] = inst_17378);
return statearr_17551;
})();var statearr_17552_17622 = state_17500__$1;(statearr_17552_17622[2] = null);
(statearr_17552_17622[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 20))
{var inst_17397 = (state_17500[25]);var inst_17407 = cljs.core.first(inst_17397);var inst_17408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17407,0,null);var inst_17409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17407,1,null);var state_17500__$1 = (function (){var statearr_17553 = state_17500;(statearr_17553[28] = inst_17408);
return statearr_17553;
})();if(cljs.core.truth_(inst_17409))
{var statearr_17554_17623 = state_17500__$1;(statearr_17554_17623[1] = 22);
} else
{var statearr_17555_17624 = state_17500__$1;(statearr_17555_17624[1] = 23);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 21))
{var inst_17418 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17556_17625 = state_17500__$1;(statearr_17556_17625[2] = inst_17418);
(statearr_17556_17625[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 22))
{var inst_17408 = (state_17500[28]);var inst_17411 = cljs.core.async.close_BANG_(inst_17408);var state_17500__$1 = state_17500;var statearr_17557_17626 = state_17500__$1;(statearr_17557_17626[2] = inst_17411);
(statearr_17557_17626[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 23))
{var state_17500__$1 = state_17500;var statearr_17558_17627 = state_17500__$1;(statearr_17558_17627[2] = null);
(statearr_17558_17627[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 24))
{var inst_17397 = (state_17500[25]);var inst_17414 = (state_17500[2]);var inst_17415 = cljs.core.next(inst_17397);var inst_17377 = inst_17415;var inst_17378 = null;var inst_17379 = 0;var inst_17380 = 0;var state_17500__$1 = (function (){var statearr_17559 = state_17500;(statearr_17559[14] = inst_17380);
(statearr_17559[15] = inst_17379);
(statearr_17559[16] = inst_17377);
(statearr_17559[17] = inst_17378);
(statearr_17559[29] = inst_17414);
return statearr_17559;
})();var statearr_17560_17628 = state_17500__$1;(statearr_17560_17628[2] = null);
(statearr_17560_17628[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 25))
{var inst_17439 = (state_17500[10]);var inst_17438 = (state_17500[11]);var inst_17441 = (inst_17439 < inst_17438);var inst_17442 = inst_17441;var state_17500__$1 = state_17500;if(cljs.core.truth_(inst_17442))
{var statearr_17561_17629 = state_17500__$1;(statearr_17561_17629[1] = 27);
} else
{var statearr_17562_17630 = state_17500__$1;(statearr_17562_17630[1] = 28);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 26))
{var inst_17428 = (state_17500[19]);var inst_17486 = (state_17500[2]);var inst_17487 = cljs.core.seq(inst_17428);var state_17500__$1 = (function (){var statearr_17563 = state_17500;(statearr_17563[30] = inst_17486);
return statearr_17563;
})();if(inst_17487)
{var statearr_17564_17631 = state_17500__$1;(statearr_17564_17631[1] = 42);
} else
{var statearr_17565_17632 = state_17500__$1;(statearr_17565_17632[1] = 43);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 27))
{var inst_17439 = (state_17500[10]);var inst_17437 = (state_17500[12]);var inst_17444 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17437,inst_17439);var state_17500__$1 = (function (){var statearr_17566 = state_17500;(statearr_17566[8] = inst_17444);
return statearr_17566;
})();var statearr_17567_17633 = state_17500__$1;(statearr_17567_17633[2] = null);
(statearr_17567_17633[1] = 32);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 28))
{var inst_17436 = (state_17500[13]);var inst_17457 = (state_17500[9]);var inst_17457__$1 = cljs.core.seq(inst_17436);var state_17500__$1 = (function (){var statearr_17571 = state_17500;(statearr_17571[9] = inst_17457__$1);
return statearr_17571;
})();if(inst_17457__$1)
{var statearr_17572_17634 = state_17500__$1;(statearr_17572_17634[1] = 33);
} else
{var statearr_17573_17635 = state_17500__$1;(statearr_17573_17635[1] = 34);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 29))
{var inst_17484 = (state_17500[2]);var state_17500__$1 = state_17500;var statearr_17574_17636 = state_17500__$1;(statearr_17574_17636[2] = inst_17484);
(statearr_17574_17636[1] = 26);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 30))
{var inst_17439 = (state_17500[10]);var inst_17438 = (state_17500[11]);var inst_17437 = (state_17500[12]);var inst_17436 = (state_17500[13]);var inst_17453 = (state_17500[2]);var inst_17454 = (inst_17439 + 1);var tmp17568 = inst_17438;var tmp17569 = inst_17437;var tmp17570 = inst_17436;var inst_17436__$1 = tmp17570;var inst_17437__$1 = tmp17569;var inst_17438__$1 = tmp17568;var inst_17439__$1 = inst_17454;var state_17500__$1 = (function (){var statearr_17575 = state_17500;(statearr_17575[10] = inst_17439__$1);
(statearr_17575[11] = inst_17438__$1);
(statearr_17575[12] = inst_17437__$1);
(statearr_17575[13] = inst_17436__$1);
(statearr_17575[31] = inst_17453);
return statearr_17575;
})();var statearr_17576_17637 = state_17500__$1;(statearr_17576_17637[2] = null);
(statearr_17576_17637[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17501 === 31))
{var inst_17444 = (state_17500[8]);var inst_17445 = (state_17500[2]);var inst_17446 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_17447 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17444);var state_17500__$1 = (function (){var statearr_17577 = state_17500;(statearr_17577[32] = inst_17445);
(statearr_17577[33] = inst_17446);
return statearr_17577;
})();var statearr_17578_17638 = state_17500__$1;(statearr_17578_17638[2] = inst_17447);
cljs.core.async.impl.ioc_helpers.process_exception(state_17500__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_17582 = (new Array(34));(statearr_17582[0] = state_machine__5792__auto__);
(statearr_17582[1] = 1);
return statearr_17582;
});
var state_machine__5792__auto____1 = (function (state_17500){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_17500);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17583){if((e17583 instanceof Object))
{var ex__5795__auto__ = e17583;var statearr_17584_17639 = state_17500;(statearr_17584_17639[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17500);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e17583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__17640 = state_17500;
state_17500 = G__17640;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17500){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17585 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_17585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17586);
return statearr_17585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
cljs.core.async.Mix = (function (){var obj17642 = {};return obj17642;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t17752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17752 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17753){
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
this.meta17753 = meta17753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17752.cljs$lang$type = true;
cljs.core.async.t17752.cljs$lang$ctorStr = "cljs.core.async/t17752";
cljs.core.async.t17752.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t17752");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17752.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17754){var self__ = this;
var _17754__$1 = this;return self__.meta17753;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17754,meta17753__$1){var self__ = this;
var _17754__$1 = this;return (new cljs.core.async.t17752(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17753__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17752 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17752(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17753){return (new cljs.core.async.t17752(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17753));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17752(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5861__auto___17861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17819){var state_val_17820 = (state_17819[1]);if((state_val_17820 === 1))
{var inst_17758 = (state_17819[7]);var inst_17758__$1 = calc_state();var inst_17759 = cljs.core.seq_QMARK_(inst_17758__$1);var state_17819__$1 = (function (){var statearr_17821 = state_17819;(statearr_17821[7] = inst_17758__$1);
return statearr_17821;
})();if(inst_17759)
{var statearr_17822_17862 = state_17819__$1;(statearr_17822_17862[1] = 2);
} else
{var statearr_17823_17863 = state_17819__$1;(statearr_17823_17863[1] = 3);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 2))
{var inst_17758 = (state_17819[7]);var inst_17761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17758);var state_17819__$1 = state_17819;var statearr_17824_17864 = state_17819__$1;(statearr_17824_17864[2] = inst_17761);
(statearr_17824_17864[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 3))
{var inst_17758 = (state_17819[7]);var state_17819__$1 = state_17819;var statearr_17825_17865 = state_17819__$1;(statearr_17825_17865[2] = inst_17758);
(statearr_17825_17865[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 4))
{var inst_17758 = (state_17819[7]);var inst_17764 = (state_17819[2]);var inst_17765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17764,cljs.core.constant$keyword$29);var inst_17766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17764,cljs.core.constant$keyword$28);var inst_17767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17764,cljs.core.constant$keyword$27);var inst_17768 = inst_17758;var state_17819__$1 = (function (){var statearr_17826 = state_17819;(statearr_17826[8] = inst_17768);
(statearr_17826[9] = inst_17767);
(statearr_17826[10] = inst_17766);
(statearr_17826[11] = inst_17765);
return statearr_17826;
})();var statearr_17827_17866 = state_17819__$1;(statearr_17827_17866[2] = null);
(statearr_17827_17866[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 5))
{var inst_17768 = (state_17819[8]);var inst_17771 = cljs.core.seq_QMARK_(inst_17768);var state_17819__$1 = state_17819;if(inst_17771)
{var statearr_17828_17867 = state_17819__$1;(statearr_17828_17867[1] = 7);
} else
{var statearr_17829_17868 = state_17819__$1;(statearr_17829_17868[1] = 8);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 6))
{var inst_17817 = (state_17819[2]);var state_17819__$1 = state_17819;return cljs.core.async.impl.ioc_helpers.return_chan(state_17819__$1,inst_17817);
} else
{if((state_val_17820 === 7))
{var inst_17768 = (state_17819[8]);var inst_17773 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17768);var state_17819__$1 = state_17819;var statearr_17830_17869 = state_17819__$1;(statearr_17830_17869[2] = inst_17773);
(statearr_17830_17869[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 8))
{var inst_17768 = (state_17819[8]);var state_17819__$1 = state_17819;var statearr_17831_17870 = state_17819__$1;(statearr_17831_17870[2] = inst_17768);
(statearr_17831_17870[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 9))
{var inst_17776 = (state_17819[12]);var inst_17776__$1 = (state_17819[2]);var inst_17777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17776__$1,cljs.core.constant$keyword$29);var inst_17778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17776__$1,cljs.core.constant$keyword$28);var inst_17779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17776__$1,cljs.core.constant$keyword$27);var state_17819__$1 = (function (){var statearr_17832 = state_17819;(statearr_17832[12] = inst_17776__$1);
(statearr_17832[13] = inst_17779);
(statearr_17832[14] = inst_17778);
return statearr_17832;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_17819__$1,10,inst_17777);
} else
{if((state_val_17820 === 10))
{var inst_17784 = (state_17819[15]);var inst_17783 = (state_17819[16]);var inst_17782 = (state_17819[2]);var inst_17783__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17782,0,null);var inst_17784__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17782,1,null);var inst_17785 = (inst_17783__$1 == null);var inst_17786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17784__$1,change);var inst_17787 = (inst_17785) || (inst_17786);var state_17819__$1 = (function (){var statearr_17833 = state_17819;(statearr_17833[15] = inst_17784__$1);
(statearr_17833[16] = inst_17783__$1);
return statearr_17833;
})();if(cljs.core.truth_(inst_17787))
{var statearr_17834_17871 = state_17819__$1;(statearr_17834_17871[1] = 11);
} else
{var statearr_17835_17872 = state_17819__$1;(statearr_17835_17872[1] = 12);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 11))
{var inst_17783 = (state_17819[16]);var inst_17789 = (inst_17783 == null);var state_17819__$1 = state_17819;if(cljs.core.truth_(inst_17789))
{var statearr_17836_17873 = state_17819__$1;(statearr_17836_17873[1] = 14);
} else
{var statearr_17837_17874 = state_17819__$1;(statearr_17837_17874[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 12))
{var inst_17798 = (state_17819[17]);var inst_17784 = (state_17819[15]);var inst_17779 = (state_17819[13]);var inst_17798__$1 = (inst_17779.cljs$core$IFn$_invoke$arity$1 ? inst_17779.cljs$core$IFn$_invoke$arity$1(inst_17784) : inst_17779.call(null,inst_17784));var state_17819__$1 = (function (){var statearr_17838 = state_17819;(statearr_17838[17] = inst_17798__$1);
return statearr_17838;
})();if(cljs.core.truth_(inst_17798__$1))
{var statearr_17839_17875 = state_17819__$1;(statearr_17839_17875[1] = 17);
} else
{var statearr_17840_17876 = state_17819__$1;(statearr_17840_17876[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 13))
{var inst_17815 = (state_17819[2]);var state_17819__$1 = state_17819;var statearr_17841_17877 = state_17819__$1;(statearr_17841_17877[2] = inst_17815);
(statearr_17841_17877[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 14))
{var inst_17784 = (state_17819[15]);var inst_17791 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17784);var state_17819__$1 = state_17819;var statearr_17842_17878 = state_17819__$1;(statearr_17842_17878[2] = inst_17791);
(statearr_17842_17878[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 15))
{var state_17819__$1 = state_17819;var statearr_17843_17879 = state_17819__$1;(statearr_17843_17879[2] = null);
(statearr_17843_17879[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 16))
{var inst_17794 = (state_17819[2]);var inst_17795 = calc_state();var inst_17768 = inst_17795;var state_17819__$1 = (function (){var statearr_17844 = state_17819;(statearr_17844[8] = inst_17768);
(statearr_17844[18] = inst_17794);
return statearr_17844;
})();var statearr_17845_17880 = state_17819__$1;(statearr_17845_17880[2] = null);
(statearr_17845_17880[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 17))
{var inst_17798 = (state_17819[17]);var state_17819__$1 = state_17819;var statearr_17846_17881 = state_17819__$1;(statearr_17846_17881[2] = inst_17798);
(statearr_17846_17881[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 18))
{var inst_17784 = (state_17819[15]);var inst_17779 = (state_17819[13]);var inst_17778 = (state_17819[14]);var inst_17801 = cljs.core.empty_QMARK_(inst_17779);var inst_17802 = (inst_17778.cljs$core$IFn$_invoke$arity$1 ? inst_17778.cljs$core$IFn$_invoke$arity$1(inst_17784) : inst_17778.call(null,inst_17784));var inst_17803 = cljs.core.not(inst_17802);var inst_17804 = (inst_17801) && (inst_17803);var state_17819__$1 = state_17819;var statearr_17847_17882 = state_17819__$1;(statearr_17847_17882[2] = inst_17804);
(statearr_17847_17882[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 19))
{var inst_17806 = (state_17819[2]);var state_17819__$1 = state_17819;if(cljs.core.truth_(inst_17806))
{var statearr_17848_17883 = state_17819__$1;(statearr_17848_17883[1] = 20);
} else
{var statearr_17849_17884 = state_17819__$1;(statearr_17849_17884[1] = 21);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 20))
{var inst_17783 = (state_17819[16]);var state_17819__$1 = state_17819;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17819__$1,23,out,inst_17783);
} else
{if((state_val_17820 === 21))
{var state_17819__$1 = state_17819;var statearr_17850_17885 = state_17819__$1;(statearr_17850_17885[2] = null);
(statearr_17850_17885[1] = 22);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 22))
{var inst_17776 = (state_17819[12]);var inst_17812 = (state_17819[2]);var inst_17768 = inst_17776;var state_17819__$1 = (function (){var statearr_17851 = state_17819;(statearr_17851[8] = inst_17768);
(statearr_17851[19] = inst_17812);
return statearr_17851;
})();var statearr_17852_17886 = state_17819__$1;(statearr_17852_17886[2] = null);
(statearr_17852_17886[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17820 === 23))
{var inst_17809 = (state_17819[2]);var state_17819__$1 = state_17819;var statearr_17853_17887 = state_17819__$1;(statearr_17853_17887[2] = inst_17809);
(statearr_17853_17887[1] = 22);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_17857 = (new Array(20));(statearr_17857[0] = state_machine__5792__auto__);
(statearr_17857[1] = 1);
return statearr_17857;
});
var state_machine__5792__auto____1 = (function (state_17819){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_17819);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17858){if((e17858 instanceof Object))
{var ex__5795__auto__ = e17858;var statearr_17859_17888 = state_17819;(statearr_17859_17888[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17819);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e17858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__17889 = state_17819;
state_17819 = G__17889;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17819){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17860 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_17860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17861);
return statearr_17860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
cljs.core.async.Pub = (function (){var obj17891 = {};return obj17891;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3291__auto__,mults){
return (function (p1__17892_SHARP_){if(cljs.core.truth_((p1__17892_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17892_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17892_SHARP_.call(null,topic))))
{return p1__17892_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17892_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18017 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18017 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18018){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18018 = meta18018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18017.cljs$lang$type = true;
cljs.core.async.t18017.cljs$lang$ctorStr = "cljs.core.async/t18017";
cljs.core.async.t18017.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t18017");
});})(mults,ensure_mult))
;
cljs.core.async.t18017.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18017.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18017.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18017.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18019){var self__ = this;
var _18019__$1 = this;return self__.meta18018;
});})(mults,ensure_mult))
;
cljs.core.async.t18017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18019,meta18018__$1){var self__ = this;
var _18019__$1 = this;return (new cljs.core.async.t18017(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18018__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18017 = ((function (mults,ensure_mult){
return (function __GT_t18017(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18018){return (new cljs.core.async.t18017(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18018));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18017(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5861__auto___18141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18093){var state_val_18094 = (state_18093[1]);if((state_val_18094 === 1))
{var state_18093__$1 = state_18093;var statearr_18095_18142 = state_18093__$1;(statearr_18095_18142[2] = null);
(statearr_18095_18142[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 2))
{var state_18093__$1 = state_18093;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18093__$1,4,ch);
} else
{if((state_val_18094 === 3))
{var inst_18091 = (state_18093[2]);var state_18093__$1 = state_18093;return cljs.core.async.impl.ioc_helpers.return_chan(state_18093__$1,inst_18091);
} else
{if((state_val_18094 === 4))
{var inst_18022 = (state_18093[7]);var inst_18022__$1 = (state_18093[2]);var inst_18023 = (inst_18022__$1 == null);var state_18093__$1 = (function (){var statearr_18096 = state_18093;(statearr_18096[7] = inst_18022__$1);
return statearr_18096;
})();if(cljs.core.truth_(inst_18023))
{var statearr_18097_18143 = state_18093__$1;(statearr_18097_18143[1] = 5);
} else
{var statearr_18098_18144 = state_18093__$1;(statearr_18098_18144[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 5))
{var inst_18029 = cljs.core.deref(mults);var inst_18030 = cljs.core.vals(inst_18029);var inst_18031 = cljs.core.seq(inst_18030);var inst_18032 = inst_18031;var inst_18033 = null;var inst_18034 = 0;var inst_18035 = 0;var state_18093__$1 = (function (){var statearr_18099 = state_18093;(statearr_18099[8] = inst_18032);
(statearr_18099[9] = inst_18034);
(statearr_18099[10] = inst_18033);
(statearr_18099[11] = inst_18035);
return statearr_18099;
})();var statearr_18100_18145 = state_18093__$1;(statearr_18100_18145[2] = null);
(statearr_18100_18145[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 6))
{var inst_18072 = (state_18093[12]);var inst_18070 = (state_18093[13]);var inst_18022 = (state_18093[7]);var inst_18070__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18022) : topic_fn.call(null,inst_18022));var inst_18071 = cljs.core.deref(mults);var inst_18072__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18071,inst_18070__$1);var state_18093__$1 = (function (){var statearr_18101 = state_18093;(statearr_18101[12] = inst_18072__$1);
(statearr_18101[13] = inst_18070__$1);
return statearr_18101;
})();if(cljs.core.truth_(inst_18072__$1))
{var statearr_18102_18146 = state_18093__$1;(statearr_18102_18146[1] = 19);
} else
{var statearr_18103_18147 = state_18093__$1;(statearr_18103_18147[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 7))
{var inst_18089 = (state_18093[2]);var state_18093__$1 = state_18093;var statearr_18104_18148 = state_18093__$1;(statearr_18104_18148[2] = inst_18089);
(statearr_18104_18148[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 8))
{var inst_18034 = (state_18093[9]);var inst_18035 = (state_18093[11]);var inst_18037 = (inst_18035 < inst_18034);var inst_18038 = inst_18037;var state_18093__$1 = state_18093;if(cljs.core.truth_(inst_18038))
{var statearr_18108_18149 = state_18093__$1;(statearr_18108_18149[1] = 10);
} else
{var statearr_18109_18150 = state_18093__$1;(statearr_18109_18150[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 9))
{var inst_18068 = (state_18093[2]);var state_18093__$1 = state_18093;var statearr_18110_18151 = state_18093__$1;(statearr_18110_18151[2] = inst_18068);
(statearr_18110_18151[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 10))
{var inst_18032 = (state_18093[8]);var inst_18034 = (state_18093[9]);var inst_18033 = (state_18093[10]);var inst_18035 = (state_18093[11]);var inst_18040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18033,inst_18035);var inst_18041 = cljs.core.async.muxch_STAR_(inst_18040);var inst_18042 = cljs.core.async.close_BANG_(inst_18041);var inst_18043 = (inst_18035 + 1);var tmp18105 = inst_18032;var tmp18106 = inst_18034;var tmp18107 = inst_18033;var inst_18032__$1 = tmp18105;var inst_18033__$1 = tmp18107;var inst_18034__$1 = tmp18106;var inst_18035__$1 = inst_18043;var state_18093__$1 = (function (){var statearr_18111 = state_18093;(statearr_18111[8] = inst_18032__$1);
(statearr_18111[14] = inst_18042);
(statearr_18111[9] = inst_18034__$1);
(statearr_18111[10] = inst_18033__$1);
(statearr_18111[11] = inst_18035__$1);
return statearr_18111;
})();var statearr_18112_18152 = state_18093__$1;(statearr_18112_18152[2] = null);
(statearr_18112_18152[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 11))
{var inst_18032 = (state_18093[8]);var inst_18046 = (state_18093[15]);var inst_18046__$1 = cljs.core.seq(inst_18032);var state_18093__$1 = (function (){var statearr_18113 = state_18093;(statearr_18113[15] = inst_18046__$1);
return statearr_18113;
})();if(inst_18046__$1)
{var statearr_18114_18153 = state_18093__$1;(statearr_18114_18153[1] = 13);
} else
{var statearr_18115_18154 = state_18093__$1;(statearr_18115_18154[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 12))
{var inst_18066 = (state_18093[2]);var state_18093__$1 = state_18093;var statearr_18116_18155 = state_18093__$1;(statearr_18116_18155[2] = inst_18066);
(statearr_18116_18155[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 13))
{var inst_18046 = (state_18093[15]);var inst_18048 = cljs.core.chunked_seq_QMARK_(inst_18046);var state_18093__$1 = state_18093;if(inst_18048)
{var statearr_18117_18156 = state_18093__$1;(statearr_18117_18156[1] = 16);
} else
{var statearr_18118_18157 = state_18093__$1;(statearr_18118_18157[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 14))
{var state_18093__$1 = state_18093;var statearr_18119_18158 = state_18093__$1;(statearr_18119_18158[2] = null);
(statearr_18119_18158[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 15))
{var inst_18064 = (state_18093[2]);var state_18093__$1 = state_18093;var statearr_18120_18159 = state_18093__$1;(statearr_18120_18159[2] = inst_18064);
(statearr_18120_18159[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 16))
{var inst_18046 = (state_18093[15]);var inst_18050 = cljs.core.chunk_first(inst_18046);var inst_18051 = cljs.core.chunk_rest(inst_18046);var inst_18052 = cljs.core.count(inst_18050);var inst_18032 = inst_18051;var inst_18033 = inst_18050;var inst_18034 = inst_18052;var inst_18035 = 0;var state_18093__$1 = (function (){var statearr_18121 = state_18093;(statearr_18121[8] = inst_18032);
(statearr_18121[9] = inst_18034);
(statearr_18121[10] = inst_18033);
(statearr_18121[11] = inst_18035);
return statearr_18121;
})();var statearr_18122_18160 = state_18093__$1;(statearr_18122_18160[2] = null);
(statearr_18122_18160[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 17))
{var inst_18046 = (state_18093[15]);var inst_18055 = cljs.core.first(inst_18046);var inst_18056 = cljs.core.async.muxch_STAR_(inst_18055);var inst_18057 = cljs.core.async.close_BANG_(inst_18056);var inst_18058 = cljs.core.next(inst_18046);var inst_18032 = inst_18058;var inst_18033 = null;var inst_18034 = 0;var inst_18035 = 0;var state_18093__$1 = (function (){var statearr_18123 = state_18093;(statearr_18123[8] = inst_18032);
(statearr_18123[16] = inst_18057);
(statearr_18123[9] = inst_18034);
(statearr_18123[10] = inst_18033);
(statearr_18123[11] = inst_18035);
return statearr_18123;
})();var statearr_18124_18161 = state_18093__$1;(statearr_18124_18161[2] = null);
(statearr_18124_18161[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 18))
{var inst_18061 = (state_18093[2]);var state_18093__$1 = state_18093;var statearr_18125_18162 = state_18093__$1;(statearr_18125_18162[2] = inst_18061);
(statearr_18125_18162[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 19))
{var state_18093__$1 = state_18093;var statearr_18126_18163 = state_18093__$1;(statearr_18126_18163[2] = null);
(statearr_18126_18163[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 20))
{var state_18093__$1 = state_18093;var statearr_18127_18164 = state_18093__$1;(statearr_18127_18164[2] = null);
(statearr_18127_18164[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 21))
{var inst_18086 = (state_18093[2]);var state_18093__$1 = (function (){var statearr_18128 = state_18093;(statearr_18128[17] = inst_18086);
return statearr_18128;
})();var statearr_18129_18165 = state_18093__$1;(statearr_18129_18165[2] = null);
(statearr_18129_18165[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 22))
{var inst_18083 = (state_18093[2]);var state_18093__$1 = state_18093;var statearr_18130_18166 = state_18093__$1;(statearr_18130_18166[2] = inst_18083);
(statearr_18130_18166[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 23))
{var inst_18070 = (state_18093[13]);var inst_18074 = (state_18093[2]);var inst_18075 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18070);var state_18093__$1 = (function (){var statearr_18131 = state_18093;(statearr_18131[18] = inst_18074);
return statearr_18131;
})();var statearr_18132_18167 = state_18093__$1;(statearr_18132_18167[2] = inst_18075);
cljs.core.async.impl.ioc_helpers.process_exception(state_18093__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18094 === 24))
{var inst_18072 = (state_18093[12]);var inst_18022 = (state_18093[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18093,23,Object,null,22);var inst_18079 = cljs.core.async.muxch_STAR_(inst_18072);var state_18093__$1 = state_18093;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18093__$1,25,inst_18079,inst_18022);
} else
{if((state_val_18094 === 25))
{var inst_18081 = (state_18093[2]);var state_18093__$1 = state_18093;var statearr_18133_18168 = state_18093__$1;(statearr_18133_18168[2] = inst_18081);
cljs.core.async.impl.ioc_helpers.process_exception(state_18093__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18137 = (new Array(19));(statearr_18137[0] = state_machine__5792__auto__);
(statearr_18137[1] = 1);
return statearr_18137;
});
var state_machine__5792__auto____1 = (function (state_18093){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_18093);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18138){if((e18138 instanceof Object))
{var ex__5795__auto__ = e18138;var statearr_18139_18169 = state_18093;(statearr_18139_18169[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18093);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__18170 = state_18093;
state_18093 = G__18170;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18093){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18140 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_18140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18141);
return statearr_18140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5861__auto___18307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18277){var state_val_18278 = (state_18277[1]);if((state_val_18278 === 1))
{var state_18277__$1 = state_18277;var statearr_18279_18308 = state_18277__$1;(statearr_18279_18308[2] = null);
(statearr_18279_18308[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 2))
{var inst_18240 = cljs.core.reset_BANG_(dctr,cnt);var inst_18241 = 0;var state_18277__$1 = (function (){var statearr_18280 = state_18277;(statearr_18280[7] = inst_18240);
(statearr_18280[8] = inst_18241);
return statearr_18280;
})();var statearr_18281_18309 = state_18277__$1;(statearr_18281_18309[2] = null);
(statearr_18281_18309[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 3))
{var inst_18275 = (state_18277[2]);var state_18277__$1 = state_18277;return cljs.core.async.impl.ioc_helpers.return_chan(state_18277__$1,inst_18275);
} else
{if((state_val_18278 === 4))
{var inst_18241 = (state_18277[8]);var inst_18243 = (inst_18241 < cnt);var state_18277__$1 = state_18277;if(cljs.core.truth_(inst_18243))
{var statearr_18282_18310 = state_18277__$1;(statearr_18282_18310[1] = 6);
} else
{var statearr_18283_18311 = state_18277__$1;(statearr_18283_18311[1] = 7);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 5))
{var inst_18261 = (state_18277[2]);var state_18277__$1 = (function (){var statearr_18284 = state_18277;(statearr_18284[9] = inst_18261);
return statearr_18284;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18277__$1,12,dchan);
} else
{if((state_val_18278 === 6))
{var state_18277__$1 = state_18277;var statearr_18285_18312 = state_18277__$1;(statearr_18285_18312[2] = null);
(statearr_18285_18312[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 7))
{var state_18277__$1 = state_18277;var statearr_18286_18313 = state_18277__$1;(statearr_18286_18313[2] = null);
(statearr_18286_18313[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 8))
{var inst_18259 = (state_18277[2]);var state_18277__$1 = state_18277;var statearr_18287_18314 = state_18277__$1;(statearr_18287_18314[2] = inst_18259);
(statearr_18287_18314[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 9))
{var inst_18241 = (state_18277[8]);var inst_18254 = (state_18277[2]);var inst_18255 = (inst_18241 + 1);var inst_18241__$1 = inst_18255;var state_18277__$1 = (function (){var statearr_18288 = state_18277;(statearr_18288[10] = inst_18254);
(statearr_18288[8] = inst_18241__$1);
return statearr_18288;
})();var statearr_18289_18315 = state_18277__$1;(statearr_18289_18315[2] = null);
(statearr_18289_18315[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 10))
{var inst_18245 = (state_18277[2]);var inst_18246 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_18277__$1 = (function (){var statearr_18290 = state_18277;(statearr_18290[11] = inst_18245);
return statearr_18290;
})();var statearr_18291_18316 = state_18277__$1;(statearr_18291_18316[2] = inst_18246);
cljs.core.async.impl.ioc_helpers.process_exception(state_18277__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 11))
{var inst_18241 = (state_18277[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18277,10,Object,null,9);var inst_18250 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18241) : chs__$1.call(null,inst_18241));var inst_18251 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18241) : done.call(null,inst_18241));var inst_18252 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18250,inst_18251);var state_18277__$1 = state_18277;var statearr_18292_18317 = state_18277__$1;(statearr_18292_18317[2] = inst_18252);
cljs.core.async.impl.ioc_helpers.process_exception(state_18277__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 12))
{var inst_18263 = (state_18277[12]);var inst_18263__$1 = (state_18277[2]);var inst_18264 = cljs.core.some(cljs.core.nil_QMARK_,inst_18263__$1);var state_18277__$1 = (function (){var statearr_18293 = state_18277;(statearr_18293[12] = inst_18263__$1);
return statearr_18293;
})();if(cljs.core.truth_(inst_18264))
{var statearr_18294_18318 = state_18277__$1;(statearr_18294_18318[1] = 13);
} else
{var statearr_18295_18319 = state_18277__$1;(statearr_18295_18319[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 13))
{var inst_18266 = cljs.core.async.close_BANG_(out);var state_18277__$1 = state_18277;var statearr_18296_18320 = state_18277__$1;(statearr_18296_18320[2] = inst_18266);
(statearr_18296_18320[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 14))
{var inst_18263 = (state_18277[12]);var inst_18268 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18263);var state_18277__$1 = state_18277;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18277__$1,16,out,inst_18268);
} else
{if((state_val_18278 === 15))
{var inst_18273 = (state_18277[2]);var state_18277__$1 = state_18277;var statearr_18297_18321 = state_18277__$1;(statearr_18297_18321[2] = inst_18273);
(statearr_18297_18321[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18278 === 16))
{var inst_18270 = (state_18277[2]);var state_18277__$1 = (function (){var statearr_18298 = state_18277;(statearr_18298[13] = inst_18270);
return statearr_18298;
})();var statearr_18299_18322 = state_18277__$1;(statearr_18299_18322[2] = null);
(statearr_18299_18322[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18303 = (new Array(14));(statearr_18303[0] = state_machine__5792__auto__);
(statearr_18303[1] = 1);
return statearr_18303;
});
var state_machine__5792__auto____1 = (function (state_18277){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_18277);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18304){if((e18304 instanceof Object))
{var ex__5795__auto__ = e18304;var statearr_18305_18323 = state_18277;(statearr_18305_18323[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18277);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__18324 = state_18277;
state_18277 = G__18324;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18277){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18306 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_18306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18307);
return statearr_18306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___18432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18408){var state_val_18409 = (state_18408[1]);if((state_val_18409 === 1))
{var inst_18379 = cljs.core.vec(chs);var inst_18380 = inst_18379;var state_18408__$1 = (function (){var statearr_18410 = state_18408;(statearr_18410[7] = inst_18380);
return statearr_18410;
})();var statearr_18411_18433 = state_18408__$1;(statearr_18411_18433[2] = null);
(statearr_18411_18433[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18409 === 2))
{var inst_18380 = (state_18408[7]);var inst_18382 = cljs.core.count(inst_18380);var inst_18383 = (inst_18382 > 0);var state_18408__$1 = state_18408;if(cljs.core.truth_(inst_18383))
{var statearr_18412_18434 = state_18408__$1;(statearr_18412_18434[1] = 4);
} else
{var statearr_18413_18435 = state_18408__$1;(statearr_18413_18435[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18409 === 3))
{var inst_18406 = (state_18408[2]);var state_18408__$1 = state_18408;return cljs.core.async.impl.ioc_helpers.return_chan(state_18408__$1,inst_18406);
} else
{if((state_val_18409 === 4))
{var inst_18380 = (state_18408[7]);var state_18408__$1 = state_18408;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_18408__$1,7,inst_18380);
} else
{if((state_val_18409 === 5))
{var inst_18402 = cljs.core.async.close_BANG_(out);var state_18408__$1 = state_18408;var statearr_18414_18436 = state_18408__$1;(statearr_18414_18436[2] = inst_18402);
(statearr_18414_18436[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18409 === 6))
{var inst_18404 = (state_18408[2]);var state_18408__$1 = state_18408;var statearr_18415_18437 = state_18408__$1;(statearr_18415_18437[2] = inst_18404);
(statearr_18415_18437[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18409 === 7))
{var inst_18388 = (state_18408[8]);var inst_18387 = (state_18408[9]);var inst_18387__$1 = (state_18408[2]);var inst_18388__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18387__$1,0,null);var inst_18389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18387__$1,1,null);var inst_18390 = (inst_18388__$1 == null);var state_18408__$1 = (function (){var statearr_18416 = state_18408;(statearr_18416[10] = inst_18389);
(statearr_18416[8] = inst_18388__$1);
(statearr_18416[9] = inst_18387__$1);
return statearr_18416;
})();if(cljs.core.truth_(inst_18390))
{var statearr_18417_18438 = state_18408__$1;(statearr_18417_18438[1] = 8);
} else
{var statearr_18418_18439 = state_18408__$1;(statearr_18418_18439[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18409 === 8))
{var inst_18380 = (state_18408[7]);var inst_18389 = (state_18408[10]);var inst_18388 = (state_18408[8]);var inst_18387 = (state_18408[9]);var inst_18392 = (function (){var c = inst_18389;var v = inst_18388;var vec__18385 = inst_18387;var cs = inst_18380;return ((function (c,v,vec__18385,cs,inst_18380,inst_18389,inst_18388,inst_18387,state_val_18409){
return (function (p1__18325_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18325_SHARP_);
});
;})(c,v,vec__18385,cs,inst_18380,inst_18389,inst_18388,inst_18387,state_val_18409))
})();var inst_18393 = cljs.core.filterv(inst_18392,inst_18380);var inst_18380__$1 = inst_18393;var state_18408__$1 = (function (){var statearr_18419 = state_18408;(statearr_18419[7] = inst_18380__$1);
return statearr_18419;
})();var statearr_18420_18440 = state_18408__$1;(statearr_18420_18440[2] = null);
(statearr_18420_18440[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18409 === 9))
{var inst_18388 = (state_18408[8]);var state_18408__$1 = state_18408;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18408__$1,11,out,inst_18388);
} else
{if((state_val_18409 === 10))
{var inst_18400 = (state_18408[2]);var state_18408__$1 = state_18408;var statearr_18422_18441 = state_18408__$1;(statearr_18422_18441[2] = inst_18400);
(statearr_18422_18441[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18409 === 11))
{var inst_18380 = (state_18408[7]);var inst_18397 = (state_18408[2]);var tmp18421 = inst_18380;var inst_18380__$1 = tmp18421;var state_18408__$1 = (function (){var statearr_18423 = state_18408;(statearr_18423[7] = inst_18380__$1);
(statearr_18423[11] = inst_18397);
return statearr_18423;
})();var statearr_18424_18442 = state_18408__$1;(statearr_18424_18442[2] = null);
(statearr_18424_18442[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18428 = (new Array(12));(statearr_18428[0] = state_machine__5792__auto__);
(statearr_18428[1] = 1);
return statearr_18428;
});
var state_machine__5792__auto____1 = (function (state_18408){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_18408);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18429){if((e18429 instanceof Object))
{var ex__5795__auto__ = e18429;var statearr_18430_18443 = state_18408;(statearr_18430_18443[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18408);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__18444 = state_18408;
state_18408 = G__18444;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18408){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18431 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_18431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18432);
return statearr_18431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___18537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18514){var state_val_18515 = (state_18514[1]);if((state_val_18515 === 1))
{var inst_18491 = 0;var state_18514__$1 = (function (){var statearr_18516 = state_18514;(statearr_18516[7] = inst_18491);
return statearr_18516;
})();var statearr_18517_18538 = state_18514__$1;(statearr_18517_18538[2] = null);
(statearr_18517_18538[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18515 === 2))
{var inst_18491 = (state_18514[7]);var inst_18493 = (inst_18491 < n);var state_18514__$1 = state_18514;if(cljs.core.truth_(inst_18493))
{var statearr_18518_18539 = state_18514__$1;(statearr_18518_18539[1] = 4);
} else
{var statearr_18519_18540 = state_18514__$1;(statearr_18519_18540[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18515 === 3))
{var inst_18511 = (state_18514[2]);var inst_18512 = cljs.core.async.close_BANG_(out);var state_18514__$1 = (function (){var statearr_18520 = state_18514;(statearr_18520[8] = inst_18511);
return statearr_18520;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_18514__$1,inst_18512);
} else
{if((state_val_18515 === 4))
{var state_18514__$1 = state_18514;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18514__$1,7,ch);
} else
{if((state_val_18515 === 5))
{var state_18514__$1 = state_18514;var statearr_18521_18541 = state_18514__$1;(statearr_18521_18541[2] = null);
(statearr_18521_18541[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18515 === 6))
{var inst_18509 = (state_18514[2]);var state_18514__$1 = state_18514;var statearr_18522_18542 = state_18514__$1;(statearr_18522_18542[2] = inst_18509);
(statearr_18522_18542[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18515 === 7))
{var inst_18496 = (state_18514[9]);var inst_18496__$1 = (state_18514[2]);var inst_18497 = (inst_18496__$1 == null);var inst_18498 = cljs.core.not(inst_18497);var state_18514__$1 = (function (){var statearr_18523 = state_18514;(statearr_18523[9] = inst_18496__$1);
return statearr_18523;
})();if(inst_18498)
{var statearr_18524_18543 = state_18514__$1;(statearr_18524_18543[1] = 8);
} else
{var statearr_18525_18544 = state_18514__$1;(statearr_18525_18544[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18515 === 8))
{var inst_18496 = (state_18514[9]);var state_18514__$1 = state_18514;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18514__$1,11,out,inst_18496);
} else
{if((state_val_18515 === 9))
{var state_18514__$1 = state_18514;var statearr_18526_18545 = state_18514__$1;(statearr_18526_18545[2] = null);
(statearr_18526_18545[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18515 === 10))
{var inst_18506 = (state_18514[2]);var state_18514__$1 = state_18514;var statearr_18527_18546 = state_18514__$1;(statearr_18527_18546[2] = inst_18506);
(statearr_18527_18546[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18515 === 11))
{var inst_18491 = (state_18514[7]);var inst_18501 = (state_18514[2]);var inst_18502 = (inst_18491 + 1);var inst_18491__$1 = inst_18502;var state_18514__$1 = (function (){var statearr_18528 = state_18514;(statearr_18528[7] = inst_18491__$1);
(statearr_18528[10] = inst_18501);
return statearr_18528;
})();var statearr_18529_18547 = state_18514__$1;(statearr_18529_18547[2] = null);
(statearr_18529_18547[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18533 = (new Array(11));(statearr_18533[0] = state_machine__5792__auto__);
(statearr_18533[1] = 1);
return statearr_18533;
});
var state_machine__5792__auto____1 = (function (state_18514){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_18514);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18534){if((e18534 instanceof Object))
{var ex__5795__auto__ = e18534;var statearr_18535_18548 = state_18514;(statearr_18535_18548[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18514);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__18549 = state_18514;
state_18514 = G__18549;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18514){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18536 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_18536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18537);
return statearr_18536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___18646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18621){var state_val_18622 = (state_18621[1]);if((state_val_18622 === 1))
{var inst_18598 = null;var state_18621__$1 = (function (){var statearr_18623 = state_18621;(statearr_18623[7] = inst_18598);
return statearr_18623;
})();var statearr_18624_18647 = state_18621__$1;(statearr_18624_18647[2] = null);
(statearr_18624_18647[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18622 === 2))
{var state_18621__$1 = state_18621;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18621__$1,4,ch);
} else
{if((state_val_18622 === 3))
{var inst_18618 = (state_18621[2]);var inst_18619 = cljs.core.async.close_BANG_(out);var state_18621__$1 = (function (){var statearr_18625 = state_18621;(statearr_18625[8] = inst_18618);
return statearr_18625;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_18621__$1,inst_18619);
} else
{if((state_val_18622 === 4))
{var inst_18601 = (state_18621[9]);var inst_18601__$1 = (state_18621[2]);var inst_18602 = (inst_18601__$1 == null);var inst_18603 = cljs.core.not(inst_18602);var state_18621__$1 = (function (){var statearr_18626 = state_18621;(statearr_18626[9] = inst_18601__$1);
return statearr_18626;
})();if(inst_18603)
{var statearr_18627_18648 = state_18621__$1;(statearr_18627_18648[1] = 5);
} else
{var statearr_18628_18649 = state_18621__$1;(statearr_18628_18649[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18622 === 5))
{var inst_18601 = (state_18621[9]);var inst_18598 = (state_18621[7]);var inst_18605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18601,inst_18598);var state_18621__$1 = state_18621;if(inst_18605)
{var statearr_18629_18650 = state_18621__$1;(statearr_18629_18650[1] = 8);
} else
{var statearr_18630_18651 = state_18621__$1;(statearr_18630_18651[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18622 === 6))
{var state_18621__$1 = state_18621;var statearr_18632_18652 = state_18621__$1;(statearr_18632_18652[2] = null);
(statearr_18632_18652[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18622 === 7))
{var inst_18616 = (state_18621[2]);var state_18621__$1 = state_18621;var statearr_18633_18653 = state_18621__$1;(statearr_18633_18653[2] = inst_18616);
(statearr_18633_18653[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18622 === 8))
{var inst_18598 = (state_18621[7]);var tmp18631 = inst_18598;var inst_18598__$1 = tmp18631;var state_18621__$1 = (function (){var statearr_18634 = state_18621;(statearr_18634[7] = inst_18598__$1);
return statearr_18634;
})();var statearr_18635_18654 = state_18621__$1;(statearr_18635_18654[2] = null);
(statearr_18635_18654[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18622 === 9))
{var inst_18601 = (state_18621[9]);var state_18621__$1 = state_18621;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18621__$1,11,out,inst_18601);
} else
{if((state_val_18622 === 10))
{var inst_18613 = (state_18621[2]);var state_18621__$1 = state_18621;var statearr_18636_18655 = state_18621__$1;(statearr_18636_18655[2] = inst_18613);
(statearr_18636_18655[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18622 === 11))
{var inst_18601 = (state_18621[9]);var inst_18610 = (state_18621[2]);var inst_18598 = inst_18601;var state_18621__$1 = (function (){var statearr_18637 = state_18621;(statearr_18637[10] = inst_18610);
(statearr_18637[7] = inst_18598);
return statearr_18637;
})();var statearr_18638_18656 = state_18621__$1;(statearr_18638_18656[2] = null);
(statearr_18638_18656[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18642 = (new Array(11));(statearr_18642[0] = state_machine__5792__auto__);
(statearr_18642[1] = 1);
return statearr_18642;
});
var state_machine__5792__auto____1 = (function (state_18621){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_18621);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18643){if((e18643 instanceof Object))
{var ex__5795__auto__ = e18643;var statearr_18644_18657 = state_18621;(statearr_18644_18657[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18621);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__18658 = state_18621;
state_18621 = G__18658;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18621){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18645 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_18645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18646);
return statearr_18645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___18793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18763){var state_val_18764 = (state_18763[1]);if((state_val_18764 === 1))
{var inst_18726 = (new Array(n));var inst_18727 = inst_18726;var inst_18728 = 0;var state_18763__$1 = (function (){var statearr_18765 = state_18763;(statearr_18765[7] = inst_18727);
(statearr_18765[8] = inst_18728);
return statearr_18765;
})();var statearr_18766_18794 = state_18763__$1;(statearr_18766_18794[2] = null);
(statearr_18766_18794[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 2))
{var state_18763__$1 = state_18763;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18763__$1,4,ch);
} else
{if((state_val_18764 === 3))
{var inst_18761 = (state_18763[2]);var state_18763__$1 = state_18763;return cljs.core.async.impl.ioc_helpers.return_chan(state_18763__$1,inst_18761);
} else
{if((state_val_18764 === 4))
{var inst_18731 = (state_18763[9]);var inst_18731__$1 = (state_18763[2]);var inst_18732 = (inst_18731__$1 == null);var inst_18733 = cljs.core.not(inst_18732);var state_18763__$1 = (function (){var statearr_18767 = state_18763;(statearr_18767[9] = inst_18731__$1);
return statearr_18767;
})();if(inst_18733)
{var statearr_18768_18795 = state_18763__$1;(statearr_18768_18795[1] = 5);
} else
{var statearr_18769_18796 = state_18763__$1;(statearr_18769_18796[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 5))
{var inst_18727 = (state_18763[7]);var inst_18728 = (state_18763[8]);var inst_18736 = (state_18763[10]);var inst_18731 = (state_18763[9]);var inst_18735 = (inst_18727[inst_18728] = inst_18731);var inst_18736__$1 = (inst_18728 + 1);var inst_18737 = (inst_18736__$1 < n);var state_18763__$1 = (function (){var statearr_18770 = state_18763;(statearr_18770[10] = inst_18736__$1);
(statearr_18770[11] = inst_18735);
return statearr_18770;
})();if(cljs.core.truth_(inst_18737))
{var statearr_18771_18797 = state_18763__$1;(statearr_18771_18797[1] = 8);
} else
{var statearr_18772_18798 = state_18763__$1;(statearr_18772_18798[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 6))
{var inst_18728 = (state_18763[8]);var inst_18749 = (inst_18728 > 0);var state_18763__$1 = state_18763;if(cljs.core.truth_(inst_18749))
{var statearr_18774_18799 = state_18763__$1;(statearr_18774_18799[1] = 12);
} else
{var statearr_18775_18800 = state_18763__$1;(statearr_18775_18800[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 7))
{var inst_18759 = (state_18763[2]);var state_18763__$1 = state_18763;var statearr_18776_18801 = state_18763__$1;(statearr_18776_18801[2] = inst_18759);
(statearr_18776_18801[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 8))
{var inst_18727 = (state_18763[7]);var inst_18736 = (state_18763[10]);var tmp18773 = inst_18727;var inst_18727__$1 = tmp18773;var inst_18728 = inst_18736;var state_18763__$1 = (function (){var statearr_18777 = state_18763;(statearr_18777[7] = inst_18727__$1);
(statearr_18777[8] = inst_18728);
return statearr_18777;
})();var statearr_18778_18802 = state_18763__$1;(statearr_18778_18802[2] = null);
(statearr_18778_18802[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 9))
{var inst_18727 = (state_18763[7]);var inst_18741 = cljs.core.vec(inst_18727);var state_18763__$1 = state_18763;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18763__$1,11,out,inst_18741);
} else
{if((state_val_18764 === 10))
{var inst_18747 = (state_18763[2]);var state_18763__$1 = state_18763;var statearr_18779_18803 = state_18763__$1;(statearr_18779_18803[2] = inst_18747);
(statearr_18779_18803[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 11))
{var inst_18743 = (state_18763[2]);var inst_18744 = (new Array(n));var inst_18727 = inst_18744;var inst_18728 = 0;var state_18763__$1 = (function (){var statearr_18780 = state_18763;(statearr_18780[7] = inst_18727);
(statearr_18780[8] = inst_18728);
(statearr_18780[12] = inst_18743);
return statearr_18780;
})();var statearr_18781_18804 = state_18763__$1;(statearr_18781_18804[2] = null);
(statearr_18781_18804[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 12))
{var inst_18727 = (state_18763[7]);var inst_18751 = cljs.core.vec(inst_18727);var state_18763__$1 = state_18763;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18763__$1,15,out,inst_18751);
} else
{if((state_val_18764 === 13))
{var state_18763__$1 = state_18763;var statearr_18782_18805 = state_18763__$1;(statearr_18782_18805[2] = null);
(statearr_18782_18805[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 14))
{var inst_18756 = (state_18763[2]);var inst_18757 = cljs.core.async.close_BANG_(out);var state_18763__$1 = (function (){var statearr_18783 = state_18763;(statearr_18783[13] = inst_18756);
return statearr_18783;
})();var statearr_18784_18806 = state_18763__$1;(statearr_18784_18806[2] = inst_18757);
(statearr_18784_18806[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18764 === 15))
{var inst_18753 = (state_18763[2]);var state_18763__$1 = state_18763;var statearr_18785_18807 = state_18763__$1;(statearr_18785_18807[2] = inst_18753);
(statearr_18785_18807[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18789 = (new Array(14));(statearr_18789[0] = state_machine__5792__auto__);
(statearr_18789[1] = 1);
return statearr_18789;
});
var state_machine__5792__auto____1 = (function (state_18763){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_18763);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18790){if((e18790 instanceof Object))
{var ex__5795__auto__ = e18790;var statearr_18791_18808 = state_18763;(statearr_18791_18808[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18763);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__18809 = state_18763;
state_18763 = G__18809;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18763){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18792 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_18792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18793);
return statearr_18792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5861__auto___18952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18922){var state_val_18923 = (state_18922[1]);if((state_val_18923 === 1))
{var inst_18881 = (new Array(0));var inst_18882 = inst_18881;var inst_18883 = cljs.core.constant$keyword$30;var state_18922__$1 = (function (){var statearr_18924 = state_18922;(statearr_18924[7] = inst_18883);
(statearr_18924[8] = inst_18882);
return statearr_18924;
})();var statearr_18925_18953 = state_18922__$1;(statearr_18925_18953[2] = null);
(statearr_18925_18953[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 2))
{var state_18922__$1 = state_18922;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18922__$1,4,ch);
} else
{if((state_val_18923 === 3))
{var inst_18920 = (state_18922[2]);var state_18922__$1 = state_18922;return cljs.core.async.impl.ioc_helpers.return_chan(state_18922__$1,inst_18920);
} else
{if((state_val_18923 === 4))
{var inst_18886 = (state_18922[9]);var inst_18886__$1 = (state_18922[2]);var inst_18887 = (inst_18886__$1 == null);var inst_18888 = cljs.core.not(inst_18887);var state_18922__$1 = (function (){var statearr_18926 = state_18922;(statearr_18926[9] = inst_18886__$1);
return statearr_18926;
})();if(inst_18888)
{var statearr_18927_18954 = state_18922__$1;(statearr_18927_18954[1] = 5);
} else
{var statearr_18928_18955 = state_18922__$1;(statearr_18928_18955[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 5))
{var inst_18886 = (state_18922[9]);var inst_18883 = (state_18922[7]);var inst_18890 = (state_18922[10]);var inst_18890__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18886) : f.call(null,inst_18886));var inst_18891 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18890__$1,inst_18883);var inst_18892 = cljs.core.keyword_identical_QMARK_(inst_18883,cljs.core.constant$keyword$30);var inst_18893 = (inst_18891) || (inst_18892);var state_18922__$1 = (function (){var statearr_18929 = state_18922;(statearr_18929[10] = inst_18890__$1);
return statearr_18929;
})();if(cljs.core.truth_(inst_18893))
{var statearr_18930_18956 = state_18922__$1;(statearr_18930_18956[1] = 8);
} else
{var statearr_18931_18957 = state_18922__$1;(statearr_18931_18957[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 6))
{var inst_18882 = (state_18922[8]);var inst_18907 = inst_18882.length;var inst_18908 = (inst_18907 > 0);var state_18922__$1 = state_18922;if(cljs.core.truth_(inst_18908))
{var statearr_18933_18958 = state_18922__$1;(statearr_18933_18958[1] = 12);
} else
{var statearr_18934_18959 = state_18922__$1;(statearr_18934_18959[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 7))
{var inst_18918 = (state_18922[2]);var state_18922__$1 = state_18922;var statearr_18935_18960 = state_18922__$1;(statearr_18935_18960[2] = inst_18918);
(statearr_18935_18960[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 8))
{var inst_18886 = (state_18922[9]);var inst_18882 = (state_18922[8]);var inst_18890 = (state_18922[10]);var inst_18895 = inst_18882.push(inst_18886);var tmp18932 = inst_18882;var inst_18882__$1 = tmp18932;var inst_18883 = inst_18890;var state_18922__$1 = (function (){var statearr_18936 = state_18922;(statearr_18936[7] = inst_18883);
(statearr_18936[8] = inst_18882__$1);
(statearr_18936[11] = inst_18895);
return statearr_18936;
})();var statearr_18937_18961 = state_18922__$1;(statearr_18937_18961[2] = null);
(statearr_18937_18961[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 9))
{var inst_18882 = (state_18922[8]);var inst_18898 = cljs.core.vec(inst_18882);var state_18922__$1 = state_18922;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18922__$1,11,out,inst_18898);
} else
{if((state_val_18923 === 10))
{var inst_18905 = (state_18922[2]);var state_18922__$1 = state_18922;var statearr_18938_18962 = state_18922__$1;(statearr_18938_18962[2] = inst_18905);
(statearr_18938_18962[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 11))
{var inst_18886 = (state_18922[9]);var inst_18890 = (state_18922[10]);var inst_18900 = (state_18922[2]);var inst_18901 = (new Array(0));var inst_18902 = inst_18901.push(inst_18886);var inst_18882 = inst_18901;var inst_18883 = inst_18890;var state_18922__$1 = (function (){var statearr_18939 = state_18922;(statearr_18939[7] = inst_18883);
(statearr_18939[8] = inst_18882);
(statearr_18939[12] = inst_18902);
(statearr_18939[13] = inst_18900);
return statearr_18939;
})();var statearr_18940_18963 = state_18922__$1;(statearr_18940_18963[2] = null);
(statearr_18940_18963[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 12))
{var inst_18882 = (state_18922[8]);var inst_18910 = cljs.core.vec(inst_18882);var state_18922__$1 = state_18922;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18922__$1,15,out,inst_18910);
} else
{if((state_val_18923 === 13))
{var state_18922__$1 = state_18922;var statearr_18941_18964 = state_18922__$1;(statearr_18941_18964[2] = null);
(statearr_18941_18964[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 14))
{var inst_18915 = (state_18922[2]);var inst_18916 = cljs.core.async.close_BANG_(out);var state_18922__$1 = (function (){var statearr_18942 = state_18922;(statearr_18942[14] = inst_18915);
return statearr_18942;
})();var statearr_18943_18965 = state_18922__$1;(statearr_18943_18965[2] = inst_18916);
(statearr_18943_18965[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18923 === 15))
{var inst_18912 = (state_18922[2]);var state_18922__$1 = state_18922;var statearr_18944_18966 = state_18922__$1;(statearr_18944_18966[2] = inst_18912);
(statearr_18944_18966[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18948 = (new Array(15));(statearr_18948[0] = state_machine__5792__auto__);
(statearr_18948[1] = 1);
return statearr_18948;
});
var state_machine__5792__auto____1 = (function (state_18922){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_18922);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18949){if((e18949 instanceof Object))
{var ex__5795__auto__ = e18949;var statearr_18950_18967 = state_18922;(statearr_18950_18967[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18922);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__18968 = state_18922;
state_18922 = G__18968;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18922){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18951 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_18951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18952);
return statearr_18951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
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
