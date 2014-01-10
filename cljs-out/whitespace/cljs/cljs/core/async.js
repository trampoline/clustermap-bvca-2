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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29803 = (function (f,fn_handler,meta29804){
this.f = f;
this.fn_handler = fn_handler;
this.meta29804 = meta29804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29803.cljs$lang$type = true;
cljs.core.async.t29803.cljs$lang$ctorStr = "cljs.core.async/t29803";
cljs.core.async.t29803.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29803");
});
cljs.core.async.t29803.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29805){var self__ = this;
var _29805__$1 = this;return self__.meta29804;
});
cljs.core.async.t29803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29805,meta29804__$1){var self__ = this;
var _29805__$1 = this;return (new cljs.core.async.t29803(self__.f,self__.fn_handler,meta29804__$1));
});
cljs.core.async.__GT_t29803 = (function __GT_t29803(f__$1,fn_handler__$1,meta29804){return (new cljs.core.async.t29803(f__$1,fn_handler__$1,meta29804));
});
}
return (new cljs.core.async.t29803(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29807 = buff;if(G__29807)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__29807.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29807.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29807);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29807);
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
{var val_29808 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29808);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_29808);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___29809 = n;var x_29810 = 0;while(true){
if((x_29810 < n__4248__auto___29809))
{(a[x_29810] = 0);
{
var G__29811 = (x_29810 + 1);
x_29810 = G__29811;
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
var G__29812 = (i + 1);
i = G__29812;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29816 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29816 = (function (flag,alt_flag,meta29817){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29817 = meta29817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29816.cljs$lang$type = true;
cljs.core.async.t29816.cljs$lang$ctorStr = "cljs.core.async/t29816";
cljs.core.async.t29816.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29816");
});
cljs.core.async.t29816.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29818){var self__ = this;
var _29818__$1 = this;return self__.meta29817;
});
cljs.core.async.t29816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29818,meta29817__$1){var self__ = this;
var _29818__$1 = this;return (new cljs.core.async.t29816(self__.flag,self__.alt_flag,meta29817__$1));
});
cljs.core.async.__GT_t29816 = (function __GT_t29816(flag__$1,alt_flag__$1,meta29817){return (new cljs.core.async.t29816(flag__$1,alt_flag__$1,meta29817));
});
}
return (new cljs.core.async.t29816(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29822 = (function (cb,flag,alt_handler,meta29823){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29823 = meta29823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29822.cljs$lang$type = true;
cljs.core.async.t29822.cljs$lang$ctorStr = "cljs.core.async/t29822";
cljs.core.async.t29822.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29822");
});
cljs.core.async.t29822.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29824){var self__ = this;
var _29824__$1 = this;return self__.meta29823;
});
cljs.core.async.t29822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29824,meta29823__$1){var self__ = this;
var _29824__$1 = this;return (new cljs.core.async.t29822(self__.cb,self__.flag,self__.alt_handler,meta29823__$1));
});
cljs.core.async.__GT_t29822 = (function __GT_t29822(cb__$1,flag__$1,alt_handler__$1,meta29823){return (new cljs.core.async.t29822(cb__$1,flag__$1,alt_handler__$1,meta29823));
});
}
return (new cljs.core.async.t29822(cb,flag,alt_handler,null));
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
return (function (p1__29825_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29825_SHARP_,port], null));
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
var G__29826 = (i + 1);
i = G__29826;
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
var alts_BANG___delegate = function (ports,p__29827){var map__29829 = p__29827;var map__29829__$1 = ((cljs.core.seq_QMARK_.call(null,map__29829))?cljs.core.apply.call(null,cljs.core.hash_map,map__29829):map__29829);var opts = map__29829__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29827 = null;if (arguments.length > 1) {
  p__29827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29827);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29830){
var ports = cljs.core.first(arglist__29830);
var p__29827 = cljs.core.rest(arglist__29830);
return alts_BANG___delegate(ports,p__29827);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29838 = (function (ch,f,map_LT_,meta29839){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29839 = meta29839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29838.cljs$lang$type = true;
cljs.core.async.t29838.cljs$lang$ctorStr = "cljs.core.async/t29838";
cljs.core.async.t29838.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29838");
});
cljs.core.async.t29838.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29838.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29841 = (function (fn1,_,meta29839,ch,f,map_LT_,meta29842){
this.fn1 = fn1;
this._ = _;
this.meta29839 = meta29839;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29842 = meta29842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29841.cljs$lang$type = true;
cljs.core.async.t29841.cljs$lang$ctorStr = "cljs.core.async/t29841";
cljs.core.async.t29841.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29841");
});
cljs.core.async.t29841.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29841.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29831_SHARP_){return f1.call(null,(((p1__29831_SHARP_ == null))?null:self__.f.call(null,p1__29831_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29843){var self__ = this;
var _29843__$1 = this;return self__.meta29842;
});
cljs.core.async.t29841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29843,meta29842__$1){var self__ = this;
var _29843__$1 = this;return (new cljs.core.async.t29841(self__.fn1,self__._,self__.meta29839,self__.ch,self__.f,self__.map_LT_,meta29842__$1));
});
cljs.core.async.__GT_t29841 = (function __GT_t29841(fn1__$1,___$2,meta29839__$1,ch__$2,f__$2,map_LT___$2,meta29842){return (new cljs.core.async.t29841(fn1__$1,___$2,meta29839__$1,ch__$2,f__$2,map_LT___$2,meta29842));
});
}
return (new cljs.core.async.t29841(fn1,___$1,self__.meta29839,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t29838.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29840){var self__ = this;
var _29840__$1 = this;return self__.meta29839;
});
cljs.core.async.t29838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29840,meta29839__$1){var self__ = this;
var _29840__$1 = this;return (new cljs.core.async.t29838(self__.ch,self__.f,self__.map_LT_,meta29839__$1));
});
cljs.core.async.__GT_t29838 = (function __GT_t29838(ch__$1,f__$1,map_LT___$1,meta29839){return (new cljs.core.async.t29838(ch__$1,f__$1,map_LT___$1,meta29839));
});
}
return (new cljs.core.async.t29838(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29847 = (function (ch,f,map_GT_,meta29848){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29848 = meta29848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29847.cljs$lang$type = true;
cljs.core.async.t29847.cljs$lang$ctorStr = "cljs.core.async/t29847";
cljs.core.async.t29847.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29847");
});
cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29849){var self__ = this;
var _29849__$1 = this;return self__.meta29848;
});
cljs.core.async.t29847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29849,meta29848__$1){var self__ = this;
var _29849__$1 = this;return (new cljs.core.async.t29847(self__.ch,self__.f,self__.map_GT_,meta29848__$1));
});
cljs.core.async.__GT_t29847 = (function __GT_t29847(ch__$1,f__$1,map_GT___$1,meta29848){return (new cljs.core.async.t29847(ch__$1,f__$1,map_GT___$1,meta29848));
});
}
return (new cljs.core.async.t29847(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29853 = (function (ch,p,filter_GT_,meta29854){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29854 = meta29854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29853.cljs$lang$type = true;
cljs.core.async.t29853.cljs$lang$ctorStr = "cljs.core.async/t29853";
cljs.core.async.t29853.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29853");
});
cljs.core.async.t29853.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29853.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29853.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29855){var self__ = this;
var _29855__$1 = this;return self__.meta29854;
});
cljs.core.async.t29853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29855,meta29854__$1){var self__ = this;
var _29855__$1 = this;return (new cljs.core.async.t29853(self__.ch,self__.p,self__.filter_GT_,meta29854__$1));
});
cljs.core.async.__GT_t29853 = (function __GT_t29853(ch__$1,p__$1,filter_GT___$1,meta29854){return (new cljs.core.async.t29853(ch__$1,p__$1,filter_GT___$1,meta29854));
});
}
return (new cljs.core.async.t29853(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___29938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29917){var state_val_29918 = (state_29917[1]);if((state_val_29918 === 1))
{var state_29917__$1 = state_29917;var statearr_29919_29939 = state_29917__$1;(statearr_29919_29939[2] = null);
(statearr_29919_29939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29918 === 2))
{var state_29917__$1 = state_29917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29917__$1,4,ch);
} else
{if((state_val_29918 === 3))
{var inst_29915 = (state_29917[2]);var state_29917__$1 = state_29917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29917__$1,inst_29915);
} else
{if((state_val_29918 === 4))
{var inst_29899 = (state_29917[7]);var inst_29899__$1 = (state_29917[2]);var inst_29900 = (inst_29899__$1 == null);var state_29917__$1 = (function (){var statearr_29920 = state_29917;(statearr_29920[7] = inst_29899__$1);
return statearr_29920;
})();if(cljs.core.truth_(inst_29900))
{var statearr_29921_29940 = state_29917__$1;(statearr_29921_29940[1] = 5);
} else
{var statearr_29922_29941 = state_29917__$1;(statearr_29922_29941[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29918 === 5))
{var inst_29902 = cljs.core.async.close_BANG_.call(null,out);var state_29917__$1 = state_29917;var statearr_29923_29942 = state_29917__$1;(statearr_29923_29942[2] = inst_29902);
(statearr_29923_29942[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29918 === 6))
{var inst_29899 = (state_29917[7]);var inst_29904 = p.call(null,inst_29899);var state_29917__$1 = state_29917;if(cljs.core.truth_(inst_29904))
{var statearr_29924_29943 = state_29917__$1;(statearr_29924_29943[1] = 8);
} else
{var statearr_29925_29944 = state_29917__$1;(statearr_29925_29944[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29918 === 7))
{var inst_29913 = (state_29917[2]);var state_29917__$1 = state_29917;var statearr_29926_29945 = state_29917__$1;(statearr_29926_29945[2] = inst_29913);
(statearr_29926_29945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29918 === 8))
{var inst_29899 = (state_29917[7]);var state_29917__$1 = state_29917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29917__$1,11,out,inst_29899);
} else
{if((state_val_29918 === 9))
{var state_29917__$1 = state_29917;var statearr_29927_29946 = state_29917__$1;(statearr_29927_29946[2] = null);
(statearr_29927_29946[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29918 === 10))
{var inst_29910 = (state_29917[2]);var state_29917__$1 = (function (){var statearr_29928 = state_29917;(statearr_29928[8] = inst_29910);
return statearr_29928;
})();var statearr_29929_29947 = state_29917__$1;(statearr_29929_29947[2] = null);
(statearr_29929_29947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29918 === 11))
{var inst_29907 = (state_29917[2]);var state_29917__$1 = state_29917;var statearr_29930_29948 = state_29917__$1;(statearr_29930_29948[2] = inst_29907);
(statearr_29930_29948[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29934 = [null,null,null,null,null,null,null,null,null];(statearr_29934[0] = state_machine__5507__auto__);
(statearr_29934[1] = 1);
return statearr_29934;
});
var state_machine__5507__auto____1 = (function (state_29917){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29917);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29935){if((e29935 instanceof Object))
{var ex__5510__auto__ = e29935;var statearr_29936_29949 = state_29917;(statearr_29936_29949[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29950 = state_29917;
state_29917 = G__29950;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29917){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29937 = f__5522__auto__.call(null);(statearr_29937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29938);
return statearr_29937;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30102){var state_val_30103 = (state_30102[1]);if((state_val_30103 === 1))
{var state_30102__$1 = state_30102;var statearr_30104_30141 = state_30102__$1;(statearr_30104_30141[2] = null);
(statearr_30104_30141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 2))
{var state_30102__$1 = state_30102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30102__$1,4,in$);
} else
{if((state_val_30103 === 3))
{var inst_30100 = (state_30102[2]);var state_30102__$1 = state_30102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30102__$1,inst_30100);
} else
{if((state_val_30103 === 4))
{var inst_30048 = (state_30102[7]);var inst_30048__$1 = (state_30102[2]);var inst_30049 = (inst_30048__$1 == null);var state_30102__$1 = (function (){var statearr_30105 = state_30102;(statearr_30105[7] = inst_30048__$1);
return statearr_30105;
})();if(cljs.core.truth_(inst_30049))
{var statearr_30106_30142 = state_30102__$1;(statearr_30106_30142[1] = 5);
} else
{var statearr_30107_30143 = state_30102__$1;(statearr_30107_30143[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 5))
{var inst_30051 = cljs.core.async.close_BANG_.call(null,out);var state_30102__$1 = state_30102;var statearr_30108_30144 = state_30102__$1;(statearr_30108_30144[2] = inst_30051);
(statearr_30108_30144[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 6))
{var inst_30048 = (state_30102[7]);var inst_30053 = f.call(null,inst_30048);var inst_30058 = cljs.core.seq.call(null,inst_30053);var inst_30059 = inst_30058;var inst_30060 = null;var inst_30061 = 0;var inst_30062 = 0;var state_30102__$1 = (function (){var statearr_30109 = state_30102;(statearr_30109[8] = inst_30062);
(statearr_30109[9] = inst_30060);
(statearr_30109[10] = inst_30061);
(statearr_30109[11] = inst_30059);
return statearr_30109;
})();var statearr_30110_30145 = state_30102__$1;(statearr_30110_30145[2] = null);
(statearr_30110_30145[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 7))
{var inst_30098 = (state_30102[2]);var state_30102__$1 = state_30102;var statearr_30111_30146 = state_30102__$1;(statearr_30111_30146[2] = inst_30098);
(statearr_30111_30146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 8))
{var inst_30062 = (state_30102[8]);var inst_30061 = (state_30102[10]);var inst_30064 = (inst_30062 < inst_30061);var inst_30065 = inst_30064;var state_30102__$1 = state_30102;if(cljs.core.truth_(inst_30065))
{var statearr_30112_30147 = state_30102__$1;(statearr_30112_30147[1] = 10);
} else
{var statearr_30113_30148 = state_30102__$1;(statearr_30113_30148[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 9))
{var inst_30095 = (state_30102[2]);var state_30102__$1 = (function (){var statearr_30114 = state_30102;(statearr_30114[12] = inst_30095);
return statearr_30114;
})();var statearr_30115_30149 = state_30102__$1;(statearr_30115_30149[2] = null);
(statearr_30115_30149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 10))
{var inst_30062 = (state_30102[8]);var inst_30060 = (state_30102[9]);var inst_30067 = cljs.core._nth.call(null,inst_30060,inst_30062);var state_30102__$1 = state_30102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30102__$1,13,out,inst_30067);
} else
{if((state_val_30103 === 11))
{var inst_30073 = (state_30102[13]);var inst_30059 = (state_30102[11]);var inst_30073__$1 = cljs.core.seq.call(null,inst_30059);var state_30102__$1 = (function (){var statearr_30119 = state_30102;(statearr_30119[13] = inst_30073__$1);
return statearr_30119;
})();if(inst_30073__$1)
{var statearr_30120_30150 = state_30102__$1;(statearr_30120_30150[1] = 14);
} else
{var statearr_30121_30151 = state_30102__$1;(statearr_30121_30151[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 12))
{var inst_30093 = (state_30102[2]);var state_30102__$1 = state_30102;var statearr_30122_30152 = state_30102__$1;(statearr_30122_30152[2] = inst_30093);
(statearr_30122_30152[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 13))
{var inst_30062 = (state_30102[8]);var inst_30060 = (state_30102[9]);var inst_30061 = (state_30102[10]);var inst_30059 = (state_30102[11]);var inst_30069 = (state_30102[2]);var inst_30070 = (inst_30062 + 1);var tmp30116 = inst_30060;var tmp30117 = inst_30061;var tmp30118 = inst_30059;var inst_30059__$1 = tmp30118;var inst_30060__$1 = tmp30116;var inst_30061__$1 = tmp30117;var inst_30062__$1 = inst_30070;var state_30102__$1 = (function (){var statearr_30123 = state_30102;(statearr_30123[8] = inst_30062__$1);
(statearr_30123[9] = inst_30060__$1);
(statearr_30123[10] = inst_30061__$1);
(statearr_30123[14] = inst_30069);
(statearr_30123[11] = inst_30059__$1);
return statearr_30123;
})();var statearr_30124_30153 = state_30102__$1;(statearr_30124_30153[2] = null);
(statearr_30124_30153[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 14))
{var inst_30073 = (state_30102[13]);var inst_30075 = cljs.core.chunked_seq_QMARK_.call(null,inst_30073);var state_30102__$1 = state_30102;if(inst_30075)
{var statearr_30125_30154 = state_30102__$1;(statearr_30125_30154[1] = 17);
} else
{var statearr_30126_30155 = state_30102__$1;(statearr_30126_30155[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 15))
{var state_30102__$1 = state_30102;var statearr_30127_30156 = state_30102__$1;(statearr_30127_30156[2] = null);
(statearr_30127_30156[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 16))
{var inst_30091 = (state_30102[2]);var state_30102__$1 = state_30102;var statearr_30128_30157 = state_30102__$1;(statearr_30128_30157[2] = inst_30091);
(statearr_30128_30157[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 17))
{var inst_30073 = (state_30102[13]);var inst_30077 = cljs.core.chunk_first.call(null,inst_30073);var inst_30078 = cljs.core.chunk_rest.call(null,inst_30073);var inst_30079 = cljs.core.count.call(null,inst_30077);var inst_30059 = inst_30078;var inst_30060 = inst_30077;var inst_30061 = inst_30079;var inst_30062 = 0;var state_30102__$1 = (function (){var statearr_30129 = state_30102;(statearr_30129[8] = inst_30062);
(statearr_30129[9] = inst_30060);
(statearr_30129[10] = inst_30061);
(statearr_30129[11] = inst_30059);
return statearr_30129;
})();var statearr_30130_30158 = state_30102__$1;(statearr_30130_30158[2] = null);
(statearr_30130_30158[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 18))
{var inst_30073 = (state_30102[13]);var inst_30082 = cljs.core.first.call(null,inst_30073);var state_30102__$1 = state_30102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30102__$1,20,out,inst_30082);
} else
{if((state_val_30103 === 19))
{var inst_30088 = (state_30102[2]);var state_30102__$1 = state_30102;var statearr_30131_30159 = state_30102__$1;(statearr_30131_30159[2] = inst_30088);
(statearr_30131_30159[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30103 === 20))
{var inst_30073 = (state_30102[13]);var inst_30084 = (state_30102[2]);var inst_30085 = cljs.core.next.call(null,inst_30073);var inst_30059 = inst_30085;var inst_30060 = null;var inst_30061 = 0;var inst_30062 = 0;var state_30102__$1 = (function (){var statearr_30132 = state_30102;(statearr_30132[15] = inst_30084);
(statearr_30132[8] = inst_30062);
(statearr_30132[9] = inst_30060);
(statearr_30132[10] = inst_30061);
(statearr_30132[11] = inst_30059);
return statearr_30132;
})();var statearr_30133_30160 = state_30102__$1;(statearr_30133_30160[2] = null);
(statearr_30133_30160[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_30137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30137[0] = state_machine__5507__auto__);
(statearr_30137[1] = 1);
return statearr_30137;
});
var state_machine__5507__auto____1 = (function (state_30102){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30102);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30138){if((e30138 instanceof Object))
{var ex__5510__auto__ = e30138;var statearr_30139_30161 = state_30102;(statearr_30139_30161[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30162 = state_30102;
state_30102 = G__30162;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30102){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30140 = f__5522__auto__.call(null);(statearr_30140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30140;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___30243 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30222){var state_val_30223 = (state_30222[1]);if((state_val_30223 === 1))
{var state_30222__$1 = state_30222;var statearr_30224_30244 = state_30222__$1;(statearr_30224_30244[2] = null);
(statearr_30224_30244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30223 === 2))
{var state_30222__$1 = state_30222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30222__$1,4,from);
} else
{if((state_val_30223 === 3))
{var inst_30220 = (state_30222[2]);var state_30222__$1 = state_30222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30222__$1,inst_30220);
} else
{if((state_val_30223 === 4))
{var inst_30205 = (state_30222[7]);var inst_30205__$1 = (state_30222[2]);var inst_30206 = (inst_30205__$1 == null);var state_30222__$1 = (function (){var statearr_30225 = state_30222;(statearr_30225[7] = inst_30205__$1);
return statearr_30225;
})();if(cljs.core.truth_(inst_30206))
{var statearr_30226_30245 = state_30222__$1;(statearr_30226_30245[1] = 5);
} else
{var statearr_30227_30246 = state_30222__$1;(statearr_30227_30246[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30223 === 5))
{var state_30222__$1 = state_30222;if(cljs.core.truth_(close_QMARK_))
{var statearr_30228_30247 = state_30222__$1;(statearr_30228_30247[1] = 8);
} else
{var statearr_30229_30248 = state_30222__$1;(statearr_30229_30248[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30223 === 6))
{var inst_30205 = (state_30222[7]);var state_30222__$1 = state_30222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30222__$1,11,to,inst_30205);
} else
{if((state_val_30223 === 7))
{var inst_30218 = (state_30222[2]);var state_30222__$1 = state_30222;var statearr_30230_30249 = state_30222__$1;(statearr_30230_30249[2] = inst_30218);
(statearr_30230_30249[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30223 === 8))
{var inst_30209 = cljs.core.async.close_BANG_.call(null,to);var state_30222__$1 = state_30222;var statearr_30231_30250 = state_30222__$1;(statearr_30231_30250[2] = inst_30209);
(statearr_30231_30250[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30223 === 9))
{var state_30222__$1 = state_30222;var statearr_30232_30251 = state_30222__$1;(statearr_30232_30251[2] = null);
(statearr_30232_30251[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30223 === 10))
{var inst_30212 = (state_30222[2]);var state_30222__$1 = state_30222;var statearr_30233_30252 = state_30222__$1;(statearr_30233_30252[2] = inst_30212);
(statearr_30233_30252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30223 === 11))
{var inst_30215 = (state_30222[2]);var state_30222__$1 = (function (){var statearr_30234 = state_30222;(statearr_30234[8] = inst_30215);
return statearr_30234;
})();var statearr_30235_30253 = state_30222__$1;(statearr_30235_30253[2] = null);
(statearr_30235_30253[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30239 = [null,null,null,null,null,null,null,null,null];(statearr_30239[0] = state_machine__5507__auto__);
(statearr_30239[1] = 1);
return statearr_30239;
});
var state_machine__5507__auto____1 = (function (state_30222){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30240){if((e30240 instanceof Object))
{var ex__5510__auto__ = e30240;var statearr_30241_30254 = state_30222;(statearr_30241_30254[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30222);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30255 = state_30222;
state_30222 = G__30255;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30222){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30242 = f__5522__auto__.call(null);(statearr_30242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30243);
return statearr_30242;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___30342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30320){var state_val_30321 = (state_30320[1]);if((state_val_30321 === 1))
{var state_30320__$1 = state_30320;var statearr_30322_30343 = state_30320__$1;(statearr_30322_30343[2] = null);
(statearr_30322_30343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 2))
{var state_30320__$1 = state_30320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30320__$1,4,ch);
} else
{if((state_val_30321 === 3))
{var inst_30318 = (state_30320[2]);var state_30320__$1 = state_30320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30320__$1,inst_30318);
} else
{if((state_val_30321 === 4))
{var inst_30301 = (state_30320[7]);var inst_30301__$1 = (state_30320[2]);var inst_30302 = (inst_30301__$1 == null);var state_30320__$1 = (function (){var statearr_30323 = state_30320;(statearr_30323[7] = inst_30301__$1);
return statearr_30323;
})();if(cljs.core.truth_(inst_30302))
{var statearr_30324_30344 = state_30320__$1;(statearr_30324_30344[1] = 5);
} else
{var statearr_30325_30345 = state_30320__$1;(statearr_30325_30345[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 5))
{var inst_30304 = cljs.core.async.close_BANG_.call(null,tc);var inst_30305 = cljs.core.async.close_BANG_.call(null,fc);var state_30320__$1 = (function (){var statearr_30326 = state_30320;(statearr_30326[8] = inst_30304);
return statearr_30326;
})();var statearr_30327_30346 = state_30320__$1;(statearr_30327_30346[2] = inst_30305);
(statearr_30327_30346[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 6))
{var inst_30301 = (state_30320[7]);var inst_30307 = p.call(null,inst_30301);var state_30320__$1 = state_30320;if(cljs.core.truth_(inst_30307))
{var statearr_30328_30347 = state_30320__$1;(statearr_30328_30347[1] = 9);
} else
{var statearr_30329_30348 = state_30320__$1;(statearr_30329_30348[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 7))
{var inst_30316 = (state_30320[2]);var state_30320__$1 = state_30320;var statearr_30330_30349 = state_30320__$1;(statearr_30330_30349[2] = inst_30316);
(statearr_30330_30349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 8))
{var inst_30313 = (state_30320[2]);var state_30320__$1 = (function (){var statearr_30331 = state_30320;(statearr_30331[9] = inst_30313);
return statearr_30331;
})();var statearr_30332_30350 = state_30320__$1;(statearr_30332_30350[2] = null);
(statearr_30332_30350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 9))
{var state_30320__$1 = state_30320;var statearr_30333_30351 = state_30320__$1;(statearr_30333_30351[2] = tc);
(statearr_30333_30351[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 10))
{var state_30320__$1 = state_30320;var statearr_30334_30352 = state_30320__$1;(statearr_30334_30352[2] = fc);
(statearr_30334_30352[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30321 === 11))
{var inst_30301 = (state_30320[7]);var inst_30311 = (state_30320[2]);var state_30320__$1 = state_30320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30320__$1,8,inst_30311,inst_30301);
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
var state_machine__5507__auto____0 = (function (){var statearr_30338 = [null,null,null,null,null,null,null,null,null,null];(statearr_30338[0] = state_machine__5507__auto__);
(statearr_30338[1] = 1);
return statearr_30338;
});
var state_machine__5507__auto____1 = (function (state_30320){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30339){if((e30339 instanceof Object))
{var ex__5510__auto__ = e30339;var statearr_30340_30353 = state_30320;(statearr_30340_30353[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30354 = state_30320;
state_30320 = G__30354;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30320){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30341 = f__5522__auto__.call(null);(statearr_30341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30342);
return statearr_30341;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30401){var state_val_30402 = (state_30401[1]);if((state_val_30402 === 7))
{var inst_30397 = (state_30401[2]);var state_30401__$1 = state_30401;var statearr_30403_30419 = state_30401__$1;(statearr_30403_30419[2] = inst_30397);
(statearr_30403_30419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30402 === 6))
{var inst_30387 = (state_30401[7]);var inst_30390 = (state_30401[8]);var inst_30394 = f.call(null,inst_30387,inst_30390);var inst_30387__$1 = inst_30394;var state_30401__$1 = (function (){var statearr_30404 = state_30401;(statearr_30404[7] = inst_30387__$1);
return statearr_30404;
})();var statearr_30405_30420 = state_30401__$1;(statearr_30405_30420[2] = null);
(statearr_30405_30420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30402 === 5))
{var inst_30387 = (state_30401[7]);var state_30401__$1 = state_30401;var statearr_30406_30421 = state_30401__$1;(statearr_30406_30421[2] = inst_30387);
(statearr_30406_30421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30402 === 4))
{var inst_30390 = (state_30401[8]);var inst_30390__$1 = (state_30401[2]);var inst_30391 = (inst_30390__$1 == null);var state_30401__$1 = (function (){var statearr_30407 = state_30401;(statearr_30407[8] = inst_30390__$1);
return statearr_30407;
})();if(cljs.core.truth_(inst_30391))
{var statearr_30408_30422 = state_30401__$1;(statearr_30408_30422[1] = 5);
} else
{var statearr_30409_30423 = state_30401__$1;(statearr_30409_30423[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30402 === 3))
{var inst_30399 = (state_30401[2]);var state_30401__$1 = state_30401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30401__$1,inst_30399);
} else
{if((state_val_30402 === 2))
{var state_30401__$1 = state_30401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30401__$1,4,ch);
} else
{if((state_val_30402 === 1))
{var inst_30387 = init;var state_30401__$1 = (function (){var statearr_30410 = state_30401;(statearr_30410[7] = inst_30387);
return statearr_30410;
})();var statearr_30411_30424 = state_30401__$1;(statearr_30411_30424[2] = null);
(statearr_30411_30424[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30415 = [null,null,null,null,null,null,null,null,null];(statearr_30415[0] = state_machine__5507__auto__);
(statearr_30415[1] = 1);
return statearr_30415;
});
var state_machine__5507__auto____1 = (function (state_30401){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30401);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30416){if((e30416 instanceof Object))
{var ex__5510__auto__ = e30416;var statearr_30417_30425 = state_30401;(statearr_30417_30425[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30401);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30426 = state_30401;
state_30401 = G__30426;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30401){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30418 = f__5522__auto__.call(null);(statearr_30418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30418;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30488){var state_val_30489 = (state_30488[1]);if((state_val_30489 === 1))
{var inst_30468 = cljs.core.seq.call(null,coll);var inst_30469 = inst_30468;var state_30488__$1 = (function (){var statearr_30490 = state_30488;(statearr_30490[7] = inst_30469);
return statearr_30490;
})();var statearr_30491_30509 = state_30488__$1;(statearr_30491_30509[2] = null);
(statearr_30491_30509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30489 === 2))
{var inst_30469 = (state_30488[7]);var state_30488__$1 = state_30488;if(cljs.core.truth_(inst_30469))
{var statearr_30492_30510 = state_30488__$1;(statearr_30492_30510[1] = 4);
} else
{var statearr_30493_30511 = state_30488__$1;(statearr_30493_30511[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30489 === 3))
{var inst_30486 = (state_30488[2]);var state_30488__$1 = state_30488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30488__$1,inst_30486);
} else
{if((state_val_30489 === 4))
{var inst_30469 = (state_30488[7]);var inst_30472 = cljs.core.first.call(null,inst_30469);var state_30488__$1 = state_30488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30488__$1,7,ch,inst_30472);
} else
{if((state_val_30489 === 5))
{var state_30488__$1 = state_30488;if(cljs.core.truth_(close_QMARK_))
{var statearr_30494_30512 = state_30488__$1;(statearr_30494_30512[1] = 8);
} else
{var statearr_30495_30513 = state_30488__$1;(statearr_30495_30513[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30489 === 6))
{var inst_30484 = (state_30488[2]);var state_30488__$1 = state_30488;var statearr_30496_30514 = state_30488__$1;(statearr_30496_30514[2] = inst_30484);
(statearr_30496_30514[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30489 === 7))
{var inst_30469 = (state_30488[7]);var inst_30474 = (state_30488[2]);var inst_30475 = cljs.core.next.call(null,inst_30469);var inst_30469__$1 = inst_30475;var state_30488__$1 = (function (){var statearr_30497 = state_30488;(statearr_30497[7] = inst_30469__$1);
(statearr_30497[8] = inst_30474);
return statearr_30497;
})();var statearr_30498_30515 = state_30488__$1;(statearr_30498_30515[2] = null);
(statearr_30498_30515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30489 === 8))
{var inst_30479 = cljs.core.async.close_BANG_.call(null,ch);var state_30488__$1 = state_30488;var statearr_30499_30516 = state_30488__$1;(statearr_30499_30516[2] = inst_30479);
(statearr_30499_30516[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30489 === 9))
{var state_30488__$1 = state_30488;var statearr_30500_30517 = state_30488__$1;(statearr_30500_30517[2] = null);
(statearr_30500_30517[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30489 === 10))
{var inst_30482 = (state_30488[2]);var state_30488__$1 = state_30488;var statearr_30501_30518 = state_30488__$1;(statearr_30501_30518[2] = inst_30482);
(statearr_30501_30518[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_30505 = [null,null,null,null,null,null,null,null,null];(statearr_30505[0] = state_machine__5507__auto__);
(statearr_30505[1] = 1);
return statearr_30505;
});
var state_machine__5507__auto____1 = (function (state_30488){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30488);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30506){if((e30506 instanceof Object))
{var ex__5510__auto__ = e30506;var statearr_30507_30519 = state_30488;(statearr_30507_30519[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30520 = state_30488;
state_30488 = G__30520;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30488){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30508 = f__5522__auto__.call(null);(statearr_30508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30508;
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
cljs.core.async.Mux = (function (){var obj30522 = {};return obj30522;
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
cljs.core.async.Mult = (function (){var obj30524 = {};return obj30524;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30748 = (function (cs,ch,mult,meta30749){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30749 = meta30749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30748.cljs$lang$type = true;
cljs.core.async.t30748.cljs$lang$ctorStr = "cljs.core.async/t30748";
cljs.core.async.t30748.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30748");
});})(cs))
;
cljs.core.async.t30748.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30748.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30748.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30748.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30748.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30750){var self__ = this;
var _30750__$1 = this;return self__.meta30749;
});})(cs))
;
cljs.core.async.t30748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30750,meta30749__$1){var self__ = this;
var _30750__$1 = this;return (new cljs.core.async.t30748(self__.cs,self__.ch,self__.mult,meta30749__$1));
});})(cs))
;
cljs.core.async.__GT_t30748 = ((function (cs){
return (function __GT_t30748(cs__$1,ch__$1,mult__$1,meta30749){return (new cljs.core.async.t30748(cs__$1,ch__$1,mult__$1,meta30749));
});})(cs))
;
}
return (new cljs.core.async.t30748(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___30971 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30885){var state_val_30886 = (state_30885[1]);if((state_val_30886 === 32))
{var inst_30829 = (state_30885[7]);var inst_30753 = (state_30885[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30885,31,Object,null,30);var inst_30836 = cljs.core.async.put_BANG_.call(null,inst_30829,inst_30753,done);var state_30885__$1 = state_30885;var statearr_30887_30972 = state_30885__$1;(statearr_30887_30972[2] = inst_30836);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30885__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 1))
{var state_30885__$1 = state_30885;var statearr_30888_30973 = state_30885__$1;(statearr_30888_30973[2] = null);
(statearr_30888_30973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 33))
{var inst_30842 = (state_30885[9]);var inst_30844 = cljs.core.chunked_seq_QMARK_.call(null,inst_30842);var state_30885__$1 = state_30885;if(inst_30844)
{var statearr_30889_30974 = state_30885__$1;(statearr_30889_30974[1] = 36);
} else
{var statearr_30890_30975 = state_30885__$1;(statearr_30890_30975[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 2))
{var state_30885__$1 = state_30885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30885__$1,4,ch);
} else
{if((state_val_30886 === 34))
{var state_30885__$1 = state_30885;var statearr_30891_30976 = state_30885__$1;(statearr_30891_30976[2] = null);
(statearr_30891_30976[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 3))
{var inst_30883 = (state_30885[2]);var state_30885__$1 = state_30885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30885__$1,inst_30883);
} else
{if((state_val_30886 === 35))
{var inst_30867 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30892_30977 = state_30885__$1;(statearr_30892_30977[2] = inst_30867);
(statearr_30892_30977[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 4))
{var inst_30753 = (state_30885[8]);var inst_30753__$1 = (state_30885[2]);var inst_30754 = (inst_30753__$1 == null);var state_30885__$1 = (function (){var statearr_30893 = state_30885;(statearr_30893[8] = inst_30753__$1);
return statearr_30893;
})();if(cljs.core.truth_(inst_30754))
{var statearr_30894_30978 = state_30885__$1;(statearr_30894_30978[1] = 5);
} else
{var statearr_30895_30979 = state_30885__$1;(statearr_30895_30979[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 36))
{var inst_30842 = (state_30885[9]);var inst_30846 = cljs.core.chunk_first.call(null,inst_30842);var inst_30847 = cljs.core.chunk_rest.call(null,inst_30842);var inst_30848 = cljs.core.count.call(null,inst_30846);var inst_30821 = inst_30847;var inst_30822 = inst_30846;var inst_30823 = inst_30848;var inst_30824 = 0;var state_30885__$1 = (function (){var statearr_30896 = state_30885;(statearr_30896[10] = inst_30821);
(statearr_30896[11] = inst_30823);
(statearr_30896[12] = inst_30822);
(statearr_30896[13] = inst_30824);
return statearr_30896;
})();var statearr_30897_30980 = state_30885__$1;(statearr_30897_30980[2] = null);
(statearr_30897_30980[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 5))
{var inst_30760 = cljs.core.deref.call(null,cs);var inst_30761 = cljs.core.seq.call(null,inst_30760);var inst_30762 = inst_30761;var inst_30763 = null;var inst_30764 = 0;var inst_30765 = 0;var state_30885__$1 = (function (){var statearr_30898 = state_30885;(statearr_30898[14] = inst_30762);
(statearr_30898[15] = inst_30763);
(statearr_30898[16] = inst_30764);
(statearr_30898[17] = inst_30765);
return statearr_30898;
})();var statearr_30899_30981 = state_30885__$1;(statearr_30899_30981[2] = null);
(statearr_30899_30981[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 37))
{var inst_30842 = (state_30885[9]);var inst_30851 = cljs.core.first.call(null,inst_30842);var state_30885__$1 = (function (){var statearr_30900 = state_30885;(statearr_30900[18] = inst_30851);
return statearr_30900;
})();var statearr_30901_30982 = state_30885__$1;(statearr_30901_30982[2] = null);
(statearr_30901_30982[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 6))
{var inst_30813 = (state_30885[19]);var inst_30812 = cljs.core.deref.call(null,cs);var inst_30813__$1 = cljs.core.keys.call(null,inst_30812);var inst_30814 = cljs.core.count.call(null,inst_30813__$1);var inst_30815 = cljs.core.reset_BANG_.call(null,dctr,inst_30814);var inst_30820 = cljs.core.seq.call(null,inst_30813__$1);var inst_30821 = inst_30820;var inst_30822 = null;var inst_30823 = 0;var inst_30824 = 0;var state_30885__$1 = (function (){var statearr_30902 = state_30885;(statearr_30902[20] = inst_30815);
(statearr_30902[19] = inst_30813__$1);
(statearr_30902[10] = inst_30821);
(statearr_30902[11] = inst_30823);
(statearr_30902[12] = inst_30822);
(statearr_30902[13] = inst_30824);
return statearr_30902;
})();var statearr_30903_30983 = state_30885__$1;(statearr_30903_30983[2] = null);
(statearr_30903_30983[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 38))
{var inst_30864 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30904_30984 = state_30885__$1;(statearr_30904_30984[2] = inst_30864);
(statearr_30904_30984[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 7))
{var inst_30881 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30905_30985 = state_30885__$1;(statearr_30905_30985[2] = inst_30881);
(statearr_30905_30985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 39))
{var inst_30842 = (state_30885[9]);var inst_30860 = (state_30885[2]);var inst_30861 = cljs.core.next.call(null,inst_30842);var inst_30821 = inst_30861;var inst_30822 = null;var inst_30823 = 0;var inst_30824 = 0;var state_30885__$1 = (function (){var statearr_30906 = state_30885;(statearr_30906[10] = inst_30821);
(statearr_30906[11] = inst_30823);
(statearr_30906[12] = inst_30822);
(statearr_30906[13] = inst_30824);
(statearr_30906[21] = inst_30860);
return statearr_30906;
})();var statearr_30907_30986 = state_30885__$1;(statearr_30907_30986[2] = null);
(statearr_30907_30986[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 8))
{var inst_30764 = (state_30885[16]);var inst_30765 = (state_30885[17]);var inst_30767 = (inst_30765 < inst_30764);var inst_30768 = inst_30767;var state_30885__$1 = state_30885;if(cljs.core.truth_(inst_30768))
{var statearr_30908_30987 = state_30885__$1;(statearr_30908_30987[1] = 10);
} else
{var statearr_30909_30988 = state_30885__$1;(statearr_30909_30988[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 40))
{var inst_30851 = (state_30885[18]);var inst_30852 = (state_30885[2]);var inst_30853 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30854 = cljs.core.async.untap_STAR_.call(null,m,inst_30851);var state_30885__$1 = (function (){var statearr_30910 = state_30885;(statearr_30910[22] = inst_30853);
(statearr_30910[23] = inst_30852);
return statearr_30910;
})();var statearr_30911_30989 = state_30885__$1;(statearr_30911_30989[2] = inst_30854);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30885__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 9))
{var inst_30810 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30912_30990 = state_30885__$1;(statearr_30912_30990[2] = inst_30810);
(statearr_30912_30990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 41))
{var inst_30753 = (state_30885[8]);var inst_30851 = (state_30885[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30885,40,Object,null,39);var inst_30858 = cljs.core.async.put_BANG_.call(null,inst_30851,inst_30753,done);var state_30885__$1 = state_30885;var statearr_30913_30991 = state_30885__$1;(statearr_30913_30991[2] = inst_30858);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30885__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 10))
{var inst_30763 = (state_30885[15]);var inst_30765 = (state_30885[17]);var inst_30771 = cljs.core._nth.call(null,inst_30763,inst_30765);var inst_30772 = cljs.core.nth.call(null,inst_30771,0,null);var inst_30773 = cljs.core.nth.call(null,inst_30771,1,null);var state_30885__$1 = (function (){var statearr_30914 = state_30885;(statearr_30914[24] = inst_30772);
return statearr_30914;
})();if(cljs.core.truth_(inst_30773))
{var statearr_30915_30992 = state_30885__$1;(statearr_30915_30992[1] = 13);
} else
{var statearr_30916_30993 = state_30885__$1;(statearr_30916_30993[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 42))
{var state_30885__$1 = state_30885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30885__$1,45,dchan);
} else
{if((state_val_30886 === 11))
{var inst_30762 = (state_30885[14]);var inst_30782 = (state_30885[25]);var inst_30782__$1 = cljs.core.seq.call(null,inst_30762);var state_30885__$1 = (function (){var statearr_30917 = state_30885;(statearr_30917[25] = inst_30782__$1);
return statearr_30917;
})();if(inst_30782__$1)
{var statearr_30918_30994 = state_30885__$1;(statearr_30918_30994[1] = 16);
} else
{var statearr_30919_30995 = state_30885__$1;(statearr_30919_30995[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 43))
{var state_30885__$1 = state_30885;var statearr_30920_30996 = state_30885__$1;(statearr_30920_30996[2] = null);
(statearr_30920_30996[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 12))
{var inst_30808 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30921_30997 = state_30885__$1;(statearr_30921_30997[2] = inst_30808);
(statearr_30921_30997[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 44))
{var inst_30878 = (state_30885[2]);var state_30885__$1 = (function (){var statearr_30922 = state_30885;(statearr_30922[26] = inst_30878);
return statearr_30922;
})();var statearr_30923_30998 = state_30885__$1;(statearr_30923_30998[2] = null);
(statearr_30923_30998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 13))
{var inst_30772 = (state_30885[24]);var inst_30775 = cljs.core.async.close_BANG_.call(null,inst_30772);var state_30885__$1 = state_30885;var statearr_30924_30999 = state_30885__$1;(statearr_30924_30999[2] = inst_30775);
(statearr_30924_30999[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 45))
{var inst_30875 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30928_31000 = state_30885__$1;(statearr_30928_31000[2] = inst_30875);
(statearr_30928_31000[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 14))
{var state_30885__$1 = state_30885;var statearr_30929_31001 = state_30885__$1;(statearr_30929_31001[2] = null);
(statearr_30929_31001[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 15))
{var inst_30762 = (state_30885[14]);var inst_30763 = (state_30885[15]);var inst_30764 = (state_30885[16]);var inst_30765 = (state_30885[17]);var inst_30778 = (state_30885[2]);var inst_30779 = (inst_30765 + 1);var tmp30925 = inst_30762;var tmp30926 = inst_30763;var tmp30927 = inst_30764;var inst_30762__$1 = tmp30925;var inst_30763__$1 = tmp30926;var inst_30764__$1 = tmp30927;var inst_30765__$1 = inst_30779;var state_30885__$1 = (function (){var statearr_30930 = state_30885;(statearr_30930[27] = inst_30778);
(statearr_30930[14] = inst_30762__$1);
(statearr_30930[15] = inst_30763__$1);
(statearr_30930[16] = inst_30764__$1);
(statearr_30930[17] = inst_30765__$1);
return statearr_30930;
})();var statearr_30931_31002 = state_30885__$1;(statearr_30931_31002[2] = null);
(statearr_30931_31002[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 16))
{var inst_30782 = (state_30885[25]);var inst_30784 = cljs.core.chunked_seq_QMARK_.call(null,inst_30782);var state_30885__$1 = state_30885;if(inst_30784)
{var statearr_30932_31003 = state_30885__$1;(statearr_30932_31003[1] = 19);
} else
{var statearr_30933_31004 = state_30885__$1;(statearr_30933_31004[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 17))
{var state_30885__$1 = state_30885;var statearr_30934_31005 = state_30885__$1;(statearr_30934_31005[2] = null);
(statearr_30934_31005[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 18))
{var inst_30806 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30935_31006 = state_30885__$1;(statearr_30935_31006[2] = inst_30806);
(statearr_30935_31006[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 19))
{var inst_30782 = (state_30885[25]);var inst_30786 = cljs.core.chunk_first.call(null,inst_30782);var inst_30787 = cljs.core.chunk_rest.call(null,inst_30782);var inst_30788 = cljs.core.count.call(null,inst_30786);var inst_30762 = inst_30787;var inst_30763 = inst_30786;var inst_30764 = inst_30788;var inst_30765 = 0;var state_30885__$1 = (function (){var statearr_30936 = state_30885;(statearr_30936[14] = inst_30762);
(statearr_30936[15] = inst_30763);
(statearr_30936[16] = inst_30764);
(statearr_30936[17] = inst_30765);
return statearr_30936;
})();var statearr_30937_31007 = state_30885__$1;(statearr_30937_31007[2] = null);
(statearr_30937_31007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 20))
{var inst_30782 = (state_30885[25]);var inst_30792 = cljs.core.first.call(null,inst_30782);var inst_30793 = cljs.core.nth.call(null,inst_30792,0,null);var inst_30794 = cljs.core.nth.call(null,inst_30792,1,null);var state_30885__$1 = (function (){var statearr_30938 = state_30885;(statearr_30938[28] = inst_30793);
return statearr_30938;
})();if(cljs.core.truth_(inst_30794))
{var statearr_30939_31008 = state_30885__$1;(statearr_30939_31008[1] = 22);
} else
{var statearr_30940_31009 = state_30885__$1;(statearr_30940_31009[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 21))
{var inst_30803 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30941_31010 = state_30885__$1;(statearr_30941_31010[2] = inst_30803);
(statearr_30941_31010[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 22))
{var inst_30793 = (state_30885[28]);var inst_30796 = cljs.core.async.close_BANG_.call(null,inst_30793);var state_30885__$1 = state_30885;var statearr_30942_31011 = state_30885__$1;(statearr_30942_31011[2] = inst_30796);
(statearr_30942_31011[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 23))
{var state_30885__$1 = state_30885;var statearr_30943_31012 = state_30885__$1;(statearr_30943_31012[2] = null);
(statearr_30943_31012[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 24))
{var inst_30782 = (state_30885[25]);var inst_30799 = (state_30885[2]);var inst_30800 = cljs.core.next.call(null,inst_30782);var inst_30762 = inst_30800;var inst_30763 = null;var inst_30764 = 0;var inst_30765 = 0;var state_30885__$1 = (function (){var statearr_30944 = state_30885;(statearr_30944[14] = inst_30762);
(statearr_30944[15] = inst_30763);
(statearr_30944[16] = inst_30764);
(statearr_30944[29] = inst_30799);
(statearr_30944[17] = inst_30765);
return statearr_30944;
})();var statearr_30945_31013 = state_30885__$1;(statearr_30945_31013[2] = null);
(statearr_30945_31013[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 25))
{var inst_30823 = (state_30885[11]);var inst_30824 = (state_30885[13]);var inst_30826 = (inst_30824 < inst_30823);var inst_30827 = inst_30826;var state_30885__$1 = state_30885;if(cljs.core.truth_(inst_30827))
{var statearr_30946_31014 = state_30885__$1;(statearr_30946_31014[1] = 27);
} else
{var statearr_30947_31015 = state_30885__$1;(statearr_30947_31015[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 26))
{var inst_30813 = (state_30885[19]);var inst_30871 = (state_30885[2]);var inst_30872 = cljs.core.seq.call(null,inst_30813);var state_30885__$1 = (function (){var statearr_30948 = state_30885;(statearr_30948[30] = inst_30871);
return statearr_30948;
})();if(inst_30872)
{var statearr_30949_31016 = state_30885__$1;(statearr_30949_31016[1] = 42);
} else
{var statearr_30950_31017 = state_30885__$1;(statearr_30950_31017[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 27))
{var inst_30822 = (state_30885[12]);var inst_30824 = (state_30885[13]);var inst_30829 = cljs.core._nth.call(null,inst_30822,inst_30824);var state_30885__$1 = (function (){var statearr_30951 = state_30885;(statearr_30951[7] = inst_30829);
return statearr_30951;
})();var statearr_30952_31018 = state_30885__$1;(statearr_30952_31018[2] = null);
(statearr_30952_31018[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 28))
{var inst_30821 = (state_30885[10]);var inst_30842 = (state_30885[9]);var inst_30842__$1 = cljs.core.seq.call(null,inst_30821);var state_30885__$1 = (function (){var statearr_30956 = state_30885;(statearr_30956[9] = inst_30842__$1);
return statearr_30956;
})();if(inst_30842__$1)
{var statearr_30957_31019 = state_30885__$1;(statearr_30957_31019[1] = 33);
} else
{var statearr_30958_31020 = state_30885__$1;(statearr_30958_31020[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 29))
{var inst_30869 = (state_30885[2]);var state_30885__$1 = state_30885;var statearr_30959_31021 = state_30885__$1;(statearr_30959_31021[2] = inst_30869);
(statearr_30959_31021[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 30))
{var inst_30821 = (state_30885[10]);var inst_30823 = (state_30885[11]);var inst_30822 = (state_30885[12]);var inst_30824 = (state_30885[13]);var inst_30838 = (state_30885[2]);var inst_30839 = (inst_30824 + 1);var tmp30953 = inst_30821;var tmp30954 = inst_30823;var tmp30955 = inst_30822;var inst_30821__$1 = tmp30953;var inst_30822__$1 = tmp30955;var inst_30823__$1 = tmp30954;var inst_30824__$1 = inst_30839;var state_30885__$1 = (function (){var statearr_30960 = state_30885;(statearr_30960[10] = inst_30821__$1);
(statearr_30960[11] = inst_30823__$1);
(statearr_30960[12] = inst_30822__$1);
(statearr_30960[13] = inst_30824__$1);
(statearr_30960[31] = inst_30838);
return statearr_30960;
})();var statearr_30961_31022 = state_30885__$1;(statearr_30961_31022[2] = null);
(statearr_30961_31022[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30886 === 31))
{var inst_30829 = (state_30885[7]);var inst_30830 = (state_30885[2]);var inst_30831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30832 = cljs.core.async.untap_STAR_.call(null,m,inst_30829);var state_30885__$1 = (function (){var statearr_30962 = state_30885;(statearr_30962[32] = inst_30830);
(statearr_30962[33] = inst_30831);
return statearr_30962;
})();var statearr_30963_31023 = state_30885__$1;(statearr_30963_31023[2] = inst_30832);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30885__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_30967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30967[0] = state_machine__5507__auto__);
(statearr_30967[1] = 1);
return statearr_30967;
});
var state_machine__5507__auto____1 = (function (state_30885){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30968){if((e30968 instanceof Object))
{var ex__5510__auto__ = e30968;var statearr_30969_31024 = state_30885;(statearr_30969_31024[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31025 = state_30885;
state_30885 = G__31025;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30885){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30970 = f__5522__auto__.call(null);(statearr_30970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30971);
return statearr_30970;
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
cljs.core.async.Mix = (function (){var obj31027 = {};return obj31027;
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
;var m = (function (){if(typeof cljs.core.async.t31137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31137 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31138){
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
this.meta31138 = meta31138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31137.cljs$lang$type = true;
cljs.core.async.t31137.cljs$lang$ctorStr = "cljs.core.async/t31137";
cljs.core.async.t31137.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31137");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31139){var self__ = this;
var _31139__$1 = this;return self__.meta31138;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31139,meta31138__$1){var self__ = this;
var _31139__$1 = this;return (new cljs.core.async.t31137(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31138__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31137 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31137(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31138){return (new cljs.core.async.t31137(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31138));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31137(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___31246 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31204){var state_val_31205 = (state_31204[1]);if((state_val_31205 === 1))
{var inst_31143 = (state_31204[7]);var inst_31143__$1 = calc_state.call(null);var inst_31144 = cljs.core.seq_QMARK_.call(null,inst_31143__$1);var state_31204__$1 = (function (){var statearr_31206 = state_31204;(statearr_31206[7] = inst_31143__$1);
return statearr_31206;
})();if(inst_31144)
{var statearr_31207_31247 = state_31204__$1;(statearr_31207_31247[1] = 2);
} else
{var statearr_31208_31248 = state_31204__$1;(statearr_31208_31248[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 2))
{var inst_31143 = (state_31204[7]);var inst_31146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31143);var state_31204__$1 = state_31204;var statearr_31209_31249 = state_31204__$1;(statearr_31209_31249[2] = inst_31146);
(statearr_31209_31249[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 3))
{var inst_31143 = (state_31204[7]);var state_31204__$1 = state_31204;var statearr_31210_31250 = state_31204__$1;(statearr_31210_31250[2] = inst_31143);
(statearr_31210_31250[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 4))
{var inst_31143 = (state_31204[7]);var inst_31149 = (state_31204[2]);var inst_31150 = cljs.core.get.call(null,inst_31149,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31151 = cljs.core.get.call(null,inst_31149,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31152 = cljs.core.get.call(null,inst_31149,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31153 = inst_31143;var state_31204__$1 = (function (){var statearr_31211 = state_31204;(statearr_31211[8] = inst_31151);
(statearr_31211[9] = inst_31152);
(statearr_31211[10] = inst_31150);
(statearr_31211[11] = inst_31153);
return statearr_31211;
})();var statearr_31212_31251 = state_31204__$1;(statearr_31212_31251[2] = null);
(statearr_31212_31251[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 5))
{var inst_31153 = (state_31204[11]);var inst_31156 = cljs.core.seq_QMARK_.call(null,inst_31153);var state_31204__$1 = state_31204;if(inst_31156)
{var statearr_31213_31252 = state_31204__$1;(statearr_31213_31252[1] = 7);
} else
{var statearr_31214_31253 = state_31204__$1;(statearr_31214_31253[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 6))
{var inst_31202 = (state_31204[2]);var state_31204__$1 = state_31204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31204__$1,inst_31202);
} else
{if((state_val_31205 === 7))
{var inst_31153 = (state_31204[11]);var inst_31158 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31153);var state_31204__$1 = state_31204;var statearr_31215_31254 = state_31204__$1;(statearr_31215_31254[2] = inst_31158);
(statearr_31215_31254[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 8))
{var inst_31153 = (state_31204[11]);var state_31204__$1 = state_31204;var statearr_31216_31255 = state_31204__$1;(statearr_31216_31255[2] = inst_31153);
(statearr_31216_31255[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 9))
{var inst_31161 = (state_31204[12]);var inst_31161__$1 = (state_31204[2]);var inst_31162 = cljs.core.get.call(null,inst_31161__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31163 = cljs.core.get.call(null,inst_31161__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31164 = cljs.core.get.call(null,inst_31161__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31204__$1 = (function (){var statearr_31217 = state_31204;(statearr_31217[13] = inst_31164);
(statearr_31217[14] = inst_31163);
(statearr_31217[12] = inst_31161__$1);
return statearr_31217;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31204__$1,10,inst_31162);
} else
{if((state_val_31205 === 10))
{var inst_31168 = (state_31204[15]);var inst_31169 = (state_31204[16]);var inst_31167 = (state_31204[2]);var inst_31168__$1 = cljs.core.nth.call(null,inst_31167,0,null);var inst_31169__$1 = cljs.core.nth.call(null,inst_31167,1,null);var inst_31170 = (inst_31168__$1 == null);var inst_31171 = cljs.core._EQ_.call(null,inst_31169__$1,change);var inst_31172 = (inst_31170) || (inst_31171);var state_31204__$1 = (function (){var statearr_31218 = state_31204;(statearr_31218[15] = inst_31168__$1);
(statearr_31218[16] = inst_31169__$1);
return statearr_31218;
})();if(cljs.core.truth_(inst_31172))
{var statearr_31219_31256 = state_31204__$1;(statearr_31219_31256[1] = 11);
} else
{var statearr_31220_31257 = state_31204__$1;(statearr_31220_31257[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 11))
{var inst_31168 = (state_31204[15]);var inst_31174 = (inst_31168 == null);var state_31204__$1 = state_31204;if(cljs.core.truth_(inst_31174))
{var statearr_31221_31258 = state_31204__$1;(statearr_31221_31258[1] = 14);
} else
{var statearr_31222_31259 = state_31204__$1;(statearr_31222_31259[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 12))
{var inst_31183 = (state_31204[17]);var inst_31169 = (state_31204[16]);var inst_31164 = (state_31204[13]);var inst_31183__$1 = inst_31164.call(null,inst_31169);var state_31204__$1 = (function (){var statearr_31223 = state_31204;(statearr_31223[17] = inst_31183__$1);
return statearr_31223;
})();if(cljs.core.truth_(inst_31183__$1))
{var statearr_31224_31260 = state_31204__$1;(statearr_31224_31260[1] = 17);
} else
{var statearr_31225_31261 = state_31204__$1;(statearr_31225_31261[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 13))
{var inst_31200 = (state_31204[2]);var state_31204__$1 = state_31204;var statearr_31226_31262 = state_31204__$1;(statearr_31226_31262[2] = inst_31200);
(statearr_31226_31262[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 14))
{var inst_31169 = (state_31204[16]);var inst_31176 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31169);var state_31204__$1 = state_31204;var statearr_31227_31263 = state_31204__$1;(statearr_31227_31263[2] = inst_31176);
(statearr_31227_31263[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 15))
{var state_31204__$1 = state_31204;var statearr_31228_31264 = state_31204__$1;(statearr_31228_31264[2] = null);
(statearr_31228_31264[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 16))
{var inst_31179 = (state_31204[2]);var inst_31180 = calc_state.call(null);var inst_31153 = inst_31180;var state_31204__$1 = (function (){var statearr_31229 = state_31204;(statearr_31229[18] = inst_31179);
(statearr_31229[11] = inst_31153);
return statearr_31229;
})();var statearr_31230_31265 = state_31204__$1;(statearr_31230_31265[2] = null);
(statearr_31230_31265[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 17))
{var inst_31183 = (state_31204[17]);var state_31204__$1 = state_31204;var statearr_31231_31266 = state_31204__$1;(statearr_31231_31266[2] = inst_31183);
(statearr_31231_31266[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 18))
{var inst_31169 = (state_31204[16]);var inst_31164 = (state_31204[13]);var inst_31163 = (state_31204[14]);var inst_31186 = cljs.core.empty_QMARK_.call(null,inst_31164);var inst_31187 = inst_31163.call(null,inst_31169);var inst_31188 = cljs.core.not.call(null,inst_31187);var inst_31189 = (inst_31186) && (inst_31188);var state_31204__$1 = state_31204;var statearr_31232_31267 = state_31204__$1;(statearr_31232_31267[2] = inst_31189);
(statearr_31232_31267[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 19))
{var inst_31191 = (state_31204[2]);var state_31204__$1 = state_31204;if(cljs.core.truth_(inst_31191))
{var statearr_31233_31268 = state_31204__$1;(statearr_31233_31268[1] = 20);
} else
{var statearr_31234_31269 = state_31204__$1;(statearr_31234_31269[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 20))
{var inst_31168 = (state_31204[15]);var state_31204__$1 = state_31204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31204__$1,23,out,inst_31168);
} else
{if((state_val_31205 === 21))
{var state_31204__$1 = state_31204;var statearr_31235_31270 = state_31204__$1;(statearr_31235_31270[2] = null);
(statearr_31235_31270[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 22))
{var inst_31161 = (state_31204[12]);var inst_31197 = (state_31204[2]);var inst_31153 = inst_31161;var state_31204__$1 = (function (){var statearr_31236 = state_31204;(statearr_31236[19] = inst_31197);
(statearr_31236[11] = inst_31153);
return statearr_31236;
})();var statearr_31237_31271 = state_31204__$1;(statearr_31237_31271[2] = null);
(statearr_31237_31271[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31205 === 23))
{var inst_31194 = (state_31204[2]);var state_31204__$1 = state_31204;var statearr_31238_31272 = state_31204__$1;(statearr_31238_31272[2] = inst_31194);
(statearr_31238_31272[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31242[0] = state_machine__5507__auto__);
(statearr_31242[1] = 1);
return statearr_31242;
});
var state_machine__5507__auto____1 = (function (state_31204){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31204);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31243){if((e31243 instanceof Object))
{var ex__5510__auto__ = e31243;var statearr_31244_31273 = state_31204;(statearr_31244_31273[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31274 = state_31204;
state_31204 = G__31274;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31204){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31245 = f__5522__auto__.call(null);(statearr_31245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31246);
return statearr_31245;
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
cljs.core.async.Pub = (function (){var obj31276 = {};return obj31276;
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
return (function (p1__31277_SHARP_){if(cljs.core.truth_(p1__31277_SHARP_.call(null,topic)))
{return p1__31277_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31277_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31402 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31402 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31403){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31403 = meta31403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31402.cljs$lang$type = true;
cljs.core.async.t31402.cljs$lang$ctorStr = "cljs.core.async/t31402";
cljs.core.async.t31402.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31402");
});})(mults,ensure_mult))
;
cljs.core.async.t31402.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31402.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31402.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31402.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31404){var self__ = this;
var _31404__$1 = this;return self__.meta31403;
});})(mults,ensure_mult))
;
cljs.core.async.t31402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31404,meta31403__$1){var self__ = this;
var _31404__$1 = this;return (new cljs.core.async.t31402(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31403__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31402 = ((function (mults,ensure_mult){
return (function __GT_t31402(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31403){return (new cljs.core.async.t31402(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31403));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31402(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___31526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31478){var state_val_31479 = (state_31478[1]);if((state_val_31479 === 1))
{var state_31478__$1 = state_31478;var statearr_31480_31527 = state_31478__$1;(statearr_31480_31527[2] = null);
(statearr_31480_31527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 2))
{var state_31478__$1 = state_31478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31478__$1,4,ch);
} else
{if((state_val_31479 === 3))
{var inst_31476 = (state_31478[2]);var state_31478__$1 = state_31478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31478__$1,inst_31476);
} else
{if((state_val_31479 === 4))
{var inst_31407 = (state_31478[7]);var inst_31407__$1 = (state_31478[2]);var inst_31408 = (inst_31407__$1 == null);var state_31478__$1 = (function (){var statearr_31481 = state_31478;(statearr_31481[7] = inst_31407__$1);
return statearr_31481;
})();if(cljs.core.truth_(inst_31408))
{var statearr_31482_31528 = state_31478__$1;(statearr_31482_31528[1] = 5);
} else
{var statearr_31483_31529 = state_31478__$1;(statearr_31483_31529[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 5))
{var inst_31414 = cljs.core.deref.call(null,mults);var inst_31415 = cljs.core.vals.call(null,inst_31414);var inst_31416 = cljs.core.seq.call(null,inst_31415);var inst_31417 = inst_31416;var inst_31418 = null;var inst_31419 = 0;var inst_31420 = 0;var state_31478__$1 = (function (){var statearr_31484 = state_31478;(statearr_31484[8] = inst_31420);
(statearr_31484[9] = inst_31417);
(statearr_31484[10] = inst_31418);
(statearr_31484[11] = inst_31419);
return statearr_31484;
})();var statearr_31485_31530 = state_31478__$1;(statearr_31485_31530[2] = null);
(statearr_31485_31530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 6))
{var inst_31455 = (state_31478[12]);var inst_31457 = (state_31478[13]);var inst_31407 = (state_31478[7]);var inst_31455__$1 = topic_fn.call(null,inst_31407);var inst_31456 = cljs.core.deref.call(null,mults);var inst_31457__$1 = cljs.core.get.call(null,inst_31456,inst_31455__$1);var state_31478__$1 = (function (){var statearr_31486 = state_31478;(statearr_31486[12] = inst_31455__$1);
(statearr_31486[13] = inst_31457__$1);
return statearr_31486;
})();if(cljs.core.truth_(inst_31457__$1))
{var statearr_31487_31531 = state_31478__$1;(statearr_31487_31531[1] = 19);
} else
{var statearr_31488_31532 = state_31478__$1;(statearr_31488_31532[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 7))
{var inst_31474 = (state_31478[2]);var state_31478__$1 = state_31478;var statearr_31489_31533 = state_31478__$1;(statearr_31489_31533[2] = inst_31474);
(statearr_31489_31533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 8))
{var inst_31420 = (state_31478[8]);var inst_31419 = (state_31478[11]);var inst_31422 = (inst_31420 < inst_31419);var inst_31423 = inst_31422;var state_31478__$1 = state_31478;if(cljs.core.truth_(inst_31423))
{var statearr_31493_31534 = state_31478__$1;(statearr_31493_31534[1] = 10);
} else
{var statearr_31494_31535 = state_31478__$1;(statearr_31494_31535[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 9))
{var inst_31453 = (state_31478[2]);var state_31478__$1 = state_31478;var statearr_31495_31536 = state_31478__$1;(statearr_31495_31536[2] = inst_31453);
(statearr_31495_31536[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 10))
{var inst_31420 = (state_31478[8]);var inst_31417 = (state_31478[9]);var inst_31418 = (state_31478[10]);var inst_31419 = (state_31478[11]);var inst_31425 = cljs.core._nth.call(null,inst_31418,inst_31420);var inst_31426 = cljs.core.async.muxch_STAR_.call(null,inst_31425);var inst_31427 = cljs.core.async.close_BANG_.call(null,inst_31426);var inst_31428 = (inst_31420 + 1);var tmp31490 = inst_31417;var tmp31491 = inst_31418;var tmp31492 = inst_31419;var inst_31417__$1 = tmp31490;var inst_31418__$1 = tmp31491;var inst_31419__$1 = tmp31492;var inst_31420__$1 = inst_31428;var state_31478__$1 = (function (){var statearr_31496 = state_31478;(statearr_31496[14] = inst_31427);
(statearr_31496[8] = inst_31420__$1);
(statearr_31496[9] = inst_31417__$1);
(statearr_31496[10] = inst_31418__$1);
(statearr_31496[11] = inst_31419__$1);
return statearr_31496;
})();var statearr_31497_31537 = state_31478__$1;(statearr_31497_31537[2] = null);
(statearr_31497_31537[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 11))
{var inst_31417 = (state_31478[9]);var inst_31431 = (state_31478[15]);var inst_31431__$1 = cljs.core.seq.call(null,inst_31417);var state_31478__$1 = (function (){var statearr_31498 = state_31478;(statearr_31498[15] = inst_31431__$1);
return statearr_31498;
})();if(inst_31431__$1)
{var statearr_31499_31538 = state_31478__$1;(statearr_31499_31538[1] = 13);
} else
{var statearr_31500_31539 = state_31478__$1;(statearr_31500_31539[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 12))
{var inst_31451 = (state_31478[2]);var state_31478__$1 = state_31478;var statearr_31501_31540 = state_31478__$1;(statearr_31501_31540[2] = inst_31451);
(statearr_31501_31540[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 13))
{var inst_31431 = (state_31478[15]);var inst_31433 = cljs.core.chunked_seq_QMARK_.call(null,inst_31431);var state_31478__$1 = state_31478;if(inst_31433)
{var statearr_31502_31541 = state_31478__$1;(statearr_31502_31541[1] = 16);
} else
{var statearr_31503_31542 = state_31478__$1;(statearr_31503_31542[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 14))
{var state_31478__$1 = state_31478;var statearr_31504_31543 = state_31478__$1;(statearr_31504_31543[2] = null);
(statearr_31504_31543[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 15))
{var inst_31449 = (state_31478[2]);var state_31478__$1 = state_31478;var statearr_31505_31544 = state_31478__$1;(statearr_31505_31544[2] = inst_31449);
(statearr_31505_31544[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 16))
{var inst_31431 = (state_31478[15]);var inst_31435 = cljs.core.chunk_first.call(null,inst_31431);var inst_31436 = cljs.core.chunk_rest.call(null,inst_31431);var inst_31437 = cljs.core.count.call(null,inst_31435);var inst_31417 = inst_31436;var inst_31418 = inst_31435;var inst_31419 = inst_31437;var inst_31420 = 0;var state_31478__$1 = (function (){var statearr_31506 = state_31478;(statearr_31506[8] = inst_31420);
(statearr_31506[9] = inst_31417);
(statearr_31506[10] = inst_31418);
(statearr_31506[11] = inst_31419);
return statearr_31506;
})();var statearr_31507_31545 = state_31478__$1;(statearr_31507_31545[2] = null);
(statearr_31507_31545[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 17))
{var inst_31431 = (state_31478[15]);var inst_31440 = cljs.core.first.call(null,inst_31431);var inst_31441 = cljs.core.async.muxch_STAR_.call(null,inst_31440);var inst_31442 = cljs.core.async.close_BANG_.call(null,inst_31441);var inst_31443 = cljs.core.next.call(null,inst_31431);var inst_31417 = inst_31443;var inst_31418 = null;var inst_31419 = 0;var inst_31420 = 0;var state_31478__$1 = (function (){var statearr_31508 = state_31478;(statearr_31508[8] = inst_31420);
(statearr_31508[16] = inst_31442);
(statearr_31508[9] = inst_31417);
(statearr_31508[10] = inst_31418);
(statearr_31508[11] = inst_31419);
return statearr_31508;
})();var statearr_31509_31546 = state_31478__$1;(statearr_31509_31546[2] = null);
(statearr_31509_31546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 18))
{var inst_31446 = (state_31478[2]);var state_31478__$1 = state_31478;var statearr_31510_31547 = state_31478__$1;(statearr_31510_31547[2] = inst_31446);
(statearr_31510_31547[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 19))
{var state_31478__$1 = state_31478;var statearr_31511_31548 = state_31478__$1;(statearr_31511_31548[2] = null);
(statearr_31511_31548[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 20))
{var state_31478__$1 = state_31478;var statearr_31512_31549 = state_31478__$1;(statearr_31512_31549[2] = null);
(statearr_31512_31549[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 21))
{var inst_31471 = (state_31478[2]);var state_31478__$1 = (function (){var statearr_31513 = state_31478;(statearr_31513[17] = inst_31471);
return statearr_31513;
})();var statearr_31514_31550 = state_31478__$1;(statearr_31514_31550[2] = null);
(statearr_31514_31550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 22))
{var inst_31468 = (state_31478[2]);var state_31478__$1 = state_31478;var statearr_31515_31551 = state_31478__$1;(statearr_31515_31551[2] = inst_31468);
(statearr_31515_31551[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 23))
{var inst_31455 = (state_31478[12]);var inst_31459 = (state_31478[2]);var inst_31460 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31455);var state_31478__$1 = (function (){var statearr_31516 = state_31478;(statearr_31516[18] = inst_31459);
return statearr_31516;
})();var statearr_31517_31552 = state_31478__$1;(statearr_31517_31552[2] = inst_31460);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31479 === 24))
{var inst_31457 = (state_31478[13]);var inst_31407 = (state_31478[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31478,23,Object,null,22);var inst_31464 = cljs.core.async.muxch_STAR_.call(null,inst_31457);var state_31478__$1 = state_31478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31478__$1,25,inst_31464,inst_31407);
} else
{if((state_val_31479 === 25))
{var inst_31466 = (state_31478[2]);var state_31478__$1 = state_31478;var statearr_31518_31553 = state_31478__$1;(statearr_31518_31553[2] = inst_31466);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31478__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_31522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31522[0] = state_machine__5507__auto__);
(statearr_31522[1] = 1);
return statearr_31522;
});
var state_machine__5507__auto____1 = (function (state_31478){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31523){if((e31523 instanceof Object))
{var ex__5510__auto__ = e31523;var statearr_31524_31554 = state_31478;(statearr_31524_31554[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31555 = state_31478;
state_31478 = G__31555;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31478){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31525 = f__5522__auto__.call(null);(statearr_31525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31526);
return statearr_31525;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___31692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31662){var state_val_31663 = (state_31662[1]);if((state_val_31663 === 1))
{var state_31662__$1 = state_31662;var statearr_31664_31693 = state_31662__$1;(statearr_31664_31693[2] = null);
(statearr_31664_31693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 2))
{var inst_31625 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31626 = 0;var state_31662__$1 = (function (){var statearr_31665 = state_31662;(statearr_31665[7] = inst_31626);
(statearr_31665[8] = inst_31625);
return statearr_31665;
})();var statearr_31666_31694 = state_31662__$1;(statearr_31666_31694[2] = null);
(statearr_31666_31694[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 3))
{var inst_31660 = (state_31662[2]);var state_31662__$1 = state_31662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31662__$1,inst_31660);
} else
{if((state_val_31663 === 4))
{var inst_31626 = (state_31662[7]);var inst_31628 = (inst_31626 < cnt);var state_31662__$1 = state_31662;if(cljs.core.truth_(inst_31628))
{var statearr_31667_31695 = state_31662__$1;(statearr_31667_31695[1] = 6);
} else
{var statearr_31668_31696 = state_31662__$1;(statearr_31668_31696[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 5))
{var inst_31646 = (state_31662[2]);var state_31662__$1 = (function (){var statearr_31669 = state_31662;(statearr_31669[9] = inst_31646);
return statearr_31669;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31662__$1,12,dchan);
} else
{if((state_val_31663 === 6))
{var state_31662__$1 = state_31662;var statearr_31670_31697 = state_31662__$1;(statearr_31670_31697[2] = null);
(statearr_31670_31697[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 7))
{var state_31662__$1 = state_31662;var statearr_31671_31698 = state_31662__$1;(statearr_31671_31698[2] = null);
(statearr_31671_31698[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 8))
{var inst_31644 = (state_31662[2]);var state_31662__$1 = state_31662;var statearr_31672_31699 = state_31662__$1;(statearr_31672_31699[2] = inst_31644);
(statearr_31672_31699[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 9))
{var inst_31626 = (state_31662[7]);var inst_31639 = (state_31662[2]);var inst_31640 = (inst_31626 + 1);var inst_31626__$1 = inst_31640;var state_31662__$1 = (function (){var statearr_31673 = state_31662;(statearr_31673[7] = inst_31626__$1);
(statearr_31673[10] = inst_31639);
return statearr_31673;
})();var statearr_31674_31700 = state_31662__$1;(statearr_31674_31700[2] = null);
(statearr_31674_31700[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 10))
{var inst_31630 = (state_31662[2]);var inst_31631 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31662__$1 = (function (){var statearr_31675 = state_31662;(statearr_31675[11] = inst_31630);
return statearr_31675;
})();var statearr_31676_31701 = state_31662__$1;(statearr_31676_31701[2] = inst_31631);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31662__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 11))
{var inst_31626 = (state_31662[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31662,10,Object,null,9);var inst_31635 = chs__$1.call(null,inst_31626);var inst_31636 = done.call(null,inst_31626);var inst_31637 = cljs.core.async.take_BANG_.call(null,inst_31635,inst_31636);var state_31662__$1 = state_31662;var statearr_31677_31702 = state_31662__$1;(statearr_31677_31702[2] = inst_31637);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31662__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 12))
{var inst_31648 = (state_31662[12]);var inst_31648__$1 = (state_31662[2]);var inst_31649 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31648__$1);var state_31662__$1 = (function (){var statearr_31678 = state_31662;(statearr_31678[12] = inst_31648__$1);
return statearr_31678;
})();if(cljs.core.truth_(inst_31649))
{var statearr_31679_31703 = state_31662__$1;(statearr_31679_31703[1] = 13);
} else
{var statearr_31680_31704 = state_31662__$1;(statearr_31680_31704[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 13))
{var inst_31651 = cljs.core.async.close_BANG_.call(null,out);var state_31662__$1 = state_31662;var statearr_31681_31705 = state_31662__$1;(statearr_31681_31705[2] = inst_31651);
(statearr_31681_31705[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 14))
{var inst_31648 = (state_31662[12]);var inst_31653 = cljs.core.apply.call(null,f,inst_31648);var state_31662__$1 = state_31662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31662__$1,16,out,inst_31653);
} else
{if((state_val_31663 === 15))
{var inst_31658 = (state_31662[2]);var state_31662__$1 = state_31662;var statearr_31682_31706 = state_31662__$1;(statearr_31682_31706[2] = inst_31658);
(statearr_31682_31706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31663 === 16))
{var inst_31655 = (state_31662[2]);var state_31662__$1 = (function (){var statearr_31683 = state_31662;(statearr_31683[13] = inst_31655);
return statearr_31683;
})();var statearr_31684_31707 = state_31662__$1;(statearr_31684_31707[2] = null);
(statearr_31684_31707[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31688[0] = state_machine__5507__auto__);
(statearr_31688[1] = 1);
return statearr_31688;
});
var state_machine__5507__auto____1 = (function (state_31662){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31662);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object))
{var ex__5510__auto__ = e31689;var statearr_31690_31708 = state_31662;(statearr_31690_31708[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31709 = state_31662;
state_31662 = G__31709;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31662){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31691 = f__5522__auto__.call(null);(statearr_31691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31692);
return statearr_31691;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31817 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31793){var state_val_31794 = (state_31793[1]);if((state_val_31794 === 1))
{var inst_31764 = cljs.core.vec.call(null,chs);var inst_31765 = inst_31764;var state_31793__$1 = (function (){var statearr_31795 = state_31793;(statearr_31795[7] = inst_31765);
return statearr_31795;
})();var statearr_31796_31818 = state_31793__$1;(statearr_31796_31818[2] = null);
(statearr_31796_31818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31794 === 2))
{var inst_31765 = (state_31793[7]);var inst_31767 = cljs.core.count.call(null,inst_31765);var inst_31768 = (inst_31767 > 0);var state_31793__$1 = state_31793;if(cljs.core.truth_(inst_31768))
{var statearr_31797_31819 = state_31793__$1;(statearr_31797_31819[1] = 4);
} else
{var statearr_31798_31820 = state_31793__$1;(statearr_31798_31820[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31794 === 3))
{var inst_31791 = (state_31793[2]);var state_31793__$1 = state_31793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31793__$1,inst_31791);
} else
{if((state_val_31794 === 4))
{var inst_31765 = (state_31793[7]);var state_31793__$1 = state_31793;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31793__$1,7,inst_31765);
} else
{if((state_val_31794 === 5))
{var inst_31787 = cljs.core.async.close_BANG_.call(null,out);var state_31793__$1 = state_31793;var statearr_31799_31821 = state_31793__$1;(statearr_31799_31821[2] = inst_31787);
(statearr_31799_31821[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31794 === 6))
{var inst_31789 = (state_31793[2]);var state_31793__$1 = state_31793;var statearr_31800_31822 = state_31793__$1;(statearr_31800_31822[2] = inst_31789);
(statearr_31800_31822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31794 === 7))
{var inst_31773 = (state_31793[8]);var inst_31772 = (state_31793[9]);var inst_31772__$1 = (state_31793[2]);var inst_31773__$1 = cljs.core.nth.call(null,inst_31772__$1,0,null);var inst_31774 = cljs.core.nth.call(null,inst_31772__$1,1,null);var inst_31775 = (inst_31773__$1 == null);var state_31793__$1 = (function (){var statearr_31801 = state_31793;(statearr_31801[8] = inst_31773__$1);
(statearr_31801[10] = inst_31774);
(statearr_31801[9] = inst_31772__$1);
return statearr_31801;
})();if(cljs.core.truth_(inst_31775))
{var statearr_31802_31823 = state_31793__$1;(statearr_31802_31823[1] = 8);
} else
{var statearr_31803_31824 = state_31793__$1;(statearr_31803_31824[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31794 === 8))
{var inst_31773 = (state_31793[8]);var inst_31774 = (state_31793[10]);var inst_31772 = (state_31793[9]);var inst_31765 = (state_31793[7]);var inst_31777 = (function (){var c = inst_31774;var v = inst_31773;var vec__31770 = inst_31772;var cs = inst_31765;return ((function (c,v,vec__31770,cs,inst_31773,inst_31774,inst_31772,inst_31765,state_val_31794){
return (function (p1__31710_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31710_SHARP_);
});
;})(c,v,vec__31770,cs,inst_31773,inst_31774,inst_31772,inst_31765,state_val_31794))
})();var inst_31778 = cljs.core.filterv.call(null,inst_31777,inst_31765);var inst_31765__$1 = inst_31778;var state_31793__$1 = (function (){var statearr_31804 = state_31793;(statearr_31804[7] = inst_31765__$1);
return statearr_31804;
})();var statearr_31805_31825 = state_31793__$1;(statearr_31805_31825[2] = null);
(statearr_31805_31825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31794 === 9))
{var inst_31773 = (state_31793[8]);var state_31793__$1 = state_31793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31793__$1,11,out,inst_31773);
} else
{if((state_val_31794 === 10))
{var inst_31785 = (state_31793[2]);var state_31793__$1 = state_31793;var statearr_31807_31826 = state_31793__$1;(statearr_31807_31826[2] = inst_31785);
(statearr_31807_31826[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31794 === 11))
{var inst_31765 = (state_31793[7]);var inst_31782 = (state_31793[2]);var tmp31806 = inst_31765;var inst_31765__$1 = tmp31806;var state_31793__$1 = (function (){var statearr_31808 = state_31793;(statearr_31808[11] = inst_31782);
(statearr_31808[7] = inst_31765__$1);
return statearr_31808;
})();var statearr_31809_31827 = state_31793__$1;(statearr_31809_31827[2] = null);
(statearr_31809_31827[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31813 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31813[0] = state_machine__5507__auto__);
(statearr_31813[1] = 1);
return statearr_31813;
});
var state_machine__5507__auto____1 = (function (state_31793){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31814){if((e31814 instanceof Object))
{var ex__5510__auto__ = e31814;var statearr_31815_31828 = state_31793;(statearr_31815_31828[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31793);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31829 = state_31793;
state_31793 = G__31829;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31793){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31816 = f__5522__auto__.call(null);(statearr_31816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31817);
return statearr_31816;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31922 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31899){var state_val_31900 = (state_31899[1]);if((state_val_31900 === 1))
{var inst_31876 = 0;var state_31899__$1 = (function (){var statearr_31901 = state_31899;(statearr_31901[7] = inst_31876);
return statearr_31901;
})();var statearr_31902_31923 = state_31899__$1;(statearr_31902_31923[2] = null);
(statearr_31902_31923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31900 === 2))
{var inst_31876 = (state_31899[7]);var inst_31878 = (inst_31876 < n);var state_31899__$1 = state_31899;if(cljs.core.truth_(inst_31878))
{var statearr_31903_31924 = state_31899__$1;(statearr_31903_31924[1] = 4);
} else
{var statearr_31904_31925 = state_31899__$1;(statearr_31904_31925[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31900 === 3))
{var inst_31896 = (state_31899[2]);var inst_31897 = cljs.core.async.close_BANG_.call(null,out);var state_31899__$1 = (function (){var statearr_31905 = state_31899;(statearr_31905[8] = inst_31896);
return statearr_31905;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31899__$1,inst_31897);
} else
{if((state_val_31900 === 4))
{var state_31899__$1 = state_31899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31899__$1,7,ch);
} else
{if((state_val_31900 === 5))
{var state_31899__$1 = state_31899;var statearr_31906_31926 = state_31899__$1;(statearr_31906_31926[2] = null);
(statearr_31906_31926[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31900 === 6))
{var inst_31894 = (state_31899[2]);var state_31899__$1 = state_31899;var statearr_31907_31927 = state_31899__$1;(statearr_31907_31927[2] = inst_31894);
(statearr_31907_31927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31900 === 7))
{var inst_31881 = (state_31899[9]);var inst_31881__$1 = (state_31899[2]);var inst_31882 = (inst_31881__$1 == null);var inst_31883 = cljs.core.not.call(null,inst_31882);var state_31899__$1 = (function (){var statearr_31908 = state_31899;(statearr_31908[9] = inst_31881__$1);
return statearr_31908;
})();if(inst_31883)
{var statearr_31909_31928 = state_31899__$1;(statearr_31909_31928[1] = 8);
} else
{var statearr_31910_31929 = state_31899__$1;(statearr_31910_31929[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31900 === 8))
{var inst_31881 = (state_31899[9]);var state_31899__$1 = state_31899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31899__$1,11,out,inst_31881);
} else
{if((state_val_31900 === 9))
{var state_31899__$1 = state_31899;var statearr_31911_31930 = state_31899__$1;(statearr_31911_31930[2] = null);
(statearr_31911_31930[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31900 === 10))
{var inst_31891 = (state_31899[2]);var state_31899__$1 = state_31899;var statearr_31912_31931 = state_31899__$1;(statearr_31912_31931[2] = inst_31891);
(statearr_31912_31931[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31900 === 11))
{var inst_31876 = (state_31899[7]);var inst_31886 = (state_31899[2]);var inst_31887 = (inst_31876 + 1);var inst_31876__$1 = inst_31887;var state_31899__$1 = (function (){var statearr_31913 = state_31899;(statearr_31913[7] = inst_31876__$1);
(statearr_31913[10] = inst_31886);
return statearr_31913;
})();var statearr_31914_31932 = state_31899__$1;(statearr_31914_31932[2] = null);
(statearr_31914_31932[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31918 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31918[0] = state_machine__5507__auto__);
(statearr_31918[1] = 1);
return statearr_31918;
});
var state_machine__5507__auto____1 = (function (state_31899){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31899);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31919){if((e31919 instanceof Object))
{var ex__5510__auto__ = e31919;var statearr_31920_31933 = state_31899;(statearr_31920_31933[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31934 = state_31899;
state_31899 = G__31934;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31899){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31921 = f__5522__auto__.call(null);(statearr_31921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31922);
return statearr_31921;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32031 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32006){var state_val_32007 = (state_32006[1]);if((state_val_32007 === 1))
{var inst_31983 = null;var state_32006__$1 = (function (){var statearr_32008 = state_32006;(statearr_32008[7] = inst_31983);
return statearr_32008;
})();var statearr_32009_32032 = state_32006__$1;(statearr_32009_32032[2] = null);
(statearr_32009_32032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32007 === 2))
{var state_32006__$1 = state_32006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32006__$1,4,ch);
} else
{if((state_val_32007 === 3))
{var inst_32003 = (state_32006[2]);var inst_32004 = cljs.core.async.close_BANG_.call(null,out);var state_32006__$1 = (function (){var statearr_32010 = state_32006;(statearr_32010[8] = inst_32003);
return statearr_32010;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32006__$1,inst_32004);
} else
{if((state_val_32007 === 4))
{var inst_31986 = (state_32006[9]);var inst_31986__$1 = (state_32006[2]);var inst_31987 = (inst_31986__$1 == null);var inst_31988 = cljs.core.not.call(null,inst_31987);var state_32006__$1 = (function (){var statearr_32011 = state_32006;(statearr_32011[9] = inst_31986__$1);
return statearr_32011;
})();if(inst_31988)
{var statearr_32012_32033 = state_32006__$1;(statearr_32012_32033[1] = 5);
} else
{var statearr_32013_32034 = state_32006__$1;(statearr_32013_32034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32007 === 5))
{var inst_31986 = (state_32006[9]);var inst_31983 = (state_32006[7]);var inst_31990 = cljs.core._EQ_.call(null,inst_31986,inst_31983);var state_32006__$1 = state_32006;if(inst_31990)
{var statearr_32014_32035 = state_32006__$1;(statearr_32014_32035[1] = 8);
} else
{var statearr_32015_32036 = state_32006__$1;(statearr_32015_32036[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32007 === 6))
{var state_32006__$1 = state_32006;var statearr_32017_32037 = state_32006__$1;(statearr_32017_32037[2] = null);
(statearr_32017_32037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32007 === 7))
{var inst_32001 = (state_32006[2]);var state_32006__$1 = state_32006;var statearr_32018_32038 = state_32006__$1;(statearr_32018_32038[2] = inst_32001);
(statearr_32018_32038[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32007 === 8))
{var inst_31983 = (state_32006[7]);var tmp32016 = inst_31983;var inst_31983__$1 = tmp32016;var state_32006__$1 = (function (){var statearr_32019 = state_32006;(statearr_32019[7] = inst_31983__$1);
return statearr_32019;
})();var statearr_32020_32039 = state_32006__$1;(statearr_32020_32039[2] = null);
(statearr_32020_32039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32007 === 9))
{var inst_31986 = (state_32006[9]);var state_32006__$1 = state_32006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32006__$1,11,out,inst_31986);
} else
{if((state_val_32007 === 10))
{var inst_31998 = (state_32006[2]);var state_32006__$1 = state_32006;var statearr_32021_32040 = state_32006__$1;(statearr_32021_32040[2] = inst_31998);
(statearr_32021_32040[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32007 === 11))
{var inst_31986 = (state_32006[9]);var inst_31995 = (state_32006[2]);var inst_31983 = inst_31986;var state_32006__$1 = (function (){var statearr_32022 = state_32006;(statearr_32022[10] = inst_31995);
(statearr_32022[7] = inst_31983);
return statearr_32022;
})();var statearr_32023_32041 = state_32006__$1;(statearr_32023_32041[2] = null);
(statearr_32023_32041[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32027 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32027[0] = state_machine__5507__auto__);
(statearr_32027[1] = 1);
return statearr_32027;
});
var state_machine__5507__auto____1 = (function (state_32006){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32006);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32028){if((e32028 instanceof Object))
{var ex__5510__auto__ = e32028;var statearr_32029_32042 = state_32006;(statearr_32029_32042[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32043 = state_32006;
state_32006 = G__32043;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32006){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32030 = f__5522__auto__.call(null);(statearr_32030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32031);
return statearr_32030;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32178 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32148){var state_val_32149 = (state_32148[1]);if((state_val_32149 === 1))
{var inst_32111 = (new Array(n));var inst_32112 = inst_32111;var inst_32113 = 0;var state_32148__$1 = (function (){var statearr_32150 = state_32148;(statearr_32150[7] = inst_32113);
(statearr_32150[8] = inst_32112);
return statearr_32150;
})();var statearr_32151_32179 = state_32148__$1;(statearr_32151_32179[2] = null);
(statearr_32151_32179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 2))
{var state_32148__$1 = state_32148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32148__$1,4,ch);
} else
{if((state_val_32149 === 3))
{var inst_32146 = (state_32148[2]);var state_32148__$1 = state_32148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32148__$1,inst_32146);
} else
{if((state_val_32149 === 4))
{var inst_32116 = (state_32148[9]);var inst_32116__$1 = (state_32148[2]);var inst_32117 = (inst_32116__$1 == null);var inst_32118 = cljs.core.not.call(null,inst_32117);var state_32148__$1 = (function (){var statearr_32152 = state_32148;(statearr_32152[9] = inst_32116__$1);
return statearr_32152;
})();if(inst_32118)
{var statearr_32153_32180 = state_32148__$1;(statearr_32153_32180[1] = 5);
} else
{var statearr_32154_32181 = state_32148__$1;(statearr_32154_32181[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 5))
{var inst_32113 = (state_32148[7]);var inst_32112 = (state_32148[8]);var inst_32116 = (state_32148[9]);var inst_32121 = (state_32148[10]);var inst_32120 = (inst_32112[inst_32113] = inst_32116);var inst_32121__$1 = (inst_32113 + 1);var inst_32122 = (inst_32121__$1 < n);var state_32148__$1 = (function (){var statearr_32155 = state_32148;(statearr_32155[11] = inst_32120);
(statearr_32155[10] = inst_32121__$1);
return statearr_32155;
})();if(cljs.core.truth_(inst_32122))
{var statearr_32156_32182 = state_32148__$1;(statearr_32156_32182[1] = 8);
} else
{var statearr_32157_32183 = state_32148__$1;(statearr_32157_32183[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 6))
{var inst_32113 = (state_32148[7]);var inst_32134 = (inst_32113 > 0);var state_32148__$1 = state_32148;if(cljs.core.truth_(inst_32134))
{var statearr_32159_32184 = state_32148__$1;(statearr_32159_32184[1] = 12);
} else
{var statearr_32160_32185 = state_32148__$1;(statearr_32160_32185[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 7))
{var inst_32144 = (state_32148[2]);var state_32148__$1 = state_32148;var statearr_32161_32186 = state_32148__$1;(statearr_32161_32186[2] = inst_32144);
(statearr_32161_32186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 8))
{var inst_32112 = (state_32148[8]);var inst_32121 = (state_32148[10]);var tmp32158 = inst_32112;var inst_32112__$1 = tmp32158;var inst_32113 = inst_32121;var state_32148__$1 = (function (){var statearr_32162 = state_32148;(statearr_32162[7] = inst_32113);
(statearr_32162[8] = inst_32112__$1);
return statearr_32162;
})();var statearr_32163_32187 = state_32148__$1;(statearr_32163_32187[2] = null);
(statearr_32163_32187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 9))
{var inst_32112 = (state_32148[8]);var inst_32126 = cljs.core.vec.call(null,inst_32112);var state_32148__$1 = state_32148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32148__$1,11,out,inst_32126);
} else
{if((state_val_32149 === 10))
{var inst_32132 = (state_32148[2]);var state_32148__$1 = state_32148;var statearr_32164_32188 = state_32148__$1;(statearr_32164_32188[2] = inst_32132);
(statearr_32164_32188[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 11))
{var inst_32128 = (state_32148[2]);var inst_32129 = (new Array(n));var inst_32112 = inst_32129;var inst_32113 = 0;var state_32148__$1 = (function (){var statearr_32165 = state_32148;(statearr_32165[7] = inst_32113);
(statearr_32165[8] = inst_32112);
(statearr_32165[12] = inst_32128);
return statearr_32165;
})();var statearr_32166_32189 = state_32148__$1;(statearr_32166_32189[2] = null);
(statearr_32166_32189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 12))
{var inst_32112 = (state_32148[8]);var inst_32136 = cljs.core.vec.call(null,inst_32112);var state_32148__$1 = state_32148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32148__$1,15,out,inst_32136);
} else
{if((state_val_32149 === 13))
{var state_32148__$1 = state_32148;var statearr_32167_32190 = state_32148__$1;(statearr_32167_32190[2] = null);
(statearr_32167_32190[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 14))
{var inst_32141 = (state_32148[2]);var inst_32142 = cljs.core.async.close_BANG_.call(null,out);var state_32148__$1 = (function (){var statearr_32168 = state_32148;(statearr_32168[13] = inst_32141);
return statearr_32168;
})();var statearr_32169_32191 = state_32148__$1;(statearr_32169_32191[2] = inst_32142);
(statearr_32169_32191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32149 === 15))
{var inst_32138 = (state_32148[2]);var state_32148__$1 = state_32148;var statearr_32170_32192 = state_32148__$1;(statearr_32170_32192[2] = inst_32138);
(statearr_32170_32192[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32174[0] = state_machine__5507__auto__);
(statearr_32174[1] = 1);
return statearr_32174;
});
var state_machine__5507__auto____1 = (function (state_32148){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32175){if((e32175 instanceof Object))
{var ex__5510__auto__ = e32175;var statearr_32176_32193 = state_32148;(statearr_32176_32193[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32194 = state_32148;
state_32148 = G__32194;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32177 = f__5522__auto__.call(null);(statearr_32177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32178);
return statearr_32177;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32337 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32307){var state_val_32308 = (state_32307[1]);if((state_val_32308 === 1))
{var inst_32266 = [];var inst_32267 = inst_32266;var inst_32268 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32307__$1 = (function (){var statearr_32309 = state_32307;(statearr_32309[7] = inst_32268);
(statearr_32309[8] = inst_32267);
return statearr_32309;
})();var statearr_32310_32338 = state_32307__$1;(statearr_32310_32338[2] = null);
(statearr_32310_32338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 2))
{var state_32307__$1 = state_32307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32307__$1,4,ch);
} else
{if((state_val_32308 === 3))
{var inst_32305 = (state_32307[2]);var state_32307__$1 = state_32307;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32307__$1,inst_32305);
} else
{if((state_val_32308 === 4))
{var inst_32271 = (state_32307[9]);var inst_32271__$1 = (state_32307[2]);var inst_32272 = (inst_32271__$1 == null);var inst_32273 = cljs.core.not.call(null,inst_32272);var state_32307__$1 = (function (){var statearr_32311 = state_32307;(statearr_32311[9] = inst_32271__$1);
return statearr_32311;
})();if(inst_32273)
{var statearr_32312_32339 = state_32307__$1;(statearr_32312_32339[1] = 5);
} else
{var statearr_32313_32340 = state_32307__$1;(statearr_32313_32340[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 5))
{var inst_32268 = (state_32307[7]);var inst_32275 = (state_32307[10]);var inst_32271 = (state_32307[9]);var inst_32275__$1 = f.call(null,inst_32271);var inst_32276 = cljs.core._EQ_.call(null,inst_32275__$1,inst_32268);var inst_32277 = cljs.core.keyword_identical_QMARK_.call(null,inst_32268,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32278 = (inst_32276) || (inst_32277);var state_32307__$1 = (function (){var statearr_32314 = state_32307;(statearr_32314[10] = inst_32275__$1);
return statearr_32314;
})();if(cljs.core.truth_(inst_32278))
{var statearr_32315_32341 = state_32307__$1;(statearr_32315_32341[1] = 8);
} else
{var statearr_32316_32342 = state_32307__$1;(statearr_32316_32342[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 6))
{var inst_32267 = (state_32307[8]);var inst_32292 = inst_32267.length;var inst_32293 = (inst_32292 > 0);var state_32307__$1 = state_32307;if(cljs.core.truth_(inst_32293))
{var statearr_32318_32343 = state_32307__$1;(statearr_32318_32343[1] = 12);
} else
{var statearr_32319_32344 = state_32307__$1;(statearr_32319_32344[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 7))
{var inst_32303 = (state_32307[2]);var state_32307__$1 = state_32307;var statearr_32320_32345 = state_32307__$1;(statearr_32320_32345[2] = inst_32303);
(statearr_32320_32345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 8))
{var inst_32275 = (state_32307[10]);var inst_32271 = (state_32307[9]);var inst_32267 = (state_32307[8]);var inst_32280 = inst_32267.push(inst_32271);var tmp32317 = inst_32267;var inst_32267__$1 = tmp32317;var inst_32268 = inst_32275;var state_32307__$1 = (function (){var statearr_32321 = state_32307;(statearr_32321[7] = inst_32268);
(statearr_32321[8] = inst_32267__$1);
(statearr_32321[11] = inst_32280);
return statearr_32321;
})();var statearr_32322_32346 = state_32307__$1;(statearr_32322_32346[2] = null);
(statearr_32322_32346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 9))
{var inst_32267 = (state_32307[8]);var inst_32283 = cljs.core.vec.call(null,inst_32267);var state_32307__$1 = state_32307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32307__$1,11,out,inst_32283);
} else
{if((state_val_32308 === 10))
{var inst_32290 = (state_32307[2]);var state_32307__$1 = state_32307;var statearr_32323_32347 = state_32307__$1;(statearr_32323_32347[2] = inst_32290);
(statearr_32323_32347[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 11))
{var inst_32275 = (state_32307[10]);var inst_32271 = (state_32307[9]);var inst_32285 = (state_32307[2]);var inst_32286 = [];var inst_32287 = inst_32286.push(inst_32271);var inst_32267 = inst_32286;var inst_32268 = inst_32275;var state_32307__$1 = (function (){var statearr_32324 = state_32307;(statearr_32324[7] = inst_32268);
(statearr_32324[8] = inst_32267);
(statearr_32324[12] = inst_32285);
(statearr_32324[13] = inst_32287);
return statearr_32324;
})();var statearr_32325_32348 = state_32307__$1;(statearr_32325_32348[2] = null);
(statearr_32325_32348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 12))
{var inst_32267 = (state_32307[8]);var inst_32295 = cljs.core.vec.call(null,inst_32267);var state_32307__$1 = state_32307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32307__$1,15,out,inst_32295);
} else
{if((state_val_32308 === 13))
{var state_32307__$1 = state_32307;var statearr_32326_32349 = state_32307__$1;(statearr_32326_32349[2] = null);
(statearr_32326_32349[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 14))
{var inst_32300 = (state_32307[2]);var inst_32301 = cljs.core.async.close_BANG_.call(null,out);var state_32307__$1 = (function (){var statearr_32327 = state_32307;(statearr_32327[14] = inst_32300);
return statearr_32327;
})();var statearr_32328_32350 = state_32307__$1;(statearr_32328_32350[2] = inst_32301);
(statearr_32328_32350[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32308 === 15))
{var inst_32297 = (state_32307[2]);var state_32307__$1 = state_32307;var statearr_32329_32351 = state_32307__$1;(statearr_32329_32351[2] = inst_32297);
(statearr_32329_32351[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32333[0] = state_machine__5507__auto__);
(statearr_32333[1] = 1);
return statearr_32333;
});
var state_machine__5507__auto____1 = (function (state_32307){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32307);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32334){if((e32334 instanceof Object))
{var ex__5510__auto__ = e32334;var statearr_32335_32352 = state_32307;(statearr_32335_32352[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32307);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32353 = state_32307;
state_32307 = G__32353;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32307){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32336 = f__5522__auto__.call(null);(statearr_32336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32337);
return statearr_32336;
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
