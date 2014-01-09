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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29660 = (function (f,fn_handler,meta29661){
this.f = f;
this.fn_handler = fn_handler;
this.meta29661 = meta29661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29660.cljs$lang$type = true;
cljs.core.async.t29660.cljs$lang$ctorStr = "cljs.core.async/t29660";
cljs.core.async.t29660.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29660");
});
cljs.core.async.t29660.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29662){var self__ = this;
var _29662__$1 = this;return self__.meta29661;
});
cljs.core.async.t29660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29662,meta29661__$1){var self__ = this;
var _29662__$1 = this;return (new cljs.core.async.t29660(self__.f,self__.fn_handler,meta29661__$1));
});
cljs.core.async.__GT_t29660 = (function __GT_t29660(f__$1,fn_handler__$1,meta29661){return (new cljs.core.async.t29660(f__$1,fn_handler__$1,meta29661));
});
}
return (new cljs.core.async.t29660(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29664 = buff;if(G__29664)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__29664.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29664.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29664);
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
{var val_29665 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29665);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_29665);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___29666 = n;var x_29667 = 0;while(true){
if((x_29667 < n__4248__auto___29666))
{(a[x_29667] = 0);
{
var G__29668 = (x_29667 + 1);
x_29667 = G__29668;
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
var G__29669 = (i + 1);
i = G__29669;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29673 = (function (flag,alt_flag,meta29674){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29674 = meta29674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29673.cljs$lang$type = true;
cljs.core.async.t29673.cljs$lang$ctorStr = "cljs.core.async/t29673";
cljs.core.async.t29673.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29673");
});
cljs.core.async.t29673.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29675){var self__ = this;
var _29675__$1 = this;return self__.meta29674;
});
cljs.core.async.t29673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29675,meta29674__$1){var self__ = this;
var _29675__$1 = this;return (new cljs.core.async.t29673(self__.flag,self__.alt_flag,meta29674__$1));
});
cljs.core.async.__GT_t29673 = (function __GT_t29673(flag__$1,alt_flag__$1,meta29674){return (new cljs.core.async.t29673(flag__$1,alt_flag__$1,meta29674));
});
}
return (new cljs.core.async.t29673(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29679 = (function (cb,flag,alt_handler,meta29680){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29680 = meta29680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29679.cljs$lang$type = true;
cljs.core.async.t29679.cljs$lang$ctorStr = "cljs.core.async/t29679";
cljs.core.async.t29679.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29679");
});
cljs.core.async.t29679.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29681){var self__ = this;
var _29681__$1 = this;return self__.meta29680;
});
cljs.core.async.t29679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29681,meta29680__$1){var self__ = this;
var _29681__$1 = this;return (new cljs.core.async.t29679(self__.cb,self__.flag,self__.alt_handler,meta29680__$1));
});
cljs.core.async.__GT_t29679 = (function __GT_t29679(cb__$1,flag__$1,alt_handler__$1,meta29680){return (new cljs.core.async.t29679(cb__$1,flag__$1,alt_handler__$1,meta29680));
});
}
return (new cljs.core.async.t29679(cb,flag,alt_handler,null));
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
return (function (p1__29682_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29682_SHARP_,port], null));
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
var G__29683 = (i + 1);
i = G__29683;
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
var alts_BANG___delegate = function (ports,p__29684){var map__29686 = p__29684;var map__29686__$1 = ((cljs.core.seq_QMARK_.call(null,map__29686))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);var opts = map__29686__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29684 = null;if (arguments.length > 1) {
  p__29684 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29684);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29687){
var ports = cljs.core.first(arglist__29687);
var p__29684 = cljs.core.rest(arglist__29687);
return alts_BANG___delegate(ports,p__29684);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29695 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29695 = (function (ch,f,map_LT_,meta29696){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29696 = meta29696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29695.cljs$lang$type = true;
cljs.core.async.t29695.cljs$lang$ctorStr = "cljs.core.async/t29695";
cljs.core.async.t29695.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29695");
});
cljs.core.async.t29695.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29695.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29698 = (function (fn1,_,meta29696,ch,f,map_LT_,meta29699){
this.fn1 = fn1;
this._ = _;
this.meta29696 = meta29696;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29699 = meta29699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29698.cljs$lang$type = true;
cljs.core.async.t29698.cljs$lang$ctorStr = "cljs.core.async/t29698";
cljs.core.async.t29698.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29698");
});
cljs.core.async.t29698.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29698.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29688_SHARP_){return f1.call(null,(((p1__29688_SHARP_ == null))?null:self__.f.call(null,p1__29688_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29700){var self__ = this;
var _29700__$1 = this;return self__.meta29699;
});
cljs.core.async.t29698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29700,meta29699__$1){var self__ = this;
var _29700__$1 = this;return (new cljs.core.async.t29698(self__.fn1,self__._,self__.meta29696,self__.ch,self__.f,self__.map_LT_,meta29699__$1));
});
cljs.core.async.__GT_t29698 = (function __GT_t29698(fn1__$1,___$2,meta29696__$1,ch__$2,f__$2,map_LT___$2,meta29699){return (new cljs.core.async.t29698(fn1__$1,___$2,meta29696__$1,ch__$2,f__$2,map_LT___$2,meta29699));
});
}
return (new cljs.core.async.t29698(fn1,___$1,self__.meta29696,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t29695.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29697){var self__ = this;
var _29697__$1 = this;return self__.meta29696;
});
cljs.core.async.t29695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29697,meta29696__$1){var self__ = this;
var _29697__$1 = this;return (new cljs.core.async.t29695(self__.ch,self__.f,self__.map_LT_,meta29696__$1));
});
cljs.core.async.__GT_t29695 = (function __GT_t29695(ch__$1,f__$1,map_LT___$1,meta29696){return (new cljs.core.async.t29695(ch__$1,f__$1,map_LT___$1,meta29696));
});
}
return (new cljs.core.async.t29695(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29704 = (function (ch,f,map_GT_,meta29705){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29705 = meta29705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29704.cljs$lang$type = true;
cljs.core.async.t29704.cljs$lang$ctorStr = "cljs.core.async/t29704";
cljs.core.async.t29704.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29704");
});
cljs.core.async.t29704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29706){var self__ = this;
var _29706__$1 = this;return self__.meta29705;
});
cljs.core.async.t29704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29706,meta29705__$1){var self__ = this;
var _29706__$1 = this;return (new cljs.core.async.t29704(self__.ch,self__.f,self__.map_GT_,meta29705__$1));
});
cljs.core.async.__GT_t29704 = (function __GT_t29704(ch__$1,f__$1,map_GT___$1,meta29705){return (new cljs.core.async.t29704(ch__$1,f__$1,map_GT___$1,meta29705));
});
}
return (new cljs.core.async.t29704(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29710 = (function (ch,p,filter_GT_,meta29711){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29711 = meta29711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29710.cljs$lang$type = true;
cljs.core.async.t29710.cljs$lang$ctorStr = "cljs.core.async/t29710";
cljs.core.async.t29710.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29710");
});
cljs.core.async.t29710.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29710.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29710.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29712){var self__ = this;
var _29712__$1 = this;return self__.meta29711;
});
cljs.core.async.t29710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29712,meta29711__$1){var self__ = this;
var _29712__$1 = this;return (new cljs.core.async.t29710(self__.ch,self__.p,self__.filter_GT_,meta29711__$1));
});
cljs.core.async.__GT_t29710 = (function __GT_t29710(ch__$1,p__$1,filter_GT___$1,meta29711){return (new cljs.core.async.t29710(ch__$1,p__$1,filter_GT___$1,meta29711));
});
}
return (new cljs.core.async.t29710(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___29795 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29774){var state_val_29775 = (state_29774[1]);if((state_val_29775 === 1))
{var state_29774__$1 = state_29774;var statearr_29776_29796 = state_29774__$1;(statearr_29776_29796[2] = null);
(statearr_29776_29796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29775 === 2))
{var state_29774__$1 = state_29774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29774__$1,4,ch);
} else
{if((state_val_29775 === 3))
{var inst_29772 = (state_29774[2]);var state_29774__$1 = state_29774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29774__$1,inst_29772);
} else
{if((state_val_29775 === 4))
{var inst_29756 = (state_29774[7]);var inst_29756__$1 = (state_29774[2]);var inst_29757 = (inst_29756__$1 == null);var state_29774__$1 = (function (){var statearr_29777 = state_29774;(statearr_29777[7] = inst_29756__$1);
return statearr_29777;
})();if(cljs.core.truth_(inst_29757))
{var statearr_29778_29797 = state_29774__$1;(statearr_29778_29797[1] = 5);
} else
{var statearr_29779_29798 = state_29774__$1;(statearr_29779_29798[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29775 === 5))
{var inst_29759 = cljs.core.async.close_BANG_.call(null,out);var state_29774__$1 = state_29774;var statearr_29780_29799 = state_29774__$1;(statearr_29780_29799[2] = inst_29759);
(statearr_29780_29799[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29775 === 6))
{var inst_29756 = (state_29774[7]);var inst_29761 = p.call(null,inst_29756);var state_29774__$1 = state_29774;if(cljs.core.truth_(inst_29761))
{var statearr_29781_29800 = state_29774__$1;(statearr_29781_29800[1] = 8);
} else
{var statearr_29782_29801 = state_29774__$1;(statearr_29782_29801[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29775 === 7))
{var inst_29770 = (state_29774[2]);var state_29774__$1 = state_29774;var statearr_29783_29802 = state_29774__$1;(statearr_29783_29802[2] = inst_29770);
(statearr_29783_29802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29775 === 8))
{var inst_29756 = (state_29774[7]);var state_29774__$1 = state_29774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29774__$1,11,out,inst_29756);
} else
{if((state_val_29775 === 9))
{var state_29774__$1 = state_29774;var statearr_29784_29803 = state_29774__$1;(statearr_29784_29803[2] = null);
(statearr_29784_29803[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29775 === 10))
{var inst_29767 = (state_29774[2]);var state_29774__$1 = (function (){var statearr_29785 = state_29774;(statearr_29785[8] = inst_29767);
return statearr_29785;
})();var statearr_29786_29804 = state_29774__$1;(statearr_29786_29804[2] = null);
(statearr_29786_29804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29775 === 11))
{var inst_29764 = (state_29774[2]);var state_29774__$1 = state_29774;var statearr_29787_29805 = state_29774__$1;(statearr_29787_29805[2] = inst_29764);
(statearr_29787_29805[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29791 = [null,null,null,null,null,null,null,null,null];(statearr_29791[0] = state_machine__5507__auto__);
(statearr_29791[1] = 1);
return statearr_29791;
});
var state_machine__5507__auto____1 = (function (state_29774){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29792){if((e29792 instanceof Object))
{var ex__5510__auto__ = e29792;var statearr_29793_29806 = state_29774;(statearr_29793_29806[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29807 = state_29774;
state_29774 = G__29807;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29774){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29794 = f__5522__auto__.call(null);(statearr_29794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29795);
return statearr_29794;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29959){var state_val_29960 = (state_29959[1]);if((state_val_29960 === 1))
{var state_29959__$1 = state_29959;var statearr_29961_29998 = state_29959__$1;(statearr_29961_29998[2] = null);
(statearr_29961_29998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 2))
{var state_29959__$1 = state_29959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29959__$1,4,in$);
} else
{if((state_val_29960 === 3))
{var inst_29957 = (state_29959[2]);var state_29959__$1 = state_29959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29959__$1,inst_29957);
} else
{if((state_val_29960 === 4))
{var inst_29905 = (state_29959[7]);var inst_29905__$1 = (state_29959[2]);var inst_29906 = (inst_29905__$1 == null);var state_29959__$1 = (function (){var statearr_29962 = state_29959;(statearr_29962[7] = inst_29905__$1);
return statearr_29962;
})();if(cljs.core.truth_(inst_29906))
{var statearr_29963_29999 = state_29959__$1;(statearr_29963_29999[1] = 5);
} else
{var statearr_29964_30000 = state_29959__$1;(statearr_29964_30000[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 5))
{var inst_29908 = cljs.core.async.close_BANG_.call(null,out);var state_29959__$1 = state_29959;var statearr_29965_30001 = state_29959__$1;(statearr_29965_30001[2] = inst_29908);
(statearr_29965_30001[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 6))
{var inst_29905 = (state_29959[7]);var inst_29910 = f.call(null,inst_29905);var inst_29915 = cljs.core.seq.call(null,inst_29910);var inst_29916 = inst_29915;var inst_29917 = null;var inst_29918 = 0;var inst_29919 = 0;var state_29959__$1 = (function (){var statearr_29966 = state_29959;(statearr_29966[8] = inst_29919);
(statearr_29966[9] = inst_29918);
(statearr_29966[10] = inst_29916);
(statearr_29966[11] = inst_29917);
return statearr_29966;
})();var statearr_29967_30002 = state_29959__$1;(statearr_29967_30002[2] = null);
(statearr_29967_30002[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 7))
{var inst_29955 = (state_29959[2]);var state_29959__$1 = state_29959;var statearr_29968_30003 = state_29959__$1;(statearr_29968_30003[2] = inst_29955);
(statearr_29968_30003[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 8))
{var inst_29919 = (state_29959[8]);var inst_29918 = (state_29959[9]);var inst_29921 = (inst_29919 < inst_29918);var inst_29922 = inst_29921;var state_29959__$1 = state_29959;if(cljs.core.truth_(inst_29922))
{var statearr_29969_30004 = state_29959__$1;(statearr_29969_30004[1] = 10);
} else
{var statearr_29970_30005 = state_29959__$1;(statearr_29970_30005[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 9))
{var inst_29952 = (state_29959[2]);var state_29959__$1 = (function (){var statearr_29971 = state_29959;(statearr_29971[12] = inst_29952);
return statearr_29971;
})();var statearr_29972_30006 = state_29959__$1;(statearr_29972_30006[2] = null);
(statearr_29972_30006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 10))
{var inst_29919 = (state_29959[8]);var inst_29917 = (state_29959[11]);var inst_29924 = cljs.core._nth.call(null,inst_29917,inst_29919);var state_29959__$1 = state_29959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29959__$1,13,out,inst_29924);
} else
{if((state_val_29960 === 11))
{var inst_29930 = (state_29959[13]);var inst_29916 = (state_29959[10]);var inst_29930__$1 = cljs.core.seq.call(null,inst_29916);var state_29959__$1 = (function (){var statearr_29976 = state_29959;(statearr_29976[13] = inst_29930__$1);
return statearr_29976;
})();if(inst_29930__$1)
{var statearr_29977_30007 = state_29959__$1;(statearr_29977_30007[1] = 14);
} else
{var statearr_29978_30008 = state_29959__$1;(statearr_29978_30008[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 12))
{var inst_29950 = (state_29959[2]);var state_29959__$1 = state_29959;var statearr_29979_30009 = state_29959__$1;(statearr_29979_30009[2] = inst_29950);
(statearr_29979_30009[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 13))
{var inst_29919 = (state_29959[8]);var inst_29918 = (state_29959[9]);var inst_29916 = (state_29959[10]);var inst_29917 = (state_29959[11]);var inst_29926 = (state_29959[2]);var inst_29927 = (inst_29919 + 1);var tmp29973 = inst_29918;var tmp29974 = inst_29916;var tmp29975 = inst_29917;var inst_29916__$1 = tmp29974;var inst_29917__$1 = tmp29975;var inst_29918__$1 = tmp29973;var inst_29919__$1 = inst_29927;var state_29959__$1 = (function (){var statearr_29980 = state_29959;(statearr_29980[8] = inst_29919__$1);
(statearr_29980[9] = inst_29918__$1);
(statearr_29980[14] = inst_29926);
(statearr_29980[10] = inst_29916__$1);
(statearr_29980[11] = inst_29917__$1);
return statearr_29980;
})();var statearr_29981_30010 = state_29959__$1;(statearr_29981_30010[2] = null);
(statearr_29981_30010[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 14))
{var inst_29930 = (state_29959[13]);var inst_29932 = cljs.core.chunked_seq_QMARK_.call(null,inst_29930);var state_29959__$1 = state_29959;if(inst_29932)
{var statearr_29982_30011 = state_29959__$1;(statearr_29982_30011[1] = 17);
} else
{var statearr_29983_30012 = state_29959__$1;(statearr_29983_30012[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 15))
{var state_29959__$1 = state_29959;var statearr_29984_30013 = state_29959__$1;(statearr_29984_30013[2] = null);
(statearr_29984_30013[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 16))
{var inst_29948 = (state_29959[2]);var state_29959__$1 = state_29959;var statearr_29985_30014 = state_29959__$1;(statearr_29985_30014[2] = inst_29948);
(statearr_29985_30014[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 17))
{var inst_29930 = (state_29959[13]);var inst_29934 = cljs.core.chunk_first.call(null,inst_29930);var inst_29935 = cljs.core.chunk_rest.call(null,inst_29930);var inst_29936 = cljs.core.count.call(null,inst_29934);var inst_29916 = inst_29935;var inst_29917 = inst_29934;var inst_29918 = inst_29936;var inst_29919 = 0;var state_29959__$1 = (function (){var statearr_29986 = state_29959;(statearr_29986[8] = inst_29919);
(statearr_29986[9] = inst_29918);
(statearr_29986[10] = inst_29916);
(statearr_29986[11] = inst_29917);
return statearr_29986;
})();var statearr_29987_30015 = state_29959__$1;(statearr_29987_30015[2] = null);
(statearr_29987_30015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 18))
{var inst_29930 = (state_29959[13]);var inst_29939 = cljs.core.first.call(null,inst_29930);var state_29959__$1 = state_29959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29959__$1,20,out,inst_29939);
} else
{if((state_val_29960 === 19))
{var inst_29945 = (state_29959[2]);var state_29959__$1 = state_29959;var statearr_29988_30016 = state_29959__$1;(statearr_29988_30016[2] = inst_29945);
(statearr_29988_30016[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29960 === 20))
{var inst_29930 = (state_29959[13]);var inst_29941 = (state_29959[2]);var inst_29942 = cljs.core.next.call(null,inst_29930);var inst_29916 = inst_29942;var inst_29917 = null;var inst_29918 = 0;var inst_29919 = 0;var state_29959__$1 = (function (){var statearr_29989 = state_29959;(statearr_29989[15] = inst_29941);
(statearr_29989[8] = inst_29919);
(statearr_29989[9] = inst_29918);
(statearr_29989[10] = inst_29916);
(statearr_29989[11] = inst_29917);
return statearr_29989;
})();var statearr_29990_30017 = state_29959__$1;(statearr_29990_30017[2] = null);
(statearr_29990_30017[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_29994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29994[0] = state_machine__5507__auto__);
(statearr_29994[1] = 1);
return statearr_29994;
});
var state_machine__5507__auto____1 = (function (state_29959){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29959);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29995){if((e29995 instanceof Object))
{var ex__5510__auto__ = e29995;var statearr_29996_30018 = state_29959;(statearr_29996_30018[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29959);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30019 = state_29959;
state_29959 = G__30019;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29959){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29997 = f__5522__auto__.call(null);(statearr_29997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29997;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___30100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30079){var state_val_30080 = (state_30079[1]);if((state_val_30080 === 1))
{var state_30079__$1 = state_30079;var statearr_30081_30101 = state_30079__$1;(statearr_30081_30101[2] = null);
(statearr_30081_30101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30080 === 2))
{var state_30079__$1 = state_30079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30079__$1,4,from);
} else
{if((state_val_30080 === 3))
{var inst_30077 = (state_30079[2]);var state_30079__$1 = state_30079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30079__$1,inst_30077);
} else
{if((state_val_30080 === 4))
{var inst_30062 = (state_30079[7]);var inst_30062__$1 = (state_30079[2]);var inst_30063 = (inst_30062__$1 == null);var state_30079__$1 = (function (){var statearr_30082 = state_30079;(statearr_30082[7] = inst_30062__$1);
return statearr_30082;
})();if(cljs.core.truth_(inst_30063))
{var statearr_30083_30102 = state_30079__$1;(statearr_30083_30102[1] = 5);
} else
{var statearr_30084_30103 = state_30079__$1;(statearr_30084_30103[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30080 === 5))
{var state_30079__$1 = state_30079;if(cljs.core.truth_(close_QMARK_))
{var statearr_30085_30104 = state_30079__$1;(statearr_30085_30104[1] = 8);
} else
{var statearr_30086_30105 = state_30079__$1;(statearr_30086_30105[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30080 === 6))
{var inst_30062 = (state_30079[7]);var state_30079__$1 = state_30079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30079__$1,11,to,inst_30062);
} else
{if((state_val_30080 === 7))
{var inst_30075 = (state_30079[2]);var state_30079__$1 = state_30079;var statearr_30087_30106 = state_30079__$1;(statearr_30087_30106[2] = inst_30075);
(statearr_30087_30106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30080 === 8))
{var inst_30066 = cljs.core.async.close_BANG_.call(null,to);var state_30079__$1 = state_30079;var statearr_30088_30107 = state_30079__$1;(statearr_30088_30107[2] = inst_30066);
(statearr_30088_30107[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30080 === 9))
{var state_30079__$1 = state_30079;var statearr_30089_30108 = state_30079__$1;(statearr_30089_30108[2] = null);
(statearr_30089_30108[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30080 === 10))
{var inst_30069 = (state_30079[2]);var state_30079__$1 = state_30079;var statearr_30090_30109 = state_30079__$1;(statearr_30090_30109[2] = inst_30069);
(statearr_30090_30109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30080 === 11))
{var inst_30072 = (state_30079[2]);var state_30079__$1 = (function (){var statearr_30091 = state_30079;(statearr_30091[8] = inst_30072);
return statearr_30091;
})();var statearr_30092_30110 = state_30079__$1;(statearr_30092_30110[2] = null);
(statearr_30092_30110[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30096 = [null,null,null,null,null,null,null,null,null];(statearr_30096[0] = state_machine__5507__auto__);
(statearr_30096[1] = 1);
return statearr_30096;
});
var state_machine__5507__auto____1 = (function (state_30079){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30097){if((e30097 instanceof Object))
{var ex__5510__auto__ = e30097;var statearr_30098_30111 = state_30079;(statearr_30098_30111[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30112 = state_30079;
state_30079 = G__30112;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30079){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30099 = f__5522__auto__.call(null);(statearr_30099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30100);
return statearr_30099;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___30199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30177){var state_val_30178 = (state_30177[1]);if((state_val_30178 === 1))
{var state_30177__$1 = state_30177;var statearr_30179_30200 = state_30177__$1;(statearr_30179_30200[2] = null);
(statearr_30179_30200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 2))
{var state_30177__$1 = state_30177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30177__$1,4,ch);
} else
{if((state_val_30178 === 3))
{var inst_30175 = (state_30177[2]);var state_30177__$1 = state_30177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30177__$1,inst_30175);
} else
{if((state_val_30178 === 4))
{var inst_30158 = (state_30177[7]);var inst_30158__$1 = (state_30177[2]);var inst_30159 = (inst_30158__$1 == null);var state_30177__$1 = (function (){var statearr_30180 = state_30177;(statearr_30180[7] = inst_30158__$1);
return statearr_30180;
})();if(cljs.core.truth_(inst_30159))
{var statearr_30181_30201 = state_30177__$1;(statearr_30181_30201[1] = 5);
} else
{var statearr_30182_30202 = state_30177__$1;(statearr_30182_30202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 5))
{var inst_30161 = cljs.core.async.close_BANG_.call(null,tc);var inst_30162 = cljs.core.async.close_BANG_.call(null,fc);var state_30177__$1 = (function (){var statearr_30183 = state_30177;(statearr_30183[8] = inst_30161);
return statearr_30183;
})();var statearr_30184_30203 = state_30177__$1;(statearr_30184_30203[2] = inst_30162);
(statearr_30184_30203[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 6))
{var inst_30158 = (state_30177[7]);var inst_30164 = p.call(null,inst_30158);var state_30177__$1 = state_30177;if(cljs.core.truth_(inst_30164))
{var statearr_30185_30204 = state_30177__$1;(statearr_30185_30204[1] = 9);
} else
{var statearr_30186_30205 = state_30177__$1;(statearr_30186_30205[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 7))
{var inst_30173 = (state_30177[2]);var state_30177__$1 = state_30177;var statearr_30187_30206 = state_30177__$1;(statearr_30187_30206[2] = inst_30173);
(statearr_30187_30206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 8))
{var inst_30170 = (state_30177[2]);var state_30177__$1 = (function (){var statearr_30188 = state_30177;(statearr_30188[9] = inst_30170);
return statearr_30188;
})();var statearr_30189_30207 = state_30177__$1;(statearr_30189_30207[2] = null);
(statearr_30189_30207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 9))
{var state_30177__$1 = state_30177;var statearr_30190_30208 = state_30177__$1;(statearr_30190_30208[2] = tc);
(statearr_30190_30208[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 10))
{var state_30177__$1 = state_30177;var statearr_30191_30209 = state_30177__$1;(statearr_30191_30209[2] = fc);
(statearr_30191_30209[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30178 === 11))
{var inst_30158 = (state_30177[7]);var inst_30168 = (state_30177[2]);var state_30177__$1 = state_30177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30177__$1,8,inst_30168,inst_30158);
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
var state_machine__5507__auto____0 = (function (){var statearr_30195 = [null,null,null,null,null,null,null,null,null,null];(statearr_30195[0] = state_machine__5507__auto__);
(statearr_30195[1] = 1);
return statearr_30195;
});
var state_machine__5507__auto____1 = (function (state_30177){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30177);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30196){if((e30196 instanceof Object))
{var ex__5510__auto__ = e30196;var statearr_30197_30210 = state_30177;(statearr_30197_30210[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30211 = state_30177;
state_30177 = G__30211;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30177){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30198 = f__5522__auto__.call(null);(statearr_30198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30199);
return statearr_30198;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30258){var state_val_30259 = (state_30258[1]);if((state_val_30259 === 7))
{var inst_30254 = (state_30258[2]);var state_30258__$1 = state_30258;var statearr_30260_30276 = state_30258__$1;(statearr_30260_30276[2] = inst_30254);
(statearr_30260_30276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30259 === 6))
{var inst_30244 = (state_30258[7]);var inst_30247 = (state_30258[8]);var inst_30251 = f.call(null,inst_30244,inst_30247);var inst_30244__$1 = inst_30251;var state_30258__$1 = (function (){var statearr_30261 = state_30258;(statearr_30261[7] = inst_30244__$1);
return statearr_30261;
})();var statearr_30262_30277 = state_30258__$1;(statearr_30262_30277[2] = null);
(statearr_30262_30277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30259 === 5))
{var inst_30244 = (state_30258[7]);var state_30258__$1 = state_30258;var statearr_30263_30278 = state_30258__$1;(statearr_30263_30278[2] = inst_30244);
(statearr_30263_30278[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30259 === 4))
{var inst_30247 = (state_30258[8]);var inst_30247__$1 = (state_30258[2]);var inst_30248 = (inst_30247__$1 == null);var state_30258__$1 = (function (){var statearr_30264 = state_30258;(statearr_30264[8] = inst_30247__$1);
return statearr_30264;
})();if(cljs.core.truth_(inst_30248))
{var statearr_30265_30279 = state_30258__$1;(statearr_30265_30279[1] = 5);
} else
{var statearr_30266_30280 = state_30258__$1;(statearr_30266_30280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30259 === 3))
{var inst_30256 = (state_30258[2]);var state_30258__$1 = state_30258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30258__$1,inst_30256);
} else
{if((state_val_30259 === 2))
{var state_30258__$1 = state_30258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30258__$1,4,ch);
} else
{if((state_val_30259 === 1))
{var inst_30244 = init;var state_30258__$1 = (function (){var statearr_30267 = state_30258;(statearr_30267[7] = inst_30244);
return statearr_30267;
})();var statearr_30268_30281 = state_30258__$1;(statearr_30268_30281[2] = null);
(statearr_30268_30281[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30272 = [null,null,null,null,null,null,null,null,null];(statearr_30272[0] = state_machine__5507__auto__);
(statearr_30272[1] = 1);
return statearr_30272;
});
var state_machine__5507__auto____1 = (function (state_30258){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30258);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30273){if((e30273 instanceof Object))
{var ex__5510__auto__ = e30273;var statearr_30274_30282 = state_30258;(statearr_30274_30282[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30283 = state_30258;
state_30258 = G__30283;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30258){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30275 = f__5522__auto__.call(null);(statearr_30275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30275;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30345){var state_val_30346 = (state_30345[1]);if((state_val_30346 === 1))
{var inst_30325 = cljs.core.seq.call(null,coll);var inst_30326 = inst_30325;var state_30345__$1 = (function (){var statearr_30347 = state_30345;(statearr_30347[7] = inst_30326);
return statearr_30347;
})();var statearr_30348_30366 = state_30345__$1;(statearr_30348_30366[2] = null);
(statearr_30348_30366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30346 === 2))
{var inst_30326 = (state_30345[7]);var state_30345__$1 = state_30345;if(cljs.core.truth_(inst_30326))
{var statearr_30349_30367 = state_30345__$1;(statearr_30349_30367[1] = 4);
} else
{var statearr_30350_30368 = state_30345__$1;(statearr_30350_30368[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30346 === 3))
{var inst_30343 = (state_30345[2]);var state_30345__$1 = state_30345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30345__$1,inst_30343);
} else
{if((state_val_30346 === 4))
{var inst_30326 = (state_30345[7]);var inst_30329 = cljs.core.first.call(null,inst_30326);var state_30345__$1 = state_30345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30345__$1,7,ch,inst_30329);
} else
{if((state_val_30346 === 5))
{var state_30345__$1 = state_30345;if(cljs.core.truth_(close_QMARK_))
{var statearr_30351_30369 = state_30345__$1;(statearr_30351_30369[1] = 8);
} else
{var statearr_30352_30370 = state_30345__$1;(statearr_30352_30370[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30346 === 6))
{var inst_30341 = (state_30345[2]);var state_30345__$1 = state_30345;var statearr_30353_30371 = state_30345__$1;(statearr_30353_30371[2] = inst_30341);
(statearr_30353_30371[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30346 === 7))
{var inst_30326 = (state_30345[7]);var inst_30331 = (state_30345[2]);var inst_30332 = cljs.core.next.call(null,inst_30326);var inst_30326__$1 = inst_30332;var state_30345__$1 = (function (){var statearr_30354 = state_30345;(statearr_30354[8] = inst_30331);
(statearr_30354[7] = inst_30326__$1);
return statearr_30354;
})();var statearr_30355_30372 = state_30345__$1;(statearr_30355_30372[2] = null);
(statearr_30355_30372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30346 === 8))
{var inst_30336 = cljs.core.async.close_BANG_.call(null,ch);var state_30345__$1 = state_30345;var statearr_30356_30373 = state_30345__$1;(statearr_30356_30373[2] = inst_30336);
(statearr_30356_30373[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30346 === 9))
{var state_30345__$1 = state_30345;var statearr_30357_30374 = state_30345__$1;(statearr_30357_30374[2] = null);
(statearr_30357_30374[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30346 === 10))
{var inst_30339 = (state_30345[2]);var state_30345__$1 = state_30345;var statearr_30358_30375 = state_30345__$1;(statearr_30358_30375[2] = inst_30339);
(statearr_30358_30375[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_30362 = [null,null,null,null,null,null,null,null,null];(statearr_30362[0] = state_machine__5507__auto__);
(statearr_30362[1] = 1);
return statearr_30362;
});
var state_machine__5507__auto____1 = (function (state_30345){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30345);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30363){if((e30363 instanceof Object))
{var ex__5510__auto__ = e30363;var statearr_30364_30376 = state_30345;(statearr_30364_30376[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30345);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30377 = state_30345;
state_30345 = G__30377;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30345){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30365 = f__5522__auto__.call(null);(statearr_30365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30365;
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
cljs.core.async.Mux = (function (){var obj30379 = {};return obj30379;
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
cljs.core.async.Mult = (function (){var obj30381 = {};return obj30381;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30605 = (function (cs,ch,mult,meta30606){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30606 = meta30606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30605.cljs$lang$type = true;
cljs.core.async.t30605.cljs$lang$ctorStr = "cljs.core.async/t30605";
cljs.core.async.t30605.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30605");
});})(cs))
;
cljs.core.async.t30605.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30605.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30605.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30605.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30605.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30607){var self__ = this;
var _30607__$1 = this;return self__.meta30606;
});})(cs))
;
cljs.core.async.t30605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30607,meta30606__$1){var self__ = this;
var _30607__$1 = this;return (new cljs.core.async.t30605(self__.cs,self__.ch,self__.mult,meta30606__$1));
});})(cs))
;
cljs.core.async.__GT_t30605 = ((function (cs){
return (function __GT_t30605(cs__$1,ch__$1,mult__$1,meta30606){return (new cljs.core.async.t30605(cs__$1,ch__$1,mult__$1,meta30606));
});})(cs))
;
}
return (new cljs.core.async.t30605(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___30828 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30742){var state_val_30743 = (state_30742[1]);if((state_val_30743 === 32))
{var inst_30686 = (state_30742[7]);var inst_30610 = (state_30742[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30742,31,Object,null,30);var inst_30693 = cljs.core.async.put_BANG_.call(null,inst_30686,inst_30610,done);var state_30742__$1 = state_30742;var statearr_30744_30829 = state_30742__$1;(statearr_30744_30829[2] = inst_30693);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30742__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 1))
{var state_30742__$1 = state_30742;var statearr_30745_30830 = state_30742__$1;(statearr_30745_30830[2] = null);
(statearr_30745_30830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 33))
{var inst_30699 = (state_30742[9]);var inst_30701 = cljs.core.chunked_seq_QMARK_.call(null,inst_30699);var state_30742__$1 = state_30742;if(inst_30701)
{var statearr_30746_30831 = state_30742__$1;(statearr_30746_30831[1] = 36);
} else
{var statearr_30747_30832 = state_30742__$1;(statearr_30747_30832[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 2))
{var state_30742__$1 = state_30742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30742__$1,4,ch);
} else
{if((state_val_30743 === 34))
{var state_30742__$1 = state_30742;var statearr_30748_30833 = state_30742__$1;(statearr_30748_30833[2] = null);
(statearr_30748_30833[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 3))
{var inst_30740 = (state_30742[2]);var state_30742__$1 = state_30742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30742__$1,inst_30740);
} else
{if((state_val_30743 === 35))
{var inst_30724 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30749_30834 = state_30742__$1;(statearr_30749_30834[2] = inst_30724);
(statearr_30749_30834[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 4))
{var inst_30610 = (state_30742[8]);var inst_30610__$1 = (state_30742[2]);var inst_30611 = (inst_30610__$1 == null);var state_30742__$1 = (function (){var statearr_30750 = state_30742;(statearr_30750[8] = inst_30610__$1);
return statearr_30750;
})();if(cljs.core.truth_(inst_30611))
{var statearr_30751_30835 = state_30742__$1;(statearr_30751_30835[1] = 5);
} else
{var statearr_30752_30836 = state_30742__$1;(statearr_30752_30836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 36))
{var inst_30699 = (state_30742[9]);var inst_30703 = cljs.core.chunk_first.call(null,inst_30699);var inst_30704 = cljs.core.chunk_rest.call(null,inst_30699);var inst_30705 = cljs.core.count.call(null,inst_30703);var inst_30678 = inst_30704;var inst_30679 = inst_30703;var inst_30680 = inst_30705;var inst_30681 = 0;var state_30742__$1 = (function (){var statearr_30753 = state_30742;(statearr_30753[10] = inst_30681);
(statearr_30753[11] = inst_30680);
(statearr_30753[12] = inst_30678);
(statearr_30753[13] = inst_30679);
return statearr_30753;
})();var statearr_30754_30837 = state_30742__$1;(statearr_30754_30837[2] = null);
(statearr_30754_30837[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 5))
{var inst_30617 = cljs.core.deref.call(null,cs);var inst_30618 = cljs.core.seq.call(null,inst_30617);var inst_30619 = inst_30618;var inst_30620 = null;var inst_30621 = 0;var inst_30622 = 0;var state_30742__$1 = (function (){var statearr_30755 = state_30742;(statearr_30755[14] = inst_30622);
(statearr_30755[15] = inst_30619);
(statearr_30755[16] = inst_30620);
(statearr_30755[17] = inst_30621);
return statearr_30755;
})();var statearr_30756_30838 = state_30742__$1;(statearr_30756_30838[2] = null);
(statearr_30756_30838[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 37))
{var inst_30699 = (state_30742[9]);var inst_30708 = cljs.core.first.call(null,inst_30699);var state_30742__$1 = (function (){var statearr_30757 = state_30742;(statearr_30757[18] = inst_30708);
return statearr_30757;
})();var statearr_30758_30839 = state_30742__$1;(statearr_30758_30839[2] = null);
(statearr_30758_30839[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 6))
{var inst_30670 = (state_30742[19]);var inst_30669 = cljs.core.deref.call(null,cs);var inst_30670__$1 = cljs.core.keys.call(null,inst_30669);var inst_30671 = cljs.core.count.call(null,inst_30670__$1);var inst_30672 = cljs.core.reset_BANG_.call(null,dctr,inst_30671);var inst_30677 = cljs.core.seq.call(null,inst_30670__$1);var inst_30678 = inst_30677;var inst_30679 = null;var inst_30680 = 0;var inst_30681 = 0;var state_30742__$1 = (function (){var statearr_30759 = state_30742;(statearr_30759[10] = inst_30681);
(statearr_30759[11] = inst_30680);
(statearr_30759[12] = inst_30678);
(statearr_30759[13] = inst_30679);
(statearr_30759[20] = inst_30672);
(statearr_30759[19] = inst_30670__$1);
return statearr_30759;
})();var statearr_30760_30840 = state_30742__$1;(statearr_30760_30840[2] = null);
(statearr_30760_30840[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 38))
{var inst_30721 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30761_30841 = state_30742__$1;(statearr_30761_30841[2] = inst_30721);
(statearr_30761_30841[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 7))
{var inst_30738 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30762_30842 = state_30742__$1;(statearr_30762_30842[2] = inst_30738);
(statearr_30762_30842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 39))
{var inst_30699 = (state_30742[9]);var inst_30717 = (state_30742[2]);var inst_30718 = cljs.core.next.call(null,inst_30699);var inst_30678 = inst_30718;var inst_30679 = null;var inst_30680 = 0;var inst_30681 = 0;var state_30742__$1 = (function (){var statearr_30763 = state_30742;(statearr_30763[10] = inst_30681);
(statearr_30763[11] = inst_30680);
(statearr_30763[12] = inst_30678);
(statearr_30763[13] = inst_30679);
(statearr_30763[21] = inst_30717);
return statearr_30763;
})();var statearr_30764_30843 = state_30742__$1;(statearr_30764_30843[2] = null);
(statearr_30764_30843[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 8))
{var inst_30622 = (state_30742[14]);var inst_30621 = (state_30742[17]);var inst_30624 = (inst_30622 < inst_30621);var inst_30625 = inst_30624;var state_30742__$1 = state_30742;if(cljs.core.truth_(inst_30625))
{var statearr_30765_30844 = state_30742__$1;(statearr_30765_30844[1] = 10);
} else
{var statearr_30766_30845 = state_30742__$1;(statearr_30766_30845[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 40))
{var inst_30708 = (state_30742[18]);var inst_30709 = (state_30742[2]);var inst_30710 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30711 = cljs.core.async.untap_STAR_.call(null,m,inst_30708);var state_30742__$1 = (function (){var statearr_30767 = state_30742;(statearr_30767[22] = inst_30709);
(statearr_30767[23] = inst_30710);
return statearr_30767;
})();var statearr_30768_30846 = state_30742__$1;(statearr_30768_30846[2] = inst_30711);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30742__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 9))
{var inst_30667 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30769_30847 = state_30742__$1;(statearr_30769_30847[2] = inst_30667);
(statearr_30769_30847[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 41))
{var inst_30708 = (state_30742[18]);var inst_30610 = (state_30742[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30742,40,Object,null,39);var inst_30715 = cljs.core.async.put_BANG_.call(null,inst_30708,inst_30610,done);var state_30742__$1 = state_30742;var statearr_30770_30848 = state_30742__$1;(statearr_30770_30848[2] = inst_30715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30742__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 10))
{var inst_30622 = (state_30742[14]);var inst_30620 = (state_30742[16]);var inst_30628 = cljs.core._nth.call(null,inst_30620,inst_30622);var inst_30629 = cljs.core.nth.call(null,inst_30628,0,null);var inst_30630 = cljs.core.nth.call(null,inst_30628,1,null);var state_30742__$1 = (function (){var statearr_30771 = state_30742;(statearr_30771[24] = inst_30629);
return statearr_30771;
})();if(cljs.core.truth_(inst_30630))
{var statearr_30772_30849 = state_30742__$1;(statearr_30772_30849[1] = 13);
} else
{var statearr_30773_30850 = state_30742__$1;(statearr_30773_30850[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 42))
{var state_30742__$1 = state_30742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30742__$1,45,dchan);
} else
{if((state_val_30743 === 11))
{var inst_30619 = (state_30742[15]);var inst_30639 = (state_30742[25]);var inst_30639__$1 = cljs.core.seq.call(null,inst_30619);var state_30742__$1 = (function (){var statearr_30774 = state_30742;(statearr_30774[25] = inst_30639__$1);
return statearr_30774;
})();if(inst_30639__$1)
{var statearr_30775_30851 = state_30742__$1;(statearr_30775_30851[1] = 16);
} else
{var statearr_30776_30852 = state_30742__$1;(statearr_30776_30852[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 43))
{var state_30742__$1 = state_30742;var statearr_30777_30853 = state_30742__$1;(statearr_30777_30853[2] = null);
(statearr_30777_30853[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 12))
{var inst_30665 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30778_30854 = state_30742__$1;(statearr_30778_30854[2] = inst_30665);
(statearr_30778_30854[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 44))
{var inst_30735 = (state_30742[2]);var state_30742__$1 = (function (){var statearr_30779 = state_30742;(statearr_30779[26] = inst_30735);
return statearr_30779;
})();var statearr_30780_30855 = state_30742__$1;(statearr_30780_30855[2] = null);
(statearr_30780_30855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 13))
{var inst_30629 = (state_30742[24]);var inst_30632 = cljs.core.async.close_BANG_.call(null,inst_30629);var state_30742__$1 = state_30742;var statearr_30781_30856 = state_30742__$1;(statearr_30781_30856[2] = inst_30632);
(statearr_30781_30856[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 45))
{var inst_30732 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30785_30857 = state_30742__$1;(statearr_30785_30857[2] = inst_30732);
(statearr_30785_30857[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 14))
{var state_30742__$1 = state_30742;var statearr_30786_30858 = state_30742__$1;(statearr_30786_30858[2] = null);
(statearr_30786_30858[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 15))
{var inst_30622 = (state_30742[14]);var inst_30619 = (state_30742[15]);var inst_30620 = (state_30742[16]);var inst_30621 = (state_30742[17]);var inst_30635 = (state_30742[2]);var inst_30636 = (inst_30622 + 1);var tmp30782 = inst_30619;var tmp30783 = inst_30620;var tmp30784 = inst_30621;var inst_30619__$1 = tmp30782;var inst_30620__$1 = tmp30783;var inst_30621__$1 = tmp30784;var inst_30622__$1 = inst_30636;var state_30742__$1 = (function (){var statearr_30787 = state_30742;(statearr_30787[14] = inst_30622__$1);
(statearr_30787[15] = inst_30619__$1);
(statearr_30787[27] = inst_30635);
(statearr_30787[16] = inst_30620__$1);
(statearr_30787[17] = inst_30621__$1);
return statearr_30787;
})();var statearr_30788_30859 = state_30742__$1;(statearr_30788_30859[2] = null);
(statearr_30788_30859[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 16))
{var inst_30639 = (state_30742[25]);var inst_30641 = cljs.core.chunked_seq_QMARK_.call(null,inst_30639);var state_30742__$1 = state_30742;if(inst_30641)
{var statearr_30789_30860 = state_30742__$1;(statearr_30789_30860[1] = 19);
} else
{var statearr_30790_30861 = state_30742__$1;(statearr_30790_30861[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 17))
{var state_30742__$1 = state_30742;var statearr_30791_30862 = state_30742__$1;(statearr_30791_30862[2] = null);
(statearr_30791_30862[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 18))
{var inst_30663 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30792_30863 = state_30742__$1;(statearr_30792_30863[2] = inst_30663);
(statearr_30792_30863[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 19))
{var inst_30639 = (state_30742[25]);var inst_30643 = cljs.core.chunk_first.call(null,inst_30639);var inst_30644 = cljs.core.chunk_rest.call(null,inst_30639);var inst_30645 = cljs.core.count.call(null,inst_30643);var inst_30619 = inst_30644;var inst_30620 = inst_30643;var inst_30621 = inst_30645;var inst_30622 = 0;var state_30742__$1 = (function (){var statearr_30793 = state_30742;(statearr_30793[14] = inst_30622);
(statearr_30793[15] = inst_30619);
(statearr_30793[16] = inst_30620);
(statearr_30793[17] = inst_30621);
return statearr_30793;
})();var statearr_30794_30864 = state_30742__$1;(statearr_30794_30864[2] = null);
(statearr_30794_30864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 20))
{var inst_30639 = (state_30742[25]);var inst_30649 = cljs.core.first.call(null,inst_30639);var inst_30650 = cljs.core.nth.call(null,inst_30649,0,null);var inst_30651 = cljs.core.nth.call(null,inst_30649,1,null);var state_30742__$1 = (function (){var statearr_30795 = state_30742;(statearr_30795[28] = inst_30650);
return statearr_30795;
})();if(cljs.core.truth_(inst_30651))
{var statearr_30796_30865 = state_30742__$1;(statearr_30796_30865[1] = 22);
} else
{var statearr_30797_30866 = state_30742__$1;(statearr_30797_30866[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 21))
{var inst_30660 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30798_30867 = state_30742__$1;(statearr_30798_30867[2] = inst_30660);
(statearr_30798_30867[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 22))
{var inst_30650 = (state_30742[28]);var inst_30653 = cljs.core.async.close_BANG_.call(null,inst_30650);var state_30742__$1 = state_30742;var statearr_30799_30868 = state_30742__$1;(statearr_30799_30868[2] = inst_30653);
(statearr_30799_30868[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 23))
{var state_30742__$1 = state_30742;var statearr_30800_30869 = state_30742__$1;(statearr_30800_30869[2] = null);
(statearr_30800_30869[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 24))
{var inst_30639 = (state_30742[25]);var inst_30656 = (state_30742[2]);var inst_30657 = cljs.core.next.call(null,inst_30639);var inst_30619 = inst_30657;var inst_30620 = null;var inst_30621 = 0;var inst_30622 = 0;var state_30742__$1 = (function (){var statearr_30801 = state_30742;(statearr_30801[29] = inst_30656);
(statearr_30801[14] = inst_30622);
(statearr_30801[15] = inst_30619);
(statearr_30801[16] = inst_30620);
(statearr_30801[17] = inst_30621);
return statearr_30801;
})();var statearr_30802_30870 = state_30742__$1;(statearr_30802_30870[2] = null);
(statearr_30802_30870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 25))
{var inst_30681 = (state_30742[10]);var inst_30680 = (state_30742[11]);var inst_30683 = (inst_30681 < inst_30680);var inst_30684 = inst_30683;var state_30742__$1 = state_30742;if(cljs.core.truth_(inst_30684))
{var statearr_30803_30871 = state_30742__$1;(statearr_30803_30871[1] = 27);
} else
{var statearr_30804_30872 = state_30742__$1;(statearr_30804_30872[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 26))
{var inst_30670 = (state_30742[19]);var inst_30728 = (state_30742[2]);var inst_30729 = cljs.core.seq.call(null,inst_30670);var state_30742__$1 = (function (){var statearr_30805 = state_30742;(statearr_30805[30] = inst_30728);
return statearr_30805;
})();if(inst_30729)
{var statearr_30806_30873 = state_30742__$1;(statearr_30806_30873[1] = 42);
} else
{var statearr_30807_30874 = state_30742__$1;(statearr_30807_30874[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 27))
{var inst_30681 = (state_30742[10]);var inst_30679 = (state_30742[13]);var inst_30686 = cljs.core._nth.call(null,inst_30679,inst_30681);var state_30742__$1 = (function (){var statearr_30808 = state_30742;(statearr_30808[7] = inst_30686);
return statearr_30808;
})();var statearr_30809_30875 = state_30742__$1;(statearr_30809_30875[2] = null);
(statearr_30809_30875[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 28))
{var inst_30699 = (state_30742[9]);var inst_30678 = (state_30742[12]);var inst_30699__$1 = cljs.core.seq.call(null,inst_30678);var state_30742__$1 = (function (){var statearr_30813 = state_30742;(statearr_30813[9] = inst_30699__$1);
return statearr_30813;
})();if(inst_30699__$1)
{var statearr_30814_30876 = state_30742__$1;(statearr_30814_30876[1] = 33);
} else
{var statearr_30815_30877 = state_30742__$1;(statearr_30815_30877[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 29))
{var inst_30726 = (state_30742[2]);var state_30742__$1 = state_30742;var statearr_30816_30878 = state_30742__$1;(statearr_30816_30878[2] = inst_30726);
(statearr_30816_30878[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 30))
{var inst_30681 = (state_30742[10]);var inst_30680 = (state_30742[11]);var inst_30678 = (state_30742[12]);var inst_30679 = (state_30742[13]);var inst_30695 = (state_30742[2]);var inst_30696 = (inst_30681 + 1);var tmp30810 = inst_30680;var tmp30811 = inst_30678;var tmp30812 = inst_30679;var inst_30678__$1 = tmp30811;var inst_30679__$1 = tmp30812;var inst_30680__$1 = tmp30810;var inst_30681__$1 = inst_30696;var state_30742__$1 = (function (){var statearr_30817 = state_30742;(statearr_30817[10] = inst_30681__$1);
(statearr_30817[11] = inst_30680__$1);
(statearr_30817[12] = inst_30678__$1);
(statearr_30817[13] = inst_30679__$1);
(statearr_30817[31] = inst_30695);
return statearr_30817;
})();var statearr_30818_30879 = state_30742__$1;(statearr_30818_30879[2] = null);
(statearr_30818_30879[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30743 === 31))
{var inst_30686 = (state_30742[7]);var inst_30687 = (state_30742[2]);var inst_30688 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30689 = cljs.core.async.untap_STAR_.call(null,m,inst_30686);var state_30742__$1 = (function (){var statearr_30819 = state_30742;(statearr_30819[32] = inst_30687);
(statearr_30819[33] = inst_30688);
return statearr_30819;
})();var statearr_30820_30880 = state_30742__$1;(statearr_30820_30880[2] = inst_30689);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30742__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_30824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30824[0] = state_machine__5507__auto__);
(statearr_30824[1] = 1);
return statearr_30824;
});
var state_machine__5507__auto____1 = (function (state_30742){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30742);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30825){if((e30825 instanceof Object))
{var ex__5510__auto__ = e30825;var statearr_30826_30881 = state_30742;(statearr_30826_30881[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30742);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30882 = state_30742;
state_30742 = G__30882;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30742){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30827 = f__5522__auto__.call(null);(statearr_30827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30828);
return statearr_30827;
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
cljs.core.async.Mix = (function (){var obj30884 = {};return obj30884;
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
;var m = (function (){if(typeof cljs.core.async.t30994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30994 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta30995){
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
this.meta30995 = meta30995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30994.cljs$lang$type = true;
cljs.core.async.t30994.cljs$lang$ctorStr = "cljs.core.async/t30994";
cljs.core.async.t30994.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30994");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t30994.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30996){var self__ = this;
var _30996__$1 = this;return self__.meta30995;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30996,meta30995__$1){var self__ = this;
var _30996__$1 = this;return (new cljs.core.async.t30994(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta30995__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t30994 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30994(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta30995){return (new cljs.core.async.t30994(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta30995));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t30994(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___31103 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31061){var state_val_31062 = (state_31061[1]);if((state_val_31062 === 1))
{var inst_31000 = (state_31061[7]);var inst_31000__$1 = calc_state.call(null);var inst_31001 = cljs.core.seq_QMARK_.call(null,inst_31000__$1);var state_31061__$1 = (function (){var statearr_31063 = state_31061;(statearr_31063[7] = inst_31000__$1);
return statearr_31063;
})();if(inst_31001)
{var statearr_31064_31104 = state_31061__$1;(statearr_31064_31104[1] = 2);
} else
{var statearr_31065_31105 = state_31061__$1;(statearr_31065_31105[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 2))
{var inst_31000 = (state_31061[7]);var inst_31003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31000);var state_31061__$1 = state_31061;var statearr_31066_31106 = state_31061__$1;(statearr_31066_31106[2] = inst_31003);
(statearr_31066_31106[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 3))
{var inst_31000 = (state_31061[7]);var state_31061__$1 = state_31061;var statearr_31067_31107 = state_31061__$1;(statearr_31067_31107[2] = inst_31000);
(statearr_31067_31107[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 4))
{var inst_31000 = (state_31061[7]);var inst_31006 = (state_31061[2]);var inst_31007 = cljs.core.get.call(null,inst_31006,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31008 = cljs.core.get.call(null,inst_31006,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31009 = cljs.core.get.call(null,inst_31006,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31010 = inst_31000;var state_31061__$1 = (function (){var statearr_31068 = state_31061;(statearr_31068[8] = inst_31010);
(statearr_31068[9] = inst_31008);
(statearr_31068[10] = inst_31007);
(statearr_31068[11] = inst_31009);
return statearr_31068;
})();var statearr_31069_31108 = state_31061__$1;(statearr_31069_31108[2] = null);
(statearr_31069_31108[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 5))
{var inst_31010 = (state_31061[8]);var inst_31013 = cljs.core.seq_QMARK_.call(null,inst_31010);var state_31061__$1 = state_31061;if(inst_31013)
{var statearr_31070_31109 = state_31061__$1;(statearr_31070_31109[1] = 7);
} else
{var statearr_31071_31110 = state_31061__$1;(statearr_31071_31110[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 6))
{var inst_31059 = (state_31061[2]);var state_31061__$1 = state_31061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31061__$1,inst_31059);
} else
{if((state_val_31062 === 7))
{var inst_31010 = (state_31061[8]);var inst_31015 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31010);var state_31061__$1 = state_31061;var statearr_31072_31111 = state_31061__$1;(statearr_31072_31111[2] = inst_31015);
(statearr_31072_31111[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 8))
{var inst_31010 = (state_31061[8]);var state_31061__$1 = state_31061;var statearr_31073_31112 = state_31061__$1;(statearr_31073_31112[2] = inst_31010);
(statearr_31073_31112[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 9))
{var inst_31018 = (state_31061[12]);var inst_31018__$1 = (state_31061[2]);var inst_31019 = cljs.core.get.call(null,inst_31018__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31020 = cljs.core.get.call(null,inst_31018__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31021 = cljs.core.get.call(null,inst_31018__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31061__$1 = (function (){var statearr_31074 = state_31061;(statearr_31074[13] = inst_31021);
(statearr_31074[14] = inst_31020);
(statearr_31074[12] = inst_31018__$1);
return statearr_31074;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31061__$1,10,inst_31019);
} else
{if((state_val_31062 === 10))
{var inst_31025 = (state_31061[15]);var inst_31026 = (state_31061[16]);var inst_31024 = (state_31061[2]);var inst_31025__$1 = cljs.core.nth.call(null,inst_31024,0,null);var inst_31026__$1 = cljs.core.nth.call(null,inst_31024,1,null);var inst_31027 = (inst_31025__$1 == null);var inst_31028 = cljs.core._EQ_.call(null,inst_31026__$1,change);var inst_31029 = (inst_31027) || (inst_31028);var state_31061__$1 = (function (){var statearr_31075 = state_31061;(statearr_31075[15] = inst_31025__$1);
(statearr_31075[16] = inst_31026__$1);
return statearr_31075;
})();if(cljs.core.truth_(inst_31029))
{var statearr_31076_31113 = state_31061__$1;(statearr_31076_31113[1] = 11);
} else
{var statearr_31077_31114 = state_31061__$1;(statearr_31077_31114[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 11))
{var inst_31025 = (state_31061[15]);var inst_31031 = (inst_31025 == null);var state_31061__$1 = state_31061;if(cljs.core.truth_(inst_31031))
{var statearr_31078_31115 = state_31061__$1;(statearr_31078_31115[1] = 14);
} else
{var statearr_31079_31116 = state_31061__$1;(statearr_31079_31116[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 12))
{var inst_31021 = (state_31061[13]);var inst_31040 = (state_31061[17]);var inst_31026 = (state_31061[16]);var inst_31040__$1 = inst_31021.call(null,inst_31026);var state_31061__$1 = (function (){var statearr_31080 = state_31061;(statearr_31080[17] = inst_31040__$1);
return statearr_31080;
})();if(cljs.core.truth_(inst_31040__$1))
{var statearr_31081_31117 = state_31061__$1;(statearr_31081_31117[1] = 17);
} else
{var statearr_31082_31118 = state_31061__$1;(statearr_31082_31118[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 13))
{var inst_31057 = (state_31061[2]);var state_31061__$1 = state_31061;var statearr_31083_31119 = state_31061__$1;(statearr_31083_31119[2] = inst_31057);
(statearr_31083_31119[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 14))
{var inst_31026 = (state_31061[16]);var inst_31033 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31026);var state_31061__$1 = state_31061;var statearr_31084_31120 = state_31061__$1;(statearr_31084_31120[2] = inst_31033);
(statearr_31084_31120[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 15))
{var state_31061__$1 = state_31061;var statearr_31085_31121 = state_31061__$1;(statearr_31085_31121[2] = null);
(statearr_31085_31121[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 16))
{var inst_31036 = (state_31061[2]);var inst_31037 = calc_state.call(null);var inst_31010 = inst_31037;var state_31061__$1 = (function (){var statearr_31086 = state_31061;(statearr_31086[8] = inst_31010);
(statearr_31086[18] = inst_31036);
return statearr_31086;
})();var statearr_31087_31122 = state_31061__$1;(statearr_31087_31122[2] = null);
(statearr_31087_31122[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 17))
{var inst_31040 = (state_31061[17]);var state_31061__$1 = state_31061;var statearr_31088_31123 = state_31061__$1;(statearr_31088_31123[2] = inst_31040);
(statearr_31088_31123[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 18))
{var inst_31021 = (state_31061[13]);var inst_31020 = (state_31061[14]);var inst_31026 = (state_31061[16]);var inst_31043 = cljs.core.empty_QMARK_.call(null,inst_31021);var inst_31044 = inst_31020.call(null,inst_31026);var inst_31045 = cljs.core.not.call(null,inst_31044);var inst_31046 = (inst_31043) && (inst_31045);var state_31061__$1 = state_31061;var statearr_31089_31124 = state_31061__$1;(statearr_31089_31124[2] = inst_31046);
(statearr_31089_31124[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 19))
{var inst_31048 = (state_31061[2]);var state_31061__$1 = state_31061;if(cljs.core.truth_(inst_31048))
{var statearr_31090_31125 = state_31061__$1;(statearr_31090_31125[1] = 20);
} else
{var statearr_31091_31126 = state_31061__$1;(statearr_31091_31126[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 20))
{var inst_31025 = (state_31061[15]);var state_31061__$1 = state_31061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31061__$1,23,out,inst_31025);
} else
{if((state_val_31062 === 21))
{var state_31061__$1 = state_31061;var statearr_31092_31127 = state_31061__$1;(statearr_31092_31127[2] = null);
(statearr_31092_31127[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 22))
{var inst_31018 = (state_31061[12]);var inst_31054 = (state_31061[2]);var inst_31010 = inst_31018;var state_31061__$1 = (function (){var statearr_31093 = state_31061;(statearr_31093[8] = inst_31010);
(statearr_31093[19] = inst_31054);
return statearr_31093;
})();var statearr_31094_31128 = state_31061__$1;(statearr_31094_31128[2] = null);
(statearr_31094_31128[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31062 === 23))
{var inst_31051 = (state_31061[2]);var state_31061__$1 = state_31061;var statearr_31095_31129 = state_31061__$1;(statearr_31095_31129[2] = inst_31051);
(statearr_31095_31129[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31099[0] = state_machine__5507__auto__);
(statearr_31099[1] = 1);
return statearr_31099;
});
var state_machine__5507__auto____1 = (function (state_31061){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31061);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object))
{var ex__5510__auto__ = e31100;var statearr_31101_31130 = state_31061;(statearr_31101_31130[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31131 = state_31061;
state_31061 = G__31131;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31061){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31102 = f__5522__auto__.call(null);(statearr_31102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31103);
return statearr_31102;
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
cljs.core.async.Pub = (function (){var obj31133 = {};return obj31133;
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
return (function (p1__31134_SHARP_){if(cljs.core.truth_(p1__31134_SHARP_.call(null,topic)))
{return p1__31134_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31134_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31259 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31259 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31260){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31260 = meta31260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31259.cljs$lang$type = true;
cljs.core.async.t31259.cljs$lang$ctorStr = "cljs.core.async/t31259";
cljs.core.async.t31259.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31259");
});})(mults,ensure_mult))
;
cljs.core.async.t31259.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31259.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31259.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31259.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31261){var self__ = this;
var _31261__$1 = this;return self__.meta31260;
});})(mults,ensure_mult))
;
cljs.core.async.t31259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31261,meta31260__$1){var self__ = this;
var _31261__$1 = this;return (new cljs.core.async.t31259(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31260__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31259 = ((function (mults,ensure_mult){
return (function __GT_t31259(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31260){return (new cljs.core.async.t31259(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31260));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31259(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___31383 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31335){var state_val_31336 = (state_31335[1]);if((state_val_31336 === 1))
{var state_31335__$1 = state_31335;var statearr_31337_31384 = state_31335__$1;(statearr_31337_31384[2] = null);
(statearr_31337_31384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 2))
{var state_31335__$1 = state_31335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31335__$1,4,ch);
} else
{if((state_val_31336 === 3))
{var inst_31333 = (state_31335[2]);var state_31335__$1 = state_31335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31335__$1,inst_31333);
} else
{if((state_val_31336 === 4))
{var inst_31264 = (state_31335[7]);var inst_31264__$1 = (state_31335[2]);var inst_31265 = (inst_31264__$1 == null);var state_31335__$1 = (function (){var statearr_31338 = state_31335;(statearr_31338[7] = inst_31264__$1);
return statearr_31338;
})();if(cljs.core.truth_(inst_31265))
{var statearr_31339_31385 = state_31335__$1;(statearr_31339_31385[1] = 5);
} else
{var statearr_31340_31386 = state_31335__$1;(statearr_31340_31386[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 5))
{var inst_31271 = cljs.core.deref.call(null,mults);var inst_31272 = cljs.core.vals.call(null,inst_31271);var inst_31273 = cljs.core.seq.call(null,inst_31272);var inst_31274 = inst_31273;var inst_31275 = null;var inst_31276 = 0;var inst_31277 = 0;var state_31335__$1 = (function (){var statearr_31341 = state_31335;(statearr_31341[8] = inst_31277);
(statearr_31341[9] = inst_31276);
(statearr_31341[10] = inst_31275);
(statearr_31341[11] = inst_31274);
return statearr_31341;
})();var statearr_31342_31387 = state_31335__$1;(statearr_31342_31387[2] = null);
(statearr_31342_31387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 6))
{var inst_31264 = (state_31335[7]);var inst_31312 = (state_31335[12]);var inst_31314 = (state_31335[13]);var inst_31312__$1 = topic_fn.call(null,inst_31264);var inst_31313 = cljs.core.deref.call(null,mults);var inst_31314__$1 = cljs.core.get.call(null,inst_31313,inst_31312__$1);var state_31335__$1 = (function (){var statearr_31343 = state_31335;(statearr_31343[12] = inst_31312__$1);
(statearr_31343[13] = inst_31314__$1);
return statearr_31343;
})();if(cljs.core.truth_(inst_31314__$1))
{var statearr_31344_31388 = state_31335__$1;(statearr_31344_31388[1] = 19);
} else
{var statearr_31345_31389 = state_31335__$1;(statearr_31345_31389[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 7))
{var inst_31331 = (state_31335[2]);var state_31335__$1 = state_31335;var statearr_31346_31390 = state_31335__$1;(statearr_31346_31390[2] = inst_31331);
(statearr_31346_31390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 8))
{var inst_31277 = (state_31335[8]);var inst_31276 = (state_31335[9]);var inst_31279 = (inst_31277 < inst_31276);var inst_31280 = inst_31279;var state_31335__$1 = state_31335;if(cljs.core.truth_(inst_31280))
{var statearr_31350_31391 = state_31335__$1;(statearr_31350_31391[1] = 10);
} else
{var statearr_31351_31392 = state_31335__$1;(statearr_31351_31392[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 9))
{var inst_31310 = (state_31335[2]);var state_31335__$1 = state_31335;var statearr_31352_31393 = state_31335__$1;(statearr_31352_31393[2] = inst_31310);
(statearr_31352_31393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 10))
{var inst_31277 = (state_31335[8]);var inst_31276 = (state_31335[9]);var inst_31275 = (state_31335[10]);var inst_31274 = (state_31335[11]);var inst_31282 = cljs.core._nth.call(null,inst_31275,inst_31277);var inst_31283 = cljs.core.async.muxch_STAR_.call(null,inst_31282);var inst_31284 = cljs.core.async.close_BANG_.call(null,inst_31283);var inst_31285 = (inst_31277 + 1);var tmp31347 = inst_31276;var tmp31348 = inst_31275;var tmp31349 = inst_31274;var inst_31274__$1 = tmp31349;var inst_31275__$1 = tmp31348;var inst_31276__$1 = tmp31347;var inst_31277__$1 = inst_31285;var state_31335__$1 = (function (){var statearr_31353 = state_31335;(statearr_31353[14] = inst_31284);
(statearr_31353[8] = inst_31277__$1);
(statearr_31353[9] = inst_31276__$1);
(statearr_31353[10] = inst_31275__$1);
(statearr_31353[11] = inst_31274__$1);
return statearr_31353;
})();var statearr_31354_31394 = state_31335__$1;(statearr_31354_31394[2] = null);
(statearr_31354_31394[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 11))
{var inst_31288 = (state_31335[15]);var inst_31274 = (state_31335[11]);var inst_31288__$1 = cljs.core.seq.call(null,inst_31274);var state_31335__$1 = (function (){var statearr_31355 = state_31335;(statearr_31355[15] = inst_31288__$1);
return statearr_31355;
})();if(inst_31288__$1)
{var statearr_31356_31395 = state_31335__$1;(statearr_31356_31395[1] = 13);
} else
{var statearr_31357_31396 = state_31335__$1;(statearr_31357_31396[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 12))
{var inst_31308 = (state_31335[2]);var state_31335__$1 = state_31335;var statearr_31358_31397 = state_31335__$1;(statearr_31358_31397[2] = inst_31308);
(statearr_31358_31397[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 13))
{var inst_31288 = (state_31335[15]);var inst_31290 = cljs.core.chunked_seq_QMARK_.call(null,inst_31288);var state_31335__$1 = state_31335;if(inst_31290)
{var statearr_31359_31398 = state_31335__$1;(statearr_31359_31398[1] = 16);
} else
{var statearr_31360_31399 = state_31335__$1;(statearr_31360_31399[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 14))
{var state_31335__$1 = state_31335;var statearr_31361_31400 = state_31335__$1;(statearr_31361_31400[2] = null);
(statearr_31361_31400[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 15))
{var inst_31306 = (state_31335[2]);var state_31335__$1 = state_31335;var statearr_31362_31401 = state_31335__$1;(statearr_31362_31401[2] = inst_31306);
(statearr_31362_31401[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 16))
{var inst_31288 = (state_31335[15]);var inst_31292 = cljs.core.chunk_first.call(null,inst_31288);var inst_31293 = cljs.core.chunk_rest.call(null,inst_31288);var inst_31294 = cljs.core.count.call(null,inst_31292);var inst_31274 = inst_31293;var inst_31275 = inst_31292;var inst_31276 = inst_31294;var inst_31277 = 0;var state_31335__$1 = (function (){var statearr_31363 = state_31335;(statearr_31363[8] = inst_31277);
(statearr_31363[9] = inst_31276);
(statearr_31363[10] = inst_31275);
(statearr_31363[11] = inst_31274);
return statearr_31363;
})();var statearr_31364_31402 = state_31335__$1;(statearr_31364_31402[2] = null);
(statearr_31364_31402[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 17))
{var inst_31288 = (state_31335[15]);var inst_31297 = cljs.core.first.call(null,inst_31288);var inst_31298 = cljs.core.async.muxch_STAR_.call(null,inst_31297);var inst_31299 = cljs.core.async.close_BANG_.call(null,inst_31298);var inst_31300 = cljs.core.next.call(null,inst_31288);var inst_31274 = inst_31300;var inst_31275 = null;var inst_31276 = 0;var inst_31277 = 0;var state_31335__$1 = (function (){var statearr_31365 = state_31335;(statearr_31365[16] = inst_31299);
(statearr_31365[8] = inst_31277);
(statearr_31365[9] = inst_31276);
(statearr_31365[10] = inst_31275);
(statearr_31365[11] = inst_31274);
return statearr_31365;
})();var statearr_31366_31403 = state_31335__$1;(statearr_31366_31403[2] = null);
(statearr_31366_31403[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 18))
{var inst_31303 = (state_31335[2]);var state_31335__$1 = state_31335;var statearr_31367_31404 = state_31335__$1;(statearr_31367_31404[2] = inst_31303);
(statearr_31367_31404[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 19))
{var state_31335__$1 = state_31335;var statearr_31368_31405 = state_31335__$1;(statearr_31368_31405[2] = null);
(statearr_31368_31405[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 20))
{var state_31335__$1 = state_31335;var statearr_31369_31406 = state_31335__$1;(statearr_31369_31406[2] = null);
(statearr_31369_31406[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 21))
{var inst_31328 = (state_31335[2]);var state_31335__$1 = (function (){var statearr_31370 = state_31335;(statearr_31370[17] = inst_31328);
return statearr_31370;
})();var statearr_31371_31407 = state_31335__$1;(statearr_31371_31407[2] = null);
(statearr_31371_31407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 22))
{var inst_31325 = (state_31335[2]);var state_31335__$1 = state_31335;var statearr_31372_31408 = state_31335__$1;(statearr_31372_31408[2] = inst_31325);
(statearr_31372_31408[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 23))
{var inst_31312 = (state_31335[12]);var inst_31316 = (state_31335[2]);var inst_31317 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31312);var state_31335__$1 = (function (){var statearr_31373 = state_31335;(statearr_31373[18] = inst_31316);
return statearr_31373;
})();var statearr_31374_31409 = state_31335__$1;(statearr_31374_31409[2] = inst_31317);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31335__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31336 === 24))
{var inst_31264 = (state_31335[7]);var inst_31314 = (state_31335[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31335,23,Object,null,22);var inst_31321 = cljs.core.async.muxch_STAR_.call(null,inst_31314);var state_31335__$1 = state_31335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31335__$1,25,inst_31321,inst_31264);
} else
{if((state_val_31336 === 25))
{var inst_31323 = (state_31335[2]);var state_31335__$1 = state_31335;var statearr_31375_31410 = state_31335__$1;(statearr_31375_31410[2] = inst_31323);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31335__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_31379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31379[0] = state_machine__5507__auto__);
(statearr_31379[1] = 1);
return statearr_31379;
});
var state_machine__5507__auto____1 = (function (state_31335){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31380){if((e31380 instanceof Object))
{var ex__5510__auto__ = e31380;var statearr_31381_31411 = state_31335;(statearr_31381_31411[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31412 = state_31335;
state_31335 = G__31412;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31335){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31382 = f__5522__auto__.call(null);(statearr_31382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31383);
return statearr_31382;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___31549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31519){var state_val_31520 = (state_31519[1]);if((state_val_31520 === 1))
{var state_31519__$1 = state_31519;var statearr_31521_31550 = state_31519__$1;(statearr_31521_31550[2] = null);
(statearr_31521_31550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 2))
{var inst_31482 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31483 = 0;var state_31519__$1 = (function (){var statearr_31522 = state_31519;(statearr_31522[7] = inst_31483);
(statearr_31522[8] = inst_31482);
return statearr_31522;
})();var statearr_31523_31551 = state_31519__$1;(statearr_31523_31551[2] = null);
(statearr_31523_31551[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 3))
{var inst_31517 = (state_31519[2]);var state_31519__$1 = state_31519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31519__$1,inst_31517);
} else
{if((state_val_31520 === 4))
{var inst_31483 = (state_31519[7]);var inst_31485 = (inst_31483 < cnt);var state_31519__$1 = state_31519;if(cljs.core.truth_(inst_31485))
{var statearr_31524_31552 = state_31519__$1;(statearr_31524_31552[1] = 6);
} else
{var statearr_31525_31553 = state_31519__$1;(statearr_31525_31553[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 5))
{var inst_31503 = (state_31519[2]);var state_31519__$1 = (function (){var statearr_31526 = state_31519;(statearr_31526[9] = inst_31503);
return statearr_31526;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,12,dchan);
} else
{if((state_val_31520 === 6))
{var state_31519__$1 = state_31519;var statearr_31527_31554 = state_31519__$1;(statearr_31527_31554[2] = null);
(statearr_31527_31554[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 7))
{var state_31519__$1 = state_31519;var statearr_31528_31555 = state_31519__$1;(statearr_31528_31555[2] = null);
(statearr_31528_31555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 8))
{var inst_31501 = (state_31519[2]);var state_31519__$1 = state_31519;var statearr_31529_31556 = state_31519__$1;(statearr_31529_31556[2] = inst_31501);
(statearr_31529_31556[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 9))
{var inst_31483 = (state_31519[7]);var inst_31496 = (state_31519[2]);var inst_31497 = (inst_31483 + 1);var inst_31483__$1 = inst_31497;var state_31519__$1 = (function (){var statearr_31530 = state_31519;(statearr_31530[10] = inst_31496);
(statearr_31530[7] = inst_31483__$1);
return statearr_31530;
})();var statearr_31531_31557 = state_31519__$1;(statearr_31531_31557[2] = null);
(statearr_31531_31557[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 10))
{var inst_31487 = (state_31519[2]);var inst_31488 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31519__$1 = (function (){var statearr_31532 = state_31519;(statearr_31532[11] = inst_31487);
return statearr_31532;
})();var statearr_31533_31558 = state_31519__$1;(statearr_31533_31558[2] = inst_31488);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31519__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 11))
{var inst_31483 = (state_31519[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31519,10,Object,null,9);var inst_31492 = chs__$1.call(null,inst_31483);var inst_31493 = done.call(null,inst_31483);var inst_31494 = cljs.core.async.take_BANG_.call(null,inst_31492,inst_31493);var state_31519__$1 = state_31519;var statearr_31534_31559 = state_31519__$1;(statearr_31534_31559[2] = inst_31494);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31519__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 12))
{var inst_31505 = (state_31519[12]);var inst_31505__$1 = (state_31519[2]);var inst_31506 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31505__$1);var state_31519__$1 = (function (){var statearr_31535 = state_31519;(statearr_31535[12] = inst_31505__$1);
return statearr_31535;
})();if(cljs.core.truth_(inst_31506))
{var statearr_31536_31560 = state_31519__$1;(statearr_31536_31560[1] = 13);
} else
{var statearr_31537_31561 = state_31519__$1;(statearr_31537_31561[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 13))
{var inst_31508 = cljs.core.async.close_BANG_.call(null,out);var state_31519__$1 = state_31519;var statearr_31538_31562 = state_31519__$1;(statearr_31538_31562[2] = inst_31508);
(statearr_31538_31562[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 14))
{var inst_31505 = (state_31519[12]);var inst_31510 = cljs.core.apply.call(null,f,inst_31505);var state_31519__$1 = state_31519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31519__$1,16,out,inst_31510);
} else
{if((state_val_31520 === 15))
{var inst_31515 = (state_31519[2]);var state_31519__$1 = state_31519;var statearr_31539_31563 = state_31519__$1;(statearr_31539_31563[2] = inst_31515);
(statearr_31539_31563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31520 === 16))
{var inst_31512 = (state_31519[2]);var state_31519__$1 = (function (){var statearr_31540 = state_31519;(statearr_31540[13] = inst_31512);
return statearr_31540;
})();var statearr_31541_31564 = state_31519__$1;(statearr_31541_31564[2] = null);
(statearr_31541_31564[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31545[0] = state_machine__5507__auto__);
(statearr_31545[1] = 1);
return statearr_31545;
});
var state_machine__5507__auto____1 = (function (state_31519){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31519);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31546){if((e31546 instanceof Object))
{var ex__5510__auto__ = e31546;var statearr_31547_31565 = state_31519;(statearr_31547_31565[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31566 = state_31519;
state_31519 = G__31566;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31519){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31548 = f__5522__auto__.call(null);(statearr_31548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31549);
return statearr_31548;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31674 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31650){var state_val_31651 = (state_31650[1]);if((state_val_31651 === 1))
{var inst_31621 = cljs.core.vec.call(null,chs);var inst_31622 = inst_31621;var state_31650__$1 = (function (){var statearr_31652 = state_31650;(statearr_31652[7] = inst_31622);
return statearr_31652;
})();var statearr_31653_31675 = state_31650__$1;(statearr_31653_31675[2] = null);
(statearr_31653_31675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31651 === 2))
{var inst_31622 = (state_31650[7]);var inst_31624 = cljs.core.count.call(null,inst_31622);var inst_31625 = (inst_31624 > 0);var state_31650__$1 = state_31650;if(cljs.core.truth_(inst_31625))
{var statearr_31654_31676 = state_31650__$1;(statearr_31654_31676[1] = 4);
} else
{var statearr_31655_31677 = state_31650__$1;(statearr_31655_31677[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31651 === 3))
{var inst_31648 = (state_31650[2]);var state_31650__$1 = state_31650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31650__$1,inst_31648);
} else
{if((state_val_31651 === 4))
{var inst_31622 = (state_31650[7]);var state_31650__$1 = state_31650;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31650__$1,7,inst_31622);
} else
{if((state_val_31651 === 5))
{var inst_31644 = cljs.core.async.close_BANG_.call(null,out);var state_31650__$1 = state_31650;var statearr_31656_31678 = state_31650__$1;(statearr_31656_31678[2] = inst_31644);
(statearr_31656_31678[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31651 === 6))
{var inst_31646 = (state_31650[2]);var state_31650__$1 = state_31650;var statearr_31657_31679 = state_31650__$1;(statearr_31657_31679[2] = inst_31646);
(statearr_31657_31679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31651 === 7))
{var inst_31629 = (state_31650[8]);var inst_31630 = (state_31650[9]);var inst_31629__$1 = (state_31650[2]);var inst_31630__$1 = cljs.core.nth.call(null,inst_31629__$1,0,null);var inst_31631 = cljs.core.nth.call(null,inst_31629__$1,1,null);var inst_31632 = (inst_31630__$1 == null);var state_31650__$1 = (function (){var statearr_31658 = state_31650;(statearr_31658[8] = inst_31629__$1);
(statearr_31658[9] = inst_31630__$1);
(statearr_31658[10] = inst_31631);
return statearr_31658;
})();if(cljs.core.truth_(inst_31632))
{var statearr_31659_31680 = state_31650__$1;(statearr_31659_31680[1] = 8);
} else
{var statearr_31660_31681 = state_31650__$1;(statearr_31660_31681[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31651 === 8))
{var inst_31629 = (state_31650[8]);var inst_31630 = (state_31650[9]);var inst_31631 = (state_31650[10]);var inst_31622 = (state_31650[7]);var inst_31634 = (function (){var c = inst_31631;var v = inst_31630;var vec__31627 = inst_31629;var cs = inst_31622;return ((function (c,v,vec__31627,cs,inst_31629,inst_31630,inst_31631,inst_31622,state_val_31651){
return (function (p1__31567_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31567_SHARP_);
});
;})(c,v,vec__31627,cs,inst_31629,inst_31630,inst_31631,inst_31622,state_val_31651))
})();var inst_31635 = cljs.core.filterv.call(null,inst_31634,inst_31622);var inst_31622__$1 = inst_31635;var state_31650__$1 = (function (){var statearr_31661 = state_31650;(statearr_31661[7] = inst_31622__$1);
return statearr_31661;
})();var statearr_31662_31682 = state_31650__$1;(statearr_31662_31682[2] = null);
(statearr_31662_31682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31651 === 9))
{var inst_31630 = (state_31650[9]);var state_31650__$1 = state_31650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31650__$1,11,out,inst_31630);
} else
{if((state_val_31651 === 10))
{var inst_31642 = (state_31650[2]);var state_31650__$1 = state_31650;var statearr_31664_31683 = state_31650__$1;(statearr_31664_31683[2] = inst_31642);
(statearr_31664_31683[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31651 === 11))
{var inst_31622 = (state_31650[7]);var inst_31639 = (state_31650[2]);var tmp31663 = inst_31622;var inst_31622__$1 = tmp31663;var state_31650__$1 = (function (){var statearr_31665 = state_31650;(statearr_31665[11] = inst_31639);
(statearr_31665[7] = inst_31622__$1);
return statearr_31665;
})();var statearr_31666_31684 = state_31650__$1;(statearr_31666_31684[2] = null);
(statearr_31666_31684[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31670 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31670[0] = state_machine__5507__auto__);
(statearr_31670[1] = 1);
return statearr_31670;
});
var state_machine__5507__auto____1 = (function (state_31650){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31650);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31671){if((e31671 instanceof Object))
{var ex__5510__auto__ = e31671;var statearr_31672_31685 = state_31650;(statearr_31672_31685[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31650);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31686 = state_31650;
state_31650 = G__31686;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31673 = f__5522__auto__.call(null);(statearr_31673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31674);
return statearr_31673;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31756){var state_val_31757 = (state_31756[1]);if((state_val_31757 === 1))
{var inst_31733 = 0;var state_31756__$1 = (function (){var statearr_31758 = state_31756;(statearr_31758[7] = inst_31733);
return statearr_31758;
})();var statearr_31759_31780 = state_31756__$1;(statearr_31759_31780[2] = null);
(statearr_31759_31780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31757 === 2))
{var inst_31733 = (state_31756[7]);var inst_31735 = (inst_31733 < n);var state_31756__$1 = state_31756;if(cljs.core.truth_(inst_31735))
{var statearr_31760_31781 = state_31756__$1;(statearr_31760_31781[1] = 4);
} else
{var statearr_31761_31782 = state_31756__$1;(statearr_31761_31782[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31757 === 3))
{var inst_31753 = (state_31756[2]);var inst_31754 = cljs.core.async.close_BANG_.call(null,out);var state_31756__$1 = (function (){var statearr_31762 = state_31756;(statearr_31762[8] = inst_31753);
return statearr_31762;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31756__$1,inst_31754);
} else
{if((state_val_31757 === 4))
{var state_31756__$1 = state_31756;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31756__$1,7,ch);
} else
{if((state_val_31757 === 5))
{var state_31756__$1 = state_31756;var statearr_31763_31783 = state_31756__$1;(statearr_31763_31783[2] = null);
(statearr_31763_31783[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31757 === 6))
{var inst_31751 = (state_31756[2]);var state_31756__$1 = state_31756;var statearr_31764_31784 = state_31756__$1;(statearr_31764_31784[2] = inst_31751);
(statearr_31764_31784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31757 === 7))
{var inst_31738 = (state_31756[9]);var inst_31738__$1 = (state_31756[2]);var inst_31739 = (inst_31738__$1 == null);var inst_31740 = cljs.core.not.call(null,inst_31739);var state_31756__$1 = (function (){var statearr_31765 = state_31756;(statearr_31765[9] = inst_31738__$1);
return statearr_31765;
})();if(inst_31740)
{var statearr_31766_31785 = state_31756__$1;(statearr_31766_31785[1] = 8);
} else
{var statearr_31767_31786 = state_31756__$1;(statearr_31767_31786[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31757 === 8))
{var inst_31738 = (state_31756[9]);var state_31756__$1 = state_31756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31756__$1,11,out,inst_31738);
} else
{if((state_val_31757 === 9))
{var state_31756__$1 = state_31756;var statearr_31768_31787 = state_31756__$1;(statearr_31768_31787[2] = null);
(statearr_31768_31787[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31757 === 10))
{var inst_31748 = (state_31756[2]);var state_31756__$1 = state_31756;var statearr_31769_31788 = state_31756__$1;(statearr_31769_31788[2] = inst_31748);
(statearr_31769_31788[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31757 === 11))
{var inst_31733 = (state_31756[7]);var inst_31743 = (state_31756[2]);var inst_31744 = (inst_31733 + 1);var inst_31733__$1 = inst_31744;var state_31756__$1 = (function (){var statearr_31770 = state_31756;(statearr_31770[7] = inst_31733__$1);
(statearr_31770[10] = inst_31743);
return statearr_31770;
})();var statearr_31771_31789 = state_31756__$1;(statearr_31771_31789[2] = null);
(statearr_31771_31789[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31775 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31775[0] = state_machine__5507__auto__);
(statearr_31775[1] = 1);
return statearr_31775;
});
var state_machine__5507__auto____1 = (function (state_31756){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31756);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31776){if((e31776 instanceof Object))
{var ex__5510__auto__ = e31776;var statearr_31777_31790 = state_31756;(statearr_31777_31790[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31756);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31791 = state_31756;
state_31756 = G__31791;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31756){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31778 = f__5522__auto__.call(null);(statearr_31778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31779);
return statearr_31778;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31888 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31863){var state_val_31864 = (state_31863[1]);if((state_val_31864 === 1))
{var inst_31840 = null;var state_31863__$1 = (function (){var statearr_31865 = state_31863;(statearr_31865[7] = inst_31840);
return statearr_31865;
})();var statearr_31866_31889 = state_31863__$1;(statearr_31866_31889[2] = null);
(statearr_31866_31889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31864 === 2))
{var state_31863__$1 = state_31863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,4,ch);
} else
{if((state_val_31864 === 3))
{var inst_31860 = (state_31863[2]);var inst_31861 = cljs.core.async.close_BANG_.call(null,out);var state_31863__$1 = (function (){var statearr_31867 = state_31863;(statearr_31867[8] = inst_31860);
return statearr_31867;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31863__$1,inst_31861);
} else
{if((state_val_31864 === 4))
{var inst_31843 = (state_31863[9]);var inst_31843__$1 = (state_31863[2]);var inst_31844 = (inst_31843__$1 == null);var inst_31845 = cljs.core.not.call(null,inst_31844);var state_31863__$1 = (function (){var statearr_31868 = state_31863;(statearr_31868[9] = inst_31843__$1);
return statearr_31868;
})();if(inst_31845)
{var statearr_31869_31890 = state_31863__$1;(statearr_31869_31890[1] = 5);
} else
{var statearr_31870_31891 = state_31863__$1;(statearr_31870_31891[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31864 === 5))
{var inst_31840 = (state_31863[7]);var inst_31843 = (state_31863[9]);var inst_31847 = cljs.core._EQ_.call(null,inst_31843,inst_31840);var state_31863__$1 = state_31863;if(inst_31847)
{var statearr_31871_31892 = state_31863__$1;(statearr_31871_31892[1] = 8);
} else
{var statearr_31872_31893 = state_31863__$1;(statearr_31872_31893[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31864 === 6))
{var state_31863__$1 = state_31863;var statearr_31874_31894 = state_31863__$1;(statearr_31874_31894[2] = null);
(statearr_31874_31894[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31864 === 7))
{var inst_31858 = (state_31863[2]);var state_31863__$1 = state_31863;var statearr_31875_31895 = state_31863__$1;(statearr_31875_31895[2] = inst_31858);
(statearr_31875_31895[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31864 === 8))
{var inst_31840 = (state_31863[7]);var tmp31873 = inst_31840;var inst_31840__$1 = tmp31873;var state_31863__$1 = (function (){var statearr_31876 = state_31863;(statearr_31876[7] = inst_31840__$1);
return statearr_31876;
})();var statearr_31877_31896 = state_31863__$1;(statearr_31877_31896[2] = null);
(statearr_31877_31896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31864 === 9))
{var inst_31843 = (state_31863[9]);var state_31863__$1 = state_31863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31863__$1,11,out,inst_31843);
} else
{if((state_val_31864 === 10))
{var inst_31855 = (state_31863[2]);var state_31863__$1 = state_31863;var statearr_31878_31897 = state_31863__$1;(statearr_31878_31897[2] = inst_31855);
(statearr_31878_31897[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31864 === 11))
{var inst_31843 = (state_31863[9]);var inst_31852 = (state_31863[2]);var inst_31840 = inst_31843;var state_31863__$1 = (function (){var statearr_31879 = state_31863;(statearr_31879[10] = inst_31852);
(statearr_31879[7] = inst_31840);
return statearr_31879;
})();var statearr_31880_31898 = state_31863__$1;(statearr_31880_31898[2] = null);
(statearr_31880_31898[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31884 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31884[0] = state_machine__5507__auto__);
(statearr_31884[1] = 1);
return statearr_31884;
});
var state_machine__5507__auto____1 = (function (state_31863){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31885){if((e31885 instanceof Object))
{var ex__5510__auto__ = e31885;var statearr_31886_31899 = state_31863;(statearr_31886_31899[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31900 = state_31863;
state_31863 = G__31900;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31863){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31887 = f__5522__auto__.call(null);(statearr_31887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31888);
return statearr_31887;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32005){var state_val_32006 = (state_32005[1]);if((state_val_32006 === 1))
{var inst_31968 = (new Array(n));var inst_31969 = inst_31968;var inst_31970 = 0;var state_32005__$1 = (function (){var statearr_32007 = state_32005;(statearr_32007[7] = inst_31970);
(statearr_32007[8] = inst_31969);
return statearr_32007;
})();var statearr_32008_32036 = state_32005__$1;(statearr_32008_32036[2] = null);
(statearr_32008_32036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 2))
{var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32005__$1,4,ch);
} else
{if((state_val_32006 === 3))
{var inst_32003 = (state_32005[2]);var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32005__$1,inst_32003);
} else
{if((state_val_32006 === 4))
{var inst_31973 = (state_32005[9]);var inst_31973__$1 = (state_32005[2]);var inst_31974 = (inst_31973__$1 == null);var inst_31975 = cljs.core.not.call(null,inst_31974);var state_32005__$1 = (function (){var statearr_32009 = state_32005;(statearr_32009[9] = inst_31973__$1);
return statearr_32009;
})();if(inst_31975)
{var statearr_32010_32037 = state_32005__$1;(statearr_32010_32037[1] = 5);
} else
{var statearr_32011_32038 = state_32005__$1;(statearr_32011_32038[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 5))
{var inst_31973 = (state_32005[9]);var inst_31970 = (state_32005[7]);var inst_31969 = (state_32005[8]);var inst_31978 = (state_32005[10]);var inst_31977 = (inst_31969[inst_31970] = inst_31973);var inst_31978__$1 = (inst_31970 + 1);var inst_31979 = (inst_31978__$1 < n);var state_32005__$1 = (function (){var statearr_32012 = state_32005;(statearr_32012[10] = inst_31978__$1);
(statearr_32012[11] = inst_31977);
return statearr_32012;
})();if(cljs.core.truth_(inst_31979))
{var statearr_32013_32039 = state_32005__$1;(statearr_32013_32039[1] = 8);
} else
{var statearr_32014_32040 = state_32005__$1;(statearr_32014_32040[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 6))
{var inst_31970 = (state_32005[7]);var inst_31991 = (inst_31970 > 0);var state_32005__$1 = state_32005;if(cljs.core.truth_(inst_31991))
{var statearr_32016_32041 = state_32005__$1;(statearr_32016_32041[1] = 12);
} else
{var statearr_32017_32042 = state_32005__$1;(statearr_32017_32042[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 7))
{var inst_32001 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32018_32043 = state_32005__$1;(statearr_32018_32043[2] = inst_32001);
(statearr_32018_32043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 8))
{var inst_31969 = (state_32005[8]);var inst_31978 = (state_32005[10]);var tmp32015 = inst_31969;var inst_31969__$1 = tmp32015;var inst_31970 = inst_31978;var state_32005__$1 = (function (){var statearr_32019 = state_32005;(statearr_32019[7] = inst_31970);
(statearr_32019[8] = inst_31969__$1);
return statearr_32019;
})();var statearr_32020_32044 = state_32005__$1;(statearr_32020_32044[2] = null);
(statearr_32020_32044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 9))
{var inst_31969 = (state_32005[8]);var inst_31983 = cljs.core.vec.call(null,inst_31969);var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32005__$1,11,out,inst_31983);
} else
{if((state_val_32006 === 10))
{var inst_31989 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32021_32045 = state_32005__$1;(statearr_32021_32045[2] = inst_31989);
(statearr_32021_32045[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 11))
{var inst_31985 = (state_32005[2]);var inst_31986 = (new Array(n));var inst_31969 = inst_31986;var inst_31970 = 0;var state_32005__$1 = (function (){var statearr_32022 = state_32005;(statearr_32022[7] = inst_31970);
(statearr_32022[8] = inst_31969);
(statearr_32022[12] = inst_31985);
return statearr_32022;
})();var statearr_32023_32046 = state_32005__$1;(statearr_32023_32046[2] = null);
(statearr_32023_32046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 12))
{var inst_31969 = (state_32005[8]);var inst_31993 = cljs.core.vec.call(null,inst_31969);var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32005__$1,15,out,inst_31993);
} else
{if((state_val_32006 === 13))
{var state_32005__$1 = state_32005;var statearr_32024_32047 = state_32005__$1;(statearr_32024_32047[2] = null);
(statearr_32024_32047[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 14))
{var inst_31998 = (state_32005[2]);var inst_31999 = cljs.core.async.close_BANG_.call(null,out);var state_32005__$1 = (function (){var statearr_32025 = state_32005;(statearr_32025[13] = inst_31998);
return statearr_32025;
})();var statearr_32026_32048 = state_32005__$1;(statearr_32026_32048[2] = inst_31999);
(statearr_32026_32048[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 15))
{var inst_31995 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32027_32049 = state_32005__$1;(statearr_32027_32049[2] = inst_31995);
(statearr_32027_32049[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32031[0] = state_machine__5507__auto__);
(statearr_32031[1] = 1);
return statearr_32031;
});
var state_machine__5507__auto____1 = (function (state_32005){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32032){if((e32032 instanceof Object))
{var ex__5510__auto__ = e32032;var statearr_32033_32050 = state_32005;(statearr_32033_32050[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32051 = state_32005;
state_32005 = G__32051;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32005){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32034 = f__5522__auto__.call(null);(statearr_32034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32035);
return statearr_32034;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32194 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32164){var state_val_32165 = (state_32164[1]);if((state_val_32165 === 1))
{var inst_32123 = [];var inst_32124 = inst_32123;var inst_32125 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32164__$1 = (function (){var statearr_32166 = state_32164;(statearr_32166[7] = inst_32125);
(statearr_32166[8] = inst_32124);
return statearr_32166;
})();var statearr_32167_32195 = state_32164__$1;(statearr_32167_32195[2] = null);
(statearr_32167_32195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 2))
{var state_32164__$1 = state_32164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32164__$1,4,ch);
} else
{if((state_val_32165 === 3))
{var inst_32162 = (state_32164[2]);var state_32164__$1 = state_32164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32164__$1,inst_32162);
} else
{if((state_val_32165 === 4))
{var inst_32128 = (state_32164[9]);var inst_32128__$1 = (state_32164[2]);var inst_32129 = (inst_32128__$1 == null);var inst_32130 = cljs.core.not.call(null,inst_32129);var state_32164__$1 = (function (){var statearr_32168 = state_32164;(statearr_32168[9] = inst_32128__$1);
return statearr_32168;
})();if(inst_32130)
{var statearr_32169_32196 = state_32164__$1;(statearr_32169_32196[1] = 5);
} else
{var statearr_32170_32197 = state_32164__$1;(statearr_32170_32197[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 5))
{var inst_32125 = (state_32164[7]);var inst_32132 = (state_32164[10]);var inst_32128 = (state_32164[9]);var inst_32132__$1 = f.call(null,inst_32128);var inst_32133 = cljs.core._EQ_.call(null,inst_32132__$1,inst_32125);var inst_32134 = cljs.core.keyword_identical_QMARK_.call(null,inst_32125,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32135 = (inst_32133) || (inst_32134);var state_32164__$1 = (function (){var statearr_32171 = state_32164;(statearr_32171[10] = inst_32132__$1);
return statearr_32171;
})();if(cljs.core.truth_(inst_32135))
{var statearr_32172_32198 = state_32164__$1;(statearr_32172_32198[1] = 8);
} else
{var statearr_32173_32199 = state_32164__$1;(statearr_32173_32199[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 6))
{var inst_32124 = (state_32164[8]);var inst_32149 = inst_32124.length;var inst_32150 = (inst_32149 > 0);var state_32164__$1 = state_32164;if(cljs.core.truth_(inst_32150))
{var statearr_32175_32200 = state_32164__$1;(statearr_32175_32200[1] = 12);
} else
{var statearr_32176_32201 = state_32164__$1;(statearr_32176_32201[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 7))
{var inst_32160 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32177_32202 = state_32164__$1;(statearr_32177_32202[2] = inst_32160);
(statearr_32177_32202[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 8))
{var inst_32132 = (state_32164[10]);var inst_32128 = (state_32164[9]);var inst_32124 = (state_32164[8]);var inst_32137 = inst_32124.push(inst_32128);var tmp32174 = inst_32124;var inst_32124__$1 = tmp32174;var inst_32125 = inst_32132;var state_32164__$1 = (function (){var statearr_32178 = state_32164;(statearr_32178[11] = inst_32137);
(statearr_32178[7] = inst_32125);
(statearr_32178[8] = inst_32124__$1);
return statearr_32178;
})();var statearr_32179_32203 = state_32164__$1;(statearr_32179_32203[2] = null);
(statearr_32179_32203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 9))
{var inst_32124 = (state_32164[8]);var inst_32140 = cljs.core.vec.call(null,inst_32124);var state_32164__$1 = state_32164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32164__$1,11,out,inst_32140);
} else
{if((state_val_32165 === 10))
{var inst_32147 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32180_32204 = state_32164__$1;(statearr_32180_32204[2] = inst_32147);
(statearr_32180_32204[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 11))
{var inst_32132 = (state_32164[10]);var inst_32128 = (state_32164[9]);var inst_32142 = (state_32164[2]);var inst_32143 = [];var inst_32144 = inst_32143.push(inst_32128);var inst_32124 = inst_32143;var inst_32125 = inst_32132;var state_32164__$1 = (function (){var statearr_32181 = state_32164;(statearr_32181[12] = inst_32142);
(statearr_32181[13] = inst_32144);
(statearr_32181[7] = inst_32125);
(statearr_32181[8] = inst_32124);
return statearr_32181;
})();var statearr_32182_32205 = state_32164__$1;(statearr_32182_32205[2] = null);
(statearr_32182_32205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 12))
{var inst_32124 = (state_32164[8]);var inst_32152 = cljs.core.vec.call(null,inst_32124);var state_32164__$1 = state_32164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32164__$1,15,out,inst_32152);
} else
{if((state_val_32165 === 13))
{var state_32164__$1 = state_32164;var statearr_32183_32206 = state_32164__$1;(statearr_32183_32206[2] = null);
(statearr_32183_32206[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 14))
{var inst_32157 = (state_32164[2]);var inst_32158 = cljs.core.async.close_BANG_.call(null,out);var state_32164__$1 = (function (){var statearr_32184 = state_32164;(statearr_32184[14] = inst_32157);
return statearr_32184;
})();var statearr_32185_32207 = state_32164__$1;(statearr_32185_32207[2] = inst_32158);
(statearr_32185_32207[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 15))
{var inst_32154 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32186_32208 = state_32164__$1;(statearr_32186_32208[2] = inst_32154);
(statearr_32186_32208[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32190[0] = state_machine__5507__auto__);
(statearr_32190[1] = 1);
return statearr_32190;
});
var state_machine__5507__auto____1 = (function (state_32164){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32164);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32191){if((e32191 instanceof Object))
{var ex__5510__auto__ = e32191;var statearr_32192_32209 = state_32164;(statearr_32192_32209[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32210 = state_32164;
state_32164 = G__32210;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32164){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32193 = f__5522__auto__.call(null);(statearr_32193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32194);
return statearr_32193;
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
