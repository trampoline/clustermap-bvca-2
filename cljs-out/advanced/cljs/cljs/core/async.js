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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24065 = (function (f,fn_handler,meta24066){
this.f = f;
this.fn_handler = fn_handler;
this.meta24066 = meta24066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24065.cljs$lang$type = true;
cljs.core.async.t24065.cljs$lang$ctorStr = "cljs.core.async/t24065";
cljs.core.async.t24065.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24065");
});
cljs.core.async.t24065.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24067){var self__ = this;
var _24067__$1 = this;return self__.meta24066;
});
cljs.core.async.t24065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24067,meta24066__$1){var self__ = this;
var _24067__$1 = this;return (new cljs.core.async.t24065(self__.f,self__.fn_handler,meta24066__$1));
});
cljs.core.async.__GT_t24065 = (function __GT_t24065(f__$1,fn_handler__$1,meta24066){return (new cljs.core.async.t24065(f__$1,fn_handler__$1,meta24066));
});
}
return (new cljs.core.async.t24065(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24069 = buff;if(G__24069)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24069.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24069);
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
{var val_24070 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24070) : fn1.call(null,val_24070));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24070) : fn1.call(null,val_24070));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24071 = n;var x_24072 = 0;while(true){
if((x_24072 < n__4248__auto___24071))
{(a[x_24072] = 0);
{
var G__24073 = (x_24072 + 1);
x_24072 = G__24073;
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
var G__24074 = (i + 1);
i = G__24074;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24078 = (function (flag,alt_flag,meta24079){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24079 = meta24079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24078.cljs$lang$type = true;
cljs.core.async.t24078.cljs$lang$ctorStr = "cljs.core.async/t24078";
cljs.core.async.t24078.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24078");
});
cljs.core.async.t24078.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24080){var self__ = this;
var _24080__$1 = this;return self__.meta24079;
});
cljs.core.async.t24078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24080,meta24079__$1){var self__ = this;
var _24080__$1 = this;return (new cljs.core.async.t24078(self__.flag,self__.alt_flag,meta24079__$1));
});
cljs.core.async.__GT_t24078 = (function __GT_t24078(flag__$1,alt_flag__$1,meta24079){return (new cljs.core.async.t24078(flag__$1,alt_flag__$1,meta24079));
});
}
return (new cljs.core.async.t24078(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24084 = (function (cb,flag,alt_handler,meta24085){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24085 = meta24085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24084.cljs$lang$type = true;
cljs.core.async.t24084.cljs$lang$ctorStr = "cljs.core.async/t24084";
cljs.core.async.t24084.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24084");
});
cljs.core.async.t24084.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24086){var self__ = this;
var _24086__$1 = this;return self__.meta24085;
});
cljs.core.async.t24084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24086,meta24085__$1){var self__ = this;
var _24086__$1 = this;return (new cljs.core.async.t24084(self__.cb,self__.flag,self__.alt_handler,meta24085__$1));
});
cljs.core.async.__GT_t24084 = (function __GT_t24084(cb__$1,flag__$1,alt_handler__$1,meta24085){return (new cljs.core.async.t24084(cb__$1,flag__$1,alt_handler__$1,meta24085));
});
}
return (new cljs.core.async.t24084(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24087_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24087_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24087_SHARP_,port], null)));
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
var G__24088 = (i + 1);
i = G__24088;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$225))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$225], null));
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
var alts_BANG___delegate = function (ports,p__24089){var map__24091 = p__24089;var map__24091__$1 = ((cljs.core.seq_QMARK_(map__24091))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24091):map__24091);var opts = map__24091__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24089 = null;if (arguments.length > 1) {
  p__24089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24089);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24092){
var ports = cljs.core.first(arglist__24092);
var p__24089 = cljs.core.rest(arglist__24092);
return alts_BANG___delegate(ports,p__24089);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24100 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24100 = (function (ch,f,map_LT_,meta24101){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24101 = meta24101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24100.cljs$lang$type = true;
cljs.core.async.t24100.cljs$lang$ctorStr = "cljs.core.async/t24100";
cljs.core.async.t24100.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24100");
});
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24103 = (function (fn1,_,meta24101,ch,f,map_LT_,meta24104){
this.fn1 = fn1;
this._ = _;
this.meta24101 = meta24101;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24104 = meta24104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24103.cljs$lang$type = true;
cljs.core.async.t24103.cljs$lang$ctorStr = "cljs.core.async/t24103";
cljs.core.async.t24103.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24103");
});
cljs.core.async.t24103.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24103.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24093_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24093_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24093_SHARP_) : self__.f.call(null,p1__24093_SHARP_)))) : f1.call(null,(((p1__24093_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24093_SHARP_) : self__.f.call(null,p1__24093_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24105){var self__ = this;
var _24105__$1 = this;return self__.meta24104;
});
cljs.core.async.t24103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24105,meta24104__$1){var self__ = this;
var _24105__$1 = this;return (new cljs.core.async.t24103(self__.fn1,self__._,self__.meta24101,self__.ch,self__.f,self__.map_LT_,meta24104__$1));
});
cljs.core.async.__GT_t24103 = (function __GT_t24103(fn1__$1,___$2,meta24101__$1,ch__$2,f__$2,map_LT___$2,meta24104){return (new cljs.core.async.t24103(fn1__$1,___$2,meta24101__$1,ch__$2,f__$2,map_LT___$2,meta24104));
});
}
return (new cljs.core.async.t24103(fn1,___$1,self__.meta24101,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24102){var self__ = this;
var _24102__$1 = this;return self__.meta24101;
});
cljs.core.async.t24100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24102,meta24101__$1){var self__ = this;
var _24102__$1 = this;return (new cljs.core.async.t24100(self__.ch,self__.f,self__.map_LT_,meta24101__$1));
});
cljs.core.async.__GT_t24100 = (function __GT_t24100(ch__$1,f__$1,map_LT___$1,meta24101){return (new cljs.core.async.t24100(ch__$1,f__$1,map_LT___$1,meta24101));
});
}
return (new cljs.core.async.t24100(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24109 = (function (ch,f,map_GT_,meta24110){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24110 = meta24110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24109.cljs$lang$type = true;
cljs.core.async.t24109.cljs$lang$ctorStr = "cljs.core.async/t24109";
cljs.core.async.t24109.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24109");
});
cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24111){var self__ = this;
var _24111__$1 = this;return self__.meta24110;
});
cljs.core.async.t24109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24111,meta24110__$1){var self__ = this;
var _24111__$1 = this;return (new cljs.core.async.t24109(self__.ch,self__.f,self__.map_GT_,meta24110__$1));
});
cljs.core.async.__GT_t24109 = (function __GT_t24109(ch__$1,f__$1,map_GT___$1,meta24110){return (new cljs.core.async.t24109(ch__$1,f__$1,map_GT___$1,meta24110));
});
}
return (new cljs.core.async.t24109(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24115 = (function (ch,p,filter_GT_,meta24116){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24116 = meta24116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24115.cljs$lang$type = true;
cljs.core.async.t24115.cljs$lang$ctorStr = "cljs.core.async/t24115";
cljs.core.async.t24115.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24115");
});
cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24117){var self__ = this;
var _24117__$1 = this;return self__.meta24116;
});
cljs.core.async.t24115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24117,meta24116__$1){var self__ = this;
var _24117__$1 = this;return (new cljs.core.async.t24115(self__.ch,self__.p,self__.filter_GT_,meta24116__$1));
});
cljs.core.async.__GT_t24115 = (function __GT_t24115(ch__$1,p__$1,filter_GT___$1,meta24116){return (new cljs.core.async.t24115(ch__$1,p__$1,filter_GT___$1,meta24116));
});
}
return (new cljs.core.async.t24115(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24179){var state_val_24180 = (state_24179[1]);if((state_val_24180 === 1))
{var state_24179__$1 = state_24179;var statearr_24181_24201 = state_24179__$1;(statearr_24181_24201[2] = null);
(statearr_24181_24201[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24180 === 2))
{var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24179__$1,4,ch);
} else
{if((state_val_24180 === 3))
{var inst_24177 = (state_24179[2]);var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.return_chan(state_24179__$1,inst_24177);
} else
{if((state_val_24180 === 4))
{var inst_24161 = (state_24179[7]);var inst_24161__$1 = (state_24179[2]);var inst_24162 = (inst_24161__$1 == null);var state_24179__$1 = (function (){var statearr_24182 = state_24179;(statearr_24182[7] = inst_24161__$1);
return statearr_24182;
})();if(cljs.core.truth_(inst_24162))
{var statearr_24183_24202 = state_24179__$1;(statearr_24183_24202[1] = 5);
} else
{var statearr_24184_24203 = state_24179__$1;(statearr_24184_24203[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24180 === 5))
{var inst_24164 = cljs.core.async.close_BANG_(out);var state_24179__$1 = state_24179;var statearr_24185_24204 = state_24179__$1;(statearr_24185_24204[2] = inst_24164);
(statearr_24185_24204[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24180 === 6))
{var inst_24161 = (state_24179[7]);var inst_24166 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24161) : p.call(null,inst_24161));var state_24179__$1 = state_24179;if(cljs.core.truth_(inst_24166))
{var statearr_24186_24205 = state_24179__$1;(statearr_24186_24205[1] = 8);
} else
{var statearr_24187_24206 = state_24179__$1;(statearr_24187_24206[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24180 === 7))
{var inst_24175 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24188_24207 = state_24179__$1;(statearr_24188_24207[2] = inst_24175);
(statearr_24188_24207[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24180 === 8))
{var inst_24161 = (state_24179[7]);var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24179__$1,11,out,inst_24161);
} else
{if((state_val_24180 === 9))
{var state_24179__$1 = state_24179;var statearr_24189_24208 = state_24179__$1;(statearr_24189_24208[2] = null);
(statearr_24189_24208[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24180 === 10))
{var inst_24172 = (state_24179[2]);var state_24179__$1 = (function (){var statearr_24190 = state_24179;(statearr_24190[8] = inst_24172);
return statearr_24190;
})();var statearr_24191_24209 = state_24179__$1;(statearr_24191_24209[2] = null);
(statearr_24191_24209[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24180 === 11))
{var inst_24169 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24192_24210 = state_24179__$1;(statearr_24192_24210[2] = inst_24169);
(statearr_24192_24210[1] = 10);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24196 = [null,null,null,null,null,null,null,null,null];(statearr_24196[0] = state_machine__5507__auto__);
(statearr_24196[1] = 1);
return statearr_24196;
});
var state_machine__5507__auto____1 = (function (state_24179){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24179);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24197){if((e24197 instanceof Object))
{var ex__5510__auto__ = e24197;var statearr_24198_24211 = state_24179;(statearr_24198_24211[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24179);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24212 = state_24179;
state_24179 = G__24212;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24179){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24199 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24200);
return statearr_24199;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24364){var state_val_24365 = (state_24364[1]);if((state_val_24365 === 1))
{var state_24364__$1 = state_24364;var statearr_24366_24403 = state_24364__$1;(statearr_24366_24403[2] = null);
(statearr_24366_24403[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 2))
{var state_24364__$1 = state_24364;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24364__$1,4,in$);
} else
{if((state_val_24365 === 3))
{var inst_24362 = (state_24364[2]);var state_24364__$1 = state_24364;return cljs.core.async.impl.ioc_helpers.return_chan(state_24364__$1,inst_24362);
} else
{if((state_val_24365 === 4))
{var inst_24310 = (state_24364[7]);var inst_24310__$1 = (state_24364[2]);var inst_24311 = (inst_24310__$1 == null);var state_24364__$1 = (function (){var statearr_24367 = state_24364;(statearr_24367[7] = inst_24310__$1);
return statearr_24367;
})();if(cljs.core.truth_(inst_24311))
{var statearr_24368_24404 = state_24364__$1;(statearr_24368_24404[1] = 5);
} else
{var statearr_24369_24405 = state_24364__$1;(statearr_24369_24405[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 5))
{var inst_24313 = cljs.core.async.close_BANG_(out);var state_24364__$1 = state_24364;var statearr_24370_24406 = state_24364__$1;(statearr_24370_24406[2] = inst_24313);
(statearr_24370_24406[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 6))
{var inst_24310 = (state_24364[7]);var inst_24315 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24310) : f.call(null,inst_24310));var inst_24320 = cljs.core.seq(inst_24315);var inst_24321 = inst_24320;var inst_24322 = null;var inst_24323 = 0;var inst_24324 = 0;var state_24364__$1 = (function (){var statearr_24371 = state_24364;(statearr_24371[8] = inst_24321);
(statearr_24371[9] = inst_24324);
(statearr_24371[10] = inst_24323);
(statearr_24371[11] = inst_24322);
return statearr_24371;
})();var statearr_24372_24407 = state_24364__$1;(statearr_24372_24407[2] = null);
(statearr_24372_24407[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 7))
{var inst_24360 = (state_24364[2]);var state_24364__$1 = state_24364;var statearr_24373_24408 = state_24364__$1;(statearr_24373_24408[2] = inst_24360);
(statearr_24373_24408[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 8))
{var inst_24324 = (state_24364[9]);var inst_24323 = (state_24364[10]);var inst_24326 = (inst_24324 < inst_24323);var inst_24327 = inst_24326;var state_24364__$1 = state_24364;if(cljs.core.truth_(inst_24327))
{var statearr_24374_24409 = state_24364__$1;(statearr_24374_24409[1] = 10);
} else
{var statearr_24375_24410 = state_24364__$1;(statearr_24375_24410[1] = 11);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 9))
{var inst_24357 = (state_24364[2]);var state_24364__$1 = (function (){var statearr_24376 = state_24364;(statearr_24376[12] = inst_24357);
return statearr_24376;
})();var statearr_24377_24411 = state_24364__$1;(statearr_24377_24411[2] = null);
(statearr_24377_24411[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 10))
{var inst_24324 = (state_24364[9]);var inst_24322 = (state_24364[11]);var inst_24329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24322,inst_24324);var state_24364__$1 = state_24364;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24364__$1,13,out,inst_24329);
} else
{if((state_val_24365 === 11))
{var inst_24321 = (state_24364[8]);var inst_24335 = (state_24364[13]);var inst_24335__$1 = cljs.core.seq(inst_24321);var state_24364__$1 = (function (){var statearr_24381 = state_24364;(statearr_24381[13] = inst_24335__$1);
return statearr_24381;
})();if(inst_24335__$1)
{var statearr_24382_24412 = state_24364__$1;(statearr_24382_24412[1] = 14);
} else
{var statearr_24383_24413 = state_24364__$1;(statearr_24383_24413[1] = 15);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 12))
{var inst_24355 = (state_24364[2]);var state_24364__$1 = state_24364;var statearr_24384_24414 = state_24364__$1;(statearr_24384_24414[2] = inst_24355);
(statearr_24384_24414[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 13))
{var inst_24321 = (state_24364[8]);var inst_24324 = (state_24364[9]);var inst_24323 = (state_24364[10]);var inst_24322 = (state_24364[11]);var inst_24331 = (state_24364[2]);var inst_24332 = (inst_24324 + 1);var tmp24378 = inst_24321;var tmp24379 = inst_24323;var tmp24380 = inst_24322;var inst_24321__$1 = tmp24378;var inst_24322__$1 = tmp24380;var inst_24323__$1 = tmp24379;var inst_24324__$1 = inst_24332;var state_24364__$1 = (function (){var statearr_24385 = state_24364;(statearr_24385[8] = inst_24321__$1);
(statearr_24385[14] = inst_24331);
(statearr_24385[9] = inst_24324__$1);
(statearr_24385[10] = inst_24323__$1);
(statearr_24385[11] = inst_24322__$1);
return statearr_24385;
})();var statearr_24386_24415 = state_24364__$1;(statearr_24386_24415[2] = null);
(statearr_24386_24415[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 14))
{var inst_24335 = (state_24364[13]);var inst_24337 = cljs.core.chunked_seq_QMARK_(inst_24335);var state_24364__$1 = state_24364;if(inst_24337)
{var statearr_24387_24416 = state_24364__$1;(statearr_24387_24416[1] = 17);
} else
{var statearr_24388_24417 = state_24364__$1;(statearr_24388_24417[1] = 18);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 15))
{var state_24364__$1 = state_24364;var statearr_24389_24418 = state_24364__$1;(statearr_24389_24418[2] = null);
(statearr_24389_24418[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 16))
{var inst_24353 = (state_24364[2]);var state_24364__$1 = state_24364;var statearr_24390_24419 = state_24364__$1;(statearr_24390_24419[2] = inst_24353);
(statearr_24390_24419[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 17))
{var inst_24335 = (state_24364[13]);var inst_24339 = cljs.core.chunk_first(inst_24335);var inst_24340 = cljs.core.chunk_rest(inst_24335);var inst_24341 = cljs.core.count(inst_24339);var inst_24321 = inst_24340;var inst_24322 = inst_24339;var inst_24323 = inst_24341;var inst_24324 = 0;var state_24364__$1 = (function (){var statearr_24391 = state_24364;(statearr_24391[8] = inst_24321);
(statearr_24391[9] = inst_24324);
(statearr_24391[10] = inst_24323);
(statearr_24391[11] = inst_24322);
return statearr_24391;
})();var statearr_24392_24420 = state_24364__$1;(statearr_24392_24420[2] = null);
(statearr_24392_24420[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 18))
{var inst_24335 = (state_24364[13]);var inst_24344 = cljs.core.first(inst_24335);var state_24364__$1 = state_24364;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24364__$1,20,out,inst_24344);
} else
{if((state_val_24365 === 19))
{var inst_24350 = (state_24364[2]);var state_24364__$1 = state_24364;var statearr_24393_24421 = state_24364__$1;(statearr_24393_24421[2] = inst_24350);
(statearr_24393_24421[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24365 === 20))
{var inst_24335 = (state_24364[13]);var inst_24346 = (state_24364[2]);var inst_24347 = cljs.core.next(inst_24335);var inst_24321 = inst_24347;var inst_24322 = null;var inst_24323 = 0;var inst_24324 = 0;var state_24364__$1 = (function (){var statearr_24394 = state_24364;(statearr_24394[8] = inst_24321);
(statearr_24394[9] = inst_24324);
(statearr_24394[10] = inst_24323);
(statearr_24394[11] = inst_24322);
(statearr_24394[15] = inst_24346);
return statearr_24394;
})();var statearr_24395_24422 = state_24364__$1;(statearr_24395_24422[2] = null);
(statearr_24395_24422[1] = 8);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24399[0] = state_machine__5507__auto__);
(statearr_24399[1] = 1);
return statearr_24399;
});
var state_machine__5507__auto____1 = (function (state_24364){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24364);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24400){if((e24400 instanceof Object))
{var ex__5510__auto__ = e24400;var statearr_24401_24423 = state_24364;(statearr_24401_24423[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24364);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24424 = state_24364;
state_24364 = G__24424;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24364){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24402 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24402;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24484){var state_val_24485 = (state_24484[1]);if((state_val_24485 === 1))
{var state_24484__$1 = state_24484;var statearr_24486_24506 = state_24484__$1;(statearr_24486_24506[2] = null);
(statearr_24486_24506[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24485 === 2))
{var state_24484__$1 = state_24484;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24484__$1,4,from);
} else
{if((state_val_24485 === 3))
{var inst_24482 = (state_24484[2]);var state_24484__$1 = state_24484;return cljs.core.async.impl.ioc_helpers.return_chan(state_24484__$1,inst_24482);
} else
{if((state_val_24485 === 4))
{var inst_24467 = (state_24484[7]);var inst_24467__$1 = (state_24484[2]);var inst_24468 = (inst_24467__$1 == null);var state_24484__$1 = (function (){var statearr_24487 = state_24484;(statearr_24487[7] = inst_24467__$1);
return statearr_24487;
})();if(cljs.core.truth_(inst_24468))
{var statearr_24488_24507 = state_24484__$1;(statearr_24488_24507[1] = 5);
} else
{var statearr_24489_24508 = state_24484__$1;(statearr_24489_24508[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24485 === 5))
{var state_24484__$1 = state_24484;if(cljs.core.truth_(close_QMARK_))
{var statearr_24490_24509 = state_24484__$1;(statearr_24490_24509[1] = 8);
} else
{var statearr_24491_24510 = state_24484__$1;(statearr_24491_24510[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24485 === 6))
{var inst_24467 = (state_24484[7]);var state_24484__$1 = state_24484;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24484__$1,11,to,inst_24467);
} else
{if((state_val_24485 === 7))
{var inst_24480 = (state_24484[2]);var state_24484__$1 = state_24484;var statearr_24492_24511 = state_24484__$1;(statearr_24492_24511[2] = inst_24480);
(statearr_24492_24511[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24485 === 8))
{var inst_24471 = cljs.core.async.close_BANG_(to);var state_24484__$1 = state_24484;var statearr_24493_24512 = state_24484__$1;(statearr_24493_24512[2] = inst_24471);
(statearr_24493_24512[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24485 === 9))
{var state_24484__$1 = state_24484;var statearr_24494_24513 = state_24484__$1;(statearr_24494_24513[2] = null);
(statearr_24494_24513[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24485 === 10))
{var inst_24474 = (state_24484[2]);var state_24484__$1 = state_24484;var statearr_24495_24514 = state_24484__$1;(statearr_24495_24514[2] = inst_24474);
(statearr_24495_24514[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24485 === 11))
{var inst_24477 = (state_24484[2]);var state_24484__$1 = (function (){var statearr_24496 = state_24484;(statearr_24496[8] = inst_24477);
return statearr_24496;
})();var statearr_24497_24515 = state_24484__$1;(statearr_24497_24515[2] = null);
(statearr_24497_24515[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24501 = [null,null,null,null,null,null,null,null,null];(statearr_24501[0] = state_machine__5507__auto__);
(statearr_24501[1] = 1);
return statearr_24501;
});
var state_machine__5507__auto____1 = (function (state_24484){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24484);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24502){if((e24502 instanceof Object))
{var ex__5510__auto__ = e24502;var statearr_24503_24516 = state_24484;(statearr_24503_24516[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24484);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24517 = state_24484;
state_24484 = G__24517;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24484){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24504 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24505);
return statearr_24504;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24582){var state_val_24583 = (state_24582[1]);if((state_val_24583 === 1))
{var state_24582__$1 = state_24582;var statearr_24584_24605 = state_24582__$1;(statearr_24584_24605[2] = null);
(statearr_24584_24605[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 2))
{var state_24582__$1 = state_24582;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24582__$1,4,ch);
} else
{if((state_val_24583 === 3))
{var inst_24580 = (state_24582[2]);var state_24582__$1 = state_24582;return cljs.core.async.impl.ioc_helpers.return_chan(state_24582__$1,inst_24580);
} else
{if((state_val_24583 === 4))
{var inst_24563 = (state_24582[7]);var inst_24563__$1 = (state_24582[2]);var inst_24564 = (inst_24563__$1 == null);var state_24582__$1 = (function (){var statearr_24585 = state_24582;(statearr_24585[7] = inst_24563__$1);
return statearr_24585;
})();if(cljs.core.truth_(inst_24564))
{var statearr_24586_24606 = state_24582__$1;(statearr_24586_24606[1] = 5);
} else
{var statearr_24587_24607 = state_24582__$1;(statearr_24587_24607[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 5))
{var inst_24566 = cljs.core.async.close_BANG_(tc);var inst_24567 = cljs.core.async.close_BANG_(fc);var state_24582__$1 = (function (){var statearr_24588 = state_24582;(statearr_24588[8] = inst_24566);
return statearr_24588;
})();var statearr_24589_24608 = state_24582__$1;(statearr_24589_24608[2] = inst_24567);
(statearr_24589_24608[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 6))
{var inst_24563 = (state_24582[7]);var inst_24569 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24563) : p.call(null,inst_24563));var state_24582__$1 = state_24582;if(cljs.core.truth_(inst_24569))
{var statearr_24590_24609 = state_24582__$1;(statearr_24590_24609[1] = 9);
} else
{var statearr_24591_24610 = state_24582__$1;(statearr_24591_24610[1] = 10);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 7))
{var inst_24578 = (state_24582[2]);var state_24582__$1 = state_24582;var statearr_24592_24611 = state_24582__$1;(statearr_24592_24611[2] = inst_24578);
(statearr_24592_24611[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 8))
{var inst_24575 = (state_24582[2]);var state_24582__$1 = (function (){var statearr_24593 = state_24582;(statearr_24593[9] = inst_24575);
return statearr_24593;
})();var statearr_24594_24612 = state_24582__$1;(statearr_24594_24612[2] = null);
(statearr_24594_24612[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 9))
{var state_24582__$1 = state_24582;var statearr_24595_24613 = state_24582__$1;(statearr_24595_24613[2] = tc);
(statearr_24595_24613[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 10))
{var state_24582__$1 = state_24582;var statearr_24596_24614 = state_24582__$1;(statearr_24596_24614[2] = fc);
(statearr_24596_24614[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24583 === 11))
{var inst_24563 = (state_24582[7]);var inst_24573 = (state_24582[2]);var state_24582__$1 = state_24582;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24582__$1,8,inst_24573,inst_24563);
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
var state_machine__5507__auto____0 = (function (){var statearr_24600 = [null,null,null,null,null,null,null,null,null,null];(statearr_24600[0] = state_machine__5507__auto__);
(statearr_24600[1] = 1);
return statearr_24600;
});
var state_machine__5507__auto____1 = (function (state_24582){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24582);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24601){if((e24601 instanceof Object))
{var ex__5510__auto__ = e24601;var statearr_24602_24615 = state_24582;(statearr_24602_24615[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24582);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24616 = state_24582;
state_24582 = G__24616;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24582){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24603 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24604);
return statearr_24603;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24663){var state_val_24664 = (state_24663[1]);if((state_val_24664 === 7))
{var inst_24659 = (state_24663[2]);var state_24663__$1 = state_24663;var statearr_24665_24681 = state_24663__$1;(statearr_24665_24681[2] = inst_24659);
(statearr_24665_24681[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24664 === 6))
{var inst_24652 = (state_24663[7]);var inst_24649 = (state_24663[8]);var inst_24656 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24649,inst_24652) : f.call(null,inst_24649,inst_24652));var inst_24649__$1 = inst_24656;var state_24663__$1 = (function (){var statearr_24666 = state_24663;(statearr_24666[8] = inst_24649__$1);
return statearr_24666;
})();var statearr_24667_24682 = state_24663__$1;(statearr_24667_24682[2] = null);
(statearr_24667_24682[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24664 === 5))
{var inst_24649 = (state_24663[8]);var state_24663__$1 = state_24663;var statearr_24668_24683 = state_24663__$1;(statearr_24668_24683[2] = inst_24649);
(statearr_24668_24683[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24664 === 4))
{var inst_24652 = (state_24663[7]);var inst_24652__$1 = (state_24663[2]);var inst_24653 = (inst_24652__$1 == null);var state_24663__$1 = (function (){var statearr_24669 = state_24663;(statearr_24669[7] = inst_24652__$1);
return statearr_24669;
})();if(cljs.core.truth_(inst_24653))
{var statearr_24670_24684 = state_24663__$1;(statearr_24670_24684[1] = 5);
} else
{var statearr_24671_24685 = state_24663__$1;(statearr_24671_24685[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24664 === 3))
{var inst_24661 = (state_24663[2]);var state_24663__$1 = state_24663;return cljs.core.async.impl.ioc_helpers.return_chan(state_24663__$1,inst_24661);
} else
{if((state_val_24664 === 2))
{var state_24663__$1 = state_24663;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24663__$1,4,ch);
} else
{if((state_val_24664 === 1))
{var inst_24649 = init;var state_24663__$1 = (function (){var statearr_24672 = state_24663;(statearr_24672[8] = inst_24649);
return statearr_24672;
})();var statearr_24673_24686 = state_24663__$1;(statearr_24673_24686[2] = null);
(statearr_24673_24686[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24677 = [null,null,null,null,null,null,null,null,null];(statearr_24677[0] = state_machine__5507__auto__);
(statearr_24677[1] = 1);
return statearr_24677;
});
var state_machine__5507__auto____1 = (function (state_24663){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24663);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24678){if((e24678 instanceof Object))
{var ex__5510__auto__ = e24678;var statearr_24679_24687 = state_24663;(statearr_24679_24687[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24663);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24688 = state_24663;
state_24663 = G__24688;
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
})();var state__5523__auto__ = (function (){var statearr_24680 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24680;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24750){var state_val_24751 = (state_24750[1]);if((state_val_24751 === 1))
{var inst_24730 = cljs.core.seq(coll);var inst_24731 = inst_24730;var state_24750__$1 = (function (){var statearr_24752 = state_24750;(statearr_24752[7] = inst_24731);
return statearr_24752;
})();var statearr_24753_24771 = state_24750__$1;(statearr_24753_24771[2] = null);
(statearr_24753_24771[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24751 === 2))
{var inst_24731 = (state_24750[7]);var state_24750__$1 = state_24750;if(cljs.core.truth_(inst_24731))
{var statearr_24754_24772 = state_24750__$1;(statearr_24754_24772[1] = 4);
} else
{var statearr_24755_24773 = state_24750__$1;(statearr_24755_24773[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24751 === 3))
{var inst_24748 = (state_24750[2]);var state_24750__$1 = state_24750;return cljs.core.async.impl.ioc_helpers.return_chan(state_24750__$1,inst_24748);
} else
{if((state_val_24751 === 4))
{var inst_24731 = (state_24750[7]);var inst_24734 = cljs.core.first(inst_24731);var state_24750__$1 = state_24750;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24750__$1,7,ch,inst_24734);
} else
{if((state_val_24751 === 5))
{var state_24750__$1 = state_24750;if(cljs.core.truth_(close_QMARK_))
{var statearr_24756_24774 = state_24750__$1;(statearr_24756_24774[1] = 8);
} else
{var statearr_24757_24775 = state_24750__$1;(statearr_24757_24775[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24751 === 6))
{var inst_24746 = (state_24750[2]);var state_24750__$1 = state_24750;var statearr_24758_24776 = state_24750__$1;(statearr_24758_24776[2] = inst_24746);
(statearr_24758_24776[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24751 === 7))
{var inst_24731 = (state_24750[7]);var inst_24736 = (state_24750[2]);var inst_24737 = cljs.core.next(inst_24731);var inst_24731__$1 = inst_24737;var state_24750__$1 = (function (){var statearr_24759 = state_24750;(statearr_24759[7] = inst_24731__$1);
(statearr_24759[8] = inst_24736);
return statearr_24759;
})();var statearr_24760_24777 = state_24750__$1;(statearr_24760_24777[2] = null);
(statearr_24760_24777[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24751 === 8))
{var inst_24741 = cljs.core.async.close_BANG_(ch);var state_24750__$1 = state_24750;var statearr_24761_24778 = state_24750__$1;(statearr_24761_24778[2] = inst_24741);
(statearr_24761_24778[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24751 === 9))
{var state_24750__$1 = state_24750;var statearr_24762_24779 = state_24750__$1;(statearr_24762_24779[2] = null);
(statearr_24762_24779[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24751 === 10))
{var inst_24744 = (state_24750[2]);var state_24750__$1 = state_24750;var statearr_24763_24780 = state_24750__$1;(statearr_24763_24780[2] = inst_24744);
(statearr_24763_24780[1] = 6);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24767 = [null,null,null,null,null,null,null,null,null];(statearr_24767[0] = state_machine__5507__auto__);
(statearr_24767[1] = 1);
return statearr_24767;
});
var state_machine__5507__auto____1 = (function (state_24750){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24750);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24768){if((e24768 instanceof Object))
{var ex__5510__auto__ = e24768;var statearr_24769_24781 = state_24750;(statearr_24769_24781[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24750);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24782 = state_24750;
state_24750 = G__24782;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24750){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24770 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24770;
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
cljs.core.async.Mux = (function (){var obj24784 = {};return obj24784;
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
cljs.core.async.Mult = (function (){var obj24786 = {};return obj24786;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25010 = (function (cs,ch,mult,meta25011){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25011 = meta25011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25010.cljs$lang$type = true;
cljs.core.async.t25010.cljs$lang$ctorStr = "cljs.core.async/t25010";
cljs.core.async.t25010.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25010");
});})(cs))
;
cljs.core.async.t25010.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25010.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25010.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25010.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25010.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25012){var self__ = this;
var _25012__$1 = this;return self__.meta25011;
});})(cs))
;
cljs.core.async.t25010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25012,meta25011__$1){var self__ = this;
var _25012__$1 = this;return (new cljs.core.async.t25010(self__.cs,self__.ch,self__.mult,meta25011__$1));
});})(cs))
;
cljs.core.async.__GT_t25010 = ((function (cs){
return (function __GT_t25010(cs__$1,ch__$1,mult__$1,meta25011){return (new cljs.core.async.t25010(cs__$1,ch__$1,mult__$1,meta25011));
});})(cs))
;
}
return (new cljs.core.async.t25010(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25147){var state_val_25148 = (state_25147[1]);if((state_val_25148 === 32))
{var inst_25015 = (state_25147[7]);var inst_25091 = (state_25147[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25147,31,Object,null,30);var inst_25098 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25091,inst_25015,done);var state_25147__$1 = state_25147;var statearr_25149_25234 = state_25147__$1;(statearr_25149_25234[2] = inst_25098);
cljs.core.async.impl.ioc_helpers.process_exception(state_25147__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 1))
{var state_25147__$1 = state_25147;var statearr_25150_25235 = state_25147__$1;(statearr_25150_25235[2] = null);
(statearr_25150_25235[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 33))
{var inst_25104 = (state_25147[9]);var inst_25106 = cljs.core.chunked_seq_QMARK_(inst_25104);var state_25147__$1 = state_25147;if(inst_25106)
{var statearr_25151_25236 = state_25147__$1;(statearr_25151_25236[1] = 36);
} else
{var statearr_25152_25237 = state_25147__$1;(statearr_25152_25237[1] = 37);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 2))
{var state_25147__$1 = state_25147;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25147__$1,4,ch);
} else
{if((state_val_25148 === 34))
{var state_25147__$1 = state_25147;var statearr_25153_25238 = state_25147__$1;(statearr_25153_25238[2] = null);
(statearr_25153_25238[1] = 35);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 3))
{var inst_25145 = (state_25147[2]);var state_25147__$1 = state_25147;return cljs.core.async.impl.ioc_helpers.return_chan(state_25147__$1,inst_25145);
} else
{if((state_val_25148 === 35))
{var inst_25129 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25154_25239 = state_25147__$1;(statearr_25154_25239[2] = inst_25129);
(statearr_25154_25239[1] = 29);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 4))
{var inst_25015 = (state_25147[7]);var inst_25015__$1 = (state_25147[2]);var inst_25016 = (inst_25015__$1 == null);var state_25147__$1 = (function (){var statearr_25155 = state_25147;(statearr_25155[7] = inst_25015__$1);
return statearr_25155;
})();if(cljs.core.truth_(inst_25016))
{var statearr_25156_25240 = state_25147__$1;(statearr_25156_25240[1] = 5);
} else
{var statearr_25157_25241 = state_25147__$1;(statearr_25157_25241[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 36))
{var inst_25104 = (state_25147[9]);var inst_25108 = cljs.core.chunk_first(inst_25104);var inst_25109 = cljs.core.chunk_rest(inst_25104);var inst_25110 = cljs.core.count(inst_25108);var inst_25083 = inst_25109;var inst_25084 = inst_25108;var inst_25085 = inst_25110;var inst_25086 = 0;var state_25147__$1 = (function (){var statearr_25158 = state_25147;(statearr_25158[10] = inst_25083);
(statearr_25158[11] = inst_25085);
(statearr_25158[12] = inst_25084);
(statearr_25158[13] = inst_25086);
return statearr_25158;
})();var statearr_25159_25242 = state_25147__$1;(statearr_25159_25242[2] = null);
(statearr_25159_25242[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 5))
{var inst_25022 = cljs.core.deref(cs);var inst_25023 = cljs.core.seq(inst_25022);var inst_25024 = inst_25023;var inst_25025 = null;var inst_25026 = 0;var inst_25027 = 0;var state_25147__$1 = (function (){var statearr_25160 = state_25147;(statearr_25160[14] = inst_25027);
(statearr_25160[15] = inst_25026);
(statearr_25160[16] = inst_25024);
(statearr_25160[17] = inst_25025);
return statearr_25160;
})();var statearr_25161_25243 = state_25147__$1;(statearr_25161_25243[2] = null);
(statearr_25161_25243[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 37))
{var inst_25104 = (state_25147[9]);var inst_25113 = cljs.core.first(inst_25104);var state_25147__$1 = (function (){var statearr_25162 = state_25147;(statearr_25162[18] = inst_25113);
return statearr_25162;
})();var statearr_25163_25244 = state_25147__$1;(statearr_25163_25244[2] = null);
(statearr_25163_25244[1] = 41);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 6))
{var inst_25075 = (state_25147[19]);var inst_25074 = cljs.core.deref(cs);var inst_25075__$1 = cljs.core.keys(inst_25074);var inst_25076 = cljs.core.count(inst_25075__$1);var inst_25077 = cljs.core.reset_BANG_(dctr,inst_25076);var inst_25082 = cljs.core.seq(inst_25075__$1);var inst_25083 = inst_25082;var inst_25084 = null;var inst_25085 = 0;var inst_25086 = 0;var state_25147__$1 = (function (){var statearr_25164 = state_25147;(statearr_25164[10] = inst_25083);
(statearr_25164[20] = inst_25077);
(statearr_25164[19] = inst_25075__$1);
(statearr_25164[11] = inst_25085);
(statearr_25164[12] = inst_25084);
(statearr_25164[13] = inst_25086);
return statearr_25164;
})();var statearr_25165_25245 = state_25147__$1;(statearr_25165_25245[2] = null);
(statearr_25165_25245[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 38))
{var inst_25126 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25166_25246 = state_25147__$1;(statearr_25166_25246[2] = inst_25126);
(statearr_25166_25246[1] = 35);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 7))
{var inst_25143 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25167_25247 = state_25147__$1;(statearr_25167_25247[2] = inst_25143);
(statearr_25167_25247[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 39))
{var inst_25104 = (state_25147[9]);var inst_25122 = (state_25147[2]);var inst_25123 = cljs.core.next(inst_25104);var inst_25083 = inst_25123;var inst_25084 = null;var inst_25085 = 0;var inst_25086 = 0;var state_25147__$1 = (function (){var statearr_25168 = state_25147;(statearr_25168[10] = inst_25083);
(statearr_25168[21] = inst_25122);
(statearr_25168[11] = inst_25085);
(statearr_25168[12] = inst_25084);
(statearr_25168[13] = inst_25086);
return statearr_25168;
})();var statearr_25169_25248 = state_25147__$1;(statearr_25169_25248[2] = null);
(statearr_25169_25248[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 8))
{var inst_25027 = (state_25147[14]);var inst_25026 = (state_25147[15]);var inst_25029 = (inst_25027 < inst_25026);var inst_25030 = inst_25029;var state_25147__$1 = state_25147;if(cljs.core.truth_(inst_25030))
{var statearr_25170_25249 = state_25147__$1;(statearr_25170_25249[1] = 10);
} else
{var statearr_25171_25250 = state_25147__$1;(statearr_25171_25250[1] = 11);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 40))
{var inst_25113 = (state_25147[18]);var inst_25114 = (state_25147[2]);var inst_25115 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25116 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25113);var state_25147__$1 = (function (){var statearr_25172 = state_25147;(statearr_25172[22] = inst_25115);
(statearr_25172[23] = inst_25114);
return statearr_25172;
})();var statearr_25173_25251 = state_25147__$1;(statearr_25173_25251[2] = inst_25116);
cljs.core.async.impl.ioc_helpers.process_exception(state_25147__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 9))
{var inst_25072 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25174_25252 = state_25147__$1;(statearr_25174_25252[2] = inst_25072);
(statearr_25174_25252[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 41))
{var inst_25015 = (state_25147[7]);var inst_25113 = (state_25147[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25147,40,Object,null,39);var inst_25120 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25113,inst_25015,done);var state_25147__$1 = state_25147;var statearr_25175_25253 = state_25147__$1;(statearr_25175_25253[2] = inst_25120);
cljs.core.async.impl.ioc_helpers.process_exception(state_25147__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 10))
{var inst_25027 = (state_25147[14]);var inst_25025 = (state_25147[17]);var inst_25033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25025,inst_25027);var inst_25034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25033,0,null);var inst_25035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25033,1,null);var state_25147__$1 = (function (){var statearr_25176 = state_25147;(statearr_25176[24] = inst_25034);
return statearr_25176;
})();if(cljs.core.truth_(inst_25035))
{var statearr_25177_25254 = state_25147__$1;(statearr_25177_25254[1] = 13);
} else
{var statearr_25178_25255 = state_25147__$1;(statearr_25178_25255[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 42))
{var state_25147__$1 = state_25147;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25147__$1,45,dchan);
} else
{if((state_val_25148 === 11))
{var inst_25024 = (state_25147[16]);var inst_25044 = (state_25147[25]);var inst_25044__$1 = cljs.core.seq(inst_25024);var state_25147__$1 = (function (){var statearr_25179 = state_25147;(statearr_25179[25] = inst_25044__$1);
return statearr_25179;
})();if(inst_25044__$1)
{var statearr_25180_25256 = state_25147__$1;(statearr_25180_25256[1] = 16);
} else
{var statearr_25181_25257 = state_25147__$1;(statearr_25181_25257[1] = 17);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 43))
{var state_25147__$1 = state_25147;var statearr_25182_25258 = state_25147__$1;(statearr_25182_25258[2] = null);
(statearr_25182_25258[1] = 44);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 12))
{var inst_25070 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25183_25259 = state_25147__$1;(statearr_25183_25259[2] = inst_25070);
(statearr_25183_25259[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 44))
{var inst_25140 = (state_25147[2]);var state_25147__$1 = (function (){var statearr_25184 = state_25147;(statearr_25184[26] = inst_25140);
return statearr_25184;
})();var statearr_25185_25260 = state_25147__$1;(statearr_25185_25260[2] = null);
(statearr_25185_25260[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 13))
{var inst_25034 = (state_25147[24]);var inst_25037 = cljs.core.async.close_BANG_(inst_25034);var state_25147__$1 = state_25147;var statearr_25186_25261 = state_25147__$1;(statearr_25186_25261[2] = inst_25037);
(statearr_25186_25261[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 45))
{var inst_25137 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25190_25262 = state_25147__$1;(statearr_25190_25262[2] = inst_25137);
(statearr_25190_25262[1] = 44);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 14))
{var state_25147__$1 = state_25147;var statearr_25191_25263 = state_25147__$1;(statearr_25191_25263[2] = null);
(statearr_25191_25263[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 15))
{var inst_25027 = (state_25147[14]);var inst_25026 = (state_25147[15]);var inst_25024 = (state_25147[16]);var inst_25025 = (state_25147[17]);var inst_25040 = (state_25147[2]);var inst_25041 = (inst_25027 + 1);var tmp25187 = inst_25026;var tmp25188 = inst_25024;var tmp25189 = inst_25025;var inst_25024__$1 = tmp25188;var inst_25025__$1 = tmp25189;var inst_25026__$1 = tmp25187;var inst_25027__$1 = inst_25041;var state_25147__$1 = (function (){var statearr_25192 = state_25147;(statearr_25192[14] = inst_25027__$1);
(statearr_25192[15] = inst_25026__$1);
(statearr_25192[16] = inst_25024__$1);
(statearr_25192[17] = inst_25025__$1);
(statearr_25192[27] = inst_25040);
return statearr_25192;
})();var statearr_25193_25264 = state_25147__$1;(statearr_25193_25264[2] = null);
(statearr_25193_25264[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 16))
{var inst_25044 = (state_25147[25]);var inst_25046 = cljs.core.chunked_seq_QMARK_(inst_25044);var state_25147__$1 = state_25147;if(inst_25046)
{var statearr_25194_25265 = state_25147__$1;(statearr_25194_25265[1] = 19);
} else
{var statearr_25195_25266 = state_25147__$1;(statearr_25195_25266[1] = 20);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 17))
{var state_25147__$1 = state_25147;var statearr_25196_25267 = state_25147__$1;(statearr_25196_25267[2] = null);
(statearr_25196_25267[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 18))
{var inst_25068 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25197_25268 = state_25147__$1;(statearr_25197_25268[2] = inst_25068);
(statearr_25197_25268[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 19))
{var inst_25044 = (state_25147[25]);var inst_25048 = cljs.core.chunk_first(inst_25044);var inst_25049 = cljs.core.chunk_rest(inst_25044);var inst_25050 = cljs.core.count(inst_25048);var inst_25024 = inst_25049;var inst_25025 = inst_25048;var inst_25026 = inst_25050;var inst_25027 = 0;var state_25147__$1 = (function (){var statearr_25198 = state_25147;(statearr_25198[14] = inst_25027);
(statearr_25198[15] = inst_25026);
(statearr_25198[16] = inst_25024);
(statearr_25198[17] = inst_25025);
return statearr_25198;
})();var statearr_25199_25269 = state_25147__$1;(statearr_25199_25269[2] = null);
(statearr_25199_25269[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 20))
{var inst_25044 = (state_25147[25]);var inst_25054 = cljs.core.first(inst_25044);var inst_25055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25054,0,null);var inst_25056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25054,1,null);var state_25147__$1 = (function (){var statearr_25200 = state_25147;(statearr_25200[28] = inst_25055);
return statearr_25200;
})();if(cljs.core.truth_(inst_25056))
{var statearr_25201_25270 = state_25147__$1;(statearr_25201_25270[1] = 22);
} else
{var statearr_25202_25271 = state_25147__$1;(statearr_25202_25271[1] = 23);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 21))
{var inst_25065 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25203_25272 = state_25147__$1;(statearr_25203_25272[2] = inst_25065);
(statearr_25203_25272[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 22))
{var inst_25055 = (state_25147[28]);var inst_25058 = cljs.core.async.close_BANG_(inst_25055);var state_25147__$1 = state_25147;var statearr_25204_25273 = state_25147__$1;(statearr_25204_25273[2] = inst_25058);
(statearr_25204_25273[1] = 24);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 23))
{var state_25147__$1 = state_25147;var statearr_25205_25274 = state_25147__$1;(statearr_25205_25274[2] = null);
(statearr_25205_25274[1] = 24);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 24))
{var inst_25044 = (state_25147[25]);var inst_25061 = (state_25147[2]);var inst_25062 = cljs.core.next(inst_25044);var inst_25024 = inst_25062;var inst_25025 = null;var inst_25026 = 0;var inst_25027 = 0;var state_25147__$1 = (function (){var statearr_25206 = state_25147;(statearr_25206[14] = inst_25027);
(statearr_25206[15] = inst_25026);
(statearr_25206[16] = inst_25024);
(statearr_25206[17] = inst_25025);
(statearr_25206[29] = inst_25061);
return statearr_25206;
})();var statearr_25207_25275 = state_25147__$1;(statearr_25207_25275[2] = null);
(statearr_25207_25275[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 25))
{var inst_25085 = (state_25147[11]);var inst_25086 = (state_25147[13]);var inst_25088 = (inst_25086 < inst_25085);var inst_25089 = inst_25088;var state_25147__$1 = state_25147;if(cljs.core.truth_(inst_25089))
{var statearr_25208_25276 = state_25147__$1;(statearr_25208_25276[1] = 27);
} else
{var statearr_25209_25277 = state_25147__$1;(statearr_25209_25277[1] = 28);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 26))
{var inst_25075 = (state_25147[19]);var inst_25133 = (state_25147[2]);var inst_25134 = cljs.core.seq(inst_25075);var state_25147__$1 = (function (){var statearr_25210 = state_25147;(statearr_25210[30] = inst_25133);
return statearr_25210;
})();if(inst_25134)
{var statearr_25211_25278 = state_25147__$1;(statearr_25211_25278[1] = 42);
} else
{var statearr_25212_25279 = state_25147__$1;(statearr_25212_25279[1] = 43);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 27))
{var inst_25084 = (state_25147[12]);var inst_25086 = (state_25147[13]);var inst_25091 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25084,inst_25086);var state_25147__$1 = (function (){var statearr_25213 = state_25147;(statearr_25213[8] = inst_25091);
return statearr_25213;
})();var statearr_25214_25280 = state_25147__$1;(statearr_25214_25280[2] = null);
(statearr_25214_25280[1] = 32);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 28))
{var inst_25083 = (state_25147[10]);var inst_25104 = (state_25147[9]);var inst_25104__$1 = cljs.core.seq(inst_25083);var state_25147__$1 = (function (){var statearr_25218 = state_25147;(statearr_25218[9] = inst_25104__$1);
return statearr_25218;
})();if(inst_25104__$1)
{var statearr_25219_25281 = state_25147__$1;(statearr_25219_25281[1] = 33);
} else
{var statearr_25220_25282 = state_25147__$1;(statearr_25220_25282[1] = 34);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 29))
{var inst_25131 = (state_25147[2]);var state_25147__$1 = state_25147;var statearr_25221_25283 = state_25147__$1;(statearr_25221_25283[2] = inst_25131);
(statearr_25221_25283[1] = 26);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 30))
{var inst_25083 = (state_25147[10]);var inst_25085 = (state_25147[11]);var inst_25084 = (state_25147[12]);var inst_25086 = (state_25147[13]);var inst_25100 = (state_25147[2]);var inst_25101 = (inst_25086 + 1);var tmp25215 = inst_25083;var tmp25216 = inst_25085;var tmp25217 = inst_25084;var inst_25083__$1 = tmp25215;var inst_25084__$1 = tmp25217;var inst_25085__$1 = tmp25216;var inst_25086__$1 = inst_25101;var state_25147__$1 = (function (){var statearr_25222 = state_25147;(statearr_25222[10] = inst_25083__$1);
(statearr_25222[31] = inst_25100);
(statearr_25222[11] = inst_25085__$1);
(statearr_25222[12] = inst_25084__$1);
(statearr_25222[13] = inst_25086__$1);
return statearr_25222;
})();var statearr_25223_25284 = state_25147__$1;(statearr_25223_25284[2] = null);
(statearr_25223_25284[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25148 === 31))
{var inst_25091 = (state_25147[8]);var inst_25092 = (state_25147[2]);var inst_25093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25094 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25091);var state_25147__$1 = (function (){var statearr_25224 = state_25147;(statearr_25224[32] = inst_25092);
(statearr_25224[33] = inst_25093);
return statearr_25224;
})();var statearr_25225_25285 = state_25147__$1;(statearr_25225_25285[2] = inst_25094);
cljs.core.async.impl.ioc_helpers.process_exception(state_25147__$1);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25229[0] = state_machine__5507__auto__);
(statearr_25229[1] = 1);
return statearr_25229;
});
var state_machine__5507__auto____1 = (function (state_25147){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25147);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25230){if((e25230 instanceof Object))
{var ex__5510__auto__ = e25230;var statearr_25231_25286 = state_25147;(statearr_25231_25286[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25147);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25287 = state_25147;
state_25147 = G__25287;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25147){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25232 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25233);
return statearr_25232;
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
cljs.core.async.Mix = (function (){var obj25289 = {};return obj25289;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,null,cljs.core.constant$keyword$243,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$244);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$243);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$244,chs);var pauses = pick(cljs.core.constant$keyword$242,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$245,solos,cljs.core.constant$keyword$246,pick(cljs.core.constant$keyword$243,chs),cljs.core.constant$keyword$247,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$242)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25399 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25400){
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
this.meta25400 = meta25400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25399.cljs$lang$type = true;
cljs.core.async.t25399.cljs$lang$ctorStr = "cljs.core.async/t25399";
cljs.core.async.t25399.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25399");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25399.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25401){var self__ = this;
var _25401__$1 = this;return self__.meta25400;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25401,meta25400__$1){var self__ = this;
var _25401__$1 = this;return (new cljs.core.async.t25399(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25400__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25399 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25399(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25400){return (new cljs.core.async.t25399(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25400));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25399(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25466){var state_val_25467 = (state_25466[1]);if((state_val_25467 === 1))
{var inst_25405 = (state_25466[7]);var inst_25405__$1 = calc_state();var inst_25406 = cljs.core.seq_QMARK_(inst_25405__$1);var state_25466__$1 = (function (){var statearr_25468 = state_25466;(statearr_25468[7] = inst_25405__$1);
return statearr_25468;
})();if(inst_25406)
{var statearr_25469_25509 = state_25466__$1;(statearr_25469_25509[1] = 2);
} else
{var statearr_25470_25510 = state_25466__$1;(statearr_25470_25510[1] = 3);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 2))
{var inst_25405 = (state_25466[7]);var inst_25408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25405);var state_25466__$1 = state_25466;var statearr_25471_25511 = state_25466__$1;(statearr_25471_25511[2] = inst_25408);
(statearr_25471_25511[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 3))
{var inst_25405 = (state_25466[7]);var state_25466__$1 = state_25466;var statearr_25472_25512 = state_25466__$1;(statearr_25472_25512[2] = inst_25405);
(statearr_25472_25512[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 4))
{var inst_25405 = (state_25466[7]);var inst_25411 = (state_25466[2]);var inst_25412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25411,cljs.core.constant$keyword$247);var inst_25413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25411,cljs.core.constant$keyword$246);var inst_25414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25411,cljs.core.constant$keyword$245);var inst_25415 = inst_25405;var state_25466__$1 = (function (){var statearr_25473 = state_25466;(statearr_25473[8] = inst_25415);
(statearr_25473[9] = inst_25414);
(statearr_25473[10] = inst_25413);
(statearr_25473[11] = inst_25412);
return statearr_25473;
})();var statearr_25474_25513 = state_25466__$1;(statearr_25474_25513[2] = null);
(statearr_25474_25513[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 5))
{var inst_25415 = (state_25466[8]);var inst_25418 = cljs.core.seq_QMARK_(inst_25415);var state_25466__$1 = state_25466;if(inst_25418)
{var statearr_25475_25514 = state_25466__$1;(statearr_25475_25514[1] = 7);
} else
{var statearr_25476_25515 = state_25466__$1;(statearr_25476_25515[1] = 8);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 6))
{var inst_25464 = (state_25466[2]);var state_25466__$1 = state_25466;return cljs.core.async.impl.ioc_helpers.return_chan(state_25466__$1,inst_25464);
} else
{if((state_val_25467 === 7))
{var inst_25415 = (state_25466[8]);var inst_25420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25415);var state_25466__$1 = state_25466;var statearr_25477_25516 = state_25466__$1;(statearr_25477_25516[2] = inst_25420);
(statearr_25477_25516[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 8))
{var inst_25415 = (state_25466[8]);var state_25466__$1 = state_25466;var statearr_25478_25517 = state_25466__$1;(statearr_25478_25517[2] = inst_25415);
(statearr_25478_25517[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 9))
{var inst_25423 = (state_25466[12]);var inst_25423__$1 = (state_25466[2]);var inst_25424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25423__$1,cljs.core.constant$keyword$247);var inst_25425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25423__$1,cljs.core.constant$keyword$246);var inst_25426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25423__$1,cljs.core.constant$keyword$245);var state_25466__$1 = (function (){var statearr_25479 = state_25466;(statearr_25479[13] = inst_25425);
(statearr_25479[12] = inst_25423__$1);
(statearr_25479[14] = inst_25426);
return statearr_25479;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25466__$1,10,inst_25424);
} else
{if((state_val_25467 === 10))
{var inst_25431 = (state_25466[15]);var inst_25430 = (state_25466[16]);var inst_25429 = (state_25466[2]);var inst_25430__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25429,0,null);var inst_25431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25429,1,null);var inst_25432 = (inst_25430__$1 == null);var inst_25433 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25431__$1,change);var inst_25434 = (inst_25432) || (inst_25433);var state_25466__$1 = (function (){var statearr_25480 = state_25466;(statearr_25480[15] = inst_25431__$1);
(statearr_25480[16] = inst_25430__$1);
return statearr_25480;
})();if(cljs.core.truth_(inst_25434))
{var statearr_25481_25518 = state_25466__$1;(statearr_25481_25518[1] = 11);
} else
{var statearr_25482_25519 = state_25466__$1;(statearr_25482_25519[1] = 12);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 11))
{var inst_25430 = (state_25466[16]);var inst_25436 = (inst_25430 == null);var state_25466__$1 = state_25466;if(cljs.core.truth_(inst_25436))
{var statearr_25483_25520 = state_25466__$1;(statearr_25483_25520[1] = 14);
} else
{var statearr_25484_25521 = state_25466__$1;(statearr_25484_25521[1] = 15);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 12))
{var inst_25431 = (state_25466[15]);var inst_25445 = (state_25466[17]);var inst_25426 = (state_25466[14]);var inst_25445__$1 = (inst_25426.cljs$core$IFn$_invoke$arity$1 ? inst_25426.cljs$core$IFn$_invoke$arity$1(inst_25431) : inst_25426.call(null,inst_25431));var state_25466__$1 = (function (){var statearr_25485 = state_25466;(statearr_25485[17] = inst_25445__$1);
return statearr_25485;
})();if(cljs.core.truth_(inst_25445__$1))
{var statearr_25486_25522 = state_25466__$1;(statearr_25486_25522[1] = 17);
} else
{var statearr_25487_25523 = state_25466__$1;(statearr_25487_25523[1] = 18);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 13))
{var inst_25462 = (state_25466[2]);var state_25466__$1 = state_25466;var statearr_25488_25524 = state_25466__$1;(statearr_25488_25524[2] = inst_25462);
(statearr_25488_25524[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 14))
{var inst_25431 = (state_25466[15]);var inst_25438 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25431);var state_25466__$1 = state_25466;var statearr_25489_25525 = state_25466__$1;(statearr_25489_25525[2] = inst_25438);
(statearr_25489_25525[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 15))
{var state_25466__$1 = state_25466;var statearr_25490_25526 = state_25466__$1;(statearr_25490_25526[2] = null);
(statearr_25490_25526[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 16))
{var inst_25441 = (state_25466[2]);var inst_25442 = calc_state();var inst_25415 = inst_25442;var state_25466__$1 = (function (){var statearr_25491 = state_25466;(statearr_25491[8] = inst_25415);
(statearr_25491[18] = inst_25441);
return statearr_25491;
})();var statearr_25492_25527 = state_25466__$1;(statearr_25492_25527[2] = null);
(statearr_25492_25527[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 17))
{var inst_25445 = (state_25466[17]);var state_25466__$1 = state_25466;var statearr_25493_25528 = state_25466__$1;(statearr_25493_25528[2] = inst_25445);
(statearr_25493_25528[1] = 19);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 18))
{var inst_25425 = (state_25466[13]);var inst_25431 = (state_25466[15]);var inst_25426 = (state_25466[14]);var inst_25448 = cljs.core.empty_QMARK_(inst_25426);var inst_25449 = (inst_25425.cljs$core$IFn$_invoke$arity$1 ? inst_25425.cljs$core$IFn$_invoke$arity$1(inst_25431) : inst_25425.call(null,inst_25431));var inst_25450 = cljs.core.not(inst_25449);var inst_25451 = (inst_25448) && (inst_25450);var state_25466__$1 = state_25466;var statearr_25494_25529 = state_25466__$1;(statearr_25494_25529[2] = inst_25451);
(statearr_25494_25529[1] = 19);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 19))
{var inst_25453 = (state_25466[2]);var state_25466__$1 = state_25466;if(cljs.core.truth_(inst_25453))
{var statearr_25495_25530 = state_25466__$1;(statearr_25495_25530[1] = 20);
} else
{var statearr_25496_25531 = state_25466__$1;(statearr_25496_25531[1] = 21);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 20))
{var inst_25430 = (state_25466[16]);var state_25466__$1 = state_25466;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25466__$1,23,out,inst_25430);
} else
{if((state_val_25467 === 21))
{var state_25466__$1 = state_25466;var statearr_25497_25532 = state_25466__$1;(statearr_25497_25532[2] = null);
(statearr_25497_25532[1] = 22);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 22))
{var inst_25423 = (state_25466[12]);var inst_25459 = (state_25466[2]);var inst_25415 = inst_25423;var state_25466__$1 = (function (){var statearr_25498 = state_25466;(statearr_25498[8] = inst_25415);
(statearr_25498[19] = inst_25459);
return statearr_25498;
})();var statearr_25499_25533 = state_25466__$1;(statearr_25499_25533[2] = null);
(statearr_25499_25533[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25467 === 23))
{var inst_25456 = (state_25466[2]);var state_25466__$1 = state_25466;var statearr_25500_25534 = state_25466__$1;(statearr_25500_25534[2] = inst_25456);
(statearr_25500_25534[1] = 22);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25504[0] = state_machine__5507__auto__);
(statearr_25504[1] = 1);
return statearr_25504;
});
var state_machine__5507__auto____1 = (function (state_25466){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25466);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25505){if((e25505 instanceof Object))
{var ex__5510__auto__ = e25505;var statearr_25506_25535 = state_25466;(statearr_25506_25535[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25466);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25536 = state_25466;
state_25466 = G__25536;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25466){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25507 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25508);
return statearr_25507;
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
cljs.core.async.Pub = (function (){var obj25538 = {};return obj25538;
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
return (function (p1__25539_SHARP_){if(cljs.core.truth_((p1__25539_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25539_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25539_SHARP_.call(null,topic))))
{return p1__25539_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25539_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25664 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25665){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25665 = meta25665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25664.cljs$lang$type = true;
cljs.core.async.t25664.cljs$lang$ctorStr = "cljs.core.async/t25664";
cljs.core.async.t25664.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25664");
});})(mults,ensure_mult))
;
cljs.core.async.t25664.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25664.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25664.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25664.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25666){var self__ = this;
var _25666__$1 = this;return self__.meta25665;
});})(mults,ensure_mult))
;
cljs.core.async.t25664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25666,meta25665__$1){var self__ = this;
var _25666__$1 = this;return (new cljs.core.async.t25664(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25665__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25664 = ((function (mults,ensure_mult){
return (function __GT_t25664(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25665){return (new cljs.core.async.t25664(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25665));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25664(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25740){var state_val_25741 = (state_25740[1]);if((state_val_25741 === 1))
{var state_25740__$1 = state_25740;var statearr_25742_25789 = state_25740__$1;(statearr_25742_25789[2] = null);
(statearr_25742_25789[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 2))
{var state_25740__$1 = state_25740;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25740__$1,4,ch);
} else
{if((state_val_25741 === 3))
{var inst_25738 = (state_25740[2]);var state_25740__$1 = state_25740;return cljs.core.async.impl.ioc_helpers.return_chan(state_25740__$1,inst_25738);
} else
{if((state_val_25741 === 4))
{var inst_25669 = (state_25740[7]);var inst_25669__$1 = (state_25740[2]);var inst_25670 = (inst_25669__$1 == null);var state_25740__$1 = (function (){var statearr_25743 = state_25740;(statearr_25743[7] = inst_25669__$1);
return statearr_25743;
})();if(cljs.core.truth_(inst_25670))
{var statearr_25744_25790 = state_25740__$1;(statearr_25744_25790[1] = 5);
} else
{var statearr_25745_25791 = state_25740__$1;(statearr_25745_25791[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 5))
{var inst_25676 = cljs.core.deref(mults);var inst_25677 = cljs.core.vals(inst_25676);var inst_25678 = cljs.core.seq(inst_25677);var inst_25679 = inst_25678;var inst_25680 = null;var inst_25681 = 0;var inst_25682 = 0;var state_25740__$1 = (function (){var statearr_25746 = state_25740;(statearr_25746[8] = inst_25679);
(statearr_25746[9] = inst_25682);
(statearr_25746[10] = inst_25681);
(statearr_25746[11] = inst_25680);
return statearr_25746;
})();var statearr_25747_25792 = state_25740__$1;(statearr_25747_25792[2] = null);
(statearr_25747_25792[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 6))
{var inst_25717 = (state_25740[12]);var inst_25719 = (state_25740[13]);var inst_25669 = (state_25740[7]);var inst_25717__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25669) : topic_fn.call(null,inst_25669));var inst_25718 = cljs.core.deref(mults);var inst_25719__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25718,inst_25717__$1);var state_25740__$1 = (function (){var statearr_25748 = state_25740;(statearr_25748[12] = inst_25717__$1);
(statearr_25748[13] = inst_25719__$1);
return statearr_25748;
})();if(cljs.core.truth_(inst_25719__$1))
{var statearr_25749_25793 = state_25740__$1;(statearr_25749_25793[1] = 19);
} else
{var statearr_25750_25794 = state_25740__$1;(statearr_25750_25794[1] = 20);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 7))
{var inst_25736 = (state_25740[2]);var state_25740__$1 = state_25740;var statearr_25751_25795 = state_25740__$1;(statearr_25751_25795[2] = inst_25736);
(statearr_25751_25795[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 8))
{var inst_25682 = (state_25740[9]);var inst_25681 = (state_25740[10]);var inst_25684 = (inst_25682 < inst_25681);var inst_25685 = inst_25684;var state_25740__$1 = state_25740;if(cljs.core.truth_(inst_25685))
{var statearr_25755_25796 = state_25740__$1;(statearr_25755_25796[1] = 10);
} else
{var statearr_25756_25797 = state_25740__$1;(statearr_25756_25797[1] = 11);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 9))
{var inst_25715 = (state_25740[2]);var state_25740__$1 = state_25740;var statearr_25757_25798 = state_25740__$1;(statearr_25757_25798[2] = inst_25715);
(statearr_25757_25798[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 10))
{var inst_25679 = (state_25740[8]);var inst_25682 = (state_25740[9]);var inst_25681 = (state_25740[10]);var inst_25680 = (state_25740[11]);var inst_25687 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25680,inst_25682);var inst_25688 = cljs.core.async.muxch_STAR_(inst_25687);var inst_25689 = cljs.core.async.close_BANG_(inst_25688);var inst_25690 = (inst_25682 + 1);var tmp25752 = inst_25679;var tmp25753 = inst_25681;var tmp25754 = inst_25680;var inst_25679__$1 = tmp25752;var inst_25680__$1 = tmp25754;var inst_25681__$1 = tmp25753;var inst_25682__$1 = inst_25690;var state_25740__$1 = (function (){var statearr_25758 = state_25740;(statearr_25758[8] = inst_25679__$1);
(statearr_25758[14] = inst_25689);
(statearr_25758[9] = inst_25682__$1);
(statearr_25758[10] = inst_25681__$1);
(statearr_25758[11] = inst_25680__$1);
return statearr_25758;
})();var statearr_25759_25799 = state_25740__$1;(statearr_25759_25799[2] = null);
(statearr_25759_25799[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 11))
{var inst_25693 = (state_25740[15]);var inst_25679 = (state_25740[8]);var inst_25693__$1 = cljs.core.seq(inst_25679);var state_25740__$1 = (function (){var statearr_25760 = state_25740;(statearr_25760[15] = inst_25693__$1);
return statearr_25760;
})();if(inst_25693__$1)
{var statearr_25761_25800 = state_25740__$1;(statearr_25761_25800[1] = 13);
} else
{var statearr_25762_25801 = state_25740__$1;(statearr_25762_25801[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 12))
{var inst_25713 = (state_25740[2]);var state_25740__$1 = state_25740;var statearr_25763_25802 = state_25740__$1;(statearr_25763_25802[2] = inst_25713);
(statearr_25763_25802[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 13))
{var inst_25693 = (state_25740[15]);var inst_25695 = cljs.core.chunked_seq_QMARK_(inst_25693);var state_25740__$1 = state_25740;if(inst_25695)
{var statearr_25764_25803 = state_25740__$1;(statearr_25764_25803[1] = 16);
} else
{var statearr_25765_25804 = state_25740__$1;(statearr_25765_25804[1] = 17);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 14))
{var state_25740__$1 = state_25740;var statearr_25766_25805 = state_25740__$1;(statearr_25766_25805[2] = null);
(statearr_25766_25805[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 15))
{var inst_25711 = (state_25740[2]);var state_25740__$1 = state_25740;var statearr_25767_25806 = state_25740__$1;(statearr_25767_25806[2] = inst_25711);
(statearr_25767_25806[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 16))
{var inst_25693 = (state_25740[15]);var inst_25697 = cljs.core.chunk_first(inst_25693);var inst_25698 = cljs.core.chunk_rest(inst_25693);var inst_25699 = cljs.core.count(inst_25697);var inst_25679 = inst_25698;var inst_25680 = inst_25697;var inst_25681 = inst_25699;var inst_25682 = 0;var state_25740__$1 = (function (){var statearr_25768 = state_25740;(statearr_25768[8] = inst_25679);
(statearr_25768[9] = inst_25682);
(statearr_25768[10] = inst_25681);
(statearr_25768[11] = inst_25680);
return statearr_25768;
})();var statearr_25769_25807 = state_25740__$1;(statearr_25769_25807[2] = null);
(statearr_25769_25807[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 17))
{var inst_25693 = (state_25740[15]);var inst_25702 = cljs.core.first(inst_25693);var inst_25703 = cljs.core.async.muxch_STAR_(inst_25702);var inst_25704 = cljs.core.async.close_BANG_(inst_25703);var inst_25705 = cljs.core.next(inst_25693);var inst_25679 = inst_25705;var inst_25680 = null;var inst_25681 = 0;var inst_25682 = 0;var state_25740__$1 = (function (){var statearr_25770 = state_25740;(statearr_25770[8] = inst_25679);
(statearr_25770[9] = inst_25682);
(statearr_25770[10] = inst_25681);
(statearr_25770[11] = inst_25680);
(statearr_25770[16] = inst_25704);
return statearr_25770;
})();var statearr_25771_25808 = state_25740__$1;(statearr_25771_25808[2] = null);
(statearr_25771_25808[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 18))
{var inst_25708 = (state_25740[2]);var state_25740__$1 = state_25740;var statearr_25772_25809 = state_25740__$1;(statearr_25772_25809[2] = inst_25708);
(statearr_25772_25809[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 19))
{var state_25740__$1 = state_25740;var statearr_25773_25810 = state_25740__$1;(statearr_25773_25810[2] = null);
(statearr_25773_25810[1] = 24);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 20))
{var state_25740__$1 = state_25740;var statearr_25774_25811 = state_25740__$1;(statearr_25774_25811[2] = null);
(statearr_25774_25811[1] = 21);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 21))
{var inst_25733 = (state_25740[2]);var state_25740__$1 = (function (){var statearr_25775 = state_25740;(statearr_25775[17] = inst_25733);
return statearr_25775;
})();var statearr_25776_25812 = state_25740__$1;(statearr_25776_25812[2] = null);
(statearr_25776_25812[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 22))
{var inst_25730 = (state_25740[2]);var state_25740__$1 = state_25740;var statearr_25777_25813 = state_25740__$1;(statearr_25777_25813[2] = inst_25730);
(statearr_25777_25813[1] = 21);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 23))
{var inst_25717 = (state_25740[12]);var inst_25721 = (state_25740[2]);var inst_25722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25717);var state_25740__$1 = (function (){var statearr_25778 = state_25740;(statearr_25778[18] = inst_25721);
return statearr_25778;
})();var statearr_25779_25814 = state_25740__$1;(statearr_25779_25814[2] = inst_25722);
cljs.core.async.impl.ioc_helpers.process_exception(state_25740__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25741 === 24))
{var inst_25719 = (state_25740[13]);var inst_25669 = (state_25740[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25740,23,Object,null,22);var inst_25726 = cljs.core.async.muxch_STAR_(inst_25719);var state_25740__$1 = state_25740;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25740__$1,25,inst_25726,inst_25669);
} else
{if((state_val_25741 === 25))
{var inst_25728 = (state_25740[2]);var state_25740__$1 = state_25740;var statearr_25780_25815 = state_25740__$1;(statearr_25780_25815[2] = inst_25728);
cljs.core.async.impl.ioc_helpers.process_exception(state_25740__$1);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25784[0] = state_machine__5507__auto__);
(statearr_25784[1] = 1);
return statearr_25784;
});
var state_machine__5507__auto____1 = (function (state_25740){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25740);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25785){if((e25785 instanceof Object))
{var ex__5510__auto__ = e25785;var statearr_25786_25816 = state_25740;(statearr_25786_25816[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25740);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25817 = state_25740;
state_25740 = G__25817;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25740){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25740);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25924){var state_val_25925 = (state_25924[1]);if((state_val_25925 === 1))
{var state_25924__$1 = state_25924;var statearr_25926_25955 = state_25924__$1;(statearr_25926_25955[2] = null);
(statearr_25926_25955[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 2))
{var inst_25887 = cljs.core.reset_BANG_(dctr,cnt);var inst_25888 = 0;var state_25924__$1 = (function (){var statearr_25927 = state_25924;(statearr_25927[7] = inst_25888);
(statearr_25927[8] = inst_25887);
return statearr_25927;
})();var statearr_25928_25956 = state_25924__$1;(statearr_25928_25956[2] = null);
(statearr_25928_25956[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 3))
{var inst_25922 = (state_25924[2]);var state_25924__$1 = state_25924;return cljs.core.async.impl.ioc_helpers.return_chan(state_25924__$1,inst_25922);
} else
{if((state_val_25925 === 4))
{var inst_25888 = (state_25924[7]);var inst_25890 = (inst_25888 < cnt);var state_25924__$1 = state_25924;if(cljs.core.truth_(inst_25890))
{var statearr_25929_25957 = state_25924__$1;(statearr_25929_25957[1] = 6);
} else
{var statearr_25930_25958 = state_25924__$1;(statearr_25930_25958[1] = 7);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 5))
{var inst_25908 = (state_25924[2]);var state_25924__$1 = (function (){var statearr_25931 = state_25924;(statearr_25931[9] = inst_25908);
return statearr_25931;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25924__$1,12,dchan);
} else
{if((state_val_25925 === 6))
{var state_25924__$1 = state_25924;var statearr_25932_25959 = state_25924__$1;(statearr_25932_25959[2] = null);
(statearr_25932_25959[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 7))
{var state_25924__$1 = state_25924;var statearr_25933_25960 = state_25924__$1;(statearr_25933_25960[2] = null);
(statearr_25933_25960[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 8))
{var inst_25906 = (state_25924[2]);var state_25924__$1 = state_25924;var statearr_25934_25961 = state_25924__$1;(statearr_25934_25961[2] = inst_25906);
(statearr_25934_25961[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 9))
{var inst_25888 = (state_25924[7]);var inst_25901 = (state_25924[2]);var inst_25902 = (inst_25888 + 1);var inst_25888__$1 = inst_25902;var state_25924__$1 = (function (){var statearr_25935 = state_25924;(statearr_25935[7] = inst_25888__$1);
(statearr_25935[10] = inst_25901);
return statearr_25935;
})();var statearr_25936_25962 = state_25924__$1;(statearr_25936_25962[2] = null);
(statearr_25936_25962[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 10))
{var inst_25892 = (state_25924[2]);var inst_25893 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25924__$1 = (function (){var statearr_25937 = state_25924;(statearr_25937[11] = inst_25892);
return statearr_25937;
})();var statearr_25938_25963 = state_25924__$1;(statearr_25938_25963[2] = inst_25893);
cljs.core.async.impl.ioc_helpers.process_exception(state_25924__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 11))
{var inst_25888 = (state_25924[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25924,10,Object,null,9);var inst_25897 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25888) : chs__$1.call(null,inst_25888));var inst_25898 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25888) : done.call(null,inst_25888));var inst_25899 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25897,inst_25898);var state_25924__$1 = state_25924;var statearr_25939_25964 = state_25924__$1;(statearr_25939_25964[2] = inst_25899);
cljs.core.async.impl.ioc_helpers.process_exception(state_25924__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 12))
{var inst_25910 = (state_25924[12]);var inst_25910__$1 = (state_25924[2]);var inst_25911 = cljs.core.some(cljs.core.nil_QMARK_,inst_25910__$1);var state_25924__$1 = (function (){var statearr_25940 = state_25924;(statearr_25940[12] = inst_25910__$1);
return statearr_25940;
})();if(cljs.core.truth_(inst_25911))
{var statearr_25941_25965 = state_25924__$1;(statearr_25941_25965[1] = 13);
} else
{var statearr_25942_25966 = state_25924__$1;(statearr_25942_25966[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 13))
{var inst_25913 = cljs.core.async.close_BANG_(out);var state_25924__$1 = state_25924;var statearr_25943_25967 = state_25924__$1;(statearr_25943_25967[2] = inst_25913);
(statearr_25943_25967[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 14))
{var inst_25910 = (state_25924[12]);var inst_25915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25910);var state_25924__$1 = state_25924;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25924__$1,16,out,inst_25915);
} else
{if((state_val_25925 === 15))
{var inst_25920 = (state_25924[2]);var state_25924__$1 = state_25924;var statearr_25944_25968 = state_25924__$1;(statearr_25944_25968[2] = inst_25920);
(statearr_25944_25968[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25925 === 16))
{var inst_25917 = (state_25924[2]);var state_25924__$1 = (function (){var statearr_25945 = state_25924;(statearr_25945[13] = inst_25917);
return statearr_25945;
})();var statearr_25946_25969 = state_25924__$1;(statearr_25946_25969[2] = null);
(statearr_25946_25969[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25950[0] = state_machine__5507__auto__);
(statearr_25950[1] = 1);
return statearr_25950;
});
var state_machine__5507__auto____1 = (function (state_25924){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25924);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25951){if((e25951 instanceof Object))
{var ex__5510__auto__ = e25951;var statearr_25952_25970 = state_25924;(statearr_25952_25970[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25924);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25971 = state_25924;
state_25924 = G__25971;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25924){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25953 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25954);
return statearr_25953;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26055){var state_val_26056 = (state_26055[1]);if((state_val_26056 === 1))
{var inst_26026 = cljs.core.vec(chs);var inst_26027 = inst_26026;var state_26055__$1 = (function (){var statearr_26057 = state_26055;(statearr_26057[7] = inst_26027);
return statearr_26057;
})();var statearr_26058_26080 = state_26055__$1;(statearr_26058_26080[2] = null);
(statearr_26058_26080[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26056 === 2))
{var inst_26027 = (state_26055[7]);var inst_26029 = cljs.core.count(inst_26027);var inst_26030 = (inst_26029 > 0);var state_26055__$1 = state_26055;if(cljs.core.truth_(inst_26030))
{var statearr_26059_26081 = state_26055__$1;(statearr_26059_26081[1] = 4);
} else
{var statearr_26060_26082 = state_26055__$1;(statearr_26060_26082[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26056 === 3))
{var inst_26053 = (state_26055[2]);var state_26055__$1 = state_26055;return cljs.core.async.impl.ioc_helpers.return_chan(state_26055__$1,inst_26053);
} else
{if((state_val_26056 === 4))
{var inst_26027 = (state_26055[7]);var state_26055__$1 = state_26055;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26055__$1,7,inst_26027);
} else
{if((state_val_26056 === 5))
{var inst_26049 = cljs.core.async.close_BANG_(out);var state_26055__$1 = state_26055;var statearr_26061_26083 = state_26055__$1;(statearr_26061_26083[2] = inst_26049);
(statearr_26061_26083[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26056 === 6))
{var inst_26051 = (state_26055[2]);var state_26055__$1 = state_26055;var statearr_26062_26084 = state_26055__$1;(statearr_26062_26084[2] = inst_26051);
(statearr_26062_26084[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26056 === 7))
{var inst_26034 = (state_26055[8]);var inst_26035 = (state_26055[9]);var inst_26034__$1 = (state_26055[2]);var inst_26035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26034__$1,0,null);var inst_26036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26034__$1,1,null);var inst_26037 = (inst_26035__$1 == null);var state_26055__$1 = (function (){var statearr_26063 = state_26055;(statearr_26063[10] = inst_26036);
(statearr_26063[8] = inst_26034__$1);
(statearr_26063[9] = inst_26035__$1);
return statearr_26063;
})();if(cljs.core.truth_(inst_26037))
{var statearr_26064_26085 = state_26055__$1;(statearr_26064_26085[1] = 8);
} else
{var statearr_26065_26086 = state_26055__$1;(statearr_26065_26086[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26056 === 8))
{var inst_26036 = (state_26055[10]);var inst_26034 = (state_26055[8]);var inst_26035 = (state_26055[9]);var inst_26027 = (state_26055[7]);var inst_26039 = (function (){var c = inst_26036;var v = inst_26035;var vec__26032 = inst_26034;var cs = inst_26027;return ((function (c,v,vec__26032,cs,inst_26036,inst_26034,inst_26035,inst_26027,state_val_26056){
return (function (p1__25972_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25972_SHARP_);
});
;})(c,v,vec__26032,cs,inst_26036,inst_26034,inst_26035,inst_26027,state_val_26056))
})();var inst_26040 = cljs.core.filterv(inst_26039,inst_26027);var inst_26027__$1 = inst_26040;var state_26055__$1 = (function (){var statearr_26066 = state_26055;(statearr_26066[7] = inst_26027__$1);
return statearr_26066;
})();var statearr_26067_26087 = state_26055__$1;(statearr_26067_26087[2] = null);
(statearr_26067_26087[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26056 === 9))
{var inst_26035 = (state_26055[9]);var state_26055__$1 = state_26055;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26055__$1,11,out,inst_26035);
} else
{if((state_val_26056 === 10))
{var inst_26047 = (state_26055[2]);var state_26055__$1 = state_26055;var statearr_26069_26088 = state_26055__$1;(statearr_26069_26088[2] = inst_26047);
(statearr_26069_26088[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26056 === 11))
{var inst_26027 = (state_26055[7]);var inst_26044 = (state_26055[2]);var tmp26068 = inst_26027;var inst_26027__$1 = tmp26068;var state_26055__$1 = (function (){var statearr_26070 = state_26055;(statearr_26070[7] = inst_26027__$1);
(statearr_26070[11] = inst_26044);
return statearr_26070;
})();var statearr_26071_26089 = state_26055__$1;(statearr_26071_26089[2] = null);
(statearr_26071_26089[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26075 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26075[0] = state_machine__5507__auto__);
(statearr_26075[1] = 1);
return statearr_26075;
});
var state_machine__5507__auto____1 = (function (state_26055){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26055);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26076){if((e26076 instanceof Object))
{var ex__5510__auto__ = e26076;var statearr_26077_26090 = state_26055;(statearr_26077_26090[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26055);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26091 = state_26055;
state_26055 = G__26091;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26055){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26078 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26079);
return statearr_26078;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26161){var state_val_26162 = (state_26161[1]);if((state_val_26162 === 1))
{var inst_26138 = 0;var state_26161__$1 = (function (){var statearr_26163 = state_26161;(statearr_26163[7] = inst_26138);
return statearr_26163;
})();var statearr_26164_26185 = state_26161__$1;(statearr_26164_26185[2] = null);
(statearr_26164_26185[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26162 === 2))
{var inst_26138 = (state_26161[7]);var inst_26140 = (inst_26138 < n);var state_26161__$1 = state_26161;if(cljs.core.truth_(inst_26140))
{var statearr_26165_26186 = state_26161__$1;(statearr_26165_26186[1] = 4);
} else
{var statearr_26166_26187 = state_26161__$1;(statearr_26166_26187[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26162 === 3))
{var inst_26158 = (state_26161[2]);var inst_26159 = cljs.core.async.close_BANG_(out);var state_26161__$1 = (function (){var statearr_26167 = state_26161;(statearr_26167[8] = inst_26158);
return statearr_26167;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26161__$1,inst_26159);
} else
{if((state_val_26162 === 4))
{var state_26161__$1 = state_26161;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26161__$1,7,ch);
} else
{if((state_val_26162 === 5))
{var state_26161__$1 = state_26161;var statearr_26168_26188 = state_26161__$1;(statearr_26168_26188[2] = null);
(statearr_26168_26188[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26162 === 6))
{var inst_26156 = (state_26161[2]);var state_26161__$1 = state_26161;var statearr_26169_26189 = state_26161__$1;(statearr_26169_26189[2] = inst_26156);
(statearr_26169_26189[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26162 === 7))
{var inst_26143 = (state_26161[9]);var inst_26143__$1 = (state_26161[2]);var inst_26144 = (inst_26143__$1 == null);var inst_26145 = cljs.core.not(inst_26144);var state_26161__$1 = (function (){var statearr_26170 = state_26161;(statearr_26170[9] = inst_26143__$1);
return statearr_26170;
})();if(inst_26145)
{var statearr_26171_26190 = state_26161__$1;(statearr_26171_26190[1] = 8);
} else
{var statearr_26172_26191 = state_26161__$1;(statearr_26172_26191[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26162 === 8))
{var inst_26143 = (state_26161[9]);var state_26161__$1 = state_26161;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26161__$1,11,out,inst_26143);
} else
{if((state_val_26162 === 9))
{var state_26161__$1 = state_26161;var statearr_26173_26192 = state_26161__$1;(statearr_26173_26192[2] = null);
(statearr_26173_26192[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26162 === 10))
{var inst_26153 = (state_26161[2]);var state_26161__$1 = state_26161;var statearr_26174_26193 = state_26161__$1;(statearr_26174_26193[2] = inst_26153);
(statearr_26174_26193[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26162 === 11))
{var inst_26138 = (state_26161[7]);var inst_26148 = (state_26161[2]);var inst_26149 = (inst_26138 + 1);var inst_26138__$1 = inst_26149;var state_26161__$1 = (function (){var statearr_26175 = state_26161;(statearr_26175[10] = inst_26148);
(statearr_26175[7] = inst_26138__$1);
return statearr_26175;
})();var statearr_26176_26194 = state_26161__$1;(statearr_26176_26194[2] = null);
(statearr_26176_26194[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26180 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26180[0] = state_machine__5507__auto__);
(statearr_26180[1] = 1);
return statearr_26180;
});
var state_machine__5507__auto____1 = (function (state_26161){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26161);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26181){if((e26181 instanceof Object))
{var ex__5510__auto__ = e26181;var statearr_26182_26195 = state_26161;(statearr_26182_26195[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26161);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26196 = state_26161;
state_26161 = G__26196;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26161){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26183 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26184);
return statearr_26183;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26268){var state_val_26269 = (state_26268[1]);if((state_val_26269 === 1))
{var inst_26245 = null;var state_26268__$1 = (function (){var statearr_26270 = state_26268;(statearr_26270[7] = inst_26245);
return statearr_26270;
})();var statearr_26271_26294 = state_26268__$1;(statearr_26271_26294[2] = null);
(statearr_26271_26294[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26269 === 2))
{var state_26268__$1 = state_26268;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26268__$1,4,ch);
} else
{if((state_val_26269 === 3))
{var inst_26265 = (state_26268[2]);var inst_26266 = cljs.core.async.close_BANG_(out);var state_26268__$1 = (function (){var statearr_26272 = state_26268;(statearr_26272[8] = inst_26265);
return statearr_26272;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26268__$1,inst_26266);
} else
{if((state_val_26269 === 4))
{var inst_26248 = (state_26268[9]);var inst_26248__$1 = (state_26268[2]);var inst_26249 = (inst_26248__$1 == null);var inst_26250 = cljs.core.not(inst_26249);var state_26268__$1 = (function (){var statearr_26273 = state_26268;(statearr_26273[9] = inst_26248__$1);
return statearr_26273;
})();if(inst_26250)
{var statearr_26274_26295 = state_26268__$1;(statearr_26274_26295[1] = 5);
} else
{var statearr_26275_26296 = state_26268__$1;(statearr_26275_26296[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26269 === 5))
{var inst_26245 = (state_26268[7]);var inst_26248 = (state_26268[9]);var inst_26252 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26248,inst_26245);var state_26268__$1 = state_26268;if(inst_26252)
{var statearr_26276_26297 = state_26268__$1;(statearr_26276_26297[1] = 8);
} else
{var statearr_26277_26298 = state_26268__$1;(statearr_26277_26298[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26269 === 6))
{var state_26268__$1 = state_26268;var statearr_26279_26299 = state_26268__$1;(statearr_26279_26299[2] = null);
(statearr_26279_26299[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26269 === 7))
{var inst_26263 = (state_26268[2]);var state_26268__$1 = state_26268;var statearr_26280_26300 = state_26268__$1;(statearr_26280_26300[2] = inst_26263);
(statearr_26280_26300[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26269 === 8))
{var inst_26245 = (state_26268[7]);var tmp26278 = inst_26245;var inst_26245__$1 = tmp26278;var state_26268__$1 = (function (){var statearr_26281 = state_26268;(statearr_26281[7] = inst_26245__$1);
return statearr_26281;
})();var statearr_26282_26301 = state_26268__$1;(statearr_26282_26301[2] = null);
(statearr_26282_26301[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26269 === 9))
{var inst_26248 = (state_26268[9]);var state_26268__$1 = state_26268;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26268__$1,11,out,inst_26248);
} else
{if((state_val_26269 === 10))
{var inst_26260 = (state_26268[2]);var state_26268__$1 = state_26268;var statearr_26283_26302 = state_26268__$1;(statearr_26283_26302[2] = inst_26260);
(statearr_26283_26302[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26269 === 11))
{var inst_26248 = (state_26268[9]);var inst_26257 = (state_26268[2]);var inst_26245 = inst_26248;var state_26268__$1 = (function (){var statearr_26284 = state_26268;(statearr_26284[7] = inst_26245);
(statearr_26284[10] = inst_26257);
return statearr_26284;
})();var statearr_26285_26303 = state_26268__$1;(statearr_26285_26303[2] = null);
(statearr_26285_26303[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26289 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26289[0] = state_machine__5507__auto__);
(statearr_26289[1] = 1);
return statearr_26289;
});
var state_machine__5507__auto____1 = (function (state_26268){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26268);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26290){if((e26290 instanceof Object))
{var ex__5510__auto__ = e26290;var statearr_26291_26304 = state_26268;(statearr_26291_26304[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26268);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26305 = state_26268;
state_26268 = G__26305;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26268){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26292 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26293);
return statearr_26292;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26410){var state_val_26411 = (state_26410[1]);if((state_val_26411 === 1))
{var inst_26373 = (new Array(n));var inst_26374 = inst_26373;var inst_26375 = 0;var state_26410__$1 = (function (){var statearr_26412 = state_26410;(statearr_26412[7] = inst_26375);
(statearr_26412[8] = inst_26374);
return statearr_26412;
})();var statearr_26413_26441 = state_26410__$1;(statearr_26413_26441[2] = null);
(statearr_26413_26441[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 2))
{var state_26410__$1 = state_26410;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26410__$1,4,ch);
} else
{if((state_val_26411 === 3))
{var inst_26408 = (state_26410[2]);var state_26410__$1 = state_26410;return cljs.core.async.impl.ioc_helpers.return_chan(state_26410__$1,inst_26408);
} else
{if((state_val_26411 === 4))
{var inst_26378 = (state_26410[9]);var inst_26378__$1 = (state_26410[2]);var inst_26379 = (inst_26378__$1 == null);var inst_26380 = cljs.core.not(inst_26379);var state_26410__$1 = (function (){var statearr_26414 = state_26410;(statearr_26414[9] = inst_26378__$1);
return statearr_26414;
})();if(inst_26380)
{var statearr_26415_26442 = state_26410__$1;(statearr_26415_26442[1] = 5);
} else
{var statearr_26416_26443 = state_26410__$1;(statearr_26416_26443[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 5))
{var inst_26383 = (state_26410[10]);var inst_26378 = (state_26410[9]);var inst_26375 = (state_26410[7]);var inst_26374 = (state_26410[8]);var inst_26382 = (inst_26374[inst_26375] = inst_26378);var inst_26383__$1 = (inst_26375 + 1);var inst_26384 = (inst_26383__$1 < n);var state_26410__$1 = (function (){var statearr_26417 = state_26410;(statearr_26417[10] = inst_26383__$1);
(statearr_26417[11] = inst_26382);
return statearr_26417;
})();if(cljs.core.truth_(inst_26384))
{var statearr_26418_26444 = state_26410__$1;(statearr_26418_26444[1] = 8);
} else
{var statearr_26419_26445 = state_26410__$1;(statearr_26419_26445[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 6))
{var inst_26375 = (state_26410[7]);var inst_26396 = (inst_26375 > 0);var state_26410__$1 = state_26410;if(cljs.core.truth_(inst_26396))
{var statearr_26421_26446 = state_26410__$1;(statearr_26421_26446[1] = 12);
} else
{var statearr_26422_26447 = state_26410__$1;(statearr_26422_26447[1] = 13);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 7))
{var inst_26406 = (state_26410[2]);var state_26410__$1 = state_26410;var statearr_26423_26448 = state_26410__$1;(statearr_26423_26448[2] = inst_26406);
(statearr_26423_26448[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 8))
{var inst_26383 = (state_26410[10]);var inst_26374 = (state_26410[8]);var tmp26420 = inst_26374;var inst_26374__$1 = tmp26420;var inst_26375 = inst_26383;var state_26410__$1 = (function (){var statearr_26424 = state_26410;(statearr_26424[7] = inst_26375);
(statearr_26424[8] = inst_26374__$1);
return statearr_26424;
})();var statearr_26425_26449 = state_26410__$1;(statearr_26425_26449[2] = null);
(statearr_26425_26449[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 9))
{var inst_26374 = (state_26410[8]);var inst_26388 = cljs.core.vec(inst_26374);var state_26410__$1 = state_26410;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26410__$1,11,out,inst_26388);
} else
{if((state_val_26411 === 10))
{var inst_26394 = (state_26410[2]);var state_26410__$1 = state_26410;var statearr_26426_26450 = state_26410__$1;(statearr_26426_26450[2] = inst_26394);
(statearr_26426_26450[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 11))
{var inst_26390 = (state_26410[2]);var inst_26391 = (new Array(n));var inst_26374 = inst_26391;var inst_26375 = 0;var state_26410__$1 = (function (){var statearr_26427 = state_26410;(statearr_26427[12] = inst_26390);
(statearr_26427[7] = inst_26375);
(statearr_26427[8] = inst_26374);
return statearr_26427;
})();var statearr_26428_26451 = state_26410__$1;(statearr_26428_26451[2] = null);
(statearr_26428_26451[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 12))
{var inst_26374 = (state_26410[8]);var inst_26398 = cljs.core.vec(inst_26374);var state_26410__$1 = state_26410;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26410__$1,15,out,inst_26398);
} else
{if((state_val_26411 === 13))
{var state_26410__$1 = state_26410;var statearr_26429_26452 = state_26410__$1;(statearr_26429_26452[2] = null);
(statearr_26429_26452[1] = 14);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 14))
{var inst_26403 = (state_26410[2]);var inst_26404 = cljs.core.async.close_BANG_(out);var state_26410__$1 = (function (){var statearr_26430 = state_26410;(statearr_26430[13] = inst_26403);
return statearr_26430;
})();var statearr_26431_26453 = state_26410__$1;(statearr_26431_26453[2] = inst_26404);
(statearr_26431_26453[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26411 === 15))
{var inst_26400 = (state_26410[2]);var state_26410__$1 = state_26410;var statearr_26432_26454 = state_26410__$1;(statearr_26432_26454[2] = inst_26400);
(statearr_26432_26454[1] = 14);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26436[0] = state_machine__5507__auto__);
(statearr_26436[1] = 1);
return statearr_26436;
});
var state_machine__5507__auto____1 = (function (state_26410){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26410);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26437){if((e26437 instanceof Object))
{var ex__5510__auto__ = e26437;var statearr_26438_26455 = state_26410;(statearr_26438_26455[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26410);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26456 = state_26410;
state_26410 = G__26456;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26410){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26439 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26440);
return statearr_26439;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26569){var state_val_26570 = (state_26569[1]);if((state_val_26570 === 1))
{var inst_26528 = [];var inst_26529 = inst_26528;var inst_26530 = cljs.core.constant$keyword$248;var state_26569__$1 = (function (){var statearr_26571 = state_26569;(statearr_26571[7] = inst_26529);
(statearr_26571[8] = inst_26530);
return statearr_26571;
})();var statearr_26572_26600 = state_26569__$1;(statearr_26572_26600[2] = null);
(statearr_26572_26600[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 2))
{var state_26569__$1 = state_26569;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26569__$1,4,ch);
} else
{if((state_val_26570 === 3))
{var inst_26567 = (state_26569[2]);var state_26569__$1 = state_26569;return cljs.core.async.impl.ioc_helpers.return_chan(state_26569__$1,inst_26567);
} else
{if((state_val_26570 === 4))
{var inst_26533 = (state_26569[9]);var inst_26533__$1 = (state_26569[2]);var inst_26534 = (inst_26533__$1 == null);var inst_26535 = cljs.core.not(inst_26534);var state_26569__$1 = (function (){var statearr_26573 = state_26569;(statearr_26573[9] = inst_26533__$1);
return statearr_26573;
})();if(inst_26535)
{var statearr_26574_26601 = state_26569__$1;(statearr_26574_26601[1] = 5);
} else
{var statearr_26575_26602 = state_26569__$1;(statearr_26575_26602[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 5))
{var inst_26537 = (state_26569[10]);var inst_26533 = (state_26569[9]);var inst_26530 = (state_26569[8]);var inst_26537__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26533) : f.call(null,inst_26533));var inst_26538 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26537__$1,inst_26530);var inst_26539 = cljs.core.keyword_identical_QMARK_(inst_26530,cljs.core.constant$keyword$248);var inst_26540 = (inst_26538) || (inst_26539);var state_26569__$1 = (function (){var statearr_26576 = state_26569;(statearr_26576[10] = inst_26537__$1);
return statearr_26576;
})();if(cljs.core.truth_(inst_26540))
{var statearr_26577_26603 = state_26569__$1;(statearr_26577_26603[1] = 8);
} else
{var statearr_26578_26604 = state_26569__$1;(statearr_26578_26604[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 6))
{var inst_26529 = (state_26569[7]);var inst_26554 = inst_26529.length;var inst_26555 = (inst_26554 > 0);var state_26569__$1 = state_26569;if(cljs.core.truth_(inst_26555))
{var statearr_26580_26605 = state_26569__$1;(statearr_26580_26605[1] = 12);
} else
{var statearr_26581_26606 = state_26569__$1;(statearr_26581_26606[1] = 13);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 7))
{var inst_26565 = (state_26569[2]);var state_26569__$1 = state_26569;var statearr_26582_26607 = state_26569__$1;(statearr_26582_26607[2] = inst_26565);
(statearr_26582_26607[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 8))
{var inst_26537 = (state_26569[10]);var inst_26529 = (state_26569[7]);var inst_26533 = (state_26569[9]);var inst_26542 = inst_26529.push(inst_26533);var tmp26579 = inst_26529;var inst_26529__$1 = tmp26579;var inst_26530 = inst_26537;var state_26569__$1 = (function (){var statearr_26583 = state_26569;(statearr_26583[11] = inst_26542);
(statearr_26583[7] = inst_26529__$1);
(statearr_26583[8] = inst_26530);
return statearr_26583;
})();var statearr_26584_26608 = state_26569__$1;(statearr_26584_26608[2] = null);
(statearr_26584_26608[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 9))
{var inst_26529 = (state_26569[7]);var inst_26545 = cljs.core.vec(inst_26529);var state_26569__$1 = state_26569;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26569__$1,11,out,inst_26545);
} else
{if((state_val_26570 === 10))
{var inst_26552 = (state_26569[2]);var state_26569__$1 = state_26569;var statearr_26585_26609 = state_26569__$1;(statearr_26585_26609[2] = inst_26552);
(statearr_26585_26609[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 11))
{var inst_26537 = (state_26569[10]);var inst_26533 = (state_26569[9]);var inst_26547 = (state_26569[2]);var inst_26548 = [];var inst_26549 = inst_26548.push(inst_26533);var inst_26529 = inst_26548;var inst_26530 = inst_26537;var state_26569__$1 = (function (){var statearr_26586 = state_26569;(statearr_26586[12] = inst_26549);
(statearr_26586[13] = inst_26547);
(statearr_26586[7] = inst_26529);
(statearr_26586[8] = inst_26530);
return statearr_26586;
})();var statearr_26587_26610 = state_26569__$1;(statearr_26587_26610[2] = null);
(statearr_26587_26610[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 12))
{var inst_26529 = (state_26569[7]);var inst_26557 = cljs.core.vec(inst_26529);var state_26569__$1 = state_26569;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26569__$1,15,out,inst_26557);
} else
{if((state_val_26570 === 13))
{var state_26569__$1 = state_26569;var statearr_26588_26611 = state_26569__$1;(statearr_26588_26611[2] = null);
(statearr_26588_26611[1] = 14);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 14))
{var inst_26562 = (state_26569[2]);var inst_26563 = cljs.core.async.close_BANG_(out);var state_26569__$1 = (function (){var statearr_26589 = state_26569;(statearr_26589[14] = inst_26562);
return statearr_26589;
})();var statearr_26590_26612 = state_26569__$1;(statearr_26590_26612[2] = inst_26563);
(statearr_26590_26612[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26570 === 15))
{var inst_26559 = (state_26569[2]);var state_26569__$1 = state_26569;var statearr_26591_26613 = state_26569__$1;(statearr_26591_26613[2] = inst_26559);
(statearr_26591_26613[1] = 14);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26595[0] = state_machine__5507__auto__);
(statearr_26595[1] = 1);
return statearr_26595;
});
var state_machine__5507__auto____1 = (function (state_26569){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26569);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object))
{var ex__5510__auto__ = e26596;var statearr_26597_26614 = state_26569;(statearr_26597_26614[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26569);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26615 = state_26569;
state_26569 = G__26615;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26569){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26598 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26599);
return statearr_26598;
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
