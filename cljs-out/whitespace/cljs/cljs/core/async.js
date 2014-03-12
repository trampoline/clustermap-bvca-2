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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t47052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47052 = (function (f,fn_handler,meta47053){
this.f = f;
this.fn_handler = fn_handler;
this.meta47053 = meta47053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47052.cljs$lang$type = true;
cljs.core.async.t47052.cljs$lang$ctorStr = "cljs.core.async/t47052";
cljs.core.async.t47052.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47052");
});
cljs.core.async.t47052.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t47052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t47052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47054){var self__ = this;
var _47054__$1 = this;return self__.meta47053;
});
cljs.core.async.t47052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47054,meta47053__$1){var self__ = this;
var _47054__$1 = this;return (new cljs.core.async.t47052(self__.f,self__.fn_handler,meta47053__$1));
});
cljs.core.async.__GT_t47052 = (function __GT_t47052(f__$1,fn_handler__$1,meta47053){return (new cljs.core.async.t47052(f__$1,fn_handler__$1,meta47053));
});
}
return (new cljs.core.async.t47052(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__47056 = buff;if(G__47056)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__47056.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__47056.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47056);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47056);
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
{var val_47057 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_47057);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_47057);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___47058 = n;var x_47059 = 0;while(true){
if((x_47059 < n__4289__auto___47058))
{(a[x_47059] = 0);
{
var G__47060 = (x_47059 + 1);
x_47059 = G__47060;
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
var G__47061 = (i + 1);
i = G__47061;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t47065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47065 = (function (flag,alt_flag,meta47066){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta47066 = meta47066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47065.cljs$lang$type = true;
cljs.core.async.t47065.cljs$lang$ctorStr = "cljs.core.async/t47065";
cljs.core.async.t47065.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47065");
});
cljs.core.async.t47065.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t47065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t47065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47067){var self__ = this;
var _47067__$1 = this;return self__.meta47066;
});
cljs.core.async.t47065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47067,meta47066__$1){var self__ = this;
var _47067__$1 = this;return (new cljs.core.async.t47065(self__.flag,self__.alt_flag,meta47066__$1));
});
cljs.core.async.__GT_t47065 = (function __GT_t47065(flag__$1,alt_flag__$1,meta47066){return (new cljs.core.async.t47065(flag__$1,alt_flag__$1,meta47066));
});
}
return (new cljs.core.async.t47065(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t47071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47071 = (function (cb,flag,alt_handler,meta47072){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta47072 = meta47072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47071.cljs$lang$type = true;
cljs.core.async.t47071.cljs$lang$ctorStr = "cljs.core.async/t47071";
cljs.core.async.t47071.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47071");
});
cljs.core.async.t47071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t47071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t47071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47073){var self__ = this;
var _47073__$1 = this;return self__.meta47072;
});
cljs.core.async.t47071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47073,meta47072__$1){var self__ = this;
var _47073__$1 = this;return (new cljs.core.async.t47071(self__.cb,self__.flag,self__.alt_handler,meta47072__$1));
});
cljs.core.async.__GT_t47071 = (function __GT_t47071(cb__$1,flag__$1,alt_handler__$1,meta47072){return (new cljs.core.async.t47071(cb__$1,flag__$1,alt_handler__$1,meta47072));
});
}
return (new cljs.core.async.t47071(cb,flag,alt_handler,null));
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
return (function (p1__47074_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47074_SHARP_,port], null));
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
var G__47075 = (i + 1);
i = G__47075;
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
var alts_BANG___delegate = function (ports,p__47076){var map__47078 = p__47076;var map__47078__$1 = ((cljs.core.seq_QMARK_.call(null,map__47078))?cljs.core.apply.call(null,cljs.core.hash_map,map__47078):map__47078);var opts = map__47078__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__47076 = null;if (arguments.length > 1) {
  p__47076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__47076);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__47079){
var ports = cljs.core.first(arglist__47079);
var p__47076 = cljs.core.rest(arglist__47079);
return alts_BANG___delegate(ports,p__47076);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t47087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47087 = (function (ch,f,map_LT_,meta47088){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47088 = meta47088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47087.cljs$lang$type = true;
cljs.core.async.t47087.cljs$lang$ctorStr = "cljs.core.async/t47087";
cljs.core.async.t47087.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47087");
});
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t47090 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47090 = (function (fn1,_,meta47088,ch,f,map_LT_,meta47091){
this.fn1 = fn1;
this._ = _;
this.meta47088 = meta47088;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47091 = meta47091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47090.cljs$lang$type = true;
cljs.core.async.t47090.cljs$lang$ctorStr = "cljs.core.async/t47090";
cljs.core.async.t47090.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47090");
});
cljs.core.async.t47090.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t47090.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t47090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__47080_SHARP_){return f1.call(null,(((p1__47080_SHARP_ == null))?null:self__.f.call(null,p1__47080_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t47090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47092){var self__ = this;
var _47092__$1 = this;return self__.meta47091;
});
cljs.core.async.t47090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47092,meta47091__$1){var self__ = this;
var _47092__$1 = this;return (new cljs.core.async.t47090(self__.fn1,self__._,self__.meta47088,self__.ch,self__.f,self__.map_LT_,meta47091__$1));
});
cljs.core.async.__GT_t47090 = (function __GT_t47090(fn1__$1,___$2,meta47088__$1,ch__$2,f__$2,map_LT___$2,meta47091){return (new cljs.core.async.t47090(fn1__$1,___$2,meta47088__$1,ch__$2,f__$2,map_LT___$2,meta47091));
});
}
return (new cljs.core.async.t47090(fn1,___$1,self__.meta47088,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47089){var self__ = this;
var _47089__$1 = this;return self__.meta47088;
});
cljs.core.async.t47087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47089,meta47088__$1){var self__ = this;
var _47089__$1 = this;return (new cljs.core.async.t47087(self__.ch,self__.f,self__.map_LT_,meta47088__$1));
});
cljs.core.async.__GT_t47087 = (function __GT_t47087(ch__$1,f__$1,map_LT___$1,meta47088){return (new cljs.core.async.t47087(ch__$1,f__$1,map_LT___$1,meta47088));
});
}
return (new cljs.core.async.t47087(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t47096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47096 = (function (ch,f,map_GT_,meta47097){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47097 = meta47097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47096.cljs$lang$type = true;
cljs.core.async.t47096.cljs$lang$ctorStr = "cljs.core.async/t47096";
cljs.core.async.t47096.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47096");
});
cljs.core.async.t47096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t47096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47096.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47098){var self__ = this;
var _47098__$1 = this;return self__.meta47097;
});
cljs.core.async.t47096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47098,meta47097__$1){var self__ = this;
var _47098__$1 = this;return (new cljs.core.async.t47096(self__.ch,self__.f,self__.map_GT_,meta47097__$1));
});
cljs.core.async.__GT_t47096 = (function __GT_t47096(ch__$1,f__$1,map_GT___$1,meta47097){return (new cljs.core.async.t47096(ch__$1,f__$1,map_GT___$1,meta47097));
});
}
return (new cljs.core.async.t47096(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t47102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47102 = (function (ch,p,filter_GT_,meta47103){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47103 = meta47103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47102.cljs$lang$type = true;
cljs.core.async.t47102.cljs$lang$ctorStr = "cljs.core.async/t47102";
cljs.core.async.t47102.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47102");
});
cljs.core.async.t47102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t47102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47102.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47104){var self__ = this;
var _47104__$1 = this;return self__.meta47103;
});
cljs.core.async.t47102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47104,meta47103__$1){var self__ = this;
var _47104__$1 = this;return (new cljs.core.async.t47102(self__.ch,self__.p,self__.filter_GT_,meta47103__$1));
});
cljs.core.async.__GT_t47102 = (function __GT_t47102(ch__$1,p__$1,filter_GT___$1,meta47103){return (new cljs.core.async.t47102(ch__$1,p__$1,filter_GT___$1,meta47103));
});
}
return (new cljs.core.async.t47102(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___47187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47166){var state_val_47167 = (state_47166[1]);if((state_val_47167 === 1))
{var state_47166__$1 = state_47166;var statearr_47168_47188 = state_47166__$1;(statearr_47168_47188[2] = null);
(statearr_47168_47188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47167 === 2))
{var state_47166__$1 = state_47166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47166__$1,4,ch);
} else
{if((state_val_47167 === 3))
{var inst_47164 = (state_47166[2]);var state_47166__$1 = state_47166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47166__$1,inst_47164);
} else
{if((state_val_47167 === 4))
{var inst_47148 = (state_47166[7]);var inst_47148__$1 = (state_47166[2]);var inst_47149 = (inst_47148__$1 == null);var state_47166__$1 = (function (){var statearr_47169 = state_47166;(statearr_47169[7] = inst_47148__$1);
return statearr_47169;
})();if(cljs.core.truth_(inst_47149))
{var statearr_47170_47189 = state_47166__$1;(statearr_47170_47189[1] = 5);
} else
{var statearr_47171_47190 = state_47166__$1;(statearr_47171_47190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47167 === 5))
{var inst_47151 = cljs.core.async.close_BANG_.call(null,out);var state_47166__$1 = state_47166;var statearr_47172_47191 = state_47166__$1;(statearr_47172_47191[2] = inst_47151);
(statearr_47172_47191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47167 === 6))
{var inst_47148 = (state_47166[7]);var inst_47153 = p.call(null,inst_47148);var state_47166__$1 = state_47166;if(cljs.core.truth_(inst_47153))
{var statearr_47173_47192 = state_47166__$1;(statearr_47173_47192[1] = 8);
} else
{var statearr_47174_47193 = state_47166__$1;(statearr_47174_47193[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47167 === 7))
{var inst_47162 = (state_47166[2]);var state_47166__$1 = state_47166;var statearr_47175_47194 = state_47166__$1;(statearr_47175_47194[2] = inst_47162);
(statearr_47175_47194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47167 === 8))
{var inst_47148 = (state_47166[7]);var state_47166__$1 = state_47166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47166__$1,11,out,inst_47148);
} else
{if((state_val_47167 === 9))
{var state_47166__$1 = state_47166;var statearr_47176_47195 = state_47166__$1;(statearr_47176_47195[2] = null);
(statearr_47176_47195[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47167 === 10))
{var inst_47159 = (state_47166[2]);var state_47166__$1 = (function (){var statearr_47177 = state_47166;(statearr_47177[8] = inst_47159);
return statearr_47177;
})();var statearr_47178_47196 = state_47166__$1;(statearr_47178_47196[2] = null);
(statearr_47178_47196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47167 === 11))
{var inst_47156 = (state_47166[2]);var state_47166__$1 = state_47166;var statearr_47179_47197 = state_47166__$1;(statearr_47179_47197[2] = inst_47156);
(statearr_47179_47197[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_47183 = [null,null,null,null,null,null,null,null,null];(statearr_47183[0] = state_machine__5548__auto__);
(statearr_47183[1] = 1);
return statearr_47183;
});
var state_machine__5548__auto____1 = (function (state_47166){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47166);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47184){if((e47184 instanceof Object))
{var ex__5551__auto__ = e47184;var statearr_47185_47198 = state_47166;(statearr_47185_47198[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47199 = state_47166;
state_47166 = G__47199;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47166){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47186 = f__5563__auto__.call(null);(statearr_47186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47187);
return statearr_47186;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47351){var state_val_47352 = (state_47351[1]);if((state_val_47352 === 1))
{var state_47351__$1 = state_47351;var statearr_47353_47390 = state_47351__$1;(statearr_47353_47390[2] = null);
(statearr_47353_47390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 2))
{var state_47351__$1 = state_47351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47351__$1,4,in$);
} else
{if((state_val_47352 === 3))
{var inst_47349 = (state_47351[2]);var state_47351__$1 = state_47351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47351__$1,inst_47349);
} else
{if((state_val_47352 === 4))
{var inst_47297 = (state_47351[7]);var inst_47297__$1 = (state_47351[2]);var inst_47298 = (inst_47297__$1 == null);var state_47351__$1 = (function (){var statearr_47354 = state_47351;(statearr_47354[7] = inst_47297__$1);
return statearr_47354;
})();if(cljs.core.truth_(inst_47298))
{var statearr_47355_47391 = state_47351__$1;(statearr_47355_47391[1] = 5);
} else
{var statearr_47356_47392 = state_47351__$1;(statearr_47356_47392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 5))
{var inst_47300 = cljs.core.async.close_BANG_.call(null,out);var state_47351__$1 = state_47351;var statearr_47357_47393 = state_47351__$1;(statearr_47357_47393[2] = inst_47300);
(statearr_47357_47393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 6))
{var inst_47297 = (state_47351[7]);var inst_47302 = f.call(null,inst_47297);var inst_47307 = cljs.core.seq.call(null,inst_47302);var inst_47308 = inst_47307;var inst_47309 = null;var inst_47310 = 0;var inst_47311 = 0;var state_47351__$1 = (function (){var statearr_47358 = state_47351;(statearr_47358[8] = inst_47310);
(statearr_47358[9] = inst_47311);
(statearr_47358[10] = inst_47308);
(statearr_47358[11] = inst_47309);
return statearr_47358;
})();var statearr_47359_47394 = state_47351__$1;(statearr_47359_47394[2] = null);
(statearr_47359_47394[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 7))
{var inst_47347 = (state_47351[2]);var state_47351__$1 = state_47351;var statearr_47360_47395 = state_47351__$1;(statearr_47360_47395[2] = inst_47347);
(statearr_47360_47395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 8))
{var inst_47310 = (state_47351[8]);var inst_47311 = (state_47351[9]);var inst_47313 = (inst_47311 < inst_47310);var inst_47314 = inst_47313;var state_47351__$1 = state_47351;if(cljs.core.truth_(inst_47314))
{var statearr_47361_47396 = state_47351__$1;(statearr_47361_47396[1] = 10);
} else
{var statearr_47362_47397 = state_47351__$1;(statearr_47362_47397[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 9))
{var inst_47344 = (state_47351[2]);var state_47351__$1 = (function (){var statearr_47363 = state_47351;(statearr_47363[12] = inst_47344);
return statearr_47363;
})();var statearr_47364_47398 = state_47351__$1;(statearr_47364_47398[2] = null);
(statearr_47364_47398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 10))
{var inst_47311 = (state_47351[9]);var inst_47309 = (state_47351[11]);var inst_47316 = cljs.core._nth.call(null,inst_47309,inst_47311);var state_47351__$1 = state_47351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47351__$1,13,out,inst_47316);
} else
{if((state_val_47352 === 11))
{var inst_47322 = (state_47351[13]);var inst_47308 = (state_47351[10]);var inst_47322__$1 = cljs.core.seq.call(null,inst_47308);var state_47351__$1 = (function (){var statearr_47368 = state_47351;(statearr_47368[13] = inst_47322__$1);
return statearr_47368;
})();if(inst_47322__$1)
{var statearr_47369_47399 = state_47351__$1;(statearr_47369_47399[1] = 14);
} else
{var statearr_47370_47400 = state_47351__$1;(statearr_47370_47400[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 12))
{var inst_47342 = (state_47351[2]);var state_47351__$1 = state_47351;var statearr_47371_47401 = state_47351__$1;(statearr_47371_47401[2] = inst_47342);
(statearr_47371_47401[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 13))
{var inst_47310 = (state_47351[8]);var inst_47311 = (state_47351[9]);var inst_47308 = (state_47351[10]);var inst_47309 = (state_47351[11]);var inst_47318 = (state_47351[2]);var inst_47319 = (inst_47311 + 1);var tmp47365 = inst_47310;var tmp47366 = inst_47308;var tmp47367 = inst_47309;var inst_47308__$1 = tmp47366;var inst_47309__$1 = tmp47367;var inst_47310__$1 = tmp47365;var inst_47311__$1 = inst_47319;var state_47351__$1 = (function (){var statearr_47372 = state_47351;(statearr_47372[8] = inst_47310__$1);
(statearr_47372[9] = inst_47311__$1);
(statearr_47372[14] = inst_47318);
(statearr_47372[10] = inst_47308__$1);
(statearr_47372[11] = inst_47309__$1);
return statearr_47372;
})();var statearr_47373_47402 = state_47351__$1;(statearr_47373_47402[2] = null);
(statearr_47373_47402[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 14))
{var inst_47322 = (state_47351[13]);var inst_47324 = cljs.core.chunked_seq_QMARK_.call(null,inst_47322);var state_47351__$1 = state_47351;if(inst_47324)
{var statearr_47374_47403 = state_47351__$1;(statearr_47374_47403[1] = 17);
} else
{var statearr_47375_47404 = state_47351__$1;(statearr_47375_47404[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 15))
{var state_47351__$1 = state_47351;var statearr_47376_47405 = state_47351__$1;(statearr_47376_47405[2] = null);
(statearr_47376_47405[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 16))
{var inst_47340 = (state_47351[2]);var state_47351__$1 = state_47351;var statearr_47377_47406 = state_47351__$1;(statearr_47377_47406[2] = inst_47340);
(statearr_47377_47406[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 17))
{var inst_47322 = (state_47351[13]);var inst_47326 = cljs.core.chunk_first.call(null,inst_47322);var inst_47327 = cljs.core.chunk_rest.call(null,inst_47322);var inst_47328 = cljs.core.count.call(null,inst_47326);var inst_47308 = inst_47327;var inst_47309 = inst_47326;var inst_47310 = inst_47328;var inst_47311 = 0;var state_47351__$1 = (function (){var statearr_47378 = state_47351;(statearr_47378[8] = inst_47310);
(statearr_47378[9] = inst_47311);
(statearr_47378[10] = inst_47308);
(statearr_47378[11] = inst_47309);
return statearr_47378;
})();var statearr_47379_47407 = state_47351__$1;(statearr_47379_47407[2] = null);
(statearr_47379_47407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 18))
{var inst_47322 = (state_47351[13]);var inst_47331 = cljs.core.first.call(null,inst_47322);var state_47351__$1 = state_47351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47351__$1,20,out,inst_47331);
} else
{if((state_val_47352 === 19))
{var inst_47337 = (state_47351[2]);var state_47351__$1 = state_47351;var statearr_47380_47408 = state_47351__$1;(statearr_47380_47408[2] = inst_47337);
(statearr_47380_47408[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47352 === 20))
{var inst_47322 = (state_47351[13]);var inst_47333 = (state_47351[2]);var inst_47334 = cljs.core.next.call(null,inst_47322);var inst_47308 = inst_47334;var inst_47309 = null;var inst_47310 = 0;var inst_47311 = 0;var state_47351__$1 = (function (){var statearr_47381 = state_47351;(statearr_47381[8] = inst_47310);
(statearr_47381[9] = inst_47311);
(statearr_47381[10] = inst_47308);
(statearr_47381[15] = inst_47333);
(statearr_47381[11] = inst_47309);
return statearr_47381;
})();var statearr_47382_47409 = state_47351__$1;(statearr_47382_47409[2] = null);
(statearr_47382_47409[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_47386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47386[0] = state_machine__5548__auto__);
(statearr_47386[1] = 1);
return statearr_47386;
});
var state_machine__5548__auto____1 = (function (state_47351){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47351);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47387){if((e47387 instanceof Object))
{var ex__5551__auto__ = e47387;var statearr_47388_47410 = state_47351;(statearr_47388_47410[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47351);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47411 = state_47351;
state_47351 = G__47411;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47351){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47389 = f__5563__auto__.call(null);(statearr_47389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47389;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___47492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47471){var state_val_47472 = (state_47471[1]);if((state_val_47472 === 1))
{var state_47471__$1 = state_47471;var statearr_47473_47493 = state_47471__$1;(statearr_47473_47493[2] = null);
(statearr_47473_47493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47472 === 2))
{var state_47471__$1 = state_47471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47471__$1,4,from);
} else
{if((state_val_47472 === 3))
{var inst_47469 = (state_47471[2]);var state_47471__$1 = state_47471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47471__$1,inst_47469);
} else
{if((state_val_47472 === 4))
{var inst_47454 = (state_47471[7]);var inst_47454__$1 = (state_47471[2]);var inst_47455 = (inst_47454__$1 == null);var state_47471__$1 = (function (){var statearr_47474 = state_47471;(statearr_47474[7] = inst_47454__$1);
return statearr_47474;
})();if(cljs.core.truth_(inst_47455))
{var statearr_47475_47494 = state_47471__$1;(statearr_47475_47494[1] = 5);
} else
{var statearr_47476_47495 = state_47471__$1;(statearr_47476_47495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47472 === 5))
{var state_47471__$1 = state_47471;if(cljs.core.truth_(close_QMARK_))
{var statearr_47477_47496 = state_47471__$1;(statearr_47477_47496[1] = 8);
} else
{var statearr_47478_47497 = state_47471__$1;(statearr_47478_47497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47472 === 6))
{var inst_47454 = (state_47471[7]);var state_47471__$1 = state_47471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47471__$1,11,to,inst_47454);
} else
{if((state_val_47472 === 7))
{var inst_47467 = (state_47471[2]);var state_47471__$1 = state_47471;var statearr_47479_47498 = state_47471__$1;(statearr_47479_47498[2] = inst_47467);
(statearr_47479_47498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47472 === 8))
{var inst_47458 = cljs.core.async.close_BANG_.call(null,to);var state_47471__$1 = state_47471;var statearr_47480_47499 = state_47471__$1;(statearr_47480_47499[2] = inst_47458);
(statearr_47480_47499[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47472 === 9))
{var state_47471__$1 = state_47471;var statearr_47481_47500 = state_47471__$1;(statearr_47481_47500[2] = null);
(statearr_47481_47500[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47472 === 10))
{var inst_47461 = (state_47471[2]);var state_47471__$1 = state_47471;var statearr_47482_47501 = state_47471__$1;(statearr_47482_47501[2] = inst_47461);
(statearr_47482_47501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47472 === 11))
{var inst_47464 = (state_47471[2]);var state_47471__$1 = (function (){var statearr_47483 = state_47471;(statearr_47483[8] = inst_47464);
return statearr_47483;
})();var statearr_47484_47502 = state_47471__$1;(statearr_47484_47502[2] = null);
(statearr_47484_47502[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_47488 = [null,null,null,null,null,null,null,null,null];(statearr_47488[0] = state_machine__5548__auto__);
(statearr_47488[1] = 1);
return statearr_47488;
});
var state_machine__5548__auto____1 = (function (state_47471){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47471);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47489){if((e47489 instanceof Object))
{var ex__5551__auto__ = e47489;var statearr_47490_47503 = state_47471;(statearr_47490_47503[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47471);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47504 = state_47471;
state_47471 = G__47504;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47471){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47491 = f__5563__auto__.call(null);(statearr_47491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47492);
return statearr_47491;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___47591 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47569){var state_val_47570 = (state_47569[1]);if((state_val_47570 === 1))
{var state_47569__$1 = state_47569;var statearr_47571_47592 = state_47569__$1;(statearr_47571_47592[2] = null);
(statearr_47571_47592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 2))
{var state_47569__$1 = state_47569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47569__$1,4,ch);
} else
{if((state_val_47570 === 3))
{var inst_47567 = (state_47569[2]);var state_47569__$1 = state_47569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47569__$1,inst_47567);
} else
{if((state_val_47570 === 4))
{var inst_47550 = (state_47569[7]);var inst_47550__$1 = (state_47569[2]);var inst_47551 = (inst_47550__$1 == null);var state_47569__$1 = (function (){var statearr_47572 = state_47569;(statearr_47572[7] = inst_47550__$1);
return statearr_47572;
})();if(cljs.core.truth_(inst_47551))
{var statearr_47573_47593 = state_47569__$1;(statearr_47573_47593[1] = 5);
} else
{var statearr_47574_47594 = state_47569__$1;(statearr_47574_47594[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 5))
{var inst_47553 = cljs.core.async.close_BANG_.call(null,tc);var inst_47554 = cljs.core.async.close_BANG_.call(null,fc);var state_47569__$1 = (function (){var statearr_47575 = state_47569;(statearr_47575[8] = inst_47553);
return statearr_47575;
})();var statearr_47576_47595 = state_47569__$1;(statearr_47576_47595[2] = inst_47554);
(statearr_47576_47595[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 6))
{var inst_47550 = (state_47569[7]);var inst_47556 = p.call(null,inst_47550);var state_47569__$1 = state_47569;if(cljs.core.truth_(inst_47556))
{var statearr_47577_47596 = state_47569__$1;(statearr_47577_47596[1] = 9);
} else
{var statearr_47578_47597 = state_47569__$1;(statearr_47578_47597[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 7))
{var inst_47565 = (state_47569[2]);var state_47569__$1 = state_47569;var statearr_47579_47598 = state_47569__$1;(statearr_47579_47598[2] = inst_47565);
(statearr_47579_47598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 8))
{var inst_47562 = (state_47569[2]);var state_47569__$1 = (function (){var statearr_47580 = state_47569;(statearr_47580[9] = inst_47562);
return statearr_47580;
})();var statearr_47581_47599 = state_47569__$1;(statearr_47581_47599[2] = null);
(statearr_47581_47599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 9))
{var state_47569__$1 = state_47569;var statearr_47582_47600 = state_47569__$1;(statearr_47582_47600[2] = tc);
(statearr_47582_47600[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 10))
{var state_47569__$1 = state_47569;var statearr_47583_47601 = state_47569__$1;(statearr_47583_47601[2] = fc);
(statearr_47583_47601[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47570 === 11))
{var inst_47550 = (state_47569[7]);var inst_47560 = (state_47569[2]);var state_47569__$1 = state_47569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47569__$1,8,inst_47560,inst_47550);
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
var state_machine__5548__auto____0 = (function (){var statearr_47587 = [null,null,null,null,null,null,null,null,null,null];(statearr_47587[0] = state_machine__5548__auto__);
(statearr_47587[1] = 1);
return statearr_47587;
});
var state_machine__5548__auto____1 = (function (state_47569){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47588){if((e47588 instanceof Object))
{var ex__5551__auto__ = e47588;var statearr_47589_47602 = state_47569;(statearr_47589_47602[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47603 = state_47569;
state_47569 = G__47603;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47569){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47590 = f__5563__auto__.call(null);(statearr_47590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47591);
return statearr_47590;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47650){var state_val_47651 = (state_47650[1]);if((state_val_47651 === 7))
{var inst_47646 = (state_47650[2]);var state_47650__$1 = state_47650;var statearr_47652_47668 = state_47650__$1;(statearr_47652_47668[2] = inst_47646);
(statearr_47652_47668[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47651 === 6))
{var inst_47636 = (state_47650[7]);var inst_47639 = (state_47650[8]);var inst_47643 = f.call(null,inst_47636,inst_47639);var inst_47636__$1 = inst_47643;var state_47650__$1 = (function (){var statearr_47653 = state_47650;(statearr_47653[7] = inst_47636__$1);
return statearr_47653;
})();var statearr_47654_47669 = state_47650__$1;(statearr_47654_47669[2] = null);
(statearr_47654_47669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47651 === 5))
{var inst_47636 = (state_47650[7]);var state_47650__$1 = state_47650;var statearr_47655_47670 = state_47650__$1;(statearr_47655_47670[2] = inst_47636);
(statearr_47655_47670[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47651 === 4))
{var inst_47639 = (state_47650[8]);var inst_47639__$1 = (state_47650[2]);var inst_47640 = (inst_47639__$1 == null);var state_47650__$1 = (function (){var statearr_47656 = state_47650;(statearr_47656[8] = inst_47639__$1);
return statearr_47656;
})();if(cljs.core.truth_(inst_47640))
{var statearr_47657_47671 = state_47650__$1;(statearr_47657_47671[1] = 5);
} else
{var statearr_47658_47672 = state_47650__$1;(statearr_47658_47672[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47651 === 3))
{var inst_47648 = (state_47650[2]);var state_47650__$1 = state_47650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47650__$1,inst_47648);
} else
{if((state_val_47651 === 2))
{var state_47650__$1 = state_47650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47650__$1,4,ch);
} else
{if((state_val_47651 === 1))
{var inst_47636 = init;var state_47650__$1 = (function (){var statearr_47659 = state_47650;(statearr_47659[7] = inst_47636);
return statearr_47659;
})();var statearr_47660_47673 = state_47650__$1;(statearr_47660_47673[2] = null);
(statearr_47660_47673[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_47664 = [null,null,null,null,null,null,null,null,null];(statearr_47664[0] = state_machine__5548__auto__);
(statearr_47664[1] = 1);
return statearr_47664;
});
var state_machine__5548__auto____1 = (function (state_47650){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47650);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47665){if((e47665 instanceof Object))
{var ex__5551__auto__ = e47665;var statearr_47666_47674 = state_47650;(statearr_47666_47674[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47650);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47675 = state_47650;
state_47650 = G__47675;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47650){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47667 = f__5563__auto__.call(null);(statearr_47667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47667;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47737){var state_val_47738 = (state_47737[1]);if((state_val_47738 === 1))
{var inst_47717 = cljs.core.seq.call(null,coll);var inst_47718 = inst_47717;var state_47737__$1 = (function (){var statearr_47739 = state_47737;(statearr_47739[7] = inst_47718);
return statearr_47739;
})();var statearr_47740_47758 = state_47737__$1;(statearr_47740_47758[2] = null);
(statearr_47740_47758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47738 === 2))
{var inst_47718 = (state_47737[7]);var state_47737__$1 = state_47737;if(cljs.core.truth_(inst_47718))
{var statearr_47741_47759 = state_47737__$1;(statearr_47741_47759[1] = 4);
} else
{var statearr_47742_47760 = state_47737__$1;(statearr_47742_47760[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47738 === 3))
{var inst_47735 = (state_47737[2]);var state_47737__$1 = state_47737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47737__$1,inst_47735);
} else
{if((state_val_47738 === 4))
{var inst_47718 = (state_47737[7]);var inst_47721 = cljs.core.first.call(null,inst_47718);var state_47737__$1 = state_47737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47737__$1,7,ch,inst_47721);
} else
{if((state_val_47738 === 5))
{var state_47737__$1 = state_47737;if(cljs.core.truth_(close_QMARK_))
{var statearr_47743_47761 = state_47737__$1;(statearr_47743_47761[1] = 8);
} else
{var statearr_47744_47762 = state_47737__$1;(statearr_47744_47762[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47738 === 6))
{var inst_47733 = (state_47737[2]);var state_47737__$1 = state_47737;var statearr_47745_47763 = state_47737__$1;(statearr_47745_47763[2] = inst_47733);
(statearr_47745_47763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47738 === 7))
{var inst_47718 = (state_47737[7]);var inst_47723 = (state_47737[2]);var inst_47724 = cljs.core.next.call(null,inst_47718);var inst_47718__$1 = inst_47724;var state_47737__$1 = (function (){var statearr_47746 = state_47737;(statearr_47746[7] = inst_47718__$1);
(statearr_47746[8] = inst_47723);
return statearr_47746;
})();var statearr_47747_47764 = state_47737__$1;(statearr_47747_47764[2] = null);
(statearr_47747_47764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47738 === 8))
{var inst_47728 = cljs.core.async.close_BANG_.call(null,ch);var state_47737__$1 = state_47737;var statearr_47748_47765 = state_47737__$1;(statearr_47748_47765[2] = inst_47728);
(statearr_47748_47765[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47738 === 9))
{var state_47737__$1 = state_47737;var statearr_47749_47766 = state_47737__$1;(statearr_47749_47766[2] = null);
(statearr_47749_47766[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47738 === 10))
{var inst_47731 = (state_47737[2]);var state_47737__$1 = state_47737;var statearr_47750_47767 = state_47737__$1;(statearr_47750_47767[2] = inst_47731);
(statearr_47750_47767[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_47754 = [null,null,null,null,null,null,null,null,null];(statearr_47754[0] = state_machine__5548__auto__);
(statearr_47754[1] = 1);
return statearr_47754;
});
var state_machine__5548__auto____1 = (function (state_47737){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47755){if((e47755 instanceof Object))
{var ex__5551__auto__ = e47755;var statearr_47756_47768 = state_47737;(statearr_47756_47768[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47769 = state_47737;
state_47737 = G__47769;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47737){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47757 = f__5563__auto__.call(null);(statearr_47757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47757;
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
cljs.core.async.Mux = (function (){var obj47771 = {};return obj47771;
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
cljs.core.async.Mult = (function (){var obj47773 = {};return obj47773;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t47997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47997 = (function (cs,ch,mult,meta47998){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta47998 = meta47998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47997.cljs$lang$type = true;
cljs.core.async.t47997.cljs$lang$ctorStr = "cljs.core.async/t47997";
cljs.core.async.t47997.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47997");
});})(cs))
;
cljs.core.async.t47997.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t47997.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t47997.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t47997.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t47997.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t47997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t47997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47999){var self__ = this;
var _47999__$1 = this;return self__.meta47998;
});})(cs))
;
cljs.core.async.t47997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47999,meta47998__$1){var self__ = this;
var _47999__$1 = this;return (new cljs.core.async.t47997(self__.cs,self__.ch,self__.mult,meta47998__$1));
});})(cs))
;
cljs.core.async.__GT_t47997 = ((function (cs){
return (function __GT_t47997(cs__$1,ch__$1,mult__$1,meta47998){return (new cljs.core.async.t47997(cs__$1,ch__$1,mult__$1,meta47998));
});})(cs))
;
}
return (new cljs.core.async.t47997(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___48220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48134){var state_val_48135 = (state_48134[1]);if((state_val_48135 === 32))
{var inst_48002 = (state_48134[7]);var inst_48078 = (state_48134[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48134,31,Object,null,30);var inst_48085 = cljs.core.async.put_BANG_.call(null,inst_48078,inst_48002,done);var state_48134__$1 = state_48134;var statearr_48136_48221 = state_48134__$1;(statearr_48136_48221[2] = inst_48085);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48134__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 1))
{var state_48134__$1 = state_48134;var statearr_48137_48222 = state_48134__$1;(statearr_48137_48222[2] = null);
(statearr_48137_48222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 33))
{var inst_48091 = (state_48134[9]);var inst_48093 = cljs.core.chunked_seq_QMARK_.call(null,inst_48091);var state_48134__$1 = state_48134;if(inst_48093)
{var statearr_48138_48223 = state_48134__$1;(statearr_48138_48223[1] = 36);
} else
{var statearr_48139_48224 = state_48134__$1;(statearr_48139_48224[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 2))
{var state_48134__$1 = state_48134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48134__$1,4,ch);
} else
{if((state_val_48135 === 34))
{var state_48134__$1 = state_48134;var statearr_48140_48225 = state_48134__$1;(statearr_48140_48225[2] = null);
(statearr_48140_48225[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 3))
{var inst_48132 = (state_48134[2]);var state_48134__$1 = state_48134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48134__$1,inst_48132);
} else
{if((state_val_48135 === 35))
{var inst_48116 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48141_48226 = state_48134__$1;(statearr_48141_48226[2] = inst_48116);
(statearr_48141_48226[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 4))
{var inst_48002 = (state_48134[7]);var inst_48002__$1 = (state_48134[2]);var inst_48003 = (inst_48002__$1 == null);var state_48134__$1 = (function (){var statearr_48142 = state_48134;(statearr_48142[7] = inst_48002__$1);
return statearr_48142;
})();if(cljs.core.truth_(inst_48003))
{var statearr_48143_48227 = state_48134__$1;(statearr_48143_48227[1] = 5);
} else
{var statearr_48144_48228 = state_48134__$1;(statearr_48144_48228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 36))
{var inst_48091 = (state_48134[9]);var inst_48095 = cljs.core.chunk_first.call(null,inst_48091);var inst_48096 = cljs.core.chunk_rest.call(null,inst_48091);var inst_48097 = cljs.core.count.call(null,inst_48095);var inst_48070 = inst_48096;var inst_48071 = inst_48095;var inst_48072 = inst_48097;var inst_48073 = 0;var state_48134__$1 = (function (){var statearr_48145 = state_48134;(statearr_48145[10] = inst_48070);
(statearr_48145[11] = inst_48071);
(statearr_48145[12] = inst_48072);
(statearr_48145[13] = inst_48073);
return statearr_48145;
})();var statearr_48146_48229 = state_48134__$1;(statearr_48146_48229[2] = null);
(statearr_48146_48229[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 5))
{var inst_48009 = cljs.core.deref.call(null,cs);var inst_48010 = cljs.core.seq.call(null,inst_48009);var inst_48011 = inst_48010;var inst_48012 = null;var inst_48013 = 0;var inst_48014 = 0;var state_48134__$1 = (function (){var statearr_48147 = state_48134;(statearr_48147[14] = inst_48014);
(statearr_48147[15] = inst_48012);
(statearr_48147[16] = inst_48013);
(statearr_48147[17] = inst_48011);
return statearr_48147;
})();var statearr_48148_48230 = state_48134__$1;(statearr_48148_48230[2] = null);
(statearr_48148_48230[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 37))
{var inst_48091 = (state_48134[9]);var inst_48100 = cljs.core.first.call(null,inst_48091);var state_48134__$1 = (function (){var statearr_48149 = state_48134;(statearr_48149[18] = inst_48100);
return statearr_48149;
})();var statearr_48150_48231 = state_48134__$1;(statearr_48150_48231[2] = null);
(statearr_48150_48231[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 6))
{var inst_48062 = (state_48134[19]);var inst_48061 = cljs.core.deref.call(null,cs);var inst_48062__$1 = cljs.core.keys.call(null,inst_48061);var inst_48063 = cljs.core.count.call(null,inst_48062__$1);var inst_48064 = cljs.core.reset_BANG_.call(null,dctr,inst_48063);var inst_48069 = cljs.core.seq.call(null,inst_48062__$1);var inst_48070 = inst_48069;var inst_48071 = null;var inst_48072 = 0;var inst_48073 = 0;var state_48134__$1 = (function (){var statearr_48151 = state_48134;(statearr_48151[10] = inst_48070);
(statearr_48151[11] = inst_48071);
(statearr_48151[12] = inst_48072);
(statearr_48151[13] = inst_48073);
(statearr_48151[19] = inst_48062__$1);
(statearr_48151[20] = inst_48064);
return statearr_48151;
})();var statearr_48152_48232 = state_48134__$1;(statearr_48152_48232[2] = null);
(statearr_48152_48232[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 38))
{var inst_48113 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48153_48233 = state_48134__$1;(statearr_48153_48233[2] = inst_48113);
(statearr_48153_48233[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 7))
{var inst_48130 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48154_48234 = state_48134__$1;(statearr_48154_48234[2] = inst_48130);
(statearr_48154_48234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 39))
{var inst_48091 = (state_48134[9]);var inst_48109 = (state_48134[2]);var inst_48110 = cljs.core.next.call(null,inst_48091);var inst_48070 = inst_48110;var inst_48071 = null;var inst_48072 = 0;var inst_48073 = 0;var state_48134__$1 = (function (){var statearr_48155 = state_48134;(statearr_48155[10] = inst_48070);
(statearr_48155[11] = inst_48071);
(statearr_48155[12] = inst_48072);
(statearr_48155[13] = inst_48073);
(statearr_48155[21] = inst_48109);
return statearr_48155;
})();var statearr_48156_48235 = state_48134__$1;(statearr_48156_48235[2] = null);
(statearr_48156_48235[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 8))
{var inst_48014 = (state_48134[14]);var inst_48013 = (state_48134[16]);var inst_48016 = (inst_48014 < inst_48013);var inst_48017 = inst_48016;var state_48134__$1 = state_48134;if(cljs.core.truth_(inst_48017))
{var statearr_48157_48236 = state_48134__$1;(statearr_48157_48236[1] = 10);
} else
{var statearr_48158_48237 = state_48134__$1;(statearr_48158_48237[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 40))
{var inst_48100 = (state_48134[18]);var inst_48101 = (state_48134[2]);var inst_48102 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48103 = cljs.core.async.untap_STAR_.call(null,m,inst_48100);var state_48134__$1 = (function (){var statearr_48159 = state_48134;(statearr_48159[22] = inst_48102);
(statearr_48159[23] = inst_48101);
return statearr_48159;
})();var statearr_48160_48238 = state_48134__$1;(statearr_48160_48238[2] = inst_48103);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48134__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 9))
{var inst_48059 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48161_48239 = state_48134__$1;(statearr_48161_48239[2] = inst_48059);
(statearr_48161_48239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 41))
{var inst_48002 = (state_48134[7]);var inst_48100 = (state_48134[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48134,40,Object,null,39);var inst_48107 = cljs.core.async.put_BANG_.call(null,inst_48100,inst_48002,done);var state_48134__$1 = state_48134;var statearr_48162_48240 = state_48134__$1;(statearr_48162_48240[2] = inst_48107);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48134__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 10))
{var inst_48014 = (state_48134[14]);var inst_48012 = (state_48134[15]);var inst_48020 = cljs.core._nth.call(null,inst_48012,inst_48014);var inst_48021 = cljs.core.nth.call(null,inst_48020,0,null);var inst_48022 = cljs.core.nth.call(null,inst_48020,1,null);var state_48134__$1 = (function (){var statearr_48163 = state_48134;(statearr_48163[24] = inst_48021);
return statearr_48163;
})();if(cljs.core.truth_(inst_48022))
{var statearr_48164_48241 = state_48134__$1;(statearr_48164_48241[1] = 13);
} else
{var statearr_48165_48242 = state_48134__$1;(statearr_48165_48242[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 42))
{var state_48134__$1 = state_48134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48134__$1,45,dchan);
} else
{if((state_val_48135 === 11))
{var inst_48011 = (state_48134[17]);var inst_48031 = (state_48134[25]);var inst_48031__$1 = cljs.core.seq.call(null,inst_48011);var state_48134__$1 = (function (){var statearr_48166 = state_48134;(statearr_48166[25] = inst_48031__$1);
return statearr_48166;
})();if(inst_48031__$1)
{var statearr_48167_48243 = state_48134__$1;(statearr_48167_48243[1] = 16);
} else
{var statearr_48168_48244 = state_48134__$1;(statearr_48168_48244[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 43))
{var state_48134__$1 = state_48134;var statearr_48169_48245 = state_48134__$1;(statearr_48169_48245[2] = null);
(statearr_48169_48245[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 12))
{var inst_48057 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48170_48246 = state_48134__$1;(statearr_48170_48246[2] = inst_48057);
(statearr_48170_48246[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 44))
{var inst_48127 = (state_48134[2]);var state_48134__$1 = (function (){var statearr_48171 = state_48134;(statearr_48171[26] = inst_48127);
return statearr_48171;
})();var statearr_48172_48247 = state_48134__$1;(statearr_48172_48247[2] = null);
(statearr_48172_48247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 13))
{var inst_48021 = (state_48134[24]);var inst_48024 = cljs.core.async.close_BANG_.call(null,inst_48021);var state_48134__$1 = state_48134;var statearr_48173_48248 = state_48134__$1;(statearr_48173_48248[2] = inst_48024);
(statearr_48173_48248[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 45))
{var inst_48124 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48177_48249 = state_48134__$1;(statearr_48177_48249[2] = inst_48124);
(statearr_48177_48249[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 14))
{var state_48134__$1 = state_48134;var statearr_48178_48250 = state_48134__$1;(statearr_48178_48250[2] = null);
(statearr_48178_48250[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 15))
{var inst_48014 = (state_48134[14]);var inst_48012 = (state_48134[15]);var inst_48013 = (state_48134[16]);var inst_48011 = (state_48134[17]);var inst_48027 = (state_48134[2]);var inst_48028 = (inst_48014 + 1);var tmp48174 = inst_48012;var tmp48175 = inst_48013;var tmp48176 = inst_48011;var inst_48011__$1 = tmp48176;var inst_48012__$1 = tmp48174;var inst_48013__$1 = tmp48175;var inst_48014__$1 = inst_48028;var state_48134__$1 = (function (){var statearr_48179 = state_48134;(statearr_48179[14] = inst_48014__$1);
(statearr_48179[15] = inst_48012__$1);
(statearr_48179[16] = inst_48013__$1);
(statearr_48179[17] = inst_48011__$1);
(statearr_48179[27] = inst_48027);
return statearr_48179;
})();var statearr_48180_48251 = state_48134__$1;(statearr_48180_48251[2] = null);
(statearr_48180_48251[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 16))
{var inst_48031 = (state_48134[25]);var inst_48033 = cljs.core.chunked_seq_QMARK_.call(null,inst_48031);var state_48134__$1 = state_48134;if(inst_48033)
{var statearr_48181_48252 = state_48134__$1;(statearr_48181_48252[1] = 19);
} else
{var statearr_48182_48253 = state_48134__$1;(statearr_48182_48253[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 17))
{var state_48134__$1 = state_48134;var statearr_48183_48254 = state_48134__$1;(statearr_48183_48254[2] = null);
(statearr_48183_48254[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 18))
{var inst_48055 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48184_48255 = state_48134__$1;(statearr_48184_48255[2] = inst_48055);
(statearr_48184_48255[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 19))
{var inst_48031 = (state_48134[25]);var inst_48035 = cljs.core.chunk_first.call(null,inst_48031);var inst_48036 = cljs.core.chunk_rest.call(null,inst_48031);var inst_48037 = cljs.core.count.call(null,inst_48035);var inst_48011 = inst_48036;var inst_48012 = inst_48035;var inst_48013 = inst_48037;var inst_48014 = 0;var state_48134__$1 = (function (){var statearr_48185 = state_48134;(statearr_48185[14] = inst_48014);
(statearr_48185[15] = inst_48012);
(statearr_48185[16] = inst_48013);
(statearr_48185[17] = inst_48011);
return statearr_48185;
})();var statearr_48186_48256 = state_48134__$1;(statearr_48186_48256[2] = null);
(statearr_48186_48256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 20))
{var inst_48031 = (state_48134[25]);var inst_48041 = cljs.core.first.call(null,inst_48031);var inst_48042 = cljs.core.nth.call(null,inst_48041,0,null);var inst_48043 = cljs.core.nth.call(null,inst_48041,1,null);var state_48134__$1 = (function (){var statearr_48187 = state_48134;(statearr_48187[28] = inst_48042);
return statearr_48187;
})();if(cljs.core.truth_(inst_48043))
{var statearr_48188_48257 = state_48134__$1;(statearr_48188_48257[1] = 22);
} else
{var statearr_48189_48258 = state_48134__$1;(statearr_48189_48258[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 21))
{var inst_48052 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48190_48259 = state_48134__$1;(statearr_48190_48259[2] = inst_48052);
(statearr_48190_48259[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 22))
{var inst_48042 = (state_48134[28]);var inst_48045 = cljs.core.async.close_BANG_.call(null,inst_48042);var state_48134__$1 = state_48134;var statearr_48191_48260 = state_48134__$1;(statearr_48191_48260[2] = inst_48045);
(statearr_48191_48260[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 23))
{var state_48134__$1 = state_48134;var statearr_48192_48261 = state_48134__$1;(statearr_48192_48261[2] = null);
(statearr_48192_48261[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 24))
{var inst_48031 = (state_48134[25]);var inst_48048 = (state_48134[2]);var inst_48049 = cljs.core.next.call(null,inst_48031);var inst_48011 = inst_48049;var inst_48012 = null;var inst_48013 = 0;var inst_48014 = 0;var state_48134__$1 = (function (){var statearr_48193 = state_48134;(statearr_48193[29] = inst_48048);
(statearr_48193[14] = inst_48014);
(statearr_48193[15] = inst_48012);
(statearr_48193[16] = inst_48013);
(statearr_48193[17] = inst_48011);
return statearr_48193;
})();var statearr_48194_48262 = state_48134__$1;(statearr_48194_48262[2] = null);
(statearr_48194_48262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 25))
{var inst_48072 = (state_48134[12]);var inst_48073 = (state_48134[13]);var inst_48075 = (inst_48073 < inst_48072);var inst_48076 = inst_48075;var state_48134__$1 = state_48134;if(cljs.core.truth_(inst_48076))
{var statearr_48195_48263 = state_48134__$1;(statearr_48195_48263[1] = 27);
} else
{var statearr_48196_48264 = state_48134__$1;(statearr_48196_48264[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 26))
{var inst_48062 = (state_48134[19]);var inst_48120 = (state_48134[2]);var inst_48121 = cljs.core.seq.call(null,inst_48062);var state_48134__$1 = (function (){var statearr_48197 = state_48134;(statearr_48197[30] = inst_48120);
return statearr_48197;
})();if(inst_48121)
{var statearr_48198_48265 = state_48134__$1;(statearr_48198_48265[1] = 42);
} else
{var statearr_48199_48266 = state_48134__$1;(statearr_48199_48266[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 27))
{var inst_48071 = (state_48134[11]);var inst_48073 = (state_48134[13]);var inst_48078 = cljs.core._nth.call(null,inst_48071,inst_48073);var state_48134__$1 = (function (){var statearr_48200 = state_48134;(statearr_48200[8] = inst_48078);
return statearr_48200;
})();var statearr_48201_48267 = state_48134__$1;(statearr_48201_48267[2] = null);
(statearr_48201_48267[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 28))
{var inst_48070 = (state_48134[10]);var inst_48091 = (state_48134[9]);var inst_48091__$1 = cljs.core.seq.call(null,inst_48070);var state_48134__$1 = (function (){var statearr_48205 = state_48134;(statearr_48205[9] = inst_48091__$1);
return statearr_48205;
})();if(inst_48091__$1)
{var statearr_48206_48268 = state_48134__$1;(statearr_48206_48268[1] = 33);
} else
{var statearr_48207_48269 = state_48134__$1;(statearr_48207_48269[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 29))
{var inst_48118 = (state_48134[2]);var state_48134__$1 = state_48134;var statearr_48208_48270 = state_48134__$1;(statearr_48208_48270[2] = inst_48118);
(statearr_48208_48270[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 30))
{var inst_48070 = (state_48134[10]);var inst_48071 = (state_48134[11]);var inst_48072 = (state_48134[12]);var inst_48073 = (state_48134[13]);var inst_48087 = (state_48134[2]);var inst_48088 = (inst_48073 + 1);var tmp48202 = inst_48070;var tmp48203 = inst_48071;var tmp48204 = inst_48072;var inst_48070__$1 = tmp48202;var inst_48071__$1 = tmp48203;var inst_48072__$1 = tmp48204;var inst_48073__$1 = inst_48088;var state_48134__$1 = (function (){var statearr_48209 = state_48134;(statearr_48209[10] = inst_48070__$1);
(statearr_48209[11] = inst_48071__$1);
(statearr_48209[12] = inst_48072__$1);
(statearr_48209[13] = inst_48073__$1);
(statearr_48209[31] = inst_48087);
return statearr_48209;
})();var statearr_48210_48271 = state_48134__$1;(statearr_48210_48271[2] = null);
(statearr_48210_48271[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48135 === 31))
{var inst_48078 = (state_48134[8]);var inst_48079 = (state_48134[2]);var inst_48080 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48081 = cljs.core.async.untap_STAR_.call(null,m,inst_48078);var state_48134__$1 = (function (){var statearr_48211 = state_48134;(statearr_48211[32] = inst_48080);
(statearr_48211[33] = inst_48079);
return statearr_48211;
})();var statearr_48212_48272 = state_48134__$1;(statearr_48212_48272[2] = inst_48081);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48134__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_48216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48216[0] = state_machine__5548__auto__);
(statearr_48216[1] = 1);
return statearr_48216;
});
var state_machine__5548__auto____1 = (function (state_48134){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48134);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48217){if((e48217 instanceof Object))
{var ex__5551__auto__ = e48217;var statearr_48218_48273 = state_48134;(statearr_48218_48273[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48274 = state_48134;
state_48134 = G__48274;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48134){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48219 = f__5563__auto__.call(null);(statearr_48219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48220);
return statearr_48219;
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
cljs.core.async.Mix = (function (){var obj48276 = {};return obj48276;
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
;var m = (function (){if(typeof cljs.core.async.t48386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48386 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta48387){
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
this.meta48387 = meta48387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48386.cljs$lang$type = true;
cljs.core.async.t48386.cljs$lang$ctorStr = "cljs.core.async/t48386";
cljs.core.async.t48386.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48386");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48386.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48388){var self__ = this;
var _48388__$1 = this;return self__.meta48387;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48388,meta48387__$1){var self__ = this;
var _48388__$1 = this;return (new cljs.core.async.t48386(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta48387__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48386 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48386(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48387){return (new cljs.core.async.t48386(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48387));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48386(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___48495 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48453){var state_val_48454 = (state_48453[1]);if((state_val_48454 === 1))
{var inst_48392 = (state_48453[7]);var inst_48392__$1 = calc_state.call(null);var inst_48393 = cljs.core.seq_QMARK_.call(null,inst_48392__$1);var state_48453__$1 = (function (){var statearr_48455 = state_48453;(statearr_48455[7] = inst_48392__$1);
return statearr_48455;
})();if(inst_48393)
{var statearr_48456_48496 = state_48453__$1;(statearr_48456_48496[1] = 2);
} else
{var statearr_48457_48497 = state_48453__$1;(statearr_48457_48497[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 2))
{var inst_48392 = (state_48453[7]);var inst_48395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48392);var state_48453__$1 = state_48453;var statearr_48458_48498 = state_48453__$1;(statearr_48458_48498[2] = inst_48395);
(statearr_48458_48498[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 3))
{var inst_48392 = (state_48453[7]);var state_48453__$1 = state_48453;var statearr_48459_48499 = state_48453__$1;(statearr_48459_48499[2] = inst_48392);
(statearr_48459_48499[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 4))
{var inst_48392 = (state_48453[7]);var inst_48398 = (state_48453[2]);var inst_48399 = cljs.core.get.call(null,inst_48398,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48400 = cljs.core.get.call(null,inst_48398,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48401 = cljs.core.get.call(null,inst_48398,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48402 = inst_48392;var state_48453__$1 = (function (){var statearr_48460 = state_48453;(statearr_48460[8] = inst_48400);
(statearr_48460[9] = inst_48402);
(statearr_48460[10] = inst_48401);
(statearr_48460[11] = inst_48399);
return statearr_48460;
})();var statearr_48461_48500 = state_48453__$1;(statearr_48461_48500[2] = null);
(statearr_48461_48500[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 5))
{var inst_48402 = (state_48453[9]);var inst_48405 = cljs.core.seq_QMARK_.call(null,inst_48402);var state_48453__$1 = state_48453;if(inst_48405)
{var statearr_48462_48501 = state_48453__$1;(statearr_48462_48501[1] = 7);
} else
{var statearr_48463_48502 = state_48453__$1;(statearr_48463_48502[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 6))
{var inst_48451 = (state_48453[2]);var state_48453__$1 = state_48453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48453__$1,inst_48451);
} else
{if((state_val_48454 === 7))
{var inst_48402 = (state_48453[9]);var inst_48407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48402);var state_48453__$1 = state_48453;var statearr_48464_48503 = state_48453__$1;(statearr_48464_48503[2] = inst_48407);
(statearr_48464_48503[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 8))
{var inst_48402 = (state_48453[9]);var state_48453__$1 = state_48453;var statearr_48465_48504 = state_48453__$1;(statearr_48465_48504[2] = inst_48402);
(statearr_48465_48504[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 9))
{var inst_48410 = (state_48453[12]);var inst_48410__$1 = (state_48453[2]);var inst_48411 = cljs.core.get.call(null,inst_48410__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48412 = cljs.core.get.call(null,inst_48410__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48413 = cljs.core.get.call(null,inst_48410__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_48453__$1 = (function (){var statearr_48466 = state_48453;(statearr_48466[13] = inst_48413);
(statearr_48466[14] = inst_48412);
(statearr_48466[12] = inst_48410__$1);
return statearr_48466;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48453__$1,10,inst_48411);
} else
{if((state_val_48454 === 10))
{var inst_48417 = (state_48453[15]);var inst_48418 = (state_48453[16]);var inst_48416 = (state_48453[2]);var inst_48417__$1 = cljs.core.nth.call(null,inst_48416,0,null);var inst_48418__$1 = cljs.core.nth.call(null,inst_48416,1,null);var inst_48419 = (inst_48417__$1 == null);var inst_48420 = cljs.core._EQ_.call(null,inst_48418__$1,change);var inst_48421 = (inst_48419) || (inst_48420);var state_48453__$1 = (function (){var statearr_48467 = state_48453;(statearr_48467[15] = inst_48417__$1);
(statearr_48467[16] = inst_48418__$1);
return statearr_48467;
})();if(cljs.core.truth_(inst_48421))
{var statearr_48468_48505 = state_48453__$1;(statearr_48468_48505[1] = 11);
} else
{var statearr_48469_48506 = state_48453__$1;(statearr_48469_48506[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 11))
{var inst_48417 = (state_48453[15]);var inst_48423 = (inst_48417 == null);var state_48453__$1 = state_48453;if(cljs.core.truth_(inst_48423))
{var statearr_48470_48507 = state_48453__$1;(statearr_48470_48507[1] = 14);
} else
{var statearr_48471_48508 = state_48453__$1;(statearr_48471_48508[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 12))
{var inst_48413 = (state_48453[13]);var inst_48432 = (state_48453[17]);var inst_48418 = (state_48453[16]);var inst_48432__$1 = inst_48413.call(null,inst_48418);var state_48453__$1 = (function (){var statearr_48472 = state_48453;(statearr_48472[17] = inst_48432__$1);
return statearr_48472;
})();if(cljs.core.truth_(inst_48432__$1))
{var statearr_48473_48509 = state_48453__$1;(statearr_48473_48509[1] = 17);
} else
{var statearr_48474_48510 = state_48453__$1;(statearr_48474_48510[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 13))
{var inst_48449 = (state_48453[2]);var state_48453__$1 = state_48453;var statearr_48475_48511 = state_48453__$1;(statearr_48475_48511[2] = inst_48449);
(statearr_48475_48511[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 14))
{var inst_48418 = (state_48453[16]);var inst_48425 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48418);var state_48453__$1 = state_48453;var statearr_48476_48512 = state_48453__$1;(statearr_48476_48512[2] = inst_48425);
(statearr_48476_48512[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 15))
{var state_48453__$1 = state_48453;var statearr_48477_48513 = state_48453__$1;(statearr_48477_48513[2] = null);
(statearr_48477_48513[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 16))
{var inst_48428 = (state_48453[2]);var inst_48429 = calc_state.call(null);var inst_48402 = inst_48429;var state_48453__$1 = (function (){var statearr_48478 = state_48453;(statearr_48478[9] = inst_48402);
(statearr_48478[18] = inst_48428);
return statearr_48478;
})();var statearr_48479_48514 = state_48453__$1;(statearr_48479_48514[2] = null);
(statearr_48479_48514[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 17))
{var inst_48432 = (state_48453[17]);var state_48453__$1 = state_48453;var statearr_48480_48515 = state_48453__$1;(statearr_48480_48515[2] = inst_48432);
(statearr_48480_48515[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 18))
{var inst_48413 = (state_48453[13]);var inst_48412 = (state_48453[14]);var inst_48418 = (state_48453[16]);var inst_48435 = cljs.core.empty_QMARK_.call(null,inst_48413);var inst_48436 = inst_48412.call(null,inst_48418);var inst_48437 = cljs.core.not.call(null,inst_48436);var inst_48438 = (inst_48435) && (inst_48437);var state_48453__$1 = state_48453;var statearr_48481_48516 = state_48453__$1;(statearr_48481_48516[2] = inst_48438);
(statearr_48481_48516[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 19))
{var inst_48440 = (state_48453[2]);var state_48453__$1 = state_48453;if(cljs.core.truth_(inst_48440))
{var statearr_48482_48517 = state_48453__$1;(statearr_48482_48517[1] = 20);
} else
{var statearr_48483_48518 = state_48453__$1;(statearr_48483_48518[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 20))
{var inst_48417 = (state_48453[15]);var state_48453__$1 = state_48453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48453__$1,23,out,inst_48417);
} else
{if((state_val_48454 === 21))
{var state_48453__$1 = state_48453;var statearr_48484_48519 = state_48453__$1;(statearr_48484_48519[2] = null);
(statearr_48484_48519[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 22))
{var inst_48410 = (state_48453[12]);var inst_48446 = (state_48453[2]);var inst_48402 = inst_48410;var state_48453__$1 = (function (){var statearr_48485 = state_48453;(statearr_48485[9] = inst_48402);
(statearr_48485[19] = inst_48446);
return statearr_48485;
})();var statearr_48486_48520 = state_48453__$1;(statearr_48486_48520[2] = null);
(statearr_48486_48520[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48454 === 23))
{var inst_48443 = (state_48453[2]);var state_48453__$1 = state_48453;var statearr_48487_48521 = state_48453__$1;(statearr_48487_48521[2] = inst_48443);
(statearr_48487_48521[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_48491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48491[0] = state_machine__5548__auto__);
(statearr_48491[1] = 1);
return statearr_48491;
});
var state_machine__5548__auto____1 = (function (state_48453){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48492){if((e48492 instanceof Object))
{var ex__5551__auto__ = e48492;var statearr_48493_48522 = state_48453;(statearr_48493_48522[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48523 = state_48453;
state_48453 = G__48523;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48453){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48494 = f__5563__auto__.call(null);(statearr_48494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48495);
return statearr_48494;
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
cljs.core.async.Pub = (function (){var obj48525 = {};return obj48525;
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
return (function (p1__48526_SHARP_){if(cljs.core.truth_(p1__48526_SHARP_.call(null,topic)))
{return p1__48526_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__48526_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t48651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48651 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta48652){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta48652 = meta48652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48651.cljs$lang$type = true;
cljs.core.async.t48651.cljs$lang$ctorStr = "cljs.core.async/t48651";
cljs.core.async.t48651.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48651");
});})(mults,ensure_mult))
;
cljs.core.async.t48651.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t48651.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t48651.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t48651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t48651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t48651.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t48651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48653){var self__ = this;
var _48653__$1 = this;return self__.meta48652;
});})(mults,ensure_mult))
;
cljs.core.async.t48651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48653,meta48652__$1){var self__ = this;
var _48653__$1 = this;return (new cljs.core.async.t48651(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta48652__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t48651 = ((function (mults,ensure_mult){
return (function __GT_t48651(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48652){return (new cljs.core.async.t48651(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48652));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t48651(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___48775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48727){var state_val_48728 = (state_48727[1]);if((state_val_48728 === 1))
{var state_48727__$1 = state_48727;var statearr_48729_48776 = state_48727__$1;(statearr_48729_48776[2] = null);
(statearr_48729_48776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 2))
{var state_48727__$1 = state_48727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48727__$1,4,ch);
} else
{if((state_val_48728 === 3))
{var inst_48725 = (state_48727[2]);var state_48727__$1 = state_48727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48727__$1,inst_48725);
} else
{if((state_val_48728 === 4))
{var inst_48656 = (state_48727[7]);var inst_48656__$1 = (state_48727[2]);var inst_48657 = (inst_48656__$1 == null);var state_48727__$1 = (function (){var statearr_48730 = state_48727;(statearr_48730[7] = inst_48656__$1);
return statearr_48730;
})();if(cljs.core.truth_(inst_48657))
{var statearr_48731_48777 = state_48727__$1;(statearr_48731_48777[1] = 5);
} else
{var statearr_48732_48778 = state_48727__$1;(statearr_48732_48778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 5))
{var inst_48663 = cljs.core.deref.call(null,mults);var inst_48664 = cljs.core.vals.call(null,inst_48663);var inst_48665 = cljs.core.seq.call(null,inst_48664);var inst_48666 = inst_48665;var inst_48667 = null;var inst_48668 = 0;var inst_48669 = 0;var state_48727__$1 = (function (){var statearr_48733 = state_48727;(statearr_48733[8] = inst_48669);
(statearr_48733[9] = inst_48668);
(statearr_48733[10] = inst_48667);
(statearr_48733[11] = inst_48666);
return statearr_48733;
})();var statearr_48734_48779 = state_48727__$1;(statearr_48734_48779[2] = null);
(statearr_48734_48779[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 6))
{var inst_48656 = (state_48727[7]);var inst_48706 = (state_48727[12]);var inst_48704 = (state_48727[13]);var inst_48704__$1 = topic_fn.call(null,inst_48656);var inst_48705 = cljs.core.deref.call(null,mults);var inst_48706__$1 = cljs.core.get.call(null,inst_48705,inst_48704__$1);var state_48727__$1 = (function (){var statearr_48735 = state_48727;(statearr_48735[12] = inst_48706__$1);
(statearr_48735[13] = inst_48704__$1);
return statearr_48735;
})();if(cljs.core.truth_(inst_48706__$1))
{var statearr_48736_48780 = state_48727__$1;(statearr_48736_48780[1] = 19);
} else
{var statearr_48737_48781 = state_48727__$1;(statearr_48737_48781[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 7))
{var inst_48723 = (state_48727[2]);var state_48727__$1 = state_48727;var statearr_48738_48782 = state_48727__$1;(statearr_48738_48782[2] = inst_48723);
(statearr_48738_48782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 8))
{var inst_48669 = (state_48727[8]);var inst_48668 = (state_48727[9]);var inst_48671 = (inst_48669 < inst_48668);var inst_48672 = inst_48671;var state_48727__$1 = state_48727;if(cljs.core.truth_(inst_48672))
{var statearr_48742_48783 = state_48727__$1;(statearr_48742_48783[1] = 10);
} else
{var statearr_48743_48784 = state_48727__$1;(statearr_48743_48784[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 9))
{var inst_48702 = (state_48727[2]);var state_48727__$1 = state_48727;var statearr_48744_48785 = state_48727__$1;(statearr_48744_48785[2] = inst_48702);
(statearr_48744_48785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 10))
{var inst_48669 = (state_48727[8]);var inst_48668 = (state_48727[9]);var inst_48667 = (state_48727[10]);var inst_48666 = (state_48727[11]);var inst_48674 = cljs.core._nth.call(null,inst_48667,inst_48669);var inst_48675 = cljs.core.async.muxch_STAR_.call(null,inst_48674);var inst_48676 = cljs.core.async.close_BANG_.call(null,inst_48675);var inst_48677 = (inst_48669 + 1);var tmp48739 = inst_48668;var tmp48740 = inst_48667;var tmp48741 = inst_48666;var inst_48666__$1 = tmp48741;var inst_48667__$1 = tmp48740;var inst_48668__$1 = tmp48739;var inst_48669__$1 = inst_48677;var state_48727__$1 = (function (){var statearr_48745 = state_48727;(statearr_48745[8] = inst_48669__$1);
(statearr_48745[14] = inst_48676);
(statearr_48745[9] = inst_48668__$1);
(statearr_48745[10] = inst_48667__$1);
(statearr_48745[11] = inst_48666__$1);
return statearr_48745;
})();var statearr_48746_48786 = state_48727__$1;(statearr_48746_48786[2] = null);
(statearr_48746_48786[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 11))
{var inst_48680 = (state_48727[15]);var inst_48666 = (state_48727[11]);var inst_48680__$1 = cljs.core.seq.call(null,inst_48666);var state_48727__$1 = (function (){var statearr_48747 = state_48727;(statearr_48747[15] = inst_48680__$1);
return statearr_48747;
})();if(inst_48680__$1)
{var statearr_48748_48787 = state_48727__$1;(statearr_48748_48787[1] = 13);
} else
{var statearr_48749_48788 = state_48727__$1;(statearr_48749_48788[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 12))
{var inst_48700 = (state_48727[2]);var state_48727__$1 = state_48727;var statearr_48750_48789 = state_48727__$1;(statearr_48750_48789[2] = inst_48700);
(statearr_48750_48789[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 13))
{var inst_48680 = (state_48727[15]);var inst_48682 = cljs.core.chunked_seq_QMARK_.call(null,inst_48680);var state_48727__$1 = state_48727;if(inst_48682)
{var statearr_48751_48790 = state_48727__$1;(statearr_48751_48790[1] = 16);
} else
{var statearr_48752_48791 = state_48727__$1;(statearr_48752_48791[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 14))
{var state_48727__$1 = state_48727;var statearr_48753_48792 = state_48727__$1;(statearr_48753_48792[2] = null);
(statearr_48753_48792[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 15))
{var inst_48698 = (state_48727[2]);var state_48727__$1 = state_48727;var statearr_48754_48793 = state_48727__$1;(statearr_48754_48793[2] = inst_48698);
(statearr_48754_48793[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 16))
{var inst_48680 = (state_48727[15]);var inst_48684 = cljs.core.chunk_first.call(null,inst_48680);var inst_48685 = cljs.core.chunk_rest.call(null,inst_48680);var inst_48686 = cljs.core.count.call(null,inst_48684);var inst_48666 = inst_48685;var inst_48667 = inst_48684;var inst_48668 = inst_48686;var inst_48669 = 0;var state_48727__$1 = (function (){var statearr_48755 = state_48727;(statearr_48755[8] = inst_48669);
(statearr_48755[9] = inst_48668);
(statearr_48755[10] = inst_48667);
(statearr_48755[11] = inst_48666);
return statearr_48755;
})();var statearr_48756_48794 = state_48727__$1;(statearr_48756_48794[2] = null);
(statearr_48756_48794[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 17))
{var inst_48680 = (state_48727[15]);var inst_48689 = cljs.core.first.call(null,inst_48680);var inst_48690 = cljs.core.async.muxch_STAR_.call(null,inst_48689);var inst_48691 = cljs.core.async.close_BANG_.call(null,inst_48690);var inst_48692 = cljs.core.next.call(null,inst_48680);var inst_48666 = inst_48692;var inst_48667 = null;var inst_48668 = 0;var inst_48669 = 0;var state_48727__$1 = (function (){var statearr_48757 = state_48727;(statearr_48757[16] = inst_48691);
(statearr_48757[8] = inst_48669);
(statearr_48757[9] = inst_48668);
(statearr_48757[10] = inst_48667);
(statearr_48757[11] = inst_48666);
return statearr_48757;
})();var statearr_48758_48795 = state_48727__$1;(statearr_48758_48795[2] = null);
(statearr_48758_48795[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 18))
{var inst_48695 = (state_48727[2]);var state_48727__$1 = state_48727;var statearr_48759_48796 = state_48727__$1;(statearr_48759_48796[2] = inst_48695);
(statearr_48759_48796[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 19))
{var state_48727__$1 = state_48727;var statearr_48760_48797 = state_48727__$1;(statearr_48760_48797[2] = null);
(statearr_48760_48797[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 20))
{var state_48727__$1 = state_48727;var statearr_48761_48798 = state_48727__$1;(statearr_48761_48798[2] = null);
(statearr_48761_48798[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 21))
{var inst_48720 = (state_48727[2]);var state_48727__$1 = (function (){var statearr_48762 = state_48727;(statearr_48762[17] = inst_48720);
return statearr_48762;
})();var statearr_48763_48799 = state_48727__$1;(statearr_48763_48799[2] = null);
(statearr_48763_48799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 22))
{var inst_48717 = (state_48727[2]);var state_48727__$1 = state_48727;var statearr_48764_48800 = state_48727__$1;(statearr_48764_48800[2] = inst_48717);
(statearr_48764_48800[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 23))
{var inst_48704 = (state_48727[13]);var inst_48708 = (state_48727[2]);var inst_48709 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48704);var state_48727__$1 = (function (){var statearr_48765 = state_48727;(statearr_48765[18] = inst_48708);
return statearr_48765;
})();var statearr_48766_48801 = state_48727__$1;(statearr_48766_48801[2] = inst_48709);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48727__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48728 === 24))
{var inst_48656 = (state_48727[7]);var inst_48706 = (state_48727[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48727,23,Object,null,22);var inst_48713 = cljs.core.async.muxch_STAR_.call(null,inst_48706);var state_48727__$1 = state_48727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48727__$1,25,inst_48713,inst_48656);
} else
{if((state_val_48728 === 25))
{var inst_48715 = (state_48727[2]);var state_48727__$1 = state_48727;var statearr_48767_48802 = state_48727__$1;(statearr_48767_48802[2] = inst_48715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48727__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_48771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48771[0] = state_machine__5548__auto__);
(statearr_48771[1] = 1);
return statearr_48771;
});
var state_machine__5548__auto____1 = (function (state_48727){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48727);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48772){if((e48772 instanceof Object))
{var ex__5551__auto__ = e48772;var statearr_48773_48803 = state_48727;(statearr_48773_48803[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48804 = state_48727;
state_48727 = G__48804;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48727){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48774 = f__5563__auto__.call(null);(statearr_48774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48775);
return statearr_48774;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___48941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48911){var state_val_48912 = (state_48911[1]);if((state_val_48912 === 1))
{var state_48911__$1 = state_48911;var statearr_48913_48942 = state_48911__$1;(statearr_48913_48942[2] = null);
(statearr_48913_48942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 2))
{var inst_48874 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_48875 = 0;var state_48911__$1 = (function (){var statearr_48914 = state_48911;(statearr_48914[7] = inst_48875);
(statearr_48914[8] = inst_48874);
return statearr_48914;
})();var statearr_48915_48943 = state_48911__$1;(statearr_48915_48943[2] = null);
(statearr_48915_48943[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 3))
{var inst_48909 = (state_48911[2]);var state_48911__$1 = state_48911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48911__$1,inst_48909);
} else
{if((state_val_48912 === 4))
{var inst_48875 = (state_48911[7]);var inst_48877 = (inst_48875 < cnt);var state_48911__$1 = state_48911;if(cljs.core.truth_(inst_48877))
{var statearr_48916_48944 = state_48911__$1;(statearr_48916_48944[1] = 6);
} else
{var statearr_48917_48945 = state_48911__$1;(statearr_48917_48945[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 5))
{var inst_48895 = (state_48911[2]);var state_48911__$1 = (function (){var statearr_48918 = state_48911;(statearr_48918[9] = inst_48895);
return statearr_48918;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48911__$1,12,dchan);
} else
{if((state_val_48912 === 6))
{var state_48911__$1 = state_48911;var statearr_48919_48946 = state_48911__$1;(statearr_48919_48946[2] = null);
(statearr_48919_48946[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 7))
{var state_48911__$1 = state_48911;var statearr_48920_48947 = state_48911__$1;(statearr_48920_48947[2] = null);
(statearr_48920_48947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 8))
{var inst_48893 = (state_48911[2]);var state_48911__$1 = state_48911;var statearr_48921_48948 = state_48911__$1;(statearr_48921_48948[2] = inst_48893);
(statearr_48921_48948[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 9))
{var inst_48875 = (state_48911[7]);var inst_48888 = (state_48911[2]);var inst_48889 = (inst_48875 + 1);var inst_48875__$1 = inst_48889;var state_48911__$1 = (function (){var statearr_48922 = state_48911;(statearr_48922[10] = inst_48888);
(statearr_48922[7] = inst_48875__$1);
return statearr_48922;
})();var statearr_48923_48949 = state_48911__$1;(statearr_48923_48949[2] = null);
(statearr_48923_48949[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 10))
{var inst_48879 = (state_48911[2]);var inst_48880 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_48911__$1 = (function (){var statearr_48924 = state_48911;(statearr_48924[11] = inst_48879);
return statearr_48924;
})();var statearr_48925_48950 = state_48911__$1;(statearr_48925_48950[2] = inst_48880);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 11))
{var inst_48875 = (state_48911[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48911,10,Object,null,9);var inst_48884 = chs__$1.call(null,inst_48875);var inst_48885 = done.call(null,inst_48875);var inst_48886 = cljs.core.async.take_BANG_.call(null,inst_48884,inst_48885);var state_48911__$1 = state_48911;var statearr_48926_48951 = state_48911__$1;(statearr_48926_48951[2] = inst_48886);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 12))
{var inst_48897 = (state_48911[12]);var inst_48897__$1 = (state_48911[2]);var inst_48898 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48897__$1);var state_48911__$1 = (function (){var statearr_48927 = state_48911;(statearr_48927[12] = inst_48897__$1);
return statearr_48927;
})();if(cljs.core.truth_(inst_48898))
{var statearr_48928_48952 = state_48911__$1;(statearr_48928_48952[1] = 13);
} else
{var statearr_48929_48953 = state_48911__$1;(statearr_48929_48953[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 13))
{var inst_48900 = cljs.core.async.close_BANG_.call(null,out);var state_48911__$1 = state_48911;var statearr_48930_48954 = state_48911__$1;(statearr_48930_48954[2] = inst_48900);
(statearr_48930_48954[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 14))
{var inst_48897 = (state_48911[12]);var inst_48902 = cljs.core.apply.call(null,f,inst_48897);var state_48911__$1 = state_48911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48911__$1,16,out,inst_48902);
} else
{if((state_val_48912 === 15))
{var inst_48907 = (state_48911[2]);var state_48911__$1 = state_48911;var statearr_48931_48955 = state_48911__$1;(statearr_48931_48955[2] = inst_48907);
(statearr_48931_48955[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48912 === 16))
{var inst_48904 = (state_48911[2]);var state_48911__$1 = (function (){var statearr_48932 = state_48911;(statearr_48932[13] = inst_48904);
return statearr_48932;
})();var statearr_48933_48956 = state_48911__$1;(statearr_48933_48956[2] = null);
(statearr_48933_48956[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_48937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48937[0] = state_machine__5548__auto__);
(statearr_48937[1] = 1);
return statearr_48937;
});
var state_machine__5548__auto____1 = (function (state_48911){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48938){if((e48938 instanceof Object))
{var ex__5551__auto__ = e48938;var statearr_48939_48957 = state_48911;(statearr_48939_48957[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48958 = state_48911;
state_48911 = G__48958;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48911){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48940 = f__5563__auto__.call(null);(statearr_48940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48941);
return statearr_48940;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49042){var state_val_49043 = (state_49042[1]);if((state_val_49043 === 1))
{var inst_49013 = cljs.core.vec.call(null,chs);var inst_49014 = inst_49013;var state_49042__$1 = (function (){var statearr_49044 = state_49042;(statearr_49044[7] = inst_49014);
return statearr_49044;
})();var statearr_49045_49067 = state_49042__$1;(statearr_49045_49067[2] = null);
(statearr_49045_49067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49043 === 2))
{var inst_49014 = (state_49042[7]);var inst_49016 = cljs.core.count.call(null,inst_49014);var inst_49017 = (inst_49016 > 0);var state_49042__$1 = state_49042;if(cljs.core.truth_(inst_49017))
{var statearr_49046_49068 = state_49042__$1;(statearr_49046_49068[1] = 4);
} else
{var statearr_49047_49069 = state_49042__$1;(statearr_49047_49069[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49043 === 3))
{var inst_49040 = (state_49042[2]);var state_49042__$1 = state_49042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49042__$1,inst_49040);
} else
{if((state_val_49043 === 4))
{var inst_49014 = (state_49042[7]);var state_49042__$1 = state_49042;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49042__$1,7,inst_49014);
} else
{if((state_val_49043 === 5))
{var inst_49036 = cljs.core.async.close_BANG_.call(null,out);var state_49042__$1 = state_49042;var statearr_49048_49070 = state_49042__$1;(statearr_49048_49070[2] = inst_49036);
(statearr_49048_49070[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49043 === 6))
{var inst_49038 = (state_49042[2]);var state_49042__$1 = state_49042;var statearr_49049_49071 = state_49042__$1;(statearr_49049_49071[2] = inst_49038);
(statearr_49049_49071[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49043 === 7))
{var inst_49021 = (state_49042[8]);var inst_49022 = (state_49042[9]);var inst_49021__$1 = (state_49042[2]);var inst_49022__$1 = cljs.core.nth.call(null,inst_49021__$1,0,null);var inst_49023 = cljs.core.nth.call(null,inst_49021__$1,1,null);var inst_49024 = (inst_49022__$1 == null);var state_49042__$1 = (function (){var statearr_49050 = state_49042;(statearr_49050[8] = inst_49021__$1);
(statearr_49050[10] = inst_49023);
(statearr_49050[9] = inst_49022__$1);
return statearr_49050;
})();if(cljs.core.truth_(inst_49024))
{var statearr_49051_49072 = state_49042__$1;(statearr_49051_49072[1] = 8);
} else
{var statearr_49052_49073 = state_49042__$1;(statearr_49052_49073[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49043 === 8))
{var inst_49014 = (state_49042[7]);var inst_49021 = (state_49042[8]);var inst_49023 = (state_49042[10]);var inst_49022 = (state_49042[9]);var inst_49026 = (function (){var c = inst_49023;var v = inst_49022;var vec__49019 = inst_49021;var cs = inst_49014;return ((function (c,v,vec__49019,cs,inst_49014,inst_49021,inst_49023,inst_49022,state_val_49043){
return (function (p1__48959_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__48959_SHARP_);
});
;})(c,v,vec__49019,cs,inst_49014,inst_49021,inst_49023,inst_49022,state_val_49043))
})();var inst_49027 = cljs.core.filterv.call(null,inst_49026,inst_49014);var inst_49014__$1 = inst_49027;var state_49042__$1 = (function (){var statearr_49053 = state_49042;(statearr_49053[7] = inst_49014__$1);
return statearr_49053;
})();var statearr_49054_49074 = state_49042__$1;(statearr_49054_49074[2] = null);
(statearr_49054_49074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49043 === 9))
{var inst_49022 = (state_49042[9]);var state_49042__$1 = state_49042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49042__$1,11,out,inst_49022);
} else
{if((state_val_49043 === 10))
{var inst_49034 = (state_49042[2]);var state_49042__$1 = state_49042;var statearr_49056_49075 = state_49042__$1;(statearr_49056_49075[2] = inst_49034);
(statearr_49056_49075[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49043 === 11))
{var inst_49014 = (state_49042[7]);var inst_49031 = (state_49042[2]);var tmp49055 = inst_49014;var inst_49014__$1 = tmp49055;var state_49042__$1 = (function (){var statearr_49057 = state_49042;(statearr_49057[7] = inst_49014__$1);
(statearr_49057[11] = inst_49031);
return statearr_49057;
})();var statearr_49058_49076 = state_49042__$1;(statearr_49058_49076[2] = null);
(statearr_49058_49076[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49062 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49062[0] = state_machine__5548__auto__);
(statearr_49062[1] = 1);
return statearr_49062;
});
var state_machine__5548__auto____1 = (function (state_49042){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49063){if((e49063 instanceof Object))
{var ex__5551__auto__ = e49063;var statearr_49064_49077 = state_49042;(statearr_49064_49077[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49078 = state_49042;
state_49042 = G__49078;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49042){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49065 = f__5563__auto__.call(null);(statearr_49065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49066);
return statearr_49065;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49148){var state_val_49149 = (state_49148[1]);if((state_val_49149 === 1))
{var inst_49125 = 0;var state_49148__$1 = (function (){var statearr_49150 = state_49148;(statearr_49150[7] = inst_49125);
return statearr_49150;
})();var statearr_49151_49172 = state_49148__$1;(statearr_49151_49172[2] = null);
(statearr_49151_49172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49149 === 2))
{var inst_49125 = (state_49148[7]);var inst_49127 = (inst_49125 < n);var state_49148__$1 = state_49148;if(cljs.core.truth_(inst_49127))
{var statearr_49152_49173 = state_49148__$1;(statearr_49152_49173[1] = 4);
} else
{var statearr_49153_49174 = state_49148__$1;(statearr_49153_49174[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49149 === 3))
{var inst_49145 = (state_49148[2]);var inst_49146 = cljs.core.async.close_BANG_.call(null,out);var state_49148__$1 = (function (){var statearr_49154 = state_49148;(statearr_49154[8] = inst_49145);
return statearr_49154;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49148__$1,inst_49146);
} else
{if((state_val_49149 === 4))
{var state_49148__$1 = state_49148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49148__$1,7,ch);
} else
{if((state_val_49149 === 5))
{var state_49148__$1 = state_49148;var statearr_49155_49175 = state_49148__$1;(statearr_49155_49175[2] = null);
(statearr_49155_49175[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49149 === 6))
{var inst_49143 = (state_49148[2]);var state_49148__$1 = state_49148;var statearr_49156_49176 = state_49148__$1;(statearr_49156_49176[2] = inst_49143);
(statearr_49156_49176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49149 === 7))
{var inst_49130 = (state_49148[9]);var inst_49130__$1 = (state_49148[2]);var inst_49131 = (inst_49130__$1 == null);var inst_49132 = cljs.core.not.call(null,inst_49131);var state_49148__$1 = (function (){var statearr_49157 = state_49148;(statearr_49157[9] = inst_49130__$1);
return statearr_49157;
})();if(inst_49132)
{var statearr_49158_49177 = state_49148__$1;(statearr_49158_49177[1] = 8);
} else
{var statearr_49159_49178 = state_49148__$1;(statearr_49159_49178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49149 === 8))
{var inst_49130 = (state_49148[9]);var state_49148__$1 = state_49148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49148__$1,11,out,inst_49130);
} else
{if((state_val_49149 === 9))
{var state_49148__$1 = state_49148;var statearr_49160_49179 = state_49148__$1;(statearr_49160_49179[2] = null);
(statearr_49160_49179[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49149 === 10))
{var inst_49140 = (state_49148[2]);var state_49148__$1 = state_49148;var statearr_49161_49180 = state_49148__$1;(statearr_49161_49180[2] = inst_49140);
(statearr_49161_49180[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49149 === 11))
{var inst_49125 = (state_49148[7]);var inst_49135 = (state_49148[2]);var inst_49136 = (inst_49125 + 1);var inst_49125__$1 = inst_49136;var state_49148__$1 = (function (){var statearr_49162 = state_49148;(statearr_49162[10] = inst_49135);
(statearr_49162[7] = inst_49125__$1);
return statearr_49162;
})();var statearr_49163_49181 = state_49148__$1;(statearr_49163_49181[2] = null);
(statearr_49163_49181[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49167 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49167[0] = state_machine__5548__auto__);
(statearr_49167[1] = 1);
return statearr_49167;
});
var state_machine__5548__auto____1 = (function (state_49148){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49168){if((e49168 instanceof Object))
{var ex__5551__auto__ = e49168;var statearr_49169_49182 = state_49148;(statearr_49169_49182[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49183 = state_49148;
state_49148 = G__49183;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49148){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49170 = f__5563__auto__.call(null);(statearr_49170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49171);
return statearr_49170;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49255){var state_val_49256 = (state_49255[1]);if((state_val_49256 === 1))
{var inst_49232 = null;var state_49255__$1 = (function (){var statearr_49257 = state_49255;(statearr_49257[7] = inst_49232);
return statearr_49257;
})();var statearr_49258_49281 = state_49255__$1;(statearr_49258_49281[2] = null);
(statearr_49258_49281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49256 === 2))
{var state_49255__$1 = state_49255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49255__$1,4,ch);
} else
{if((state_val_49256 === 3))
{var inst_49252 = (state_49255[2]);var inst_49253 = cljs.core.async.close_BANG_.call(null,out);var state_49255__$1 = (function (){var statearr_49259 = state_49255;(statearr_49259[8] = inst_49252);
return statearr_49259;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49255__$1,inst_49253);
} else
{if((state_val_49256 === 4))
{var inst_49235 = (state_49255[9]);var inst_49235__$1 = (state_49255[2]);var inst_49236 = (inst_49235__$1 == null);var inst_49237 = cljs.core.not.call(null,inst_49236);var state_49255__$1 = (function (){var statearr_49260 = state_49255;(statearr_49260[9] = inst_49235__$1);
return statearr_49260;
})();if(inst_49237)
{var statearr_49261_49282 = state_49255__$1;(statearr_49261_49282[1] = 5);
} else
{var statearr_49262_49283 = state_49255__$1;(statearr_49262_49283[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49256 === 5))
{var inst_49235 = (state_49255[9]);var inst_49232 = (state_49255[7]);var inst_49239 = cljs.core._EQ_.call(null,inst_49235,inst_49232);var state_49255__$1 = state_49255;if(inst_49239)
{var statearr_49263_49284 = state_49255__$1;(statearr_49263_49284[1] = 8);
} else
{var statearr_49264_49285 = state_49255__$1;(statearr_49264_49285[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49256 === 6))
{var state_49255__$1 = state_49255;var statearr_49266_49286 = state_49255__$1;(statearr_49266_49286[2] = null);
(statearr_49266_49286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49256 === 7))
{var inst_49250 = (state_49255[2]);var state_49255__$1 = state_49255;var statearr_49267_49287 = state_49255__$1;(statearr_49267_49287[2] = inst_49250);
(statearr_49267_49287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49256 === 8))
{var inst_49232 = (state_49255[7]);var tmp49265 = inst_49232;var inst_49232__$1 = tmp49265;var state_49255__$1 = (function (){var statearr_49268 = state_49255;(statearr_49268[7] = inst_49232__$1);
return statearr_49268;
})();var statearr_49269_49288 = state_49255__$1;(statearr_49269_49288[2] = null);
(statearr_49269_49288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49256 === 9))
{var inst_49235 = (state_49255[9]);var state_49255__$1 = state_49255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49255__$1,11,out,inst_49235);
} else
{if((state_val_49256 === 10))
{var inst_49247 = (state_49255[2]);var state_49255__$1 = state_49255;var statearr_49270_49289 = state_49255__$1;(statearr_49270_49289[2] = inst_49247);
(statearr_49270_49289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49256 === 11))
{var inst_49235 = (state_49255[9]);var inst_49244 = (state_49255[2]);var inst_49232 = inst_49235;var state_49255__$1 = (function (){var statearr_49271 = state_49255;(statearr_49271[7] = inst_49232);
(statearr_49271[10] = inst_49244);
return statearr_49271;
})();var statearr_49272_49290 = state_49255__$1;(statearr_49272_49290[2] = null);
(statearr_49272_49290[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49276 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49276[0] = state_machine__5548__auto__);
(statearr_49276[1] = 1);
return statearr_49276;
});
var state_machine__5548__auto____1 = (function (state_49255){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49277){if((e49277 instanceof Object))
{var ex__5551__auto__ = e49277;var statearr_49278_49291 = state_49255;(statearr_49278_49291[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49292 = state_49255;
state_49255 = G__49292;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49255){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49279 = f__5563__auto__.call(null);(statearr_49279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49280);
return statearr_49279;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49397){var state_val_49398 = (state_49397[1]);if((state_val_49398 === 1))
{var inst_49360 = (new Array(n));var inst_49361 = inst_49360;var inst_49362 = 0;var state_49397__$1 = (function (){var statearr_49399 = state_49397;(statearr_49399[7] = inst_49362);
(statearr_49399[8] = inst_49361);
return statearr_49399;
})();var statearr_49400_49428 = state_49397__$1;(statearr_49400_49428[2] = null);
(statearr_49400_49428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 2))
{var state_49397__$1 = state_49397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49397__$1,4,ch);
} else
{if((state_val_49398 === 3))
{var inst_49395 = (state_49397[2]);var state_49397__$1 = state_49397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49397__$1,inst_49395);
} else
{if((state_val_49398 === 4))
{var inst_49365 = (state_49397[9]);var inst_49365__$1 = (state_49397[2]);var inst_49366 = (inst_49365__$1 == null);var inst_49367 = cljs.core.not.call(null,inst_49366);var state_49397__$1 = (function (){var statearr_49401 = state_49397;(statearr_49401[9] = inst_49365__$1);
return statearr_49401;
})();if(inst_49367)
{var statearr_49402_49429 = state_49397__$1;(statearr_49402_49429[1] = 5);
} else
{var statearr_49403_49430 = state_49397__$1;(statearr_49403_49430[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 5))
{var inst_49365 = (state_49397[9]);var inst_49370 = (state_49397[10]);var inst_49362 = (state_49397[7]);var inst_49361 = (state_49397[8]);var inst_49369 = (inst_49361[inst_49362] = inst_49365);var inst_49370__$1 = (inst_49362 + 1);var inst_49371 = (inst_49370__$1 < n);var state_49397__$1 = (function (){var statearr_49404 = state_49397;(statearr_49404[11] = inst_49369);
(statearr_49404[10] = inst_49370__$1);
return statearr_49404;
})();if(cljs.core.truth_(inst_49371))
{var statearr_49405_49431 = state_49397__$1;(statearr_49405_49431[1] = 8);
} else
{var statearr_49406_49432 = state_49397__$1;(statearr_49406_49432[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 6))
{var inst_49362 = (state_49397[7]);var inst_49383 = (inst_49362 > 0);var state_49397__$1 = state_49397;if(cljs.core.truth_(inst_49383))
{var statearr_49408_49433 = state_49397__$1;(statearr_49408_49433[1] = 12);
} else
{var statearr_49409_49434 = state_49397__$1;(statearr_49409_49434[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 7))
{var inst_49393 = (state_49397[2]);var state_49397__$1 = state_49397;var statearr_49410_49435 = state_49397__$1;(statearr_49410_49435[2] = inst_49393);
(statearr_49410_49435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 8))
{var inst_49370 = (state_49397[10]);var inst_49361 = (state_49397[8]);var tmp49407 = inst_49361;var inst_49361__$1 = tmp49407;var inst_49362 = inst_49370;var state_49397__$1 = (function (){var statearr_49411 = state_49397;(statearr_49411[7] = inst_49362);
(statearr_49411[8] = inst_49361__$1);
return statearr_49411;
})();var statearr_49412_49436 = state_49397__$1;(statearr_49412_49436[2] = null);
(statearr_49412_49436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 9))
{var inst_49361 = (state_49397[8]);var inst_49375 = cljs.core.vec.call(null,inst_49361);var state_49397__$1 = state_49397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49397__$1,11,out,inst_49375);
} else
{if((state_val_49398 === 10))
{var inst_49381 = (state_49397[2]);var state_49397__$1 = state_49397;var statearr_49413_49437 = state_49397__$1;(statearr_49413_49437[2] = inst_49381);
(statearr_49413_49437[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 11))
{var inst_49377 = (state_49397[2]);var inst_49378 = (new Array(n));var inst_49361 = inst_49378;var inst_49362 = 0;var state_49397__$1 = (function (){var statearr_49414 = state_49397;(statearr_49414[12] = inst_49377);
(statearr_49414[7] = inst_49362);
(statearr_49414[8] = inst_49361);
return statearr_49414;
})();var statearr_49415_49438 = state_49397__$1;(statearr_49415_49438[2] = null);
(statearr_49415_49438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 12))
{var inst_49361 = (state_49397[8]);var inst_49385 = cljs.core.vec.call(null,inst_49361);var state_49397__$1 = state_49397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49397__$1,15,out,inst_49385);
} else
{if((state_val_49398 === 13))
{var state_49397__$1 = state_49397;var statearr_49416_49439 = state_49397__$1;(statearr_49416_49439[2] = null);
(statearr_49416_49439[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 14))
{var inst_49390 = (state_49397[2]);var inst_49391 = cljs.core.async.close_BANG_.call(null,out);var state_49397__$1 = (function (){var statearr_49417 = state_49397;(statearr_49417[13] = inst_49390);
return statearr_49417;
})();var statearr_49418_49440 = state_49397__$1;(statearr_49418_49440[2] = inst_49391);
(statearr_49418_49440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49398 === 15))
{var inst_49387 = (state_49397[2]);var state_49397__$1 = state_49397;var statearr_49419_49441 = state_49397__$1;(statearr_49419_49441[2] = inst_49387);
(statearr_49419_49441[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_49423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49423[0] = state_machine__5548__auto__);
(statearr_49423[1] = 1);
return statearr_49423;
});
var state_machine__5548__auto____1 = (function (state_49397){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49397);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49424){if((e49424 instanceof Object))
{var ex__5551__auto__ = e49424;var statearr_49425_49442 = state_49397;(statearr_49425_49442[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49443 = state_49397;
state_49397 = G__49443;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49397){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49426 = f__5563__auto__.call(null);(statearr_49426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49427);
return statearr_49426;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49556){var state_val_49557 = (state_49556[1]);if((state_val_49557 === 1))
{var inst_49515 = [];var inst_49516 = inst_49515;var inst_49517 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_49556__$1 = (function (){var statearr_49558 = state_49556;(statearr_49558[7] = inst_49516);
(statearr_49558[8] = inst_49517);
return statearr_49558;
})();var statearr_49559_49587 = state_49556__$1;(statearr_49559_49587[2] = null);
(statearr_49559_49587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 2))
{var state_49556__$1 = state_49556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49556__$1,4,ch);
} else
{if((state_val_49557 === 3))
{var inst_49554 = (state_49556[2]);var state_49556__$1 = state_49556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49556__$1,inst_49554);
} else
{if((state_val_49557 === 4))
{var inst_49520 = (state_49556[9]);var inst_49520__$1 = (state_49556[2]);var inst_49521 = (inst_49520__$1 == null);var inst_49522 = cljs.core.not.call(null,inst_49521);var state_49556__$1 = (function (){var statearr_49560 = state_49556;(statearr_49560[9] = inst_49520__$1);
return statearr_49560;
})();if(inst_49522)
{var statearr_49561_49588 = state_49556__$1;(statearr_49561_49588[1] = 5);
} else
{var statearr_49562_49589 = state_49556__$1;(statearr_49562_49589[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 5))
{var inst_49517 = (state_49556[8]);var inst_49524 = (state_49556[10]);var inst_49520 = (state_49556[9]);var inst_49524__$1 = f.call(null,inst_49520);var inst_49525 = cljs.core._EQ_.call(null,inst_49524__$1,inst_49517);var inst_49526 = cljs.core.keyword_identical_QMARK_.call(null,inst_49517,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_49527 = (inst_49525) || (inst_49526);var state_49556__$1 = (function (){var statearr_49563 = state_49556;(statearr_49563[10] = inst_49524__$1);
return statearr_49563;
})();if(cljs.core.truth_(inst_49527))
{var statearr_49564_49590 = state_49556__$1;(statearr_49564_49590[1] = 8);
} else
{var statearr_49565_49591 = state_49556__$1;(statearr_49565_49591[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 6))
{var inst_49516 = (state_49556[7]);var inst_49541 = inst_49516.length;var inst_49542 = (inst_49541 > 0);var state_49556__$1 = state_49556;if(cljs.core.truth_(inst_49542))
{var statearr_49567_49592 = state_49556__$1;(statearr_49567_49592[1] = 12);
} else
{var statearr_49568_49593 = state_49556__$1;(statearr_49568_49593[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 7))
{var inst_49552 = (state_49556[2]);var state_49556__$1 = state_49556;var statearr_49569_49594 = state_49556__$1;(statearr_49569_49594[2] = inst_49552);
(statearr_49569_49594[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 8))
{var inst_49516 = (state_49556[7]);var inst_49524 = (state_49556[10]);var inst_49520 = (state_49556[9]);var inst_49529 = inst_49516.push(inst_49520);var tmp49566 = inst_49516;var inst_49516__$1 = tmp49566;var inst_49517 = inst_49524;var state_49556__$1 = (function (){var statearr_49570 = state_49556;(statearr_49570[11] = inst_49529);
(statearr_49570[7] = inst_49516__$1);
(statearr_49570[8] = inst_49517);
return statearr_49570;
})();var statearr_49571_49595 = state_49556__$1;(statearr_49571_49595[2] = null);
(statearr_49571_49595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 9))
{var inst_49516 = (state_49556[7]);var inst_49532 = cljs.core.vec.call(null,inst_49516);var state_49556__$1 = state_49556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49556__$1,11,out,inst_49532);
} else
{if((state_val_49557 === 10))
{var inst_49539 = (state_49556[2]);var state_49556__$1 = state_49556;var statearr_49572_49596 = state_49556__$1;(statearr_49572_49596[2] = inst_49539);
(statearr_49572_49596[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 11))
{var inst_49524 = (state_49556[10]);var inst_49520 = (state_49556[9]);var inst_49534 = (state_49556[2]);var inst_49535 = [];var inst_49536 = inst_49535.push(inst_49520);var inst_49516 = inst_49535;var inst_49517 = inst_49524;var state_49556__$1 = (function (){var statearr_49573 = state_49556;(statearr_49573[12] = inst_49536);
(statearr_49573[13] = inst_49534);
(statearr_49573[7] = inst_49516);
(statearr_49573[8] = inst_49517);
return statearr_49573;
})();var statearr_49574_49597 = state_49556__$1;(statearr_49574_49597[2] = null);
(statearr_49574_49597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 12))
{var inst_49516 = (state_49556[7]);var inst_49544 = cljs.core.vec.call(null,inst_49516);var state_49556__$1 = state_49556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49556__$1,15,out,inst_49544);
} else
{if((state_val_49557 === 13))
{var state_49556__$1 = state_49556;var statearr_49575_49598 = state_49556__$1;(statearr_49575_49598[2] = null);
(statearr_49575_49598[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 14))
{var inst_49549 = (state_49556[2]);var inst_49550 = cljs.core.async.close_BANG_.call(null,out);var state_49556__$1 = (function (){var statearr_49576 = state_49556;(statearr_49576[14] = inst_49549);
return statearr_49576;
})();var statearr_49577_49599 = state_49556__$1;(statearr_49577_49599[2] = inst_49550);
(statearr_49577_49599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49557 === 15))
{var inst_49546 = (state_49556[2]);var state_49556__$1 = state_49556;var statearr_49578_49600 = state_49556__$1;(statearr_49578_49600[2] = inst_49546);
(statearr_49578_49600[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_49582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49582[0] = state_machine__5548__auto__);
(statearr_49582[1] = 1);
return statearr_49582;
});
var state_machine__5548__auto____1 = (function (state_49556){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49556);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49583){if((e49583 instanceof Object))
{var ex__5551__auto__ = e49583;var statearr_49584_49601 = state_49556;(statearr_49584_49601[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49602 = state_49556;
state_49556 = G__49602;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49556){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49585 = f__5563__auto__.call(null);(statearr_49585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49586);
return statearr_49585;
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
