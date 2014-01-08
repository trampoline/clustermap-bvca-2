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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29513 = (function (f,fn_handler,meta29514){
this.f = f;
this.fn_handler = fn_handler;
this.meta29514 = meta29514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29513.cljs$lang$type = true;
cljs.core.async.t29513.cljs$lang$ctorStr = "cljs.core.async/t29513";
cljs.core.async.t29513.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29513");
});
cljs.core.async.t29513.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29515){var self__ = this;
var _29515__$1 = this;return self__.meta29514;
});
cljs.core.async.t29513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29515,meta29514__$1){var self__ = this;
var _29515__$1 = this;return (new cljs.core.async.t29513(self__.f,self__.fn_handler,meta29514__$1));
});
cljs.core.async.__GT_t29513 = (function __GT_t29513(f__$1,fn_handler__$1,meta29514){return (new cljs.core.async.t29513(f__$1,fn_handler__$1,meta29514));
});
}
return (new cljs.core.async.t29513(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29517 = buff;if(G__29517)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__29517.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29517.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29517);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29517);
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
{var val_29518 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29518);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_29518);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___29519 = n;var x_29520 = 0;while(true){
if((x_29520 < n__4248__auto___29519))
{(a[x_29520] = 0);
{
var G__29521 = (x_29520 + 1);
x_29520 = G__29521;
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
var G__29522 = (i + 1);
i = G__29522;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29526 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29526 = (function (flag,alt_flag,meta29527){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29527 = meta29527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29526.cljs$lang$type = true;
cljs.core.async.t29526.cljs$lang$ctorStr = "cljs.core.async/t29526";
cljs.core.async.t29526.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29526");
});
cljs.core.async.t29526.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29528){var self__ = this;
var _29528__$1 = this;return self__.meta29527;
});
cljs.core.async.t29526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29528,meta29527__$1){var self__ = this;
var _29528__$1 = this;return (new cljs.core.async.t29526(self__.flag,self__.alt_flag,meta29527__$1));
});
cljs.core.async.__GT_t29526 = (function __GT_t29526(flag__$1,alt_flag__$1,meta29527){return (new cljs.core.async.t29526(flag__$1,alt_flag__$1,meta29527));
});
}
return (new cljs.core.async.t29526(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29532 = (function (cb,flag,alt_handler,meta29533){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29533 = meta29533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29532.cljs$lang$type = true;
cljs.core.async.t29532.cljs$lang$ctorStr = "cljs.core.async/t29532";
cljs.core.async.t29532.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29532");
});
cljs.core.async.t29532.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29534){var self__ = this;
var _29534__$1 = this;return self__.meta29533;
});
cljs.core.async.t29532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29534,meta29533__$1){var self__ = this;
var _29534__$1 = this;return (new cljs.core.async.t29532(self__.cb,self__.flag,self__.alt_handler,meta29533__$1));
});
cljs.core.async.__GT_t29532 = (function __GT_t29532(cb__$1,flag__$1,alt_handler__$1,meta29533){return (new cljs.core.async.t29532(cb__$1,flag__$1,alt_handler__$1,meta29533));
});
}
return (new cljs.core.async.t29532(cb,flag,alt_handler,null));
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
return (function (p1__29535_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29535_SHARP_,port], null));
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
var G__29536 = (i + 1);
i = G__29536;
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
var alts_BANG___delegate = function (ports,p__29537){var map__29539 = p__29537;var map__29539__$1 = ((cljs.core.seq_QMARK_.call(null,map__29539))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);var opts = map__29539__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29537 = null;if (arguments.length > 1) {
  p__29537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29537);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29540){
var ports = cljs.core.first(arglist__29540);
var p__29537 = cljs.core.rest(arglist__29540);
return alts_BANG___delegate(ports,p__29537);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29548 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29548 = (function (ch,f,map_LT_,meta29549){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29549 = meta29549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29548.cljs$lang$type = true;
cljs.core.async.t29548.cljs$lang$ctorStr = "cljs.core.async/t29548";
cljs.core.async.t29548.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29548");
});
cljs.core.async.t29548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29551 = (function (fn1,_,meta29549,ch,f,map_LT_,meta29552){
this.fn1 = fn1;
this._ = _;
this.meta29549 = meta29549;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29552 = meta29552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29551.cljs$lang$type = true;
cljs.core.async.t29551.cljs$lang$ctorStr = "cljs.core.async/t29551";
cljs.core.async.t29551.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29551");
});
cljs.core.async.t29551.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29551.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29541_SHARP_){return f1.call(null,(((p1__29541_SHARP_ == null))?null:self__.f.call(null,p1__29541_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29553){var self__ = this;
var _29553__$1 = this;return self__.meta29552;
});
cljs.core.async.t29551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29553,meta29552__$1){var self__ = this;
var _29553__$1 = this;return (new cljs.core.async.t29551(self__.fn1,self__._,self__.meta29549,self__.ch,self__.f,self__.map_LT_,meta29552__$1));
});
cljs.core.async.__GT_t29551 = (function __GT_t29551(fn1__$1,___$2,meta29549__$1,ch__$2,f__$2,map_LT___$2,meta29552){return (new cljs.core.async.t29551(fn1__$1,___$2,meta29549__$1,ch__$2,f__$2,map_LT___$2,meta29552));
});
}
return (new cljs.core.async.t29551(fn1,___$1,self__.meta29549,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t29548.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29550){var self__ = this;
var _29550__$1 = this;return self__.meta29549;
});
cljs.core.async.t29548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29550,meta29549__$1){var self__ = this;
var _29550__$1 = this;return (new cljs.core.async.t29548(self__.ch,self__.f,self__.map_LT_,meta29549__$1));
});
cljs.core.async.__GT_t29548 = (function __GT_t29548(ch__$1,f__$1,map_LT___$1,meta29549){return (new cljs.core.async.t29548(ch__$1,f__$1,map_LT___$1,meta29549));
});
}
return (new cljs.core.async.t29548(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29557 = (function (ch,f,map_GT_,meta29558){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29558 = meta29558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29557.cljs$lang$type = true;
cljs.core.async.t29557.cljs$lang$ctorStr = "cljs.core.async/t29557";
cljs.core.async.t29557.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29557");
});
cljs.core.async.t29557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29557.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29559){var self__ = this;
var _29559__$1 = this;return self__.meta29558;
});
cljs.core.async.t29557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29559,meta29558__$1){var self__ = this;
var _29559__$1 = this;return (new cljs.core.async.t29557(self__.ch,self__.f,self__.map_GT_,meta29558__$1));
});
cljs.core.async.__GT_t29557 = (function __GT_t29557(ch__$1,f__$1,map_GT___$1,meta29558){return (new cljs.core.async.t29557(ch__$1,f__$1,map_GT___$1,meta29558));
});
}
return (new cljs.core.async.t29557(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29563 = (function (ch,p,filter_GT_,meta29564){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29564 = meta29564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29563.cljs$lang$type = true;
cljs.core.async.t29563.cljs$lang$ctorStr = "cljs.core.async/t29563";
cljs.core.async.t29563.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29563");
});
cljs.core.async.t29563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29563.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29565){var self__ = this;
var _29565__$1 = this;return self__.meta29564;
});
cljs.core.async.t29563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29565,meta29564__$1){var self__ = this;
var _29565__$1 = this;return (new cljs.core.async.t29563(self__.ch,self__.p,self__.filter_GT_,meta29564__$1));
});
cljs.core.async.__GT_t29563 = (function __GT_t29563(ch__$1,p__$1,filter_GT___$1,meta29564){return (new cljs.core.async.t29563(ch__$1,p__$1,filter_GT___$1,meta29564));
});
}
return (new cljs.core.async.t29563(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___29648 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29627){var state_val_29628 = (state_29627[1]);if((state_val_29628 === 1))
{var state_29627__$1 = state_29627;var statearr_29629_29649 = state_29627__$1;(statearr_29629_29649[2] = null);
(statearr_29629_29649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29628 === 2))
{var state_29627__$1 = state_29627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29627__$1,4,ch);
} else
{if((state_val_29628 === 3))
{var inst_29625 = (state_29627[2]);var state_29627__$1 = state_29627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29627__$1,inst_29625);
} else
{if((state_val_29628 === 4))
{var inst_29609 = (state_29627[7]);var inst_29609__$1 = (state_29627[2]);var inst_29610 = (inst_29609__$1 == null);var state_29627__$1 = (function (){var statearr_29630 = state_29627;(statearr_29630[7] = inst_29609__$1);
return statearr_29630;
})();if(cljs.core.truth_(inst_29610))
{var statearr_29631_29650 = state_29627__$1;(statearr_29631_29650[1] = 5);
} else
{var statearr_29632_29651 = state_29627__$1;(statearr_29632_29651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29628 === 5))
{var inst_29612 = cljs.core.async.close_BANG_.call(null,out);var state_29627__$1 = state_29627;var statearr_29633_29652 = state_29627__$1;(statearr_29633_29652[2] = inst_29612);
(statearr_29633_29652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29628 === 6))
{var inst_29609 = (state_29627[7]);var inst_29614 = p.call(null,inst_29609);var state_29627__$1 = state_29627;if(cljs.core.truth_(inst_29614))
{var statearr_29634_29653 = state_29627__$1;(statearr_29634_29653[1] = 8);
} else
{var statearr_29635_29654 = state_29627__$1;(statearr_29635_29654[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29628 === 7))
{var inst_29623 = (state_29627[2]);var state_29627__$1 = state_29627;var statearr_29636_29655 = state_29627__$1;(statearr_29636_29655[2] = inst_29623);
(statearr_29636_29655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29628 === 8))
{var inst_29609 = (state_29627[7]);var state_29627__$1 = state_29627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29627__$1,11,out,inst_29609);
} else
{if((state_val_29628 === 9))
{var state_29627__$1 = state_29627;var statearr_29637_29656 = state_29627__$1;(statearr_29637_29656[2] = null);
(statearr_29637_29656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29628 === 10))
{var inst_29620 = (state_29627[2]);var state_29627__$1 = (function (){var statearr_29638 = state_29627;(statearr_29638[8] = inst_29620);
return statearr_29638;
})();var statearr_29639_29657 = state_29627__$1;(statearr_29639_29657[2] = null);
(statearr_29639_29657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29628 === 11))
{var inst_29617 = (state_29627[2]);var state_29627__$1 = state_29627;var statearr_29640_29658 = state_29627__$1;(statearr_29640_29658[2] = inst_29617);
(statearr_29640_29658[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29644 = [null,null,null,null,null,null,null,null,null];(statearr_29644[0] = state_machine__5507__auto__);
(statearr_29644[1] = 1);
return statearr_29644;
});
var state_machine__5507__auto____1 = (function (state_29627){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29627);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29645){if((e29645 instanceof Object))
{var ex__5510__auto__ = e29645;var statearr_29646_29659 = state_29627;(statearr_29646_29659[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29660 = state_29627;
state_29627 = G__29660;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29627){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29647 = f__5522__auto__.call(null);(statearr_29647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29648);
return statearr_29647;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29812){var state_val_29813 = (state_29812[1]);if((state_val_29813 === 1))
{var state_29812__$1 = state_29812;var statearr_29814_29851 = state_29812__$1;(statearr_29814_29851[2] = null);
(statearr_29814_29851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 2))
{var state_29812__$1 = state_29812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29812__$1,4,in$);
} else
{if((state_val_29813 === 3))
{var inst_29810 = (state_29812[2]);var state_29812__$1 = state_29812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29812__$1,inst_29810);
} else
{if((state_val_29813 === 4))
{var inst_29758 = (state_29812[7]);var inst_29758__$1 = (state_29812[2]);var inst_29759 = (inst_29758__$1 == null);var state_29812__$1 = (function (){var statearr_29815 = state_29812;(statearr_29815[7] = inst_29758__$1);
return statearr_29815;
})();if(cljs.core.truth_(inst_29759))
{var statearr_29816_29852 = state_29812__$1;(statearr_29816_29852[1] = 5);
} else
{var statearr_29817_29853 = state_29812__$1;(statearr_29817_29853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 5))
{var inst_29761 = cljs.core.async.close_BANG_.call(null,out);var state_29812__$1 = state_29812;var statearr_29818_29854 = state_29812__$1;(statearr_29818_29854[2] = inst_29761);
(statearr_29818_29854[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 6))
{var inst_29758 = (state_29812[7]);var inst_29763 = f.call(null,inst_29758);var inst_29768 = cljs.core.seq.call(null,inst_29763);var inst_29769 = inst_29768;var inst_29770 = null;var inst_29771 = 0;var inst_29772 = 0;var state_29812__$1 = (function (){var statearr_29819 = state_29812;(statearr_29819[8] = inst_29771);
(statearr_29819[9] = inst_29770);
(statearr_29819[10] = inst_29772);
(statearr_29819[11] = inst_29769);
return statearr_29819;
})();var statearr_29820_29855 = state_29812__$1;(statearr_29820_29855[2] = null);
(statearr_29820_29855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 7))
{var inst_29808 = (state_29812[2]);var state_29812__$1 = state_29812;var statearr_29821_29856 = state_29812__$1;(statearr_29821_29856[2] = inst_29808);
(statearr_29821_29856[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 8))
{var inst_29771 = (state_29812[8]);var inst_29772 = (state_29812[10]);var inst_29774 = (inst_29772 < inst_29771);var inst_29775 = inst_29774;var state_29812__$1 = state_29812;if(cljs.core.truth_(inst_29775))
{var statearr_29822_29857 = state_29812__$1;(statearr_29822_29857[1] = 10);
} else
{var statearr_29823_29858 = state_29812__$1;(statearr_29823_29858[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 9))
{var inst_29805 = (state_29812[2]);var state_29812__$1 = (function (){var statearr_29824 = state_29812;(statearr_29824[12] = inst_29805);
return statearr_29824;
})();var statearr_29825_29859 = state_29812__$1;(statearr_29825_29859[2] = null);
(statearr_29825_29859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 10))
{var inst_29770 = (state_29812[9]);var inst_29772 = (state_29812[10]);var inst_29777 = cljs.core._nth.call(null,inst_29770,inst_29772);var state_29812__$1 = state_29812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29812__$1,13,out,inst_29777);
} else
{if((state_val_29813 === 11))
{var inst_29783 = (state_29812[13]);var inst_29769 = (state_29812[11]);var inst_29783__$1 = cljs.core.seq.call(null,inst_29769);var state_29812__$1 = (function (){var statearr_29829 = state_29812;(statearr_29829[13] = inst_29783__$1);
return statearr_29829;
})();if(inst_29783__$1)
{var statearr_29830_29860 = state_29812__$1;(statearr_29830_29860[1] = 14);
} else
{var statearr_29831_29861 = state_29812__$1;(statearr_29831_29861[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 12))
{var inst_29803 = (state_29812[2]);var state_29812__$1 = state_29812;var statearr_29832_29862 = state_29812__$1;(statearr_29832_29862[2] = inst_29803);
(statearr_29832_29862[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 13))
{var inst_29771 = (state_29812[8]);var inst_29770 = (state_29812[9]);var inst_29772 = (state_29812[10]);var inst_29769 = (state_29812[11]);var inst_29779 = (state_29812[2]);var inst_29780 = (inst_29772 + 1);var tmp29826 = inst_29771;var tmp29827 = inst_29770;var tmp29828 = inst_29769;var inst_29769__$1 = tmp29828;var inst_29770__$1 = tmp29827;var inst_29771__$1 = tmp29826;var inst_29772__$1 = inst_29780;var state_29812__$1 = (function (){var statearr_29833 = state_29812;(statearr_29833[8] = inst_29771__$1);
(statearr_29833[9] = inst_29770__$1);
(statearr_29833[10] = inst_29772__$1);
(statearr_29833[14] = inst_29779);
(statearr_29833[11] = inst_29769__$1);
return statearr_29833;
})();var statearr_29834_29863 = state_29812__$1;(statearr_29834_29863[2] = null);
(statearr_29834_29863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 14))
{var inst_29783 = (state_29812[13]);var inst_29785 = cljs.core.chunked_seq_QMARK_.call(null,inst_29783);var state_29812__$1 = state_29812;if(inst_29785)
{var statearr_29835_29864 = state_29812__$1;(statearr_29835_29864[1] = 17);
} else
{var statearr_29836_29865 = state_29812__$1;(statearr_29836_29865[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 15))
{var state_29812__$1 = state_29812;var statearr_29837_29866 = state_29812__$1;(statearr_29837_29866[2] = null);
(statearr_29837_29866[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 16))
{var inst_29801 = (state_29812[2]);var state_29812__$1 = state_29812;var statearr_29838_29867 = state_29812__$1;(statearr_29838_29867[2] = inst_29801);
(statearr_29838_29867[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 17))
{var inst_29783 = (state_29812[13]);var inst_29787 = cljs.core.chunk_first.call(null,inst_29783);var inst_29788 = cljs.core.chunk_rest.call(null,inst_29783);var inst_29789 = cljs.core.count.call(null,inst_29787);var inst_29769 = inst_29788;var inst_29770 = inst_29787;var inst_29771 = inst_29789;var inst_29772 = 0;var state_29812__$1 = (function (){var statearr_29839 = state_29812;(statearr_29839[8] = inst_29771);
(statearr_29839[9] = inst_29770);
(statearr_29839[10] = inst_29772);
(statearr_29839[11] = inst_29769);
return statearr_29839;
})();var statearr_29840_29868 = state_29812__$1;(statearr_29840_29868[2] = null);
(statearr_29840_29868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 18))
{var inst_29783 = (state_29812[13]);var inst_29792 = cljs.core.first.call(null,inst_29783);var state_29812__$1 = state_29812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29812__$1,20,out,inst_29792);
} else
{if((state_val_29813 === 19))
{var inst_29798 = (state_29812[2]);var state_29812__$1 = state_29812;var statearr_29841_29869 = state_29812__$1;(statearr_29841_29869[2] = inst_29798);
(statearr_29841_29869[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29813 === 20))
{var inst_29783 = (state_29812[13]);var inst_29794 = (state_29812[2]);var inst_29795 = cljs.core.next.call(null,inst_29783);var inst_29769 = inst_29795;var inst_29770 = null;var inst_29771 = 0;var inst_29772 = 0;var state_29812__$1 = (function (){var statearr_29842 = state_29812;(statearr_29842[8] = inst_29771);
(statearr_29842[9] = inst_29770);
(statearr_29842[10] = inst_29772);
(statearr_29842[11] = inst_29769);
(statearr_29842[15] = inst_29794);
return statearr_29842;
})();var statearr_29843_29870 = state_29812__$1;(statearr_29843_29870[2] = null);
(statearr_29843_29870[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_29847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29847[0] = state_machine__5507__auto__);
(statearr_29847[1] = 1);
return statearr_29847;
});
var state_machine__5507__auto____1 = (function (state_29812){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29812);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29848){if((e29848 instanceof Object))
{var ex__5510__auto__ = e29848;var statearr_29849_29871 = state_29812;(statearr_29849_29871[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29872 = state_29812;
state_29812 = G__29872;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29812){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29850 = f__5522__auto__.call(null);(statearr_29850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29850;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___29953 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29932){var state_val_29933 = (state_29932[1]);if((state_val_29933 === 1))
{var state_29932__$1 = state_29932;var statearr_29934_29954 = state_29932__$1;(statearr_29934_29954[2] = null);
(statearr_29934_29954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29933 === 2))
{var state_29932__$1 = state_29932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29932__$1,4,from);
} else
{if((state_val_29933 === 3))
{var inst_29930 = (state_29932[2]);var state_29932__$1 = state_29932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29932__$1,inst_29930);
} else
{if((state_val_29933 === 4))
{var inst_29915 = (state_29932[7]);var inst_29915__$1 = (state_29932[2]);var inst_29916 = (inst_29915__$1 == null);var state_29932__$1 = (function (){var statearr_29935 = state_29932;(statearr_29935[7] = inst_29915__$1);
return statearr_29935;
})();if(cljs.core.truth_(inst_29916))
{var statearr_29936_29955 = state_29932__$1;(statearr_29936_29955[1] = 5);
} else
{var statearr_29937_29956 = state_29932__$1;(statearr_29937_29956[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29933 === 5))
{var state_29932__$1 = state_29932;if(cljs.core.truth_(close_QMARK_))
{var statearr_29938_29957 = state_29932__$1;(statearr_29938_29957[1] = 8);
} else
{var statearr_29939_29958 = state_29932__$1;(statearr_29939_29958[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29933 === 6))
{var inst_29915 = (state_29932[7]);var state_29932__$1 = state_29932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29932__$1,11,to,inst_29915);
} else
{if((state_val_29933 === 7))
{var inst_29928 = (state_29932[2]);var state_29932__$1 = state_29932;var statearr_29940_29959 = state_29932__$1;(statearr_29940_29959[2] = inst_29928);
(statearr_29940_29959[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29933 === 8))
{var inst_29919 = cljs.core.async.close_BANG_.call(null,to);var state_29932__$1 = state_29932;var statearr_29941_29960 = state_29932__$1;(statearr_29941_29960[2] = inst_29919);
(statearr_29941_29960[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29933 === 9))
{var state_29932__$1 = state_29932;var statearr_29942_29961 = state_29932__$1;(statearr_29942_29961[2] = null);
(statearr_29942_29961[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29933 === 10))
{var inst_29922 = (state_29932[2]);var state_29932__$1 = state_29932;var statearr_29943_29962 = state_29932__$1;(statearr_29943_29962[2] = inst_29922);
(statearr_29943_29962[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29933 === 11))
{var inst_29925 = (state_29932[2]);var state_29932__$1 = (function (){var statearr_29944 = state_29932;(statearr_29944[8] = inst_29925);
return statearr_29944;
})();var statearr_29945_29963 = state_29932__$1;(statearr_29945_29963[2] = null);
(statearr_29945_29963[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_29949 = [null,null,null,null,null,null,null,null,null];(statearr_29949[0] = state_machine__5507__auto__);
(statearr_29949[1] = 1);
return statearr_29949;
});
var state_machine__5507__auto____1 = (function (state_29932){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29932);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29950){if((e29950 instanceof Object))
{var ex__5510__auto__ = e29950;var statearr_29951_29964 = state_29932;(statearr_29951_29964[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29965 = state_29932;
state_29932 = G__29965;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29932){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29952 = f__5522__auto__.call(null);(statearr_29952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29953);
return statearr_29952;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___30052 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30030){var state_val_30031 = (state_30030[1]);if((state_val_30031 === 1))
{var state_30030__$1 = state_30030;var statearr_30032_30053 = state_30030__$1;(statearr_30032_30053[2] = null);
(statearr_30032_30053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 2))
{var state_30030__$1 = state_30030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30030__$1,4,ch);
} else
{if((state_val_30031 === 3))
{var inst_30028 = (state_30030[2]);var state_30030__$1 = state_30030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30030__$1,inst_30028);
} else
{if((state_val_30031 === 4))
{var inst_30011 = (state_30030[7]);var inst_30011__$1 = (state_30030[2]);var inst_30012 = (inst_30011__$1 == null);var state_30030__$1 = (function (){var statearr_30033 = state_30030;(statearr_30033[7] = inst_30011__$1);
return statearr_30033;
})();if(cljs.core.truth_(inst_30012))
{var statearr_30034_30054 = state_30030__$1;(statearr_30034_30054[1] = 5);
} else
{var statearr_30035_30055 = state_30030__$1;(statearr_30035_30055[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 5))
{var inst_30014 = cljs.core.async.close_BANG_.call(null,tc);var inst_30015 = cljs.core.async.close_BANG_.call(null,fc);var state_30030__$1 = (function (){var statearr_30036 = state_30030;(statearr_30036[8] = inst_30014);
return statearr_30036;
})();var statearr_30037_30056 = state_30030__$1;(statearr_30037_30056[2] = inst_30015);
(statearr_30037_30056[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 6))
{var inst_30011 = (state_30030[7]);var inst_30017 = p.call(null,inst_30011);var state_30030__$1 = state_30030;if(cljs.core.truth_(inst_30017))
{var statearr_30038_30057 = state_30030__$1;(statearr_30038_30057[1] = 9);
} else
{var statearr_30039_30058 = state_30030__$1;(statearr_30039_30058[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 7))
{var inst_30026 = (state_30030[2]);var state_30030__$1 = state_30030;var statearr_30040_30059 = state_30030__$1;(statearr_30040_30059[2] = inst_30026);
(statearr_30040_30059[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 8))
{var inst_30023 = (state_30030[2]);var state_30030__$1 = (function (){var statearr_30041 = state_30030;(statearr_30041[9] = inst_30023);
return statearr_30041;
})();var statearr_30042_30060 = state_30030__$1;(statearr_30042_30060[2] = null);
(statearr_30042_30060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 9))
{var state_30030__$1 = state_30030;var statearr_30043_30061 = state_30030__$1;(statearr_30043_30061[2] = tc);
(statearr_30043_30061[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 10))
{var state_30030__$1 = state_30030;var statearr_30044_30062 = state_30030__$1;(statearr_30044_30062[2] = fc);
(statearr_30044_30062[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30031 === 11))
{var inst_30011 = (state_30030[7]);var inst_30021 = (state_30030[2]);var state_30030__$1 = state_30030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30030__$1,8,inst_30021,inst_30011);
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
var state_machine__5507__auto____0 = (function (){var statearr_30048 = [null,null,null,null,null,null,null,null,null,null];(statearr_30048[0] = state_machine__5507__auto__);
(statearr_30048[1] = 1);
return statearr_30048;
});
var state_machine__5507__auto____1 = (function (state_30030){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30030);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30049){if((e30049 instanceof Object))
{var ex__5510__auto__ = e30049;var statearr_30050_30063 = state_30030;(statearr_30050_30063[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30030);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30064 = state_30030;
state_30030 = G__30064;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30030){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30051 = f__5522__auto__.call(null);(statearr_30051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30052);
return statearr_30051;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30111){var state_val_30112 = (state_30111[1]);if((state_val_30112 === 7))
{var inst_30107 = (state_30111[2]);var state_30111__$1 = state_30111;var statearr_30113_30129 = state_30111__$1;(statearr_30113_30129[2] = inst_30107);
(statearr_30113_30129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30112 === 6))
{var inst_30097 = (state_30111[7]);var inst_30100 = (state_30111[8]);var inst_30104 = f.call(null,inst_30097,inst_30100);var inst_30097__$1 = inst_30104;var state_30111__$1 = (function (){var statearr_30114 = state_30111;(statearr_30114[7] = inst_30097__$1);
return statearr_30114;
})();var statearr_30115_30130 = state_30111__$1;(statearr_30115_30130[2] = null);
(statearr_30115_30130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30112 === 5))
{var inst_30097 = (state_30111[7]);var state_30111__$1 = state_30111;var statearr_30116_30131 = state_30111__$1;(statearr_30116_30131[2] = inst_30097);
(statearr_30116_30131[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30112 === 4))
{var inst_30100 = (state_30111[8]);var inst_30100__$1 = (state_30111[2]);var inst_30101 = (inst_30100__$1 == null);var state_30111__$1 = (function (){var statearr_30117 = state_30111;(statearr_30117[8] = inst_30100__$1);
return statearr_30117;
})();if(cljs.core.truth_(inst_30101))
{var statearr_30118_30132 = state_30111__$1;(statearr_30118_30132[1] = 5);
} else
{var statearr_30119_30133 = state_30111__$1;(statearr_30119_30133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30112 === 3))
{var inst_30109 = (state_30111[2]);var state_30111__$1 = state_30111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30111__$1,inst_30109);
} else
{if((state_val_30112 === 2))
{var state_30111__$1 = state_30111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30111__$1,4,ch);
} else
{if((state_val_30112 === 1))
{var inst_30097 = init;var state_30111__$1 = (function (){var statearr_30120 = state_30111;(statearr_30120[7] = inst_30097);
return statearr_30120;
})();var statearr_30121_30134 = state_30111__$1;(statearr_30121_30134[2] = null);
(statearr_30121_30134[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30125 = [null,null,null,null,null,null,null,null,null];(statearr_30125[0] = state_machine__5507__auto__);
(statearr_30125[1] = 1);
return statearr_30125;
});
var state_machine__5507__auto____1 = (function (state_30111){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30126){if((e30126 instanceof Object))
{var ex__5510__auto__ = e30126;var statearr_30127_30135 = state_30111;(statearr_30127_30135[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30136 = state_30111;
state_30111 = G__30136;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30111){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30128 = f__5522__auto__.call(null);(statearr_30128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30128;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30198){var state_val_30199 = (state_30198[1]);if((state_val_30199 === 1))
{var inst_30178 = cljs.core.seq.call(null,coll);var inst_30179 = inst_30178;var state_30198__$1 = (function (){var statearr_30200 = state_30198;(statearr_30200[7] = inst_30179);
return statearr_30200;
})();var statearr_30201_30219 = state_30198__$1;(statearr_30201_30219[2] = null);
(statearr_30201_30219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30199 === 2))
{var inst_30179 = (state_30198[7]);var state_30198__$1 = state_30198;if(cljs.core.truth_(inst_30179))
{var statearr_30202_30220 = state_30198__$1;(statearr_30202_30220[1] = 4);
} else
{var statearr_30203_30221 = state_30198__$1;(statearr_30203_30221[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30199 === 3))
{var inst_30196 = (state_30198[2]);var state_30198__$1 = state_30198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30198__$1,inst_30196);
} else
{if((state_val_30199 === 4))
{var inst_30179 = (state_30198[7]);var inst_30182 = cljs.core.first.call(null,inst_30179);var state_30198__$1 = state_30198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30198__$1,7,ch,inst_30182);
} else
{if((state_val_30199 === 5))
{var state_30198__$1 = state_30198;if(cljs.core.truth_(close_QMARK_))
{var statearr_30204_30222 = state_30198__$1;(statearr_30204_30222[1] = 8);
} else
{var statearr_30205_30223 = state_30198__$1;(statearr_30205_30223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30199 === 6))
{var inst_30194 = (state_30198[2]);var state_30198__$1 = state_30198;var statearr_30206_30224 = state_30198__$1;(statearr_30206_30224[2] = inst_30194);
(statearr_30206_30224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30199 === 7))
{var inst_30179 = (state_30198[7]);var inst_30184 = (state_30198[2]);var inst_30185 = cljs.core.next.call(null,inst_30179);var inst_30179__$1 = inst_30185;var state_30198__$1 = (function (){var statearr_30207 = state_30198;(statearr_30207[8] = inst_30184);
(statearr_30207[7] = inst_30179__$1);
return statearr_30207;
})();var statearr_30208_30225 = state_30198__$1;(statearr_30208_30225[2] = null);
(statearr_30208_30225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30199 === 8))
{var inst_30189 = cljs.core.async.close_BANG_.call(null,ch);var state_30198__$1 = state_30198;var statearr_30209_30226 = state_30198__$1;(statearr_30209_30226[2] = inst_30189);
(statearr_30209_30226[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30199 === 9))
{var state_30198__$1 = state_30198;var statearr_30210_30227 = state_30198__$1;(statearr_30210_30227[2] = null);
(statearr_30210_30227[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30199 === 10))
{var inst_30192 = (state_30198[2]);var state_30198__$1 = state_30198;var statearr_30211_30228 = state_30198__$1;(statearr_30211_30228[2] = inst_30192);
(statearr_30211_30228[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_30215 = [null,null,null,null,null,null,null,null,null];(statearr_30215[0] = state_machine__5507__auto__);
(statearr_30215[1] = 1);
return statearr_30215;
});
var state_machine__5507__auto____1 = (function (state_30198){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30198);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30216){if((e30216 instanceof Object))
{var ex__5510__auto__ = e30216;var statearr_30217_30229 = state_30198;(statearr_30217_30229[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30230 = state_30198;
state_30198 = G__30230;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30198){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30218 = f__5522__auto__.call(null);(statearr_30218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30218;
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
cljs.core.async.Mux = (function (){var obj30232 = {};return obj30232;
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
cljs.core.async.Mult = (function (){var obj30234 = {};return obj30234;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30458 = (function (cs,ch,mult,meta30459){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30459 = meta30459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30458.cljs$lang$type = true;
cljs.core.async.t30458.cljs$lang$ctorStr = "cljs.core.async/t30458";
cljs.core.async.t30458.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30458");
});})(cs))
;
cljs.core.async.t30458.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30458.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30458.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30458.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30458.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30460){var self__ = this;
var _30460__$1 = this;return self__.meta30459;
});})(cs))
;
cljs.core.async.t30458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30460,meta30459__$1){var self__ = this;
var _30460__$1 = this;return (new cljs.core.async.t30458(self__.cs,self__.ch,self__.mult,meta30459__$1));
});})(cs))
;
cljs.core.async.__GT_t30458 = ((function (cs){
return (function __GT_t30458(cs__$1,ch__$1,mult__$1,meta30459){return (new cljs.core.async.t30458(cs__$1,ch__$1,mult__$1,meta30459));
});})(cs))
;
}
return (new cljs.core.async.t30458(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___30681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30595){var state_val_30596 = (state_30595[1]);if((state_val_30596 === 32))
{var inst_30539 = (state_30595[7]);var inst_30463 = (state_30595[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30595,31,Object,null,30);var inst_30546 = cljs.core.async.put_BANG_.call(null,inst_30539,inst_30463,done);var state_30595__$1 = state_30595;var statearr_30597_30682 = state_30595__$1;(statearr_30597_30682[2] = inst_30546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 1))
{var state_30595__$1 = state_30595;var statearr_30598_30683 = state_30595__$1;(statearr_30598_30683[2] = null);
(statearr_30598_30683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 33))
{var inst_30552 = (state_30595[9]);var inst_30554 = cljs.core.chunked_seq_QMARK_.call(null,inst_30552);var state_30595__$1 = state_30595;if(inst_30554)
{var statearr_30599_30684 = state_30595__$1;(statearr_30599_30684[1] = 36);
} else
{var statearr_30600_30685 = state_30595__$1;(statearr_30600_30685[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 2))
{var state_30595__$1 = state_30595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30595__$1,4,ch);
} else
{if((state_val_30596 === 34))
{var state_30595__$1 = state_30595;var statearr_30601_30686 = state_30595__$1;(statearr_30601_30686[2] = null);
(statearr_30601_30686[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 3))
{var inst_30593 = (state_30595[2]);var state_30595__$1 = state_30595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30595__$1,inst_30593);
} else
{if((state_val_30596 === 35))
{var inst_30577 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30602_30687 = state_30595__$1;(statearr_30602_30687[2] = inst_30577);
(statearr_30602_30687[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 4))
{var inst_30463 = (state_30595[8]);var inst_30463__$1 = (state_30595[2]);var inst_30464 = (inst_30463__$1 == null);var state_30595__$1 = (function (){var statearr_30603 = state_30595;(statearr_30603[8] = inst_30463__$1);
return statearr_30603;
})();if(cljs.core.truth_(inst_30464))
{var statearr_30604_30688 = state_30595__$1;(statearr_30604_30688[1] = 5);
} else
{var statearr_30605_30689 = state_30595__$1;(statearr_30605_30689[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 36))
{var inst_30552 = (state_30595[9]);var inst_30556 = cljs.core.chunk_first.call(null,inst_30552);var inst_30557 = cljs.core.chunk_rest.call(null,inst_30552);var inst_30558 = cljs.core.count.call(null,inst_30556);var inst_30531 = inst_30557;var inst_30532 = inst_30556;var inst_30533 = inst_30558;var inst_30534 = 0;var state_30595__$1 = (function (){var statearr_30606 = state_30595;(statearr_30606[10] = inst_30534);
(statearr_30606[11] = inst_30531);
(statearr_30606[12] = inst_30532);
(statearr_30606[13] = inst_30533);
return statearr_30606;
})();var statearr_30607_30690 = state_30595__$1;(statearr_30607_30690[2] = null);
(statearr_30607_30690[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 5))
{var inst_30470 = cljs.core.deref.call(null,cs);var inst_30471 = cljs.core.seq.call(null,inst_30470);var inst_30472 = inst_30471;var inst_30473 = null;var inst_30474 = 0;var inst_30475 = 0;var state_30595__$1 = (function (){var statearr_30608 = state_30595;(statearr_30608[14] = inst_30475);
(statearr_30608[15] = inst_30474);
(statearr_30608[16] = inst_30473);
(statearr_30608[17] = inst_30472);
return statearr_30608;
})();var statearr_30609_30691 = state_30595__$1;(statearr_30609_30691[2] = null);
(statearr_30609_30691[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 37))
{var inst_30552 = (state_30595[9]);var inst_30561 = cljs.core.first.call(null,inst_30552);var state_30595__$1 = (function (){var statearr_30610 = state_30595;(statearr_30610[18] = inst_30561);
return statearr_30610;
})();var statearr_30611_30692 = state_30595__$1;(statearr_30611_30692[2] = null);
(statearr_30611_30692[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 6))
{var inst_30523 = (state_30595[19]);var inst_30522 = cljs.core.deref.call(null,cs);var inst_30523__$1 = cljs.core.keys.call(null,inst_30522);var inst_30524 = cljs.core.count.call(null,inst_30523__$1);var inst_30525 = cljs.core.reset_BANG_.call(null,dctr,inst_30524);var inst_30530 = cljs.core.seq.call(null,inst_30523__$1);var inst_30531 = inst_30530;var inst_30532 = null;var inst_30533 = 0;var inst_30534 = 0;var state_30595__$1 = (function (){var statearr_30612 = state_30595;(statearr_30612[10] = inst_30534);
(statearr_30612[19] = inst_30523__$1);
(statearr_30612[20] = inst_30525);
(statearr_30612[11] = inst_30531);
(statearr_30612[12] = inst_30532);
(statearr_30612[13] = inst_30533);
return statearr_30612;
})();var statearr_30613_30693 = state_30595__$1;(statearr_30613_30693[2] = null);
(statearr_30613_30693[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 38))
{var inst_30574 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30614_30694 = state_30595__$1;(statearr_30614_30694[2] = inst_30574);
(statearr_30614_30694[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 7))
{var inst_30591 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30615_30695 = state_30595__$1;(statearr_30615_30695[2] = inst_30591);
(statearr_30615_30695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 39))
{var inst_30552 = (state_30595[9]);var inst_30570 = (state_30595[2]);var inst_30571 = cljs.core.next.call(null,inst_30552);var inst_30531 = inst_30571;var inst_30532 = null;var inst_30533 = 0;var inst_30534 = 0;var state_30595__$1 = (function (){var statearr_30616 = state_30595;(statearr_30616[10] = inst_30534);
(statearr_30616[21] = inst_30570);
(statearr_30616[11] = inst_30531);
(statearr_30616[12] = inst_30532);
(statearr_30616[13] = inst_30533);
return statearr_30616;
})();var statearr_30617_30696 = state_30595__$1;(statearr_30617_30696[2] = null);
(statearr_30617_30696[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 8))
{var inst_30475 = (state_30595[14]);var inst_30474 = (state_30595[15]);var inst_30477 = (inst_30475 < inst_30474);var inst_30478 = inst_30477;var state_30595__$1 = state_30595;if(cljs.core.truth_(inst_30478))
{var statearr_30618_30697 = state_30595__$1;(statearr_30618_30697[1] = 10);
} else
{var statearr_30619_30698 = state_30595__$1;(statearr_30619_30698[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 40))
{var inst_30561 = (state_30595[18]);var inst_30562 = (state_30595[2]);var inst_30563 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30564 = cljs.core.async.untap_STAR_.call(null,m,inst_30561);var state_30595__$1 = (function (){var statearr_30620 = state_30595;(statearr_30620[22] = inst_30563);
(statearr_30620[23] = inst_30562);
return statearr_30620;
})();var statearr_30621_30699 = state_30595__$1;(statearr_30621_30699[2] = inst_30564);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 9))
{var inst_30520 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30622_30700 = state_30595__$1;(statearr_30622_30700[2] = inst_30520);
(statearr_30622_30700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 41))
{var inst_30561 = (state_30595[18]);var inst_30463 = (state_30595[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30595,40,Object,null,39);var inst_30568 = cljs.core.async.put_BANG_.call(null,inst_30561,inst_30463,done);var state_30595__$1 = state_30595;var statearr_30623_30701 = state_30595__$1;(statearr_30623_30701[2] = inst_30568);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 10))
{var inst_30475 = (state_30595[14]);var inst_30473 = (state_30595[16]);var inst_30481 = cljs.core._nth.call(null,inst_30473,inst_30475);var inst_30482 = cljs.core.nth.call(null,inst_30481,0,null);var inst_30483 = cljs.core.nth.call(null,inst_30481,1,null);var state_30595__$1 = (function (){var statearr_30624 = state_30595;(statearr_30624[24] = inst_30482);
return statearr_30624;
})();if(cljs.core.truth_(inst_30483))
{var statearr_30625_30702 = state_30595__$1;(statearr_30625_30702[1] = 13);
} else
{var statearr_30626_30703 = state_30595__$1;(statearr_30626_30703[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 42))
{var state_30595__$1 = state_30595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30595__$1,45,dchan);
} else
{if((state_val_30596 === 11))
{var inst_30492 = (state_30595[25]);var inst_30472 = (state_30595[17]);var inst_30492__$1 = cljs.core.seq.call(null,inst_30472);var state_30595__$1 = (function (){var statearr_30627 = state_30595;(statearr_30627[25] = inst_30492__$1);
return statearr_30627;
})();if(inst_30492__$1)
{var statearr_30628_30704 = state_30595__$1;(statearr_30628_30704[1] = 16);
} else
{var statearr_30629_30705 = state_30595__$1;(statearr_30629_30705[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 43))
{var state_30595__$1 = state_30595;var statearr_30630_30706 = state_30595__$1;(statearr_30630_30706[2] = null);
(statearr_30630_30706[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 12))
{var inst_30518 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30631_30707 = state_30595__$1;(statearr_30631_30707[2] = inst_30518);
(statearr_30631_30707[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 44))
{var inst_30588 = (state_30595[2]);var state_30595__$1 = (function (){var statearr_30632 = state_30595;(statearr_30632[26] = inst_30588);
return statearr_30632;
})();var statearr_30633_30708 = state_30595__$1;(statearr_30633_30708[2] = null);
(statearr_30633_30708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 13))
{var inst_30482 = (state_30595[24]);var inst_30485 = cljs.core.async.close_BANG_.call(null,inst_30482);var state_30595__$1 = state_30595;var statearr_30634_30709 = state_30595__$1;(statearr_30634_30709[2] = inst_30485);
(statearr_30634_30709[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 45))
{var inst_30585 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30638_30710 = state_30595__$1;(statearr_30638_30710[2] = inst_30585);
(statearr_30638_30710[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 14))
{var state_30595__$1 = state_30595;var statearr_30639_30711 = state_30595__$1;(statearr_30639_30711[2] = null);
(statearr_30639_30711[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 15))
{var inst_30475 = (state_30595[14]);var inst_30474 = (state_30595[15]);var inst_30473 = (state_30595[16]);var inst_30472 = (state_30595[17]);var inst_30488 = (state_30595[2]);var inst_30489 = (inst_30475 + 1);var tmp30635 = inst_30474;var tmp30636 = inst_30473;var tmp30637 = inst_30472;var inst_30472__$1 = tmp30637;var inst_30473__$1 = tmp30636;var inst_30474__$1 = tmp30635;var inst_30475__$1 = inst_30489;var state_30595__$1 = (function (){var statearr_30640 = state_30595;(statearr_30640[27] = inst_30488);
(statearr_30640[14] = inst_30475__$1);
(statearr_30640[15] = inst_30474__$1);
(statearr_30640[16] = inst_30473__$1);
(statearr_30640[17] = inst_30472__$1);
return statearr_30640;
})();var statearr_30641_30712 = state_30595__$1;(statearr_30641_30712[2] = null);
(statearr_30641_30712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 16))
{var inst_30492 = (state_30595[25]);var inst_30494 = cljs.core.chunked_seq_QMARK_.call(null,inst_30492);var state_30595__$1 = state_30595;if(inst_30494)
{var statearr_30642_30713 = state_30595__$1;(statearr_30642_30713[1] = 19);
} else
{var statearr_30643_30714 = state_30595__$1;(statearr_30643_30714[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 17))
{var state_30595__$1 = state_30595;var statearr_30644_30715 = state_30595__$1;(statearr_30644_30715[2] = null);
(statearr_30644_30715[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 18))
{var inst_30516 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30645_30716 = state_30595__$1;(statearr_30645_30716[2] = inst_30516);
(statearr_30645_30716[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 19))
{var inst_30492 = (state_30595[25]);var inst_30496 = cljs.core.chunk_first.call(null,inst_30492);var inst_30497 = cljs.core.chunk_rest.call(null,inst_30492);var inst_30498 = cljs.core.count.call(null,inst_30496);var inst_30472 = inst_30497;var inst_30473 = inst_30496;var inst_30474 = inst_30498;var inst_30475 = 0;var state_30595__$1 = (function (){var statearr_30646 = state_30595;(statearr_30646[14] = inst_30475);
(statearr_30646[15] = inst_30474);
(statearr_30646[16] = inst_30473);
(statearr_30646[17] = inst_30472);
return statearr_30646;
})();var statearr_30647_30717 = state_30595__$1;(statearr_30647_30717[2] = null);
(statearr_30647_30717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 20))
{var inst_30492 = (state_30595[25]);var inst_30502 = cljs.core.first.call(null,inst_30492);var inst_30503 = cljs.core.nth.call(null,inst_30502,0,null);var inst_30504 = cljs.core.nth.call(null,inst_30502,1,null);var state_30595__$1 = (function (){var statearr_30648 = state_30595;(statearr_30648[28] = inst_30503);
return statearr_30648;
})();if(cljs.core.truth_(inst_30504))
{var statearr_30649_30718 = state_30595__$1;(statearr_30649_30718[1] = 22);
} else
{var statearr_30650_30719 = state_30595__$1;(statearr_30650_30719[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 21))
{var inst_30513 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30651_30720 = state_30595__$1;(statearr_30651_30720[2] = inst_30513);
(statearr_30651_30720[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 22))
{var inst_30503 = (state_30595[28]);var inst_30506 = cljs.core.async.close_BANG_.call(null,inst_30503);var state_30595__$1 = state_30595;var statearr_30652_30721 = state_30595__$1;(statearr_30652_30721[2] = inst_30506);
(statearr_30652_30721[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 23))
{var state_30595__$1 = state_30595;var statearr_30653_30722 = state_30595__$1;(statearr_30653_30722[2] = null);
(statearr_30653_30722[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 24))
{var inst_30492 = (state_30595[25]);var inst_30509 = (state_30595[2]);var inst_30510 = cljs.core.next.call(null,inst_30492);var inst_30472 = inst_30510;var inst_30473 = null;var inst_30474 = 0;var inst_30475 = 0;var state_30595__$1 = (function (){var statearr_30654 = state_30595;(statearr_30654[29] = inst_30509);
(statearr_30654[14] = inst_30475);
(statearr_30654[15] = inst_30474);
(statearr_30654[16] = inst_30473);
(statearr_30654[17] = inst_30472);
return statearr_30654;
})();var statearr_30655_30723 = state_30595__$1;(statearr_30655_30723[2] = null);
(statearr_30655_30723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 25))
{var inst_30534 = (state_30595[10]);var inst_30533 = (state_30595[13]);var inst_30536 = (inst_30534 < inst_30533);var inst_30537 = inst_30536;var state_30595__$1 = state_30595;if(cljs.core.truth_(inst_30537))
{var statearr_30656_30724 = state_30595__$1;(statearr_30656_30724[1] = 27);
} else
{var statearr_30657_30725 = state_30595__$1;(statearr_30657_30725[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 26))
{var inst_30523 = (state_30595[19]);var inst_30581 = (state_30595[2]);var inst_30582 = cljs.core.seq.call(null,inst_30523);var state_30595__$1 = (function (){var statearr_30658 = state_30595;(statearr_30658[30] = inst_30581);
return statearr_30658;
})();if(inst_30582)
{var statearr_30659_30726 = state_30595__$1;(statearr_30659_30726[1] = 42);
} else
{var statearr_30660_30727 = state_30595__$1;(statearr_30660_30727[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 27))
{var inst_30534 = (state_30595[10]);var inst_30532 = (state_30595[12]);var inst_30539 = cljs.core._nth.call(null,inst_30532,inst_30534);var state_30595__$1 = (function (){var statearr_30661 = state_30595;(statearr_30661[7] = inst_30539);
return statearr_30661;
})();var statearr_30662_30728 = state_30595__$1;(statearr_30662_30728[2] = null);
(statearr_30662_30728[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 28))
{var inst_30552 = (state_30595[9]);var inst_30531 = (state_30595[11]);var inst_30552__$1 = cljs.core.seq.call(null,inst_30531);var state_30595__$1 = (function (){var statearr_30666 = state_30595;(statearr_30666[9] = inst_30552__$1);
return statearr_30666;
})();if(inst_30552__$1)
{var statearr_30667_30729 = state_30595__$1;(statearr_30667_30729[1] = 33);
} else
{var statearr_30668_30730 = state_30595__$1;(statearr_30668_30730[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 29))
{var inst_30579 = (state_30595[2]);var state_30595__$1 = state_30595;var statearr_30669_30731 = state_30595__$1;(statearr_30669_30731[2] = inst_30579);
(statearr_30669_30731[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 30))
{var inst_30534 = (state_30595[10]);var inst_30531 = (state_30595[11]);var inst_30532 = (state_30595[12]);var inst_30533 = (state_30595[13]);var inst_30548 = (state_30595[2]);var inst_30549 = (inst_30534 + 1);var tmp30663 = inst_30531;var tmp30664 = inst_30532;var tmp30665 = inst_30533;var inst_30531__$1 = tmp30663;var inst_30532__$1 = tmp30664;var inst_30533__$1 = tmp30665;var inst_30534__$1 = inst_30549;var state_30595__$1 = (function (){var statearr_30670 = state_30595;(statearr_30670[10] = inst_30534__$1);
(statearr_30670[31] = inst_30548);
(statearr_30670[11] = inst_30531__$1);
(statearr_30670[12] = inst_30532__$1);
(statearr_30670[13] = inst_30533__$1);
return statearr_30670;
})();var statearr_30671_30732 = state_30595__$1;(statearr_30671_30732[2] = null);
(statearr_30671_30732[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30596 === 31))
{var inst_30539 = (state_30595[7]);var inst_30540 = (state_30595[2]);var inst_30541 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30542 = cljs.core.async.untap_STAR_.call(null,m,inst_30539);var state_30595__$1 = (function (){var statearr_30672 = state_30595;(statearr_30672[32] = inst_30541);
(statearr_30672[33] = inst_30540);
return statearr_30672;
})();var statearr_30673_30733 = state_30595__$1;(statearr_30673_30733[2] = inst_30542);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30595__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_30677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30677[0] = state_machine__5507__auto__);
(statearr_30677[1] = 1);
return statearr_30677;
});
var state_machine__5507__auto____1 = (function (state_30595){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30595);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30678){if((e30678 instanceof Object))
{var ex__5510__auto__ = e30678;var statearr_30679_30734 = state_30595;(statearr_30679_30734[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30735 = state_30595;
state_30595 = G__30735;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30595){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30680 = f__5522__auto__.call(null);(statearr_30680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30681);
return statearr_30680;
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
cljs.core.async.Mix = (function (){var obj30737 = {};return obj30737;
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
;var m = (function (){if(typeof cljs.core.async.t30847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30847 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta30848){
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
this.meta30848 = meta30848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30847.cljs$lang$type = true;
cljs.core.async.t30847.cljs$lang$ctorStr = "cljs.core.async/t30847";
cljs.core.async.t30847.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30847");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t30847.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30849){var self__ = this;
var _30849__$1 = this;return self__.meta30848;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30849,meta30848__$1){var self__ = this;
var _30849__$1 = this;return (new cljs.core.async.t30847(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta30848__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t30847 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30847(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta30848){return (new cljs.core.async.t30847(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta30848));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t30847(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___30956 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30914){var state_val_30915 = (state_30914[1]);if((state_val_30915 === 1))
{var inst_30853 = (state_30914[7]);var inst_30853__$1 = calc_state.call(null);var inst_30854 = cljs.core.seq_QMARK_.call(null,inst_30853__$1);var state_30914__$1 = (function (){var statearr_30916 = state_30914;(statearr_30916[7] = inst_30853__$1);
return statearr_30916;
})();if(inst_30854)
{var statearr_30917_30957 = state_30914__$1;(statearr_30917_30957[1] = 2);
} else
{var statearr_30918_30958 = state_30914__$1;(statearr_30918_30958[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 2))
{var inst_30853 = (state_30914[7]);var inst_30856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30853);var state_30914__$1 = state_30914;var statearr_30919_30959 = state_30914__$1;(statearr_30919_30959[2] = inst_30856);
(statearr_30919_30959[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 3))
{var inst_30853 = (state_30914[7]);var state_30914__$1 = state_30914;var statearr_30920_30960 = state_30914__$1;(statearr_30920_30960[2] = inst_30853);
(statearr_30920_30960[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 4))
{var inst_30853 = (state_30914[7]);var inst_30859 = (state_30914[2]);var inst_30860 = cljs.core.get.call(null,inst_30859,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_30861 = cljs.core.get.call(null,inst_30859,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_30862 = cljs.core.get.call(null,inst_30859,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_30863 = inst_30853;var state_30914__$1 = (function (){var statearr_30921 = state_30914;(statearr_30921[8] = inst_30860);
(statearr_30921[9] = inst_30861);
(statearr_30921[10] = inst_30862);
(statearr_30921[11] = inst_30863);
return statearr_30921;
})();var statearr_30922_30961 = state_30914__$1;(statearr_30922_30961[2] = null);
(statearr_30922_30961[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 5))
{var inst_30863 = (state_30914[11]);var inst_30866 = cljs.core.seq_QMARK_.call(null,inst_30863);var state_30914__$1 = state_30914;if(inst_30866)
{var statearr_30923_30962 = state_30914__$1;(statearr_30923_30962[1] = 7);
} else
{var statearr_30924_30963 = state_30914__$1;(statearr_30924_30963[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 6))
{var inst_30912 = (state_30914[2]);var state_30914__$1 = state_30914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30914__$1,inst_30912);
} else
{if((state_val_30915 === 7))
{var inst_30863 = (state_30914[11]);var inst_30868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30863);var state_30914__$1 = state_30914;var statearr_30925_30964 = state_30914__$1;(statearr_30925_30964[2] = inst_30868);
(statearr_30925_30964[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 8))
{var inst_30863 = (state_30914[11]);var state_30914__$1 = state_30914;var statearr_30926_30965 = state_30914__$1;(statearr_30926_30965[2] = inst_30863);
(statearr_30926_30965[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 9))
{var inst_30871 = (state_30914[12]);var inst_30871__$1 = (state_30914[2]);var inst_30872 = cljs.core.get.call(null,inst_30871__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_30873 = cljs.core.get.call(null,inst_30871__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_30874 = cljs.core.get.call(null,inst_30871__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_30914__$1 = (function (){var statearr_30927 = state_30914;(statearr_30927[12] = inst_30871__$1);
(statearr_30927[13] = inst_30873);
(statearr_30927[14] = inst_30874);
return statearr_30927;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30914__$1,10,inst_30872);
} else
{if((state_val_30915 === 10))
{var inst_30878 = (state_30914[15]);var inst_30879 = (state_30914[16]);var inst_30877 = (state_30914[2]);var inst_30878__$1 = cljs.core.nth.call(null,inst_30877,0,null);var inst_30879__$1 = cljs.core.nth.call(null,inst_30877,1,null);var inst_30880 = (inst_30878__$1 == null);var inst_30881 = cljs.core._EQ_.call(null,inst_30879__$1,change);var inst_30882 = (inst_30880) || (inst_30881);var state_30914__$1 = (function (){var statearr_30928 = state_30914;(statearr_30928[15] = inst_30878__$1);
(statearr_30928[16] = inst_30879__$1);
return statearr_30928;
})();if(cljs.core.truth_(inst_30882))
{var statearr_30929_30966 = state_30914__$1;(statearr_30929_30966[1] = 11);
} else
{var statearr_30930_30967 = state_30914__$1;(statearr_30930_30967[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 11))
{var inst_30878 = (state_30914[15]);var inst_30884 = (inst_30878 == null);var state_30914__$1 = state_30914;if(cljs.core.truth_(inst_30884))
{var statearr_30931_30968 = state_30914__$1;(statearr_30931_30968[1] = 14);
} else
{var statearr_30932_30969 = state_30914__$1;(statearr_30932_30969[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 12))
{var inst_30874 = (state_30914[14]);var inst_30879 = (state_30914[16]);var inst_30893 = (state_30914[17]);var inst_30893__$1 = inst_30874.call(null,inst_30879);var state_30914__$1 = (function (){var statearr_30933 = state_30914;(statearr_30933[17] = inst_30893__$1);
return statearr_30933;
})();if(cljs.core.truth_(inst_30893__$1))
{var statearr_30934_30970 = state_30914__$1;(statearr_30934_30970[1] = 17);
} else
{var statearr_30935_30971 = state_30914__$1;(statearr_30935_30971[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 13))
{var inst_30910 = (state_30914[2]);var state_30914__$1 = state_30914;var statearr_30936_30972 = state_30914__$1;(statearr_30936_30972[2] = inst_30910);
(statearr_30936_30972[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 14))
{var inst_30879 = (state_30914[16]);var inst_30886 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30879);var state_30914__$1 = state_30914;var statearr_30937_30973 = state_30914__$1;(statearr_30937_30973[2] = inst_30886);
(statearr_30937_30973[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 15))
{var state_30914__$1 = state_30914;var statearr_30938_30974 = state_30914__$1;(statearr_30938_30974[2] = null);
(statearr_30938_30974[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 16))
{var inst_30889 = (state_30914[2]);var inst_30890 = calc_state.call(null);var inst_30863 = inst_30890;var state_30914__$1 = (function (){var statearr_30939 = state_30914;(statearr_30939[11] = inst_30863);
(statearr_30939[18] = inst_30889);
return statearr_30939;
})();var statearr_30940_30975 = state_30914__$1;(statearr_30940_30975[2] = null);
(statearr_30940_30975[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 17))
{var inst_30893 = (state_30914[17]);var state_30914__$1 = state_30914;var statearr_30941_30976 = state_30914__$1;(statearr_30941_30976[2] = inst_30893);
(statearr_30941_30976[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 18))
{var inst_30873 = (state_30914[13]);var inst_30874 = (state_30914[14]);var inst_30879 = (state_30914[16]);var inst_30896 = cljs.core.empty_QMARK_.call(null,inst_30874);var inst_30897 = inst_30873.call(null,inst_30879);var inst_30898 = cljs.core.not.call(null,inst_30897);var inst_30899 = (inst_30896) && (inst_30898);var state_30914__$1 = state_30914;var statearr_30942_30977 = state_30914__$1;(statearr_30942_30977[2] = inst_30899);
(statearr_30942_30977[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 19))
{var inst_30901 = (state_30914[2]);var state_30914__$1 = state_30914;if(cljs.core.truth_(inst_30901))
{var statearr_30943_30978 = state_30914__$1;(statearr_30943_30978[1] = 20);
} else
{var statearr_30944_30979 = state_30914__$1;(statearr_30944_30979[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 20))
{var inst_30878 = (state_30914[15]);var state_30914__$1 = state_30914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30914__$1,23,out,inst_30878);
} else
{if((state_val_30915 === 21))
{var state_30914__$1 = state_30914;var statearr_30945_30980 = state_30914__$1;(statearr_30945_30980[2] = null);
(statearr_30945_30980[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 22))
{var inst_30871 = (state_30914[12]);var inst_30907 = (state_30914[2]);var inst_30863 = inst_30871;var state_30914__$1 = (function (){var statearr_30946 = state_30914;(statearr_30946[19] = inst_30907);
(statearr_30946[11] = inst_30863);
return statearr_30946;
})();var statearr_30947_30981 = state_30914__$1;(statearr_30947_30981[2] = null);
(statearr_30947_30981[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30915 === 23))
{var inst_30904 = (state_30914[2]);var state_30914__$1 = state_30914;var statearr_30948_30982 = state_30914__$1;(statearr_30948_30982[2] = inst_30904);
(statearr_30948_30982[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30952[0] = state_machine__5507__auto__);
(statearr_30952[1] = 1);
return statearr_30952;
});
var state_machine__5507__auto____1 = (function (state_30914){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30914);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30953){if((e30953 instanceof Object))
{var ex__5510__auto__ = e30953;var statearr_30954_30983 = state_30914;(statearr_30954_30983[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30984 = state_30914;
state_30914 = G__30984;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30914){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30955 = f__5522__auto__.call(null);(statearr_30955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30956);
return statearr_30955;
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
cljs.core.async.Pub = (function (){var obj30986 = {};return obj30986;
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
return (function (p1__30987_SHARP_){if(cljs.core.truth_(p1__30987_SHARP_.call(null,topic)))
{return p1__30987_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__30987_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31112 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31113){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31113 = meta31113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31112.cljs$lang$type = true;
cljs.core.async.t31112.cljs$lang$ctorStr = "cljs.core.async/t31112";
cljs.core.async.t31112.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31112");
});})(mults,ensure_mult))
;
cljs.core.async.t31112.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31112.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31112.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31112.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31114){var self__ = this;
var _31114__$1 = this;return self__.meta31113;
});})(mults,ensure_mult))
;
cljs.core.async.t31112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31114,meta31113__$1){var self__ = this;
var _31114__$1 = this;return (new cljs.core.async.t31112(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31113__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31112 = ((function (mults,ensure_mult){
return (function __GT_t31112(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31113){return (new cljs.core.async.t31112(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31113));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31112(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___31236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31188){var state_val_31189 = (state_31188[1]);if((state_val_31189 === 1))
{var state_31188__$1 = state_31188;var statearr_31190_31237 = state_31188__$1;(statearr_31190_31237[2] = null);
(statearr_31190_31237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 2))
{var state_31188__$1 = state_31188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31188__$1,4,ch);
} else
{if((state_val_31189 === 3))
{var inst_31186 = (state_31188[2]);var state_31188__$1 = state_31188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31188__$1,inst_31186);
} else
{if((state_val_31189 === 4))
{var inst_31117 = (state_31188[7]);var inst_31117__$1 = (state_31188[2]);var inst_31118 = (inst_31117__$1 == null);var state_31188__$1 = (function (){var statearr_31191 = state_31188;(statearr_31191[7] = inst_31117__$1);
return statearr_31191;
})();if(cljs.core.truth_(inst_31118))
{var statearr_31192_31238 = state_31188__$1;(statearr_31192_31238[1] = 5);
} else
{var statearr_31193_31239 = state_31188__$1;(statearr_31193_31239[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 5))
{var inst_31124 = cljs.core.deref.call(null,mults);var inst_31125 = cljs.core.vals.call(null,inst_31124);var inst_31126 = cljs.core.seq.call(null,inst_31125);var inst_31127 = inst_31126;var inst_31128 = null;var inst_31129 = 0;var inst_31130 = 0;var state_31188__$1 = (function (){var statearr_31194 = state_31188;(statearr_31194[8] = inst_31130);
(statearr_31194[9] = inst_31127);
(statearr_31194[10] = inst_31129);
(statearr_31194[11] = inst_31128);
return statearr_31194;
})();var statearr_31195_31240 = state_31188__$1;(statearr_31195_31240[2] = null);
(statearr_31195_31240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 6))
{var inst_31117 = (state_31188[7]);var inst_31167 = (state_31188[12]);var inst_31165 = (state_31188[13]);var inst_31165__$1 = topic_fn.call(null,inst_31117);var inst_31166 = cljs.core.deref.call(null,mults);var inst_31167__$1 = cljs.core.get.call(null,inst_31166,inst_31165__$1);var state_31188__$1 = (function (){var statearr_31196 = state_31188;(statearr_31196[12] = inst_31167__$1);
(statearr_31196[13] = inst_31165__$1);
return statearr_31196;
})();if(cljs.core.truth_(inst_31167__$1))
{var statearr_31197_31241 = state_31188__$1;(statearr_31197_31241[1] = 19);
} else
{var statearr_31198_31242 = state_31188__$1;(statearr_31198_31242[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 7))
{var inst_31184 = (state_31188[2]);var state_31188__$1 = state_31188;var statearr_31199_31243 = state_31188__$1;(statearr_31199_31243[2] = inst_31184);
(statearr_31199_31243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 8))
{var inst_31130 = (state_31188[8]);var inst_31129 = (state_31188[10]);var inst_31132 = (inst_31130 < inst_31129);var inst_31133 = inst_31132;var state_31188__$1 = state_31188;if(cljs.core.truth_(inst_31133))
{var statearr_31203_31244 = state_31188__$1;(statearr_31203_31244[1] = 10);
} else
{var statearr_31204_31245 = state_31188__$1;(statearr_31204_31245[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 9))
{var inst_31163 = (state_31188[2]);var state_31188__$1 = state_31188;var statearr_31205_31246 = state_31188__$1;(statearr_31205_31246[2] = inst_31163);
(statearr_31205_31246[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 10))
{var inst_31130 = (state_31188[8]);var inst_31127 = (state_31188[9]);var inst_31129 = (state_31188[10]);var inst_31128 = (state_31188[11]);var inst_31135 = cljs.core._nth.call(null,inst_31128,inst_31130);var inst_31136 = cljs.core.async.muxch_STAR_.call(null,inst_31135);var inst_31137 = cljs.core.async.close_BANG_.call(null,inst_31136);var inst_31138 = (inst_31130 + 1);var tmp31200 = inst_31127;var tmp31201 = inst_31129;var tmp31202 = inst_31128;var inst_31127__$1 = tmp31200;var inst_31128__$1 = tmp31202;var inst_31129__$1 = tmp31201;var inst_31130__$1 = inst_31138;var state_31188__$1 = (function (){var statearr_31206 = state_31188;(statearr_31206[8] = inst_31130__$1);
(statearr_31206[14] = inst_31137);
(statearr_31206[9] = inst_31127__$1);
(statearr_31206[10] = inst_31129__$1);
(statearr_31206[11] = inst_31128__$1);
return statearr_31206;
})();var statearr_31207_31247 = state_31188__$1;(statearr_31207_31247[2] = null);
(statearr_31207_31247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 11))
{var inst_31141 = (state_31188[15]);var inst_31127 = (state_31188[9]);var inst_31141__$1 = cljs.core.seq.call(null,inst_31127);var state_31188__$1 = (function (){var statearr_31208 = state_31188;(statearr_31208[15] = inst_31141__$1);
return statearr_31208;
})();if(inst_31141__$1)
{var statearr_31209_31248 = state_31188__$1;(statearr_31209_31248[1] = 13);
} else
{var statearr_31210_31249 = state_31188__$1;(statearr_31210_31249[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 12))
{var inst_31161 = (state_31188[2]);var state_31188__$1 = state_31188;var statearr_31211_31250 = state_31188__$1;(statearr_31211_31250[2] = inst_31161);
(statearr_31211_31250[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 13))
{var inst_31141 = (state_31188[15]);var inst_31143 = cljs.core.chunked_seq_QMARK_.call(null,inst_31141);var state_31188__$1 = state_31188;if(inst_31143)
{var statearr_31212_31251 = state_31188__$1;(statearr_31212_31251[1] = 16);
} else
{var statearr_31213_31252 = state_31188__$1;(statearr_31213_31252[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 14))
{var state_31188__$1 = state_31188;var statearr_31214_31253 = state_31188__$1;(statearr_31214_31253[2] = null);
(statearr_31214_31253[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 15))
{var inst_31159 = (state_31188[2]);var state_31188__$1 = state_31188;var statearr_31215_31254 = state_31188__$1;(statearr_31215_31254[2] = inst_31159);
(statearr_31215_31254[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 16))
{var inst_31141 = (state_31188[15]);var inst_31145 = cljs.core.chunk_first.call(null,inst_31141);var inst_31146 = cljs.core.chunk_rest.call(null,inst_31141);var inst_31147 = cljs.core.count.call(null,inst_31145);var inst_31127 = inst_31146;var inst_31128 = inst_31145;var inst_31129 = inst_31147;var inst_31130 = 0;var state_31188__$1 = (function (){var statearr_31216 = state_31188;(statearr_31216[8] = inst_31130);
(statearr_31216[9] = inst_31127);
(statearr_31216[10] = inst_31129);
(statearr_31216[11] = inst_31128);
return statearr_31216;
})();var statearr_31217_31255 = state_31188__$1;(statearr_31217_31255[2] = null);
(statearr_31217_31255[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 17))
{var inst_31141 = (state_31188[15]);var inst_31150 = cljs.core.first.call(null,inst_31141);var inst_31151 = cljs.core.async.muxch_STAR_.call(null,inst_31150);var inst_31152 = cljs.core.async.close_BANG_.call(null,inst_31151);var inst_31153 = cljs.core.next.call(null,inst_31141);var inst_31127 = inst_31153;var inst_31128 = null;var inst_31129 = 0;var inst_31130 = 0;var state_31188__$1 = (function (){var statearr_31218 = state_31188;(statearr_31218[8] = inst_31130);
(statearr_31218[9] = inst_31127);
(statearr_31218[10] = inst_31129);
(statearr_31218[11] = inst_31128);
(statearr_31218[16] = inst_31152);
return statearr_31218;
})();var statearr_31219_31256 = state_31188__$1;(statearr_31219_31256[2] = null);
(statearr_31219_31256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 18))
{var inst_31156 = (state_31188[2]);var state_31188__$1 = state_31188;var statearr_31220_31257 = state_31188__$1;(statearr_31220_31257[2] = inst_31156);
(statearr_31220_31257[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 19))
{var state_31188__$1 = state_31188;var statearr_31221_31258 = state_31188__$1;(statearr_31221_31258[2] = null);
(statearr_31221_31258[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 20))
{var state_31188__$1 = state_31188;var statearr_31222_31259 = state_31188__$1;(statearr_31222_31259[2] = null);
(statearr_31222_31259[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 21))
{var inst_31181 = (state_31188[2]);var state_31188__$1 = (function (){var statearr_31223 = state_31188;(statearr_31223[17] = inst_31181);
return statearr_31223;
})();var statearr_31224_31260 = state_31188__$1;(statearr_31224_31260[2] = null);
(statearr_31224_31260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 22))
{var inst_31178 = (state_31188[2]);var state_31188__$1 = state_31188;var statearr_31225_31261 = state_31188__$1;(statearr_31225_31261[2] = inst_31178);
(statearr_31225_31261[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 23))
{var inst_31165 = (state_31188[13]);var inst_31169 = (state_31188[2]);var inst_31170 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31165);var state_31188__$1 = (function (){var statearr_31226 = state_31188;(statearr_31226[18] = inst_31169);
return statearr_31226;
})();var statearr_31227_31262 = state_31188__$1;(statearr_31227_31262[2] = inst_31170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31188__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31189 === 24))
{var inst_31117 = (state_31188[7]);var inst_31167 = (state_31188[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31188,23,Object,null,22);var inst_31174 = cljs.core.async.muxch_STAR_.call(null,inst_31167);var state_31188__$1 = state_31188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31188__$1,25,inst_31174,inst_31117);
} else
{if((state_val_31189 === 25))
{var inst_31176 = (state_31188[2]);var state_31188__$1 = state_31188;var statearr_31228_31263 = state_31188__$1;(statearr_31228_31263[2] = inst_31176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31188__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_31232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31232[0] = state_machine__5507__auto__);
(statearr_31232[1] = 1);
return statearr_31232;
});
var state_machine__5507__auto____1 = (function (state_31188){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31188);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31233){if((e31233 instanceof Object))
{var ex__5510__auto__ = e31233;var statearr_31234_31264 = state_31188;(statearr_31234_31264[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31265 = state_31188;
state_31188 = G__31265;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31188){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31235 = f__5522__auto__.call(null);(statearr_31235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31236);
return statearr_31235;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___31402 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31372){var state_val_31373 = (state_31372[1]);if((state_val_31373 === 1))
{var state_31372__$1 = state_31372;var statearr_31374_31403 = state_31372__$1;(statearr_31374_31403[2] = null);
(statearr_31374_31403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 2))
{var inst_31335 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31336 = 0;var state_31372__$1 = (function (){var statearr_31375 = state_31372;(statearr_31375[7] = inst_31335);
(statearr_31375[8] = inst_31336);
return statearr_31375;
})();var statearr_31376_31404 = state_31372__$1;(statearr_31376_31404[2] = null);
(statearr_31376_31404[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 3))
{var inst_31370 = (state_31372[2]);var state_31372__$1 = state_31372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31372__$1,inst_31370);
} else
{if((state_val_31373 === 4))
{var inst_31336 = (state_31372[8]);var inst_31338 = (inst_31336 < cnt);var state_31372__$1 = state_31372;if(cljs.core.truth_(inst_31338))
{var statearr_31377_31405 = state_31372__$1;(statearr_31377_31405[1] = 6);
} else
{var statearr_31378_31406 = state_31372__$1;(statearr_31378_31406[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 5))
{var inst_31356 = (state_31372[2]);var state_31372__$1 = (function (){var statearr_31379 = state_31372;(statearr_31379[9] = inst_31356);
return statearr_31379;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31372__$1,12,dchan);
} else
{if((state_val_31373 === 6))
{var state_31372__$1 = state_31372;var statearr_31380_31407 = state_31372__$1;(statearr_31380_31407[2] = null);
(statearr_31380_31407[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 7))
{var state_31372__$1 = state_31372;var statearr_31381_31408 = state_31372__$1;(statearr_31381_31408[2] = null);
(statearr_31381_31408[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 8))
{var inst_31354 = (state_31372[2]);var state_31372__$1 = state_31372;var statearr_31382_31409 = state_31372__$1;(statearr_31382_31409[2] = inst_31354);
(statearr_31382_31409[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 9))
{var inst_31336 = (state_31372[8]);var inst_31349 = (state_31372[2]);var inst_31350 = (inst_31336 + 1);var inst_31336__$1 = inst_31350;var state_31372__$1 = (function (){var statearr_31383 = state_31372;(statearr_31383[10] = inst_31349);
(statearr_31383[8] = inst_31336__$1);
return statearr_31383;
})();var statearr_31384_31410 = state_31372__$1;(statearr_31384_31410[2] = null);
(statearr_31384_31410[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 10))
{var inst_31340 = (state_31372[2]);var inst_31341 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31372__$1 = (function (){var statearr_31385 = state_31372;(statearr_31385[11] = inst_31340);
return statearr_31385;
})();var statearr_31386_31411 = state_31372__$1;(statearr_31386_31411[2] = inst_31341);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31372__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 11))
{var inst_31336 = (state_31372[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31372,10,Object,null,9);var inst_31345 = chs__$1.call(null,inst_31336);var inst_31346 = done.call(null,inst_31336);var inst_31347 = cljs.core.async.take_BANG_.call(null,inst_31345,inst_31346);var state_31372__$1 = state_31372;var statearr_31387_31412 = state_31372__$1;(statearr_31387_31412[2] = inst_31347);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31372__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 12))
{var inst_31358 = (state_31372[12]);var inst_31358__$1 = (state_31372[2]);var inst_31359 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31358__$1);var state_31372__$1 = (function (){var statearr_31388 = state_31372;(statearr_31388[12] = inst_31358__$1);
return statearr_31388;
})();if(cljs.core.truth_(inst_31359))
{var statearr_31389_31413 = state_31372__$1;(statearr_31389_31413[1] = 13);
} else
{var statearr_31390_31414 = state_31372__$1;(statearr_31390_31414[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 13))
{var inst_31361 = cljs.core.async.close_BANG_.call(null,out);var state_31372__$1 = state_31372;var statearr_31391_31415 = state_31372__$1;(statearr_31391_31415[2] = inst_31361);
(statearr_31391_31415[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 14))
{var inst_31358 = (state_31372[12]);var inst_31363 = cljs.core.apply.call(null,f,inst_31358);var state_31372__$1 = state_31372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31372__$1,16,out,inst_31363);
} else
{if((state_val_31373 === 15))
{var inst_31368 = (state_31372[2]);var state_31372__$1 = state_31372;var statearr_31392_31416 = state_31372__$1;(statearr_31392_31416[2] = inst_31368);
(statearr_31392_31416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31373 === 16))
{var inst_31365 = (state_31372[2]);var state_31372__$1 = (function (){var statearr_31393 = state_31372;(statearr_31393[13] = inst_31365);
return statearr_31393;
})();var statearr_31394_31417 = state_31372__$1;(statearr_31394_31417[2] = null);
(statearr_31394_31417[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31398[0] = state_machine__5507__auto__);
(statearr_31398[1] = 1);
return statearr_31398;
});
var state_machine__5507__auto____1 = (function (state_31372){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31399){if((e31399 instanceof Object))
{var ex__5510__auto__ = e31399;var statearr_31400_31418 = state_31372;(statearr_31400_31418[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31419 = state_31372;
state_31372 = G__31419;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31372){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31401 = f__5522__auto__.call(null);(statearr_31401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31402);
return statearr_31401;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31527 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31503){var state_val_31504 = (state_31503[1]);if((state_val_31504 === 1))
{var inst_31474 = cljs.core.vec.call(null,chs);var inst_31475 = inst_31474;var state_31503__$1 = (function (){var statearr_31505 = state_31503;(statearr_31505[7] = inst_31475);
return statearr_31505;
})();var statearr_31506_31528 = state_31503__$1;(statearr_31506_31528[2] = null);
(statearr_31506_31528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31504 === 2))
{var inst_31475 = (state_31503[7]);var inst_31477 = cljs.core.count.call(null,inst_31475);var inst_31478 = (inst_31477 > 0);var state_31503__$1 = state_31503;if(cljs.core.truth_(inst_31478))
{var statearr_31507_31529 = state_31503__$1;(statearr_31507_31529[1] = 4);
} else
{var statearr_31508_31530 = state_31503__$1;(statearr_31508_31530[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31504 === 3))
{var inst_31501 = (state_31503[2]);var state_31503__$1 = state_31503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31503__$1,inst_31501);
} else
{if((state_val_31504 === 4))
{var inst_31475 = (state_31503[7]);var state_31503__$1 = state_31503;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31503__$1,7,inst_31475);
} else
{if((state_val_31504 === 5))
{var inst_31497 = cljs.core.async.close_BANG_.call(null,out);var state_31503__$1 = state_31503;var statearr_31509_31531 = state_31503__$1;(statearr_31509_31531[2] = inst_31497);
(statearr_31509_31531[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31504 === 6))
{var inst_31499 = (state_31503[2]);var state_31503__$1 = state_31503;var statearr_31510_31532 = state_31503__$1;(statearr_31510_31532[2] = inst_31499);
(statearr_31510_31532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31504 === 7))
{var inst_31483 = (state_31503[8]);var inst_31482 = (state_31503[9]);var inst_31482__$1 = (state_31503[2]);var inst_31483__$1 = cljs.core.nth.call(null,inst_31482__$1,0,null);var inst_31484 = cljs.core.nth.call(null,inst_31482__$1,1,null);var inst_31485 = (inst_31483__$1 == null);var state_31503__$1 = (function (){var statearr_31511 = state_31503;(statearr_31511[10] = inst_31484);
(statearr_31511[8] = inst_31483__$1);
(statearr_31511[9] = inst_31482__$1);
return statearr_31511;
})();if(cljs.core.truth_(inst_31485))
{var statearr_31512_31533 = state_31503__$1;(statearr_31512_31533[1] = 8);
} else
{var statearr_31513_31534 = state_31503__$1;(statearr_31513_31534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31504 === 8))
{var inst_31484 = (state_31503[10]);var inst_31483 = (state_31503[8]);var inst_31482 = (state_31503[9]);var inst_31475 = (state_31503[7]);var inst_31487 = (function (){var c = inst_31484;var v = inst_31483;var vec__31480 = inst_31482;var cs = inst_31475;return ((function (c,v,vec__31480,cs,inst_31484,inst_31483,inst_31482,inst_31475,state_val_31504){
return (function (p1__31420_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31420_SHARP_);
});
;})(c,v,vec__31480,cs,inst_31484,inst_31483,inst_31482,inst_31475,state_val_31504))
})();var inst_31488 = cljs.core.filterv.call(null,inst_31487,inst_31475);var inst_31475__$1 = inst_31488;var state_31503__$1 = (function (){var statearr_31514 = state_31503;(statearr_31514[7] = inst_31475__$1);
return statearr_31514;
})();var statearr_31515_31535 = state_31503__$1;(statearr_31515_31535[2] = null);
(statearr_31515_31535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31504 === 9))
{var inst_31483 = (state_31503[8]);var state_31503__$1 = state_31503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31503__$1,11,out,inst_31483);
} else
{if((state_val_31504 === 10))
{var inst_31495 = (state_31503[2]);var state_31503__$1 = state_31503;var statearr_31517_31536 = state_31503__$1;(statearr_31517_31536[2] = inst_31495);
(statearr_31517_31536[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31504 === 11))
{var inst_31475 = (state_31503[7]);var inst_31492 = (state_31503[2]);var tmp31516 = inst_31475;var inst_31475__$1 = tmp31516;var state_31503__$1 = (function (){var statearr_31518 = state_31503;(statearr_31518[11] = inst_31492);
(statearr_31518[7] = inst_31475__$1);
return statearr_31518;
})();var statearr_31519_31537 = state_31503__$1;(statearr_31519_31537[2] = null);
(statearr_31519_31537[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31523 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31523[0] = state_machine__5507__auto__);
(statearr_31523[1] = 1);
return statearr_31523;
});
var state_machine__5507__auto____1 = (function (state_31503){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31503);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31524){if((e31524 instanceof Object))
{var ex__5510__auto__ = e31524;var statearr_31525_31538 = state_31503;(statearr_31525_31538[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31539 = state_31503;
state_31503 = G__31539;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31503){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31526 = f__5522__auto__.call(null);(statearr_31526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31527);
return statearr_31526;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31609){var state_val_31610 = (state_31609[1]);if((state_val_31610 === 1))
{var inst_31586 = 0;var state_31609__$1 = (function (){var statearr_31611 = state_31609;(statearr_31611[7] = inst_31586);
return statearr_31611;
})();var statearr_31612_31633 = state_31609__$1;(statearr_31612_31633[2] = null);
(statearr_31612_31633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31610 === 2))
{var inst_31586 = (state_31609[7]);var inst_31588 = (inst_31586 < n);var state_31609__$1 = state_31609;if(cljs.core.truth_(inst_31588))
{var statearr_31613_31634 = state_31609__$1;(statearr_31613_31634[1] = 4);
} else
{var statearr_31614_31635 = state_31609__$1;(statearr_31614_31635[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31610 === 3))
{var inst_31606 = (state_31609[2]);var inst_31607 = cljs.core.async.close_BANG_.call(null,out);var state_31609__$1 = (function (){var statearr_31615 = state_31609;(statearr_31615[8] = inst_31606);
return statearr_31615;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31609__$1,inst_31607);
} else
{if((state_val_31610 === 4))
{var state_31609__$1 = state_31609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31609__$1,7,ch);
} else
{if((state_val_31610 === 5))
{var state_31609__$1 = state_31609;var statearr_31616_31636 = state_31609__$1;(statearr_31616_31636[2] = null);
(statearr_31616_31636[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31610 === 6))
{var inst_31604 = (state_31609[2]);var state_31609__$1 = state_31609;var statearr_31617_31637 = state_31609__$1;(statearr_31617_31637[2] = inst_31604);
(statearr_31617_31637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31610 === 7))
{var inst_31591 = (state_31609[9]);var inst_31591__$1 = (state_31609[2]);var inst_31592 = (inst_31591__$1 == null);var inst_31593 = cljs.core.not.call(null,inst_31592);var state_31609__$1 = (function (){var statearr_31618 = state_31609;(statearr_31618[9] = inst_31591__$1);
return statearr_31618;
})();if(inst_31593)
{var statearr_31619_31638 = state_31609__$1;(statearr_31619_31638[1] = 8);
} else
{var statearr_31620_31639 = state_31609__$1;(statearr_31620_31639[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31610 === 8))
{var inst_31591 = (state_31609[9]);var state_31609__$1 = state_31609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31609__$1,11,out,inst_31591);
} else
{if((state_val_31610 === 9))
{var state_31609__$1 = state_31609;var statearr_31621_31640 = state_31609__$1;(statearr_31621_31640[2] = null);
(statearr_31621_31640[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31610 === 10))
{var inst_31601 = (state_31609[2]);var state_31609__$1 = state_31609;var statearr_31622_31641 = state_31609__$1;(statearr_31622_31641[2] = inst_31601);
(statearr_31622_31641[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31610 === 11))
{var inst_31586 = (state_31609[7]);var inst_31596 = (state_31609[2]);var inst_31597 = (inst_31586 + 1);var inst_31586__$1 = inst_31597;var state_31609__$1 = (function (){var statearr_31623 = state_31609;(statearr_31623[7] = inst_31586__$1);
(statearr_31623[10] = inst_31596);
return statearr_31623;
})();var statearr_31624_31642 = state_31609__$1;(statearr_31624_31642[2] = null);
(statearr_31624_31642[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31628 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31628[0] = state_machine__5507__auto__);
(statearr_31628[1] = 1);
return statearr_31628;
});
var state_machine__5507__auto____1 = (function (state_31609){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31609);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31629){if((e31629 instanceof Object))
{var ex__5510__auto__ = e31629;var statearr_31630_31643 = state_31609;(statearr_31630_31643[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31644 = state_31609;
state_31609 = G__31644;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31609){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31631 = f__5522__auto__.call(null);(statearr_31631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31632);
return statearr_31631;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31716){var state_val_31717 = (state_31716[1]);if((state_val_31717 === 1))
{var inst_31693 = null;var state_31716__$1 = (function (){var statearr_31718 = state_31716;(statearr_31718[7] = inst_31693);
return statearr_31718;
})();var statearr_31719_31742 = state_31716__$1;(statearr_31719_31742[2] = null);
(statearr_31719_31742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31717 === 2))
{var state_31716__$1 = state_31716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31716__$1,4,ch);
} else
{if((state_val_31717 === 3))
{var inst_31713 = (state_31716[2]);var inst_31714 = cljs.core.async.close_BANG_.call(null,out);var state_31716__$1 = (function (){var statearr_31720 = state_31716;(statearr_31720[8] = inst_31713);
return statearr_31720;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31716__$1,inst_31714);
} else
{if((state_val_31717 === 4))
{var inst_31696 = (state_31716[9]);var inst_31696__$1 = (state_31716[2]);var inst_31697 = (inst_31696__$1 == null);var inst_31698 = cljs.core.not.call(null,inst_31697);var state_31716__$1 = (function (){var statearr_31721 = state_31716;(statearr_31721[9] = inst_31696__$1);
return statearr_31721;
})();if(inst_31698)
{var statearr_31722_31743 = state_31716__$1;(statearr_31722_31743[1] = 5);
} else
{var statearr_31723_31744 = state_31716__$1;(statearr_31723_31744[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31717 === 5))
{var inst_31696 = (state_31716[9]);var inst_31693 = (state_31716[7]);var inst_31700 = cljs.core._EQ_.call(null,inst_31696,inst_31693);var state_31716__$1 = state_31716;if(inst_31700)
{var statearr_31724_31745 = state_31716__$1;(statearr_31724_31745[1] = 8);
} else
{var statearr_31725_31746 = state_31716__$1;(statearr_31725_31746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31717 === 6))
{var state_31716__$1 = state_31716;var statearr_31727_31747 = state_31716__$1;(statearr_31727_31747[2] = null);
(statearr_31727_31747[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31717 === 7))
{var inst_31711 = (state_31716[2]);var state_31716__$1 = state_31716;var statearr_31728_31748 = state_31716__$1;(statearr_31728_31748[2] = inst_31711);
(statearr_31728_31748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31717 === 8))
{var inst_31693 = (state_31716[7]);var tmp31726 = inst_31693;var inst_31693__$1 = tmp31726;var state_31716__$1 = (function (){var statearr_31729 = state_31716;(statearr_31729[7] = inst_31693__$1);
return statearr_31729;
})();var statearr_31730_31749 = state_31716__$1;(statearr_31730_31749[2] = null);
(statearr_31730_31749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31717 === 9))
{var inst_31696 = (state_31716[9]);var state_31716__$1 = state_31716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31716__$1,11,out,inst_31696);
} else
{if((state_val_31717 === 10))
{var inst_31708 = (state_31716[2]);var state_31716__$1 = state_31716;var statearr_31731_31750 = state_31716__$1;(statearr_31731_31750[2] = inst_31708);
(statearr_31731_31750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31717 === 11))
{var inst_31696 = (state_31716[9]);var inst_31705 = (state_31716[2]);var inst_31693 = inst_31696;var state_31716__$1 = (function (){var statearr_31732 = state_31716;(statearr_31732[10] = inst_31705);
(statearr_31732[7] = inst_31693);
return statearr_31732;
})();var statearr_31733_31751 = state_31716__$1;(statearr_31733_31751[2] = null);
(statearr_31733_31751[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31737 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31737[0] = state_machine__5507__auto__);
(statearr_31737[1] = 1);
return statearr_31737;
});
var state_machine__5507__auto____1 = (function (state_31716){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31716);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31738){if((e31738 instanceof Object))
{var ex__5510__auto__ = e31738;var statearr_31739_31752 = state_31716;(statearr_31739_31752[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31716);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31753 = state_31716;
state_31716 = G__31753;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31716){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31740 = f__5522__auto__.call(null);(statearr_31740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31741);
return statearr_31740;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31888 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31858){var state_val_31859 = (state_31858[1]);if((state_val_31859 === 1))
{var inst_31821 = (new Array(n));var inst_31822 = inst_31821;var inst_31823 = 0;var state_31858__$1 = (function (){var statearr_31860 = state_31858;(statearr_31860[7] = inst_31822);
(statearr_31860[8] = inst_31823);
return statearr_31860;
})();var statearr_31861_31889 = state_31858__$1;(statearr_31861_31889[2] = null);
(statearr_31861_31889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 2))
{var state_31858__$1 = state_31858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31858__$1,4,ch);
} else
{if((state_val_31859 === 3))
{var inst_31856 = (state_31858[2]);var state_31858__$1 = state_31858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31858__$1,inst_31856);
} else
{if((state_val_31859 === 4))
{var inst_31826 = (state_31858[9]);var inst_31826__$1 = (state_31858[2]);var inst_31827 = (inst_31826__$1 == null);var inst_31828 = cljs.core.not.call(null,inst_31827);var state_31858__$1 = (function (){var statearr_31862 = state_31858;(statearr_31862[9] = inst_31826__$1);
return statearr_31862;
})();if(inst_31828)
{var statearr_31863_31890 = state_31858__$1;(statearr_31863_31890[1] = 5);
} else
{var statearr_31864_31891 = state_31858__$1;(statearr_31864_31891[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 5))
{var inst_31822 = (state_31858[7]);var inst_31823 = (state_31858[8]);var inst_31826 = (state_31858[9]);var inst_31831 = (state_31858[10]);var inst_31830 = (inst_31822[inst_31823] = inst_31826);var inst_31831__$1 = (inst_31823 + 1);var inst_31832 = (inst_31831__$1 < n);var state_31858__$1 = (function (){var statearr_31865 = state_31858;(statearr_31865[11] = inst_31830);
(statearr_31865[10] = inst_31831__$1);
return statearr_31865;
})();if(cljs.core.truth_(inst_31832))
{var statearr_31866_31892 = state_31858__$1;(statearr_31866_31892[1] = 8);
} else
{var statearr_31867_31893 = state_31858__$1;(statearr_31867_31893[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 6))
{var inst_31823 = (state_31858[8]);var inst_31844 = (inst_31823 > 0);var state_31858__$1 = state_31858;if(cljs.core.truth_(inst_31844))
{var statearr_31869_31894 = state_31858__$1;(statearr_31869_31894[1] = 12);
} else
{var statearr_31870_31895 = state_31858__$1;(statearr_31870_31895[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 7))
{var inst_31854 = (state_31858[2]);var state_31858__$1 = state_31858;var statearr_31871_31896 = state_31858__$1;(statearr_31871_31896[2] = inst_31854);
(statearr_31871_31896[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 8))
{var inst_31822 = (state_31858[7]);var inst_31831 = (state_31858[10]);var tmp31868 = inst_31822;var inst_31822__$1 = tmp31868;var inst_31823 = inst_31831;var state_31858__$1 = (function (){var statearr_31872 = state_31858;(statearr_31872[7] = inst_31822__$1);
(statearr_31872[8] = inst_31823);
return statearr_31872;
})();var statearr_31873_31897 = state_31858__$1;(statearr_31873_31897[2] = null);
(statearr_31873_31897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 9))
{var inst_31822 = (state_31858[7]);var inst_31836 = cljs.core.vec.call(null,inst_31822);var state_31858__$1 = state_31858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31858__$1,11,out,inst_31836);
} else
{if((state_val_31859 === 10))
{var inst_31842 = (state_31858[2]);var state_31858__$1 = state_31858;var statearr_31874_31898 = state_31858__$1;(statearr_31874_31898[2] = inst_31842);
(statearr_31874_31898[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 11))
{var inst_31838 = (state_31858[2]);var inst_31839 = (new Array(n));var inst_31822 = inst_31839;var inst_31823 = 0;var state_31858__$1 = (function (){var statearr_31875 = state_31858;(statearr_31875[7] = inst_31822);
(statearr_31875[8] = inst_31823);
(statearr_31875[12] = inst_31838);
return statearr_31875;
})();var statearr_31876_31899 = state_31858__$1;(statearr_31876_31899[2] = null);
(statearr_31876_31899[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 12))
{var inst_31822 = (state_31858[7]);var inst_31846 = cljs.core.vec.call(null,inst_31822);var state_31858__$1 = state_31858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31858__$1,15,out,inst_31846);
} else
{if((state_val_31859 === 13))
{var state_31858__$1 = state_31858;var statearr_31877_31900 = state_31858__$1;(statearr_31877_31900[2] = null);
(statearr_31877_31900[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 14))
{var inst_31851 = (state_31858[2]);var inst_31852 = cljs.core.async.close_BANG_.call(null,out);var state_31858__$1 = (function (){var statearr_31878 = state_31858;(statearr_31878[13] = inst_31851);
return statearr_31878;
})();var statearr_31879_31901 = state_31858__$1;(statearr_31879_31901[2] = inst_31852);
(statearr_31879_31901[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31859 === 15))
{var inst_31848 = (state_31858[2]);var state_31858__$1 = state_31858;var statearr_31880_31902 = state_31858__$1;(statearr_31880_31902[2] = inst_31848);
(statearr_31880_31902[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_31884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31884[0] = state_machine__5507__auto__);
(statearr_31884[1] = 1);
return statearr_31884;
});
var state_machine__5507__auto____1 = (function (state_31858){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31858);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31885){if((e31885 instanceof Object))
{var ex__5510__auto__ = e31885;var statearr_31886_31903 = state_31858;(statearr_31886_31903[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31858);
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
var G__31904 = state_31858;
state_31858 = G__31904;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31858){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31858);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32017){var state_val_32018 = (state_32017[1]);if((state_val_32018 === 1))
{var inst_31976 = [];var inst_31977 = inst_31976;var inst_31978 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32017__$1 = (function (){var statearr_32019 = state_32017;(statearr_32019[7] = inst_31978);
(statearr_32019[8] = inst_31977);
return statearr_32019;
})();var statearr_32020_32048 = state_32017__$1;(statearr_32020_32048[2] = null);
(statearr_32020_32048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 2))
{var state_32017__$1 = state_32017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32017__$1,4,ch);
} else
{if((state_val_32018 === 3))
{var inst_32015 = (state_32017[2]);var state_32017__$1 = state_32017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32017__$1,inst_32015);
} else
{if((state_val_32018 === 4))
{var inst_31981 = (state_32017[9]);var inst_31981__$1 = (state_32017[2]);var inst_31982 = (inst_31981__$1 == null);var inst_31983 = cljs.core.not.call(null,inst_31982);var state_32017__$1 = (function (){var statearr_32021 = state_32017;(statearr_32021[9] = inst_31981__$1);
return statearr_32021;
})();if(inst_31983)
{var statearr_32022_32049 = state_32017__$1;(statearr_32022_32049[1] = 5);
} else
{var statearr_32023_32050 = state_32017__$1;(statearr_32023_32050[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 5))
{var inst_31981 = (state_32017[9]);var inst_31978 = (state_32017[7]);var inst_31985 = (state_32017[10]);var inst_31985__$1 = f.call(null,inst_31981);var inst_31986 = cljs.core._EQ_.call(null,inst_31985__$1,inst_31978);var inst_31987 = cljs.core.keyword_identical_QMARK_.call(null,inst_31978,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_31988 = (inst_31986) || (inst_31987);var state_32017__$1 = (function (){var statearr_32024 = state_32017;(statearr_32024[10] = inst_31985__$1);
return statearr_32024;
})();if(cljs.core.truth_(inst_31988))
{var statearr_32025_32051 = state_32017__$1;(statearr_32025_32051[1] = 8);
} else
{var statearr_32026_32052 = state_32017__$1;(statearr_32026_32052[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 6))
{var inst_31977 = (state_32017[8]);var inst_32002 = inst_31977.length;var inst_32003 = (inst_32002 > 0);var state_32017__$1 = state_32017;if(cljs.core.truth_(inst_32003))
{var statearr_32028_32053 = state_32017__$1;(statearr_32028_32053[1] = 12);
} else
{var statearr_32029_32054 = state_32017__$1;(statearr_32029_32054[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 7))
{var inst_32013 = (state_32017[2]);var state_32017__$1 = state_32017;var statearr_32030_32055 = state_32017__$1;(statearr_32030_32055[2] = inst_32013);
(statearr_32030_32055[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 8))
{var inst_31981 = (state_32017[9]);var inst_31977 = (state_32017[8]);var inst_31985 = (state_32017[10]);var inst_31990 = inst_31977.push(inst_31981);var tmp32027 = inst_31977;var inst_31977__$1 = tmp32027;var inst_31978 = inst_31985;var state_32017__$1 = (function (){var statearr_32031 = state_32017;(statearr_32031[7] = inst_31978);
(statearr_32031[8] = inst_31977__$1);
(statearr_32031[11] = inst_31990);
return statearr_32031;
})();var statearr_32032_32056 = state_32017__$1;(statearr_32032_32056[2] = null);
(statearr_32032_32056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 9))
{var inst_31977 = (state_32017[8]);var inst_31993 = cljs.core.vec.call(null,inst_31977);var state_32017__$1 = state_32017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,11,out,inst_31993);
} else
{if((state_val_32018 === 10))
{var inst_32000 = (state_32017[2]);var state_32017__$1 = state_32017;var statearr_32033_32057 = state_32017__$1;(statearr_32033_32057[2] = inst_32000);
(statearr_32033_32057[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 11))
{var inst_31981 = (state_32017[9]);var inst_31985 = (state_32017[10]);var inst_31995 = (state_32017[2]);var inst_31996 = [];var inst_31997 = inst_31996.push(inst_31981);var inst_31977 = inst_31996;var inst_31978 = inst_31985;var state_32017__$1 = (function (){var statearr_32034 = state_32017;(statearr_32034[12] = inst_31997);
(statearr_32034[13] = inst_31995);
(statearr_32034[7] = inst_31978);
(statearr_32034[8] = inst_31977);
return statearr_32034;
})();var statearr_32035_32058 = state_32017__$1;(statearr_32035_32058[2] = null);
(statearr_32035_32058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 12))
{var inst_31977 = (state_32017[8]);var inst_32005 = cljs.core.vec.call(null,inst_31977);var state_32017__$1 = state_32017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,15,out,inst_32005);
} else
{if((state_val_32018 === 13))
{var state_32017__$1 = state_32017;var statearr_32036_32059 = state_32017__$1;(statearr_32036_32059[2] = null);
(statearr_32036_32059[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 14))
{var inst_32010 = (state_32017[2]);var inst_32011 = cljs.core.async.close_BANG_.call(null,out);var state_32017__$1 = (function (){var statearr_32037 = state_32017;(statearr_32037[14] = inst_32010);
return statearr_32037;
})();var statearr_32038_32060 = state_32017__$1;(statearr_32038_32060[2] = inst_32011);
(statearr_32038_32060[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32018 === 15))
{var inst_32007 = (state_32017[2]);var state_32017__$1 = state_32017;var statearr_32039_32061 = state_32017__$1;(statearr_32039_32061[2] = inst_32007);
(statearr_32039_32061[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32043[0] = state_machine__5507__auto__);
(statearr_32043[1] = 1);
return statearr_32043;
});
var state_machine__5507__auto____1 = (function (state_32017){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32017);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32044){if((e32044 instanceof Object))
{var ex__5510__auto__ = e32044;var statearr_32045_32062 = state_32017;(statearr_32045_32062[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32063 = state_32017;
state_32017 = G__32063;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32046 = f__5522__auto__.call(null);(statearr_32046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32047);
return statearr_32046;
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
