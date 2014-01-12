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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29895 = (function (f,fn_handler,meta29896){
this.f = f;
this.fn_handler = fn_handler;
this.meta29896 = meta29896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29895.cljs$lang$type = true;
cljs.core.async.t29895.cljs$lang$ctorStr = "cljs.core.async/t29895";
cljs.core.async.t29895.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29895");
});
cljs.core.async.t29895.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29897){var self__ = this;
var _29897__$1 = this;return self__.meta29896;
});
cljs.core.async.t29895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29897,meta29896__$1){var self__ = this;
var _29897__$1 = this;return (new cljs.core.async.t29895(self__.f,self__.fn_handler,meta29896__$1));
});
cljs.core.async.__GT_t29895 = (function __GT_t29895(f__$1,fn_handler__$1,meta29896){return (new cljs.core.async.t29895(f__$1,fn_handler__$1,meta29896));
});
}
return (new cljs.core.async.t29895(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29899 = buff;if(G__29899)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__29899.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29899.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29899);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29899);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_29900 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29900);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_29900);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___29901 = n;var x_29902 = 0;while(true){
if((x_29902 < n__4248__auto___29901))
{(a[x_29902] = 0);
{
var G__29903 = (x_29902 + 1);
x_29902 = G__29903;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__29904 = (i + 1);
i = G__29904;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29908 = (function (flag,alt_flag,meta29909){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29909 = meta29909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29908.cljs$lang$type = true;
cljs.core.async.t29908.cljs$lang$ctorStr = "cljs.core.async/t29908";
cljs.core.async.t29908.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29908");
});
cljs.core.async.t29908.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29910){var self__ = this;
var _29910__$1 = this;return self__.meta29909;
});
cljs.core.async.t29908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29910,meta29909__$1){var self__ = this;
var _29910__$1 = this;return (new cljs.core.async.t29908(self__.flag,self__.alt_flag,meta29909__$1));
});
cljs.core.async.__GT_t29908 = (function __GT_t29908(flag__$1,alt_flag__$1,meta29909){return (new cljs.core.async.t29908(flag__$1,alt_flag__$1,meta29909));
});
}
return (new cljs.core.async.t29908(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29914 = (function (cb,flag,alt_handler,meta29915){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29915 = meta29915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29914.cljs$lang$type = true;
cljs.core.async.t29914.cljs$lang$ctorStr = "cljs.core.async/t29914";
cljs.core.async.t29914.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29914");
});
cljs.core.async.t29914.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29916){var self__ = this;
var _29916__$1 = this;return self__.meta29915;
});
cljs.core.async.t29914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29916,meta29915__$1){var self__ = this;
var _29916__$1 = this;return (new cljs.core.async.t29914(self__.cb,self__.flag,self__.alt_handler,meta29915__$1));
});
cljs.core.async.__GT_t29914 = (function __GT_t29914(cb__$1,flag__$1,alt_handler__$1,meta29915){return (new cljs.core.async.t29914(cb__$1,flag__$1,alt_handler__$1,meta29915));
});
}
return (new cljs.core.async.t29914(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29917_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29917_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__29918 = (i + 1);
i = G__29918;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__29919){var map__29921 = p__29919;var map__29921__$1 = ((cljs.core.seq_QMARK_.call(null,map__29921))?cljs.core.apply.call(null,cljs.core.hash_map,map__29921):map__29921);var opts = map__29921__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29919 = null;if (arguments.length > 1) {
  p__29919 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29919);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29922){
var ports = cljs.core.first(arglist__29922);
var p__29919 = cljs.core.rest(arglist__29922);
return alts_BANG___delegate(ports,p__29919);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29930 = (function (ch,f,map_LT_,meta29931){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29931 = meta29931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29930.cljs$lang$type = true;
cljs.core.async.t29930.cljs$lang$ctorStr = "cljs.core.async/t29930";
cljs.core.async.t29930.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29930");
});
cljs.core.async.t29930.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29930.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29933 = (function (fn1,_,meta29931,ch,f,map_LT_,meta29934){
this.fn1 = fn1;
this._ = _;
this.meta29931 = meta29931;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29934 = meta29934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29933.cljs$lang$type = true;
cljs.core.async.t29933.cljs$lang$ctorStr = "cljs.core.async/t29933";
cljs.core.async.t29933.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29933");
});
cljs.core.async.t29933.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29933.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29923_SHARP_){return f1.call(null,(((p1__29923_SHARP_ == null))?null:self__.f.call(null,p1__29923_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29935){var self__ = this;
var _29935__$1 = this;return self__.meta29934;
});
cljs.core.async.t29933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29935,meta29934__$1){var self__ = this;
var _29935__$1 = this;return (new cljs.core.async.t29933(self__.fn1,self__._,self__.meta29931,self__.ch,self__.f,self__.map_LT_,meta29934__$1));
});
cljs.core.async.__GT_t29933 = (function __GT_t29933(fn1__$1,___$2,meta29931__$1,ch__$2,f__$2,map_LT___$2,meta29934){return (new cljs.core.async.t29933(fn1__$1,___$2,meta29931__$1,ch__$2,f__$2,map_LT___$2,meta29934));
});
}
return (new cljs.core.async.t29933(fn1,___$1,self__.meta29931,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t29930.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29932){var self__ = this;
var _29932__$1 = this;return self__.meta29931;
});
cljs.core.async.t29930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29932,meta29931__$1){var self__ = this;
var _29932__$1 = this;return (new cljs.core.async.t29930(self__.ch,self__.f,self__.map_LT_,meta29931__$1));
});
cljs.core.async.__GT_t29930 = (function __GT_t29930(ch__$1,f__$1,map_LT___$1,meta29931){return (new cljs.core.async.t29930(ch__$1,f__$1,map_LT___$1,meta29931));
});
}
return (new cljs.core.async.t29930(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29939 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29939 = (function (ch,f,map_GT_,meta29940){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29940 = meta29940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29939.cljs$lang$type = true;
cljs.core.async.t29939.cljs$lang$ctorStr = "cljs.core.async/t29939";
cljs.core.async.t29939.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29939");
});
cljs.core.async.t29939.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29939.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29939.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29941){var self__ = this;
var _29941__$1 = this;return self__.meta29940;
});
cljs.core.async.t29939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29941,meta29940__$1){var self__ = this;
var _29941__$1 = this;return (new cljs.core.async.t29939(self__.ch,self__.f,self__.map_GT_,meta29940__$1));
});
cljs.core.async.__GT_t29939 = (function __GT_t29939(ch__$1,f__$1,map_GT___$1,meta29940){return (new cljs.core.async.t29939(ch__$1,f__$1,map_GT___$1,meta29940));
});
}
return (new cljs.core.async.t29939(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29945 = (function (ch,p,filter_GT_,meta29946){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29946 = meta29946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29945.cljs$lang$type = true;
cljs.core.async.t29945.cljs$lang$ctorStr = "cljs.core.async/t29945";
cljs.core.async.t29945.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29945");
});
cljs.core.async.t29945.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29945.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29945.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29947){var self__ = this;
var _29947__$1 = this;return self__.meta29946;
});
cljs.core.async.t29945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29947,meta29946__$1){var self__ = this;
var _29947__$1 = this;return (new cljs.core.async.t29945(self__.ch,self__.p,self__.filter_GT_,meta29946__$1));
});
cljs.core.async.__GT_t29945 = (function __GT_t29945(ch__$1,p__$1,filter_GT___$1,meta29946){return (new cljs.core.async.t29945(ch__$1,p__$1,filter_GT___$1,meta29946));
});
}
return (new cljs.core.async.t29945(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___30030 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30009){var state_val_30010 = (state_30009[1]);if((state_val_30010 === 1))
{var state_30009__$1 = state_30009;var statearr_30011_30031 = state_30009__$1;(statearr_30011_30031[2] = null);
(statearr_30011_30031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30010 === 2))
{var state_30009__$1 = state_30009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30009__$1,4,ch);
} else
{if((state_val_30010 === 3))
{var inst_30007 = (state_30009[2]);var state_30009__$1 = state_30009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30009__$1,inst_30007);
} else
{if((state_val_30010 === 4))
{var inst_29991 = (state_30009[7]);var inst_29991__$1 = (state_30009[2]);var inst_29992 = (inst_29991__$1 == null);var state_30009__$1 = (function (){var statearr_30012 = state_30009;(statearr_30012[7] = inst_29991__$1);
return statearr_30012;
})();if(cljs.core.truth_(inst_29992))
{var statearr_30013_30032 = state_30009__$1;(statearr_30013_30032[1] = 5);
} else
{var statearr_30014_30033 = state_30009__$1;(statearr_30014_30033[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30010 === 5))
{var inst_29994 = cljs.core.async.close_BANG_.call(null,out);var state_30009__$1 = state_30009;var statearr_30015_30034 = state_30009__$1;(statearr_30015_30034[2] = inst_29994);
(statearr_30015_30034[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30010 === 6))
{var inst_29991 = (state_30009[7]);var inst_29996 = p.call(null,inst_29991);var state_30009__$1 = state_30009;if(cljs.core.truth_(inst_29996))
{var statearr_30016_30035 = state_30009__$1;(statearr_30016_30035[1] = 8);
} else
{var statearr_30017_30036 = state_30009__$1;(statearr_30017_30036[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30010 === 7))
{var inst_30005 = (state_30009[2]);var state_30009__$1 = state_30009;var statearr_30018_30037 = state_30009__$1;(statearr_30018_30037[2] = inst_30005);
(statearr_30018_30037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30010 === 8))
{var inst_29991 = (state_30009[7]);var state_30009__$1 = state_30009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30009__$1,11,out,inst_29991);
} else
{if((state_val_30010 === 9))
{var state_30009__$1 = state_30009;var statearr_30019_30038 = state_30009__$1;(statearr_30019_30038[2] = null);
(statearr_30019_30038[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30010 === 10))
{var inst_30002 = (state_30009[2]);var state_30009__$1 = (function (){var statearr_30020 = state_30009;(statearr_30020[8] = inst_30002);
return statearr_30020;
})();var statearr_30021_30039 = state_30009__$1;(statearr_30021_30039[2] = null);
(statearr_30021_30039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30010 === 11))
{var inst_29999 = (state_30009[2]);var state_30009__$1 = state_30009;var statearr_30022_30040 = state_30009__$1;(statearr_30022_30040[2] = inst_29999);
(statearr_30022_30040[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_30026 = [null,null,null,null,null,null,null,null,null];(statearr_30026[0] = state_machine__5507__auto__);
(statearr_30026[1] = 1);
return statearr_30026;
});
var state_machine__5507__auto____1 = (function (state_30009){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30009);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30027){if((e30027 instanceof Object))
{var ex__5510__auto__ = e30027;var statearr_30028_30041 = state_30009;(statearr_30028_30041[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30042 = state_30009;
state_30009 = G__30042;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30009){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30029 = f__5522__auto__.call(null);(statearr_30029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30030);
return statearr_30029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30194){var state_val_30195 = (state_30194[1]);if((state_val_30195 === 1))
{var state_30194__$1 = state_30194;var statearr_30196_30233 = state_30194__$1;(statearr_30196_30233[2] = null);
(statearr_30196_30233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 2))
{var state_30194__$1 = state_30194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,4,in$);
} else
{if((state_val_30195 === 3))
{var inst_30192 = (state_30194[2]);var state_30194__$1 = state_30194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else
{if((state_val_30195 === 4))
{var inst_30140 = (state_30194[7]);var inst_30140__$1 = (state_30194[2]);var inst_30141 = (inst_30140__$1 == null);var state_30194__$1 = (function (){var statearr_30197 = state_30194;(statearr_30197[7] = inst_30140__$1);
return statearr_30197;
})();if(cljs.core.truth_(inst_30141))
{var statearr_30198_30234 = state_30194__$1;(statearr_30198_30234[1] = 5);
} else
{var statearr_30199_30235 = state_30194__$1;(statearr_30199_30235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 5))
{var inst_30143 = cljs.core.async.close_BANG_.call(null,out);var state_30194__$1 = state_30194;var statearr_30200_30236 = state_30194__$1;(statearr_30200_30236[2] = inst_30143);
(statearr_30200_30236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 6))
{var inst_30140 = (state_30194[7]);var inst_30145 = f.call(null,inst_30140);var inst_30150 = cljs.core.seq.call(null,inst_30145);var inst_30151 = inst_30150;var inst_30152 = null;var inst_30153 = 0;var inst_30154 = 0;var state_30194__$1 = (function (){var statearr_30201 = state_30194;(statearr_30201[8] = inst_30154);
(statearr_30201[9] = inst_30153);
(statearr_30201[10] = inst_30152);
(statearr_30201[11] = inst_30151);
return statearr_30201;
})();var statearr_30202_30237 = state_30194__$1;(statearr_30202_30237[2] = null);
(statearr_30202_30237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 7))
{var inst_30190 = (state_30194[2]);var state_30194__$1 = state_30194;var statearr_30203_30238 = state_30194__$1;(statearr_30203_30238[2] = inst_30190);
(statearr_30203_30238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 8))
{var inst_30154 = (state_30194[8]);var inst_30153 = (state_30194[9]);var inst_30156 = (inst_30154 < inst_30153);var inst_30157 = inst_30156;var state_30194__$1 = state_30194;if(cljs.core.truth_(inst_30157))
{var statearr_30204_30239 = state_30194__$1;(statearr_30204_30239[1] = 10);
} else
{var statearr_30205_30240 = state_30194__$1;(statearr_30205_30240[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 9))
{var inst_30187 = (state_30194[2]);var state_30194__$1 = (function (){var statearr_30206 = state_30194;(statearr_30206[12] = inst_30187);
return statearr_30206;
})();var statearr_30207_30241 = state_30194__$1;(statearr_30207_30241[2] = null);
(statearr_30207_30241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 10))
{var inst_30154 = (state_30194[8]);var inst_30152 = (state_30194[10]);var inst_30159 = cljs.core._nth.call(null,inst_30152,inst_30154);var state_30194__$1 = state_30194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,13,out,inst_30159);
} else
{if((state_val_30195 === 11))
{var inst_30165 = (state_30194[13]);var inst_30151 = (state_30194[11]);var inst_30165__$1 = cljs.core.seq.call(null,inst_30151);var state_30194__$1 = (function (){var statearr_30211 = state_30194;(statearr_30211[13] = inst_30165__$1);
return statearr_30211;
})();if(inst_30165__$1)
{var statearr_30212_30242 = state_30194__$1;(statearr_30212_30242[1] = 14);
} else
{var statearr_30213_30243 = state_30194__$1;(statearr_30213_30243[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 12))
{var inst_30185 = (state_30194[2]);var state_30194__$1 = state_30194;var statearr_30214_30244 = state_30194__$1;(statearr_30214_30244[2] = inst_30185);
(statearr_30214_30244[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 13))
{var inst_30154 = (state_30194[8]);var inst_30153 = (state_30194[9]);var inst_30152 = (state_30194[10]);var inst_30151 = (state_30194[11]);var inst_30161 = (state_30194[2]);var inst_30162 = (inst_30154 + 1);var tmp30208 = inst_30153;var tmp30209 = inst_30152;var tmp30210 = inst_30151;var inst_30151__$1 = tmp30210;var inst_30152__$1 = tmp30209;var inst_30153__$1 = tmp30208;var inst_30154__$1 = inst_30162;var state_30194__$1 = (function (){var statearr_30215 = state_30194;(statearr_30215[14] = inst_30161);
(statearr_30215[8] = inst_30154__$1);
(statearr_30215[9] = inst_30153__$1);
(statearr_30215[10] = inst_30152__$1);
(statearr_30215[11] = inst_30151__$1);
return statearr_30215;
})();var statearr_30216_30245 = state_30194__$1;(statearr_30216_30245[2] = null);
(statearr_30216_30245[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 14))
{var inst_30165 = (state_30194[13]);var inst_30167 = cljs.core.chunked_seq_QMARK_.call(null,inst_30165);var state_30194__$1 = state_30194;if(inst_30167)
{var statearr_30217_30246 = state_30194__$1;(statearr_30217_30246[1] = 17);
} else
{var statearr_30218_30247 = state_30194__$1;(statearr_30218_30247[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 15))
{var state_30194__$1 = state_30194;var statearr_30219_30248 = state_30194__$1;(statearr_30219_30248[2] = null);
(statearr_30219_30248[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 16))
{var inst_30183 = (state_30194[2]);var state_30194__$1 = state_30194;var statearr_30220_30249 = state_30194__$1;(statearr_30220_30249[2] = inst_30183);
(statearr_30220_30249[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 17))
{var inst_30165 = (state_30194[13]);var inst_30169 = cljs.core.chunk_first.call(null,inst_30165);var inst_30170 = cljs.core.chunk_rest.call(null,inst_30165);var inst_30171 = cljs.core.count.call(null,inst_30169);var inst_30151 = inst_30170;var inst_30152 = inst_30169;var inst_30153 = inst_30171;var inst_30154 = 0;var state_30194__$1 = (function (){var statearr_30221 = state_30194;(statearr_30221[8] = inst_30154);
(statearr_30221[9] = inst_30153);
(statearr_30221[10] = inst_30152);
(statearr_30221[11] = inst_30151);
return statearr_30221;
})();var statearr_30222_30250 = state_30194__$1;(statearr_30222_30250[2] = null);
(statearr_30222_30250[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 18))
{var inst_30165 = (state_30194[13]);var inst_30174 = cljs.core.first.call(null,inst_30165);var state_30194__$1 = state_30194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,20,out,inst_30174);
} else
{if((state_val_30195 === 19))
{var inst_30180 = (state_30194[2]);var state_30194__$1 = state_30194;var statearr_30223_30251 = state_30194__$1;(statearr_30223_30251[2] = inst_30180);
(statearr_30223_30251[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30195 === 20))
{var inst_30165 = (state_30194[13]);var inst_30176 = (state_30194[2]);var inst_30177 = cljs.core.next.call(null,inst_30165);var inst_30151 = inst_30177;var inst_30152 = null;var inst_30153 = 0;var inst_30154 = 0;var state_30194__$1 = (function (){var statearr_30224 = state_30194;(statearr_30224[15] = inst_30176);
(statearr_30224[8] = inst_30154);
(statearr_30224[9] = inst_30153);
(statearr_30224[10] = inst_30152);
(statearr_30224[11] = inst_30151);
return statearr_30224;
})();var statearr_30225_30252 = state_30194__$1;(statearr_30225_30252[2] = null);
(statearr_30225_30252[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_30229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30229[0] = state_machine__5507__auto__);
(statearr_30229[1] = 1);
return statearr_30229;
});
var state_machine__5507__auto____1 = (function (state_30194){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30230){if((e30230 instanceof Object))
{var ex__5510__auto__ = e30230;var statearr_30231_30253 = state_30194;(statearr_30231_30253[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30254 = state_30194;
state_30194 = G__30254;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30232 = f__5522__auto__.call(null);(statearr_30232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___30335 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30314){var state_val_30315 = (state_30314[1]);if((state_val_30315 === 1))
{var state_30314__$1 = state_30314;var statearr_30316_30336 = state_30314__$1;(statearr_30316_30336[2] = null);
(statearr_30316_30336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30315 === 2))
{var state_30314__$1 = state_30314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30314__$1,4,from);
} else
{if((state_val_30315 === 3))
{var inst_30312 = (state_30314[2]);var state_30314__$1 = state_30314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30314__$1,inst_30312);
} else
{if((state_val_30315 === 4))
{var inst_30297 = (state_30314[7]);var inst_30297__$1 = (state_30314[2]);var inst_30298 = (inst_30297__$1 == null);var state_30314__$1 = (function (){var statearr_30317 = state_30314;(statearr_30317[7] = inst_30297__$1);
return statearr_30317;
})();if(cljs.core.truth_(inst_30298))
{var statearr_30318_30337 = state_30314__$1;(statearr_30318_30337[1] = 5);
} else
{var statearr_30319_30338 = state_30314__$1;(statearr_30319_30338[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30315 === 5))
{var state_30314__$1 = state_30314;if(cljs.core.truth_(close_QMARK_))
{var statearr_30320_30339 = state_30314__$1;(statearr_30320_30339[1] = 8);
} else
{var statearr_30321_30340 = state_30314__$1;(statearr_30321_30340[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30315 === 6))
{var inst_30297 = (state_30314[7]);var state_30314__$1 = state_30314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30314__$1,11,to,inst_30297);
} else
{if((state_val_30315 === 7))
{var inst_30310 = (state_30314[2]);var state_30314__$1 = state_30314;var statearr_30322_30341 = state_30314__$1;(statearr_30322_30341[2] = inst_30310);
(statearr_30322_30341[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30315 === 8))
{var inst_30301 = cljs.core.async.close_BANG_.call(null,to);var state_30314__$1 = state_30314;var statearr_30323_30342 = state_30314__$1;(statearr_30323_30342[2] = inst_30301);
(statearr_30323_30342[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30315 === 9))
{var state_30314__$1 = state_30314;var statearr_30324_30343 = state_30314__$1;(statearr_30324_30343[2] = null);
(statearr_30324_30343[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30315 === 10))
{var inst_30304 = (state_30314[2]);var state_30314__$1 = state_30314;var statearr_30325_30344 = state_30314__$1;(statearr_30325_30344[2] = inst_30304);
(statearr_30325_30344[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30315 === 11))
{var inst_30307 = (state_30314[2]);var state_30314__$1 = (function (){var statearr_30326 = state_30314;(statearr_30326[8] = inst_30307);
return statearr_30326;
})();var statearr_30327_30345 = state_30314__$1;(statearr_30327_30345[2] = null);
(statearr_30327_30345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_30331 = [null,null,null,null,null,null,null,null,null];(statearr_30331[0] = state_machine__5507__auto__);
(statearr_30331[1] = 1);
return statearr_30331;
});
var state_machine__5507__auto____1 = (function (state_30314){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30314);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30332){if((e30332 instanceof Object))
{var ex__5510__auto__ = e30332;var statearr_30333_30346 = state_30314;(statearr_30333_30346[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30314);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30347 = state_30314;
state_30314 = G__30347;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30314){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30334 = f__5522__auto__.call(null);(statearr_30334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30335);
return statearr_30334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___30434 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30412){var state_val_30413 = (state_30412[1]);if((state_val_30413 === 1))
{var state_30412__$1 = state_30412;var statearr_30414_30435 = state_30412__$1;(statearr_30414_30435[2] = null);
(statearr_30414_30435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 2))
{var state_30412__$1 = state_30412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,4,ch);
} else
{if((state_val_30413 === 3))
{var inst_30410 = (state_30412[2]);var state_30412__$1 = state_30412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30412__$1,inst_30410);
} else
{if((state_val_30413 === 4))
{var inst_30393 = (state_30412[7]);var inst_30393__$1 = (state_30412[2]);var inst_30394 = (inst_30393__$1 == null);var state_30412__$1 = (function (){var statearr_30415 = state_30412;(statearr_30415[7] = inst_30393__$1);
return statearr_30415;
})();if(cljs.core.truth_(inst_30394))
{var statearr_30416_30436 = state_30412__$1;(statearr_30416_30436[1] = 5);
} else
{var statearr_30417_30437 = state_30412__$1;(statearr_30417_30437[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 5))
{var inst_30396 = cljs.core.async.close_BANG_.call(null,tc);var inst_30397 = cljs.core.async.close_BANG_.call(null,fc);var state_30412__$1 = (function (){var statearr_30418 = state_30412;(statearr_30418[8] = inst_30396);
return statearr_30418;
})();var statearr_30419_30438 = state_30412__$1;(statearr_30419_30438[2] = inst_30397);
(statearr_30419_30438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 6))
{var inst_30393 = (state_30412[7]);var inst_30399 = p.call(null,inst_30393);var state_30412__$1 = state_30412;if(cljs.core.truth_(inst_30399))
{var statearr_30420_30439 = state_30412__$1;(statearr_30420_30439[1] = 9);
} else
{var statearr_30421_30440 = state_30412__$1;(statearr_30421_30440[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 7))
{var inst_30408 = (state_30412[2]);var state_30412__$1 = state_30412;var statearr_30422_30441 = state_30412__$1;(statearr_30422_30441[2] = inst_30408);
(statearr_30422_30441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 8))
{var inst_30405 = (state_30412[2]);var state_30412__$1 = (function (){var statearr_30423 = state_30412;(statearr_30423[9] = inst_30405);
return statearr_30423;
})();var statearr_30424_30442 = state_30412__$1;(statearr_30424_30442[2] = null);
(statearr_30424_30442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 9))
{var state_30412__$1 = state_30412;var statearr_30425_30443 = state_30412__$1;(statearr_30425_30443[2] = tc);
(statearr_30425_30443[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 10))
{var state_30412__$1 = state_30412;var statearr_30426_30444 = state_30412__$1;(statearr_30426_30444[2] = fc);
(statearr_30426_30444[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30413 === 11))
{var inst_30393 = (state_30412[7]);var inst_30403 = (state_30412[2]);var state_30412__$1 = state_30412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30412__$1,8,inst_30403,inst_30393);
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
var state_machine__5507__auto____0 = (function (){var statearr_30430 = [null,null,null,null,null,null,null,null,null,null];(statearr_30430[0] = state_machine__5507__auto__);
(statearr_30430[1] = 1);
return statearr_30430;
});
var state_machine__5507__auto____1 = (function (state_30412){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30431){if((e30431 instanceof Object))
{var ex__5510__auto__ = e30431;var statearr_30432_30445 = state_30412;(statearr_30432_30445[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30446 = state_30412;
state_30412 = G__30446;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30412){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30433 = f__5522__auto__.call(null);(statearr_30433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30434);
return statearr_30433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30493){var state_val_30494 = (state_30493[1]);if((state_val_30494 === 7))
{var inst_30489 = (state_30493[2]);var state_30493__$1 = state_30493;var statearr_30495_30511 = state_30493__$1;(statearr_30495_30511[2] = inst_30489);
(statearr_30495_30511[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30494 === 6))
{var inst_30482 = (state_30493[7]);var inst_30479 = (state_30493[8]);var inst_30486 = f.call(null,inst_30479,inst_30482);var inst_30479__$1 = inst_30486;var state_30493__$1 = (function (){var statearr_30496 = state_30493;(statearr_30496[8] = inst_30479__$1);
return statearr_30496;
})();var statearr_30497_30512 = state_30493__$1;(statearr_30497_30512[2] = null);
(statearr_30497_30512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30494 === 5))
{var inst_30479 = (state_30493[8]);var state_30493__$1 = state_30493;var statearr_30498_30513 = state_30493__$1;(statearr_30498_30513[2] = inst_30479);
(statearr_30498_30513[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30494 === 4))
{var inst_30482 = (state_30493[7]);var inst_30482__$1 = (state_30493[2]);var inst_30483 = (inst_30482__$1 == null);var state_30493__$1 = (function (){var statearr_30499 = state_30493;(statearr_30499[7] = inst_30482__$1);
return statearr_30499;
})();if(cljs.core.truth_(inst_30483))
{var statearr_30500_30514 = state_30493__$1;(statearr_30500_30514[1] = 5);
} else
{var statearr_30501_30515 = state_30493__$1;(statearr_30501_30515[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30494 === 3))
{var inst_30491 = (state_30493[2]);var state_30493__$1 = state_30493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30493__$1,inst_30491);
} else
{if((state_val_30494 === 2))
{var state_30493__$1 = state_30493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,4,ch);
} else
{if((state_val_30494 === 1))
{var inst_30479 = init;var state_30493__$1 = (function (){var statearr_30502 = state_30493;(statearr_30502[8] = inst_30479);
return statearr_30502;
})();var statearr_30503_30516 = state_30493__$1;(statearr_30503_30516[2] = null);
(statearr_30503_30516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_30507 = [null,null,null,null,null,null,null,null,null];(statearr_30507[0] = state_machine__5507__auto__);
(statearr_30507[1] = 1);
return statearr_30507;
});
var state_machine__5507__auto____1 = (function (state_30493){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30493);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30508){if((e30508 instanceof Object))
{var ex__5510__auto__ = e30508;var statearr_30509_30517 = state_30493;(statearr_30509_30517[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30493);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30518 = state_30493;
state_30493 = G__30518;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30493){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30510 = f__5522__auto__.call(null);(statearr_30510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30580){var state_val_30581 = (state_30580[1]);if((state_val_30581 === 1))
{var inst_30560 = cljs.core.seq.call(null,coll);var inst_30561 = inst_30560;var state_30580__$1 = (function (){var statearr_30582 = state_30580;(statearr_30582[7] = inst_30561);
return statearr_30582;
})();var statearr_30583_30601 = state_30580__$1;(statearr_30583_30601[2] = null);
(statearr_30583_30601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30581 === 2))
{var inst_30561 = (state_30580[7]);var state_30580__$1 = state_30580;if(cljs.core.truth_(inst_30561))
{var statearr_30584_30602 = state_30580__$1;(statearr_30584_30602[1] = 4);
} else
{var statearr_30585_30603 = state_30580__$1;(statearr_30585_30603[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30581 === 3))
{var inst_30578 = (state_30580[2]);var state_30580__$1 = state_30580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30580__$1,inst_30578);
} else
{if((state_val_30581 === 4))
{var inst_30561 = (state_30580[7]);var inst_30564 = cljs.core.first.call(null,inst_30561);var state_30580__$1 = state_30580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30580__$1,7,ch,inst_30564);
} else
{if((state_val_30581 === 5))
{var state_30580__$1 = state_30580;if(cljs.core.truth_(close_QMARK_))
{var statearr_30586_30604 = state_30580__$1;(statearr_30586_30604[1] = 8);
} else
{var statearr_30587_30605 = state_30580__$1;(statearr_30587_30605[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30581 === 6))
{var inst_30576 = (state_30580[2]);var state_30580__$1 = state_30580;var statearr_30588_30606 = state_30580__$1;(statearr_30588_30606[2] = inst_30576);
(statearr_30588_30606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30581 === 7))
{var inst_30561 = (state_30580[7]);var inst_30566 = (state_30580[2]);var inst_30567 = cljs.core.next.call(null,inst_30561);var inst_30561__$1 = inst_30567;var state_30580__$1 = (function (){var statearr_30589 = state_30580;(statearr_30589[8] = inst_30566);
(statearr_30589[7] = inst_30561__$1);
return statearr_30589;
})();var statearr_30590_30607 = state_30580__$1;(statearr_30590_30607[2] = null);
(statearr_30590_30607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30581 === 8))
{var inst_30571 = cljs.core.async.close_BANG_.call(null,ch);var state_30580__$1 = state_30580;var statearr_30591_30608 = state_30580__$1;(statearr_30591_30608[2] = inst_30571);
(statearr_30591_30608[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30581 === 9))
{var state_30580__$1 = state_30580;var statearr_30592_30609 = state_30580__$1;(statearr_30592_30609[2] = null);
(statearr_30592_30609[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30581 === 10))
{var inst_30574 = (state_30580[2]);var state_30580__$1 = state_30580;var statearr_30593_30610 = state_30580__$1;(statearr_30593_30610[2] = inst_30574);
(statearr_30593_30610[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_30597 = [null,null,null,null,null,null,null,null,null];(statearr_30597[0] = state_machine__5507__auto__);
(statearr_30597[1] = 1);
return statearr_30597;
});
var state_machine__5507__auto____1 = (function (state_30580){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30580);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30598){if((e30598 instanceof Object))
{var ex__5510__auto__ = e30598;var statearr_30599_30611 = state_30580;(statearr_30599_30611[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30612 = state_30580;
state_30580 = G__30612;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30580){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30600 = f__5522__auto__.call(null);(statearr_30600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj30614 = {};return obj30614;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj30616 = {};return obj30616;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30840 = (function (cs,ch,mult,meta30841){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30841 = meta30841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30840.cljs$lang$type = true;
cljs.core.async.t30840.cljs$lang$ctorStr = "cljs.core.async/t30840";
cljs.core.async.t30840.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30840");
});})(cs))
;
cljs.core.async.t30840.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30840.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30840.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30840.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30840.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30842){var self__ = this;
var _30842__$1 = this;return self__.meta30841;
});})(cs))
;
cljs.core.async.t30840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30842,meta30841__$1){var self__ = this;
var _30842__$1 = this;return (new cljs.core.async.t30840(self__.cs,self__.ch,self__.mult,meta30841__$1));
});})(cs))
;
cljs.core.async.__GT_t30840 = ((function (cs){
return (function __GT_t30840(cs__$1,ch__$1,mult__$1,meta30841){return (new cljs.core.async.t30840(cs__$1,ch__$1,mult__$1,meta30841));
});})(cs))
;
}
return (new cljs.core.async.t30840(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___31063 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30977){var state_val_30978 = (state_30977[1]);if((state_val_30978 === 32))
{var inst_30845 = (state_30977[7]);var inst_30921 = (state_30977[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30977,31,Object,null,30);var inst_30928 = cljs.core.async.put_BANG_.call(null,inst_30921,inst_30845,done);var state_30977__$1 = state_30977;var statearr_30979_31064 = state_30977__$1;(statearr_30979_31064[2] = inst_30928);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 1))
{var state_30977__$1 = state_30977;var statearr_30980_31065 = state_30977__$1;(statearr_30980_31065[2] = null);
(statearr_30980_31065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 33))
{var inst_30934 = (state_30977[9]);var inst_30936 = cljs.core.chunked_seq_QMARK_.call(null,inst_30934);var state_30977__$1 = state_30977;if(inst_30936)
{var statearr_30981_31066 = state_30977__$1;(statearr_30981_31066[1] = 36);
} else
{var statearr_30982_31067 = state_30977__$1;(statearr_30982_31067[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 2))
{var state_30977__$1 = state_30977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30977__$1,4,ch);
} else
{if((state_val_30978 === 34))
{var state_30977__$1 = state_30977;var statearr_30983_31068 = state_30977__$1;(statearr_30983_31068[2] = null);
(statearr_30983_31068[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 3))
{var inst_30975 = (state_30977[2]);var state_30977__$1 = state_30977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30977__$1,inst_30975);
} else
{if((state_val_30978 === 35))
{var inst_30959 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_30984_31069 = state_30977__$1;(statearr_30984_31069[2] = inst_30959);
(statearr_30984_31069[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 4))
{var inst_30845 = (state_30977[7]);var inst_30845__$1 = (state_30977[2]);var inst_30846 = (inst_30845__$1 == null);var state_30977__$1 = (function (){var statearr_30985 = state_30977;(statearr_30985[7] = inst_30845__$1);
return statearr_30985;
})();if(cljs.core.truth_(inst_30846))
{var statearr_30986_31070 = state_30977__$1;(statearr_30986_31070[1] = 5);
} else
{var statearr_30987_31071 = state_30977__$1;(statearr_30987_31071[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 36))
{var inst_30934 = (state_30977[9]);var inst_30938 = cljs.core.chunk_first.call(null,inst_30934);var inst_30939 = cljs.core.chunk_rest.call(null,inst_30934);var inst_30940 = cljs.core.count.call(null,inst_30938);var inst_30913 = inst_30939;var inst_30914 = inst_30938;var inst_30915 = inst_30940;var inst_30916 = 0;var state_30977__$1 = (function (){var statearr_30988 = state_30977;(statearr_30988[10] = inst_30914);
(statearr_30988[11] = inst_30915);
(statearr_30988[12] = inst_30913);
(statearr_30988[13] = inst_30916);
return statearr_30988;
})();var statearr_30989_31072 = state_30977__$1;(statearr_30989_31072[2] = null);
(statearr_30989_31072[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 5))
{var inst_30852 = cljs.core.deref.call(null,cs);var inst_30853 = cljs.core.seq.call(null,inst_30852);var inst_30854 = inst_30853;var inst_30855 = null;var inst_30856 = 0;var inst_30857 = 0;var state_30977__$1 = (function (){var statearr_30990 = state_30977;(statearr_30990[14] = inst_30854);
(statearr_30990[15] = inst_30856);
(statearr_30990[16] = inst_30855);
(statearr_30990[17] = inst_30857);
return statearr_30990;
})();var statearr_30991_31073 = state_30977__$1;(statearr_30991_31073[2] = null);
(statearr_30991_31073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 37))
{var inst_30934 = (state_30977[9]);var inst_30943 = cljs.core.first.call(null,inst_30934);var state_30977__$1 = (function (){var statearr_30992 = state_30977;(statearr_30992[18] = inst_30943);
return statearr_30992;
})();var statearr_30993_31074 = state_30977__$1;(statearr_30993_31074[2] = null);
(statearr_30993_31074[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 6))
{var inst_30905 = (state_30977[19]);var inst_30904 = cljs.core.deref.call(null,cs);var inst_30905__$1 = cljs.core.keys.call(null,inst_30904);var inst_30906 = cljs.core.count.call(null,inst_30905__$1);var inst_30907 = cljs.core.reset_BANG_.call(null,dctr,inst_30906);var inst_30912 = cljs.core.seq.call(null,inst_30905__$1);var inst_30913 = inst_30912;var inst_30914 = null;var inst_30915 = 0;var inst_30916 = 0;var state_30977__$1 = (function (){var statearr_30994 = state_30977;(statearr_30994[20] = inst_30907);
(statearr_30994[19] = inst_30905__$1);
(statearr_30994[10] = inst_30914);
(statearr_30994[11] = inst_30915);
(statearr_30994[12] = inst_30913);
(statearr_30994[13] = inst_30916);
return statearr_30994;
})();var statearr_30995_31075 = state_30977__$1;(statearr_30995_31075[2] = null);
(statearr_30995_31075[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 38))
{var inst_30956 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_30996_31076 = state_30977__$1;(statearr_30996_31076[2] = inst_30956);
(statearr_30996_31076[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 7))
{var inst_30973 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_30997_31077 = state_30977__$1;(statearr_30997_31077[2] = inst_30973);
(statearr_30997_31077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 39))
{var inst_30934 = (state_30977[9]);var inst_30952 = (state_30977[2]);var inst_30953 = cljs.core.next.call(null,inst_30934);var inst_30913 = inst_30953;var inst_30914 = null;var inst_30915 = 0;var inst_30916 = 0;var state_30977__$1 = (function (){var statearr_30998 = state_30977;(statearr_30998[21] = inst_30952);
(statearr_30998[10] = inst_30914);
(statearr_30998[11] = inst_30915);
(statearr_30998[12] = inst_30913);
(statearr_30998[13] = inst_30916);
return statearr_30998;
})();var statearr_30999_31078 = state_30977__$1;(statearr_30999_31078[2] = null);
(statearr_30999_31078[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 8))
{var inst_30856 = (state_30977[15]);var inst_30857 = (state_30977[17]);var inst_30859 = (inst_30857 < inst_30856);var inst_30860 = inst_30859;var state_30977__$1 = state_30977;if(cljs.core.truth_(inst_30860))
{var statearr_31000_31079 = state_30977__$1;(statearr_31000_31079[1] = 10);
} else
{var statearr_31001_31080 = state_30977__$1;(statearr_31001_31080[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 40))
{var inst_30943 = (state_30977[18]);var inst_30944 = (state_30977[2]);var inst_30945 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30946 = cljs.core.async.untap_STAR_.call(null,m,inst_30943);var state_30977__$1 = (function (){var statearr_31002 = state_30977;(statearr_31002[22] = inst_30944);
(statearr_31002[23] = inst_30945);
return statearr_31002;
})();var statearr_31003_31081 = state_30977__$1;(statearr_31003_31081[2] = inst_30946);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 9))
{var inst_30902 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_31004_31082 = state_30977__$1;(statearr_31004_31082[2] = inst_30902);
(statearr_31004_31082[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 41))
{var inst_30943 = (state_30977[18]);var inst_30845 = (state_30977[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30977,40,Object,null,39);var inst_30950 = cljs.core.async.put_BANG_.call(null,inst_30943,inst_30845,done);var state_30977__$1 = state_30977;var statearr_31005_31083 = state_30977__$1;(statearr_31005_31083[2] = inst_30950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 10))
{var inst_30855 = (state_30977[16]);var inst_30857 = (state_30977[17]);var inst_30863 = cljs.core._nth.call(null,inst_30855,inst_30857);var inst_30864 = cljs.core.nth.call(null,inst_30863,0,null);var inst_30865 = cljs.core.nth.call(null,inst_30863,1,null);var state_30977__$1 = (function (){var statearr_31006 = state_30977;(statearr_31006[24] = inst_30864);
return statearr_31006;
})();if(cljs.core.truth_(inst_30865))
{var statearr_31007_31084 = state_30977__$1;(statearr_31007_31084[1] = 13);
} else
{var statearr_31008_31085 = state_30977__$1;(statearr_31008_31085[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 42))
{var state_30977__$1 = state_30977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30977__$1,45,dchan);
} else
{if((state_val_30978 === 11))
{var inst_30854 = (state_30977[14]);var inst_30874 = (state_30977[25]);var inst_30874__$1 = cljs.core.seq.call(null,inst_30854);var state_30977__$1 = (function (){var statearr_31009 = state_30977;(statearr_31009[25] = inst_30874__$1);
return statearr_31009;
})();if(inst_30874__$1)
{var statearr_31010_31086 = state_30977__$1;(statearr_31010_31086[1] = 16);
} else
{var statearr_31011_31087 = state_30977__$1;(statearr_31011_31087[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 43))
{var state_30977__$1 = state_30977;var statearr_31012_31088 = state_30977__$1;(statearr_31012_31088[2] = null);
(statearr_31012_31088[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 12))
{var inst_30900 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_31013_31089 = state_30977__$1;(statearr_31013_31089[2] = inst_30900);
(statearr_31013_31089[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 44))
{var inst_30970 = (state_30977[2]);var state_30977__$1 = (function (){var statearr_31014 = state_30977;(statearr_31014[26] = inst_30970);
return statearr_31014;
})();var statearr_31015_31090 = state_30977__$1;(statearr_31015_31090[2] = null);
(statearr_31015_31090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 13))
{var inst_30864 = (state_30977[24]);var inst_30867 = cljs.core.async.close_BANG_.call(null,inst_30864);var state_30977__$1 = state_30977;var statearr_31016_31091 = state_30977__$1;(statearr_31016_31091[2] = inst_30867);
(statearr_31016_31091[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 45))
{var inst_30967 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_31020_31092 = state_30977__$1;(statearr_31020_31092[2] = inst_30967);
(statearr_31020_31092[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 14))
{var state_30977__$1 = state_30977;var statearr_31021_31093 = state_30977__$1;(statearr_31021_31093[2] = null);
(statearr_31021_31093[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 15))
{var inst_30854 = (state_30977[14]);var inst_30856 = (state_30977[15]);var inst_30855 = (state_30977[16]);var inst_30857 = (state_30977[17]);var inst_30870 = (state_30977[2]);var inst_30871 = (inst_30857 + 1);var tmp31017 = inst_30854;var tmp31018 = inst_30856;var tmp31019 = inst_30855;var inst_30854__$1 = tmp31017;var inst_30855__$1 = tmp31019;var inst_30856__$1 = tmp31018;var inst_30857__$1 = inst_30871;var state_30977__$1 = (function (){var statearr_31022 = state_30977;(statearr_31022[14] = inst_30854__$1);
(statearr_31022[15] = inst_30856__$1);
(statearr_31022[16] = inst_30855__$1);
(statearr_31022[17] = inst_30857__$1);
(statearr_31022[27] = inst_30870);
return statearr_31022;
})();var statearr_31023_31094 = state_30977__$1;(statearr_31023_31094[2] = null);
(statearr_31023_31094[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 16))
{var inst_30874 = (state_30977[25]);var inst_30876 = cljs.core.chunked_seq_QMARK_.call(null,inst_30874);var state_30977__$1 = state_30977;if(inst_30876)
{var statearr_31024_31095 = state_30977__$1;(statearr_31024_31095[1] = 19);
} else
{var statearr_31025_31096 = state_30977__$1;(statearr_31025_31096[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 17))
{var state_30977__$1 = state_30977;var statearr_31026_31097 = state_30977__$1;(statearr_31026_31097[2] = null);
(statearr_31026_31097[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 18))
{var inst_30898 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_31027_31098 = state_30977__$1;(statearr_31027_31098[2] = inst_30898);
(statearr_31027_31098[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 19))
{var inst_30874 = (state_30977[25]);var inst_30878 = cljs.core.chunk_first.call(null,inst_30874);var inst_30879 = cljs.core.chunk_rest.call(null,inst_30874);var inst_30880 = cljs.core.count.call(null,inst_30878);var inst_30854 = inst_30879;var inst_30855 = inst_30878;var inst_30856 = inst_30880;var inst_30857 = 0;var state_30977__$1 = (function (){var statearr_31028 = state_30977;(statearr_31028[14] = inst_30854);
(statearr_31028[15] = inst_30856);
(statearr_31028[16] = inst_30855);
(statearr_31028[17] = inst_30857);
return statearr_31028;
})();var statearr_31029_31099 = state_30977__$1;(statearr_31029_31099[2] = null);
(statearr_31029_31099[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 20))
{var inst_30874 = (state_30977[25]);var inst_30884 = cljs.core.first.call(null,inst_30874);var inst_30885 = cljs.core.nth.call(null,inst_30884,0,null);var inst_30886 = cljs.core.nth.call(null,inst_30884,1,null);var state_30977__$1 = (function (){var statearr_31030 = state_30977;(statearr_31030[28] = inst_30885);
return statearr_31030;
})();if(cljs.core.truth_(inst_30886))
{var statearr_31031_31100 = state_30977__$1;(statearr_31031_31100[1] = 22);
} else
{var statearr_31032_31101 = state_30977__$1;(statearr_31032_31101[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 21))
{var inst_30895 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_31033_31102 = state_30977__$1;(statearr_31033_31102[2] = inst_30895);
(statearr_31033_31102[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 22))
{var inst_30885 = (state_30977[28]);var inst_30888 = cljs.core.async.close_BANG_.call(null,inst_30885);var state_30977__$1 = state_30977;var statearr_31034_31103 = state_30977__$1;(statearr_31034_31103[2] = inst_30888);
(statearr_31034_31103[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 23))
{var state_30977__$1 = state_30977;var statearr_31035_31104 = state_30977__$1;(statearr_31035_31104[2] = null);
(statearr_31035_31104[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 24))
{var inst_30874 = (state_30977[25]);var inst_30891 = (state_30977[2]);var inst_30892 = cljs.core.next.call(null,inst_30874);var inst_30854 = inst_30892;var inst_30855 = null;var inst_30856 = 0;var inst_30857 = 0;var state_30977__$1 = (function (){var statearr_31036 = state_30977;(statearr_31036[14] = inst_30854);
(statearr_31036[15] = inst_30856);
(statearr_31036[16] = inst_30855);
(statearr_31036[29] = inst_30891);
(statearr_31036[17] = inst_30857);
return statearr_31036;
})();var statearr_31037_31105 = state_30977__$1;(statearr_31037_31105[2] = null);
(statearr_31037_31105[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 25))
{var inst_30915 = (state_30977[11]);var inst_30916 = (state_30977[13]);var inst_30918 = (inst_30916 < inst_30915);var inst_30919 = inst_30918;var state_30977__$1 = state_30977;if(cljs.core.truth_(inst_30919))
{var statearr_31038_31106 = state_30977__$1;(statearr_31038_31106[1] = 27);
} else
{var statearr_31039_31107 = state_30977__$1;(statearr_31039_31107[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 26))
{var inst_30905 = (state_30977[19]);var inst_30963 = (state_30977[2]);var inst_30964 = cljs.core.seq.call(null,inst_30905);var state_30977__$1 = (function (){var statearr_31040 = state_30977;(statearr_31040[30] = inst_30963);
return statearr_31040;
})();if(inst_30964)
{var statearr_31041_31108 = state_30977__$1;(statearr_31041_31108[1] = 42);
} else
{var statearr_31042_31109 = state_30977__$1;(statearr_31042_31109[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 27))
{var inst_30914 = (state_30977[10]);var inst_30916 = (state_30977[13]);var inst_30921 = cljs.core._nth.call(null,inst_30914,inst_30916);var state_30977__$1 = (function (){var statearr_31043 = state_30977;(statearr_31043[8] = inst_30921);
return statearr_31043;
})();var statearr_31044_31110 = state_30977__$1;(statearr_31044_31110[2] = null);
(statearr_31044_31110[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 28))
{var inst_30934 = (state_30977[9]);var inst_30913 = (state_30977[12]);var inst_30934__$1 = cljs.core.seq.call(null,inst_30913);var state_30977__$1 = (function (){var statearr_31048 = state_30977;(statearr_31048[9] = inst_30934__$1);
return statearr_31048;
})();if(inst_30934__$1)
{var statearr_31049_31111 = state_30977__$1;(statearr_31049_31111[1] = 33);
} else
{var statearr_31050_31112 = state_30977__$1;(statearr_31050_31112[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 29))
{var inst_30961 = (state_30977[2]);var state_30977__$1 = state_30977;var statearr_31051_31113 = state_30977__$1;(statearr_31051_31113[2] = inst_30961);
(statearr_31051_31113[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 30))
{var inst_30914 = (state_30977[10]);var inst_30915 = (state_30977[11]);var inst_30913 = (state_30977[12]);var inst_30916 = (state_30977[13]);var inst_30930 = (state_30977[2]);var inst_30931 = (inst_30916 + 1);var tmp31045 = inst_30914;var tmp31046 = inst_30915;var tmp31047 = inst_30913;var inst_30913__$1 = tmp31047;var inst_30914__$1 = tmp31045;var inst_30915__$1 = tmp31046;var inst_30916__$1 = inst_30931;var state_30977__$1 = (function (){var statearr_31052 = state_30977;(statearr_31052[31] = inst_30930);
(statearr_31052[10] = inst_30914__$1);
(statearr_31052[11] = inst_30915__$1);
(statearr_31052[12] = inst_30913__$1);
(statearr_31052[13] = inst_30916__$1);
return statearr_31052;
})();var statearr_31053_31114 = state_30977__$1;(statearr_31053_31114[2] = null);
(statearr_31053_31114[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30978 === 31))
{var inst_30921 = (state_30977[8]);var inst_30922 = (state_30977[2]);var inst_30923 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30924 = cljs.core.async.untap_STAR_.call(null,m,inst_30921);var state_30977__$1 = (function (){var statearr_31054 = state_30977;(statearr_31054[32] = inst_30922);
(statearr_31054[33] = inst_30923);
return statearr_31054;
})();var statearr_31055_31115 = state_30977__$1;(statearr_31055_31115[2] = inst_30924);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_31059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31059[0] = state_machine__5507__auto__);
(statearr_31059[1] = 1);
return statearr_31059;
});
var state_machine__5507__auto____1 = (function (state_30977){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30977);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31060){if((e31060 instanceof Object))
{var ex__5510__auto__ = e31060;var statearr_31061_31116 = state_30977;(statearr_31061_31116[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31117 = state_30977;
state_30977 = G__31117;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30977){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31062 = f__5522__auto__.call(null);(statearr_31062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31063);
return statearr_31062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj31119 = {};return obj31119;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t31229 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31229 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31230){
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
this.meta31230 = meta31230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31229.cljs$lang$type = true;
cljs.core.async.t31229.cljs$lang$ctorStr = "cljs.core.async/t31229";
cljs.core.async.t31229.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31229");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31229.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31231){var self__ = this;
var _31231__$1 = this;return self__.meta31230;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31231,meta31230__$1){var self__ = this;
var _31231__$1 = this;return (new cljs.core.async.t31229(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31230__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31229 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31229(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31230){return (new cljs.core.async.t31229(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31230));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31229(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___31338 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31296){var state_val_31297 = (state_31296[1]);if((state_val_31297 === 1))
{var inst_31235 = (state_31296[7]);var inst_31235__$1 = calc_state.call(null);var inst_31236 = cljs.core.seq_QMARK_.call(null,inst_31235__$1);var state_31296__$1 = (function (){var statearr_31298 = state_31296;(statearr_31298[7] = inst_31235__$1);
return statearr_31298;
})();if(inst_31236)
{var statearr_31299_31339 = state_31296__$1;(statearr_31299_31339[1] = 2);
} else
{var statearr_31300_31340 = state_31296__$1;(statearr_31300_31340[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 2))
{var inst_31235 = (state_31296[7]);var inst_31238 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31235);var state_31296__$1 = state_31296;var statearr_31301_31341 = state_31296__$1;(statearr_31301_31341[2] = inst_31238);
(statearr_31301_31341[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 3))
{var inst_31235 = (state_31296[7]);var state_31296__$1 = state_31296;var statearr_31302_31342 = state_31296__$1;(statearr_31302_31342[2] = inst_31235);
(statearr_31302_31342[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 4))
{var inst_31235 = (state_31296[7]);var inst_31241 = (state_31296[2]);var inst_31242 = cljs.core.get.call(null,inst_31241,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31243 = cljs.core.get.call(null,inst_31241,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31244 = cljs.core.get.call(null,inst_31241,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31245 = inst_31235;var state_31296__$1 = (function (){var statearr_31303 = state_31296;(statearr_31303[8] = inst_31245);
(statearr_31303[9] = inst_31244);
(statearr_31303[10] = inst_31243);
(statearr_31303[11] = inst_31242);
return statearr_31303;
})();var statearr_31304_31343 = state_31296__$1;(statearr_31304_31343[2] = null);
(statearr_31304_31343[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 5))
{var inst_31245 = (state_31296[8]);var inst_31248 = cljs.core.seq_QMARK_.call(null,inst_31245);var state_31296__$1 = state_31296;if(inst_31248)
{var statearr_31305_31344 = state_31296__$1;(statearr_31305_31344[1] = 7);
} else
{var statearr_31306_31345 = state_31296__$1;(statearr_31306_31345[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 6))
{var inst_31294 = (state_31296[2]);var state_31296__$1 = state_31296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31296__$1,inst_31294);
} else
{if((state_val_31297 === 7))
{var inst_31245 = (state_31296[8]);var inst_31250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31245);var state_31296__$1 = state_31296;var statearr_31307_31346 = state_31296__$1;(statearr_31307_31346[2] = inst_31250);
(statearr_31307_31346[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 8))
{var inst_31245 = (state_31296[8]);var state_31296__$1 = state_31296;var statearr_31308_31347 = state_31296__$1;(statearr_31308_31347[2] = inst_31245);
(statearr_31308_31347[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 9))
{var inst_31253 = (state_31296[12]);var inst_31253__$1 = (state_31296[2]);var inst_31254 = cljs.core.get.call(null,inst_31253__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31255 = cljs.core.get.call(null,inst_31253__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31256 = cljs.core.get.call(null,inst_31253__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31296__$1 = (function (){var statearr_31309 = state_31296;(statearr_31309[13] = inst_31256);
(statearr_31309[14] = inst_31255);
(statearr_31309[12] = inst_31253__$1);
return statearr_31309;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31296__$1,10,inst_31254);
} else
{if((state_val_31297 === 10))
{var inst_31261 = (state_31296[15]);var inst_31260 = (state_31296[16]);var inst_31259 = (state_31296[2]);var inst_31260__$1 = cljs.core.nth.call(null,inst_31259,0,null);var inst_31261__$1 = cljs.core.nth.call(null,inst_31259,1,null);var inst_31262 = (inst_31260__$1 == null);var inst_31263 = cljs.core._EQ_.call(null,inst_31261__$1,change);var inst_31264 = (inst_31262) || (inst_31263);var state_31296__$1 = (function (){var statearr_31310 = state_31296;(statearr_31310[15] = inst_31261__$1);
(statearr_31310[16] = inst_31260__$1);
return statearr_31310;
})();if(cljs.core.truth_(inst_31264))
{var statearr_31311_31348 = state_31296__$1;(statearr_31311_31348[1] = 11);
} else
{var statearr_31312_31349 = state_31296__$1;(statearr_31312_31349[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 11))
{var inst_31260 = (state_31296[16]);var inst_31266 = (inst_31260 == null);var state_31296__$1 = state_31296;if(cljs.core.truth_(inst_31266))
{var statearr_31313_31350 = state_31296__$1;(statearr_31313_31350[1] = 14);
} else
{var statearr_31314_31351 = state_31296__$1;(statearr_31314_31351[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 12))
{var inst_31256 = (state_31296[13]);var inst_31261 = (state_31296[15]);var inst_31275 = (state_31296[17]);var inst_31275__$1 = inst_31256.call(null,inst_31261);var state_31296__$1 = (function (){var statearr_31315 = state_31296;(statearr_31315[17] = inst_31275__$1);
return statearr_31315;
})();if(cljs.core.truth_(inst_31275__$1))
{var statearr_31316_31352 = state_31296__$1;(statearr_31316_31352[1] = 17);
} else
{var statearr_31317_31353 = state_31296__$1;(statearr_31317_31353[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 13))
{var inst_31292 = (state_31296[2]);var state_31296__$1 = state_31296;var statearr_31318_31354 = state_31296__$1;(statearr_31318_31354[2] = inst_31292);
(statearr_31318_31354[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 14))
{var inst_31261 = (state_31296[15]);var inst_31268 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31261);var state_31296__$1 = state_31296;var statearr_31319_31355 = state_31296__$1;(statearr_31319_31355[2] = inst_31268);
(statearr_31319_31355[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 15))
{var state_31296__$1 = state_31296;var statearr_31320_31356 = state_31296__$1;(statearr_31320_31356[2] = null);
(statearr_31320_31356[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 16))
{var inst_31271 = (state_31296[2]);var inst_31272 = calc_state.call(null);var inst_31245 = inst_31272;var state_31296__$1 = (function (){var statearr_31321 = state_31296;(statearr_31321[8] = inst_31245);
(statearr_31321[18] = inst_31271);
return statearr_31321;
})();var statearr_31322_31357 = state_31296__$1;(statearr_31322_31357[2] = null);
(statearr_31322_31357[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 17))
{var inst_31275 = (state_31296[17]);var state_31296__$1 = state_31296;var statearr_31323_31358 = state_31296__$1;(statearr_31323_31358[2] = inst_31275);
(statearr_31323_31358[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 18))
{var inst_31256 = (state_31296[13]);var inst_31261 = (state_31296[15]);var inst_31255 = (state_31296[14]);var inst_31278 = cljs.core.empty_QMARK_.call(null,inst_31256);var inst_31279 = inst_31255.call(null,inst_31261);var inst_31280 = cljs.core.not.call(null,inst_31279);var inst_31281 = (inst_31278) && (inst_31280);var state_31296__$1 = state_31296;var statearr_31324_31359 = state_31296__$1;(statearr_31324_31359[2] = inst_31281);
(statearr_31324_31359[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 19))
{var inst_31283 = (state_31296[2]);var state_31296__$1 = state_31296;if(cljs.core.truth_(inst_31283))
{var statearr_31325_31360 = state_31296__$1;(statearr_31325_31360[1] = 20);
} else
{var statearr_31326_31361 = state_31296__$1;(statearr_31326_31361[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 20))
{var inst_31260 = (state_31296[16]);var state_31296__$1 = state_31296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31296__$1,23,out,inst_31260);
} else
{if((state_val_31297 === 21))
{var state_31296__$1 = state_31296;var statearr_31327_31362 = state_31296__$1;(statearr_31327_31362[2] = null);
(statearr_31327_31362[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 22))
{var inst_31253 = (state_31296[12]);var inst_31289 = (state_31296[2]);var inst_31245 = inst_31253;var state_31296__$1 = (function (){var statearr_31328 = state_31296;(statearr_31328[19] = inst_31289);
(statearr_31328[8] = inst_31245);
return statearr_31328;
})();var statearr_31329_31363 = state_31296__$1;(statearr_31329_31363[2] = null);
(statearr_31329_31363[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31297 === 23))
{var inst_31286 = (state_31296[2]);var state_31296__$1 = state_31296;var statearr_31330_31364 = state_31296__$1;(statearr_31330_31364[2] = inst_31286);
(statearr_31330_31364[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_31334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31334[0] = state_machine__5507__auto__);
(statearr_31334[1] = 1);
return statearr_31334;
});
var state_machine__5507__auto____1 = (function (state_31296){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31296);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31335){if((e31335 instanceof Object))
{var ex__5510__auto__ = e31335;var statearr_31336_31365 = state_31296;(statearr_31336_31365[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31366 = state_31296;
state_31296 = G__31366;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31296){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31337 = f__5522__auto__.call(null);(statearr_31337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31338);
return statearr_31337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj31368 = {};return obj31368;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__31369_SHARP_){if(cljs.core.truth_(p1__31369_SHARP_.call(null,topic)))
{return p1__31369_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31369_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31494 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31495){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31495 = meta31495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31494.cljs$lang$type = true;
cljs.core.async.t31494.cljs$lang$ctorStr = "cljs.core.async/t31494";
cljs.core.async.t31494.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31494");
});})(mults,ensure_mult))
;
cljs.core.async.t31494.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31494.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31494.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31494.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31496){var self__ = this;
var _31496__$1 = this;return self__.meta31495;
});})(mults,ensure_mult))
;
cljs.core.async.t31494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31496,meta31495__$1){var self__ = this;
var _31496__$1 = this;return (new cljs.core.async.t31494(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31495__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31494 = ((function (mults,ensure_mult){
return (function __GT_t31494(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31495){return (new cljs.core.async.t31494(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31495));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31494(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___31618 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31570){var state_val_31571 = (state_31570[1]);if((state_val_31571 === 1))
{var state_31570__$1 = state_31570;var statearr_31572_31619 = state_31570__$1;(statearr_31572_31619[2] = null);
(statearr_31572_31619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 2))
{var state_31570__$1 = state_31570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31570__$1,4,ch);
} else
{if((state_val_31571 === 3))
{var inst_31568 = (state_31570[2]);var state_31570__$1 = state_31570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31570__$1,inst_31568);
} else
{if((state_val_31571 === 4))
{var inst_31499 = (state_31570[7]);var inst_31499__$1 = (state_31570[2]);var inst_31500 = (inst_31499__$1 == null);var state_31570__$1 = (function (){var statearr_31573 = state_31570;(statearr_31573[7] = inst_31499__$1);
return statearr_31573;
})();if(cljs.core.truth_(inst_31500))
{var statearr_31574_31620 = state_31570__$1;(statearr_31574_31620[1] = 5);
} else
{var statearr_31575_31621 = state_31570__$1;(statearr_31575_31621[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 5))
{var inst_31506 = cljs.core.deref.call(null,mults);var inst_31507 = cljs.core.vals.call(null,inst_31506);var inst_31508 = cljs.core.seq.call(null,inst_31507);var inst_31509 = inst_31508;var inst_31510 = null;var inst_31511 = 0;var inst_31512 = 0;var state_31570__$1 = (function (){var statearr_31576 = state_31570;(statearr_31576[8] = inst_31509);
(statearr_31576[9] = inst_31510);
(statearr_31576[10] = inst_31511);
(statearr_31576[11] = inst_31512);
return statearr_31576;
})();var statearr_31577_31622 = state_31570__$1;(statearr_31577_31622[2] = null);
(statearr_31577_31622[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 6))
{var inst_31547 = (state_31570[12]);var inst_31549 = (state_31570[13]);var inst_31499 = (state_31570[7]);var inst_31547__$1 = topic_fn.call(null,inst_31499);var inst_31548 = cljs.core.deref.call(null,mults);var inst_31549__$1 = cljs.core.get.call(null,inst_31548,inst_31547__$1);var state_31570__$1 = (function (){var statearr_31578 = state_31570;(statearr_31578[12] = inst_31547__$1);
(statearr_31578[13] = inst_31549__$1);
return statearr_31578;
})();if(cljs.core.truth_(inst_31549__$1))
{var statearr_31579_31623 = state_31570__$1;(statearr_31579_31623[1] = 19);
} else
{var statearr_31580_31624 = state_31570__$1;(statearr_31580_31624[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 7))
{var inst_31566 = (state_31570[2]);var state_31570__$1 = state_31570;var statearr_31581_31625 = state_31570__$1;(statearr_31581_31625[2] = inst_31566);
(statearr_31581_31625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 8))
{var inst_31511 = (state_31570[10]);var inst_31512 = (state_31570[11]);var inst_31514 = (inst_31512 < inst_31511);var inst_31515 = inst_31514;var state_31570__$1 = state_31570;if(cljs.core.truth_(inst_31515))
{var statearr_31585_31626 = state_31570__$1;(statearr_31585_31626[1] = 10);
} else
{var statearr_31586_31627 = state_31570__$1;(statearr_31586_31627[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 9))
{var inst_31545 = (state_31570[2]);var state_31570__$1 = state_31570;var statearr_31587_31628 = state_31570__$1;(statearr_31587_31628[2] = inst_31545);
(statearr_31587_31628[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 10))
{var inst_31509 = (state_31570[8]);var inst_31510 = (state_31570[9]);var inst_31511 = (state_31570[10]);var inst_31512 = (state_31570[11]);var inst_31517 = cljs.core._nth.call(null,inst_31510,inst_31512);var inst_31518 = cljs.core.async.muxch_STAR_.call(null,inst_31517);var inst_31519 = cljs.core.async.close_BANG_.call(null,inst_31518);var inst_31520 = (inst_31512 + 1);var tmp31582 = inst_31509;var tmp31583 = inst_31510;var tmp31584 = inst_31511;var inst_31509__$1 = tmp31582;var inst_31510__$1 = tmp31583;var inst_31511__$1 = tmp31584;var inst_31512__$1 = inst_31520;var state_31570__$1 = (function (){var statearr_31588 = state_31570;(statearr_31588[8] = inst_31509__$1);
(statearr_31588[14] = inst_31519);
(statearr_31588[9] = inst_31510__$1);
(statearr_31588[10] = inst_31511__$1);
(statearr_31588[11] = inst_31512__$1);
return statearr_31588;
})();var statearr_31589_31629 = state_31570__$1;(statearr_31589_31629[2] = null);
(statearr_31589_31629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 11))
{var inst_31509 = (state_31570[8]);var inst_31523 = (state_31570[15]);var inst_31523__$1 = cljs.core.seq.call(null,inst_31509);var state_31570__$1 = (function (){var statearr_31590 = state_31570;(statearr_31590[15] = inst_31523__$1);
return statearr_31590;
})();if(inst_31523__$1)
{var statearr_31591_31630 = state_31570__$1;(statearr_31591_31630[1] = 13);
} else
{var statearr_31592_31631 = state_31570__$1;(statearr_31592_31631[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 12))
{var inst_31543 = (state_31570[2]);var state_31570__$1 = state_31570;var statearr_31593_31632 = state_31570__$1;(statearr_31593_31632[2] = inst_31543);
(statearr_31593_31632[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 13))
{var inst_31523 = (state_31570[15]);var inst_31525 = cljs.core.chunked_seq_QMARK_.call(null,inst_31523);var state_31570__$1 = state_31570;if(inst_31525)
{var statearr_31594_31633 = state_31570__$1;(statearr_31594_31633[1] = 16);
} else
{var statearr_31595_31634 = state_31570__$1;(statearr_31595_31634[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 14))
{var state_31570__$1 = state_31570;var statearr_31596_31635 = state_31570__$1;(statearr_31596_31635[2] = null);
(statearr_31596_31635[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 15))
{var inst_31541 = (state_31570[2]);var state_31570__$1 = state_31570;var statearr_31597_31636 = state_31570__$1;(statearr_31597_31636[2] = inst_31541);
(statearr_31597_31636[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 16))
{var inst_31523 = (state_31570[15]);var inst_31527 = cljs.core.chunk_first.call(null,inst_31523);var inst_31528 = cljs.core.chunk_rest.call(null,inst_31523);var inst_31529 = cljs.core.count.call(null,inst_31527);var inst_31509 = inst_31528;var inst_31510 = inst_31527;var inst_31511 = inst_31529;var inst_31512 = 0;var state_31570__$1 = (function (){var statearr_31598 = state_31570;(statearr_31598[8] = inst_31509);
(statearr_31598[9] = inst_31510);
(statearr_31598[10] = inst_31511);
(statearr_31598[11] = inst_31512);
return statearr_31598;
})();var statearr_31599_31637 = state_31570__$1;(statearr_31599_31637[2] = null);
(statearr_31599_31637[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 17))
{var inst_31523 = (state_31570[15]);var inst_31532 = cljs.core.first.call(null,inst_31523);var inst_31533 = cljs.core.async.muxch_STAR_.call(null,inst_31532);var inst_31534 = cljs.core.async.close_BANG_.call(null,inst_31533);var inst_31535 = cljs.core.next.call(null,inst_31523);var inst_31509 = inst_31535;var inst_31510 = null;var inst_31511 = 0;var inst_31512 = 0;var state_31570__$1 = (function (){var statearr_31600 = state_31570;(statearr_31600[8] = inst_31509);
(statearr_31600[16] = inst_31534);
(statearr_31600[9] = inst_31510);
(statearr_31600[10] = inst_31511);
(statearr_31600[11] = inst_31512);
return statearr_31600;
})();var statearr_31601_31638 = state_31570__$1;(statearr_31601_31638[2] = null);
(statearr_31601_31638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 18))
{var inst_31538 = (state_31570[2]);var state_31570__$1 = state_31570;var statearr_31602_31639 = state_31570__$1;(statearr_31602_31639[2] = inst_31538);
(statearr_31602_31639[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 19))
{var state_31570__$1 = state_31570;var statearr_31603_31640 = state_31570__$1;(statearr_31603_31640[2] = null);
(statearr_31603_31640[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 20))
{var state_31570__$1 = state_31570;var statearr_31604_31641 = state_31570__$1;(statearr_31604_31641[2] = null);
(statearr_31604_31641[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 21))
{var inst_31563 = (state_31570[2]);var state_31570__$1 = (function (){var statearr_31605 = state_31570;(statearr_31605[17] = inst_31563);
return statearr_31605;
})();var statearr_31606_31642 = state_31570__$1;(statearr_31606_31642[2] = null);
(statearr_31606_31642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 22))
{var inst_31560 = (state_31570[2]);var state_31570__$1 = state_31570;var statearr_31607_31643 = state_31570__$1;(statearr_31607_31643[2] = inst_31560);
(statearr_31607_31643[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 23))
{var inst_31547 = (state_31570[12]);var inst_31551 = (state_31570[2]);var inst_31552 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31547);var state_31570__$1 = (function (){var statearr_31608 = state_31570;(statearr_31608[18] = inst_31551);
return statearr_31608;
})();var statearr_31609_31644 = state_31570__$1;(statearr_31609_31644[2] = inst_31552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31570__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31571 === 24))
{var inst_31549 = (state_31570[13]);var inst_31499 = (state_31570[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31570,23,Object,null,22);var inst_31556 = cljs.core.async.muxch_STAR_.call(null,inst_31549);var state_31570__$1 = state_31570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31570__$1,25,inst_31556,inst_31499);
} else
{if((state_val_31571 === 25))
{var inst_31558 = (state_31570[2]);var state_31570__$1 = state_31570;var statearr_31610_31645 = state_31570__$1;(statearr_31610_31645[2] = inst_31558);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31570__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_31614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31614[0] = state_machine__5507__auto__);
(statearr_31614[1] = 1);
return statearr_31614;
});
var state_machine__5507__auto____1 = (function (state_31570){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31570);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31615){if((e31615 instanceof Object))
{var ex__5510__auto__ = e31615;var statearr_31616_31646 = state_31570;(statearr_31616_31646[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31570);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31647 = state_31570;
state_31570 = G__31647;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31570){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31617 = f__5522__auto__.call(null);(statearr_31617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31618);
return statearr_31617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___31784 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31754){var state_val_31755 = (state_31754[1]);if((state_val_31755 === 1))
{var state_31754__$1 = state_31754;var statearr_31756_31785 = state_31754__$1;(statearr_31756_31785[2] = null);
(statearr_31756_31785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 2))
{var inst_31717 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31718 = 0;var state_31754__$1 = (function (){var statearr_31757 = state_31754;(statearr_31757[7] = inst_31717);
(statearr_31757[8] = inst_31718);
return statearr_31757;
})();var statearr_31758_31786 = state_31754__$1;(statearr_31758_31786[2] = null);
(statearr_31758_31786[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 3))
{var inst_31752 = (state_31754[2]);var state_31754__$1 = state_31754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31754__$1,inst_31752);
} else
{if((state_val_31755 === 4))
{var inst_31718 = (state_31754[8]);var inst_31720 = (inst_31718 < cnt);var state_31754__$1 = state_31754;if(cljs.core.truth_(inst_31720))
{var statearr_31759_31787 = state_31754__$1;(statearr_31759_31787[1] = 6);
} else
{var statearr_31760_31788 = state_31754__$1;(statearr_31760_31788[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 5))
{var inst_31738 = (state_31754[2]);var state_31754__$1 = (function (){var statearr_31761 = state_31754;(statearr_31761[9] = inst_31738);
return statearr_31761;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31754__$1,12,dchan);
} else
{if((state_val_31755 === 6))
{var state_31754__$1 = state_31754;var statearr_31762_31789 = state_31754__$1;(statearr_31762_31789[2] = null);
(statearr_31762_31789[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 7))
{var state_31754__$1 = state_31754;var statearr_31763_31790 = state_31754__$1;(statearr_31763_31790[2] = null);
(statearr_31763_31790[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 8))
{var inst_31736 = (state_31754[2]);var state_31754__$1 = state_31754;var statearr_31764_31791 = state_31754__$1;(statearr_31764_31791[2] = inst_31736);
(statearr_31764_31791[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 9))
{var inst_31718 = (state_31754[8]);var inst_31731 = (state_31754[2]);var inst_31732 = (inst_31718 + 1);var inst_31718__$1 = inst_31732;var state_31754__$1 = (function (){var statearr_31765 = state_31754;(statearr_31765[10] = inst_31731);
(statearr_31765[8] = inst_31718__$1);
return statearr_31765;
})();var statearr_31766_31792 = state_31754__$1;(statearr_31766_31792[2] = null);
(statearr_31766_31792[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 10))
{var inst_31722 = (state_31754[2]);var inst_31723 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31754__$1 = (function (){var statearr_31767 = state_31754;(statearr_31767[11] = inst_31722);
return statearr_31767;
})();var statearr_31768_31793 = state_31754__$1;(statearr_31768_31793[2] = inst_31723);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31754__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 11))
{var inst_31718 = (state_31754[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31754,10,Object,null,9);var inst_31727 = chs__$1.call(null,inst_31718);var inst_31728 = done.call(null,inst_31718);var inst_31729 = cljs.core.async.take_BANG_.call(null,inst_31727,inst_31728);var state_31754__$1 = state_31754;var statearr_31769_31794 = state_31754__$1;(statearr_31769_31794[2] = inst_31729);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31754__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 12))
{var inst_31740 = (state_31754[12]);var inst_31740__$1 = (state_31754[2]);var inst_31741 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31740__$1);var state_31754__$1 = (function (){var statearr_31770 = state_31754;(statearr_31770[12] = inst_31740__$1);
return statearr_31770;
})();if(cljs.core.truth_(inst_31741))
{var statearr_31771_31795 = state_31754__$1;(statearr_31771_31795[1] = 13);
} else
{var statearr_31772_31796 = state_31754__$1;(statearr_31772_31796[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 13))
{var inst_31743 = cljs.core.async.close_BANG_.call(null,out);var state_31754__$1 = state_31754;var statearr_31773_31797 = state_31754__$1;(statearr_31773_31797[2] = inst_31743);
(statearr_31773_31797[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 14))
{var inst_31740 = (state_31754[12]);var inst_31745 = cljs.core.apply.call(null,f,inst_31740);var state_31754__$1 = state_31754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31754__$1,16,out,inst_31745);
} else
{if((state_val_31755 === 15))
{var inst_31750 = (state_31754[2]);var state_31754__$1 = state_31754;var statearr_31774_31798 = state_31754__$1;(statearr_31774_31798[2] = inst_31750);
(statearr_31774_31798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31755 === 16))
{var inst_31747 = (state_31754[2]);var state_31754__$1 = (function (){var statearr_31775 = state_31754;(statearr_31775[13] = inst_31747);
return statearr_31775;
})();var statearr_31776_31799 = state_31754__$1;(statearr_31776_31799[2] = null);
(statearr_31776_31799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_31780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31780[0] = state_machine__5507__auto__);
(statearr_31780[1] = 1);
return statearr_31780;
});
var state_machine__5507__auto____1 = (function (state_31754){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31754);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31781){if((e31781 instanceof Object))
{var ex__5510__auto__ = e31781;var statearr_31782_31800 = state_31754;(statearr_31782_31800[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31801 = state_31754;
state_31754 = G__31801;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31754){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31783 = f__5522__auto__.call(null);(statearr_31783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31784);
return statearr_31783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31909 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31885){var state_val_31886 = (state_31885[1]);if((state_val_31886 === 1))
{var inst_31856 = cljs.core.vec.call(null,chs);var inst_31857 = inst_31856;var state_31885__$1 = (function (){var statearr_31887 = state_31885;(statearr_31887[7] = inst_31857);
return statearr_31887;
})();var statearr_31888_31910 = state_31885__$1;(statearr_31888_31910[2] = null);
(statearr_31888_31910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31886 === 2))
{var inst_31857 = (state_31885[7]);var inst_31859 = cljs.core.count.call(null,inst_31857);var inst_31860 = (inst_31859 > 0);var state_31885__$1 = state_31885;if(cljs.core.truth_(inst_31860))
{var statearr_31889_31911 = state_31885__$1;(statearr_31889_31911[1] = 4);
} else
{var statearr_31890_31912 = state_31885__$1;(statearr_31890_31912[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31886 === 3))
{var inst_31883 = (state_31885[2]);var state_31885__$1 = state_31885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31885__$1,inst_31883);
} else
{if((state_val_31886 === 4))
{var inst_31857 = (state_31885[7]);var state_31885__$1 = state_31885;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31885__$1,7,inst_31857);
} else
{if((state_val_31886 === 5))
{var inst_31879 = cljs.core.async.close_BANG_.call(null,out);var state_31885__$1 = state_31885;var statearr_31891_31913 = state_31885__$1;(statearr_31891_31913[2] = inst_31879);
(statearr_31891_31913[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31886 === 6))
{var inst_31881 = (state_31885[2]);var state_31885__$1 = state_31885;var statearr_31892_31914 = state_31885__$1;(statearr_31892_31914[2] = inst_31881);
(statearr_31892_31914[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31886 === 7))
{var inst_31865 = (state_31885[8]);var inst_31864 = (state_31885[9]);var inst_31864__$1 = (state_31885[2]);var inst_31865__$1 = cljs.core.nth.call(null,inst_31864__$1,0,null);var inst_31866 = cljs.core.nth.call(null,inst_31864__$1,1,null);var inst_31867 = (inst_31865__$1 == null);var state_31885__$1 = (function (){var statearr_31893 = state_31885;(statearr_31893[10] = inst_31866);
(statearr_31893[8] = inst_31865__$1);
(statearr_31893[9] = inst_31864__$1);
return statearr_31893;
})();if(cljs.core.truth_(inst_31867))
{var statearr_31894_31915 = state_31885__$1;(statearr_31894_31915[1] = 8);
} else
{var statearr_31895_31916 = state_31885__$1;(statearr_31895_31916[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31886 === 8))
{var inst_31866 = (state_31885[10]);var inst_31865 = (state_31885[8]);var inst_31857 = (state_31885[7]);var inst_31864 = (state_31885[9]);var inst_31869 = (function (){var c = inst_31866;var v = inst_31865;var vec__31862 = inst_31864;var cs = inst_31857;return ((function (c,v,vec__31862,cs,inst_31866,inst_31865,inst_31857,inst_31864,state_val_31886){
return (function (p1__31802_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31802_SHARP_);
});
;})(c,v,vec__31862,cs,inst_31866,inst_31865,inst_31857,inst_31864,state_val_31886))
})();var inst_31870 = cljs.core.filterv.call(null,inst_31869,inst_31857);var inst_31857__$1 = inst_31870;var state_31885__$1 = (function (){var statearr_31896 = state_31885;(statearr_31896[7] = inst_31857__$1);
return statearr_31896;
})();var statearr_31897_31917 = state_31885__$1;(statearr_31897_31917[2] = null);
(statearr_31897_31917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31886 === 9))
{var inst_31865 = (state_31885[8]);var state_31885__$1 = state_31885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31885__$1,11,out,inst_31865);
} else
{if((state_val_31886 === 10))
{var inst_31877 = (state_31885[2]);var state_31885__$1 = state_31885;var statearr_31899_31918 = state_31885__$1;(statearr_31899_31918[2] = inst_31877);
(statearr_31899_31918[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31886 === 11))
{var inst_31857 = (state_31885[7]);var inst_31874 = (state_31885[2]);var tmp31898 = inst_31857;var inst_31857__$1 = tmp31898;var state_31885__$1 = (function (){var statearr_31900 = state_31885;(statearr_31900[11] = inst_31874);
(statearr_31900[7] = inst_31857__$1);
return statearr_31900;
})();var statearr_31901_31919 = state_31885__$1;(statearr_31901_31919[2] = null);
(statearr_31901_31919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_31905 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31905[0] = state_machine__5507__auto__);
(statearr_31905[1] = 1);
return statearr_31905;
});
var state_machine__5507__auto____1 = (function (state_31885){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31906){if((e31906 instanceof Object))
{var ex__5510__auto__ = e31906;var statearr_31907_31920 = state_31885;(statearr_31907_31920[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31921 = state_31885;
state_31885 = G__31921;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31885){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31908 = f__5522__auto__.call(null);(statearr_31908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31909);
return statearr_31908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32014 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31991){var state_val_31992 = (state_31991[1]);if((state_val_31992 === 1))
{var inst_31968 = 0;var state_31991__$1 = (function (){var statearr_31993 = state_31991;(statearr_31993[7] = inst_31968);
return statearr_31993;
})();var statearr_31994_32015 = state_31991__$1;(statearr_31994_32015[2] = null);
(statearr_31994_32015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31992 === 2))
{var inst_31968 = (state_31991[7]);var inst_31970 = (inst_31968 < n);var state_31991__$1 = state_31991;if(cljs.core.truth_(inst_31970))
{var statearr_31995_32016 = state_31991__$1;(statearr_31995_32016[1] = 4);
} else
{var statearr_31996_32017 = state_31991__$1;(statearr_31996_32017[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31992 === 3))
{var inst_31988 = (state_31991[2]);var inst_31989 = cljs.core.async.close_BANG_.call(null,out);var state_31991__$1 = (function (){var statearr_31997 = state_31991;(statearr_31997[8] = inst_31988);
return statearr_31997;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31991__$1,inst_31989);
} else
{if((state_val_31992 === 4))
{var state_31991__$1 = state_31991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31991__$1,7,ch);
} else
{if((state_val_31992 === 5))
{var state_31991__$1 = state_31991;var statearr_31998_32018 = state_31991__$1;(statearr_31998_32018[2] = null);
(statearr_31998_32018[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31992 === 6))
{var inst_31986 = (state_31991[2]);var state_31991__$1 = state_31991;var statearr_31999_32019 = state_31991__$1;(statearr_31999_32019[2] = inst_31986);
(statearr_31999_32019[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31992 === 7))
{var inst_31973 = (state_31991[9]);var inst_31973__$1 = (state_31991[2]);var inst_31974 = (inst_31973__$1 == null);var inst_31975 = cljs.core.not.call(null,inst_31974);var state_31991__$1 = (function (){var statearr_32000 = state_31991;(statearr_32000[9] = inst_31973__$1);
return statearr_32000;
})();if(inst_31975)
{var statearr_32001_32020 = state_31991__$1;(statearr_32001_32020[1] = 8);
} else
{var statearr_32002_32021 = state_31991__$1;(statearr_32002_32021[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31992 === 8))
{var inst_31973 = (state_31991[9]);var state_31991__$1 = state_31991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31991__$1,11,out,inst_31973);
} else
{if((state_val_31992 === 9))
{var state_31991__$1 = state_31991;var statearr_32003_32022 = state_31991__$1;(statearr_32003_32022[2] = null);
(statearr_32003_32022[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31992 === 10))
{var inst_31983 = (state_31991[2]);var state_31991__$1 = state_31991;var statearr_32004_32023 = state_31991__$1;(statearr_32004_32023[2] = inst_31983);
(statearr_32004_32023[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31992 === 11))
{var inst_31968 = (state_31991[7]);var inst_31978 = (state_31991[2]);var inst_31979 = (inst_31968 + 1);var inst_31968__$1 = inst_31979;var state_31991__$1 = (function (){var statearr_32005 = state_31991;(statearr_32005[7] = inst_31968__$1);
(statearr_32005[10] = inst_31978);
return statearr_32005;
})();var statearr_32006_32024 = state_31991__$1;(statearr_32006_32024[2] = null);
(statearr_32006_32024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_32010 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32010[0] = state_machine__5507__auto__);
(statearr_32010[1] = 1);
return statearr_32010;
});
var state_machine__5507__auto____1 = (function (state_31991){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32011){if((e32011 instanceof Object))
{var ex__5510__auto__ = e32011;var statearr_32012_32025 = state_31991;(statearr_32012_32025[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32026 = state_31991;
state_31991 = G__32026;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32013 = f__5522__auto__.call(null);(statearr_32013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32014);
return statearr_32013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32123 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32098){var state_val_32099 = (state_32098[1]);if((state_val_32099 === 1))
{var inst_32075 = null;var state_32098__$1 = (function (){var statearr_32100 = state_32098;(statearr_32100[7] = inst_32075);
return statearr_32100;
})();var statearr_32101_32124 = state_32098__$1;(statearr_32101_32124[2] = null);
(statearr_32101_32124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 2))
{var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32098__$1,4,ch);
} else
{if((state_val_32099 === 3))
{var inst_32095 = (state_32098[2]);var inst_32096 = cljs.core.async.close_BANG_.call(null,out);var state_32098__$1 = (function (){var statearr_32102 = state_32098;(statearr_32102[8] = inst_32095);
return statearr_32102;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32098__$1,inst_32096);
} else
{if((state_val_32099 === 4))
{var inst_32078 = (state_32098[9]);var inst_32078__$1 = (state_32098[2]);var inst_32079 = (inst_32078__$1 == null);var inst_32080 = cljs.core.not.call(null,inst_32079);var state_32098__$1 = (function (){var statearr_32103 = state_32098;(statearr_32103[9] = inst_32078__$1);
return statearr_32103;
})();if(inst_32080)
{var statearr_32104_32125 = state_32098__$1;(statearr_32104_32125[1] = 5);
} else
{var statearr_32105_32126 = state_32098__$1;(statearr_32105_32126[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 5))
{var inst_32078 = (state_32098[9]);var inst_32075 = (state_32098[7]);var inst_32082 = cljs.core._EQ_.call(null,inst_32078,inst_32075);var state_32098__$1 = state_32098;if(inst_32082)
{var statearr_32106_32127 = state_32098__$1;(statearr_32106_32127[1] = 8);
} else
{var statearr_32107_32128 = state_32098__$1;(statearr_32107_32128[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 6))
{var state_32098__$1 = state_32098;var statearr_32109_32129 = state_32098__$1;(statearr_32109_32129[2] = null);
(statearr_32109_32129[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 7))
{var inst_32093 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32110_32130 = state_32098__$1;(statearr_32110_32130[2] = inst_32093);
(statearr_32110_32130[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 8))
{var inst_32075 = (state_32098[7]);var tmp32108 = inst_32075;var inst_32075__$1 = tmp32108;var state_32098__$1 = (function (){var statearr_32111 = state_32098;(statearr_32111[7] = inst_32075__$1);
return statearr_32111;
})();var statearr_32112_32131 = state_32098__$1;(statearr_32112_32131[2] = null);
(statearr_32112_32131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 9))
{var inst_32078 = (state_32098[9]);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32098__$1,11,out,inst_32078);
} else
{if((state_val_32099 === 10))
{var inst_32090 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32113_32132 = state_32098__$1;(statearr_32113_32132[2] = inst_32090);
(statearr_32113_32132[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 11))
{var inst_32078 = (state_32098[9]);var inst_32087 = (state_32098[2]);var inst_32075 = inst_32078;var state_32098__$1 = (function (){var statearr_32114 = state_32098;(statearr_32114[7] = inst_32075);
(statearr_32114[10] = inst_32087);
return statearr_32114;
})();var statearr_32115_32133 = state_32098__$1;(statearr_32115_32133[2] = null);
(statearr_32115_32133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_32119 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32119[0] = state_machine__5507__auto__);
(statearr_32119[1] = 1);
return statearr_32119;
});
var state_machine__5507__auto____1 = (function (state_32098){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32098);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32120){if((e32120 instanceof Object))
{var ex__5510__auto__ = e32120;var statearr_32121_32134 = state_32098;(statearr_32121_32134[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32135 = state_32098;
state_32098 = G__32135;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32098){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32122 = f__5522__auto__.call(null);(statearr_32122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32123);
return statearr_32122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32240){var state_val_32241 = (state_32240[1]);if((state_val_32241 === 1))
{var inst_32203 = (new Array(n));var inst_32204 = inst_32203;var inst_32205 = 0;var state_32240__$1 = (function (){var statearr_32242 = state_32240;(statearr_32242[7] = inst_32204);
(statearr_32242[8] = inst_32205);
return statearr_32242;
})();var statearr_32243_32271 = state_32240__$1;(statearr_32243_32271[2] = null);
(statearr_32243_32271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 2))
{var state_32240__$1 = state_32240;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32240__$1,4,ch);
} else
{if((state_val_32241 === 3))
{var inst_32238 = (state_32240[2]);var state_32240__$1 = state_32240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32240__$1,inst_32238);
} else
{if((state_val_32241 === 4))
{var inst_32208 = (state_32240[9]);var inst_32208__$1 = (state_32240[2]);var inst_32209 = (inst_32208__$1 == null);var inst_32210 = cljs.core.not.call(null,inst_32209);var state_32240__$1 = (function (){var statearr_32244 = state_32240;(statearr_32244[9] = inst_32208__$1);
return statearr_32244;
})();if(inst_32210)
{var statearr_32245_32272 = state_32240__$1;(statearr_32245_32272[1] = 5);
} else
{var statearr_32246_32273 = state_32240__$1;(statearr_32246_32273[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 5))
{var inst_32208 = (state_32240[9]);var inst_32213 = (state_32240[10]);var inst_32204 = (state_32240[7]);var inst_32205 = (state_32240[8]);var inst_32212 = (inst_32204[inst_32205] = inst_32208);var inst_32213__$1 = (inst_32205 + 1);var inst_32214 = (inst_32213__$1 < n);var state_32240__$1 = (function (){var statearr_32247 = state_32240;(statearr_32247[10] = inst_32213__$1);
(statearr_32247[11] = inst_32212);
return statearr_32247;
})();if(cljs.core.truth_(inst_32214))
{var statearr_32248_32274 = state_32240__$1;(statearr_32248_32274[1] = 8);
} else
{var statearr_32249_32275 = state_32240__$1;(statearr_32249_32275[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 6))
{var inst_32205 = (state_32240[8]);var inst_32226 = (inst_32205 > 0);var state_32240__$1 = state_32240;if(cljs.core.truth_(inst_32226))
{var statearr_32251_32276 = state_32240__$1;(statearr_32251_32276[1] = 12);
} else
{var statearr_32252_32277 = state_32240__$1;(statearr_32252_32277[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 7))
{var inst_32236 = (state_32240[2]);var state_32240__$1 = state_32240;var statearr_32253_32278 = state_32240__$1;(statearr_32253_32278[2] = inst_32236);
(statearr_32253_32278[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 8))
{var inst_32213 = (state_32240[10]);var inst_32204 = (state_32240[7]);var tmp32250 = inst_32204;var inst_32204__$1 = tmp32250;var inst_32205 = inst_32213;var state_32240__$1 = (function (){var statearr_32254 = state_32240;(statearr_32254[7] = inst_32204__$1);
(statearr_32254[8] = inst_32205);
return statearr_32254;
})();var statearr_32255_32279 = state_32240__$1;(statearr_32255_32279[2] = null);
(statearr_32255_32279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 9))
{var inst_32204 = (state_32240[7]);var inst_32218 = cljs.core.vec.call(null,inst_32204);var state_32240__$1 = state_32240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32240__$1,11,out,inst_32218);
} else
{if((state_val_32241 === 10))
{var inst_32224 = (state_32240[2]);var state_32240__$1 = state_32240;var statearr_32256_32280 = state_32240__$1;(statearr_32256_32280[2] = inst_32224);
(statearr_32256_32280[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 11))
{var inst_32220 = (state_32240[2]);var inst_32221 = (new Array(n));var inst_32204 = inst_32221;var inst_32205 = 0;var state_32240__$1 = (function (){var statearr_32257 = state_32240;(statearr_32257[12] = inst_32220);
(statearr_32257[7] = inst_32204);
(statearr_32257[8] = inst_32205);
return statearr_32257;
})();var statearr_32258_32281 = state_32240__$1;(statearr_32258_32281[2] = null);
(statearr_32258_32281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 12))
{var inst_32204 = (state_32240[7]);var inst_32228 = cljs.core.vec.call(null,inst_32204);var state_32240__$1 = state_32240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32240__$1,15,out,inst_32228);
} else
{if((state_val_32241 === 13))
{var state_32240__$1 = state_32240;var statearr_32259_32282 = state_32240__$1;(statearr_32259_32282[2] = null);
(statearr_32259_32282[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 14))
{var inst_32233 = (state_32240[2]);var inst_32234 = cljs.core.async.close_BANG_.call(null,out);var state_32240__$1 = (function (){var statearr_32260 = state_32240;(statearr_32260[13] = inst_32233);
return statearr_32260;
})();var statearr_32261_32283 = state_32240__$1;(statearr_32261_32283[2] = inst_32234);
(statearr_32261_32283[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32241 === 15))
{var inst_32230 = (state_32240[2]);var state_32240__$1 = state_32240;var statearr_32262_32284 = state_32240__$1;(statearr_32262_32284[2] = inst_32230);
(statearr_32262_32284[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_32266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32266[0] = state_machine__5507__auto__);
(statearr_32266[1] = 1);
return statearr_32266;
});
var state_machine__5507__auto____1 = (function (state_32240){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32240);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32267){if((e32267 instanceof Object))
{var ex__5510__auto__ = e32267;var statearr_32268_32285 = state_32240;(statearr_32268_32285[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32286 = state_32240;
state_32240 = G__32286;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32240){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32269 = f__5522__auto__.call(null);(statearr_32269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32270);
return statearr_32269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32429 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32399){var state_val_32400 = (state_32399[1]);if((state_val_32400 === 1))
{var inst_32358 = [];var inst_32359 = inst_32358;var inst_32360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32399__$1 = (function (){var statearr_32401 = state_32399;(statearr_32401[7] = inst_32360);
(statearr_32401[8] = inst_32359);
return statearr_32401;
})();var statearr_32402_32430 = state_32399__$1;(statearr_32402_32430[2] = null);
(statearr_32402_32430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 2))
{var state_32399__$1 = state_32399;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32399__$1,4,ch);
} else
{if((state_val_32400 === 3))
{var inst_32397 = (state_32399[2]);var state_32399__$1 = state_32399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32399__$1,inst_32397);
} else
{if((state_val_32400 === 4))
{var inst_32363 = (state_32399[9]);var inst_32363__$1 = (state_32399[2]);var inst_32364 = (inst_32363__$1 == null);var inst_32365 = cljs.core.not.call(null,inst_32364);var state_32399__$1 = (function (){var statearr_32403 = state_32399;(statearr_32403[9] = inst_32363__$1);
return statearr_32403;
})();if(inst_32365)
{var statearr_32404_32431 = state_32399__$1;(statearr_32404_32431[1] = 5);
} else
{var statearr_32405_32432 = state_32399__$1;(statearr_32405_32432[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 5))
{var inst_32360 = (state_32399[7]);var inst_32367 = (state_32399[10]);var inst_32363 = (state_32399[9]);var inst_32367__$1 = f.call(null,inst_32363);var inst_32368 = cljs.core._EQ_.call(null,inst_32367__$1,inst_32360);var inst_32369 = cljs.core.keyword_identical_QMARK_.call(null,inst_32360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32370 = (inst_32368) || (inst_32369);var state_32399__$1 = (function (){var statearr_32406 = state_32399;(statearr_32406[10] = inst_32367__$1);
return statearr_32406;
})();if(cljs.core.truth_(inst_32370))
{var statearr_32407_32433 = state_32399__$1;(statearr_32407_32433[1] = 8);
} else
{var statearr_32408_32434 = state_32399__$1;(statearr_32408_32434[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 6))
{var inst_32359 = (state_32399[8]);var inst_32384 = inst_32359.length;var inst_32385 = (inst_32384 > 0);var state_32399__$1 = state_32399;if(cljs.core.truth_(inst_32385))
{var statearr_32410_32435 = state_32399__$1;(statearr_32410_32435[1] = 12);
} else
{var statearr_32411_32436 = state_32399__$1;(statearr_32411_32436[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 7))
{var inst_32395 = (state_32399[2]);var state_32399__$1 = state_32399;var statearr_32412_32437 = state_32399__$1;(statearr_32412_32437[2] = inst_32395);
(statearr_32412_32437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 8))
{var inst_32367 = (state_32399[10]);var inst_32359 = (state_32399[8]);var inst_32363 = (state_32399[9]);var inst_32372 = inst_32359.push(inst_32363);var tmp32409 = inst_32359;var inst_32359__$1 = tmp32409;var inst_32360 = inst_32367;var state_32399__$1 = (function (){var statearr_32413 = state_32399;(statearr_32413[7] = inst_32360);
(statearr_32413[11] = inst_32372);
(statearr_32413[8] = inst_32359__$1);
return statearr_32413;
})();var statearr_32414_32438 = state_32399__$1;(statearr_32414_32438[2] = null);
(statearr_32414_32438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 9))
{var inst_32359 = (state_32399[8]);var inst_32375 = cljs.core.vec.call(null,inst_32359);var state_32399__$1 = state_32399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32399__$1,11,out,inst_32375);
} else
{if((state_val_32400 === 10))
{var inst_32382 = (state_32399[2]);var state_32399__$1 = state_32399;var statearr_32415_32439 = state_32399__$1;(statearr_32415_32439[2] = inst_32382);
(statearr_32415_32439[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 11))
{var inst_32367 = (state_32399[10]);var inst_32363 = (state_32399[9]);var inst_32377 = (state_32399[2]);var inst_32378 = [];var inst_32379 = inst_32378.push(inst_32363);var inst_32359 = inst_32378;var inst_32360 = inst_32367;var state_32399__$1 = (function (){var statearr_32416 = state_32399;(statearr_32416[12] = inst_32379);
(statearr_32416[7] = inst_32360);
(statearr_32416[13] = inst_32377);
(statearr_32416[8] = inst_32359);
return statearr_32416;
})();var statearr_32417_32440 = state_32399__$1;(statearr_32417_32440[2] = null);
(statearr_32417_32440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 12))
{var inst_32359 = (state_32399[8]);var inst_32387 = cljs.core.vec.call(null,inst_32359);var state_32399__$1 = state_32399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32399__$1,15,out,inst_32387);
} else
{if((state_val_32400 === 13))
{var state_32399__$1 = state_32399;var statearr_32418_32441 = state_32399__$1;(statearr_32418_32441[2] = null);
(statearr_32418_32441[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 14))
{var inst_32392 = (state_32399[2]);var inst_32393 = cljs.core.async.close_BANG_.call(null,out);var state_32399__$1 = (function (){var statearr_32419 = state_32399;(statearr_32419[14] = inst_32392);
return statearr_32419;
})();var statearr_32420_32442 = state_32399__$1;(statearr_32420_32442[2] = inst_32393);
(statearr_32420_32442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32400 === 15))
{var inst_32389 = (state_32399[2]);var state_32399__$1 = state_32399;var statearr_32421_32443 = state_32399__$1;(statearr_32421_32443[2] = inst_32389);
(statearr_32421_32443[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_32425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32425[0] = state_machine__5507__auto__);
(statearr_32425[1] = 1);
return statearr_32425;
});
var state_machine__5507__auto____1 = (function (state_32399){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32399);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32426){if((e32426 instanceof Object))
{var ex__5510__auto__ = e32426;var statearr_32427_32444 = state_32399;(statearr_32427_32444[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32399);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32445 = state_32399;
state_32399 = G__32445;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32399){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32428 = f__5522__auto__.call(null);(statearr_32428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32429);
return statearr_32428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
