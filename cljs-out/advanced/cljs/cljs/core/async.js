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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17902 = (function (f,fn_handler,meta17903){
this.f = f;
this.fn_handler = fn_handler;
this.meta17903 = meta17903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17902.cljs$lang$type = true;
cljs.core.async.t17902.cljs$lang$ctorStr = "cljs.core.async/t17902";
cljs.core.async.t17902.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t17902");
});
cljs.core.async.t17902.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17904){var self__ = this;
var _17904__$1 = this;return self__.meta17903;
});
cljs.core.async.t17902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17904,meta17903__$1){var self__ = this;
var _17904__$1 = this;return (new cljs.core.async.t17902(self__.f,self__.fn_handler,meta17903__$1));
});
cljs.core.async.__GT_t17902 = (function __GT_t17902(f__$1,fn_handler__$1,meta17903){return (new cljs.core.async.t17902(f__$1,fn_handler__$1,meta17903));
});
}
return (new cljs.core.async.t17902(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17906 = buff;if(G__17906)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__17906.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17906.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17906);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17906);
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
{var val_17907 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17907) : fn1.call(null,val_17907));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17907) : fn1.call(null,val_17907));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___17908 = n;var x_17909 = 0;while(true){
if((x_17909 < n__4248__auto___17908))
{(a[x_17909] = 0);
{
var G__17910 = (x_17909 + 1);
x_17909 = G__17910;
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
var G__17911 = (i + 1);
i = G__17911;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t17915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17915 = (function (flag,alt_flag,meta17916){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17916 = meta17916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17915.cljs$lang$type = true;
cljs.core.async.t17915.cljs$lang$ctorStr = "cljs.core.async/t17915";
cljs.core.async.t17915.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t17915");
});
cljs.core.async.t17915.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t17915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t17915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17917){var self__ = this;
var _17917__$1 = this;return self__.meta17916;
});
cljs.core.async.t17915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17917,meta17916__$1){var self__ = this;
var _17917__$1 = this;return (new cljs.core.async.t17915(self__.flag,self__.alt_flag,meta17916__$1));
});
cljs.core.async.__GT_t17915 = (function __GT_t17915(flag__$1,alt_flag__$1,meta17916){return (new cljs.core.async.t17915(flag__$1,alt_flag__$1,meta17916));
});
}
return (new cljs.core.async.t17915(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17921 = (function (cb,flag,alt_handler,meta17922){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17922 = meta17922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17921.cljs$lang$type = true;
cljs.core.async.t17921.cljs$lang$ctorStr = "cljs.core.async/t17921";
cljs.core.async.t17921.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t17921");
});
cljs.core.async.t17921.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t17921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t17921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17923){var self__ = this;
var _17923__$1 = this;return self__.meta17922;
});
cljs.core.async.t17921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17923,meta17922__$1){var self__ = this;
var _17923__$1 = this;return (new cljs.core.async.t17921(self__.cb,self__.flag,self__.alt_handler,meta17922__$1));
});
cljs.core.async.__GT_t17921 = (function __GT_t17921(cb__$1,flag__$1,alt_handler__$1,meta17922){return (new cljs.core.async.t17921(cb__$1,flag__$1,alt_handler__$1,meta17922));
});
}
return (new cljs.core.async.t17921(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17924_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17924_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17924_SHARP_,port], null)));
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
var G__17925 = (i + 1);
i = G__17925;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$67))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$67], null));
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
var alts_BANG___delegate = function (ports,p__17926){var map__17928 = p__17926;var map__17928__$1 = ((cljs.core.seq_QMARK_(map__17928))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17928):map__17928);var opts = map__17928__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__17926 = null;if (arguments.length > 1) {
  p__17926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17926);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17929){
var ports = cljs.core.first(arglist__17929);
var p__17926 = cljs.core.rest(arglist__17929);
return alts_BANG___delegate(ports,p__17926);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17937 = (function (ch,f,map_LT_,meta17938){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17938 = meta17938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17937.cljs$lang$type = true;
cljs.core.async.t17937.cljs$lang$ctorStr = "cljs.core.async/t17937";
cljs.core.async.t17937.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t17937");
});
cljs.core.async.t17937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t17937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t17940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17940 = (function (fn1,_,meta17938,ch,f,map_LT_,meta17941){
this.fn1 = fn1;
this._ = _;
this.meta17938 = meta17938;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17941 = meta17941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17940.cljs$lang$type = true;
cljs.core.async.t17940.cljs$lang$ctorStr = "cljs.core.async/t17940";
cljs.core.async.t17940.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t17940");
});
cljs.core.async.t17940.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t17940.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t17940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__17930_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__17930_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17930_SHARP_) : self__.f.call(null,p1__17930_SHARP_)))) : f1.call(null,(((p1__17930_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17930_SHARP_) : self__.f.call(null,p1__17930_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t17940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17942){var self__ = this;
var _17942__$1 = this;return self__.meta17941;
});
cljs.core.async.t17940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17942,meta17941__$1){var self__ = this;
var _17942__$1 = this;return (new cljs.core.async.t17940(self__.fn1,self__._,self__.meta17938,self__.ch,self__.f,self__.map_LT_,meta17941__$1));
});
cljs.core.async.__GT_t17940 = (function __GT_t17940(fn1__$1,___$2,meta17938__$1,ch__$2,f__$2,map_LT___$2,meta17941){return (new cljs.core.async.t17940(fn1__$1,___$2,meta17938__$1,ch__$2,f__$2,map_LT___$2,meta17941));
});
}
return (new cljs.core.async.t17940(fn1,___$1,self__.meta17938,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t17937.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t17937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17939){var self__ = this;
var _17939__$1 = this;return self__.meta17938;
});
cljs.core.async.t17937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17939,meta17938__$1){var self__ = this;
var _17939__$1 = this;return (new cljs.core.async.t17937(self__.ch,self__.f,self__.map_LT_,meta17938__$1));
});
cljs.core.async.__GT_t17937 = (function __GT_t17937(ch__$1,f__$1,map_LT___$1,meta17938){return (new cljs.core.async.t17937(ch__$1,f__$1,map_LT___$1,meta17938));
});
}
return (new cljs.core.async.t17937(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17946 = (function (ch,f,map_GT_,meta17947){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17947 = meta17947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17946.cljs$lang$type = true;
cljs.core.async.t17946.cljs$lang$ctorStr = "cljs.core.async/t17946";
cljs.core.async.t17946.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t17946");
});
cljs.core.async.t17946.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t17946.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t17946.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t17946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17948){var self__ = this;
var _17948__$1 = this;return self__.meta17947;
});
cljs.core.async.t17946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17948,meta17947__$1){var self__ = this;
var _17948__$1 = this;return (new cljs.core.async.t17946(self__.ch,self__.f,self__.map_GT_,meta17947__$1));
});
cljs.core.async.__GT_t17946 = (function __GT_t17946(ch__$1,f__$1,map_GT___$1,meta17947){return (new cljs.core.async.t17946(ch__$1,f__$1,map_GT___$1,meta17947));
});
}
return (new cljs.core.async.t17946(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17952 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17952 = (function (ch,p,filter_GT_,meta17953){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17953 = meta17953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17952.cljs$lang$type = true;
cljs.core.async.t17952.cljs$lang$ctorStr = "cljs.core.async/t17952";
cljs.core.async.t17952.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t17952");
});
cljs.core.async.t17952.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t17952.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t17952.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t17952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17954){var self__ = this;
var _17954__$1 = this;return self__.meta17953;
});
cljs.core.async.t17952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17954,meta17953__$1){var self__ = this;
var _17954__$1 = this;return (new cljs.core.async.t17952(self__.ch,self__.p,self__.filter_GT_,meta17953__$1));
});
cljs.core.async.__GT_t17952 = (function __GT_t17952(ch__$1,p__$1,filter_GT___$1,meta17953){return (new cljs.core.async.t17952(ch__$1,p__$1,filter_GT___$1,meta17953));
});
}
return (new cljs.core.async.t17952(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___18037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18016){var state_val_18017 = (state_18016[1]);if((state_val_18017 === 1))
{var state_18016__$1 = state_18016;var statearr_18018_18038 = state_18016__$1;(statearr_18018_18038[2] = null);
(statearr_18018_18038[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18017 === 2))
{var state_18016__$1 = state_18016;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18016__$1,4,ch);
} else
{if((state_val_18017 === 3))
{var inst_18014 = (state_18016[2]);var state_18016__$1 = state_18016;return cljs.core.async.impl.ioc_helpers.return_chan(state_18016__$1,inst_18014);
} else
{if((state_val_18017 === 4))
{var inst_17998 = (state_18016[7]);var inst_17998__$1 = (state_18016[2]);var inst_17999 = (inst_17998__$1 == null);var state_18016__$1 = (function (){var statearr_18019 = state_18016;(statearr_18019[7] = inst_17998__$1);
return statearr_18019;
})();if(cljs.core.truth_(inst_17999))
{var statearr_18020_18039 = state_18016__$1;(statearr_18020_18039[1] = 5);
} else
{var statearr_18021_18040 = state_18016__$1;(statearr_18021_18040[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18017 === 5))
{var inst_18001 = cljs.core.async.close_BANG_(out);var state_18016__$1 = state_18016;var statearr_18022_18041 = state_18016__$1;(statearr_18022_18041[2] = inst_18001);
(statearr_18022_18041[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18017 === 6))
{var inst_17998 = (state_18016[7]);var inst_18003 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17998) : p.call(null,inst_17998));var state_18016__$1 = state_18016;if(cljs.core.truth_(inst_18003))
{var statearr_18023_18042 = state_18016__$1;(statearr_18023_18042[1] = 8);
} else
{var statearr_18024_18043 = state_18016__$1;(statearr_18024_18043[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18017 === 7))
{var inst_18012 = (state_18016[2]);var state_18016__$1 = state_18016;var statearr_18025_18044 = state_18016__$1;(statearr_18025_18044[2] = inst_18012);
(statearr_18025_18044[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18017 === 8))
{var inst_17998 = (state_18016[7]);var state_18016__$1 = state_18016;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18016__$1,11,out,inst_17998);
} else
{if((state_val_18017 === 9))
{var state_18016__$1 = state_18016;var statearr_18026_18045 = state_18016__$1;(statearr_18026_18045[2] = null);
(statearr_18026_18045[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18017 === 10))
{var inst_18009 = (state_18016[2]);var state_18016__$1 = (function (){var statearr_18027 = state_18016;(statearr_18027[8] = inst_18009);
return statearr_18027;
})();var statearr_18028_18046 = state_18016__$1;(statearr_18028_18046[2] = null);
(statearr_18028_18046[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18017 === 11))
{var inst_18006 = (state_18016[2]);var state_18016__$1 = state_18016;var statearr_18029_18047 = state_18016__$1;(statearr_18029_18047[2] = inst_18006);
(statearr_18029_18047[1] = 10);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_18033 = [null,null,null,null,null,null,null,null,null];(statearr_18033[0] = state_machine__5507__auto__);
(statearr_18033[1] = 1);
return statearr_18033;
});
var state_machine__5507__auto____1 = (function (state_18016){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18016);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18034){if((e18034 instanceof Object))
{var ex__5510__auto__ = e18034;var statearr_18035_18048 = state_18016;(statearr_18035_18048[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18016);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e18034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__18049 = state_18016;
state_18016 = G__18049;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18016){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18036 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___18037);
return statearr_18036;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18201){var state_val_18202 = (state_18201[1]);if((state_val_18202 === 1))
{var state_18201__$1 = state_18201;var statearr_18203_18240 = state_18201__$1;(statearr_18203_18240[2] = null);
(statearr_18203_18240[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 2))
{var state_18201__$1 = state_18201;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18201__$1,4,in$);
} else
{if((state_val_18202 === 3))
{var inst_18199 = (state_18201[2]);var state_18201__$1 = state_18201;return cljs.core.async.impl.ioc_helpers.return_chan(state_18201__$1,inst_18199);
} else
{if((state_val_18202 === 4))
{var inst_18147 = (state_18201[7]);var inst_18147__$1 = (state_18201[2]);var inst_18148 = (inst_18147__$1 == null);var state_18201__$1 = (function (){var statearr_18204 = state_18201;(statearr_18204[7] = inst_18147__$1);
return statearr_18204;
})();if(cljs.core.truth_(inst_18148))
{var statearr_18205_18241 = state_18201__$1;(statearr_18205_18241[1] = 5);
} else
{var statearr_18206_18242 = state_18201__$1;(statearr_18206_18242[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 5))
{var inst_18150 = cljs.core.async.close_BANG_(out);var state_18201__$1 = state_18201;var statearr_18207_18243 = state_18201__$1;(statearr_18207_18243[2] = inst_18150);
(statearr_18207_18243[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 6))
{var inst_18147 = (state_18201[7]);var inst_18152 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18147) : f.call(null,inst_18147));var inst_18157 = cljs.core.seq(inst_18152);var inst_18158 = inst_18157;var inst_18159 = null;var inst_18160 = 0;var inst_18161 = 0;var state_18201__$1 = (function (){var statearr_18208 = state_18201;(statearr_18208[8] = inst_18161);
(statearr_18208[9] = inst_18160);
(statearr_18208[10] = inst_18158);
(statearr_18208[11] = inst_18159);
return statearr_18208;
})();var statearr_18209_18244 = state_18201__$1;(statearr_18209_18244[2] = null);
(statearr_18209_18244[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 7))
{var inst_18197 = (state_18201[2]);var state_18201__$1 = state_18201;var statearr_18210_18245 = state_18201__$1;(statearr_18210_18245[2] = inst_18197);
(statearr_18210_18245[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 8))
{var inst_18161 = (state_18201[8]);var inst_18160 = (state_18201[9]);var inst_18163 = (inst_18161 < inst_18160);var inst_18164 = inst_18163;var state_18201__$1 = state_18201;if(cljs.core.truth_(inst_18164))
{var statearr_18211_18246 = state_18201__$1;(statearr_18211_18246[1] = 10);
} else
{var statearr_18212_18247 = state_18201__$1;(statearr_18212_18247[1] = 11);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 9))
{var inst_18194 = (state_18201[2]);var state_18201__$1 = (function (){var statearr_18213 = state_18201;(statearr_18213[12] = inst_18194);
return statearr_18213;
})();var statearr_18214_18248 = state_18201__$1;(statearr_18214_18248[2] = null);
(statearr_18214_18248[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 10))
{var inst_18161 = (state_18201[8]);var inst_18159 = (state_18201[11]);var inst_18166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18159,inst_18161);var state_18201__$1 = state_18201;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18201__$1,13,out,inst_18166);
} else
{if((state_val_18202 === 11))
{var inst_18172 = (state_18201[13]);var inst_18158 = (state_18201[10]);var inst_18172__$1 = cljs.core.seq(inst_18158);var state_18201__$1 = (function (){var statearr_18218 = state_18201;(statearr_18218[13] = inst_18172__$1);
return statearr_18218;
})();if(inst_18172__$1)
{var statearr_18219_18249 = state_18201__$1;(statearr_18219_18249[1] = 14);
} else
{var statearr_18220_18250 = state_18201__$1;(statearr_18220_18250[1] = 15);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 12))
{var inst_18192 = (state_18201[2]);var state_18201__$1 = state_18201;var statearr_18221_18251 = state_18201__$1;(statearr_18221_18251[2] = inst_18192);
(statearr_18221_18251[1] = 9);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 13))
{var inst_18161 = (state_18201[8]);var inst_18160 = (state_18201[9]);var inst_18158 = (state_18201[10]);var inst_18159 = (state_18201[11]);var inst_18168 = (state_18201[2]);var inst_18169 = (inst_18161 + 1);var tmp18215 = inst_18160;var tmp18216 = inst_18158;var tmp18217 = inst_18159;var inst_18158__$1 = tmp18216;var inst_18159__$1 = tmp18217;var inst_18160__$1 = tmp18215;var inst_18161__$1 = inst_18169;var state_18201__$1 = (function (){var statearr_18222 = state_18201;(statearr_18222[14] = inst_18168);
(statearr_18222[8] = inst_18161__$1);
(statearr_18222[9] = inst_18160__$1);
(statearr_18222[10] = inst_18158__$1);
(statearr_18222[11] = inst_18159__$1);
return statearr_18222;
})();var statearr_18223_18252 = state_18201__$1;(statearr_18223_18252[2] = null);
(statearr_18223_18252[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 14))
{var inst_18172 = (state_18201[13]);var inst_18174 = cljs.core.chunked_seq_QMARK_(inst_18172);var state_18201__$1 = state_18201;if(inst_18174)
{var statearr_18224_18253 = state_18201__$1;(statearr_18224_18253[1] = 17);
} else
{var statearr_18225_18254 = state_18201__$1;(statearr_18225_18254[1] = 18);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 15))
{var state_18201__$1 = state_18201;var statearr_18226_18255 = state_18201__$1;(statearr_18226_18255[2] = null);
(statearr_18226_18255[1] = 16);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 16))
{var inst_18190 = (state_18201[2]);var state_18201__$1 = state_18201;var statearr_18227_18256 = state_18201__$1;(statearr_18227_18256[2] = inst_18190);
(statearr_18227_18256[1] = 12);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 17))
{var inst_18172 = (state_18201[13]);var inst_18176 = cljs.core.chunk_first(inst_18172);var inst_18177 = cljs.core.chunk_rest(inst_18172);var inst_18178 = cljs.core.count(inst_18176);var inst_18158 = inst_18177;var inst_18159 = inst_18176;var inst_18160 = inst_18178;var inst_18161 = 0;var state_18201__$1 = (function (){var statearr_18228 = state_18201;(statearr_18228[8] = inst_18161);
(statearr_18228[9] = inst_18160);
(statearr_18228[10] = inst_18158);
(statearr_18228[11] = inst_18159);
return statearr_18228;
})();var statearr_18229_18257 = state_18201__$1;(statearr_18229_18257[2] = null);
(statearr_18229_18257[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 18))
{var inst_18172 = (state_18201[13]);var inst_18181 = cljs.core.first(inst_18172);var state_18201__$1 = state_18201;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18201__$1,20,out,inst_18181);
} else
{if((state_val_18202 === 19))
{var inst_18187 = (state_18201[2]);var state_18201__$1 = state_18201;var statearr_18230_18258 = state_18201__$1;(statearr_18230_18258[2] = inst_18187);
(statearr_18230_18258[1] = 16);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18202 === 20))
{var inst_18172 = (state_18201[13]);var inst_18183 = (state_18201[2]);var inst_18184 = cljs.core.next(inst_18172);var inst_18158 = inst_18184;var inst_18159 = null;var inst_18160 = 0;var inst_18161 = 0;var state_18201__$1 = (function (){var statearr_18231 = state_18201;(statearr_18231[15] = inst_18183);
(statearr_18231[8] = inst_18161);
(statearr_18231[9] = inst_18160);
(statearr_18231[10] = inst_18158);
(statearr_18231[11] = inst_18159);
return statearr_18231;
})();var statearr_18232_18259 = state_18201__$1;(statearr_18232_18259[2] = null);
(statearr_18232_18259[1] = 8);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_18236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18236[0] = state_machine__5507__auto__);
(statearr_18236[1] = 1);
return statearr_18236;
});
var state_machine__5507__auto____1 = (function (state_18201){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18201);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18237){if((e18237 instanceof Object))
{var ex__5510__auto__ = e18237;var statearr_18238_18260 = state_18201;(statearr_18238_18260[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18201);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e18237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__18261 = state_18201;
state_18201 = G__18261;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18201){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18239 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18239;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___18342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18321){var state_val_18322 = (state_18321[1]);if((state_val_18322 === 1))
{var state_18321__$1 = state_18321;var statearr_18323_18343 = state_18321__$1;(statearr_18323_18343[2] = null);
(statearr_18323_18343[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18322 === 2))
{var state_18321__$1 = state_18321;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18321__$1,4,from);
} else
{if((state_val_18322 === 3))
{var inst_18319 = (state_18321[2]);var state_18321__$1 = state_18321;return cljs.core.async.impl.ioc_helpers.return_chan(state_18321__$1,inst_18319);
} else
{if((state_val_18322 === 4))
{var inst_18304 = (state_18321[7]);var inst_18304__$1 = (state_18321[2]);var inst_18305 = (inst_18304__$1 == null);var state_18321__$1 = (function (){var statearr_18324 = state_18321;(statearr_18324[7] = inst_18304__$1);
return statearr_18324;
})();if(cljs.core.truth_(inst_18305))
{var statearr_18325_18344 = state_18321__$1;(statearr_18325_18344[1] = 5);
} else
{var statearr_18326_18345 = state_18321__$1;(statearr_18326_18345[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18322 === 5))
{var state_18321__$1 = state_18321;if(cljs.core.truth_(close_QMARK_))
{var statearr_18327_18346 = state_18321__$1;(statearr_18327_18346[1] = 8);
} else
{var statearr_18328_18347 = state_18321__$1;(statearr_18328_18347[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18322 === 6))
{var inst_18304 = (state_18321[7]);var state_18321__$1 = state_18321;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18321__$1,11,to,inst_18304);
} else
{if((state_val_18322 === 7))
{var inst_18317 = (state_18321[2]);var state_18321__$1 = state_18321;var statearr_18329_18348 = state_18321__$1;(statearr_18329_18348[2] = inst_18317);
(statearr_18329_18348[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18322 === 8))
{var inst_18308 = cljs.core.async.close_BANG_(to);var state_18321__$1 = state_18321;var statearr_18330_18349 = state_18321__$1;(statearr_18330_18349[2] = inst_18308);
(statearr_18330_18349[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18322 === 9))
{var state_18321__$1 = state_18321;var statearr_18331_18350 = state_18321__$1;(statearr_18331_18350[2] = null);
(statearr_18331_18350[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18322 === 10))
{var inst_18311 = (state_18321[2]);var state_18321__$1 = state_18321;var statearr_18332_18351 = state_18321__$1;(statearr_18332_18351[2] = inst_18311);
(statearr_18332_18351[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18322 === 11))
{var inst_18314 = (state_18321[2]);var state_18321__$1 = (function (){var statearr_18333 = state_18321;(statearr_18333[8] = inst_18314);
return statearr_18333;
})();var statearr_18334_18352 = state_18321__$1;(statearr_18334_18352[2] = null);
(statearr_18334_18352[1] = 2);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_18338 = [null,null,null,null,null,null,null,null,null];(statearr_18338[0] = state_machine__5507__auto__);
(statearr_18338[1] = 1);
return statearr_18338;
});
var state_machine__5507__auto____1 = (function (state_18321){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18321);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18339){if((e18339 instanceof Object))
{var ex__5510__auto__ = e18339;var statearr_18340_18353 = state_18321;(statearr_18340_18353[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18321);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e18339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__18354 = state_18321;
state_18321 = G__18354;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18321){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18341 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___18342);
return statearr_18341;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___18441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18419){var state_val_18420 = (state_18419[1]);if((state_val_18420 === 1))
{var state_18419__$1 = state_18419;var statearr_18421_18442 = state_18419__$1;(statearr_18421_18442[2] = null);
(statearr_18421_18442[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 2))
{var state_18419__$1 = state_18419;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18419__$1,4,ch);
} else
{if((state_val_18420 === 3))
{var inst_18417 = (state_18419[2]);var state_18419__$1 = state_18419;return cljs.core.async.impl.ioc_helpers.return_chan(state_18419__$1,inst_18417);
} else
{if((state_val_18420 === 4))
{var inst_18400 = (state_18419[7]);var inst_18400__$1 = (state_18419[2]);var inst_18401 = (inst_18400__$1 == null);var state_18419__$1 = (function (){var statearr_18422 = state_18419;(statearr_18422[7] = inst_18400__$1);
return statearr_18422;
})();if(cljs.core.truth_(inst_18401))
{var statearr_18423_18443 = state_18419__$1;(statearr_18423_18443[1] = 5);
} else
{var statearr_18424_18444 = state_18419__$1;(statearr_18424_18444[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 5))
{var inst_18403 = cljs.core.async.close_BANG_(tc);var inst_18404 = cljs.core.async.close_BANG_(fc);var state_18419__$1 = (function (){var statearr_18425 = state_18419;(statearr_18425[8] = inst_18403);
return statearr_18425;
})();var statearr_18426_18445 = state_18419__$1;(statearr_18426_18445[2] = inst_18404);
(statearr_18426_18445[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 6))
{var inst_18400 = (state_18419[7]);var inst_18406 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18400) : p.call(null,inst_18400));var state_18419__$1 = state_18419;if(cljs.core.truth_(inst_18406))
{var statearr_18427_18446 = state_18419__$1;(statearr_18427_18446[1] = 9);
} else
{var statearr_18428_18447 = state_18419__$1;(statearr_18428_18447[1] = 10);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 7))
{var inst_18415 = (state_18419[2]);var state_18419__$1 = state_18419;var statearr_18429_18448 = state_18419__$1;(statearr_18429_18448[2] = inst_18415);
(statearr_18429_18448[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 8))
{var inst_18412 = (state_18419[2]);var state_18419__$1 = (function (){var statearr_18430 = state_18419;(statearr_18430[9] = inst_18412);
return statearr_18430;
})();var statearr_18431_18449 = state_18419__$1;(statearr_18431_18449[2] = null);
(statearr_18431_18449[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 9))
{var state_18419__$1 = state_18419;var statearr_18432_18450 = state_18419__$1;(statearr_18432_18450[2] = tc);
(statearr_18432_18450[1] = 11);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 10))
{var state_18419__$1 = state_18419;var statearr_18433_18451 = state_18419__$1;(statearr_18433_18451[2] = fc);
(statearr_18433_18451[1] = 11);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18420 === 11))
{var inst_18400 = (state_18419[7]);var inst_18410 = (state_18419[2]);var state_18419__$1 = state_18419;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18419__$1,8,inst_18410,inst_18400);
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
var state_machine__5507__auto____0 = (function (){var statearr_18437 = [null,null,null,null,null,null,null,null,null,null];(statearr_18437[0] = state_machine__5507__auto__);
(statearr_18437[1] = 1);
return statearr_18437;
});
var state_machine__5507__auto____1 = (function (state_18419){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18419);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18438){if((e18438 instanceof Object))
{var ex__5510__auto__ = e18438;var statearr_18439_18452 = state_18419;(statearr_18439_18452[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18419);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e18438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__18453 = state_18419;
state_18419 = G__18453;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18419){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18440 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___18441);
return statearr_18440;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18500){var state_val_18501 = (state_18500[1]);if((state_val_18501 === 7))
{var inst_18496 = (state_18500[2]);var state_18500__$1 = state_18500;var statearr_18502_18518 = state_18500__$1;(statearr_18502_18518[2] = inst_18496);
(statearr_18502_18518[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18501 === 6))
{var inst_18489 = (state_18500[7]);var inst_18486 = (state_18500[8]);var inst_18493 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18486,inst_18489) : f.call(null,inst_18486,inst_18489));var inst_18486__$1 = inst_18493;var state_18500__$1 = (function (){var statearr_18503 = state_18500;(statearr_18503[8] = inst_18486__$1);
return statearr_18503;
})();var statearr_18504_18519 = state_18500__$1;(statearr_18504_18519[2] = null);
(statearr_18504_18519[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18501 === 5))
{var inst_18486 = (state_18500[8]);var state_18500__$1 = state_18500;var statearr_18505_18520 = state_18500__$1;(statearr_18505_18520[2] = inst_18486);
(statearr_18505_18520[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18501 === 4))
{var inst_18489 = (state_18500[7]);var inst_18489__$1 = (state_18500[2]);var inst_18490 = (inst_18489__$1 == null);var state_18500__$1 = (function (){var statearr_18506 = state_18500;(statearr_18506[7] = inst_18489__$1);
return statearr_18506;
})();if(cljs.core.truth_(inst_18490))
{var statearr_18507_18521 = state_18500__$1;(statearr_18507_18521[1] = 5);
} else
{var statearr_18508_18522 = state_18500__$1;(statearr_18508_18522[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18501 === 3))
{var inst_18498 = (state_18500[2]);var state_18500__$1 = state_18500;return cljs.core.async.impl.ioc_helpers.return_chan(state_18500__$1,inst_18498);
} else
{if((state_val_18501 === 2))
{var state_18500__$1 = state_18500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18500__$1,4,ch);
} else
{if((state_val_18501 === 1))
{var inst_18486 = init;var state_18500__$1 = (function (){var statearr_18509 = state_18500;(statearr_18509[8] = inst_18486);
return statearr_18509;
})();var statearr_18510_18523 = state_18500__$1;(statearr_18510_18523[2] = null);
(statearr_18510_18523[1] = 2);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_18514 = [null,null,null,null,null,null,null,null,null];(statearr_18514[0] = state_machine__5507__auto__);
(statearr_18514[1] = 1);
return statearr_18514;
});
var state_machine__5507__auto____1 = (function (state_18500){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18500);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18515){if((e18515 instanceof Object))
{var ex__5510__auto__ = e18515;var statearr_18516_18524 = state_18500;(statearr_18516_18524[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18500);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e18515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__18525 = state_18500;
state_18500 = G__18525;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18500){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18517 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18517;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18587){var state_val_18588 = (state_18587[1]);if((state_val_18588 === 1))
{var inst_18567 = cljs.core.seq(coll);var inst_18568 = inst_18567;var state_18587__$1 = (function (){var statearr_18589 = state_18587;(statearr_18589[7] = inst_18568);
return statearr_18589;
})();var statearr_18590_18608 = state_18587__$1;(statearr_18590_18608[2] = null);
(statearr_18590_18608[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18588 === 2))
{var inst_18568 = (state_18587[7]);var state_18587__$1 = state_18587;if(cljs.core.truth_(inst_18568))
{var statearr_18591_18609 = state_18587__$1;(statearr_18591_18609[1] = 4);
} else
{var statearr_18592_18610 = state_18587__$1;(statearr_18592_18610[1] = 5);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18588 === 3))
{var inst_18585 = (state_18587[2]);var state_18587__$1 = state_18587;return cljs.core.async.impl.ioc_helpers.return_chan(state_18587__$1,inst_18585);
} else
{if((state_val_18588 === 4))
{var inst_18568 = (state_18587[7]);var inst_18571 = cljs.core.first(inst_18568);var state_18587__$1 = state_18587;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18587__$1,7,ch,inst_18571);
} else
{if((state_val_18588 === 5))
{var state_18587__$1 = state_18587;if(cljs.core.truth_(close_QMARK_))
{var statearr_18593_18611 = state_18587__$1;(statearr_18593_18611[1] = 8);
} else
{var statearr_18594_18612 = state_18587__$1;(statearr_18594_18612[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18588 === 6))
{var inst_18583 = (state_18587[2]);var state_18587__$1 = state_18587;var statearr_18595_18613 = state_18587__$1;(statearr_18595_18613[2] = inst_18583);
(statearr_18595_18613[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18588 === 7))
{var inst_18568 = (state_18587[7]);var inst_18573 = (state_18587[2]);var inst_18574 = cljs.core.next(inst_18568);var inst_18568__$1 = inst_18574;var state_18587__$1 = (function (){var statearr_18596 = state_18587;(statearr_18596[7] = inst_18568__$1);
(statearr_18596[8] = inst_18573);
return statearr_18596;
})();var statearr_18597_18614 = state_18587__$1;(statearr_18597_18614[2] = null);
(statearr_18597_18614[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18588 === 8))
{var inst_18578 = cljs.core.async.close_BANG_(ch);var state_18587__$1 = state_18587;var statearr_18598_18615 = state_18587__$1;(statearr_18598_18615[2] = inst_18578);
(statearr_18598_18615[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18588 === 9))
{var state_18587__$1 = state_18587;var statearr_18599_18616 = state_18587__$1;(statearr_18599_18616[2] = null);
(statearr_18599_18616[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18588 === 10))
{var inst_18581 = (state_18587[2]);var state_18587__$1 = state_18587;var statearr_18600_18617 = state_18587__$1;(statearr_18600_18617[2] = inst_18581);
(statearr_18600_18617[1] = 6);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_18604 = [null,null,null,null,null,null,null,null,null];(statearr_18604[0] = state_machine__5507__auto__);
(statearr_18604[1] = 1);
return statearr_18604;
});
var state_machine__5507__auto____1 = (function (state_18587){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18587);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18605){if((e18605 instanceof Object))
{var ex__5510__auto__ = e18605;var statearr_18606_18618 = state_18587;(statearr_18606_18618[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18587);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e18605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__18619 = state_18587;
state_18587 = G__18619;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18587){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18607 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18607;
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
cljs.core.async.Mux = (function (){var obj18621 = {};return obj18621;
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
cljs.core.async.Mult = (function (){var obj18623 = {};return obj18623;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18847 = (function (cs,ch,mult,meta18848){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18848 = meta18848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18847.cljs$lang$type = true;
cljs.core.async.t18847.cljs$lang$ctorStr = "cljs.core.async/t18847";
cljs.core.async.t18847.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t18847");
});})(cs))
;
cljs.core.async.t18847.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18847.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18847.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18847.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18847.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18849){var self__ = this;
var _18849__$1 = this;return self__.meta18848;
});})(cs))
;
cljs.core.async.t18847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18849,meta18848__$1){var self__ = this;
var _18849__$1 = this;return (new cljs.core.async.t18847(self__.cs,self__.ch,self__.mult,meta18848__$1));
});})(cs))
;
cljs.core.async.__GT_t18847 = ((function (cs){
return (function __GT_t18847(cs__$1,ch__$1,mult__$1,meta18848){return (new cljs.core.async.t18847(cs__$1,ch__$1,mult__$1,meta18848));
});})(cs))
;
}
return (new cljs.core.async.t18847(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___19070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18984){var state_val_18985 = (state_18984[1]);if((state_val_18985 === 32))
{var inst_18928 = (state_18984[7]);var inst_18852 = (state_18984[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18984,31,Object,null,30);var inst_18935 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18928,inst_18852,done);var state_18984__$1 = state_18984;var statearr_18986_19071 = state_18984__$1;(statearr_18986_19071[2] = inst_18935);
cljs.core.async.impl.ioc_helpers.process_exception(state_18984__$1);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 1))
{var state_18984__$1 = state_18984;var statearr_18987_19072 = state_18984__$1;(statearr_18987_19072[2] = null);
(statearr_18987_19072[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 33))
{var inst_18941 = (state_18984[9]);var inst_18943 = cljs.core.chunked_seq_QMARK_(inst_18941);var state_18984__$1 = state_18984;if(inst_18943)
{var statearr_18988_19073 = state_18984__$1;(statearr_18988_19073[1] = 36);
} else
{var statearr_18989_19074 = state_18984__$1;(statearr_18989_19074[1] = 37);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 2))
{var state_18984__$1 = state_18984;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18984__$1,4,ch);
} else
{if((state_val_18985 === 34))
{var state_18984__$1 = state_18984;var statearr_18990_19075 = state_18984__$1;(statearr_18990_19075[2] = null);
(statearr_18990_19075[1] = 35);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 3))
{var inst_18982 = (state_18984[2]);var state_18984__$1 = state_18984;return cljs.core.async.impl.ioc_helpers.return_chan(state_18984__$1,inst_18982);
} else
{if((state_val_18985 === 35))
{var inst_18966 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_18991_19076 = state_18984__$1;(statearr_18991_19076[2] = inst_18966);
(statearr_18991_19076[1] = 29);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 4))
{var inst_18852 = (state_18984[8]);var inst_18852__$1 = (state_18984[2]);var inst_18853 = (inst_18852__$1 == null);var state_18984__$1 = (function (){var statearr_18992 = state_18984;(statearr_18992[8] = inst_18852__$1);
return statearr_18992;
})();if(cljs.core.truth_(inst_18853))
{var statearr_18993_19077 = state_18984__$1;(statearr_18993_19077[1] = 5);
} else
{var statearr_18994_19078 = state_18984__$1;(statearr_18994_19078[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 36))
{var inst_18941 = (state_18984[9]);var inst_18945 = cljs.core.chunk_first(inst_18941);var inst_18946 = cljs.core.chunk_rest(inst_18941);var inst_18947 = cljs.core.count(inst_18945);var inst_18920 = inst_18946;var inst_18921 = inst_18945;var inst_18922 = inst_18947;var inst_18923 = 0;var state_18984__$1 = (function (){var statearr_18995 = state_18984;(statearr_18995[10] = inst_18920);
(statearr_18995[11] = inst_18923);
(statearr_18995[12] = inst_18922);
(statearr_18995[13] = inst_18921);
return statearr_18995;
})();var statearr_18996_19079 = state_18984__$1;(statearr_18996_19079[2] = null);
(statearr_18996_19079[1] = 25);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 5))
{var inst_18859 = cljs.core.deref(cs);var inst_18860 = cljs.core.seq(inst_18859);var inst_18861 = inst_18860;var inst_18862 = null;var inst_18863 = 0;var inst_18864 = 0;var state_18984__$1 = (function (){var statearr_18997 = state_18984;(statearr_18997[14] = inst_18864);
(statearr_18997[15] = inst_18862);
(statearr_18997[16] = inst_18863);
(statearr_18997[17] = inst_18861);
return statearr_18997;
})();var statearr_18998_19080 = state_18984__$1;(statearr_18998_19080[2] = null);
(statearr_18998_19080[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 37))
{var inst_18941 = (state_18984[9]);var inst_18950 = cljs.core.first(inst_18941);var state_18984__$1 = (function (){var statearr_18999 = state_18984;(statearr_18999[18] = inst_18950);
return statearr_18999;
})();var statearr_19000_19081 = state_18984__$1;(statearr_19000_19081[2] = null);
(statearr_19000_19081[1] = 41);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 6))
{var inst_18912 = (state_18984[19]);var inst_18911 = cljs.core.deref(cs);var inst_18912__$1 = cljs.core.keys(inst_18911);var inst_18913 = cljs.core.count(inst_18912__$1);var inst_18914 = cljs.core.reset_BANG_(dctr,inst_18913);var inst_18919 = cljs.core.seq(inst_18912__$1);var inst_18920 = inst_18919;var inst_18921 = null;var inst_18922 = 0;var inst_18923 = 0;var state_18984__$1 = (function (){var statearr_19001 = state_18984;(statearr_19001[10] = inst_18920);
(statearr_19001[20] = inst_18914);
(statearr_19001[11] = inst_18923);
(statearr_19001[12] = inst_18922);
(statearr_19001[13] = inst_18921);
(statearr_19001[19] = inst_18912__$1);
return statearr_19001;
})();var statearr_19002_19082 = state_18984__$1;(statearr_19002_19082[2] = null);
(statearr_19002_19082[1] = 25);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 38))
{var inst_18963 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19003_19083 = state_18984__$1;(statearr_19003_19083[2] = inst_18963);
(statearr_19003_19083[1] = 35);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 7))
{var inst_18980 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19004_19084 = state_18984__$1;(statearr_19004_19084[2] = inst_18980);
(statearr_19004_19084[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 39))
{var inst_18941 = (state_18984[9]);var inst_18959 = (state_18984[2]);var inst_18960 = cljs.core.next(inst_18941);var inst_18920 = inst_18960;var inst_18921 = null;var inst_18922 = 0;var inst_18923 = 0;var state_18984__$1 = (function (){var statearr_19005 = state_18984;(statearr_19005[10] = inst_18920);
(statearr_19005[21] = inst_18959);
(statearr_19005[11] = inst_18923);
(statearr_19005[12] = inst_18922);
(statearr_19005[13] = inst_18921);
return statearr_19005;
})();var statearr_19006_19085 = state_18984__$1;(statearr_19006_19085[2] = null);
(statearr_19006_19085[1] = 25);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 8))
{var inst_18864 = (state_18984[14]);var inst_18863 = (state_18984[16]);var inst_18866 = (inst_18864 < inst_18863);var inst_18867 = inst_18866;var state_18984__$1 = state_18984;if(cljs.core.truth_(inst_18867))
{var statearr_19007_19086 = state_18984__$1;(statearr_19007_19086[1] = 10);
} else
{var statearr_19008_19087 = state_18984__$1;(statearr_19008_19087[1] = 11);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 40))
{var inst_18950 = (state_18984[18]);var inst_18951 = (state_18984[2]);var inst_18952 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_18953 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18950);var state_18984__$1 = (function (){var statearr_19009 = state_18984;(statearr_19009[22] = inst_18952);
(statearr_19009[23] = inst_18951);
return statearr_19009;
})();var statearr_19010_19088 = state_18984__$1;(statearr_19010_19088[2] = inst_18953);
cljs.core.async.impl.ioc_helpers.process_exception(state_18984__$1);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 9))
{var inst_18909 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19011_19089 = state_18984__$1;(statearr_19011_19089[2] = inst_18909);
(statearr_19011_19089[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 41))
{var inst_18852 = (state_18984[8]);var inst_18950 = (state_18984[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18984,40,Object,null,39);var inst_18957 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18950,inst_18852,done);var state_18984__$1 = state_18984;var statearr_19012_19090 = state_18984__$1;(statearr_19012_19090[2] = inst_18957);
cljs.core.async.impl.ioc_helpers.process_exception(state_18984__$1);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 10))
{var inst_18864 = (state_18984[14]);var inst_18862 = (state_18984[15]);var inst_18870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18862,inst_18864);var inst_18871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18870,0,null);var inst_18872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18870,1,null);var state_18984__$1 = (function (){var statearr_19013 = state_18984;(statearr_19013[24] = inst_18871);
return statearr_19013;
})();if(cljs.core.truth_(inst_18872))
{var statearr_19014_19091 = state_18984__$1;(statearr_19014_19091[1] = 13);
} else
{var statearr_19015_19092 = state_18984__$1;(statearr_19015_19092[1] = 14);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 42))
{var state_18984__$1 = state_18984;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18984__$1,45,dchan);
} else
{if((state_val_18985 === 11))
{var inst_18881 = (state_18984[25]);var inst_18861 = (state_18984[17]);var inst_18881__$1 = cljs.core.seq(inst_18861);var state_18984__$1 = (function (){var statearr_19016 = state_18984;(statearr_19016[25] = inst_18881__$1);
return statearr_19016;
})();if(inst_18881__$1)
{var statearr_19017_19093 = state_18984__$1;(statearr_19017_19093[1] = 16);
} else
{var statearr_19018_19094 = state_18984__$1;(statearr_19018_19094[1] = 17);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 43))
{var state_18984__$1 = state_18984;var statearr_19019_19095 = state_18984__$1;(statearr_19019_19095[2] = null);
(statearr_19019_19095[1] = 44);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 12))
{var inst_18907 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19020_19096 = state_18984__$1;(statearr_19020_19096[2] = inst_18907);
(statearr_19020_19096[1] = 9);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 44))
{var inst_18977 = (state_18984[2]);var state_18984__$1 = (function (){var statearr_19021 = state_18984;(statearr_19021[26] = inst_18977);
return statearr_19021;
})();var statearr_19022_19097 = state_18984__$1;(statearr_19022_19097[2] = null);
(statearr_19022_19097[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 13))
{var inst_18871 = (state_18984[24]);var inst_18874 = cljs.core.async.close_BANG_(inst_18871);var state_18984__$1 = state_18984;var statearr_19023_19098 = state_18984__$1;(statearr_19023_19098[2] = inst_18874);
(statearr_19023_19098[1] = 15);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 45))
{var inst_18974 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19027_19099 = state_18984__$1;(statearr_19027_19099[2] = inst_18974);
(statearr_19027_19099[1] = 44);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 14))
{var state_18984__$1 = state_18984;var statearr_19028_19100 = state_18984__$1;(statearr_19028_19100[2] = null);
(statearr_19028_19100[1] = 15);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 15))
{var inst_18864 = (state_18984[14]);var inst_18862 = (state_18984[15]);var inst_18863 = (state_18984[16]);var inst_18861 = (state_18984[17]);var inst_18877 = (state_18984[2]);var inst_18878 = (inst_18864 + 1);var tmp19024 = inst_18862;var tmp19025 = inst_18863;var tmp19026 = inst_18861;var inst_18861__$1 = tmp19026;var inst_18862__$1 = tmp19024;var inst_18863__$1 = tmp19025;var inst_18864__$1 = inst_18878;var state_18984__$1 = (function (){var statearr_19029 = state_18984;(statearr_19029[14] = inst_18864__$1);
(statearr_19029[15] = inst_18862__$1);
(statearr_19029[16] = inst_18863__$1);
(statearr_19029[17] = inst_18861__$1);
(statearr_19029[27] = inst_18877);
return statearr_19029;
})();var statearr_19030_19101 = state_18984__$1;(statearr_19030_19101[2] = null);
(statearr_19030_19101[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 16))
{var inst_18881 = (state_18984[25]);var inst_18883 = cljs.core.chunked_seq_QMARK_(inst_18881);var state_18984__$1 = state_18984;if(inst_18883)
{var statearr_19031_19102 = state_18984__$1;(statearr_19031_19102[1] = 19);
} else
{var statearr_19032_19103 = state_18984__$1;(statearr_19032_19103[1] = 20);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 17))
{var state_18984__$1 = state_18984;var statearr_19033_19104 = state_18984__$1;(statearr_19033_19104[2] = null);
(statearr_19033_19104[1] = 18);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 18))
{var inst_18905 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19034_19105 = state_18984__$1;(statearr_19034_19105[2] = inst_18905);
(statearr_19034_19105[1] = 12);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 19))
{var inst_18881 = (state_18984[25]);var inst_18885 = cljs.core.chunk_first(inst_18881);var inst_18886 = cljs.core.chunk_rest(inst_18881);var inst_18887 = cljs.core.count(inst_18885);var inst_18861 = inst_18886;var inst_18862 = inst_18885;var inst_18863 = inst_18887;var inst_18864 = 0;var state_18984__$1 = (function (){var statearr_19035 = state_18984;(statearr_19035[14] = inst_18864);
(statearr_19035[15] = inst_18862);
(statearr_19035[16] = inst_18863);
(statearr_19035[17] = inst_18861);
return statearr_19035;
})();var statearr_19036_19106 = state_18984__$1;(statearr_19036_19106[2] = null);
(statearr_19036_19106[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 20))
{var inst_18881 = (state_18984[25]);var inst_18891 = cljs.core.first(inst_18881);var inst_18892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18891,0,null);var inst_18893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18891,1,null);var state_18984__$1 = (function (){var statearr_19037 = state_18984;(statearr_19037[28] = inst_18892);
return statearr_19037;
})();if(cljs.core.truth_(inst_18893))
{var statearr_19038_19107 = state_18984__$1;(statearr_19038_19107[1] = 22);
} else
{var statearr_19039_19108 = state_18984__$1;(statearr_19039_19108[1] = 23);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 21))
{var inst_18902 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19040_19109 = state_18984__$1;(statearr_19040_19109[2] = inst_18902);
(statearr_19040_19109[1] = 18);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 22))
{var inst_18892 = (state_18984[28]);var inst_18895 = cljs.core.async.close_BANG_(inst_18892);var state_18984__$1 = state_18984;var statearr_19041_19110 = state_18984__$1;(statearr_19041_19110[2] = inst_18895);
(statearr_19041_19110[1] = 24);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 23))
{var state_18984__$1 = state_18984;var statearr_19042_19111 = state_18984__$1;(statearr_19042_19111[2] = null);
(statearr_19042_19111[1] = 24);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 24))
{var inst_18881 = (state_18984[25]);var inst_18898 = (state_18984[2]);var inst_18899 = cljs.core.next(inst_18881);var inst_18861 = inst_18899;var inst_18862 = null;var inst_18863 = 0;var inst_18864 = 0;var state_18984__$1 = (function (){var statearr_19043 = state_18984;(statearr_19043[29] = inst_18898);
(statearr_19043[14] = inst_18864);
(statearr_19043[15] = inst_18862);
(statearr_19043[16] = inst_18863);
(statearr_19043[17] = inst_18861);
return statearr_19043;
})();var statearr_19044_19112 = state_18984__$1;(statearr_19044_19112[2] = null);
(statearr_19044_19112[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 25))
{var inst_18923 = (state_18984[11]);var inst_18922 = (state_18984[12]);var inst_18925 = (inst_18923 < inst_18922);var inst_18926 = inst_18925;var state_18984__$1 = state_18984;if(cljs.core.truth_(inst_18926))
{var statearr_19045_19113 = state_18984__$1;(statearr_19045_19113[1] = 27);
} else
{var statearr_19046_19114 = state_18984__$1;(statearr_19046_19114[1] = 28);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 26))
{var inst_18912 = (state_18984[19]);var inst_18970 = (state_18984[2]);var inst_18971 = cljs.core.seq(inst_18912);var state_18984__$1 = (function (){var statearr_19047 = state_18984;(statearr_19047[30] = inst_18970);
return statearr_19047;
})();if(inst_18971)
{var statearr_19048_19115 = state_18984__$1;(statearr_19048_19115[1] = 42);
} else
{var statearr_19049_19116 = state_18984__$1;(statearr_19049_19116[1] = 43);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 27))
{var inst_18923 = (state_18984[11]);var inst_18921 = (state_18984[13]);var inst_18928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18921,inst_18923);var state_18984__$1 = (function (){var statearr_19050 = state_18984;(statearr_19050[7] = inst_18928);
return statearr_19050;
})();var statearr_19051_19117 = state_18984__$1;(statearr_19051_19117[2] = null);
(statearr_19051_19117[1] = 32);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 28))
{var inst_18920 = (state_18984[10]);var inst_18941 = (state_18984[9]);var inst_18941__$1 = cljs.core.seq(inst_18920);var state_18984__$1 = (function (){var statearr_19055 = state_18984;(statearr_19055[9] = inst_18941__$1);
return statearr_19055;
})();if(inst_18941__$1)
{var statearr_19056_19118 = state_18984__$1;(statearr_19056_19118[1] = 33);
} else
{var statearr_19057_19119 = state_18984__$1;(statearr_19057_19119[1] = 34);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 29))
{var inst_18968 = (state_18984[2]);var state_18984__$1 = state_18984;var statearr_19058_19120 = state_18984__$1;(statearr_19058_19120[2] = inst_18968);
(statearr_19058_19120[1] = 26);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 30))
{var inst_18920 = (state_18984[10]);var inst_18923 = (state_18984[11]);var inst_18922 = (state_18984[12]);var inst_18921 = (state_18984[13]);var inst_18937 = (state_18984[2]);var inst_18938 = (inst_18923 + 1);var tmp19052 = inst_18920;var tmp19053 = inst_18922;var tmp19054 = inst_18921;var inst_18920__$1 = tmp19052;var inst_18921__$1 = tmp19054;var inst_18922__$1 = tmp19053;var inst_18923__$1 = inst_18938;var state_18984__$1 = (function (){var statearr_19059 = state_18984;(statearr_19059[10] = inst_18920__$1);
(statearr_19059[11] = inst_18923__$1);
(statearr_19059[12] = inst_18922__$1);
(statearr_19059[13] = inst_18921__$1);
(statearr_19059[31] = inst_18937);
return statearr_19059;
})();var statearr_19060_19121 = state_18984__$1;(statearr_19060_19121[2] = null);
(statearr_19060_19121[1] = 25);
return cljs.core.constant$keyword$77;
} else
{if((state_val_18985 === 31))
{var inst_18928 = (state_18984[7]);var inst_18929 = (state_18984[2]);var inst_18930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_18931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18928);var state_18984__$1 = (function (){var statearr_19061 = state_18984;(statearr_19061[32] = inst_18930);
(statearr_19061[33] = inst_18929);
return statearr_19061;
})();var statearr_19062_19122 = state_18984__$1;(statearr_19062_19122[2] = inst_18931);
cljs.core.async.impl.ioc_helpers.process_exception(state_18984__$1);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_19066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19066[0] = state_machine__5507__auto__);
(statearr_19066[1] = 1);
return statearr_19066;
});
var state_machine__5507__auto____1 = (function (state_18984){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18984);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19067){if((e19067 instanceof Object))
{var ex__5510__auto__ = e19067;var statearr_19068_19123 = state_18984;(statearr_19068_19123[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18984);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e19067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__19124 = state_18984;
state_18984 = G__19124;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18984){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19069 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19070);
return statearr_19069;
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
cljs.core.async.Mix = (function (){var obj19126 = {};return obj19126;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$84,null,cljs.core.constant$keyword$85,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$86);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$85);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$86,chs);var pauses = pick(cljs.core.constant$keyword$84,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$87,solos,cljs.core.constant$keyword$88,pick(cljs.core.constant$keyword$85,chs),cljs.core.constant$keyword$89,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$84)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19236 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19237){
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
this.meta19237 = meta19237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19236.cljs$lang$type = true;
cljs.core.async.t19236.cljs$lang$ctorStr = "cljs.core.async/t19236";
cljs.core.async.t19236.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t19236");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19238){var self__ = this;
var _19238__$1 = this;return self__.meta19237;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19238,meta19237__$1){var self__ = this;
var _19238__$1 = this;return (new cljs.core.async.t19236(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19237__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19236 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19236(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19237){return (new cljs.core.async.t19236(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19237));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19236(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___19345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19303){var state_val_19304 = (state_19303[1]);if((state_val_19304 === 1))
{var inst_19242 = (state_19303[7]);var inst_19242__$1 = calc_state();var inst_19243 = cljs.core.seq_QMARK_(inst_19242__$1);var state_19303__$1 = (function (){var statearr_19305 = state_19303;(statearr_19305[7] = inst_19242__$1);
return statearr_19305;
})();if(inst_19243)
{var statearr_19306_19346 = state_19303__$1;(statearr_19306_19346[1] = 2);
} else
{var statearr_19307_19347 = state_19303__$1;(statearr_19307_19347[1] = 3);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 2))
{var inst_19242 = (state_19303[7]);var inst_19245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19242);var state_19303__$1 = state_19303;var statearr_19308_19348 = state_19303__$1;(statearr_19308_19348[2] = inst_19245);
(statearr_19308_19348[1] = 4);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 3))
{var inst_19242 = (state_19303[7]);var state_19303__$1 = state_19303;var statearr_19309_19349 = state_19303__$1;(statearr_19309_19349[2] = inst_19242);
(statearr_19309_19349[1] = 4);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 4))
{var inst_19242 = (state_19303[7]);var inst_19248 = (state_19303[2]);var inst_19249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19248,cljs.core.constant$keyword$89);var inst_19250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19248,cljs.core.constant$keyword$88);var inst_19251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19248,cljs.core.constant$keyword$87);var inst_19252 = inst_19242;var state_19303__$1 = (function (){var statearr_19310 = state_19303;(statearr_19310[8] = inst_19250);
(statearr_19310[9] = inst_19249);
(statearr_19310[10] = inst_19251);
(statearr_19310[11] = inst_19252);
return statearr_19310;
})();var statearr_19311_19350 = state_19303__$1;(statearr_19311_19350[2] = null);
(statearr_19311_19350[1] = 5);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 5))
{var inst_19252 = (state_19303[11]);var inst_19255 = cljs.core.seq_QMARK_(inst_19252);var state_19303__$1 = state_19303;if(inst_19255)
{var statearr_19312_19351 = state_19303__$1;(statearr_19312_19351[1] = 7);
} else
{var statearr_19313_19352 = state_19303__$1;(statearr_19313_19352[1] = 8);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 6))
{var inst_19301 = (state_19303[2]);var state_19303__$1 = state_19303;return cljs.core.async.impl.ioc_helpers.return_chan(state_19303__$1,inst_19301);
} else
{if((state_val_19304 === 7))
{var inst_19252 = (state_19303[11]);var inst_19257 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19252);var state_19303__$1 = state_19303;var statearr_19314_19353 = state_19303__$1;(statearr_19314_19353[2] = inst_19257);
(statearr_19314_19353[1] = 9);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 8))
{var inst_19252 = (state_19303[11]);var state_19303__$1 = state_19303;var statearr_19315_19354 = state_19303__$1;(statearr_19315_19354[2] = inst_19252);
(statearr_19315_19354[1] = 9);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 9))
{var inst_19260 = (state_19303[12]);var inst_19260__$1 = (state_19303[2]);var inst_19261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19260__$1,cljs.core.constant$keyword$89);var inst_19262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19260__$1,cljs.core.constant$keyword$88);var inst_19263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19260__$1,cljs.core.constant$keyword$87);var state_19303__$1 = (function (){var statearr_19316 = state_19303;(statearr_19316[12] = inst_19260__$1);
(statearr_19316[13] = inst_19262);
(statearr_19316[14] = inst_19263);
return statearr_19316;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_19303__$1,10,inst_19261);
} else
{if((state_val_19304 === 10))
{var inst_19268 = (state_19303[15]);var inst_19267 = (state_19303[16]);var inst_19266 = (state_19303[2]);var inst_19267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19266,0,null);var inst_19268__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19266,1,null);var inst_19269 = (inst_19267__$1 == null);var inst_19270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19268__$1,change);var inst_19271 = (inst_19269) || (inst_19270);var state_19303__$1 = (function (){var statearr_19317 = state_19303;(statearr_19317[15] = inst_19268__$1);
(statearr_19317[16] = inst_19267__$1);
return statearr_19317;
})();if(cljs.core.truth_(inst_19271))
{var statearr_19318_19355 = state_19303__$1;(statearr_19318_19355[1] = 11);
} else
{var statearr_19319_19356 = state_19303__$1;(statearr_19319_19356[1] = 12);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 11))
{var inst_19267 = (state_19303[16]);var inst_19273 = (inst_19267 == null);var state_19303__$1 = state_19303;if(cljs.core.truth_(inst_19273))
{var statearr_19320_19357 = state_19303__$1;(statearr_19320_19357[1] = 14);
} else
{var statearr_19321_19358 = state_19303__$1;(statearr_19321_19358[1] = 15);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 12))
{var inst_19282 = (state_19303[17]);var inst_19268 = (state_19303[15]);var inst_19263 = (state_19303[14]);var inst_19282__$1 = (inst_19263.cljs$core$IFn$_invoke$arity$1 ? inst_19263.cljs$core$IFn$_invoke$arity$1(inst_19268) : inst_19263.call(null,inst_19268));var state_19303__$1 = (function (){var statearr_19322 = state_19303;(statearr_19322[17] = inst_19282__$1);
return statearr_19322;
})();if(cljs.core.truth_(inst_19282__$1))
{var statearr_19323_19359 = state_19303__$1;(statearr_19323_19359[1] = 17);
} else
{var statearr_19324_19360 = state_19303__$1;(statearr_19324_19360[1] = 18);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 13))
{var inst_19299 = (state_19303[2]);var state_19303__$1 = state_19303;var statearr_19325_19361 = state_19303__$1;(statearr_19325_19361[2] = inst_19299);
(statearr_19325_19361[1] = 6);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 14))
{var inst_19268 = (state_19303[15]);var inst_19275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19268);var state_19303__$1 = state_19303;var statearr_19326_19362 = state_19303__$1;(statearr_19326_19362[2] = inst_19275);
(statearr_19326_19362[1] = 16);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 15))
{var state_19303__$1 = state_19303;var statearr_19327_19363 = state_19303__$1;(statearr_19327_19363[2] = null);
(statearr_19327_19363[1] = 16);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 16))
{var inst_19278 = (state_19303[2]);var inst_19279 = calc_state();var inst_19252 = inst_19279;var state_19303__$1 = (function (){var statearr_19328 = state_19303;(statearr_19328[18] = inst_19278);
(statearr_19328[11] = inst_19252);
return statearr_19328;
})();var statearr_19329_19364 = state_19303__$1;(statearr_19329_19364[2] = null);
(statearr_19329_19364[1] = 5);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 17))
{var inst_19282 = (state_19303[17]);var state_19303__$1 = state_19303;var statearr_19330_19365 = state_19303__$1;(statearr_19330_19365[2] = inst_19282);
(statearr_19330_19365[1] = 19);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 18))
{var inst_19268 = (state_19303[15]);var inst_19262 = (state_19303[13]);var inst_19263 = (state_19303[14]);var inst_19285 = cljs.core.empty_QMARK_(inst_19263);var inst_19286 = (inst_19262.cljs$core$IFn$_invoke$arity$1 ? inst_19262.cljs$core$IFn$_invoke$arity$1(inst_19268) : inst_19262.call(null,inst_19268));var inst_19287 = cljs.core.not(inst_19286);var inst_19288 = (inst_19285) && (inst_19287);var state_19303__$1 = state_19303;var statearr_19331_19366 = state_19303__$1;(statearr_19331_19366[2] = inst_19288);
(statearr_19331_19366[1] = 19);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 19))
{var inst_19290 = (state_19303[2]);var state_19303__$1 = state_19303;if(cljs.core.truth_(inst_19290))
{var statearr_19332_19367 = state_19303__$1;(statearr_19332_19367[1] = 20);
} else
{var statearr_19333_19368 = state_19303__$1;(statearr_19333_19368[1] = 21);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 20))
{var inst_19267 = (state_19303[16]);var state_19303__$1 = state_19303;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19303__$1,23,out,inst_19267);
} else
{if((state_val_19304 === 21))
{var state_19303__$1 = state_19303;var statearr_19334_19369 = state_19303__$1;(statearr_19334_19369[2] = null);
(statearr_19334_19369[1] = 22);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 22))
{var inst_19260 = (state_19303[12]);var inst_19296 = (state_19303[2]);var inst_19252 = inst_19260;var state_19303__$1 = (function (){var statearr_19335 = state_19303;(statearr_19335[11] = inst_19252);
(statearr_19335[19] = inst_19296);
return statearr_19335;
})();var statearr_19336_19370 = state_19303__$1;(statearr_19336_19370[2] = null);
(statearr_19336_19370[1] = 5);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19304 === 23))
{var inst_19293 = (state_19303[2]);var state_19303__$1 = state_19303;var statearr_19337_19371 = state_19303__$1;(statearr_19337_19371[2] = inst_19293);
(statearr_19337_19371[1] = 22);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_19341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19341[0] = state_machine__5507__auto__);
(statearr_19341[1] = 1);
return statearr_19341;
});
var state_machine__5507__auto____1 = (function (state_19303){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19303);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19342){if((e19342 instanceof Object))
{var ex__5510__auto__ = e19342;var statearr_19343_19372 = state_19303;(statearr_19343_19372[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19303);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e19342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__19373 = state_19303;
state_19303 = G__19373;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19303){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19344 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19345);
return statearr_19344;
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
cljs.core.async.Pub = (function (){var obj19375 = {};return obj19375;
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
return (function (p1__19376_SHARP_){if(cljs.core.truth_((p1__19376_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19376_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19376_SHARP_.call(null,topic))))
{return p1__19376_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19376_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19501 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19501 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19502){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19502 = meta19502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19501.cljs$lang$type = true;
cljs.core.async.t19501.cljs$lang$ctorStr = "cljs.core.async/t19501";
cljs.core.async.t19501.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t19501");
});})(mults,ensure_mult))
;
cljs.core.async.t19501.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19501.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19501.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19501.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19503){var self__ = this;
var _19503__$1 = this;return self__.meta19502;
});})(mults,ensure_mult))
;
cljs.core.async.t19501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19503,meta19502__$1){var self__ = this;
var _19503__$1 = this;return (new cljs.core.async.t19501(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19502__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19501 = ((function (mults,ensure_mult){
return (function __GT_t19501(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19502){return (new cljs.core.async.t19501(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19502));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19501(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___19625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19577){var state_val_19578 = (state_19577[1]);if((state_val_19578 === 1))
{var state_19577__$1 = state_19577;var statearr_19579_19626 = state_19577__$1;(statearr_19579_19626[2] = null);
(statearr_19579_19626[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 2))
{var state_19577__$1 = state_19577;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19577__$1,4,ch);
} else
{if((state_val_19578 === 3))
{var inst_19575 = (state_19577[2]);var state_19577__$1 = state_19577;return cljs.core.async.impl.ioc_helpers.return_chan(state_19577__$1,inst_19575);
} else
{if((state_val_19578 === 4))
{var inst_19506 = (state_19577[7]);var inst_19506__$1 = (state_19577[2]);var inst_19507 = (inst_19506__$1 == null);var state_19577__$1 = (function (){var statearr_19580 = state_19577;(statearr_19580[7] = inst_19506__$1);
return statearr_19580;
})();if(cljs.core.truth_(inst_19507))
{var statearr_19581_19627 = state_19577__$1;(statearr_19581_19627[1] = 5);
} else
{var statearr_19582_19628 = state_19577__$1;(statearr_19582_19628[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 5))
{var inst_19513 = cljs.core.deref(mults);var inst_19514 = cljs.core.vals(inst_19513);var inst_19515 = cljs.core.seq(inst_19514);var inst_19516 = inst_19515;var inst_19517 = null;var inst_19518 = 0;var inst_19519 = 0;var state_19577__$1 = (function (){var statearr_19583 = state_19577;(statearr_19583[8] = inst_19519);
(statearr_19583[9] = inst_19518);
(statearr_19583[10] = inst_19517);
(statearr_19583[11] = inst_19516);
return statearr_19583;
})();var statearr_19584_19629 = state_19577__$1;(statearr_19584_19629[2] = null);
(statearr_19584_19629[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 6))
{var inst_19506 = (state_19577[7]);var inst_19556 = (state_19577[12]);var inst_19554 = (state_19577[13]);var inst_19554__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19506) : topic_fn.call(null,inst_19506));var inst_19555 = cljs.core.deref(mults);var inst_19556__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19555,inst_19554__$1);var state_19577__$1 = (function (){var statearr_19585 = state_19577;(statearr_19585[12] = inst_19556__$1);
(statearr_19585[13] = inst_19554__$1);
return statearr_19585;
})();if(cljs.core.truth_(inst_19556__$1))
{var statearr_19586_19630 = state_19577__$1;(statearr_19586_19630[1] = 19);
} else
{var statearr_19587_19631 = state_19577__$1;(statearr_19587_19631[1] = 20);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 7))
{var inst_19573 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19588_19632 = state_19577__$1;(statearr_19588_19632[2] = inst_19573);
(statearr_19588_19632[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 8))
{var inst_19519 = (state_19577[8]);var inst_19518 = (state_19577[9]);var inst_19521 = (inst_19519 < inst_19518);var inst_19522 = inst_19521;var state_19577__$1 = state_19577;if(cljs.core.truth_(inst_19522))
{var statearr_19592_19633 = state_19577__$1;(statearr_19592_19633[1] = 10);
} else
{var statearr_19593_19634 = state_19577__$1;(statearr_19593_19634[1] = 11);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 9))
{var inst_19552 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19594_19635 = state_19577__$1;(statearr_19594_19635[2] = inst_19552);
(statearr_19594_19635[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 10))
{var inst_19519 = (state_19577[8]);var inst_19518 = (state_19577[9]);var inst_19517 = (state_19577[10]);var inst_19516 = (state_19577[11]);var inst_19524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19517,inst_19519);var inst_19525 = cljs.core.async.muxch_STAR_(inst_19524);var inst_19526 = cljs.core.async.close_BANG_(inst_19525);var inst_19527 = (inst_19519 + 1);var tmp19589 = inst_19518;var tmp19590 = inst_19517;var tmp19591 = inst_19516;var inst_19516__$1 = tmp19591;var inst_19517__$1 = tmp19590;var inst_19518__$1 = tmp19589;var inst_19519__$1 = inst_19527;var state_19577__$1 = (function (){var statearr_19595 = state_19577;(statearr_19595[8] = inst_19519__$1);
(statearr_19595[14] = inst_19526);
(statearr_19595[9] = inst_19518__$1);
(statearr_19595[10] = inst_19517__$1);
(statearr_19595[11] = inst_19516__$1);
return statearr_19595;
})();var statearr_19596_19636 = state_19577__$1;(statearr_19596_19636[2] = null);
(statearr_19596_19636[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 11))
{var inst_19530 = (state_19577[15]);var inst_19516 = (state_19577[11]);var inst_19530__$1 = cljs.core.seq(inst_19516);var state_19577__$1 = (function (){var statearr_19597 = state_19577;(statearr_19597[15] = inst_19530__$1);
return statearr_19597;
})();if(inst_19530__$1)
{var statearr_19598_19637 = state_19577__$1;(statearr_19598_19637[1] = 13);
} else
{var statearr_19599_19638 = state_19577__$1;(statearr_19599_19638[1] = 14);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 12))
{var inst_19550 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19600_19639 = state_19577__$1;(statearr_19600_19639[2] = inst_19550);
(statearr_19600_19639[1] = 9);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 13))
{var inst_19530 = (state_19577[15]);var inst_19532 = cljs.core.chunked_seq_QMARK_(inst_19530);var state_19577__$1 = state_19577;if(inst_19532)
{var statearr_19601_19640 = state_19577__$1;(statearr_19601_19640[1] = 16);
} else
{var statearr_19602_19641 = state_19577__$1;(statearr_19602_19641[1] = 17);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 14))
{var state_19577__$1 = state_19577;var statearr_19603_19642 = state_19577__$1;(statearr_19603_19642[2] = null);
(statearr_19603_19642[1] = 15);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 15))
{var inst_19548 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19604_19643 = state_19577__$1;(statearr_19604_19643[2] = inst_19548);
(statearr_19604_19643[1] = 12);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 16))
{var inst_19530 = (state_19577[15]);var inst_19534 = cljs.core.chunk_first(inst_19530);var inst_19535 = cljs.core.chunk_rest(inst_19530);var inst_19536 = cljs.core.count(inst_19534);var inst_19516 = inst_19535;var inst_19517 = inst_19534;var inst_19518 = inst_19536;var inst_19519 = 0;var state_19577__$1 = (function (){var statearr_19605 = state_19577;(statearr_19605[8] = inst_19519);
(statearr_19605[9] = inst_19518);
(statearr_19605[10] = inst_19517);
(statearr_19605[11] = inst_19516);
return statearr_19605;
})();var statearr_19606_19644 = state_19577__$1;(statearr_19606_19644[2] = null);
(statearr_19606_19644[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 17))
{var inst_19530 = (state_19577[15]);var inst_19539 = cljs.core.first(inst_19530);var inst_19540 = cljs.core.async.muxch_STAR_(inst_19539);var inst_19541 = cljs.core.async.close_BANG_(inst_19540);var inst_19542 = cljs.core.next(inst_19530);var inst_19516 = inst_19542;var inst_19517 = null;var inst_19518 = 0;var inst_19519 = 0;var state_19577__$1 = (function (){var statearr_19607 = state_19577;(statearr_19607[16] = inst_19541);
(statearr_19607[8] = inst_19519);
(statearr_19607[9] = inst_19518);
(statearr_19607[10] = inst_19517);
(statearr_19607[11] = inst_19516);
return statearr_19607;
})();var statearr_19608_19645 = state_19577__$1;(statearr_19608_19645[2] = null);
(statearr_19608_19645[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 18))
{var inst_19545 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19609_19646 = state_19577__$1;(statearr_19609_19646[2] = inst_19545);
(statearr_19609_19646[1] = 15);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 19))
{var state_19577__$1 = state_19577;var statearr_19610_19647 = state_19577__$1;(statearr_19610_19647[2] = null);
(statearr_19610_19647[1] = 24);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 20))
{var state_19577__$1 = state_19577;var statearr_19611_19648 = state_19577__$1;(statearr_19611_19648[2] = null);
(statearr_19611_19648[1] = 21);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 21))
{var inst_19570 = (state_19577[2]);var state_19577__$1 = (function (){var statearr_19612 = state_19577;(statearr_19612[17] = inst_19570);
return statearr_19612;
})();var statearr_19613_19649 = state_19577__$1;(statearr_19613_19649[2] = null);
(statearr_19613_19649[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 22))
{var inst_19567 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19614_19650 = state_19577__$1;(statearr_19614_19650[2] = inst_19567);
(statearr_19614_19650[1] = 21);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 23))
{var inst_19554 = (state_19577[13]);var inst_19558 = (state_19577[2]);var inst_19559 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19554);var state_19577__$1 = (function (){var statearr_19615 = state_19577;(statearr_19615[18] = inst_19558);
return statearr_19615;
})();var statearr_19616_19651 = state_19577__$1;(statearr_19616_19651[2] = inst_19559);
cljs.core.async.impl.ioc_helpers.process_exception(state_19577__$1);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19578 === 24))
{var inst_19506 = (state_19577[7]);var inst_19556 = (state_19577[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19577,23,Object,null,22);var inst_19563 = cljs.core.async.muxch_STAR_(inst_19556);var state_19577__$1 = state_19577;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19577__$1,25,inst_19563,inst_19506);
} else
{if((state_val_19578 === 25))
{var inst_19565 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19617_19652 = state_19577__$1;(statearr_19617_19652[2] = inst_19565);
cljs.core.async.impl.ioc_helpers.process_exception(state_19577__$1);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_19621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19621[0] = state_machine__5507__auto__);
(statearr_19621[1] = 1);
return statearr_19621;
});
var state_machine__5507__auto____1 = (function (state_19577){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19577);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19622){if((e19622 instanceof Object))
{var ex__5510__auto__ = e19622;var statearr_19623_19653 = state_19577;(statearr_19623_19653[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19577);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e19622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__19654 = state_19577;
state_19577 = G__19654;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19577){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19624 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19625);
return statearr_19624;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___19791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19761){var state_val_19762 = (state_19761[1]);if((state_val_19762 === 1))
{var state_19761__$1 = state_19761;var statearr_19763_19792 = state_19761__$1;(statearr_19763_19792[2] = null);
(statearr_19763_19792[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 2))
{var inst_19724 = cljs.core.reset_BANG_(dctr,cnt);var inst_19725 = 0;var state_19761__$1 = (function (){var statearr_19764 = state_19761;(statearr_19764[7] = inst_19725);
(statearr_19764[8] = inst_19724);
return statearr_19764;
})();var statearr_19765_19793 = state_19761__$1;(statearr_19765_19793[2] = null);
(statearr_19765_19793[1] = 4);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 3))
{var inst_19759 = (state_19761[2]);var state_19761__$1 = state_19761;return cljs.core.async.impl.ioc_helpers.return_chan(state_19761__$1,inst_19759);
} else
{if((state_val_19762 === 4))
{var inst_19725 = (state_19761[7]);var inst_19727 = (inst_19725 < cnt);var state_19761__$1 = state_19761;if(cljs.core.truth_(inst_19727))
{var statearr_19766_19794 = state_19761__$1;(statearr_19766_19794[1] = 6);
} else
{var statearr_19767_19795 = state_19761__$1;(statearr_19767_19795[1] = 7);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 5))
{var inst_19745 = (state_19761[2]);var state_19761__$1 = (function (){var statearr_19768 = state_19761;(statearr_19768[9] = inst_19745);
return statearr_19768;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19761__$1,12,dchan);
} else
{if((state_val_19762 === 6))
{var state_19761__$1 = state_19761;var statearr_19769_19796 = state_19761__$1;(statearr_19769_19796[2] = null);
(statearr_19769_19796[1] = 11);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 7))
{var state_19761__$1 = state_19761;var statearr_19770_19797 = state_19761__$1;(statearr_19770_19797[2] = null);
(statearr_19770_19797[1] = 8);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 8))
{var inst_19743 = (state_19761[2]);var state_19761__$1 = state_19761;var statearr_19771_19798 = state_19761__$1;(statearr_19771_19798[2] = inst_19743);
(statearr_19771_19798[1] = 5);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 9))
{var inst_19725 = (state_19761[7]);var inst_19738 = (state_19761[2]);var inst_19739 = (inst_19725 + 1);var inst_19725__$1 = inst_19739;var state_19761__$1 = (function (){var statearr_19772 = state_19761;(statearr_19772[10] = inst_19738);
(statearr_19772[7] = inst_19725__$1);
return statearr_19772;
})();var statearr_19773_19799 = state_19761__$1;(statearr_19773_19799[2] = null);
(statearr_19773_19799[1] = 4);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 10))
{var inst_19729 = (state_19761[2]);var inst_19730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_19761__$1 = (function (){var statearr_19774 = state_19761;(statearr_19774[11] = inst_19729);
return statearr_19774;
})();var statearr_19775_19800 = state_19761__$1;(statearr_19775_19800[2] = inst_19730);
cljs.core.async.impl.ioc_helpers.process_exception(state_19761__$1);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 11))
{var inst_19725 = (state_19761[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19761,10,Object,null,9);var inst_19734 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19725) : chs__$1.call(null,inst_19725));var inst_19735 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19725) : done.call(null,inst_19725));var inst_19736 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19734,inst_19735);var state_19761__$1 = state_19761;var statearr_19776_19801 = state_19761__$1;(statearr_19776_19801[2] = inst_19736);
cljs.core.async.impl.ioc_helpers.process_exception(state_19761__$1);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 12))
{var inst_19747 = (state_19761[12]);var inst_19747__$1 = (state_19761[2]);var inst_19748 = cljs.core.some(cljs.core.nil_QMARK_,inst_19747__$1);var state_19761__$1 = (function (){var statearr_19777 = state_19761;(statearr_19777[12] = inst_19747__$1);
return statearr_19777;
})();if(cljs.core.truth_(inst_19748))
{var statearr_19778_19802 = state_19761__$1;(statearr_19778_19802[1] = 13);
} else
{var statearr_19779_19803 = state_19761__$1;(statearr_19779_19803[1] = 14);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 13))
{var inst_19750 = cljs.core.async.close_BANG_(out);var state_19761__$1 = state_19761;var statearr_19780_19804 = state_19761__$1;(statearr_19780_19804[2] = inst_19750);
(statearr_19780_19804[1] = 15);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 14))
{var inst_19747 = (state_19761[12]);var inst_19752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19747);var state_19761__$1 = state_19761;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19761__$1,16,out,inst_19752);
} else
{if((state_val_19762 === 15))
{var inst_19757 = (state_19761[2]);var state_19761__$1 = state_19761;var statearr_19781_19805 = state_19761__$1;(statearr_19781_19805[2] = inst_19757);
(statearr_19781_19805[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19762 === 16))
{var inst_19754 = (state_19761[2]);var state_19761__$1 = (function (){var statearr_19782 = state_19761;(statearr_19782[13] = inst_19754);
return statearr_19782;
})();var statearr_19783_19806 = state_19761__$1;(statearr_19783_19806[2] = null);
(statearr_19783_19806[1] = 2);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_19787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19787[0] = state_machine__5507__auto__);
(statearr_19787[1] = 1);
return statearr_19787;
});
var state_machine__5507__auto____1 = (function (state_19761){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19761);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19788){if((e19788 instanceof Object))
{var ex__5510__auto__ = e19788;var statearr_19789_19807 = state_19761;(statearr_19789_19807[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19761);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e19788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__19808 = state_19761;
state_19761 = G__19808;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19761){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19790 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19791);
return statearr_19790;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___19916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19892){var state_val_19893 = (state_19892[1]);if((state_val_19893 === 1))
{var inst_19863 = cljs.core.vec(chs);var inst_19864 = inst_19863;var state_19892__$1 = (function (){var statearr_19894 = state_19892;(statearr_19894[7] = inst_19864);
return statearr_19894;
})();var statearr_19895_19917 = state_19892__$1;(statearr_19895_19917[2] = null);
(statearr_19895_19917[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19893 === 2))
{var inst_19864 = (state_19892[7]);var inst_19866 = cljs.core.count(inst_19864);var inst_19867 = (inst_19866 > 0);var state_19892__$1 = state_19892;if(cljs.core.truth_(inst_19867))
{var statearr_19896_19918 = state_19892__$1;(statearr_19896_19918[1] = 4);
} else
{var statearr_19897_19919 = state_19892__$1;(statearr_19897_19919[1] = 5);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19893 === 3))
{var inst_19890 = (state_19892[2]);var state_19892__$1 = state_19892;return cljs.core.async.impl.ioc_helpers.return_chan(state_19892__$1,inst_19890);
} else
{if((state_val_19893 === 4))
{var inst_19864 = (state_19892[7]);var state_19892__$1 = state_19892;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_19892__$1,7,inst_19864);
} else
{if((state_val_19893 === 5))
{var inst_19886 = cljs.core.async.close_BANG_(out);var state_19892__$1 = state_19892;var statearr_19898_19920 = state_19892__$1;(statearr_19898_19920[2] = inst_19886);
(statearr_19898_19920[1] = 6);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19893 === 6))
{var inst_19888 = (state_19892[2]);var state_19892__$1 = state_19892;var statearr_19899_19921 = state_19892__$1;(statearr_19899_19921[2] = inst_19888);
(statearr_19899_19921[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19893 === 7))
{var inst_19871 = (state_19892[8]);var inst_19872 = (state_19892[9]);var inst_19871__$1 = (state_19892[2]);var inst_19872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19871__$1,0,null);var inst_19873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19871__$1,1,null);var inst_19874 = (inst_19872__$1 == null);var state_19892__$1 = (function (){var statearr_19900 = state_19892;(statearr_19900[8] = inst_19871__$1);
(statearr_19900[10] = inst_19873);
(statearr_19900[9] = inst_19872__$1);
return statearr_19900;
})();if(cljs.core.truth_(inst_19874))
{var statearr_19901_19922 = state_19892__$1;(statearr_19901_19922[1] = 8);
} else
{var statearr_19902_19923 = state_19892__$1;(statearr_19902_19923[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19893 === 8))
{var inst_19864 = (state_19892[7]);var inst_19871 = (state_19892[8]);var inst_19873 = (state_19892[10]);var inst_19872 = (state_19892[9]);var inst_19876 = (function (){var c = inst_19873;var v = inst_19872;var vec__19869 = inst_19871;var cs = inst_19864;return ((function (c,v,vec__19869,cs,inst_19864,inst_19871,inst_19873,inst_19872,state_val_19893){
return (function (p1__19809_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19809_SHARP_);
});
;})(c,v,vec__19869,cs,inst_19864,inst_19871,inst_19873,inst_19872,state_val_19893))
})();var inst_19877 = cljs.core.filterv(inst_19876,inst_19864);var inst_19864__$1 = inst_19877;var state_19892__$1 = (function (){var statearr_19903 = state_19892;(statearr_19903[7] = inst_19864__$1);
return statearr_19903;
})();var statearr_19904_19924 = state_19892__$1;(statearr_19904_19924[2] = null);
(statearr_19904_19924[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19893 === 9))
{var inst_19872 = (state_19892[9]);var state_19892__$1 = state_19892;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19892__$1,11,out,inst_19872);
} else
{if((state_val_19893 === 10))
{var inst_19884 = (state_19892[2]);var state_19892__$1 = state_19892;var statearr_19906_19925 = state_19892__$1;(statearr_19906_19925[2] = inst_19884);
(statearr_19906_19925[1] = 6);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19893 === 11))
{var inst_19864 = (state_19892[7]);var inst_19881 = (state_19892[2]);var tmp19905 = inst_19864;var inst_19864__$1 = tmp19905;var state_19892__$1 = (function (){var statearr_19907 = state_19892;(statearr_19907[7] = inst_19864__$1);
(statearr_19907[11] = inst_19881);
return statearr_19907;
})();var statearr_19908_19926 = state_19892__$1;(statearr_19908_19926[2] = null);
(statearr_19908_19926[1] = 2);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_19912 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19912[0] = state_machine__5507__auto__);
(statearr_19912[1] = 1);
return statearr_19912;
});
var state_machine__5507__auto____1 = (function (state_19892){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19892);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19913){if((e19913 instanceof Object))
{var ex__5510__auto__ = e19913;var statearr_19914_19927 = state_19892;(statearr_19914_19927[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19892);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e19913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__19928 = state_19892;
state_19892 = G__19928;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19892){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19915 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19916);
return statearr_19915;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___20021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19998){var state_val_19999 = (state_19998[1]);if((state_val_19999 === 1))
{var inst_19975 = 0;var state_19998__$1 = (function (){var statearr_20000 = state_19998;(statearr_20000[7] = inst_19975);
return statearr_20000;
})();var statearr_20001_20022 = state_19998__$1;(statearr_20001_20022[2] = null);
(statearr_20001_20022[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19999 === 2))
{var inst_19975 = (state_19998[7]);var inst_19977 = (inst_19975 < n);var state_19998__$1 = state_19998;if(cljs.core.truth_(inst_19977))
{var statearr_20002_20023 = state_19998__$1;(statearr_20002_20023[1] = 4);
} else
{var statearr_20003_20024 = state_19998__$1;(statearr_20003_20024[1] = 5);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19999 === 3))
{var inst_19995 = (state_19998[2]);var inst_19996 = cljs.core.async.close_BANG_(out);var state_19998__$1 = (function (){var statearr_20004 = state_19998;(statearr_20004[8] = inst_19995);
return statearr_20004;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19998__$1,inst_19996);
} else
{if((state_val_19999 === 4))
{var state_19998__$1 = state_19998;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19998__$1,7,ch);
} else
{if((state_val_19999 === 5))
{var state_19998__$1 = state_19998;var statearr_20005_20025 = state_19998__$1;(statearr_20005_20025[2] = null);
(statearr_20005_20025[1] = 6);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19999 === 6))
{var inst_19993 = (state_19998[2]);var state_19998__$1 = state_19998;var statearr_20006_20026 = state_19998__$1;(statearr_20006_20026[2] = inst_19993);
(statearr_20006_20026[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19999 === 7))
{var inst_19980 = (state_19998[9]);var inst_19980__$1 = (state_19998[2]);var inst_19981 = (inst_19980__$1 == null);var inst_19982 = cljs.core.not(inst_19981);var state_19998__$1 = (function (){var statearr_20007 = state_19998;(statearr_20007[9] = inst_19980__$1);
return statearr_20007;
})();if(inst_19982)
{var statearr_20008_20027 = state_19998__$1;(statearr_20008_20027[1] = 8);
} else
{var statearr_20009_20028 = state_19998__$1;(statearr_20009_20028[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_19999 === 8))
{var inst_19980 = (state_19998[9]);var state_19998__$1 = state_19998;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19998__$1,11,out,inst_19980);
} else
{if((state_val_19999 === 9))
{var state_19998__$1 = state_19998;var statearr_20010_20029 = state_19998__$1;(statearr_20010_20029[2] = null);
(statearr_20010_20029[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19999 === 10))
{var inst_19990 = (state_19998[2]);var state_19998__$1 = state_19998;var statearr_20011_20030 = state_19998__$1;(statearr_20011_20030[2] = inst_19990);
(statearr_20011_20030[1] = 6);
return cljs.core.constant$keyword$77;
} else
{if((state_val_19999 === 11))
{var inst_19975 = (state_19998[7]);var inst_19985 = (state_19998[2]);var inst_19986 = (inst_19975 + 1);var inst_19975__$1 = inst_19986;var state_19998__$1 = (function (){var statearr_20012 = state_19998;(statearr_20012[7] = inst_19975__$1);
(statearr_20012[10] = inst_19985);
return statearr_20012;
})();var statearr_20013_20031 = state_19998__$1;(statearr_20013_20031[2] = null);
(statearr_20013_20031[1] = 2);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_20017 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20017[0] = state_machine__5507__auto__);
(statearr_20017[1] = 1);
return statearr_20017;
});
var state_machine__5507__auto____1 = (function (state_19998){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19998);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20018){if((e20018 instanceof Object))
{var ex__5510__auto__ = e20018;var statearr_20019_20032 = state_19998;(statearr_20019_20032[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19998);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e20018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__20033 = state_19998;
state_19998 = G__20033;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19998){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20020 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20021);
return statearr_20020;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___20130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20105){var state_val_20106 = (state_20105[1]);if((state_val_20106 === 1))
{var inst_20082 = null;var state_20105__$1 = (function (){var statearr_20107 = state_20105;(statearr_20107[7] = inst_20082);
return statearr_20107;
})();var statearr_20108_20131 = state_20105__$1;(statearr_20108_20131[2] = null);
(statearr_20108_20131[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20106 === 2))
{var state_20105__$1 = state_20105;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20105__$1,4,ch);
} else
{if((state_val_20106 === 3))
{var inst_20102 = (state_20105[2]);var inst_20103 = cljs.core.async.close_BANG_(out);var state_20105__$1 = (function (){var statearr_20109 = state_20105;(statearr_20109[8] = inst_20102);
return statearr_20109;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_20105__$1,inst_20103);
} else
{if((state_val_20106 === 4))
{var inst_20085 = (state_20105[9]);var inst_20085__$1 = (state_20105[2]);var inst_20086 = (inst_20085__$1 == null);var inst_20087 = cljs.core.not(inst_20086);var state_20105__$1 = (function (){var statearr_20110 = state_20105;(statearr_20110[9] = inst_20085__$1);
return statearr_20110;
})();if(inst_20087)
{var statearr_20111_20132 = state_20105__$1;(statearr_20111_20132[1] = 5);
} else
{var statearr_20112_20133 = state_20105__$1;(statearr_20112_20133[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20106 === 5))
{var inst_20085 = (state_20105[9]);var inst_20082 = (state_20105[7]);var inst_20089 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20085,inst_20082);var state_20105__$1 = state_20105;if(inst_20089)
{var statearr_20113_20134 = state_20105__$1;(statearr_20113_20134[1] = 8);
} else
{var statearr_20114_20135 = state_20105__$1;(statearr_20114_20135[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20106 === 6))
{var state_20105__$1 = state_20105;var statearr_20116_20136 = state_20105__$1;(statearr_20116_20136[2] = null);
(statearr_20116_20136[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20106 === 7))
{var inst_20100 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20117_20137 = state_20105__$1;(statearr_20117_20137[2] = inst_20100);
(statearr_20117_20137[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20106 === 8))
{var inst_20082 = (state_20105[7]);var tmp20115 = inst_20082;var inst_20082__$1 = tmp20115;var state_20105__$1 = (function (){var statearr_20118 = state_20105;(statearr_20118[7] = inst_20082__$1);
return statearr_20118;
})();var statearr_20119_20138 = state_20105__$1;(statearr_20119_20138[2] = null);
(statearr_20119_20138[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20106 === 9))
{var inst_20085 = (state_20105[9]);var state_20105__$1 = state_20105;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20105__$1,11,out,inst_20085);
} else
{if((state_val_20106 === 10))
{var inst_20097 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20120_20139 = state_20105__$1;(statearr_20120_20139[2] = inst_20097);
(statearr_20120_20139[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20106 === 11))
{var inst_20085 = (state_20105[9]);var inst_20094 = (state_20105[2]);var inst_20082 = inst_20085;var state_20105__$1 = (function (){var statearr_20121 = state_20105;(statearr_20121[7] = inst_20082);
(statearr_20121[10] = inst_20094);
return statearr_20121;
})();var statearr_20122_20140 = state_20105__$1;(statearr_20122_20140[2] = null);
(statearr_20122_20140[1] = 2);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_20126 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20126[0] = state_machine__5507__auto__);
(statearr_20126[1] = 1);
return statearr_20126;
});
var state_machine__5507__auto____1 = (function (state_20105){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20105);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20127){if((e20127 instanceof Object))
{var ex__5510__auto__ = e20127;var statearr_20128_20141 = state_20105;(statearr_20128_20141[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20105);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e20127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__20142 = state_20105;
state_20105 = G__20142;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20105){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20129 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20130);
return statearr_20129;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___20277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20247){var state_val_20248 = (state_20247[1]);if((state_val_20248 === 1))
{var inst_20210 = (new Array(n));var inst_20211 = inst_20210;var inst_20212 = 0;var state_20247__$1 = (function (){var statearr_20249 = state_20247;(statearr_20249[7] = inst_20211);
(statearr_20249[8] = inst_20212);
return statearr_20249;
})();var statearr_20250_20278 = state_20247__$1;(statearr_20250_20278[2] = null);
(statearr_20250_20278[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 2))
{var state_20247__$1 = state_20247;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20247__$1,4,ch);
} else
{if((state_val_20248 === 3))
{var inst_20245 = (state_20247[2]);var state_20247__$1 = state_20247;return cljs.core.async.impl.ioc_helpers.return_chan(state_20247__$1,inst_20245);
} else
{if((state_val_20248 === 4))
{var inst_20215 = (state_20247[9]);var inst_20215__$1 = (state_20247[2]);var inst_20216 = (inst_20215__$1 == null);var inst_20217 = cljs.core.not(inst_20216);var state_20247__$1 = (function (){var statearr_20251 = state_20247;(statearr_20251[9] = inst_20215__$1);
return statearr_20251;
})();if(inst_20217)
{var statearr_20252_20279 = state_20247__$1;(statearr_20252_20279[1] = 5);
} else
{var statearr_20253_20280 = state_20247__$1;(statearr_20253_20280[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 5))
{var inst_20211 = (state_20247[7]);var inst_20212 = (state_20247[8]);var inst_20220 = (state_20247[10]);var inst_20215 = (state_20247[9]);var inst_20219 = (inst_20211[inst_20212] = inst_20215);var inst_20220__$1 = (inst_20212 + 1);var inst_20221 = (inst_20220__$1 < n);var state_20247__$1 = (function (){var statearr_20254 = state_20247;(statearr_20254[11] = inst_20219);
(statearr_20254[10] = inst_20220__$1);
return statearr_20254;
})();if(cljs.core.truth_(inst_20221))
{var statearr_20255_20281 = state_20247__$1;(statearr_20255_20281[1] = 8);
} else
{var statearr_20256_20282 = state_20247__$1;(statearr_20256_20282[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 6))
{var inst_20212 = (state_20247[8]);var inst_20233 = (inst_20212 > 0);var state_20247__$1 = state_20247;if(cljs.core.truth_(inst_20233))
{var statearr_20258_20283 = state_20247__$1;(statearr_20258_20283[1] = 12);
} else
{var statearr_20259_20284 = state_20247__$1;(statearr_20259_20284[1] = 13);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 7))
{var inst_20243 = (state_20247[2]);var state_20247__$1 = state_20247;var statearr_20260_20285 = state_20247__$1;(statearr_20260_20285[2] = inst_20243);
(statearr_20260_20285[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 8))
{var inst_20211 = (state_20247[7]);var inst_20220 = (state_20247[10]);var tmp20257 = inst_20211;var inst_20211__$1 = tmp20257;var inst_20212 = inst_20220;var state_20247__$1 = (function (){var statearr_20261 = state_20247;(statearr_20261[7] = inst_20211__$1);
(statearr_20261[8] = inst_20212);
return statearr_20261;
})();var statearr_20262_20286 = state_20247__$1;(statearr_20262_20286[2] = null);
(statearr_20262_20286[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 9))
{var inst_20211 = (state_20247[7]);var inst_20225 = cljs.core.vec(inst_20211);var state_20247__$1 = state_20247;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20247__$1,11,out,inst_20225);
} else
{if((state_val_20248 === 10))
{var inst_20231 = (state_20247[2]);var state_20247__$1 = state_20247;var statearr_20263_20287 = state_20247__$1;(statearr_20263_20287[2] = inst_20231);
(statearr_20263_20287[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 11))
{var inst_20227 = (state_20247[2]);var inst_20228 = (new Array(n));var inst_20211 = inst_20228;var inst_20212 = 0;var state_20247__$1 = (function (){var statearr_20264 = state_20247;(statearr_20264[7] = inst_20211);
(statearr_20264[12] = inst_20227);
(statearr_20264[8] = inst_20212);
return statearr_20264;
})();var statearr_20265_20288 = state_20247__$1;(statearr_20265_20288[2] = null);
(statearr_20265_20288[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 12))
{var inst_20211 = (state_20247[7]);var inst_20235 = cljs.core.vec(inst_20211);var state_20247__$1 = state_20247;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20247__$1,15,out,inst_20235);
} else
{if((state_val_20248 === 13))
{var state_20247__$1 = state_20247;var statearr_20266_20289 = state_20247__$1;(statearr_20266_20289[2] = null);
(statearr_20266_20289[1] = 14);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 14))
{var inst_20240 = (state_20247[2]);var inst_20241 = cljs.core.async.close_BANG_(out);var state_20247__$1 = (function (){var statearr_20267 = state_20247;(statearr_20267[13] = inst_20240);
return statearr_20267;
})();var statearr_20268_20290 = state_20247__$1;(statearr_20268_20290[2] = inst_20241);
(statearr_20268_20290[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20248 === 15))
{var inst_20237 = (state_20247[2]);var state_20247__$1 = state_20247;var statearr_20269_20291 = state_20247__$1;(statearr_20269_20291[2] = inst_20237);
(statearr_20269_20291[1] = 14);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_20273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20273[0] = state_machine__5507__auto__);
(statearr_20273[1] = 1);
return statearr_20273;
});
var state_machine__5507__auto____1 = (function (state_20247){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20247);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20274){if((e20274 instanceof Object))
{var ex__5510__auto__ = e20274;var statearr_20275_20292 = state_20247;(statearr_20275_20292[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20247);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e20274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__20293 = state_20247;
state_20247 = G__20293;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20247){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20276 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20277);
return statearr_20276;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___20436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20406){var state_val_20407 = (state_20406[1]);if((state_val_20407 === 1))
{var inst_20365 = [];var inst_20366 = inst_20365;var inst_20367 = cljs.core.constant$keyword$90;var state_20406__$1 = (function (){var statearr_20408 = state_20406;(statearr_20408[7] = inst_20366);
(statearr_20408[8] = inst_20367);
return statearr_20408;
})();var statearr_20409_20437 = state_20406__$1;(statearr_20409_20437[2] = null);
(statearr_20409_20437[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 2))
{var state_20406__$1 = state_20406;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20406__$1,4,ch);
} else
{if((state_val_20407 === 3))
{var inst_20404 = (state_20406[2]);var state_20406__$1 = state_20406;return cljs.core.async.impl.ioc_helpers.return_chan(state_20406__$1,inst_20404);
} else
{if((state_val_20407 === 4))
{var inst_20370 = (state_20406[9]);var inst_20370__$1 = (state_20406[2]);var inst_20371 = (inst_20370__$1 == null);var inst_20372 = cljs.core.not(inst_20371);var state_20406__$1 = (function (){var statearr_20410 = state_20406;(statearr_20410[9] = inst_20370__$1);
return statearr_20410;
})();if(inst_20372)
{var statearr_20411_20438 = state_20406__$1;(statearr_20411_20438[1] = 5);
} else
{var statearr_20412_20439 = state_20406__$1;(statearr_20412_20439[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 5))
{var inst_20367 = (state_20406[8]);var inst_20374 = (state_20406[10]);var inst_20370 = (state_20406[9]);var inst_20374__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20370) : f.call(null,inst_20370));var inst_20375 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20374__$1,inst_20367);var inst_20376 = cljs.core.keyword_identical_QMARK_(inst_20367,cljs.core.constant$keyword$90);var inst_20377 = (inst_20375) || (inst_20376);var state_20406__$1 = (function (){var statearr_20413 = state_20406;(statearr_20413[10] = inst_20374__$1);
return statearr_20413;
})();if(cljs.core.truth_(inst_20377))
{var statearr_20414_20440 = state_20406__$1;(statearr_20414_20440[1] = 8);
} else
{var statearr_20415_20441 = state_20406__$1;(statearr_20415_20441[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 6))
{var inst_20366 = (state_20406[7]);var inst_20391 = inst_20366.length;var inst_20392 = (inst_20391 > 0);var state_20406__$1 = state_20406;if(cljs.core.truth_(inst_20392))
{var statearr_20417_20442 = state_20406__$1;(statearr_20417_20442[1] = 12);
} else
{var statearr_20418_20443 = state_20406__$1;(statearr_20418_20443[1] = 13);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 7))
{var inst_20402 = (state_20406[2]);var state_20406__$1 = state_20406;var statearr_20419_20444 = state_20406__$1;(statearr_20419_20444[2] = inst_20402);
(statearr_20419_20444[1] = 3);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 8))
{var inst_20366 = (state_20406[7]);var inst_20374 = (state_20406[10]);var inst_20370 = (state_20406[9]);var inst_20379 = inst_20366.push(inst_20370);var tmp20416 = inst_20366;var inst_20366__$1 = tmp20416;var inst_20367 = inst_20374;var state_20406__$1 = (function (){var statearr_20420 = state_20406;(statearr_20420[7] = inst_20366__$1);
(statearr_20420[8] = inst_20367);
(statearr_20420[11] = inst_20379);
return statearr_20420;
})();var statearr_20421_20445 = state_20406__$1;(statearr_20421_20445[2] = null);
(statearr_20421_20445[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 9))
{var inst_20366 = (state_20406[7]);var inst_20382 = cljs.core.vec(inst_20366);var state_20406__$1 = state_20406;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20406__$1,11,out,inst_20382);
} else
{if((state_val_20407 === 10))
{var inst_20389 = (state_20406[2]);var state_20406__$1 = state_20406;var statearr_20422_20446 = state_20406__$1;(statearr_20422_20446[2] = inst_20389);
(statearr_20422_20446[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 11))
{var inst_20374 = (state_20406[10]);var inst_20370 = (state_20406[9]);var inst_20384 = (state_20406[2]);var inst_20385 = [];var inst_20386 = inst_20385.push(inst_20370);var inst_20366 = inst_20385;var inst_20367 = inst_20374;var state_20406__$1 = (function (){var statearr_20423 = state_20406;(statearr_20423[7] = inst_20366);
(statearr_20423[8] = inst_20367);
(statearr_20423[12] = inst_20386);
(statearr_20423[13] = inst_20384);
return statearr_20423;
})();var statearr_20424_20447 = state_20406__$1;(statearr_20424_20447[2] = null);
(statearr_20424_20447[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 12))
{var inst_20366 = (state_20406[7]);var inst_20394 = cljs.core.vec(inst_20366);var state_20406__$1 = state_20406;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20406__$1,15,out,inst_20394);
} else
{if((state_val_20407 === 13))
{var state_20406__$1 = state_20406;var statearr_20425_20448 = state_20406__$1;(statearr_20425_20448[2] = null);
(statearr_20425_20448[1] = 14);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 14))
{var inst_20399 = (state_20406[2]);var inst_20400 = cljs.core.async.close_BANG_(out);var state_20406__$1 = (function (){var statearr_20426 = state_20406;(statearr_20426[14] = inst_20399);
return statearr_20426;
})();var statearr_20427_20449 = state_20406__$1;(statearr_20427_20449[2] = inst_20400);
(statearr_20427_20449[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_20407 === 15))
{var inst_20396 = (state_20406[2]);var state_20406__$1 = state_20406;var statearr_20428_20450 = state_20406__$1;(statearr_20428_20450[2] = inst_20396);
(statearr_20428_20450[1] = 14);
return cljs.core.constant$keyword$77;
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
var state_machine__5507__auto____0 = (function (){var statearr_20432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20432[0] = state_machine__5507__auto__);
(statearr_20432[1] = 1);
return statearr_20432;
});
var state_machine__5507__auto____1 = (function (state_20406){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20406);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20433){if((e20433 instanceof Object))
{var ex__5510__auto__ = e20433;var statearr_20434_20451 = state_20406;(statearr_20434_20451[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20406);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e20433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__20452 = state_20406;
state_20406 = G__20452;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20406){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20435 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20436);
return statearr_20435;
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
