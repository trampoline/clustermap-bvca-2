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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33381 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33381 = (function (f,fn_handler,meta33382){
this.f = f;
this.fn_handler = fn_handler;
this.meta33382 = meta33382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33381.cljs$lang$type = true;
cljs.core.async.t33381.cljs$lang$ctorStr = "cljs.core.async/t33381";
cljs.core.async.t33381.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33381");
});
cljs.core.async.t33381.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33383){var self__ = this;
var _33383__$1 = this;return self__.meta33382;
});
cljs.core.async.t33381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33383,meta33382__$1){var self__ = this;
var _33383__$1 = this;return (new cljs.core.async.t33381(self__.f,self__.fn_handler,meta33382__$1));
});
cljs.core.async.__GT_t33381 = (function __GT_t33381(f__$1,fn_handler__$1,meta33382){return (new cljs.core.async.t33381(f__$1,fn_handler__$1,meta33382));
});
}
return (new cljs.core.async.t33381(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33385 = buff;if(G__33385)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33385.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33385.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33385);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33385);
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
{var val_33386 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33386);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33386);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33387 = n;var x_33388 = 0;while(true){
if((x_33388 < n__4248__auto___33387))
{(a[x_33388] = 0);
{
var G__33389 = (x_33388 + 1);
x_33388 = G__33389;
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
var G__33390 = (i + 1);
i = G__33390;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33394 = (function (flag,alt_flag,meta33395){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33395 = meta33395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33394.cljs$lang$type = true;
cljs.core.async.t33394.cljs$lang$ctorStr = "cljs.core.async/t33394";
cljs.core.async.t33394.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33394");
});
cljs.core.async.t33394.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33396){var self__ = this;
var _33396__$1 = this;return self__.meta33395;
});
cljs.core.async.t33394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33396,meta33395__$1){var self__ = this;
var _33396__$1 = this;return (new cljs.core.async.t33394(self__.flag,self__.alt_flag,meta33395__$1));
});
cljs.core.async.__GT_t33394 = (function __GT_t33394(flag__$1,alt_flag__$1,meta33395){return (new cljs.core.async.t33394(flag__$1,alt_flag__$1,meta33395));
});
}
return (new cljs.core.async.t33394(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33400 = (function (cb,flag,alt_handler,meta33401){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33401 = meta33401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33400.cljs$lang$type = true;
cljs.core.async.t33400.cljs$lang$ctorStr = "cljs.core.async/t33400";
cljs.core.async.t33400.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33400");
});
cljs.core.async.t33400.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33402){var self__ = this;
var _33402__$1 = this;return self__.meta33401;
});
cljs.core.async.t33400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33402,meta33401__$1){var self__ = this;
var _33402__$1 = this;return (new cljs.core.async.t33400(self__.cb,self__.flag,self__.alt_handler,meta33401__$1));
});
cljs.core.async.__GT_t33400 = (function __GT_t33400(cb__$1,flag__$1,alt_handler__$1,meta33401){return (new cljs.core.async.t33400(cb__$1,flag__$1,alt_handler__$1,meta33401));
});
}
return (new cljs.core.async.t33400(cb,flag,alt_handler,null));
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
return (function (p1__33403_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33403_SHARP_,port], null));
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
var G__33404 = (i + 1);
i = G__33404;
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
var alts_BANG___delegate = function (ports,p__33405){var map__33407 = p__33405;var map__33407__$1 = ((cljs.core.seq_QMARK_.call(null,map__33407))?cljs.core.apply.call(null,cljs.core.hash_map,map__33407):map__33407);var opts = map__33407__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33405 = null;if (arguments.length > 1) {
  p__33405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33405);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33408){
var ports = cljs.core.first(arglist__33408);
var p__33405 = cljs.core.rest(arglist__33408);
return alts_BANG___delegate(ports,p__33405);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33416 = (function (ch,f,map_LT_,meta33417){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33417 = meta33417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33416.cljs$lang$type = true;
cljs.core.async.t33416.cljs$lang$ctorStr = "cljs.core.async/t33416";
cljs.core.async.t33416.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33416");
});
cljs.core.async.t33416.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33416.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33419 = (function (fn1,_,meta33417,ch,f,map_LT_,meta33420){
this.fn1 = fn1;
this._ = _;
this.meta33417 = meta33417;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33420 = meta33420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33419.cljs$lang$type = true;
cljs.core.async.t33419.cljs$lang$ctorStr = "cljs.core.async/t33419";
cljs.core.async.t33419.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33419");
});
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33409_SHARP_){return f1.call(null,(((p1__33409_SHARP_ == null))?null:self__.f.call(null,p1__33409_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33421){var self__ = this;
var _33421__$1 = this;return self__.meta33420;
});
cljs.core.async.t33419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33421,meta33420__$1){var self__ = this;
var _33421__$1 = this;return (new cljs.core.async.t33419(self__.fn1,self__._,self__.meta33417,self__.ch,self__.f,self__.map_LT_,meta33420__$1));
});
cljs.core.async.__GT_t33419 = (function __GT_t33419(fn1__$1,___$2,meta33417__$1,ch__$2,f__$2,map_LT___$2,meta33420){return (new cljs.core.async.t33419(fn1__$1,___$2,meta33417__$1,ch__$2,f__$2,map_LT___$2,meta33420));
});
}
return (new cljs.core.async.t33419(fn1,___$1,self__.meta33417,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33416.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33418){var self__ = this;
var _33418__$1 = this;return self__.meta33417;
});
cljs.core.async.t33416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33418,meta33417__$1){var self__ = this;
var _33418__$1 = this;return (new cljs.core.async.t33416(self__.ch,self__.f,self__.map_LT_,meta33417__$1));
});
cljs.core.async.__GT_t33416 = (function __GT_t33416(ch__$1,f__$1,map_LT___$1,meta33417){return (new cljs.core.async.t33416(ch__$1,f__$1,map_LT___$1,meta33417));
});
}
return (new cljs.core.async.t33416(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33425 = (function (ch,f,map_GT_,meta33426){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33426 = meta33426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33425.cljs$lang$type = true;
cljs.core.async.t33425.cljs$lang$ctorStr = "cljs.core.async/t33425";
cljs.core.async.t33425.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33425");
});
cljs.core.async.t33425.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33425.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33425.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33427){var self__ = this;
var _33427__$1 = this;return self__.meta33426;
});
cljs.core.async.t33425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33427,meta33426__$1){var self__ = this;
var _33427__$1 = this;return (new cljs.core.async.t33425(self__.ch,self__.f,self__.map_GT_,meta33426__$1));
});
cljs.core.async.__GT_t33425 = (function __GT_t33425(ch__$1,f__$1,map_GT___$1,meta33426){return (new cljs.core.async.t33425(ch__$1,f__$1,map_GT___$1,meta33426));
});
}
return (new cljs.core.async.t33425(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33431 = (function (ch,p,filter_GT_,meta33432){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33432 = meta33432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33431.cljs$lang$type = true;
cljs.core.async.t33431.cljs$lang$ctorStr = "cljs.core.async/t33431";
cljs.core.async.t33431.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33431");
});
cljs.core.async.t33431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33431.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33433){var self__ = this;
var _33433__$1 = this;return self__.meta33432;
});
cljs.core.async.t33431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33433,meta33432__$1){var self__ = this;
var _33433__$1 = this;return (new cljs.core.async.t33431(self__.ch,self__.p,self__.filter_GT_,meta33432__$1));
});
cljs.core.async.__GT_t33431 = (function __GT_t33431(ch__$1,p__$1,filter_GT___$1,meta33432){return (new cljs.core.async.t33431(ch__$1,p__$1,filter_GT___$1,meta33432));
});
}
return (new cljs.core.async.t33431(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33495){var state_val_33496 = (state_33495[1]);if((state_val_33496 === 1))
{var state_33495__$1 = state_33495;var statearr_33497_33517 = state_33495__$1;(statearr_33497_33517[2] = null);
(statearr_33497_33517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33496 === 2))
{var state_33495__$1 = state_33495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33495__$1,4,ch);
} else
{if((state_val_33496 === 3))
{var inst_33493 = (state_33495[2]);var state_33495__$1 = state_33495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33495__$1,inst_33493);
} else
{if((state_val_33496 === 4))
{var inst_33477 = (state_33495[7]);var inst_33477__$1 = (state_33495[2]);var inst_33478 = (inst_33477__$1 == null);var state_33495__$1 = (function (){var statearr_33498 = state_33495;(statearr_33498[7] = inst_33477__$1);
return statearr_33498;
})();if(cljs.core.truth_(inst_33478))
{var statearr_33499_33518 = state_33495__$1;(statearr_33499_33518[1] = 5);
} else
{var statearr_33500_33519 = state_33495__$1;(statearr_33500_33519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33496 === 5))
{var inst_33480 = cljs.core.async.close_BANG_.call(null,out);var state_33495__$1 = state_33495;var statearr_33501_33520 = state_33495__$1;(statearr_33501_33520[2] = inst_33480);
(statearr_33501_33520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33496 === 6))
{var inst_33477 = (state_33495[7]);var inst_33482 = p.call(null,inst_33477);var state_33495__$1 = state_33495;if(cljs.core.truth_(inst_33482))
{var statearr_33502_33521 = state_33495__$1;(statearr_33502_33521[1] = 8);
} else
{var statearr_33503_33522 = state_33495__$1;(statearr_33503_33522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33496 === 7))
{var inst_33491 = (state_33495[2]);var state_33495__$1 = state_33495;var statearr_33504_33523 = state_33495__$1;(statearr_33504_33523[2] = inst_33491);
(statearr_33504_33523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33496 === 8))
{var inst_33477 = (state_33495[7]);var state_33495__$1 = state_33495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33495__$1,11,out,inst_33477);
} else
{if((state_val_33496 === 9))
{var state_33495__$1 = state_33495;var statearr_33505_33524 = state_33495__$1;(statearr_33505_33524[2] = null);
(statearr_33505_33524[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33496 === 10))
{var inst_33488 = (state_33495[2]);var state_33495__$1 = (function (){var statearr_33506 = state_33495;(statearr_33506[8] = inst_33488);
return statearr_33506;
})();var statearr_33507_33525 = state_33495__$1;(statearr_33507_33525[2] = null);
(statearr_33507_33525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33496 === 11))
{var inst_33485 = (state_33495[2]);var state_33495__$1 = state_33495;var statearr_33508_33526 = state_33495__$1;(statearr_33508_33526[2] = inst_33485);
(statearr_33508_33526[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33512 = [null,null,null,null,null,null,null,null,null];(statearr_33512[0] = state_machine__5507__auto__);
(statearr_33512[1] = 1);
return statearr_33512;
});
var state_machine__5507__auto____1 = (function (state_33495){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33513){if((e33513 instanceof Object))
{var ex__5510__auto__ = e33513;var statearr_33514_33527 = state_33495;(statearr_33514_33527[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33528 = state_33495;
state_33495 = G__33528;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33495){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33515 = f__5522__auto__.call(null);(statearr_33515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33516);
return statearr_33515;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33680){var state_val_33681 = (state_33680[1]);if((state_val_33681 === 1))
{var state_33680__$1 = state_33680;var statearr_33682_33719 = state_33680__$1;(statearr_33682_33719[2] = null);
(statearr_33682_33719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 2))
{var state_33680__$1 = state_33680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33680__$1,4,in$);
} else
{if((state_val_33681 === 3))
{var inst_33678 = (state_33680[2]);var state_33680__$1 = state_33680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33680__$1,inst_33678);
} else
{if((state_val_33681 === 4))
{var inst_33626 = (state_33680[7]);var inst_33626__$1 = (state_33680[2]);var inst_33627 = (inst_33626__$1 == null);var state_33680__$1 = (function (){var statearr_33683 = state_33680;(statearr_33683[7] = inst_33626__$1);
return statearr_33683;
})();if(cljs.core.truth_(inst_33627))
{var statearr_33684_33720 = state_33680__$1;(statearr_33684_33720[1] = 5);
} else
{var statearr_33685_33721 = state_33680__$1;(statearr_33685_33721[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 5))
{var inst_33629 = cljs.core.async.close_BANG_.call(null,out);var state_33680__$1 = state_33680;var statearr_33686_33722 = state_33680__$1;(statearr_33686_33722[2] = inst_33629);
(statearr_33686_33722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 6))
{var inst_33626 = (state_33680[7]);var inst_33631 = f.call(null,inst_33626);var inst_33636 = cljs.core.seq.call(null,inst_33631);var inst_33637 = inst_33636;var inst_33638 = null;var inst_33639 = 0;var inst_33640 = 0;var state_33680__$1 = (function (){var statearr_33687 = state_33680;(statearr_33687[8] = inst_33640);
(statearr_33687[9] = inst_33637);
(statearr_33687[10] = inst_33639);
(statearr_33687[11] = inst_33638);
return statearr_33687;
})();var statearr_33688_33723 = state_33680__$1;(statearr_33688_33723[2] = null);
(statearr_33688_33723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 7))
{var inst_33676 = (state_33680[2]);var state_33680__$1 = state_33680;var statearr_33689_33724 = state_33680__$1;(statearr_33689_33724[2] = inst_33676);
(statearr_33689_33724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 8))
{var inst_33640 = (state_33680[8]);var inst_33639 = (state_33680[10]);var inst_33642 = (inst_33640 < inst_33639);var inst_33643 = inst_33642;var state_33680__$1 = state_33680;if(cljs.core.truth_(inst_33643))
{var statearr_33690_33725 = state_33680__$1;(statearr_33690_33725[1] = 10);
} else
{var statearr_33691_33726 = state_33680__$1;(statearr_33691_33726[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 9))
{var inst_33673 = (state_33680[2]);var state_33680__$1 = (function (){var statearr_33692 = state_33680;(statearr_33692[12] = inst_33673);
return statearr_33692;
})();var statearr_33693_33727 = state_33680__$1;(statearr_33693_33727[2] = null);
(statearr_33693_33727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 10))
{var inst_33640 = (state_33680[8]);var inst_33638 = (state_33680[11]);var inst_33645 = cljs.core._nth.call(null,inst_33638,inst_33640);var state_33680__$1 = state_33680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33680__$1,13,out,inst_33645);
} else
{if((state_val_33681 === 11))
{var inst_33637 = (state_33680[9]);var inst_33651 = (state_33680[13]);var inst_33651__$1 = cljs.core.seq.call(null,inst_33637);var state_33680__$1 = (function (){var statearr_33697 = state_33680;(statearr_33697[13] = inst_33651__$1);
return statearr_33697;
})();if(inst_33651__$1)
{var statearr_33698_33728 = state_33680__$1;(statearr_33698_33728[1] = 14);
} else
{var statearr_33699_33729 = state_33680__$1;(statearr_33699_33729[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 12))
{var inst_33671 = (state_33680[2]);var state_33680__$1 = state_33680;var statearr_33700_33730 = state_33680__$1;(statearr_33700_33730[2] = inst_33671);
(statearr_33700_33730[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 13))
{var inst_33640 = (state_33680[8]);var inst_33637 = (state_33680[9]);var inst_33639 = (state_33680[10]);var inst_33638 = (state_33680[11]);var inst_33647 = (state_33680[2]);var inst_33648 = (inst_33640 + 1);var tmp33694 = inst_33637;var tmp33695 = inst_33639;var tmp33696 = inst_33638;var inst_33637__$1 = tmp33694;var inst_33638__$1 = tmp33696;var inst_33639__$1 = tmp33695;var inst_33640__$1 = inst_33648;var state_33680__$1 = (function (){var statearr_33701 = state_33680;(statearr_33701[14] = inst_33647);
(statearr_33701[8] = inst_33640__$1);
(statearr_33701[9] = inst_33637__$1);
(statearr_33701[10] = inst_33639__$1);
(statearr_33701[11] = inst_33638__$1);
return statearr_33701;
})();var statearr_33702_33731 = state_33680__$1;(statearr_33702_33731[2] = null);
(statearr_33702_33731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 14))
{var inst_33651 = (state_33680[13]);var inst_33653 = cljs.core.chunked_seq_QMARK_.call(null,inst_33651);var state_33680__$1 = state_33680;if(inst_33653)
{var statearr_33703_33732 = state_33680__$1;(statearr_33703_33732[1] = 17);
} else
{var statearr_33704_33733 = state_33680__$1;(statearr_33704_33733[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 15))
{var state_33680__$1 = state_33680;var statearr_33705_33734 = state_33680__$1;(statearr_33705_33734[2] = null);
(statearr_33705_33734[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 16))
{var inst_33669 = (state_33680[2]);var state_33680__$1 = state_33680;var statearr_33706_33735 = state_33680__$1;(statearr_33706_33735[2] = inst_33669);
(statearr_33706_33735[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 17))
{var inst_33651 = (state_33680[13]);var inst_33655 = cljs.core.chunk_first.call(null,inst_33651);var inst_33656 = cljs.core.chunk_rest.call(null,inst_33651);var inst_33657 = cljs.core.count.call(null,inst_33655);var inst_33637 = inst_33656;var inst_33638 = inst_33655;var inst_33639 = inst_33657;var inst_33640 = 0;var state_33680__$1 = (function (){var statearr_33707 = state_33680;(statearr_33707[8] = inst_33640);
(statearr_33707[9] = inst_33637);
(statearr_33707[10] = inst_33639);
(statearr_33707[11] = inst_33638);
return statearr_33707;
})();var statearr_33708_33736 = state_33680__$1;(statearr_33708_33736[2] = null);
(statearr_33708_33736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 18))
{var inst_33651 = (state_33680[13]);var inst_33660 = cljs.core.first.call(null,inst_33651);var state_33680__$1 = state_33680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33680__$1,20,out,inst_33660);
} else
{if((state_val_33681 === 19))
{var inst_33666 = (state_33680[2]);var state_33680__$1 = state_33680;var statearr_33709_33737 = state_33680__$1;(statearr_33709_33737[2] = inst_33666);
(statearr_33709_33737[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33681 === 20))
{var inst_33651 = (state_33680[13]);var inst_33662 = (state_33680[2]);var inst_33663 = cljs.core.next.call(null,inst_33651);var inst_33637 = inst_33663;var inst_33638 = null;var inst_33639 = 0;var inst_33640 = 0;var state_33680__$1 = (function (){var statearr_33710 = state_33680;(statearr_33710[8] = inst_33640);
(statearr_33710[15] = inst_33662);
(statearr_33710[9] = inst_33637);
(statearr_33710[10] = inst_33639);
(statearr_33710[11] = inst_33638);
return statearr_33710;
})();var statearr_33711_33738 = state_33680__$1;(statearr_33711_33738[2] = null);
(statearr_33711_33738[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33715[0] = state_machine__5507__auto__);
(statearr_33715[1] = 1);
return statearr_33715;
});
var state_machine__5507__auto____1 = (function (state_33680){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33716){if((e33716 instanceof Object))
{var ex__5510__auto__ = e33716;var statearr_33717_33739 = state_33680;(statearr_33717_33739[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33740 = state_33680;
state_33680 = G__33740;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33680){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33718 = f__5522__auto__.call(null);(statearr_33718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33718;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33821 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33800){var state_val_33801 = (state_33800[1]);if((state_val_33801 === 1))
{var state_33800__$1 = state_33800;var statearr_33802_33822 = state_33800__$1;(statearr_33802_33822[2] = null);
(statearr_33802_33822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33801 === 2))
{var state_33800__$1 = state_33800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33800__$1,4,from);
} else
{if((state_val_33801 === 3))
{var inst_33798 = (state_33800[2]);var state_33800__$1 = state_33800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33800__$1,inst_33798);
} else
{if((state_val_33801 === 4))
{var inst_33783 = (state_33800[7]);var inst_33783__$1 = (state_33800[2]);var inst_33784 = (inst_33783__$1 == null);var state_33800__$1 = (function (){var statearr_33803 = state_33800;(statearr_33803[7] = inst_33783__$1);
return statearr_33803;
})();if(cljs.core.truth_(inst_33784))
{var statearr_33804_33823 = state_33800__$1;(statearr_33804_33823[1] = 5);
} else
{var statearr_33805_33824 = state_33800__$1;(statearr_33805_33824[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33801 === 5))
{var state_33800__$1 = state_33800;if(cljs.core.truth_(close_QMARK_))
{var statearr_33806_33825 = state_33800__$1;(statearr_33806_33825[1] = 8);
} else
{var statearr_33807_33826 = state_33800__$1;(statearr_33807_33826[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33801 === 6))
{var inst_33783 = (state_33800[7]);var state_33800__$1 = state_33800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33800__$1,11,to,inst_33783);
} else
{if((state_val_33801 === 7))
{var inst_33796 = (state_33800[2]);var state_33800__$1 = state_33800;var statearr_33808_33827 = state_33800__$1;(statearr_33808_33827[2] = inst_33796);
(statearr_33808_33827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33801 === 8))
{var inst_33787 = cljs.core.async.close_BANG_.call(null,to);var state_33800__$1 = state_33800;var statearr_33809_33828 = state_33800__$1;(statearr_33809_33828[2] = inst_33787);
(statearr_33809_33828[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33801 === 9))
{var state_33800__$1 = state_33800;var statearr_33810_33829 = state_33800__$1;(statearr_33810_33829[2] = null);
(statearr_33810_33829[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33801 === 10))
{var inst_33790 = (state_33800[2]);var state_33800__$1 = state_33800;var statearr_33811_33830 = state_33800__$1;(statearr_33811_33830[2] = inst_33790);
(statearr_33811_33830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33801 === 11))
{var inst_33793 = (state_33800[2]);var state_33800__$1 = (function (){var statearr_33812 = state_33800;(statearr_33812[8] = inst_33793);
return statearr_33812;
})();var statearr_33813_33831 = state_33800__$1;(statearr_33813_33831[2] = null);
(statearr_33813_33831[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33817 = [null,null,null,null,null,null,null,null,null];(statearr_33817[0] = state_machine__5507__auto__);
(statearr_33817[1] = 1);
return statearr_33817;
});
var state_machine__5507__auto____1 = (function (state_33800){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33800);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33818){if((e33818 instanceof Object))
{var ex__5510__auto__ = e33818;var statearr_33819_33832 = state_33800;(statearr_33819_33832[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33833 = state_33800;
state_33800 = G__33833;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33800){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33820 = f__5522__auto__.call(null);(statearr_33820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33821);
return statearr_33820;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33898){var state_val_33899 = (state_33898[1]);if((state_val_33899 === 1))
{var state_33898__$1 = state_33898;var statearr_33900_33921 = state_33898__$1;(statearr_33900_33921[2] = null);
(statearr_33900_33921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 2))
{var state_33898__$1 = state_33898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33898__$1,4,ch);
} else
{if((state_val_33899 === 3))
{var inst_33896 = (state_33898[2]);var state_33898__$1 = state_33898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33898__$1,inst_33896);
} else
{if((state_val_33899 === 4))
{var inst_33879 = (state_33898[7]);var inst_33879__$1 = (state_33898[2]);var inst_33880 = (inst_33879__$1 == null);var state_33898__$1 = (function (){var statearr_33901 = state_33898;(statearr_33901[7] = inst_33879__$1);
return statearr_33901;
})();if(cljs.core.truth_(inst_33880))
{var statearr_33902_33922 = state_33898__$1;(statearr_33902_33922[1] = 5);
} else
{var statearr_33903_33923 = state_33898__$1;(statearr_33903_33923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 5))
{var inst_33882 = cljs.core.async.close_BANG_.call(null,tc);var inst_33883 = cljs.core.async.close_BANG_.call(null,fc);var state_33898__$1 = (function (){var statearr_33904 = state_33898;(statearr_33904[8] = inst_33882);
return statearr_33904;
})();var statearr_33905_33924 = state_33898__$1;(statearr_33905_33924[2] = inst_33883);
(statearr_33905_33924[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 6))
{var inst_33879 = (state_33898[7]);var inst_33885 = p.call(null,inst_33879);var state_33898__$1 = state_33898;if(cljs.core.truth_(inst_33885))
{var statearr_33906_33925 = state_33898__$1;(statearr_33906_33925[1] = 9);
} else
{var statearr_33907_33926 = state_33898__$1;(statearr_33907_33926[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 7))
{var inst_33894 = (state_33898[2]);var state_33898__$1 = state_33898;var statearr_33908_33927 = state_33898__$1;(statearr_33908_33927[2] = inst_33894);
(statearr_33908_33927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 8))
{var inst_33891 = (state_33898[2]);var state_33898__$1 = (function (){var statearr_33909 = state_33898;(statearr_33909[9] = inst_33891);
return statearr_33909;
})();var statearr_33910_33928 = state_33898__$1;(statearr_33910_33928[2] = null);
(statearr_33910_33928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 9))
{var state_33898__$1 = state_33898;var statearr_33911_33929 = state_33898__$1;(statearr_33911_33929[2] = tc);
(statearr_33911_33929[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 10))
{var state_33898__$1 = state_33898;var statearr_33912_33930 = state_33898__$1;(statearr_33912_33930[2] = fc);
(statearr_33912_33930[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33899 === 11))
{var inst_33879 = (state_33898[7]);var inst_33889 = (state_33898[2]);var state_33898__$1 = state_33898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33898__$1,8,inst_33889,inst_33879);
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
var state_machine__5507__auto____0 = (function (){var statearr_33916 = [null,null,null,null,null,null,null,null,null,null];(statearr_33916[0] = state_machine__5507__auto__);
(statearr_33916[1] = 1);
return statearr_33916;
});
var state_machine__5507__auto____1 = (function (state_33898){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33917){if((e33917 instanceof Object))
{var ex__5510__auto__ = e33917;var statearr_33918_33931 = state_33898;(statearr_33918_33931[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33932 = state_33898;
state_33898 = G__33932;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33898){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33919 = f__5522__auto__.call(null);(statearr_33919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33920);
return statearr_33919;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33979){var state_val_33980 = (state_33979[1]);if((state_val_33980 === 7))
{var inst_33975 = (state_33979[2]);var state_33979__$1 = state_33979;var statearr_33981_33997 = state_33979__$1;(statearr_33981_33997[2] = inst_33975);
(statearr_33981_33997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 6))
{var inst_33968 = (state_33979[7]);var inst_33965 = (state_33979[8]);var inst_33972 = f.call(null,inst_33965,inst_33968);var inst_33965__$1 = inst_33972;var state_33979__$1 = (function (){var statearr_33982 = state_33979;(statearr_33982[8] = inst_33965__$1);
return statearr_33982;
})();var statearr_33983_33998 = state_33979__$1;(statearr_33983_33998[2] = null);
(statearr_33983_33998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 5))
{var inst_33965 = (state_33979[8]);var state_33979__$1 = state_33979;var statearr_33984_33999 = state_33979__$1;(statearr_33984_33999[2] = inst_33965);
(statearr_33984_33999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 4))
{var inst_33968 = (state_33979[7]);var inst_33968__$1 = (state_33979[2]);var inst_33969 = (inst_33968__$1 == null);var state_33979__$1 = (function (){var statearr_33985 = state_33979;(statearr_33985[7] = inst_33968__$1);
return statearr_33985;
})();if(cljs.core.truth_(inst_33969))
{var statearr_33986_34000 = state_33979__$1;(statearr_33986_34000[1] = 5);
} else
{var statearr_33987_34001 = state_33979__$1;(statearr_33987_34001[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 3))
{var inst_33977 = (state_33979[2]);var state_33979__$1 = state_33979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33979__$1,inst_33977);
} else
{if((state_val_33980 === 2))
{var state_33979__$1 = state_33979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33979__$1,4,ch);
} else
{if((state_val_33980 === 1))
{var inst_33965 = init;var state_33979__$1 = (function (){var statearr_33988 = state_33979;(statearr_33988[8] = inst_33965);
return statearr_33988;
})();var statearr_33989_34002 = state_33979__$1;(statearr_33989_34002[2] = null);
(statearr_33989_34002[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33993 = [null,null,null,null,null,null,null,null,null];(statearr_33993[0] = state_machine__5507__auto__);
(statearr_33993[1] = 1);
return statearr_33993;
});
var state_machine__5507__auto____1 = (function (state_33979){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33994){if((e33994 instanceof Object))
{var ex__5510__auto__ = e33994;var statearr_33995_34003 = state_33979;(statearr_33995_34003[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34004 = state_33979;
state_33979 = G__34004;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33979){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33996 = f__5522__auto__.call(null);(statearr_33996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33996;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34066){var state_val_34067 = (state_34066[1]);if((state_val_34067 === 1))
{var inst_34046 = cljs.core.seq.call(null,coll);var inst_34047 = inst_34046;var state_34066__$1 = (function (){var statearr_34068 = state_34066;(statearr_34068[7] = inst_34047);
return statearr_34068;
})();var statearr_34069_34087 = state_34066__$1;(statearr_34069_34087[2] = null);
(statearr_34069_34087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34067 === 2))
{var inst_34047 = (state_34066[7]);var state_34066__$1 = state_34066;if(cljs.core.truth_(inst_34047))
{var statearr_34070_34088 = state_34066__$1;(statearr_34070_34088[1] = 4);
} else
{var statearr_34071_34089 = state_34066__$1;(statearr_34071_34089[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34067 === 3))
{var inst_34064 = (state_34066[2]);var state_34066__$1 = state_34066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34066__$1,inst_34064);
} else
{if((state_val_34067 === 4))
{var inst_34047 = (state_34066[7]);var inst_34050 = cljs.core.first.call(null,inst_34047);var state_34066__$1 = state_34066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34066__$1,7,ch,inst_34050);
} else
{if((state_val_34067 === 5))
{var state_34066__$1 = state_34066;if(cljs.core.truth_(close_QMARK_))
{var statearr_34072_34090 = state_34066__$1;(statearr_34072_34090[1] = 8);
} else
{var statearr_34073_34091 = state_34066__$1;(statearr_34073_34091[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34067 === 6))
{var inst_34062 = (state_34066[2]);var state_34066__$1 = state_34066;var statearr_34074_34092 = state_34066__$1;(statearr_34074_34092[2] = inst_34062);
(statearr_34074_34092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34067 === 7))
{var inst_34047 = (state_34066[7]);var inst_34052 = (state_34066[2]);var inst_34053 = cljs.core.next.call(null,inst_34047);var inst_34047__$1 = inst_34053;var state_34066__$1 = (function (){var statearr_34075 = state_34066;(statearr_34075[8] = inst_34052);
(statearr_34075[7] = inst_34047__$1);
return statearr_34075;
})();var statearr_34076_34093 = state_34066__$1;(statearr_34076_34093[2] = null);
(statearr_34076_34093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34067 === 8))
{var inst_34057 = cljs.core.async.close_BANG_.call(null,ch);var state_34066__$1 = state_34066;var statearr_34077_34094 = state_34066__$1;(statearr_34077_34094[2] = inst_34057);
(statearr_34077_34094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34067 === 9))
{var state_34066__$1 = state_34066;var statearr_34078_34095 = state_34066__$1;(statearr_34078_34095[2] = null);
(statearr_34078_34095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34067 === 10))
{var inst_34060 = (state_34066[2]);var state_34066__$1 = state_34066;var statearr_34079_34096 = state_34066__$1;(statearr_34079_34096[2] = inst_34060);
(statearr_34079_34096[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_34083 = [null,null,null,null,null,null,null,null,null];(statearr_34083[0] = state_machine__5507__auto__);
(statearr_34083[1] = 1);
return statearr_34083;
});
var state_machine__5507__auto____1 = (function (state_34066){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34066);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34084){if((e34084 instanceof Object))
{var ex__5510__auto__ = e34084;var statearr_34085_34097 = state_34066;(statearr_34085_34097[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34098 = state_34066;
state_34066 = G__34098;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34066){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34086 = f__5522__auto__.call(null);(statearr_34086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34086;
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
cljs.core.async.Mux = (function (){var obj34100 = {};return obj34100;
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
cljs.core.async.Mult = (function (){var obj34102 = {};return obj34102;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34326 = (function (cs,ch,mult,meta34327){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34327 = meta34327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34326.cljs$lang$type = true;
cljs.core.async.t34326.cljs$lang$ctorStr = "cljs.core.async/t34326";
cljs.core.async.t34326.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34326");
});})(cs))
;
cljs.core.async.t34326.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34326.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34326.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34326.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34326.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34328){var self__ = this;
var _34328__$1 = this;return self__.meta34327;
});})(cs))
;
cljs.core.async.t34326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34328,meta34327__$1){var self__ = this;
var _34328__$1 = this;return (new cljs.core.async.t34326(self__.cs,self__.ch,self__.mult,meta34327__$1));
});})(cs))
;
cljs.core.async.__GT_t34326 = ((function (cs){
return (function __GT_t34326(cs__$1,ch__$1,mult__$1,meta34327){return (new cljs.core.async.t34326(cs__$1,ch__$1,mult__$1,meta34327));
});})(cs))
;
}
return (new cljs.core.async.t34326(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34463){var state_val_34464 = (state_34463[1]);if((state_val_34464 === 32))
{var inst_34331 = (state_34463[7]);var inst_34407 = (state_34463[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34463,31,Object,null,30);var inst_34414 = cljs.core.async.put_BANG_.call(null,inst_34407,inst_34331,done);var state_34463__$1 = state_34463;var statearr_34465_34550 = state_34463__$1;(statearr_34465_34550[2] = inst_34414);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 1))
{var state_34463__$1 = state_34463;var statearr_34466_34551 = state_34463__$1;(statearr_34466_34551[2] = null);
(statearr_34466_34551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 33))
{var inst_34420 = (state_34463[9]);var inst_34422 = cljs.core.chunked_seq_QMARK_.call(null,inst_34420);var state_34463__$1 = state_34463;if(inst_34422)
{var statearr_34467_34552 = state_34463__$1;(statearr_34467_34552[1] = 36);
} else
{var statearr_34468_34553 = state_34463__$1;(statearr_34468_34553[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 2))
{var state_34463__$1 = state_34463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34463__$1,4,ch);
} else
{if((state_val_34464 === 34))
{var state_34463__$1 = state_34463;var statearr_34469_34554 = state_34463__$1;(statearr_34469_34554[2] = null);
(statearr_34469_34554[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 3))
{var inst_34461 = (state_34463[2]);var state_34463__$1 = state_34463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34463__$1,inst_34461);
} else
{if((state_val_34464 === 35))
{var inst_34445 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34470_34555 = state_34463__$1;(statearr_34470_34555[2] = inst_34445);
(statearr_34470_34555[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 4))
{var inst_34331 = (state_34463[7]);var inst_34331__$1 = (state_34463[2]);var inst_34332 = (inst_34331__$1 == null);var state_34463__$1 = (function (){var statearr_34471 = state_34463;(statearr_34471[7] = inst_34331__$1);
return statearr_34471;
})();if(cljs.core.truth_(inst_34332))
{var statearr_34472_34556 = state_34463__$1;(statearr_34472_34556[1] = 5);
} else
{var statearr_34473_34557 = state_34463__$1;(statearr_34473_34557[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 36))
{var inst_34420 = (state_34463[9]);var inst_34424 = cljs.core.chunk_first.call(null,inst_34420);var inst_34425 = cljs.core.chunk_rest.call(null,inst_34420);var inst_34426 = cljs.core.count.call(null,inst_34424);var inst_34399 = inst_34425;var inst_34400 = inst_34424;var inst_34401 = inst_34426;var inst_34402 = 0;var state_34463__$1 = (function (){var statearr_34474 = state_34463;(statearr_34474[10] = inst_34402);
(statearr_34474[11] = inst_34401);
(statearr_34474[12] = inst_34400);
(statearr_34474[13] = inst_34399);
return statearr_34474;
})();var statearr_34475_34558 = state_34463__$1;(statearr_34475_34558[2] = null);
(statearr_34475_34558[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 5))
{var inst_34338 = cljs.core.deref.call(null,cs);var inst_34339 = cljs.core.seq.call(null,inst_34338);var inst_34340 = inst_34339;var inst_34341 = null;var inst_34342 = 0;var inst_34343 = 0;var state_34463__$1 = (function (){var statearr_34476 = state_34463;(statearr_34476[14] = inst_34341);
(statearr_34476[15] = inst_34342);
(statearr_34476[16] = inst_34340);
(statearr_34476[17] = inst_34343);
return statearr_34476;
})();var statearr_34477_34559 = state_34463__$1;(statearr_34477_34559[2] = null);
(statearr_34477_34559[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 37))
{var inst_34420 = (state_34463[9]);var inst_34429 = cljs.core.first.call(null,inst_34420);var state_34463__$1 = (function (){var statearr_34478 = state_34463;(statearr_34478[18] = inst_34429);
return statearr_34478;
})();var statearr_34479_34560 = state_34463__$1;(statearr_34479_34560[2] = null);
(statearr_34479_34560[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 6))
{var inst_34391 = (state_34463[19]);var inst_34390 = cljs.core.deref.call(null,cs);var inst_34391__$1 = cljs.core.keys.call(null,inst_34390);var inst_34392 = cljs.core.count.call(null,inst_34391__$1);var inst_34393 = cljs.core.reset_BANG_.call(null,dctr,inst_34392);var inst_34398 = cljs.core.seq.call(null,inst_34391__$1);var inst_34399 = inst_34398;var inst_34400 = null;var inst_34401 = 0;var inst_34402 = 0;var state_34463__$1 = (function (){var statearr_34480 = state_34463;(statearr_34480[10] = inst_34402);
(statearr_34480[11] = inst_34401);
(statearr_34480[12] = inst_34400);
(statearr_34480[13] = inst_34399);
(statearr_34480[19] = inst_34391__$1);
(statearr_34480[20] = inst_34393);
return statearr_34480;
})();var statearr_34481_34561 = state_34463__$1;(statearr_34481_34561[2] = null);
(statearr_34481_34561[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 38))
{var inst_34442 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34482_34562 = state_34463__$1;(statearr_34482_34562[2] = inst_34442);
(statearr_34482_34562[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 7))
{var inst_34459 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34483_34563 = state_34463__$1;(statearr_34483_34563[2] = inst_34459);
(statearr_34483_34563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 39))
{var inst_34420 = (state_34463[9]);var inst_34438 = (state_34463[2]);var inst_34439 = cljs.core.next.call(null,inst_34420);var inst_34399 = inst_34439;var inst_34400 = null;var inst_34401 = 0;var inst_34402 = 0;var state_34463__$1 = (function (){var statearr_34484 = state_34463;(statearr_34484[10] = inst_34402);
(statearr_34484[11] = inst_34401);
(statearr_34484[12] = inst_34400);
(statearr_34484[21] = inst_34438);
(statearr_34484[13] = inst_34399);
return statearr_34484;
})();var statearr_34485_34564 = state_34463__$1;(statearr_34485_34564[2] = null);
(statearr_34485_34564[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 8))
{var inst_34342 = (state_34463[15]);var inst_34343 = (state_34463[17]);var inst_34345 = (inst_34343 < inst_34342);var inst_34346 = inst_34345;var state_34463__$1 = state_34463;if(cljs.core.truth_(inst_34346))
{var statearr_34486_34565 = state_34463__$1;(statearr_34486_34565[1] = 10);
} else
{var statearr_34487_34566 = state_34463__$1;(statearr_34487_34566[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 40))
{var inst_34429 = (state_34463[18]);var inst_34430 = (state_34463[2]);var inst_34431 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34432 = cljs.core.async.untap_STAR_.call(null,m,inst_34429);var state_34463__$1 = (function (){var statearr_34488 = state_34463;(statearr_34488[22] = inst_34431);
(statearr_34488[23] = inst_34430);
return statearr_34488;
})();var statearr_34489_34567 = state_34463__$1;(statearr_34489_34567[2] = inst_34432);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 9))
{var inst_34388 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34490_34568 = state_34463__$1;(statearr_34490_34568[2] = inst_34388);
(statearr_34490_34568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 41))
{var inst_34429 = (state_34463[18]);var inst_34331 = (state_34463[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34463,40,Object,null,39);var inst_34436 = cljs.core.async.put_BANG_.call(null,inst_34429,inst_34331,done);var state_34463__$1 = state_34463;var statearr_34491_34569 = state_34463__$1;(statearr_34491_34569[2] = inst_34436);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 10))
{var inst_34341 = (state_34463[14]);var inst_34343 = (state_34463[17]);var inst_34349 = cljs.core._nth.call(null,inst_34341,inst_34343);var inst_34350 = cljs.core.nth.call(null,inst_34349,0,null);var inst_34351 = cljs.core.nth.call(null,inst_34349,1,null);var state_34463__$1 = (function (){var statearr_34492 = state_34463;(statearr_34492[24] = inst_34350);
return statearr_34492;
})();if(cljs.core.truth_(inst_34351))
{var statearr_34493_34570 = state_34463__$1;(statearr_34493_34570[1] = 13);
} else
{var statearr_34494_34571 = state_34463__$1;(statearr_34494_34571[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 42))
{var state_34463__$1 = state_34463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34463__$1,45,dchan);
} else
{if((state_val_34464 === 11))
{var inst_34360 = (state_34463[25]);var inst_34340 = (state_34463[16]);var inst_34360__$1 = cljs.core.seq.call(null,inst_34340);var state_34463__$1 = (function (){var statearr_34495 = state_34463;(statearr_34495[25] = inst_34360__$1);
return statearr_34495;
})();if(inst_34360__$1)
{var statearr_34496_34572 = state_34463__$1;(statearr_34496_34572[1] = 16);
} else
{var statearr_34497_34573 = state_34463__$1;(statearr_34497_34573[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 43))
{var state_34463__$1 = state_34463;var statearr_34498_34574 = state_34463__$1;(statearr_34498_34574[2] = null);
(statearr_34498_34574[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 12))
{var inst_34386 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34499_34575 = state_34463__$1;(statearr_34499_34575[2] = inst_34386);
(statearr_34499_34575[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 44))
{var inst_34456 = (state_34463[2]);var state_34463__$1 = (function (){var statearr_34500 = state_34463;(statearr_34500[26] = inst_34456);
return statearr_34500;
})();var statearr_34501_34576 = state_34463__$1;(statearr_34501_34576[2] = null);
(statearr_34501_34576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 13))
{var inst_34350 = (state_34463[24]);var inst_34353 = cljs.core.async.close_BANG_.call(null,inst_34350);var state_34463__$1 = state_34463;var statearr_34502_34577 = state_34463__$1;(statearr_34502_34577[2] = inst_34353);
(statearr_34502_34577[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 45))
{var inst_34453 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34506_34578 = state_34463__$1;(statearr_34506_34578[2] = inst_34453);
(statearr_34506_34578[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 14))
{var state_34463__$1 = state_34463;var statearr_34507_34579 = state_34463__$1;(statearr_34507_34579[2] = null);
(statearr_34507_34579[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 15))
{var inst_34341 = (state_34463[14]);var inst_34342 = (state_34463[15]);var inst_34340 = (state_34463[16]);var inst_34343 = (state_34463[17]);var inst_34356 = (state_34463[2]);var inst_34357 = (inst_34343 + 1);var tmp34503 = inst_34341;var tmp34504 = inst_34342;var tmp34505 = inst_34340;var inst_34340__$1 = tmp34505;var inst_34341__$1 = tmp34503;var inst_34342__$1 = tmp34504;var inst_34343__$1 = inst_34357;var state_34463__$1 = (function (){var statearr_34508 = state_34463;(statearr_34508[14] = inst_34341__$1);
(statearr_34508[15] = inst_34342__$1);
(statearr_34508[16] = inst_34340__$1);
(statearr_34508[27] = inst_34356);
(statearr_34508[17] = inst_34343__$1);
return statearr_34508;
})();var statearr_34509_34580 = state_34463__$1;(statearr_34509_34580[2] = null);
(statearr_34509_34580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 16))
{var inst_34360 = (state_34463[25]);var inst_34362 = cljs.core.chunked_seq_QMARK_.call(null,inst_34360);var state_34463__$1 = state_34463;if(inst_34362)
{var statearr_34510_34581 = state_34463__$1;(statearr_34510_34581[1] = 19);
} else
{var statearr_34511_34582 = state_34463__$1;(statearr_34511_34582[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 17))
{var state_34463__$1 = state_34463;var statearr_34512_34583 = state_34463__$1;(statearr_34512_34583[2] = null);
(statearr_34512_34583[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 18))
{var inst_34384 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34513_34584 = state_34463__$1;(statearr_34513_34584[2] = inst_34384);
(statearr_34513_34584[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 19))
{var inst_34360 = (state_34463[25]);var inst_34364 = cljs.core.chunk_first.call(null,inst_34360);var inst_34365 = cljs.core.chunk_rest.call(null,inst_34360);var inst_34366 = cljs.core.count.call(null,inst_34364);var inst_34340 = inst_34365;var inst_34341 = inst_34364;var inst_34342 = inst_34366;var inst_34343 = 0;var state_34463__$1 = (function (){var statearr_34514 = state_34463;(statearr_34514[14] = inst_34341);
(statearr_34514[15] = inst_34342);
(statearr_34514[16] = inst_34340);
(statearr_34514[17] = inst_34343);
return statearr_34514;
})();var statearr_34515_34585 = state_34463__$1;(statearr_34515_34585[2] = null);
(statearr_34515_34585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 20))
{var inst_34360 = (state_34463[25]);var inst_34370 = cljs.core.first.call(null,inst_34360);var inst_34371 = cljs.core.nth.call(null,inst_34370,0,null);var inst_34372 = cljs.core.nth.call(null,inst_34370,1,null);var state_34463__$1 = (function (){var statearr_34516 = state_34463;(statearr_34516[28] = inst_34371);
return statearr_34516;
})();if(cljs.core.truth_(inst_34372))
{var statearr_34517_34586 = state_34463__$1;(statearr_34517_34586[1] = 22);
} else
{var statearr_34518_34587 = state_34463__$1;(statearr_34518_34587[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 21))
{var inst_34381 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34519_34588 = state_34463__$1;(statearr_34519_34588[2] = inst_34381);
(statearr_34519_34588[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 22))
{var inst_34371 = (state_34463[28]);var inst_34374 = cljs.core.async.close_BANG_.call(null,inst_34371);var state_34463__$1 = state_34463;var statearr_34520_34589 = state_34463__$1;(statearr_34520_34589[2] = inst_34374);
(statearr_34520_34589[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 23))
{var state_34463__$1 = state_34463;var statearr_34521_34590 = state_34463__$1;(statearr_34521_34590[2] = null);
(statearr_34521_34590[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 24))
{var inst_34360 = (state_34463[25]);var inst_34377 = (state_34463[2]);var inst_34378 = cljs.core.next.call(null,inst_34360);var inst_34340 = inst_34378;var inst_34341 = null;var inst_34342 = 0;var inst_34343 = 0;var state_34463__$1 = (function (){var statearr_34522 = state_34463;(statearr_34522[29] = inst_34377);
(statearr_34522[14] = inst_34341);
(statearr_34522[15] = inst_34342);
(statearr_34522[16] = inst_34340);
(statearr_34522[17] = inst_34343);
return statearr_34522;
})();var statearr_34523_34591 = state_34463__$1;(statearr_34523_34591[2] = null);
(statearr_34523_34591[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 25))
{var inst_34402 = (state_34463[10]);var inst_34401 = (state_34463[11]);var inst_34404 = (inst_34402 < inst_34401);var inst_34405 = inst_34404;var state_34463__$1 = state_34463;if(cljs.core.truth_(inst_34405))
{var statearr_34524_34592 = state_34463__$1;(statearr_34524_34592[1] = 27);
} else
{var statearr_34525_34593 = state_34463__$1;(statearr_34525_34593[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 26))
{var inst_34391 = (state_34463[19]);var inst_34449 = (state_34463[2]);var inst_34450 = cljs.core.seq.call(null,inst_34391);var state_34463__$1 = (function (){var statearr_34526 = state_34463;(statearr_34526[30] = inst_34449);
return statearr_34526;
})();if(inst_34450)
{var statearr_34527_34594 = state_34463__$1;(statearr_34527_34594[1] = 42);
} else
{var statearr_34528_34595 = state_34463__$1;(statearr_34528_34595[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 27))
{var inst_34402 = (state_34463[10]);var inst_34400 = (state_34463[12]);var inst_34407 = cljs.core._nth.call(null,inst_34400,inst_34402);var state_34463__$1 = (function (){var statearr_34529 = state_34463;(statearr_34529[8] = inst_34407);
return statearr_34529;
})();var statearr_34530_34596 = state_34463__$1;(statearr_34530_34596[2] = null);
(statearr_34530_34596[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 28))
{var inst_34399 = (state_34463[13]);var inst_34420 = (state_34463[9]);var inst_34420__$1 = cljs.core.seq.call(null,inst_34399);var state_34463__$1 = (function (){var statearr_34534 = state_34463;(statearr_34534[9] = inst_34420__$1);
return statearr_34534;
})();if(inst_34420__$1)
{var statearr_34535_34597 = state_34463__$1;(statearr_34535_34597[1] = 33);
} else
{var statearr_34536_34598 = state_34463__$1;(statearr_34536_34598[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 29))
{var inst_34447 = (state_34463[2]);var state_34463__$1 = state_34463;var statearr_34537_34599 = state_34463__$1;(statearr_34537_34599[2] = inst_34447);
(statearr_34537_34599[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 30))
{var inst_34402 = (state_34463[10]);var inst_34401 = (state_34463[11]);var inst_34400 = (state_34463[12]);var inst_34399 = (state_34463[13]);var inst_34416 = (state_34463[2]);var inst_34417 = (inst_34402 + 1);var tmp34531 = inst_34401;var tmp34532 = inst_34400;var tmp34533 = inst_34399;var inst_34399__$1 = tmp34533;var inst_34400__$1 = tmp34532;var inst_34401__$1 = tmp34531;var inst_34402__$1 = inst_34417;var state_34463__$1 = (function (){var statearr_34538 = state_34463;(statearr_34538[10] = inst_34402__$1);
(statearr_34538[11] = inst_34401__$1);
(statearr_34538[12] = inst_34400__$1);
(statearr_34538[13] = inst_34399__$1);
(statearr_34538[31] = inst_34416);
return statearr_34538;
})();var statearr_34539_34600 = state_34463__$1;(statearr_34539_34600[2] = null);
(statearr_34539_34600[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34464 === 31))
{var inst_34407 = (state_34463[8]);var inst_34408 = (state_34463[2]);var inst_34409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34410 = cljs.core.async.untap_STAR_.call(null,m,inst_34407);var state_34463__$1 = (function (){var statearr_34540 = state_34463;(statearr_34540[32] = inst_34409);
(statearr_34540[33] = inst_34408);
return statearr_34540;
})();var statearr_34541_34601 = state_34463__$1;(statearr_34541_34601[2] = inst_34410);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34463__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34545[0] = state_machine__5507__auto__);
(statearr_34545[1] = 1);
return statearr_34545;
});
var state_machine__5507__auto____1 = (function (state_34463){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34463);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34546){if((e34546 instanceof Object))
{var ex__5510__auto__ = e34546;var statearr_34547_34602 = state_34463;(statearr_34547_34602[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34603 = state_34463;
state_34463 = G__34603;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34463){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34548 = f__5522__auto__.call(null);(statearr_34548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34549);
return statearr_34548;
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
cljs.core.async.Mix = (function (){var obj34605 = {};return obj34605;
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
;var m = (function (){if(typeof cljs.core.async.t34715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34715 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34716){
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
this.meta34716 = meta34716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34715.cljs$lang$type = true;
cljs.core.async.t34715.cljs$lang$ctorStr = "cljs.core.async/t34715";
cljs.core.async.t34715.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34715");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34715.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34717){var self__ = this;
var _34717__$1 = this;return self__.meta34716;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34717,meta34716__$1){var self__ = this;
var _34717__$1 = this;return (new cljs.core.async.t34715(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34716__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34715 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34715(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34716){return (new cljs.core.async.t34715(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34716));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34715(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34782){var state_val_34783 = (state_34782[1]);if((state_val_34783 === 1))
{var inst_34721 = (state_34782[7]);var inst_34721__$1 = calc_state.call(null);var inst_34722 = cljs.core.seq_QMARK_.call(null,inst_34721__$1);var state_34782__$1 = (function (){var statearr_34784 = state_34782;(statearr_34784[7] = inst_34721__$1);
return statearr_34784;
})();if(inst_34722)
{var statearr_34785_34825 = state_34782__$1;(statearr_34785_34825[1] = 2);
} else
{var statearr_34786_34826 = state_34782__$1;(statearr_34786_34826[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 2))
{var inst_34721 = (state_34782[7]);var inst_34724 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34721);var state_34782__$1 = state_34782;var statearr_34787_34827 = state_34782__$1;(statearr_34787_34827[2] = inst_34724);
(statearr_34787_34827[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 3))
{var inst_34721 = (state_34782[7]);var state_34782__$1 = state_34782;var statearr_34788_34828 = state_34782__$1;(statearr_34788_34828[2] = inst_34721);
(statearr_34788_34828[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 4))
{var inst_34721 = (state_34782[7]);var inst_34727 = (state_34782[2]);var inst_34728 = cljs.core.get.call(null,inst_34727,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34729 = cljs.core.get.call(null,inst_34727,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34730 = cljs.core.get.call(null,inst_34727,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34731 = inst_34721;var state_34782__$1 = (function (){var statearr_34789 = state_34782;(statearr_34789[8] = inst_34731);
(statearr_34789[9] = inst_34730);
(statearr_34789[10] = inst_34728);
(statearr_34789[11] = inst_34729);
return statearr_34789;
})();var statearr_34790_34829 = state_34782__$1;(statearr_34790_34829[2] = null);
(statearr_34790_34829[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 5))
{var inst_34731 = (state_34782[8]);var inst_34734 = cljs.core.seq_QMARK_.call(null,inst_34731);var state_34782__$1 = state_34782;if(inst_34734)
{var statearr_34791_34830 = state_34782__$1;(statearr_34791_34830[1] = 7);
} else
{var statearr_34792_34831 = state_34782__$1;(statearr_34792_34831[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 6))
{var inst_34780 = (state_34782[2]);var state_34782__$1 = state_34782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34782__$1,inst_34780);
} else
{if((state_val_34783 === 7))
{var inst_34731 = (state_34782[8]);var inst_34736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34731);var state_34782__$1 = state_34782;var statearr_34793_34832 = state_34782__$1;(statearr_34793_34832[2] = inst_34736);
(statearr_34793_34832[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 8))
{var inst_34731 = (state_34782[8]);var state_34782__$1 = state_34782;var statearr_34794_34833 = state_34782__$1;(statearr_34794_34833[2] = inst_34731);
(statearr_34794_34833[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 9))
{var inst_34739 = (state_34782[12]);var inst_34739__$1 = (state_34782[2]);var inst_34740 = cljs.core.get.call(null,inst_34739__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34741 = cljs.core.get.call(null,inst_34739__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34742 = cljs.core.get.call(null,inst_34739__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34782__$1 = (function (){var statearr_34795 = state_34782;(statearr_34795[12] = inst_34739__$1);
(statearr_34795[13] = inst_34742);
(statearr_34795[14] = inst_34741);
return statearr_34795;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34782__$1,10,inst_34740);
} else
{if((state_val_34783 === 10))
{var inst_34747 = (state_34782[15]);var inst_34746 = (state_34782[16]);var inst_34745 = (state_34782[2]);var inst_34746__$1 = cljs.core.nth.call(null,inst_34745,0,null);var inst_34747__$1 = cljs.core.nth.call(null,inst_34745,1,null);var inst_34748 = (inst_34746__$1 == null);var inst_34749 = cljs.core._EQ_.call(null,inst_34747__$1,change);var inst_34750 = (inst_34748) || (inst_34749);var state_34782__$1 = (function (){var statearr_34796 = state_34782;(statearr_34796[15] = inst_34747__$1);
(statearr_34796[16] = inst_34746__$1);
return statearr_34796;
})();if(cljs.core.truth_(inst_34750))
{var statearr_34797_34834 = state_34782__$1;(statearr_34797_34834[1] = 11);
} else
{var statearr_34798_34835 = state_34782__$1;(statearr_34798_34835[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 11))
{var inst_34746 = (state_34782[16]);var inst_34752 = (inst_34746 == null);var state_34782__$1 = state_34782;if(cljs.core.truth_(inst_34752))
{var statearr_34799_34836 = state_34782__$1;(statearr_34799_34836[1] = 14);
} else
{var statearr_34800_34837 = state_34782__$1;(statearr_34800_34837[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 12))
{var inst_34747 = (state_34782[15]);var inst_34761 = (state_34782[17]);var inst_34742 = (state_34782[13]);var inst_34761__$1 = inst_34742.call(null,inst_34747);var state_34782__$1 = (function (){var statearr_34801 = state_34782;(statearr_34801[17] = inst_34761__$1);
return statearr_34801;
})();if(cljs.core.truth_(inst_34761__$1))
{var statearr_34802_34838 = state_34782__$1;(statearr_34802_34838[1] = 17);
} else
{var statearr_34803_34839 = state_34782__$1;(statearr_34803_34839[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 13))
{var inst_34778 = (state_34782[2]);var state_34782__$1 = state_34782;var statearr_34804_34840 = state_34782__$1;(statearr_34804_34840[2] = inst_34778);
(statearr_34804_34840[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 14))
{var inst_34747 = (state_34782[15]);var inst_34754 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34747);var state_34782__$1 = state_34782;var statearr_34805_34841 = state_34782__$1;(statearr_34805_34841[2] = inst_34754);
(statearr_34805_34841[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 15))
{var state_34782__$1 = state_34782;var statearr_34806_34842 = state_34782__$1;(statearr_34806_34842[2] = null);
(statearr_34806_34842[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 16))
{var inst_34757 = (state_34782[2]);var inst_34758 = calc_state.call(null);var inst_34731 = inst_34758;var state_34782__$1 = (function (){var statearr_34807 = state_34782;(statearr_34807[8] = inst_34731);
(statearr_34807[18] = inst_34757);
return statearr_34807;
})();var statearr_34808_34843 = state_34782__$1;(statearr_34808_34843[2] = null);
(statearr_34808_34843[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 17))
{var inst_34761 = (state_34782[17]);var state_34782__$1 = state_34782;var statearr_34809_34844 = state_34782__$1;(statearr_34809_34844[2] = inst_34761);
(statearr_34809_34844[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 18))
{var inst_34747 = (state_34782[15]);var inst_34742 = (state_34782[13]);var inst_34741 = (state_34782[14]);var inst_34764 = cljs.core.empty_QMARK_.call(null,inst_34742);var inst_34765 = inst_34741.call(null,inst_34747);var inst_34766 = cljs.core.not.call(null,inst_34765);var inst_34767 = (inst_34764) && (inst_34766);var state_34782__$1 = state_34782;var statearr_34810_34845 = state_34782__$1;(statearr_34810_34845[2] = inst_34767);
(statearr_34810_34845[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 19))
{var inst_34769 = (state_34782[2]);var state_34782__$1 = state_34782;if(cljs.core.truth_(inst_34769))
{var statearr_34811_34846 = state_34782__$1;(statearr_34811_34846[1] = 20);
} else
{var statearr_34812_34847 = state_34782__$1;(statearr_34812_34847[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 20))
{var inst_34746 = (state_34782[16]);var state_34782__$1 = state_34782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34782__$1,23,out,inst_34746);
} else
{if((state_val_34783 === 21))
{var state_34782__$1 = state_34782;var statearr_34813_34848 = state_34782__$1;(statearr_34813_34848[2] = null);
(statearr_34813_34848[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 22))
{var inst_34739 = (state_34782[12]);var inst_34775 = (state_34782[2]);var inst_34731 = inst_34739;var state_34782__$1 = (function (){var statearr_34814 = state_34782;(statearr_34814[19] = inst_34775);
(statearr_34814[8] = inst_34731);
return statearr_34814;
})();var statearr_34815_34849 = state_34782__$1;(statearr_34815_34849[2] = null);
(statearr_34815_34849[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34783 === 23))
{var inst_34772 = (state_34782[2]);var state_34782__$1 = state_34782;var statearr_34816_34850 = state_34782__$1;(statearr_34816_34850[2] = inst_34772);
(statearr_34816_34850[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34820[0] = state_machine__5507__auto__);
(statearr_34820[1] = 1);
return statearr_34820;
});
var state_machine__5507__auto____1 = (function (state_34782){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34821){if((e34821 instanceof Object))
{var ex__5510__auto__ = e34821;var statearr_34822_34851 = state_34782;(statearr_34822_34851[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34852 = state_34782;
state_34782 = G__34852;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34782){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34823 = f__5522__auto__.call(null);(statearr_34823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34824);
return statearr_34823;
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
cljs.core.async.Pub = (function (){var obj34854 = {};return obj34854;
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
return (function (p1__34855_SHARP_){if(cljs.core.truth_(p1__34855_SHARP_.call(null,topic)))
{return p1__34855_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34855_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34980 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34980 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34981){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34981 = meta34981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34980.cljs$lang$type = true;
cljs.core.async.t34980.cljs$lang$ctorStr = "cljs.core.async/t34980";
cljs.core.async.t34980.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34980");
});})(mults,ensure_mult))
;
cljs.core.async.t34980.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34980.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34980.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34980.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34982){var self__ = this;
var _34982__$1 = this;return self__.meta34981;
});})(mults,ensure_mult))
;
cljs.core.async.t34980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34982,meta34981__$1){var self__ = this;
var _34982__$1 = this;return (new cljs.core.async.t34980(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34981__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34980 = ((function (mults,ensure_mult){
return (function __GT_t34980(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34981){return (new cljs.core.async.t34980(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34981));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34980(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___35104 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35056){var state_val_35057 = (state_35056[1]);if((state_val_35057 === 1))
{var state_35056__$1 = state_35056;var statearr_35058_35105 = state_35056__$1;(statearr_35058_35105[2] = null);
(statearr_35058_35105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 2))
{var state_35056__$1 = state_35056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35056__$1,4,ch);
} else
{if((state_val_35057 === 3))
{var inst_35054 = (state_35056[2]);var state_35056__$1 = state_35056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35056__$1,inst_35054);
} else
{if((state_val_35057 === 4))
{var inst_34985 = (state_35056[7]);var inst_34985__$1 = (state_35056[2]);var inst_34986 = (inst_34985__$1 == null);var state_35056__$1 = (function (){var statearr_35059 = state_35056;(statearr_35059[7] = inst_34985__$1);
return statearr_35059;
})();if(cljs.core.truth_(inst_34986))
{var statearr_35060_35106 = state_35056__$1;(statearr_35060_35106[1] = 5);
} else
{var statearr_35061_35107 = state_35056__$1;(statearr_35061_35107[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 5))
{var inst_34992 = cljs.core.deref.call(null,mults);var inst_34993 = cljs.core.vals.call(null,inst_34992);var inst_34994 = cljs.core.seq.call(null,inst_34993);var inst_34995 = inst_34994;var inst_34996 = null;var inst_34997 = 0;var inst_34998 = 0;var state_35056__$1 = (function (){var statearr_35062 = state_35056;(statearr_35062[8] = inst_34996);
(statearr_35062[9] = inst_34997);
(statearr_35062[10] = inst_34998);
(statearr_35062[11] = inst_34995);
return statearr_35062;
})();var statearr_35063_35108 = state_35056__$1;(statearr_35063_35108[2] = null);
(statearr_35063_35108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 6))
{var inst_35035 = (state_35056[12]);var inst_35033 = (state_35056[13]);var inst_34985 = (state_35056[7]);var inst_35033__$1 = topic_fn.call(null,inst_34985);var inst_35034 = cljs.core.deref.call(null,mults);var inst_35035__$1 = cljs.core.get.call(null,inst_35034,inst_35033__$1);var state_35056__$1 = (function (){var statearr_35064 = state_35056;(statearr_35064[12] = inst_35035__$1);
(statearr_35064[13] = inst_35033__$1);
return statearr_35064;
})();if(cljs.core.truth_(inst_35035__$1))
{var statearr_35065_35109 = state_35056__$1;(statearr_35065_35109[1] = 19);
} else
{var statearr_35066_35110 = state_35056__$1;(statearr_35066_35110[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 7))
{var inst_35052 = (state_35056[2]);var state_35056__$1 = state_35056;var statearr_35067_35111 = state_35056__$1;(statearr_35067_35111[2] = inst_35052);
(statearr_35067_35111[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 8))
{var inst_34997 = (state_35056[9]);var inst_34998 = (state_35056[10]);var inst_35000 = (inst_34998 < inst_34997);var inst_35001 = inst_35000;var state_35056__$1 = state_35056;if(cljs.core.truth_(inst_35001))
{var statearr_35071_35112 = state_35056__$1;(statearr_35071_35112[1] = 10);
} else
{var statearr_35072_35113 = state_35056__$1;(statearr_35072_35113[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 9))
{var inst_35031 = (state_35056[2]);var state_35056__$1 = state_35056;var statearr_35073_35114 = state_35056__$1;(statearr_35073_35114[2] = inst_35031);
(statearr_35073_35114[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 10))
{var inst_34996 = (state_35056[8]);var inst_34997 = (state_35056[9]);var inst_34998 = (state_35056[10]);var inst_34995 = (state_35056[11]);var inst_35003 = cljs.core._nth.call(null,inst_34996,inst_34998);var inst_35004 = cljs.core.async.muxch_STAR_.call(null,inst_35003);var inst_35005 = cljs.core.async.close_BANG_.call(null,inst_35004);var inst_35006 = (inst_34998 + 1);var tmp35068 = inst_34996;var tmp35069 = inst_34997;var tmp35070 = inst_34995;var inst_34995__$1 = tmp35070;var inst_34996__$1 = tmp35068;var inst_34997__$1 = tmp35069;var inst_34998__$1 = inst_35006;var state_35056__$1 = (function (){var statearr_35074 = state_35056;(statearr_35074[8] = inst_34996__$1);
(statearr_35074[9] = inst_34997__$1);
(statearr_35074[10] = inst_34998__$1);
(statearr_35074[11] = inst_34995__$1);
(statearr_35074[14] = inst_35005);
return statearr_35074;
})();var statearr_35075_35115 = state_35056__$1;(statearr_35075_35115[2] = null);
(statearr_35075_35115[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 11))
{var inst_35009 = (state_35056[15]);var inst_34995 = (state_35056[11]);var inst_35009__$1 = cljs.core.seq.call(null,inst_34995);var state_35056__$1 = (function (){var statearr_35076 = state_35056;(statearr_35076[15] = inst_35009__$1);
return statearr_35076;
})();if(inst_35009__$1)
{var statearr_35077_35116 = state_35056__$1;(statearr_35077_35116[1] = 13);
} else
{var statearr_35078_35117 = state_35056__$1;(statearr_35078_35117[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 12))
{var inst_35029 = (state_35056[2]);var state_35056__$1 = state_35056;var statearr_35079_35118 = state_35056__$1;(statearr_35079_35118[2] = inst_35029);
(statearr_35079_35118[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 13))
{var inst_35009 = (state_35056[15]);var inst_35011 = cljs.core.chunked_seq_QMARK_.call(null,inst_35009);var state_35056__$1 = state_35056;if(inst_35011)
{var statearr_35080_35119 = state_35056__$1;(statearr_35080_35119[1] = 16);
} else
{var statearr_35081_35120 = state_35056__$1;(statearr_35081_35120[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 14))
{var state_35056__$1 = state_35056;var statearr_35082_35121 = state_35056__$1;(statearr_35082_35121[2] = null);
(statearr_35082_35121[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 15))
{var inst_35027 = (state_35056[2]);var state_35056__$1 = state_35056;var statearr_35083_35122 = state_35056__$1;(statearr_35083_35122[2] = inst_35027);
(statearr_35083_35122[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 16))
{var inst_35009 = (state_35056[15]);var inst_35013 = cljs.core.chunk_first.call(null,inst_35009);var inst_35014 = cljs.core.chunk_rest.call(null,inst_35009);var inst_35015 = cljs.core.count.call(null,inst_35013);var inst_34995 = inst_35014;var inst_34996 = inst_35013;var inst_34997 = inst_35015;var inst_34998 = 0;var state_35056__$1 = (function (){var statearr_35084 = state_35056;(statearr_35084[8] = inst_34996);
(statearr_35084[9] = inst_34997);
(statearr_35084[10] = inst_34998);
(statearr_35084[11] = inst_34995);
return statearr_35084;
})();var statearr_35085_35123 = state_35056__$1;(statearr_35085_35123[2] = null);
(statearr_35085_35123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 17))
{var inst_35009 = (state_35056[15]);var inst_35018 = cljs.core.first.call(null,inst_35009);var inst_35019 = cljs.core.async.muxch_STAR_.call(null,inst_35018);var inst_35020 = cljs.core.async.close_BANG_.call(null,inst_35019);var inst_35021 = cljs.core.next.call(null,inst_35009);var inst_34995 = inst_35021;var inst_34996 = null;var inst_34997 = 0;var inst_34998 = 0;var state_35056__$1 = (function (){var statearr_35086 = state_35056;(statearr_35086[8] = inst_34996);
(statearr_35086[9] = inst_34997);
(statearr_35086[16] = inst_35020);
(statearr_35086[10] = inst_34998);
(statearr_35086[11] = inst_34995);
return statearr_35086;
})();var statearr_35087_35124 = state_35056__$1;(statearr_35087_35124[2] = null);
(statearr_35087_35124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 18))
{var inst_35024 = (state_35056[2]);var state_35056__$1 = state_35056;var statearr_35088_35125 = state_35056__$1;(statearr_35088_35125[2] = inst_35024);
(statearr_35088_35125[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 19))
{var state_35056__$1 = state_35056;var statearr_35089_35126 = state_35056__$1;(statearr_35089_35126[2] = null);
(statearr_35089_35126[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 20))
{var state_35056__$1 = state_35056;var statearr_35090_35127 = state_35056__$1;(statearr_35090_35127[2] = null);
(statearr_35090_35127[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 21))
{var inst_35049 = (state_35056[2]);var state_35056__$1 = (function (){var statearr_35091 = state_35056;(statearr_35091[17] = inst_35049);
return statearr_35091;
})();var statearr_35092_35128 = state_35056__$1;(statearr_35092_35128[2] = null);
(statearr_35092_35128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 22))
{var inst_35046 = (state_35056[2]);var state_35056__$1 = state_35056;var statearr_35093_35129 = state_35056__$1;(statearr_35093_35129[2] = inst_35046);
(statearr_35093_35129[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 23))
{var inst_35033 = (state_35056[13]);var inst_35037 = (state_35056[2]);var inst_35038 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35033);var state_35056__$1 = (function (){var statearr_35094 = state_35056;(statearr_35094[18] = inst_35037);
return statearr_35094;
})();var statearr_35095_35130 = state_35056__$1;(statearr_35095_35130[2] = inst_35038);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35056__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35057 === 24))
{var inst_35035 = (state_35056[12]);var inst_34985 = (state_35056[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35056,23,Object,null,22);var inst_35042 = cljs.core.async.muxch_STAR_.call(null,inst_35035);var state_35056__$1 = state_35056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35056__$1,25,inst_35042,inst_34985);
} else
{if((state_val_35057 === 25))
{var inst_35044 = (state_35056[2]);var state_35056__$1 = state_35056;var statearr_35096_35131 = state_35056__$1;(statearr_35096_35131[2] = inst_35044);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35056__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35100[0] = state_machine__5507__auto__);
(statearr_35100[1] = 1);
return statearr_35100;
});
var state_machine__5507__auto____1 = (function (state_35056){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35056);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35101){if((e35101 instanceof Object))
{var ex__5510__auto__ = e35101;var statearr_35102_35132 = state_35056;(statearr_35102_35132[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35133 = state_35056;
state_35056 = G__35133;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35056){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35103 = f__5522__auto__.call(null);(statearr_35103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35104);
return statearr_35103;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___35270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35240){var state_val_35241 = (state_35240[1]);if((state_val_35241 === 1))
{var state_35240__$1 = state_35240;var statearr_35242_35271 = state_35240__$1;(statearr_35242_35271[2] = null);
(statearr_35242_35271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 2))
{var inst_35203 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35204 = 0;var state_35240__$1 = (function (){var statearr_35243 = state_35240;(statearr_35243[7] = inst_35204);
(statearr_35243[8] = inst_35203);
return statearr_35243;
})();var statearr_35244_35272 = state_35240__$1;(statearr_35244_35272[2] = null);
(statearr_35244_35272[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 3))
{var inst_35238 = (state_35240[2]);var state_35240__$1 = state_35240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35240__$1,inst_35238);
} else
{if((state_val_35241 === 4))
{var inst_35204 = (state_35240[7]);var inst_35206 = (inst_35204 < cnt);var state_35240__$1 = state_35240;if(cljs.core.truth_(inst_35206))
{var statearr_35245_35273 = state_35240__$1;(statearr_35245_35273[1] = 6);
} else
{var statearr_35246_35274 = state_35240__$1;(statearr_35246_35274[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 5))
{var inst_35224 = (state_35240[2]);var state_35240__$1 = (function (){var statearr_35247 = state_35240;(statearr_35247[9] = inst_35224);
return statearr_35247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35240__$1,12,dchan);
} else
{if((state_val_35241 === 6))
{var state_35240__$1 = state_35240;var statearr_35248_35275 = state_35240__$1;(statearr_35248_35275[2] = null);
(statearr_35248_35275[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 7))
{var state_35240__$1 = state_35240;var statearr_35249_35276 = state_35240__$1;(statearr_35249_35276[2] = null);
(statearr_35249_35276[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 8))
{var inst_35222 = (state_35240[2]);var state_35240__$1 = state_35240;var statearr_35250_35277 = state_35240__$1;(statearr_35250_35277[2] = inst_35222);
(statearr_35250_35277[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 9))
{var inst_35204 = (state_35240[7]);var inst_35217 = (state_35240[2]);var inst_35218 = (inst_35204 + 1);var inst_35204__$1 = inst_35218;var state_35240__$1 = (function (){var statearr_35251 = state_35240;(statearr_35251[10] = inst_35217);
(statearr_35251[7] = inst_35204__$1);
return statearr_35251;
})();var statearr_35252_35278 = state_35240__$1;(statearr_35252_35278[2] = null);
(statearr_35252_35278[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 10))
{var inst_35208 = (state_35240[2]);var inst_35209 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35240__$1 = (function (){var statearr_35253 = state_35240;(statearr_35253[11] = inst_35208);
return statearr_35253;
})();var statearr_35254_35279 = state_35240__$1;(statearr_35254_35279[2] = inst_35209);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35240__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 11))
{var inst_35204 = (state_35240[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35240,10,Object,null,9);var inst_35213 = chs__$1.call(null,inst_35204);var inst_35214 = done.call(null,inst_35204);var inst_35215 = cljs.core.async.take_BANG_.call(null,inst_35213,inst_35214);var state_35240__$1 = state_35240;var statearr_35255_35280 = state_35240__$1;(statearr_35255_35280[2] = inst_35215);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35240__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 12))
{var inst_35226 = (state_35240[12]);var inst_35226__$1 = (state_35240[2]);var inst_35227 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35226__$1);var state_35240__$1 = (function (){var statearr_35256 = state_35240;(statearr_35256[12] = inst_35226__$1);
return statearr_35256;
})();if(cljs.core.truth_(inst_35227))
{var statearr_35257_35281 = state_35240__$1;(statearr_35257_35281[1] = 13);
} else
{var statearr_35258_35282 = state_35240__$1;(statearr_35258_35282[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 13))
{var inst_35229 = cljs.core.async.close_BANG_.call(null,out);var state_35240__$1 = state_35240;var statearr_35259_35283 = state_35240__$1;(statearr_35259_35283[2] = inst_35229);
(statearr_35259_35283[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 14))
{var inst_35226 = (state_35240[12]);var inst_35231 = cljs.core.apply.call(null,f,inst_35226);var state_35240__$1 = state_35240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35240__$1,16,out,inst_35231);
} else
{if((state_val_35241 === 15))
{var inst_35236 = (state_35240[2]);var state_35240__$1 = state_35240;var statearr_35260_35284 = state_35240__$1;(statearr_35260_35284[2] = inst_35236);
(statearr_35260_35284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 16))
{var inst_35233 = (state_35240[2]);var state_35240__$1 = (function (){var statearr_35261 = state_35240;(statearr_35261[13] = inst_35233);
return statearr_35261;
})();var statearr_35262_35285 = state_35240__$1;(statearr_35262_35285[2] = null);
(statearr_35262_35285[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35266[0] = state_machine__5507__auto__);
(statearr_35266[1] = 1);
return statearr_35266;
});
var state_machine__5507__auto____1 = (function (state_35240){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35240);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35267){if((e35267 instanceof Object))
{var ex__5510__auto__ = e35267;var statearr_35268_35286 = state_35240;(statearr_35268_35286[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35287 = state_35240;
state_35240 = G__35287;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35240){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35269 = f__5522__auto__.call(null);(statearr_35269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35270);
return statearr_35269;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35371){var state_val_35372 = (state_35371[1]);if((state_val_35372 === 1))
{var inst_35342 = cljs.core.vec.call(null,chs);var inst_35343 = inst_35342;var state_35371__$1 = (function (){var statearr_35373 = state_35371;(statearr_35373[7] = inst_35343);
return statearr_35373;
})();var statearr_35374_35396 = state_35371__$1;(statearr_35374_35396[2] = null);
(statearr_35374_35396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35372 === 2))
{var inst_35343 = (state_35371[7]);var inst_35345 = cljs.core.count.call(null,inst_35343);var inst_35346 = (inst_35345 > 0);var state_35371__$1 = state_35371;if(cljs.core.truth_(inst_35346))
{var statearr_35375_35397 = state_35371__$1;(statearr_35375_35397[1] = 4);
} else
{var statearr_35376_35398 = state_35371__$1;(statearr_35376_35398[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35372 === 3))
{var inst_35369 = (state_35371[2]);var state_35371__$1 = state_35371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35371__$1,inst_35369);
} else
{if((state_val_35372 === 4))
{var inst_35343 = (state_35371[7]);var state_35371__$1 = state_35371;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35371__$1,7,inst_35343);
} else
{if((state_val_35372 === 5))
{var inst_35365 = cljs.core.async.close_BANG_.call(null,out);var state_35371__$1 = state_35371;var statearr_35377_35399 = state_35371__$1;(statearr_35377_35399[2] = inst_35365);
(statearr_35377_35399[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35372 === 6))
{var inst_35367 = (state_35371[2]);var state_35371__$1 = state_35371;var statearr_35378_35400 = state_35371__$1;(statearr_35378_35400[2] = inst_35367);
(statearr_35378_35400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35372 === 7))
{var inst_35351 = (state_35371[8]);var inst_35350 = (state_35371[9]);var inst_35350__$1 = (state_35371[2]);var inst_35351__$1 = cljs.core.nth.call(null,inst_35350__$1,0,null);var inst_35352 = cljs.core.nth.call(null,inst_35350__$1,1,null);var inst_35353 = (inst_35351__$1 == null);var state_35371__$1 = (function (){var statearr_35379 = state_35371;(statearr_35379[8] = inst_35351__$1);
(statearr_35379[10] = inst_35352);
(statearr_35379[9] = inst_35350__$1);
return statearr_35379;
})();if(cljs.core.truth_(inst_35353))
{var statearr_35380_35401 = state_35371__$1;(statearr_35380_35401[1] = 8);
} else
{var statearr_35381_35402 = state_35371__$1;(statearr_35381_35402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35372 === 8))
{var inst_35343 = (state_35371[7]);var inst_35351 = (state_35371[8]);var inst_35352 = (state_35371[10]);var inst_35350 = (state_35371[9]);var inst_35355 = (function (){var c = inst_35352;var v = inst_35351;var vec__35348 = inst_35350;var cs = inst_35343;return ((function (c,v,vec__35348,cs,inst_35343,inst_35351,inst_35352,inst_35350,state_val_35372){
return (function (p1__35288_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35288_SHARP_);
});
;})(c,v,vec__35348,cs,inst_35343,inst_35351,inst_35352,inst_35350,state_val_35372))
})();var inst_35356 = cljs.core.filterv.call(null,inst_35355,inst_35343);var inst_35343__$1 = inst_35356;var state_35371__$1 = (function (){var statearr_35382 = state_35371;(statearr_35382[7] = inst_35343__$1);
return statearr_35382;
})();var statearr_35383_35403 = state_35371__$1;(statearr_35383_35403[2] = null);
(statearr_35383_35403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35372 === 9))
{var inst_35351 = (state_35371[8]);var state_35371__$1 = state_35371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35371__$1,11,out,inst_35351);
} else
{if((state_val_35372 === 10))
{var inst_35363 = (state_35371[2]);var state_35371__$1 = state_35371;var statearr_35385_35404 = state_35371__$1;(statearr_35385_35404[2] = inst_35363);
(statearr_35385_35404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35372 === 11))
{var inst_35343 = (state_35371[7]);var inst_35360 = (state_35371[2]);var tmp35384 = inst_35343;var inst_35343__$1 = tmp35384;var state_35371__$1 = (function (){var statearr_35386 = state_35371;(statearr_35386[7] = inst_35343__$1);
(statearr_35386[11] = inst_35360);
return statearr_35386;
})();var statearr_35387_35405 = state_35371__$1;(statearr_35387_35405[2] = null);
(statearr_35387_35405[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35391 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35391[0] = state_machine__5507__auto__);
(statearr_35391[1] = 1);
return statearr_35391;
});
var state_machine__5507__auto____1 = (function (state_35371){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35392){if((e35392 instanceof Object))
{var ex__5510__auto__ = e35392;var statearr_35393_35406 = state_35371;(statearr_35393_35406[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35407 = state_35371;
state_35371 = G__35407;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35371){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35394 = f__5522__auto__.call(null);(statearr_35394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35395);
return statearr_35394;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35500 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35477){var state_val_35478 = (state_35477[1]);if((state_val_35478 === 1))
{var inst_35454 = 0;var state_35477__$1 = (function (){var statearr_35479 = state_35477;(statearr_35479[7] = inst_35454);
return statearr_35479;
})();var statearr_35480_35501 = state_35477__$1;(statearr_35480_35501[2] = null);
(statearr_35480_35501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35478 === 2))
{var inst_35454 = (state_35477[7]);var inst_35456 = (inst_35454 < n);var state_35477__$1 = state_35477;if(cljs.core.truth_(inst_35456))
{var statearr_35481_35502 = state_35477__$1;(statearr_35481_35502[1] = 4);
} else
{var statearr_35482_35503 = state_35477__$1;(statearr_35482_35503[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35478 === 3))
{var inst_35474 = (state_35477[2]);var inst_35475 = cljs.core.async.close_BANG_.call(null,out);var state_35477__$1 = (function (){var statearr_35483 = state_35477;(statearr_35483[8] = inst_35474);
return statearr_35483;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35477__$1,inst_35475);
} else
{if((state_val_35478 === 4))
{var state_35477__$1 = state_35477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35477__$1,7,ch);
} else
{if((state_val_35478 === 5))
{var state_35477__$1 = state_35477;var statearr_35484_35504 = state_35477__$1;(statearr_35484_35504[2] = null);
(statearr_35484_35504[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35478 === 6))
{var inst_35472 = (state_35477[2]);var state_35477__$1 = state_35477;var statearr_35485_35505 = state_35477__$1;(statearr_35485_35505[2] = inst_35472);
(statearr_35485_35505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35478 === 7))
{var inst_35459 = (state_35477[9]);var inst_35459__$1 = (state_35477[2]);var inst_35460 = (inst_35459__$1 == null);var inst_35461 = cljs.core.not.call(null,inst_35460);var state_35477__$1 = (function (){var statearr_35486 = state_35477;(statearr_35486[9] = inst_35459__$1);
return statearr_35486;
})();if(inst_35461)
{var statearr_35487_35506 = state_35477__$1;(statearr_35487_35506[1] = 8);
} else
{var statearr_35488_35507 = state_35477__$1;(statearr_35488_35507[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35478 === 8))
{var inst_35459 = (state_35477[9]);var state_35477__$1 = state_35477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35477__$1,11,out,inst_35459);
} else
{if((state_val_35478 === 9))
{var state_35477__$1 = state_35477;var statearr_35489_35508 = state_35477__$1;(statearr_35489_35508[2] = null);
(statearr_35489_35508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35478 === 10))
{var inst_35469 = (state_35477[2]);var state_35477__$1 = state_35477;var statearr_35490_35509 = state_35477__$1;(statearr_35490_35509[2] = inst_35469);
(statearr_35490_35509[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35478 === 11))
{var inst_35454 = (state_35477[7]);var inst_35464 = (state_35477[2]);var inst_35465 = (inst_35454 + 1);var inst_35454__$1 = inst_35465;var state_35477__$1 = (function (){var statearr_35491 = state_35477;(statearr_35491[10] = inst_35464);
(statearr_35491[7] = inst_35454__$1);
return statearr_35491;
})();var statearr_35492_35510 = state_35477__$1;(statearr_35492_35510[2] = null);
(statearr_35492_35510[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35496 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35496[0] = state_machine__5507__auto__);
(statearr_35496[1] = 1);
return statearr_35496;
});
var state_machine__5507__auto____1 = (function (state_35477){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35477);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35497){if((e35497 instanceof Object))
{var ex__5510__auto__ = e35497;var statearr_35498_35511 = state_35477;(statearr_35498_35511[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35512 = state_35477;
state_35477 = G__35512;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35477){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35499 = f__5522__auto__.call(null);(statearr_35499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35500);
return statearr_35499;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35609 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35584){var state_val_35585 = (state_35584[1]);if((state_val_35585 === 1))
{var inst_35561 = null;var state_35584__$1 = (function (){var statearr_35586 = state_35584;(statearr_35586[7] = inst_35561);
return statearr_35586;
})();var statearr_35587_35610 = state_35584__$1;(statearr_35587_35610[2] = null);
(statearr_35587_35610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 2))
{var state_35584__$1 = state_35584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35584__$1,4,ch);
} else
{if((state_val_35585 === 3))
{var inst_35581 = (state_35584[2]);var inst_35582 = cljs.core.async.close_BANG_.call(null,out);var state_35584__$1 = (function (){var statearr_35588 = state_35584;(statearr_35588[8] = inst_35581);
return statearr_35588;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35584__$1,inst_35582);
} else
{if((state_val_35585 === 4))
{var inst_35564 = (state_35584[9]);var inst_35564__$1 = (state_35584[2]);var inst_35565 = (inst_35564__$1 == null);var inst_35566 = cljs.core.not.call(null,inst_35565);var state_35584__$1 = (function (){var statearr_35589 = state_35584;(statearr_35589[9] = inst_35564__$1);
return statearr_35589;
})();if(inst_35566)
{var statearr_35590_35611 = state_35584__$1;(statearr_35590_35611[1] = 5);
} else
{var statearr_35591_35612 = state_35584__$1;(statearr_35591_35612[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 5))
{var inst_35564 = (state_35584[9]);var inst_35561 = (state_35584[7]);var inst_35568 = cljs.core._EQ_.call(null,inst_35564,inst_35561);var state_35584__$1 = state_35584;if(inst_35568)
{var statearr_35592_35613 = state_35584__$1;(statearr_35592_35613[1] = 8);
} else
{var statearr_35593_35614 = state_35584__$1;(statearr_35593_35614[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 6))
{var state_35584__$1 = state_35584;var statearr_35595_35615 = state_35584__$1;(statearr_35595_35615[2] = null);
(statearr_35595_35615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 7))
{var inst_35579 = (state_35584[2]);var state_35584__$1 = state_35584;var statearr_35596_35616 = state_35584__$1;(statearr_35596_35616[2] = inst_35579);
(statearr_35596_35616[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 8))
{var inst_35561 = (state_35584[7]);var tmp35594 = inst_35561;var inst_35561__$1 = tmp35594;var state_35584__$1 = (function (){var statearr_35597 = state_35584;(statearr_35597[7] = inst_35561__$1);
return statearr_35597;
})();var statearr_35598_35617 = state_35584__$1;(statearr_35598_35617[2] = null);
(statearr_35598_35617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 9))
{var inst_35564 = (state_35584[9]);var state_35584__$1 = state_35584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35584__$1,11,out,inst_35564);
} else
{if((state_val_35585 === 10))
{var inst_35576 = (state_35584[2]);var state_35584__$1 = state_35584;var statearr_35599_35618 = state_35584__$1;(statearr_35599_35618[2] = inst_35576);
(statearr_35599_35618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 11))
{var inst_35564 = (state_35584[9]);var inst_35573 = (state_35584[2]);var inst_35561 = inst_35564;var state_35584__$1 = (function (){var statearr_35600 = state_35584;(statearr_35600[10] = inst_35573);
(statearr_35600[7] = inst_35561);
return statearr_35600;
})();var statearr_35601_35619 = state_35584__$1;(statearr_35601_35619[2] = null);
(statearr_35601_35619[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35605 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35605[0] = state_machine__5507__auto__);
(statearr_35605[1] = 1);
return statearr_35605;
});
var state_machine__5507__auto____1 = (function (state_35584){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35584);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35606){if((e35606 instanceof Object))
{var ex__5510__auto__ = e35606;var statearr_35607_35620 = state_35584;(statearr_35607_35620[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35621 = state_35584;
state_35584 = G__35621;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35584){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35608 = f__5522__auto__.call(null);(statearr_35608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35609);
return statearr_35608;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35726){var state_val_35727 = (state_35726[1]);if((state_val_35727 === 1))
{var inst_35689 = (new Array(n));var inst_35690 = inst_35689;var inst_35691 = 0;var state_35726__$1 = (function (){var statearr_35728 = state_35726;(statearr_35728[7] = inst_35691);
(statearr_35728[8] = inst_35690);
return statearr_35728;
})();var statearr_35729_35757 = state_35726__$1;(statearr_35729_35757[2] = null);
(statearr_35729_35757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 2))
{var state_35726__$1 = state_35726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35726__$1,4,ch);
} else
{if((state_val_35727 === 3))
{var inst_35724 = (state_35726[2]);var state_35726__$1 = state_35726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35726__$1,inst_35724);
} else
{if((state_val_35727 === 4))
{var inst_35694 = (state_35726[9]);var inst_35694__$1 = (state_35726[2]);var inst_35695 = (inst_35694__$1 == null);var inst_35696 = cljs.core.not.call(null,inst_35695);var state_35726__$1 = (function (){var statearr_35730 = state_35726;(statearr_35730[9] = inst_35694__$1);
return statearr_35730;
})();if(inst_35696)
{var statearr_35731_35758 = state_35726__$1;(statearr_35731_35758[1] = 5);
} else
{var statearr_35732_35759 = state_35726__$1;(statearr_35732_35759[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 5))
{var inst_35694 = (state_35726[9]);var inst_35691 = (state_35726[7]);var inst_35690 = (state_35726[8]);var inst_35699 = (state_35726[10]);var inst_35698 = (inst_35690[inst_35691] = inst_35694);var inst_35699__$1 = (inst_35691 + 1);var inst_35700 = (inst_35699__$1 < n);var state_35726__$1 = (function (){var statearr_35733 = state_35726;(statearr_35733[10] = inst_35699__$1);
(statearr_35733[11] = inst_35698);
return statearr_35733;
})();if(cljs.core.truth_(inst_35700))
{var statearr_35734_35760 = state_35726__$1;(statearr_35734_35760[1] = 8);
} else
{var statearr_35735_35761 = state_35726__$1;(statearr_35735_35761[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 6))
{var inst_35691 = (state_35726[7]);var inst_35712 = (inst_35691 > 0);var state_35726__$1 = state_35726;if(cljs.core.truth_(inst_35712))
{var statearr_35737_35762 = state_35726__$1;(statearr_35737_35762[1] = 12);
} else
{var statearr_35738_35763 = state_35726__$1;(statearr_35738_35763[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 7))
{var inst_35722 = (state_35726[2]);var state_35726__$1 = state_35726;var statearr_35739_35764 = state_35726__$1;(statearr_35739_35764[2] = inst_35722);
(statearr_35739_35764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 8))
{var inst_35690 = (state_35726[8]);var inst_35699 = (state_35726[10]);var tmp35736 = inst_35690;var inst_35690__$1 = tmp35736;var inst_35691 = inst_35699;var state_35726__$1 = (function (){var statearr_35740 = state_35726;(statearr_35740[7] = inst_35691);
(statearr_35740[8] = inst_35690__$1);
return statearr_35740;
})();var statearr_35741_35765 = state_35726__$1;(statearr_35741_35765[2] = null);
(statearr_35741_35765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 9))
{var inst_35690 = (state_35726[8]);var inst_35704 = cljs.core.vec.call(null,inst_35690);var state_35726__$1 = state_35726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35726__$1,11,out,inst_35704);
} else
{if((state_val_35727 === 10))
{var inst_35710 = (state_35726[2]);var state_35726__$1 = state_35726;var statearr_35742_35766 = state_35726__$1;(statearr_35742_35766[2] = inst_35710);
(statearr_35742_35766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 11))
{var inst_35706 = (state_35726[2]);var inst_35707 = (new Array(n));var inst_35690 = inst_35707;var inst_35691 = 0;var state_35726__$1 = (function (){var statearr_35743 = state_35726;(statearr_35743[12] = inst_35706);
(statearr_35743[7] = inst_35691);
(statearr_35743[8] = inst_35690);
return statearr_35743;
})();var statearr_35744_35767 = state_35726__$1;(statearr_35744_35767[2] = null);
(statearr_35744_35767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 12))
{var inst_35690 = (state_35726[8]);var inst_35714 = cljs.core.vec.call(null,inst_35690);var state_35726__$1 = state_35726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35726__$1,15,out,inst_35714);
} else
{if((state_val_35727 === 13))
{var state_35726__$1 = state_35726;var statearr_35745_35768 = state_35726__$1;(statearr_35745_35768[2] = null);
(statearr_35745_35768[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 14))
{var inst_35719 = (state_35726[2]);var inst_35720 = cljs.core.async.close_BANG_.call(null,out);var state_35726__$1 = (function (){var statearr_35746 = state_35726;(statearr_35746[13] = inst_35719);
return statearr_35746;
})();var statearr_35747_35769 = state_35726__$1;(statearr_35747_35769[2] = inst_35720);
(statearr_35747_35769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35727 === 15))
{var inst_35716 = (state_35726[2]);var state_35726__$1 = state_35726;var statearr_35748_35770 = state_35726__$1;(statearr_35748_35770[2] = inst_35716);
(statearr_35748_35770[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35752[0] = state_machine__5507__auto__);
(statearr_35752[1] = 1);
return statearr_35752;
});
var state_machine__5507__auto____1 = (function (state_35726){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35726);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35753){if((e35753 instanceof Object))
{var ex__5510__auto__ = e35753;var statearr_35754_35771 = state_35726;(statearr_35754_35771[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35772 = state_35726;
state_35726 = G__35772;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35726){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35755 = f__5522__auto__.call(null);(statearr_35755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35756);
return statearr_35755;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35915 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35885){var state_val_35886 = (state_35885[1]);if((state_val_35886 === 1))
{var inst_35844 = [];var inst_35845 = inst_35844;var inst_35846 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35885__$1 = (function (){var statearr_35887 = state_35885;(statearr_35887[7] = inst_35845);
(statearr_35887[8] = inst_35846);
return statearr_35887;
})();var statearr_35888_35916 = state_35885__$1;(statearr_35888_35916[2] = null);
(statearr_35888_35916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 2))
{var state_35885__$1 = state_35885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35885__$1,4,ch);
} else
{if((state_val_35886 === 3))
{var inst_35883 = (state_35885[2]);var state_35885__$1 = state_35885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35885__$1,inst_35883);
} else
{if((state_val_35886 === 4))
{var inst_35849 = (state_35885[9]);var inst_35849__$1 = (state_35885[2]);var inst_35850 = (inst_35849__$1 == null);var inst_35851 = cljs.core.not.call(null,inst_35850);var state_35885__$1 = (function (){var statearr_35889 = state_35885;(statearr_35889[9] = inst_35849__$1);
return statearr_35889;
})();if(inst_35851)
{var statearr_35890_35917 = state_35885__$1;(statearr_35890_35917[1] = 5);
} else
{var statearr_35891_35918 = state_35885__$1;(statearr_35891_35918[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 5))
{var inst_35853 = (state_35885[10]);var inst_35846 = (state_35885[8]);var inst_35849 = (state_35885[9]);var inst_35853__$1 = f.call(null,inst_35849);var inst_35854 = cljs.core._EQ_.call(null,inst_35853__$1,inst_35846);var inst_35855 = cljs.core.keyword_identical_QMARK_.call(null,inst_35846,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35856 = (inst_35854) || (inst_35855);var state_35885__$1 = (function (){var statearr_35892 = state_35885;(statearr_35892[10] = inst_35853__$1);
return statearr_35892;
})();if(cljs.core.truth_(inst_35856))
{var statearr_35893_35919 = state_35885__$1;(statearr_35893_35919[1] = 8);
} else
{var statearr_35894_35920 = state_35885__$1;(statearr_35894_35920[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 6))
{var inst_35845 = (state_35885[7]);var inst_35870 = inst_35845.length;var inst_35871 = (inst_35870 > 0);var state_35885__$1 = state_35885;if(cljs.core.truth_(inst_35871))
{var statearr_35896_35921 = state_35885__$1;(statearr_35896_35921[1] = 12);
} else
{var statearr_35897_35922 = state_35885__$1;(statearr_35897_35922[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 7))
{var inst_35881 = (state_35885[2]);var state_35885__$1 = state_35885;var statearr_35898_35923 = state_35885__$1;(statearr_35898_35923[2] = inst_35881);
(statearr_35898_35923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 8))
{var inst_35853 = (state_35885[10]);var inst_35845 = (state_35885[7]);var inst_35849 = (state_35885[9]);var inst_35858 = inst_35845.push(inst_35849);var tmp35895 = inst_35845;var inst_35845__$1 = tmp35895;var inst_35846 = inst_35853;var state_35885__$1 = (function (){var statearr_35899 = state_35885;(statearr_35899[7] = inst_35845__$1);
(statearr_35899[8] = inst_35846);
(statearr_35899[11] = inst_35858);
return statearr_35899;
})();var statearr_35900_35924 = state_35885__$1;(statearr_35900_35924[2] = null);
(statearr_35900_35924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 9))
{var inst_35845 = (state_35885[7]);var inst_35861 = cljs.core.vec.call(null,inst_35845);var state_35885__$1 = state_35885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35885__$1,11,out,inst_35861);
} else
{if((state_val_35886 === 10))
{var inst_35868 = (state_35885[2]);var state_35885__$1 = state_35885;var statearr_35901_35925 = state_35885__$1;(statearr_35901_35925[2] = inst_35868);
(statearr_35901_35925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 11))
{var inst_35853 = (state_35885[10]);var inst_35849 = (state_35885[9]);var inst_35863 = (state_35885[2]);var inst_35864 = [];var inst_35865 = inst_35864.push(inst_35849);var inst_35845 = inst_35864;var inst_35846 = inst_35853;var state_35885__$1 = (function (){var statearr_35902 = state_35885;(statearr_35902[12] = inst_35863);
(statearr_35902[7] = inst_35845);
(statearr_35902[8] = inst_35846);
(statearr_35902[13] = inst_35865);
return statearr_35902;
})();var statearr_35903_35926 = state_35885__$1;(statearr_35903_35926[2] = null);
(statearr_35903_35926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 12))
{var inst_35845 = (state_35885[7]);var inst_35873 = cljs.core.vec.call(null,inst_35845);var state_35885__$1 = state_35885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35885__$1,15,out,inst_35873);
} else
{if((state_val_35886 === 13))
{var state_35885__$1 = state_35885;var statearr_35904_35927 = state_35885__$1;(statearr_35904_35927[2] = null);
(statearr_35904_35927[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 14))
{var inst_35878 = (state_35885[2]);var inst_35879 = cljs.core.async.close_BANG_.call(null,out);var state_35885__$1 = (function (){var statearr_35905 = state_35885;(statearr_35905[14] = inst_35878);
return statearr_35905;
})();var statearr_35906_35928 = state_35885__$1;(statearr_35906_35928[2] = inst_35879);
(statearr_35906_35928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35886 === 15))
{var inst_35875 = (state_35885[2]);var state_35885__$1 = state_35885;var statearr_35907_35929 = state_35885__$1;(statearr_35907_35929[2] = inst_35875);
(statearr_35907_35929[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35911[0] = state_machine__5507__auto__);
(statearr_35911[1] = 1);
return statearr_35911;
});
var state_machine__5507__auto____1 = (function (state_35885){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35912){if((e35912 instanceof Object))
{var ex__5510__auto__ = e35912;var statearr_35913_35930 = state_35885;(statearr_35913_35930[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35931 = state_35885;
state_35885 = G__35931;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35885){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35914 = f__5522__auto__.call(null);(statearr_35914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35915);
return statearr_35914;
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
