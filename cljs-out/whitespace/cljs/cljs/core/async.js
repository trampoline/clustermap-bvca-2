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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34346 = (function (f,fn_handler,meta34347){
this.f = f;
this.fn_handler = fn_handler;
this.meta34347 = meta34347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34346.cljs$lang$type = true;
cljs.core.async.t34346.cljs$lang$ctorStr = "cljs.core.async/t34346";
cljs.core.async.t34346.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34346");
});
cljs.core.async.t34346.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34348){var self__ = this;
var _34348__$1 = this;return self__.meta34347;
});
cljs.core.async.t34346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34348,meta34347__$1){var self__ = this;
var _34348__$1 = this;return (new cljs.core.async.t34346(self__.f,self__.fn_handler,meta34347__$1));
});
cljs.core.async.__GT_t34346 = (function __GT_t34346(f__$1,fn_handler__$1,meta34347){return (new cljs.core.async.t34346(f__$1,fn_handler__$1,meta34347));
});
}
return (new cljs.core.async.t34346(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34350 = buff;if(G__34350)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34350.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34350.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34350);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34350);
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
{var val_34351 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34351);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34351);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34352 = n;var x_34353 = 0;while(true){
if((x_34353 < n__4248__auto___34352))
{(a[x_34353] = 0);
{
var G__34354 = (x_34353 + 1);
x_34353 = G__34354;
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
var G__34355 = (i + 1);
i = G__34355;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34359 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34359 = (function (flag,alt_flag,meta34360){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34360 = meta34360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34359.cljs$lang$type = true;
cljs.core.async.t34359.cljs$lang$ctorStr = "cljs.core.async/t34359";
cljs.core.async.t34359.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34359");
});
cljs.core.async.t34359.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34361){var self__ = this;
var _34361__$1 = this;return self__.meta34360;
});
cljs.core.async.t34359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34361,meta34360__$1){var self__ = this;
var _34361__$1 = this;return (new cljs.core.async.t34359(self__.flag,self__.alt_flag,meta34360__$1));
});
cljs.core.async.__GT_t34359 = (function __GT_t34359(flag__$1,alt_flag__$1,meta34360){return (new cljs.core.async.t34359(flag__$1,alt_flag__$1,meta34360));
});
}
return (new cljs.core.async.t34359(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34365 = (function (cb,flag,alt_handler,meta34366){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34366 = meta34366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34365.cljs$lang$type = true;
cljs.core.async.t34365.cljs$lang$ctorStr = "cljs.core.async/t34365";
cljs.core.async.t34365.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34365");
});
cljs.core.async.t34365.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34367){var self__ = this;
var _34367__$1 = this;return self__.meta34366;
});
cljs.core.async.t34365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34367,meta34366__$1){var self__ = this;
var _34367__$1 = this;return (new cljs.core.async.t34365(self__.cb,self__.flag,self__.alt_handler,meta34366__$1));
});
cljs.core.async.__GT_t34365 = (function __GT_t34365(cb__$1,flag__$1,alt_handler__$1,meta34366){return (new cljs.core.async.t34365(cb__$1,flag__$1,alt_handler__$1,meta34366));
});
}
return (new cljs.core.async.t34365(cb,flag,alt_handler,null));
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
return (function (p1__34368_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34368_SHARP_,port], null));
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
var G__34369 = (i + 1);
i = G__34369;
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
var alts_BANG___delegate = function (ports,p__34370){var map__34372 = p__34370;var map__34372__$1 = ((cljs.core.seq_QMARK_.call(null,map__34372))?cljs.core.apply.call(null,cljs.core.hash_map,map__34372):map__34372);var opts = map__34372__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34370 = null;if (arguments.length > 1) {
  p__34370 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34370);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34373){
var ports = cljs.core.first(arglist__34373);
var p__34370 = cljs.core.rest(arglist__34373);
return alts_BANG___delegate(ports,p__34370);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34381 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34381 = (function (ch,f,map_LT_,meta34382){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34382 = meta34382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34381.cljs$lang$type = true;
cljs.core.async.t34381.cljs$lang$ctorStr = "cljs.core.async/t34381";
cljs.core.async.t34381.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34381");
});
cljs.core.async.t34381.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34381.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34384 = (function (fn1,_,meta34382,ch,f,map_LT_,meta34385){
this.fn1 = fn1;
this._ = _;
this.meta34382 = meta34382;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34385 = meta34385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34384.cljs$lang$type = true;
cljs.core.async.t34384.cljs$lang$ctorStr = "cljs.core.async/t34384";
cljs.core.async.t34384.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34384");
});
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34374_SHARP_){return f1.call(null,(((p1__34374_SHARP_ == null))?null:self__.f.call(null,p1__34374_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34386){var self__ = this;
var _34386__$1 = this;return self__.meta34385;
});
cljs.core.async.t34384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34386,meta34385__$1){var self__ = this;
var _34386__$1 = this;return (new cljs.core.async.t34384(self__.fn1,self__._,self__.meta34382,self__.ch,self__.f,self__.map_LT_,meta34385__$1));
});
cljs.core.async.__GT_t34384 = (function __GT_t34384(fn1__$1,___$2,meta34382__$1,ch__$2,f__$2,map_LT___$2,meta34385){return (new cljs.core.async.t34384(fn1__$1,___$2,meta34382__$1,ch__$2,f__$2,map_LT___$2,meta34385));
});
}
return (new cljs.core.async.t34384(fn1,___$1,self__.meta34382,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34381.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34383){var self__ = this;
var _34383__$1 = this;return self__.meta34382;
});
cljs.core.async.t34381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34383,meta34382__$1){var self__ = this;
var _34383__$1 = this;return (new cljs.core.async.t34381(self__.ch,self__.f,self__.map_LT_,meta34382__$1));
});
cljs.core.async.__GT_t34381 = (function __GT_t34381(ch__$1,f__$1,map_LT___$1,meta34382){return (new cljs.core.async.t34381(ch__$1,f__$1,map_LT___$1,meta34382));
});
}
return (new cljs.core.async.t34381(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34390 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34390 = (function (ch,f,map_GT_,meta34391){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34391 = meta34391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34390.cljs$lang$type = true;
cljs.core.async.t34390.cljs$lang$ctorStr = "cljs.core.async/t34390";
cljs.core.async.t34390.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34390");
});
cljs.core.async.t34390.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34390.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34390.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34392){var self__ = this;
var _34392__$1 = this;return self__.meta34391;
});
cljs.core.async.t34390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34392,meta34391__$1){var self__ = this;
var _34392__$1 = this;return (new cljs.core.async.t34390(self__.ch,self__.f,self__.map_GT_,meta34391__$1));
});
cljs.core.async.__GT_t34390 = (function __GT_t34390(ch__$1,f__$1,map_GT___$1,meta34391){return (new cljs.core.async.t34390(ch__$1,f__$1,map_GT___$1,meta34391));
});
}
return (new cljs.core.async.t34390(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34396 = (function (ch,p,filter_GT_,meta34397){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34397 = meta34397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34396.cljs$lang$type = true;
cljs.core.async.t34396.cljs$lang$ctorStr = "cljs.core.async/t34396";
cljs.core.async.t34396.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34396");
});
cljs.core.async.t34396.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34396.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34396.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34398){var self__ = this;
var _34398__$1 = this;return self__.meta34397;
});
cljs.core.async.t34396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34398,meta34397__$1){var self__ = this;
var _34398__$1 = this;return (new cljs.core.async.t34396(self__.ch,self__.p,self__.filter_GT_,meta34397__$1));
});
cljs.core.async.__GT_t34396 = (function __GT_t34396(ch__$1,p__$1,filter_GT___$1,meta34397){return (new cljs.core.async.t34396(ch__$1,p__$1,filter_GT___$1,meta34397));
});
}
return (new cljs.core.async.t34396(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34460){var state_val_34461 = (state_34460[1]);if((state_val_34461 === 1))
{var state_34460__$1 = state_34460;var statearr_34462_34482 = state_34460__$1;(statearr_34462_34482[2] = null);
(statearr_34462_34482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34461 === 2))
{var state_34460__$1 = state_34460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34460__$1,4,ch);
} else
{if((state_val_34461 === 3))
{var inst_34458 = (state_34460[2]);var state_34460__$1 = state_34460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34460__$1,inst_34458);
} else
{if((state_val_34461 === 4))
{var inst_34442 = (state_34460[7]);var inst_34442__$1 = (state_34460[2]);var inst_34443 = (inst_34442__$1 == null);var state_34460__$1 = (function (){var statearr_34463 = state_34460;(statearr_34463[7] = inst_34442__$1);
return statearr_34463;
})();if(cljs.core.truth_(inst_34443))
{var statearr_34464_34483 = state_34460__$1;(statearr_34464_34483[1] = 5);
} else
{var statearr_34465_34484 = state_34460__$1;(statearr_34465_34484[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34461 === 5))
{var inst_34445 = cljs.core.async.close_BANG_.call(null,out);var state_34460__$1 = state_34460;var statearr_34466_34485 = state_34460__$1;(statearr_34466_34485[2] = inst_34445);
(statearr_34466_34485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34461 === 6))
{var inst_34442 = (state_34460[7]);var inst_34447 = p.call(null,inst_34442);var state_34460__$1 = state_34460;if(cljs.core.truth_(inst_34447))
{var statearr_34467_34486 = state_34460__$1;(statearr_34467_34486[1] = 8);
} else
{var statearr_34468_34487 = state_34460__$1;(statearr_34468_34487[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34461 === 7))
{var inst_34456 = (state_34460[2]);var state_34460__$1 = state_34460;var statearr_34469_34488 = state_34460__$1;(statearr_34469_34488[2] = inst_34456);
(statearr_34469_34488[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34461 === 8))
{var inst_34442 = (state_34460[7]);var state_34460__$1 = state_34460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34460__$1,11,out,inst_34442);
} else
{if((state_val_34461 === 9))
{var state_34460__$1 = state_34460;var statearr_34470_34489 = state_34460__$1;(statearr_34470_34489[2] = null);
(statearr_34470_34489[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34461 === 10))
{var inst_34453 = (state_34460[2]);var state_34460__$1 = (function (){var statearr_34471 = state_34460;(statearr_34471[8] = inst_34453);
return statearr_34471;
})();var statearr_34472_34490 = state_34460__$1;(statearr_34472_34490[2] = null);
(statearr_34472_34490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34461 === 11))
{var inst_34450 = (state_34460[2]);var state_34460__$1 = state_34460;var statearr_34473_34491 = state_34460__$1;(statearr_34473_34491[2] = inst_34450);
(statearr_34473_34491[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34477 = [null,null,null,null,null,null,null,null,null];(statearr_34477[0] = state_machine__5507__auto__);
(statearr_34477[1] = 1);
return statearr_34477;
});
var state_machine__5507__auto____1 = (function (state_34460){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34460);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34478){if((e34478 instanceof Object))
{var ex__5510__auto__ = e34478;var statearr_34479_34492 = state_34460;(statearr_34479_34492[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34460);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34493 = state_34460;
state_34460 = G__34493;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34460){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34480 = f__5522__auto__.call(null);(statearr_34480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34481);
return statearr_34480;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34645){var state_val_34646 = (state_34645[1]);if((state_val_34646 === 1))
{var state_34645__$1 = state_34645;var statearr_34647_34684 = state_34645__$1;(statearr_34647_34684[2] = null);
(statearr_34647_34684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 2))
{var state_34645__$1 = state_34645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34645__$1,4,in$);
} else
{if((state_val_34646 === 3))
{var inst_34643 = (state_34645[2]);var state_34645__$1 = state_34645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34645__$1,inst_34643);
} else
{if((state_val_34646 === 4))
{var inst_34591 = (state_34645[7]);var inst_34591__$1 = (state_34645[2]);var inst_34592 = (inst_34591__$1 == null);var state_34645__$1 = (function (){var statearr_34648 = state_34645;(statearr_34648[7] = inst_34591__$1);
return statearr_34648;
})();if(cljs.core.truth_(inst_34592))
{var statearr_34649_34685 = state_34645__$1;(statearr_34649_34685[1] = 5);
} else
{var statearr_34650_34686 = state_34645__$1;(statearr_34650_34686[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 5))
{var inst_34594 = cljs.core.async.close_BANG_.call(null,out);var state_34645__$1 = state_34645;var statearr_34651_34687 = state_34645__$1;(statearr_34651_34687[2] = inst_34594);
(statearr_34651_34687[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 6))
{var inst_34591 = (state_34645[7]);var inst_34596 = f.call(null,inst_34591);var inst_34601 = cljs.core.seq.call(null,inst_34596);var inst_34602 = inst_34601;var inst_34603 = null;var inst_34604 = 0;var inst_34605 = 0;var state_34645__$1 = (function (){var statearr_34652 = state_34645;(statearr_34652[8] = inst_34602);
(statearr_34652[9] = inst_34603);
(statearr_34652[10] = inst_34605);
(statearr_34652[11] = inst_34604);
return statearr_34652;
})();var statearr_34653_34688 = state_34645__$1;(statearr_34653_34688[2] = null);
(statearr_34653_34688[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 7))
{var inst_34641 = (state_34645[2]);var state_34645__$1 = state_34645;var statearr_34654_34689 = state_34645__$1;(statearr_34654_34689[2] = inst_34641);
(statearr_34654_34689[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 8))
{var inst_34605 = (state_34645[10]);var inst_34604 = (state_34645[11]);var inst_34607 = (inst_34605 < inst_34604);var inst_34608 = inst_34607;var state_34645__$1 = state_34645;if(cljs.core.truth_(inst_34608))
{var statearr_34655_34690 = state_34645__$1;(statearr_34655_34690[1] = 10);
} else
{var statearr_34656_34691 = state_34645__$1;(statearr_34656_34691[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 9))
{var inst_34638 = (state_34645[2]);var state_34645__$1 = (function (){var statearr_34657 = state_34645;(statearr_34657[12] = inst_34638);
return statearr_34657;
})();var statearr_34658_34692 = state_34645__$1;(statearr_34658_34692[2] = null);
(statearr_34658_34692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 10))
{var inst_34603 = (state_34645[9]);var inst_34605 = (state_34645[10]);var inst_34610 = cljs.core._nth.call(null,inst_34603,inst_34605);var state_34645__$1 = state_34645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34645__$1,13,out,inst_34610);
} else
{if((state_val_34646 === 11))
{var inst_34616 = (state_34645[13]);var inst_34602 = (state_34645[8]);var inst_34616__$1 = cljs.core.seq.call(null,inst_34602);var state_34645__$1 = (function (){var statearr_34662 = state_34645;(statearr_34662[13] = inst_34616__$1);
return statearr_34662;
})();if(inst_34616__$1)
{var statearr_34663_34693 = state_34645__$1;(statearr_34663_34693[1] = 14);
} else
{var statearr_34664_34694 = state_34645__$1;(statearr_34664_34694[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 12))
{var inst_34636 = (state_34645[2]);var state_34645__$1 = state_34645;var statearr_34665_34695 = state_34645__$1;(statearr_34665_34695[2] = inst_34636);
(statearr_34665_34695[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 13))
{var inst_34602 = (state_34645[8]);var inst_34603 = (state_34645[9]);var inst_34605 = (state_34645[10]);var inst_34604 = (state_34645[11]);var inst_34612 = (state_34645[2]);var inst_34613 = (inst_34605 + 1);var tmp34659 = inst_34602;var tmp34660 = inst_34603;var tmp34661 = inst_34604;var inst_34602__$1 = tmp34659;var inst_34603__$1 = tmp34660;var inst_34604__$1 = tmp34661;var inst_34605__$1 = inst_34613;var state_34645__$1 = (function (){var statearr_34666 = state_34645;(statearr_34666[8] = inst_34602__$1);
(statearr_34666[9] = inst_34603__$1);
(statearr_34666[10] = inst_34605__$1);
(statearr_34666[11] = inst_34604__$1);
(statearr_34666[14] = inst_34612);
return statearr_34666;
})();var statearr_34667_34696 = state_34645__$1;(statearr_34667_34696[2] = null);
(statearr_34667_34696[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 14))
{var inst_34616 = (state_34645[13]);var inst_34618 = cljs.core.chunked_seq_QMARK_.call(null,inst_34616);var state_34645__$1 = state_34645;if(inst_34618)
{var statearr_34668_34697 = state_34645__$1;(statearr_34668_34697[1] = 17);
} else
{var statearr_34669_34698 = state_34645__$1;(statearr_34669_34698[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 15))
{var state_34645__$1 = state_34645;var statearr_34670_34699 = state_34645__$1;(statearr_34670_34699[2] = null);
(statearr_34670_34699[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 16))
{var inst_34634 = (state_34645[2]);var state_34645__$1 = state_34645;var statearr_34671_34700 = state_34645__$1;(statearr_34671_34700[2] = inst_34634);
(statearr_34671_34700[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 17))
{var inst_34616 = (state_34645[13]);var inst_34620 = cljs.core.chunk_first.call(null,inst_34616);var inst_34621 = cljs.core.chunk_rest.call(null,inst_34616);var inst_34622 = cljs.core.count.call(null,inst_34620);var inst_34602 = inst_34621;var inst_34603 = inst_34620;var inst_34604 = inst_34622;var inst_34605 = 0;var state_34645__$1 = (function (){var statearr_34672 = state_34645;(statearr_34672[8] = inst_34602);
(statearr_34672[9] = inst_34603);
(statearr_34672[10] = inst_34605);
(statearr_34672[11] = inst_34604);
return statearr_34672;
})();var statearr_34673_34701 = state_34645__$1;(statearr_34673_34701[2] = null);
(statearr_34673_34701[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 18))
{var inst_34616 = (state_34645[13]);var inst_34625 = cljs.core.first.call(null,inst_34616);var state_34645__$1 = state_34645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34645__$1,20,out,inst_34625);
} else
{if((state_val_34646 === 19))
{var inst_34631 = (state_34645[2]);var state_34645__$1 = state_34645;var statearr_34674_34702 = state_34645__$1;(statearr_34674_34702[2] = inst_34631);
(statearr_34674_34702[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34646 === 20))
{var inst_34616 = (state_34645[13]);var inst_34627 = (state_34645[2]);var inst_34628 = cljs.core.next.call(null,inst_34616);var inst_34602 = inst_34628;var inst_34603 = null;var inst_34604 = 0;var inst_34605 = 0;var state_34645__$1 = (function (){var statearr_34675 = state_34645;(statearr_34675[8] = inst_34602);
(statearr_34675[9] = inst_34603);
(statearr_34675[15] = inst_34627);
(statearr_34675[10] = inst_34605);
(statearr_34675[11] = inst_34604);
return statearr_34675;
})();var statearr_34676_34703 = state_34645__$1;(statearr_34676_34703[2] = null);
(statearr_34676_34703[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_34680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34680[0] = state_machine__5507__auto__);
(statearr_34680[1] = 1);
return statearr_34680;
});
var state_machine__5507__auto____1 = (function (state_34645){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34645);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34681){if((e34681 instanceof Object))
{var ex__5510__auto__ = e34681;var statearr_34682_34704 = state_34645;(statearr_34682_34704[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34705 = state_34645;
state_34645 = G__34705;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34683 = f__5522__auto__.call(null);(statearr_34683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34683;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34786 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34765){var state_val_34766 = (state_34765[1]);if((state_val_34766 === 1))
{var state_34765__$1 = state_34765;var statearr_34767_34787 = state_34765__$1;(statearr_34767_34787[2] = null);
(statearr_34767_34787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34766 === 2))
{var state_34765__$1 = state_34765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34765__$1,4,from);
} else
{if((state_val_34766 === 3))
{var inst_34763 = (state_34765[2]);var state_34765__$1 = state_34765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34765__$1,inst_34763);
} else
{if((state_val_34766 === 4))
{var inst_34748 = (state_34765[7]);var inst_34748__$1 = (state_34765[2]);var inst_34749 = (inst_34748__$1 == null);var state_34765__$1 = (function (){var statearr_34768 = state_34765;(statearr_34768[7] = inst_34748__$1);
return statearr_34768;
})();if(cljs.core.truth_(inst_34749))
{var statearr_34769_34788 = state_34765__$1;(statearr_34769_34788[1] = 5);
} else
{var statearr_34770_34789 = state_34765__$1;(statearr_34770_34789[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34766 === 5))
{var state_34765__$1 = state_34765;if(cljs.core.truth_(close_QMARK_))
{var statearr_34771_34790 = state_34765__$1;(statearr_34771_34790[1] = 8);
} else
{var statearr_34772_34791 = state_34765__$1;(statearr_34772_34791[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34766 === 6))
{var inst_34748 = (state_34765[7]);var state_34765__$1 = state_34765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34765__$1,11,to,inst_34748);
} else
{if((state_val_34766 === 7))
{var inst_34761 = (state_34765[2]);var state_34765__$1 = state_34765;var statearr_34773_34792 = state_34765__$1;(statearr_34773_34792[2] = inst_34761);
(statearr_34773_34792[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34766 === 8))
{var inst_34752 = cljs.core.async.close_BANG_.call(null,to);var state_34765__$1 = state_34765;var statearr_34774_34793 = state_34765__$1;(statearr_34774_34793[2] = inst_34752);
(statearr_34774_34793[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34766 === 9))
{var state_34765__$1 = state_34765;var statearr_34775_34794 = state_34765__$1;(statearr_34775_34794[2] = null);
(statearr_34775_34794[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34766 === 10))
{var inst_34755 = (state_34765[2]);var state_34765__$1 = state_34765;var statearr_34776_34795 = state_34765__$1;(statearr_34776_34795[2] = inst_34755);
(statearr_34776_34795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34766 === 11))
{var inst_34758 = (state_34765[2]);var state_34765__$1 = (function (){var statearr_34777 = state_34765;(statearr_34777[8] = inst_34758);
return statearr_34777;
})();var statearr_34778_34796 = state_34765__$1;(statearr_34778_34796[2] = null);
(statearr_34778_34796[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34782 = [null,null,null,null,null,null,null,null,null];(statearr_34782[0] = state_machine__5507__auto__);
(statearr_34782[1] = 1);
return statearr_34782;
});
var state_machine__5507__auto____1 = (function (state_34765){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34765);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34783){if((e34783 instanceof Object))
{var ex__5510__auto__ = e34783;var statearr_34784_34797 = state_34765;(statearr_34784_34797[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34798 = state_34765;
state_34765 = G__34798;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34785 = f__5522__auto__.call(null);(statearr_34785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34786);
return statearr_34785;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34885 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34863){var state_val_34864 = (state_34863[1]);if((state_val_34864 === 1))
{var state_34863__$1 = state_34863;var statearr_34865_34886 = state_34863__$1;(statearr_34865_34886[2] = null);
(statearr_34865_34886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 2))
{var state_34863__$1 = state_34863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34863__$1,4,ch);
} else
{if((state_val_34864 === 3))
{var inst_34861 = (state_34863[2]);var state_34863__$1 = state_34863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34863__$1,inst_34861);
} else
{if((state_val_34864 === 4))
{var inst_34844 = (state_34863[7]);var inst_34844__$1 = (state_34863[2]);var inst_34845 = (inst_34844__$1 == null);var state_34863__$1 = (function (){var statearr_34866 = state_34863;(statearr_34866[7] = inst_34844__$1);
return statearr_34866;
})();if(cljs.core.truth_(inst_34845))
{var statearr_34867_34887 = state_34863__$1;(statearr_34867_34887[1] = 5);
} else
{var statearr_34868_34888 = state_34863__$1;(statearr_34868_34888[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 5))
{var inst_34847 = cljs.core.async.close_BANG_.call(null,tc);var inst_34848 = cljs.core.async.close_BANG_.call(null,fc);var state_34863__$1 = (function (){var statearr_34869 = state_34863;(statearr_34869[8] = inst_34847);
return statearr_34869;
})();var statearr_34870_34889 = state_34863__$1;(statearr_34870_34889[2] = inst_34848);
(statearr_34870_34889[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 6))
{var inst_34844 = (state_34863[7]);var inst_34850 = p.call(null,inst_34844);var state_34863__$1 = state_34863;if(cljs.core.truth_(inst_34850))
{var statearr_34871_34890 = state_34863__$1;(statearr_34871_34890[1] = 9);
} else
{var statearr_34872_34891 = state_34863__$1;(statearr_34872_34891[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 7))
{var inst_34859 = (state_34863[2]);var state_34863__$1 = state_34863;var statearr_34873_34892 = state_34863__$1;(statearr_34873_34892[2] = inst_34859);
(statearr_34873_34892[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 8))
{var inst_34856 = (state_34863[2]);var state_34863__$1 = (function (){var statearr_34874 = state_34863;(statearr_34874[9] = inst_34856);
return statearr_34874;
})();var statearr_34875_34893 = state_34863__$1;(statearr_34875_34893[2] = null);
(statearr_34875_34893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 9))
{var state_34863__$1 = state_34863;var statearr_34876_34894 = state_34863__$1;(statearr_34876_34894[2] = tc);
(statearr_34876_34894[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 10))
{var state_34863__$1 = state_34863;var statearr_34877_34895 = state_34863__$1;(statearr_34877_34895[2] = fc);
(statearr_34877_34895[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 11))
{var inst_34844 = (state_34863[7]);var inst_34854 = (state_34863[2]);var state_34863__$1 = state_34863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34863__$1,8,inst_34854,inst_34844);
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
var state_machine__5507__auto____0 = (function (){var statearr_34881 = [null,null,null,null,null,null,null,null,null,null];(statearr_34881[0] = state_machine__5507__auto__);
(statearr_34881[1] = 1);
return statearr_34881;
});
var state_machine__5507__auto____1 = (function (state_34863){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34882){if((e34882 instanceof Object))
{var ex__5510__auto__ = e34882;var statearr_34883_34896 = state_34863;(statearr_34883_34896[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34897 = state_34863;
state_34863 = G__34897;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34863){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34884 = f__5522__auto__.call(null);(statearr_34884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34885);
return statearr_34884;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34944){var state_val_34945 = (state_34944[1]);if((state_val_34945 === 7))
{var inst_34940 = (state_34944[2]);var state_34944__$1 = state_34944;var statearr_34946_34962 = state_34944__$1;(statearr_34946_34962[2] = inst_34940);
(statearr_34946_34962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34945 === 6))
{var inst_34930 = (state_34944[7]);var inst_34933 = (state_34944[8]);var inst_34937 = f.call(null,inst_34930,inst_34933);var inst_34930__$1 = inst_34937;var state_34944__$1 = (function (){var statearr_34947 = state_34944;(statearr_34947[7] = inst_34930__$1);
return statearr_34947;
})();var statearr_34948_34963 = state_34944__$1;(statearr_34948_34963[2] = null);
(statearr_34948_34963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34945 === 5))
{var inst_34930 = (state_34944[7]);var state_34944__$1 = state_34944;var statearr_34949_34964 = state_34944__$1;(statearr_34949_34964[2] = inst_34930);
(statearr_34949_34964[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34945 === 4))
{var inst_34933 = (state_34944[8]);var inst_34933__$1 = (state_34944[2]);var inst_34934 = (inst_34933__$1 == null);var state_34944__$1 = (function (){var statearr_34950 = state_34944;(statearr_34950[8] = inst_34933__$1);
return statearr_34950;
})();if(cljs.core.truth_(inst_34934))
{var statearr_34951_34965 = state_34944__$1;(statearr_34951_34965[1] = 5);
} else
{var statearr_34952_34966 = state_34944__$1;(statearr_34952_34966[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34945 === 3))
{var inst_34942 = (state_34944[2]);var state_34944__$1 = state_34944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34944__$1,inst_34942);
} else
{if((state_val_34945 === 2))
{var state_34944__$1 = state_34944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34944__$1,4,ch);
} else
{if((state_val_34945 === 1))
{var inst_34930 = init;var state_34944__$1 = (function (){var statearr_34953 = state_34944;(statearr_34953[7] = inst_34930);
return statearr_34953;
})();var statearr_34954_34967 = state_34944__$1;(statearr_34954_34967[2] = null);
(statearr_34954_34967[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34958 = [null,null,null,null,null,null,null,null,null];(statearr_34958[0] = state_machine__5507__auto__);
(statearr_34958[1] = 1);
return statearr_34958;
});
var state_machine__5507__auto____1 = (function (state_34944){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34944);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34959){if((e34959 instanceof Object))
{var ex__5510__auto__ = e34959;var statearr_34960_34968 = state_34944;(statearr_34960_34968[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34944);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34969 = state_34944;
state_34944 = G__34969;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34944){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34961 = f__5522__auto__.call(null);(statearr_34961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34961;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35031){var state_val_35032 = (state_35031[1]);if((state_val_35032 === 1))
{var inst_35011 = cljs.core.seq.call(null,coll);var inst_35012 = inst_35011;var state_35031__$1 = (function (){var statearr_35033 = state_35031;(statearr_35033[7] = inst_35012);
return statearr_35033;
})();var statearr_35034_35052 = state_35031__$1;(statearr_35034_35052[2] = null);
(statearr_35034_35052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35032 === 2))
{var inst_35012 = (state_35031[7]);var state_35031__$1 = state_35031;if(cljs.core.truth_(inst_35012))
{var statearr_35035_35053 = state_35031__$1;(statearr_35035_35053[1] = 4);
} else
{var statearr_35036_35054 = state_35031__$1;(statearr_35036_35054[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35032 === 3))
{var inst_35029 = (state_35031[2]);var state_35031__$1 = state_35031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35031__$1,inst_35029);
} else
{if((state_val_35032 === 4))
{var inst_35012 = (state_35031[7]);var inst_35015 = cljs.core.first.call(null,inst_35012);var state_35031__$1 = state_35031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35031__$1,7,ch,inst_35015);
} else
{if((state_val_35032 === 5))
{var state_35031__$1 = state_35031;if(cljs.core.truth_(close_QMARK_))
{var statearr_35037_35055 = state_35031__$1;(statearr_35037_35055[1] = 8);
} else
{var statearr_35038_35056 = state_35031__$1;(statearr_35038_35056[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35032 === 6))
{var inst_35027 = (state_35031[2]);var state_35031__$1 = state_35031;var statearr_35039_35057 = state_35031__$1;(statearr_35039_35057[2] = inst_35027);
(statearr_35039_35057[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35032 === 7))
{var inst_35012 = (state_35031[7]);var inst_35017 = (state_35031[2]);var inst_35018 = cljs.core.next.call(null,inst_35012);var inst_35012__$1 = inst_35018;var state_35031__$1 = (function (){var statearr_35040 = state_35031;(statearr_35040[7] = inst_35012__$1);
(statearr_35040[8] = inst_35017);
return statearr_35040;
})();var statearr_35041_35058 = state_35031__$1;(statearr_35041_35058[2] = null);
(statearr_35041_35058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35032 === 8))
{var inst_35022 = cljs.core.async.close_BANG_.call(null,ch);var state_35031__$1 = state_35031;var statearr_35042_35059 = state_35031__$1;(statearr_35042_35059[2] = inst_35022);
(statearr_35042_35059[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35032 === 9))
{var state_35031__$1 = state_35031;var statearr_35043_35060 = state_35031__$1;(statearr_35043_35060[2] = null);
(statearr_35043_35060[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35032 === 10))
{var inst_35025 = (state_35031[2]);var state_35031__$1 = state_35031;var statearr_35044_35061 = state_35031__$1;(statearr_35044_35061[2] = inst_35025);
(statearr_35044_35061[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35048 = [null,null,null,null,null,null,null,null,null];(statearr_35048[0] = state_machine__5507__auto__);
(statearr_35048[1] = 1);
return statearr_35048;
});
var state_machine__5507__auto____1 = (function (state_35031){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35031);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35049){if((e35049 instanceof Object))
{var ex__5510__auto__ = e35049;var statearr_35050_35062 = state_35031;(statearr_35050_35062[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35031);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35063 = state_35031;
state_35031 = G__35063;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35031){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35051 = f__5522__auto__.call(null);(statearr_35051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35051;
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
cljs.core.async.Mux = (function (){var obj35065 = {};return obj35065;
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
cljs.core.async.Mult = (function (){var obj35067 = {};return obj35067;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35291 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35291 = (function (cs,ch,mult,meta35292){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35292 = meta35292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35291.cljs$lang$type = true;
cljs.core.async.t35291.cljs$lang$ctorStr = "cljs.core.async/t35291";
cljs.core.async.t35291.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35291");
});})(cs))
;
cljs.core.async.t35291.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35291.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35291.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35291.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35291.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35291.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35293){var self__ = this;
var _35293__$1 = this;return self__.meta35292;
});})(cs))
;
cljs.core.async.t35291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35293,meta35292__$1){var self__ = this;
var _35293__$1 = this;return (new cljs.core.async.t35291(self__.cs,self__.ch,self__.mult,meta35292__$1));
});})(cs))
;
cljs.core.async.__GT_t35291 = ((function (cs){
return (function __GT_t35291(cs__$1,ch__$1,mult__$1,meta35292){return (new cljs.core.async.t35291(cs__$1,ch__$1,mult__$1,meta35292));
});})(cs))
;
}
return (new cljs.core.async.t35291(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___35514 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35428){var state_val_35429 = (state_35428[1]);if((state_val_35429 === 32))
{var inst_35296 = (state_35428[7]);var inst_35372 = (state_35428[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35428,31,Object,null,30);var inst_35379 = cljs.core.async.put_BANG_.call(null,inst_35372,inst_35296,done);var state_35428__$1 = state_35428;var statearr_35430_35515 = state_35428__$1;(statearr_35430_35515[2] = inst_35379);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35428__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 1))
{var state_35428__$1 = state_35428;var statearr_35431_35516 = state_35428__$1;(statearr_35431_35516[2] = null);
(statearr_35431_35516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 33))
{var inst_35385 = (state_35428[9]);var inst_35387 = cljs.core.chunked_seq_QMARK_.call(null,inst_35385);var state_35428__$1 = state_35428;if(inst_35387)
{var statearr_35432_35517 = state_35428__$1;(statearr_35432_35517[1] = 36);
} else
{var statearr_35433_35518 = state_35428__$1;(statearr_35433_35518[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 2))
{var state_35428__$1 = state_35428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35428__$1,4,ch);
} else
{if((state_val_35429 === 34))
{var state_35428__$1 = state_35428;var statearr_35434_35519 = state_35428__$1;(statearr_35434_35519[2] = null);
(statearr_35434_35519[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 3))
{var inst_35426 = (state_35428[2]);var state_35428__$1 = state_35428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35428__$1,inst_35426);
} else
{if((state_val_35429 === 35))
{var inst_35410 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35435_35520 = state_35428__$1;(statearr_35435_35520[2] = inst_35410);
(statearr_35435_35520[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 4))
{var inst_35296 = (state_35428[7]);var inst_35296__$1 = (state_35428[2]);var inst_35297 = (inst_35296__$1 == null);var state_35428__$1 = (function (){var statearr_35436 = state_35428;(statearr_35436[7] = inst_35296__$1);
return statearr_35436;
})();if(cljs.core.truth_(inst_35297))
{var statearr_35437_35521 = state_35428__$1;(statearr_35437_35521[1] = 5);
} else
{var statearr_35438_35522 = state_35428__$1;(statearr_35438_35522[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 36))
{var inst_35385 = (state_35428[9]);var inst_35389 = cljs.core.chunk_first.call(null,inst_35385);var inst_35390 = cljs.core.chunk_rest.call(null,inst_35385);var inst_35391 = cljs.core.count.call(null,inst_35389);var inst_35364 = inst_35390;var inst_35365 = inst_35389;var inst_35366 = inst_35391;var inst_35367 = 0;var state_35428__$1 = (function (){var statearr_35439 = state_35428;(statearr_35439[10] = inst_35367);
(statearr_35439[11] = inst_35366);
(statearr_35439[12] = inst_35364);
(statearr_35439[13] = inst_35365);
return statearr_35439;
})();var statearr_35440_35523 = state_35428__$1;(statearr_35440_35523[2] = null);
(statearr_35440_35523[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 5))
{var inst_35303 = cljs.core.deref.call(null,cs);var inst_35304 = cljs.core.seq.call(null,inst_35303);var inst_35305 = inst_35304;var inst_35306 = null;var inst_35307 = 0;var inst_35308 = 0;var state_35428__$1 = (function (){var statearr_35441 = state_35428;(statearr_35441[14] = inst_35308);
(statearr_35441[15] = inst_35305);
(statearr_35441[16] = inst_35306);
(statearr_35441[17] = inst_35307);
return statearr_35441;
})();var statearr_35442_35524 = state_35428__$1;(statearr_35442_35524[2] = null);
(statearr_35442_35524[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 37))
{var inst_35385 = (state_35428[9]);var inst_35394 = cljs.core.first.call(null,inst_35385);var state_35428__$1 = (function (){var statearr_35443 = state_35428;(statearr_35443[18] = inst_35394);
return statearr_35443;
})();var statearr_35444_35525 = state_35428__$1;(statearr_35444_35525[2] = null);
(statearr_35444_35525[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 6))
{var inst_35356 = (state_35428[19]);var inst_35355 = cljs.core.deref.call(null,cs);var inst_35356__$1 = cljs.core.keys.call(null,inst_35355);var inst_35357 = cljs.core.count.call(null,inst_35356__$1);var inst_35358 = cljs.core.reset_BANG_.call(null,dctr,inst_35357);var inst_35363 = cljs.core.seq.call(null,inst_35356__$1);var inst_35364 = inst_35363;var inst_35365 = null;var inst_35366 = 0;var inst_35367 = 0;var state_35428__$1 = (function (){var statearr_35445 = state_35428;(statearr_35445[10] = inst_35367);
(statearr_35445[11] = inst_35366);
(statearr_35445[12] = inst_35364);
(statearr_35445[13] = inst_35365);
(statearr_35445[20] = inst_35358);
(statearr_35445[19] = inst_35356__$1);
return statearr_35445;
})();var statearr_35446_35526 = state_35428__$1;(statearr_35446_35526[2] = null);
(statearr_35446_35526[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 38))
{var inst_35407 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35447_35527 = state_35428__$1;(statearr_35447_35527[2] = inst_35407);
(statearr_35447_35527[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 7))
{var inst_35424 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35448_35528 = state_35428__$1;(statearr_35448_35528[2] = inst_35424);
(statearr_35448_35528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 39))
{var inst_35385 = (state_35428[9]);var inst_35403 = (state_35428[2]);var inst_35404 = cljs.core.next.call(null,inst_35385);var inst_35364 = inst_35404;var inst_35365 = null;var inst_35366 = 0;var inst_35367 = 0;var state_35428__$1 = (function (){var statearr_35449 = state_35428;(statearr_35449[21] = inst_35403);
(statearr_35449[10] = inst_35367);
(statearr_35449[11] = inst_35366);
(statearr_35449[12] = inst_35364);
(statearr_35449[13] = inst_35365);
return statearr_35449;
})();var statearr_35450_35529 = state_35428__$1;(statearr_35450_35529[2] = null);
(statearr_35450_35529[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 8))
{var inst_35308 = (state_35428[14]);var inst_35307 = (state_35428[17]);var inst_35310 = (inst_35308 < inst_35307);var inst_35311 = inst_35310;var state_35428__$1 = state_35428;if(cljs.core.truth_(inst_35311))
{var statearr_35451_35530 = state_35428__$1;(statearr_35451_35530[1] = 10);
} else
{var statearr_35452_35531 = state_35428__$1;(statearr_35452_35531[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 40))
{var inst_35394 = (state_35428[18]);var inst_35395 = (state_35428[2]);var inst_35396 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35397 = cljs.core.async.untap_STAR_.call(null,m,inst_35394);var state_35428__$1 = (function (){var statearr_35453 = state_35428;(statearr_35453[22] = inst_35395);
(statearr_35453[23] = inst_35396);
return statearr_35453;
})();var statearr_35454_35532 = state_35428__$1;(statearr_35454_35532[2] = inst_35397);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35428__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 9))
{var inst_35353 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35455_35533 = state_35428__$1;(statearr_35455_35533[2] = inst_35353);
(statearr_35455_35533[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 41))
{var inst_35296 = (state_35428[7]);var inst_35394 = (state_35428[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35428,40,Object,null,39);var inst_35401 = cljs.core.async.put_BANG_.call(null,inst_35394,inst_35296,done);var state_35428__$1 = state_35428;var statearr_35456_35534 = state_35428__$1;(statearr_35456_35534[2] = inst_35401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35428__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 10))
{var inst_35308 = (state_35428[14]);var inst_35306 = (state_35428[16]);var inst_35314 = cljs.core._nth.call(null,inst_35306,inst_35308);var inst_35315 = cljs.core.nth.call(null,inst_35314,0,null);var inst_35316 = cljs.core.nth.call(null,inst_35314,1,null);var state_35428__$1 = (function (){var statearr_35457 = state_35428;(statearr_35457[24] = inst_35315);
return statearr_35457;
})();if(cljs.core.truth_(inst_35316))
{var statearr_35458_35535 = state_35428__$1;(statearr_35458_35535[1] = 13);
} else
{var statearr_35459_35536 = state_35428__$1;(statearr_35459_35536[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 42))
{var state_35428__$1 = state_35428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35428__$1,45,dchan);
} else
{if((state_val_35429 === 11))
{var inst_35325 = (state_35428[25]);var inst_35305 = (state_35428[15]);var inst_35325__$1 = cljs.core.seq.call(null,inst_35305);var state_35428__$1 = (function (){var statearr_35460 = state_35428;(statearr_35460[25] = inst_35325__$1);
return statearr_35460;
})();if(inst_35325__$1)
{var statearr_35461_35537 = state_35428__$1;(statearr_35461_35537[1] = 16);
} else
{var statearr_35462_35538 = state_35428__$1;(statearr_35462_35538[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 43))
{var state_35428__$1 = state_35428;var statearr_35463_35539 = state_35428__$1;(statearr_35463_35539[2] = null);
(statearr_35463_35539[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 12))
{var inst_35351 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35464_35540 = state_35428__$1;(statearr_35464_35540[2] = inst_35351);
(statearr_35464_35540[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 44))
{var inst_35421 = (state_35428[2]);var state_35428__$1 = (function (){var statearr_35465 = state_35428;(statearr_35465[26] = inst_35421);
return statearr_35465;
})();var statearr_35466_35541 = state_35428__$1;(statearr_35466_35541[2] = null);
(statearr_35466_35541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 13))
{var inst_35315 = (state_35428[24]);var inst_35318 = cljs.core.async.close_BANG_.call(null,inst_35315);var state_35428__$1 = state_35428;var statearr_35467_35542 = state_35428__$1;(statearr_35467_35542[2] = inst_35318);
(statearr_35467_35542[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 45))
{var inst_35418 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35471_35543 = state_35428__$1;(statearr_35471_35543[2] = inst_35418);
(statearr_35471_35543[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 14))
{var state_35428__$1 = state_35428;var statearr_35472_35544 = state_35428__$1;(statearr_35472_35544[2] = null);
(statearr_35472_35544[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 15))
{var inst_35308 = (state_35428[14]);var inst_35305 = (state_35428[15]);var inst_35306 = (state_35428[16]);var inst_35307 = (state_35428[17]);var inst_35321 = (state_35428[2]);var inst_35322 = (inst_35308 + 1);var tmp35468 = inst_35305;var tmp35469 = inst_35306;var tmp35470 = inst_35307;var inst_35305__$1 = tmp35468;var inst_35306__$1 = tmp35469;var inst_35307__$1 = tmp35470;var inst_35308__$1 = inst_35322;var state_35428__$1 = (function (){var statearr_35473 = state_35428;(statearr_35473[14] = inst_35308__$1);
(statearr_35473[27] = inst_35321);
(statearr_35473[15] = inst_35305__$1);
(statearr_35473[16] = inst_35306__$1);
(statearr_35473[17] = inst_35307__$1);
return statearr_35473;
})();var statearr_35474_35545 = state_35428__$1;(statearr_35474_35545[2] = null);
(statearr_35474_35545[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 16))
{var inst_35325 = (state_35428[25]);var inst_35327 = cljs.core.chunked_seq_QMARK_.call(null,inst_35325);var state_35428__$1 = state_35428;if(inst_35327)
{var statearr_35475_35546 = state_35428__$1;(statearr_35475_35546[1] = 19);
} else
{var statearr_35476_35547 = state_35428__$1;(statearr_35476_35547[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 17))
{var state_35428__$1 = state_35428;var statearr_35477_35548 = state_35428__$1;(statearr_35477_35548[2] = null);
(statearr_35477_35548[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 18))
{var inst_35349 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35478_35549 = state_35428__$1;(statearr_35478_35549[2] = inst_35349);
(statearr_35478_35549[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 19))
{var inst_35325 = (state_35428[25]);var inst_35329 = cljs.core.chunk_first.call(null,inst_35325);var inst_35330 = cljs.core.chunk_rest.call(null,inst_35325);var inst_35331 = cljs.core.count.call(null,inst_35329);var inst_35305 = inst_35330;var inst_35306 = inst_35329;var inst_35307 = inst_35331;var inst_35308 = 0;var state_35428__$1 = (function (){var statearr_35479 = state_35428;(statearr_35479[14] = inst_35308);
(statearr_35479[15] = inst_35305);
(statearr_35479[16] = inst_35306);
(statearr_35479[17] = inst_35307);
return statearr_35479;
})();var statearr_35480_35550 = state_35428__$1;(statearr_35480_35550[2] = null);
(statearr_35480_35550[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 20))
{var inst_35325 = (state_35428[25]);var inst_35335 = cljs.core.first.call(null,inst_35325);var inst_35336 = cljs.core.nth.call(null,inst_35335,0,null);var inst_35337 = cljs.core.nth.call(null,inst_35335,1,null);var state_35428__$1 = (function (){var statearr_35481 = state_35428;(statearr_35481[28] = inst_35336);
return statearr_35481;
})();if(cljs.core.truth_(inst_35337))
{var statearr_35482_35551 = state_35428__$1;(statearr_35482_35551[1] = 22);
} else
{var statearr_35483_35552 = state_35428__$1;(statearr_35483_35552[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 21))
{var inst_35346 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35484_35553 = state_35428__$1;(statearr_35484_35553[2] = inst_35346);
(statearr_35484_35553[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 22))
{var inst_35336 = (state_35428[28]);var inst_35339 = cljs.core.async.close_BANG_.call(null,inst_35336);var state_35428__$1 = state_35428;var statearr_35485_35554 = state_35428__$1;(statearr_35485_35554[2] = inst_35339);
(statearr_35485_35554[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 23))
{var state_35428__$1 = state_35428;var statearr_35486_35555 = state_35428__$1;(statearr_35486_35555[2] = null);
(statearr_35486_35555[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 24))
{var inst_35325 = (state_35428[25]);var inst_35342 = (state_35428[2]);var inst_35343 = cljs.core.next.call(null,inst_35325);var inst_35305 = inst_35343;var inst_35306 = null;var inst_35307 = 0;var inst_35308 = 0;var state_35428__$1 = (function (){var statearr_35487 = state_35428;(statearr_35487[14] = inst_35308);
(statearr_35487[29] = inst_35342);
(statearr_35487[15] = inst_35305);
(statearr_35487[16] = inst_35306);
(statearr_35487[17] = inst_35307);
return statearr_35487;
})();var statearr_35488_35556 = state_35428__$1;(statearr_35488_35556[2] = null);
(statearr_35488_35556[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 25))
{var inst_35367 = (state_35428[10]);var inst_35366 = (state_35428[11]);var inst_35369 = (inst_35367 < inst_35366);var inst_35370 = inst_35369;var state_35428__$1 = state_35428;if(cljs.core.truth_(inst_35370))
{var statearr_35489_35557 = state_35428__$1;(statearr_35489_35557[1] = 27);
} else
{var statearr_35490_35558 = state_35428__$1;(statearr_35490_35558[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 26))
{var inst_35356 = (state_35428[19]);var inst_35414 = (state_35428[2]);var inst_35415 = cljs.core.seq.call(null,inst_35356);var state_35428__$1 = (function (){var statearr_35491 = state_35428;(statearr_35491[30] = inst_35414);
return statearr_35491;
})();if(inst_35415)
{var statearr_35492_35559 = state_35428__$1;(statearr_35492_35559[1] = 42);
} else
{var statearr_35493_35560 = state_35428__$1;(statearr_35493_35560[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 27))
{var inst_35367 = (state_35428[10]);var inst_35365 = (state_35428[13]);var inst_35372 = cljs.core._nth.call(null,inst_35365,inst_35367);var state_35428__$1 = (function (){var statearr_35494 = state_35428;(statearr_35494[8] = inst_35372);
return statearr_35494;
})();var statearr_35495_35561 = state_35428__$1;(statearr_35495_35561[2] = null);
(statearr_35495_35561[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 28))
{var inst_35385 = (state_35428[9]);var inst_35364 = (state_35428[12]);var inst_35385__$1 = cljs.core.seq.call(null,inst_35364);var state_35428__$1 = (function (){var statearr_35499 = state_35428;(statearr_35499[9] = inst_35385__$1);
return statearr_35499;
})();if(inst_35385__$1)
{var statearr_35500_35562 = state_35428__$1;(statearr_35500_35562[1] = 33);
} else
{var statearr_35501_35563 = state_35428__$1;(statearr_35501_35563[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 29))
{var inst_35412 = (state_35428[2]);var state_35428__$1 = state_35428;var statearr_35502_35564 = state_35428__$1;(statearr_35502_35564[2] = inst_35412);
(statearr_35502_35564[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 30))
{var inst_35367 = (state_35428[10]);var inst_35366 = (state_35428[11]);var inst_35364 = (state_35428[12]);var inst_35365 = (state_35428[13]);var inst_35381 = (state_35428[2]);var inst_35382 = (inst_35367 + 1);var tmp35496 = inst_35366;var tmp35497 = inst_35364;var tmp35498 = inst_35365;var inst_35364__$1 = tmp35497;var inst_35365__$1 = tmp35498;var inst_35366__$1 = tmp35496;var inst_35367__$1 = inst_35382;var state_35428__$1 = (function (){var statearr_35503 = state_35428;(statearr_35503[31] = inst_35381);
(statearr_35503[10] = inst_35367__$1);
(statearr_35503[11] = inst_35366__$1);
(statearr_35503[12] = inst_35364__$1);
(statearr_35503[13] = inst_35365__$1);
return statearr_35503;
})();var statearr_35504_35565 = state_35428__$1;(statearr_35504_35565[2] = null);
(statearr_35504_35565[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35429 === 31))
{var inst_35372 = (state_35428[8]);var inst_35373 = (state_35428[2]);var inst_35374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35375 = cljs.core.async.untap_STAR_.call(null,m,inst_35372);var state_35428__$1 = (function (){var statearr_35505 = state_35428;(statearr_35505[32] = inst_35373);
(statearr_35505[33] = inst_35374);
return statearr_35505;
})();var statearr_35506_35566 = state_35428__$1;(statearr_35506_35566[2] = inst_35375);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35428__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35510[0] = state_machine__5507__auto__);
(statearr_35510[1] = 1);
return statearr_35510;
});
var state_machine__5507__auto____1 = (function (state_35428){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35428);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35511){if((e35511 instanceof Object))
{var ex__5510__auto__ = e35511;var statearr_35512_35567 = state_35428;(statearr_35512_35567[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35568 = state_35428;
state_35428 = G__35568;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35428){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35513 = f__5522__auto__.call(null);(statearr_35513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35514);
return statearr_35513;
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
cljs.core.async.Mix = (function (){var obj35570 = {};return obj35570;
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
;var m = (function (){if(typeof cljs.core.async.t35680 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35680 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35681){
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
this.meta35681 = meta35681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35680.cljs$lang$type = true;
cljs.core.async.t35680.cljs$lang$ctorStr = "cljs.core.async/t35680";
cljs.core.async.t35680.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35680");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35680.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35682){var self__ = this;
var _35682__$1 = this;return self__.meta35681;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35682,meta35681__$1){var self__ = this;
var _35682__$1 = this;return (new cljs.core.async.t35680(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35681__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35680 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35680(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35681){return (new cljs.core.async.t35680(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35681));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35680(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35747){var state_val_35748 = (state_35747[1]);if((state_val_35748 === 1))
{var inst_35686 = (state_35747[7]);var inst_35686__$1 = calc_state.call(null);var inst_35687 = cljs.core.seq_QMARK_.call(null,inst_35686__$1);var state_35747__$1 = (function (){var statearr_35749 = state_35747;(statearr_35749[7] = inst_35686__$1);
return statearr_35749;
})();if(inst_35687)
{var statearr_35750_35790 = state_35747__$1;(statearr_35750_35790[1] = 2);
} else
{var statearr_35751_35791 = state_35747__$1;(statearr_35751_35791[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 2))
{var inst_35686 = (state_35747[7]);var inst_35689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35686);var state_35747__$1 = state_35747;var statearr_35752_35792 = state_35747__$1;(statearr_35752_35792[2] = inst_35689);
(statearr_35752_35792[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 3))
{var inst_35686 = (state_35747[7]);var state_35747__$1 = state_35747;var statearr_35753_35793 = state_35747__$1;(statearr_35753_35793[2] = inst_35686);
(statearr_35753_35793[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 4))
{var inst_35686 = (state_35747[7]);var inst_35692 = (state_35747[2]);var inst_35693 = cljs.core.get.call(null,inst_35692,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35694 = cljs.core.get.call(null,inst_35692,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35695 = cljs.core.get.call(null,inst_35692,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35696 = inst_35686;var state_35747__$1 = (function (){var statearr_35754 = state_35747;(statearr_35754[8] = inst_35694);
(statearr_35754[9] = inst_35695);
(statearr_35754[10] = inst_35693);
(statearr_35754[11] = inst_35696);
return statearr_35754;
})();var statearr_35755_35794 = state_35747__$1;(statearr_35755_35794[2] = null);
(statearr_35755_35794[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 5))
{var inst_35696 = (state_35747[11]);var inst_35699 = cljs.core.seq_QMARK_.call(null,inst_35696);var state_35747__$1 = state_35747;if(inst_35699)
{var statearr_35756_35795 = state_35747__$1;(statearr_35756_35795[1] = 7);
} else
{var statearr_35757_35796 = state_35747__$1;(statearr_35757_35796[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 6))
{var inst_35745 = (state_35747[2]);var state_35747__$1 = state_35747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35747__$1,inst_35745);
} else
{if((state_val_35748 === 7))
{var inst_35696 = (state_35747[11]);var inst_35701 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35696);var state_35747__$1 = state_35747;var statearr_35758_35797 = state_35747__$1;(statearr_35758_35797[2] = inst_35701);
(statearr_35758_35797[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 8))
{var inst_35696 = (state_35747[11]);var state_35747__$1 = state_35747;var statearr_35759_35798 = state_35747__$1;(statearr_35759_35798[2] = inst_35696);
(statearr_35759_35798[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 9))
{var inst_35704 = (state_35747[12]);var inst_35704__$1 = (state_35747[2]);var inst_35705 = cljs.core.get.call(null,inst_35704__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35706 = cljs.core.get.call(null,inst_35704__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35707 = cljs.core.get.call(null,inst_35704__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35747__$1 = (function (){var statearr_35760 = state_35747;(statearr_35760[12] = inst_35704__$1);
(statearr_35760[13] = inst_35707);
(statearr_35760[14] = inst_35706);
return statearr_35760;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35747__$1,10,inst_35705);
} else
{if((state_val_35748 === 10))
{var inst_35711 = (state_35747[15]);var inst_35712 = (state_35747[16]);var inst_35710 = (state_35747[2]);var inst_35711__$1 = cljs.core.nth.call(null,inst_35710,0,null);var inst_35712__$1 = cljs.core.nth.call(null,inst_35710,1,null);var inst_35713 = (inst_35711__$1 == null);var inst_35714 = cljs.core._EQ_.call(null,inst_35712__$1,change);var inst_35715 = (inst_35713) || (inst_35714);var state_35747__$1 = (function (){var statearr_35761 = state_35747;(statearr_35761[15] = inst_35711__$1);
(statearr_35761[16] = inst_35712__$1);
return statearr_35761;
})();if(cljs.core.truth_(inst_35715))
{var statearr_35762_35799 = state_35747__$1;(statearr_35762_35799[1] = 11);
} else
{var statearr_35763_35800 = state_35747__$1;(statearr_35763_35800[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 11))
{var inst_35711 = (state_35747[15]);var inst_35717 = (inst_35711 == null);var state_35747__$1 = state_35747;if(cljs.core.truth_(inst_35717))
{var statearr_35764_35801 = state_35747__$1;(statearr_35764_35801[1] = 14);
} else
{var statearr_35765_35802 = state_35747__$1;(statearr_35765_35802[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 12))
{var inst_35707 = (state_35747[13]);var inst_35726 = (state_35747[17]);var inst_35712 = (state_35747[16]);var inst_35726__$1 = inst_35707.call(null,inst_35712);var state_35747__$1 = (function (){var statearr_35766 = state_35747;(statearr_35766[17] = inst_35726__$1);
return statearr_35766;
})();if(cljs.core.truth_(inst_35726__$1))
{var statearr_35767_35803 = state_35747__$1;(statearr_35767_35803[1] = 17);
} else
{var statearr_35768_35804 = state_35747__$1;(statearr_35768_35804[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 13))
{var inst_35743 = (state_35747[2]);var state_35747__$1 = state_35747;var statearr_35769_35805 = state_35747__$1;(statearr_35769_35805[2] = inst_35743);
(statearr_35769_35805[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 14))
{var inst_35712 = (state_35747[16]);var inst_35719 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35712);var state_35747__$1 = state_35747;var statearr_35770_35806 = state_35747__$1;(statearr_35770_35806[2] = inst_35719);
(statearr_35770_35806[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 15))
{var state_35747__$1 = state_35747;var statearr_35771_35807 = state_35747__$1;(statearr_35771_35807[2] = null);
(statearr_35771_35807[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 16))
{var inst_35722 = (state_35747[2]);var inst_35723 = calc_state.call(null);var inst_35696 = inst_35723;var state_35747__$1 = (function (){var statearr_35772 = state_35747;(statearr_35772[18] = inst_35722);
(statearr_35772[11] = inst_35696);
return statearr_35772;
})();var statearr_35773_35808 = state_35747__$1;(statearr_35773_35808[2] = null);
(statearr_35773_35808[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 17))
{var inst_35726 = (state_35747[17]);var state_35747__$1 = state_35747;var statearr_35774_35809 = state_35747__$1;(statearr_35774_35809[2] = inst_35726);
(statearr_35774_35809[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 18))
{var inst_35707 = (state_35747[13]);var inst_35706 = (state_35747[14]);var inst_35712 = (state_35747[16]);var inst_35729 = cljs.core.empty_QMARK_.call(null,inst_35707);var inst_35730 = inst_35706.call(null,inst_35712);var inst_35731 = cljs.core.not.call(null,inst_35730);var inst_35732 = (inst_35729) && (inst_35731);var state_35747__$1 = state_35747;var statearr_35775_35810 = state_35747__$1;(statearr_35775_35810[2] = inst_35732);
(statearr_35775_35810[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 19))
{var inst_35734 = (state_35747[2]);var state_35747__$1 = state_35747;if(cljs.core.truth_(inst_35734))
{var statearr_35776_35811 = state_35747__$1;(statearr_35776_35811[1] = 20);
} else
{var statearr_35777_35812 = state_35747__$1;(statearr_35777_35812[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 20))
{var inst_35711 = (state_35747[15]);var state_35747__$1 = state_35747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35747__$1,23,out,inst_35711);
} else
{if((state_val_35748 === 21))
{var state_35747__$1 = state_35747;var statearr_35778_35813 = state_35747__$1;(statearr_35778_35813[2] = null);
(statearr_35778_35813[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 22))
{var inst_35704 = (state_35747[12]);var inst_35740 = (state_35747[2]);var inst_35696 = inst_35704;var state_35747__$1 = (function (){var statearr_35779 = state_35747;(statearr_35779[19] = inst_35740);
(statearr_35779[11] = inst_35696);
return statearr_35779;
})();var statearr_35780_35814 = state_35747__$1;(statearr_35780_35814[2] = null);
(statearr_35780_35814[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35748 === 23))
{var inst_35737 = (state_35747[2]);var state_35747__$1 = state_35747;var statearr_35781_35815 = state_35747__$1;(statearr_35781_35815[2] = inst_35737);
(statearr_35781_35815[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_35785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35785[0] = state_machine__5507__auto__);
(statearr_35785[1] = 1);
return statearr_35785;
});
var state_machine__5507__auto____1 = (function (state_35747){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35747);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35786){if((e35786 instanceof Object))
{var ex__5510__auto__ = e35786;var statearr_35787_35816 = state_35747;(statearr_35787_35816[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35747);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35817 = state_35747;
state_35747 = G__35817;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35747){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35788 = f__5522__auto__.call(null);(statearr_35788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35789);
return statearr_35788;
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
cljs.core.async.Pub = (function (){var obj35819 = {};return obj35819;
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
return (function (p1__35820_SHARP_){if(cljs.core.truth_(p1__35820_SHARP_.call(null,topic)))
{return p1__35820_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35820_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35945 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35946){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35946 = meta35946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35945.cljs$lang$type = true;
cljs.core.async.t35945.cljs$lang$ctorStr = "cljs.core.async/t35945";
cljs.core.async.t35945.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35945");
});})(mults,ensure_mult))
;
cljs.core.async.t35945.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35945.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35945.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35945.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35945.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35945.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35947){var self__ = this;
var _35947__$1 = this;return self__.meta35946;
});})(mults,ensure_mult))
;
cljs.core.async.t35945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35947,meta35946__$1){var self__ = this;
var _35947__$1 = this;return (new cljs.core.async.t35945(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35946__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35945 = ((function (mults,ensure_mult){
return (function __GT_t35945(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35946){return (new cljs.core.async.t35945(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35946));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35945(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36021){var state_val_36022 = (state_36021[1]);if((state_val_36022 === 1))
{var state_36021__$1 = state_36021;var statearr_36023_36070 = state_36021__$1;(statearr_36023_36070[2] = null);
(statearr_36023_36070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 2))
{var state_36021__$1 = state_36021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36021__$1,4,ch);
} else
{if((state_val_36022 === 3))
{var inst_36019 = (state_36021[2]);var state_36021__$1 = state_36021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36021__$1,inst_36019);
} else
{if((state_val_36022 === 4))
{var inst_35950 = (state_36021[7]);var inst_35950__$1 = (state_36021[2]);var inst_35951 = (inst_35950__$1 == null);var state_36021__$1 = (function (){var statearr_36024 = state_36021;(statearr_36024[7] = inst_35950__$1);
return statearr_36024;
})();if(cljs.core.truth_(inst_35951))
{var statearr_36025_36071 = state_36021__$1;(statearr_36025_36071[1] = 5);
} else
{var statearr_36026_36072 = state_36021__$1;(statearr_36026_36072[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 5))
{var inst_35957 = cljs.core.deref.call(null,mults);var inst_35958 = cljs.core.vals.call(null,inst_35957);var inst_35959 = cljs.core.seq.call(null,inst_35958);var inst_35960 = inst_35959;var inst_35961 = null;var inst_35962 = 0;var inst_35963 = 0;var state_36021__$1 = (function (){var statearr_36027 = state_36021;(statearr_36027[8] = inst_35963);
(statearr_36027[9] = inst_35962);
(statearr_36027[10] = inst_35961);
(statearr_36027[11] = inst_35960);
return statearr_36027;
})();var statearr_36028_36073 = state_36021__$1;(statearr_36028_36073[2] = null);
(statearr_36028_36073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 6))
{var inst_36000 = (state_36021[12]);var inst_35998 = (state_36021[13]);var inst_35950 = (state_36021[7]);var inst_35998__$1 = topic_fn.call(null,inst_35950);var inst_35999 = cljs.core.deref.call(null,mults);var inst_36000__$1 = cljs.core.get.call(null,inst_35999,inst_35998__$1);var state_36021__$1 = (function (){var statearr_36029 = state_36021;(statearr_36029[12] = inst_36000__$1);
(statearr_36029[13] = inst_35998__$1);
return statearr_36029;
})();if(cljs.core.truth_(inst_36000__$1))
{var statearr_36030_36074 = state_36021__$1;(statearr_36030_36074[1] = 19);
} else
{var statearr_36031_36075 = state_36021__$1;(statearr_36031_36075[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 7))
{var inst_36017 = (state_36021[2]);var state_36021__$1 = state_36021;var statearr_36032_36076 = state_36021__$1;(statearr_36032_36076[2] = inst_36017);
(statearr_36032_36076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 8))
{var inst_35963 = (state_36021[8]);var inst_35962 = (state_36021[9]);var inst_35965 = (inst_35963 < inst_35962);var inst_35966 = inst_35965;var state_36021__$1 = state_36021;if(cljs.core.truth_(inst_35966))
{var statearr_36036_36077 = state_36021__$1;(statearr_36036_36077[1] = 10);
} else
{var statearr_36037_36078 = state_36021__$1;(statearr_36037_36078[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 9))
{var inst_35996 = (state_36021[2]);var state_36021__$1 = state_36021;var statearr_36038_36079 = state_36021__$1;(statearr_36038_36079[2] = inst_35996);
(statearr_36038_36079[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 10))
{var inst_35963 = (state_36021[8]);var inst_35962 = (state_36021[9]);var inst_35961 = (state_36021[10]);var inst_35960 = (state_36021[11]);var inst_35968 = cljs.core._nth.call(null,inst_35961,inst_35963);var inst_35969 = cljs.core.async.muxch_STAR_.call(null,inst_35968);var inst_35970 = cljs.core.async.close_BANG_.call(null,inst_35969);var inst_35971 = (inst_35963 + 1);var tmp36033 = inst_35962;var tmp36034 = inst_35961;var tmp36035 = inst_35960;var inst_35960__$1 = tmp36035;var inst_35961__$1 = tmp36034;var inst_35962__$1 = tmp36033;var inst_35963__$1 = inst_35971;var state_36021__$1 = (function (){var statearr_36039 = state_36021;(statearr_36039[14] = inst_35970);
(statearr_36039[8] = inst_35963__$1);
(statearr_36039[9] = inst_35962__$1);
(statearr_36039[10] = inst_35961__$1);
(statearr_36039[11] = inst_35960__$1);
return statearr_36039;
})();var statearr_36040_36080 = state_36021__$1;(statearr_36040_36080[2] = null);
(statearr_36040_36080[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 11))
{var inst_35974 = (state_36021[15]);var inst_35960 = (state_36021[11]);var inst_35974__$1 = cljs.core.seq.call(null,inst_35960);var state_36021__$1 = (function (){var statearr_36041 = state_36021;(statearr_36041[15] = inst_35974__$1);
return statearr_36041;
})();if(inst_35974__$1)
{var statearr_36042_36081 = state_36021__$1;(statearr_36042_36081[1] = 13);
} else
{var statearr_36043_36082 = state_36021__$1;(statearr_36043_36082[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 12))
{var inst_35994 = (state_36021[2]);var state_36021__$1 = state_36021;var statearr_36044_36083 = state_36021__$1;(statearr_36044_36083[2] = inst_35994);
(statearr_36044_36083[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 13))
{var inst_35974 = (state_36021[15]);var inst_35976 = cljs.core.chunked_seq_QMARK_.call(null,inst_35974);var state_36021__$1 = state_36021;if(inst_35976)
{var statearr_36045_36084 = state_36021__$1;(statearr_36045_36084[1] = 16);
} else
{var statearr_36046_36085 = state_36021__$1;(statearr_36046_36085[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 14))
{var state_36021__$1 = state_36021;var statearr_36047_36086 = state_36021__$1;(statearr_36047_36086[2] = null);
(statearr_36047_36086[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 15))
{var inst_35992 = (state_36021[2]);var state_36021__$1 = state_36021;var statearr_36048_36087 = state_36021__$1;(statearr_36048_36087[2] = inst_35992);
(statearr_36048_36087[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 16))
{var inst_35974 = (state_36021[15]);var inst_35978 = cljs.core.chunk_first.call(null,inst_35974);var inst_35979 = cljs.core.chunk_rest.call(null,inst_35974);var inst_35980 = cljs.core.count.call(null,inst_35978);var inst_35960 = inst_35979;var inst_35961 = inst_35978;var inst_35962 = inst_35980;var inst_35963 = 0;var state_36021__$1 = (function (){var statearr_36049 = state_36021;(statearr_36049[8] = inst_35963);
(statearr_36049[9] = inst_35962);
(statearr_36049[10] = inst_35961);
(statearr_36049[11] = inst_35960);
return statearr_36049;
})();var statearr_36050_36088 = state_36021__$1;(statearr_36050_36088[2] = null);
(statearr_36050_36088[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 17))
{var inst_35974 = (state_36021[15]);var inst_35983 = cljs.core.first.call(null,inst_35974);var inst_35984 = cljs.core.async.muxch_STAR_.call(null,inst_35983);var inst_35985 = cljs.core.async.close_BANG_.call(null,inst_35984);var inst_35986 = cljs.core.next.call(null,inst_35974);var inst_35960 = inst_35986;var inst_35961 = null;var inst_35962 = 0;var inst_35963 = 0;var state_36021__$1 = (function (){var statearr_36051 = state_36021;(statearr_36051[16] = inst_35985);
(statearr_36051[8] = inst_35963);
(statearr_36051[9] = inst_35962);
(statearr_36051[10] = inst_35961);
(statearr_36051[11] = inst_35960);
return statearr_36051;
})();var statearr_36052_36089 = state_36021__$1;(statearr_36052_36089[2] = null);
(statearr_36052_36089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 18))
{var inst_35989 = (state_36021[2]);var state_36021__$1 = state_36021;var statearr_36053_36090 = state_36021__$1;(statearr_36053_36090[2] = inst_35989);
(statearr_36053_36090[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 19))
{var state_36021__$1 = state_36021;var statearr_36054_36091 = state_36021__$1;(statearr_36054_36091[2] = null);
(statearr_36054_36091[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 20))
{var state_36021__$1 = state_36021;var statearr_36055_36092 = state_36021__$1;(statearr_36055_36092[2] = null);
(statearr_36055_36092[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 21))
{var inst_36014 = (state_36021[2]);var state_36021__$1 = (function (){var statearr_36056 = state_36021;(statearr_36056[17] = inst_36014);
return statearr_36056;
})();var statearr_36057_36093 = state_36021__$1;(statearr_36057_36093[2] = null);
(statearr_36057_36093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 22))
{var inst_36011 = (state_36021[2]);var state_36021__$1 = state_36021;var statearr_36058_36094 = state_36021__$1;(statearr_36058_36094[2] = inst_36011);
(statearr_36058_36094[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 23))
{var inst_35998 = (state_36021[13]);var inst_36002 = (state_36021[2]);var inst_36003 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35998);var state_36021__$1 = (function (){var statearr_36059 = state_36021;(statearr_36059[18] = inst_36002);
return statearr_36059;
})();var statearr_36060_36095 = state_36021__$1;(statearr_36060_36095[2] = inst_36003);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36021__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36022 === 24))
{var inst_36000 = (state_36021[12]);var inst_35950 = (state_36021[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36021,23,Object,null,22);var inst_36007 = cljs.core.async.muxch_STAR_.call(null,inst_36000);var state_36021__$1 = state_36021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36021__$1,25,inst_36007,inst_35950);
} else
{if((state_val_36022 === 25))
{var inst_36009 = (state_36021[2]);var state_36021__$1 = state_36021;var statearr_36061_36096 = state_36021__$1;(statearr_36061_36096[2] = inst_36009);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36021__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36065[0] = state_machine__5507__auto__);
(statearr_36065[1] = 1);
return statearr_36065;
});
var state_machine__5507__auto____1 = (function (state_36021){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36021);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36066){if((e36066 instanceof Object))
{var ex__5510__auto__ = e36066;var statearr_36067_36097 = state_36021;(statearr_36067_36097[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36098 = state_36021;
state_36021 = G__36098;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36021){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36068 = f__5522__auto__.call(null);(statearr_36068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36069);
return statearr_36068;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36205){var state_val_36206 = (state_36205[1]);if((state_val_36206 === 1))
{var state_36205__$1 = state_36205;var statearr_36207_36236 = state_36205__$1;(statearr_36207_36236[2] = null);
(statearr_36207_36236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 2))
{var inst_36168 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36169 = 0;var state_36205__$1 = (function (){var statearr_36208 = state_36205;(statearr_36208[7] = inst_36168);
(statearr_36208[8] = inst_36169);
return statearr_36208;
})();var statearr_36209_36237 = state_36205__$1;(statearr_36209_36237[2] = null);
(statearr_36209_36237[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 3))
{var inst_36203 = (state_36205[2]);var state_36205__$1 = state_36205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36205__$1,inst_36203);
} else
{if((state_val_36206 === 4))
{var inst_36169 = (state_36205[8]);var inst_36171 = (inst_36169 < cnt);var state_36205__$1 = state_36205;if(cljs.core.truth_(inst_36171))
{var statearr_36210_36238 = state_36205__$1;(statearr_36210_36238[1] = 6);
} else
{var statearr_36211_36239 = state_36205__$1;(statearr_36211_36239[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 5))
{var inst_36189 = (state_36205[2]);var state_36205__$1 = (function (){var statearr_36212 = state_36205;(statearr_36212[9] = inst_36189);
return statearr_36212;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36205__$1,12,dchan);
} else
{if((state_val_36206 === 6))
{var state_36205__$1 = state_36205;var statearr_36213_36240 = state_36205__$1;(statearr_36213_36240[2] = null);
(statearr_36213_36240[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 7))
{var state_36205__$1 = state_36205;var statearr_36214_36241 = state_36205__$1;(statearr_36214_36241[2] = null);
(statearr_36214_36241[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 8))
{var inst_36187 = (state_36205[2]);var state_36205__$1 = state_36205;var statearr_36215_36242 = state_36205__$1;(statearr_36215_36242[2] = inst_36187);
(statearr_36215_36242[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 9))
{var inst_36169 = (state_36205[8]);var inst_36182 = (state_36205[2]);var inst_36183 = (inst_36169 + 1);var inst_36169__$1 = inst_36183;var state_36205__$1 = (function (){var statearr_36216 = state_36205;(statearr_36216[10] = inst_36182);
(statearr_36216[8] = inst_36169__$1);
return statearr_36216;
})();var statearr_36217_36243 = state_36205__$1;(statearr_36217_36243[2] = null);
(statearr_36217_36243[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 10))
{var inst_36173 = (state_36205[2]);var inst_36174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36205__$1 = (function (){var statearr_36218 = state_36205;(statearr_36218[11] = inst_36173);
return statearr_36218;
})();var statearr_36219_36244 = state_36205__$1;(statearr_36219_36244[2] = inst_36174);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36205__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 11))
{var inst_36169 = (state_36205[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36205,10,Object,null,9);var inst_36178 = chs__$1.call(null,inst_36169);var inst_36179 = done.call(null,inst_36169);var inst_36180 = cljs.core.async.take_BANG_.call(null,inst_36178,inst_36179);var state_36205__$1 = state_36205;var statearr_36220_36245 = state_36205__$1;(statearr_36220_36245[2] = inst_36180);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36205__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 12))
{var inst_36191 = (state_36205[12]);var inst_36191__$1 = (state_36205[2]);var inst_36192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36191__$1);var state_36205__$1 = (function (){var statearr_36221 = state_36205;(statearr_36221[12] = inst_36191__$1);
return statearr_36221;
})();if(cljs.core.truth_(inst_36192))
{var statearr_36222_36246 = state_36205__$1;(statearr_36222_36246[1] = 13);
} else
{var statearr_36223_36247 = state_36205__$1;(statearr_36223_36247[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 13))
{var inst_36194 = cljs.core.async.close_BANG_.call(null,out);var state_36205__$1 = state_36205;var statearr_36224_36248 = state_36205__$1;(statearr_36224_36248[2] = inst_36194);
(statearr_36224_36248[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 14))
{var inst_36191 = (state_36205[12]);var inst_36196 = cljs.core.apply.call(null,f,inst_36191);var state_36205__$1 = state_36205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36205__$1,16,out,inst_36196);
} else
{if((state_val_36206 === 15))
{var inst_36201 = (state_36205[2]);var state_36205__$1 = state_36205;var statearr_36225_36249 = state_36205__$1;(statearr_36225_36249[2] = inst_36201);
(statearr_36225_36249[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36206 === 16))
{var inst_36198 = (state_36205[2]);var state_36205__$1 = (function (){var statearr_36226 = state_36205;(statearr_36226[13] = inst_36198);
return statearr_36226;
})();var statearr_36227_36250 = state_36205__$1;(statearr_36227_36250[2] = null);
(statearr_36227_36250[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36231[0] = state_machine__5507__auto__);
(statearr_36231[1] = 1);
return statearr_36231;
});
var state_machine__5507__auto____1 = (function (state_36205){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36205);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36232){if((e36232 instanceof Object))
{var ex__5510__auto__ = e36232;var statearr_36233_36251 = state_36205;(statearr_36233_36251[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36205);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36252 = state_36205;
state_36205 = G__36252;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36205){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36234 = f__5522__auto__.call(null);(statearr_36234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36235);
return statearr_36234;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36336){var state_val_36337 = (state_36336[1]);if((state_val_36337 === 1))
{var inst_36307 = cljs.core.vec.call(null,chs);var inst_36308 = inst_36307;var state_36336__$1 = (function (){var statearr_36338 = state_36336;(statearr_36338[7] = inst_36308);
return statearr_36338;
})();var statearr_36339_36361 = state_36336__$1;(statearr_36339_36361[2] = null);
(statearr_36339_36361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36337 === 2))
{var inst_36308 = (state_36336[7]);var inst_36310 = cljs.core.count.call(null,inst_36308);var inst_36311 = (inst_36310 > 0);var state_36336__$1 = state_36336;if(cljs.core.truth_(inst_36311))
{var statearr_36340_36362 = state_36336__$1;(statearr_36340_36362[1] = 4);
} else
{var statearr_36341_36363 = state_36336__$1;(statearr_36341_36363[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36337 === 3))
{var inst_36334 = (state_36336[2]);var state_36336__$1 = state_36336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36336__$1,inst_36334);
} else
{if((state_val_36337 === 4))
{var inst_36308 = (state_36336[7]);var state_36336__$1 = state_36336;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36336__$1,7,inst_36308);
} else
{if((state_val_36337 === 5))
{var inst_36330 = cljs.core.async.close_BANG_.call(null,out);var state_36336__$1 = state_36336;var statearr_36342_36364 = state_36336__$1;(statearr_36342_36364[2] = inst_36330);
(statearr_36342_36364[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36337 === 6))
{var inst_36332 = (state_36336[2]);var state_36336__$1 = state_36336;var statearr_36343_36365 = state_36336__$1;(statearr_36343_36365[2] = inst_36332);
(statearr_36343_36365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36337 === 7))
{var inst_36315 = (state_36336[8]);var inst_36316 = (state_36336[9]);var inst_36315__$1 = (state_36336[2]);var inst_36316__$1 = cljs.core.nth.call(null,inst_36315__$1,0,null);var inst_36317 = cljs.core.nth.call(null,inst_36315__$1,1,null);var inst_36318 = (inst_36316__$1 == null);var state_36336__$1 = (function (){var statearr_36344 = state_36336;(statearr_36344[8] = inst_36315__$1);
(statearr_36344[9] = inst_36316__$1);
(statearr_36344[10] = inst_36317);
return statearr_36344;
})();if(cljs.core.truth_(inst_36318))
{var statearr_36345_36366 = state_36336__$1;(statearr_36345_36366[1] = 8);
} else
{var statearr_36346_36367 = state_36336__$1;(statearr_36346_36367[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36337 === 8))
{var inst_36315 = (state_36336[8]);var inst_36308 = (state_36336[7]);var inst_36316 = (state_36336[9]);var inst_36317 = (state_36336[10]);var inst_36320 = (function (){var c = inst_36317;var v = inst_36316;var vec__36313 = inst_36315;var cs = inst_36308;return ((function (c,v,vec__36313,cs,inst_36315,inst_36308,inst_36316,inst_36317,state_val_36337){
return (function (p1__36253_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36253_SHARP_);
});
;})(c,v,vec__36313,cs,inst_36315,inst_36308,inst_36316,inst_36317,state_val_36337))
})();var inst_36321 = cljs.core.filterv.call(null,inst_36320,inst_36308);var inst_36308__$1 = inst_36321;var state_36336__$1 = (function (){var statearr_36347 = state_36336;(statearr_36347[7] = inst_36308__$1);
return statearr_36347;
})();var statearr_36348_36368 = state_36336__$1;(statearr_36348_36368[2] = null);
(statearr_36348_36368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36337 === 9))
{var inst_36316 = (state_36336[9]);var state_36336__$1 = state_36336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36336__$1,11,out,inst_36316);
} else
{if((state_val_36337 === 10))
{var inst_36328 = (state_36336[2]);var state_36336__$1 = state_36336;var statearr_36350_36369 = state_36336__$1;(statearr_36350_36369[2] = inst_36328);
(statearr_36350_36369[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36337 === 11))
{var inst_36308 = (state_36336[7]);var inst_36325 = (state_36336[2]);var tmp36349 = inst_36308;var inst_36308__$1 = tmp36349;var state_36336__$1 = (function (){var statearr_36351 = state_36336;(statearr_36351[7] = inst_36308__$1);
(statearr_36351[11] = inst_36325);
return statearr_36351;
})();var statearr_36352_36370 = state_36336__$1;(statearr_36352_36370[2] = null);
(statearr_36352_36370[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36356 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36356[0] = state_machine__5507__auto__);
(statearr_36356[1] = 1);
return statearr_36356;
});
var state_machine__5507__auto____1 = (function (state_36336){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36336);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36357){if((e36357 instanceof Object))
{var ex__5510__auto__ = e36357;var statearr_36358_36371 = state_36336;(statearr_36358_36371[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36336);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36372 = state_36336;
state_36336 = G__36372;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36336){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36359 = f__5522__auto__.call(null);(statearr_36359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36360);
return statearr_36359;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36442){var state_val_36443 = (state_36442[1]);if((state_val_36443 === 1))
{var inst_36419 = 0;var state_36442__$1 = (function (){var statearr_36444 = state_36442;(statearr_36444[7] = inst_36419);
return statearr_36444;
})();var statearr_36445_36466 = state_36442__$1;(statearr_36445_36466[2] = null);
(statearr_36445_36466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36443 === 2))
{var inst_36419 = (state_36442[7]);var inst_36421 = (inst_36419 < n);var state_36442__$1 = state_36442;if(cljs.core.truth_(inst_36421))
{var statearr_36446_36467 = state_36442__$1;(statearr_36446_36467[1] = 4);
} else
{var statearr_36447_36468 = state_36442__$1;(statearr_36447_36468[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36443 === 3))
{var inst_36439 = (state_36442[2]);var inst_36440 = cljs.core.async.close_BANG_.call(null,out);var state_36442__$1 = (function (){var statearr_36448 = state_36442;(statearr_36448[8] = inst_36439);
return statearr_36448;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36442__$1,inst_36440);
} else
{if((state_val_36443 === 4))
{var state_36442__$1 = state_36442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36442__$1,7,ch);
} else
{if((state_val_36443 === 5))
{var state_36442__$1 = state_36442;var statearr_36449_36469 = state_36442__$1;(statearr_36449_36469[2] = null);
(statearr_36449_36469[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36443 === 6))
{var inst_36437 = (state_36442[2]);var state_36442__$1 = state_36442;var statearr_36450_36470 = state_36442__$1;(statearr_36450_36470[2] = inst_36437);
(statearr_36450_36470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36443 === 7))
{var inst_36424 = (state_36442[9]);var inst_36424__$1 = (state_36442[2]);var inst_36425 = (inst_36424__$1 == null);var inst_36426 = cljs.core.not.call(null,inst_36425);var state_36442__$1 = (function (){var statearr_36451 = state_36442;(statearr_36451[9] = inst_36424__$1);
return statearr_36451;
})();if(inst_36426)
{var statearr_36452_36471 = state_36442__$1;(statearr_36452_36471[1] = 8);
} else
{var statearr_36453_36472 = state_36442__$1;(statearr_36453_36472[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36443 === 8))
{var inst_36424 = (state_36442[9]);var state_36442__$1 = state_36442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36442__$1,11,out,inst_36424);
} else
{if((state_val_36443 === 9))
{var state_36442__$1 = state_36442;var statearr_36454_36473 = state_36442__$1;(statearr_36454_36473[2] = null);
(statearr_36454_36473[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36443 === 10))
{var inst_36434 = (state_36442[2]);var state_36442__$1 = state_36442;var statearr_36455_36474 = state_36442__$1;(statearr_36455_36474[2] = inst_36434);
(statearr_36455_36474[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36443 === 11))
{var inst_36419 = (state_36442[7]);var inst_36429 = (state_36442[2]);var inst_36430 = (inst_36419 + 1);var inst_36419__$1 = inst_36430;var state_36442__$1 = (function (){var statearr_36456 = state_36442;(statearr_36456[10] = inst_36429);
(statearr_36456[7] = inst_36419__$1);
return statearr_36456;
})();var statearr_36457_36475 = state_36442__$1;(statearr_36457_36475[2] = null);
(statearr_36457_36475[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36461 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36461[0] = state_machine__5507__auto__);
(statearr_36461[1] = 1);
return statearr_36461;
});
var state_machine__5507__auto____1 = (function (state_36442){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36442);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36462){if((e36462 instanceof Object))
{var ex__5510__auto__ = e36462;var statearr_36463_36476 = state_36442;(statearr_36463_36476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36477 = state_36442;
state_36442 = G__36477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36442){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36464 = f__5522__auto__.call(null);(statearr_36464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36465);
return statearr_36464;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36549){var state_val_36550 = (state_36549[1]);if((state_val_36550 === 1))
{var inst_36526 = null;var state_36549__$1 = (function (){var statearr_36551 = state_36549;(statearr_36551[7] = inst_36526);
return statearr_36551;
})();var statearr_36552_36575 = state_36549__$1;(statearr_36552_36575[2] = null);
(statearr_36552_36575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36550 === 2))
{var state_36549__$1 = state_36549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36549__$1,4,ch);
} else
{if((state_val_36550 === 3))
{var inst_36546 = (state_36549[2]);var inst_36547 = cljs.core.async.close_BANG_.call(null,out);var state_36549__$1 = (function (){var statearr_36553 = state_36549;(statearr_36553[8] = inst_36546);
return statearr_36553;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36549__$1,inst_36547);
} else
{if((state_val_36550 === 4))
{var inst_36529 = (state_36549[9]);var inst_36529__$1 = (state_36549[2]);var inst_36530 = (inst_36529__$1 == null);var inst_36531 = cljs.core.not.call(null,inst_36530);var state_36549__$1 = (function (){var statearr_36554 = state_36549;(statearr_36554[9] = inst_36529__$1);
return statearr_36554;
})();if(inst_36531)
{var statearr_36555_36576 = state_36549__$1;(statearr_36555_36576[1] = 5);
} else
{var statearr_36556_36577 = state_36549__$1;(statearr_36556_36577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36550 === 5))
{var inst_36529 = (state_36549[9]);var inst_36526 = (state_36549[7]);var inst_36533 = cljs.core._EQ_.call(null,inst_36529,inst_36526);var state_36549__$1 = state_36549;if(inst_36533)
{var statearr_36557_36578 = state_36549__$1;(statearr_36557_36578[1] = 8);
} else
{var statearr_36558_36579 = state_36549__$1;(statearr_36558_36579[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36550 === 6))
{var state_36549__$1 = state_36549;var statearr_36560_36580 = state_36549__$1;(statearr_36560_36580[2] = null);
(statearr_36560_36580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36550 === 7))
{var inst_36544 = (state_36549[2]);var state_36549__$1 = state_36549;var statearr_36561_36581 = state_36549__$1;(statearr_36561_36581[2] = inst_36544);
(statearr_36561_36581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36550 === 8))
{var inst_36526 = (state_36549[7]);var tmp36559 = inst_36526;var inst_36526__$1 = tmp36559;var state_36549__$1 = (function (){var statearr_36562 = state_36549;(statearr_36562[7] = inst_36526__$1);
return statearr_36562;
})();var statearr_36563_36582 = state_36549__$1;(statearr_36563_36582[2] = null);
(statearr_36563_36582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36550 === 9))
{var inst_36529 = (state_36549[9]);var state_36549__$1 = state_36549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36549__$1,11,out,inst_36529);
} else
{if((state_val_36550 === 10))
{var inst_36541 = (state_36549[2]);var state_36549__$1 = state_36549;var statearr_36564_36583 = state_36549__$1;(statearr_36564_36583[2] = inst_36541);
(statearr_36564_36583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36550 === 11))
{var inst_36529 = (state_36549[9]);var inst_36538 = (state_36549[2]);var inst_36526 = inst_36529;var state_36549__$1 = (function (){var statearr_36565 = state_36549;(statearr_36565[10] = inst_36538);
(statearr_36565[7] = inst_36526);
return statearr_36565;
})();var statearr_36566_36584 = state_36549__$1;(statearr_36566_36584[2] = null);
(statearr_36566_36584[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36570 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36570[0] = state_machine__5507__auto__);
(statearr_36570[1] = 1);
return statearr_36570;
});
var state_machine__5507__auto____1 = (function (state_36549){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36549);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36571){if((e36571 instanceof Object))
{var ex__5510__auto__ = e36571;var statearr_36572_36585 = state_36549;(statearr_36572_36585[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36586 = state_36549;
state_36549 = G__36586;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36549){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36573 = f__5522__auto__.call(null);(statearr_36573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36574);
return statearr_36573;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36721 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36691){var state_val_36692 = (state_36691[1]);if((state_val_36692 === 1))
{var inst_36654 = (new Array(n));var inst_36655 = inst_36654;var inst_36656 = 0;var state_36691__$1 = (function (){var statearr_36693 = state_36691;(statearr_36693[7] = inst_36656);
(statearr_36693[8] = inst_36655);
return statearr_36693;
})();var statearr_36694_36722 = state_36691__$1;(statearr_36694_36722[2] = null);
(statearr_36694_36722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 2))
{var state_36691__$1 = state_36691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,4,ch);
} else
{if((state_val_36692 === 3))
{var inst_36689 = (state_36691[2]);var state_36691__$1 = state_36691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36691__$1,inst_36689);
} else
{if((state_val_36692 === 4))
{var inst_36659 = (state_36691[9]);var inst_36659__$1 = (state_36691[2]);var inst_36660 = (inst_36659__$1 == null);var inst_36661 = cljs.core.not.call(null,inst_36660);var state_36691__$1 = (function (){var statearr_36695 = state_36691;(statearr_36695[9] = inst_36659__$1);
return statearr_36695;
})();if(inst_36661)
{var statearr_36696_36723 = state_36691__$1;(statearr_36696_36723[1] = 5);
} else
{var statearr_36697_36724 = state_36691__$1;(statearr_36697_36724[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 5))
{var inst_36659 = (state_36691[9]);var inst_36664 = (state_36691[10]);var inst_36656 = (state_36691[7]);var inst_36655 = (state_36691[8]);var inst_36663 = (inst_36655[inst_36656] = inst_36659);var inst_36664__$1 = (inst_36656 + 1);var inst_36665 = (inst_36664__$1 < n);var state_36691__$1 = (function (){var statearr_36698 = state_36691;(statearr_36698[11] = inst_36663);
(statearr_36698[10] = inst_36664__$1);
return statearr_36698;
})();if(cljs.core.truth_(inst_36665))
{var statearr_36699_36725 = state_36691__$1;(statearr_36699_36725[1] = 8);
} else
{var statearr_36700_36726 = state_36691__$1;(statearr_36700_36726[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 6))
{var inst_36656 = (state_36691[7]);var inst_36677 = (inst_36656 > 0);var state_36691__$1 = state_36691;if(cljs.core.truth_(inst_36677))
{var statearr_36702_36727 = state_36691__$1;(statearr_36702_36727[1] = 12);
} else
{var statearr_36703_36728 = state_36691__$1;(statearr_36703_36728[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 7))
{var inst_36687 = (state_36691[2]);var state_36691__$1 = state_36691;var statearr_36704_36729 = state_36691__$1;(statearr_36704_36729[2] = inst_36687);
(statearr_36704_36729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 8))
{var inst_36664 = (state_36691[10]);var inst_36655 = (state_36691[8]);var tmp36701 = inst_36655;var inst_36655__$1 = tmp36701;var inst_36656 = inst_36664;var state_36691__$1 = (function (){var statearr_36705 = state_36691;(statearr_36705[7] = inst_36656);
(statearr_36705[8] = inst_36655__$1);
return statearr_36705;
})();var statearr_36706_36730 = state_36691__$1;(statearr_36706_36730[2] = null);
(statearr_36706_36730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 9))
{var inst_36655 = (state_36691[8]);var inst_36669 = cljs.core.vec.call(null,inst_36655);var state_36691__$1 = state_36691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36691__$1,11,out,inst_36669);
} else
{if((state_val_36692 === 10))
{var inst_36675 = (state_36691[2]);var state_36691__$1 = state_36691;var statearr_36707_36731 = state_36691__$1;(statearr_36707_36731[2] = inst_36675);
(statearr_36707_36731[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 11))
{var inst_36671 = (state_36691[2]);var inst_36672 = (new Array(n));var inst_36655 = inst_36672;var inst_36656 = 0;var state_36691__$1 = (function (){var statearr_36708 = state_36691;(statearr_36708[12] = inst_36671);
(statearr_36708[7] = inst_36656);
(statearr_36708[8] = inst_36655);
return statearr_36708;
})();var statearr_36709_36732 = state_36691__$1;(statearr_36709_36732[2] = null);
(statearr_36709_36732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 12))
{var inst_36655 = (state_36691[8]);var inst_36679 = cljs.core.vec.call(null,inst_36655);var state_36691__$1 = state_36691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36691__$1,15,out,inst_36679);
} else
{if((state_val_36692 === 13))
{var state_36691__$1 = state_36691;var statearr_36710_36733 = state_36691__$1;(statearr_36710_36733[2] = null);
(statearr_36710_36733[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 14))
{var inst_36684 = (state_36691[2]);var inst_36685 = cljs.core.async.close_BANG_.call(null,out);var state_36691__$1 = (function (){var statearr_36711 = state_36691;(statearr_36711[13] = inst_36684);
return statearr_36711;
})();var statearr_36712_36734 = state_36691__$1;(statearr_36712_36734[2] = inst_36685);
(statearr_36712_36734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36692 === 15))
{var inst_36681 = (state_36691[2]);var state_36691__$1 = state_36691;var statearr_36713_36735 = state_36691__$1;(statearr_36713_36735[2] = inst_36681);
(statearr_36713_36735[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36717[0] = state_machine__5507__auto__);
(statearr_36717[1] = 1);
return statearr_36717;
});
var state_machine__5507__auto____1 = (function (state_36691){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36691);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36718){if((e36718 instanceof Object))
{var ex__5510__auto__ = e36718;var statearr_36719_36736 = state_36691;(statearr_36719_36736[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36737 = state_36691;
state_36691 = G__36737;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36691){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36720 = f__5522__auto__.call(null);(statearr_36720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36721);
return statearr_36720;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36880 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36850){var state_val_36851 = (state_36850[1]);if((state_val_36851 === 1))
{var inst_36809 = [];var inst_36810 = inst_36809;var inst_36811 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36850__$1 = (function (){var statearr_36852 = state_36850;(statearr_36852[7] = inst_36811);
(statearr_36852[8] = inst_36810);
return statearr_36852;
})();var statearr_36853_36881 = state_36850__$1;(statearr_36853_36881[2] = null);
(statearr_36853_36881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 2))
{var state_36850__$1 = state_36850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36850__$1,4,ch);
} else
{if((state_val_36851 === 3))
{var inst_36848 = (state_36850[2]);var state_36850__$1 = state_36850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36850__$1,inst_36848);
} else
{if((state_val_36851 === 4))
{var inst_36814 = (state_36850[9]);var inst_36814__$1 = (state_36850[2]);var inst_36815 = (inst_36814__$1 == null);var inst_36816 = cljs.core.not.call(null,inst_36815);var state_36850__$1 = (function (){var statearr_36854 = state_36850;(statearr_36854[9] = inst_36814__$1);
return statearr_36854;
})();if(inst_36816)
{var statearr_36855_36882 = state_36850__$1;(statearr_36855_36882[1] = 5);
} else
{var statearr_36856_36883 = state_36850__$1;(statearr_36856_36883[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 5))
{var inst_36811 = (state_36850[7]);var inst_36814 = (state_36850[9]);var inst_36818 = (state_36850[10]);var inst_36818__$1 = f.call(null,inst_36814);var inst_36819 = cljs.core._EQ_.call(null,inst_36818__$1,inst_36811);var inst_36820 = cljs.core.keyword_identical_QMARK_.call(null,inst_36811,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36821 = (inst_36819) || (inst_36820);var state_36850__$1 = (function (){var statearr_36857 = state_36850;(statearr_36857[10] = inst_36818__$1);
return statearr_36857;
})();if(cljs.core.truth_(inst_36821))
{var statearr_36858_36884 = state_36850__$1;(statearr_36858_36884[1] = 8);
} else
{var statearr_36859_36885 = state_36850__$1;(statearr_36859_36885[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 6))
{var inst_36810 = (state_36850[8]);var inst_36835 = inst_36810.length;var inst_36836 = (inst_36835 > 0);var state_36850__$1 = state_36850;if(cljs.core.truth_(inst_36836))
{var statearr_36861_36886 = state_36850__$1;(statearr_36861_36886[1] = 12);
} else
{var statearr_36862_36887 = state_36850__$1;(statearr_36862_36887[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 7))
{var inst_36846 = (state_36850[2]);var state_36850__$1 = state_36850;var statearr_36863_36888 = state_36850__$1;(statearr_36863_36888[2] = inst_36846);
(statearr_36863_36888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 8))
{var inst_36814 = (state_36850[9]);var inst_36818 = (state_36850[10]);var inst_36810 = (state_36850[8]);var inst_36823 = inst_36810.push(inst_36814);var tmp36860 = inst_36810;var inst_36810__$1 = tmp36860;var inst_36811 = inst_36818;var state_36850__$1 = (function (){var statearr_36864 = state_36850;(statearr_36864[11] = inst_36823);
(statearr_36864[7] = inst_36811);
(statearr_36864[8] = inst_36810__$1);
return statearr_36864;
})();var statearr_36865_36889 = state_36850__$1;(statearr_36865_36889[2] = null);
(statearr_36865_36889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 9))
{var inst_36810 = (state_36850[8]);var inst_36826 = cljs.core.vec.call(null,inst_36810);var state_36850__$1 = state_36850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36850__$1,11,out,inst_36826);
} else
{if((state_val_36851 === 10))
{var inst_36833 = (state_36850[2]);var state_36850__$1 = state_36850;var statearr_36866_36890 = state_36850__$1;(statearr_36866_36890[2] = inst_36833);
(statearr_36866_36890[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 11))
{var inst_36814 = (state_36850[9]);var inst_36818 = (state_36850[10]);var inst_36828 = (state_36850[2]);var inst_36829 = [];var inst_36830 = inst_36829.push(inst_36814);var inst_36810 = inst_36829;var inst_36811 = inst_36818;var state_36850__$1 = (function (){var statearr_36867 = state_36850;(statearr_36867[12] = inst_36830);
(statearr_36867[7] = inst_36811);
(statearr_36867[8] = inst_36810);
(statearr_36867[13] = inst_36828);
return statearr_36867;
})();var statearr_36868_36891 = state_36850__$1;(statearr_36868_36891[2] = null);
(statearr_36868_36891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 12))
{var inst_36810 = (state_36850[8]);var inst_36838 = cljs.core.vec.call(null,inst_36810);var state_36850__$1 = state_36850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36850__$1,15,out,inst_36838);
} else
{if((state_val_36851 === 13))
{var state_36850__$1 = state_36850;var statearr_36869_36892 = state_36850__$1;(statearr_36869_36892[2] = null);
(statearr_36869_36892[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 14))
{var inst_36843 = (state_36850[2]);var inst_36844 = cljs.core.async.close_BANG_.call(null,out);var state_36850__$1 = (function (){var statearr_36870 = state_36850;(statearr_36870[14] = inst_36843);
return statearr_36870;
})();var statearr_36871_36893 = state_36850__$1;(statearr_36871_36893[2] = inst_36844);
(statearr_36871_36893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36851 === 15))
{var inst_36840 = (state_36850[2]);var state_36850__$1 = state_36850;var statearr_36872_36894 = state_36850__$1;(statearr_36872_36894[2] = inst_36840);
(statearr_36872_36894[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36876[0] = state_machine__5507__auto__);
(statearr_36876[1] = 1);
return statearr_36876;
});
var state_machine__5507__auto____1 = (function (state_36850){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36850);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36877){if((e36877 instanceof Object))
{var ex__5510__auto__ = e36877;var statearr_36878_36895 = state_36850;(statearr_36878_36895[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36850);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36896 = state_36850;
state_36850 = G__36896;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36850){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36879 = f__5522__auto__.call(null);(statearr_36879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36880);
return statearr_36879;
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
