// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36063 = (function (f,fn_handler,meta36064){
this.f = f;
this.fn_handler = fn_handler;
this.meta36064 = meta36064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36063.cljs$lang$type = true;
cljs.core.async.t36063.cljs$lang$ctorStr = "cljs.core.async/t36063";
cljs.core.async.t36063.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36063");
});
cljs.core.async.t36063.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36065){var self__ = this;
var _36065__$1 = this;return self__.meta36064;
});
cljs.core.async.t36063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36065,meta36064__$1){var self__ = this;
var _36065__$1 = this;return (new cljs.core.async.t36063(self__.f,self__.fn_handler,meta36064__$1));
});
cljs.core.async.__GT_t36063 = (function __GT_t36063(f__$1,fn_handler__$1,meta36064){return (new cljs.core.async.t36063(f__$1,fn_handler__$1,meta36064));
});
}
return (new cljs.core.async.t36063(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36067 = buff;if(G__36067)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__36067.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36067.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36067);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36067);
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
{var val_36068 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36068) : fn1.call(null,val_36068));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36068) : fn1.call(null,val_36068));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___36069 = n;var x_36070 = 0;while(true){
if((x_36070 < n__4289__auto___36069))
{(a[x_36070] = 0);
{
var G__36071 = (x_36070 + 1);
x_36070 = G__36071;
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
var G__36072 = (i + 1);
i = G__36072;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36076 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36076 = (function (flag,alt_flag,meta36077){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36077 = meta36077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36076.cljs$lang$type = true;
cljs.core.async.t36076.cljs$lang$ctorStr = "cljs.core.async/t36076";
cljs.core.async.t36076.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36076");
});
cljs.core.async.t36076.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t36076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t36076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36078){var self__ = this;
var _36078__$1 = this;return self__.meta36077;
});
cljs.core.async.t36076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36078,meta36077__$1){var self__ = this;
var _36078__$1 = this;return (new cljs.core.async.t36076(self__.flag,self__.alt_flag,meta36077__$1));
});
cljs.core.async.__GT_t36076 = (function __GT_t36076(flag__$1,alt_flag__$1,meta36077){return (new cljs.core.async.t36076(flag__$1,alt_flag__$1,meta36077));
});
}
return (new cljs.core.async.t36076(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36082 = (function (cb,flag,alt_handler,meta36083){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36083 = meta36083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36082.cljs$lang$type = true;
cljs.core.async.t36082.cljs$lang$ctorStr = "cljs.core.async/t36082";
cljs.core.async.t36082.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36082");
});
cljs.core.async.t36082.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36084){var self__ = this;
var _36084__$1 = this;return self__.meta36083;
});
cljs.core.async.t36082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36084,meta36083__$1){var self__ = this;
var _36084__$1 = this;return (new cljs.core.async.t36082(self__.cb,self__.flag,self__.alt_handler,meta36083__$1));
});
cljs.core.async.__GT_t36082 = (function __GT_t36082(cb__$1,flag__$1,alt_handler__$1,meta36083){return (new cljs.core.async.t36082(cb__$1,flag__$1,alt_handler__$1,meta36083));
});
}
return (new cljs.core.async.t36082(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$557.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36085_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36085_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36085_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36086 = (i + 1);
i = G__36086;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$541))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3429__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$541.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$541], null));
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
var alts_BANG___delegate = function (ports,p__36087){var map__36089 = p__36087;var map__36089__$1 = ((cljs.core.seq_QMARK_(map__36089))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36089):map__36089);var opts = map__36089__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36087 = null;if (arguments.length > 1) {
  p__36087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36087);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36090){
var ports = cljs.core.first(arglist__36090);
var p__36087 = cljs.core.rest(arglist__36090);
return alts_BANG___delegate(ports,p__36087);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36098 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36098 = (function (ch,f,map_LT_,meta36099){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36099 = meta36099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36098.cljs$lang$type = true;
cljs.core.async.t36098.cljs$lang$ctorStr = "cljs.core.async/t36098";
cljs.core.async.t36098.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36098");
});
cljs.core.async.t36098.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36098.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36101 = (function (fn1,_,meta36099,ch,f,map_LT_,meta36102){
this.fn1 = fn1;
this._ = _;
this.meta36099 = meta36099;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36102 = meta36102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36101.cljs$lang$type = true;
cljs.core.async.t36101.cljs$lang$ctorStr = "cljs.core.async/t36101";
cljs.core.async.t36101.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36101");
});
cljs.core.async.t36101.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t36101.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t36101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__36091_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36091_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36091_SHARP_) : self__.f.call(null,p1__36091_SHARP_)))) : f1.call(null,(((p1__36091_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36091_SHARP_) : self__.f.call(null,p1__36091_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t36101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36103){var self__ = this;
var _36103__$1 = this;return self__.meta36102;
});
cljs.core.async.t36101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36103,meta36102__$1){var self__ = this;
var _36103__$1 = this;return (new cljs.core.async.t36101(self__.fn1,self__._,self__.meta36099,self__.ch,self__.f,self__.map_LT_,meta36102__$1));
});
cljs.core.async.__GT_t36101 = (function __GT_t36101(fn1__$1,___$2,meta36099__$1,ch__$2,f__$2,map_LT___$2,meta36102){return (new cljs.core.async.t36101(fn1__$1,___$2,meta36099__$1,ch__$2,f__$2,map_LT___$2,meta36102));
});
}
return (new cljs.core.async.t36101(fn1,___$1,self__.meta36099,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t36098.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36100){var self__ = this;
var _36100__$1 = this;return self__.meta36099;
});
cljs.core.async.t36098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36100,meta36099__$1){var self__ = this;
var _36100__$1 = this;return (new cljs.core.async.t36098(self__.ch,self__.f,self__.map_LT_,meta36099__$1));
});
cljs.core.async.__GT_t36098 = (function __GT_t36098(ch__$1,f__$1,map_LT___$1,meta36099){return (new cljs.core.async.t36098(ch__$1,f__$1,map_LT___$1,meta36099));
});
}
return (new cljs.core.async.t36098(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36107 = (function (ch,f,map_GT_,meta36108){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36108 = meta36108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36107.cljs$lang$type = true;
cljs.core.async.t36107.cljs$lang$ctorStr = "cljs.core.async/t36107";
cljs.core.async.t36107.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36107");
});
cljs.core.async.t36107.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36107.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36107.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36109){var self__ = this;
var _36109__$1 = this;return self__.meta36108;
});
cljs.core.async.t36107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36109,meta36108__$1){var self__ = this;
var _36109__$1 = this;return (new cljs.core.async.t36107(self__.ch,self__.f,self__.map_GT_,meta36108__$1));
});
cljs.core.async.__GT_t36107 = (function __GT_t36107(ch__$1,f__$1,map_GT___$1,meta36108){return (new cljs.core.async.t36107(ch__$1,f__$1,map_GT___$1,meta36108));
});
}
return (new cljs.core.async.t36107(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36113 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36113 = (function (ch,p,filter_GT_,meta36114){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36114 = meta36114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36113.cljs$lang$type = true;
cljs.core.async.t36113.cljs$lang$ctorStr = "cljs.core.async/t36113";
cljs.core.async.t36113.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36113");
});
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36115){var self__ = this;
var _36115__$1 = this;return self__.meta36114;
});
cljs.core.async.t36113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36115,meta36114__$1){var self__ = this;
var _36115__$1 = this;return (new cljs.core.async.t36113(self__.ch,self__.p,self__.filter_GT_,meta36114__$1));
});
cljs.core.async.__GT_t36113 = (function __GT_t36113(ch__$1,p__$1,filter_GT___$1,meta36114){return (new cljs.core.async.t36113(ch__$1,p__$1,filter_GT___$1,meta36114));
});
}
return (new cljs.core.async.t36113(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___36198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36177){var state_val_36178 = (state_36177[1]);if((state_val_36178 === 1))
{var state_36177__$1 = state_36177;var statearr_36179_36199 = state_36177__$1;(statearr_36179_36199[2] = null);
(statearr_36179_36199[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36178 === 2))
{var state_36177__$1 = state_36177;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36177__$1,4,ch);
} else
{if((state_val_36178 === 3))
{var inst_36175 = (state_36177[2]);var state_36177__$1 = state_36177;return cljs.core.async.impl.ioc_helpers.return_chan(state_36177__$1,inst_36175);
} else
{if((state_val_36178 === 4))
{var inst_36159 = (state_36177[7]);var inst_36159__$1 = (state_36177[2]);var inst_36160 = (inst_36159__$1 == null);var state_36177__$1 = (function (){var statearr_36180 = state_36177;(statearr_36180[7] = inst_36159__$1);
return statearr_36180;
})();if(cljs.core.truth_(inst_36160))
{var statearr_36181_36200 = state_36177__$1;(statearr_36181_36200[1] = 5);
} else
{var statearr_36182_36201 = state_36177__$1;(statearr_36182_36201[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36178 === 5))
{var inst_36162 = cljs.core.async.close_BANG_(out);var state_36177__$1 = state_36177;var statearr_36183_36202 = state_36177__$1;(statearr_36183_36202[2] = inst_36162);
(statearr_36183_36202[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36178 === 6))
{var inst_36159 = (state_36177[7]);var inst_36164 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36159) : p.call(null,inst_36159));var state_36177__$1 = state_36177;if(cljs.core.truth_(inst_36164))
{var statearr_36184_36203 = state_36177__$1;(statearr_36184_36203[1] = 8);
} else
{var statearr_36185_36204 = state_36177__$1;(statearr_36185_36204[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36178 === 7))
{var inst_36173 = (state_36177[2]);var state_36177__$1 = state_36177;var statearr_36186_36205 = state_36177__$1;(statearr_36186_36205[2] = inst_36173);
(statearr_36186_36205[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36178 === 8))
{var inst_36159 = (state_36177[7]);var state_36177__$1 = state_36177;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36177__$1,11,out,inst_36159);
} else
{if((state_val_36178 === 9))
{var state_36177__$1 = state_36177;var statearr_36187_36206 = state_36177__$1;(statearr_36187_36206[2] = null);
(statearr_36187_36206[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36178 === 10))
{var inst_36170 = (state_36177[2]);var state_36177__$1 = (function (){var statearr_36188 = state_36177;(statearr_36188[8] = inst_36170);
return statearr_36188;
})();var statearr_36189_36207 = state_36177__$1;(statearr_36189_36207[2] = null);
(statearr_36189_36207[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36178 === 11))
{var inst_36167 = (state_36177[2]);var state_36177__$1 = state_36177;var statearr_36190_36208 = state_36177__$1;(statearr_36190_36208[2] = inst_36167);
(statearr_36190_36208[1] = 10);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36194 = [null,null,null,null,null,null,null,null,null];(statearr_36194[0] = state_machine__5548__auto__);
(statearr_36194[1] = 1);
return statearr_36194;
});
var state_machine__5548__auto____1 = (function (state_36177){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36177);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36195){if((e36195 instanceof Object))
{var ex__5551__auto__ = e36195;var statearr_36196_36209 = state_36177;(statearr_36196_36209[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36177);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36210 = state_36177;
state_36177 = G__36210;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36177){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36197 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36198);
return statearr_36197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36362){var state_val_36363 = (state_36362[1]);if((state_val_36363 === 1))
{var state_36362__$1 = state_36362;var statearr_36364_36401 = state_36362__$1;(statearr_36364_36401[2] = null);
(statearr_36364_36401[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 2))
{var state_36362__$1 = state_36362;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36362__$1,4,in$);
} else
{if((state_val_36363 === 3))
{var inst_36360 = (state_36362[2]);var state_36362__$1 = state_36362;return cljs.core.async.impl.ioc_helpers.return_chan(state_36362__$1,inst_36360);
} else
{if((state_val_36363 === 4))
{var inst_36308 = (state_36362[7]);var inst_36308__$1 = (state_36362[2]);var inst_36309 = (inst_36308__$1 == null);var state_36362__$1 = (function (){var statearr_36365 = state_36362;(statearr_36365[7] = inst_36308__$1);
return statearr_36365;
})();if(cljs.core.truth_(inst_36309))
{var statearr_36366_36402 = state_36362__$1;(statearr_36366_36402[1] = 5);
} else
{var statearr_36367_36403 = state_36362__$1;(statearr_36367_36403[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 5))
{var inst_36311 = cljs.core.async.close_BANG_(out);var state_36362__$1 = state_36362;var statearr_36368_36404 = state_36362__$1;(statearr_36368_36404[2] = inst_36311);
(statearr_36368_36404[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 6))
{var inst_36308 = (state_36362[7]);var inst_36313 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36308) : f.call(null,inst_36308));var inst_36318 = cljs.core.seq(inst_36313);var inst_36319 = inst_36318;var inst_36320 = null;var inst_36321 = 0;var inst_36322 = 0;var state_36362__$1 = (function (){var statearr_36369 = state_36362;(statearr_36369[8] = inst_36321);
(statearr_36369[9] = inst_36322);
(statearr_36369[10] = inst_36320);
(statearr_36369[11] = inst_36319);
return statearr_36369;
})();var statearr_36370_36405 = state_36362__$1;(statearr_36370_36405[2] = null);
(statearr_36370_36405[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 7))
{var inst_36358 = (state_36362[2]);var state_36362__$1 = state_36362;var statearr_36371_36406 = state_36362__$1;(statearr_36371_36406[2] = inst_36358);
(statearr_36371_36406[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 8))
{var inst_36321 = (state_36362[8]);var inst_36322 = (state_36362[9]);var inst_36324 = (inst_36322 < inst_36321);var inst_36325 = inst_36324;var state_36362__$1 = state_36362;if(cljs.core.truth_(inst_36325))
{var statearr_36372_36407 = state_36362__$1;(statearr_36372_36407[1] = 10);
} else
{var statearr_36373_36408 = state_36362__$1;(statearr_36373_36408[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 9))
{var inst_36355 = (state_36362[2]);var state_36362__$1 = (function (){var statearr_36374 = state_36362;(statearr_36374[12] = inst_36355);
return statearr_36374;
})();var statearr_36375_36409 = state_36362__$1;(statearr_36375_36409[2] = null);
(statearr_36375_36409[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 10))
{var inst_36322 = (state_36362[9]);var inst_36320 = (state_36362[10]);var inst_36327 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36320,inst_36322);var state_36362__$1 = state_36362;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36362__$1,13,out,inst_36327);
} else
{if((state_val_36363 === 11))
{var inst_36333 = (state_36362[13]);var inst_36319 = (state_36362[11]);var inst_36333__$1 = cljs.core.seq(inst_36319);var state_36362__$1 = (function (){var statearr_36379 = state_36362;(statearr_36379[13] = inst_36333__$1);
return statearr_36379;
})();if(inst_36333__$1)
{var statearr_36380_36410 = state_36362__$1;(statearr_36380_36410[1] = 14);
} else
{var statearr_36381_36411 = state_36362__$1;(statearr_36381_36411[1] = 15);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 12))
{var inst_36353 = (state_36362[2]);var state_36362__$1 = state_36362;var statearr_36382_36412 = state_36362__$1;(statearr_36382_36412[2] = inst_36353);
(statearr_36382_36412[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 13))
{var inst_36321 = (state_36362[8]);var inst_36322 = (state_36362[9]);var inst_36320 = (state_36362[10]);var inst_36319 = (state_36362[11]);var inst_36329 = (state_36362[2]);var inst_36330 = (inst_36322 + 1);var tmp36376 = inst_36321;var tmp36377 = inst_36320;var tmp36378 = inst_36319;var inst_36319__$1 = tmp36378;var inst_36320__$1 = tmp36377;var inst_36321__$1 = tmp36376;var inst_36322__$1 = inst_36330;var state_36362__$1 = (function (){var statearr_36383 = state_36362;(statearr_36383[8] = inst_36321__$1);
(statearr_36383[9] = inst_36322__$1);
(statearr_36383[10] = inst_36320__$1);
(statearr_36383[14] = inst_36329);
(statearr_36383[11] = inst_36319__$1);
return statearr_36383;
})();var statearr_36384_36413 = state_36362__$1;(statearr_36384_36413[2] = null);
(statearr_36384_36413[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 14))
{var inst_36333 = (state_36362[13]);var inst_36335 = cljs.core.chunked_seq_QMARK_(inst_36333);var state_36362__$1 = state_36362;if(inst_36335)
{var statearr_36385_36414 = state_36362__$1;(statearr_36385_36414[1] = 17);
} else
{var statearr_36386_36415 = state_36362__$1;(statearr_36386_36415[1] = 18);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 15))
{var state_36362__$1 = state_36362;var statearr_36387_36416 = state_36362__$1;(statearr_36387_36416[2] = null);
(statearr_36387_36416[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 16))
{var inst_36351 = (state_36362[2]);var state_36362__$1 = state_36362;var statearr_36388_36417 = state_36362__$1;(statearr_36388_36417[2] = inst_36351);
(statearr_36388_36417[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 17))
{var inst_36333 = (state_36362[13]);var inst_36337 = cljs.core.chunk_first(inst_36333);var inst_36338 = cljs.core.chunk_rest(inst_36333);var inst_36339 = cljs.core.count(inst_36337);var inst_36319 = inst_36338;var inst_36320 = inst_36337;var inst_36321 = inst_36339;var inst_36322 = 0;var state_36362__$1 = (function (){var statearr_36389 = state_36362;(statearr_36389[8] = inst_36321);
(statearr_36389[9] = inst_36322);
(statearr_36389[10] = inst_36320);
(statearr_36389[11] = inst_36319);
return statearr_36389;
})();var statearr_36390_36418 = state_36362__$1;(statearr_36390_36418[2] = null);
(statearr_36390_36418[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 18))
{var inst_36333 = (state_36362[13]);var inst_36342 = cljs.core.first(inst_36333);var state_36362__$1 = state_36362;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36362__$1,20,out,inst_36342);
} else
{if((state_val_36363 === 19))
{var inst_36348 = (state_36362[2]);var state_36362__$1 = state_36362;var statearr_36391_36419 = state_36362__$1;(statearr_36391_36419[2] = inst_36348);
(statearr_36391_36419[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36363 === 20))
{var inst_36333 = (state_36362[13]);var inst_36344 = (state_36362[2]);var inst_36345 = cljs.core.next(inst_36333);var inst_36319 = inst_36345;var inst_36320 = null;var inst_36321 = 0;var inst_36322 = 0;var state_36362__$1 = (function (){var statearr_36392 = state_36362;(statearr_36392[15] = inst_36344);
(statearr_36392[8] = inst_36321);
(statearr_36392[9] = inst_36322);
(statearr_36392[10] = inst_36320);
(statearr_36392[11] = inst_36319);
return statearr_36392;
})();var statearr_36393_36420 = state_36362__$1;(statearr_36393_36420[2] = null);
(statearr_36393_36420[1] = 8);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36397[0] = state_machine__5548__auto__);
(statearr_36397[1] = 1);
return statearr_36397;
});
var state_machine__5548__auto____1 = (function (state_36362){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36362);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36398){if((e36398 instanceof Object))
{var ex__5551__auto__ = e36398;var statearr_36399_36421 = state_36362;(statearr_36399_36421[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36362);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36422 = state_36362;
state_36362 = G__36422;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36362){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36400 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___36503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36482){var state_val_36483 = (state_36482[1]);if((state_val_36483 === 1))
{var state_36482__$1 = state_36482;var statearr_36484_36504 = state_36482__$1;(statearr_36484_36504[2] = null);
(statearr_36484_36504[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36483 === 2))
{var state_36482__$1 = state_36482;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36482__$1,4,from);
} else
{if((state_val_36483 === 3))
{var inst_36480 = (state_36482[2]);var state_36482__$1 = state_36482;return cljs.core.async.impl.ioc_helpers.return_chan(state_36482__$1,inst_36480);
} else
{if((state_val_36483 === 4))
{var inst_36465 = (state_36482[7]);var inst_36465__$1 = (state_36482[2]);var inst_36466 = (inst_36465__$1 == null);var state_36482__$1 = (function (){var statearr_36485 = state_36482;(statearr_36485[7] = inst_36465__$1);
return statearr_36485;
})();if(cljs.core.truth_(inst_36466))
{var statearr_36486_36505 = state_36482__$1;(statearr_36486_36505[1] = 5);
} else
{var statearr_36487_36506 = state_36482__$1;(statearr_36487_36506[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36483 === 5))
{var state_36482__$1 = state_36482;if(cljs.core.truth_(close_QMARK_))
{var statearr_36488_36507 = state_36482__$1;(statearr_36488_36507[1] = 8);
} else
{var statearr_36489_36508 = state_36482__$1;(statearr_36489_36508[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36483 === 6))
{var inst_36465 = (state_36482[7]);var state_36482__$1 = state_36482;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36482__$1,11,to,inst_36465);
} else
{if((state_val_36483 === 7))
{var inst_36478 = (state_36482[2]);var state_36482__$1 = state_36482;var statearr_36490_36509 = state_36482__$1;(statearr_36490_36509[2] = inst_36478);
(statearr_36490_36509[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36483 === 8))
{var inst_36469 = cljs.core.async.close_BANG_(to);var state_36482__$1 = state_36482;var statearr_36491_36510 = state_36482__$1;(statearr_36491_36510[2] = inst_36469);
(statearr_36491_36510[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36483 === 9))
{var state_36482__$1 = state_36482;var statearr_36492_36511 = state_36482__$1;(statearr_36492_36511[2] = null);
(statearr_36492_36511[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36483 === 10))
{var inst_36472 = (state_36482[2]);var state_36482__$1 = state_36482;var statearr_36493_36512 = state_36482__$1;(statearr_36493_36512[2] = inst_36472);
(statearr_36493_36512[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36483 === 11))
{var inst_36475 = (state_36482[2]);var state_36482__$1 = (function (){var statearr_36494 = state_36482;(statearr_36494[8] = inst_36475);
return statearr_36494;
})();var statearr_36495_36513 = state_36482__$1;(statearr_36495_36513[2] = null);
(statearr_36495_36513[1] = 2);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36499 = [null,null,null,null,null,null,null,null,null];(statearr_36499[0] = state_machine__5548__auto__);
(statearr_36499[1] = 1);
return statearr_36499;
});
var state_machine__5548__auto____1 = (function (state_36482){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36482);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36500){if((e36500 instanceof Object))
{var ex__5551__auto__ = e36500;var statearr_36501_36514 = state_36482;(statearr_36501_36514[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36482);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36515 = state_36482;
state_36482 = G__36515;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36482){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36502 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36503);
return statearr_36502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5562__auto___36602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36580){var state_val_36581 = (state_36580[1]);if((state_val_36581 === 1))
{var state_36580__$1 = state_36580;var statearr_36582_36603 = state_36580__$1;(statearr_36582_36603[2] = null);
(statearr_36582_36603[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 2))
{var state_36580__$1 = state_36580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36580__$1,4,ch);
} else
{if((state_val_36581 === 3))
{var inst_36578 = (state_36580[2]);var state_36580__$1 = state_36580;return cljs.core.async.impl.ioc_helpers.return_chan(state_36580__$1,inst_36578);
} else
{if((state_val_36581 === 4))
{var inst_36561 = (state_36580[7]);var inst_36561__$1 = (state_36580[2]);var inst_36562 = (inst_36561__$1 == null);var state_36580__$1 = (function (){var statearr_36583 = state_36580;(statearr_36583[7] = inst_36561__$1);
return statearr_36583;
})();if(cljs.core.truth_(inst_36562))
{var statearr_36584_36604 = state_36580__$1;(statearr_36584_36604[1] = 5);
} else
{var statearr_36585_36605 = state_36580__$1;(statearr_36585_36605[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 5))
{var inst_36564 = cljs.core.async.close_BANG_(tc);var inst_36565 = cljs.core.async.close_BANG_(fc);var state_36580__$1 = (function (){var statearr_36586 = state_36580;(statearr_36586[8] = inst_36564);
return statearr_36586;
})();var statearr_36587_36606 = state_36580__$1;(statearr_36587_36606[2] = inst_36565);
(statearr_36587_36606[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 6))
{var inst_36561 = (state_36580[7]);var inst_36567 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36561) : p.call(null,inst_36561));var state_36580__$1 = state_36580;if(cljs.core.truth_(inst_36567))
{var statearr_36588_36607 = state_36580__$1;(statearr_36588_36607[1] = 9);
} else
{var statearr_36589_36608 = state_36580__$1;(statearr_36589_36608[1] = 10);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 7))
{var inst_36576 = (state_36580[2]);var state_36580__$1 = state_36580;var statearr_36590_36609 = state_36580__$1;(statearr_36590_36609[2] = inst_36576);
(statearr_36590_36609[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 8))
{var inst_36573 = (state_36580[2]);var state_36580__$1 = (function (){var statearr_36591 = state_36580;(statearr_36591[9] = inst_36573);
return statearr_36591;
})();var statearr_36592_36610 = state_36580__$1;(statearr_36592_36610[2] = null);
(statearr_36592_36610[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 9))
{var state_36580__$1 = state_36580;var statearr_36593_36611 = state_36580__$1;(statearr_36593_36611[2] = tc);
(statearr_36593_36611[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 10))
{var state_36580__$1 = state_36580;var statearr_36594_36612 = state_36580__$1;(statearr_36594_36612[2] = fc);
(statearr_36594_36612[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36581 === 11))
{var inst_36561 = (state_36580[7]);var inst_36571 = (state_36580[2]);var state_36580__$1 = state_36580;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36580__$1,8,inst_36571,inst_36561);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36598 = [null,null,null,null,null,null,null,null,null,null];(statearr_36598[0] = state_machine__5548__auto__);
(statearr_36598[1] = 1);
return statearr_36598;
});
var state_machine__5548__auto____1 = (function (state_36580){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36580);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36599){if((e36599 instanceof Object))
{var ex__5551__auto__ = e36599;var statearr_36600_36613 = state_36580;(statearr_36600_36613[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36580);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36614 = state_36580;
state_36580 = G__36614;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36580){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36601 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36602);
return statearr_36601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36661){var state_val_36662 = (state_36661[1]);if((state_val_36662 === 7))
{var inst_36657 = (state_36661[2]);var state_36661__$1 = state_36661;var statearr_36663_36679 = state_36661__$1;(statearr_36663_36679[2] = inst_36657);
(statearr_36663_36679[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36662 === 6))
{var inst_36647 = (state_36661[7]);var inst_36650 = (state_36661[8]);var inst_36654 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36647,inst_36650) : f.call(null,inst_36647,inst_36650));var inst_36647__$1 = inst_36654;var state_36661__$1 = (function (){var statearr_36664 = state_36661;(statearr_36664[7] = inst_36647__$1);
return statearr_36664;
})();var statearr_36665_36680 = state_36661__$1;(statearr_36665_36680[2] = null);
(statearr_36665_36680[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36662 === 5))
{var inst_36647 = (state_36661[7]);var state_36661__$1 = state_36661;var statearr_36666_36681 = state_36661__$1;(statearr_36666_36681[2] = inst_36647);
(statearr_36666_36681[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36662 === 4))
{var inst_36650 = (state_36661[8]);var inst_36650__$1 = (state_36661[2]);var inst_36651 = (inst_36650__$1 == null);var state_36661__$1 = (function (){var statearr_36667 = state_36661;(statearr_36667[8] = inst_36650__$1);
return statearr_36667;
})();if(cljs.core.truth_(inst_36651))
{var statearr_36668_36682 = state_36661__$1;(statearr_36668_36682[1] = 5);
} else
{var statearr_36669_36683 = state_36661__$1;(statearr_36669_36683[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36662 === 3))
{var inst_36659 = (state_36661[2]);var state_36661__$1 = state_36661;return cljs.core.async.impl.ioc_helpers.return_chan(state_36661__$1,inst_36659);
} else
{if((state_val_36662 === 2))
{var state_36661__$1 = state_36661;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36661__$1,4,ch);
} else
{if((state_val_36662 === 1))
{var inst_36647 = init;var state_36661__$1 = (function (){var statearr_36670 = state_36661;(statearr_36670[7] = inst_36647);
return statearr_36670;
})();var statearr_36671_36684 = state_36661__$1;(statearr_36671_36684[2] = null);
(statearr_36671_36684[1] = 2);
return cljs.core.constant$keyword$551;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36675 = [null,null,null,null,null,null,null,null,null];(statearr_36675[0] = state_machine__5548__auto__);
(statearr_36675[1] = 1);
return statearr_36675;
});
var state_machine__5548__auto____1 = (function (state_36661){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36661);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36676){if((e36676 instanceof Object))
{var ex__5551__auto__ = e36676;var statearr_36677_36685 = state_36661;(statearr_36677_36685[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36661);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36686 = state_36661;
state_36661 = G__36686;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36661){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36678 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36748){var state_val_36749 = (state_36748[1]);if((state_val_36749 === 1))
{var inst_36728 = cljs.core.seq(coll);var inst_36729 = inst_36728;var state_36748__$1 = (function (){var statearr_36750 = state_36748;(statearr_36750[7] = inst_36729);
return statearr_36750;
})();var statearr_36751_36769 = state_36748__$1;(statearr_36751_36769[2] = null);
(statearr_36751_36769[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36749 === 2))
{var inst_36729 = (state_36748[7]);var state_36748__$1 = state_36748;if(cljs.core.truth_(inst_36729))
{var statearr_36752_36770 = state_36748__$1;(statearr_36752_36770[1] = 4);
} else
{var statearr_36753_36771 = state_36748__$1;(statearr_36753_36771[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36749 === 3))
{var inst_36746 = (state_36748[2]);var state_36748__$1 = state_36748;return cljs.core.async.impl.ioc_helpers.return_chan(state_36748__$1,inst_36746);
} else
{if((state_val_36749 === 4))
{var inst_36729 = (state_36748[7]);var inst_36732 = cljs.core.first(inst_36729);var state_36748__$1 = state_36748;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36748__$1,7,ch,inst_36732);
} else
{if((state_val_36749 === 5))
{var state_36748__$1 = state_36748;if(cljs.core.truth_(close_QMARK_))
{var statearr_36754_36772 = state_36748__$1;(statearr_36754_36772[1] = 8);
} else
{var statearr_36755_36773 = state_36748__$1;(statearr_36755_36773[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36749 === 6))
{var inst_36744 = (state_36748[2]);var state_36748__$1 = state_36748;var statearr_36756_36774 = state_36748__$1;(statearr_36756_36774[2] = inst_36744);
(statearr_36756_36774[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36749 === 7))
{var inst_36729 = (state_36748[7]);var inst_36734 = (state_36748[2]);var inst_36735 = cljs.core.next(inst_36729);var inst_36729__$1 = inst_36735;var state_36748__$1 = (function (){var statearr_36757 = state_36748;(statearr_36757[7] = inst_36729__$1);
(statearr_36757[8] = inst_36734);
return statearr_36757;
})();var statearr_36758_36775 = state_36748__$1;(statearr_36758_36775[2] = null);
(statearr_36758_36775[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36749 === 8))
{var inst_36739 = cljs.core.async.close_BANG_(ch);var state_36748__$1 = state_36748;var statearr_36759_36776 = state_36748__$1;(statearr_36759_36776[2] = inst_36739);
(statearr_36759_36776[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36749 === 9))
{var state_36748__$1 = state_36748;var statearr_36760_36777 = state_36748__$1;(statearr_36760_36777[2] = null);
(statearr_36760_36777[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36749 === 10))
{var inst_36742 = (state_36748[2]);var state_36748__$1 = state_36748;var statearr_36761_36778 = state_36748__$1;(statearr_36761_36778[2] = inst_36742);
(statearr_36761_36778[1] = 6);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36765 = [null,null,null,null,null,null,null,null,null];(statearr_36765[0] = state_machine__5548__auto__);
(statearr_36765[1] = 1);
return statearr_36765;
});
var state_machine__5548__auto____1 = (function (state_36748){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36748);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36766){if((e36766 instanceof Object))
{var ex__5551__auto__ = e36766;var statearr_36767_36779 = state_36748;(statearr_36767_36779[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36748);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36780 = state_36748;
state_36748 = G__36780;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36748){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36768 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj36782 = {};return obj36782;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj36784 = {};return obj36784;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37008 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37008 = (function (cs,ch,mult,meta37009){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37009 = meta37009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37008.cljs$lang$type = true;
cljs.core.async.t37008.cljs$lang$ctorStr = "cljs.core.async/t37008";
cljs.core.async.t37008.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37008");
});})(cs))
;
cljs.core.async.t37008.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37008.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37008.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37008.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37008.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37010){var self__ = this;
var _37010__$1 = this;return self__.meta37009;
});})(cs))
;
cljs.core.async.t37008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37010,meta37009__$1){var self__ = this;
var _37010__$1 = this;return (new cljs.core.async.t37008(self__.cs,self__.ch,self__.mult,meta37009__$1));
});})(cs))
;
cljs.core.async.__GT_t37008 = ((function (cs){
return (function __GT_t37008(cs__$1,ch__$1,mult__$1,meta37009){return (new cljs.core.async.t37008(cs__$1,ch__$1,mult__$1,meta37009));
});})(cs))
;
}
return (new cljs.core.async.t37008(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___37231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37145){var state_val_37146 = (state_37145[1]);if((state_val_37146 === 32))
{var inst_37089 = (state_37145[7]);var inst_37013 = (state_37145[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37145,31,Object,null,30);var inst_37096 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37089,inst_37013,done);var state_37145__$1 = state_37145;var statearr_37147_37232 = state_37145__$1;(statearr_37147_37232[2] = inst_37096);
cljs.core.async.impl.ioc_helpers.process_exception(state_37145__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 1))
{var state_37145__$1 = state_37145;var statearr_37148_37233 = state_37145__$1;(statearr_37148_37233[2] = null);
(statearr_37148_37233[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 33))
{var inst_37102 = (state_37145[9]);var inst_37104 = cljs.core.chunked_seq_QMARK_(inst_37102);var state_37145__$1 = state_37145;if(inst_37104)
{var statearr_37149_37234 = state_37145__$1;(statearr_37149_37234[1] = 36);
} else
{var statearr_37150_37235 = state_37145__$1;(statearr_37150_37235[1] = 37);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 2))
{var state_37145__$1 = state_37145;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37145__$1,4,ch);
} else
{if((state_val_37146 === 34))
{var state_37145__$1 = state_37145;var statearr_37151_37236 = state_37145__$1;(statearr_37151_37236[2] = null);
(statearr_37151_37236[1] = 35);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 3))
{var inst_37143 = (state_37145[2]);var state_37145__$1 = state_37145;return cljs.core.async.impl.ioc_helpers.return_chan(state_37145__$1,inst_37143);
} else
{if((state_val_37146 === 35))
{var inst_37127 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37152_37237 = state_37145__$1;(statearr_37152_37237[2] = inst_37127);
(statearr_37152_37237[1] = 29);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 4))
{var inst_37013 = (state_37145[8]);var inst_37013__$1 = (state_37145[2]);var inst_37014 = (inst_37013__$1 == null);var state_37145__$1 = (function (){var statearr_37153 = state_37145;(statearr_37153[8] = inst_37013__$1);
return statearr_37153;
})();if(cljs.core.truth_(inst_37014))
{var statearr_37154_37238 = state_37145__$1;(statearr_37154_37238[1] = 5);
} else
{var statearr_37155_37239 = state_37145__$1;(statearr_37155_37239[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 36))
{var inst_37102 = (state_37145[9]);var inst_37106 = cljs.core.chunk_first(inst_37102);var inst_37107 = cljs.core.chunk_rest(inst_37102);var inst_37108 = cljs.core.count(inst_37106);var inst_37081 = inst_37107;var inst_37082 = inst_37106;var inst_37083 = inst_37108;var inst_37084 = 0;var state_37145__$1 = (function (){var statearr_37156 = state_37145;(statearr_37156[10] = inst_37081);
(statearr_37156[11] = inst_37082);
(statearr_37156[12] = inst_37083);
(statearr_37156[13] = inst_37084);
return statearr_37156;
})();var statearr_37157_37240 = state_37145__$1;(statearr_37157_37240[2] = null);
(statearr_37157_37240[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 5))
{var inst_37020 = cljs.core.deref(cs);var inst_37021 = cljs.core.seq(inst_37020);var inst_37022 = inst_37021;var inst_37023 = null;var inst_37024 = 0;var inst_37025 = 0;var state_37145__$1 = (function (){var statearr_37158 = state_37145;(statearr_37158[14] = inst_37025);
(statearr_37158[15] = inst_37023);
(statearr_37158[16] = inst_37024);
(statearr_37158[17] = inst_37022);
return statearr_37158;
})();var statearr_37159_37241 = state_37145__$1;(statearr_37159_37241[2] = null);
(statearr_37159_37241[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 37))
{var inst_37102 = (state_37145[9]);var inst_37111 = cljs.core.first(inst_37102);var state_37145__$1 = (function (){var statearr_37160 = state_37145;(statearr_37160[18] = inst_37111);
return statearr_37160;
})();var statearr_37161_37242 = state_37145__$1;(statearr_37161_37242[2] = null);
(statearr_37161_37242[1] = 41);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 6))
{var inst_37073 = (state_37145[19]);var inst_37072 = cljs.core.deref(cs);var inst_37073__$1 = cljs.core.keys(inst_37072);var inst_37074 = cljs.core.count(inst_37073__$1);var inst_37075 = cljs.core.reset_BANG_(dctr,inst_37074);var inst_37080 = cljs.core.seq(inst_37073__$1);var inst_37081 = inst_37080;var inst_37082 = null;var inst_37083 = 0;var inst_37084 = 0;var state_37145__$1 = (function (){var statearr_37162 = state_37145;(statearr_37162[20] = inst_37075);
(statearr_37162[10] = inst_37081);
(statearr_37162[11] = inst_37082);
(statearr_37162[12] = inst_37083);
(statearr_37162[13] = inst_37084);
(statearr_37162[19] = inst_37073__$1);
return statearr_37162;
})();var statearr_37163_37243 = state_37145__$1;(statearr_37163_37243[2] = null);
(statearr_37163_37243[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 38))
{var inst_37124 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37164_37244 = state_37145__$1;(statearr_37164_37244[2] = inst_37124);
(statearr_37164_37244[1] = 35);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 7))
{var inst_37141 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37165_37245 = state_37145__$1;(statearr_37165_37245[2] = inst_37141);
(statearr_37165_37245[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 39))
{var inst_37102 = (state_37145[9]);var inst_37120 = (state_37145[2]);var inst_37121 = cljs.core.next(inst_37102);var inst_37081 = inst_37121;var inst_37082 = null;var inst_37083 = 0;var inst_37084 = 0;var state_37145__$1 = (function (){var statearr_37166 = state_37145;(statearr_37166[21] = inst_37120);
(statearr_37166[10] = inst_37081);
(statearr_37166[11] = inst_37082);
(statearr_37166[12] = inst_37083);
(statearr_37166[13] = inst_37084);
return statearr_37166;
})();var statearr_37167_37246 = state_37145__$1;(statearr_37167_37246[2] = null);
(statearr_37167_37246[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 8))
{var inst_37025 = (state_37145[14]);var inst_37024 = (state_37145[16]);var inst_37027 = (inst_37025 < inst_37024);var inst_37028 = inst_37027;var state_37145__$1 = state_37145;if(cljs.core.truth_(inst_37028))
{var statearr_37168_37247 = state_37145__$1;(statearr_37168_37247[1] = 10);
} else
{var statearr_37169_37248 = state_37145__$1;(statearr_37169_37248[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 40))
{var inst_37111 = (state_37145[18]);var inst_37112 = (state_37145[2]);var inst_37113 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37114 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37111);var state_37145__$1 = (function (){var statearr_37170 = state_37145;(statearr_37170[22] = inst_37113);
(statearr_37170[23] = inst_37112);
return statearr_37170;
})();var statearr_37171_37249 = state_37145__$1;(statearr_37171_37249[2] = inst_37114);
cljs.core.async.impl.ioc_helpers.process_exception(state_37145__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 9))
{var inst_37070 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37172_37250 = state_37145__$1;(statearr_37172_37250[2] = inst_37070);
(statearr_37172_37250[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 41))
{var inst_37111 = (state_37145[18]);var inst_37013 = (state_37145[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37145,40,Object,null,39);var inst_37118 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37111,inst_37013,done);var state_37145__$1 = state_37145;var statearr_37173_37251 = state_37145__$1;(statearr_37173_37251[2] = inst_37118);
cljs.core.async.impl.ioc_helpers.process_exception(state_37145__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 10))
{var inst_37025 = (state_37145[14]);var inst_37023 = (state_37145[15]);var inst_37031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37023,inst_37025);var inst_37032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37031,0,null);var inst_37033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37031,1,null);var state_37145__$1 = (function (){var statearr_37174 = state_37145;(statearr_37174[24] = inst_37032);
return statearr_37174;
})();if(cljs.core.truth_(inst_37033))
{var statearr_37175_37252 = state_37145__$1;(statearr_37175_37252[1] = 13);
} else
{var statearr_37176_37253 = state_37145__$1;(statearr_37176_37253[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 42))
{var state_37145__$1 = state_37145;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37145__$1,45,dchan);
} else
{if((state_val_37146 === 11))
{var inst_37042 = (state_37145[25]);var inst_37022 = (state_37145[17]);var inst_37042__$1 = cljs.core.seq(inst_37022);var state_37145__$1 = (function (){var statearr_37177 = state_37145;(statearr_37177[25] = inst_37042__$1);
return statearr_37177;
})();if(inst_37042__$1)
{var statearr_37178_37254 = state_37145__$1;(statearr_37178_37254[1] = 16);
} else
{var statearr_37179_37255 = state_37145__$1;(statearr_37179_37255[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 43))
{var state_37145__$1 = state_37145;var statearr_37180_37256 = state_37145__$1;(statearr_37180_37256[2] = null);
(statearr_37180_37256[1] = 44);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 12))
{var inst_37068 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37181_37257 = state_37145__$1;(statearr_37181_37257[2] = inst_37068);
(statearr_37181_37257[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 44))
{var inst_37138 = (state_37145[2]);var state_37145__$1 = (function (){var statearr_37182 = state_37145;(statearr_37182[26] = inst_37138);
return statearr_37182;
})();var statearr_37183_37258 = state_37145__$1;(statearr_37183_37258[2] = null);
(statearr_37183_37258[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 13))
{var inst_37032 = (state_37145[24]);var inst_37035 = cljs.core.async.close_BANG_(inst_37032);var state_37145__$1 = state_37145;var statearr_37184_37259 = state_37145__$1;(statearr_37184_37259[2] = inst_37035);
(statearr_37184_37259[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 45))
{var inst_37135 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37188_37260 = state_37145__$1;(statearr_37188_37260[2] = inst_37135);
(statearr_37188_37260[1] = 44);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 14))
{var state_37145__$1 = state_37145;var statearr_37189_37261 = state_37145__$1;(statearr_37189_37261[2] = null);
(statearr_37189_37261[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 15))
{var inst_37025 = (state_37145[14]);var inst_37023 = (state_37145[15]);var inst_37024 = (state_37145[16]);var inst_37022 = (state_37145[17]);var inst_37038 = (state_37145[2]);var inst_37039 = (inst_37025 + 1);var tmp37185 = inst_37023;var tmp37186 = inst_37024;var tmp37187 = inst_37022;var inst_37022__$1 = tmp37187;var inst_37023__$1 = tmp37185;var inst_37024__$1 = tmp37186;var inst_37025__$1 = inst_37039;var state_37145__$1 = (function (){var statearr_37190 = state_37145;(statearr_37190[27] = inst_37038);
(statearr_37190[14] = inst_37025__$1);
(statearr_37190[15] = inst_37023__$1);
(statearr_37190[16] = inst_37024__$1);
(statearr_37190[17] = inst_37022__$1);
return statearr_37190;
})();var statearr_37191_37262 = state_37145__$1;(statearr_37191_37262[2] = null);
(statearr_37191_37262[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 16))
{var inst_37042 = (state_37145[25]);var inst_37044 = cljs.core.chunked_seq_QMARK_(inst_37042);var state_37145__$1 = state_37145;if(inst_37044)
{var statearr_37192_37263 = state_37145__$1;(statearr_37192_37263[1] = 19);
} else
{var statearr_37193_37264 = state_37145__$1;(statearr_37193_37264[1] = 20);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 17))
{var state_37145__$1 = state_37145;var statearr_37194_37265 = state_37145__$1;(statearr_37194_37265[2] = null);
(statearr_37194_37265[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 18))
{var inst_37066 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37195_37266 = state_37145__$1;(statearr_37195_37266[2] = inst_37066);
(statearr_37195_37266[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 19))
{var inst_37042 = (state_37145[25]);var inst_37046 = cljs.core.chunk_first(inst_37042);var inst_37047 = cljs.core.chunk_rest(inst_37042);var inst_37048 = cljs.core.count(inst_37046);var inst_37022 = inst_37047;var inst_37023 = inst_37046;var inst_37024 = inst_37048;var inst_37025 = 0;var state_37145__$1 = (function (){var statearr_37196 = state_37145;(statearr_37196[14] = inst_37025);
(statearr_37196[15] = inst_37023);
(statearr_37196[16] = inst_37024);
(statearr_37196[17] = inst_37022);
return statearr_37196;
})();var statearr_37197_37267 = state_37145__$1;(statearr_37197_37267[2] = null);
(statearr_37197_37267[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 20))
{var inst_37042 = (state_37145[25]);var inst_37052 = cljs.core.first(inst_37042);var inst_37053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37052,0,null);var inst_37054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37052,1,null);var state_37145__$1 = (function (){var statearr_37198 = state_37145;(statearr_37198[28] = inst_37053);
return statearr_37198;
})();if(cljs.core.truth_(inst_37054))
{var statearr_37199_37268 = state_37145__$1;(statearr_37199_37268[1] = 22);
} else
{var statearr_37200_37269 = state_37145__$1;(statearr_37200_37269[1] = 23);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 21))
{var inst_37063 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37201_37270 = state_37145__$1;(statearr_37201_37270[2] = inst_37063);
(statearr_37201_37270[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 22))
{var inst_37053 = (state_37145[28]);var inst_37056 = cljs.core.async.close_BANG_(inst_37053);var state_37145__$1 = state_37145;var statearr_37202_37271 = state_37145__$1;(statearr_37202_37271[2] = inst_37056);
(statearr_37202_37271[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 23))
{var state_37145__$1 = state_37145;var statearr_37203_37272 = state_37145__$1;(statearr_37203_37272[2] = null);
(statearr_37203_37272[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 24))
{var inst_37042 = (state_37145[25]);var inst_37059 = (state_37145[2]);var inst_37060 = cljs.core.next(inst_37042);var inst_37022 = inst_37060;var inst_37023 = null;var inst_37024 = 0;var inst_37025 = 0;var state_37145__$1 = (function (){var statearr_37204 = state_37145;(statearr_37204[29] = inst_37059);
(statearr_37204[14] = inst_37025);
(statearr_37204[15] = inst_37023);
(statearr_37204[16] = inst_37024);
(statearr_37204[17] = inst_37022);
return statearr_37204;
})();var statearr_37205_37273 = state_37145__$1;(statearr_37205_37273[2] = null);
(statearr_37205_37273[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 25))
{var inst_37083 = (state_37145[12]);var inst_37084 = (state_37145[13]);var inst_37086 = (inst_37084 < inst_37083);var inst_37087 = inst_37086;var state_37145__$1 = state_37145;if(cljs.core.truth_(inst_37087))
{var statearr_37206_37274 = state_37145__$1;(statearr_37206_37274[1] = 27);
} else
{var statearr_37207_37275 = state_37145__$1;(statearr_37207_37275[1] = 28);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 26))
{var inst_37073 = (state_37145[19]);var inst_37131 = (state_37145[2]);var inst_37132 = cljs.core.seq(inst_37073);var state_37145__$1 = (function (){var statearr_37208 = state_37145;(statearr_37208[30] = inst_37131);
return statearr_37208;
})();if(inst_37132)
{var statearr_37209_37276 = state_37145__$1;(statearr_37209_37276[1] = 42);
} else
{var statearr_37210_37277 = state_37145__$1;(statearr_37210_37277[1] = 43);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 27))
{var inst_37082 = (state_37145[11]);var inst_37084 = (state_37145[13]);var inst_37089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37082,inst_37084);var state_37145__$1 = (function (){var statearr_37211 = state_37145;(statearr_37211[7] = inst_37089);
return statearr_37211;
})();var statearr_37212_37278 = state_37145__$1;(statearr_37212_37278[2] = null);
(statearr_37212_37278[1] = 32);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 28))
{var inst_37081 = (state_37145[10]);var inst_37102 = (state_37145[9]);var inst_37102__$1 = cljs.core.seq(inst_37081);var state_37145__$1 = (function (){var statearr_37216 = state_37145;(statearr_37216[9] = inst_37102__$1);
return statearr_37216;
})();if(inst_37102__$1)
{var statearr_37217_37279 = state_37145__$1;(statearr_37217_37279[1] = 33);
} else
{var statearr_37218_37280 = state_37145__$1;(statearr_37218_37280[1] = 34);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 29))
{var inst_37129 = (state_37145[2]);var state_37145__$1 = state_37145;var statearr_37219_37281 = state_37145__$1;(statearr_37219_37281[2] = inst_37129);
(statearr_37219_37281[1] = 26);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 30))
{var inst_37081 = (state_37145[10]);var inst_37082 = (state_37145[11]);var inst_37083 = (state_37145[12]);var inst_37084 = (state_37145[13]);var inst_37098 = (state_37145[2]);var inst_37099 = (inst_37084 + 1);var tmp37213 = inst_37081;var tmp37214 = inst_37082;var tmp37215 = inst_37083;var inst_37081__$1 = tmp37213;var inst_37082__$1 = tmp37214;var inst_37083__$1 = tmp37215;var inst_37084__$1 = inst_37099;var state_37145__$1 = (function (){var statearr_37220 = state_37145;(statearr_37220[10] = inst_37081__$1);
(statearr_37220[11] = inst_37082__$1);
(statearr_37220[12] = inst_37083__$1);
(statearr_37220[13] = inst_37084__$1);
(statearr_37220[31] = inst_37098);
return statearr_37220;
})();var statearr_37221_37282 = state_37145__$1;(statearr_37221_37282[2] = null);
(statearr_37221_37282[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37146 === 31))
{var inst_37089 = (state_37145[7]);var inst_37090 = (state_37145[2]);var inst_37091 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37092 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37089);var state_37145__$1 = (function (){var statearr_37222 = state_37145;(statearr_37222[32] = inst_37091);
(statearr_37222[33] = inst_37090);
return statearr_37222;
})();var statearr_37223_37283 = state_37145__$1;(statearr_37223_37283[2] = inst_37092);
cljs.core.async.impl.ioc_helpers.process_exception(state_37145__$1);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37227[0] = state_machine__5548__auto__);
(statearr_37227[1] = 1);
return statearr_37227;
});
var state_machine__5548__auto____1 = (function (state_37145){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37145);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37228){if((e37228 instanceof Object))
{var ex__5551__auto__ = e37228;var statearr_37229_37284 = state_37145;(statearr_37229_37284[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37145);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37285 = state_37145;
state_37145 = G__37285;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37145){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37230 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37231);
return statearr_37230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj37287 = {};return obj37287;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$558,null,cljs.core.constant$keyword$559,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$560);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$559);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$560,chs);var pauses = pick(cljs.core.constant$keyword$558,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$561,solos,cljs.core.constant$keyword$562,pick(cljs.core.constant$keyword$559,chs),cljs.core.constant$keyword$563,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$558)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37397 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37398){
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
this.meta37398 = meta37398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37397.cljs$lang$type = true;
cljs.core.async.t37397.cljs$lang$ctorStr = "cljs.core.async/t37397";
cljs.core.async.t37397.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37397");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37397.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37399){var self__ = this;
var _37399__$1 = this;return self__.meta37398;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37399,meta37398__$1){var self__ = this;
var _37399__$1 = this;return (new cljs.core.async.t37397(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37398__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37397 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37397(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37398){return (new cljs.core.async.t37397(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37398));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37397(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___37506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37464){var state_val_37465 = (state_37464[1]);if((state_val_37465 === 1))
{var inst_37403 = (state_37464[7]);var inst_37403__$1 = calc_state();var inst_37404 = cljs.core.seq_QMARK_(inst_37403__$1);var state_37464__$1 = (function (){var statearr_37466 = state_37464;(statearr_37466[7] = inst_37403__$1);
return statearr_37466;
})();if(inst_37404)
{var statearr_37467_37507 = state_37464__$1;(statearr_37467_37507[1] = 2);
} else
{var statearr_37468_37508 = state_37464__$1;(statearr_37468_37508[1] = 3);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 2))
{var inst_37403 = (state_37464[7]);var inst_37406 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37403);var state_37464__$1 = state_37464;var statearr_37469_37509 = state_37464__$1;(statearr_37469_37509[2] = inst_37406);
(statearr_37469_37509[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 3))
{var inst_37403 = (state_37464[7]);var state_37464__$1 = state_37464;var statearr_37470_37510 = state_37464__$1;(statearr_37470_37510[2] = inst_37403);
(statearr_37470_37510[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 4))
{var inst_37403 = (state_37464[7]);var inst_37409 = (state_37464[2]);var inst_37410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37409,cljs.core.constant$keyword$563);var inst_37411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37409,cljs.core.constant$keyword$562);var inst_37412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37409,cljs.core.constant$keyword$561);var inst_37413 = inst_37403;var state_37464__$1 = (function (){var statearr_37471 = state_37464;(statearr_37471[8] = inst_37410);
(statearr_37471[9] = inst_37411);
(statearr_37471[10] = inst_37413);
(statearr_37471[11] = inst_37412);
return statearr_37471;
})();var statearr_37472_37511 = state_37464__$1;(statearr_37472_37511[2] = null);
(statearr_37472_37511[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 5))
{var inst_37413 = (state_37464[10]);var inst_37416 = cljs.core.seq_QMARK_(inst_37413);var state_37464__$1 = state_37464;if(inst_37416)
{var statearr_37473_37512 = state_37464__$1;(statearr_37473_37512[1] = 7);
} else
{var statearr_37474_37513 = state_37464__$1;(statearr_37474_37513[1] = 8);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 6))
{var inst_37462 = (state_37464[2]);var state_37464__$1 = state_37464;return cljs.core.async.impl.ioc_helpers.return_chan(state_37464__$1,inst_37462);
} else
{if((state_val_37465 === 7))
{var inst_37413 = (state_37464[10]);var inst_37418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37413);var state_37464__$1 = state_37464;var statearr_37475_37514 = state_37464__$1;(statearr_37475_37514[2] = inst_37418);
(statearr_37475_37514[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 8))
{var inst_37413 = (state_37464[10]);var state_37464__$1 = state_37464;var statearr_37476_37515 = state_37464__$1;(statearr_37476_37515[2] = inst_37413);
(statearr_37476_37515[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 9))
{var inst_37421 = (state_37464[12]);var inst_37421__$1 = (state_37464[2]);var inst_37422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37421__$1,cljs.core.constant$keyword$563);var inst_37423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37421__$1,cljs.core.constant$keyword$562);var inst_37424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37421__$1,cljs.core.constant$keyword$561);var state_37464__$1 = (function (){var statearr_37477 = state_37464;(statearr_37477[13] = inst_37424);
(statearr_37477[14] = inst_37423);
(statearr_37477[12] = inst_37421__$1);
return statearr_37477;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37464__$1,10,inst_37422);
} else
{if((state_val_37465 === 10))
{var inst_37428 = (state_37464[15]);var inst_37429 = (state_37464[16]);var inst_37427 = (state_37464[2]);var inst_37428__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37427,0,null);var inst_37429__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37427,1,null);var inst_37430 = (inst_37428__$1 == null);var inst_37431 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37429__$1,change);var inst_37432 = (inst_37430) || (inst_37431);var state_37464__$1 = (function (){var statearr_37478 = state_37464;(statearr_37478[15] = inst_37428__$1);
(statearr_37478[16] = inst_37429__$1);
return statearr_37478;
})();if(cljs.core.truth_(inst_37432))
{var statearr_37479_37516 = state_37464__$1;(statearr_37479_37516[1] = 11);
} else
{var statearr_37480_37517 = state_37464__$1;(statearr_37480_37517[1] = 12);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 11))
{var inst_37428 = (state_37464[15]);var inst_37434 = (inst_37428 == null);var state_37464__$1 = state_37464;if(cljs.core.truth_(inst_37434))
{var statearr_37481_37518 = state_37464__$1;(statearr_37481_37518[1] = 14);
} else
{var statearr_37482_37519 = state_37464__$1;(statearr_37482_37519[1] = 15);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 12))
{var inst_37443 = (state_37464[17]);var inst_37429 = (state_37464[16]);var inst_37424 = (state_37464[13]);var inst_37443__$1 = (inst_37424.cljs$core$IFn$_invoke$arity$1 ? inst_37424.cljs$core$IFn$_invoke$arity$1(inst_37429) : inst_37424.call(null,inst_37429));var state_37464__$1 = (function (){var statearr_37483 = state_37464;(statearr_37483[17] = inst_37443__$1);
return statearr_37483;
})();if(cljs.core.truth_(inst_37443__$1))
{var statearr_37484_37520 = state_37464__$1;(statearr_37484_37520[1] = 17);
} else
{var statearr_37485_37521 = state_37464__$1;(statearr_37485_37521[1] = 18);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 13))
{var inst_37460 = (state_37464[2]);var state_37464__$1 = state_37464;var statearr_37486_37522 = state_37464__$1;(statearr_37486_37522[2] = inst_37460);
(statearr_37486_37522[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 14))
{var inst_37429 = (state_37464[16]);var inst_37436 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37429);var state_37464__$1 = state_37464;var statearr_37487_37523 = state_37464__$1;(statearr_37487_37523[2] = inst_37436);
(statearr_37487_37523[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 15))
{var state_37464__$1 = state_37464;var statearr_37488_37524 = state_37464__$1;(statearr_37488_37524[2] = null);
(statearr_37488_37524[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 16))
{var inst_37439 = (state_37464[2]);var inst_37440 = calc_state();var inst_37413 = inst_37440;var state_37464__$1 = (function (){var statearr_37489 = state_37464;(statearr_37489[18] = inst_37439);
(statearr_37489[10] = inst_37413);
return statearr_37489;
})();var statearr_37490_37525 = state_37464__$1;(statearr_37490_37525[2] = null);
(statearr_37490_37525[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 17))
{var inst_37443 = (state_37464[17]);var state_37464__$1 = state_37464;var statearr_37491_37526 = state_37464__$1;(statearr_37491_37526[2] = inst_37443);
(statearr_37491_37526[1] = 19);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 18))
{var inst_37429 = (state_37464[16]);var inst_37424 = (state_37464[13]);var inst_37423 = (state_37464[14]);var inst_37446 = cljs.core.empty_QMARK_(inst_37424);var inst_37447 = (inst_37423.cljs$core$IFn$_invoke$arity$1 ? inst_37423.cljs$core$IFn$_invoke$arity$1(inst_37429) : inst_37423.call(null,inst_37429));var inst_37448 = cljs.core.not(inst_37447);var inst_37449 = (inst_37446) && (inst_37448);var state_37464__$1 = state_37464;var statearr_37492_37527 = state_37464__$1;(statearr_37492_37527[2] = inst_37449);
(statearr_37492_37527[1] = 19);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 19))
{var inst_37451 = (state_37464[2]);var state_37464__$1 = state_37464;if(cljs.core.truth_(inst_37451))
{var statearr_37493_37528 = state_37464__$1;(statearr_37493_37528[1] = 20);
} else
{var statearr_37494_37529 = state_37464__$1;(statearr_37494_37529[1] = 21);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 20))
{var inst_37428 = (state_37464[15]);var state_37464__$1 = state_37464;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37464__$1,23,out,inst_37428);
} else
{if((state_val_37465 === 21))
{var state_37464__$1 = state_37464;var statearr_37495_37530 = state_37464__$1;(statearr_37495_37530[2] = null);
(statearr_37495_37530[1] = 22);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 22))
{var inst_37421 = (state_37464[12]);var inst_37457 = (state_37464[2]);var inst_37413 = inst_37421;var state_37464__$1 = (function (){var statearr_37496 = state_37464;(statearr_37496[10] = inst_37413);
(statearr_37496[19] = inst_37457);
return statearr_37496;
})();var statearr_37497_37531 = state_37464__$1;(statearr_37497_37531[2] = null);
(statearr_37497_37531[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37465 === 23))
{var inst_37454 = (state_37464[2]);var state_37464__$1 = state_37464;var statearr_37498_37532 = state_37464__$1;(statearr_37498_37532[2] = inst_37454);
(statearr_37498_37532[1] = 22);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37502[0] = state_machine__5548__auto__);
(statearr_37502[1] = 1);
return statearr_37502;
});
var state_machine__5548__auto____1 = (function (state_37464){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37464);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37503){if((e37503 instanceof Object))
{var ex__5551__auto__ = e37503;var statearr_37504_37533 = state_37464;(statearr_37504_37533[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37464);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37534 = state_37464;
state_37464 = G__37534;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37464){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37505 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37506);
return statearr_37505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj37536 = {};return obj37536;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3441__auto__,mults){
return (function (p1__37537_SHARP_){if(cljs.core.truth_((p1__37537_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37537_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37537_SHARP_.call(null,topic))))
{return p1__37537_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37537_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37662 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37663){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37663 = meta37663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37662.cljs$lang$type = true;
cljs.core.async.t37662.cljs$lang$ctorStr = "cljs.core.async/t37662";
cljs.core.async.t37662.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37662");
});})(mults,ensure_mult))
;
cljs.core.async.t37662.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37662.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37662.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37662.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37662.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37662.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37664){var self__ = this;
var _37664__$1 = this;return self__.meta37663;
});})(mults,ensure_mult))
;
cljs.core.async.t37662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37664,meta37663__$1){var self__ = this;
var _37664__$1 = this;return (new cljs.core.async.t37662(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37663__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37662 = ((function (mults,ensure_mult){
return (function __GT_t37662(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37663){return (new cljs.core.async.t37662(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37663));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37662(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___37786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37738){var state_val_37739 = (state_37738[1]);if((state_val_37739 === 1))
{var state_37738__$1 = state_37738;var statearr_37740_37787 = state_37738__$1;(statearr_37740_37787[2] = null);
(statearr_37740_37787[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 2))
{var state_37738__$1 = state_37738;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37738__$1,4,ch);
} else
{if((state_val_37739 === 3))
{var inst_37736 = (state_37738[2]);var state_37738__$1 = state_37738;return cljs.core.async.impl.ioc_helpers.return_chan(state_37738__$1,inst_37736);
} else
{if((state_val_37739 === 4))
{var inst_37667 = (state_37738[7]);var inst_37667__$1 = (state_37738[2]);var inst_37668 = (inst_37667__$1 == null);var state_37738__$1 = (function (){var statearr_37741 = state_37738;(statearr_37741[7] = inst_37667__$1);
return statearr_37741;
})();if(cljs.core.truth_(inst_37668))
{var statearr_37742_37788 = state_37738__$1;(statearr_37742_37788[1] = 5);
} else
{var statearr_37743_37789 = state_37738__$1;(statearr_37743_37789[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 5))
{var inst_37674 = cljs.core.deref(mults);var inst_37675 = cljs.core.vals(inst_37674);var inst_37676 = cljs.core.seq(inst_37675);var inst_37677 = inst_37676;var inst_37678 = null;var inst_37679 = 0;var inst_37680 = 0;var state_37738__$1 = (function (){var statearr_37744 = state_37738;(statearr_37744[8] = inst_37680);
(statearr_37744[9] = inst_37679);
(statearr_37744[10] = inst_37678);
(statearr_37744[11] = inst_37677);
return statearr_37744;
})();var statearr_37745_37790 = state_37738__$1;(statearr_37745_37790[2] = null);
(statearr_37745_37790[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 6))
{var inst_37715 = (state_37738[12]);var inst_37667 = (state_37738[7]);var inst_37717 = (state_37738[13]);var inst_37715__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37667) : topic_fn.call(null,inst_37667));var inst_37716 = cljs.core.deref(mults);var inst_37717__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37716,inst_37715__$1);var state_37738__$1 = (function (){var statearr_37746 = state_37738;(statearr_37746[12] = inst_37715__$1);
(statearr_37746[13] = inst_37717__$1);
return statearr_37746;
})();if(cljs.core.truth_(inst_37717__$1))
{var statearr_37747_37791 = state_37738__$1;(statearr_37747_37791[1] = 19);
} else
{var statearr_37748_37792 = state_37738__$1;(statearr_37748_37792[1] = 20);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 7))
{var inst_37734 = (state_37738[2]);var state_37738__$1 = state_37738;var statearr_37749_37793 = state_37738__$1;(statearr_37749_37793[2] = inst_37734);
(statearr_37749_37793[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 8))
{var inst_37680 = (state_37738[8]);var inst_37679 = (state_37738[9]);var inst_37682 = (inst_37680 < inst_37679);var inst_37683 = inst_37682;var state_37738__$1 = state_37738;if(cljs.core.truth_(inst_37683))
{var statearr_37753_37794 = state_37738__$1;(statearr_37753_37794[1] = 10);
} else
{var statearr_37754_37795 = state_37738__$1;(statearr_37754_37795[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 9))
{var inst_37713 = (state_37738[2]);var state_37738__$1 = state_37738;var statearr_37755_37796 = state_37738__$1;(statearr_37755_37796[2] = inst_37713);
(statearr_37755_37796[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 10))
{var inst_37680 = (state_37738[8]);var inst_37679 = (state_37738[9]);var inst_37678 = (state_37738[10]);var inst_37677 = (state_37738[11]);var inst_37685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37678,inst_37680);var inst_37686 = cljs.core.async.muxch_STAR_(inst_37685);var inst_37687 = cljs.core.async.close_BANG_(inst_37686);var inst_37688 = (inst_37680 + 1);var tmp37750 = inst_37679;var tmp37751 = inst_37678;var tmp37752 = inst_37677;var inst_37677__$1 = tmp37752;var inst_37678__$1 = tmp37751;var inst_37679__$1 = tmp37750;var inst_37680__$1 = inst_37688;var state_37738__$1 = (function (){var statearr_37756 = state_37738;(statearr_37756[14] = inst_37687);
(statearr_37756[8] = inst_37680__$1);
(statearr_37756[9] = inst_37679__$1);
(statearr_37756[10] = inst_37678__$1);
(statearr_37756[11] = inst_37677__$1);
return statearr_37756;
})();var statearr_37757_37797 = state_37738__$1;(statearr_37757_37797[2] = null);
(statearr_37757_37797[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 11))
{var inst_37677 = (state_37738[11]);var inst_37691 = (state_37738[15]);var inst_37691__$1 = cljs.core.seq(inst_37677);var state_37738__$1 = (function (){var statearr_37758 = state_37738;(statearr_37758[15] = inst_37691__$1);
return statearr_37758;
})();if(inst_37691__$1)
{var statearr_37759_37798 = state_37738__$1;(statearr_37759_37798[1] = 13);
} else
{var statearr_37760_37799 = state_37738__$1;(statearr_37760_37799[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 12))
{var inst_37711 = (state_37738[2]);var state_37738__$1 = state_37738;var statearr_37761_37800 = state_37738__$1;(statearr_37761_37800[2] = inst_37711);
(statearr_37761_37800[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 13))
{var inst_37691 = (state_37738[15]);var inst_37693 = cljs.core.chunked_seq_QMARK_(inst_37691);var state_37738__$1 = state_37738;if(inst_37693)
{var statearr_37762_37801 = state_37738__$1;(statearr_37762_37801[1] = 16);
} else
{var statearr_37763_37802 = state_37738__$1;(statearr_37763_37802[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 14))
{var state_37738__$1 = state_37738;var statearr_37764_37803 = state_37738__$1;(statearr_37764_37803[2] = null);
(statearr_37764_37803[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 15))
{var inst_37709 = (state_37738[2]);var state_37738__$1 = state_37738;var statearr_37765_37804 = state_37738__$1;(statearr_37765_37804[2] = inst_37709);
(statearr_37765_37804[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 16))
{var inst_37691 = (state_37738[15]);var inst_37695 = cljs.core.chunk_first(inst_37691);var inst_37696 = cljs.core.chunk_rest(inst_37691);var inst_37697 = cljs.core.count(inst_37695);var inst_37677 = inst_37696;var inst_37678 = inst_37695;var inst_37679 = inst_37697;var inst_37680 = 0;var state_37738__$1 = (function (){var statearr_37766 = state_37738;(statearr_37766[8] = inst_37680);
(statearr_37766[9] = inst_37679);
(statearr_37766[10] = inst_37678);
(statearr_37766[11] = inst_37677);
return statearr_37766;
})();var statearr_37767_37805 = state_37738__$1;(statearr_37767_37805[2] = null);
(statearr_37767_37805[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 17))
{var inst_37691 = (state_37738[15]);var inst_37700 = cljs.core.first(inst_37691);var inst_37701 = cljs.core.async.muxch_STAR_(inst_37700);var inst_37702 = cljs.core.async.close_BANG_(inst_37701);var inst_37703 = cljs.core.next(inst_37691);var inst_37677 = inst_37703;var inst_37678 = null;var inst_37679 = 0;var inst_37680 = 0;var state_37738__$1 = (function (){var statearr_37768 = state_37738;(statearr_37768[16] = inst_37702);
(statearr_37768[8] = inst_37680);
(statearr_37768[9] = inst_37679);
(statearr_37768[10] = inst_37678);
(statearr_37768[11] = inst_37677);
return statearr_37768;
})();var statearr_37769_37806 = state_37738__$1;(statearr_37769_37806[2] = null);
(statearr_37769_37806[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 18))
{var inst_37706 = (state_37738[2]);var state_37738__$1 = state_37738;var statearr_37770_37807 = state_37738__$1;(statearr_37770_37807[2] = inst_37706);
(statearr_37770_37807[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 19))
{var state_37738__$1 = state_37738;var statearr_37771_37808 = state_37738__$1;(statearr_37771_37808[2] = null);
(statearr_37771_37808[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 20))
{var state_37738__$1 = state_37738;var statearr_37772_37809 = state_37738__$1;(statearr_37772_37809[2] = null);
(statearr_37772_37809[1] = 21);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 21))
{var inst_37731 = (state_37738[2]);var state_37738__$1 = (function (){var statearr_37773 = state_37738;(statearr_37773[17] = inst_37731);
return statearr_37773;
})();var statearr_37774_37810 = state_37738__$1;(statearr_37774_37810[2] = null);
(statearr_37774_37810[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 22))
{var inst_37728 = (state_37738[2]);var state_37738__$1 = state_37738;var statearr_37775_37811 = state_37738__$1;(statearr_37775_37811[2] = inst_37728);
(statearr_37775_37811[1] = 21);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 23))
{var inst_37715 = (state_37738[12]);var inst_37719 = (state_37738[2]);var inst_37720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37715);var state_37738__$1 = (function (){var statearr_37776 = state_37738;(statearr_37776[18] = inst_37719);
return statearr_37776;
})();var statearr_37777_37812 = state_37738__$1;(statearr_37777_37812[2] = inst_37720);
cljs.core.async.impl.ioc_helpers.process_exception(state_37738__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37739 === 24))
{var inst_37667 = (state_37738[7]);var inst_37717 = (state_37738[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37738,23,Object,null,22);var inst_37724 = cljs.core.async.muxch_STAR_(inst_37717);var state_37738__$1 = state_37738;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37738__$1,25,inst_37724,inst_37667);
} else
{if((state_val_37739 === 25))
{var inst_37726 = (state_37738[2]);var state_37738__$1 = state_37738;var statearr_37778_37813 = state_37738__$1;(statearr_37778_37813[2] = inst_37726);
cljs.core.async.impl.ioc_helpers.process_exception(state_37738__$1);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37782[0] = state_machine__5548__auto__);
(statearr_37782[1] = 1);
return statearr_37782;
});
var state_machine__5548__auto____1 = (function (state_37738){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37738);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37783){if((e37783 instanceof Object))
{var ex__5551__auto__ = e37783;var statearr_37784_37814 = state_37738;(statearr_37784_37814[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37738);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37815 = state_37738;
state_37738 = G__37815;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37738){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37785 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37786);
return statearr_37785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5562__auto___37952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37922){var state_val_37923 = (state_37922[1]);if((state_val_37923 === 1))
{var state_37922__$1 = state_37922;var statearr_37924_37953 = state_37922__$1;(statearr_37924_37953[2] = null);
(statearr_37924_37953[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 2))
{var inst_37885 = cljs.core.reset_BANG_(dctr,cnt);var inst_37886 = 0;var state_37922__$1 = (function (){var statearr_37925 = state_37922;(statearr_37925[7] = inst_37886);
(statearr_37925[8] = inst_37885);
return statearr_37925;
})();var statearr_37926_37954 = state_37922__$1;(statearr_37926_37954[2] = null);
(statearr_37926_37954[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 3))
{var inst_37920 = (state_37922[2]);var state_37922__$1 = state_37922;return cljs.core.async.impl.ioc_helpers.return_chan(state_37922__$1,inst_37920);
} else
{if((state_val_37923 === 4))
{var inst_37886 = (state_37922[7]);var inst_37888 = (inst_37886 < cnt);var state_37922__$1 = state_37922;if(cljs.core.truth_(inst_37888))
{var statearr_37927_37955 = state_37922__$1;(statearr_37927_37955[1] = 6);
} else
{var statearr_37928_37956 = state_37922__$1;(statearr_37928_37956[1] = 7);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 5))
{var inst_37906 = (state_37922[2]);var state_37922__$1 = (function (){var statearr_37929 = state_37922;(statearr_37929[9] = inst_37906);
return statearr_37929;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37922__$1,12,dchan);
} else
{if((state_val_37923 === 6))
{var state_37922__$1 = state_37922;var statearr_37930_37957 = state_37922__$1;(statearr_37930_37957[2] = null);
(statearr_37930_37957[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 7))
{var state_37922__$1 = state_37922;var statearr_37931_37958 = state_37922__$1;(statearr_37931_37958[2] = null);
(statearr_37931_37958[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 8))
{var inst_37904 = (state_37922[2]);var state_37922__$1 = state_37922;var statearr_37932_37959 = state_37922__$1;(statearr_37932_37959[2] = inst_37904);
(statearr_37932_37959[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 9))
{var inst_37886 = (state_37922[7]);var inst_37899 = (state_37922[2]);var inst_37900 = (inst_37886 + 1);var inst_37886__$1 = inst_37900;var state_37922__$1 = (function (){var statearr_37933 = state_37922;(statearr_37933[7] = inst_37886__$1);
(statearr_37933[10] = inst_37899);
return statearr_37933;
})();var statearr_37934_37960 = state_37922__$1;(statearr_37934_37960[2] = null);
(statearr_37934_37960[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 10))
{var inst_37890 = (state_37922[2]);var inst_37891 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_37922__$1 = (function (){var statearr_37935 = state_37922;(statearr_37935[11] = inst_37890);
return statearr_37935;
})();var statearr_37936_37961 = state_37922__$1;(statearr_37936_37961[2] = inst_37891);
cljs.core.async.impl.ioc_helpers.process_exception(state_37922__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 11))
{var inst_37886 = (state_37922[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37922,10,Object,null,9);var inst_37895 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37886) : chs__$1.call(null,inst_37886));var inst_37896 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37886) : done.call(null,inst_37886));var inst_37897 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37895,inst_37896);var state_37922__$1 = state_37922;var statearr_37937_37962 = state_37922__$1;(statearr_37937_37962[2] = inst_37897);
cljs.core.async.impl.ioc_helpers.process_exception(state_37922__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 12))
{var inst_37908 = (state_37922[12]);var inst_37908__$1 = (state_37922[2]);var inst_37909 = cljs.core.some(cljs.core.nil_QMARK_,inst_37908__$1);var state_37922__$1 = (function (){var statearr_37938 = state_37922;(statearr_37938[12] = inst_37908__$1);
return statearr_37938;
})();if(cljs.core.truth_(inst_37909))
{var statearr_37939_37963 = state_37922__$1;(statearr_37939_37963[1] = 13);
} else
{var statearr_37940_37964 = state_37922__$1;(statearr_37940_37964[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 13))
{var inst_37911 = cljs.core.async.close_BANG_(out);var state_37922__$1 = state_37922;var statearr_37941_37965 = state_37922__$1;(statearr_37941_37965[2] = inst_37911);
(statearr_37941_37965[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 14))
{var inst_37908 = (state_37922[12]);var inst_37913 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37908);var state_37922__$1 = state_37922;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37922__$1,16,out,inst_37913);
} else
{if((state_val_37923 === 15))
{var inst_37918 = (state_37922[2]);var state_37922__$1 = state_37922;var statearr_37942_37966 = state_37922__$1;(statearr_37942_37966[2] = inst_37918);
(statearr_37942_37966[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37923 === 16))
{var inst_37915 = (state_37922[2]);var state_37922__$1 = (function (){var statearr_37943 = state_37922;(statearr_37943[13] = inst_37915);
return statearr_37943;
})();var statearr_37944_37967 = state_37922__$1;(statearr_37944_37967[2] = null);
(statearr_37944_37967[1] = 2);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37948[0] = state_machine__5548__auto__);
(statearr_37948[1] = 1);
return statearr_37948;
});
var state_machine__5548__auto____1 = (function (state_37922){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37922);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37949){if((e37949 instanceof Object))
{var ex__5551__auto__ = e37949;var statearr_37950_37968 = state_37922;(statearr_37950_37968[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37922);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37969 = state_37922;
state_37922 = G__37969;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37922){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37951 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37952);
return statearr_37951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38053){var state_val_38054 = (state_38053[1]);if((state_val_38054 === 1))
{var inst_38024 = cljs.core.vec(chs);var inst_38025 = inst_38024;var state_38053__$1 = (function (){var statearr_38055 = state_38053;(statearr_38055[7] = inst_38025);
return statearr_38055;
})();var statearr_38056_38078 = state_38053__$1;(statearr_38056_38078[2] = null);
(statearr_38056_38078[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38054 === 2))
{var inst_38025 = (state_38053[7]);var inst_38027 = cljs.core.count(inst_38025);var inst_38028 = (inst_38027 > 0);var state_38053__$1 = state_38053;if(cljs.core.truth_(inst_38028))
{var statearr_38057_38079 = state_38053__$1;(statearr_38057_38079[1] = 4);
} else
{var statearr_38058_38080 = state_38053__$1;(statearr_38058_38080[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38054 === 3))
{var inst_38051 = (state_38053[2]);var state_38053__$1 = state_38053;return cljs.core.async.impl.ioc_helpers.return_chan(state_38053__$1,inst_38051);
} else
{if((state_val_38054 === 4))
{var inst_38025 = (state_38053[7]);var state_38053__$1 = state_38053;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38053__$1,7,inst_38025);
} else
{if((state_val_38054 === 5))
{var inst_38047 = cljs.core.async.close_BANG_(out);var state_38053__$1 = state_38053;var statearr_38059_38081 = state_38053__$1;(statearr_38059_38081[2] = inst_38047);
(statearr_38059_38081[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38054 === 6))
{var inst_38049 = (state_38053[2]);var state_38053__$1 = state_38053;var statearr_38060_38082 = state_38053__$1;(statearr_38060_38082[2] = inst_38049);
(statearr_38060_38082[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38054 === 7))
{var inst_38032 = (state_38053[8]);var inst_38033 = (state_38053[9]);var inst_38032__$1 = (state_38053[2]);var inst_38033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38032__$1,0,null);var inst_38034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38032__$1,1,null);var inst_38035 = (inst_38033__$1 == null);var state_38053__$1 = (function (){var statearr_38061 = state_38053;(statearr_38061[8] = inst_38032__$1);
(statearr_38061[10] = inst_38034);
(statearr_38061[9] = inst_38033__$1);
return statearr_38061;
})();if(cljs.core.truth_(inst_38035))
{var statearr_38062_38083 = state_38053__$1;(statearr_38062_38083[1] = 8);
} else
{var statearr_38063_38084 = state_38053__$1;(statearr_38063_38084[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38054 === 8))
{var inst_38025 = (state_38053[7]);var inst_38032 = (state_38053[8]);var inst_38034 = (state_38053[10]);var inst_38033 = (state_38053[9]);var inst_38037 = (function (){var c = inst_38034;var v = inst_38033;var vec__38030 = inst_38032;var cs = inst_38025;return ((function (c,v,vec__38030,cs,inst_38025,inst_38032,inst_38034,inst_38033,state_val_38054){
return (function (p1__37970_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37970_SHARP_);
});
;})(c,v,vec__38030,cs,inst_38025,inst_38032,inst_38034,inst_38033,state_val_38054))
})();var inst_38038 = cljs.core.filterv(inst_38037,inst_38025);var inst_38025__$1 = inst_38038;var state_38053__$1 = (function (){var statearr_38064 = state_38053;(statearr_38064[7] = inst_38025__$1);
return statearr_38064;
})();var statearr_38065_38085 = state_38053__$1;(statearr_38065_38085[2] = null);
(statearr_38065_38085[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38054 === 9))
{var inst_38033 = (state_38053[9]);var state_38053__$1 = state_38053;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38053__$1,11,out,inst_38033);
} else
{if((state_val_38054 === 10))
{var inst_38045 = (state_38053[2]);var state_38053__$1 = state_38053;var statearr_38067_38086 = state_38053__$1;(statearr_38067_38086[2] = inst_38045);
(statearr_38067_38086[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38054 === 11))
{var inst_38025 = (state_38053[7]);var inst_38042 = (state_38053[2]);var tmp38066 = inst_38025;var inst_38025__$1 = tmp38066;var state_38053__$1 = (function (){var statearr_38068 = state_38053;(statearr_38068[11] = inst_38042);
(statearr_38068[7] = inst_38025__$1);
return statearr_38068;
})();var statearr_38069_38087 = state_38053__$1;(statearr_38069_38087[2] = null);
(statearr_38069_38087[1] = 2);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38073 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38073[0] = state_machine__5548__auto__);
(statearr_38073[1] = 1);
return statearr_38073;
});
var state_machine__5548__auto____1 = (function (state_38053){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38053);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38074){if((e38074 instanceof Object))
{var ex__5551__auto__ = e38074;var statearr_38075_38088 = state_38053;(statearr_38075_38088[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38053);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38089 = state_38053;
state_38053 = G__38089;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38053){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38076 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38077);
return statearr_38076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38159){var state_val_38160 = (state_38159[1]);if((state_val_38160 === 1))
{var inst_38136 = 0;var state_38159__$1 = (function (){var statearr_38161 = state_38159;(statearr_38161[7] = inst_38136);
return statearr_38161;
})();var statearr_38162_38183 = state_38159__$1;(statearr_38162_38183[2] = null);
(statearr_38162_38183[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38160 === 2))
{var inst_38136 = (state_38159[7]);var inst_38138 = (inst_38136 < n);var state_38159__$1 = state_38159;if(cljs.core.truth_(inst_38138))
{var statearr_38163_38184 = state_38159__$1;(statearr_38163_38184[1] = 4);
} else
{var statearr_38164_38185 = state_38159__$1;(statearr_38164_38185[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38160 === 3))
{var inst_38156 = (state_38159[2]);var inst_38157 = cljs.core.async.close_BANG_(out);var state_38159__$1 = (function (){var statearr_38165 = state_38159;(statearr_38165[8] = inst_38156);
return statearr_38165;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38159__$1,inst_38157);
} else
{if((state_val_38160 === 4))
{var state_38159__$1 = state_38159;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38159__$1,7,ch);
} else
{if((state_val_38160 === 5))
{var state_38159__$1 = state_38159;var statearr_38166_38186 = state_38159__$1;(statearr_38166_38186[2] = null);
(statearr_38166_38186[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38160 === 6))
{var inst_38154 = (state_38159[2]);var state_38159__$1 = state_38159;var statearr_38167_38187 = state_38159__$1;(statearr_38167_38187[2] = inst_38154);
(statearr_38167_38187[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38160 === 7))
{var inst_38141 = (state_38159[9]);var inst_38141__$1 = (state_38159[2]);var inst_38142 = (inst_38141__$1 == null);var inst_38143 = cljs.core.not(inst_38142);var state_38159__$1 = (function (){var statearr_38168 = state_38159;(statearr_38168[9] = inst_38141__$1);
return statearr_38168;
})();if(inst_38143)
{var statearr_38169_38188 = state_38159__$1;(statearr_38169_38188[1] = 8);
} else
{var statearr_38170_38189 = state_38159__$1;(statearr_38170_38189[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38160 === 8))
{var inst_38141 = (state_38159[9]);var state_38159__$1 = state_38159;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38159__$1,11,out,inst_38141);
} else
{if((state_val_38160 === 9))
{var state_38159__$1 = state_38159;var statearr_38171_38190 = state_38159__$1;(statearr_38171_38190[2] = null);
(statearr_38171_38190[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38160 === 10))
{var inst_38151 = (state_38159[2]);var state_38159__$1 = state_38159;var statearr_38172_38191 = state_38159__$1;(statearr_38172_38191[2] = inst_38151);
(statearr_38172_38191[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38160 === 11))
{var inst_38136 = (state_38159[7]);var inst_38146 = (state_38159[2]);var inst_38147 = (inst_38136 + 1);var inst_38136__$1 = inst_38147;var state_38159__$1 = (function (){var statearr_38173 = state_38159;(statearr_38173[7] = inst_38136__$1);
(statearr_38173[10] = inst_38146);
return statearr_38173;
})();var statearr_38174_38192 = state_38159__$1;(statearr_38174_38192[2] = null);
(statearr_38174_38192[1] = 2);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38178 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38178[0] = state_machine__5548__auto__);
(statearr_38178[1] = 1);
return statearr_38178;
});
var state_machine__5548__auto____1 = (function (state_38159){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38159);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38179){if((e38179 instanceof Object))
{var ex__5551__auto__ = e38179;var statearr_38180_38193 = state_38159;(statearr_38180_38193[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38159);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38194 = state_38159;
state_38159 = G__38194;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38159){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38181 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38182);
return statearr_38181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38266){var state_val_38267 = (state_38266[1]);if((state_val_38267 === 1))
{var inst_38243 = null;var state_38266__$1 = (function (){var statearr_38268 = state_38266;(statearr_38268[7] = inst_38243);
return statearr_38268;
})();var statearr_38269_38292 = state_38266__$1;(statearr_38269_38292[2] = null);
(statearr_38269_38292[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38267 === 2))
{var state_38266__$1 = state_38266;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38266__$1,4,ch);
} else
{if((state_val_38267 === 3))
{var inst_38263 = (state_38266[2]);var inst_38264 = cljs.core.async.close_BANG_(out);var state_38266__$1 = (function (){var statearr_38270 = state_38266;(statearr_38270[8] = inst_38263);
return statearr_38270;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38266__$1,inst_38264);
} else
{if((state_val_38267 === 4))
{var inst_38246 = (state_38266[9]);var inst_38246__$1 = (state_38266[2]);var inst_38247 = (inst_38246__$1 == null);var inst_38248 = cljs.core.not(inst_38247);var state_38266__$1 = (function (){var statearr_38271 = state_38266;(statearr_38271[9] = inst_38246__$1);
return statearr_38271;
})();if(inst_38248)
{var statearr_38272_38293 = state_38266__$1;(statearr_38272_38293[1] = 5);
} else
{var statearr_38273_38294 = state_38266__$1;(statearr_38273_38294[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38267 === 5))
{var inst_38246 = (state_38266[9]);var inst_38243 = (state_38266[7]);var inst_38250 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38246,inst_38243);var state_38266__$1 = state_38266;if(inst_38250)
{var statearr_38274_38295 = state_38266__$1;(statearr_38274_38295[1] = 8);
} else
{var statearr_38275_38296 = state_38266__$1;(statearr_38275_38296[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38267 === 6))
{var state_38266__$1 = state_38266;var statearr_38277_38297 = state_38266__$1;(statearr_38277_38297[2] = null);
(statearr_38277_38297[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38267 === 7))
{var inst_38261 = (state_38266[2]);var state_38266__$1 = state_38266;var statearr_38278_38298 = state_38266__$1;(statearr_38278_38298[2] = inst_38261);
(statearr_38278_38298[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38267 === 8))
{var inst_38243 = (state_38266[7]);var tmp38276 = inst_38243;var inst_38243__$1 = tmp38276;var state_38266__$1 = (function (){var statearr_38279 = state_38266;(statearr_38279[7] = inst_38243__$1);
return statearr_38279;
})();var statearr_38280_38299 = state_38266__$1;(statearr_38280_38299[2] = null);
(statearr_38280_38299[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38267 === 9))
{var inst_38246 = (state_38266[9]);var state_38266__$1 = state_38266;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38266__$1,11,out,inst_38246);
} else
{if((state_val_38267 === 10))
{var inst_38258 = (state_38266[2]);var state_38266__$1 = state_38266;var statearr_38281_38300 = state_38266__$1;(statearr_38281_38300[2] = inst_38258);
(statearr_38281_38300[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38267 === 11))
{var inst_38246 = (state_38266[9]);var inst_38255 = (state_38266[2]);var inst_38243 = inst_38246;var state_38266__$1 = (function (){var statearr_38282 = state_38266;(statearr_38282[7] = inst_38243);
(statearr_38282[10] = inst_38255);
return statearr_38282;
})();var statearr_38283_38301 = state_38266__$1;(statearr_38283_38301[2] = null);
(statearr_38283_38301[1] = 2);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38287 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38287[0] = state_machine__5548__auto__);
(statearr_38287[1] = 1);
return statearr_38287;
});
var state_machine__5548__auto____1 = (function (state_38266){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38266);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38288){if((e38288 instanceof Object))
{var ex__5551__auto__ = e38288;var statearr_38289_38302 = state_38266;(statearr_38289_38302[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38266);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38303 = state_38266;
state_38266 = G__38303;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38266){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38290 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38291);
return statearr_38290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38408){var state_val_38409 = (state_38408[1]);if((state_val_38409 === 1))
{var inst_38371 = (new Array(n));var inst_38372 = inst_38371;var inst_38373 = 0;var state_38408__$1 = (function (){var statearr_38410 = state_38408;(statearr_38410[7] = inst_38373);
(statearr_38410[8] = inst_38372);
return statearr_38410;
})();var statearr_38411_38439 = state_38408__$1;(statearr_38411_38439[2] = null);
(statearr_38411_38439[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 2))
{var state_38408__$1 = state_38408;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38408__$1,4,ch);
} else
{if((state_val_38409 === 3))
{var inst_38406 = (state_38408[2]);var state_38408__$1 = state_38408;return cljs.core.async.impl.ioc_helpers.return_chan(state_38408__$1,inst_38406);
} else
{if((state_val_38409 === 4))
{var inst_38376 = (state_38408[9]);var inst_38376__$1 = (state_38408[2]);var inst_38377 = (inst_38376__$1 == null);var inst_38378 = cljs.core.not(inst_38377);var state_38408__$1 = (function (){var statearr_38412 = state_38408;(statearr_38412[9] = inst_38376__$1);
return statearr_38412;
})();if(inst_38378)
{var statearr_38413_38440 = state_38408__$1;(statearr_38413_38440[1] = 5);
} else
{var statearr_38414_38441 = state_38408__$1;(statearr_38414_38441[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 5))
{var inst_38381 = (state_38408[10]);var inst_38376 = (state_38408[9]);var inst_38373 = (state_38408[7]);var inst_38372 = (state_38408[8]);var inst_38380 = (inst_38372[inst_38373] = inst_38376);var inst_38381__$1 = (inst_38373 + 1);var inst_38382 = (inst_38381__$1 < n);var state_38408__$1 = (function (){var statearr_38415 = state_38408;(statearr_38415[11] = inst_38380);
(statearr_38415[10] = inst_38381__$1);
return statearr_38415;
})();if(cljs.core.truth_(inst_38382))
{var statearr_38416_38442 = state_38408__$1;(statearr_38416_38442[1] = 8);
} else
{var statearr_38417_38443 = state_38408__$1;(statearr_38417_38443[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 6))
{var inst_38373 = (state_38408[7]);var inst_38394 = (inst_38373 > 0);var state_38408__$1 = state_38408;if(cljs.core.truth_(inst_38394))
{var statearr_38419_38444 = state_38408__$1;(statearr_38419_38444[1] = 12);
} else
{var statearr_38420_38445 = state_38408__$1;(statearr_38420_38445[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 7))
{var inst_38404 = (state_38408[2]);var state_38408__$1 = state_38408;var statearr_38421_38446 = state_38408__$1;(statearr_38421_38446[2] = inst_38404);
(statearr_38421_38446[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 8))
{var inst_38381 = (state_38408[10]);var inst_38372 = (state_38408[8]);var tmp38418 = inst_38372;var inst_38372__$1 = tmp38418;var inst_38373 = inst_38381;var state_38408__$1 = (function (){var statearr_38422 = state_38408;(statearr_38422[7] = inst_38373);
(statearr_38422[8] = inst_38372__$1);
return statearr_38422;
})();var statearr_38423_38447 = state_38408__$1;(statearr_38423_38447[2] = null);
(statearr_38423_38447[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 9))
{var inst_38372 = (state_38408[8]);var inst_38386 = cljs.core.vec(inst_38372);var state_38408__$1 = state_38408;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38408__$1,11,out,inst_38386);
} else
{if((state_val_38409 === 10))
{var inst_38392 = (state_38408[2]);var state_38408__$1 = state_38408;var statearr_38424_38448 = state_38408__$1;(statearr_38424_38448[2] = inst_38392);
(statearr_38424_38448[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 11))
{var inst_38388 = (state_38408[2]);var inst_38389 = (new Array(n));var inst_38372 = inst_38389;var inst_38373 = 0;var state_38408__$1 = (function (){var statearr_38425 = state_38408;(statearr_38425[7] = inst_38373);
(statearr_38425[8] = inst_38372);
(statearr_38425[12] = inst_38388);
return statearr_38425;
})();var statearr_38426_38449 = state_38408__$1;(statearr_38426_38449[2] = null);
(statearr_38426_38449[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 12))
{var inst_38372 = (state_38408[8]);var inst_38396 = cljs.core.vec(inst_38372);var state_38408__$1 = state_38408;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38408__$1,15,out,inst_38396);
} else
{if((state_val_38409 === 13))
{var state_38408__$1 = state_38408;var statearr_38427_38450 = state_38408__$1;(statearr_38427_38450[2] = null);
(statearr_38427_38450[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 14))
{var inst_38401 = (state_38408[2]);var inst_38402 = cljs.core.async.close_BANG_(out);var state_38408__$1 = (function (){var statearr_38428 = state_38408;(statearr_38428[13] = inst_38401);
return statearr_38428;
})();var statearr_38429_38451 = state_38408__$1;(statearr_38429_38451[2] = inst_38402);
(statearr_38429_38451[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38409 === 15))
{var inst_38398 = (state_38408[2]);var state_38408__$1 = state_38408;var statearr_38430_38452 = state_38408__$1;(statearr_38430_38452[2] = inst_38398);
(statearr_38430_38452[1] = 14);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38434[0] = state_machine__5548__auto__);
(statearr_38434[1] = 1);
return statearr_38434;
});
var state_machine__5548__auto____1 = (function (state_38408){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38408);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38435){if((e38435 instanceof Object))
{var ex__5551__auto__ = e38435;var statearr_38436_38453 = state_38408;(statearr_38436_38453[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38408);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38454 = state_38408;
state_38408 = G__38454;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38408){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38437 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38438);
return statearr_38437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38567){var state_val_38568 = (state_38567[1]);if((state_val_38568 === 1))
{var inst_38526 = [];var inst_38527 = inst_38526;var inst_38528 = cljs.core.constant$keyword$564;var state_38567__$1 = (function (){var statearr_38569 = state_38567;(statearr_38569[7] = inst_38527);
(statearr_38569[8] = inst_38528);
return statearr_38569;
})();var statearr_38570_38598 = state_38567__$1;(statearr_38570_38598[2] = null);
(statearr_38570_38598[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 2))
{var state_38567__$1 = state_38567;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38567__$1,4,ch);
} else
{if((state_val_38568 === 3))
{var inst_38565 = (state_38567[2]);var state_38567__$1 = state_38567;return cljs.core.async.impl.ioc_helpers.return_chan(state_38567__$1,inst_38565);
} else
{if((state_val_38568 === 4))
{var inst_38531 = (state_38567[9]);var inst_38531__$1 = (state_38567[2]);var inst_38532 = (inst_38531__$1 == null);var inst_38533 = cljs.core.not(inst_38532);var state_38567__$1 = (function (){var statearr_38571 = state_38567;(statearr_38571[9] = inst_38531__$1);
return statearr_38571;
})();if(inst_38533)
{var statearr_38572_38599 = state_38567__$1;(statearr_38572_38599[1] = 5);
} else
{var statearr_38573_38600 = state_38567__$1;(statearr_38573_38600[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 5))
{var inst_38528 = (state_38567[8]);var inst_38535 = (state_38567[10]);var inst_38531 = (state_38567[9]);var inst_38535__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38531) : f.call(null,inst_38531));var inst_38536 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38535__$1,inst_38528);var inst_38537 = cljs.core.keyword_identical_QMARK_(inst_38528,cljs.core.constant$keyword$564);var inst_38538 = (inst_38536) || (inst_38537);var state_38567__$1 = (function (){var statearr_38574 = state_38567;(statearr_38574[10] = inst_38535__$1);
return statearr_38574;
})();if(cljs.core.truth_(inst_38538))
{var statearr_38575_38601 = state_38567__$1;(statearr_38575_38601[1] = 8);
} else
{var statearr_38576_38602 = state_38567__$1;(statearr_38576_38602[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 6))
{var inst_38527 = (state_38567[7]);var inst_38552 = inst_38527.length;var inst_38553 = (inst_38552 > 0);var state_38567__$1 = state_38567;if(cljs.core.truth_(inst_38553))
{var statearr_38578_38603 = state_38567__$1;(statearr_38578_38603[1] = 12);
} else
{var statearr_38579_38604 = state_38567__$1;(statearr_38579_38604[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 7))
{var inst_38563 = (state_38567[2]);var state_38567__$1 = state_38567;var statearr_38580_38605 = state_38567__$1;(statearr_38580_38605[2] = inst_38563);
(statearr_38580_38605[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 8))
{var inst_38527 = (state_38567[7]);var inst_38535 = (state_38567[10]);var inst_38531 = (state_38567[9]);var inst_38540 = inst_38527.push(inst_38531);var tmp38577 = inst_38527;var inst_38527__$1 = tmp38577;var inst_38528 = inst_38535;var state_38567__$1 = (function (){var statearr_38581 = state_38567;(statearr_38581[7] = inst_38527__$1);
(statearr_38581[8] = inst_38528);
(statearr_38581[11] = inst_38540);
return statearr_38581;
})();var statearr_38582_38606 = state_38567__$1;(statearr_38582_38606[2] = null);
(statearr_38582_38606[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 9))
{var inst_38527 = (state_38567[7]);var inst_38543 = cljs.core.vec(inst_38527);var state_38567__$1 = state_38567;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38567__$1,11,out,inst_38543);
} else
{if((state_val_38568 === 10))
{var inst_38550 = (state_38567[2]);var state_38567__$1 = state_38567;var statearr_38583_38607 = state_38567__$1;(statearr_38583_38607[2] = inst_38550);
(statearr_38583_38607[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 11))
{var inst_38535 = (state_38567[10]);var inst_38531 = (state_38567[9]);var inst_38545 = (state_38567[2]);var inst_38546 = [];var inst_38547 = inst_38546.push(inst_38531);var inst_38527 = inst_38546;var inst_38528 = inst_38535;var state_38567__$1 = (function (){var statearr_38584 = state_38567;(statearr_38584[7] = inst_38527);
(statearr_38584[8] = inst_38528);
(statearr_38584[12] = inst_38547);
(statearr_38584[13] = inst_38545);
return statearr_38584;
})();var statearr_38585_38608 = state_38567__$1;(statearr_38585_38608[2] = null);
(statearr_38585_38608[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 12))
{var inst_38527 = (state_38567[7]);var inst_38555 = cljs.core.vec(inst_38527);var state_38567__$1 = state_38567;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38567__$1,15,out,inst_38555);
} else
{if((state_val_38568 === 13))
{var state_38567__$1 = state_38567;var statearr_38586_38609 = state_38567__$1;(statearr_38586_38609[2] = null);
(statearr_38586_38609[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 14))
{var inst_38560 = (state_38567[2]);var inst_38561 = cljs.core.async.close_BANG_(out);var state_38567__$1 = (function (){var statearr_38587 = state_38567;(statearr_38587[14] = inst_38560);
return statearr_38587;
})();var statearr_38588_38610 = state_38567__$1;(statearr_38588_38610[2] = inst_38561);
(statearr_38588_38610[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38568 === 15))
{var inst_38557 = (state_38567[2]);var state_38567__$1 = state_38567;var statearr_38589_38611 = state_38567__$1;(statearr_38589_38611[2] = inst_38557);
(statearr_38589_38611[1] = 14);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38593[0] = state_machine__5548__auto__);
(statearr_38593[1] = 1);
return statearr_38593;
});
var state_machine__5548__auto____1 = (function (state_38567){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38567);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38594){if((e38594 instanceof Object))
{var ex__5551__auto__ = e38594;var statearr_38595_38612 = state_38567;(statearr_38595_38612[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38567);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38613 = state_38567;
state_38567 = G__38613;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38567){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38596 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38597);
return statearr_38596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
