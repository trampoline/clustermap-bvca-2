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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20908 = (function (f,fn_handler,meta20909){
this.f = f;
this.fn_handler = fn_handler;
this.meta20909 = meta20909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20908.cljs$lang$type = true;
cljs.core.async.t20908.cljs$lang$ctorStr = "cljs.core.async/t20908";
cljs.core.async.t20908.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20908");
});
cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20910){var self__ = this;
var _20910__$1 = this;return self__.meta20909;
});
cljs.core.async.t20908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20910,meta20909__$1){var self__ = this;
var _20910__$1 = this;return (new cljs.core.async.t20908(self__.f,self__.fn_handler,meta20909__$1));
});
cljs.core.async.__GT_t20908 = (function __GT_t20908(f__$1,fn_handler__$1,meta20909){return (new cljs.core.async.t20908(f__$1,fn_handler__$1,meta20909));
});
}
return (new cljs.core.async.t20908(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20912 = buff;if(G__20912)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__20912.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20912.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20912);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20912);
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
{var val_20913 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20913) : fn1.call(null,val_20913));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20913) : fn1.call(null,val_20913));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___20914 = n;var x_20915 = 0;while(true){
if((x_20915 < n__4248__auto___20914))
{(a[x_20915] = 0);
{
var G__20916 = (x_20915 + 1);
x_20915 = G__20916;
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
var G__20917 = (i + 1);
i = G__20917;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t20921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20921 = (function (flag,alt_flag,meta20922){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20922 = meta20922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20921.cljs$lang$type = true;
cljs.core.async.t20921.cljs$lang$ctorStr = "cljs.core.async/t20921";
cljs.core.async.t20921.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20921");
});
cljs.core.async.t20921.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t20921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t20921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20923){var self__ = this;
var _20923__$1 = this;return self__.meta20922;
});
cljs.core.async.t20921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20923,meta20922__$1){var self__ = this;
var _20923__$1 = this;return (new cljs.core.async.t20921(self__.flag,self__.alt_flag,meta20922__$1));
});
cljs.core.async.__GT_t20921 = (function __GT_t20921(flag__$1,alt_flag__$1,meta20922){return (new cljs.core.async.t20921(flag__$1,alt_flag__$1,meta20922));
});
}
return (new cljs.core.async.t20921(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20927 = (function (cb,flag,alt_handler,meta20928){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20928 = meta20928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20927.cljs$lang$type = true;
cljs.core.async.t20927.cljs$lang$ctorStr = "cljs.core.async/t20927";
cljs.core.async.t20927.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20927");
});
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20929){var self__ = this;
var _20929__$1 = this;return self__.meta20928;
});
cljs.core.async.t20927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20929,meta20928__$1){var self__ = this;
var _20929__$1 = this;return (new cljs.core.async.t20927(self__.cb,self__.flag,self__.alt_handler,meta20928__$1));
});
cljs.core.async.__GT_t20927 = (function __GT_t20927(cb__$1,flag__$1,alt_handler__$1,meta20928){return (new cljs.core.async.t20927(cb__$1,flag__$1,alt_handler__$1,meta20928));
});
}
return (new cljs.core.async.t20927(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20930_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20930_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20930_SHARP_,port], null)));
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
var G__20931 = (i + 1);
i = G__20931;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$113))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$113], null));
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
var alts_BANG___delegate = function (ports,p__20932){var map__20934 = p__20932;var map__20934__$1 = ((cljs.core.seq_QMARK_(map__20934))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20934):map__20934);var opts = map__20934__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20932 = null;if (arguments.length > 1) {
  p__20932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20932);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20935){
var ports = cljs.core.first(arglist__20935);
var p__20932 = cljs.core.rest(arglist__20935);
return alts_BANG___delegate(ports,p__20932);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20943 = (function (ch,f,map_LT_,meta20944){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20944 = meta20944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20943.cljs$lang$type = true;
cljs.core.async.t20943.cljs$lang$ctorStr = "cljs.core.async/t20943";
cljs.core.async.t20943.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20943");
});
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t20946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20946 = (function (fn1,_,meta20944,ch,f,map_LT_,meta20947){
this.fn1 = fn1;
this._ = _;
this.meta20944 = meta20944;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20947 = meta20947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20946.cljs$lang$type = true;
cljs.core.async.t20946.cljs$lang$ctorStr = "cljs.core.async/t20946";
cljs.core.async.t20946.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20946");
});
cljs.core.async.t20946.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t20946.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t20946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__20936_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__20936_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20936_SHARP_) : self__.f.call(null,p1__20936_SHARP_)))) : f1.call(null,(((p1__20936_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20936_SHARP_) : self__.f.call(null,p1__20936_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t20946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20948){var self__ = this;
var _20948__$1 = this;return self__.meta20947;
});
cljs.core.async.t20946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20948,meta20947__$1){var self__ = this;
var _20948__$1 = this;return (new cljs.core.async.t20946(self__.fn1,self__._,self__.meta20944,self__.ch,self__.f,self__.map_LT_,meta20947__$1));
});
cljs.core.async.__GT_t20946 = (function __GT_t20946(fn1__$1,___$2,meta20944__$1,ch__$2,f__$2,map_LT___$2,meta20947){return (new cljs.core.async.t20946(fn1__$1,___$2,meta20944__$1,ch__$2,f__$2,map_LT___$2,meta20947));
});
}
return (new cljs.core.async.t20946(fn1,___$1,self__.meta20944,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20945){var self__ = this;
var _20945__$1 = this;return self__.meta20944;
});
cljs.core.async.t20943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20945,meta20944__$1){var self__ = this;
var _20945__$1 = this;return (new cljs.core.async.t20943(self__.ch,self__.f,self__.map_LT_,meta20944__$1));
});
cljs.core.async.__GT_t20943 = (function __GT_t20943(ch__$1,f__$1,map_LT___$1,meta20944){return (new cljs.core.async.t20943(ch__$1,f__$1,map_LT___$1,meta20944));
});
}
return (new cljs.core.async.t20943(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20952 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20952 = (function (ch,f,map_GT_,meta20953){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20953 = meta20953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20952.cljs$lang$type = true;
cljs.core.async.t20952.cljs$lang$ctorStr = "cljs.core.async/t20952";
cljs.core.async.t20952.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20952");
});
cljs.core.async.t20952.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t20952.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20952.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20954){var self__ = this;
var _20954__$1 = this;return self__.meta20953;
});
cljs.core.async.t20952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20954,meta20953__$1){var self__ = this;
var _20954__$1 = this;return (new cljs.core.async.t20952(self__.ch,self__.f,self__.map_GT_,meta20953__$1));
});
cljs.core.async.__GT_t20952 = (function __GT_t20952(ch__$1,f__$1,map_GT___$1,meta20953){return (new cljs.core.async.t20952(ch__$1,f__$1,map_GT___$1,meta20953));
});
}
return (new cljs.core.async.t20952(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20958 = (function (ch,p,filter_GT_,meta20959){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20959 = meta20959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20958.cljs$lang$type = true;
cljs.core.async.t20958.cljs$lang$ctorStr = "cljs.core.async/t20958";
cljs.core.async.t20958.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20958");
});
cljs.core.async.t20958.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t20958.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20958.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20960){var self__ = this;
var _20960__$1 = this;return self__.meta20959;
});
cljs.core.async.t20958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20960,meta20959__$1){var self__ = this;
var _20960__$1 = this;return (new cljs.core.async.t20958(self__.ch,self__.p,self__.filter_GT_,meta20959__$1));
});
cljs.core.async.__GT_t20958 = (function __GT_t20958(ch__$1,p__$1,filter_GT___$1,meta20959){return (new cljs.core.async.t20958(ch__$1,p__$1,filter_GT___$1,meta20959));
});
}
return (new cljs.core.async.t20958(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___21043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21022){var state_val_21023 = (state_21022[1]);if((state_val_21023 === 1))
{var state_21022__$1 = state_21022;var statearr_21024_21044 = state_21022__$1;(statearr_21024_21044[2] = null);
(statearr_21024_21044[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21023 === 2))
{var state_21022__$1 = state_21022;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21022__$1,4,ch);
} else
{if((state_val_21023 === 3))
{var inst_21020 = (state_21022[2]);var state_21022__$1 = state_21022;return cljs.core.async.impl.ioc_helpers.return_chan(state_21022__$1,inst_21020);
} else
{if((state_val_21023 === 4))
{var inst_21004 = (state_21022[7]);var inst_21004__$1 = (state_21022[2]);var inst_21005 = (inst_21004__$1 == null);var state_21022__$1 = (function (){var statearr_21025 = state_21022;(statearr_21025[7] = inst_21004__$1);
return statearr_21025;
})();if(cljs.core.truth_(inst_21005))
{var statearr_21026_21045 = state_21022__$1;(statearr_21026_21045[1] = 5);
} else
{var statearr_21027_21046 = state_21022__$1;(statearr_21027_21046[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21023 === 5))
{var inst_21007 = cljs.core.async.close_BANG_(out);var state_21022__$1 = state_21022;var statearr_21028_21047 = state_21022__$1;(statearr_21028_21047[2] = inst_21007);
(statearr_21028_21047[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21023 === 6))
{var inst_21004 = (state_21022[7]);var inst_21009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21004) : p.call(null,inst_21004));var state_21022__$1 = state_21022;if(cljs.core.truth_(inst_21009))
{var statearr_21029_21048 = state_21022__$1;(statearr_21029_21048[1] = 8);
} else
{var statearr_21030_21049 = state_21022__$1;(statearr_21030_21049[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21023 === 7))
{var inst_21018 = (state_21022[2]);var state_21022__$1 = state_21022;var statearr_21031_21050 = state_21022__$1;(statearr_21031_21050[2] = inst_21018);
(statearr_21031_21050[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21023 === 8))
{var inst_21004 = (state_21022[7]);var state_21022__$1 = state_21022;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21022__$1,11,out,inst_21004);
} else
{if((state_val_21023 === 9))
{var state_21022__$1 = state_21022;var statearr_21032_21051 = state_21022__$1;(statearr_21032_21051[2] = null);
(statearr_21032_21051[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21023 === 10))
{var inst_21015 = (state_21022[2]);var state_21022__$1 = (function (){var statearr_21033 = state_21022;(statearr_21033[8] = inst_21015);
return statearr_21033;
})();var statearr_21034_21052 = state_21022__$1;(statearr_21034_21052[2] = null);
(statearr_21034_21052[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21023 === 11))
{var inst_21012 = (state_21022[2]);var state_21022__$1 = state_21022;var statearr_21035_21053 = state_21022__$1;(statearr_21035_21053[2] = inst_21012);
(statearr_21035_21053[1] = 10);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21039 = [null,null,null,null,null,null,null,null,null];(statearr_21039[0] = state_machine__5507__auto__);
(statearr_21039[1] = 1);
return statearr_21039;
});
var state_machine__5507__auto____1 = (function (state_21022){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21022);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21040){if((e21040 instanceof Object))
{var ex__5510__auto__ = e21040;var statearr_21041_21054 = state_21022;(statearr_21041_21054[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21022);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21055 = state_21022;
state_21022 = G__21055;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21022){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21042 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21043);
return statearr_21042;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21207){var state_val_21208 = (state_21207[1]);if((state_val_21208 === 1))
{var state_21207__$1 = state_21207;var statearr_21209_21246 = state_21207__$1;(statearr_21209_21246[2] = null);
(statearr_21209_21246[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 2))
{var state_21207__$1 = state_21207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21207__$1,4,in$);
} else
{if((state_val_21208 === 3))
{var inst_21205 = (state_21207[2]);var state_21207__$1 = state_21207;return cljs.core.async.impl.ioc_helpers.return_chan(state_21207__$1,inst_21205);
} else
{if((state_val_21208 === 4))
{var inst_21153 = (state_21207[7]);var inst_21153__$1 = (state_21207[2]);var inst_21154 = (inst_21153__$1 == null);var state_21207__$1 = (function (){var statearr_21210 = state_21207;(statearr_21210[7] = inst_21153__$1);
return statearr_21210;
})();if(cljs.core.truth_(inst_21154))
{var statearr_21211_21247 = state_21207__$1;(statearr_21211_21247[1] = 5);
} else
{var statearr_21212_21248 = state_21207__$1;(statearr_21212_21248[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 5))
{var inst_21156 = cljs.core.async.close_BANG_(out);var state_21207__$1 = state_21207;var statearr_21213_21249 = state_21207__$1;(statearr_21213_21249[2] = inst_21156);
(statearr_21213_21249[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 6))
{var inst_21153 = (state_21207[7]);var inst_21158 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21153) : f.call(null,inst_21153));var inst_21163 = cljs.core.seq(inst_21158);var inst_21164 = inst_21163;var inst_21165 = null;var inst_21166 = 0;var inst_21167 = 0;var state_21207__$1 = (function (){var statearr_21214 = state_21207;(statearr_21214[8] = inst_21167);
(statearr_21214[9] = inst_21166);
(statearr_21214[10] = inst_21165);
(statearr_21214[11] = inst_21164);
return statearr_21214;
})();var statearr_21215_21250 = state_21207__$1;(statearr_21215_21250[2] = null);
(statearr_21215_21250[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 7))
{var inst_21203 = (state_21207[2]);var state_21207__$1 = state_21207;var statearr_21216_21251 = state_21207__$1;(statearr_21216_21251[2] = inst_21203);
(statearr_21216_21251[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 8))
{var inst_21167 = (state_21207[8]);var inst_21166 = (state_21207[9]);var inst_21169 = (inst_21167 < inst_21166);var inst_21170 = inst_21169;var state_21207__$1 = state_21207;if(cljs.core.truth_(inst_21170))
{var statearr_21217_21252 = state_21207__$1;(statearr_21217_21252[1] = 10);
} else
{var statearr_21218_21253 = state_21207__$1;(statearr_21218_21253[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 9))
{var inst_21200 = (state_21207[2]);var state_21207__$1 = (function (){var statearr_21219 = state_21207;(statearr_21219[12] = inst_21200);
return statearr_21219;
})();var statearr_21220_21254 = state_21207__$1;(statearr_21220_21254[2] = null);
(statearr_21220_21254[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 10))
{var inst_21167 = (state_21207[8]);var inst_21165 = (state_21207[10]);var inst_21172 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21165,inst_21167);var state_21207__$1 = state_21207;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21207__$1,13,out,inst_21172);
} else
{if((state_val_21208 === 11))
{var inst_21178 = (state_21207[13]);var inst_21164 = (state_21207[11]);var inst_21178__$1 = cljs.core.seq(inst_21164);var state_21207__$1 = (function (){var statearr_21224 = state_21207;(statearr_21224[13] = inst_21178__$1);
return statearr_21224;
})();if(inst_21178__$1)
{var statearr_21225_21255 = state_21207__$1;(statearr_21225_21255[1] = 14);
} else
{var statearr_21226_21256 = state_21207__$1;(statearr_21226_21256[1] = 15);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 12))
{var inst_21198 = (state_21207[2]);var state_21207__$1 = state_21207;var statearr_21227_21257 = state_21207__$1;(statearr_21227_21257[2] = inst_21198);
(statearr_21227_21257[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 13))
{var inst_21167 = (state_21207[8]);var inst_21166 = (state_21207[9]);var inst_21165 = (state_21207[10]);var inst_21164 = (state_21207[11]);var inst_21174 = (state_21207[2]);var inst_21175 = (inst_21167 + 1);var tmp21221 = inst_21166;var tmp21222 = inst_21165;var tmp21223 = inst_21164;var inst_21164__$1 = tmp21223;var inst_21165__$1 = tmp21222;var inst_21166__$1 = tmp21221;var inst_21167__$1 = inst_21175;var state_21207__$1 = (function (){var statearr_21228 = state_21207;(statearr_21228[14] = inst_21174);
(statearr_21228[8] = inst_21167__$1);
(statearr_21228[9] = inst_21166__$1);
(statearr_21228[10] = inst_21165__$1);
(statearr_21228[11] = inst_21164__$1);
return statearr_21228;
})();var statearr_21229_21258 = state_21207__$1;(statearr_21229_21258[2] = null);
(statearr_21229_21258[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 14))
{var inst_21178 = (state_21207[13]);var inst_21180 = cljs.core.chunked_seq_QMARK_(inst_21178);var state_21207__$1 = state_21207;if(inst_21180)
{var statearr_21230_21259 = state_21207__$1;(statearr_21230_21259[1] = 17);
} else
{var statearr_21231_21260 = state_21207__$1;(statearr_21231_21260[1] = 18);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 15))
{var state_21207__$1 = state_21207;var statearr_21232_21261 = state_21207__$1;(statearr_21232_21261[2] = null);
(statearr_21232_21261[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 16))
{var inst_21196 = (state_21207[2]);var state_21207__$1 = state_21207;var statearr_21233_21262 = state_21207__$1;(statearr_21233_21262[2] = inst_21196);
(statearr_21233_21262[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 17))
{var inst_21178 = (state_21207[13]);var inst_21182 = cljs.core.chunk_first(inst_21178);var inst_21183 = cljs.core.chunk_rest(inst_21178);var inst_21184 = cljs.core.count(inst_21182);var inst_21164 = inst_21183;var inst_21165 = inst_21182;var inst_21166 = inst_21184;var inst_21167 = 0;var state_21207__$1 = (function (){var statearr_21234 = state_21207;(statearr_21234[8] = inst_21167);
(statearr_21234[9] = inst_21166);
(statearr_21234[10] = inst_21165);
(statearr_21234[11] = inst_21164);
return statearr_21234;
})();var statearr_21235_21263 = state_21207__$1;(statearr_21235_21263[2] = null);
(statearr_21235_21263[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 18))
{var inst_21178 = (state_21207[13]);var inst_21187 = cljs.core.first(inst_21178);var state_21207__$1 = state_21207;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21207__$1,20,out,inst_21187);
} else
{if((state_val_21208 === 19))
{var inst_21193 = (state_21207[2]);var state_21207__$1 = state_21207;var statearr_21236_21264 = state_21207__$1;(statearr_21236_21264[2] = inst_21193);
(statearr_21236_21264[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21208 === 20))
{var inst_21178 = (state_21207[13]);var inst_21189 = (state_21207[2]);var inst_21190 = cljs.core.next(inst_21178);var inst_21164 = inst_21190;var inst_21165 = null;var inst_21166 = 0;var inst_21167 = 0;var state_21207__$1 = (function (){var statearr_21237 = state_21207;(statearr_21237[15] = inst_21189);
(statearr_21237[8] = inst_21167);
(statearr_21237[9] = inst_21166);
(statearr_21237[10] = inst_21165);
(statearr_21237[11] = inst_21164);
return statearr_21237;
})();var statearr_21238_21265 = state_21207__$1;(statearr_21238_21265[2] = null);
(statearr_21238_21265[1] = 8);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21242[0] = state_machine__5507__auto__);
(statearr_21242[1] = 1);
return statearr_21242;
});
var state_machine__5507__auto____1 = (function (state_21207){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21207);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21243){if((e21243 instanceof Object))
{var ex__5510__auto__ = e21243;var statearr_21244_21266 = state_21207;(statearr_21244_21266[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21207);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21267 = state_21207;
state_21207 = G__21267;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21207){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21245 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21245;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___21348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21327){var state_val_21328 = (state_21327[1]);if((state_val_21328 === 1))
{var state_21327__$1 = state_21327;var statearr_21329_21349 = state_21327__$1;(statearr_21329_21349[2] = null);
(statearr_21329_21349[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21328 === 2))
{var state_21327__$1 = state_21327;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21327__$1,4,from);
} else
{if((state_val_21328 === 3))
{var inst_21325 = (state_21327[2]);var state_21327__$1 = state_21327;return cljs.core.async.impl.ioc_helpers.return_chan(state_21327__$1,inst_21325);
} else
{if((state_val_21328 === 4))
{var inst_21310 = (state_21327[7]);var inst_21310__$1 = (state_21327[2]);var inst_21311 = (inst_21310__$1 == null);var state_21327__$1 = (function (){var statearr_21330 = state_21327;(statearr_21330[7] = inst_21310__$1);
return statearr_21330;
})();if(cljs.core.truth_(inst_21311))
{var statearr_21331_21350 = state_21327__$1;(statearr_21331_21350[1] = 5);
} else
{var statearr_21332_21351 = state_21327__$1;(statearr_21332_21351[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21328 === 5))
{var state_21327__$1 = state_21327;if(cljs.core.truth_(close_QMARK_))
{var statearr_21333_21352 = state_21327__$1;(statearr_21333_21352[1] = 8);
} else
{var statearr_21334_21353 = state_21327__$1;(statearr_21334_21353[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21328 === 6))
{var inst_21310 = (state_21327[7]);var state_21327__$1 = state_21327;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21327__$1,11,to,inst_21310);
} else
{if((state_val_21328 === 7))
{var inst_21323 = (state_21327[2]);var state_21327__$1 = state_21327;var statearr_21335_21354 = state_21327__$1;(statearr_21335_21354[2] = inst_21323);
(statearr_21335_21354[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21328 === 8))
{var inst_21314 = cljs.core.async.close_BANG_(to);var state_21327__$1 = state_21327;var statearr_21336_21355 = state_21327__$1;(statearr_21336_21355[2] = inst_21314);
(statearr_21336_21355[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21328 === 9))
{var state_21327__$1 = state_21327;var statearr_21337_21356 = state_21327__$1;(statearr_21337_21356[2] = null);
(statearr_21337_21356[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21328 === 10))
{var inst_21317 = (state_21327[2]);var state_21327__$1 = state_21327;var statearr_21338_21357 = state_21327__$1;(statearr_21338_21357[2] = inst_21317);
(statearr_21338_21357[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21328 === 11))
{var inst_21320 = (state_21327[2]);var state_21327__$1 = (function (){var statearr_21339 = state_21327;(statearr_21339[8] = inst_21320);
return statearr_21339;
})();var statearr_21340_21358 = state_21327__$1;(statearr_21340_21358[2] = null);
(statearr_21340_21358[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21344 = [null,null,null,null,null,null,null,null,null];(statearr_21344[0] = state_machine__5507__auto__);
(statearr_21344[1] = 1);
return statearr_21344;
});
var state_machine__5507__auto____1 = (function (state_21327){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21327);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21345){if((e21345 instanceof Object))
{var ex__5510__auto__ = e21345;var statearr_21346_21359 = state_21327;(statearr_21346_21359[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21327);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21360 = state_21327;
state_21327 = G__21360;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21327){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21347 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21348);
return statearr_21347;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___21447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21425){var state_val_21426 = (state_21425[1]);if((state_val_21426 === 1))
{var state_21425__$1 = state_21425;var statearr_21427_21448 = state_21425__$1;(statearr_21427_21448[2] = null);
(statearr_21427_21448[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 2))
{var state_21425__$1 = state_21425;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21425__$1,4,ch);
} else
{if((state_val_21426 === 3))
{var inst_21423 = (state_21425[2]);var state_21425__$1 = state_21425;return cljs.core.async.impl.ioc_helpers.return_chan(state_21425__$1,inst_21423);
} else
{if((state_val_21426 === 4))
{var inst_21406 = (state_21425[7]);var inst_21406__$1 = (state_21425[2]);var inst_21407 = (inst_21406__$1 == null);var state_21425__$1 = (function (){var statearr_21428 = state_21425;(statearr_21428[7] = inst_21406__$1);
return statearr_21428;
})();if(cljs.core.truth_(inst_21407))
{var statearr_21429_21449 = state_21425__$1;(statearr_21429_21449[1] = 5);
} else
{var statearr_21430_21450 = state_21425__$1;(statearr_21430_21450[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 5))
{var inst_21409 = cljs.core.async.close_BANG_(tc);var inst_21410 = cljs.core.async.close_BANG_(fc);var state_21425__$1 = (function (){var statearr_21431 = state_21425;(statearr_21431[8] = inst_21409);
return statearr_21431;
})();var statearr_21432_21451 = state_21425__$1;(statearr_21432_21451[2] = inst_21410);
(statearr_21432_21451[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 6))
{var inst_21406 = (state_21425[7]);var inst_21412 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21406) : p.call(null,inst_21406));var state_21425__$1 = state_21425;if(cljs.core.truth_(inst_21412))
{var statearr_21433_21452 = state_21425__$1;(statearr_21433_21452[1] = 9);
} else
{var statearr_21434_21453 = state_21425__$1;(statearr_21434_21453[1] = 10);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 7))
{var inst_21421 = (state_21425[2]);var state_21425__$1 = state_21425;var statearr_21435_21454 = state_21425__$1;(statearr_21435_21454[2] = inst_21421);
(statearr_21435_21454[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 8))
{var inst_21418 = (state_21425[2]);var state_21425__$1 = (function (){var statearr_21436 = state_21425;(statearr_21436[9] = inst_21418);
return statearr_21436;
})();var statearr_21437_21455 = state_21425__$1;(statearr_21437_21455[2] = null);
(statearr_21437_21455[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 9))
{var state_21425__$1 = state_21425;var statearr_21438_21456 = state_21425__$1;(statearr_21438_21456[2] = tc);
(statearr_21438_21456[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 10))
{var state_21425__$1 = state_21425;var statearr_21439_21457 = state_21425__$1;(statearr_21439_21457[2] = fc);
(statearr_21439_21457[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21426 === 11))
{var inst_21406 = (state_21425[7]);var inst_21416 = (state_21425[2]);var state_21425__$1 = state_21425;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21425__$1,8,inst_21416,inst_21406);
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
var state_machine__5507__auto____0 = (function (){var statearr_21443 = [null,null,null,null,null,null,null,null,null,null];(statearr_21443[0] = state_machine__5507__auto__);
(statearr_21443[1] = 1);
return statearr_21443;
});
var state_machine__5507__auto____1 = (function (state_21425){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21425);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21444){if((e21444 instanceof Object))
{var ex__5510__auto__ = e21444;var statearr_21445_21458 = state_21425;(statearr_21445_21458[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21425);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21459 = state_21425;
state_21425 = G__21459;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21425){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21446 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21447);
return statearr_21446;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21506){var state_val_21507 = (state_21506[1]);if((state_val_21507 === 7))
{var inst_21502 = (state_21506[2]);var state_21506__$1 = state_21506;var statearr_21508_21524 = state_21506__$1;(statearr_21508_21524[2] = inst_21502);
(statearr_21508_21524[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21507 === 6))
{var inst_21492 = (state_21506[7]);var inst_21495 = (state_21506[8]);var inst_21499 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21492,inst_21495) : f.call(null,inst_21492,inst_21495));var inst_21492__$1 = inst_21499;var state_21506__$1 = (function (){var statearr_21509 = state_21506;(statearr_21509[7] = inst_21492__$1);
return statearr_21509;
})();var statearr_21510_21525 = state_21506__$1;(statearr_21510_21525[2] = null);
(statearr_21510_21525[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21507 === 5))
{var inst_21492 = (state_21506[7]);var state_21506__$1 = state_21506;var statearr_21511_21526 = state_21506__$1;(statearr_21511_21526[2] = inst_21492);
(statearr_21511_21526[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21507 === 4))
{var inst_21495 = (state_21506[8]);var inst_21495__$1 = (state_21506[2]);var inst_21496 = (inst_21495__$1 == null);var state_21506__$1 = (function (){var statearr_21512 = state_21506;(statearr_21512[8] = inst_21495__$1);
return statearr_21512;
})();if(cljs.core.truth_(inst_21496))
{var statearr_21513_21527 = state_21506__$1;(statearr_21513_21527[1] = 5);
} else
{var statearr_21514_21528 = state_21506__$1;(statearr_21514_21528[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21507 === 3))
{var inst_21504 = (state_21506[2]);var state_21506__$1 = state_21506;return cljs.core.async.impl.ioc_helpers.return_chan(state_21506__$1,inst_21504);
} else
{if((state_val_21507 === 2))
{var state_21506__$1 = state_21506;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21506__$1,4,ch);
} else
{if((state_val_21507 === 1))
{var inst_21492 = init;var state_21506__$1 = (function (){var statearr_21515 = state_21506;(statearr_21515[7] = inst_21492);
return statearr_21515;
})();var statearr_21516_21529 = state_21506__$1;(statearr_21516_21529[2] = null);
(statearr_21516_21529[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21520 = [null,null,null,null,null,null,null,null,null];(statearr_21520[0] = state_machine__5507__auto__);
(statearr_21520[1] = 1);
return statearr_21520;
});
var state_machine__5507__auto____1 = (function (state_21506){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21506);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21521){if((e21521 instanceof Object))
{var ex__5510__auto__ = e21521;var statearr_21522_21530 = state_21506;(statearr_21522_21530[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21506);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21531 = state_21506;
state_21506 = G__21531;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21506){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21523 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21523;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21593){var state_val_21594 = (state_21593[1]);if((state_val_21594 === 1))
{var inst_21573 = cljs.core.seq(coll);var inst_21574 = inst_21573;var state_21593__$1 = (function (){var statearr_21595 = state_21593;(statearr_21595[7] = inst_21574);
return statearr_21595;
})();var statearr_21596_21614 = state_21593__$1;(statearr_21596_21614[2] = null);
(statearr_21596_21614[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21594 === 2))
{var inst_21574 = (state_21593[7]);var state_21593__$1 = state_21593;if(cljs.core.truth_(inst_21574))
{var statearr_21597_21615 = state_21593__$1;(statearr_21597_21615[1] = 4);
} else
{var statearr_21598_21616 = state_21593__$1;(statearr_21598_21616[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21594 === 3))
{var inst_21591 = (state_21593[2]);var state_21593__$1 = state_21593;return cljs.core.async.impl.ioc_helpers.return_chan(state_21593__$1,inst_21591);
} else
{if((state_val_21594 === 4))
{var inst_21574 = (state_21593[7]);var inst_21577 = cljs.core.first(inst_21574);var state_21593__$1 = state_21593;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21593__$1,7,ch,inst_21577);
} else
{if((state_val_21594 === 5))
{var state_21593__$1 = state_21593;if(cljs.core.truth_(close_QMARK_))
{var statearr_21599_21617 = state_21593__$1;(statearr_21599_21617[1] = 8);
} else
{var statearr_21600_21618 = state_21593__$1;(statearr_21600_21618[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21594 === 6))
{var inst_21589 = (state_21593[2]);var state_21593__$1 = state_21593;var statearr_21601_21619 = state_21593__$1;(statearr_21601_21619[2] = inst_21589);
(statearr_21601_21619[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21594 === 7))
{var inst_21574 = (state_21593[7]);var inst_21579 = (state_21593[2]);var inst_21580 = cljs.core.next(inst_21574);var inst_21574__$1 = inst_21580;var state_21593__$1 = (function (){var statearr_21602 = state_21593;(statearr_21602[8] = inst_21579);
(statearr_21602[7] = inst_21574__$1);
return statearr_21602;
})();var statearr_21603_21620 = state_21593__$1;(statearr_21603_21620[2] = null);
(statearr_21603_21620[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21594 === 8))
{var inst_21584 = cljs.core.async.close_BANG_(ch);var state_21593__$1 = state_21593;var statearr_21604_21621 = state_21593__$1;(statearr_21604_21621[2] = inst_21584);
(statearr_21604_21621[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21594 === 9))
{var state_21593__$1 = state_21593;var statearr_21605_21622 = state_21593__$1;(statearr_21605_21622[2] = null);
(statearr_21605_21622[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21594 === 10))
{var inst_21587 = (state_21593[2]);var state_21593__$1 = state_21593;var statearr_21606_21623 = state_21593__$1;(statearr_21606_21623[2] = inst_21587);
(statearr_21606_21623[1] = 6);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21610 = [null,null,null,null,null,null,null,null,null];(statearr_21610[0] = state_machine__5507__auto__);
(statearr_21610[1] = 1);
return statearr_21610;
});
var state_machine__5507__auto____1 = (function (state_21593){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21593);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21611){if((e21611 instanceof Object))
{var ex__5510__auto__ = e21611;var statearr_21612_21624 = state_21593;(statearr_21612_21624[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21593);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21625 = state_21593;
state_21593 = G__21625;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21593){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21613 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21613;
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
cljs.core.async.Mux = (function (){var obj21627 = {};return obj21627;
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
cljs.core.async.Mult = (function (){var obj21629 = {};return obj21629;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21853 = (function (cs,ch,mult,meta21854){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21854 = meta21854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21853.cljs$lang$type = true;
cljs.core.async.t21853.cljs$lang$ctorStr = "cljs.core.async/t21853";
cljs.core.async.t21853.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21853");
});})(cs))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21853.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21855){var self__ = this;
var _21855__$1 = this;return self__.meta21854;
});})(cs))
;
cljs.core.async.t21853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21855,meta21854__$1){var self__ = this;
var _21855__$1 = this;return (new cljs.core.async.t21853(self__.cs,self__.ch,self__.mult,meta21854__$1));
});})(cs))
;
cljs.core.async.__GT_t21853 = ((function (cs){
return (function __GT_t21853(cs__$1,ch__$1,mult__$1,meta21854){return (new cljs.core.async.t21853(cs__$1,ch__$1,mult__$1,meta21854));
});})(cs))
;
}
return (new cljs.core.async.t21853(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___22076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21990){var state_val_21991 = (state_21990[1]);if((state_val_21991 === 32))
{var inst_21858 = (state_21990[7]);var inst_21934 = (state_21990[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21990,31,Object,null,30);var inst_21941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21934,inst_21858,done);var state_21990__$1 = state_21990;var statearr_21992_22077 = state_21990__$1;(statearr_21992_22077[2] = inst_21941);
cljs.core.async.impl.ioc_helpers.process_exception(state_21990__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 1))
{var state_21990__$1 = state_21990;var statearr_21993_22078 = state_21990__$1;(statearr_21993_22078[2] = null);
(statearr_21993_22078[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 33))
{var inst_21947 = (state_21990[9]);var inst_21949 = cljs.core.chunked_seq_QMARK_(inst_21947);var state_21990__$1 = state_21990;if(inst_21949)
{var statearr_21994_22079 = state_21990__$1;(statearr_21994_22079[1] = 36);
} else
{var statearr_21995_22080 = state_21990__$1;(statearr_21995_22080[1] = 37);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 2))
{var state_21990__$1 = state_21990;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21990__$1,4,ch);
} else
{if((state_val_21991 === 34))
{var state_21990__$1 = state_21990;var statearr_21996_22081 = state_21990__$1;(statearr_21996_22081[2] = null);
(statearr_21996_22081[1] = 35);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 3))
{var inst_21988 = (state_21990[2]);var state_21990__$1 = state_21990;return cljs.core.async.impl.ioc_helpers.return_chan(state_21990__$1,inst_21988);
} else
{if((state_val_21991 === 35))
{var inst_21972 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_21997_22082 = state_21990__$1;(statearr_21997_22082[2] = inst_21972);
(statearr_21997_22082[1] = 29);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 4))
{var inst_21858 = (state_21990[7]);var inst_21858__$1 = (state_21990[2]);var inst_21859 = (inst_21858__$1 == null);var state_21990__$1 = (function (){var statearr_21998 = state_21990;(statearr_21998[7] = inst_21858__$1);
return statearr_21998;
})();if(cljs.core.truth_(inst_21859))
{var statearr_21999_22083 = state_21990__$1;(statearr_21999_22083[1] = 5);
} else
{var statearr_22000_22084 = state_21990__$1;(statearr_22000_22084[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 36))
{var inst_21947 = (state_21990[9]);var inst_21951 = cljs.core.chunk_first(inst_21947);var inst_21952 = cljs.core.chunk_rest(inst_21947);var inst_21953 = cljs.core.count(inst_21951);var inst_21926 = inst_21952;var inst_21927 = inst_21951;var inst_21928 = inst_21953;var inst_21929 = 0;var state_21990__$1 = (function (){var statearr_22001 = state_21990;(statearr_22001[10] = inst_21927);
(statearr_22001[11] = inst_21928);
(statearr_22001[12] = inst_21926);
(statearr_22001[13] = inst_21929);
return statearr_22001;
})();var statearr_22002_22085 = state_21990__$1;(statearr_22002_22085[2] = null);
(statearr_22002_22085[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 5))
{var inst_21865 = cljs.core.deref(cs);var inst_21866 = cljs.core.seq(inst_21865);var inst_21867 = inst_21866;var inst_21868 = null;var inst_21869 = 0;var inst_21870 = 0;var state_21990__$1 = (function (){var statearr_22003 = state_21990;(statearr_22003[14] = inst_21867);
(statearr_22003[15] = inst_21869);
(statearr_22003[16] = inst_21868);
(statearr_22003[17] = inst_21870);
return statearr_22003;
})();var statearr_22004_22086 = state_21990__$1;(statearr_22004_22086[2] = null);
(statearr_22004_22086[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 37))
{var inst_21947 = (state_21990[9]);var inst_21956 = cljs.core.first(inst_21947);var state_21990__$1 = (function (){var statearr_22005 = state_21990;(statearr_22005[18] = inst_21956);
return statearr_22005;
})();var statearr_22006_22087 = state_21990__$1;(statearr_22006_22087[2] = null);
(statearr_22006_22087[1] = 41);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 6))
{var inst_21918 = (state_21990[19]);var inst_21917 = cljs.core.deref(cs);var inst_21918__$1 = cljs.core.keys(inst_21917);var inst_21919 = cljs.core.count(inst_21918__$1);var inst_21920 = cljs.core.reset_BANG_(dctr,inst_21919);var inst_21925 = cljs.core.seq(inst_21918__$1);var inst_21926 = inst_21925;var inst_21927 = null;var inst_21928 = 0;var inst_21929 = 0;var state_21990__$1 = (function (){var statearr_22007 = state_21990;(statearr_22007[19] = inst_21918__$1);
(statearr_22007[20] = inst_21920);
(statearr_22007[10] = inst_21927);
(statearr_22007[11] = inst_21928);
(statearr_22007[12] = inst_21926);
(statearr_22007[13] = inst_21929);
return statearr_22007;
})();var statearr_22008_22088 = state_21990__$1;(statearr_22008_22088[2] = null);
(statearr_22008_22088[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 38))
{var inst_21969 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22009_22089 = state_21990__$1;(statearr_22009_22089[2] = inst_21969);
(statearr_22009_22089[1] = 35);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 7))
{var inst_21986 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22010_22090 = state_21990__$1;(statearr_22010_22090[2] = inst_21986);
(statearr_22010_22090[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 39))
{var inst_21947 = (state_21990[9]);var inst_21965 = (state_21990[2]);var inst_21966 = cljs.core.next(inst_21947);var inst_21926 = inst_21966;var inst_21927 = null;var inst_21928 = 0;var inst_21929 = 0;var state_21990__$1 = (function (){var statearr_22011 = state_21990;(statearr_22011[21] = inst_21965);
(statearr_22011[10] = inst_21927);
(statearr_22011[11] = inst_21928);
(statearr_22011[12] = inst_21926);
(statearr_22011[13] = inst_21929);
return statearr_22011;
})();var statearr_22012_22091 = state_21990__$1;(statearr_22012_22091[2] = null);
(statearr_22012_22091[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 8))
{var inst_21869 = (state_21990[15]);var inst_21870 = (state_21990[17]);var inst_21872 = (inst_21870 < inst_21869);var inst_21873 = inst_21872;var state_21990__$1 = state_21990;if(cljs.core.truth_(inst_21873))
{var statearr_22013_22092 = state_21990__$1;(statearr_22013_22092[1] = 10);
} else
{var statearr_22014_22093 = state_21990__$1;(statearr_22014_22093[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 40))
{var inst_21956 = (state_21990[18]);var inst_21957 = (state_21990[2]);var inst_21958 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21959 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21956);var state_21990__$1 = (function (){var statearr_22015 = state_21990;(statearr_22015[22] = inst_21957);
(statearr_22015[23] = inst_21958);
return statearr_22015;
})();var statearr_22016_22094 = state_21990__$1;(statearr_22016_22094[2] = inst_21959);
cljs.core.async.impl.ioc_helpers.process_exception(state_21990__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 9))
{var inst_21915 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22017_22095 = state_21990__$1;(statearr_22017_22095[2] = inst_21915);
(statearr_22017_22095[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 41))
{var inst_21956 = (state_21990[18]);var inst_21858 = (state_21990[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21990,40,Object,null,39);var inst_21963 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21956,inst_21858,done);var state_21990__$1 = state_21990;var statearr_22018_22096 = state_21990__$1;(statearr_22018_22096[2] = inst_21963);
cljs.core.async.impl.ioc_helpers.process_exception(state_21990__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 10))
{var inst_21868 = (state_21990[16]);var inst_21870 = (state_21990[17]);var inst_21876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21868,inst_21870);var inst_21877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21876,0,null);var inst_21878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21876,1,null);var state_21990__$1 = (function (){var statearr_22019 = state_21990;(statearr_22019[24] = inst_21877);
return statearr_22019;
})();if(cljs.core.truth_(inst_21878))
{var statearr_22020_22097 = state_21990__$1;(statearr_22020_22097[1] = 13);
} else
{var statearr_22021_22098 = state_21990__$1;(statearr_22021_22098[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 42))
{var state_21990__$1 = state_21990;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21990__$1,45,dchan);
} else
{if((state_val_21991 === 11))
{var inst_21867 = (state_21990[14]);var inst_21887 = (state_21990[25]);var inst_21887__$1 = cljs.core.seq(inst_21867);var state_21990__$1 = (function (){var statearr_22022 = state_21990;(statearr_22022[25] = inst_21887__$1);
return statearr_22022;
})();if(inst_21887__$1)
{var statearr_22023_22099 = state_21990__$1;(statearr_22023_22099[1] = 16);
} else
{var statearr_22024_22100 = state_21990__$1;(statearr_22024_22100[1] = 17);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 43))
{var state_21990__$1 = state_21990;var statearr_22025_22101 = state_21990__$1;(statearr_22025_22101[2] = null);
(statearr_22025_22101[1] = 44);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 12))
{var inst_21913 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22026_22102 = state_21990__$1;(statearr_22026_22102[2] = inst_21913);
(statearr_22026_22102[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 44))
{var inst_21983 = (state_21990[2]);var state_21990__$1 = (function (){var statearr_22027 = state_21990;(statearr_22027[26] = inst_21983);
return statearr_22027;
})();var statearr_22028_22103 = state_21990__$1;(statearr_22028_22103[2] = null);
(statearr_22028_22103[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 13))
{var inst_21877 = (state_21990[24]);var inst_21880 = cljs.core.async.close_BANG_(inst_21877);var state_21990__$1 = state_21990;var statearr_22029_22104 = state_21990__$1;(statearr_22029_22104[2] = inst_21880);
(statearr_22029_22104[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 45))
{var inst_21980 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22033_22105 = state_21990__$1;(statearr_22033_22105[2] = inst_21980);
(statearr_22033_22105[1] = 44);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 14))
{var state_21990__$1 = state_21990;var statearr_22034_22106 = state_21990__$1;(statearr_22034_22106[2] = null);
(statearr_22034_22106[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 15))
{var inst_21867 = (state_21990[14]);var inst_21869 = (state_21990[15]);var inst_21868 = (state_21990[16]);var inst_21870 = (state_21990[17]);var inst_21883 = (state_21990[2]);var inst_21884 = (inst_21870 + 1);var tmp22030 = inst_21867;var tmp22031 = inst_21869;var tmp22032 = inst_21868;var inst_21867__$1 = tmp22030;var inst_21868__$1 = tmp22032;var inst_21869__$1 = tmp22031;var inst_21870__$1 = inst_21884;var state_21990__$1 = (function (){var statearr_22035 = state_21990;(statearr_22035[14] = inst_21867__$1);
(statearr_22035[15] = inst_21869__$1);
(statearr_22035[16] = inst_21868__$1);
(statearr_22035[27] = inst_21883);
(statearr_22035[17] = inst_21870__$1);
return statearr_22035;
})();var statearr_22036_22107 = state_21990__$1;(statearr_22036_22107[2] = null);
(statearr_22036_22107[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 16))
{var inst_21887 = (state_21990[25]);var inst_21889 = cljs.core.chunked_seq_QMARK_(inst_21887);var state_21990__$1 = state_21990;if(inst_21889)
{var statearr_22037_22108 = state_21990__$1;(statearr_22037_22108[1] = 19);
} else
{var statearr_22038_22109 = state_21990__$1;(statearr_22038_22109[1] = 20);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 17))
{var state_21990__$1 = state_21990;var statearr_22039_22110 = state_21990__$1;(statearr_22039_22110[2] = null);
(statearr_22039_22110[1] = 18);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 18))
{var inst_21911 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22040_22111 = state_21990__$1;(statearr_22040_22111[2] = inst_21911);
(statearr_22040_22111[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 19))
{var inst_21887 = (state_21990[25]);var inst_21891 = cljs.core.chunk_first(inst_21887);var inst_21892 = cljs.core.chunk_rest(inst_21887);var inst_21893 = cljs.core.count(inst_21891);var inst_21867 = inst_21892;var inst_21868 = inst_21891;var inst_21869 = inst_21893;var inst_21870 = 0;var state_21990__$1 = (function (){var statearr_22041 = state_21990;(statearr_22041[14] = inst_21867);
(statearr_22041[15] = inst_21869);
(statearr_22041[16] = inst_21868);
(statearr_22041[17] = inst_21870);
return statearr_22041;
})();var statearr_22042_22112 = state_21990__$1;(statearr_22042_22112[2] = null);
(statearr_22042_22112[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 20))
{var inst_21887 = (state_21990[25]);var inst_21897 = cljs.core.first(inst_21887);var inst_21898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21897,0,null);var inst_21899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21897,1,null);var state_21990__$1 = (function (){var statearr_22043 = state_21990;(statearr_22043[28] = inst_21898);
return statearr_22043;
})();if(cljs.core.truth_(inst_21899))
{var statearr_22044_22113 = state_21990__$1;(statearr_22044_22113[1] = 22);
} else
{var statearr_22045_22114 = state_21990__$1;(statearr_22045_22114[1] = 23);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 21))
{var inst_21908 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22046_22115 = state_21990__$1;(statearr_22046_22115[2] = inst_21908);
(statearr_22046_22115[1] = 18);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 22))
{var inst_21898 = (state_21990[28]);var inst_21901 = cljs.core.async.close_BANG_(inst_21898);var state_21990__$1 = state_21990;var statearr_22047_22116 = state_21990__$1;(statearr_22047_22116[2] = inst_21901);
(statearr_22047_22116[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 23))
{var state_21990__$1 = state_21990;var statearr_22048_22117 = state_21990__$1;(statearr_22048_22117[2] = null);
(statearr_22048_22117[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 24))
{var inst_21887 = (state_21990[25]);var inst_21904 = (state_21990[2]);var inst_21905 = cljs.core.next(inst_21887);var inst_21867 = inst_21905;var inst_21868 = null;var inst_21869 = 0;var inst_21870 = 0;var state_21990__$1 = (function (){var statearr_22049 = state_21990;(statearr_22049[14] = inst_21867);
(statearr_22049[15] = inst_21869);
(statearr_22049[16] = inst_21868);
(statearr_22049[29] = inst_21904);
(statearr_22049[17] = inst_21870);
return statearr_22049;
})();var statearr_22050_22118 = state_21990__$1;(statearr_22050_22118[2] = null);
(statearr_22050_22118[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 25))
{var inst_21928 = (state_21990[11]);var inst_21929 = (state_21990[13]);var inst_21931 = (inst_21929 < inst_21928);var inst_21932 = inst_21931;var state_21990__$1 = state_21990;if(cljs.core.truth_(inst_21932))
{var statearr_22051_22119 = state_21990__$1;(statearr_22051_22119[1] = 27);
} else
{var statearr_22052_22120 = state_21990__$1;(statearr_22052_22120[1] = 28);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 26))
{var inst_21918 = (state_21990[19]);var inst_21976 = (state_21990[2]);var inst_21977 = cljs.core.seq(inst_21918);var state_21990__$1 = (function (){var statearr_22053 = state_21990;(statearr_22053[30] = inst_21976);
return statearr_22053;
})();if(inst_21977)
{var statearr_22054_22121 = state_21990__$1;(statearr_22054_22121[1] = 42);
} else
{var statearr_22055_22122 = state_21990__$1;(statearr_22055_22122[1] = 43);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 27))
{var inst_21927 = (state_21990[10]);var inst_21929 = (state_21990[13]);var inst_21934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21927,inst_21929);var state_21990__$1 = (function (){var statearr_22056 = state_21990;(statearr_22056[8] = inst_21934);
return statearr_22056;
})();var statearr_22057_22123 = state_21990__$1;(statearr_22057_22123[2] = null);
(statearr_22057_22123[1] = 32);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 28))
{var inst_21947 = (state_21990[9]);var inst_21926 = (state_21990[12]);var inst_21947__$1 = cljs.core.seq(inst_21926);var state_21990__$1 = (function (){var statearr_22061 = state_21990;(statearr_22061[9] = inst_21947__$1);
return statearr_22061;
})();if(inst_21947__$1)
{var statearr_22062_22124 = state_21990__$1;(statearr_22062_22124[1] = 33);
} else
{var statearr_22063_22125 = state_21990__$1;(statearr_22063_22125[1] = 34);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 29))
{var inst_21974 = (state_21990[2]);var state_21990__$1 = state_21990;var statearr_22064_22126 = state_21990__$1;(statearr_22064_22126[2] = inst_21974);
(statearr_22064_22126[1] = 26);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 30))
{var inst_21927 = (state_21990[10]);var inst_21928 = (state_21990[11]);var inst_21926 = (state_21990[12]);var inst_21929 = (state_21990[13]);var inst_21943 = (state_21990[2]);var inst_21944 = (inst_21929 + 1);var tmp22058 = inst_21927;var tmp22059 = inst_21928;var tmp22060 = inst_21926;var inst_21926__$1 = tmp22060;var inst_21927__$1 = tmp22058;var inst_21928__$1 = tmp22059;var inst_21929__$1 = inst_21944;var state_21990__$1 = (function (){var statearr_22065 = state_21990;(statearr_22065[31] = inst_21943);
(statearr_22065[10] = inst_21927__$1);
(statearr_22065[11] = inst_21928__$1);
(statearr_22065[12] = inst_21926__$1);
(statearr_22065[13] = inst_21929__$1);
return statearr_22065;
})();var statearr_22066_22127 = state_21990__$1;(statearr_22066_22127[2] = null);
(statearr_22066_22127[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21991 === 31))
{var inst_21934 = (state_21990[8]);var inst_21935 = (state_21990[2]);var inst_21936 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21934);var state_21990__$1 = (function (){var statearr_22067 = state_21990;(statearr_22067[32] = inst_21935);
(statearr_22067[33] = inst_21936);
return statearr_22067;
})();var statearr_22068_22128 = state_21990__$1;(statearr_22068_22128[2] = inst_21937);
cljs.core.async.impl.ioc_helpers.process_exception(state_21990__$1);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22072[0] = state_machine__5507__auto__);
(statearr_22072[1] = 1);
return statearr_22072;
});
var state_machine__5507__auto____1 = (function (state_21990){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21990);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22073){if((e22073 instanceof Object))
{var ex__5510__auto__ = e22073;var statearr_22074_22129 = state_21990;(statearr_22074_22129[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21990);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22130 = state_21990;
state_21990 = G__22130;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21990){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22075 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22076);
return statearr_22075;
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
cljs.core.async.Mix = (function (){var obj22132 = {};return obj22132;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,null,cljs.core.constant$keyword$131,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$132);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$132,chs);var pauses = pick(cljs.core.constant$keyword$130,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$133,solos,cljs.core.constant$keyword$134,pick(cljs.core.constant$keyword$131,chs),cljs.core.constant$keyword$135,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$130)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22242 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22243){
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
this.meta22243 = meta22243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22242.cljs$lang$type = true;
cljs.core.async.t22242.cljs$lang$ctorStr = "cljs.core.async/t22242";
cljs.core.async.t22242.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22242");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22242.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22244){var self__ = this;
var _22244__$1 = this;return self__.meta22243;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22244,meta22243__$1){var self__ = this;
var _22244__$1 = this;return (new cljs.core.async.t22242(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22243__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22242 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22242(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22243){return (new cljs.core.async.t22242(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22243));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22242(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___22351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22309){var state_val_22310 = (state_22309[1]);if((state_val_22310 === 1))
{var inst_22248 = (state_22309[7]);var inst_22248__$1 = calc_state();var inst_22249 = cljs.core.seq_QMARK_(inst_22248__$1);var state_22309__$1 = (function (){var statearr_22311 = state_22309;(statearr_22311[7] = inst_22248__$1);
return statearr_22311;
})();if(inst_22249)
{var statearr_22312_22352 = state_22309__$1;(statearr_22312_22352[1] = 2);
} else
{var statearr_22313_22353 = state_22309__$1;(statearr_22313_22353[1] = 3);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 2))
{var inst_22248 = (state_22309[7]);var inst_22251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22248);var state_22309__$1 = state_22309;var statearr_22314_22354 = state_22309__$1;(statearr_22314_22354[2] = inst_22251);
(statearr_22314_22354[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 3))
{var inst_22248 = (state_22309[7]);var state_22309__$1 = state_22309;var statearr_22315_22355 = state_22309__$1;(statearr_22315_22355[2] = inst_22248);
(statearr_22315_22355[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 4))
{var inst_22248 = (state_22309[7]);var inst_22254 = (state_22309[2]);var inst_22255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22254,cljs.core.constant$keyword$135);var inst_22256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22254,cljs.core.constant$keyword$134);var inst_22257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22254,cljs.core.constant$keyword$133);var inst_22258 = inst_22248;var state_22309__$1 = (function (){var statearr_22316 = state_22309;(statearr_22316[8] = inst_22258);
(statearr_22316[9] = inst_22257);
(statearr_22316[10] = inst_22256);
(statearr_22316[11] = inst_22255);
return statearr_22316;
})();var statearr_22317_22356 = state_22309__$1;(statearr_22317_22356[2] = null);
(statearr_22317_22356[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 5))
{var inst_22258 = (state_22309[8]);var inst_22261 = cljs.core.seq_QMARK_(inst_22258);var state_22309__$1 = state_22309;if(inst_22261)
{var statearr_22318_22357 = state_22309__$1;(statearr_22318_22357[1] = 7);
} else
{var statearr_22319_22358 = state_22309__$1;(statearr_22319_22358[1] = 8);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 6))
{var inst_22307 = (state_22309[2]);var state_22309__$1 = state_22309;return cljs.core.async.impl.ioc_helpers.return_chan(state_22309__$1,inst_22307);
} else
{if((state_val_22310 === 7))
{var inst_22258 = (state_22309[8]);var inst_22263 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22258);var state_22309__$1 = state_22309;var statearr_22320_22359 = state_22309__$1;(statearr_22320_22359[2] = inst_22263);
(statearr_22320_22359[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 8))
{var inst_22258 = (state_22309[8]);var state_22309__$1 = state_22309;var statearr_22321_22360 = state_22309__$1;(statearr_22321_22360[2] = inst_22258);
(statearr_22321_22360[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 9))
{var inst_22266 = (state_22309[12]);var inst_22266__$1 = (state_22309[2]);var inst_22267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22266__$1,cljs.core.constant$keyword$135);var inst_22268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22266__$1,cljs.core.constant$keyword$134);var inst_22269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22266__$1,cljs.core.constant$keyword$133);var state_22309__$1 = (function (){var statearr_22322 = state_22309;(statearr_22322[13] = inst_22269);
(statearr_22322[14] = inst_22268);
(statearr_22322[12] = inst_22266__$1);
return statearr_22322;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22309__$1,10,inst_22267);
} else
{if((state_val_22310 === 10))
{var inst_22274 = (state_22309[15]);var inst_22273 = (state_22309[16]);var inst_22272 = (state_22309[2]);var inst_22273__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22272,0,null);var inst_22274__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22272,1,null);var inst_22275 = (inst_22273__$1 == null);var inst_22276 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22274__$1,change);var inst_22277 = (inst_22275) || (inst_22276);var state_22309__$1 = (function (){var statearr_22323 = state_22309;(statearr_22323[15] = inst_22274__$1);
(statearr_22323[16] = inst_22273__$1);
return statearr_22323;
})();if(cljs.core.truth_(inst_22277))
{var statearr_22324_22361 = state_22309__$1;(statearr_22324_22361[1] = 11);
} else
{var statearr_22325_22362 = state_22309__$1;(statearr_22325_22362[1] = 12);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 11))
{var inst_22273 = (state_22309[16]);var inst_22279 = (inst_22273 == null);var state_22309__$1 = state_22309;if(cljs.core.truth_(inst_22279))
{var statearr_22326_22363 = state_22309__$1;(statearr_22326_22363[1] = 14);
} else
{var statearr_22327_22364 = state_22309__$1;(statearr_22327_22364[1] = 15);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 12))
{var inst_22269 = (state_22309[13]);var inst_22274 = (state_22309[15]);var inst_22288 = (state_22309[17]);var inst_22288__$1 = (inst_22269.cljs$core$IFn$_invoke$arity$1 ? inst_22269.cljs$core$IFn$_invoke$arity$1(inst_22274) : inst_22269.call(null,inst_22274));var state_22309__$1 = (function (){var statearr_22328 = state_22309;(statearr_22328[17] = inst_22288__$1);
return statearr_22328;
})();if(cljs.core.truth_(inst_22288__$1))
{var statearr_22329_22365 = state_22309__$1;(statearr_22329_22365[1] = 17);
} else
{var statearr_22330_22366 = state_22309__$1;(statearr_22330_22366[1] = 18);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 13))
{var inst_22305 = (state_22309[2]);var state_22309__$1 = state_22309;var statearr_22331_22367 = state_22309__$1;(statearr_22331_22367[2] = inst_22305);
(statearr_22331_22367[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 14))
{var inst_22274 = (state_22309[15]);var inst_22281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22274);var state_22309__$1 = state_22309;var statearr_22332_22368 = state_22309__$1;(statearr_22332_22368[2] = inst_22281);
(statearr_22332_22368[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 15))
{var state_22309__$1 = state_22309;var statearr_22333_22369 = state_22309__$1;(statearr_22333_22369[2] = null);
(statearr_22333_22369[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 16))
{var inst_22284 = (state_22309[2]);var inst_22285 = calc_state();var inst_22258 = inst_22285;var state_22309__$1 = (function (){var statearr_22334 = state_22309;(statearr_22334[8] = inst_22258);
(statearr_22334[18] = inst_22284);
return statearr_22334;
})();var statearr_22335_22370 = state_22309__$1;(statearr_22335_22370[2] = null);
(statearr_22335_22370[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 17))
{var inst_22288 = (state_22309[17]);var state_22309__$1 = state_22309;var statearr_22336_22371 = state_22309__$1;(statearr_22336_22371[2] = inst_22288);
(statearr_22336_22371[1] = 19);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 18))
{var inst_22269 = (state_22309[13]);var inst_22274 = (state_22309[15]);var inst_22268 = (state_22309[14]);var inst_22291 = cljs.core.empty_QMARK_(inst_22269);var inst_22292 = (inst_22268.cljs$core$IFn$_invoke$arity$1 ? inst_22268.cljs$core$IFn$_invoke$arity$1(inst_22274) : inst_22268.call(null,inst_22274));var inst_22293 = cljs.core.not(inst_22292);var inst_22294 = (inst_22291) && (inst_22293);var state_22309__$1 = state_22309;var statearr_22337_22372 = state_22309__$1;(statearr_22337_22372[2] = inst_22294);
(statearr_22337_22372[1] = 19);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 19))
{var inst_22296 = (state_22309[2]);var state_22309__$1 = state_22309;if(cljs.core.truth_(inst_22296))
{var statearr_22338_22373 = state_22309__$1;(statearr_22338_22373[1] = 20);
} else
{var statearr_22339_22374 = state_22309__$1;(statearr_22339_22374[1] = 21);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 20))
{var inst_22273 = (state_22309[16]);var state_22309__$1 = state_22309;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22309__$1,23,out,inst_22273);
} else
{if((state_val_22310 === 21))
{var state_22309__$1 = state_22309;var statearr_22340_22375 = state_22309__$1;(statearr_22340_22375[2] = null);
(statearr_22340_22375[1] = 22);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 22))
{var inst_22266 = (state_22309[12]);var inst_22302 = (state_22309[2]);var inst_22258 = inst_22266;var state_22309__$1 = (function (){var statearr_22341 = state_22309;(statearr_22341[19] = inst_22302);
(statearr_22341[8] = inst_22258);
return statearr_22341;
})();var statearr_22342_22376 = state_22309__$1;(statearr_22342_22376[2] = null);
(statearr_22342_22376[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22310 === 23))
{var inst_22299 = (state_22309[2]);var state_22309__$1 = state_22309;var statearr_22343_22377 = state_22309__$1;(statearr_22343_22377[2] = inst_22299);
(statearr_22343_22377[1] = 22);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22347[0] = state_machine__5507__auto__);
(statearr_22347[1] = 1);
return statearr_22347;
});
var state_machine__5507__auto____1 = (function (state_22309){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22309);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22348){if((e22348 instanceof Object))
{var ex__5510__auto__ = e22348;var statearr_22349_22378 = state_22309;(statearr_22349_22378[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22309);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22379 = state_22309;
state_22309 = G__22379;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22309){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22350 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22351);
return statearr_22350;
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
cljs.core.async.Pub = (function (){var obj22381 = {};return obj22381;
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
return (function (p1__22382_SHARP_){if(cljs.core.truth_((p1__22382_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22382_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22382_SHARP_.call(null,topic))))
{return p1__22382_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22382_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22507 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22508){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22508 = meta22508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22507.cljs$lang$type = true;
cljs.core.async.t22507.cljs$lang$ctorStr = "cljs.core.async/t22507";
cljs.core.async.t22507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22507");
});})(mults,ensure_mult))
;
cljs.core.async.t22507.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22507.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22509){var self__ = this;
var _22509__$1 = this;return self__.meta22508;
});})(mults,ensure_mult))
;
cljs.core.async.t22507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22509,meta22508__$1){var self__ = this;
var _22509__$1 = this;return (new cljs.core.async.t22507(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22508__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22507 = ((function (mults,ensure_mult){
return (function __GT_t22507(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22508){return (new cljs.core.async.t22507(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22508));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22507(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___22631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22583){var state_val_22584 = (state_22583[1]);if((state_val_22584 === 1))
{var state_22583__$1 = state_22583;var statearr_22585_22632 = state_22583__$1;(statearr_22585_22632[2] = null);
(statearr_22585_22632[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 2))
{var state_22583__$1 = state_22583;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22583__$1,4,ch);
} else
{if((state_val_22584 === 3))
{var inst_22581 = (state_22583[2]);var state_22583__$1 = state_22583;return cljs.core.async.impl.ioc_helpers.return_chan(state_22583__$1,inst_22581);
} else
{if((state_val_22584 === 4))
{var inst_22512 = (state_22583[7]);var inst_22512__$1 = (state_22583[2]);var inst_22513 = (inst_22512__$1 == null);var state_22583__$1 = (function (){var statearr_22586 = state_22583;(statearr_22586[7] = inst_22512__$1);
return statearr_22586;
})();if(cljs.core.truth_(inst_22513))
{var statearr_22587_22633 = state_22583__$1;(statearr_22587_22633[1] = 5);
} else
{var statearr_22588_22634 = state_22583__$1;(statearr_22588_22634[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 5))
{var inst_22519 = cljs.core.deref(mults);var inst_22520 = cljs.core.vals(inst_22519);var inst_22521 = cljs.core.seq(inst_22520);var inst_22522 = inst_22521;var inst_22523 = null;var inst_22524 = 0;var inst_22525 = 0;var state_22583__$1 = (function (){var statearr_22589 = state_22583;(statearr_22589[8] = inst_22522);
(statearr_22589[9] = inst_22523);
(statearr_22589[10] = inst_22524);
(statearr_22589[11] = inst_22525);
return statearr_22589;
})();var statearr_22590_22635 = state_22583__$1;(statearr_22590_22635[2] = null);
(statearr_22590_22635[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 6))
{var inst_22560 = (state_22583[12]);var inst_22512 = (state_22583[7]);var inst_22562 = (state_22583[13]);var inst_22560__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22512) : topic_fn.call(null,inst_22512));var inst_22561 = cljs.core.deref(mults);var inst_22562__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22561,inst_22560__$1);var state_22583__$1 = (function (){var statearr_22591 = state_22583;(statearr_22591[12] = inst_22560__$1);
(statearr_22591[13] = inst_22562__$1);
return statearr_22591;
})();if(cljs.core.truth_(inst_22562__$1))
{var statearr_22592_22636 = state_22583__$1;(statearr_22592_22636[1] = 19);
} else
{var statearr_22593_22637 = state_22583__$1;(statearr_22593_22637[1] = 20);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 7))
{var inst_22579 = (state_22583[2]);var state_22583__$1 = state_22583;var statearr_22594_22638 = state_22583__$1;(statearr_22594_22638[2] = inst_22579);
(statearr_22594_22638[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 8))
{var inst_22524 = (state_22583[10]);var inst_22525 = (state_22583[11]);var inst_22527 = (inst_22525 < inst_22524);var inst_22528 = inst_22527;var state_22583__$1 = state_22583;if(cljs.core.truth_(inst_22528))
{var statearr_22598_22639 = state_22583__$1;(statearr_22598_22639[1] = 10);
} else
{var statearr_22599_22640 = state_22583__$1;(statearr_22599_22640[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 9))
{var inst_22558 = (state_22583[2]);var state_22583__$1 = state_22583;var statearr_22600_22641 = state_22583__$1;(statearr_22600_22641[2] = inst_22558);
(statearr_22600_22641[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 10))
{var inst_22522 = (state_22583[8]);var inst_22523 = (state_22583[9]);var inst_22524 = (state_22583[10]);var inst_22525 = (state_22583[11]);var inst_22530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22523,inst_22525);var inst_22531 = cljs.core.async.muxch_STAR_(inst_22530);var inst_22532 = cljs.core.async.close_BANG_(inst_22531);var inst_22533 = (inst_22525 + 1);var tmp22595 = inst_22522;var tmp22596 = inst_22523;var tmp22597 = inst_22524;var inst_22522__$1 = tmp22595;var inst_22523__$1 = tmp22596;var inst_22524__$1 = tmp22597;var inst_22525__$1 = inst_22533;var state_22583__$1 = (function (){var statearr_22601 = state_22583;(statearr_22601[8] = inst_22522__$1);
(statearr_22601[14] = inst_22532);
(statearr_22601[9] = inst_22523__$1);
(statearr_22601[10] = inst_22524__$1);
(statearr_22601[11] = inst_22525__$1);
return statearr_22601;
})();var statearr_22602_22642 = state_22583__$1;(statearr_22602_22642[2] = null);
(statearr_22602_22642[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 11))
{var inst_22536 = (state_22583[15]);var inst_22522 = (state_22583[8]);var inst_22536__$1 = cljs.core.seq(inst_22522);var state_22583__$1 = (function (){var statearr_22603 = state_22583;(statearr_22603[15] = inst_22536__$1);
return statearr_22603;
})();if(inst_22536__$1)
{var statearr_22604_22643 = state_22583__$1;(statearr_22604_22643[1] = 13);
} else
{var statearr_22605_22644 = state_22583__$1;(statearr_22605_22644[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 12))
{var inst_22556 = (state_22583[2]);var state_22583__$1 = state_22583;var statearr_22606_22645 = state_22583__$1;(statearr_22606_22645[2] = inst_22556);
(statearr_22606_22645[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 13))
{var inst_22536 = (state_22583[15]);var inst_22538 = cljs.core.chunked_seq_QMARK_(inst_22536);var state_22583__$1 = state_22583;if(inst_22538)
{var statearr_22607_22646 = state_22583__$1;(statearr_22607_22646[1] = 16);
} else
{var statearr_22608_22647 = state_22583__$1;(statearr_22608_22647[1] = 17);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 14))
{var state_22583__$1 = state_22583;var statearr_22609_22648 = state_22583__$1;(statearr_22609_22648[2] = null);
(statearr_22609_22648[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 15))
{var inst_22554 = (state_22583[2]);var state_22583__$1 = state_22583;var statearr_22610_22649 = state_22583__$1;(statearr_22610_22649[2] = inst_22554);
(statearr_22610_22649[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 16))
{var inst_22536 = (state_22583[15]);var inst_22540 = cljs.core.chunk_first(inst_22536);var inst_22541 = cljs.core.chunk_rest(inst_22536);var inst_22542 = cljs.core.count(inst_22540);var inst_22522 = inst_22541;var inst_22523 = inst_22540;var inst_22524 = inst_22542;var inst_22525 = 0;var state_22583__$1 = (function (){var statearr_22611 = state_22583;(statearr_22611[8] = inst_22522);
(statearr_22611[9] = inst_22523);
(statearr_22611[10] = inst_22524);
(statearr_22611[11] = inst_22525);
return statearr_22611;
})();var statearr_22612_22650 = state_22583__$1;(statearr_22612_22650[2] = null);
(statearr_22612_22650[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 17))
{var inst_22536 = (state_22583[15]);var inst_22545 = cljs.core.first(inst_22536);var inst_22546 = cljs.core.async.muxch_STAR_(inst_22545);var inst_22547 = cljs.core.async.close_BANG_(inst_22546);var inst_22548 = cljs.core.next(inst_22536);var inst_22522 = inst_22548;var inst_22523 = null;var inst_22524 = 0;var inst_22525 = 0;var state_22583__$1 = (function (){var statearr_22613 = state_22583;(statearr_22613[16] = inst_22547);
(statearr_22613[8] = inst_22522);
(statearr_22613[9] = inst_22523);
(statearr_22613[10] = inst_22524);
(statearr_22613[11] = inst_22525);
return statearr_22613;
})();var statearr_22614_22651 = state_22583__$1;(statearr_22614_22651[2] = null);
(statearr_22614_22651[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 18))
{var inst_22551 = (state_22583[2]);var state_22583__$1 = state_22583;var statearr_22615_22652 = state_22583__$1;(statearr_22615_22652[2] = inst_22551);
(statearr_22615_22652[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 19))
{var state_22583__$1 = state_22583;var statearr_22616_22653 = state_22583__$1;(statearr_22616_22653[2] = null);
(statearr_22616_22653[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 20))
{var state_22583__$1 = state_22583;var statearr_22617_22654 = state_22583__$1;(statearr_22617_22654[2] = null);
(statearr_22617_22654[1] = 21);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 21))
{var inst_22576 = (state_22583[2]);var state_22583__$1 = (function (){var statearr_22618 = state_22583;(statearr_22618[17] = inst_22576);
return statearr_22618;
})();var statearr_22619_22655 = state_22583__$1;(statearr_22619_22655[2] = null);
(statearr_22619_22655[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 22))
{var inst_22573 = (state_22583[2]);var state_22583__$1 = state_22583;var statearr_22620_22656 = state_22583__$1;(statearr_22620_22656[2] = inst_22573);
(statearr_22620_22656[1] = 21);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 23))
{var inst_22560 = (state_22583[12]);var inst_22564 = (state_22583[2]);var inst_22565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22560);var state_22583__$1 = (function (){var statearr_22621 = state_22583;(statearr_22621[18] = inst_22564);
return statearr_22621;
})();var statearr_22622_22657 = state_22583__$1;(statearr_22622_22657[2] = inst_22565);
cljs.core.async.impl.ioc_helpers.process_exception(state_22583__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22584 === 24))
{var inst_22512 = (state_22583[7]);var inst_22562 = (state_22583[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22583,23,Object,null,22);var inst_22569 = cljs.core.async.muxch_STAR_(inst_22562);var state_22583__$1 = state_22583;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22583__$1,25,inst_22569,inst_22512);
} else
{if((state_val_22584 === 25))
{var inst_22571 = (state_22583[2]);var state_22583__$1 = state_22583;var statearr_22623_22658 = state_22583__$1;(statearr_22623_22658[2] = inst_22571);
cljs.core.async.impl.ioc_helpers.process_exception(state_22583__$1);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22627[0] = state_machine__5507__auto__);
(statearr_22627[1] = 1);
return statearr_22627;
});
var state_machine__5507__auto____1 = (function (state_22583){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22583);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22628){if((e22628 instanceof Object))
{var ex__5510__auto__ = e22628;var statearr_22629_22659 = state_22583;(statearr_22629_22659[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22583);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22660 = state_22583;
state_22583 = G__22660;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22583){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22630 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22631);
return statearr_22630;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___22797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22767){var state_val_22768 = (state_22767[1]);if((state_val_22768 === 1))
{var state_22767__$1 = state_22767;var statearr_22769_22798 = state_22767__$1;(statearr_22769_22798[2] = null);
(statearr_22769_22798[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 2))
{var inst_22730 = cljs.core.reset_BANG_(dctr,cnt);var inst_22731 = 0;var state_22767__$1 = (function (){var statearr_22770 = state_22767;(statearr_22770[7] = inst_22731);
(statearr_22770[8] = inst_22730);
return statearr_22770;
})();var statearr_22771_22799 = state_22767__$1;(statearr_22771_22799[2] = null);
(statearr_22771_22799[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 3))
{var inst_22765 = (state_22767[2]);var state_22767__$1 = state_22767;return cljs.core.async.impl.ioc_helpers.return_chan(state_22767__$1,inst_22765);
} else
{if((state_val_22768 === 4))
{var inst_22731 = (state_22767[7]);var inst_22733 = (inst_22731 < cnt);var state_22767__$1 = state_22767;if(cljs.core.truth_(inst_22733))
{var statearr_22772_22800 = state_22767__$1;(statearr_22772_22800[1] = 6);
} else
{var statearr_22773_22801 = state_22767__$1;(statearr_22773_22801[1] = 7);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 5))
{var inst_22751 = (state_22767[2]);var state_22767__$1 = (function (){var statearr_22774 = state_22767;(statearr_22774[9] = inst_22751);
return statearr_22774;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22767__$1,12,dchan);
} else
{if((state_val_22768 === 6))
{var state_22767__$1 = state_22767;var statearr_22775_22802 = state_22767__$1;(statearr_22775_22802[2] = null);
(statearr_22775_22802[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 7))
{var state_22767__$1 = state_22767;var statearr_22776_22803 = state_22767__$1;(statearr_22776_22803[2] = null);
(statearr_22776_22803[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 8))
{var inst_22749 = (state_22767[2]);var state_22767__$1 = state_22767;var statearr_22777_22804 = state_22767__$1;(statearr_22777_22804[2] = inst_22749);
(statearr_22777_22804[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 9))
{var inst_22731 = (state_22767[7]);var inst_22744 = (state_22767[2]);var inst_22745 = (inst_22731 + 1);var inst_22731__$1 = inst_22745;var state_22767__$1 = (function (){var statearr_22778 = state_22767;(statearr_22778[10] = inst_22744);
(statearr_22778[7] = inst_22731__$1);
return statearr_22778;
})();var statearr_22779_22805 = state_22767__$1;(statearr_22779_22805[2] = null);
(statearr_22779_22805[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 10))
{var inst_22735 = (state_22767[2]);var inst_22736 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_22767__$1 = (function (){var statearr_22780 = state_22767;(statearr_22780[11] = inst_22735);
return statearr_22780;
})();var statearr_22781_22806 = state_22767__$1;(statearr_22781_22806[2] = inst_22736);
cljs.core.async.impl.ioc_helpers.process_exception(state_22767__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 11))
{var inst_22731 = (state_22767[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22767,10,Object,null,9);var inst_22740 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22731) : chs__$1.call(null,inst_22731));var inst_22741 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22731) : done.call(null,inst_22731));var inst_22742 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22740,inst_22741);var state_22767__$1 = state_22767;var statearr_22782_22807 = state_22767__$1;(statearr_22782_22807[2] = inst_22742);
cljs.core.async.impl.ioc_helpers.process_exception(state_22767__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 12))
{var inst_22753 = (state_22767[12]);var inst_22753__$1 = (state_22767[2]);var inst_22754 = cljs.core.some(cljs.core.nil_QMARK_,inst_22753__$1);var state_22767__$1 = (function (){var statearr_22783 = state_22767;(statearr_22783[12] = inst_22753__$1);
return statearr_22783;
})();if(cljs.core.truth_(inst_22754))
{var statearr_22784_22808 = state_22767__$1;(statearr_22784_22808[1] = 13);
} else
{var statearr_22785_22809 = state_22767__$1;(statearr_22785_22809[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 13))
{var inst_22756 = cljs.core.async.close_BANG_(out);var state_22767__$1 = state_22767;var statearr_22786_22810 = state_22767__$1;(statearr_22786_22810[2] = inst_22756);
(statearr_22786_22810[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 14))
{var inst_22753 = (state_22767[12]);var inst_22758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22753);var state_22767__$1 = state_22767;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22767__$1,16,out,inst_22758);
} else
{if((state_val_22768 === 15))
{var inst_22763 = (state_22767[2]);var state_22767__$1 = state_22767;var statearr_22787_22811 = state_22767__$1;(statearr_22787_22811[2] = inst_22763);
(statearr_22787_22811[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22768 === 16))
{var inst_22760 = (state_22767[2]);var state_22767__$1 = (function (){var statearr_22788 = state_22767;(statearr_22788[13] = inst_22760);
return statearr_22788;
})();var statearr_22789_22812 = state_22767__$1;(statearr_22789_22812[2] = null);
(statearr_22789_22812[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22793[0] = state_machine__5507__auto__);
(statearr_22793[1] = 1);
return statearr_22793;
});
var state_machine__5507__auto____1 = (function (state_22767){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22767);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22794){if((e22794 instanceof Object))
{var ex__5510__auto__ = e22794;var statearr_22795_22813 = state_22767;(statearr_22795_22813[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22767);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22814 = state_22767;
state_22767 = G__22814;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22767){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22796 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22797);
return statearr_22796;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22898){var state_val_22899 = (state_22898[1]);if((state_val_22899 === 1))
{var inst_22869 = cljs.core.vec(chs);var inst_22870 = inst_22869;var state_22898__$1 = (function (){var statearr_22900 = state_22898;(statearr_22900[7] = inst_22870);
return statearr_22900;
})();var statearr_22901_22923 = state_22898__$1;(statearr_22901_22923[2] = null);
(statearr_22901_22923[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22899 === 2))
{var inst_22870 = (state_22898[7]);var inst_22872 = cljs.core.count(inst_22870);var inst_22873 = (inst_22872 > 0);var state_22898__$1 = state_22898;if(cljs.core.truth_(inst_22873))
{var statearr_22902_22924 = state_22898__$1;(statearr_22902_22924[1] = 4);
} else
{var statearr_22903_22925 = state_22898__$1;(statearr_22903_22925[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22899 === 3))
{var inst_22896 = (state_22898[2]);var state_22898__$1 = state_22898;return cljs.core.async.impl.ioc_helpers.return_chan(state_22898__$1,inst_22896);
} else
{if((state_val_22899 === 4))
{var inst_22870 = (state_22898[7]);var state_22898__$1 = state_22898;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22898__$1,7,inst_22870);
} else
{if((state_val_22899 === 5))
{var inst_22892 = cljs.core.async.close_BANG_(out);var state_22898__$1 = state_22898;var statearr_22904_22926 = state_22898__$1;(statearr_22904_22926[2] = inst_22892);
(statearr_22904_22926[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22899 === 6))
{var inst_22894 = (state_22898[2]);var state_22898__$1 = state_22898;var statearr_22905_22927 = state_22898__$1;(statearr_22905_22927[2] = inst_22894);
(statearr_22905_22927[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22899 === 7))
{var inst_22878 = (state_22898[8]);var inst_22877 = (state_22898[9]);var inst_22877__$1 = (state_22898[2]);var inst_22878__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22877__$1,0,null);var inst_22879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22877__$1,1,null);var inst_22880 = (inst_22878__$1 == null);var state_22898__$1 = (function (){var statearr_22906 = state_22898;(statearr_22906[10] = inst_22879);
(statearr_22906[8] = inst_22878__$1);
(statearr_22906[9] = inst_22877__$1);
return statearr_22906;
})();if(cljs.core.truth_(inst_22880))
{var statearr_22907_22928 = state_22898__$1;(statearr_22907_22928[1] = 8);
} else
{var statearr_22908_22929 = state_22898__$1;(statearr_22908_22929[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22899 === 8))
{var inst_22879 = (state_22898[10]);var inst_22878 = (state_22898[8]);var inst_22870 = (state_22898[7]);var inst_22877 = (state_22898[9]);var inst_22882 = (function (){var c = inst_22879;var v = inst_22878;var vec__22875 = inst_22877;var cs = inst_22870;return ((function (c,v,vec__22875,cs,inst_22879,inst_22878,inst_22870,inst_22877,state_val_22899){
return (function (p1__22815_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22815_SHARP_);
});
;})(c,v,vec__22875,cs,inst_22879,inst_22878,inst_22870,inst_22877,state_val_22899))
})();var inst_22883 = cljs.core.filterv(inst_22882,inst_22870);var inst_22870__$1 = inst_22883;var state_22898__$1 = (function (){var statearr_22909 = state_22898;(statearr_22909[7] = inst_22870__$1);
return statearr_22909;
})();var statearr_22910_22930 = state_22898__$1;(statearr_22910_22930[2] = null);
(statearr_22910_22930[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22899 === 9))
{var inst_22878 = (state_22898[8]);var state_22898__$1 = state_22898;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22898__$1,11,out,inst_22878);
} else
{if((state_val_22899 === 10))
{var inst_22890 = (state_22898[2]);var state_22898__$1 = state_22898;var statearr_22912_22931 = state_22898__$1;(statearr_22912_22931[2] = inst_22890);
(statearr_22912_22931[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22899 === 11))
{var inst_22870 = (state_22898[7]);var inst_22887 = (state_22898[2]);var tmp22911 = inst_22870;var inst_22870__$1 = tmp22911;var state_22898__$1 = (function (){var statearr_22913 = state_22898;(statearr_22913[7] = inst_22870__$1);
(statearr_22913[11] = inst_22887);
return statearr_22913;
})();var statearr_22914_22932 = state_22898__$1;(statearr_22914_22932[2] = null);
(statearr_22914_22932[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22918 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22918[0] = state_machine__5507__auto__);
(statearr_22918[1] = 1);
return statearr_22918;
});
var state_machine__5507__auto____1 = (function (state_22898){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22898);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22919){if((e22919 instanceof Object))
{var ex__5510__auto__ = e22919;var statearr_22920_22933 = state_22898;(statearr_22920_22933[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22898);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22934 = state_22898;
state_22898 = G__22934;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22898){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22921 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22922);
return statearr_22921;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23004){var state_val_23005 = (state_23004[1]);if((state_val_23005 === 1))
{var inst_22981 = 0;var state_23004__$1 = (function (){var statearr_23006 = state_23004;(statearr_23006[7] = inst_22981);
return statearr_23006;
})();var statearr_23007_23028 = state_23004__$1;(statearr_23007_23028[2] = null);
(statearr_23007_23028[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23005 === 2))
{var inst_22981 = (state_23004[7]);var inst_22983 = (inst_22981 < n);var state_23004__$1 = state_23004;if(cljs.core.truth_(inst_22983))
{var statearr_23008_23029 = state_23004__$1;(statearr_23008_23029[1] = 4);
} else
{var statearr_23009_23030 = state_23004__$1;(statearr_23009_23030[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23005 === 3))
{var inst_23001 = (state_23004[2]);var inst_23002 = cljs.core.async.close_BANG_(out);var state_23004__$1 = (function (){var statearr_23010 = state_23004;(statearr_23010[8] = inst_23001);
return statearr_23010;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23004__$1,inst_23002);
} else
{if((state_val_23005 === 4))
{var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23004__$1,7,ch);
} else
{if((state_val_23005 === 5))
{var state_23004__$1 = state_23004;var statearr_23011_23031 = state_23004__$1;(statearr_23011_23031[2] = null);
(statearr_23011_23031[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23005 === 6))
{var inst_22999 = (state_23004[2]);var state_23004__$1 = state_23004;var statearr_23012_23032 = state_23004__$1;(statearr_23012_23032[2] = inst_22999);
(statearr_23012_23032[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23005 === 7))
{var inst_22986 = (state_23004[9]);var inst_22986__$1 = (state_23004[2]);var inst_22987 = (inst_22986__$1 == null);var inst_22988 = cljs.core.not(inst_22987);var state_23004__$1 = (function (){var statearr_23013 = state_23004;(statearr_23013[9] = inst_22986__$1);
return statearr_23013;
})();if(inst_22988)
{var statearr_23014_23033 = state_23004__$1;(statearr_23014_23033[1] = 8);
} else
{var statearr_23015_23034 = state_23004__$1;(statearr_23015_23034[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23005 === 8))
{var inst_22986 = (state_23004[9]);var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23004__$1,11,out,inst_22986);
} else
{if((state_val_23005 === 9))
{var state_23004__$1 = state_23004;var statearr_23016_23035 = state_23004__$1;(statearr_23016_23035[2] = null);
(statearr_23016_23035[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23005 === 10))
{var inst_22996 = (state_23004[2]);var state_23004__$1 = state_23004;var statearr_23017_23036 = state_23004__$1;(statearr_23017_23036[2] = inst_22996);
(statearr_23017_23036[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23005 === 11))
{var inst_22981 = (state_23004[7]);var inst_22991 = (state_23004[2]);var inst_22992 = (inst_22981 + 1);var inst_22981__$1 = inst_22992;var state_23004__$1 = (function (){var statearr_23018 = state_23004;(statearr_23018[10] = inst_22991);
(statearr_23018[7] = inst_22981__$1);
return statearr_23018;
})();var statearr_23019_23037 = state_23004__$1;(statearr_23019_23037[2] = null);
(statearr_23019_23037[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23023 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23023[0] = state_machine__5507__auto__);
(statearr_23023[1] = 1);
return statearr_23023;
});
var state_machine__5507__auto____1 = (function (state_23004){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23004);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object))
{var ex__5510__auto__ = e23024;var statearr_23025_23038 = state_23004;(statearr_23025_23038[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23004);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23039 = state_23004;
state_23004 = G__23039;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23004){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23026 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23027);
return statearr_23026;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23111){var state_val_23112 = (state_23111[1]);if((state_val_23112 === 1))
{var inst_23088 = null;var state_23111__$1 = (function (){var statearr_23113 = state_23111;(statearr_23113[7] = inst_23088);
return statearr_23113;
})();var statearr_23114_23137 = state_23111__$1;(statearr_23114_23137[2] = null);
(statearr_23114_23137[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23112 === 2))
{var state_23111__$1 = state_23111;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23111__$1,4,ch);
} else
{if((state_val_23112 === 3))
{var inst_23108 = (state_23111[2]);var inst_23109 = cljs.core.async.close_BANG_(out);var state_23111__$1 = (function (){var statearr_23115 = state_23111;(statearr_23115[8] = inst_23108);
return statearr_23115;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23111__$1,inst_23109);
} else
{if((state_val_23112 === 4))
{var inst_23091 = (state_23111[9]);var inst_23091__$1 = (state_23111[2]);var inst_23092 = (inst_23091__$1 == null);var inst_23093 = cljs.core.not(inst_23092);var state_23111__$1 = (function (){var statearr_23116 = state_23111;(statearr_23116[9] = inst_23091__$1);
return statearr_23116;
})();if(inst_23093)
{var statearr_23117_23138 = state_23111__$1;(statearr_23117_23138[1] = 5);
} else
{var statearr_23118_23139 = state_23111__$1;(statearr_23118_23139[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23112 === 5))
{var inst_23088 = (state_23111[7]);var inst_23091 = (state_23111[9]);var inst_23095 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23091,inst_23088);var state_23111__$1 = state_23111;if(inst_23095)
{var statearr_23119_23140 = state_23111__$1;(statearr_23119_23140[1] = 8);
} else
{var statearr_23120_23141 = state_23111__$1;(statearr_23120_23141[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23112 === 6))
{var state_23111__$1 = state_23111;var statearr_23122_23142 = state_23111__$1;(statearr_23122_23142[2] = null);
(statearr_23122_23142[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23112 === 7))
{var inst_23106 = (state_23111[2]);var state_23111__$1 = state_23111;var statearr_23123_23143 = state_23111__$1;(statearr_23123_23143[2] = inst_23106);
(statearr_23123_23143[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23112 === 8))
{var inst_23088 = (state_23111[7]);var tmp23121 = inst_23088;var inst_23088__$1 = tmp23121;var state_23111__$1 = (function (){var statearr_23124 = state_23111;(statearr_23124[7] = inst_23088__$1);
return statearr_23124;
})();var statearr_23125_23144 = state_23111__$1;(statearr_23125_23144[2] = null);
(statearr_23125_23144[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23112 === 9))
{var inst_23091 = (state_23111[9]);var state_23111__$1 = state_23111;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23111__$1,11,out,inst_23091);
} else
{if((state_val_23112 === 10))
{var inst_23103 = (state_23111[2]);var state_23111__$1 = state_23111;var statearr_23126_23145 = state_23111__$1;(statearr_23126_23145[2] = inst_23103);
(statearr_23126_23145[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23112 === 11))
{var inst_23091 = (state_23111[9]);var inst_23100 = (state_23111[2]);var inst_23088 = inst_23091;var state_23111__$1 = (function (){var statearr_23127 = state_23111;(statearr_23127[7] = inst_23088);
(statearr_23127[10] = inst_23100);
return statearr_23127;
})();var statearr_23128_23146 = state_23111__$1;(statearr_23128_23146[2] = null);
(statearr_23128_23146[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23132 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23132[0] = state_machine__5507__auto__);
(statearr_23132[1] = 1);
return statearr_23132;
});
var state_machine__5507__auto____1 = (function (state_23111){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23111);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23133){if((e23133 instanceof Object))
{var ex__5510__auto__ = e23133;var statearr_23134_23147 = state_23111;(statearr_23134_23147[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23111);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23148 = state_23111;
state_23111 = G__23148;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23111){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23135 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23136);
return statearr_23135;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23253){var state_val_23254 = (state_23253[1]);if((state_val_23254 === 1))
{var inst_23216 = (new Array(n));var inst_23217 = inst_23216;var inst_23218 = 0;var state_23253__$1 = (function (){var statearr_23255 = state_23253;(statearr_23255[7] = inst_23217);
(statearr_23255[8] = inst_23218);
return statearr_23255;
})();var statearr_23256_23284 = state_23253__$1;(statearr_23256_23284[2] = null);
(statearr_23256_23284[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 2))
{var state_23253__$1 = state_23253;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23253__$1,4,ch);
} else
{if((state_val_23254 === 3))
{var inst_23251 = (state_23253[2]);var state_23253__$1 = state_23253;return cljs.core.async.impl.ioc_helpers.return_chan(state_23253__$1,inst_23251);
} else
{if((state_val_23254 === 4))
{var inst_23221 = (state_23253[9]);var inst_23221__$1 = (state_23253[2]);var inst_23222 = (inst_23221__$1 == null);var inst_23223 = cljs.core.not(inst_23222);var state_23253__$1 = (function (){var statearr_23257 = state_23253;(statearr_23257[9] = inst_23221__$1);
return statearr_23257;
})();if(inst_23223)
{var statearr_23258_23285 = state_23253__$1;(statearr_23258_23285[1] = 5);
} else
{var statearr_23259_23286 = state_23253__$1;(statearr_23259_23286[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 5))
{var inst_23226 = (state_23253[10]);var inst_23217 = (state_23253[7]);var inst_23218 = (state_23253[8]);var inst_23221 = (state_23253[9]);var inst_23225 = (inst_23217[inst_23218] = inst_23221);var inst_23226__$1 = (inst_23218 + 1);var inst_23227 = (inst_23226__$1 < n);var state_23253__$1 = (function (){var statearr_23260 = state_23253;(statearr_23260[10] = inst_23226__$1);
(statearr_23260[11] = inst_23225);
return statearr_23260;
})();if(cljs.core.truth_(inst_23227))
{var statearr_23261_23287 = state_23253__$1;(statearr_23261_23287[1] = 8);
} else
{var statearr_23262_23288 = state_23253__$1;(statearr_23262_23288[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 6))
{var inst_23218 = (state_23253[8]);var inst_23239 = (inst_23218 > 0);var state_23253__$1 = state_23253;if(cljs.core.truth_(inst_23239))
{var statearr_23264_23289 = state_23253__$1;(statearr_23264_23289[1] = 12);
} else
{var statearr_23265_23290 = state_23253__$1;(statearr_23265_23290[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 7))
{var inst_23249 = (state_23253[2]);var state_23253__$1 = state_23253;var statearr_23266_23291 = state_23253__$1;(statearr_23266_23291[2] = inst_23249);
(statearr_23266_23291[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 8))
{var inst_23226 = (state_23253[10]);var inst_23217 = (state_23253[7]);var tmp23263 = inst_23217;var inst_23217__$1 = tmp23263;var inst_23218 = inst_23226;var state_23253__$1 = (function (){var statearr_23267 = state_23253;(statearr_23267[7] = inst_23217__$1);
(statearr_23267[8] = inst_23218);
return statearr_23267;
})();var statearr_23268_23292 = state_23253__$1;(statearr_23268_23292[2] = null);
(statearr_23268_23292[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 9))
{var inst_23217 = (state_23253[7]);var inst_23231 = cljs.core.vec(inst_23217);var state_23253__$1 = state_23253;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23253__$1,11,out,inst_23231);
} else
{if((state_val_23254 === 10))
{var inst_23237 = (state_23253[2]);var state_23253__$1 = state_23253;var statearr_23269_23293 = state_23253__$1;(statearr_23269_23293[2] = inst_23237);
(statearr_23269_23293[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 11))
{var inst_23233 = (state_23253[2]);var inst_23234 = (new Array(n));var inst_23217 = inst_23234;var inst_23218 = 0;var state_23253__$1 = (function (){var statearr_23270 = state_23253;(statearr_23270[12] = inst_23233);
(statearr_23270[7] = inst_23217);
(statearr_23270[8] = inst_23218);
return statearr_23270;
})();var statearr_23271_23294 = state_23253__$1;(statearr_23271_23294[2] = null);
(statearr_23271_23294[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 12))
{var inst_23217 = (state_23253[7]);var inst_23241 = cljs.core.vec(inst_23217);var state_23253__$1 = state_23253;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23253__$1,15,out,inst_23241);
} else
{if((state_val_23254 === 13))
{var state_23253__$1 = state_23253;var statearr_23272_23295 = state_23253__$1;(statearr_23272_23295[2] = null);
(statearr_23272_23295[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 14))
{var inst_23246 = (state_23253[2]);var inst_23247 = cljs.core.async.close_BANG_(out);var state_23253__$1 = (function (){var statearr_23273 = state_23253;(statearr_23273[13] = inst_23246);
return statearr_23273;
})();var statearr_23274_23296 = state_23253__$1;(statearr_23274_23296[2] = inst_23247);
(statearr_23274_23296[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23254 === 15))
{var inst_23243 = (state_23253[2]);var state_23253__$1 = state_23253;var statearr_23275_23297 = state_23253__$1;(statearr_23275_23297[2] = inst_23243);
(statearr_23275_23297[1] = 14);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23279[0] = state_machine__5507__auto__);
(statearr_23279[1] = 1);
return statearr_23279;
});
var state_machine__5507__auto____1 = (function (state_23253){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23253);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23280){if((e23280 instanceof Object))
{var ex__5510__auto__ = e23280;var statearr_23281_23298 = state_23253;(statearr_23281_23298[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23253);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23299 = state_23253;
state_23253 = G__23299;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23253){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23282 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23283);
return statearr_23282;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23412){var state_val_23413 = (state_23412[1]);if((state_val_23413 === 1))
{var inst_23371 = [];var inst_23372 = inst_23371;var inst_23373 = cljs.core.constant$keyword$136;var state_23412__$1 = (function (){var statearr_23414 = state_23412;(statearr_23414[7] = inst_23372);
(statearr_23414[8] = inst_23373);
return statearr_23414;
})();var statearr_23415_23443 = state_23412__$1;(statearr_23415_23443[2] = null);
(statearr_23415_23443[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 2))
{var state_23412__$1 = state_23412;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23412__$1,4,ch);
} else
{if((state_val_23413 === 3))
{var inst_23410 = (state_23412[2]);var state_23412__$1 = state_23412;return cljs.core.async.impl.ioc_helpers.return_chan(state_23412__$1,inst_23410);
} else
{if((state_val_23413 === 4))
{var inst_23376 = (state_23412[9]);var inst_23376__$1 = (state_23412[2]);var inst_23377 = (inst_23376__$1 == null);var inst_23378 = cljs.core.not(inst_23377);var state_23412__$1 = (function (){var statearr_23416 = state_23412;(statearr_23416[9] = inst_23376__$1);
return statearr_23416;
})();if(inst_23378)
{var statearr_23417_23444 = state_23412__$1;(statearr_23417_23444[1] = 5);
} else
{var statearr_23418_23445 = state_23412__$1;(statearr_23418_23445[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 5))
{var inst_23373 = (state_23412[8]);var inst_23380 = (state_23412[10]);var inst_23376 = (state_23412[9]);var inst_23380__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23376) : f.call(null,inst_23376));var inst_23381 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23380__$1,inst_23373);var inst_23382 = cljs.core.keyword_identical_QMARK_(inst_23373,cljs.core.constant$keyword$136);var inst_23383 = (inst_23381) || (inst_23382);var state_23412__$1 = (function (){var statearr_23419 = state_23412;(statearr_23419[10] = inst_23380__$1);
return statearr_23419;
})();if(cljs.core.truth_(inst_23383))
{var statearr_23420_23446 = state_23412__$1;(statearr_23420_23446[1] = 8);
} else
{var statearr_23421_23447 = state_23412__$1;(statearr_23421_23447[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 6))
{var inst_23372 = (state_23412[7]);var inst_23397 = inst_23372.length;var inst_23398 = (inst_23397 > 0);var state_23412__$1 = state_23412;if(cljs.core.truth_(inst_23398))
{var statearr_23423_23448 = state_23412__$1;(statearr_23423_23448[1] = 12);
} else
{var statearr_23424_23449 = state_23412__$1;(statearr_23424_23449[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 7))
{var inst_23408 = (state_23412[2]);var state_23412__$1 = state_23412;var statearr_23425_23450 = state_23412__$1;(statearr_23425_23450[2] = inst_23408);
(statearr_23425_23450[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 8))
{var inst_23372 = (state_23412[7]);var inst_23380 = (state_23412[10]);var inst_23376 = (state_23412[9]);var inst_23385 = inst_23372.push(inst_23376);var tmp23422 = inst_23372;var inst_23372__$1 = tmp23422;var inst_23373 = inst_23380;var state_23412__$1 = (function (){var statearr_23426 = state_23412;(statearr_23426[7] = inst_23372__$1);
(statearr_23426[8] = inst_23373);
(statearr_23426[11] = inst_23385);
return statearr_23426;
})();var statearr_23427_23451 = state_23412__$1;(statearr_23427_23451[2] = null);
(statearr_23427_23451[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 9))
{var inst_23372 = (state_23412[7]);var inst_23388 = cljs.core.vec(inst_23372);var state_23412__$1 = state_23412;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23412__$1,11,out,inst_23388);
} else
{if((state_val_23413 === 10))
{var inst_23395 = (state_23412[2]);var state_23412__$1 = state_23412;var statearr_23428_23452 = state_23412__$1;(statearr_23428_23452[2] = inst_23395);
(statearr_23428_23452[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 11))
{var inst_23380 = (state_23412[10]);var inst_23376 = (state_23412[9]);var inst_23390 = (state_23412[2]);var inst_23391 = [];var inst_23392 = inst_23391.push(inst_23376);var inst_23372 = inst_23391;var inst_23373 = inst_23380;var state_23412__$1 = (function (){var statearr_23429 = state_23412;(statearr_23429[12] = inst_23390);
(statearr_23429[13] = inst_23392);
(statearr_23429[7] = inst_23372);
(statearr_23429[8] = inst_23373);
return statearr_23429;
})();var statearr_23430_23453 = state_23412__$1;(statearr_23430_23453[2] = null);
(statearr_23430_23453[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 12))
{var inst_23372 = (state_23412[7]);var inst_23400 = cljs.core.vec(inst_23372);var state_23412__$1 = state_23412;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23412__$1,15,out,inst_23400);
} else
{if((state_val_23413 === 13))
{var state_23412__$1 = state_23412;var statearr_23431_23454 = state_23412__$1;(statearr_23431_23454[2] = null);
(statearr_23431_23454[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 14))
{var inst_23405 = (state_23412[2]);var inst_23406 = cljs.core.async.close_BANG_(out);var state_23412__$1 = (function (){var statearr_23432 = state_23412;(statearr_23432[14] = inst_23405);
return statearr_23432;
})();var statearr_23433_23455 = state_23412__$1;(statearr_23433_23455[2] = inst_23406);
(statearr_23433_23455[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23413 === 15))
{var inst_23402 = (state_23412[2]);var state_23412__$1 = state_23412;var statearr_23434_23456 = state_23412__$1;(statearr_23434_23456[2] = inst_23402);
(statearr_23434_23456[1] = 14);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23438[0] = state_machine__5507__auto__);
(statearr_23438[1] = 1);
return statearr_23438;
});
var state_machine__5507__auto____1 = (function (state_23412){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23412);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23439){if((e23439 instanceof Object))
{var ex__5510__auto__ = e23439;var statearr_23440_23457 = state_23412;(statearr_23440_23457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23412);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23458 = state_23412;
state_23412 = G__23458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23412){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23441 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23442);
return statearr_23441;
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
