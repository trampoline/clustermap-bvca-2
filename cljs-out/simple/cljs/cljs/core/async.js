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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14049 = (function (f,fn_handler,meta14050){
this.f = f;
this.fn_handler = fn_handler;
this.meta14050 = meta14050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14049.cljs$lang$type = true;
cljs.core.async.t14049.cljs$lang$ctorStr = "cljs.core.async/t14049";
cljs.core.async.t14049.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14049");
});
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14051){var self__ = this;
var _14051__$1 = this;return self__.meta14050;
});
cljs.core.async.t14049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14051,meta14050__$1){var self__ = this;
var _14051__$1 = this;return (new cljs.core.async.t14049(self__.f,self__.fn_handler,meta14050__$1));
});
cljs.core.async.__GT_t14049 = (function __GT_t14049(f__$1,fn_handler__$1,meta14050){return (new cljs.core.async.t14049(f__$1,fn_handler__$1,meta14050));
});
}
return (new cljs.core.async.t14049(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14053 = buff;if(G__14053)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__14053.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14053.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14053);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14053);
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
{var val_14054 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14054);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14054);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___14055 = n;var x_14056 = 0;while(true){
if((x_14056 < n__4289__auto___14055))
{(a[x_14056] = 0);
{
var G__14057 = (x_14056 + 1);
x_14056 = G__14057;
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
var G__14058 = (i + 1);
i = G__14058;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14062 = (function (flag,alt_flag,meta14063){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14063 = meta14063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14062.cljs$lang$type = true;
cljs.core.async.t14062.cljs$lang$ctorStr = "cljs.core.async/t14062";
cljs.core.async.t14062.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14062");
});
cljs.core.async.t14062.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14064){var self__ = this;
var _14064__$1 = this;return self__.meta14063;
});
cljs.core.async.t14062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14064,meta14063__$1){var self__ = this;
var _14064__$1 = this;return (new cljs.core.async.t14062(self__.flag,self__.alt_flag,meta14063__$1));
});
cljs.core.async.__GT_t14062 = (function __GT_t14062(flag__$1,alt_flag__$1,meta14063){return (new cljs.core.async.t14062(flag__$1,alt_flag__$1,meta14063));
});
}
return (new cljs.core.async.t14062(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14068 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14068 = (function (cb,flag,alt_handler,meta14069){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14069 = meta14069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14068.cljs$lang$type = true;
cljs.core.async.t14068.cljs$lang$ctorStr = "cljs.core.async/t14068";
cljs.core.async.t14068.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14068");
});
cljs.core.async.t14068.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14070){var self__ = this;
var _14070__$1 = this;return self__.meta14069;
});
cljs.core.async.t14068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14070,meta14069__$1){var self__ = this;
var _14070__$1 = this;return (new cljs.core.async.t14068(self__.cb,self__.flag,self__.alt_handler,meta14069__$1));
});
cljs.core.async.__GT_t14068 = (function __GT_t14068(cb__$1,flag__$1,alt_handler__$1,meta14069){return (new cljs.core.async.t14068(cb__$1,flag__$1,alt_handler__$1,meta14069));
});
}
return (new cljs.core.async.t14068(cb,flag,alt_handler,null));
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
return (function (p1__14071_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14071_SHARP_,port], null));
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
var G__14072 = (i + 1);
i = G__14072;
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
var alts_BANG___delegate = function (ports,p__14073){var map__14075 = p__14073;var map__14075__$1 = ((cljs.core.seq_QMARK_.call(null,map__14075))?cljs.core.apply.call(null,cljs.core.hash_map,map__14075):map__14075);var opts = map__14075__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14073 = null;if (arguments.length > 1) {
  p__14073 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14073);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14076){
var ports = cljs.core.first(arglist__14076);
var p__14073 = cljs.core.rest(arglist__14076);
return alts_BANG___delegate(ports,p__14073);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14084 = (function (ch,f,map_LT_,meta14085){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14085 = meta14085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14084.cljs$lang$type = true;
cljs.core.async.t14084.cljs$lang$ctorStr = "cljs.core.async/t14084";
cljs.core.async.t14084.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14084");
});
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14087 = (function (fn1,_,meta14085,ch,f,map_LT_,meta14088){
this.fn1 = fn1;
this._ = _;
this.meta14085 = meta14085;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14088 = meta14088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14087.cljs$lang$type = true;
cljs.core.async.t14087.cljs$lang$ctorStr = "cljs.core.async/t14087";
cljs.core.async.t14087.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14087");
});
cljs.core.async.t14087.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14087.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14077_SHARP_){return f1.call(null,(((p1__14077_SHARP_ == null))?null:self__.f.call(null,p1__14077_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14089){var self__ = this;
var _14089__$1 = this;return self__.meta14088;
});
cljs.core.async.t14087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14089,meta14088__$1){var self__ = this;
var _14089__$1 = this;return (new cljs.core.async.t14087(self__.fn1,self__._,self__.meta14085,self__.ch,self__.f,self__.map_LT_,meta14088__$1));
});
cljs.core.async.__GT_t14087 = (function __GT_t14087(fn1__$1,___$2,meta14085__$1,ch__$2,f__$2,map_LT___$2,meta14088){return (new cljs.core.async.t14087(fn1__$1,___$2,meta14085__$1,ch__$2,f__$2,map_LT___$2,meta14088));
});
}
return (new cljs.core.async.t14087(fn1,___$1,self__.meta14085,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14086){var self__ = this;
var _14086__$1 = this;return self__.meta14085;
});
cljs.core.async.t14084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14086,meta14085__$1){var self__ = this;
var _14086__$1 = this;return (new cljs.core.async.t14084(self__.ch,self__.f,self__.map_LT_,meta14085__$1));
});
cljs.core.async.__GT_t14084 = (function __GT_t14084(ch__$1,f__$1,map_LT___$1,meta14085){return (new cljs.core.async.t14084(ch__$1,f__$1,map_LT___$1,meta14085));
});
}
return (new cljs.core.async.t14084(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14093 = (function (ch,f,map_GT_,meta14094){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14094 = meta14094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14093.cljs$lang$type = true;
cljs.core.async.t14093.cljs$lang$ctorStr = "cljs.core.async/t14093";
cljs.core.async.t14093.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14093");
});
cljs.core.async.t14093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14093.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14095){var self__ = this;
var _14095__$1 = this;return self__.meta14094;
});
cljs.core.async.t14093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14095,meta14094__$1){var self__ = this;
var _14095__$1 = this;return (new cljs.core.async.t14093(self__.ch,self__.f,self__.map_GT_,meta14094__$1));
});
cljs.core.async.__GT_t14093 = (function __GT_t14093(ch__$1,f__$1,map_GT___$1,meta14094){return (new cljs.core.async.t14093(ch__$1,f__$1,map_GT___$1,meta14094));
});
}
return (new cljs.core.async.t14093(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14099 = (function (ch,p,filter_GT_,meta14100){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14100 = meta14100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14099.cljs$lang$type = true;
cljs.core.async.t14099.cljs$lang$ctorStr = "cljs.core.async/t14099";
cljs.core.async.t14099.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14099");
});
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14101){var self__ = this;
var _14101__$1 = this;return self__.meta14100;
});
cljs.core.async.t14099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14101,meta14100__$1){var self__ = this;
var _14101__$1 = this;return (new cljs.core.async.t14099(self__.ch,self__.p,self__.filter_GT_,meta14100__$1));
});
cljs.core.async.__GT_t14099 = (function __GT_t14099(ch__$1,p__$1,filter_GT___$1,meta14100){return (new cljs.core.async.t14099(ch__$1,p__$1,filter_GT___$1,meta14100));
});
}
return (new cljs.core.async.t14099(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14184 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14163){var state_val_14164 = (state_14163[1]);if((state_val_14164 === 1))
{var state_14163__$1 = state_14163;var statearr_14165_14185 = state_14163__$1;(statearr_14165_14185[2] = null);
(statearr_14165_14185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 2))
{var state_14163__$1 = state_14163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14163__$1,4,ch);
} else
{if((state_val_14164 === 3))
{var inst_14161 = (state_14163[2]);var state_14163__$1 = state_14163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14163__$1,inst_14161);
} else
{if((state_val_14164 === 4))
{var inst_14145 = (state_14163[7]);var inst_14145__$1 = (state_14163[2]);var inst_14146 = (inst_14145__$1 == null);var state_14163__$1 = (function (){var statearr_14166 = state_14163;(statearr_14166[7] = inst_14145__$1);
return statearr_14166;
})();if(cljs.core.truth_(inst_14146))
{var statearr_14167_14186 = state_14163__$1;(statearr_14167_14186[1] = 5);
} else
{var statearr_14168_14187 = state_14163__$1;(statearr_14168_14187[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 5))
{var inst_14148 = cljs.core.async.close_BANG_.call(null,out);var state_14163__$1 = state_14163;var statearr_14169_14188 = state_14163__$1;(statearr_14169_14188[2] = inst_14148);
(statearr_14169_14188[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 6))
{var inst_14145 = (state_14163[7]);var inst_14150 = p.call(null,inst_14145);var state_14163__$1 = state_14163;if(cljs.core.truth_(inst_14150))
{var statearr_14170_14189 = state_14163__$1;(statearr_14170_14189[1] = 8);
} else
{var statearr_14171_14190 = state_14163__$1;(statearr_14171_14190[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 7))
{var inst_14159 = (state_14163[2]);var state_14163__$1 = state_14163;var statearr_14172_14191 = state_14163__$1;(statearr_14172_14191[2] = inst_14159);
(statearr_14172_14191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 8))
{var inst_14145 = (state_14163[7]);var state_14163__$1 = state_14163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14163__$1,11,out,inst_14145);
} else
{if((state_val_14164 === 9))
{var state_14163__$1 = state_14163;var statearr_14173_14192 = state_14163__$1;(statearr_14173_14192[2] = null);
(statearr_14173_14192[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 10))
{var inst_14156 = (state_14163[2]);var state_14163__$1 = (function (){var statearr_14174 = state_14163;(statearr_14174[8] = inst_14156);
return statearr_14174;
})();var statearr_14175_14193 = state_14163__$1;(statearr_14175_14193[2] = null);
(statearr_14175_14193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 11))
{var inst_14153 = (state_14163[2]);var state_14163__$1 = state_14163;var statearr_14176_14194 = state_14163__$1;(statearr_14176_14194[2] = inst_14153);
(statearr_14176_14194[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_14180 = [null,null,null,null,null,null,null,null,null];(statearr_14180[0] = state_machine__5548__auto__);
(statearr_14180[1] = 1);
return statearr_14180;
});
var state_machine__5548__auto____1 = (function (state_14163){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14163);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14181){if((e14181 instanceof Object))
{var ex__5551__auto__ = e14181;var statearr_14182_14195 = state_14163;(statearr_14182_14195[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14196 = state_14163;
state_14163 = G__14196;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14163){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14183 = f__5563__auto__.call(null);(statearr_14183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14184);
return statearr_14183;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14348){var state_val_14349 = (state_14348[1]);if((state_val_14349 === 1))
{var state_14348__$1 = state_14348;var statearr_14350_14387 = state_14348__$1;(statearr_14350_14387[2] = null);
(statearr_14350_14387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 2))
{var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14348__$1,4,in$);
} else
{if((state_val_14349 === 3))
{var inst_14346 = (state_14348[2]);var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14348__$1,inst_14346);
} else
{if((state_val_14349 === 4))
{var inst_14294 = (state_14348[7]);var inst_14294__$1 = (state_14348[2]);var inst_14295 = (inst_14294__$1 == null);var state_14348__$1 = (function (){var statearr_14351 = state_14348;(statearr_14351[7] = inst_14294__$1);
return statearr_14351;
})();if(cljs.core.truth_(inst_14295))
{var statearr_14352_14388 = state_14348__$1;(statearr_14352_14388[1] = 5);
} else
{var statearr_14353_14389 = state_14348__$1;(statearr_14353_14389[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 5))
{var inst_14297 = cljs.core.async.close_BANG_.call(null,out);var state_14348__$1 = state_14348;var statearr_14354_14390 = state_14348__$1;(statearr_14354_14390[2] = inst_14297);
(statearr_14354_14390[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 6))
{var inst_14294 = (state_14348[7]);var inst_14299 = f.call(null,inst_14294);var inst_14304 = cljs.core.seq.call(null,inst_14299);var inst_14305 = inst_14304;var inst_14306 = null;var inst_14307 = 0;var inst_14308 = 0;var state_14348__$1 = (function (){var statearr_14355 = state_14348;(statearr_14355[8] = inst_14305);
(statearr_14355[9] = inst_14306);
(statearr_14355[10] = inst_14307);
(statearr_14355[11] = inst_14308);
return statearr_14355;
})();var statearr_14356_14391 = state_14348__$1;(statearr_14356_14391[2] = null);
(statearr_14356_14391[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 7))
{var inst_14344 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14357_14392 = state_14348__$1;(statearr_14357_14392[2] = inst_14344);
(statearr_14357_14392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 8))
{var inst_14307 = (state_14348[10]);var inst_14308 = (state_14348[11]);var inst_14310 = (inst_14308 < inst_14307);var inst_14311 = inst_14310;var state_14348__$1 = state_14348;if(cljs.core.truth_(inst_14311))
{var statearr_14358_14393 = state_14348__$1;(statearr_14358_14393[1] = 10);
} else
{var statearr_14359_14394 = state_14348__$1;(statearr_14359_14394[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 9))
{var inst_14341 = (state_14348[2]);var state_14348__$1 = (function (){var statearr_14360 = state_14348;(statearr_14360[12] = inst_14341);
return statearr_14360;
})();var statearr_14361_14395 = state_14348__$1;(statearr_14361_14395[2] = null);
(statearr_14361_14395[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 10))
{var inst_14306 = (state_14348[9]);var inst_14308 = (state_14348[11]);var inst_14313 = cljs.core._nth.call(null,inst_14306,inst_14308);var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14348__$1,13,out,inst_14313);
} else
{if((state_val_14349 === 11))
{var inst_14319 = (state_14348[13]);var inst_14305 = (state_14348[8]);var inst_14319__$1 = cljs.core.seq.call(null,inst_14305);var state_14348__$1 = (function (){var statearr_14365 = state_14348;(statearr_14365[13] = inst_14319__$1);
return statearr_14365;
})();if(inst_14319__$1)
{var statearr_14366_14396 = state_14348__$1;(statearr_14366_14396[1] = 14);
} else
{var statearr_14367_14397 = state_14348__$1;(statearr_14367_14397[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 12))
{var inst_14339 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14368_14398 = state_14348__$1;(statearr_14368_14398[2] = inst_14339);
(statearr_14368_14398[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 13))
{var inst_14305 = (state_14348[8]);var inst_14306 = (state_14348[9]);var inst_14307 = (state_14348[10]);var inst_14308 = (state_14348[11]);var inst_14315 = (state_14348[2]);var inst_14316 = (inst_14308 + 1);var tmp14362 = inst_14305;var tmp14363 = inst_14306;var tmp14364 = inst_14307;var inst_14305__$1 = tmp14362;var inst_14306__$1 = tmp14363;var inst_14307__$1 = tmp14364;var inst_14308__$1 = inst_14316;var state_14348__$1 = (function (){var statearr_14369 = state_14348;(statearr_14369[14] = inst_14315);
(statearr_14369[8] = inst_14305__$1);
(statearr_14369[9] = inst_14306__$1);
(statearr_14369[10] = inst_14307__$1);
(statearr_14369[11] = inst_14308__$1);
return statearr_14369;
})();var statearr_14370_14399 = state_14348__$1;(statearr_14370_14399[2] = null);
(statearr_14370_14399[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 14))
{var inst_14319 = (state_14348[13]);var inst_14321 = cljs.core.chunked_seq_QMARK_.call(null,inst_14319);var state_14348__$1 = state_14348;if(inst_14321)
{var statearr_14371_14400 = state_14348__$1;(statearr_14371_14400[1] = 17);
} else
{var statearr_14372_14401 = state_14348__$1;(statearr_14372_14401[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 15))
{var state_14348__$1 = state_14348;var statearr_14373_14402 = state_14348__$1;(statearr_14373_14402[2] = null);
(statearr_14373_14402[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 16))
{var inst_14337 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14374_14403 = state_14348__$1;(statearr_14374_14403[2] = inst_14337);
(statearr_14374_14403[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 17))
{var inst_14319 = (state_14348[13]);var inst_14323 = cljs.core.chunk_first.call(null,inst_14319);var inst_14324 = cljs.core.chunk_rest.call(null,inst_14319);var inst_14325 = cljs.core.count.call(null,inst_14323);var inst_14305 = inst_14324;var inst_14306 = inst_14323;var inst_14307 = inst_14325;var inst_14308 = 0;var state_14348__$1 = (function (){var statearr_14375 = state_14348;(statearr_14375[8] = inst_14305);
(statearr_14375[9] = inst_14306);
(statearr_14375[10] = inst_14307);
(statearr_14375[11] = inst_14308);
return statearr_14375;
})();var statearr_14376_14404 = state_14348__$1;(statearr_14376_14404[2] = null);
(statearr_14376_14404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 18))
{var inst_14319 = (state_14348[13]);var inst_14328 = cljs.core.first.call(null,inst_14319);var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14348__$1,20,out,inst_14328);
} else
{if((state_val_14349 === 19))
{var inst_14334 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14377_14405 = state_14348__$1;(statearr_14377_14405[2] = inst_14334);
(statearr_14377_14405[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 20))
{var inst_14319 = (state_14348[13]);var inst_14330 = (state_14348[2]);var inst_14331 = cljs.core.next.call(null,inst_14319);var inst_14305 = inst_14331;var inst_14306 = null;var inst_14307 = 0;var inst_14308 = 0;var state_14348__$1 = (function (){var statearr_14378 = state_14348;(statearr_14378[15] = inst_14330);
(statearr_14378[8] = inst_14305);
(statearr_14378[9] = inst_14306);
(statearr_14378[10] = inst_14307);
(statearr_14378[11] = inst_14308);
return statearr_14378;
})();var statearr_14379_14406 = state_14348__$1;(statearr_14379_14406[2] = null);
(statearr_14379_14406[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_14383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14383[0] = state_machine__5548__auto__);
(statearr_14383[1] = 1);
return statearr_14383;
});
var state_machine__5548__auto____1 = (function (state_14348){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14348);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14384){if((e14384 instanceof Object))
{var ex__5551__auto__ = e14384;var statearr_14385_14407 = state_14348;(statearr_14385_14407[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14408 = state_14348;
state_14348 = G__14408;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14348){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14386 = f__5563__auto__.call(null);(statearr_14386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14386;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___14489 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14468){var state_val_14469 = (state_14468[1]);if((state_val_14469 === 1))
{var state_14468__$1 = state_14468;var statearr_14470_14490 = state_14468__$1;(statearr_14470_14490[2] = null);
(statearr_14470_14490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14469 === 2))
{var state_14468__$1 = state_14468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14468__$1,4,from);
} else
{if((state_val_14469 === 3))
{var inst_14466 = (state_14468[2]);var state_14468__$1 = state_14468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14468__$1,inst_14466);
} else
{if((state_val_14469 === 4))
{var inst_14451 = (state_14468[7]);var inst_14451__$1 = (state_14468[2]);var inst_14452 = (inst_14451__$1 == null);var state_14468__$1 = (function (){var statearr_14471 = state_14468;(statearr_14471[7] = inst_14451__$1);
return statearr_14471;
})();if(cljs.core.truth_(inst_14452))
{var statearr_14472_14491 = state_14468__$1;(statearr_14472_14491[1] = 5);
} else
{var statearr_14473_14492 = state_14468__$1;(statearr_14473_14492[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14469 === 5))
{var state_14468__$1 = state_14468;if(cljs.core.truth_(close_QMARK_))
{var statearr_14474_14493 = state_14468__$1;(statearr_14474_14493[1] = 8);
} else
{var statearr_14475_14494 = state_14468__$1;(statearr_14475_14494[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14469 === 6))
{var inst_14451 = (state_14468[7]);var state_14468__$1 = state_14468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14468__$1,11,to,inst_14451);
} else
{if((state_val_14469 === 7))
{var inst_14464 = (state_14468[2]);var state_14468__$1 = state_14468;var statearr_14476_14495 = state_14468__$1;(statearr_14476_14495[2] = inst_14464);
(statearr_14476_14495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14469 === 8))
{var inst_14455 = cljs.core.async.close_BANG_.call(null,to);var state_14468__$1 = state_14468;var statearr_14477_14496 = state_14468__$1;(statearr_14477_14496[2] = inst_14455);
(statearr_14477_14496[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14469 === 9))
{var state_14468__$1 = state_14468;var statearr_14478_14497 = state_14468__$1;(statearr_14478_14497[2] = null);
(statearr_14478_14497[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14469 === 10))
{var inst_14458 = (state_14468[2]);var state_14468__$1 = state_14468;var statearr_14479_14498 = state_14468__$1;(statearr_14479_14498[2] = inst_14458);
(statearr_14479_14498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14469 === 11))
{var inst_14461 = (state_14468[2]);var state_14468__$1 = (function (){var statearr_14480 = state_14468;(statearr_14480[8] = inst_14461);
return statearr_14480;
})();var statearr_14481_14499 = state_14468__$1;(statearr_14481_14499[2] = null);
(statearr_14481_14499[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14485 = [null,null,null,null,null,null,null,null,null];(statearr_14485[0] = state_machine__5548__auto__);
(statearr_14485[1] = 1);
return statearr_14485;
});
var state_machine__5548__auto____1 = (function (state_14468){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14468);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14486){if((e14486 instanceof Object))
{var ex__5551__auto__ = e14486;var statearr_14487_14500 = state_14468;(statearr_14487_14500[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14501 = state_14468;
state_14468 = G__14501;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14468){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14488 = f__5563__auto__.call(null);(statearr_14488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14489);
return statearr_14488;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___14588 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14566){var state_val_14567 = (state_14566[1]);if((state_val_14567 === 1))
{var state_14566__$1 = state_14566;var statearr_14568_14589 = state_14566__$1;(statearr_14568_14589[2] = null);
(statearr_14568_14589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 2))
{var state_14566__$1 = state_14566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14566__$1,4,ch);
} else
{if((state_val_14567 === 3))
{var inst_14564 = (state_14566[2]);var state_14566__$1 = state_14566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14566__$1,inst_14564);
} else
{if((state_val_14567 === 4))
{var inst_14547 = (state_14566[7]);var inst_14547__$1 = (state_14566[2]);var inst_14548 = (inst_14547__$1 == null);var state_14566__$1 = (function (){var statearr_14569 = state_14566;(statearr_14569[7] = inst_14547__$1);
return statearr_14569;
})();if(cljs.core.truth_(inst_14548))
{var statearr_14570_14590 = state_14566__$1;(statearr_14570_14590[1] = 5);
} else
{var statearr_14571_14591 = state_14566__$1;(statearr_14571_14591[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 5))
{var inst_14550 = cljs.core.async.close_BANG_.call(null,tc);var inst_14551 = cljs.core.async.close_BANG_.call(null,fc);var state_14566__$1 = (function (){var statearr_14572 = state_14566;(statearr_14572[8] = inst_14550);
return statearr_14572;
})();var statearr_14573_14592 = state_14566__$1;(statearr_14573_14592[2] = inst_14551);
(statearr_14573_14592[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 6))
{var inst_14547 = (state_14566[7]);var inst_14553 = p.call(null,inst_14547);var state_14566__$1 = state_14566;if(cljs.core.truth_(inst_14553))
{var statearr_14574_14593 = state_14566__$1;(statearr_14574_14593[1] = 9);
} else
{var statearr_14575_14594 = state_14566__$1;(statearr_14575_14594[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 7))
{var inst_14562 = (state_14566[2]);var state_14566__$1 = state_14566;var statearr_14576_14595 = state_14566__$1;(statearr_14576_14595[2] = inst_14562);
(statearr_14576_14595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 8))
{var inst_14559 = (state_14566[2]);var state_14566__$1 = (function (){var statearr_14577 = state_14566;(statearr_14577[9] = inst_14559);
return statearr_14577;
})();var statearr_14578_14596 = state_14566__$1;(statearr_14578_14596[2] = null);
(statearr_14578_14596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 9))
{var state_14566__$1 = state_14566;var statearr_14579_14597 = state_14566__$1;(statearr_14579_14597[2] = tc);
(statearr_14579_14597[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 10))
{var state_14566__$1 = state_14566;var statearr_14580_14598 = state_14566__$1;(statearr_14580_14598[2] = fc);
(statearr_14580_14598[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14567 === 11))
{var inst_14547 = (state_14566[7]);var inst_14557 = (state_14566[2]);var state_14566__$1 = state_14566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14566__$1,8,inst_14557,inst_14547);
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
var state_machine__5548__auto____0 = (function (){var statearr_14584 = [null,null,null,null,null,null,null,null,null,null];(statearr_14584[0] = state_machine__5548__auto__);
(statearr_14584[1] = 1);
return statearr_14584;
});
var state_machine__5548__auto____1 = (function (state_14566){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14566);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14585){if((e14585 instanceof Object))
{var ex__5551__auto__ = e14585;var statearr_14586_14599 = state_14566;(statearr_14586_14599[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14600 = state_14566;
state_14566 = G__14600;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14566){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14587 = f__5563__auto__.call(null);(statearr_14587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14588);
return statearr_14587;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14647){var state_val_14648 = (state_14647[1]);if((state_val_14648 === 7))
{var inst_14643 = (state_14647[2]);var state_14647__$1 = state_14647;var statearr_14649_14665 = state_14647__$1;(statearr_14649_14665[2] = inst_14643);
(statearr_14649_14665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14648 === 6))
{var inst_14636 = (state_14647[7]);var inst_14633 = (state_14647[8]);var inst_14640 = f.call(null,inst_14633,inst_14636);var inst_14633__$1 = inst_14640;var state_14647__$1 = (function (){var statearr_14650 = state_14647;(statearr_14650[8] = inst_14633__$1);
return statearr_14650;
})();var statearr_14651_14666 = state_14647__$1;(statearr_14651_14666[2] = null);
(statearr_14651_14666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14648 === 5))
{var inst_14633 = (state_14647[8]);var state_14647__$1 = state_14647;var statearr_14652_14667 = state_14647__$1;(statearr_14652_14667[2] = inst_14633);
(statearr_14652_14667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14648 === 4))
{var inst_14636 = (state_14647[7]);var inst_14636__$1 = (state_14647[2]);var inst_14637 = (inst_14636__$1 == null);var state_14647__$1 = (function (){var statearr_14653 = state_14647;(statearr_14653[7] = inst_14636__$1);
return statearr_14653;
})();if(cljs.core.truth_(inst_14637))
{var statearr_14654_14668 = state_14647__$1;(statearr_14654_14668[1] = 5);
} else
{var statearr_14655_14669 = state_14647__$1;(statearr_14655_14669[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14648 === 3))
{var inst_14645 = (state_14647[2]);var state_14647__$1 = state_14647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14647__$1,inst_14645);
} else
{if((state_val_14648 === 2))
{var state_14647__$1 = state_14647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14647__$1,4,ch);
} else
{if((state_val_14648 === 1))
{var inst_14633 = init;var state_14647__$1 = (function (){var statearr_14656 = state_14647;(statearr_14656[8] = inst_14633);
return statearr_14656;
})();var statearr_14657_14670 = state_14647__$1;(statearr_14657_14670[2] = null);
(statearr_14657_14670[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14661 = [null,null,null,null,null,null,null,null,null];(statearr_14661[0] = state_machine__5548__auto__);
(statearr_14661[1] = 1);
return statearr_14661;
});
var state_machine__5548__auto____1 = (function (state_14647){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14647);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14662){if((e14662 instanceof Object))
{var ex__5551__auto__ = e14662;var statearr_14663_14671 = state_14647;(statearr_14663_14671[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14672 = state_14647;
state_14647 = G__14672;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14647){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14664 = f__5563__auto__.call(null);(statearr_14664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14664;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14734){var state_val_14735 = (state_14734[1]);if((state_val_14735 === 1))
{var inst_14714 = cljs.core.seq.call(null,coll);var inst_14715 = inst_14714;var state_14734__$1 = (function (){var statearr_14736 = state_14734;(statearr_14736[7] = inst_14715);
return statearr_14736;
})();var statearr_14737_14755 = state_14734__$1;(statearr_14737_14755[2] = null);
(statearr_14737_14755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14735 === 2))
{var inst_14715 = (state_14734[7]);var state_14734__$1 = state_14734;if(cljs.core.truth_(inst_14715))
{var statearr_14738_14756 = state_14734__$1;(statearr_14738_14756[1] = 4);
} else
{var statearr_14739_14757 = state_14734__$1;(statearr_14739_14757[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14735 === 3))
{var inst_14732 = (state_14734[2]);var state_14734__$1 = state_14734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14734__$1,inst_14732);
} else
{if((state_val_14735 === 4))
{var inst_14715 = (state_14734[7]);var inst_14718 = cljs.core.first.call(null,inst_14715);var state_14734__$1 = state_14734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14734__$1,7,ch,inst_14718);
} else
{if((state_val_14735 === 5))
{var state_14734__$1 = state_14734;if(cljs.core.truth_(close_QMARK_))
{var statearr_14740_14758 = state_14734__$1;(statearr_14740_14758[1] = 8);
} else
{var statearr_14741_14759 = state_14734__$1;(statearr_14741_14759[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14735 === 6))
{var inst_14730 = (state_14734[2]);var state_14734__$1 = state_14734;var statearr_14742_14760 = state_14734__$1;(statearr_14742_14760[2] = inst_14730);
(statearr_14742_14760[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14735 === 7))
{var inst_14715 = (state_14734[7]);var inst_14720 = (state_14734[2]);var inst_14721 = cljs.core.next.call(null,inst_14715);var inst_14715__$1 = inst_14721;var state_14734__$1 = (function (){var statearr_14743 = state_14734;(statearr_14743[8] = inst_14720);
(statearr_14743[7] = inst_14715__$1);
return statearr_14743;
})();var statearr_14744_14761 = state_14734__$1;(statearr_14744_14761[2] = null);
(statearr_14744_14761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14735 === 8))
{var inst_14725 = cljs.core.async.close_BANG_.call(null,ch);var state_14734__$1 = state_14734;var statearr_14745_14762 = state_14734__$1;(statearr_14745_14762[2] = inst_14725);
(statearr_14745_14762[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14735 === 9))
{var state_14734__$1 = state_14734;var statearr_14746_14763 = state_14734__$1;(statearr_14746_14763[2] = null);
(statearr_14746_14763[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14735 === 10))
{var inst_14728 = (state_14734[2]);var state_14734__$1 = state_14734;var statearr_14747_14764 = state_14734__$1;(statearr_14747_14764[2] = inst_14728);
(statearr_14747_14764[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_14751 = [null,null,null,null,null,null,null,null,null];(statearr_14751[0] = state_machine__5548__auto__);
(statearr_14751[1] = 1);
return statearr_14751;
});
var state_machine__5548__auto____1 = (function (state_14734){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14734);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14752){if((e14752 instanceof Object))
{var ex__5551__auto__ = e14752;var statearr_14753_14765 = state_14734;(statearr_14753_14765[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14734);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14766 = state_14734;
state_14734 = G__14766;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14734){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14754 = f__5563__auto__.call(null);(statearr_14754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14754;
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
cljs.core.async.Mux = (function (){var obj14768 = {};return obj14768;
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
cljs.core.async.Mult = (function (){var obj14770 = {};return obj14770;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14994 = (function (cs,ch,mult,meta14995){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14995 = meta14995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14994.cljs$lang$type = true;
cljs.core.async.t14994.cljs$lang$ctorStr = "cljs.core.async/t14994";
cljs.core.async.t14994.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14994");
});})(cs))
;
cljs.core.async.t14994.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14994.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14996){var self__ = this;
var _14996__$1 = this;return self__.meta14995;
});})(cs))
;
cljs.core.async.t14994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14996,meta14995__$1){var self__ = this;
var _14996__$1 = this;return (new cljs.core.async.t14994(self__.cs,self__.ch,self__.mult,meta14995__$1));
});})(cs))
;
cljs.core.async.__GT_t14994 = ((function (cs){
return (function __GT_t14994(cs__$1,ch__$1,mult__$1,meta14995){return (new cljs.core.async.t14994(cs__$1,ch__$1,mult__$1,meta14995));
});})(cs))
;
}
return (new cljs.core.async.t14994(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___15217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15131){var state_val_15132 = (state_15131[1]);if((state_val_15132 === 32))
{var inst_14999 = (state_15131[7]);var inst_15075 = (state_15131[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15131,31,Object,null,30);var inst_15082 = cljs.core.async.put_BANG_.call(null,inst_15075,inst_14999,done);var state_15131__$1 = state_15131;var statearr_15133_15218 = state_15131__$1;(statearr_15133_15218[2] = inst_15082);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15131__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 1))
{var state_15131__$1 = state_15131;var statearr_15134_15219 = state_15131__$1;(statearr_15134_15219[2] = null);
(statearr_15134_15219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 33))
{var inst_15088 = (state_15131[9]);var inst_15090 = cljs.core.chunked_seq_QMARK_.call(null,inst_15088);var state_15131__$1 = state_15131;if(inst_15090)
{var statearr_15135_15220 = state_15131__$1;(statearr_15135_15220[1] = 36);
} else
{var statearr_15136_15221 = state_15131__$1;(statearr_15136_15221[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 2))
{var state_15131__$1 = state_15131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15131__$1,4,ch);
} else
{if((state_val_15132 === 34))
{var state_15131__$1 = state_15131;var statearr_15137_15222 = state_15131__$1;(statearr_15137_15222[2] = null);
(statearr_15137_15222[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 3))
{var inst_15129 = (state_15131[2]);var state_15131__$1 = state_15131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15131__$1,inst_15129);
} else
{if((state_val_15132 === 35))
{var inst_15113 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15138_15223 = state_15131__$1;(statearr_15138_15223[2] = inst_15113);
(statearr_15138_15223[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 4))
{var inst_14999 = (state_15131[7]);var inst_14999__$1 = (state_15131[2]);var inst_15000 = (inst_14999__$1 == null);var state_15131__$1 = (function (){var statearr_15139 = state_15131;(statearr_15139[7] = inst_14999__$1);
return statearr_15139;
})();if(cljs.core.truth_(inst_15000))
{var statearr_15140_15224 = state_15131__$1;(statearr_15140_15224[1] = 5);
} else
{var statearr_15141_15225 = state_15131__$1;(statearr_15141_15225[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 36))
{var inst_15088 = (state_15131[9]);var inst_15092 = cljs.core.chunk_first.call(null,inst_15088);var inst_15093 = cljs.core.chunk_rest.call(null,inst_15088);var inst_15094 = cljs.core.count.call(null,inst_15092);var inst_15067 = inst_15093;var inst_15068 = inst_15092;var inst_15069 = inst_15094;var inst_15070 = 0;var state_15131__$1 = (function (){var statearr_15142 = state_15131;(statearr_15142[10] = inst_15069);
(statearr_15142[11] = inst_15070);
(statearr_15142[12] = inst_15067);
(statearr_15142[13] = inst_15068);
return statearr_15142;
})();var statearr_15143_15226 = state_15131__$1;(statearr_15143_15226[2] = null);
(statearr_15143_15226[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 5))
{var inst_15006 = cljs.core.deref.call(null,cs);var inst_15007 = cljs.core.seq.call(null,inst_15006);var inst_15008 = inst_15007;var inst_15009 = null;var inst_15010 = 0;var inst_15011 = 0;var state_15131__$1 = (function (){var statearr_15144 = state_15131;(statearr_15144[14] = inst_15011);
(statearr_15144[15] = inst_15010);
(statearr_15144[16] = inst_15009);
(statearr_15144[17] = inst_15008);
return statearr_15144;
})();var statearr_15145_15227 = state_15131__$1;(statearr_15145_15227[2] = null);
(statearr_15145_15227[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 37))
{var inst_15088 = (state_15131[9]);var inst_15097 = cljs.core.first.call(null,inst_15088);var state_15131__$1 = (function (){var statearr_15146 = state_15131;(statearr_15146[18] = inst_15097);
return statearr_15146;
})();var statearr_15147_15228 = state_15131__$1;(statearr_15147_15228[2] = null);
(statearr_15147_15228[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 6))
{var inst_15059 = (state_15131[19]);var inst_15058 = cljs.core.deref.call(null,cs);var inst_15059__$1 = cljs.core.keys.call(null,inst_15058);var inst_15060 = cljs.core.count.call(null,inst_15059__$1);var inst_15061 = cljs.core.reset_BANG_.call(null,dctr,inst_15060);var inst_15066 = cljs.core.seq.call(null,inst_15059__$1);var inst_15067 = inst_15066;var inst_15068 = null;var inst_15069 = 0;var inst_15070 = 0;var state_15131__$1 = (function (){var statearr_15148 = state_15131;(statearr_15148[19] = inst_15059__$1);
(statearr_15148[10] = inst_15069);
(statearr_15148[11] = inst_15070);
(statearr_15148[12] = inst_15067);
(statearr_15148[13] = inst_15068);
(statearr_15148[20] = inst_15061);
return statearr_15148;
})();var statearr_15149_15229 = state_15131__$1;(statearr_15149_15229[2] = null);
(statearr_15149_15229[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 38))
{var inst_15110 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15150_15230 = state_15131__$1;(statearr_15150_15230[2] = inst_15110);
(statearr_15150_15230[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 7))
{var inst_15127 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15151_15231 = state_15131__$1;(statearr_15151_15231[2] = inst_15127);
(statearr_15151_15231[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 39))
{var inst_15088 = (state_15131[9]);var inst_15106 = (state_15131[2]);var inst_15107 = cljs.core.next.call(null,inst_15088);var inst_15067 = inst_15107;var inst_15068 = null;var inst_15069 = 0;var inst_15070 = 0;var state_15131__$1 = (function (){var statearr_15152 = state_15131;(statearr_15152[21] = inst_15106);
(statearr_15152[10] = inst_15069);
(statearr_15152[11] = inst_15070);
(statearr_15152[12] = inst_15067);
(statearr_15152[13] = inst_15068);
return statearr_15152;
})();var statearr_15153_15232 = state_15131__$1;(statearr_15153_15232[2] = null);
(statearr_15153_15232[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 8))
{var inst_15011 = (state_15131[14]);var inst_15010 = (state_15131[15]);var inst_15013 = (inst_15011 < inst_15010);var inst_15014 = inst_15013;var state_15131__$1 = state_15131;if(cljs.core.truth_(inst_15014))
{var statearr_15154_15233 = state_15131__$1;(statearr_15154_15233[1] = 10);
} else
{var statearr_15155_15234 = state_15131__$1;(statearr_15155_15234[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 40))
{var inst_15097 = (state_15131[18]);var inst_15098 = (state_15131[2]);var inst_15099 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15100 = cljs.core.async.untap_STAR_.call(null,m,inst_15097);var state_15131__$1 = (function (){var statearr_15156 = state_15131;(statearr_15156[22] = inst_15099);
(statearr_15156[23] = inst_15098);
return statearr_15156;
})();var statearr_15157_15235 = state_15131__$1;(statearr_15157_15235[2] = inst_15100);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15131__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 9))
{var inst_15056 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15158_15236 = state_15131__$1;(statearr_15158_15236[2] = inst_15056);
(statearr_15158_15236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 41))
{var inst_15097 = (state_15131[18]);var inst_14999 = (state_15131[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15131,40,Object,null,39);var inst_15104 = cljs.core.async.put_BANG_.call(null,inst_15097,inst_14999,done);var state_15131__$1 = state_15131;var statearr_15159_15237 = state_15131__$1;(statearr_15159_15237[2] = inst_15104);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15131__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 10))
{var inst_15011 = (state_15131[14]);var inst_15009 = (state_15131[16]);var inst_15017 = cljs.core._nth.call(null,inst_15009,inst_15011);var inst_15018 = cljs.core.nth.call(null,inst_15017,0,null);var inst_15019 = cljs.core.nth.call(null,inst_15017,1,null);var state_15131__$1 = (function (){var statearr_15160 = state_15131;(statearr_15160[24] = inst_15018);
return statearr_15160;
})();if(cljs.core.truth_(inst_15019))
{var statearr_15161_15238 = state_15131__$1;(statearr_15161_15238[1] = 13);
} else
{var statearr_15162_15239 = state_15131__$1;(statearr_15162_15239[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 42))
{var state_15131__$1 = state_15131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15131__$1,45,dchan);
} else
{if((state_val_15132 === 11))
{var inst_15028 = (state_15131[25]);var inst_15008 = (state_15131[17]);var inst_15028__$1 = cljs.core.seq.call(null,inst_15008);var state_15131__$1 = (function (){var statearr_15163 = state_15131;(statearr_15163[25] = inst_15028__$1);
return statearr_15163;
})();if(inst_15028__$1)
{var statearr_15164_15240 = state_15131__$1;(statearr_15164_15240[1] = 16);
} else
{var statearr_15165_15241 = state_15131__$1;(statearr_15165_15241[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 43))
{var state_15131__$1 = state_15131;var statearr_15166_15242 = state_15131__$1;(statearr_15166_15242[2] = null);
(statearr_15166_15242[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 12))
{var inst_15054 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15167_15243 = state_15131__$1;(statearr_15167_15243[2] = inst_15054);
(statearr_15167_15243[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 44))
{var inst_15124 = (state_15131[2]);var state_15131__$1 = (function (){var statearr_15168 = state_15131;(statearr_15168[26] = inst_15124);
return statearr_15168;
})();var statearr_15169_15244 = state_15131__$1;(statearr_15169_15244[2] = null);
(statearr_15169_15244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 13))
{var inst_15018 = (state_15131[24]);var inst_15021 = cljs.core.async.close_BANG_.call(null,inst_15018);var state_15131__$1 = state_15131;var statearr_15170_15245 = state_15131__$1;(statearr_15170_15245[2] = inst_15021);
(statearr_15170_15245[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 45))
{var inst_15121 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15174_15246 = state_15131__$1;(statearr_15174_15246[2] = inst_15121);
(statearr_15174_15246[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 14))
{var state_15131__$1 = state_15131;var statearr_15175_15247 = state_15131__$1;(statearr_15175_15247[2] = null);
(statearr_15175_15247[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 15))
{var inst_15011 = (state_15131[14]);var inst_15010 = (state_15131[15]);var inst_15009 = (state_15131[16]);var inst_15008 = (state_15131[17]);var inst_15024 = (state_15131[2]);var inst_15025 = (inst_15011 + 1);var tmp15171 = inst_15010;var tmp15172 = inst_15009;var tmp15173 = inst_15008;var inst_15008__$1 = tmp15173;var inst_15009__$1 = tmp15172;var inst_15010__$1 = tmp15171;var inst_15011__$1 = inst_15025;var state_15131__$1 = (function (){var statearr_15176 = state_15131;(statearr_15176[14] = inst_15011__$1);
(statearr_15176[15] = inst_15010__$1);
(statearr_15176[27] = inst_15024);
(statearr_15176[16] = inst_15009__$1);
(statearr_15176[17] = inst_15008__$1);
return statearr_15176;
})();var statearr_15177_15248 = state_15131__$1;(statearr_15177_15248[2] = null);
(statearr_15177_15248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 16))
{var inst_15028 = (state_15131[25]);var inst_15030 = cljs.core.chunked_seq_QMARK_.call(null,inst_15028);var state_15131__$1 = state_15131;if(inst_15030)
{var statearr_15178_15249 = state_15131__$1;(statearr_15178_15249[1] = 19);
} else
{var statearr_15179_15250 = state_15131__$1;(statearr_15179_15250[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 17))
{var state_15131__$1 = state_15131;var statearr_15180_15251 = state_15131__$1;(statearr_15180_15251[2] = null);
(statearr_15180_15251[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 18))
{var inst_15052 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15181_15252 = state_15131__$1;(statearr_15181_15252[2] = inst_15052);
(statearr_15181_15252[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 19))
{var inst_15028 = (state_15131[25]);var inst_15032 = cljs.core.chunk_first.call(null,inst_15028);var inst_15033 = cljs.core.chunk_rest.call(null,inst_15028);var inst_15034 = cljs.core.count.call(null,inst_15032);var inst_15008 = inst_15033;var inst_15009 = inst_15032;var inst_15010 = inst_15034;var inst_15011 = 0;var state_15131__$1 = (function (){var statearr_15182 = state_15131;(statearr_15182[14] = inst_15011);
(statearr_15182[15] = inst_15010);
(statearr_15182[16] = inst_15009);
(statearr_15182[17] = inst_15008);
return statearr_15182;
})();var statearr_15183_15253 = state_15131__$1;(statearr_15183_15253[2] = null);
(statearr_15183_15253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 20))
{var inst_15028 = (state_15131[25]);var inst_15038 = cljs.core.first.call(null,inst_15028);var inst_15039 = cljs.core.nth.call(null,inst_15038,0,null);var inst_15040 = cljs.core.nth.call(null,inst_15038,1,null);var state_15131__$1 = (function (){var statearr_15184 = state_15131;(statearr_15184[28] = inst_15039);
return statearr_15184;
})();if(cljs.core.truth_(inst_15040))
{var statearr_15185_15254 = state_15131__$1;(statearr_15185_15254[1] = 22);
} else
{var statearr_15186_15255 = state_15131__$1;(statearr_15186_15255[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 21))
{var inst_15049 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15187_15256 = state_15131__$1;(statearr_15187_15256[2] = inst_15049);
(statearr_15187_15256[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 22))
{var inst_15039 = (state_15131[28]);var inst_15042 = cljs.core.async.close_BANG_.call(null,inst_15039);var state_15131__$1 = state_15131;var statearr_15188_15257 = state_15131__$1;(statearr_15188_15257[2] = inst_15042);
(statearr_15188_15257[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 23))
{var state_15131__$1 = state_15131;var statearr_15189_15258 = state_15131__$1;(statearr_15189_15258[2] = null);
(statearr_15189_15258[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 24))
{var inst_15028 = (state_15131[25]);var inst_15045 = (state_15131[2]);var inst_15046 = cljs.core.next.call(null,inst_15028);var inst_15008 = inst_15046;var inst_15009 = null;var inst_15010 = 0;var inst_15011 = 0;var state_15131__$1 = (function (){var statearr_15190 = state_15131;(statearr_15190[14] = inst_15011);
(statearr_15190[15] = inst_15010);
(statearr_15190[16] = inst_15009);
(statearr_15190[17] = inst_15008);
(statearr_15190[29] = inst_15045);
return statearr_15190;
})();var statearr_15191_15259 = state_15131__$1;(statearr_15191_15259[2] = null);
(statearr_15191_15259[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 25))
{var inst_15069 = (state_15131[10]);var inst_15070 = (state_15131[11]);var inst_15072 = (inst_15070 < inst_15069);var inst_15073 = inst_15072;var state_15131__$1 = state_15131;if(cljs.core.truth_(inst_15073))
{var statearr_15192_15260 = state_15131__$1;(statearr_15192_15260[1] = 27);
} else
{var statearr_15193_15261 = state_15131__$1;(statearr_15193_15261[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 26))
{var inst_15059 = (state_15131[19]);var inst_15117 = (state_15131[2]);var inst_15118 = cljs.core.seq.call(null,inst_15059);var state_15131__$1 = (function (){var statearr_15194 = state_15131;(statearr_15194[30] = inst_15117);
return statearr_15194;
})();if(inst_15118)
{var statearr_15195_15262 = state_15131__$1;(statearr_15195_15262[1] = 42);
} else
{var statearr_15196_15263 = state_15131__$1;(statearr_15196_15263[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 27))
{var inst_15070 = (state_15131[11]);var inst_15068 = (state_15131[13]);var inst_15075 = cljs.core._nth.call(null,inst_15068,inst_15070);var state_15131__$1 = (function (){var statearr_15197 = state_15131;(statearr_15197[8] = inst_15075);
return statearr_15197;
})();var statearr_15198_15264 = state_15131__$1;(statearr_15198_15264[2] = null);
(statearr_15198_15264[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 28))
{var inst_15067 = (state_15131[12]);var inst_15088 = (state_15131[9]);var inst_15088__$1 = cljs.core.seq.call(null,inst_15067);var state_15131__$1 = (function (){var statearr_15202 = state_15131;(statearr_15202[9] = inst_15088__$1);
return statearr_15202;
})();if(inst_15088__$1)
{var statearr_15203_15265 = state_15131__$1;(statearr_15203_15265[1] = 33);
} else
{var statearr_15204_15266 = state_15131__$1;(statearr_15204_15266[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 29))
{var inst_15115 = (state_15131[2]);var state_15131__$1 = state_15131;var statearr_15205_15267 = state_15131__$1;(statearr_15205_15267[2] = inst_15115);
(statearr_15205_15267[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 30))
{var inst_15069 = (state_15131[10]);var inst_15070 = (state_15131[11]);var inst_15067 = (state_15131[12]);var inst_15068 = (state_15131[13]);var inst_15084 = (state_15131[2]);var inst_15085 = (inst_15070 + 1);var tmp15199 = inst_15069;var tmp15200 = inst_15067;var tmp15201 = inst_15068;var inst_15067__$1 = tmp15200;var inst_15068__$1 = tmp15201;var inst_15069__$1 = tmp15199;var inst_15070__$1 = inst_15085;var state_15131__$1 = (function (){var statearr_15206 = state_15131;(statearr_15206[31] = inst_15084);
(statearr_15206[10] = inst_15069__$1);
(statearr_15206[11] = inst_15070__$1);
(statearr_15206[12] = inst_15067__$1);
(statearr_15206[13] = inst_15068__$1);
return statearr_15206;
})();var statearr_15207_15268 = state_15131__$1;(statearr_15207_15268[2] = null);
(statearr_15207_15268[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15132 === 31))
{var inst_15075 = (state_15131[8]);var inst_15076 = (state_15131[2]);var inst_15077 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15078 = cljs.core.async.untap_STAR_.call(null,m,inst_15075);var state_15131__$1 = (function (){var statearr_15208 = state_15131;(statearr_15208[32] = inst_15077);
(statearr_15208[33] = inst_15076);
return statearr_15208;
})();var statearr_15209_15269 = state_15131__$1;(statearr_15209_15269[2] = inst_15078);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15131__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15213[0] = state_machine__5548__auto__);
(statearr_15213[1] = 1);
return statearr_15213;
});
var state_machine__5548__auto____1 = (function (state_15131){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15214){if((e15214 instanceof Object))
{var ex__5551__auto__ = e15214;var statearr_15215_15270 = state_15131;(statearr_15215_15270[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15271 = state_15131;
state_15131 = G__15271;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15131){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15216 = f__5563__auto__.call(null);(statearr_15216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15217);
return statearr_15216;
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
cljs.core.async.Mix = (function (){var obj15273 = {};return obj15273;
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
;var m = (function (){if(typeof cljs.core.async.t15383 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15383 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15384){
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
this.meta15384 = meta15384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15383.cljs$lang$type = true;
cljs.core.async.t15383.cljs$lang$ctorStr = "cljs.core.async/t15383";
cljs.core.async.t15383.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15383");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15383.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15385){var self__ = this;
var _15385__$1 = this;return self__.meta15384;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15385,meta15384__$1){var self__ = this;
var _15385__$1 = this;return (new cljs.core.async.t15383(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15384__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15383 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15383(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15384){return (new cljs.core.async.t15383(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15384));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15383(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___15492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15450){var state_val_15451 = (state_15450[1]);if((state_val_15451 === 1))
{var inst_15389 = (state_15450[7]);var inst_15389__$1 = calc_state.call(null);var inst_15390 = cljs.core.seq_QMARK_.call(null,inst_15389__$1);var state_15450__$1 = (function (){var statearr_15452 = state_15450;(statearr_15452[7] = inst_15389__$1);
return statearr_15452;
})();if(inst_15390)
{var statearr_15453_15493 = state_15450__$1;(statearr_15453_15493[1] = 2);
} else
{var statearr_15454_15494 = state_15450__$1;(statearr_15454_15494[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 2))
{var inst_15389 = (state_15450[7]);var inst_15392 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15389);var state_15450__$1 = state_15450;var statearr_15455_15495 = state_15450__$1;(statearr_15455_15495[2] = inst_15392);
(statearr_15455_15495[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 3))
{var inst_15389 = (state_15450[7]);var state_15450__$1 = state_15450;var statearr_15456_15496 = state_15450__$1;(statearr_15456_15496[2] = inst_15389);
(statearr_15456_15496[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 4))
{var inst_15389 = (state_15450[7]);var inst_15395 = (state_15450[2]);var inst_15396 = cljs.core.get.call(null,inst_15395,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15397 = cljs.core.get.call(null,inst_15395,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15398 = cljs.core.get.call(null,inst_15395,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15399 = inst_15389;var state_15450__$1 = (function (){var statearr_15457 = state_15450;(statearr_15457[8] = inst_15399);
(statearr_15457[9] = inst_15397);
(statearr_15457[10] = inst_15398);
(statearr_15457[11] = inst_15396);
return statearr_15457;
})();var statearr_15458_15497 = state_15450__$1;(statearr_15458_15497[2] = null);
(statearr_15458_15497[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 5))
{var inst_15399 = (state_15450[8]);var inst_15402 = cljs.core.seq_QMARK_.call(null,inst_15399);var state_15450__$1 = state_15450;if(inst_15402)
{var statearr_15459_15498 = state_15450__$1;(statearr_15459_15498[1] = 7);
} else
{var statearr_15460_15499 = state_15450__$1;(statearr_15460_15499[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 6))
{var inst_15448 = (state_15450[2]);var state_15450__$1 = state_15450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15450__$1,inst_15448);
} else
{if((state_val_15451 === 7))
{var inst_15399 = (state_15450[8]);var inst_15404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15399);var state_15450__$1 = state_15450;var statearr_15461_15500 = state_15450__$1;(statearr_15461_15500[2] = inst_15404);
(statearr_15461_15500[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 8))
{var inst_15399 = (state_15450[8]);var state_15450__$1 = state_15450;var statearr_15462_15501 = state_15450__$1;(statearr_15462_15501[2] = inst_15399);
(statearr_15462_15501[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 9))
{var inst_15407 = (state_15450[12]);var inst_15407__$1 = (state_15450[2]);var inst_15408 = cljs.core.get.call(null,inst_15407__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15409 = cljs.core.get.call(null,inst_15407__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15410 = cljs.core.get.call(null,inst_15407__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15450__$1 = (function (){var statearr_15463 = state_15450;(statearr_15463[13] = inst_15410);
(statearr_15463[12] = inst_15407__$1);
(statearr_15463[14] = inst_15409);
return statearr_15463;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15450__$1,10,inst_15408);
} else
{if((state_val_15451 === 10))
{var inst_15415 = (state_15450[15]);var inst_15414 = (state_15450[16]);var inst_15413 = (state_15450[2]);var inst_15414__$1 = cljs.core.nth.call(null,inst_15413,0,null);var inst_15415__$1 = cljs.core.nth.call(null,inst_15413,1,null);var inst_15416 = (inst_15414__$1 == null);var inst_15417 = cljs.core._EQ_.call(null,inst_15415__$1,change);var inst_15418 = (inst_15416) || (inst_15417);var state_15450__$1 = (function (){var statearr_15464 = state_15450;(statearr_15464[15] = inst_15415__$1);
(statearr_15464[16] = inst_15414__$1);
return statearr_15464;
})();if(cljs.core.truth_(inst_15418))
{var statearr_15465_15502 = state_15450__$1;(statearr_15465_15502[1] = 11);
} else
{var statearr_15466_15503 = state_15450__$1;(statearr_15466_15503[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 11))
{var inst_15414 = (state_15450[16]);var inst_15420 = (inst_15414 == null);var state_15450__$1 = state_15450;if(cljs.core.truth_(inst_15420))
{var statearr_15467_15504 = state_15450__$1;(statearr_15467_15504[1] = 14);
} else
{var statearr_15468_15505 = state_15450__$1;(statearr_15468_15505[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 12))
{var inst_15410 = (state_15450[13]);var inst_15415 = (state_15450[15]);var inst_15429 = (state_15450[17]);var inst_15429__$1 = inst_15410.call(null,inst_15415);var state_15450__$1 = (function (){var statearr_15469 = state_15450;(statearr_15469[17] = inst_15429__$1);
return statearr_15469;
})();if(cljs.core.truth_(inst_15429__$1))
{var statearr_15470_15506 = state_15450__$1;(statearr_15470_15506[1] = 17);
} else
{var statearr_15471_15507 = state_15450__$1;(statearr_15471_15507[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 13))
{var inst_15446 = (state_15450[2]);var state_15450__$1 = state_15450;var statearr_15472_15508 = state_15450__$1;(statearr_15472_15508[2] = inst_15446);
(statearr_15472_15508[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 14))
{var inst_15415 = (state_15450[15]);var inst_15422 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15415);var state_15450__$1 = state_15450;var statearr_15473_15509 = state_15450__$1;(statearr_15473_15509[2] = inst_15422);
(statearr_15473_15509[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 15))
{var state_15450__$1 = state_15450;var statearr_15474_15510 = state_15450__$1;(statearr_15474_15510[2] = null);
(statearr_15474_15510[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 16))
{var inst_15425 = (state_15450[2]);var inst_15426 = calc_state.call(null);var inst_15399 = inst_15426;var state_15450__$1 = (function (){var statearr_15475 = state_15450;(statearr_15475[18] = inst_15425);
(statearr_15475[8] = inst_15399);
return statearr_15475;
})();var statearr_15476_15511 = state_15450__$1;(statearr_15476_15511[2] = null);
(statearr_15476_15511[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 17))
{var inst_15429 = (state_15450[17]);var state_15450__$1 = state_15450;var statearr_15477_15512 = state_15450__$1;(statearr_15477_15512[2] = inst_15429);
(statearr_15477_15512[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 18))
{var inst_15410 = (state_15450[13]);var inst_15415 = (state_15450[15]);var inst_15409 = (state_15450[14]);var inst_15432 = cljs.core.empty_QMARK_.call(null,inst_15410);var inst_15433 = inst_15409.call(null,inst_15415);var inst_15434 = cljs.core.not.call(null,inst_15433);var inst_15435 = (inst_15432) && (inst_15434);var state_15450__$1 = state_15450;var statearr_15478_15513 = state_15450__$1;(statearr_15478_15513[2] = inst_15435);
(statearr_15478_15513[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 19))
{var inst_15437 = (state_15450[2]);var state_15450__$1 = state_15450;if(cljs.core.truth_(inst_15437))
{var statearr_15479_15514 = state_15450__$1;(statearr_15479_15514[1] = 20);
} else
{var statearr_15480_15515 = state_15450__$1;(statearr_15480_15515[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 20))
{var inst_15414 = (state_15450[16]);var state_15450__$1 = state_15450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15450__$1,23,out,inst_15414);
} else
{if((state_val_15451 === 21))
{var state_15450__$1 = state_15450;var statearr_15481_15516 = state_15450__$1;(statearr_15481_15516[2] = null);
(statearr_15481_15516[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 22))
{var inst_15407 = (state_15450[12]);var inst_15443 = (state_15450[2]);var inst_15399 = inst_15407;var state_15450__$1 = (function (){var statearr_15482 = state_15450;(statearr_15482[8] = inst_15399);
(statearr_15482[19] = inst_15443);
return statearr_15482;
})();var statearr_15483_15517 = state_15450__$1;(statearr_15483_15517[2] = null);
(statearr_15483_15517[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 23))
{var inst_15440 = (state_15450[2]);var state_15450__$1 = state_15450;var statearr_15484_15518 = state_15450__$1;(statearr_15484_15518[2] = inst_15440);
(statearr_15484_15518[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_15488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15488[0] = state_machine__5548__auto__);
(statearr_15488[1] = 1);
return statearr_15488;
});
var state_machine__5548__auto____1 = (function (state_15450){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15450);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15489){if((e15489 instanceof Object))
{var ex__5551__auto__ = e15489;var statearr_15490_15519 = state_15450;(statearr_15490_15519[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15520 = state_15450;
state_15450 = G__15520;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15450){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15491 = f__5563__auto__.call(null);(statearr_15491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15492);
return statearr_15491;
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
cljs.core.async.Pub = (function (){var obj15522 = {};return obj15522;
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
return (function (p1__15523_SHARP_){if(cljs.core.truth_(p1__15523_SHARP_.call(null,topic)))
{return p1__15523_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15523_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15648 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15649){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15649 = meta15649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15648.cljs$lang$type = true;
cljs.core.async.t15648.cljs$lang$ctorStr = "cljs.core.async/t15648";
cljs.core.async.t15648.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15648");
});})(mults,ensure_mult))
;
cljs.core.async.t15648.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15648.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15648.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15648.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15650){var self__ = this;
var _15650__$1 = this;return self__.meta15649;
});})(mults,ensure_mult))
;
cljs.core.async.t15648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15650,meta15649__$1){var self__ = this;
var _15650__$1 = this;return (new cljs.core.async.t15648(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15649__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15648 = ((function (mults,ensure_mult){
return (function __GT_t15648(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15649){return (new cljs.core.async.t15648(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15649));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15648(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___15772 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15724){var state_val_15725 = (state_15724[1]);if((state_val_15725 === 1))
{var state_15724__$1 = state_15724;var statearr_15726_15773 = state_15724__$1;(statearr_15726_15773[2] = null);
(statearr_15726_15773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 2))
{var state_15724__$1 = state_15724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15724__$1,4,ch);
} else
{if((state_val_15725 === 3))
{var inst_15722 = (state_15724[2]);var state_15724__$1 = state_15724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15724__$1,inst_15722);
} else
{if((state_val_15725 === 4))
{var inst_15653 = (state_15724[7]);var inst_15653__$1 = (state_15724[2]);var inst_15654 = (inst_15653__$1 == null);var state_15724__$1 = (function (){var statearr_15727 = state_15724;(statearr_15727[7] = inst_15653__$1);
return statearr_15727;
})();if(cljs.core.truth_(inst_15654))
{var statearr_15728_15774 = state_15724__$1;(statearr_15728_15774[1] = 5);
} else
{var statearr_15729_15775 = state_15724__$1;(statearr_15729_15775[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 5))
{var inst_15660 = cljs.core.deref.call(null,mults);var inst_15661 = cljs.core.vals.call(null,inst_15660);var inst_15662 = cljs.core.seq.call(null,inst_15661);var inst_15663 = inst_15662;var inst_15664 = null;var inst_15665 = 0;var inst_15666 = 0;var state_15724__$1 = (function (){var statearr_15730 = state_15724;(statearr_15730[8] = inst_15666);
(statearr_15730[9] = inst_15665);
(statearr_15730[10] = inst_15663);
(statearr_15730[11] = inst_15664);
return statearr_15730;
})();var statearr_15731_15776 = state_15724__$1;(statearr_15731_15776[2] = null);
(statearr_15731_15776[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 6))
{var inst_15653 = (state_15724[7]);var inst_15701 = (state_15724[12]);var inst_15703 = (state_15724[13]);var inst_15701__$1 = topic_fn.call(null,inst_15653);var inst_15702 = cljs.core.deref.call(null,mults);var inst_15703__$1 = cljs.core.get.call(null,inst_15702,inst_15701__$1);var state_15724__$1 = (function (){var statearr_15732 = state_15724;(statearr_15732[12] = inst_15701__$1);
(statearr_15732[13] = inst_15703__$1);
return statearr_15732;
})();if(cljs.core.truth_(inst_15703__$1))
{var statearr_15733_15777 = state_15724__$1;(statearr_15733_15777[1] = 19);
} else
{var statearr_15734_15778 = state_15724__$1;(statearr_15734_15778[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 7))
{var inst_15720 = (state_15724[2]);var state_15724__$1 = state_15724;var statearr_15735_15779 = state_15724__$1;(statearr_15735_15779[2] = inst_15720);
(statearr_15735_15779[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 8))
{var inst_15666 = (state_15724[8]);var inst_15665 = (state_15724[9]);var inst_15668 = (inst_15666 < inst_15665);var inst_15669 = inst_15668;var state_15724__$1 = state_15724;if(cljs.core.truth_(inst_15669))
{var statearr_15739_15780 = state_15724__$1;(statearr_15739_15780[1] = 10);
} else
{var statearr_15740_15781 = state_15724__$1;(statearr_15740_15781[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 9))
{var inst_15699 = (state_15724[2]);var state_15724__$1 = state_15724;var statearr_15741_15782 = state_15724__$1;(statearr_15741_15782[2] = inst_15699);
(statearr_15741_15782[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 10))
{var inst_15666 = (state_15724[8]);var inst_15665 = (state_15724[9]);var inst_15663 = (state_15724[10]);var inst_15664 = (state_15724[11]);var inst_15671 = cljs.core._nth.call(null,inst_15664,inst_15666);var inst_15672 = cljs.core.async.muxch_STAR_.call(null,inst_15671);var inst_15673 = cljs.core.async.close_BANG_.call(null,inst_15672);var inst_15674 = (inst_15666 + 1);var tmp15736 = inst_15665;var tmp15737 = inst_15663;var tmp15738 = inst_15664;var inst_15663__$1 = tmp15737;var inst_15664__$1 = tmp15738;var inst_15665__$1 = tmp15736;var inst_15666__$1 = inst_15674;var state_15724__$1 = (function (){var statearr_15742 = state_15724;(statearr_15742[8] = inst_15666__$1);
(statearr_15742[9] = inst_15665__$1);
(statearr_15742[10] = inst_15663__$1);
(statearr_15742[11] = inst_15664__$1);
(statearr_15742[14] = inst_15673);
return statearr_15742;
})();var statearr_15743_15783 = state_15724__$1;(statearr_15743_15783[2] = null);
(statearr_15743_15783[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 11))
{var inst_15663 = (state_15724[10]);var inst_15677 = (state_15724[15]);var inst_15677__$1 = cljs.core.seq.call(null,inst_15663);var state_15724__$1 = (function (){var statearr_15744 = state_15724;(statearr_15744[15] = inst_15677__$1);
return statearr_15744;
})();if(inst_15677__$1)
{var statearr_15745_15784 = state_15724__$1;(statearr_15745_15784[1] = 13);
} else
{var statearr_15746_15785 = state_15724__$1;(statearr_15746_15785[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 12))
{var inst_15697 = (state_15724[2]);var state_15724__$1 = state_15724;var statearr_15747_15786 = state_15724__$1;(statearr_15747_15786[2] = inst_15697);
(statearr_15747_15786[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 13))
{var inst_15677 = (state_15724[15]);var inst_15679 = cljs.core.chunked_seq_QMARK_.call(null,inst_15677);var state_15724__$1 = state_15724;if(inst_15679)
{var statearr_15748_15787 = state_15724__$1;(statearr_15748_15787[1] = 16);
} else
{var statearr_15749_15788 = state_15724__$1;(statearr_15749_15788[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 14))
{var state_15724__$1 = state_15724;var statearr_15750_15789 = state_15724__$1;(statearr_15750_15789[2] = null);
(statearr_15750_15789[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 15))
{var inst_15695 = (state_15724[2]);var state_15724__$1 = state_15724;var statearr_15751_15790 = state_15724__$1;(statearr_15751_15790[2] = inst_15695);
(statearr_15751_15790[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 16))
{var inst_15677 = (state_15724[15]);var inst_15681 = cljs.core.chunk_first.call(null,inst_15677);var inst_15682 = cljs.core.chunk_rest.call(null,inst_15677);var inst_15683 = cljs.core.count.call(null,inst_15681);var inst_15663 = inst_15682;var inst_15664 = inst_15681;var inst_15665 = inst_15683;var inst_15666 = 0;var state_15724__$1 = (function (){var statearr_15752 = state_15724;(statearr_15752[8] = inst_15666);
(statearr_15752[9] = inst_15665);
(statearr_15752[10] = inst_15663);
(statearr_15752[11] = inst_15664);
return statearr_15752;
})();var statearr_15753_15791 = state_15724__$1;(statearr_15753_15791[2] = null);
(statearr_15753_15791[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 17))
{var inst_15677 = (state_15724[15]);var inst_15686 = cljs.core.first.call(null,inst_15677);var inst_15687 = cljs.core.async.muxch_STAR_.call(null,inst_15686);var inst_15688 = cljs.core.async.close_BANG_.call(null,inst_15687);var inst_15689 = cljs.core.next.call(null,inst_15677);var inst_15663 = inst_15689;var inst_15664 = null;var inst_15665 = 0;var inst_15666 = 0;var state_15724__$1 = (function (){var statearr_15754 = state_15724;(statearr_15754[8] = inst_15666);
(statearr_15754[9] = inst_15665);
(statearr_15754[10] = inst_15663);
(statearr_15754[11] = inst_15664);
(statearr_15754[16] = inst_15688);
return statearr_15754;
})();var statearr_15755_15792 = state_15724__$1;(statearr_15755_15792[2] = null);
(statearr_15755_15792[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 18))
{var inst_15692 = (state_15724[2]);var state_15724__$1 = state_15724;var statearr_15756_15793 = state_15724__$1;(statearr_15756_15793[2] = inst_15692);
(statearr_15756_15793[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 19))
{var state_15724__$1 = state_15724;var statearr_15757_15794 = state_15724__$1;(statearr_15757_15794[2] = null);
(statearr_15757_15794[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 20))
{var state_15724__$1 = state_15724;var statearr_15758_15795 = state_15724__$1;(statearr_15758_15795[2] = null);
(statearr_15758_15795[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 21))
{var inst_15717 = (state_15724[2]);var state_15724__$1 = (function (){var statearr_15759 = state_15724;(statearr_15759[17] = inst_15717);
return statearr_15759;
})();var statearr_15760_15796 = state_15724__$1;(statearr_15760_15796[2] = null);
(statearr_15760_15796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 22))
{var inst_15714 = (state_15724[2]);var state_15724__$1 = state_15724;var statearr_15761_15797 = state_15724__$1;(statearr_15761_15797[2] = inst_15714);
(statearr_15761_15797[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 23))
{var inst_15701 = (state_15724[12]);var inst_15705 = (state_15724[2]);var inst_15706 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15701);var state_15724__$1 = (function (){var statearr_15762 = state_15724;(statearr_15762[18] = inst_15705);
return statearr_15762;
})();var statearr_15763_15798 = state_15724__$1;(statearr_15763_15798[2] = inst_15706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15724__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15725 === 24))
{var inst_15653 = (state_15724[7]);var inst_15703 = (state_15724[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15724,23,Object,null,22);var inst_15710 = cljs.core.async.muxch_STAR_.call(null,inst_15703);var state_15724__$1 = state_15724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15724__$1,25,inst_15710,inst_15653);
} else
{if((state_val_15725 === 25))
{var inst_15712 = (state_15724[2]);var state_15724__$1 = state_15724;var statearr_15764_15799 = state_15724__$1;(statearr_15764_15799[2] = inst_15712);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15724__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15768[0] = state_machine__5548__auto__);
(statearr_15768[1] = 1);
return statearr_15768;
});
var state_machine__5548__auto____1 = (function (state_15724){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15724);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15769){if((e15769 instanceof Object))
{var ex__5551__auto__ = e15769;var statearr_15770_15800 = state_15724;(statearr_15770_15800[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15801 = state_15724;
state_15724 = G__15801;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15724){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15771 = f__5563__auto__.call(null);(statearr_15771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15772);
return statearr_15771;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___15938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15908){var state_val_15909 = (state_15908[1]);if((state_val_15909 === 1))
{var state_15908__$1 = state_15908;var statearr_15910_15939 = state_15908__$1;(statearr_15910_15939[2] = null);
(statearr_15910_15939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 2))
{var inst_15871 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15872 = 0;var state_15908__$1 = (function (){var statearr_15911 = state_15908;(statearr_15911[7] = inst_15872);
(statearr_15911[8] = inst_15871);
return statearr_15911;
})();var statearr_15912_15940 = state_15908__$1;(statearr_15912_15940[2] = null);
(statearr_15912_15940[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 3))
{var inst_15906 = (state_15908[2]);var state_15908__$1 = state_15908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15908__$1,inst_15906);
} else
{if((state_val_15909 === 4))
{var inst_15872 = (state_15908[7]);var inst_15874 = (inst_15872 < cnt);var state_15908__$1 = state_15908;if(cljs.core.truth_(inst_15874))
{var statearr_15913_15941 = state_15908__$1;(statearr_15913_15941[1] = 6);
} else
{var statearr_15914_15942 = state_15908__$1;(statearr_15914_15942[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 5))
{var inst_15892 = (state_15908[2]);var state_15908__$1 = (function (){var statearr_15915 = state_15908;(statearr_15915[9] = inst_15892);
return statearr_15915;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15908__$1,12,dchan);
} else
{if((state_val_15909 === 6))
{var state_15908__$1 = state_15908;var statearr_15916_15943 = state_15908__$1;(statearr_15916_15943[2] = null);
(statearr_15916_15943[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 7))
{var state_15908__$1 = state_15908;var statearr_15917_15944 = state_15908__$1;(statearr_15917_15944[2] = null);
(statearr_15917_15944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 8))
{var inst_15890 = (state_15908[2]);var state_15908__$1 = state_15908;var statearr_15918_15945 = state_15908__$1;(statearr_15918_15945[2] = inst_15890);
(statearr_15918_15945[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 9))
{var inst_15872 = (state_15908[7]);var inst_15885 = (state_15908[2]);var inst_15886 = (inst_15872 + 1);var inst_15872__$1 = inst_15886;var state_15908__$1 = (function (){var statearr_15919 = state_15908;(statearr_15919[7] = inst_15872__$1);
(statearr_15919[10] = inst_15885);
return statearr_15919;
})();var statearr_15920_15946 = state_15908__$1;(statearr_15920_15946[2] = null);
(statearr_15920_15946[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 10))
{var inst_15876 = (state_15908[2]);var inst_15877 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15908__$1 = (function (){var statearr_15921 = state_15908;(statearr_15921[11] = inst_15876);
return statearr_15921;
})();var statearr_15922_15947 = state_15908__$1;(statearr_15922_15947[2] = inst_15877);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15908__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 11))
{var inst_15872 = (state_15908[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15908,10,Object,null,9);var inst_15881 = chs__$1.call(null,inst_15872);var inst_15882 = done.call(null,inst_15872);var inst_15883 = cljs.core.async.take_BANG_.call(null,inst_15881,inst_15882);var state_15908__$1 = state_15908;var statearr_15923_15948 = state_15908__$1;(statearr_15923_15948[2] = inst_15883);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15908__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 12))
{var inst_15894 = (state_15908[12]);var inst_15894__$1 = (state_15908[2]);var inst_15895 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15894__$1);var state_15908__$1 = (function (){var statearr_15924 = state_15908;(statearr_15924[12] = inst_15894__$1);
return statearr_15924;
})();if(cljs.core.truth_(inst_15895))
{var statearr_15925_15949 = state_15908__$1;(statearr_15925_15949[1] = 13);
} else
{var statearr_15926_15950 = state_15908__$1;(statearr_15926_15950[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 13))
{var inst_15897 = cljs.core.async.close_BANG_.call(null,out);var state_15908__$1 = state_15908;var statearr_15927_15951 = state_15908__$1;(statearr_15927_15951[2] = inst_15897);
(statearr_15927_15951[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 14))
{var inst_15894 = (state_15908[12]);var inst_15899 = cljs.core.apply.call(null,f,inst_15894);var state_15908__$1 = state_15908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15908__$1,16,out,inst_15899);
} else
{if((state_val_15909 === 15))
{var inst_15904 = (state_15908[2]);var state_15908__$1 = state_15908;var statearr_15928_15952 = state_15908__$1;(statearr_15928_15952[2] = inst_15904);
(statearr_15928_15952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15909 === 16))
{var inst_15901 = (state_15908[2]);var state_15908__$1 = (function (){var statearr_15929 = state_15908;(statearr_15929[13] = inst_15901);
return statearr_15929;
})();var statearr_15930_15953 = state_15908__$1;(statearr_15930_15953[2] = null);
(statearr_15930_15953[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_15934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15934[0] = state_machine__5548__auto__);
(statearr_15934[1] = 1);
return statearr_15934;
});
var state_machine__5548__auto____1 = (function (state_15908){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15908);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15935){if((e15935 instanceof Object))
{var ex__5551__auto__ = e15935;var statearr_15936_15954 = state_15908;(statearr_15936_15954[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15955 = state_15908;
state_15908 = G__15955;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15908){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15937 = f__5563__auto__.call(null);(statearr_15937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15938);
return statearr_15937;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16063 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16039){var state_val_16040 = (state_16039[1]);if((state_val_16040 === 1))
{var inst_16010 = cljs.core.vec.call(null,chs);var inst_16011 = inst_16010;var state_16039__$1 = (function (){var statearr_16041 = state_16039;(statearr_16041[7] = inst_16011);
return statearr_16041;
})();var statearr_16042_16064 = state_16039__$1;(statearr_16042_16064[2] = null);
(statearr_16042_16064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 2))
{var inst_16011 = (state_16039[7]);var inst_16013 = cljs.core.count.call(null,inst_16011);var inst_16014 = (inst_16013 > 0);var state_16039__$1 = state_16039;if(cljs.core.truth_(inst_16014))
{var statearr_16043_16065 = state_16039__$1;(statearr_16043_16065[1] = 4);
} else
{var statearr_16044_16066 = state_16039__$1;(statearr_16044_16066[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 3))
{var inst_16037 = (state_16039[2]);var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16039__$1,inst_16037);
} else
{if((state_val_16040 === 4))
{var inst_16011 = (state_16039[7]);var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16039__$1,7,inst_16011);
} else
{if((state_val_16040 === 5))
{var inst_16033 = cljs.core.async.close_BANG_.call(null,out);var state_16039__$1 = state_16039;var statearr_16045_16067 = state_16039__$1;(statearr_16045_16067[2] = inst_16033);
(statearr_16045_16067[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 6))
{var inst_16035 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16046_16068 = state_16039__$1;(statearr_16046_16068[2] = inst_16035);
(statearr_16046_16068[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 7))
{var inst_16019 = (state_16039[8]);var inst_16018 = (state_16039[9]);var inst_16018__$1 = (state_16039[2]);var inst_16019__$1 = cljs.core.nth.call(null,inst_16018__$1,0,null);var inst_16020 = cljs.core.nth.call(null,inst_16018__$1,1,null);var inst_16021 = (inst_16019__$1 == null);var state_16039__$1 = (function (){var statearr_16047 = state_16039;(statearr_16047[10] = inst_16020);
(statearr_16047[8] = inst_16019__$1);
(statearr_16047[9] = inst_16018__$1);
return statearr_16047;
})();if(cljs.core.truth_(inst_16021))
{var statearr_16048_16069 = state_16039__$1;(statearr_16048_16069[1] = 8);
} else
{var statearr_16049_16070 = state_16039__$1;(statearr_16049_16070[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 8))
{var inst_16020 = (state_16039[10]);var inst_16019 = (state_16039[8]);var inst_16018 = (state_16039[9]);var inst_16011 = (state_16039[7]);var inst_16023 = (function (){var c = inst_16020;var v = inst_16019;var vec__16016 = inst_16018;var cs = inst_16011;return ((function (c,v,vec__16016,cs,inst_16020,inst_16019,inst_16018,inst_16011,state_val_16040){
return (function (p1__15956_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15956_SHARP_);
});
;})(c,v,vec__16016,cs,inst_16020,inst_16019,inst_16018,inst_16011,state_val_16040))
})();var inst_16024 = cljs.core.filterv.call(null,inst_16023,inst_16011);var inst_16011__$1 = inst_16024;var state_16039__$1 = (function (){var statearr_16050 = state_16039;(statearr_16050[7] = inst_16011__$1);
return statearr_16050;
})();var statearr_16051_16071 = state_16039__$1;(statearr_16051_16071[2] = null);
(statearr_16051_16071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 9))
{var inst_16019 = (state_16039[8]);var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16039__$1,11,out,inst_16019);
} else
{if((state_val_16040 === 10))
{var inst_16031 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16053_16072 = state_16039__$1;(statearr_16053_16072[2] = inst_16031);
(statearr_16053_16072[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 11))
{var inst_16011 = (state_16039[7]);var inst_16028 = (state_16039[2]);var tmp16052 = inst_16011;var inst_16011__$1 = tmp16052;var state_16039__$1 = (function (){var statearr_16054 = state_16039;(statearr_16054[11] = inst_16028);
(statearr_16054[7] = inst_16011__$1);
return statearr_16054;
})();var statearr_16055_16073 = state_16039__$1;(statearr_16055_16073[2] = null);
(statearr_16055_16073[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16059 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16059[0] = state_machine__5548__auto__);
(statearr_16059[1] = 1);
return statearr_16059;
});
var state_machine__5548__auto____1 = (function (state_16039){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16039);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16060){if((e16060 instanceof Object))
{var ex__5551__auto__ = e16060;var statearr_16061_16074 = state_16039;(statearr_16061_16074[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16075 = state_16039;
state_16039 = G__16075;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16039){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16062 = f__5563__auto__.call(null);(statearr_16062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16063);
return statearr_16062;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16168 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16145){var state_val_16146 = (state_16145[1]);if((state_val_16146 === 1))
{var inst_16122 = 0;var state_16145__$1 = (function (){var statearr_16147 = state_16145;(statearr_16147[7] = inst_16122);
return statearr_16147;
})();var statearr_16148_16169 = state_16145__$1;(statearr_16148_16169[2] = null);
(statearr_16148_16169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16146 === 2))
{var inst_16122 = (state_16145[7]);var inst_16124 = (inst_16122 < n);var state_16145__$1 = state_16145;if(cljs.core.truth_(inst_16124))
{var statearr_16149_16170 = state_16145__$1;(statearr_16149_16170[1] = 4);
} else
{var statearr_16150_16171 = state_16145__$1;(statearr_16150_16171[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16146 === 3))
{var inst_16142 = (state_16145[2]);var inst_16143 = cljs.core.async.close_BANG_.call(null,out);var state_16145__$1 = (function (){var statearr_16151 = state_16145;(statearr_16151[8] = inst_16142);
return statearr_16151;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16145__$1,inst_16143);
} else
{if((state_val_16146 === 4))
{var state_16145__$1 = state_16145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16145__$1,7,ch);
} else
{if((state_val_16146 === 5))
{var state_16145__$1 = state_16145;var statearr_16152_16172 = state_16145__$1;(statearr_16152_16172[2] = null);
(statearr_16152_16172[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16146 === 6))
{var inst_16140 = (state_16145[2]);var state_16145__$1 = state_16145;var statearr_16153_16173 = state_16145__$1;(statearr_16153_16173[2] = inst_16140);
(statearr_16153_16173[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16146 === 7))
{var inst_16127 = (state_16145[9]);var inst_16127__$1 = (state_16145[2]);var inst_16128 = (inst_16127__$1 == null);var inst_16129 = cljs.core.not.call(null,inst_16128);var state_16145__$1 = (function (){var statearr_16154 = state_16145;(statearr_16154[9] = inst_16127__$1);
return statearr_16154;
})();if(inst_16129)
{var statearr_16155_16174 = state_16145__$1;(statearr_16155_16174[1] = 8);
} else
{var statearr_16156_16175 = state_16145__$1;(statearr_16156_16175[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16146 === 8))
{var inst_16127 = (state_16145[9]);var state_16145__$1 = state_16145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16145__$1,11,out,inst_16127);
} else
{if((state_val_16146 === 9))
{var state_16145__$1 = state_16145;var statearr_16157_16176 = state_16145__$1;(statearr_16157_16176[2] = null);
(statearr_16157_16176[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16146 === 10))
{var inst_16137 = (state_16145[2]);var state_16145__$1 = state_16145;var statearr_16158_16177 = state_16145__$1;(statearr_16158_16177[2] = inst_16137);
(statearr_16158_16177[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16146 === 11))
{var inst_16122 = (state_16145[7]);var inst_16132 = (state_16145[2]);var inst_16133 = (inst_16122 + 1);var inst_16122__$1 = inst_16133;var state_16145__$1 = (function (){var statearr_16159 = state_16145;(statearr_16159[7] = inst_16122__$1);
(statearr_16159[10] = inst_16132);
return statearr_16159;
})();var statearr_16160_16178 = state_16145__$1;(statearr_16160_16178[2] = null);
(statearr_16160_16178[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16164 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16164[0] = state_machine__5548__auto__);
(statearr_16164[1] = 1);
return statearr_16164;
});
var state_machine__5548__auto____1 = (function (state_16145){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16165){if((e16165 instanceof Object))
{var ex__5551__auto__ = e16165;var statearr_16166_16179 = state_16145;(statearr_16166_16179[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16180 = state_16145;
state_16145 = G__16180;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16145){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16167 = f__5563__auto__.call(null);(statearr_16167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16168);
return statearr_16167;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16277 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16252){var state_val_16253 = (state_16252[1]);if((state_val_16253 === 1))
{var inst_16229 = null;var state_16252__$1 = (function (){var statearr_16254 = state_16252;(statearr_16254[7] = inst_16229);
return statearr_16254;
})();var statearr_16255_16278 = state_16252__$1;(statearr_16255_16278[2] = null);
(statearr_16255_16278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16253 === 2))
{var state_16252__$1 = state_16252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16252__$1,4,ch);
} else
{if((state_val_16253 === 3))
{var inst_16249 = (state_16252[2]);var inst_16250 = cljs.core.async.close_BANG_.call(null,out);var state_16252__$1 = (function (){var statearr_16256 = state_16252;(statearr_16256[8] = inst_16249);
return statearr_16256;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16252__$1,inst_16250);
} else
{if((state_val_16253 === 4))
{var inst_16232 = (state_16252[9]);var inst_16232__$1 = (state_16252[2]);var inst_16233 = (inst_16232__$1 == null);var inst_16234 = cljs.core.not.call(null,inst_16233);var state_16252__$1 = (function (){var statearr_16257 = state_16252;(statearr_16257[9] = inst_16232__$1);
return statearr_16257;
})();if(inst_16234)
{var statearr_16258_16279 = state_16252__$1;(statearr_16258_16279[1] = 5);
} else
{var statearr_16259_16280 = state_16252__$1;(statearr_16259_16280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16253 === 5))
{var inst_16229 = (state_16252[7]);var inst_16232 = (state_16252[9]);var inst_16236 = cljs.core._EQ_.call(null,inst_16232,inst_16229);var state_16252__$1 = state_16252;if(inst_16236)
{var statearr_16260_16281 = state_16252__$1;(statearr_16260_16281[1] = 8);
} else
{var statearr_16261_16282 = state_16252__$1;(statearr_16261_16282[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16253 === 6))
{var state_16252__$1 = state_16252;var statearr_16263_16283 = state_16252__$1;(statearr_16263_16283[2] = null);
(statearr_16263_16283[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16253 === 7))
{var inst_16247 = (state_16252[2]);var state_16252__$1 = state_16252;var statearr_16264_16284 = state_16252__$1;(statearr_16264_16284[2] = inst_16247);
(statearr_16264_16284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16253 === 8))
{var inst_16229 = (state_16252[7]);var tmp16262 = inst_16229;var inst_16229__$1 = tmp16262;var state_16252__$1 = (function (){var statearr_16265 = state_16252;(statearr_16265[7] = inst_16229__$1);
return statearr_16265;
})();var statearr_16266_16285 = state_16252__$1;(statearr_16266_16285[2] = null);
(statearr_16266_16285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16253 === 9))
{var inst_16232 = (state_16252[9]);var state_16252__$1 = state_16252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16252__$1,11,out,inst_16232);
} else
{if((state_val_16253 === 10))
{var inst_16244 = (state_16252[2]);var state_16252__$1 = state_16252;var statearr_16267_16286 = state_16252__$1;(statearr_16267_16286[2] = inst_16244);
(statearr_16267_16286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16253 === 11))
{var inst_16232 = (state_16252[9]);var inst_16241 = (state_16252[2]);var inst_16229 = inst_16232;var state_16252__$1 = (function (){var statearr_16268 = state_16252;(statearr_16268[7] = inst_16229);
(statearr_16268[10] = inst_16241);
return statearr_16268;
})();var statearr_16269_16287 = state_16252__$1;(statearr_16269_16287[2] = null);
(statearr_16269_16287[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16273 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16273[0] = state_machine__5548__auto__);
(statearr_16273[1] = 1);
return statearr_16273;
});
var state_machine__5548__auto____1 = (function (state_16252){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16252);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16274){if((e16274 instanceof Object))
{var ex__5551__auto__ = e16274;var statearr_16275_16288 = state_16252;(statearr_16275_16288[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16289 = state_16252;
state_16252 = G__16289;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16252){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16276 = f__5563__auto__.call(null);(statearr_16276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16277);
return statearr_16276;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16424 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16394){var state_val_16395 = (state_16394[1]);if((state_val_16395 === 1))
{var inst_16357 = (new Array(n));var inst_16358 = inst_16357;var inst_16359 = 0;var state_16394__$1 = (function (){var statearr_16396 = state_16394;(statearr_16396[7] = inst_16359);
(statearr_16396[8] = inst_16358);
return statearr_16396;
})();var statearr_16397_16425 = state_16394__$1;(statearr_16397_16425[2] = null);
(statearr_16397_16425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 2))
{var state_16394__$1 = state_16394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16394__$1,4,ch);
} else
{if((state_val_16395 === 3))
{var inst_16392 = (state_16394[2]);var state_16394__$1 = state_16394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16394__$1,inst_16392);
} else
{if((state_val_16395 === 4))
{var inst_16362 = (state_16394[9]);var inst_16362__$1 = (state_16394[2]);var inst_16363 = (inst_16362__$1 == null);var inst_16364 = cljs.core.not.call(null,inst_16363);var state_16394__$1 = (function (){var statearr_16398 = state_16394;(statearr_16398[9] = inst_16362__$1);
return statearr_16398;
})();if(inst_16364)
{var statearr_16399_16426 = state_16394__$1;(statearr_16399_16426[1] = 5);
} else
{var statearr_16400_16427 = state_16394__$1;(statearr_16400_16427[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 5))
{var inst_16359 = (state_16394[7]);var inst_16358 = (state_16394[8]);var inst_16367 = (state_16394[10]);var inst_16362 = (state_16394[9]);var inst_16366 = (inst_16358[inst_16359] = inst_16362);var inst_16367__$1 = (inst_16359 + 1);var inst_16368 = (inst_16367__$1 < n);var state_16394__$1 = (function (){var statearr_16401 = state_16394;(statearr_16401[10] = inst_16367__$1);
(statearr_16401[11] = inst_16366);
return statearr_16401;
})();if(cljs.core.truth_(inst_16368))
{var statearr_16402_16428 = state_16394__$1;(statearr_16402_16428[1] = 8);
} else
{var statearr_16403_16429 = state_16394__$1;(statearr_16403_16429[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 6))
{var inst_16359 = (state_16394[7]);var inst_16380 = (inst_16359 > 0);var state_16394__$1 = state_16394;if(cljs.core.truth_(inst_16380))
{var statearr_16405_16430 = state_16394__$1;(statearr_16405_16430[1] = 12);
} else
{var statearr_16406_16431 = state_16394__$1;(statearr_16406_16431[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 7))
{var inst_16390 = (state_16394[2]);var state_16394__$1 = state_16394;var statearr_16407_16432 = state_16394__$1;(statearr_16407_16432[2] = inst_16390);
(statearr_16407_16432[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 8))
{var inst_16358 = (state_16394[8]);var inst_16367 = (state_16394[10]);var tmp16404 = inst_16358;var inst_16358__$1 = tmp16404;var inst_16359 = inst_16367;var state_16394__$1 = (function (){var statearr_16408 = state_16394;(statearr_16408[7] = inst_16359);
(statearr_16408[8] = inst_16358__$1);
return statearr_16408;
})();var statearr_16409_16433 = state_16394__$1;(statearr_16409_16433[2] = null);
(statearr_16409_16433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 9))
{var inst_16358 = (state_16394[8]);var inst_16372 = cljs.core.vec.call(null,inst_16358);var state_16394__$1 = state_16394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16394__$1,11,out,inst_16372);
} else
{if((state_val_16395 === 10))
{var inst_16378 = (state_16394[2]);var state_16394__$1 = state_16394;var statearr_16410_16434 = state_16394__$1;(statearr_16410_16434[2] = inst_16378);
(statearr_16410_16434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 11))
{var inst_16374 = (state_16394[2]);var inst_16375 = (new Array(n));var inst_16358 = inst_16375;var inst_16359 = 0;var state_16394__$1 = (function (){var statearr_16411 = state_16394;(statearr_16411[7] = inst_16359);
(statearr_16411[8] = inst_16358);
(statearr_16411[12] = inst_16374);
return statearr_16411;
})();var statearr_16412_16435 = state_16394__$1;(statearr_16412_16435[2] = null);
(statearr_16412_16435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 12))
{var inst_16358 = (state_16394[8]);var inst_16382 = cljs.core.vec.call(null,inst_16358);var state_16394__$1 = state_16394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16394__$1,15,out,inst_16382);
} else
{if((state_val_16395 === 13))
{var state_16394__$1 = state_16394;var statearr_16413_16436 = state_16394__$1;(statearr_16413_16436[2] = null);
(statearr_16413_16436[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 14))
{var inst_16387 = (state_16394[2]);var inst_16388 = cljs.core.async.close_BANG_.call(null,out);var state_16394__$1 = (function (){var statearr_16414 = state_16394;(statearr_16414[13] = inst_16387);
return statearr_16414;
})();var statearr_16415_16437 = state_16394__$1;(statearr_16415_16437[2] = inst_16388);
(statearr_16415_16437[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16395 === 15))
{var inst_16384 = (state_16394[2]);var state_16394__$1 = state_16394;var statearr_16416_16438 = state_16394__$1;(statearr_16416_16438[2] = inst_16384);
(statearr_16416_16438[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16420[0] = state_machine__5548__auto__);
(statearr_16420[1] = 1);
return statearr_16420;
});
var state_machine__5548__auto____1 = (function (state_16394){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16394);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16421){if((e16421 instanceof Object))
{var ex__5551__auto__ = e16421;var statearr_16422_16439 = state_16394;(statearr_16422_16439[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16394);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16440 = state_16394;
state_16394 = G__16440;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16394){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16423 = f__5563__auto__.call(null);(statearr_16423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16424);
return statearr_16423;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16583 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16553){var state_val_16554 = (state_16553[1]);if((state_val_16554 === 1))
{var inst_16512 = [];var inst_16513 = inst_16512;var inst_16514 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16553__$1 = (function (){var statearr_16555 = state_16553;(statearr_16555[7] = inst_16514);
(statearr_16555[8] = inst_16513);
return statearr_16555;
})();var statearr_16556_16584 = state_16553__$1;(statearr_16556_16584[2] = null);
(statearr_16556_16584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 2))
{var state_16553__$1 = state_16553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16553__$1,4,ch);
} else
{if((state_val_16554 === 3))
{var inst_16551 = (state_16553[2]);var state_16553__$1 = state_16553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16553__$1,inst_16551);
} else
{if((state_val_16554 === 4))
{var inst_16517 = (state_16553[9]);var inst_16517__$1 = (state_16553[2]);var inst_16518 = (inst_16517__$1 == null);var inst_16519 = cljs.core.not.call(null,inst_16518);var state_16553__$1 = (function (){var statearr_16557 = state_16553;(statearr_16557[9] = inst_16517__$1);
return statearr_16557;
})();if(inst_16519)
{var statearr_16558_16585 = state_16553__$1;(statearr_16558_16585[1] = 5);
} else
{var statearr_16559_16586 = state_16553__$1;(statearr_16559_16586[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 5))
{var inst_16514 = (state_16553[7]);var inst_16521 = (state_16553[10]);var inst_16517 = (state_16553[9]);var inst_16521__$1 = f.call(null,inst_16517);var inst_16522 = cljs.core._EQ_.call(null,inst_16521__$1,inst_16514);var inst_16523 = cljs.core.keyword_identical_QMARK_.call(null,inst_16514,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16524 = (inst_16522) || (inst_16523);var state_16553__$1 = (function (){var statearr_16560 = state_16553;(statearr_16560[10] = inst_16521__$1);
return statearr_16560;
})();if(cljs.core.truth_(inst_16524))
{var statearr_16561_16587 = state_16553__$1;(statearr_16561_16587[1] = 8);
} else
{var statearr_16562_16588 = state_16553__$1;(statearr_16562_16588[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 6))
{var inst_16513 = (state_16553[8]);var inst_16538 = inst_16513.length;var inst_16539 = (inst_16538 > 0);var state_16553__$1 = state_16553;if(cljs.core.truth_(inst_16539))
{var statearr_16564_16589 = state_16553__$1;(statearr_16564_16589[1] = 12);
} else
{var statearr_16565_16590 = state_16553__$1;(statearr_16565_16590[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 7))
{var inst_16549 = (state_16553[2]);var state_16553__$1 = state_16553;var statearr_16566_16591 = state_16553__$1;(statearr_16566_16591[2] = inst_16549);
(statearr_16566_16591[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 8))
{var inst_16513 = (state_16553[8]);var inst_16521 = (state_16553[10]);var inst_16517 = (state_16553[9]);var inst_16526 = inst_16513.push(inst_16517);var tmp16563 = inst_16513;var inst_16513__$1 = tmp16563;var inst_16514 = inst_16521;var state_16553__$1 = (function (){var statearr_16567 = state_16553;(statearr_16567[7] = inst_16514);
(statearr_16567[8] = inst_16513__$1);
(statearr_16567[11] = inst_16526);
return statearr_16567;
})();var statearr_16568_16592 = state_16553__$1;(statearr_16568_16592[2] = null);
(statearr_16568_16592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 9))
{var inst_16513 = (state_16553[8]);var inst_16529 = cljs.core.vec.call(null,inst_16513);var state_16553__$1 = state_16553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16553__$1,11,out,inst_16529);
} else
{if((state_val_16554 === 10))
{var inst_16536 = (state_16553[2]);var state_16553__$1 = state_16553;var statearr_16569_16593 = state_16553__$1;(statearr_16569_16593[2] = inst_16536);
(statearr_16569_16593[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 11))
{var inst_16521 = (state_16553[10]);var inst_16517 = (state_16553[9]);var inst_16531 = (state_16553[2]);var inst_16532 = [];var inst_16533 = inst_16532.push(inst_16517);var inst_16513 = inst_16532;var inst_16514 = inst_16521;var state_16553__$1 = (function (){var statearr_16570 = state_16553;(statearr_16570[7] = inst_16514);
(statearr_16570[8] = inst_16513);
(statearr_16570[12] = inst_16533);
(statearr_16570[13] = inst_16531);
return statearr_16570;
})();var statearr_16571_16594 = state_16553__$1;(statearr_16571_16594[2] = null);
(statearr_16571_16594[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 12))
{var inst_16513 = (state_16553[8]);var inst_16541 = cljs.core.vec.call(null,inst_16513);var state_16553__$1 = state_16553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16553__$1,15,out,inst_16541);
} else
{if((state_val_16554 === 13))
{var state_16553__$1 = state_16553;var statearr_16572_16595 = state_16553__$1;(statearr_16572_16595[2] = null);
(statearr_16572_16595[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 14))
{var inst_16546 = (state_16553[2]);var inst_16547 = cljs.core.async.close_BANG_.call(null,out);var state_16553__$1 = (function (){var statearr_16573 = state_16553;(statearr_16573[14] = inst_16546);
return statearr_16573;
})();var statearr_16574_16596 = state_16553__$1;(statearr_16574_16596[2] = inst_16547);
(statearr_16574_16596[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16554 === 15))
{var inst_16543 = (state_16553[2]);var state_16553__$1 = state_16553;var statearr_16575_16597 = state_16553__$1;(statearr_16575_16597[2] = inst_16543);
(statearr_16575_16597[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16579[0] = state_machine__5548__auto__);
(statearr_16579[1] = 1);
return statearr_16579;
});
var state_machine__5548__auto____1 = (function (state_16553){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16580){if((e16580 instanceof Object))
{var ex__5551__auto__ = e16580;var statearr_16581_16598 = state_16553;(statearr_16581_16598[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16599 = state_16553;
state_16553 = G__16599;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16553){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16582 = f__5563__auto__.call(null);(statearr_16582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16583);
return statearr_16582;
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
