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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14005 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14005 = (function (f,fn_handler,meta14006){
this.f = f;
this.fn_handler = fn_handler;
this.meta14006 = meta14006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14005.cljs$lang$type = true;
cljs.core.async.t14005.cljs$lang$ctorStr = "cljs.core.async/t14005";
cljs.core.async.t14005.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14005");
});
cljs.core.async.t14005.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14007){var self__ = this;
var _14007__$1 = this;return self__.meta14006;
});
cljs.core.async.t14005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14007,meta14006__$1){var self__ = this;
var _14007__$1 = this;return (new cljs.core.async.t14005(self__.f,self__.fn_handler,meta14006__$1));
});
cljs.core.async.__GT_t14005 = (function __GT_t14005(f__$1,fn_handler__$1,meta14006){return (new cljs.core.async.t14005(f__$1,fn_handler__$1,meta14006));
});
}
return (new cljs.core.async.t14005(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14009 = buff;if(G__14009)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__14009.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14009.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14009);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14009);
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
{var val_14010 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14010);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14010);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___14011 = n;var x_14012 = 0;while(true){
if((x_14012 < n__4289__auto___14011))
{(a[x_14012] = 0);
{
var G__14013 = (x_14012 + 1);
x_14012 = G__14013;
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
var G__14014 = (i + 1);
i = G__14014;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14018 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14018 = (function (flag,alt_flag,meta14019){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14019 = meta14019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14018.cljs$lang$type = true;
cljs.core.async.t14018.cljs$lang$ctorStr = "cljs.core.async/t14018";
cljs.core.async.t14018.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14018");
});
cljs.core.async.t14018.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14020){var self__ = this;
var _14020__$1 = this;return self__.meta14019;
});
cljs.core.async.t14018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14020,meta14019__$1){var self__ = this;
var _14020__$1 = this;return (new cljs.core.async.t14018(self__.flag,self__.alt_flag,meta14019__$1));
});
cljs.core.async.__GT_t14018 = (function __GT_t14018(flag__$1,alt_flag__$1,meta14019){return (new cljs.core.async.t14018(flag__$1,alt_flag__$1,meta14019));
});
}
return (new cljs.core.async.t14018(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14024 = (function (cb,flag,alt_handler,meta14025){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14025 = meta14025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14024.cljs$lang$type = true;
cljs.core.async.t14024.cljs$lang$ctorStr = "cljs.core.async/t14024";
cljs.core.async.t14024.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14024");
});
cljs.core.async.t14024.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14026){var self__ = this;
var _14026__$1 = this;return self__.meta14025;
});
cljs.core.async.t14024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14026,meta14025__$1){var self__ = this;
var _14026__$1 = this;return (new cljs.core.async.t14024(self__.cb,self__.flag,self__.alt_handler,meta14025__$1));
});
cljs.core.async.__GT_t14024 = (function __GT_t14024(cb__$1,flag__$1,alt_handler__$1,meta14025){return (new cljs.core.async.t14024(cb__$1,flag__$1,alt_handler__$1,meta14025));
});
}
return (new cljs.core.async.t14024(cb,flag,alt_handler,null));
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
return (function (p1__14027_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14027_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14028 = (i + 1);
i = G__14028;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
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
var alts_BANG___delegate = function (ports,p__14029){var map__14031 = p__14029;var map__14031__$1 = ((cljs.core.seq_QMARK_.call(null,map__14031))?cljs.core.apply.call(null,cljs.core.hash_map,map__14031):map__14031);var opts = map__14031__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14029 = null;if (arguments.length > 1) {
  p__14029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14029);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14032){
var ports = cljs.core.first(arglist__14032);
var p__14029 = cljs.core.rest(arglist__14032);
return alts_BANG___delegate(ports,p__14029);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14040 = (function (ch,f,map_LT_,meta14041){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14041 = meta14041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14040.cljs$lang$type = true;
cljs.core.async.t14040.cljs$lang$ctorStr = "cljs.core.async/t14040";
cljs.core.async.t14040.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14040");
});
cljs.core.async.t14040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14043 = (function (fn1,_,meta14041,ch,f,map_LT_,meta14044){
this.fn1 = fn1;
this._ = _;
this.meta14041 = meta14041;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14044 = meta14044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14043.cljs$lang$type = true;
cljs.core.async.t14043.cljs$lang$ctorStr = "cljs.core.async/t14043";
cljs.core.async.t14043.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14043");
});
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14033_SHARP_){return f1.call(null,(((p1__14033_SHARP_ == null))?null:self__.f.call(null,p1__14033_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14045){var self__ = this;
var _14045__$1 = this;return self__.meta14044;
});
cljs.core.async.t14043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14045,meta14044__$1){var self__ = this;
var _14045__$1 = this;return (new cljs.core.async.t14043(self__.fn1,self__._,self__.meta14041,self__.ch,self__.f,self__.map_LT_,meta14044__$1));
});
cljs.core.async.__GT_t14043 = (function __GT_t14043(fn1__$1,___$2,meta14041__$1,ch__$2,f__$2,map_LT___$2,meta14044){return (new cljs.core.async.t14043(fn1__$1,___$2,meta14041__$1,ch__$2,f__$2,map_LT___$2,meta14044));
});
}
return (new cljs.core.async.t14043(fn1,___$1,self__.meta14041,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14040.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14042){var self__ = this;
var _14042__$1 = this;return self__.meta14041;
});
cljs.core.async.t14040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14042,meta14041__$1){var self__ = this;
var _14042__$1 = this;return (new cljs.core.async.t14040(self__.ch,self__.f,self__.map_LT_,meta14041__$1));
});
cljs.core.async.__GT_t14040 = (function __GT_t14040(ch__$1,f__$1,map_LT___$1,meta14041){return (new cljs.core.async.t14040(ch__$1,f__$1,map_LT___$1,meta14041));
});
}
return (new cljs.core.async.t14040(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14049 = (function (ch,f,map_GT_,meta14050){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14050 = meta14050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14049.cljs$lang$type = true;
cljs.core.async.t14049.cljs$lang$ctorStr = "cljs.core.async/t14049";
cljs.core.async.t14049.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14049");
});
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14051){var self__ = this;
var _14051__$1 = this;return self__.meta14050;
});
cljs.core.async.t14049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14051,meta14050__$1){var self__ = this;
var _14051__$1 = this;return (new cljs.core.async.t14049(self__.ch,self__.f,self__.map_GT_,meta14050__$1));
});
cljs.core.async.__GT_t14049 = (function __GT_t14049(ch__$1,f__$1,map_GT___$1,meta14050){return (new cljs.core.async.t14049(ch__$1,f__$1,map_GT___$1,meta14050));
});
}
return (new cljs.core.async.t14049(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14055 = (function (ch,p,filter_GT_,meta14056){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14056 = meta14056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14055.cljs$lang$type = true;
cljs.core.async.t14055.cljs$lang$ctorStr = "cljs.core.async/t14055";
cljs.core.async.t14055.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14055");
});
cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14057){var self__ = this;
var _14057__$1 = this;return self__.meta14056;
});
cljs.core.async.t14055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14057,meta14056__$1){var self__ = this;
var _14057__$1 = this;return (new cljs.core.async.t14055(self__.ch,self__.p,self__.filter_GT_,meta14056__$1));
});
cljs.core.async.__GT_t14055 = (function __GT_t14055(ch__$1,p__$1,filter_GT___$1,meta14056){return (new cljs.core.async.t14055(ch__$1,p__$1,filter_GT___$1,meta14056));
});
}
return (new cljs.core.async.t14055(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14140 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14119){var state_val_14120 = (state_14119[1]);if((state_val_14120 === 1))
{var state_14119__$1 = state_14119;var statearr_14121_14141 = state_14119__$1;(statearr_14121_14141[2] = null);
(statearr_14121_14141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 2))
{var state_14119__$1 = state_14119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14119__$1,4,ch);
} else
{if((state_val_14120 === 3))
{var inst_14117 = (state_14119[2]);var state_14119__$1 = state_14119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14119__$1,inst_14117);
} else
{if((state_val_14120 === 4))
{var inst_14101 = (state_14119[7]);var inst_14101__$1 = (state_14119[2]);var inst_14102 = (inst_14101__$1 == null);var state_14119__$1 = (function (){var statearr_14122 = state_14119;(statearr_14122[7] = inst_14101__$1);
return statearr_14122;
})();if(cljs.core.truth_(inst_14102))
{var statearr_14123_14142 = state_14119__$1;(statearr_14123_14142[1] = 5);
} else
{var statearr_14124_14143 = state_14119__$1;(statearr_14124_14143[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 5))
{var inst_14104 = cljs.core.async.close_BANG_.call(null,out);var state_14119__$1 = state_14119;var statearr_14125_14144 = state_14119__$1;(statearr_14125_14144[2] = inst_14104);
(statearr_14125_14144[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 6))
{var inst_14101 = (state_14119[7]);var inst_14106 = p.call(null,inst_14101);var state_14119__$1 = state_14119;if(cljs.core.truth_(inst_14106))
{var statearr_14126_14145 = state_14119__$1;(statearr_14126_14145[1] = 8);
} else
{var statearr_14127_14146 = state_14119__$1;(statearr_14127_14146[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 7))
{var inst_14115 = (state_14119[2]);var state_14119__$1 = state_14119;var statearr_14128_14147 = state_14119__$1;(statearr_14128_14147[2] = inst_14115);
(statearr_14128_14147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 8))
{var inst_14101 = (state_14119[7]);var state_14119__$1 = state_14119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14119__$1,11,out,inst_14101);
} else
{if((state_val_14120 === 9))
{var state_14119__$1 = state_14119;var statearr_14129_14148 = state_14119__$1;(statearr_14129_14148[2] = null);
(statearr_14129_14148[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 10))
{var inst_14112 = (state_14119[2]);var state_14119__$1 = (function (){var statearr_14130 = state_14119;(statearr_14130[8] = inst_14112);
return statearr_14130;
})();var statearr_14131_14149 = state_14119__$1;(statearr_14131_14149[2] = null);
(statearr_14131_14149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 11))
{var inst_14109 = (state_14119[2]);var state_14119__$1 = state_14119;var statearr_14132_14150 = state_14119__$1;(statearr_14132_14150[2] = inst_14109);
(statearr_14132_14150[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14136 = [null,null,null,null,null,null,null,null,null];(statearr_14136[0] = state_machine__5548__auto__);
(statearr_14136[1] = 1);
return statearr_14136;
});
var state_machine__5548__auto____1 = (function (state_14119){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14137){if((e14137 instanceof Object))
{var ex__5551__auto__ = e14137;var statearr_14138_14151 = state_14119;(statearr_14138_14151[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14152 = state_14119;
state_14119 = G__14152;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14119){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14139 = f__5563__auto__.call(null);(statearr_14139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14140);
return statearr_14139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14304){var state_val_14305 = (state_14304[1]);if((state_val_14305 === 1))
{var state_14304__$1 = state_14304;var statearr_14306_14343 = state_14304__$1;(statearr_14306_14343[2] = null);
(statearr_14306_14343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 2))
{var state_14304__$1 = state_14304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14304__$1,4,in$);
} else
{if((state_val_14305 === 3))
{var inst_14302 = (state_14304[2]);var state_14304__$1 = state_14304;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14304__$1,inst_14302);
} else
{if((state_val_14305 === 4))
{var inst_14250 = (state_14304[7]);var inst_14250__$1 = (state_14304[2]);var inst_14251 = (inst_14250__$1 == null);var state_14304__$1 = (function (){var statearr_14307 = state_14304;(statearr_14307[7] = inst_14250__$1);
return statearr_14307;
})();if(cljs.core.truth_(inst_14251))
{var statearr_14308_14344 = state_14304__$1;(statearr_14308_14344[1] = 5);
} else
{var statearr_14309_14345 = state_14304__$1;(statearr_14309_14345[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 5))
{var inst_14253 = cljs.core.async.close_BANG_.call(null,out);var state_14304__$1 = state_14304;var statearr_14310_14346 = state_14304__$1;(statearr_14310_14346[2] = inst_14253);
(statearr_14310_14346[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 6))
{var inst_14250 = (state_14304[7]);var inst_14255 = f.call(null,inst_14250);var inst_14260 = cljs.core.seq.call(null,inst_14255);var inst_14261 = inst_14260;var inst_14262 = null;var inst_14263 = 0;var inst_14264 = 0;var state_14304__$1 = (function (){var statearr_14311 = state_14304;(statearr_14311[8] = inst_14264);
(statearr_14311[9] = inst_14261);
(statearr_14311[10] = inst_14263);
(statearr_14311[11] = inst_14262);
return statearr_14311;
})();var statearr_14312_14347 = state_14304__$1;(statearr_14312_14347[2] = null);
(statearr_14312_14347[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 7))
{var inst_14300 = (state_14304[2]);var state_14304__$1 = state_14304;var statearr_14313_14348 = state_14304__$1;(statearr_14313_14348[2] = inst_14300);
(statearr_14313_14348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 8))
{var inst_14264 = (state_14304[8]);var inst_14263 = (state_14304[10]);var inst_14266 = (inst_14264 < inst_14263);var inst_14267 = inst_14266;var state_14304__$1 = state_14304;if(cljs.core.truth_(inst_14267))
{var statearr_14314_14349 = state_14304__$1;(statearr_14314_14349[1] = 10);
} else
{var statearr_14315_14350 = state_14304__$1;(statearr_14315_14350[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 9))
{var inst_14297 = (state_14304[2]);var state_14304__$1 = (function (){var statearr_14316 = state_14304;(statearr_14316[12] = inst_14297);
return statearr_14316;
})();var statearr_14317_14351 = state_14304__$1;(statearr_14317_14351[2] = null);
(statearr_14317_14351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 10))
{var inst_14264 = (state_14304[8]);var inst_14262 = (state_14304[11]);var inst_14269 = cljs.core._nth.call(null,inst_14262,inst_14264);var state_14304__$1 = state_14304;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14304__$1,13,out,inst_14269);
} else
{if((state_val_14305 === 11))
{var inst_14261 = (state_14304[9]);var inst_14275 = (state_14304[13]);var inst_14275__$1 = cljs.core.seq.call(null,inst_14261);var state_14304__$1 = (function (){var statearr_14321 = state_14304;(statearr_14321[13] = inst_14275__$1);
return statearr_14321;
})();if(inst_14275__$1)
{var statearr_14322_14352 = state_14304__$1;(statearr_14322_14352[1] = 14);
} else
{var statearr_14323_14353 = state_14304__$1;(statearr_14323_14353[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 12))
{var inst_14295 = (state_14304[2]);var state_14304__$1 = state_14304;var statearr_14324_14354 = state_14304__$1;(statearr_14324_14354[2] = inst_14295);
(statearr_14324_14354[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 13))
{var inst_14264 = (state_14304[8]);var inst_14261 = (state_14304[9]);var inst_14263 = (state_14304[10]);var inst_14262 = (state_14304[11]);var inst_14271 = (state_14304[2]);var inst_14272 = (inst_14264 + 1);var tmp14318 = inst_14261;var tmp14319 = inst_14263;var tmp14320 = inst_14262;var inst_14261__$1 = tmp14318;var inst_14262__$1 = tmp14320;var inst_14263__$1 = tmp14319;var inst_14264__$1 = inst_14272;var state_14304__$1 = (function (){var statearr_14325 = state_14304;(statearr_14325[8] = inst_14264__$1);
(statearr_14325[9] = inst_14261__$1);
(statearr_14325[10] = inst_14263__$1);
(statearr_14325[11] = inst_14262__$1);
(statearr_14325[14] = inst_14271);
return statearr_14325;
})();var statearr_14326_14355 = state_14304__$1;(statearr_14326_14355[2] = null);
(statearr_14326_14355[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 14))
{var inst_14275 = (state_14304[13]);var inst_14277 = cljs.core.chunked_seq_QMARK_.call(null,inst_14275);var state_14304__$1 = state_14304;if(inst_14277)
{var statearr_14327_14356 = state_14304__$1;(statearr_14327_14356[1] = 17);
} else
{var statearr_14328_14357 = state_14304__$1;(statearr_14328_14357[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 15))
{var state_14304__$1 = state_14304;var statearr_14329_14358 = state_14304__$1;(statearr_14329_14358[2] = null);
(statearr_14329_14358[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 16))
{var inst_14293 = (state_14304[2]);var state_14304__$1 = state_14304;var statearr_14330_14359 = state_14304__$1;(statearr_14330_14359[2] = inst_14293);
(statearr_14330_14359[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 17))
{var inst_14275 = (state_14304[13]);var inst_14279 = cljs.core.chunk_first.call(null,inst_14275);var inst_14280 = cljs.core.chunk_rest.call(null,inst_14275);var inst_14281 = cljs.core.count.call(null,inst_14279);var inst_14261 = inst_14280;var inst_14262 = inst_14279;var inst_14263 = inst_14281;var inst_14264 = 0;var state_14304__$1 = (function (){var statearr_14331 = state_14304;(statearr_14331[8] = inst_14264);
(statearr_14331[9] = inst_14261);
(statearr_14331[10] = inst_14263);
(statearr_14331[11] = inst_14262);
return statearr_14331;
})();var statearr_14332_14360 = state_14304__$1;(statearr_14332_14360[2] = null);
(statearr_14332_14360[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 18))
{var inst_14275 = (state_14304[13]);var inst_14284 = cljs.core.first.call(null,inst_14275);var state_14304__$1 = state_14304;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14304__$1,20,out,inst_14284);
} else
{if((state_val_14305 === 19))
{var inst_14290 = (state_14304[2]);var state_14304__$1 = state_14304;var statearr_14333_14361 = state_14304__$1;(statearr_14333_14361[2] = inst_14290);
(statearr_14333_14361[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 20))
{var inst_14275 = (state_14304[13]);var inst_14286 = (state_14304[2]);var inst_14287 = cljs.core.next.call(null,inst_14275);var inst_14261 = inst_14287;var inst_14262 = null;var inst_14263 = 0;var inst_14264 = 0;var state_14304__$1 = (function (){var statearr_14334 = state_14304;(statearr_14334[15] = inst_14286);
(statearr_14334[8] = inst_14264);
(statearr_14334[9] = inst_14261);
(statearr_14334[10] = inst_14263);
(statearr_14334[11] = inst_14262);
return statearr_14334;
})();var statearr_14335_14362 = state_14304__$1;(statearr_14335_14362[2] = null);
(statearr_14335_14362[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14339[0] = state_machine__5548__auto__);
(statearr_14339[1] = 1);
return statearr_14339;
});
var state_machine__5548__auto____1 = (function (state_14304){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14304);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14340){if((e14340 instanceof Object))
{var ex__5551__auto__ = e14340;var statearr_14341_14363 = state_14304;(statearr_14341_14363[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14304);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14364 = state_14304;
state_14304 = G__14364;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14304){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14342 = f__5563__auto__.call(null);(statearr_14342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___14445 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14424){var state_val_14425 = (state_14424[1]);if((state_val_14425 === 1))
{var state_14424__$1 = state_14424;var statearr_14426_14446 = state_14424__$1;(statearr_14426_14446[2] = null);
(statearr_14426_14446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14425 === 2))
{var state_14424__$1 = state_14424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14424__$1,4,from);
} else
{if((state_val_14425 === 3))
{var inst_14422 = (state_14424[2]);var state_14424__$1 = state_14424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14424__$1,inst_14422);
} else
{if((state_val_14425 === 4))
{var inst_14407 = (state_14424[7]);var inst_14407__$1 = (state_14424[2]);var inst_14408 = (inst_14407__$1 == null);var state_14424__$1 = (function (){var statearr_14427 = state_14424;(statearr_14427[7] = inst_14407__$1);
return statearr_14427;
})();if(cljs.core.truth_(inst_14408))
{var statearr_14428_14447 = state_14424__$1;(statearr_14428_14447[1] = 5);
} else
{var statearr_14429_14448 = state_14424__$1;(statearr_14429_14448[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14425 === 5))
{var state_14424__$1 = state_14424;if(cljs.core.truth_(close_QMARK_))
{var statearr_14430_14449 = state_14424__$1;(statearr_14430_14449[1] = 8);
} else
{var statearr_14431_14450 = state_14424__$1;(statearr_14431_14450[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14425 === 6))
{var inst_14407 = (state_14424[7]);var state_14424__$1 = state_14424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14424__$1,11,to,inst_14407);
} else
{if((state_val_14425 === 7))
{var inst_14420 = (state_14424[2]);var state_14424__$1 = state_14424;var statearr_14432_14451 = state_14424__$1;(statearr_14432_14451[2] = inst_14420);
(statearr_14432_14451[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14425 === 8))
{var inst_14411 = cljs.core.async.close_BANG_.call(null,to);var state_14424__$1 = state_14424;var statearr_14433_14452 = state_14424__$1;(statearr_14433_14452[2] = inst_14411);
(statearr_14433_14452[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14425 === 9))
{var state_14424__$1 = state_14424;var statearr_14434_14453 = state_14424__$1;(statearr_14434_14453[2] = null);
(statearr_14434_14453[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14425 === 10))
{var inst_14414 = (state_14424[2]);var state_14424__$1 = state_14424;var statearr_14435_14454 = state_14424__$1;(statearr_14435_14454[2] = inst_14414);
(statearr_14435_14454[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14425 === 11))
{var inst_14417 = (state_14424[2]);var state_14424__$1 = (function (){var statearr_14436 = state_14424;(statearr_14436[8] = inst_14417);
return statearr_14436;
})();var statearr_14437_14455 = state_14424__$1;(statearr_14437_14455[2] = null);
(statearr_14437_14455[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14441 = [null,null,null,null,null,null,null,null,null];(statearr_14441[0] = state_machine__5548__auto__);
(statearr_14441[1] = 1);
return statearr_14441;
});
var state_machine__5548__auto____1 = (function (state_14424){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14424);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14442){if((e14442 instanceof Object))
{var ex__5551__auto__ = e14442;var statearr_14443_14456 = state_14424;(statearr_14443_14456[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14457 = state_14424;
state_14424 = G__14457;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14424){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14444 = f__5563__auto__.call(null);(statearr_14444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14445);
return statearr_14444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___14544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14522){var state_val_14523 = (state_14522[1]);if((state_val_14523 === 1))
{var state_14522__$1 = state_14522;var statearr_14524_14545 = state_14522__$1;(statearr_14524_14545[2] = null);
(statearr_14524_14545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 2))
{var state_14522__$1 = state_14522;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14522__$1,4,ch);
} else
{if((state_val_14523 === 3))
{var inst_14520 = (state_14522[2]);var state_14522__$1 = state_14522;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14522__$1,inst_14520);
} else
{if((state_val_14523 === 4))
{var inst_14503 = (state_14522[7]);var inst_14503__$1 = (state_14522[2]);var inst_14504 = (inst_14503__$1 == null);var state_14522__$1 = (function (){var statearr_14525 = state_14522;(statearr_14525[7] = inst_14503__$1);
return statearr_14525;
})();if(cljs.core.truth_(inst_14504))
{var statearr_14526_14546 = state_14522__$1;(statearr_14526_14546[1] = 5);
} else
{var statearr_14527_14547 = state_14522__$1;(statearr_14527_14547[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 5))
{var inst_14506 = cljs.core.async.close_BANG_.call(null,tc);var inst_14507 = cljs.core.async.close_BANG_.call(null,fc);var state_14522__$1 = (function (){var statearr_14528 = state_14522;(statearr_14528[8] = inst_14506);
return statearr_14528;
})();var statearr_14529_14548 = state_14522__$1;(statearr_14529_14548[2] = inst_14507);
(statearr_14529_14548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 6))
{var inst_14503 = (state_14522[7]);var inst_14509 = p.call(null,inst_14503);var state_14522__$1 = state_14522;if(cljs.core.truth_(inst_14509))
{var statearr_14530_14549 = state_14522__$1;(statearr_14530_14549[1] = 9);
} else
{var statearr_14531_14550 = state_14522__$1;(statearr_14531_14550[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 7))
{var inst_14518 = (state_14522[2]);var state_14522__$1 = state_14522;var statearr_14532_14551 = state_14522__$1;(statearr_14532_14551[2] = inst_14518);
(statearr_14532_14551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 8))
{var inst_14515 = (state_14522[2]);var state_14522__$1 = (function (){var statearr_14533 = state_14522;(statearr_14533[9] = inst_14515);
return statearr_14533;
})();var statearr_14534_14552 = state_14522__$1;(statearr_14534_14552[2] = null);
(statearr_14534_14552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 9))
{var state_14522__$1 = state_14522;var statearr_14535_14553 = state_14522__$1;(statearr_14535_14553[2] = tc);
(statearr_14535_14553[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 10))
{var state_14522__$1 = state_14522;var statearr_14536_14554 = state_14522__$1;(statearr_14536_14554[2] = fc);
(statearr_14536_14554[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14523 === 11))
{var inst_14503 = (state_14522[7]);var inst_14513 = (state_14522[2]);var state_14522__$1 = state_14522;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14522__$1,8,inst_14513,inst_14503);
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
var state_machine__5548__auto____0 = (function (){var statearr_14540 = [null,null,null,null,null,null,null,null,null,null];(statearr_14540[0] = state_machine__5548__auto__);
(statearr_14540[1] = 1);
return statearr_14540;
});
var state_machine__5548__auto____1 = (function (state_14522){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14522);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14541){if((e14541 instanceof Object))
{var ex__5551__auto__ = e14541;var statearr_14542_14555 = state_14522;(statearr_14542_14555[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14522);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14556 = state_14522;
state_14522 = G__14556;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14522){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14543 = f__5563__auto__.call(null);(statearr_14543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14544);
return statearr_14543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14603){var state_val_14604 = (state_14603[1]);if((state_val_14604 === 7))
{var inst_14599 = (state_14603[2]);var state_14603__$1 = state_14603;var statearr_14605_14621 = state_14603__$1;(statearr_14605_14621[2] = inst_14599);
(statearr_14605_14621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 6))
{var inst_14589 = (state_14603[7]);var inst_14592 = (state_14603[8]);var inst_14596 = f.call(null,inst_14589,inst_14592);var inst_14589__$1 = inst_14596;var state_14603__$1 = (function (){var statearr_14606 = state_14603;(statearr_14606[7] = inst_14589__$1);
return statearr_14606;
})();var statearr_14607_14622 = state_14603__$1;(statearr_14607_14622[2] = null);
(statearr_14607_14622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 5))
{var inst_14589 = (state_14603[7]);var state_14603__$1 = state_14603;var statearr_14608_14623 = state_14603__$1;(statearr_14608_14623[2] = inst_14589);
(statearr_14608_14623[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 4))
{var inst_14592 = (state_14603[8]);var inst_14592__$1 = (state_14603[2]);var inst_14593 = (inst_14592__$1 == null);var state_14603__$1 = (function (){var statearr_14609 = state_14603;(statearr_14609[8] = inst_14592__$1);
return statearr_14609;
})();if(cljs.core.truth_(inst_14593))
{var statearr_14610_14624 = state_14603__$1;(statearr_14610_14624[1] = 5);
} else
{var statearr_14611_14625 = state_14603__$1;(statearr_14611_14625[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 3))
{var inst_14601 = (state_14603[2]);var state_14603__$1 = state_14603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14603__$1,inst_14601);
} else
{if((state_val_14604 === 2))
{var state_14603__$1 = state_14603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14603__$1,4,ch);
} else
{if((state_val_14604 === 1))
{var inst_14589 = init;var state_14603__$1 = (function (){var statearr_14612 = state_14603;(statearr_14612[7] = inst_14589);
return statearr_14612;
})();var statearr_14613_14626 = state_14603__$1;(statearr_14613_14626[2] = null);
(statearr_14613_14626[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14617 = [null,null,null,null,null,null,null,null,null];(statearr_14617[0] = state_machine__5548__auto__);
(statearr_14617[1] = 1);
return statearr_14617;
});
var state_machine__5548__auto____1 = (function (state_14603){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14618){if((e14618 instanceof Object))
{var ex__5551__auto__ = e14618;var statearr_14619_14627 = state_14603;(statearr_14619_14627[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14628 = state_14603;
state_14603 = G__14628;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14603){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14620 = f__5563__auto__.call(null);(statearr_14620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14690){var state_val_14691 = (state_14690[1]);if((state_val_14691 === 1))
{var inst_14670 = cljs.core.seq.call(null,coll);var inst_14671 = inst_14670;var state_14690__$1 = (function (){var statearr_14692 = state_14690;(statearr_14692[7] = inst_14671);
return statearr_14692;
})();var statearr_14693_14711 = state_14690__$1;(statearr_14693_14711[2] = null);
(statearr_14693_14711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14691 === 2))
{var inst_14671 = (state_14690[7]);var state_14690__$1 = state_14690;if(cljs.core.truth_(inst_14671))
{var statearr_14694_14712 = state_14690__$1;(statearr_14694_14712[1] = 4);
} else
{var statearr_14695_14713 = state_14690__$1;(statearr_14695_14713[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14691 === 3))
{var inst_14688 = (state_14690[2]);var state_14690__$1 = state_14690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14690__$1,inst_14688);
} else
{if((state_val_14691 === 4))
{var inst_14671 = (state_14690[7]);var inst_14674 = cljs.core.first.call(null,inst_14671);var state_14690__$1 = state_14690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14690__$1,7,ch,inst_14674);
} else
{if((state_val_14691 === 5))
{var state_14690__$1 = state_14690;if(cljs.core.truth_(close_QMARK_))
{var statearr_14696_14714 = state_14690__$1;(statearr_14696_14714[1] = 8);
} else
{var statearr_14697_14715 = state_14690__$1;(statearr_14697_14715[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14691 === 6))
{var inst_14686 = (state_14690[2]);var state_14690__$1 = state_14690;var statearr_14698_14716 = state_14690__$1;(statearr_14698_14716[2] = inst_14686);
(statearr_14698_14716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14691 === 7))
{var inst_14671 = (state_14690[7]);var inst_14676 = (state_14690[2]);var inst_14677 = cljs.core.next.call(null,inst_14671);var inst_14671__$1 = inst_14677;var state_14690__$1 = (function (){var statearr_14699 = state_14690;(statearr_14699[8] = inst_14676);
(statearr_14699[7] = inst_14671__$1);
return statearr_14699;
})();var statearr_14700_14717 = state_14690__$1;(statearr_14700_14717[2] = null);
(statearr_14700_14717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14691 === 8))
{var inst_14681 = cljs.core.async.close_BANG_.call(null,ch);var state_14690__$1 = state_14690;var statearr_14701_14718 = state_14690__$1;(statearr_14701_14718[2] = inst_14681);
(statearr_14701_14718[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14691 === 9))
{var state_14690__$1 = state_14690;var statearr_14702_14719 = state_14690__$1;(statearr_14702_14719[2] = null);
(statearr_14702_14719[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14691 === 10))
{var inst_14684 = (state_14690[2]);var state_14690__$1 = state_14690;var statearr_14703_14720 = state_14690__$1;(statearr_14703_14720[2] = inst_14684);
(statearr_14703_14720[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14707 = [null,null,null,null,null,null,null,null,null];(statearr_14707[0] = state_machine__5548__auto__);
(statearr_14707[1] = 1);
return statearr_14707;
});
var state_machine__5548__auto____1 = (function (state_14690){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14690);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14708){if((e14708 instanceof Object))
{var ex__5551__auto__ = e14708;var statearr_14709_14721 = state_14690;(statearr_14709_14721[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14722 = state_14690;
state_14690 = G__14722;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14690){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14710 = f__5563__auto__.call(null);(statearr_14710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14724 = {};return obj14724;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14726 = {};return obj14726;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14950 = (function (cs,ch,mult,meta14951){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14951 = meta14951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14950.cljs$lang$type = true;
cljs.core.async.t14950.cljs$lang$ctorStr = "cljs.core.async/t14950";
cljs.core.async.t14950.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14950");
});})(cs))
;
cljs.core.async.t14950.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14950.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14950.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14950.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14950.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14952){var self__ = this;
var _14952__$1 = this;return self__.meta14951;
});})(cs))
;
cljs.core.async.t14950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14952,meta14951__$1){var self__ = this;
var _14952__$1 = this;return (new cljs.core.async.t14950(self__.cs,self__.ch,self__.mult,meta14951__$1));
});})(cs))
;
cljs.core.async.__GT_t14950 = ((function (cs){
return (function __GT_t14950(cs__$1,ch__$1,mult__$1,meta14951){return (new cljs.core.async.t14950(cs__$1,ch__$1,mult__$1,meta14951));
});})(cs))
;
}
return (new cljs.core.async.t14950(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___15173 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15087){var state_val_15088 = (state_15087[1]);if((state_val_15088 === 32))
{var inst_14955 = (state_15087[7]);var inst_15031 = (state_15087[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15087,31,Object,null,30);var inst_15038 = cljs.core.async.put_BANG_.call(null,inst_15031,inst_14955,done);var state_15087__$1 = state_15087;var statearr_15089_15174 = state_15087__$1;(statearr_15089_15174[2] = inst_15038);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15087__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 1))
{var state_15087__$1 = state_15087;var statearr_15090_15175 = state_15087__$1;(statearr_15090_15175[2] = null);
(statearr_15090_15175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 33))
{var inst_15044 = (state_15087[9]);var inst_15046 = cljs.core.chunked_seq_QMARK_.call(null,inst_15044);var state_15087__$1 = state_15087;if(inst_15046)
{var statearr_15091_15176 = state_15087__$1;(statearr_15091_15176[1] = 36);
} else
{var statearr_15092_15177 = state_15087__$1;(statearr_15092_15177[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 2))
{var state_15087__$1 = state_15087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15087__$1,4,ch);
} else
{if((state_val_15088 === 34))
{var state_15087__$1 = state_15087;var statearr_15093_15178 = state_15087__$1;(statearr_15093_15178[2] = null);
(statearr_15093_15178[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 3))
{var inst_15085 = (state_15087[2]);var state_15087__$1 = state_15087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15087__$1,inst_15085);
} else
{if((state_val_15088 === 35))
{var inst_15069 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15094_15179 = state_15087__$1;(statearr_15094_15179[2] = inst_15069);
(statearr_15094_15179[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 4))
{var inst_14955 = (state_15087[7]);var inst_14955__$1 = (state_15087[2]);var inst_14956 = (inst_14955__$1 == null);var state_15087__$1 = (function (){var statearr_15095 = state_15087;(statearr_15095[7] = inst_14955__$1);
return statearr_15095;
})();if(cljs.core.truth_(inst_14956))
{var statearr_15096_15180 = state_15087__$1;(statearr_15096_15180[1] = 5);
} else
{var statearr_15097_15181 = state_15087__$1;(statearr_15097_15181[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 36))
{var inst_15044 = (state_15087[9]);var inst_15048 = cljs.core.chunk_first.call(null,inst_15044);var inst_15049 = cljs.core.chunk_rest.call(null,inst_15044);var inst_15050 = cljs.core.count.call(null,inst_15048);var inst_15023 = inst_15049;var inst_15024 = inst_15048;var inst_15025 = inst_15050;var inst_15026 = 0;var state_15087__$1 = (function (){var statearr_15098 = state_15087;(statearr_15098[10] = inst_15025);
(statearr_15098[11] = inst_15026);
(statearr_15098[12] = inst_15023);
(statearr_15098[13] = inst_15024);
return statearr_15098;
})();var statearr_15099_15182 = state_15087__$1;(statearr_15099_15182[2] = null);
(statearr_15099_15182[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 5))
{var inst_14962 = cljs.core.deref.call(null,cs);var inst_14963 = cljs.core.seq.call(null,inst_14962);var inst_14964 = inst_14963;var inst_14965 = null;var inst_14966 = 0;var inst_14967 = 0;var state_15087__$1 = (function (){var statearr_15100 = state_15087;(statearr_15100[14] = inst_14965);
(statearr_15100[15] = inst_14966);
(statearr_15100[16] = inst_14967);
(statearr_15100[17] = inst_14964);
return statearr_15100;
})();var statearr_15101_15183 = state_15087__$1;(statearr_15101_15183[2] = null);
(statearr_15101_15183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 37))
{var inst_15044 = (state_15087[9]);var inst_15053 = cljs.core.first.call(null,inst_15044);var state_15087__$1 = (function (){var statearr_15102 = state_15087;(statearr_15102[18] = inst_15053);
return statearr_15102;
})();var statearr_15103_15184 = state_15087__$1;(statearr_15103_15184[2] = null);
(statearr_15103_15184[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 6))
{var inst_15015 = (state_15087[19]);var inst_15014 = cljs.core.deref.call(null,cs);var inst_15015__$1 = cljs.core.keys.call(null,inst_15014);var inst_15016 = cljs.core.count.call(null,inst_15015__$1);var inst_15017 = cljs.core.reset_BANG_.call(null,dctr,inst_15016);var inst_15022 = cljs.core.seq.call(null,inst_15015__$1);var inst_15023 = inst_15022;var inst_15024 = null;var inst_15025 = 0;var inst_15026 = 0;var state_15087__$1 = (function (){var statearr_15104 = state_15087;(statearr_15104[19] = inst_15015__$1);
(statearr_15104[10] = inst_15025);
(statearr_15104[11] = inst_15026);
(statearr_15104[12] = inst_15023);
(statearr_15104[13] = inst_15024);
(statearr_15104[20] = inst_15017);
return statearr_15104;
})();var statearr_15105_15185 = state_15087__$1;(statearr_15105_15185[2] = null);
(statearr_15105_15185[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 38))
{var inst_15066 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15106_15186 = state_15087__$1;(statearr_15106_15186[2] = inst_15066);
(statearr_15106_15186[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 7))
{var inst_15083 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15107_15187 = state_15087__$1;(statearr_15107_15187[2] = inst_15083);
(statearr_15107_15187[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 39))
{var inst_15044 = (state_15087[9]);var inst_15062 = (state_15087[2]);var inst_15063 = cljs.core.next.call(null,inst_15044);var inst_15023 = inst_15063;var inst_15024 = null;var inst_15025 = 0;var inst_15026 = 0;var state_15087__$1 = (function (){var statearr_15108 = state_15087;(statearr_15108[10] = inst_15025);
(statearr_15108[11] = inst_15026);
(statearr_15108[12] = inst_15023);
(statearr_15108[13] = inst_15024);
(statearr_15108[21] = inst_15062);
return statearr_15108;
})();var statearr_15109_15188 = state_15087__$1;(statearr_15109_15188[2] = null);
(statearr_15109_15188[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 8))
{var inst_14966 = (state_15087[15]);var inst_14967 = (state_15087[16]);var inst_14969 = (inst_14967 < inst_14966);var inst_14970 = inst_14969;var state_15087__$1 = state_15087;if(cljs.core.truth_(inst_14970))
{var statearr_15110_15189 = state_15087__$1;(statearr_15110_15189[1] = 10);
} else
{var statearr_15111_15190 = state_15087__$1;(statearr_15111_15190[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 40))
{var inst_15053 = (state_15087[18]);var inst_15054 = (state_15087[2]);var inst_15055 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15056 = cljs.core.async.untap_STAR_.call(null,m,inst_15053);var state_15087__$1 = (function (){var statearr_15112 = state_15087;(statearr_15112[22] = inst_15055);
(statearr_15112[23] = inst_15054);
return statearr_15112;
})();var statearr_15113_15191 = state_15087__$1;(statearr_15113_15191[2] = inst_15056);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15087__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 9))
{var inst_15012 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15114_15192 = state_15087__$1;(statearr_15114_15192[2] = inst_15012);
(statearr_15114_15192[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 41))
{var inst_15053 = (state_15087[18]);var inst_14955 = (state_15087[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15087,40,Object,null,39);var inst_15060 = cljs.core.async.put_BANG_.call(null,inst_15053,inst_14955,done);var state_15087__$1 = state_15087;var statearr_15115_15193 = state_15087__$1;(statearr_15115_15193[2] = inst_15060);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15087__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 10))
{var inst_14965 = (state_15087[14]);var inst_14967 = (state_15087[16]);var inst_14973 = cljs.core._nth.call(null,inst_14965,inst_14967);var inst_14974 = cljs.core.nth.call(null,inst_14973,0,null);var inst_14975 = cljs.core.nth.call(null,inst_14973,1,null);var state_15087__$1 = (function (){var statearr_15116 = state_15087;(statearr_15116[24] = inst_14974);
return statearr_15116;
})();if(cljs.core.truth_(inst_14975))
{var statearr_15117_15194 = state_15087__$1;(statearr_15117_15194[1] = 13);
} else
{var statearr_15118_15195 = state_15087__$1;(statearr_15118_15195[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 42))
{var state_15087__$1 = state_15087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15087__$1,45,dchan);
} else
{if((state_val_15088 === 11))
{var inst_14964 = (state_15087[17]);var inst_14984 = (state_15087[25]);var inst_14984__$1 = cljs.core.seq.call(null,inst_14964);var state_15087__$1 = (function (){var statearr_15119 = state_15087;(statearr_15119[25] = inst_14984__$1);
return statearr_15119;
})();if(inst_14984__$1)
{var statearr_15120_15196 = state_15087__$1;(statearr_15120_15196[1] = 16);
} else
{var statearr_15121_15197 = state_15087__$1;(statearr_15121_15197[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 43))
{var state_15087__$1 = state_15087;var statearr_15122_15198 = state_15087__$1;(statearr_15122_15198[2] = null);
(statearr_15122_15198[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 12))
{var inst_15010 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15123_15199 = state_15087__$1;(statearr_15123_15199[2] = inst_15010);
(statearr_15123_15199[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 44))
{var inst_15080 = (state_15087[2]);var state_15087__$1 = (function (){var statearr_15124 = state_15087;(statearr_15124[26] = inst_15080);
return statearr_15124;
})();var statearr_15125_15200 = state_15087__$1;(statearr_15125_15200[2] = null);
(statearr_15125_15200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 13))
{var inst_14974 = (state_15087[24]);var inst_14977 = cljs.core.async.close_BANG_.call(null,inst_14974);var state_15087__$1 = state_15087;var statearr_15126_15201 = state_15087__$1;(statearr_15126_15201[2] = inst_14977);
(statearr_15126_15201[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 45))
{var inst_15077 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15130_15202 = state_15087__$1;(statearr_15130_15202[2] = inst_15077);
(statearr_15130_15202[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 14))
{var state_15087__$1 = state_15087;var statearr_15131_15203 = state_15087__$1;(statearr_15131_15203[2] = null);
(statearr_15131_15203[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 15))
{var inst_14965 = (state_15087[14]);var inst_14966 = (state_15087[15]);var inst_14967 = (state_15087[16]);var inst_14964 = (state_15087[17]);var inst_14980 = (state_15087[2]);var inst_14981 = (inst_14967 + 1);var tmp15127 = inst_14965;var tmp15128 = inst_14966;var tmp15129 = inst_14964;var inst_14964__$1 = tmp15129;var inst_14965__$1 = tmp15127;var inst_14966__$1 = tmp15128;var inst_14967__$1 = inst_14981;var state_15087__$1 = (function (){var statearr_15132 = state_15087;(statearr_15132[14] = inst_14965__$1);
(statearr_15132[15] = inst_14966__$1);
(statearr_15132[16] = inst_14967__$1);
(statearr_15132[17] = inst_14964__$1);
(statearr_15132[27] = inst_14980);
return statearr_15132;
})();var statearr_15133_15204 = state_15087__$1;(statearr_15133_15204[2] = null);
(statearr_15133_15204[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 16))
{var inst_14984 = (state_15087[25]);var inst_14986 = cljs.core.chunked_seq_QMARK_.call(null,inst_14984);var state_15087__$1 = state_15087;if(inst_14986)
{var statearr_15134_15205 = state_15087__$1;(statearr_15134_15205[1] = 19);
} else
{var statearr_15135_15206 = state_15087__$1;(statearr_15135_15206[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 17))
{var state_15087__$1 = state_15087;var statearr_15136_15207 = state_15087__$1;(statearr_15136_15207[2] = null);
(statearr_15136_15207[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 18))
{var inst_15008 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15137_15208 = state_15087__$1;(statearr_15137_15208[2] = inst_15008);
(statearr_15137_15208[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 19))
{var inst_14984 = (state_15087[25]);var inst_14988 = cljs.core.chunk_first.call(null,inst_14984);var inst_14989 = cljs.core.chunk_rest.call(null,inst_14984);var inst_14990 = cljs.core.count.call(null,inst_14988);var inst_14964 = inst_14989;var inst_14965 = inst_14988;var inst_14966 = inst_14990;var inst_14967 = 0;var state_15087__$1 = (function (){var statearr_15138 = state_15087;(statearr_15138[14] = inst_14965);
(statearr_15138[15] = inst_14966);
(statearr_15138[16] = inst_14967);
(statearr_15138[17] = inst_14964);
return statearr_15138;
})();var statearr_15139_15209 = state_15087__$1;(statearr_15139_15209[2] = null);
(statearr_15139_15209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 20))
{var inst_14984 = (state_15087[25]);var inst_14994 = cljs.core.first.call(null,inst_14984);var inst_14995 = cljs.core.nth.call(null,inst_14994,0,null);var inst_14996 = cljs.core.nth.call(null,inst_14994,1,null);var state_15087__$1 = (function (){var statearr_15140 = state_15087;(statearr_15140[28] = inst_14995);
return statearr_15140;
})();if(cljs.core.truth_(inst_14996))
{var statearr_15141_15210 = state_15087__$1;(statearr_15141_15210[1] = 22);
} else
{var statearr_15142_15211 = state_15087__$1;(statearr_15142_15211[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 21))
{var inst_15005 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15143_15212 = state_15087__$1;(statearr_15143_15212[2] = inst_15005);
(statearr_15143_15212[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 22))
{var inst_14995 = (state_15087[28]);var inst_14998 = cljs.core.async.close_BANG_.call(null,inst_14995);var state_15087__$1 = state_15087;var statearr_15144_15213 = state_15087__$1;(statearr_15144_15213[2] = inst_14998);
(statearr_15144_15213[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 23))
{var state_15087__$1 = state_15087;var statearr_15145_15214 = state_15087__$1;(statearr_15145_15214[2] = null);
(statearr_15145_15214[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 24))
{var inst_14984 = (state_15087[25]);var inst_15001 = (state_15087[2]);var inst_15002 = cljs.core.next.call(null,inst_14984);var inst_14964 = inst_15002;var inst_14965 = null;var inst_14966 = 0;var inst_14967 = 0;var state_15087__$1 = (function (){var statearr_15146 = state_15087;(statearr_15146[14] = inst_14965);
(statearr_15146[15] = inst_14966);
(statearr_15146[16] = inst_14967);
(statearr_15146[17] = inst_14964);
(statearr_15146[29] = inst_15001);
return statearr_15146;
})();var statearr_15147_15215 = state_15087__$1;(statearr_15147_15215[2] = null);
(statearr_15147_15215[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 25))
{var inst_15025 = (state_15087[10]);var inst_15026 = (state_15087[11]);var inst_15028 = (inst_15026 < inst_15025);var inst_15029 = inst_15028;var state_15087__$1 = state_15087;if(cljs.core.truth_(inst_15029))
{var statearr_15148_15216 = state_15087__$1;(statearr_15148_15216[1] = 27);
} else
{var statearr_15149_15217 = state_15087__$1;(statearr_15149_15217[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 26))
{var inst_15015 = (state_15087[19]);var inst_15073 = (state_15087[2]);var inst_15074 = cljs.core.seq.call(null,inst_15015);var state_15087__$1 = (function (){var statearr_15150 = state_15087;(statearr_15150[30] = inst_15073);
return statearr_15150;
})();if(inst_15074)
{var statearr_15151_15218 = state_15087__$1;(statearr_15151_15218[1] = 42);
} else
{var statearr_15152_15219 = state_15087__$1;(statearr_15152_15219[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 27))
{var inst_15026 = (state_15087[11]);var inst_15024 = (state_15087[13]);var inst_15031 = cljs.core._nth.call(null,inst_15024,inst_15026);var state_15087__$1 = (function (){var statearr_15153 = state_15087;(statearr_15153[8] = inst_15031);
return statearr_15153;
})();var statearr_15154_15220 = state_15087__$1;(statearr_15154_15220[2] = null);
(statearr_15154_15220[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 28))
{var inst_15023 = (state_15087[12]);var inst_15044 = (state_15087[9]);var inst_15044__$1 = cljs.core.seq.call(null,inst_15023);var state_15087__$1 = (function (){var statearr_15158 = state_15087;(statearr_15158[9] = inst_15044__$1);
return statearr_15158;
})();if(inst_15044__$1)
{var statearr_15159_15221 = state_15087__$1;(statearr_15159_15221[1] = 33);
} else
{var statearr_15160_15222 = state_15087__$1;(statearr_15160_15222[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 29))
{var inst_15071 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15161_15223 = state_15087__$1;(statearr_15161_15223[2] = inst_15071);
(statearr_15161_15223[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 30))
{var inst_15025 = (state_15087[10]);var inst_15026 = (state_15087[11]);var inst_15023 = (state_15087[12]);var inst_15024 = (state_15087[13]);var inst_15040 = (state_15087[2]);var inst_15041 = (inst_15026 + 1);var tmp15155 = inst_15025;var tmp15156 = inst_15023;var tmp15157 = inst_15024;var inst_15023__$1 = tmp15156;var inst_15024__$1 = tmp15157;var inst_15025__$1 = tmp15155;var inst_15026__$1 = inst_15041;var state_15087__$1 = (function (){var statearr_15162 = state_15087;(statearr_15162[31] = inst_15040);
(statearr_15162[10] = inst_15025__$1);
(statearr_15162[11] = inst_15026__$1);
(statearr_15162[12] = inst_15023__$1);
(statearr_15162[13] = inst_15024__$1);
return statearr_15162;
})();var statearr_15163_15224 = state_15087__$1;(statearr_15163_15224[2] = null);
(statearr_15163_15224[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 31))
{var inst_15031 = (state_15087[8]);var inst_15032 = (state_15087[2]);var inst_15033 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15034 = cljs.core.async.untap_STAR_.call(null,m,inst_15031);var state_15087__$1 = (function (){var statearr_15164 = state_15087;(statearr_15164[32] = inst_15033);
(statearr_15164[33] = inst_15032);
return statearr_15164;
})();var statearr_15165_15225 = state_15087__$1;(statearr_15165_15225[2] = inst_15034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15087__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15169[0] = state_machine__5548__auto__);
(statearr_15169[1] = 1);
return statearr_15169;
});
var state_machine__5548__auto____1 = (function (state_15087){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15087);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15170){if((e15170 instanceof Object))
{var ex__5551__auto__ = e15170;var statearr_15171_15226 = state_15087;(statearr_15171_15226[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15170;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15227 = state_15087;
state_15087 = G__15227;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15087){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15172 = f__5563__auto__.call(null);(statearr_15172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15173);
return statearr_15172;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj15229 = {};return obj15229;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
;var m = (function (){if(typeof cljs.core.async.t15339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15339 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15340){
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
this.meta15340 = meta15340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15339.cljs$lang$type = true;
cljs.core.async.t15339.cljs$lang$ctorStr = "cljs.core.async/t15339";
cljs.core.async.t15339.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15339");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15339.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15341){var self__ = this;
var _15341__$1 = this;return self__.meta15340;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15341,meta15340__$1){var self__ = this;
var _15341__$1 = this;return (new cljs.core.async.t15339(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15340__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15339 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15339(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15340){return (new cljs.core.async.t15339(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15340));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15339(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___15448 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15406){var state_val_15407 = (state_15406[1]);if((state_val_15407 === 1))
{var inst_15345 = (state_15406[7]);var inst_15345__$1 = calc_state.call(null);var inst_15346 = cljs.core.seq_QMARK_.call(null,inst_15345__$1);var state_15406__$1 = (function (){var statearr_15408 = state_15406;(statearr_15408[7] = inst_15345__$1);
return statearr_15408;
})();if(inst_15346)
{var statearr_15409_15449 = state_15406__$1;(statearr_15409_15449[1] = 2);
} else
{var statearr_15410_15450 = state_15406__$1;(statearr_15410_15450[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 2))
{var inst_15345 = (state_15406[7]);var inst_15348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15345);var state_15406__$1 = state_15406;var statearr_15411_15451 = state_15406__$1;(statearr_15411_15451[2] = inst_15348);
(statearr_15411_15451[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 3))
{var inst_15345 = (state_15406[7]);var state_15406__$1 = state_15406;var statearr_15412_15452 = state_15406__$1;(statearr_15412_15452[2] = inst_15345);
(statearr_15412_15452[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 4))
{var inst_15345 = (state_15406[7]);var inst_15351 = (state_15406[2]);var inst_15352 = cljs.core.get.call(null,inst_15351,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15353 = cljs.core.get.call(null,inst_15351,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15354 = cljs.core.get.call(null,inst_15351,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15355 = inst_15345;var state_15406__$1 = (function (){var statearr_15413 = state_15406;(statearr_15413[8] = inst_15355);
(statearr_15413[9] = inst_15353);
(statearr_15413[10] = inst_15354);
(statearr_15413[11] = inst_15352);
return statearr_15413;
})();var statearr_15414_15453 = state_15406__$1;(statearr_15414_15453[2] = null);
(statearr_15414_15453[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 5))
{var inst_15355 = (state_15406[8]);var inst_15358 = cljs.core.seq_QMARK_.call(null,inst_15355);var state_15406__$1 = state_15406;if(inst_15358)
{var statearr_15415_15454 = state_15406__$1;(statearr_15415_15454[1] = 7);
} else
{var statearr_15416_15455 = state_15406__$1;(statearr_15416_15455[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 6))
{var inst_15404 = (state_15406[2]);var state_15406__$1 = state_15406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15406__$1,inst_15404);
} else
{if((state_val_15407 === 7))
{var inst_15355 = (state_15406[8]);var inst_15360 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15355);var state_15406__$1 = state_15406;var statearr_15417_15456 = state_15406__$1;(statearr_15417_15456[2] = inst_15360);
(statearr_15417_15456[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 8))
{var inst_15355 = (state_15406[8]);var state_15406__$1 = state_15406;var statearr_15418_15457 = state_15406__$1;(statearr_15418_15457[2] = inst_15355);
(statearr_15418_15457[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 9))
{var inst_15363 = (state_15406[12]);var inst_15363__$1 = (state_15406[2]);var inst_15364 = cljs.core.get.call(null,inst_15363__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15365 = cljs.core.get.call(null,inst_15363__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15366 = cljs.core.get.call(null,inst_15363__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15406__$1 = (function (){var statearr_15419 = state_15406;(statearr_15419[13] = inst_15366);
(statearr_15419[14] = inst_15365);
(statearr_15419[12] = inst_15363__$1);
return statearr_15419;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15406__$1,10,inst_15364);
} else
{if((state_val_15407 === 10))
{var inst_15371 = (state_15406[15]);var inst_15370 = (state_15406[16]);var inst_15369 = (state_15406[2]);var inst_15370__$1 = cljs.core.nth.call(null,inst_15369,0,null);var inst_15371__$1 = cljs.core.nth.call(null,inst_15369,1,null);var inst_15372 = (inst_15370__$1 == null);var inst_15373 = cljs.core._EQ_.call(null,inst_15371__$1,change);var inst_15374 = (inst_15372) || (inst_15373);var state_15406__$1 = (function (){var statearr_15420 = state_15406;(statearr_15420[15] = inst_15371__$1);
(statearr_15420[16] = inst_15370__$1);
return statearr_15420;
})();if(cljs.core.truth_(inst_15374))
{var statearr_15421_15458 = state_15406__$1;(statearr_15421_15458[1] = 11);
} else
{var statearr_15422_15459 = state_15406__$1;(statearr_15422_15459[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 11))
{var inst_15370 = (state_15406[16]);var inst_15376 = (inst_15370 == null);var state_15406__$1 = state_15406;if(cljs.core.truth_(inst_15376))
{var statearr_15423_15460 = state_15406__$1;(statearr_15423_15460[1] = 14);
} else
{var statearr_15424_15461 = state_15406__$1;(statearr_15424_15461[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 12))
{var inst_15371 = (state_15406[15]);var inst_15385 = (state_15406[17]);var inst_15366 = (state_15406[13]);var inst_15385__$1 = inst_15366.call(null,inst_15371);var state_15406__$1 = (function (){var statearr_15425 = state_15406;(statearr_15425[17] = inst_15385__$1);
return statearr_15425;
})();if(cljs.core.truth_(inst_15385__$1))
{var statearr_15426_15462 = state_15406__$1;(statearr_15426_15462[1] = 17);
} else
{var statearr_15427_15463 = state_15406__$1;(statearr_15427_15463[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 13))
{var inst_15402 = (state_15406[2]);var state_15406__$1 = state_15406;var statearr_15428_15464 = state_15406__$1;(statearr_15428_15464[2] = inst_15402);
(statearr_15428_15464[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 14))
{var inst_15371 = (state_15406[15]);var inst_15378 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15371);var state_15406__$1 = state_15406;var statearr_15429_15465 = state_15406__$1;(statearr_15429_15465[2] = inst_15378);
(statearr_15429_15465[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 15))
{var state_15406__$1 = state_15406;var statearr_15430_15466 = state_15406__$1;(statearr_15430_15466[2] = null);
(statearr_15430_15466[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 16))
{var inst_15381 = (state_15406[2]);var inst_15382 = calc_state.call(null);var inst_15355 = inst_15382;var state_15406__$1 = (function (){var statearr_15431 = state_15406;(statearr_15431[8] = inst_15355);
(statearr_15431[18] = inst_15381);
return statearr_15431;
})();var statearr_15432_15467 = state_15406__$1;(statearr_15432_15467[2] = null);
(statearr_15432_15467[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 17))
{var inst_15385 = (state_15406[17]);var state_15406__$1 = state_15406;var statearr_15433_15468 = state_15406__$1;(statearr_15433_15468[2] = inst_15385);
(statearr_15433_15468[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 18))
{var inst_15371 = (state_15406[15]);var inst_15366 = (state_15406[13]);var inst_15365 = (state_15406[14]);var inst_15388 = cljs.core.empty_QMARK_.call(null,inst_15366);var inst_15389 = inst_15365.call(null,inst_15371);var inst_15390 = cljs.core.not.call(null,inst_15389);var inst_15391 = (inst_15388) && (inst_15390);var state_15406__$1 = state_15406;var statearr_15434_15469 = state_15406__$1;(statearr_15434_15469[2] = inst_15391);
(statearr_15434_15469[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 19))
{var inst_15393 = (state_15406[2]);var state_15406__$1 = state_15406;if(cljs.core.truth_(inst_15393))
{var statearr_15435_15470 = state_15406__$1;(statearr_15435_15470[1] = 20);
} else
{var statearr_15436_15471 = state_15406__$1;(statearr_15436_15471[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 20))
{var inst_15370 = (state_15406[16]);var state_15406__$1 = state_15406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15406__$1,23,out,inst_15370);
} else
{if((state_val_15407 === 21))
{var state_15406__$1 = state_15406;var statearr_15437_15472 = state_15406__$1;(statearr_15437_15472[2] = null);
(statearr_15437_15472[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 22))
{var inst_15363 = (state_15406[12]);var inst_15399 = (state_15406[2]);var inst_15355 = inst_15363;var state_15406__$1 = (function (){var statearr_15438 = state_15406;(statearr_15438[19] = inst_15399);
(statearr_15438[8] = inst_15355);
return statearr_15438;
})();var statearr_15439_15473 = state_15406__$1;(statearr_15439_15473[2] = null);
(statearr_15439_15473[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15407 === 23))
{var inst_15396 = (state_15406[2]);var state_15406__$1 = state_15406;var statearr_15440_15474 = state_15406__$1;(statearr_15440_15474[2] = inst_15396);
(statearr_15440_15474[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15444[0] = state_machine__5548__auto__);
(statearr_15444[1] = 1);
return statearr_15444;
});
var state_machine__5548__auto____1 = (function (state_15406){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15445){if((e15445 instanceof Object))
{var ex__5551__auto__ = e15445;var statearr_15446_15475 = state_15406;(statearr_15446_15475[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15476 = state_15406;
state_15406 = G__15476;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15406){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15447 = f__5563__auto__.call(null);(statearr_15447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15448);
return statearr_15447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj15478 = {};return obj15478;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__15479_SHARP_){if(cljs.core.truth_(p1__15479_SHARP_.call(null,topic)))
{return p1__15479_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15479_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15604 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15605){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15605 = meta15605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15604.cljs$lang$type = true;
cljs.core.async.t15604.cljs$lang$ctorStr = "cljs.core.async/t15604";
cljs.core.async.t15604.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15604");
});})(mults,ensure_mult))
;
cljs.core.async.t15604.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15604.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15604.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15604.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15606){var self__ = this;
var _15606__$1 = this;return self__.meta15605;
});})(mults,ensure_mult))
;
cljs.core.async.t15604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15606,meta15605__$1){var self__ = this;
var _15606__$1 = this;return (new cljs.core.async.t15604(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15605__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15604 = ((function (mults,ensure_mult){
return (function __GT_t15604(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15605){return (new cljs.core.async.t15604(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15605));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15604(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___15728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15680){var state_val_15681 = (state_15680[1]);if((state_val_15681 === 1))
{var state_15680__$1 = state_15680;var statearr_15682_15729 = state_15680__$1;(statearr_15682_15729[2] = null);
(statearr_15682_15729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 2))
{var state_15680__$1 = state_15680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15680__$1,4,ch);
} else
{if((state_val_15681 === 3))
{var inst_15678 = (state_15680[2]);var state_15680__$1 = state_15680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15680__$1,inst_15678);
} else
{if((state_val_15681 === 4))
{var inst_15609 = (state_15680[7]);var inst_15609__$1 = (state_15680[2]);var inst_15610 = (inst_15609__$1 == null);var state_15680__$1 = (function (){var statearr_15683 = state_15680;(statearr_15683[7] = inst_15609__$1);
return statearr_15683;
})();if(cljs.core.truth_(inst_15610))
{var statearr_15684_15730 = state_15680__$1;(statearr_15684_15730[1] = 5);
} else
{var statearr_15685_15731 = state_15680__$1;(statearr_15685_15731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 5))
{var inst_15616 = cljs.core.deref.call(null,mults);var inst_15617 = cljs.core.vals.call(null,inst_15616);var inst_15618 = cljs.core.seq.call(null,inst_15617);var inst_15619 = inst_15618;var inst_15620 = null;var inst_15621 = 0;var inst_15622 = 0;var state_15680__$1 = (function (){var statearr_15686 = state_15680;(statearr_15686[8] = inst_15622);
(statearr_15686[9] = inst_15621);
(statearr_15686[10] = inst_15620);
(statearr_15686[11] = inst_15619);
return statearr_15686;
})();var statearr_15687_15732 = state_15680__$1;(statearr_15687_15732[2] = null);
(statearr_15687_15732[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 6))
{var inst_15659 = (state_15680[12]);var inst_15657 = (state_15680[13]);var inst_15609 = (state_15680[7]);var inst_15657__$1 = topic_fn.call(null,inst_15609);var inst_15658 = cljs.core.deref.call(null,mults);var inst_15659__$1 = cljs.core.get.call(null,inst_15658,inst_15657__$1);var state_15680__$1 = (function (){var statearr_15688 = state_15680;(statearr_15688[12] = inst_15659__$1);
(statearr_15688[13] = inst_15657__$1);
return statearr_15688;
})();if(cljs.core.truth_(inst_15659__$1))
{var statearr_15689_15733 = state_15680__$1;(statearr_15689_15733[1] = 19);
} else
{var statearr_15690_15734 = state_15680__$1;(statearr_15690_15734[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 7))
{var inst_15676 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15691_15735 = state_15680__$1;(statearr_15691_15735[2] = inst_15676);
(statearr_15691_15735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 8))
{var inst_15622 = (state_15680[8]);var inst_15621 = (state_15680[9]);var inst_15624 = (inst_15622 < inst_15621);var inst_15625 = inst_15624;var state_15680__$1 = state_15680;if(cljs.core.truth_(inst_15625))
{var statearr_15695_15736 = state_15680__$1;(statearr_15695_15736[1] = 10);
} else
{var statearr_15696_15737 = state_15680__$1;(statearr_15696_15737[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 9))
{var inst_15655 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15697_15738 = state_15680__$1;(statearr_15697_15738[2] = inst_15655);
(statearr_15697_15738[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 10))
{var inst_15622 = (state_15680[8]);var inst_15621 = (state_15680[9]);var inst_15620 = (state_15680[10]);var inst_15619 = (state_15680[11]);var inst_15627 = cljs.core._nth.call(null,inst_15620,inst_15622);var inst_15628 = cljs.core.async.muxch_STAR_.call(null,inst_15627);var inst_15629 = cljs.core.async.close_BANG_.call(null,inst_15628);var inst_15630 = (inst_15622 + 1);var tmp15692 = inst_15621;var tmp15693 = inst_15620;var tmp15694 = inst_15619;var inst_15619__$1 = tmp15694;var inst_15620__$1 = tmp15693;var inst_15621__$1 = tmp15692;var inst_15622__$1 = inst_15630;var state_15680__$1 = (function (){var statearr_15698 = state_15680;(statearr_15698[14] = inst_15629);
(statearr_15698[8] = inst_15622__$1);
(statearr_15698[9] = inst_15621__$1);
(statearr_15698[10] = inst_15620__$1);
(statearr_15698[11] = inst_15619__$1);
return statearr_15698;
})();var statearr_15699_15739 = state_15680__$1;(statearr_15699_15739[2] = null);
(statearr_15699_15739[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 11))
{var inst_15619 = (state_15680[11]);var inst_15633 = (state_15680[15]);var inst_15633__$1 = cljs.core.seq.call(null,inst_15619);var state_15680__$1 = (function (){var statearr_15700 = state_15680;(statearr_15700[15] = inst_15633__$1);
return statearr_15700;
})();if(inst_15633__$1)
{var statearr_15701_15740 = state_15680__$1;(statearr_15701_15740[1] = 13);
} else
{var statearr_15702_15741 = state_15680__$1;(statearr_15702_15741[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 12))
{var inst_15653 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15703_15742 = state_15680__$1;(statearr_15703_15742[2] = inst_15653);
(statearr_15703_15742[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 13))
{var inst_15633 = (state_15680[15]);var inst_15635 = cljs.core.chunked_seq_QMARK_.call(null,inst_15633);var state_15680__$1 = state_15680;if(inst_15635)
{var statearr_15704_15743 = state_15680__$1;(statearr_15704_15743[1] = 16);
} else
{var statearr_15705_15744 = state_15680__$1;(statearr_15705_15744[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 14))
{var state_15680__$1 = state_15680;var statearr_15706_15745 = state_15680__$1;(statearr_15706_15745[2] = null);
(statearr_15706_15745[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 15))
{var inst_15651 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15707_15746 = state_15680__$1;(statearr_15707_15746[2] = inst_15651);
(statearr_15707_15746[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 16))
{var inst_15633 = (state_15680[15]);var inst_15637 = cljs.core.chunk_first.call(null,inst_15633);var inst_15638 = cljs.core.chunk_rest.call(null,inst_15633);var inst_15639 = cljs.core.count.call(null,inst_15637);var inst_15619 = inst_15638;var inst_15620 = inst_15637;var inst_15621 = inst_15639;var inst_15622 = 0;var state_15680__$1 = (function (){var statearr_15708 = state_15680;(statearr_15708[8] = inst_15622);
(statearr_15708[9] = inst_15621);
(statearr_15708[10] = inst_15620);
(statearr_15708[11] = inst_15619);
return statearr_15708;
})();var statearr_15709_15747 = state_15680__$1;(statearr_15709_15747[2] = null);
(statearr_15709_15747[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 17))
{var inst_15633 = (state_15680[15]);var inst_15642 = cljs.core.first.call(null,inst_15633);var inst_15643 = cljs.core.async.muxch_STAR_.call(null,inst_15642);var inst_15644 = cljs.core.async.close_BANG_.call(null,inst_15643);var inst_15645 = cljs.core.next.call(null,inst_15633);var inst_15619 = inst_15645;var inst_15620 = null;var inst_15621 = 0;var inst_15622 = 0;var state_15680__$1 = (function (){var statearr_15710 = state_15680;(statearr_15710[8] = inst_15622);
(statearr_15710[9] = inst_15621);
(statearr_15710[10] = inst_15620);
(statearr_15710[16] = inst_15644);
(statearr_15710[11] = inst_15619);
return statearr_15710;
})();var statearr_15711_15748 = state_15680__$1;(statearr_15711_15748[2] = null);
(statearr_15711_15748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 18))
{var inst_15648 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15712_15749 = state_15680__$1;(statearr_15712_15749[2] = inst_15648);
(statearr_15712_15749[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 19))
{var state_15680__$1 = state_15680;var statearr_15713_15750 = state_15680__$1;(statearr_15713_15750[2] = null);
(statearr_15713_15750[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 20))
{var state_15680__$1 = state_15680;var statearr_15714_15751 = state_15680__$1;(statearr_15714_15751[2] = null);
(statearr_15714_15751[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 21))
{var inst_15673 = (state_15680[2]);var state_15680__$1 = (function (){var statearr_15715 = state_15680;(statearr_15715[17] = inst_15673);
return statearr_15715;
})();var statearr_15716_15752 = state_15680__$1;(statearr_15716_15752[2] = null);
(statearr_15716_15752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 22))
{var inst_15670 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15717_15753 = state_15680__$1;(statearr_15717_15753[2] = inst_15670);
(statearr_15717_15753[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 23))
{var inst_15657 = (state_15680[13]);var inst_15661 = (state_15680[2]);var inst_15662 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15657);var state_15680__$1 = (function (){var statearr_15718 = state_15680;(statearr_15718[18] = inst_15661);
return statearr_15718;
})();var statearr_15719_15754 = state_15680__$1;(statearr_15719_15754[2] = inst_15662);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15680__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 24))
{var inst_15659 = (state_15680[12]);var inst_15609 = (state_15680[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15680,23,Object,null,22);var inst_15666 = cljs.core.async.muxch_STAR_.call(null,inst_15659);var state_15680__$1 = state_15680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15680__$1,25,inst_15666,inst_15609);
} else
{if((state_val_15681 === 25))
{var inst_15668 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15720_15755 = state_15680__$1;(statearr_15720_15755[2] = inst_15668);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15680__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15724[0] = state_machine__5548__auto__);
(statearr_15724[1] = 1);
return statearr_15724;
});
var state_machine__5548__auto____1 = (function (state_15680){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15725){if((e15725 instanceof Object))
{var ex__5551__auto__ = e15725;var statearr_15726_15756 = state_15680;(statearr_15726_15756[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15757 = state_15680;
state_15680 = G__15757;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15680){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15727 = f__5563__auto__.call(null);(statearr_15727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15728);
return statearr_15727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
,cljs.core.range.call(null,cnt));var c__5562__auto___15894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15864){var state_val_15865 = (state_15864[1]);if((state_val_15865 === 1))
{var state_15864__$1 = state_15864;var statearr_15866_15895 = state_15864__$1;(statearr_15866_15895[2] = null);
(statearr_15866_15895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 2))
{var inst_15827 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15828 = 0;var state_15864__$1 = (function (){var statearr_15867 = state_15864;(statearr_15867[7] = inst_15828);
(statearr_15867[8] = inst_15827);
return statearr_15867;
})();var statearr_15868_15896 = state_15864__$1;(statearr_15868_15896[2] = null);
(statearr_15868_15896[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 3))
{var inst_15862 = (state_15864[2]);var state_15864__$1 = state_15864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15864__$1,inst_15862);
} else
{if((state_val_15865 === 4))
{var inst_15828 = (state_15864[7]);var inst_15830 = (inst_15828 < cnt);var state_15864__$1 = state_15864;if(cljs.core.truth_(inst_15830))
{var statearr_15869_15897 = state_15864__$1;(statearr_15869_15897[1] = 6);
} else
{var statearr_15870_15898 = state_15864__$1;(statearr_15870_15898[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 5))
{var inst_15848 = (state_15864[2]);var state_15864__$1 = (function (){var statearr_15871 = state_15864;(statearr_15871[9] = inst_15848);
return statearr_15871;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15864__$1,12,dchan);
} else
{if((state_val_15865 === 6))
{var state_15864__$1 = state_15864;var statearr_15872_15899 = state_15864__$1;(statearr_15872_15899[2] = null);
(statearr_15872_15899[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 7))
{var state_15864__$1 = state_15864;var statearr_15873_15900 = state_15864__$1;(statearr_15873_15900[2] = null);
(statearr_15873_15900[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 8))
{var inst_15846 = (state_15864[2]);var state_15864__$1 = state_15864;var statearr_15874_15901 = state_15864__$1;(statearr_15874_15901[2] = inst_15846);
(statearr_15874_15901[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 9))
{var inst_15828 = (state_15864[7]);var inst_15841 = (state_15864[2]);var inst_15842 = (inst_15828 + 1);var inst_15828__$1 = inst_15842;var state_15864__$1 = (function (){var statearr_15875 = state_15864;(statearr_15875[7] = inst_15828__$1);
(statearr_15875[10] = inst_15841);
return statearr_15875;
})();var statearr_15876_15902 = state_15864__$1;(statearr_15876_15902[2] = null);
(statearr_15876_15902[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 10))
{var inst_15832 = (state_15864[2]);var inst_15833 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15864__$1 = (function (){var statearr_15877 = state_15864;(statearr_15877[11] = inst_15832);
return statearr_15877;
})();var statearr_15878_15903 = state_15864__$1;(statearr_15878_15903[2] = inst_15833);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15864__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 11))
{var inst_15828 = (state_15864[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15864,10,Object,null,9);var inst_15837 = chs__$1.call(null,inst_15828);var inst_15838 = done.call(null,inst_15828);var inst_15839 = cljs.core.async.take_BANG_.call(null,inst_15837,inst_15838);var state_15864__$1 = state_15864;var statearr_15879_15904 = state_15864__$1;(statearr_15879_15904[2] = inst_15839);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15864__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 12))
{var inst_15850 = (state_15864[12]);var inst_15850__$1 = (state_15864[2]);var inst_15851 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15850__$1);var state_15864__$1 = (function (){var statearr_15880 = state_15864;(statearr_15880[12] = inst_15850__$1);
return statearr_15880;
})();if(cljs.core.truth_(inst_15851))
{var statearr_15881_15905 = state_15864__$1;(statearr_15881_15905[1] = 13);
} else
{var statearr_15882_15906 = state_15864__$1;(statearr_15882_15906[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 13))
{var inst_15853 = cljs.core.async.close_BANG_.call(null,out);var state_15864__$1 = state_15864;var statearr_15883_15907 = state_15864__$1;(statearr_15883_15907[2] = inst_15853);
(statearr_15883_15907[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 14))
{var inst_15850 = (state_15864[12]);var inst_15855 = cljs.core.apply.call(null,f,inst_15850);var state_15864__$1 = state_15864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15864__$1,16,out,inst_15855);
} else
{if((state_val_15865 === 15))
{var inst_15860 = (state_15864[2]);var state_15864__$1 = state_15864;var statearr_15884_15908 = state_15864__$1;(statearr_15884_15908[2] = inst_15860);
(statearr_15884_15908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15865 === 16))
{var inst_15857 = (state_15864[2]);var state_15864__$1 = (function (){var statearr_15885 = state_15864;(statearr_15885[13] = inst_15857);
return statearr_15885;
})();var statearr_15886_15909 = state_15864__$1;(statearr_15886_15909[2] = null);
(statearr_15886_15909[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15890[0] = state_machine__5548__auto__);
(statearr_15890[1] = 1);
return statearr_15890;
});
var state_machine__5548__auto____1 = (function (state_15864){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15864);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15891){if((e15891 instanceof Object))
{var ex__5551__auto__ = e15891;var statearr_15892_15910 = state_15864;(statearr_15892_15910[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15911 = state_15864;
state_15864 = G__15911;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15864){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15893 = f__5563__auto__.call(null);(statearr_15893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15894);
return statearr_15893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16019 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15995){var state_val_15996 = (state_15995[1]);if((state_val_15996 === 1))
{var inst_15966 = cljs.core.vec.call(null,chs);var inst_15967 = inst_15966;var state_15995__$1 = (function (){var statearr_15997 = state_15995;(statearr_15997[7] = inst_15967);
return statearr_15997;
})();var statearr_15998_16020 = state_15995__$1;(statearr_15998_16020[2] = null);
(statearr_15998_16020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15996 === 2))
{var inst_15967 = (state_15995[7]);var inst_15969 = cljs.core.count.call(null,inst_15967);var inst_15970 = (inst_15969 > 0);var state_15995__$1 = state_15995;if(cljs.core.truth_(inst_15970))
{var statearr_15999_16021 = state_15995__$1;(statearr_15999_16021[1] = 4);
} else
{var statearr_16000_16022 = state_15995__$1;(statearr_16000_16022[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15996 === 3))
{var inst_15993 = (state_15995[2]);var state_15995__$1 = state_15995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15995__$1,inst_15993);
} else
{if((state_val_15996 === 4))
{var inst_15967 = (state_15995[7]);var state_15995__$1 = state_15995;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15995__$1,7,inst_15967);
} else
{if((state_val_15996 === 5))
{var inst_15989 = cljs.core.async.close_BANG_.call(null,out);var state_15995__$1 = state_15995;var statearr_16001_16023 = state_15995__$1;(statearr_16001_16023[2] = inst_15989);
(statearr_16001_16023[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15996 === 6))
{var inst_15991 = (state_15995[2]);var state_15995__$1 = state_15995;var statearr_16002_16024 = state_15995__$1;(statearr_16002_16024[2] = inst_15991);
(statearr_16002_16024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15996 === 7))
{var inst_15975 = (state_15995[8]);var inst_15974 = (state_15995[9]);var inst_15974__$1 = (state_15995[2]);var inst_15975__$1 = cljs.core.nth.call(null,inst_15974__$1,0,null);var inst_15976 = cljs.core.nth.call(null,inst_15974__$1,1,null);var inst_15977 = (inst_15975__$1 == null);var state_15995__$1 = (function (){var statearr_16003 = state_15995;(statearr_16003[10] = inst_15976);
(statearr_16003[8] = inst_15975__$1);
(statearr_16003[9] = inst_15974__$1);
return statearr_16003;
})();if(cljs.core.truth_(inst_15977))
{var statearr_16004_16025 = state_15995__$1;(statearr_16004_16025[1] = 8);
} else
{var statearr_16005_16026 = state_15995__$1;(statearr_16005_16026[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15996 === 8))
{var inst_15976 = (state_15995[10]);var inst_15975 = (state_15995[8]);var inst_15967 = (state_15995[7]);var inst_15974 = (state_15995[9]);var inst_15979 = (function (){var c = inst_15976;var v = inst_15975;var vec__15972 = inst_15974;var cs = inst_15967;return ((function (c,v,vec__15972,cs,inst_15976,inst_15975,inst_15967,inst_15974,state_val_15996){
return (function (p1__15912_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15912_SHARP_);
});
;})(c,v,vec__15972,cs,inst_15976,inst_15975,inst_15967,inst_15974,state_val_15996))
})();var inst_15980 = cljs.core.filterv.call(null,inst_15979,inst_15967);var inst_15967__$1 = inst_15980;var state_15995__$1 = (function (){var statearr_16006 = state_15995;(statearr_16006[7] = inst_15967__$1);
return statearr_16006;
})();var statearr_16007_16027 = state_15995__$1;(statearr_16007_16027[2] = null);
(statearr_16007_16027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15996 === 9))
{var inst_15975 = (state_15995[8]);var state_15995__$1 = state_15995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15995__$1,11,out,inst_15975);
} else
{if((state_val_15996 === 10))
{var inst_15987 = (state_15995[2]);var state_15995__$1 = state_15995;var statearr_16009_16028 = state_15995__$1;(statearr_16009_16028[2] = inst_15987);
(statearr_16009_16028[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15996 === 11))
{var inst_15967 = (state_15995[7]);var inst_15984 = (state_15995[2]);var tmp16008 = inst_15967;var inst_15967__$1 = tmp16008;var state_15995__$1 = (function (){var statearr_16010 = state_15995;(statearr_16010[11] = inst_15984);
(statearr_16010[7] = inst_15967__$1);
return statearr_16010;
})();var statearr_16011_16029 = state_15995__$1;(statearr_16011_16029[2] = null);
(statearr_16011_16029[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16015 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16015[0] = state_machine__5548__auto__);
(statearr_16015[1] = 1);
return statearr_16015;
});
var state_machine__5548__auto____1 = (function (state_15995){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16016){if((e16016 instanceof Object))
{var ex__5551__auto__ = e16016;var statearr_16017_16030 = state_15995;(statearr_16017_16030[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16031 = state_15995;
state_15995 = G__16031;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15995){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16018 = f__5563__auto__.call(null);(statearr_16018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16019);
return statearr_16018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16101){var state_val_16102 = (state_16101[1]);if((state_val_16102 === 1))
{var inst_16078 = 0;var state_16101__$1 = (function (){var statearr_16103 = state_16101;(statearr_16103[7] = inst_16078);
return statearr_16103;
})();var statearr_16104_16125 = state_16101__$1;(statearr_16104_16125[2] = null);
(statearr_16104_16125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16102 === 2))
{var inst_16078 = (state_16101[7]);var inst_16080 = (inst_16078 < n);var state_16101__$1 = state_16101;if(cljs.core.truth_(inst_16080))
{var statearr_16105_16126 = state_16101__$1;(statearr_16105_16126[1] = 4);
} else
{var statearr_16106_16127 = state_16101__$1;(statearr_16106_16127[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16102 === 3))
{var inst_16098 = (state_16101[2]);var inst_16099 = cljs.core.async.close_BANG_.call(null,out);var state_16101__$1 = (function (){var statearr_16107 = state_16101;(statearr_16107[8] = inst_16098);
return statearr_16107;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16101__$1,inst_16099);
} else
{if((state_val_16102 === 4))
{var state_16101__$1 = state_16101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16101__$1,7,ch);
} else
{if((state_val_16102 === 5))
{var state_16101__$1 = state_16101;var statearr_16108_16128 = state_16101__$1;(statearr_16108_16128[2] = null);
(statearr_16108_16128[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16102 === 6))
{var inst_16096 = (state_16101[2]);var state_16101__$1 = state_16101;var statearr_16109_16129 = state_16101__$1;(statearr_16109_16129[2] = inst_16096);
(statearr_16109_16129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16102 === 7))
{var inst_16083 = (state_16101[9]);var inst_16083__$1 = (state_16101[2]);var inst_16084 = (inst_16083__$1 == null);var inst_16085 = cljs.core.not.call(null,inst_16084);var state_16101__$1 = (function (){var statearr_16110 = state_16101;(statearr_16110[9] = inst_16083__$1);
return statearr_16110;
})();if(inst_16085)
{var statearr_16111_16130 = state_16101__$1;(statearr_16111_16130[1] = 8);
} else
{var statearr_16112_16131 = state_16101__$1;(statearr_16112_16131[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16102 === 8))
{var inst_16083 = (state_16101[9]);var state_16101__$1 = state_16101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16101__$1,11,out,inst_16083);
} else
{if((state_val_16102 === 9))
{var state_16101__$1 = state_16101;var statearr_16113_16132 = state_16101__$1;(statearr_16113_16132[2] = null);
(statearr_16113_16132[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16102 === 10))
{var inst_16093 = (state_16101[2]);var state_16101__$1 = state_16101;var statearr_16114_16133 = state_16101__$1;(statearr_16114_16133[2] = inst_16093);
(statearr_16114_16133[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16102 === 11))
{var inst_16078 = (state_16101[7]);var inst_16088 = (state_16101[2]);var inst_16089 = (inst_16078 + 1);var inst_16078__$1 = inst_16089;var state_16101__$1 = (function (){var statearr_16115 = state_16101;(statearr_16115[7] = inst_16078__$1);
(statearr_16115[10] = inst_16088);
return statearr_16115;
})();var statearr_16116_16134 = state_16101__$1;(statearr_16116_16134[2] = null);
(statearr_16116_16134[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16120 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16120[0] = state_machine__5548__auto__);
(statearr_16120[1] = 1);
return statearr_16120;
});
var state_machine__5548__auto____1 = (function (state_16101){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16121){if((e16121 instanceof Object))
{var ex__5551__auto__ = e16121;var statearr_16122_16135 = state_16101;(statearr_16122_16135[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16136 = state_16101;
state_16101 = G__16136;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16101){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16123 = f__5563__auto__.call(null);(statearr_16123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16124);
return statearr_16123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16208){var state_val_16209 = (state_16208[1]);if((state_val_16209 === 1))
{var inst_16185 = null;var state_16208__$1 = (function (){var statearr_16210 = state_16208;(statearr_16210[7] = inst_16185);
return statearr_16210;
})();var statearr_16211_16234 = state_16208__$1;(statearr_16211_16234[2] = null);
(statearr_16211_16234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 2))
{var state_16208__$1 = state_16208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16208__$1,4,ch);
} else
{if((state_val_16209 === 3))
{var inst_16205 = (state_16208[2]);var inst_16206 = cljs.core.async.close_BANG_.call(null,out);var state_16208__$1 = (function (){var statearr_16212 = state_16208;(statearr_16212[8] = inst_16205);
return statearr_16212;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16208__$1,inst_16206);
} else
{if((state_val_16209 === 4))
{var inst_16188 = (state_16208[9]);var inst_16188__$1 = (state_16208[2]);var inst_16189 = (inst_16188__$1 == null);var inst_16190 = cljs.core.not.call(null,inst_16189);var state_16208__$1 = (function (){var statearr_16213 = state_16208;(statearr_16213[9] = inst_16188__$1);
return statearr_16213;
})();if(inst_16190)
{var statearr_16214_16235 = state_16208__$1;(statearr_16214_16235[1] = 5);
} else
{var statearr_16215_16236 = state_16208__$1;(statearr_16215_16236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 5))
{var inst_16185 = (state_16208[7]);var inst_16188 = (state_16208[9]);var inst_16192 = cljs.core._EQ_.call(null,inst_16188,inst_16185);var state_16208__$1 = state_16208;if(inst_16192)
{var statearr_16216_16237 = state_16208__$1;(statearr_16216_16237[1] = 8);
} else
{var statearr_16217_16238 = state_16208__$1;(statearr_16217_16238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 6))
{var state_16208__$1 = state_16208;var statearr_16219_16239 = state_16208__$1;(statearr_16219_16239[2] = null);
(statearr_16219_16239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 7))
{var inst_16203 = (state_16208[2]);var state_16208__$1 = state_16208;var statearr_16220_16240 = state_16208__$1;(statearr_16220_16240[2] = inst_16203);
(statearr_16220_16240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 8))
{var inst_16185 = (state_16208[7]);var tmp16218 = inst_16185;var inst_16185__$1 = tmp16218;var state_16208__$1 = (function (){var statearr_16221 = state_16208;(statearr_16221[7] = inst_16185__$1);
return statearr_16221;
})();var statearr_16222_16241 = state_16208__$1;(statearr_16222_16241[2] = null);
(statearr_16222_16241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 9))
{var inst_16188 = (state_16208[9]);var state_16208__$1 = state_16208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16208__$1,11,out,inst_16188);
} else
{if((state_val_16209 === 10))
{var inst_16200 = (state_16208[2]);var state_16208__$1 = state_16208;var statearr_16223_16242 = state_16208__$1;(statearr_16223_16242[2] = inst_16200);
(statearr_16223_16242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 11))
{var inst_16188 = (state_16208[9]);var inst_16197 = (state_16208[2]);var inst_16185 = inst_16188;var state_16208__$1 = (function (){var statearr_16224 = state_16208;(statearr_16224[7] = inst_16185);
(statearr_16224[10] = inst_16197);
return statearr_16224;
})();var statearr_16225_16243 = state_16208__$1;(statearr_16225_16243[2] = null);
(statearr_16225_16243[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16229 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16229[0] = state_machine__5548__auto__);
(statearr_16229[1] = 1);
return statearr_16229;
});
var state_machine__5548__auto____1 = (function (state_16208){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16208);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16230){if((e16230 instanceof Object))
{var ex__5551__auto__ = e16230;var statearr_16231_16244 = state_16208;(statearr_16231_16244[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16245 = state_16208;
state_16208 = G__16245;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16208){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16232 = f__5563__auto__.call(null);(statearr_16232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16233);
return statearr_16232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16380 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16350){var state_val_16351 = (state_16350[1]);if((state_val_16351 === 1))
{var inst_16313 = (new Array(n));var inst_16314 = inst_16313;var inst_16315 = 0;var state_16350__$1 = (function (){var statearr_16352 = state_16350;(statearr_16352[7] = inst_16315);
(statearr_16352[8] = inst_16314);
return statearr_16352;
})();var statearr_16353_16381 = state_16350__$1;(statearr_16353_16381[2] = null);
(statearr_16353_16381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 2))
{var state_16350__$1 = state_16350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16350__$1,4,ch);
} else
{if((state_val_16351 === 3))
{var inst_16348 = (state_16350[2]);var state_16350__$1 = state_16350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16350__$1,inst_16348);
} else
{if((state_val_16351 === 4))
{var inst_16318 = (state_16350[9]);var inst_16318__$1 = (state_16350[2]);var inst_16319 = (inst_16318__$1 == null);var inst_16320 = cljs.core.not.call(null,inst_16319);var state_16350__$1 = (function (){var statearr_16354 = state_16350;(statearr_16354[9] = inst_16318__$1);
return statearr_16354;
})();if(inst_16320)
{var statearr_16355_16382 = state_16350__$1;(statearr_16355_16382[1] = 5);
} else
{var statearr_16356_16383 = state_16350__$1;(statearr_16356_16383[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 5))
{var inst_16315 = (state_16350[7]);var inst_16314 = (state_16350[8]);var inst_16323 = (state_16350[10]);var inst_16318 = (state_16350[9]);var inst_16322 = (inst_16314[inst_16315] = inst_16318);var inst_16323__$1 = (inst_16315 + 1);var inst_16324 = (inst_16323__$1 < n);var state_16350__$1 = (function (){var statearr_16357 = state_16350;(statearr_16357[10] = inst_16323__$1);
(statearr_16357[11] = inst_16322);
return statearr_16357;
})();if(cljs.core.truth_(inst_16324))
{var statearr_16358_16384 = state_16350__$1;(statearr_16358_16384[1] = 8);
} else
{var statearr_16359_16385 = state_16350__$1;(statearr_16359_16385[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 6))
{var inst_16315 = (state_16350[7]);var inst_16336 = (inst_16315 > 0);var state_16350__$1 = state_16350;if(cljs.core.truth_(inst_16336))
{var statearr_16361_16386 = state_16350__$1;(statearr_16361_16386[1] = 12);
} else
{var statearr_16362_16387 = state_16350__$1;(statearr_16362_16387[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 7))
{var inst_16346 = (state_16350[2]);var state_16350__$1 = state_16350;var statearr_16363_16388 = state_16350__$1;(statearr_16363_16388[2] = inst_16346);
(statearr_16363_16388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 8))
{var inst_16314 = (state_16350[8]);var inst_16323 = (state_16350[10]);var tmp16360 = inst_16314;var inst_16314__$1 = tmp16360;var inst_16315 = inst_16323;var state_16350__$1 = (function (){var statearr_16364 = state_16350;(statearr_16364[7] = inst_16315);
(statearr_16364[8] = inst_16314__$1);
return statearr_16364;
})();var statearr_16365_16389 = state_16350__$1;(statearr_16365_16389[2] = null);
(statearr_16365_16389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 9))
{var inst_16314 = (state_16350[8]);var inst_16328 = cljs.core.vec.call(null,inst_16314);var state_16350__$1 = state_16350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16350__$1,11,out,inst_16328);
} else
{if((state_val_16351 === 10))
{var inst_16334 = (state_16350[2]);var state_16350__$1 = state_16350;var statearr_16366_16390 = state_16350__$1;(statearr_16366_16390[2] = inst_16334);
(statearr_16366_16390[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 11))
{var inst_16330 = (state_16350[2]);var inst_16331 = (new Array(n));var inst_16314 = inst_16331;var inst_16315 = 0;var state_16350__$1 = (function (){var statearr_16367 = state_16350;(statearr_16367[7] = inst_16315);
(statearr_16367[8] = inst_16314);
(statearr_16367[12] = inst_16330);
return statearr_16367;
})();var statearr_16368_16391 = state_16350__$1;(statearr_16368_16391[2] = null);
(statearr_16368_16391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 12))
{var inst_16314 = (state_16350[8]);var inst_16338 = cljs.core.vec.call(null,inst_16314);var state_16350__$1 = state_16350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16350__$1,15,out,inst_16338);
} else
{if((state_val_16351 === 13))
{var state_16350__$1 = state_16350;var statearr_16369_16392 = state_16350__$1;(statearr_16369_16392[2] = null);
(statearr_16369_16392[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 14))
{var inst_16343 = (state_16350[2]);var inst_16344 = cljs.core.async.close_BANG_.call(null,out);var state_16350__$1 = (function (){var statearr_16370 = state_16350;(statearr_16370[13] = inst_16343);
return statearr_16370;
})();var statearr_16371_16393 = state_16350__$1;(statearr_16371_16393[2] = inst_16344);
(statearr_16371_16393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16351 === 15))
{var inst_16340 = (state_16350[2]);var state_16350__$1 = state_16350;var statearr_16372_16394 = state_16350__$1;(statearr_16372_16394[2] = inst_16340);
(statearr_16372_16394[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16376[0] = state_machine__5548__auto__);
(statearr_16376[1] = 1);
return statearr_16376;
});
var state_machine__5548__auto____1 = (function (state_16350){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16350);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16377){if((e16377 instanceof Object))
{var ex__5551__auto__ = e16377;var statearr_16378_16395 = state_16350;(statearr_16378_16395[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16396 = state_16350;
state_16350 = G__16396;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16350){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16379 = f__5563__auto__.call(null);(statearr_16379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16380);
return statearr_16379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16539 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16509){var state_val_16510 = (state_16509[1]);if((state_val_16510 === 1))
{var inst_16468 = [];var inst_16469 = inst_16468;var inst_16470 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16509__$1 = (function (){var statearr_16511 = state_16509;(statearr_16511[7] = inst_16469);
(statearr_16511[8] = inst_16470);
return statearr_16511;
})();var statearr_16512_16540 = state_16509__$1;(statearr_16512_16540[2] = null);
(statearr_16512_16540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 2))
{var state_16509__$1 = state_16509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16509__$1,4,ch);
} else
{if((state_val_16510 === 3))
{var inst_16507 = (state_16509[2]);var state_16509__$1 = state_16509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16509__$1,inst_16507);
} else
{if((state_val_16510 === 4))
{var inst_16473 = (state_16509[9]);var inst_16473__$1 = (state_16509[2]);var inst_16474 = (inst_16473__$1 == null);var inst_16475 = cljs.core.not.call(null,inst_16474);var state_16509__$1 = (function (){var statearr_16513 = state_16509;(statearr_16513[9] = inst_16473__$1);
return statearr_16513;
})();if(inst_16475)
{var statearr_16514_16541 = state_16509__$1;(statearr_16514_16541[1] = 5);
} else
{var statearr_16515_16542 = state_16509__$1;(statearr_16515_16542[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 5))
{var inst_16477 = (state_16509[10]);var inst_16473 = (state_16509[9]);var inst_16470 = (state_16509[8]);var inst_16477__$1 = f.call(null,inst_16473);var inst_16478 = cljs.core._EQ_.call(null,inst_16477__$1,inst_16470);var inst_16479 = cljs.core.keyword_identical_QMARK_.call(null,inst_16470,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16480 = (inst_16478) || (inst_16479);var state_16509__$1 = (function (){var statearr_16516 = state_16509;(statearr_16516[10] = inst_16477__$1);
return statearr_16516;
})();if(cljs.core.truth_(inst_16480))
{var statearr_16517_16543 = state_16509__$1;(statearr_16517_16543[1] = 8);
} else
{var statearr_16518_16544 = state_16509__$1;(statearr_16518_16544[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 6))
{var inst_16469 = (state_16509[7]);var inst_16494 = inst_16469.length;var inst_16495 = (inst_16494 > 0);var state_16509__$1 = state_16509;if(cljs.core.truth_(inst_16495))
{var statearr_16520_16545 = state_16509__$1;(statearr_16520_16545[1] = 12);
} else
{var statearr_16521_16546 = state_16509__$1;(statearr_16521_16546[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 7))
{var inst_16505 = (state_16509[2]);var state_16509__$1 = state_16509;var statearr_16522_16547 = state_16509__$1;(statearr_16522_16547[2] = inst_16505);
(statearr_16522_16547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 8))
{var inst_16477 = (state_16509[10]);var inst_16469 = (state_16509[7]);var inst_16473 = (state_16509[9]);var inst_16482 = inst_16469.push(inst_16473);var tmp16519 = inst_16469;var inst_16469__$1 = tmp16519;var inst_16470 = inst_16477;var state_16509__$1 = (function (){var statearr_16523 = state_16509;(statearr_16523[7] = inst_16469__$1);
(statearr_16523[8] = inst_16470);
(statearr_16523[11] = inst_16482);
return statearr_16523;
})();var statearr_16524_16548 = state_16509__$1;(statearr_16524_16548[2] = null);
(statearr_16524_16548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 9))
{var inst_16469 = (state_16509[7]);var inst_16485 = cljs.core.vec.call(null,inst_16469);var state_16509__$1 = state_16509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16509__$1,11,out,inst_16485);
} else
{if((state_val_16510 === 10))
{var inst_16492 = (state_16509[2]);var state_16509__$1 = state_16509;var statearr_16525_16549 = state_16509__$1;(statearr_16525_16549[2] = inst_16492);
(statearr_16525_16549[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 11))
{var inst_16477 = (state_16509[10]);var inst_16473 = (state_16509[9]);var inst_16487 = (state_16509[2]);var inst_16488 = [];var inst_16489 = inst_16488.push(inst_16473);var inst_16469 = inst_16488;var inst_16470 = inst_16477;var state_16509__$1 = (function (){var statearr_16526 = state_16509;(statearr_16526[7] = inst_16469);
(statearr_16526[12] = inst_16489);
(statearr_16526[8] = inst_16470);
(statearr_16526[13] = inst_16487);
return statearr_16526;
})();var statearr_16527_16550 = state_16509__$1;(statearr_16527_16550[2] = null);
(statearr_16527_16550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 12))
{var inst_16469 = (state_16509[7]);var inst_16497 = cljs.core.vec.call(null,inst_16469);var state_16509__$1 = state_16509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16509__$1,15,out,inst_16497);
} else
{if((state_val_16510 === 13))
{var state_16509__$1 = state_16509;var statearr_16528_16551 = state_16509__$1;(statearr_16528_16551[2] = null);
(statearr_16528_16551[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 14))
{var inst_16502 = (state_16509[2]);var inst_16503 = cljs.core.async.close_BANG_.call(null,out);var state_16509__$1 = (function (){var statearr_16529 = state_16509;(statearr_16529[14] = inst_16502);
return statearr_16529;
})();var statearr_16530_16552 = state_16509__$1;(statearr_16530_16552[2] = inst_16503);
(statearr_16530_16552[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16510 === 15))
{var inst_16499 = (state_16509[2]);var state_16509__$1 = state_16509;var statearr_16531_16553 = state_16509__$1;(statearr_16531_16553[2] = inst_16499);
(statearr_16531_16553[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16535[0] = state_machine__5548__auto__);
(statearr_16535[1] = 1);
return statearr_16535;
});
var state_machine__5548__auto____1 = (function (state_16509){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16509);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16536){if((e16536 instanceof Object))
{var ex__5551__auto__ = e16536;var statearr_16537_16554 = state_16509;(statearr_16537_16554[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16555 = state_16509;
state_16509 = G__16555;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16509){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16538 = f__5563__auto__.call(null);(statearr_16538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16539);
return statearr_16538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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

//# sourceMappingURL=async.js.map