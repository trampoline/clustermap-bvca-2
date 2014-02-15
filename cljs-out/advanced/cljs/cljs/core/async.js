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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23937 = (function (f,fn_handler,meta23938){
this.f = f;
this.fn_handler = fn_handler;
this.meta23938 = meta23938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23937.cljs$lang$type = true;
cljs.core.async.t23937.cljs$lang$ctorStr = "cljs.core.async/t23937";
cljs.core.async.t23937.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23937");
});
cljs.core.async.t23937.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23939){var self__ = this;
var _23939__$1 = this;return self__.meta23938;
});
cljs.core.async.t23937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23939,meta23938__$1){var self__ = this;
var _23939__$1 = this;return (new cljs.core.async.t23937(self__.f,self__.fn_handler,meta23938__$1));
});
cljs.core.async.__GT_t23937 = (function __GT_t23937(f__$1,fn_handler__$1,meta23938){return (new cljs.core.async.t23937(f__$1,fn_handler__$1,meta23938));
});
}
return (new cljs.core.async.t23937(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23941 = buff;if(G__23941)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23941.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23941.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23941);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23941);
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
{var val_23942 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23942) : fn1.call(null,val_23942));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23942) : fn1.call(null,val_23942));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23943 = n;var x_23944 = 0;while(true){
if((x_23944 < n__4248__auto___23943))
{(a[x_23944] = 0);
{
var G__23945 = (x_23944 + 1);
x_23944 = G__23945;
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
var G__23946 = (i + 1);
i = G__23946;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23950 = (function (flag,alt_flag,meta23951){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23951 = meta23951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23950.cljs$lang$type = true;
cljs.core.async.t23950.cljs$lang$ctorStr = "cljs.core.async/t23950";
cljs.core.async.t23950.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23950");
});
cljs.core.async.t23950.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23952){var self__ = this;
var _23952__$1 = this;return self__.meta23951;
});
cljs.core.async.t23950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23952,meta23951__$1){var self__ = this;
var _23952__$1 = this;return (new cljs.core.async.t23950(self__.flag,self__.alt_flag,meta23951__$1));
});
cljs.core.async.__GT_t23950 = (function __GT_t23950(flag__$1,alt_flag__$1,meta23951){return (new cljs.core.async.t23950(flag__$1,alt_flag__$1,meta23951));
});
}
return (new cljs.core.async.t23950(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23956 = (function (cb,flag,alt_handler,meta23957){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23957 = meta23957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23956.cljs$lang$type = true;
cljs.core.async.t23956.cljs$lang$ctorStr = "cljs.core.async/t23956";
cljs.core.async.t23956.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23956");
});
cljs.core.async.t23956.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23958){var self__ = this;
var _23958__$1 = this;return self__.meta23957;
});
cljs.core.async.t23956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23958,meta23957__$1){var self__ = this;
var _23958__$1 = this;return (new cljs.core.async.t23956(self__.cb,self__.flag,self__.alt_handler,meta23957__$1));
});
cljs.core.async.__GT_t23956 = (function __GT_t23956(cb__$1,flag__$1,alt_handler__$1,meta23957){return (new cljs.core.async.t23956(cb__$1,flag__$1,alt_handler__$1,meta23957));
});
}
return (new cljs.core.async.t23956(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23959_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23959_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23959_SHARP_,port], null)));
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
var G__23960 = (i + 1);
i = G__23960;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$223))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$223], null));
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
var alts_BANG___delegate = function (ports,p__23961){var map__23963 = p__23961;var map__23963__$1 = ((cljs.core.seq_QMARK_(map__23963))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23963):map__23963);var opts = map__23963__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23961 = null;if (arguments.length > 1) {
  p__23961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23961);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23964){
var ports = cljs.core.first(arglist__23964);
var p__23961 = cljs.core.rest(arglist__23964);
return alts_BANG___delegate(ports,p__23961);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23972 = (function (ch,f,map_LT_,meta23973){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23973 = meta23973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23972.cljs$lang$type = true;
cljs.core.async.t23972.cljs$lang$ctorStr = "cljs.core.async/t23972";
cljs.core.async.t23972.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23972");
});
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23975 = (function (fn1,_,meta23973,ch,f,map_LT_,meta23976){
this.fn1 = fn1;
this._ = _;
this.meta23973 = meta23973;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23976 = meta23976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23975.cljs$lang$type = true;
cljs.core.async.t23975.cljs$lang$ctorStr = "cljs.core.async/t23975";
cljs.core.async.t23975.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23975");
});
cljs.core.async.t23975.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23975.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23965_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23965_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23965_SHARP_) : self__.f.call(null,p1__23965_SHARP_)))) : f1.call(null,(((p1__23965_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23965_SHARP_) : self__.f.call(null,p1__23965_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23977){var self__ = this;
var _23977__$1 = this;return self__.meta23976;
});
cljs.core.async.t23975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23977,meta23976__$1){var self__ = this;
var _23977__$1 = this;return (new cljs.core.async.t23975(self__.fn1,self__._,self__.meta23973,self__.ch,self__.f,self__.map_LT_,meta23976__$1));
});
cljs.core.async.__GT_t23975 = (function __GT_t23975(fn1__$1,___$2,meta23973__$1,ch__$2,f__$2,map_LT___$2,meta23976){return (new cljs.core.async.t23975(fn1__$1,___$2,meta23973__$1,ch__$2,f__$2,map_LT___$2,meta23976));
});
}
return (new cljs.core.async.t23975(fn1,___$1,self__.meta23973,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23974){var self__ = this;
var _23974__$1 = this;return self__.meta23973;
});
cljs.core.async.t23972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23974,meta23973__$1){var self__ = this;
var _23974__$1 = this;return (new cljs.core.async.t23972(self__.ch,self__.f,self__.map_LT_,meta23973__$1));
});
cljs.core.async.__GT_t23972 = (function __GT_t23972(ch__$1,f__$1,map_LT___$1,meta23973){return (new cljs.core.async.t23972(ch__$1,f__$1,map_LT___$1,meta23973));
});
}
return (new cljs.core.async.t23972(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23981 = (function (ch,f,map_GT_,meta23982){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23982 = meta23982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23981.cljs$lang$type = true;
cljs.core.async.t23981.cljs$lang$ctorStr = "cljs.core.async/t23981";
cljs.core.async.t23981.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23981");
});
cljs.core.async.t23981.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23981.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23981.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23983){var self__ = this;
var _23983__$1 = this;return self__.meta23982;
});
cljs.core.async.t23981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23983,meta23982__$1){var self__ = this;
var _23983__$1 = this;return (new cljs.core.async.t23981(self__.ch,self__.f,self__.map_GT_,meta23982__$1));
});
cljs.core.async.__GT_t23981 = (function __GT_t23981(ch__$1,f__$1,map_GT___$1,meta23982){return (new cljs.core.async.t23981(ch__$1,f__$1,map_GT___$1,meta23982));
});
}
return (new cljs.core.async.t23981(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23987 = (function (ch,p,filter_GT_,meta23988){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23988 = meta23988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23987.cljs$lang$type = true;
cljs.core.async.t23987.cljs$lang$ctorStr = "cljs.core.async/t23987";
cljs.core.async.t23987.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23987");
});
cljs.core.async.t23987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23987.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23989){var self__ = this;
var _23989__$1 = this;return self__.meta23988;
});
cljs.core.async.t23987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23989,meta23988__$1){var self__ = this;
var _23989__$1 = this;return (new cljs.core.async.t23987(self__.ch,self__.p,self__.filter_GT_,meta23988__$1));
});
cljs.core.async.__GT_t23987 = (function __GT_t23987(ch__$1,p__$1,filter_GT___$1,meta23988){return (new cljs.core.async.t23987(ch__$1,p__$1,filter_GT___$1,meta23988));
});
}
return (new cljs.core.async.t23987(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24051){var state_val_24052 = (state_24051[1]);if((state_val_24052 === 1))
{var state_24051__$1 = state_24051;var statearr_24053_24073 = state_24051__$1;(statearr_24053_24073[2] = null);
(statearr_24053_24073[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24052 === 2))
{var state_24051__$1 = state_24051;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24051__$1,4,ch);
} else
{if((state_val_24052 === 3))
{var inst_24049 = (state_24051[2]);var state_24051__$1 = state_24051;return cljs.core.async.impl.ioc_helpers.return_chan(state_24051__$1,inst_24049);
} else
{if((state_val_24052 === 4))
{var inst_24033 = (state_24051[7]);var inst_24033__$1 = (state_24051[2]);var inst_24034 = (inst_24033__$1 == null);var state_24051__$1 = (function (){var statearr_24054 = state_24051;(statearr_24054[7] = inst_24033__$1);
return statearr_24054;
})();if(cljs.core.truth_(inst_24034))
{var statearr_24055_24074 = state_24051__$1;(statearr_24055_24074[1] = 5);
} else
{var statearr_24056_24075 = state_24051__$1;(statearr_24056_24075[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24052 === 5))
{var inst_24036 = cljs.core.async.close_BANG_(out);var state_24051__$1 = state_24051;var statearr_24057_24076 = state_24051__$1;(statearr_24057_24076[2] = inst_24036);
(statearr_24057_24076[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24052 === 6))
{var inst_24033 = (state_24051[7]);var inst_24038 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24033) : p.call(null,inst_24033));var state_24051__$1 = state_24051;if(cljs.core.truth_(inst_24038))
{var statearr_24058_24077 = state_24051__$1;(statearr_24058_24077[1] = 8);
} else
{var statearr_24059_24078 = state_24051__$1;(statearr_24059_24078[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24052 === 7))
{var inst_24047 = (state_24051[2]);var state_24051__$1 = state_24051;var statearr_24060_24079 = state_24051__$1;(statearr_24060_24079[2] = inst_24047);
(statearr_24060_24079[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24052 === 8))
{var inst_24033 = (state_24051[7]);var state_24051__$1 = state_24051;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24051__$1,11,out,inst_24033);
} else
{if((state_val_24052 === 9))
{var state_24051__$1 = state_24051;var statearr_24061_24080 = state_24051__$1;(statearr_24061_24080[2] = null);
(statearr_24061_24080[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24052 === 10))
{var inst_24044 = (state_24051[2]);var state_24051__$1 = (function (){var statearr_24062 = state_24051;(statearr_24062[8] = inst_24044);
return statearr_24062;
})();var statearr_24063_24081 = state_24051__$1;(statearr_24063_24081[2] = null);
(statearr_24063_24081[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24052 === 11))
{var inst_24041 = (state_24051[2]);var state_24051__$1 = state_24051;var statearr_24064_24082 = state_24051__$1;(statearr_24064_24082[2] = inst_24041);
(statearr_24064_24082[1] = 10);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_24068 = [null,null,null,null,null,null,null,null,null];(statearr_24068[0] = state_machine__5507__auto__);
(statearr_24068[1] = 1);
return statearr_24068;
});
var state_machine__5507__auto____1 = (function (state_24051){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24051);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24069){if((e24069 instanceof Object))
{var ex__5510__auto__ = e24069;var statearr_24070_24083 = state_24051;(statearr_24070_24083[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24051);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e24069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__24084 = state_24051;
state_24051 = G__24084;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24051){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24071 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24072);
return statearr_24071;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24236){var state_val_24237 = (state_24236[1]);if((state_val_24237 === 1))
{var state_24236__$1 = state_24236;var statearr_24238_24275 = state_24236__$1;(statearr_24238_24275[2] = null);
(statearr_24238_24275[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 2))
{var state_24236__$1 = state_24236;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24236__$1,4,in$);
} else
{if((state_val_24237 === 3))
{var inst_24234 = (state_24236[2]);var state_24236__$1 = state_24236;return cljs.core.async.impl.ioc_helpers.return_chan(state_24236__$1,inst_24234);
} else
{if((state_val_24237 === 4))
{var inst_24182 = (state_24236[7]);var inst_24182__$1 = (state_24236[2]);var inst_24183 = (inst_24182__$1 == null);var state_24236__$1 = (function (){var statearr_24239 = state_24236;(statearr_24239[7] = inst_24182__$1);
return statearr_24239;
})();if(cljs.core.truth_(inst_24183))
{var statearr_24240_24276 = state_24236__$1;(statearr_24240_24276[1] = 5);
} else
{var statearr_24241_24277 = state_24236__$1;(statearr_24241_24277[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 5))
{var inst_24185 = cljs.core.async.close_BANG_(out);var state_24236__$1 = state_24236;var statearr_24242_24278 = state_24236__$1;(statearr_24242_24278[2] = inst_24185);
(statearr_24242_24278[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 6))
{var inst_24182 = (state_24236[7]);var inst_24187 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24182) : f.call(null,inst_24182));var inst_24192 = cljs.core.seq(inst_24187);var inst_24193 = inst_24192;var inst_24194 = null;var inst_24195 = 0;var inst_24196 = 0;var state_24236__$1 = (function (){var statearr_24243 = state_24236;(statearr_24243[8] = inst_24194);
(statearr_24243[9] = inst_24193);
(statearr_24243[10] = inst_24196);
(statearr_24243[11] = inst_24195);
return statearr_24243;
})();var statearr_24244_24279 = state_24236__$1;(statearr_24244_24279[2] = null);
(statearr_24244_24279[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 7))
{var inst_24232 = (state_24236[2]);var state_24236__$1 = state_24236;var statearr_24245_24280 = state_24236__$1;(statearr_24245_24280[2] = inst_24232);
(statearr_24245_24280[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 8))
{var inst_24196 = (state_24236[10]);var inst_24195 = (state_24236[11]);var inst_24198 = (inst_24196 < inst_24195);var inst_24199 = inst_24198;var state_24236__$1 = state_24236;if(cljs.core.truth_(inst_24199))
{var statearr_24246_24281 = state_24236__$1;(statearr_24246_24281[1] = 10);
} else
{var statearr_24247_24282 = state_24236__$1;(statearr_24247_24282[1] = 11);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 9))
{var inst_24229 = (state_24236[2]);var state_24236__$1 = (function (){var statearr_24248 = state_24236;(statearr_24248[12] = inst_24229);
return statearr_24248;
})();var statearr_24249_24283 = state_24236__$1;(statearr_24249_24283[2] = null);
(statearr_24249_24283[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 10))
{var inst_24194 = (state_24236[8]);var inst_24196 = (state_24236[10]);var inst_24201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24194,inst_24196);var state_24236__$1 = state_24236;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24236__$1,13,out,inst_24201);
} else
{if((state_val_24237 === 11))
{var inst_24207 = (state_24236[13]);var inst_24193 = (state_24236[9]);var inst_24207__$1 = cljs.core.seq(inst_24193);var state_24236__$1 = (function (){var statearr_24253 = state_24236;(statearr_24253[13] = inst_24207__$1);
return statearr_24253;
})();if(inst_24207__$1)
{var statearr_24254_24284 = state_24236__$1;(statearr_24254_24284[1] = 14);
} else
{var statearr_24255_24285 = state_24236__$1;(statearr_24255_24285[1] = 15);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 12))
{var inst_24227 = (state_24236[2]);var state_24236__$1 = state_24236;var statearr_24256_24286 = state_24236__$1;(statearr_24256_24286[2] = inst_24227);
(statearr_24256_24286[1] = 9);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 13))
{var inst_24194 = (state_24236[8]);var inst_24193 = (state_24236[9]);var inst_24196 = (state_24236[10]);var inst_24195 = (state_24236[11]);var inst_24203 = (state_24236[2]);var inst_24204 = (inst_24196 + 1);var tmp24250 = inst_24194;var tmp24251 = inst_24193;var tmp24252 = inst_24195;var inst_24193__$1 = tmp24251;var inst_24194__$1 = tmp24250;var inst_24195__$1 = tmp24252;var inst_24196__$1 = inst_24204;var state_24236__$1 = (function (){var statearr_24257 = state_24236;(statearr_24257[14] = inst_24203);
(statearr_24257[8] = inst_24194__$1);
(statearr_24257[9] = inst_24193__$1);
(statearr_24257[10] = inst_24196__$1);
(statearr_24257[11] = inst_24195__$1);
return statearr_24257;
})();var statearr_24258_24287 = state_24236__$1;(statearr_24258_24287[2] = null);
(statearr_24258_24287[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 14))
{var inst_24207 = (state_24236[13]);var inst_24209 = cljs.core.chunked_seq_QMARK_(inst_24207);var state_24236__$1 = state_24236;if(inst_24209)
{var statearr_24259_24288 = state_24236__$1;(statearr_24259_24288[1] = 17);
} else
{var statearr_24260_24289 = state_24236__$1;(statearr_24260_24289[1] = 18);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 15))
{var state_24236__$1 = state_24236;var statearr_24261_24290 = state_24236__$1;(statearr_24261_24290[2] = null);
(statearr_24261_24290[1] = 16);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 16))
{var inst_24225 = (state_24236[2]);var state_24236__$1 = state_24236;var statearr_24262_24291 = state_24236__$1;(statearr_24262_24291[2] = inst_24225);
(statearr_24262_24291[1] = 12);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 17))
{var inst_24207 = (state_24236[13]);var inst_24211 = cljs.core.chunk_first(inst_24207);var inst_24212 = cljs.core.chunk_rest(inst_24207);var inst_24213 = cljs.core.count(inst_24211);var inst_24193 = inst_24212;var inst_24194 = inst_24211;var inst_24195 = inst_24213;var inst_24196 = 0;var state_24236__$1 = (function (){var statearr_24263 = state_24236;(statearr_24263[8] = inst_24194);
(statearr_24263[9] = inst_24193);
(statearr_24263[10] = inst_24196);
(statearr_24263[11] = inst_24195);
return statearr_24263;
})();var statearr_24264_24292 = state_24236__$1;(statearr_24264_24292[2] = null);
(statearr_24264_24292[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 18))
{var inst_24207 = (state_24236[13]);var inst_24216 = cljs.core.first(inst_24207);var state_24236__$1 = state_24236;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24236__$1,20,out,inst_24216);
} else
{if((state_val_24237 === 19))
{var inst_24222 = (state_24236[2]);var state_24236__$1 = state_24236;var statearr_24265_24293 = state_24236__$1;(statearr_24265_24293[2] = inst_24222);
(statearr_24265_24293[1] = 16);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24237 === 20))
{var inst_24207 = (state_24236[13]);var inst_24218 = (state_24236[2]);var inst_24219 = cljs.core.next(inst_24207);var inst_24193 = inst_24219;var inst_24194 = null;var inst_24195 = 0;var inst_24196 = 0;var state_24236__$1 = (function (){var statearr_24266 = state_24236;(statearr_24266[8] = inst_24194);
(statearr_24266[9] = inst_24193);
(statearr_24266[10] = inst_24196);
(statearr_24266[15] = inst_24218);
(statearr_24266[11] = inst_24195);
return statearr_24266;
})();var statearr_24267_24294 = state_24236__$1;(statearr_24267_24294[2] = null);
(statearr_24267_24294[1] = 8);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_24271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24271[0] = state_machine__5507__auto__);
(statearr_24271[1] = 1);
return statearr_24271;
});
var state_machine__5507__auto____1 = (function (state_24236){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24236);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24272){if((e24272 instanceof Object))
{var ex__5510__auto__ = e24272;var statearr_24273_24295 = state_24236;(statearr_24273_24295[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24236);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e24272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__24296 = state_24236;
state_24236 = G__24296;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24236){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24274 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24274;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24356){var state_val_24357 = (state_24356[1]);if((state_val_24357 === 1))
{var state_24356__$1 = state_24356;var statearr_24358_24378 = state_24356__$1;(statearr_24358_24378[2] = null);
(statearr_24358_24378[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24357 === 2))
{var state_24356__$1 = state_24356;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24356__$1,4,from);
} else
{if((state_val_24357 === 3))
{var inst_24354 = (state_24356[2]);var state_24356__$1 = state_24356;return cljs.core.async.impl.ioc_helpers.return_chan(state_24356__$1,inst_24354);
} else
{if((state_val_24357 === 4))
{var inst_24339 = (state_24356[7]);var inst_24339__$1 = (state_24356[2]);var inst_24340 = (inst_24339__$1 == null);var state_24356__$1 = (function (){var statearr_24359 = state_24356;(statearr_24359[7] = inst_24339__$1);
return statearr_24359;
})();if(cljs.core.truth_(inst_24340))
{var statearr_24360_24379 = state_24356__$1;(statearr_24360_24379[1] = 5);
} else
{var statearr_24361_24380 = state_24356__$1;(statearr_24361_24380[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24357 === 5))
{var state_24356__$1 = state_24356;if(cljs.core.truth_(close_QMARK_))
{var statearr_24362_24381 = state_24356__$1;(statearr_24362_24381[1] = 8);
} else
{var statearr_24363_24382 = state_24356__$1;(statearr_24363_24382[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24357 === 6))
{var inst_24339 = (state_24356[7]);var state_24356__$1 = state_24356;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24356__$1,11,to,inst_24339);
} else
{if((state_val_24357 === 7))
{var inst_24352 = (state_24356[2]);var state_24356__$1 = state_24356;var statearr_24364_24383 = state_24356__$1;(statearr_24364_24383[2] = inst_24352);
(statearr_24364_24383[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24357 === 8))
{var inst_24343 = cljs.core.async.close_BANG_(to);var state_24356__$1 = state_24356;var statearr_24365_24384 = state_24356__$1;(statearr_24365_24384[2] = inst_24343);
(statearr_24365_24384[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24357 === 9))
{var state_24356__$1 = state_24356;var statearr_24366_24385 = state_24356__$1;(statearr_24366_24385[2] = null);
(statearr_24366_24385[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24357 === 10))
{var inst_24346 = (state_24356[2]);var state_24356__$1 = state_24356;var statearr_24367_24386 = state_24356__$1;(statearr_24367_24386[2] = inst_24346);
(statearr_24367_24386[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24357 === 11))
{var inst_24349 = (state_24356[2]);var state_24356__$1 = (function (){var statearr_24368 = state_24356;(statearr_24368[8] = inst_24349);
return statearr_24368;
})();var statearr_24369_24387 = state_24356__$1;(statearr_24369_24387[2] = null);
(statearr_24369_24387[1] = 2);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_24373 = [null,null,null,null,null,null,null,null,null];(statearr_24373[0] = state_machine__5507__auto__);
(statearr_24373[1] = 1);
return statearr_24373;
});
var state_machine__5507__auto____1 = (function (state_24356){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24356);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24374){if((e24374 instanceof Object))
{var ex__5510__auto__ = e24374;var statearr_24375_24388 = state_24356;(statearr_24375_24388[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24356);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e24374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__24389 = state_24356;
state_24356 = G__24389;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24356){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24376 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24377);
return statearr_24376;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24454){var state_val_24455 = (state_24454[1]);if((state_val_24455 === 1))
{var state_24454__$1 = state_24454;var statearr_24456_24477 = state_24454__$1;(statearr_24456_24477[2] = null);
(statearr_24456_24477[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 2))
{var state_24454__$1 = state_24454;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24454__$1,4,ch);
} else
{if((state_val_24455 === 3))
{var inst_24452 = (state_24454[2]);var state_24454__$1 = state_24454;return cljs.core.async.impl.ioc_helpers.return_chan(state_24454__$1,inst_24452);
} else
{if((state_val_24455 === 4))
{var inst_24435 = (state_24454[7]);var inst_24435__$1 = (state_24454[2]);var inst_24436 = (inst_24435__$1 == null);var state_24454__$1 = (function (){var statearr_24457 = state_24454;(statearr_24457[7] = inst_24435__$1);
return statearr_24457;
})();if(cljs.core.truth_(inst_24436))
{var statearr_24458_24478 = state_24454__$1;(statearr_24458_24478[1] = 5);
} else
{var statearr_24459_24479 = state_24454__$1;(statearr_24459_24479[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 5))
{var inst_24438 = cljs.core.async.close_BANG_(tc);var inst_24439 = cljs.core.async.close_BANG_(fc);var state_24454__$1 = (function (){var statearr_24460 = state_24454;(statearr_24460[8] = inst_24438);
return statearr_24460;
})();var statearr_24461_24480 = state_24454__$1;(statearr_24461_24480[2] = inst_24439);
(statearr_24461_24480[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 6))
{var inst_24435 = (state_24454[7]);var inst_24441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24435) : p.call(null,inst_24435));var state_24454__$1 = state_24454;if(cljs.core.truth_(inst_24441))
{var statearr_24462_24481 = state_24454__$1;(statearr_24462_24481[1] = 9);
} else
{var statearr_24463_24482 = state_24454__$1;(statearr_24463_24482[1] = 10);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 7))
{var inst_24450 = (state_24454[2]);var state_24454__$1 = state_24454;var statearr_24464_24483 = state_24454__$1;(statearr_24464_24483[2] = inst_24450);
(statearr_24464_24483[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 8))
{var inst_24447 = (state_24454[2]);var state_24454__$1 = (function (){var statearr_24465 = state_24454;(statearr_24465[9] = inst_24447);
return statearr_24465;
})();var statearr_24466_24484 = state_24454__$1;(statearr_24466_24484[2] = null);
(statearr_24466_24484[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 9))
{var state_24454__$1 = state_24454;var statearr_24467_24485 = state_24454__$1;(statearr_24467_24485[2] = tc);
(statearr_24467_24485[1] = 11);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 10))
{var state_24454__$1 = state_24454;var statearr_24468_24486 = state_24454__$1;(statearr_24468_24486[2] = fc);
(statearr_24468_24486[1] = 11);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24455 === 11))
{var inst_24435 = (state_24454[7]);var inst_24445 = (state_24454[2]);var state_24454__$1 = state_24454;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24454__$1,8,inst_24445,inst_24435);
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
var state_machine__5507__auto____0 = (function (){var statearr_24472 = [null,null,null,null,null,null,null,null,null,null];(statearr_24472[0] = state_machine__5507__auto__);
(statearr_24472[1] = 1);
return statearr_24472;
});
var state_machine__5507__auto____1 = (function (state_24454){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24454);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24473){if((e24473 instanceof Object))
{var ex__5510__auto__ = e24473;var statearr_24474_24487 = state_24454;(statearr_24474_24487[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24454);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e24473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__24488 = state_24454;
state_24454 = G__24488;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24454){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24475 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24476);
return statearr_24475;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24535){var state_val_24536 = (state_24535[1]);if((state_val_24536 === 7))
{var inst_24531 = (state_24535[2]);var state_24535__$1 = state_24535;var statearr_24537_24553 = state_24535__$1;(statearr_24537_24553[2] = inst_24531);
(statearr_24537_24553[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24536 === 6))
{var inst_24524 = (state_24535[7]);var inst_24521 = (state_24535[8]);var inst_24528 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24521,inst_24524) : f.call(null,inst_24521,inst_24524));var inst_24521__$1 = inst_24528;var state_24535__$1 = (function (){var statearr_24538 = state_24535;(statearr_24538[8] = inst_24521__$1);
return statearr_24538;
})();var statearr_24539_24554 = state_24535__$1;(statearr_24539_24554[2] = null);
(statearr_24539_24554[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24536 === 5))
{var inst_24521 = (state_24535[8]);var state_24535__$1 = state_24535;var statearr_24540_24555 = state_24535__$1;(statearr_24540_24555[2] = inst_24521);
(statearr_24540_24555[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24536 === 4))
{var inst_24524 = (state_24535[7]);var inst_24524__$1 = (state_24535[2]);var inst_24525 = (inst_24524__$1 == null);var state_24535__$1 = (function (){var statearr_24541 = state_24535;(statearr_24541[7] = inst_24524__$1);
return statearr_24541;
})();if(cljs.core.truth_(inst_24525))
{var statearr_24542_24556 = state_24535__$1;(statearr_24542_24556[1] = 5);
} else
{var statearr_24543_24557 = state_24535__$1;(statearr_24543_24557[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24536 === 3))
{var inst_24533 = (state_24535[2]);var state_24535__$1 = state_24535;return cljs.core.async.impl.ioc_helpers.return_chan(state_24535__$1,inst_24533);
} else
{if((state_val_24536 === 2))
{var state_24535__$1 = state_24535;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24535__$1,4,ch);
} else
{if((state_val_24536 === 1))
{var inst_24521 = init;var state_24535__$1 = (function (){var statearr_24544 = state_24535;(statearr_24544[8] = inst_24521);
return statearr_24544;
})();var statearr_24545_24558 = state_24535__$1;(statearr_24545_24558[2] = null);
(statearr_24545_24558[1] = 2);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_24549 = [null,null,null,null,null,null,null,null,null];(statearr_24549[0] = state_machine__5507__auto__);
(statearr_24549[1] = 1);
return statearr_24549;
});
var state_machine__5507__auto____1 = (function (state_24535){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24535);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24550){if((e24550 instanceof Object))
{var ex__5510__auto__ = e24550;var statearr_24551_24559 = state_24535;(statearr_24551_24559[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24535);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e24550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__24560 = state_24535;
state_24535 = G__24560;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24535){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24552 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24552;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24622){var state_val_24623 = (state_24622[1]);if((state_val_24623 === 1))
{var inst_24602 = cljs.core.seq(coll);var inst_24603 = inst_24602;var state_24622__$1 = (function (){var statearr_24624 = state_24622;(statearr_24624[7] = inst_24603);
return statearr_24624;
})();var statearr_24625_24643 = state_24622__$1;(statearr_24625_24643[2] = null);
(statearr_24625_24643[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24623 === 2))
{var inst_24603 = (state_24622[7]);var state_24622__$1 = state_24622;if(cljs.core.truth_(inst_24603))
{var statearr_24626_24644 = state_24622__$1;(statearr_24626_24644[1] = 4);
} else
{var statearr_24627_24645 = state_24622__$1;(statearr_24627_24645[1] = 5);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24623 === 3))
{var inst_24620 = (state_24622[2]);var state_24622__$1 = state_24622;return cljs.core.async.impl.ioc_helpers.return_chan(state_24622__$1,inst_24620);
} else
{if((state_val_24623 === 4))
{var inst_24603 = (state_24622[7]);var inst_24606 = cljs.core.first(inst_24603);var state_24622__$1 = state_24622;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24622__$1,7,ch,inst_24606);
} else
{if((state_val_24623 === 5))
{var state_24622__$1 = state_24622;if(cljs.core.truth_(close_QMARK_))
{var statearr_24628_24646 = state_24622__$1;(statearr_24628_24646[1] = 8);
} else
{var statearr_24629_24647 = state_24622__$1;(statearr_24629_24647[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_24623 === 6))
{var inst_24618 = (state_24622[2]);var state_24622__$1 = state_24622;var statearr_24630_24648 = state_24622__$1;(statearr_24630_24648[2] = inst_24618);
(statearr_24630_24648[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24623 === 7))
{var inst_24603 = (state_24622[7]);var inst_24608 = (state_24622[2]);var inst_24609 = cljs.core.next(inst_24603);var inst_24603__$1 = inst_24609;var state_24622__$1 = (function (){var statearr_24631 = state_24622;(statearr_24631[7] = inst_24603__$1);
(statearr_24631[8] = inst_24608);
return statearr_24631;
})();var statearr_24632_24649 = state_24622__$1;(statearr_24632_24649[2] = null);
(statearr_24632_24649[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24623 === 8))
{var inst_24613 = cljs.core.async.close_BANG_(ch);var state_24622__$1 = state_24622;var statearr_24633_24650 = state_24622__$1;(statearr_24633_24650[2] = inst_24613);
(statearr_24633_24650[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24623 === 9))
{var state_24622__$1 = state_24622;var statearr_24634_24651 = state_24622__$1;(statearr_24634_24651[2] = null);
(statearr_24634_24651[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_24623 === 10))
{var inst_24616 = (state_24622[2]);var state_24622__$1 = state_24622;var statearr_24635_24652 = state_24622__$1;(statearr_24635_24652[2] = inst_24616);
(statearr_24635_24652[1] = 6);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_24639 = [null,null,null,null,null,null,null,null,null];(statearr_24639[0] = state_machine__5507__auto__);
(statearr_24639[1] = 1);
return statearr_24639;
});
var state_machine__5507__auto____1 = (function (state_24622){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24622);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24640){if((e24640 instanceof Object))
{var ex__5510__auto__ = e24640;var statearr_24641_24653 = state_24622;(statearr_24641_24653[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24622);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e24640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__24654 = state_24622;
state_24622 = G__24654;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24622){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24642 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24642;
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
cljs.core.async.Mux = (function (){var obj24656 = {};return obj24656;
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
cljs.core.async.Mult = (function (){var obj24658 = {};return obj24658;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24882 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24882 = (function (cs,ch,mult,meta24883){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24883 = meta24883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24882.cljs$lang$type = true;
cljs.core.async.t24882.cljs$lang$ctorStr = "cljs.core.async/t24882";
cljs.core.async.t24882.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24882");
});})(cs))
;
cljs.core.async.t24882.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24882.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24882.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24882.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24882.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24884){var self__ = this;
var _24884__$1 = this;return self__.meta24883;
});})(cs))
;
cljs.core.async.t24882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24884,meta24883__$1){var self__ = this;
var _24884__$1 = this;return (new cljs.core.async.t24882(self__.cs,self__.ch,self__.mult,meta24883__$1));
});})(cs))
;
cljs.core.async.__GT_t24882 = ((function (cs){
return (function __GT_t24882(cs__$1,ch__$1,mult__$1,meta24883){return (new cljs.core.async.t24882(cs__$1,ch__$1,mult__$1,meta24883));
});})(cs))
;
}
return (new cljs.core.async.t24882(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25019){var state_val_25020 = (state_25019[1]);if((state_val_25020 === 32))
{var inst_24887 = (state_25019[7]);var inst_24963 = (state_25019[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25019,31,Object,null,30);var inst_24970 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24963,inst_24887,done);var state_25019__$1 = state_25019;var statearr_25021_25106 = state_25019__$1;(statearr_25021_25106[2] = inst_24970);
cljs.core.async.impl.ioc_helpers.process_exception(state_25019__$1);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 1))
{var state_25019__$1 = state_25019;var statearr_25022_25107 = state_25019__$1;(statearr_25022_25107[2] = null);
(statearr_25022_25107[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 33))
{var inst_24976 = (state_25019[9]);var inst_24978 = cljs.core.chunked_seq_QMARK_(inst_24976);var state_25019__$1 = state_25019;if(inst_24978)
{var statearr_25023_25108 = state_25019__$1;(statearr_25023_25108[1] = 36);
} else
{var statearr_25024_25109 = state_25019__$1;(statearr_25024_25109[1] = 37);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 2))
{var state_25019__$1 = state_25019;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25019__$1,4,ch);
} else
{if((state_val_25020 === 34))
{var state_25019__$1 = state_25019;var statearr_25025_25110 = state_25019__$1;(statearr_25025_25110[2] = null);
(statearr_25025_25110[1] = 35);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 3))
{var inst_25017 = (state_25019[2]);var state_25019__$1 = state_25019;return cljs.core.async.impl.ioc_helpers.return_chan(state_25019__$1,inst_25017);
} else
{if((state_val_25020 === 35))
{var inst_25001 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25026_25111 = state_25019__$1;(statearr_25026_25111[2] = inst_25001);
(statearr_25026_25111[1] = 29);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 4))
{var inst_24887 = (state_25019[7]);var inst_24887__$1 = (state_25019[2]);var inst_24888 = (inst_24887__$1 == null);var state_25019__$1 = (function (){var statearr_25027 = state_25019;(statearr_25027[7] = inst_24887__$1);
return statearr_25027;
})();if(cljs.core.truth_(inst_24888))
{var statearr_25028_25112 = state_25019__$1;(statearr_25028_25112[1] = 5);
} else
{var statearr_25029_25113 = state_25019__$1;(statearr_25029_25113[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 36))
{var inst_24976 = (state_25019[9]);var inst_24980 = cljs.core.chunk_first(inst_24976);var inst_24981 = cljs.core.chunk_rest(inst_24976);var inst_24982 = cljs.core.count(inst_24980);var inst_24955 = inst_24981;var inst_24956 = inst_24980;var inst_24957 = inst_24982;var inst_24958 = 0;var state_25019__$1 = (function (){var statearr_25030 = state_25019;(statearr_25030[10] = inst_24955);
(statearr_25030[11] = inst_24956);
(statearr_25030[12] = inst_24958);
(statearr_25030[13] = inst_24957);
return statearr_25030;
})();var statearr_25031_25114 = state_25019__$1;(statearr_25031_25114[2] = null);
(statearr_25031_25114[1] = 25);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 5))
{var inst_24894 = cljs.core.deref(cs);var inst_24895 = cljs.core.seq(inst_24894);var inst_24896 = inst_24895;var inst_24897 = null;var inst_24898 = 0;var inst_24899 = 0;var state_25019__$1 = (function (){var statearr_25032 = state_25019;(statearr_25032[14] = inst_24897);
(statearr_25032[15] = inst_24896);
(statearr_25032[16] = inst_24898);
(statearr_25032[17] = inst_24899);
return statearr_25032;
})();var statearr_25033_25115 = state_25019__$1;(statearr_25033_25115[2] = null);
(statearr_25033_25115[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 37))
{var inst_24976 = (state_25019[9]);var inst_24985 = cljs.core.first(inst_24976);var state_25019__$1 = (function (){var statearr_25034 = state_25019;(statearr_25034[18] = inst_24985);
return statearr_25034;
})();var statearr_25035_25116 = state_25019__$1;(statearr_25035_25116[2] = null);
(statearr_25035_25116[1] = 41);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 6))
{var inst_24947 = (state_25019[19]);var inst_24946 = cljs.core.deref(cs);var inst_24947__$1 = cljs.core.keys(inst_24946);var inst_24948 = cljs.core.count(inst_24947__$1);var inst_24949 = cljs.core.reset_BANG_(dctr,inst_24948);var inst_24954 = cljs.core.seq(inst_24947__$1);var inst_24955 = inst_24954;var inst_24956 = null;var inst_24957 = 0;var inst_24958 = 0;var state_25019__$1 = (function (){var statearr_25036 = state_25019;(statearr_25036[19] = inst_24947__$1);
(statearr_25036[20] = inst_24949);
(statearr_25036[10] = inst_24955);
(statearr_25036[11] = inst_24956);
(statearr_25036[12] = inst_24958);
(statearr_25036[13] = inst_24957);
return statearr_25036;
})();var statearr_25037_25117 = state_25019__$1;(statearr_25037_25117[2] = null);
(statearr_25037_25117[1] = 25);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 38))
{var inst_24998 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25038_25118 = state_25019__$1;(statearr_25038_25118[2] = inst_24998);
(statearr_25038_25118[1] = 35);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 7))
{var inst_25015 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25039_25119 = state_25019__$1;(statearr_25039_25119[2] = inst_25015);
(statearr_25039_25119[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 39))
{var inst_24976 = (state_25019[9]);var inst_24994 = (state_25019[2]);var inst_24995 = cljs.core.next(inst_24976);var inst_24955 = inst_24995;var inst_24956 = null;var inst_24957 = 0;var inst_24958 = 0;var state_25019__$1 = (function (){var statearr_25040 = state_25019;(statearr_25040[10] = inst_24955);
(statearr_25040[11] = inst_24956);
(statearr_25040[12] = inst_24958);
(statearr_25040[13] = inst_24957);
(statearr_25040[21] = inst_24994);
return statearr_25040;
})();var statearr_25041_25120 = state_25019__$1;(statearr_25041_25120[2] = null);
(statearr_25041_25120[1] = 25);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 8))
{var inst_24898 = (state_25019[16]);var inst_24899 = (state_25019[17]);var inst_24901 = (inst_24899 < inst_24898);var inst_24902 = inst_24901;var state_25019__$1 = state_25019;if(cljs.core.truth_(inst_24902))
{var statearr_25042_25121 = state_25019__$1;(statearr_25042_25121[1] = 10);
} else
{var statearr_25043_25122 = state_25019__$1;(statearr_25043_25122[1] = 11);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 40))
{var inst_24985 = (state_25019[18]);var inst_24986 = (state_25019[2]);var inst_24987 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24988 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24985);var state_25019__$1 = (function (){var statearr_25044 = state_25019;(statearr_25044[22] = inst_24986);
(statearr_25044[23] = inst_24987);
return statearr_25044;
})();var statearr_25045_25123 = state_25019__$1;(statearr_25045_25123[2] = inst_24988);
cljs.core.async.impl.ioc_helpers.process_exception(state_25019__$1);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 9))
{var inst_24944 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25046_25124 = state_25019__$1;(statearr_25046_25124[2] = inst_24944);
(statearr_25046_25124[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 41))
{var inst_24887 = (state_25019[7]);var inst_24985 = (state_25019[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25019,40,Object,null,39);var inst_24992 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24985,inst_24887,done);var state_25019__$1 = state_25019;var statearr_25047_25125 = state_25019__$1;(statearr_25047_25125[2] = inst_24992);
cljs.core.async.impl.ioc_helpers.process_exception(state_25019__$1);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 10))
{var inst_24897 = (state_25019[14]);var inst_24899 = (state_25019[17]);var inst_24905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24897,inst_24899);var inst_24906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24905,0,null);var inst_24907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24905,1,null);var state_25019__$1 = (function (){var statearr_25048 = state_25019;(statearr_25048[24] = inst_24906);
return statearr_25048;
})();if(cljs.core.truth_(inst_24907))
{var statearr_25049_25126 = state_25019__$1;(statearr_25049_25126[1] = 13);
} else
{var statearr_25050_25127 = state_25019__$1;(statearr_25050_25127[1] = 14);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 42))
{var state_25019__$1 = state_25019;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25019__$1,45,dchan);
} else
{if((state_val_25020 === 11))
{var inst_24896 = (state_25019[15]);var inst_24916 = (state_25019[25]);var inst_24916__$1 = cljs.core.seq(inst_24896);var state_25019__$1 = (function (){var statearr_25051 = state_25019;(statearr_25051[25] = inst_24916__$1);
return statearr_25051;
})();if(inst_24916__$1)
{var statearr_25052_25128 = state_25019__$1;(statearr_25052_25128[1] = 16);
} else
{var statearr_25053_25129 = state_25019__$1;(statearr_25053_25129[1] = 17);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 43))
{var state_25019__$1 = state_25019;var statearr_25054_25130 = state_25019__$1;(statearr_25054_25130[2] = null);
(statearr_25054_25130[1] = 44);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 12))
{var inst_24942 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25055_25131 = state_25019__$1;(statearr_25055_25131[2] = inst_24942);
(statearr_25055_25131[1] = 9);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 44))
{var inst_25012 = (state_25019[2]);var state_25019__$1 = (function (){var statearr_25056 = state_25019;(statearr_25056[26] = inst_25012);
return statearr_25056;
})();var statearr_25057_25132 = state_25019__$1;(statearr_25057_25132[2] = null);
(statearr_25057_25132[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 13))
{var inst_24906 = (state_25019[24]);var inst_24909 = cljs.core.async.close_BANG_(inst_24906);var state_25019__$1 = state_25019;var statearr_25058_25133 = state_25019__$1;(statearr_25058_25133[2] = inst_24909);
(statearr_25058_25133[1] = 15);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 45))
{var inst_25009 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25062_25134 = state_25019__$1;(statearr_25062_25134[2] = inst_25009);
(statearr_25062_25134[1] = 44);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 14))
{var state_25019__$1 = state_25019;var statearr_25063_25135 = state_25019__$1;(statearr_25063_25135[2] = null);
(statearr_25063_25135[1] = 15);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 15))
{var inst_24897 = (state_25019[14]);var inst_24896 = (state_25019[15]);var inst_24898 = (state_25019[16]);var inst_24899 = (state_25019[17]);var inst_24912 = (state_25019[2]);var inst_24913 = (inst_24899 + 1);var tmp25059 = inst_24897;var tmp25060 = inst_24896;var tmp25061 = inst_24898;var inst_24896__$1 = tmp25060;var inst_24897__$1 = tmp25059;var inst_24898__$1 = tmp25061;var inst_24899__$1 = inst_24913;var state_25019__$1 = (function (){var statearr_25064 = state_25019;(statearr_25064[14] = inst_24897__$1);
(statearr_25064[15] = inst_24896__$1);
(statearr_25064[27] = inst_24912);
(statearr_25064[16] = inst_24898__$1);
(statearr_25064[17] = inst_24899__$1);
return statearr_25064;
})();var statearr_25065_25136 = state_25019__$1;(statearr_25065_25136[2] = null);
(statearr_25065_25136[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 16))
{var inst_24916 = (state_25019[25]);var inst_24918 = cljs.core.chunked_seq_QMARK_(inst_24916);var state_25019__$1 = state_25019;if(inst_24918)
{var statearr_25066_25137 = state_25019__$1;(statearr_25066_25137[1] = 19);
} else
{var statearr_25067_25138 = state_25019__$1;(statearr_25067_25138[1] = 20);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 17))
{var state_25019__$1 = state_25019;var statearr_25068_25139 = state_25019__$1;(statearr_25068_25139[2] = null);
(statearr_25068_25139[1] = 18);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 18))
{var inst_24940 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25069_25140 = state_25019__$1;(statearr_25069_25140[2] = inst_24940);
(statearr_25069_25140[1] = 12);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 19))
{var inst_24916 = (state_25019[25]);var inst_24920 = cljs.core.chunk_first(inst_24916);var inst_24921 = cljs.core.chunk_rest(inst_24916);var inst_24922 = cljs.core.count(inst_24920);var inst_24896 = inst_24921;var inst_24897 = inst_24920;var inst_24898 = inst_24922;var inst_24899 = 0;var state_25019__$1 = (function (){var statearr_25070 = state_25019;(statearr_25070[14] = inst_24897);
(statearr_25070[15] = inst_24896);
(statearr_25070[16] = inst_24898);
(statearr_25070[17] = inst_24899);
return statearr_25070;
})();var statearr_25071_25141 = state_25019__$1;(statearr_25071_25141[2] = null);
(statearr_25071_25141[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 20))
{var inst_24916 = (state_25019[25]);var inst_24926 = cljs.core.first(inst_24916);var inst_24927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24926,0,null);var inst_24928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24926,1,null);var state_25019__$1 = (function (){var statearr_25072 = state_25019;(statearr_25072[28] = inst_24927);
return statearr_25072;
})();if(cljs.core.truth_(inst_24928))
{var statearr_25073_25142 = state_25019__$1;(statearr_25073_25142[1] = 22);
} else
{var statearr_25074_25143 = state_25019__$1;(statearr_25074_25143[1] = 23);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 21))
{var inst_24937 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25075_25144 = state_25019__$1;(statearr_25075_25144[2] = inst_24937);
(statearr_25075_25144[1] = 18);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 22))
{var inst_24927 = (state_25019[28]);var inst_24930 = cljs.core.async.close_BANG_(inst_24927);var state_25019__$1 = state_25019;var statearr_25076_25145 = state_25019__$1;(statearr_25076_25145[2] = inst_24930);
(statearr_25076_25145[1] = 24);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 23))
{var state_25019__$1 = state_25019;var statearr_25077_25146 = state_25019__$1;(statearr_25077_25146[2] = null);
(statearr_25077_25146[1] = 24);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 24))
{var inst_24916 = (state_25019[25]);var inst_24933 = (state_25019[2]);var inst_24934 = cljs.core.next(inst_24916);var inst_24896 = inst_24934;var inst_24897 = null;var inst_24898 = 0;var inst_24899 = 0;var state_25019__$1 = (function (){var statearr_25078 = state_25019;(statearr_25078[14] = inst_24897);
(statearr_25078[15] = inst_24896);
(statearr_25078[16] = inst_24898);
(statearr_25078[17] = inst_24899);
(statearr_25078[29] = inst_24933);
return statearr_25078;
})();var statearr_25079_25147 = state_25019__$1;(statearr_25079_25147[2] = null);
(statearr_25079_25147[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 25))
{var inst_24958 = (state_25019[12]);var inst_24957 = (state_25019[13]);var inst_24960 = (inst_24958 < inst_24957);var inst_24961 = inst_24960;var state_25019__$1 = state_25019;if(cljs.core.truth_(inst_24961))
{var statearr_25080_25148 = state_25019__$1;(statearr_25080_25148[1] = 27);
} else
{var statearr_25081_25149 = state_25019__$1;(statearr_25081_25149[1] = 28);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 26))
{var inst_24947 = (state_25019[19]);var inst_25005 = (state_25019[2]);var inst_25006 = cljs.core.seq(inst_24947);var state_25019__$1 = (function (){var statearr_25082 = state_25019;(statearr_25082[30] = inst_25005);
return statearr_25082;
})();if(inst_25006)
{var statearr_25083_25150 = state_25019__$1;(statearr_25083_25150[1] = 42);
} else
{var statearr_25084_25151 = state_25019__$1;(statearr_25084_25151[1] = 43);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 27))
{var inst_24956 = (state_25019[11]);var inst_24958 = (state_25019[12]);var inst_24963 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24956,inst_24958);var state_25019__$1 = (function (){var statearr_25085 = state_25019;(statearr_25085[8] = inst_24963);
return statearr_25085;
})();var statearr_25086_25152 = state_25019__$1;(statearr_25086_25152[2] = null);
(statearr_25086_25152[1] = 32);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 28))
{var inst_24955 = (state_25019[10]);var inst_24976 = (state_25019[9]);var inst_24976__$1 = cljs.core.seq(inst_24955);var state_25019__$1 = (function (){var statearr_25090 = state_25019;(statearr_25090[9] = inst_24976__$1);
return statearr_25090;
})();if(inst_24976__$1)
{var statearr_25091_25153 = state_25019__$1;(statearr_25091_25153[1] = 33);
} else
{var statearr_25092_25154 = state_25019__$1;(statearr_25092_25154[1] = 34);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 29))
{var inst_25003 = (state_25019[2]);var state_25019__$1 = state_25019;var statearr_25093_25155 = state_25019__$1;(statearr_25093_25155[2] = inst_25003);
(statearr_25093_25155[1] = 26);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 30))
{var inst_24955 = (state_25019[10]);var inst_24956 = (state_25019[11]);var inst_24958 = (state_25019[12]);var inst_24957 = (state_25019[13]);var inst_24972 = (state_25019[2]);var inst_24973 = (inst_24958 + 1);var tmp25087 = inst_24955;var tmp25088 = inst_24956;var tmp25089 = inst_24957;var inst_24955__$1 = tmp25087;var inst_24956__$1 = tmp25088;var inst_24957__$1 = tmp25089;var inst_24958__$1 = inst_24973;var state_25019__$1 = (function (){var statearr_25094 = state_25019;(statearr_25094[31] = inst_24972);
(statearr_25094[10] = inst_24955__$1);
(statearr_25094[11] = inst_24956__$1);
(statearr_25094[12] = inst_24958__$1);
(statearr_25094[13] = inst_24957__$1);
return statearr_25094;
})();var statearr_25095_25156 = state_25019__$1;(statearr_25095_25156[2] = null);
(statearr_25095_25156[1] = 25);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25020 === 31))
{var inst_24963 = (state_25019[8]);var inst_24964 = (state_25019[2]);var inst_24965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24966 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24963);var state_25019__$1 = (function (){var statearr_25096 = state_25019;(statearr_25096[32] = inst_24964);
(statearr_25096[33] = inst_24965);
return statearr_25096;
})();var statearr_25097_25157 = state_25019__$1;(statearr_25097_25157[2] = inst_24966);
cljs.core.async.impl.ioc_helpers.process_exception(state_25019__$1);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_25101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25101[0] = state_machine__5507__auto__);
(statearr_25101[1] = 1);
return statearr_25101;
});
var state_machine__5507__auto____1 = (function (state_25019){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25019);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25102){if((e25102 instanceof Object))
{var ex__5510__auto__ = e25102;var statearr_25103_25158 = state_25019;(statearr_25103_25158[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25019);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e25102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__25159 = state_25019;
state_25019 = G__25159;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25019){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25104 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25105);
return statearr_25104;
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
cljs.core.async.Mix = (function (){var obj25161 = {};return obj25161;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$240,null,cljs.core.constant$keyword$241,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$242);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$241);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$242,chs);var pauses = pick(cljs.core.constant$keyword$240,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$243,solos,cljs.core.constant$keyword$244,pick(cljs.core.constant$keyword$241,chs),cljs.core.constant$keyword$245,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$240)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25271 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25271 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25272){
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
this.meta25272 = meta25272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25271.cljs$lang$type = true;
cljs.core.async.t25271.cljs$lang$ctorStr = "cljs.core.async/t25271";
cljs.core.async.t25271.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25271");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25271.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25273){var self__ = this;
var _25273__$1 = this;return self__.meta25272;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25273,meta25272__$1){var self__ = this;
var _25273__$1 = this;return (new cljs.core.async.t25271(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25272__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25271 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25271(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25272){return (new cljs.core.async.t25271(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25272));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25271(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25338){var state_val_25339 = (state_25338[1]);if((state_val_25339 === 1))
{var inst_25277 = (state_25338[7]);var inst_25277__$1 = calc_state();var inst_25278 = cljs.core.seq_QMARK_(inst_25277__$1);var state_25338__$1 = (function (){var statearr_25340 = state_25338;(statearr_25340[7] = inst_25277__$1);
return statearr_25340;
})();if(inst_25278)
{var statearr_25341_25381 = state_25338__$1;(statearr_25341_25381[1] = 2);
} else
{var statearr_25342_25382 = state_25338__$1;(statearr_25342_25382[1] = 3);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 2))
{var inst_25277 = (state_25338[7]);var inst_25280 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25277);var state_25338__$1 = state_25338;var statearr_25343_25383 = state_25338__$1;(statearr_25343_25383[2] = inst_25280);
(statearr_25343_25383[1] = 4);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 3))
{var inst_25277 = (state_25338[7]);var state_25338__$1 = state_25338;var statearr_25344_25384 = state_25338__$1;(statearr_25344_25384[2] = inst_25277);
(statearr_25344_25384[1] = 4);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 4))
{var inst_25277 = (state_25338[7]);var inst_25283 = (state_25338[2]);var inst_25284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25283,cljs.core.constant$keyword$245);var inst_25285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25283,cljs.core.constant$keyword$244);var inst_25286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25283,cljs.core.constant$keyword$243);var inst_25287 = inst_25277;var state_25338__$1 = (function (){var statearr_25345 = state_25338;(statearr_25345[8] = inst_25286);
(statearr_25345[9] = inst_25287);
(statearr_25345[10] = inst_25285);
(statearr_25345[11] = inst_25284);
return statearr_25345;
})();var statearr_25346_25385 = state_25338__$1;(statearr_25346_25385[2] = null);
(statearr_25346_25385[1] = 5);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 5))
{var inst_25287 = (state_25338[9]);var inst_25290 = cljs.core.seq_QMARK_(inst_25287);var state_25338__$1 = state_25338;if(inst_25290)
{var statearr_25347_25386 = state_25338__$1;(statearr_25347_25386[1] = 7);
} else
{var statearr_25348_25387 = state_25338__$1;(statearr_25348_25387[1] = 8);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 6))
{var inst_25336 = (state_25338[2]);var state_25338__$1 = state_25338;return cljs.core.async.impl.ioc_helpers.return_chan(state_25338__$1,inst_25336);
} else
{if((state_val_25339 === 7))
{var inst_25287 = (state_25338[9]);var inst_25292 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25287);var state_25338__$1 = state_25338;var statearr_25349_25388 = state_25338__$1;(statearr_25349_25388[2] = inst_25292);
(statearr_25349_25388[1] = 9);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 8))
{var inst_25287 = (state_25338[9]);var state_25338__$1 = state_25338;var statearr_25350_25389 = state_25338__$1;(statearr_25350_25389[2] = inst_25287);
(statearr_25350_25389[1] = 9);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 9))
{var inst_25295 = (state_25338[12]);var inst_25295__$1 = (state_25338[2]);var inst_25296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25295__$1,cljs.core.constant$keyword$245);var inst_25297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25295__$1,cljs.core.constant$keyword$244);var inst_25298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25295__$1,cljs.core.constant$keyword$243);var state_25338__$1 = (function (){var statearr_25351 = state_25338;(statearr_25351[13] = inst_25297);
(statearr_25351[14] = inst_25298);
(statearr_25351[12] = inst_25295__$1);
return statearr_25351;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25338__$1,10,inst_25296);
} else
{if((state_val_25339 === 10))
{var inst_25303 = (state_25338[15]);var inst_25302 = (state_25338[16]);var inst_25301 = (state_25338[2]);var inst_25302__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25301,0,null);var inst_25303__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25301,1,null);var inst_25304 = (inst_25302__$1 == null);var inst_25305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25303__$1,change);var inst_25306 = (inst_25304) || (inst_25305);var state_25338__$1 = (function (){var statearr_25352 = state_25338;(statearr_25352[15] = inst_25303__$1);
(statearr_25352[16] = inst_25302__$1);
return statearr_25352;
})();if(cljs.core.truth_(inst_25306))
{var statearr_25353_25390 = state_25338__$1;(statearr_25353_25390[1] = 11);
} else
{var statearr_25354_25391 = state_25338__$1;(statearr_25354_25391[1] = 12);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 11))
{var inst_25302 = (state_25338[16]);var inst_25308 = (inst_25302 == null);var state_25338__$1 = state_25338;if(cljs.core.truth_(inst_25308))
{var statearr_25355_25392 = state_25338__$1;(statearr_25355_25392[1] = 14);
} else
{var statearr_25356_25393 = state_25338__$1;(statearr_25356_25393[1] = 15);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 12))
{var inst_25298 = (state_25338[14]);var inst_25303 = (state_25338[15]);var inst_25317 = (state_25338[17]);var inst_25317__$1 = (inst_25298.cljs$core$IFn$_invoke$arity$1 ? inst_25298.cljs$core$IFn$_invoke$arity$1(inst_25303) : inst_25298.call(null,inst_25303));var state_25338__$1 = (function (){var statearr_25357 = state_25338;(statearr_25357[17] = inst_25317__$1);
return statearr_25357;
})();if(cljs.core.truth_(inst_25317__$1))
{var statearr_25358_25394 = state_25338__$1;(statearr_25358_25394[1] = 17);
} else
{var statearr_25359_25395 = state_25338__$1;(statearr_25359_25395[1] = 18);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 13))
{var inst_25334 = (state_25338[2]);var state_25338__$1 = state_25338;var statearr_25360_25396 = state_25338__$1;(statearr_25360_25396[2] = inst_25334);
(statearr_25360_25396[1] = 6);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 14))
{var inst_25303 = (state_25338[15]);var inst_25310 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25303);var state_25338__$1 = state_25338;var statearr_25361_25397 = state_25338__$1;(statearr_25361_25397[2] = inst_25310);
(statearr_25361_25397[1] = 16);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 15))
{var state_25338__$1 = state_25338;var statearr_25362_25398 = state_25338__$1;(statearr_25362_25398[2] = null);
(statearr_25362_25398[1] = 16);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 16))
{var inst_25313 = (state_25338[2]);var inst_25314 = calc_state();var inst_25287 = inst_25314;var state_25338__$1 = (function (){var statearr_25363 = state_25338;(statearr_25363[9] = inst_25287);
(statearr_25363[18] = inst_25313);
return statearr_25363;
})();var statearr_25364_25399 = state_25338__$1;(statearr_25364_25399[2] = null);
(statearr_25364_25399[1] = 5);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 17))
{var inst_25317 = (state_25338[17]);var state_25338__$1 = state_25338;var statearr_25365_25400 = state_25338__$1;(statearr_25365_25400[2] = inst_25317);
(statearr_25365_25400[1] = 19);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 18))
{var inst_25297 = (state_25338[13]);var inst_25298 = (state_25338[14]);var inst_25303 = (state_25338[15]);var inst_25320 = cljs.core.empty_QMARK_(inst_25298);var inst_25321 = (inst_25297.cljs$core$IFn$_invoke$arity$1 ? inst_25297.cljs$core$IFn$_invoke$arity$1(inst_25303) : inst_25297.call(null,inst_25303));var inst_25322 = cljs.core.not(inst_25321);var inst_25323 = (inst_25320) && (inst_25322);var state_25338__$1 = state_25338;var statearr_25366_25401 = state_25338__$1;(statearr_25366_25401[2] = inst_25323);
(statearr_25366_25401[1] = 19);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 19))
{var inst_25325 = (state_25338[2]);var state_25338__$1 = state_25338;if(cljs.core.truth_(inst_25325))
{var statearr_25367_25402 = state_25338__$1;(statearr_25367_25402[1] = 20);
} else
{var statearr_25368_25403 = state_25338__$1;(statearr_25368_25403[1] = 21);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 20))
{var inst_25302 = (state_25338[16]);var state_25338__$1 = state_25338;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25338__$1,23,out,inst_25302);
} else
{if((state_val_25339 === 21))
{var state_25338__$1 = state_25338;var statearr_25369_25404 = state_25338__$1;(statearr_25369_25404[2] = null);
(statearr_25369_25404[1] = 22);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 22))
{var inst_25295 = (state_25338[12]);var inst_25331 = (state_25338[2]);var inst_25287 = inst_25295;var state_25338__$1 = (function (){var statearr_25370 = state_25338;(statearr_25370[19] = inst_25331);
(statearr_25370[9] = inst_25287);
return statearr_25370;
})();var statearr_25371_25405 = state_25338__$1;(statearr_25371_25405[2] = null);
(statearr_25371_25405[1] = 5);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25339 === 23))
{var inst_25328 = (state_25338[2]);var state_25338__$1 = state_25338;var statearr_25372_25406 = state_25338__$1;(statearr_25372_25406[2] = inst_25328);
(statearr_25372_25406[1] = 22);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_25376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25376[0] = state_machine__5507__auto__);
(statearr_25376[1] = 1);
return statearr_25376;
});
var state_machine__5507__auto____1 = (function (state_25338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25338);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25377){if((e25377 instanceof Object))
{var ex__5510__auto__ = e25377;var statearr_25378_25407 = state_25338;(statearr_25378_25407[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25338);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e25377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__25408 = state_25338;
state_25338 = G__25408;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25379 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25380);
return statearr_25379;
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
cljs.core.async.Pub = (function (){var obj25410 = {};return obj25410;
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
return (function (p1__25411_SHARP_){if(cljs.core.truth_((p1__25411_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25411_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25411_SHARP_.call(null,topic))))
{return p1__25411_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25411_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25536 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25536 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25537){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25537 = meta25537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25536.cljs$lang$type = true;
cljs.core.async.t25536.cljs$lang$ctorStr = "cljs.core.async/t25536";
cljs.core.async.t25536.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25536");
});})(mults,ensure_mult))
;
cljs.core.async.t25536.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25536.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25536.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25536.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25538){var self__ = this;
var _25538__$1 = this;return self__.meta25537;
});})(mults,ensure_mult))
;
cljs.core.async.t25536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25538,meta25537__$1){var self__ = this;
var _25538__$1 = this;return (new cljs.core.async.t25536(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25537__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25536 = ((function (mults,ensure_mult){
return (function __GT_t25536(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25537){return (new cljs.core.async.t25536(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25537));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25536(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25612){var state_val_25613 = (state_25612[1]);if((state_val_25613 === 1))
{var state_25612__$1 = state_25612;var statearr_25614_25661 = state_25612__$1;(statearr_25614_25661[2] = null);
(statearr_25614_25661[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 2))
{var state_25612__$1 = state_25612;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25612__$1,4,ch);
} else
{if((state_val_25613 === 3))
{var inst_25610 = (state_25612[2]);var state_25612__$1 = state_25612;return cljs.core.async.impl.ioc_helpers.return_chan(state_25612__$1,inst_25610);
} else
{if((state_val_25613 === 4))
{var inst_25541 = (state_25612[7]);var inst_25541__$1 = (state_25612[2]);var inst_25542 = (inst_25541__$1 == null);var state_25612__$1 = (function (){var statearr_25615 = state_25612;(statearr_25615[7] = inst_25541__$1);
return statearr_25615;
})();if(cljs.core.truth_(inst_25542))
{var statearr_25616_25662 = state_25612__$1;(statearr_25616_25662[1] = 5);
} else
{var statearr_25617_25663 = state_25612__$1;(statearr_25617_25663[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 5))
{var inst_25548 = cljs.core.deref(mults);var inst_25549 = cljs.core.vals(inst_25548);var inst_25550 = cljs.core.seq(inst_25549);var inst_25551 = inst_25550;var inst_25552 = null;var inst_25553 = 0;var inst_25554 = 0;var state_25612__$1 = (function (){var statearr_25618 = state_25612;(statearr_25618[8] = inst_25552);
(statearr_25618[9] = inst_25553);
(statearr_25618[10] = inst_25551);
(statearr_25618[11] = inst_25554);
return statearr_25618;
})();var statearr_25619_25664 = state_25612__$1;(statearr_25619_25664[2] = null);
(statearr_25619_25664[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 6))
{var inst_25589 = (state_25612[12]);var inst_25541 = (state_25612[7]);var inst_25591 = (state_25612[13]);var inst_25589__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25541) : topic_fn.call(null,inst_25541));var inst_25590 = cljs.core.deref(mults);var inst_25591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25590,inst_25589__$1);var state_25612__$1 = (function (){var statearr_25620 = state_25612;(statearr_25620[12] = inst_25589__$1);
(statearr_25620[13] = inst_25591__$1);
return statearr_25620;
})();if(cljs.core.truth_(inst_25591__$1))
{var statearr_25621_25665 = state_25612__$1;(statearr_25621_25665[1] = 19);
} else
{var statearr_25622_25666 = state_25612__$1;(statearr_25622_25666[1] = 20);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 7))
{var inst_25608 = (state_25612[2]);var state_25612__$1 = state_25612;var statearr_25623_25667 = state_25612__$1;(statearr_25623_25667[2] = inst_25608);
(statearr_25623_25667[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 8))
{var inst_25553 = (state_25612[9]);var inst_25554 = (state_25612[11]);var inst_25556 = (inst_25554 < inst_25553);var inst_25557 = inst_25556;var state_25612__$1 = state_25612;if(cljs.core.truth_(inst_25557))
{var statearr_25627_25668 = state_25612__$1;(statearr_25627_25668[1] = 10);
} else
{var statearr_25628_25669 = state_25612__$1;(statearr_25628_25669[1] = 11);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 9))
{var inst_25587 = (state_25612[2]);var state_25612__$1 = state_25612;var statearr_25629_25670 = state_25612__$1;(statearr_25629_25670[2] = inst_25587);
(statearr_25629_25670[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 10))
{var inst_25552 = (state_25612[8]);var inst_25553 = (state_25612[9]);var inst_25551 = (state_25612[10]);var inst_25554 = (state_25612[11]);var inst_25559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25552,inst_25554);var inst_25560 = cljs.core.async.muxch_STAR_(inst_25559);var inst_25561 = cljs.core.async.close_BANG_(inst_25560);var inst_25562 = (inst_25554 + 1);var tmp25624 = inst_25552;var tmp25625 = inst_25553;var tmp25626 = inst_25551;var inst_25551__$1 = tmp25626;var inst_25552__$1 = tmp25624;var inst_25553__$1 = tmp25625;var inst_25554__$1 = inst_25562;var state_25612__$1 = (function (){var statearr_25630 = state_25612;(statearr_25630[8] = inst_25552__$1);
(statearr_25630[9] = inst_25553__$1);
(statearr_25630[10] = inst_25551__$1);
(statearr_25630[14] = inst_25561);
(statearr_25630[11] = inst_25554__$1);
return statearr_25630;
})();var statearr_25631_25671 = state_25612__$1;(statearr_25631_25671[2] = null);
(statearr_25631_25671[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 11))
{var inst_25551 = (state_25612[10]);var inst_25565 = (state_25612[15]);var inst_25565__$1 = cljs.core.seq(inst_25551);var state_25612__$1 = (function (){var statearr_25632 = state_25612;(statearr_25632[15] = inst_25565__$1);
return statearr_25632;
})();if(inst_25565__$1)
{var statearr_25633_25672 = state_25612__$1;(statearr_25633_25672[1] = 13);
} else
{var statearr_25634_25673 = state_25612__$1;(statearr_25634_25673[1] = 14);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 12))
{var inst_25585 = (state_25612[2]);var state_25612__$1 = state_25612;var statearr_25635_25674 = state_25612__$1;(statearr_25635_25674[2] = inst_25585);
(statearr_25635_25674[1] = 9);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 13))
{var inst_25565 = (state_25612[15]);var inst_25567 = cljs.core.chunked_seq_QMARK_(inst_25565);var state_25612__$1 = state_25612;if(inst_25567)
{var statearr_25636_25675 = state_25612__$1;(statearr_25636_25675[1] = 16);
} else
{var statearr_25637_25676 = state_25612__$1;(statearr_25637_25676[1] = 17);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 14))
{var state_25612__$1 = state_25612;var statearr_25638_25677 = state_25612__$1;(statearr_25638_25677[2] = null);
(statearr_25638_25677[1] = 15);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 15))
{var inst_25583 = (state_25612[2]);var state_25612__$1 = state_25612;var statearr_25639_25678 = state_25612__$1;(statearr_25639_25678[2] = inst_25583);
(statearr_25639_25678[1] = 12);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 16))
{var inst_25565 = (state_25612[15]);var inst_25569 = cljs.core.chunk_first(inst_25565);var inst_25570 = cljs.core.chunk_rest(inst_25565);var inst_25571 = cljs.core.count(inst_25569);var inst_25551 = inst_25570;var inst_25552 = inst_25569;var inst_25553 = inst_25571;var inst_25554 = 0;var state_25612__$1 = (function (){var statearr_25640 = state_25612;(statearr_25640[8] = inst_25552);
(statearr_25640[9] = inst_25553);
(statearr_25640[10] = inst_25551);
(statearr_25640[11] = inst_25554);
return statearr_25640;
})();var statearr_25641_25679 = state_25612__$1;(statearr_25641_25679[2] = null);
(statearr_25641_25679[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 17))
{var inst_25565 = (state_25612[15]);var inst_25574 = cljs.core.first(inst_25565);var inst_25575 = cljs.core.async.muxch_STAR_(inst_25574);var inst_25576 = cljs.core.async.close_BANG_(inst_25575);var inst_25577 = cljs.core.next(inst_25565);var inst_25551 = inst_25577;var inst_25552 = null;var inst_25553 = 0;var inst_25554 = 0;var state_25612__$1 = (function (){var statearr_25642 = state_25612;(statearr_25642[16] = inst_25576);
(statearr_25642[8] = inst_25552);
(statearr_25642[9] = inst_25553);
(statearr_25642[10] = inst_25551);
(statearr_25642[11] = inst_25554);
return statearr_25642;
})();var statearr_25643_25680 = state_25612__$1;(statearr_25643_25680[2] = null);
(statearr_25643_25680[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 18))
{var inst_25580 = (state_25612[2]);var state_25612__$1 = state_25612;var statearr_25644_25681 = state_25612__$1;(statearr_25644_25681[2] = inst_25580);
(statearr_25644_25681[1] = 15);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 19))
{var state_25612__$1 = state_25612;var statearr_25645_25682 = state_25612__$1;(statearr_25645_25682[2] = null);
(statearr_25645_25682[1] = 24);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 20))
{var state_25612__$1 = state_25612;var statearr_25646_25683 = state_25612__$1;(statearr_25646_25683[2] = null);
(statearr_25646_25683[1] = 21);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 21))
{var inst_25605 = (state_25612[2]);var state_25612__$1 = (function (){var statearr_25647 = state_25612;(statearr_25647[17] = inst_25605);
return statearr_25647;
})();var statearr_25648_25684 = state_25612__$1;(statearr_25648_25684[2] = null);
(statearr_25648_25684[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 22))
{var inst_25602 = (state_25612[2]);var state_25612__$1 = state_25612;var statearr_25649_25685 = state_25612__$1;(statearr_25649_25685[2] = inst_25602);
(statearr_25649_25685[1] = 21);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 23))
{var inst_25589 = (state_25612[12]);var inst_25593 = (state_25612[2]);var inst_25594 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25589);var state_25612__$1 = (function (){var statearr_25650 = state_25612;(statearr_25650[18] = inst_25593);
return statearr_25650;
})();var statearr_25651_25686 = state_25612__$1;(statearr_25651_25686[2] = inst_25594);
cljs.core.async.impl.ioc_helpers.process_exception(state_25612__$1);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25613 === 24))
{var inst_25541 = (state_25612[7]);var inst_25591 = (state_25612[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25612,23,Object,null,22);var inst_25598 = cljs.core.async.muxch_STAR_(inst_25591);var state_25612__$1 = state_25612;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25612__$1,25,inst_25598,inst_25541);
} else
{if((state_val_25613 === 25))
{var inst_25600 = (state_25612[2]);var state_25612__$1 = state_25612;var statearr_25652_25687 = state_25612__$1;(statearr_25652_25687[2] = inst_25600);
cljs.core.async.impl.ioc_helpers.process_exception(state_25612__$1);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_25656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25656[0] = state_machine__5507__auto__);
(statearr_25656[1] = 1);
return statearr_25656;
});
var state_machine__5507__auto____1 = (function (state_25612){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25612);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25657){if((e25657 instanceof Object))
{var ex__5510__auto__ = e25657;var statearr_25658_25688 = state_25612;(statearr_25658_25688[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25612);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e25657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__25689 = state_25612;
state_25612 = G__25689;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25612){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25659 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25660);
return statearr_25659;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25796){var state_val_25797 = (state_25796[1]);if((state_val_25797 === 1))
{var state_25796__$1 = state_25796;var statearr_25798_25827 = state_25796__$1;(statearr_25798_25827[2] = null);
(statearr_25798_25827[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 2))
{var inst_25759 = cljs.core.reset_BANG_(dctr,cnt);var inst_25760 = 0;var state_25796__$1 = (function (){var statearr_25799 = state_25796;(statearr_25799[7] = inst_25759);
(statearr_25799[8] = inst_25760);
return statearr_25799;
})();var statearr_25800_25828 = state_25796__$1;(statearr_25800_25828[2] = null);
(statearr_25800_25828[1] = 4);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 3))
{var inst_25794 = (state_25796[2]);var state_25796__$1 = state_25796;return cljs.core.async.impl.ioc_helpers.return_chan(state_25796__$1,inst_25794);
} else
{if((state_val_25797 === 4))
{var inst_25760 = (state_25796[8]);var inst_25762 = (inst_25760 < cnt);var state_25796__$1 = state_25796;if(cljs.core.truth_(inst_25762))
{var statearr_25801_25829 = state_25796__$1;(statearr_25801_25829[1] = 6);
} else
{var statearr_25802_25830 = state_25796__$1;(statearr_25802_25830[1] = 7);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 5))
{var inst_25780 = (state_25796[2]);var state_25796__$1 = (function (){var statearr_25803 = state_25796;(statearr_25803[9] = inst_25780);
return statearr_25803;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25796__$1,12,dchan);
} else
{if((state_val_25797 === 6))
{var state_25796__$1 = state_25796;var statearr_25804_25831 = state_25796__$1;(statearr_25804_25831[2] = null);
(statearr_25804_25831[1] = 11);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 7))
{var state_25796__$1 = state_25796;var statearr_25805_25832 = state_25796__$1;(statearr_25805_25832[2] = null);
(statearr_25805_25832[1] = 8);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 8))
{var inst_25778 = (state_25796[2]);var state_25796__$1 = state_25796;var statearr_25806_25833 = state_25796__$1;(statearr_25806_25833[2] = inst_25778);
(statearr_25806_25833[1] = 5);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 9))
{var inst_25760 = (state_25796[8]);var inst_25773 = (state_25796[2]);var inst_25774 = (inst_25760 + 1);var inst_25760__$1 = inst_25774;var state_25796__$1 = (function (){var statearr_25807 = state_25796;(statearr_25807[10] = inst_25773);
(statearr_25807[8] = inst_25760__$1);
return statearr_25807;
})();var statearr_25808_25834 = state_25796__$1;(statearr_25808_25834[2] = null);
(statearr_25808_25834[1] = 4);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 10))
{var inst_25764 = (state_25796[2]);var inst_25765 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25796__$1 = (function (){var statearr_25809 = state_25796;(statearr_25809[11] = inst_25764);
return statearr_25809;
})();var statearr_25810_25835 = state_25796__$1;(statearr_25810_25835[2] = inst_25765);
cljs.core.async.impl.ioc_helpers.process_exception(state_25796__$1);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 11))
{var inst_25760 = (state_25796[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25796,10,Object,null,9);var inst_25769 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25760) : chs__$1.call(null,inst_25760));var inst_25770 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25760) : done.call(null,inst_25760));var inst_25771 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25769,inst_25770);var state_25796__$1 = state_25796;var statearr_25811_25836 = state_25796__$1;(statearr_25811_25836[2] = inst_25771);
cljs.core.async.impl.ioc_helpers.process_exception(state_25796__$1);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 12))
{var inst_25782 = (state_25796[12]);var inst_25782__$1 = (state_25796[2]);var inst_25783 = cljs.core.some(cljs.core.nil_QMARK_,inst_25782__$1);var state_25796__$1 = (function (){var statearr_25812 = state_25796;(statearr_25812[12] = inst_25782__$1);
return statearr_25812;
})();if(cljs.core.truth_(inst_25783))
{var statearr_25813_25837 = state_25796__$1;(statearr_25813_25837[1] = 13);
} else
{var statearr_25814_25838 = state_25796__$1;(statearr_25814_25838[1] = 14);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 13))
{var inst_25785 = cljs.core.async.close_BANG_(out);var state_25796__$1 = state_25796;var statearr_25815_25839 = state_25796__$1;(statearr_25815_25839[2] = inst_25785);
(statearr_25815_25839[1] = 15);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 14))
{var inst_25782 = (state_25796[12]);var inst_25787 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25782);var state_25796__$1 = state_25796;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25796__$1,16,out,inst_25787);
} else
{if((state_val_25797 === 15))
{var inst_25792 = (state_25796[2]);var state_25796__$1 = state_25796;var statearr_25816_25840 = state_25796__$1;(statearr_25816_25840[2] = inst_25792);
(statearr_25816_25840[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25797 === 16))
{var inst_25789 = (state_25796[2]);var state_25796__$1 = (function (){var statearr_25817 = state_25796;(statearr_25817[13] = inst_25789);
return statearr_25817;
})();var statearr_25818_25841 = state_25796__$1;(statearr_25818_25841[2] = null);
(statearr_25818_25841[1] = 2);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_25822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25822[0] = state_machine__5507__auto__);
(statearr_25822[1] = 1);
return statearr_25822;
});
var state_machine__5507__auto____1 = (function (state_25796){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25796);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25823){if((e25823 instanceof Object))
{var ex__5510__auto__ = e25823;var statearr_25824_25842 = state_25796;(statearr_25824_25842[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25796);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e25823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__25843 = state_25796;
state_25796 = G__25843;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25796){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25825 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25826);
return statearr_25825;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25927){var state_val_25928 = (state_25927[1]);if((state_val_25928 === 1))
{var inst_25898 = cljs.core.vec(chs);var inst_25899 = inst_25898;var state_25927__$1 = (function (){var statearr_25929 = state_25927;(statearr_25929[7] = inst_25899);
return statearr_25929;
})();var statearr_25930_25952 = state_25927__$1;(statearr_25930_25952[2] = null);
(statearr_25930_25952[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25928 === 2))
{var inst_25899 = (state_25927[7]);var inst_25901 = cljs.core.count(inst_25899);var inst_25902 = (inst_25901 > 0);var state_25927__$1 = state_25927;if(cljs.core.truth_(inst_25902))
{var statearr_25931_25953 = state_25927__$1;(statearr_25931_25953[1] = 4);
} else
{var statearr_25932_25954 = state_25927__$1;(statearr_25932_25954[1] = 5);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25928 === 3))
{var inst_25925 = (state_25927[2]);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.return_chan(state_25927__$1,inst_25925);
} else
{if((state_val_25928 === 4))
{var inst_25899 = (state_25927[7]);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25927__$1,7,inst_25899);
} else
{if((state_val_25928 === 5))
{var inst_25921 = cljs.core.async.close_BANG_(out);var state_25927__$1 = state_25927;var statearr_25933_25955 = state_25927__$1;(statearr_25933_25955[2] = inst_25921);
(statearr_25933_25955[1] = 6);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25928 === 6))
{var inst_25923 = (state_25927[2]);var state_25927__$1 = state_25927;var statearr_25934_25956 = state_25927__$1;(statearr_25934_25956[2] = inst_25923);
(statearr_25934_25956[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25928 === 7))
{var inst_25906 = (state_25927[8]);var inst_25907 = (state_25927[9]);var inst_25906__$1 = (state_25927[2]);var inst_25907__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25906__$1,0,null);var inst_25908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25906__$1,1,null);var inst_25909 = (inst_25907__$1 == null);var state_25927__$1 = (function (){var statearr_25935 = state_25927;(statearr_25935[8] = inst_25906__$1);
(statearr_25935[9] = inst_25907__$1);
(statearr_25935[10] = inst_25908);
return statearr_25935;
})();if(cljs.core.truth_(inst_25909))
{var statearr_25936_25957 = state_25927__$1;(statearr_25936_25957[1] = 8);
} else
{var statearr_25937_25958 = state_25927__$1;(statearr_25937_25958[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_25928 === 8))
{var inst_25906 = (state_25927[8]);var inst_25899 = (state_25927[7]);var inst_25907 = (state_25927[9]);var inst_25908 = (state_25927[10]);var inst_25911 = (function (){var c = inst_25908;var v = inst_25907;var vec__25904 = inst_25906;var cs = inst_25899;return ((function (c,v,vec__25904,cs,inst_25906,inst_25899,inst_25907,inst_25908,state_val_25928){
return (function (p1__25844_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25844_SHARP_);
});
;})(c,v,vec__25904,cs,inst_25906,inst_25899,inst_25907,inst_25908,state_val_25928))
})();var inst_25912 = cljs.core.filterv(inst_25911,inst_25899);var inst_25899__$1 = inst_25912;var state_25927__$1 = (function (){var statearr_25938 = state_25927;(statearr_25938[7] = inst_25899__$1);
return statearr_25938;
})();var statearr_25939_25959 = state_25927__$1;(statearr_25939_25959[2] = null);
(statearr_25939_25959[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25928 === 9))
{var inst_25907 = (state_25927[9]);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25927__$1,11,out,inst_25907);
} else
{if((state_val_25928 === 10))
{var inst_25919 = (state_25927[2]);var state_25927__$1 = state_25927;var statearr_25941_25960 = state_25927__$1;(statearr_25941_25960[2] = inst_25919);
(statearr_25941_25960[1] = 6);
return cljs.core.constant$keyword$233;
} else
{if((state_val_25928 === 11))
{var inst_25899 = (state_25927[7]);var inst_25916 = (state_25927[2]);var tmp25940 = inst_25899;var inst_25899__$1 = tmp25940;var state_25927__$1 = (function (){var statearr_25942 = state_25927;(statearr_25942[7] = inst_25899__$1);
(statearr_25942[11] = inst_25916);
return statearr_25942;
})();var statearr_25943_25961 = state_25927__$1;(statearr_25943_25961[2] = null);
(statearr_25943_25961[1] = 2);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_25947 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25947[0] = state_machine__5507__auto__);
(statearr_25947[1] = 1);
return statearr_25947;
});
var state_machine__5507__auto____1 = (function (state_25927){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25927);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25948){if((e25948 instanceof Object))
{var ex__5510__auto__ = e25948;var statearr_25949_25962 = state_25927;(statearr_25949_25962[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25927);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e25948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__25963 = state_25927;
state_25927 = G__25963;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25927){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25950 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25951);
return statearr_25950;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26033){var state_val_26034 = (state_26033[1]);if((state_val_26034 === 1))
{var inst_26010 = 0;var state_26033__$1 = (function (){var statearr_26035 = state_26033;(statearr_26035[7] = inst_26010);
return statearr_26035;
})();var statearr_26036_26057 = state_26033__$1;(statearr_26036_26057[2] = null);
(statearr_26036_26057[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26034 === 2))
{var inst_26010 = (state_26033[7]);var inst_26012 = (inst_26010 < n);var state_26033__$1 = state_26033;if(cljs.core.truth_(inst_26012))
{var statearr_26037_26058 = state_26033__$1;(statearr_26037_26058[1] = 4);
} else
{var statearr_26038_26059 = state_26033__$1;(statearr_26038_26059[1] = 5);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26034 === 3))
{var inst_26030 = (state_26033[2]);var inst_26031 = cljs.core.async.close_BANG_(out);var state_26033__$1 = (function (){var statearr_26039 = state_26033;(statearr_26039[8] = inst_26030);
return statearr_26039;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26033__$1,inst_26031);
} else
{if((state_val_26034 === 4))
{var state_26033__$1 = state_26033;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26033__$1,7,ch);
} else
{if((state_val_26034 === 5))
{var state_26033__$1 = state_26033;var statearr_26040_26060 = state_26033__$1;(statearr_26040_26060[2] = null);
(statearr_26040_26060[1] = 6);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26034 === 6))
{var inst_26028 = (state_26033[2]);var state_26033__$1 = state_26033;var statearr_26041_26061 = state_26033__$1;(statearr_26041_26061[2] = inst_26028);
(statearr_26041_26061[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26034 === 7))
{var inst_26015 = (state_26033[9]);var inst_26015__$1 = (state_26033[2]);var inst_26016 = (inst_26015__$1 == null);var inst_26017 = cljs.core.not(inst_26016);var state_26033__$1 = (function (){var statearr_26042 = state_26033;(statearr_26042[9] = inst_26015__$1);
return statearr_26042;
})();if(inst_26017)
{var statearr_26043_26062 = state_26033__$1;(statearr_26043_26062[1] = 8);
} else
{var statearr_26044_26063 = state_26033__$1;(statearr_26044_26063[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26034 === 8))
{var inst_26015 = (state_26033[9]);var state_26033__$1 = state_26033;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26033__$1,11,out,inst_26015);
} else
{if((state_val_26034 === 9))
{var state_26033__$1 = state_26033;var statearr_26045_26064 = state_26033__$1;(statearr_26045_26064[2] = null);
(statearr_26045_26064[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26034 === 10))
{var inst_26025 = (state_26033[2]);var state_26033__$1 = state_26033;var statearr_26046_26065 = state_26033__$1;(statearr_26046_26065[2] = inst_26025);
(statearr_26046_26065[1] = 6);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26034 === 11))
{var inst_26010 = (state_26033[7]);var inst_26020 = (state_26033[2]);var inst_26021 = (inst_26010 + 1);var inst_26010__$1 = inst_26021;var state_26033__$1 = (function (){var statearr_26047 = state_26033;(statearr_26047[10] = inst_26020);
(statearr_26047[7] = inst_26010__$1);
return statearr_26047;
})();var statearr_26048_26066 = state_26033__$1;(statearr_26048_26066[2] = null);
(statearr_26048_26066[1] = 2);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_26052 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26052[0] = state_machine__5507__auto__);
(statearr_26052[1] = 1);
return statearr_26052;
});
var state_machine__5507__auto____1 = (function (state_26033){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26033);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26053){if((e26053 instanceof Object))
{var ex__5510__auto__ = e26053;var statearr_26054_26067 = state_26033;(statearr_26054_26067[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26033);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e26053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__26068 = state_26033;
state_26033 = G__26068;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26033){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26055 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26056);
return statearr_26055;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26140){var state_val_26141 = (state_26140[1]);if((state_val_26141 === 1))
{var inst_26117 = null;var state_26140__$1 = (function (){var statearr_26142 = state_26140;(statearr_26142[7] = inst_26117);
return statearr_26142;
})();var statearr_26143_26166 = state_26140__$1;(statearr_26143_26166[2] = null);
(statearr_26143_26166[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26141 === 2))
{var state_26140__$1 = state_26140;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26140__$1,4,ch);
} else
{if((state_val_26141 === 3))
{var inst_26137 = (state_26140[2]);var inst_26138 = cljs.core.async.close_BANG_(out);var state_26140__$1 = (function (){var statearr_26144 = state_26140;(statearr_26144[8] = inst_26137);
return statearr_26144;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26140__$1,inst_26138);
} else
{if((state_val_26141 === 4))
{var inst_26120 = (state_26140[9]);var inst_26120__$1 = (state_26140[2]);var inst_26121 = (inst_26120__$1 == null);var inst_26122 = cljs.core.not(inst_26121);var state_26140__$1 = (function (){var statearr_26145 = state_26140;(statearr_26145[9] = inst_26120__$1);
return statearr_26145;
})();if(inst_26122)
{var statearr_26146_26167 = state_26140__$1;(statearr_26146_26167[1] = 5);
} else
{var statearr_26147_26168 = state_26140__$1;(statearr_26147_26168[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26141 === 5))
{var inst_26117 = (state_26140[7]);var inst_26120 = (state_26140[9]);var inst_26124 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26120,inst_26117);var state_26140__$1 = state_26140;if(inst_26124)
{var statearr_26148_26169 = state_26140__$1;(statearr_26148_26169[1] = 8);
} else
{var statearr_26149_26170 = state_26140__$1;(statearr_26149_26170[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26141 === 6))
{var state_26140__$1 = state_26140;var statearr_26151_26171 = state_26140__$1;(statearr_26151_26171[2] = null);
(statearr_26151_26171[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26141 === 7))
{var inst_26135 = (state_26140[2]);var state_26140__$1 = state_26140;var statearr_26152_26172 = state_26140__$1;(statearr_26152_26172[2] = inst_26135);
(statearr_26152_26172[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26141 === 8))
{var inst_26117 = (state_26140[7]);var tmp26150 = inst_26117;var inst_26117__$1 = tmp26150;var state_26140__$1 = (function (){var statearr_26153 = state_26140;(statearr_26153[7] = inst_26117__$1);
return statearr_26153;
})();var statearr_26154_26173 = state_26140__$1;(statearr_26154_26173[2] = null);
(statearr_26154_26173[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26141 === 9))
{var inst_26120 = (state_26140[9]);var state_26140__$1 = state_26140;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26140__$1,11,out,inst_26120);
} else
{if((state_val_26141 === 10))
{var inst_26132 = (state_26140[2]);var state_26140__$1 = state_26140;var statearr_26155_26174 = state_26140__$1;(statearr_26155_26174[2] = inst_26132);
(statearr_26155_26174[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26141 === 11))
{var inst_26120 = (state_26140[9]);var inst_26129 = (state_26140[2]);var inst_26117 = inst_26120;var state_26140__$1 = (function (){var statearr_26156 = state_26140;(statearr_26156[7] = inst_26117);
(statearr_26156[10] = inst_26129);
return statearr_26156;
})();var statearr_26157_26175 = state_26140__$1;(statearr_26157_26175[2] = null);
(statearr_26157_26175[1] = 2);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_26161 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26161[0] = state_machine__5507__auto__);
(statearr_26161[1] = 1);
return statearr_26161;
});
var state_machine__5507__auto____1 = (function (state_26140){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26140);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26162){if((e26162 instanceof Object))
{var ex__5510__auto__ = e26162;var statearr_26163_26176 = state_26140;(statearr_26163_26176[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26140);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e26162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__26177 = state_26140;
state_26140 = G__26177;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26140){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26164 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26165);
return statearr_26164;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26282){var state_val_26283 = (state_26282[1]);if((state_val_26283 === 1))
{var inst_26245 = (new Array(n));var inst_26246 = inst_26245;var inst_26247 = 0;var state_26282__$1 = (function (){var statearr_26284 = state_26282;(statearr_26284[7] = inst_26246);
(statearr_26284[8] = inst_26247);
return statearr_26284;
})();var statearr_26285_26313 = state_26282__$1;(statearr_26285_26313[2] = null);
(statearr_26285_26313[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 2))
{var state_26282__$1 = state_26282;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26282__$1,4,ch);
} else
{if((state_val_26283 === 3))
{var inst_26280 = (state_26282[2]);var state_26282__$1 = state_26282;return cljs.core.async.impl.ioc_helpers.return_chan(state_26282__$1,inst_26280);
} else
{if((state_val_26283 === 4))
{var inst_26250 = (state_26282[9]);var inst_26250__$1 = (state_26282[2]);var inst_26251 = (inst_26250__$1 == null);var inst_26252 = cljs.core.not(inst_26251);var state_26282__$1 = (function (){var statearr_26286 = state_26282;(statearr_26286[9] = inst_26250__$1);
return statearr_26286;
})();if(inst_26252)
{var statearr_26287_26314 = state_26282__$1;(statearr_26287_26314[1] = 5);
} else
{var statearr_26288_26315 = state_26282__$1;(statearr_26288_26315[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 5))
{var inst_26246 = (state_26282[7]);var inst_26255 = (state_26282[10]);var inst_26250 = (state_26282[9]);var inst_26247 = (state_26282[8]);var inst_26254 = (inst_26246[inst_26247] = inst_26250);var inst_26255__$1 = (inst_26247 + 1);var inst_26256 = (inst_26255__$1 < n);var state_26282__$1 = (function (){var statearr_26289 = state_26282;(statearr_26289[11] = inst_26254);
(statearr_26289[10] = inst_26255__$1);
return statearr_26289;
})();if(cljs.core.truth_(inst_26256))
{var statearr_26290_26316 = state_26282__$1;(statearr_26290_26316[1] = 8);
} else
{var statearr_26291_26317 = state_26282__$1;(statearr_26291_26317[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 6))
{var inst_26247 = (state_26282[8]);var inst_26268 = (inst_26247 > 0);var state_26282__$1 = state_26282;if(cljs.core.truth_(inst_26268))
{var statearr_26293_26318 = state_26282__$1;(statearr_26293_26318[1] = 12);
} else
{var statearr_26294_26319 = state_26282__$1;(statearr_26294_26319[1] = 13);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 7))
{var inst_26278 = (state_26282[2]);var state_26282__$1 = state_26282;var statearr_26295_26320 = state_26282__$1;(statearr_26295_26320[2] = inst_26278);
(statearr_26295_26320[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 8))
{var inst_26246 = (state_26282[7]);var inst_26255 = (state_26282[10]);var tmp26292 = inst_26246;var inst_26246__$1 = tmp26292;var inst_26247 = inst_26255;var state_26282__$1 = (function (){var statearr_26296 = state_26282;(statearr_26296[7] = inst_26246__$1);
(statearr_26296[8] = inst_26247);
return statearr_26296;
})();var statearr_26297_26321 = state_26282__$1;(statearr_26297_26321[2] = null);
(statearr_26297_26321[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 9))
{var inst_26246 = (state_26282[7]);var inst_26260 = cljs.core.vec(inst_26246);var state_26282__$1 = state_26282;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26282__$1,11,out,inst_26260);
} else
{if((state_val_26283 === 10))
{var inst_26266 = (state_26282[2]);var state_26282__$1 = state_26282;var statearr_26298_26322 = state_26282__$1;(statearr_26298_26322[2] = inst_26266);
(statearr_26298_26322[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 11))
{var inst_26262 = (state_26282[2]);var inst_26263 = (new Array(n));var inst_26246 = inst_26263;var inst_26247 = 0;var state_26282__$1 = (function (){var statearr_26299 = state_26282;(statearr_26299[12] = inst_26262);
(statearr_26299[7] = inst_26246);
(statearr_26299[8] = inst_26247);
return statearr_26299;
})();var statearr_26300_26323 = state_26282__$1;(statearr_26300_26323[2] = null);
(statearr_26300_26323[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 12))
{var inst_26246 = (state_26282[7]);var inst_26270 = cljs.core.vec(inst_26246);var state_26282__$1 = state_26282;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26282__$1,15,out,inst_26270);
} else
{if((state_val_26283 === 13))
{var state_26282__$1 = state_26282;var statearr_26301_26324 = state_26282__$1;(statearr_26301_26324[2] = null);
(statearr_26301_26324[1] = 14);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 14))
{var inst_26275 = (state_26282[2]);var inst_26276 = cljs.core.async.close_BANG_(out);var state_26282__$1 = (function (){var statearr_26302 = state_26282;(statearr_26302[13] = inst_26275);
return statearr_26302;
})();var statearr_26303_26325 = state_26282__$1;(statearr_26303_26325[2] = inst_26276);
(statearr_26303_26325[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26283 === 15))
{var inst_26272 = (state_26282[2]);var state_26282__$1 = state_26282;var statearr_26304_26326 = state_26282__$1;(statearr_26304_26326[2] = inst_26272);
(statearr_26304_26326[1] = 14);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_26308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26308[0] = state_machine__5507__auto__);
(statearr_26308[1] = 1);
return statearr_26308;
});
var state_machine__5507__auto____1 = (function (state_26282){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26282);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26309){if((e26309 instanceof Object))
{var ex__5510__auto__ = e26309;var statearr_26310_26327 = state_26282;(statearr_26310_26327[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26282);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e26309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__26328 = state_26282;
state_26282 = G__26328;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26282){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26311 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26312);
return statearr_26311;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26441){var state_val_26442 = (state_26441[1]);if((state_val_26442 === 1))
{var inst_26400 = [];var inst_26401 = inst_26400;var inst_26402 = cljs.core.constant$keyword$246;var state_26441__$1 = (function (){var statearr_26443 = state_26441;(statearr_26443[7] = inst_26402);
(statearr_26443[8] = inst_26401);
return statearr_26443;
})();var statearr_26444_26472 = state_26441__$1;(statearr_26444_26472[2] = null);
(statearr_26444_26472[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 2))
{var state_26441__$1 = state_26441;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26441__$1,4,ch);
} else
{if((state_val_26442 === 3))
{var inst_26439 = (state_26441[2]);var state_26441__$1 = state_26441;return cljs.core.async.impl.ioc_helpers.return_chan(state_26441__$1,inst_26439);
} else
{if((state_val_26442 === 4))
{var inst_26405 = (state_26441[9]);var inst_26405__$1 = (state_26441[2]);var inst_26406 = (inst_26405__$1 == null);var inst_26407 = cljs.core.not(inst_26406);var state_26441__$1 = (function (){var statearr_26445 = state_26441;(statearr_26445[9] = inst_26405__$1);
return statearr_26445;
})();if(inst_26407)
{var statearr_26446_26473 = state_26441__$1;(statearr_26446_26473[1] = 5);
} else
{var statearr_26447_26474 = state_26441__$1;(statearr_26447_26474[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 5))
{var inst_26409 = (state_26441[10]);var inst_26405 = (state_26441[9]);var inst_26402 = (state_26441[7]);var inst_26409__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26405) : f.call(null,inst_26405));var inst_26410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26409__$1,inst_26402);var inst_26411 = cljs.core.keyword_identical_QMARK_(inst_26402,cljs.core.constant$keyword$246);var inst_26412 = (inst_26410) || (inst_26411);var state_26441__$1 = (function (){var statearr_26448 = state_26441;(statearr_26448[10] = inst_26409__$1);
return statearr_26448;
})();if(cljs.core.truth_(inst_26412))
{var statearr_26449_26475 = state_26441__$1;(statearr_26449_26475[1] = 8);
} else
{var statearr_26450_26476 = state_26441__$1;(statearr_26450_26476[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 6))
{var inst_26401 = (state_26441[8]);var inst_26426 = inst_26401.length;var inst_26427 = (inst_26426 > 0);var state_26441__$1 = state_26441;if(cljs.core.truth_(inst_26427))
{var statearr_26452_26477 = state_26441__$1;(statearr_26452_26477[1] = 12);
} else
{var statearr_26453_26478 = state_26441__$1;(statearr_26453_26478[1] = 13);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 7))
{var inst_26437 = (state_26441[2]);var state_26441__$1 = state_26441;var statearr_26454_26479 = state_26441__$1;(statearr_26454_26479[2] = inst_26437);
(statearr_26454_26479[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 8))
{var inst_26409 = (state_26441[10]);var inst_26405 = (state_26441[9]);var inst_26401 = (state_26441[8]);var inst_26414 = inst_26401.push(inst_26405);var tmp26451 = inst_26401;var inst_26401__$1 = tmp26451;var inst_26402 = inst_26409;var state_26441__$1 = (function (){var statearr_26455 = state_26441;(statearr_26455[11] = inst_26414);
(statearr_26455[7] = inst_26402);
(statearr_26455[8] = inst_26401__$1);
return statearr_26455;
})();var statearr_26456_26480 = state_26441__$1;(statearr_26456_26480[2] = null);
(statearr_26456_26480[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 9))
{var inst_26401 = (state_26441[8]);var inst_26417 = cljs.core.vec(inst_26401);var state_26441__$1 = state_26441;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26441__$1,11,out,inst_26417);
} else
{if((state_val_26442 === 10))
{var inst_26424 = (state_26441[2]);var state_26441__$1 = state_26441;var statearr_26457_26481 = state_26441__$1;(statearr_26457_26481[2] = inst_26424);
(statearr_26457_26481[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 11))
{var inst_26409 = (state_26441[10]);var inst_26405 = (state_26441[9]);var inst_26419 = (state_26441[2]);var inst_26420 = [];var inst_26421 = inst_26420.push(inst_26405);var inst_26401 = inst_26420;var inst_26402 = inst_26409;var state_26441__$1 = (function (){var statearr_26458 = state_26441;(statearr_26458[12] = inst_26421);
(statearr_26458[13] = inst_26419);
(statearr_26458[7] = inst_26402);
(statearr_26458[8] = inst_26401);
return statearr_26458;
})();var statearr_26459_26482 = state_26441__$1;(statearr_26459_26482[2] = null);
(statearr_26459_26482[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 12))
{var inst_26401 = (state_26441[8]);var inst_26429 = cljs.core.vec(inst_26401);var state_26441__$1 = state_26441;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26441__$1,15,out,inst_26429);
} else
{if((state_val_26442 === 13))
{var state_26441__$1 = state_26441;var statearr_26460_26483 = state_26441__$1;(statearr_26460_26483[2] = null);
(statearr_26460_26483[1] = 14);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 14))
{var inst_26434 = (state_26441[2]);var inst_26435 = cljs.core.async.close_BANG_(out);var state_26441__$1 = (function (){var statearr_26461 = state_26441;(statearr_26461[14] = inst_26434);
return statearr_26461;
})();var statearr_26462_26484 = state_26441__$1;(statearr_26462_26484[2] = inst_26435);
(statearr_26462_26484[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_26442 === 15))
{var inst_26431 = (state_26441[2]);var state_26441__$1 = state_26441;var statearr_26463_26485 = state_26441__$1;(statearr_26463_26485[2] = inst_26431);
(statearr_26463_26485[1] = 14);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_26467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26467[0] = state_machine__5507__auto__);
(statearr_26467[1] = 1);
return statearr_26467;
});
var state_machine__5507__auto____1 = (function (state_26441){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26441);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26468){if((e26468 instanceof Object))
{var ex__5510__auto__ = e26468;var statearr_26469_26486 = state_26441;(statearr_26469_26486[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26441);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e26468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__26487 = state_26441;
state_26441 = G__26487;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26441){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26470 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26471);
return statearr_26470;
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
