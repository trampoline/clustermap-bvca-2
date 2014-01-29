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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23071 = (function (f,fn_handler,meta23072){
this.f = f;
this.fn_handler = fn_handler;
this.meta23072 = meta23072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23071.cljs$lang$type = true;
cljs.core.async.t23071.cljs$lang$ctorStr = "cljs.core.async/t23071";
cljs.core.async.t23071.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23071");
});
cljs.core.async.t23071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23073){var self__ = this;
var _23073__$1 = this;return self__.meta23072;
});
cljs.core.async.t23071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23073,meta23072__$1){var self__ = this;
var _23073__$1 = this;return (new cljs.core.async.t23071(self__.f,self__.fn_handler,meta23072__$1));
});
cljs.core.async.__GT_t23071 = (function __GT_t23071(f__$1,fn_handler__$1,meta23072){return (new cljs.core.async.t23071(f__$1,fn_handler__$1,meta23072));
});
}
return (new cljs.core.async.t23071(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23075 = buff;if(G__23075)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23075.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23075.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23075);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23075);
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
{var val_23076 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23076) : fn1.call(null,val_23076));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23076) : fn1.call(null,val_23076));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23077 = n;var x_23078 = 0;while(true){
if((x_23078 < n__4248__auto___23077))
{(a[x_23078] = 0);
{
var G__23079 = (x_23078 + 1);
x_23078 = G__23079;
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
var G__23080 = (i + 1);
i = G__23080;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23084 = (function (flag,alt_flag,meta23085){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23085 = meta23085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23084.cljs$lang$type = true;
cljs.core.async.t23084.cljs$lang$ctorStr = "cljs.core.async/t23084";
cljs.core.async.t23084.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23084");
});
cljs.core.async.t23084.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23086){var self__ = this;
var _23086__$1 = this;return self__.meta23085;
});
cljs.core.async.t23084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23086,meta23085__$1){var self__ = this;
var _23086__$1 = this;return (new cljs.core.async.t23084(self__.flag,self__.alt_flag,meta23085__$1));
});
cljs.core.async.__GT_t23084 = (function __GT_t23084(flag__$1,alt_flag__$1,meta23085){return (new cljs.core.async.t23084(flag__$1,alt_flag__$1,meta23085));
});
}
return (new cljs.core.async.t23084(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23090 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23090 = (function (cb,flag,alt_handler,meta23091){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23091 = meta23091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23090.cljs$lang$type = true;
cljs.core.async.t23090.cljs$lang$ctorStr = "cljs.core.async/t23090";
cljs.core.async.t23090.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23090");
});
cljs.core.async.t23090.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23092){var self__ = this;
var _23092__$1 = this;return self__.meta23091;
});
cljs.core.async.t23090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23092,meta23091__$1){var self__ = this;
var _23092__$1 = this;return (new cljs.core.async.t23090(self__.cb,self__.flag,self__.alt_handler,meta23091__$1));
});
cljs.core.async.__GT_t23090 = (function __GT_t23090(cb__$1,flag__$1,alt_handler__$1,meta23091){return (new cljs.core.async.t23090(cb__$1,flag__$1,alt_handler__$1,meta23091));
});
}
return (new cljs.core.async.t23090(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23093_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23093_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23093_SHARP_,port], null)));
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
var G__23094 = (i + 1);
i = G__23094;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$187))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$187], null));
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
var alts_BANG___delegate = function (ports,p__23095){var map__23097 = p__23095;var map__23097__$1 = ((cljs.core.seq_QMARK_(map__23097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23097):map__23097);var opts = map__23097__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23095 = null;if (arguments.length > 1) {
  p__23095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23095);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23098){
var ports = cljs.core.first(arglist__23098);
var p__23095 = cljs.core.rest(arglist__23098);
return alts_BANG___delegate(ports,p__23095);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23106 = (function (ch,f,map_LT_,meta23107){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23107 = meta23107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23106.cljs$lang$type = true;
cljs.core.async.t23106.cljs$lang$ctorStr = "cljs.core.async/t23106";
cljs.core.async.t23106.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23106");
});
cljs.core.async.t23106.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23106.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23109 = (function (fn1,_,meta23107,ch,f,map_LT_,meta23110){
this.fn1 = fn1;
this._ = _;
this.meta23107 = meta23107;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23110 = meta23110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23109.cljs$lang$type = true;
cljs.core.async.t23109.cljs$lang$ctorStr = "cljs.core.async/t23109";
cljs.core.async.t23109.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23109");
});
cljs.core.async.t23109.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23109.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23099_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23099_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23099_SHARP_) : self__.f.call(null,p1__23099_SHARP_)))) : f1.call(null,(((p1__23099_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23099_SHARP_) : self__.f.call(null,p1__23099_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23111){var self__ = this;
var _23111__$1 = this;return self__.meta23110;
});
cljs.core.async.t23109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23111,meta23110__$1){var self__ = this;
var _23111__$1 = this;return (new cljs.core.async.t23109(self__.fn1,self__._,self__.meta23107,self__.ch,self__.f,self__.map_LT_,meta23110__$1));
});
cljs.core.async.__GT_t23109 = (function __GT_t23109(fn1__$1,___$2,meta23107__$1,ch__$2,f__$2,map_LT___$2,meta23110){return (new cljs.core.async.t23109(fn1__$1,___$2,meta23107__$1,ch__$2,f__$2,map_LT___$2,meta23110));
});
}
return (new cljs.core.async.t23109(fn1,___$1,self__.meta23107,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23106.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23108){var self__ = this;
var _23108__$1 = this;return self__.meta23107;
});
cljs.core.async.t23106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23108,meta23107__$1){var self__ = this;
var _23108__$1 = this;return (new cljs.core.async.t23106(self__.ch,self__.f,self__.map_LT_,meta23107__$1));
});
cljs.core.async.__GT_t23106 = (function __GT_t23106(ch__$1,f__$1,map_LT___$1,meta23107){return (new cljs.core.async.t23106(ch__$1,f__$1,map_LT___$1,meta23107));
});
}
return (new cljs.core.async.t23106(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23115 = (function (ch,f,map_GT_,meta23116){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23116 = meta23116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23115.cljs$lang$type = true;
cljs.core.async.t23115.cljs$lang$ctorStr = "cljs.core.async/t23115";
cljs.core.async.t23115.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23115");
});
cljs.core.async.t23115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23115.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23117){var self__ = this;
var _23117__$1 = this;return self__.meta23116;
});
cljs.core.async.t23115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23117,meta23116__$1){var self__ = this;
var _23117__$1 = this;return (new cljs.core.async.t23115(self__.ch,self__.f,self__.map_GT_,meta23116__$1));
});
cljs.core.async.__GT_t23115 = (function __GT_t23115(ch__$1,f__$1,map_GT___$1,meta23116){return (new cljs.core.async.t23115(ch__$1,f__$1,map_GT___$1,meta23116));
});
}
return (new cljs.core.async.t23115(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23121 = (function (ch,p,filter_GT_,meta23122){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23122 = meta23122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23121.cljs$lang$type = true;
cljs.core.async.t23121.cljs$lang$ctorStr = "cljs.core.async/t23121";
cljs.core.async.t23121.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23121");
});
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23123){var self__ = this;
var _23123__$1 = this;return self__.meta23122;
});
cljs.core.async.t23121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23123,meta23122__$1){var self__ = this;
var _23123__$1 = this;return (new cljs.core.async.t23121(self__.ch,self__.p,self__.filter_GT_,meta23122__$1));
});
cljs.core.async.__GT_t23121 = (function __GT_t23121(ch__$1,p__$1,filter_GT___$1,meta23122){return (new cljs.core.async.t23121(ch__$1,p__$1,filter_GT___$1,meta23122));
});
}
return (new cljs.core.async.t23121(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23185){var state_val_23186 = (state_23185[1]);if((state_val_23186 === 1))
{var state_23185__$1 = state_23185;var statearr_23187_23207 = state_23185__$1;(statearr_23187_23207[2] = null);
(statearr_23187_23207[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23186 === 2))
{var state_23185__$1 = state_23185;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23185__$1,4,ch);
} else
{if((state_val_23186 === 3))
{var inst_23183 = (state_23185[2]);var state_23185__$1 = state_23185;return cljs.core.async.impl.ioc_helpers.return_chan(state_23185__$1,inst_23183);
} else
{if((state_val_23186 === 4))
{var inst_23167 = (state_23185[7]);var inst_23167__$1 = (state_23185[2]);var inst_23168 = (inst_23167__$1 == null);var state_23185__$1 = (function (){var statearr_23188 = state_23185;(statearr_23188[7] = inst_23167__$1);
return statearr_23188;
})();if(cljs.core.truth_(inst_23168))
{var statearr_23189_23208 = state_23185__$1;(statearr_23189_23208[1] = 5);
} else
{var statearr_23190_23209 = state_23185__$1;(statearr_23190_23209[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23186 === 5))
{var inst_23170 = cljs.core.async.close_BANG_(out);var state_23185__$1 = state_23185;var statearr_23191_23210 = state_23185__$1;(statearr_23191_23210[2] = inst_23170);
(statearr_23191_23210[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23186 === 6))
{var inst_23167 = (state_23185[7]);var inst_23172 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23167) : p.call(null,inst_23167));var state_23185__$1 = state_23185;if(cljs.core.truth_(inst_23172))
{var statearr_23192_23211 = state_23185__$1;(statearr_23192_23211[1] = 8);
} else
{var statearr_23193_23212 = state_23185__$1;(statearr_23193_23212[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23186 === 7))
{var inst_23181 = (state_23185[2]);var state_23185__$1 = state_23185;var statearr_23194_23213 = state_23185__$1;(statearr_23194_23213[2] = inst_23181);
(statearr_23194_23213[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23186 === 8))
{var inst_23167 = (state_23185[7]);var state_23185__$1 = state_23185;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23185__$1,11,out,inst_23167);
} else
{if((state_val_23186 === 9))
{var state_23185__$1 = state_23185;var statearr_23195_23214 = state_23185__$1;(statearr_23195_23214[2] = null);
(statearr_23195_23214[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23186 === 10))
{var inst_23178 = (state_23185[2]);var state_23185__$1 = (function (){var statearr_23196 = state_23185;(statearr_23196[8] = inst_23178);
return statearr_23196;
})();var statearr_23197_23215 = state_23185__$1;(statearr_23197_23215[2] = null);
(statearr_23197_23215[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23186 === 11))
{var inst_23175 = (state_23185[2]);var state_23185__$1 = state_23185;var statearr_23198_23216 = state_23185__$1;(statearr_23198_23216[2] = inst_23175);
(statearr_23198_23216[1] = 10);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_23202 = [null,null,null,null,null,null,null,null,null];(statearr_23202[0] = state_machine__5507__auto__);
(statearr_23202[1] = 1);
return statearr_23202;
});
var state_machine__5507__auto____1 = (function (state_23185){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23185);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23203){if((e23203 instanceof Object))
{var ex__5510__auto__ = e23203;var statearr_23204_23217 = state_23185;(statearr_23204_23217[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23185);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e23203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__23218 = state_23185;
state_23185 = G__23218;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23185){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23205 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23206);
return statearr_23205;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23370){var state_val_23371 = (state_23370[1]);if((state_val_23371 === 1))
{var state_23370__$1 = state_23370;var statearr_23372_23409 = state_23370__$1;(statearr_23372_23409[2] = null);
(statearr_23372_23409[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 2))
{var state_23370__$1 = state_23370;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23370__$1,4,in$);
} else
{if((state_val_23371 === 3))
{var inst_23368 = (state_23370[2]);var state_23370__$1 = state_23370;return cljs.core.async.impl.ioc_helpers.return_chan(state_23370__$1,inst_23368);
} else
{if((state_val_23371 === 4))
{var inst_23316 = (state_23370[7]);var inst_23316__$1 = (state_23370[2]);var inst_23317 = (inst_23316__$1 == null);var state_23370__$1 = (function (){var statearr_23373 = state_23370;(statearr_23373[7] = inst_23316__$1);
return statearr_23373;
})();if(cljs.core.truth_(inst_23317))
{var statearr_23374_23410 = state_23370__$1;(statearr_23374_23410[1] = 5);
} else
{var statearr_23375_23411 = state_23370__$1;(statearr_23375_23411[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 5))
{var inst_23319 = cljs.core.async.close_BANG_(out);var state_23370__$1 = state_23370;var statearr_23376_23412 = state_23370__$1;(statearr_23376_23412[2] = inst_23319);
(statearr_23376_23412[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 6))
{var inst_23316 = (state_23370[7]);var inst_23321 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23316) : f.call(null,inst_23316));var inst_23326 = cljs.core.seq(inst_23321);var inst_23327 = inst_23326;var inst_23328 = null;var inst_23329 = 0;var inst_23330 = 0;var state_23370__$1 = (function (){var statearr_23377 = state_23370;(statearr_23377[8] = inst_23329);
(statearr_23377[9] = inst_23330);
(statearr_23377[10] = inst_23327);
(statearr_23377[11] = inst_23328);
return statearr_23377;
})();var statearr_23378_23413 = state_23370__$1;(statearr_23378_23413[2] = null);
(statearr_23378_23413[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 7))
{var inst_23366 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23379_23414 = state_23370__$1;(statearr_23379_23414[2] = inst_23366);
(statearr_23379_23414[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 8))
{var inst_23329 = (state_23370[8]);var inst_23330 = (state_23370[9]);var inst_23332 = (inst_23330 < inst_23329);var inst_23333 = inst_23332;var state_23370__$1 = state_23370;if(cljs.core.truth_(inst_23333))
{var statearr_23380_23415 = state_23370__$1;(statearr_23380_23415[1] = 10);
} else
{var statearr_23381_23416 = state_23370__$1;(statearr_23381_23416[1] = 11);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 9))
{var inst_23363 = (state_23370[2]);var state_23370__$1 = (function (){var statearr_23382 = state_23370;(statearr_23382[12] = inst_23363);
return statearr_23382;
})();var statearr_23383_23417 = state_23370__$1;(statearr_23383_23417[2] = null);
(statearr_23383_23417[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 10))
{var inst_23330 = (state_23370[9]);var inst_23328 = (state_23370[11]);var inst_23335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23328,inst_23330);var state_23370__$1 = state_23370;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23370__$1,13,out,inst_23335);
} else
{if((state_val_23371 === 11))
{var inst_23341 = (state_23370[13]);var inst_23327 = (state_23370[10]);var inst_23341__$1 = cljs.core.seq(inst_23327);var state_23370__$1 = (function (){var statearr_23387 = state_23370;(statearr_23387[13] = inst_23341__$1);
return statearr_23387;
})();if(inst_23341__$1)
{var statearr_23388_23418 = state_23370__$1;(statearr_23388_23418[1] = 14);
} else
{var statearr_23389_23419 = state_23370__$1;(statearr_23389_23419[1] = 15);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 12))
{var inst_23361 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23390_23420 = state_23370__$1;(statearr_23390_23420[2] = inst_23361);
(statearr_23390_23420[1] = 9);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 13))
{var inst_23329 = (state_23370[8]);var inst_23330 = (state_23370[9]);var inst_23327 = (state_23370[10]);var inst_23328 = (state_23370[11]);var inst_23337 = (state_23370[2]);var inst_23338 = (inst_23330 + 1);var tmp23384 = inst_23329;var tmp23385 = inst_23327;var tmp23386 = inst_23328;var inst_23327__$1 = tmp23385;var inst_23328__$1 = tmp23386;var inst_23329__$1 = tmp23384;var inst_23330__$1 = inst_23338;var state_23370__$1 = (function (){var statearr_23391 = state_23370;(statearr_23391[8] = inst_23329__$1);
(statearr_23391[9] = inst_23330__$1);
(statearr_23391[14] = inst_23337);
(statearr_23391[10] = inst_23327__$1);
(statearr_23391[11] = inst_23328__$1);
return statearr_23391;
})();var statearr_23392_23421 = state_23370__$1;(statearr_23392_23421[2] = null);
(statearr_23392_23421[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 14))
{var inst_23341 = (state_23370[13]);var inst_23343 = cljs.core.chunked_seq_QMARK_(inst_23341);var state_23370__$1 = state_23370;if(inst_23343)
{var statearr_23393_23422 = state_23370__$1;(statearr_23393_23422[1] = 17);
} else
{var statearr_23394_23423 = state_23370__$1;(statearr_23394_23423[1] = 18);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 15))
{var state_23370__$1 = state_23370;var statearr_23395_23424 = state_23370__$1;(statearr_23395_23424[2] = null);
(statearr_23395_23424[1] = 16);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 16))
{var inst_23359 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23396_23425 = state_23370__$1;(statearr_23396_23425[2] = inst_23359);
(statearr_23396_23425[1] = 12);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 17))
{var inst_23341 = (state_23370[13]);var inst_23345 = cljs.core.chunk_first(inst_23341);var inst_23346 = cljs.core.chunk_rest(inst_23341);var inst_23347 = cljs.core.count(inst_23345);var inst_23327 = inst_23346;var inst_23328 = inst_23345;var inst_23329 = inst_23347;var inst_23330 = 0;var state_23370__$1 = (function (){var statearr_23397 = state_23370;(statearr_23397[8] = inst_23329);
(statearr_23397[9] = inst_23330);
(statearr_23397[10] = inst_23327);
(statearr_23397[11] = inst_23328);
return statearr_23397;
})();var statearr_23398_23426 = state_23370__$1;(statearr_23398_23426[2] = null);
(statearr_23398_23426[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 18))
{var inst_23341 = (state_23370[13]);var inst_23350 = cljs.core.first(inst_23341);var state_23370__$1 = state_23370;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23370__$1,20,out,inst_23350);
} else
{if((state_val_23371 === 19))
{var inst_23356 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23399_23427 = state_23370__$1;(statearr_23399_23427[2] = inst_23356);
(statearr_23399_23427[1] = 16);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23371 === 20))
{var inst_23341 = (state_23370[13]);var inst_23352 = (state_23370[2]);var inst_23353 = cljs.core.next(inst_23341);var inst_23327 = inst_23353;var inst_23328 = null;var inst_23329 = 0;var inst_23330 = 0;var state_23370__$1 = (function (){var statearr_23400 = state_23370;(statearr_23400[15] = inst_23352);
(statearr_23400[8] = inst_23329);
(statearr_23400[9] = inst_23330);
(statearr_23400[10] = inst_23327);
(statearr_23400[11] = inst_23328);
return statearr_23400;
})();var statearr_23401_23428 = state_23370__$1;(statearr_23401_23428[2] = null);
(statearr_23401_23428[1] = 8);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_23405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23405[0] = state_machine__5507__auto__);
(statearr_23405[1] = 1);
return statearr_23405;
});
var state_machine__5507__auto____1 = (function (state_23370){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23370);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23406){if((e23406 instanceof Object))
{var ex__5510__auto__ = e23406;var statearr_23407_23429 = state_23370;(statearr_23407_23429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23370);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e23406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__23430 = state_23370;
state_23370 = G__23430;
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
})();var state__5523__auto__ = (function (){var statearr_23408 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23408;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23490){var state_val_23491 = (state_23490[1]);if((state_val_23491 === 1))
{var state_23490__$1 = state_23490;var statearr_23492_23512 = state_23490__$1;(statearr_23492_23512[2] = null);
(statearr_23492_23512[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23491 === 2))
{var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23490__$1,4,from);
} else
{if((state_val_23491 === 3))
{var inst_23488 = (state_23490[2]);var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.return_chan(state_23490__$1,inst_23488);
} else
{if((state_val_23491 === 4))
{var inst_23473 = (state_23490[7]);var inst_23473__$1 = (state_23490[2]);var inst_23474 = (inst_23473__$1 == null);var state_23490__$1 = (function (){var statearr_23493 = state_23490;(statearr_23493[7] = inst_23473__$1);
return statearr_23493;
})();if(cljs.core.truth_(inst_23474))
{var statearr_23494_23513 = state_23490__$1;(statearr_23494_23513[1] = 5);
} else
{var statearr_23495_23514 = state_23490__$1;(statearr_23495_23514[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23491 === 5))
{var state_23490__$1 = state_23490;if(cljs.core.truth_(close_QMARK_))
{var statearr_23496_23515 = state_23490__$1;(statearr_23496_23515[1] = 8);
} else
{var statearr_23497_23516 = state_23490__$1;(statearr_23497_23516[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23491 === 6))
{var inst_23473 = (state_23490[7]);var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23490__$1,11,to,inst_23473);
} else
{if((state_val_23491 === 7))
{var inst_23486 = (state_23490[2]);var state_23490__$1 = state_23490;var statearr_23498_23517 = state_23490__$1;(statearr_23498_23517[2] = inst_23486);
(statearr_23498_23517[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23491 === 8))
{var inst_23477 = cljs.core.async.close_BANG_(to);var state_23490__$1 = state_23490;var statearr_23499_23518 = state_23490__$1;(statearr_23499_23518[2] = inst_23477);
(statearr_23499_23518[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23491 === 9))
{var state_23490__$1 = state_23490;var statearr_23500_23519 = state_23490__$1;(statearr_23500_23519[2] = null);
(statearr_23500_23519[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23491 === 10))
{var inst_23480 = (state_23490[2]);var state_23490__$1 = state_23490;var statearr_23501_23520 = state_23490__$1;(statearr_23501_23520[2] = inst_23480);
(statearr_23501_23520[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23491 === 11))
{var inst_23483 = (state_23490[2]);var state_23490__$1 = (function (){var statearr_23502 = state_23490;(statearr_23502[8] = inst_23483);
return statearr_23502;
})();var statearr_23503_23521 = state_23490__$1;(statearr_23503_23521[2] = null);
(statearr_23503_23521[1] = 2);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_23507 = [null,null,null,null,null,null,null,null,null];(statearr_23507[0] = state_machine__5507__auto__);
(statearr_23507[1] = 1);
return statearr_23507;
});
var state_machine__5507__auto____1 = (function (state_23490){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23490);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23508){if((e23508 instanceof Object))
{var ex__5510__auto__ = e23508;var statearr_23509_23522 = state_23490;(statearr_23509_23522[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23490);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e23508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__23523 = state_23490;
state_23490 = G__23523;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23490){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23510 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23511);
return statearr_23510;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23588){var state_val_23589 = (state_23588[1]);if((state_val_23589 === 1))
{var state_23588__$1 = state_23588;var statearr_23590_23611 = state_23588__$1;(statearr_23590_23611[2] = null);
(statearr_23590_23611[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 2))
{var state_23588__$1 = state_23588;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23588__$1,4,ch);
} else
{if((state_val_23589 === 3))
{var inst_23586 = (state_23588[2]);var state_23588__$1 = state_23588;return cljs.core.async.impl.ioc_helpers.return_chan(state_23588__$1,inst_23586);
} else
{if((state_val_23589 === 4))
{var inst_23569 = (state_23588[7]);var inst_23569__$1 = (state_23588[2]);var inst_23570 = (inst_23569__$1 == null);var state_23588__$1 = (function (){var statearr_23591 = state_23588;(statearr_23591[7] = inst_23569__$1);
return statearr_23591;
})();if(cljs.core.truth_(inst_23570))
{var statearr_23592_23612 = state_23588__$1;(statearr_23592_23612[1] = 5);
} else
{var statearr_23593_23613 = state_23588__$1;(statearr_23593_23613[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 5))
{var inst_23572 = cljs.core.async.close_BANG_(tc);var inst_23573 = cljs.core.async.close_BANG_(fc);var state_23588__$1 = (function (){var statearr_23594 = state_23588;(statearr_23594[8] = inst_23572);
return statearr_23594;
})();var statearr_23595_23614 = state_23588__$1;(statearr_23595_23614[2] = inst_23573);
(statearr_23595_23614[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 6))
{var inst_23569 = (state_23588[7]);var inst_23575 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23569) : p.call(null,inst_23569));var state_23588__$1 = state_23588;if(cljs.core.truth_(inst_23575))
{var statearr_23596_23615 = state_23588__$1;(statearr_23596_23615[1] = 9);
} else
{var statearr_23597_23616 = state_23588__$1;(statearr_23597_23616[1] = 10);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 7))
{var inst_23584 = (state_23588[2]);var state_23588__$1 = state_23588;var statearr_23598_23617 = state_23588__$1;(statearr_23598_23617[2] = inst_23584);
(statearr_23598_23617[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 8))
{var inst_23581 = (state_23588[2]);var state_23588__$1 = (function (){var statearr_23599 = state_23588;(statearr_23599[9] = inst_23581);
return statearr_23599;
})();var statearr_23600_23618 = state_23588__$1;(statearr_23600_23618[2] = null);
(statearr_23600_23618[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 9))
{var state_23588__$1 = state_23588;var statearr_23601_23619 = state_23588__$1;(statearr_23601_23619[2] = tc);
(statearr_23601_23619[1] = 11);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 10))
{var state_23588__$1 = state_23588;var statearr_23602_23620 = state_23588__$1;(statearr_23602_23620[2] = fc);
(statearr_23602_23620[1] = 11);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23589 === 11))
{var inst_23569 = (state_23588[7]);var inst_23579 = (state_23588[2]);var state_23588__$1 = state_23588;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23588__$1,8,inst_23579,inst_23569);
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
var state_machine__5507__auto____0 = (function (){var statearr_23606 = [null,null,null,null,null,null,null,null,null,null];(statearr_23606[0] = state_machine__5507__auto__);
(statearr_23606[1] = 1);
return statearr_23606;
});
var state_machine__5507__auto____1 = (function (state_23588){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23588);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23607){if((e23607 instanceof Object))
{var ex__5510__auto__ = e23607;var statearr_23608_23621 = state_23588;(statearr_23608_23621[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23588);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e23607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__23622 = state_23588;
state_23588 = G__23622;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23588){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23609 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23610);
return statearr_23609;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23669){var state_val_23670 = (state_23669[1]);if((state_val_23670 === 7))
{var inst_23665 = (state_23669[2]);var state_23669__$1 = state_23669;var statearr_23671_23687 = state_23669__$1;(statearr_23671_23687[2] = inst_23665);
(statearr_23671_23687[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23670 === 6))
{var inst_23655 = (state_23669[7]);var inst_23658 = (state_23669[8]);var inst_23662 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23655,inst_23658) : f.call(null,inst_23655,inst_23658));var inst_23655__$1 = inst_23662;var state_23669__$1 = (function (){var statearr_23672 = state_23669;(statearr_23672[7] = inst_23655__$1);
return statearr_23672;
})();var statearr_23673_23688 = state_23669__$1;(statearr_23673_23688[2] = null);
(statearr_23673_23688[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23670 === 5))
{var inst_23655 = (state_23669[7]);var state_23669__$1 = state_23669;var statearr_23674_23689 = state_23669__$1;(statearr_23674_23689[2] = inst_23655);
(statearr_23674_23689[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23670 === 4))
{var inst_23658 = (state_23669[8]);var inst_23658__$1 = (state_23669[2]);var inst_23659 = (inst_23658__$1 == null);var state_23669__$1 = (function (){var statearr_23675 = state_23669;(statearr_23675[8] = inst_23658__$1);
return statearr_23675;
})();if(cljs.core.truth_(inst_23659))
{var statearr_23676_23690 = state_23669__$1;(statearr_23676_23690[1] = 5);
} else
{var statearr_23677_23691 = state_23669__$1;(statearr_23677_23691[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23670 === 3))
{var inst_23667 = (state_23669[2]);var state_23669__$1 = state_23669;return cljs.core.async.impl.ioc_helpers.return_chan(state_23669__$1,inst_23667);
} else
{if((state_val_23670 === 2))
{var state_23669__$1 = state_23669;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23669__$1,4,ch);
} else
{if((state_val_23670 === 1))
{var inst_23655 = init;var state_23669__$1 = (function (){var statearr_23678 = state_23669;(statearr_23678[7] = inst_23655);
return statearr_23678;
})();var statearr_23679_23692 = state_23669__$1;(statearr_23679_23692[2] = null);
(statearr_23679_23692[1] = 2);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_23683 = [null,null,null,null,null,null,null,null,null];(statearr_23683[0] = state_machine__5507__auto__);
(statearr_23683[1] = 1);
return statearr_23683;
});
var state_machine__5507__auto____1 = (function (state_23669){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23669);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23684){if((e23684 instanceof Object))
{var ex__5510__auto__ = e23684;var statearr_23685_23693 = state_23669;(statearr_23685_23693[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23669);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e23684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__23694 = state_23669;
state_23669 = G__23694;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23669){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23686 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23686;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23756){var state_val_23757 = (state_23756[1]);if((state_val_23757 === 1))
{var inst_23736 = cljs.core.seq(coll);var inst_23737 = inst_23736;var state_23756__$1 = (function (){var statearr_23758 = state_23756;(statearr_23758[7] = inst_23737);
return statearr_23758;
})();var statearr_23759_23777 = state_23756__$1;(statearr_23759_23777[2] = null);
(statearr_23759_23777[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23757 === 2))
{var inst_23737 = (state_23756[7]);var state_23756__$1 = state_23756;if(cljs.core.truth_(inst_23737))
{var statearr_23760_23778 = state_23756__$1;(statearr_23760_23778[1] = 4);
} else
{var statearr_23761_23779 = state_23756__$1;(statearr_23761_23779[1] = 5);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23757 === 3))
{var inst_23754 = (state_23756[2]);var state_23756__$1 = state_23756;return cljs.core.async.impl.ioc_helpers.return_chan(state_23756__$1,inst_23754);
} else
{if((state_val_23757 === 4))
{var inst_23737 = (state_23756[7]);var inst_23740 = cljs.core.first(inst_23737);var state_23756__$1 = state_23756;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23756__$1,7,ch,inst_23740);
} else
{if((state_val_23757 === 5))
{var state_23756__$1 = state_23756;if(cljs.core.truth_(close_QMARK_))
{var statearr_23762_23780 = state_23756__$1;(statearr_23762_23780[1] = 8);
} else
{var statearr_23763_23781 = state_23756__$1;(statearr_23763_23781[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_23757 === 6))
{var inst_23752 = (state_23756[2]);var state_23756__$1 = state_23756;var statearr_23764_23782 = state_23756__$1;(statearr_23764_23782[2] = inst_23752);
(statearr_23764_23782[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23757 === 7))
{var inst_23737 = (state_23756[7]);var inst_23742 = (state_23756[2]);var inst_23743 = cljs.core.next(inst_23737);var inst_23737__$1 = inst_23743;var state_23756__$1 = (function (){var statearr_23765 = state_23756;(statearr_23765[7] = inst_23737__$1);
(statearr_23765[8] = inst_23742);
return statearr_23765;
})();var statearr_23766_23783 = state_23756__$1;(statearr_23766_23783[2] = null);
(statearr_23766_23783[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23757 === 8))
{var inst_23747 = cljs.core.async.close_BANG_(ch);var state_23756__$1 = state_23756;var statearr_23767_23784 = state_23756__$1;(statearr_23767_23784[2] = inst_23747);
(statearr_23767_23784[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23757 === 9))
{var state_23756__$1 = state_23756;var statearr_23768_23785 = state_23756__$1;(statearr_23768_23785[2] = null);
(statearr_23768_23785[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_23757 === 10))
{var inst_23750 = (state_23756[2]);var state_23756__$1 = state_23756;var statearr_23769_23786 = state_23756__$1;(statearr_23769_23786[2] = inst_23750);
(statearr_23769_23786[1] = 6);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_23773 = [null,null,null,null,null,null,null,null,null];(statearr_23773[0] = state_machine__5507__auto__);
(statearr_23773[1] = 1);
return statearr_23773;
});
var state_machine__5507__auto____1 = (function (state_23756){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23756);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23774){if((e23774 instanceof Object))
{var ex__5510__auto__ = e23774;var statearr_23775_23787 = state_23756;(statearr_23775_23787[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23756);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e23774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__23788 = state_23756;
state_23756 = G__23788;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23756){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23776 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23776;
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
cljs.core.async.Mux = (function (){var obj23790 = {};return obj23790;
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
cljs.core.async.Mult = (function (){var obj23792 = {};return obj23792;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24016 = (function (cs,ch,mult,meta24017){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24017 = meta24017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24016.cljs$lang$type = true;
cljs.core.async.t24016.cljs$lang$ctorStr = "cljs.core.async/t24016";
cljs.core.async.t24016.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24016");
});})(cs))
;
cljs.core.async.t24016.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24016.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24016.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24016.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24016.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24018){var self__ = this;
var _24018__$1 = this;return self__.meta24017;
});})(cs))
;
cljs.core.async.t24016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24018,meta24017__$1){var self__ = this;
var _24018__$1 = this;return (new cljs.core.async.t24016(self__.cs,self__.ch,self__.mult,meta24017__$1));
});})(cs))
;
cljs.core.async.__GT_t24016 = ((function (cs){
return (function __GT_t24016(cs__$1,ch__$1,mult__$1,meta24017){return (new cljs.core.async.t24016(cs__$1,ch__$1,mult__$1,meta24017));
});})(cs))
;
}
return (new cljs.core.async.t24016(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24153){var state_val_24154 = (state_24153[1]);if((state_val_24154 === 32))
{var inst_24097 = (state_24153[7]);var inst_24021 = (state_24153[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24153,31,Object,null,30);var inst_24104 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24097,inst_24021,done);var state_24153__$1 = state_24153;var statearr_24155_24240 = state_24153__$1;(statearr_24155_24240[2] = inst_24104);
cljs.core.async.impl.ioc_helpers.process_exception(state_24153__$1);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 1))
{var state_24153__$1 = state_24153;var statearr_24156_24241 = state_24153__$1;(statearr_24156_24241[2] = null);
(statearr_24156_24241[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 33))
{var inst_24110 = (state_24153[9]);var inst_24112 = cljs.core.chunked_seq_QMARK_(inst_24110);var state_24153__$1 = state_24153;if(inst_24112)
{var statearr_24157_24242 = state_24153__$1;(statearr_24157_24242[1] = 36);
} else
{var statearr_24158_24243 = state_24153__$1;(statearr_24158_24243[1] = 37);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 2))
{var state_24153__$1 = state_24153;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24153__$1,4,ch);
} else
{if((state_val_24154 === 34))
{var state_24153__$1 = state_24153;var statearr_24159_24244 = state_24153__$1;(statearr_24159_24244[2] = null);
(statearr_24159_24244[1] = 35);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 3))
{var inst_24151 = (state_24153[2]);var state_24153__$1 = state_24153;return cljs.core.async.impl.ioc_helpers.return_chan(state_24153__$1,inst_24151);
} else
{if((state_val_24154 === 35))
{var inst_24135 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24160_24245 = state_24153__$1;(statearr_24160_24245[2] = inst_24135);
(statearr_24160_24245[1] = 29);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 4))
{var inst_24021 = (state_24153[8]);var inst_24021__$1 = (state_24153[2]);var inst_24022 = (inst_24021__$1 == null);var state_24153__$1 = (function (){var statearr_24161 = state_24153;(statearr_24161[8] = inst_24021__$1);
return statearr_24161;
})();if(cljs.core.truth_(inst_24022))
{var statearr_24162_24246 = state_24153__$1;(statearr_24162_24246[1] = 5);
} else
{var statearr_24163_24247 = state_24153__$1;(statearr_24163_24247[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 36))
{var inst_24110 = (state_24153[9]);var inst_24114 = cljs.core.chunk_first(inst_24110);var inst_24115 = cljs.core.chunk_rest(inst_24110);var inst_24116 = cljs.core.count(inst_24114);var inst_24089 = inst_24115;var inst_24090 = inst_24114;var inst_24091 = inst_24116;var inst_24092 = 0;var state_24153__$1 = (function (){var statearr_24164 = state_24153;(statearr_24164[10] = inst_24089);
(statearr_24164[11] = inst_24090);
(statearr_24164[12] = inst_24091);
(statearr_24164[13] = inst_24092);
return statearr_24164;
})();var statearr_24165_24248 = state_24153__$1;(statearr_24165_24248[2] = null);
(statearr_24165_24248[1] = 25);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 5))
{var inst_24028 = cljs.core.deref(cs);var inst_24029 = cljs.core.seq(inst_24028);var inst_24030 = inst_24029;var inst_24031 = null;var inst_24032 = 0;var inst_24033 = 0;var state_24153__$1 = (function (){var statearr_24166 = state_24153;(statearr_24166[14] = inst_24032);
(statearr_24166[15] = inst_24033);
(statearr_24166[16] = inst_24031);
(statearr_24166[17] = inst_24030);
return statearr_24166;
})();var statearr_24167_24249 = state_24153__$1;(statearr_24167_24249[2] = null);
(statearr_24167_24249[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 37))
{var inst_24110 = (state_24153[9]);var inst_24119 = cljs.core.first(inst_24110);var state_24153__$1 = (function (){var statearr_24168 = state_24153;(statearr_24168[18] = inst_24119);
return statearr_24168;
})();var statearr_24169_24250 = state_24153__$1;(statearr_24169_24250[2] = null);
(statearr_24169_24250[1] = 41);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 6))
{var inst_24081 = (state_24153[19]);var inst_24080 = cljs.core.deref(cs);var inst_24081__$1 = cljs.core.keys(inst_24080);var inst_24082 = cljs.core.count(inst_24081__$1);var inst_24083 = cljs.core.reset_BANG_(dctr,inst_24082);var inst_24088 = cljs.core.seq(inst_24081__$1);var inst_24089 = inst_24088;var inst_24090 = null;var inst_24091 = 0;var inst_24092 = 0;var state_24153__$1 = (function (){var statearr_24170 = state_24153;(statearr_24170[10] = inst_24089);
(statearr_24170[20] = inst_24083);
(statearr_24170[11] = inst_24090);
(statearr_24170[12] = inst_24091);
(statearr_24170[13] = inst_24092);
(statearr_24170[19] = inst_24081__$1);
return statearr_24170;
})();var statearr_24171_24251 = state_24153__$1;(statearr_24171_24251[2] = null);
(statearr_24171_24251[1] = 25);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 38))
{var inst_24132 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24172_24252 = state_24153__$1;(statearr_24172_24252[2] = inst_24132);
(statearr_24172_24252[1] = 35);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 7))
{var inst_24149 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24173_24253 = state_24153__$1;(statearr_24173_24253[2] = inst_24149);
(statearr_24173_24253[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 39))
{var inst_24110 = (state_24153[9]);var inst_24128 = (state_24153[2]);var inst_24129 = cljs.core.next(inst_24110);var inst_24089 = inst_24129;var inst_24090 = null;var inst_24091 = 0;var inst_24092 = 0;var state_24153__$1 = (function (){var statearr_24174 = state_24153;(statearr_24174[10] = inst_24089);
(statearr_24174[21] = inst_24128);
(statearr_24174[11] = inst_24090);
(statearr_24174[12] = inst_24091);
(statearr_24174[13] = inst_24092);
return statearr_24174;
})();var statearr_24175_24254 = state_24153__$1;(statearr_24175_24254[2] = null);
(statearr_24175_24254[1] = 25);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 8))
{var inst_24032 = (state_24153[14]);var inst_24033 = (state_24153[15]);var inst_24035 = (inst_24033 < inst_24032);var inst_24036 = inst_24035;var state_24153__$1 = state_24153;if(cljs.core.truth_(inst_24036))
{var statearr_24176_24255 = state_24153__$1;(statearr_24176_24255[1] = 10);
} else
{var statearr_24177_24256 = state_24153__$1;(statearr_24177_24256[1] = 11);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 40))
{var inst_24119 = (state_24153[18]);var inst_24120 = (state_24153[2]);var inst_24121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24122 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24119);var state_24153__$1 = (function (){var statearr_24178 = state_24153;(statearr_24178[22] = inst_24120);
(statearr_24178[23] = inst_24121);
return statearr_24178;
})();var statearr_24179_24257 = state_24153__$1;(statearr_24179_24257[2] = inst_24122);
cljs.core.async.impl.ioc_helpers.process_exception(state_24153__$1);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 9))
{var inst_24078 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24180_24258 = state_24153__$1;(statearr_24180_24258[2] = inst_24078);
(statearr_24180_24258[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 41))
{var inst_24119 = (state_24153[18]);var inst_24021 = (state_24153[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24153,40,Object,null,39);var inst_24126 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24119,inst_24021,done);var state_24153__$1 = state_24153;var statearr_24181_24259 = state_24153__$1;(statearr_24181_24259[2] = inst_24126);
cljs.core.async.impl.ioc_helpers.process_exception(state_24153__$1);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 10))
{var inst_24033 = (state_24153[15]);var inst_24031 = (state_24153[16]);var inst_24039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24031,inst_24033);var inst_24040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24039,0,null);var inst_24041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24039,1,null);var state_24153__$1 = (function (){var statearr_24182 = state_24153;(statearr_24182[24] = inst_24040);
return statearr_24182;
})();if(cljs.core.truth_(inst_24041))
{var statearr_24183_24260 = state_24153__$1;(statearr_24183_24260[1] = 13);
} else
{var statearr_24184_24261 = state_24153__$1;(statearr_24184_24261[1] = 14);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 42))
{var state_24153__$1 = state_24153;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24153__$1,45,dchan);
} else
{if((state_val_24154 === 11))
{var inst_24050 = (state_24153[25]);var inst_24030 = (state_24153[17]);var inst_24050__$1 = cljs.core.seq(inst_24030);var state_24153__$1 = (function (){var statearr_24185 = state_24153;(statearr_24185[25] = inst_24050__$1);
return statearr_24185;
})();if(inst_24050__$1)
{var statearr_24186_24262 = state_24153__$1;(statearr_24186_24262[1] = 16);
} else
{var statearr_24187_24263 = state_24153__$1;(statearr_24187_24263[1] = 17);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 43))
{var state_24153__$1 = state_24153;var statearr_24188_24264 = state_24153__$1;(statearr_24188_24264[2] = null);
(statearr_24188_24264[1] = 44);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 12))
{var inst_24076 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24189_24265 = state_24153__$1;(statearr_24189_24265[2] = inst_24076);
(statearr_24189_24265[1] = 9);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 44))
{var inst_24146 = (state_24153[2]);var state_24153__$1 = (function (){var statearr_24190 = state_24153;(statearr_24190[26] = inst_24146);
return statearr_24190;
})();var statearr_24191_24266 = state_24153__$1;(statearr_24191_24266[2] = null);
(statearr_24191_24266[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 13))
{var inst_24040 = (state_24153[24]);var inst_24043 = cljs.core.async.close_BANG_(inst_24040);var state_24153__$1 = state_24153;var statearr_24192_24267 = state_24153__$1;(statearr_24192_24267[2] = inst_24043);
(statearr_24192_24267[1] = 15);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 45))
{var inst_24143 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24196_24268 = state_24153__$1;(statearr_24196_24268[2] = inst_24143);
(statearr_24196_24268[1] = 44);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 14))
{var state_24153__$1 = state_24153;var statearr_24197_24269 = state_24153__$1;(statearr_24197_24269[2] = null);
(statearr_24197_24269[1] = 15);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 15))
{var inst_24032 = (state_24153[14]);var inst_24033 = (state_24153[15]);var inst_24031 = (state_24153[16]);var inst_24030 = (state_24153[17]);var inst_24046 = (state_24153[2]);var inst_24047 = (inst_24033 + 1);var tmp24193 = inst_24032;var tmp24194 = inst_24031;var tmp24195 = inst_24030;var inst_24030__$1 = tmp24195;var inst_24031__$1 = tmp24194;var inst_24032__$1 = tmp24193;var inst_24033__$1 = inst_24047;var state_24153__$1 = (function (){var statearr_24198 = state_24153;(statearr_24198[27] = inst_24046);
(statearr_24198[14] = inst_24032__$1);
(statearr_24198[15] = inst_24033__$1);
(statearr_24198[16] = inst_24031__$1);
(statearr_24198[17] = inst_24030__$1);
return statearr_24198;
})();var statearr_24199_24270 = state_24153__$1;(statearr_24199_24270[2] = null);
(statearr_24199_24270[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 16))
{var inst_24050 = (state_24153[25]);var inst_24052 = cljs.core.chunked_seq_QMARK_(inst_24050);var state_24153__$1 = state_24153;if(inst_24052)
{var statearr_24200_24271 = state_24153__$1;(statearr_24200_24271[1] = 19);
} else
{var statearr_24201_24272 = state_24153__$1;(statearr_24201_24272[1] = 20);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 17))
{var state_24153__$1 = state_24153;var statearr_24202_24273 = state_24153__$1;(statearr_24202_24273[2] = null);
(statearr_24202_24273[1] = 18);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 18))
{var inst_24074 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24203_24274 = state_24153__$1;(statearr_24203_24274[2] = inst_24074);
(statearr_24203_24274[1] = 12);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 19))
{var inst_24050 = (state_24153[25]);var inst_24054 = cljs.core.chunk_first(inst_24050);var inst_24055 = cljs.core.chunk_rest(inst_24050);var inst_24056 = cljs.core.count(inst_24054);var inst_24030 = inst_24055;var inst_24031 = inst_24054;var inst_24032 = inst_24056;var inst_24033 = 0;var state_24153__$1 = (function (){var statearr_24204 = state_24153;(statearr_24204[14] = inst_24032);
(statearr_24204[15] = inst_24033);
(statearr_24204[16] = inst_24031);
(statearr_24204[17] = inst_24030);
return statearr_24204;
})();var statearr_24205_24275 = state_24153__$1;(statearr_24205_24275[2] = null);
(statearr_24205_24275[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 20))
{var inst_24050 = (state_24153[25]);var inst_24060 = cljs.core.first(inst_24050);var inst_24061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24060,0,null);var inst_24062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24060,1,null);var state_24153__$1 = (function (){var statearr_24206 = state_24153;(statearr_24206[28] = inst_24061);
return statearr_24206;
})();if(cljs.core.truth_(inst_24062))
{var statearr_24207_24276 = state_24153__$1;(statearr_24207_24276[1] = 22);
} else
{var statearr_24208_24277 = state_24153__$1;(statearr_24208_24277[1] = 23);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 21))
{var inst_24071 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24209_24278 = state_24153__$1;(statearr_24209_24278[2] = inst_24071);
(statearr_24209_24278[1] = 18);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 22))
{var inst_24061 = (state_24153[28]);var inst_24064 = cljs.core.async.close_BANG_(inst_24061);var state_24153__$1 = state_24153;var statearr_24210_24279 = state_24153__$1;(statearr_24210_24279[2] = inst_24064);
(statearr_24210_24279[1] = 24);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 23))
{var state_24153__$1 = state_24153;var statearr_24211_24280 = state_24153__$1;(statearr_24211_24280[2] = null);
(statearr_24211_24280[1] = 24);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 24))
{var inst_24050 = (state_24153[25]);var inst_24067 = (state_24153[2]);var inst_24068 = cljs.core.next(inst_24050);var inst_24030 = inst_24068;var inst_24031 = null;var inst_24032 = 0;var inst_24033 = 0;var state_24153__$1 = (function (){var statearr_24212 = state_24153;(statearr_24212[29] = inst_24067);
(statearr_24212[14] = inst_24032);
(statearr_24212[15] = inst_24033);
(statearr_24212[16] = inst_24031);
(statearr_24212[17] = inst_24030);
return statearr_24212;
})();var statearr_24213_24281 = state_24153__$1;(statearr_24213_24281[2] = null);
(statearr_24213_24281[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 25))
{var inst_24091 = (state_24153[12]);var inst_24092 = (state_24153[13]);var inst_24094 = (inst_24092 < inst_24091);var inst_24095 = inst_24094;var state_24153__$1 = state_24153;if(cljs.core.truth_(inst_24095))
{var statearr_24214_24282 = state_24153__$1;(statearr_24214_24282[1] = 27);
} else
{var statearr_24215_24283 = state_24153__$1;(statearr_24215_24283[1] = 28);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 26))
{var inst_24081 = (state_24153[19]);var inst_24139 = (state_24153[2]);var inst_24140 = cljs.core.seq(inst_24081);var state_24153__$1 = (function (){var statearr_24216 = state_24153;(statearr_24216[30] = inst_24139);
return statearr_24216;
})();if(inst_24140)
{var statearr_24217_24284 = state_24153__$1;(statearr_24217_24284[1] = 42);
} else
{var statearr_24218_24285 = state_24153__$1;(statearr_24218_24285[1] = 43);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 27))
{var inst_24090 = (state_24153[11]);var inst_24092 = (state_24153[13]);var inst_24097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24090,inst_24092);var state_24153__$1 = (function (){var statearr_24219 = state_24153;(statearr_24219[7] = inst_24097);
return statearr_24219;
})();var statearr_24220_24286 = state_24153__$1;(statearr_24220_24286[2] = null);
(statearr_24220_24286[1] = 32);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 28))
{var inst_24089 = (state_24153[10]);var inst_24110 = (state_24153[9]);var inst_24110__$1 = cljs.core.seq(inst_24089);var state_24153__$1 = (function (){var statearr_24224 = state_24153;(statearr_24224[9] = inst_24110__$1);
return statearr_24224;
})();if(inst_24110__$1)
{var statearr_24225_24287 = state_24153__$1;(statearr_24225_24287[1] = 33);
} else
{var statearr_24226_24288 = state_24153__$1;(statearr_24226_24288[1] = 34);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 29))
{var inst_24137 = (state_24153[2]);var state_24153__$1 = state_24153;var statearr_24227_24289 = state_24153__$1;(statearr_24227_24289[2] = inst_24137);
(statearr_24227_24289[1] = 26);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 30))
{var inst_24089 = (state_24153[10]);var inst_24090 = (state_24153[11]);var inst_24091 = (state_24153[12]);var inst_24092 = (state_24153[13]);var inst_24106 = (state_24153[2]);var inst_24107 = (inst_24092 + 1);var tmp24221 = inst_24089;var tmp24222 = inst_24090;var tmp24223 = inst_24091;var inst_24089__$1 = tmp24221;var inst_24090__$1 = tmp24222;var inst_24091__$1 = tmp24223;var inst_24092__$1 = inst_24107;var state_24153__$1 = (function (){var statearr_24228 = state_24153;(statearr_24228[10] = inst_24089__$1);
(statearr_24228[11] = inst_24090__$1);
(statearr_24228[12] = inst_24091__$1);
(statearr_24228[13] = inst_24092__$1);
(statearr_24228[31] = inst_24106);
return statearr_24228;
})();var statearr_24229_24290 = state_24153__$1;(statearr_24229_24290[2] = null);
(statearr_24229_24290[1] = 25);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24154 === 31))
{var inst_24097 = (state_24153[7]);var inst_24098 = (state_24153[2]);var inst_24099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24100 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24097);var state_24153__$1 = (function (){var statearr_24230 = state_24153;(statearr_24230[32] = inst_24098);
(statearr_24230[33] = inst_24099);
return statearr_24230;
})();var statearr_24231_24291 = state_24153__$1;(statearr_24231_24291[2] = inst_24100);
cljs.core.async.impl.ioc_helpers.process_exception(state_24153__$1);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_24235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24235[0] = state_machine__5507__auto__);
(statearr_24235[1] = 1);
return statearr_24235;
});
var state_machine__5507__auto____1 = (function (state_24153){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24153);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24236){if((e24236 instanceof Object))
{var ex__5510__auto__ = e24236;var statearr_24237_24292 = state_24153;(statearr_24237_24292[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24153);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e24236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__24293 = state_24153;
state_24153 = G__24293;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24153){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24238 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24239);
return statearr_24238;
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
cljs.core.async.Mix = (function (){var obj24295 = {};return obj24295;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$204,null,cljs.core.constant$keyword$205,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$206);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$205);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$206,chs);var pauses = pick(cljs.core.constant$keyword$204,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$207,solos,cljs.core.constant$keyword$208,pick(cljs.core.constant$keyword$205,chs),cljs.core.constant$keyword$209,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$204)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24405 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24406){
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
this.meta24406 = meta24406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24405.cljs$lang$type = true;
cljs.core.async.t24405.cljs$lang$ctorStr = "cljs.core.async/t24405";
cljs.core.async.t24405.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24405");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24405.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24407){var self__ = this;
var _24407__$1 = this;return self__.meta24406;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24407,meta24406__$1){var self__ = this;
var _24407__$1 = this;return (new cljs.core.async.t24405(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24406__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24405 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24405(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24406){return (new cljs.core.async.t24405(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24406));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24405(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24472){var state_val_24473 = (state_24472[1]);if((state_val_24473 === 1))
{var inst_24411 = (state_24472[7]);var inst_24411__$1 = calc_state();var inst_24412 = cljs.core.seq_QMARK_(inst_24411__$1);var state_24472__$1 = (function (){var statearr_24474 = state_24472;(statearr_24474[7] = inst_24411__$1);
return statearr_24474;
})();if(inst_24412)
{var statearr_24475_24515 = state_24472__$1;(statearr_24475_24515[1] = 2);
} else
{var statearr_24476_24516 = state_24472__$1;(statearr_24476_24516[1] = 3);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 2))
{var inst_24411 = (state_24472[7]);var inst_24414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24411);var state_24472__$1 = state_24472;var statearr_24477_24517 = state_24472__$1;(statearr_24477_24517[2] = inst_24414);
(statearr_24477_24517[1] = 4);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 3))
{var inst_24411 = (state_24472[7]);var state_24472__$1 = state_24472;var statearr_24478_24518 = state_24472__$1;(statearr_24478_24518[2] = inst_24411);
(statearr_24478_24518[1] = 4);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 4))
{var inst_24411 = (state_24472[7]);var inst_24417 = (state_24472[2]);var inst_24418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24417,cljs.core.constant$keyword$209);var inst_24419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24417,cljs.core.constant$keyword$208);var inst_24420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24417,cljs.core.constant$keyword$207);var inst_24421 = inst_24411;var state_24472__$1 = (function (){var statearr_24479 = state_24472;(statearr_24479[8] = inst_24419);
(statearr_24479[9] = inst_24418);
(statearr_24479[10] = inst_24420);
(statearr_24479[11] = inst_24421);
return statearr_24479;
})();var statearr_24480_24519 = state_24472__$1;(statearr_24480_24519[2] = null);
(statearr_24480_24519[1] = 5);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 5))
{var inst_24421 = (state_24472[11]);var inst_24424 = cljs.core.seq_QMARK_(inst_24421);var state_24472__$1 = state_24472;if(inst_24424)
{var statearr_24481_24520 = state_24472__$1;(statearr_24481_24520[1] = 7);
} else
{var statearr_24482_24521 = state_24472__$1;(statearr_24482_24521[1] = 8);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 6))
{var inst_24470 = (state_24472[2]);var state_24472__$1 = state_24472;return cljs.core.async.impl.ioc_helpers.return_chan(state_24472__$1,inst_24470);
} else
{if((state_val_24473 === 7))
{var inst_24421 = (state_24472[11]);var inst_24426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24421);var state_24472__$1 = state_24472;var statearr_24483_24522 = state_24472__$1;(statearr_24483_24522[2] = inst_24426);
(statearr_24483_24522[1] = 9);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 8))
{var inst_24421 = (state_24472[11]);var state_24472__$1 = state_24472;var statearr_24484_24523 = state_24472__$1;(statearr_24484_24523[2] = inst_24421);
(statearr_24484_24523[1] = 9);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 9))
{var inst_24429 = (state_24472[12]);var inst_24429__$1 = (state_24472[2]);var inst_24430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24429__$1,cljs.core.constant$keyword$209);var inst_24431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24429__$1,cljs.core.constant$keyword$208);var inst_24432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24429__$1,cljs.core.constant$keyword$207);var state_24472__$1 = (function (){var statearr_24485 = state_24472;(statearr_24485[12] = inst_24429__$1);
(statearr_24485[13] = inst_24432);
(statearr_24485[14] = inst_24431);
return statearr_24485;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24472__$1,10,inst_24430);
} else
{if((state_val_24473 === 10))
{var inst_24436 = (state_24472[15]);var inst_24437 = (state_24472[16]);var inst_24435 = (state_24472[2]);var inst_24436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24435,0,null);var inst_24437__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24435,1,null);var inst_24438 = (inst_24436__$1 == null);var inst_24439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24437__$1,change);var inst_24440 = (inst_24438) || (inst_24439);var state_24472__$1 = (function (){var statearr_24486 = state_24472;(statearr_24486[15] = inst_24436__$1);
(statearr_24486[16] = inst_24437__$1);
return statearr_24486;
})();if(cljs.core.truth_(inst_24440))
{var statearr_24487_24524 = state_24472__$1;(statearr_24487_24524[1] = 11);
} else
{var statearr_24488_24525 = state_24472__$1;(statearr_24488_24525[1] = 12);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 11))
{var inst_24436 = (state_24472[15]);var inst_24442 = (inst_24436 == null);var state_24472__$1 = state_24472;if(cljs.core.truth_(inst_24442))
{var statearr_24489_24526 = state_24472__$1;(statearr_24489_24526[1] = 14);
} else
{var statearr_24490_24527 = state_24472__$1;(statearr_24490_24527[1] = 15);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 12))
{var inst_24451 = (state_24472[17]);var inst_24437 = (state_24472[16]);var inst_24432 = (state_24472[13]);var inst_24451__$1 = (inst_24432.cljs$core$IFn$_invoke$arity$1 ? inst_24432.cljs$core$IFn$_invoke$arity$1(inst_24437) : inst_24432.call(null,inst_24437));var state_24472__$1 = (function (){var statearr_24491 = state_24472;(statearr_24491[17] = inst_24451__$1);
return statearr_24491;
})();if(cljs.core.truth_(inst_24451__$1))
{var statearr_24492_24528 = state_24472__$1;(statearr_24492_24528[1] = 17);
} else
{var statearr_24493_24529 = state_24472__$1;(statearr_24493_24529[1] = 18);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 13))
{var inst_24468 = (state_24472[2]);var state_24472__$1 = state_24472;var statearr_24494_24530 = state_24472__$1;(statearr_24494_24530[2] = inst_24468);
(statearr_24494_24530[1] = 6);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 14))
{var inst_24437 = (state_24472[16]);var inst_24444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24437);var state_24472__$1 = state_24472;var statearr_24495_24531 = state_24472__$1;(statearr_24495_24531[2] = inst_24444);
(statearr_24495_24531[1] = 16);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 15))
{var state_24472__$1 = state_24472;var statearr_24496_24532 = state_24472__$1;(statearr_24496_24532[2] = null);
(statearr_24496_24532[1] = 16);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 16))
{var inst_24447 = (state_24472[2]);var inst_24448 = calc_state();var inst_24421 = inst_24448;var state_24472__$1 = (function (){var statearr_24497 = state_24472;(statearr_24497[18] = inst_24447);
(statearr_24497[11] = inst_24421);
return statearr_24497;
})();var statearr_24498_24533 = state_24472__$1;(statearr_24498_24533[2] = null);
(statearr_24498_24533[1] = 5);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 17))
{var inst_24451 = (state_24472[17]);var state_24472__$1 = state_24472;var statearr_24499_24534 = state_24472__$1;(statearr_24499_24534[2] = inst_24451);
(statearr_24499_24534[1] = 19);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 18))
{var inst_24437 = (state_24472[16]);var inst_24432 = (state_24472[13]);var inst_24431 = (state_24472[14]);var inst_24454 = cljs.core.empty_QMARK_(inst_24432);var inst_24455 = (inst_24431.cljs$core$IFn$_invoke$arity$1 ? inst_24431.cljs$core$IFn$_invoke$arity$1(inst_24437) : inst_24431.call(null,inst_24437));var inst_24456 = cljs.core.not(inst_24455);var inst_24457 = (inst_24454) && (inst_24456);var state_24472__$1 = state_24472;var statearr_24500_24535 = state_24472__$1;(statearr_24500_24535[2] = inst_24457);
(statearr_24500_24535[1] = 19);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 19))
{var inst_24459 = (state_24472[2]);var state_24472__$1 = state_24472;if(cljs.core.truth_(inst_24459))
{var statearr_24501_24536 = state_24472__$1;(statearr_24501_24536[1] = 20);
} else
{var statearr_24502_24537 = state_24472__$1;(statearr_24502_24537[1] = 21);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 20))
{var inst_24436 = (state_24472[15]);var state_24472__$1 = state_24472;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24472__$1,23,out,inst_24436);
} else
{if((state_val_24473 === 21))
{var state_24472__$1 = state_24472;var statearr_24503_24538 = state_24472__$1;(statearr_24503_24538[2] = null);
(statearr_24503_24538[1] = 22);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 22))
{var inst_24429 = (state_24472[12]);var inst_24465 = (state_24472[2]);var inst_24421 = inst_24429;var state_24472__$1 = (function (){var statearr_24504 = state_24472;(statearr_24504[19] = inst_24465);
(statearr_24504[11] = inst_24421);
return statearr_24504;
})();var statearr_24505_24539 = state_24472__$1;(statearr_24505_24539[2] = null);
(statearr_24505_24539[1] = 5);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24473 === 23))
{var inst_24462 = (state_24472[2]);var state_24472__$1 = state_24472;var statearr_24506_24540 = state_24472__$1;(statearr_24506_24540[2] = inst_24462);
(statearr_24506_24540[1] = 22);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_24510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24510[0] = state_machine__5507__auto__);
(statearr_24510[1] = 1);
return statearr_24510;
});
var state_machine__5507__auto____1 = (function (state_24472){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24472);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24511){if((e24511 instanceof Object))
{var ex__5510__auto__ = e24511;var statearr_24512_24541 = state_24472;(statearr_24512_24541[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24472);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e24511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__24542 = state_24472;
state_24472 = G__24542;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24472){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24513 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24514);
return statearr_24513;
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
cljs.core.async.Pub = (function (){var obj24544 = {};return obj24544;
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
return (function (p1__24545_SHARP_){if(cljs.core.truth_((p1__24545_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24545_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24545_SHARP_.call(null,topic))))
{return p1__24545_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24545_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24670 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24671){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24671 = meta24671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24670.cljs$lang$type = true;
cljs.core.async.t24670.cljs$lang$ctorStr = "cljs.core.async/t24670";
cljs.core.async.t24670.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24670");
});})(mults,ensure_mult))
;
cljs.core.async.t24670.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24670.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24670.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24670.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24670.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24670.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24672){var self__ = this;
var _24672__$1 = this;return self__.meta24671;
});})(mults,ensure_mult))
;
cljs.core.async.t24670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24672,meta24671__$1){var self__ = this;
var _24672__$1 = this;return (new cljs.core.async.t24670(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24671__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24670 = ((function (mults,ensure_mult){
return (function __GT_t24670(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24671){return (new cljs.core.async.t24670(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24671));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24670(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24746){var state_val_24747 = (state_24746[1]);if((state_val_24747 === 1))
{var state_24746__$1 = state_24746;var statearr_24748_24795 = state_24746__$1;(statearr_24748_24795[2] = null);
(statearr_24748_24795[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 2))
{var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24746__$1,4,ch);
} else
{if((state_val_24747 === 3))
{var inst_24744 = (state_24746[2]);var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.return_chan(state_24746__$1,inst_24744);
} else
{if((state_val_24747 === 4))
{var inst_24675 = (state_24746[7]);var inst_24675__$1 = (state_24746[2]);var inst_24676 = (inst_24675__$1 == null);var state_24746__$1 = (function (){var statearr_24749 = state_24746;(statearr_24749[7] = inst_24675__$1);
return statearr_24749;
})();if(cljs.core.truth_(inst_24676))
{var statearr_24750_24796 = state_24746__$1;(statearr_24750_24796[1] = 5);
} else
{var statearr_24751_24797 = state_24746__$1;(statearr_24751_24797[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 5))
{var inst_24682 = cljs.core.deref(mults);var inst_24683 = cljs.core.vals(inst_24682);var inst_24684 = cljs.core.seq(inst_24683);var inst_24685 = inst_24684;var inst_24686 = null;var inst_24687 = 0;var inst_24688 = 0;var state_24746__$1 = (function (){var statearr_24752 = state_24746;(statearr_24752[8] = inst_24688);
(statearr_24752[9] = inst_24687);
(statearr_24752[10] = inst_24686);
(statearr_24752[11] = inst_24685);
return statearr_24752;
})();var statearr_24753_24798 = state_24746__$1;(statearr_24753_24798[2] = null);
(statearr_24753_24798[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 6))
{var inst_24723 = (state_24746[12]);var inst_24725 = (state_24746[13]);var inst_24675 = (state_24746[7]);var inst_24723__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24675) : topic_fn.call(null,inst_24675));var inst_24724 = cljs.core.deref(mults);var inst_24725__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24724,inst_24723__$1);var state_24746__$1 = (function (){var statearr_24754 = state_24746;(statearr_24754[12] = inst_24723__$1);
(statearr_24754[13] = inst_24725__$1);
return statearr_24754;
})();if(cljs.core.truth_(inst_24725__$1))
{var statearr_24755_24799 = state_24746__$1;(statearr_24755_24799[1] = 19);
} else
{var statearr_24756_24800 = state_24746__$1;(statearr_24756_24800[1] = 20);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 7))
{var inst_24742 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24757_24801 = state_24746__$1;(statearr_24757_24801[2] = inst_24742);
(statearr_24757_24801[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 8))
{var inst_24688 = (state_24746[8]);var inst_24687 = (state_24746[9]);var inst_24690 = (inst_24688 < inst_24687);var inst_24691 = inst_24690;var state_24746__$1 = state_24746;if(cljs.core.truth_(inst_24691))
{var statearr_24761_24802 = state_24746__$1;(statearr_24761_24802[1] = 10);
} else
{var statearr_24762_24803 = state_24746__$1;(statearr_24762_24803[1] = 11);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 9))
{var inst_24721 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24763_24804 = state_24746__$1;(statearr_24763_24804[2] = inst_24721);
(statearr_24763_24804[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 10))
{var inst_24688 = (state_24746[8]);var inst_24687 = (state_24746[9]);var inst_24686 = (state_24746[10]);var inst_24685 = (state_24746[11]);var inst_24693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24686,inst_24688);var inst_24694 = cljs.core.async.muxch_STAR_(inst_24693);var inst_24695 = cljs.core.async.close_BANG_(inst_24694);var inst_24696 = (inst_24688 + 1);var tmp24758 = inst_24687;var tmp24759 = inst_24686;var tmp24760 = inst_24685;var inst_24685__$1 = tmp24760;var inst_24686__$1 = tmp24759;var inst_24687__$1 = tmp24758;var inst_24688__$1 = inst_24696;var state_24746__$1 = (function (){var statearr_24764 = state_24746;(statearr_24764[14] = inst_24695);
(statearr_24764[8] = inst_24688__$1);
(statearr_24764[9] = inst_24687__$1);
(statearr_24764[10] = inst_24686__$1);
(statearr_24764[11] = inst_24685__$1);
return statearr_24764;
})();var statearr_24765_24805 = state_24746__$1;(statearr_24765_24805[2] = null);
(statearr_24765_24805[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 11))
{var inst_24699 = (state_24746[15]);var inst_24685 = (state_24746[11]);var inst_24699__$1 = cljs.core.seq(inst_24685);var state_24746__$1 = (function (){var statearr_24766 = state_24746;(statearr_24766[15] = inst_24699__$1);
return statearr_24766;
})();if(inst_24699__$1)
{var statearr_24767_24806 = state_24746__$1;(statearr_24767_24806[1] = 13);
} else
{var statearr_24768_24807 = state_24746__$1;(statearr_24768_24807[1] = 14);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 12))
{var inst_24719 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24769_24808 = state_24746__$1;(statearr_24769_24808[2] = inst_24719);
(statearr_24769_24808[1] = 9);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 13))
{var inst_24699 = (state_24746[15]);var inst_24701 = cljs.core.chunked_seq_QMARK_(inst_24699);var state_24746__$1 = state_24746;if(inst_24701)
{var statearr_24770_24809 = state_24746__$1;(statearr_24770_24809[1] = 16);
} else
{var statearr_24771_24810 = state_24746__$1;(statearr_24771_24810[1] = 17);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 14))
{var state_24746__$1 = state_24746;var statearr_24772_24811 = state_24746__$1;(statearr_24772_24811[2] = null);
(statearr_24772_24811[1] = 15);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 15))
{var inst_24717 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24773_24812 = state_24746__$1;(statearr_24773_24812[2] = inst_24717);
(statearr_24773_24812[1] = 12);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 16))
{var inst_24699 = (state_24746[15]);var inst_24703 = cljs.core.chunk_first(inst_24699);var inst_24704 = cljs.core.chunk_rest(inst_24699);var inst_24705 = cljs.core.count(inst_24703);var inst_24685 = inst_24704;var inst_24686 = inst_24703;var inst_24687 = inst_24705;var inst_24688 = 0;var state_24746__$1 = (function (){var statearr_24774 = state_24746;(statearr_24774[8] = inst_24688);
(statearr_24774[9] = inst_24687);
(statearr_24774[10] = inst_24686);
(statearr_24774[11] = inst_24685);
return statearr_24774;
})();var statearr_24775_24813 = state_24746__$1;(statearr_24775_24813[2] = null);
(statearr_24775_24813[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 17))
{var inst_24699 = (state_24746[15]);var inst_24708 = cljs.core.first(inst_24699);var inst_24709 = cljs.core.async.muxch_STAR_(inst_24708);var inst_24710 = cljs.core.async.close_BANG_(inst_24709);var inst_24711 = cljs.core.next(inst_24699);var inst_24685 = inst_24711;var inst_24686 = null;var inst_24687 = 0;var inst_24688 = 0;var state_24746__$1 = (function (){var statearr_24776 = state_24746;(statearr_24776[8] = inst_24688);
(statearr_24776[9] = inst_24687);
(statearr_24776[10] = inst_24686);
(statearr_24776[11] = inst_24685);
(statearr_24776[16] = inst_24710);
return statearr_24776;
})();var statearr_24777_24814 = state_24746__$1;(statearr_24777_24814[2] = null);
(statearr_24777_24814[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 18))
{var inst_24714 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24778_24815 = state_24746__$1;(statearr_24778_24815[2] = inst_24714);
(statearr_24778_24815[1] = 15);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 19))
{var state_24746__$1 = state_24746;var statearr_24779_24816 = state_24746__$1;(statearr_24779_24816[2] = null);
(statearr_24779_24816[1] = 24);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 20))
{var state_24746__$1 = state_24746;var statearr_24780_24817 = state_24746__$1;(statearr_24780_24817[2] = null);
(statearr_24780_24817[1] = 21);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 21))
{var inst_24739 = (state_24746[2]);var state_24746__$1 = (function (){var statearr_24781 = state_24746;(statearr_24781[17] = inst_24739);
return statearr_24781;
})();var statearr_24782_24818 = state_24746__$1;(statearr_24782_24818[2] = null);
(statearr_24782_24818[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 22))
{var inst_24736 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24783_24819 = state_24746__$1;(statearr_24783_24819[2] = inst_24736);
(statearr_24783_24819[1] = 21);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 23))
{var inst_24723 = (state_24746[12]);var inst_24727 = (state_24746[2]);var inst_24728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24723);var state_24746__$1 = (function (){var statearr_24784 = state_24746;(statearr_24784[18] = inst_24727);
return statearr_24784;
})();var statearr_24785_24820 = state_24746__$1;(statearr_24785_24820[2] = inst_24728);
cljs.core.async.impl.ioc_helpers.process_exception(state_24746__$1);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24747 === 24))
{var inst_24725 = (state_24746[13]);var inst_24675 = (state_24746[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24746,23,Object,null,22);var inst_24732 = cljs.core.async.muxch_STAR_(inst_24725);var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24746__$1,25,inst_24732,inst_24675);
} else
{if((state_val_24747 === 25))
{var inst_24734 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24786_24821 = state_24746__$1;(statearr_24786_24821[2] = inst_24734);
cljs.core.async.impl.ioc_helpers.process_exception(state_24746__$1);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_24790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24790[0] = state_machine__5507__auto__);
(statearr_24790[1] = 1);
return statearr_24790;
});
var state_machine__5507__auto____1 = (function (state_24746){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24746);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24791){if((e24791 instanceof Object))
{var ex__5510__auto__ = e24791;var statearr_24792_24822 = state_24746;(statearr_24792_24822[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24746);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e24791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__24823 = state_24746;
state_24746 = G__24823;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24746){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24793 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24794);
return statearr_24793;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24930){var state_val_24931 = (state_24930[1]);if((state_val_24931 === 1))
{var state_24930__$1 = state_24930;var statearr_24932_24961 = state_24930__$1;(statearr_24932_24961[2] = null);
(statearr_24932_24961[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 2))
{var inst_24893 = cljs.core.reset_BANG_(dctr,cnt);var inst_24894 = 0;var state_24930__$1 = (function (){var statearr_24933 = state_24930;(statearr_24933[7] = inst_24894);
(statearr_24933[8] = inst_24893);
return statearr_24933;
})();var statearr_24934_24962 = state_24930__$1;(statearr_24934_24962[2] = null);
(statearr_24934_24962[1] = 4);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 3))
{var inst_24928 = (state_24930[2]);var state_24930__$1 = state_24930;return cljs.core.async.impl.ioc_helpers.return_chan(state_24930__$1,inst_24928);
} else
{if((state_val_24931 === 4))
{var inst_24894 = (state_24930[7]);var inst_24896 = (inst_24894 < cnt);var state_24930__$1 = state_24930;if(cljs.core.truth_(inst_24896))
{var statearr_24935_24963 = state_24930__$1;(statearr_24935_24963[1] = 6);
} else
{var statearr_24936_24964 = state_24930__$1;(statearr_24936_24964[1] = 7);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 5))
{var inst_24914 = (state_24930[2]);var state_24930__$1 = (function (){var statearr_24937 = state_24930;(statearr_24937[9] = inst_24914);
return statearr_24937;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24930__$1,12,dchan);
} else
{if((state_val_24931 === 6))
{var state_24930__$1 = state_24930;var statearr_24938_24965 = state_24930__$1;(statearr_24938_24965[2] = null);
(statearr_24938_24965[1] = 11);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 7))
{var state_24930__$1 = state_24930;var statearr_24939_24966 = state_24930__$1;(statearr_24939_24966[2] = null);
(statearr_24939_24966[1] = 8);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 8))
{var inst_24912 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24940_24967 = state_24930__$1;(statearr_24940_24967[2] = inst_24912);
(statearr_24940_24967[1] = 5);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 9))
{var inst_24894 = (state_24930[7]);var inst_24907 = (state_24930[2]);var inst_24908 = (inst_24894 + 1);var inst_24894__$1 = inst_24908;var state_24930__$1 = (function (){var statearr_24941 = state_24930;(statearr_24941[7] = inst_24894__$1);
(statearr_24941[10] = inst_24907);
return statearr_24941;
})();var statearr_24942_24968 = state_24930__$1;(statearr_24942_24968[2] = null);
(statearr_24942_24968[1] = 4);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 10))
{var inst_24898 = (state_24930[2]);var inst_24899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24930__$1 = (function (){var statearr_24943 = state_24930;(statearr_24943[11] = inst_24898);
return statearr_24943;
})();var statearr_24944_24969 = state_24930__$1;(statearr_24944_24969[2] = inst_24899);
cljs.core.async.impl.ioc_helpers.process_exception(state_24930__$1);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 11))
{var inst_24894 = (state_24930[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24930,10,Object,null,9);var inst_24903 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24894) : chs__$1.call(null,inst_24894));var inst_24904 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24894) : done.call(null,inst_24894));var inst_24905 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24903,inst_24904);var state_24930__$1 = state_24930;var statearr_24945_24970 = state_24930__$1;(statearr_24945_24970[2] = inst_24905);
cljs.core.async.impl.ioc_helpers.process_exception(state_24930__$1);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 12))
{var inst_24916 = (state_24930[12]);var inst_24916__$1 = (state_24930[2]);var inst_24917 = cljs.core.some(cljs.core.nil_QMARK_,inst_24916__$1);var state_24930__$1 = (function (){var statearr_24946 = state_24930;(statearr_24946[12] = inst_24916__$1);
return statearr_24946;
})();if(cljs.core.truth_(inst_24917))
{var statearr_24947_24971 = state_24930__$1;(statearr_24947_24971[1] = 13);
} else
{var statearr_24948_24972 = state_24930__$1;(statearr_24948_24972[1] = 14);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 13))
{var inst_24919 = cljs.core.async.close_BANG_(out);var state_24930__$1 = state_24930;var statearr_24949_24973 = state_24930__$1;(statearr_24949_24973[2] = inst_24919);
(statearr_24949_24973[1] = 15);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 14))
{var inst_24916 = (state_24930[12]);var inst_24921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24916);var state_24930__$1 = state_24930;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24930__$1,16,out,inst_24921);
} else
{if((state_val_24931 === 15))
{var inst_24926 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24950_24974 = state_24930__$1;(statearr_24950_24974[2] = inst_24926);
(statearr_24950_24974[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_24931 === 16))
{var inst_24923 = (state_24930[2]);var state_24930__$1 = (function (){var statearr_24951 = state_24930;(statearr_24951[13] = inst_24923);
return statearr_24951;
})();var statearr_24952_24975 = state_24930__$1;(statearr_24952_24975[2] = null);
(statearr_24952_24975[1] = 2);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_24956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24956[0] = state_machine__5507__auto__);
(statearr_24956[1] = 1);
return statearr_24956;
});
var state_machine__5507__auto____1 = (function (state_24930){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24930);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24957){if((e24957 instanceof Object))
{var ex__5510__auto__ = e24957;var statearr_24958_24976 = state_24930;(statearr_24958_24976[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24930);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e24957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__24977 = state_24930;
state_24930 = G__24977;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24930){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24959 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24960);
return statearr_24959;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25061){var state_val_25062 = (state_25061[1]);if((state_val_25062 === 1))
{var inst_25032 = cljs.core.vec(chs);var inst_25033 = inst_25032;var state_25061__$1 = (function (){var statearr_25063 = state_25061;(statearr_25063[7] = inst_25033);
return statearr_25063;
})();var statearr_25064_25086 = state_25061__$1;(statearr_25064_25086[2] = null);
(statearr_25064_25086[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25062 === 2))
{var inst_25033 = (state_25061[7]);var inst_25035 = cljs.core.count(inst_25033);var inst_25036 = (inst_25035 > 0);var state_25061__$1 = state_25061;if(cljs.core.truth_(inst_25036))
{var statearr_25065_25087 = state_25061__$1;(statearr_25065_25087[1] = 4);
} else
{var statearr_25066_25088 = state_25061__$1;(statearr_25066_25088[1] = 5);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25062 === 3))
{var inst_25059 = (state_25061[2]);var state_25061__$1 = state_25061;return cljs.core.async.impl.ioc_helpers.return_chan(state_25061__$1,inst_25059);
} else
{if((state_val_25062 === 4))
{var inst_25033 = (state_25061[7]);var state_25061__$1 = state_25061;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25061__$1,7,inst_25033);
} else
{if((state_val_25062 === 5))
{var inst_25055 = cljs.core.async.close_BANG_(out);var state_25061__$1 = state_25061;var statearr_25067_25089 = state_25061__$1;(statearr_25067_25089[2] = inst_25055);
(statearr_25067_25089[1] = 6);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25062 === 6))
{var inst_25057 = (state_25061[2]);var state_25061__$1 = state_25061;var statearr_25068_25090 = state_25061__$1;(statearr_25068_25090[2] = inst_25057);
(statearr_25068_25090[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25062 === 7))
{var inst_25041 = (state_25061[8]);var inst_25040 = (state_25061[9]);var inst_25040__$1 = (state_25061[2]);var inst_25041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25040__$1,0,null);var inst_25042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25040__$1,1,null);var inst_25043 = (inst_25041__$1 == null);var state_25061__$1 = (function (){var statearr_25069 = state_25061;(statearr_25069[8] = inst_25041__$1);
(statearr_25069[9] = inst_25040__$1);
(statearr_25069[10] = inst_25042);
return statearr_25069;
})();if(cljs.core.truth_(inst_25043))
{var statearr_25070_25091 = state_25061__$1;(statearr_25070_25091[1] = 8);
} else
{var statearr_25071_25092 = state_25061__$1;(statearr_25071_25092[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25062 === 8))
{var inst_25033 = (state_25061[7]);var inst_25041 = (state_25061[8]);var inst_25040 = (state_25061[9]);var inst_25042 = (state_25061[10]);var inst_25045 = (function (){var c = inst_25042;var v = inst_25041;var vec__25038 = inst_25040;var cs = inst_25033;return ((function (c,v,vec__25038,cs,inst_25033,inst_25041,inst_25040,inst_25042,state_val_25062){
return (function (p1__24978_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24978_SHARP_);
});
;})(c,v,vec__25038,cs,inst_25033,inst_25041,inst_25040,inst_25042,state_val_25062))
})();var inst_25046 = cljs.core.filterv(inst_25045,inst_25033);var inst_25033__$1 = inst_25046;var state_25061__$1 = (function (){var statearr_25072 = state_25061;(statearr_25072[7] = inst_25033__$1);
return statearr_25072;
})();var statearr_25073_25093 = state_25061__$1;(statearr_25073_25093[2] = null);
(statearr_25073_25093[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25062 === 9))
{var inst_25041 = (state_25061[8]);var state_25061__$1 = state_25061;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25061__$1,11,out,inst_25041);
} else
{if((state_val_25062 === 10))
{var inst_25053 = (state_25061[2]);var state_25061__$1 = state_25061;var statearr_25075_25094 = state_25061__$1;(statearr_25075_25094[2] = inst_25053);
(statearr_25075_25094[1] = 6);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25062 === 11))
{var inst_25033 = (state_25061[7]);var inst_25050 = (state_25061[2]);var tmp25074 = inst_25033;var inst_25033__$1 = tmp25074;var state_25061__$1 = (function (){var statearr_25076 = state_25061;(statearr_25076[7] = inst_25033__$1);
(statearr_25076[11] = inst_25050);
return statearr_25076;
})();var statearr_25077_25095 = state_25061__$1;(statearr_25077_25095[2] = null);
(statearr_25077_25095[1] = 2);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_25081 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25081[0] = state_machine__5507__auto__);
(statearr_25081[1] = 1);
return statearr_25081;
});
var state_machine__5507__auto____1 = (function (state_25061){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25061);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25082){if((e25082 instanceof Object))
{var ex__5510__auto__ = e25082;var statearr_25083_25096 = state_25061;(statearr_25083_25096[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25061);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e25082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__25097 = state_25061;
state_25061 = G__25097;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25061){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25084 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25085);
return statearr_25084;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25167){var state_val_25168 = (state_25167[1]);if((state_val_25168 === 1))
{var inst_25144 = 0;var state_25167__$1 = (function (){var statearr_25169 = state_25167;(statearr_25169[7] = inst_25144);
return statearr_25169;
})();var statearr_25170_25191 = state_25167__$1;(statearr_25170_25191[2] = null);
(statearr_25170_25191[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25168 === 2))
{var inst_25144 = (state_25167[7]);var inst_25146 = (inst_25144 < n);var state_25167__$1 = state_25167;if(cljs.core.truth_(inst_25146))
{var statearr_25171_25192 = state_25167__$1;(statearr_25171_25192[1] = 4);
} else
{var statearr_25172_25193 = state_25167__$1;(statearr_25172_25193[1] = 5);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25168 === 3))
{var inst_25164 = (state_25167[2]);var inst_25165 = cljs.core.async.close_BANG_(out);var state_25167__$1 = (function (){var statearr_25173 = state_25167;(statearr_25173[8] = inst_25164);
return statearr_25173;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25167__$1,inst_25165);
} else
{if((state_val_25168 === 4))
{var state_25167__$1 = state_25167;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25167__$1,7,ch);
} else
{if((state_val_25168 === 5))
{var state_25167__$1 = state_25167;var statearr_25174_25194 = state_25167__$1;(statearr_25174_25194[2] = null);
(statearr_25174_25194[1] = 6);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25168 === 6))
{var inst_25162 = (state_25167[2]);var state_25167__$1 = state_25167;var statearr_25175_25195 = state_25167__$1;(statearr_25175_25195[2] = inst_25162);
(statearr_25175_25195[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25168 === 7))
{var inst_25149 = (state_25167[9]);var inst_25149__$1 = (state_25167[2]);var inst_25150 = (inst_25149__$1 == null);var inst_25151 = cljs.core.not(inst_25150);var state_25167__$1 = (function (){var statearr_25176 = state_25167;(statearr_25176[9] = inst_25149__$1);
return statearr_25176;
})();if(inst_25151)
{var statearr_25177_25196 = state_25167__$1;(statearr_25177_25196[1] = 8);
} else
{var statearr_25178_25197 = state_25167__$1;(statearr_25178_25197[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25168 === 8))
{var inst_25149 = (state_25167[9]);var state_25167__$1 = state_25167;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25167__$1,11,out,inst_25149);
} else
{if((state_val_25168 === 9))
{var state_25167__$1 = state_25167;var statearr_25179_25198 = state_25167__$1;(statearr_25179_25198[2] = null);
(statearr_25179_25198[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25168 === 10))
{var inst_25159 = (state_25167[2]);var state_25167__$1 = state_25167;var statearr_25180_25199 = state_25167__$1;(statearr_25180_25199[2] = inst_25159);
(statearr_25180_25199[1] = 6);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25168 === 11))
{var inst_25144 = (state_25167[7]);var inst_25154 = (state_25167[2]);var inst_25155 = (inst_25144 + 1);var inst_25144__$1 = inst_25155;var state_25167__$1 = (function (){var statearr_25181 = state_25167;(statearr_25181[7] = inst_25144__$1);
(statearr_25181[10] = inst_25154);
return statearr_25181;
})();var statearr_25182_25200 = state_25167__$1;(statearr_25182_25200[2] = null);
(statearr_25182_25200[1] = 2);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_25186 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25186[0] = state_machine__5507__auto__);
(statearr_25186[1] = 1);
return statearr_25186;
});
var state_machine__5507__auto____1 = (function (state_25167){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25167);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25187){if((e25187 instanceof Object))
{var ex__5510__auto__ = e25187;var statearr_25188_25201 = state_25167;(statearr_25188_25201[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25167);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e25187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__25202 = state_25167;
state_25167 = G__25202;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25167){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25189 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25190);
return statearr_25189;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25274){var state_val_25275 = (state_25274[1]);if((state_val_25275 === 1))
{var inst_25251 = null;var state_25274__$1 = (function (){var statearr_25276 = state_25274;(statearr_25276[7] = inst_25251);
return statearr_25276;
})();var statearr_25277_25300 = state_25274__$1;(statearr_25277_25300[2] = null);
(statearr_25277_25300[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25275 === 2))
{var state_25274__$1 = state_25274;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25274__$1,4,ch);
} else
{if((state_val_25275 === 3))
{var inst_25271 = (state_25274[2]);var inst_25272 = cljs.core.async.close_BANG_(out);var state_25274__$1 = (function (){var statearr_25278 = state_25274;(statearr_25278[8] = inst_25271);
return statearr_25278;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25274__$1,inst_25272);
} else
{if((state_val_25275 === 4))
{var inst_25254 = (state_25274[9]);var inst_25254__$1 = (state_25274[2]);var inst_25255 = (inst_25254__$1 == null);var inst_25256 = cljs.core.not(inst_25255);var state_25274__$1 = (function (){var statearr_25279 = state_25274;(statearr_25279[9] = inst_25254__$1);
return statearr_25279;
})();if(inst_25256)
{var statearr_25280_25301 = state_25274__$1;(statearr_25280_25301[1] = 5);
} else
{var statearr_25281_25302 = state_25274__$1;(statearr_25281_25302[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25275 === 5))
{var inst_25254 = (state_25274[9]);var inst_25251 = (state_25274[7]);var inst_25258 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25254,inst_25251);var state_25274__$1 = state_25274;if(inst_25258)
{var statearr_25282_25303 = state_25274__$1;(statearr_25282_25303[1] = 8);
} else
{var statearr_25283_25304 = state_25274__$1;(statearr_25283_25304[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25275 === 6))
{var state_25274__$1 = state_25274;var statearr_25285_25305 = state_25274__$1;(statearr_25285_25305[2] = null);
(statearr_25285_25305[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25275 === 7))
{var inst_25269 = (state_25274[2]);var state_25274__$1 = state_25274;var statearr_25286_25306 = state_25274__$1;(statearr_25286_25306[2] = inst_25269);
(statearr_25286_25306[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25275 === 8))
{var inst_25251 = (state_25274[7]);var tmp25284 = inst_25251;var inst_25251__$1 = tmp25284;var state_25274__$1 = (function (){var statearr_25287 = state_25274;(statearr_25287[7] = inst_25251__$1);
return statearr_25287;
})();var statearr_25288_25307 = state_25274__$1;(statearr_25288_25307[2] = null);
(statearr_25288_25307[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25275 === 9))
{var inst_25254 = (state_25274[9]);var state_25274__$1 = state_25274;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25274__$1,11,out,inst_25254);
} else
{if((state_val_25275 === 10))
{var inst_25266 = (state_25274[2]);var state_25274__$1 = state_25274;var statearr_25289_25308 = state_25274__$1;(statearr_25289_25308[2] = inst_25266);
(statearr_25289_25308[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25275 === 11))
{var inst_25254 = (state_25274[9]);var inst_25263 = (state_25274[2]);var inst_25251 = inst_25254;var state_25274__$1 = (function (){var statearr_25290 = state_25274;(statearr_25290[7] = inst_25251);
(statearr_25290[10] = inst_25263);
return statearr_25290;
})();var statearr_25291_25309 = state_25274__$1;(statearr_25291_25309[2] = null);
(statearr_25291_25309[1] = 2);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_25295 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25295[0] = state_machine__5507__auto__);
(statearr_25295[1] = 1);
return statearr_25295;
});
var state_machine__5507__auto____1 = (function (state_25274){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25274);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25296){if((e25296 instanceof Object))
{var ex__5510__auto__ = e25296;var statearr_25297_25310 = state_25274;(statearr_25297_25310[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25274);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e25296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__25311 = state_25274;
state_25274 = G__25311;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25274){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25298 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25299);
return statearr_25298;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25416){var state_val_25417 = (state_25416[1]);if((state_val_25417 === 1))
{var inst_25379 = (new Array(n));var inst_25380 = inst_25379;var inst_25381 = 0;var state_25416__$1 = (function (){var statearr_25418 = state_25416;(statearr_25418[7] = inst_25381);
(statearr_25418[8] = inst_25380);
return statearr_25418;
})();var statearr_25419_25447 = state_25416__$1;(statearr_25419_25447[2] = null);
(statearr_25419_25447[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 2))
{var state_25416__$1 = state_25416;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25416__$1,4,ch);
} else
{if((state_val_25417 === 3))
{var inst_25414 = (state_25416[2]);var state_25416__$1 = state_25416;return cljs.core.async.impl.ioc_helpers.return_chan(state_25416__$1,inst_25414);
} else
{if((state_val_25417 === 4))
{var inst_25384 = (state_25416[9]);var inst_25384__$1 = (state_25416[2]);var inst_25385 = (inst_25384__$1 == null);var inst_25386 = cljs.core.not(inst_25385);var state_25416__$1 = (function (){var statearr_25420 = state_25416;(statearr_25420[9] = inst_25384__$1);
return statearr_25420;
})();if(inst_25386)
{var statearr_25421_25448 = state_25416__$1;(statearr_25421_25448[1] = 5);
} else
{var statearr_25422_25449 = state_25416__$1;(statearr_25422_25449[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 5))
{var inst_25389 = (state_25416[10]);var inst_25381 = (state_25416[7]);var inst_25384 = (state_25416[9]);var inst_25380 = (state_25416[8]);var inst_25388 = (inst_25380[inst_25381] = inst_25384);var inst_25389__$1 = (inst_25381 + 1);var inst_25390 = (inst_25389__$1 < n);var state_25416__$1 = (function (){var statearr_25423 = state_25416;(statearr_25423[10] = inst_25389__$1);
(statearr_25423[11] = inst_25388);
return statearr_25423;
})();if(cljs.core.truth_(inst_25390))
{var statearr_25424_25450 = state_25416__$1;(statearr_25424_25450[1] = 8);
} else
{var statearr_25425_25451 = state_25416__$1;(statearr_25425_25451[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 6))
{var inst_25381 = (state_25416[7]);var inst_25402 = (inst_25381 > 0);var state_25416__$1 = state_25416;if(cljs.core.truth_(inst_25402))
{var statearr_25427_25452 = state_25416__$1;(statearr_25427_25452[1] = 12);
} else
{var statearr_25428_25453 = state_25416__$1;(statearr_25428_25453[1] = 13);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 7))
{var inst_25412 = (state_25416[2]);var state_25416__$1 = state_25416;var statearr_25429_25454 = state_25416__$1;(statearr_25429_25454[2] = inst_25412);
(statearr_25429_25454[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 8))
{var inst_25389 = (state_25416[10]);var inst_25380 = (state_25416[8]);var tmp25426 = inst_25380;var inst_25380__$1 = tmp25426;var inst_25381 = inst_25389;var state_25416__$1 = (function (){var statearr_25430 = state_25416;(statearr_25430[7] = inst_25381);
(statearr_25430[8] = inst_25380__$1);
return statearr_25430;
})();var statearr_25431_25455 = state_25416__$1;(statearr_25431_25455[2] = null);
(statearr_25431_25455[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 9))
{var inst_25380 = (state_25416[8]);var inst_25394 = cljs.core.vec(inst_25380);var state_25416__$1 = state_25416;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25416__$1,11,out,inst_25394);
} else
{if((state_val_25417 === 10))
{var inst_25400 = (state_25416[2]);var state_25416__$1 = state_25416;var statearr_25432_25456 = state_25416__$1;(statearr_25432_25456[2] = inst_25400);
(statearr_25432_25456[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 11))
{var inst_25396 = (state_25416[2]);var inst_25397 = (new Array(n));var inst_25380 = inst_25397;var inst_25381 = 0;var state_25416__$1 = (function (){var statearr_25433 = state_25416;(statearr_25433[7] = inst_25381);
(statearr_25433[12] = inst_25396);
(statearr_25433[8] = inst_25380);
return statearr_25433;
})();var statearr_25434_25457 = state_25416__$1;(statearr_25434_25457[2] = null);
(statearr_25434_25457[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 12))
{var inst_25380 = (state_25416[8]);var inst_25404 = cljs.core.vec(inst_25380);var state_25416__$1 = state_25416;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25416__$1,15,out,inst_25404);
} else
{if((state_val_25417 === 13))
{var state_25416__$1 = state_25416;var statearr_25435_25458 = state_25416__$1;(statearr_25435_25458[2] = null);
(statearr_25435_25458[1] = 14);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 14))
{var inst_25409 = (state_25416[2]);var inst_25410 = cljs.core.async.close_BANG_(out);var state_25416__$1 = (function (){var statearr_25436 = state_25416;(statearr_25436[13] = inst_25409);
return statearr_25436;
})();var statearr_25437_25459 = state_25416__$1;(statearr_25437_25459[2] = inst_25410);
(statearr_25437_25459[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25417 === 15))
{var inst_25406 = (state_25416[2]);var state_25416__$1 = state_25416;var statearr_25438_25460 = state_25416__$1;(statearr_25438_25460[2] = inst_25406);
(statearr_25438_25460[1] = 14);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_25442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25442[0] = state_machine__5507__auto__);
(statearr_25442[1] = 1);
return statearr_25442;
});
var state_machine__5507__auto____1 = (function (state_25416){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25416);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25443){if((e25443 instanceof Object))
{var ex__5510__auto__ = e25443;var statearr_25444_25461 = state_25416;(statearr_25444_25461[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25416);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e25443;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__25462 = state_25416;
state_25416 = G__25462;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25416){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25445 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25446);
return statearr_25445;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25575){var state_val_25576 = (state_25575[1]);if((state_val_25576 === 1))
{var inst_25534 = [];var inst_25535 = inst_25534;var inst_25536 = cljs.core.constant$keyword$210;var state_25575__$1 = (function (){var statearr_25577 = state_25575;(statearr_25577[7] = inst_25536);
(statearr_25577[8] = inst_25535);
return statearr_25577;
})();var statearr_25578_25606 = state_25575__$1;(statearr_25578_25606[2] = null);
(statearr_25578_25606[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 2))
{var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25575__$1,4,ch);
} else
{if((state_val_25576 === 3))
{var inst_25573 = (state_25575[2]);var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.return_chan(state_25575__$1,inst_25573);
} else
{if((state_val_25576 === 4))
{var inst_25539 = (state_25575[9]);var inst_25539__$1 = (state_25575[2]);var inst_25540 = (inst_25539__$1 == null);var inst_25541 = cljs.core.not(inst_25540);var state_25575__$1 = (function (){var statearr_25579 = state_25575;(statearr_25579[9] = inst_25539__$1);
return statearr_25579;
})();if(inst_25541)
{var statearr_25580_25607 = state_25575__$1;(statearr_25580_25607[1] = 5);
} else
{var statearr_25581_25608 = state_25575__$1;(statearr_25581_25608[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 5))
{var inst_25536 = (state_25575[7]);var inst_25543 = (state_25575[10]);var inst_25539 = (state_25575[9]);var inst_25543__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25539) : f.call(null,inst_25539));var inst_25544 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25543__$1,inst_25536);var inst_25545 = cljs.core.keyword_identical_QMARK_(inst_25536,cljs.core.constant$keyword$210);var inst_25546 = (inst_25544) || (inst_25545);var state_25575__$1 = (function (){var statearr_25582 = state_25575;(statearr_25582[10] = inst_25543__$1);
return statearr_25582;
})();if(cljs.core.truth_(inst_25546))
{var statearr_25583_25609 = state_25575__$1;(statearr_25583_25609[1] = 8);
} else
{var statearr_25584_25610 = state_25575__$1;(statearr_25584_25610[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 6))
{var inst_25535 = (state_25575[8]);var inst_25560 = inst_25535.length;var inst_25561 = (inst_25560 > 0);var state_25575__$1 = state_25575;if(cljs.core.truth_(inst_25561))
{var statearr_25586_25611 = state_25575__$1;(statearr_25586_25611[1] = 12);
} else
{var statearr_25587_25612 = state_25575__$1;(statearr_25587_25612[1] = 13);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 7))
{var inst_25571 = (state_25575[2]);var state_25575__$1 = state_25575;var statearr_25588_25613 = state_25575__$1;(statearr_25588_25613[2] = inst_25571);
(statearr_25588_25613[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 8))
{var inst_25543 = (state_25575[10]);var inst_25539 = (state_25575[9]);var inst_25535 = (state_25575[8]);var inst_25548 = inst_25535.push(inst_25539);var tmp25585 = inst_25535;var inst_25535__$1 = tmp25585;var inst_25536 = inst_25543;var state_25575__$1 = (function (){var statearr_25589 = state_25575;(statearr_25589[7] = inst_25536);
(statearr_25589[8] = inst_25535__$1);
(statearr_25589[11] = inst_25548);
return statearr_25589;
})();var statearr_25590_25614 = state_25575__$1;(statearr_25590_25614[2] = null);
(statearr_25590_25614[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 9))
{var inst_25535 = (state_25575[8]);var inst_25551 = cljs.core.vec(inst_25535);var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25575__$1,11,out,inst_25551);
} else
{if((state_val_25576 === 10))
{var inst_25558 = (state_25575[2]);var state_25575__$1 = state_25575;var statearr_25591_25615 = state_25575__$1;(statearr_25591_25615[2] = inst_25558);
(statearr_25591_25615[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 11))
{var inst_25543 = (state_25575[10]);var inst_25539 = (state_25575[9]);var inst_25553 = (state_25575[2]);var inst_25554 = [];var inst_25555 = inst_25554.push(inst_25539);var inst_25535 = inst_25554;var inst_25536 = inst_25543;var state_25575__$1 = (function (){var statearr_25592 = state_25575;(statearr_25592[7] = inst_25536);
(statearr_25592[8] = inst_25535);
(statearr_25592[12] = inst_25553);
(statearr_25592[13] = inst_25555);
return statearr_25592;
})();var statearr_25593_25616 = state_25575__$1;(statearr_25593_25616[2] = null);
(statearr_25593_25616[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 12))
{var inst_25535 = (state_25575[8]);var inst_25563 = cljs.core.vec(inst_25535);var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25575__$1,15,out,inst_25563);
} else
{if((state_val_25576 === 13))
{var state_25575__$1 = state_25575;var statearr_25594_25617 = state_25575__$1;(statearr_25594_25617[2] = null);
(statearr_25594_25617[1] = 14);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 14))
{var inst_25568 = (state_25575[2]);var inst_25569 = cljs.core.async.close_BANG_(out);var state_25575__$1 = (function (){var statearr_25595 = state_25575;(statearr_25595[14] = inst_25568);
return statearr_25595;
})();var statearr_25596_25618 = state_25575__$1;(statearr_25596_25618[2] = inst_25569);
(statearr_25596_25618[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_25576 === 15))
{var inst_25565 = (state_25575[2]);var state_25575__$1 = state_25575;var statearr_25597_25619 = state_25575__$1;(statearr_25597_25619[2] = inst_25565);
(statearr_25597_25619[1] = 14);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_25601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25601[0] = state_machine__5507__auto__);
(statearr_25601[1] = 1);
return statearr_25601;
});
var state_machine__5507__auto____1 = (function (state_25575){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25575);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25602){if((e25602 instanceof Object))
{var ex__5510__auto__ = e25602;var statearr_25603_25620 = state_25575;(statearr_25603_25620[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25575);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e25602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__25621 = state_25575;
state_25575 = G__25621;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25604 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25605);
return statearr_25604;
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
