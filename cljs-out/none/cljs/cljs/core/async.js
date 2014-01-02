// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16386 = (function (f,fn_handler,meta16387){
this.f = f;
this.fn_handler = fn_handler;
this.meta16387 = meta16387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16386.cljs$lang$type = true;
cljs.core.async.t16386.cljs$lang$ctorStr = "cljs.core.async/t16386";
cljs.core.async.t16386.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16386");
});
cljs.core.async.t16386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16388){var self__ = this;
var _16388__$1 = this;return self__.meta16387;
});
cljs.core.async.t16386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16388,meta16387__$1){var self__ = this;
var _16388__$1 = this;return (new cljs.core.async.t16386(self__.f,self__.fn_handler,meta16387__$1));
});
cljs.core.async.__GT_t16386 = (function __GT_t16386(f__$1,fn_handler__$1,meta16387){return (new cljs.core.async.t16386(f__$1,fn_handler__$1,meta16387));
});
}
return (new cljs.core.async.t16386(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16390 = buff;if(G__16390)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16390.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16390.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16390);
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
{var val_16391 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16391);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_16391);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___16392 = n;var x_16393 = 0;while(true){
if((x_16393 < n__4114__auto___16392))
{(a[x_16393] = 0);
{
var G__16394 = (x_16393 + 1);
x_16393 = G__16394;
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
var G__16395 = (i + 1);
i = G__16395;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16399 = (function (flag,alt_flag,meta16400){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16400 = meta16400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16399.cljs$lang$type = true;
cljs.core.async.t16399.cljs$lang$ctorStr = "cljs.core.async/t16399";
cljs.core.async.t16399.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16399");
});
cljs.core.async.t16399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t16399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t16399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16401){var self__ = this;
var _16401__$1 = this;return self__.meta16400;
});
cljs.core.async.t16399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16401,meta16400__$1){var self__ = this;
var _16401__$1 = this;return (new cljs.core.async.t16399(self__.flag,self__.alt_flag,meta16400__$1));
});
cljs.core.async.__GT_t16399 = (function __GT_t16399(flag__$1,alt_flag__$1,meta16400){return (new cljs.core.async.t16399(flag__$1,alt_flag__$1,meta16400));
});
}
return (new cljs.core.async.t16399(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16405 = (function (cb,flag,alt_handler,meta16406){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16406 = meta16406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16405.cljs$lang$type = true;
cljs.core.async.t16405.cljs$lang$ctorStr = "cljs.core.async/t16405";
cljs.core.async.t16405.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16405");
});
cljs.core.async.t16405.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16407){var self__ = this;
var _16407__$1 = this;return self__.meta16406;
});
cljs.core.async.t16405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16407,meta16406__$1){var self__ = this;
var _16407__$1 = this;return (new cljs.core.async.t16405(self__.cb,self__.flag,self__.alt_handler,meta16406__$1));
});
cljs.core.async.__GT_t16405 = (function __GT_t16405(cb__$1,flag__$1,alt_handler__$1,meta16406){return (new cljs.core.async.t16405(cb__$1,flag__$1,alt_handler__$1,meta16406));
});
}
return (new cljs.core.async.t16405(cb,flag,alt_handler,null));
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
return (function (p1__16408_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16408_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16409 = (i + 1);
i = G__16409;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3279__auto__;
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
var alts_BANG___delegate = function (ports,p__16410){var map__16412 = p__16410;var map__16412__$1 = ((cljs.core.seq_QMARK_.call(null,map__16412))?cljs.core.apply.call(null,cljs.core.hash_map,map__16412):map__16412);var opts = map__16412__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16410 = null;if (arguments.length > 1) {
  p__16410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16410);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16413){
var ports = cljs.core.first(arglist__16413);
var p__16410 = cljs.core.rest(arglist__16413);
return alts_BANG___delegate(ports,p__16410);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16421 = (function (ch,f,map_LT_,meta16422){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16422 = meta16422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16421.cljs$lang$type = true;
cljs.core.async.t16421.cljs$lang$ctorStr = "cljs.core.async/t16421";
cljs.core.async.t16421.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16421");
});
cljs.core.async.t16421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t16421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16424 = (function (fn1,_,meta16422,ch,f,map_LT_,meta16425){
this.fn1 = fn1;
this._ = _;
this.meta16422 = meta16422;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16425 = meta16425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16424.cljs$lang$type = true;
cljs.core.async.t16424.cljs$lang$ctorStr = "cljs.core.async/t16424";
cljs.core.async.t16424.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16424");
});
cljs.core.async.t16424.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t16424.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t16424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__16414_SHARP_){return f1.call(null,(((p1__16414_SHARP_ == null))?null:self__.f.call(null,p1__16414_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t16424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16426){var self__ = this;
var _16426__$1 = this;return self__.meta16425;
});
cljs.core.async.t16424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16426,meta16425__$1){var self__ = this;
var _16426__$1 = this;return (new cljs.core.async.t16424(self__.fn1,self__._,self__.meta16422,self__.ch,self__.f,self__.map_LT_,meta16425__$1));
});
cljs.core.async.__GT_t16424 = (function __GT_t16424(fn1__$1,___$2,meta16422__$1,ch__$2,f__$2,map_LT___$2,meta16425){return (new cljs.core.async.t16424(fn1__$1,___$2,meta16422__$1,ch__$2,f__$2,map_LT___$2,meta16425));
});
}
return (new cljs.core.async.t16424(fn1,___$1,self__.meta16422,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16421.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16423){var self__ = this;
var _16423__$1 = this;return self__.meta16422;
});
cljs.core.async.t16421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16423,meta16422__$1){var self__ = this;
var _16423__$1 = this;return (new cljs.core.async.t16421(self__.ch,self__.f,self__.map_LT_,meta16422__$1));
});
cljs.core.async.__GT_t16421 = (function __GT_t16421(ch__$1,f__$1,map_LT___$1,meta16422){return (new cljs.core.async.t16421(ch__$1,f__$1,map_LT___$1,meta16422));
});
}
return (new cljs.core.async.t16421(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16430 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16430 = (function (ch,f,map_GT_,meta16431){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16431 = meta16431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16430.cljs$lang$type = true;
cljs.core.async.t16430.cljs$lang$ctorStr = "cljs.core.async/t16430";
cljs.core.async.t16430.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16430");
});
cljs.core.async.t16430.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t16430.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16430.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16432){var self__ = this;
var _16432__$1 = this;return self__.meta16431;
});
cljs.core.async.t16430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16432,meta16431__$1){var self__ = this;
var _16432__$1 = this;return (new cljs.core.async.t16430(self__.ch,self__.f,self__.map_GT_,meta16431__$1));
});
cljs.core.async.__GT_t16430 = (function __GT_t16430(ch__$1,f__$1,map_GT___$1,meta16431){return (new cljs.core.async.t16430(ch__$1,f__$1,map_GT___$1,meta16431));
});
}
return (new cljs.core.async.t16430(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16436 = (function (ch,p,filter_GT_,meta16437){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16437 = meta16437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16436.cljs$lang$type = true;
cljs.core.async.t16436.cljs$lang$ctorStr = "cljs.core.async/t16436";
cljs.core.async.t16436.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16436");
});
cljs.core.async.t16436.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t16436.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16436.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16438){var self__ = this;
var _16438__$1 = this;return self__.meta16437;
});
cljs.core.async.t16436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16438,meta16437__$1){var self__ = this;
var _16438__$1 = this;return (new cljs.core.async.t16436(self__.ch,self__.p,self__.filter_GT_,meta16437__$1));
});
cljs.core.async.__GT_t16436 = (function __GT_t16436(ch__$1,p__$1,filter_GT___$1,meta16437){return (new cljs.core.async.t16436(ch__$1,p__$1,filter_GT___$1,meta16437));
});
}
return (new cljs.core.async.t16436(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___16521 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16500){var state_val_16501 = (state_16500[1]);if((state_val_16501 === 1))
{var state_16500__$1 = state_16500;var statearr_16502_16522 = state_16500__$1;(statearr_16502_16522[2] = null);
(statearr_16502_16522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16501 === 2))
{var state_16500__$1 = state_16500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16500__$1,4,ch);
} else
{if((state_val_16501 === 3))
{var inst_16498 = (state_16500[2]);var state_16500__$1 = state_16500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16500__$1,inst_16498);
} else
{if((state_val_16501 === 4))
{var inst_16482 = (state_16500[7]);var inst_16482__$1 = (state_16500[2]);var inst_16483 = (inst_16482__$1 == null);var state_16500__$1 = (function (){var statearr_16503 = state_16500;(statearr_16503[7] = inst_16482__$1);
return statearr_16503;
})();if(cljs.core.truth_(inst_16483))
{var statearr_16504_16523 = state_16500__$1;(statearr_16504_16523[1] = 5);
} else
{var statearr_16505_16524 = state_16500__$1;(statearr_16505_16524[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16501 === 5))
{var inst_16485 = cljs.core.async.close_BANG_.call(null,out);var state_16500__$1 = state_16500;var statearr_16506_16525 = state_16500__$1;(statearr_16506_16525[2] = inst_16485);
(statearr_16506_16525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16501 === 6))
{var inst_16482 = (state_16500[7]);var inst_16487 = p.call(null,inst_16482);var state_16500__$1 = state_16500;if(cljs.core.truth_(inst_16487))
{var statearr_16507_16526 = state_16500__$1;(statearr_16507_16526[1] = 8);
} else
{var statearr_16508_16527 = state_16500__$1;(statearr_16508_16527[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16501 === 7))
{var inst_16496 = (state_16500[2]);var state_16500__$1 = state_16500;var statearr_16509_16528 = state_16500__$1;(statearr_16509_16528[2] = inst_16496);
(statearr_16509_16528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16501 === 8))
{var inst_16482 = (state_16500[7]);var state_16500__$1 = state_16500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16500__$1,11,out,inst_16482);
} else
{if((state_val_16501 === 9))
{var state_16500__$1 = state_16500;var statearr_16510_16529 = state_16500__$1;(statearr_16510_16529[2] = null);
(statearr_16510_16529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16501 === 10))
{var inst_16493 = (state_16500[2]);var state_16500__$1 = (function (){var statearr_16511 = state_16500;(statearr_16511[8] = inst_16493);
return statearr_16511;
})();var statearr_16512_16530 = state_16500__$1;(statearr_16512_16530[2] = null);
(statearr_16512_16530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16501 === 11))
{var inst_16490 = (state_16500[2]);var state_16500__$1 = state_16500;var statearr_16513_16531 = state_16500__$1;(statearr_16513_16531[2] = inst_16490);
(statearr_16513_16531[1] = 10);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16517 = (new Array(9));(statearr_16517[0] = state_machine__5792__auto__);
(statearr_16517[1] = 1);
return statearr_16517;
});
var state_machine__5792__auto____1 = (function (state_16500){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_16500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16518){if((e16518 instanceof Object))
{var ex__5795__auto__ = e16518;var statearr_16519_16532 = state_16500;(statearr_16519_16532[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16533 = state_16500;
state_16500 = G__16533;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16500){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16520 = f__5862__auto__.call(null);(statearr_16520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16521);
return statearr_16520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16685){var state_val_16686 = (state_16685[1]);if((state_val_16686 === 1))
{var state_16685__$1 = state_16685;var statearr_16687_16724 = state_16685__$1;(statearr_16687_16724[2] = null);
(statearr_16687_16724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 2))
{var state_16685__$1 = state_16685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16685__$1,4,in$);
} else
{if((state_val_16686 === 3))
{var inst_16683 = (state_16685[2]);var state_16685__$1 = state_16685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16685__$1,inst_16683);
} else
{if((state_val_16686 === 4))
{var inst_16631 = (state_16685[7]);var inst_16631__$1 = (state_16685[2]);var inst_16632 = (inst_16631__$1 == null);var state_16685__$1 = (function (){var statearr_16688 = state_16685;(statearr_16688[7] = inst_16631__$1);
return statearr_16688;
})();if(cljs.core.truth_(inst_16632))
{var statearr_16689_16725 = state_16685__$1;(statearr_16689_16725[1] = 5);
} else
{var statearr_16690_16726 = state_16685__$1;(statearr_16690_16726[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 5))
{var inst_16634 = cljs.core.async.close_BANG_.call(null,out);var state_16685__$1 = state_16685;var statearr_16691_16727 = state_16685__$1;(statearr_16691_16727[2] = inst_16634);
(statearr_16691_16727[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 6))
{var inst_16631 = (state_16685[7]);var inst_16636 = f.call(null,inst_16631);var inst_16641 = cljs.core.seq.call(null,inst_16636);var inst_16642 = inst_16641;var inst_16643 = null;var inst_16644 = 0;var inst_16645 = 0;var state_16685__$1 = (function (){var statearr_16692 = state_16685;(statearr_16692[8] = inst_16642);
(statearr_16692[9] = inst_16643);
(statearr_16692[10] = inst_16645);
(statearr_16692[11] = inst_16644);
return statearr_16692;
})();var statearr_16693_16728 = state_16685__$1;(statearr_16693_16728[2] = null);
(statearr_16693_16728[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 7))
{var inst_16681 = (state_16685[2]);var state_16685__$1 = state_16685;var statearr_16694_16729 = state_16685__$1;(statearr_16694_16729[2] = inst_16681);
(statearr_16694_16729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 8))
{var inst_16645 = (state_16685[10]);var inst_16644 = (state_16685[11]);var inst_16647 = (inst_16645 < inst_16644);var inst_16648 = inst_16647;var state_16685__$1 = state_16685;if(cljs.core.truth_(inst_16648))
{var statearr_16695_16730 = state_16685__$1;(statearr_16695_16730[1] = 10);
} else
{var statearr_16696_16731 = state_16685__$1;(statearr_16696_16731[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 9))
{var inst_16678 = (state_16685[2]);var state_16685__$1 = (function (){var statearr_16697 = state_16685;(statearr_16697[12] = inst_16678);
return statearr_16697;
})();var statearr_16698_16732 = state_16685__$1;(statearr_16698_16732[2] = null);
(statearr_16698_16732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 10))
{var inst_16643 = (state_16685[9]);var inst_16645 = (state_16685[10]);var inst_16650 = cljs.core._nth.call(null,inst_16643,inst_16645);var state_16685__$1 = state_16685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16685__$1,13,out,inst_16650);
} else
{if((state_val_16686 === 11))
{var inst_16642 = (state_16685[8]);var inst_16656 = (state_16685[13]);var inst_16656__$1 = cljs.core.seq.call(null,inst_16642);var state_16685__$1 = (function (){var statearr_16702 = state_16685;(statearr_16702[13] = inst_16656__$1);
return statearr_16702;
})();if(inst_16656__$1)
{var statearr_16703_16733 = state_16685__$1;(statearr_16703_16733[1] = 14);
} else
{var statearr_16704_16734 = state_16685__$1;(statearr_16704_16734[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 12))
{var inst_16676 = (state_16685[2]);var state_16685__$1 = state_16685;var statearr_16705_16735 = state_16685__$1;(statearr_16705_16735[2] = inst_16676);
(statearr_16705_16735[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 13))
{var inst_16642 = (state_16685[8]);var inst_16643 = (state_16685[9]);var inst_16645 = (state_16685[10]);var inst_16644 = (state_16685[11]);var inst_16652 = (state_16685[2]);var inst_16653 = (inst_16645 + 1);var tmp16699 = inst_16642;var tmp16700 = inst_16643;var tmp16701 = inst_16644;var inst_16642__$1 = tmp16699;var inst_16643__$1 = tmp16700;var inst_16644__$1 = tmp16701;var inst_16645__$1 = inst_16653;var state_16685__$1 = (function (){var statearr_16706 = state_16685;(statearr_16706[8] = inst_16642__$1);
(statearr_16706[9] = inst_16643__$1);
(statearr_16706[14] = inst_16652);
(statearr_16706[10] = inst_16645__$1);
(statearr_16706[11] = inst_16644__$1);
return statearr_16706;
})();var statearr_16707_16736 = state_16685__$1;(statearr_16707_16736[2] = null);
(statearr_16707_16736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 14))
{var inst_16656 = (state_16685[13]);var inst_16658 = cljs.core.chunked_seq_QMARK_.call(null,inst_16656);var state_16685__$1 = state_16685;if(inst_16658)
{var statearr_16708_16737 = state_16685__$1;(statearr_16708_16737[1] = 17);
} else
{var statearr_16709_16738 = state_16685__$1;(statearr_16709_16738[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 15))
{var state_16685__$1 = state_16685;var statearr_16710_16739 = state_16685__$1;(statearr_16710_16739[2] = null);
(statearr_16710_16739[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 16))
{var inst_16674 = (state_16685[2]);var state_16685__$1 = state_16685;var statearr_16711_16740 = state_16685__$1;(statearr_16711_16740[2] = inst_16674);
(statearr_16711_16740[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 17))
{var inst_16656 = (state_16685[13]);var inst_16660 = cljs.core.chunk_first.call(null,inst_16656);var inst_16661 = cljs.core.chunk_rest.call(null,inst_16656);var inst_16662 = cljs.core.count.call(null,inst_16660);var inst_16642 = inst_16661;var inst_16643 = inst_16660;var inst_16644 = inst_16662;var inst_16645 = 0;var state_16685__$1 = (function (){var statearr_16712 = state_16685;(statearr_16712[8] = inst_16642);
(statearr_16712[9] = inst_16643);
(statearr_16712[10] = inst_16645);
(statearr_16712[11] = inst_16644);
return statearr_16712;
})();var statearr_16713_16741 = state_16685__$1;(statearr_16713_16741[2] = null);
(statearr_16713_16741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 18))
{var inst_16656 = (state_16685[13]);var inst_16665 = cljs.core.first.call(null,inst_16656);var state_16685__$1 = state_16685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16685__$1,20,out,inst_16665);
} else
{if((state_val_16686 === 19))
{var inst_16671 = (state_16685[2]);var state_16685__$1 = state_16685;var statearr_16714_16742 = state_16685__$1;(statearr_16714_16742[2] = inst_16671);
(statearr_16714_16742[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 20))
{var inst_16656 = (state_16685[13]);var inst_16667 = (state_16685[2]);var inst_16668 = cljs.core.next.call(null,inst_16656);var inst_16642 = inst_16668;var inst_16643 = null;var inst_16644 = 0;var inst_16645 = 0;var state_16685__$1 = (function (){var statearr_16715 = state_16685;(statearr_16715[15] = inst_16667);
(statearr_16715[8] = inst_16642);
(statearr_16715[9] = inst_16643);
(statearr_16715[10] = inst_16645);
(statearr_16715[11] = inst_16644);
return statearr_16715;
})();var statearr_16716_16743 = state_16685__$1;(statearr_16716_16743[2] = null);
(statearr_16716_16743[1] = 8);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16720 = (new Array(16));(statearr_16720[0] = state_machine__5792__auto__);
(statearr_16720[1] = 1);
return statearr_16720;
});
var state_machine__5792__auto____1 = (function (state_16685){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_16685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16721){if((e16721 instanceof Object))
{var ex__5795__auto__ = e16721;var statearr_16722_16744 = state_16685;(statearr_16722_16744[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16745 = state_16685;
state_16685 = G__16745;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16685){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16723 = f__5862__auto__.call(null);(statearr_16723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_16723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5861__auto___16826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16805){var state_val_16806 = (state_16805[1]);if((state_val_16806 === 1))
{var state_16805__$1 = state_16805;var statearr_16807_16827 = state_16805__$1;(statearr_16807_16827[2] = null);
(statearr_16807_16827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16806 === 2))
{var state_16805__$1 = state_16805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16805__$1,4,from);
} else
{if((state_val_16806 === 3))
{var inst_16803 = (state_16805[2]);var state_16805__$1 = state_16805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16805__$1,inst_16803);
} else
{if((state_val_16806 === 4))
{var inst_16788 = (state_16805[7]);var inst_16788__$1 = (state_16805[2]);var inst_16789 = (inst_16788__$1 == null);var state_16805__$1 = (function (){var statearr_16808 = state_16805;(statearr_16808[7] = inst_16788__$1);
return statearr_16808;
})();if(cljs.core.truth_(inst_16789))
{var statearr_16809_16828 = state_16805__$1;(statearr_16809_16828[1] = 5);
} else
{var statearr_16810_16829 = state_16805__$1;(statearr_16810_16829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16806 === 5))
{var state_16805__$1 = state_16805;if(cljs.core.truth_(close_QMARK_))
{var statearr_16811_16830 = state_16805__$1;(statearr_16811_16830[1] = 8);
} else
{var statearr_16812_16831 = state_16805__$1;(statearr_16812_16831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16806 === 6))
{var inst_16788 = (state_16805[7]);var state_16805__$1 = state_16805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16805__$1,11,to,inst_16788);
} else
{if((state_val_16806 === 7))
{var inst_16801 = (state_16805[2]);var state_16805__$1 = state_16805;var statearr_16813_16832 = state_16805__$1;(statearr_16813_16832[2] = inst_16801);
(statearr_16813_16832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16806 === 8))
{var inst_16792 = cljs.core.async.close_BANG_.call(null,to);var state_16805__$1 = state_16805;var statearr_16814_16833 = state_16805__$1;(statearr_16814_16833[2] = inst_16792);
(statearr_16814_16833[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16806 === 9))
{var state_16805__$1 = state_16805;var statearr_16815_16834 = state_16805__$1;(statearr_16815_16834[2] = null);
(statearr_16815_16834[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16806 === 10))
{var inst_16795 = (state_16805[2]);var state_16805__$1 = state_16805;var statearr_16816_16835 = state_16805__$1;(statearr_16816_16835[2] = inst_16795);
(statearr_16816_16835[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16806 === 11))
{var inst_16798 = (state_16805[2]);var state_16805__$1 = (function (){var statearr_16817 = state_16805;(statearr_16817[8] = inst_16798);
return statearr_16817;
})();var statearr_16818_16836 = state_16805__$1;(statearr_16818_16836[2] = null);
(statearr_16818_16836[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16822 = (new Array(9));(statearr_16822[0] = state_machine__5792__auto__);
(statearr_16822[1] = 1);
return statearr_16822;
});
var state_machine__5792__auto____1 = (function (state_16805){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_16805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16823){if((e16823 instanceof Object))
{var ex__5795__auto__ = e16823;var statearr_16824_16837 = state_16805;(statearr_16824_16837[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16838 = state_16805;
state_16805 = G__16838;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16805){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16825 = f__5862__auto__.call(null);(statearr_16825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16826);
return statearr_16825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5861__auto___16925 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16903){var state_val_16904 = (state_16903[1]);if((state_val_16904 === 1))
{var state_16903__$1 = state_16903;var statearr_16905_16926 = state_16903__$1;(statearr_16905_16926[2] = null);
(statearr_16905_16926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 2))
{var state_16903__$1 = state_16903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16903__$1,4,ch);
} else
{if((state_val_16904 === 3))
{var inst_16901 = (state_16903[2]);var state_16903__$1 = state_16903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16903__$1,inst_16901);
} else
{if((state_val_16904 === 4))
{var inst_16884 = (state_16903[7]);var inst_16884__$1 = (state_16903[2]);var inst_16885 = (inst_16884__$1 == null);var state_16903__$1 = (function (){var statearr_16906 = state_16903;(statearr_16906[7] = inst_16884__$1);
return statearr_16906;
})();if(cljs.core.truth_(inst_16885))
{var statearr_16907_16927 = state_16903__$1;(statearr_16907_16927[1] = 5);
} else
{var statearr_16908_16928 = state_16903__$1;(statearr_16908_16928[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 5))
{var inst_16887 = cljs.core.async.close_BANG_.call(null,tc);var inst_16888 = cljs.core.async.close_BANG_.call(null,fc);var state_16903__$1 = (function (){var statearr_16909 = state_16903;(statearr_16909[8] = inst_16887);
return statearr_16909;
})();var statearr_16910_16929 = state_16903__$1;(statearr_16910_16929[2] = inst_16888);
(statearr_16910_16929[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 6))
{var inst_16884 = (state_16903[7]);var inst_16890 = p.call(null,inst_16884);var state_16903__$1 = state_16903;if(cljs.core.truth_(inst_16890))
{var statearr_16911_16930 = state_16903__$1;(statearr_16911_16930[1] = 9);
} else
{var statearr_16912_16931 = state_16903__$1;(statearr_16912_16931[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 7))
{var inst_16899 = (state_16903[2]);var state_16903__$1 = state_16903;var statearr_16913_16932 = state_16903__$1;(statearr_16913_16932[2] = inst_16899);
(statearr_16913_16932[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 8))
{var inst_16896 = (state_16903[2]);var state_16903__$1 = (function (){var statearr_16914 = state_16903;(statearr_16914[9] = inst_16896);
return statearr_16914;
})();var statearr_16915_16933 = state_16903__$1;(statearr_16915_16933[2] = null);
(statearr_16915_16933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 9))
{var state_16903__$1 = state_16903;var statearr_16916_16934 = state_16903__$1;(statearr_16916_16934[2] = tc);
(statearr_16916_16934[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 10))
{var state_16903__$1 = state_16903;var statearr_16917_16935 = state_16903__$1;(statearr_16917_16935[2] = fc);
(statearr_16917_16935[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16904 === 11))
{var inst_16884 = (state_16903[7]);var inst_16894 = (state_16903[2]);var state_16903__$1 = state_16903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16903__$1,8,inst_16894,inst_16884);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16921 = (new Array(10));(statearr_16921[0] = state_machine__5792__auto__);
(statearr_16921[1] = 1);
return statearr_16921;
});
var state_machine__5792__auto____1 = (function (state_16903){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_16903);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16922){if((e16922 instanceof Object))
{var ex__5795__auto__ = e16922;var statearr_16923_16936 = state_16903;(statearr_16923_16936[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16937 = state_16903;
state_16903 = G__16937;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16903){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16924 = f__5862__auto__.call(null);(statearr_16924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16925);
return statearr_16924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16984){var state_val_16985 = (state_16984[1]);if((state_val_16985 === 7))
{var inst_16980 = (state_16984[2]);var state_16984__$1 = state_16984;var statearr_16986_17002 = state_16984__$1;(statearr_16986_17002[2] = inst_16980);
(statearr_16986_17002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16985 === 6))
{var inst_16973 = (state_16984[7]);var inst_16970 = (state_16984[8]);var inst_16977 = f.call(null,inst_16970,inst_16973);var inst_16970__$1 = inst_16977;var state_16984__$1 = (function (){var statearr_16987 = state_16984;(statearr_16987[8] = inst_16970__$1);
return statearr_16987;
})();var statearr_16988_17003 = state_16984__$1;(statearr_16988_17003[2] = null);
(statearr_16988_17003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16985 === 5))
{var inst_16970 = (state_16984[8]);var state_16984__$1 = state_16984;var statearr_16989_17004 = state_16984__$1;(statearr_16989_17004[2] = inst_16970);
(statearr_16989_17004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16985 === 4))
{var inst_16973 = (state_16984[7]);var inst_16973__$1 = (state_16984[2]);var inst_16974 = (inst_16973__$1 == null);var state_16984__$1 = (function (){var statearr_16990 = state_16984;(statearr_16990[7] = inst_16973__$1);
return statearr_16990;
})();if(cljs.core.truth_(inst_16974))
{var statearr_16991_17005 = state_16984__$1;(statearr_16991_17005[1] = 5);
} else
{var statearr_16992_17006 = state_16984__$1;(statearr_16992_17006[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16985 === 3))
{var inst_16982 = (state_16984[2]);var state_16984__$1 = state_16984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16984__$1,inst_16982);
} else
{if((state_val_16985 === 2))
{var state_16984__$1 = state_16984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16984__$1,4,ch);
} else
{if((state_val_16985 === 1))
{var inst_16970 = init;var state_16984__$1 = (function (){var statearr_16993 = state_16984;(statearr_16993[8] = inst_16970);
return statearr_16993;
})();var statearr_16994_17007 = state_16984__$1;(statearr_16994_17007[2] = null);
(statearr_16994_17007[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_16998 = (new Array(9));(statearr_16998[0] = state_machine__5792__auto__);
(statearr_16998[1] = 1);
return statearr_16998;
});
var state_machine__5792__auto____1 = (function (state_16984){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_16984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16999){if((e16999 instanceof Object))
{var ex__5795__auto__ = e16999;var statearr_17000_17008 = state_16984;(statearr_17000_17008[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17009 = state_16984;
state_16984 = G__17009;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16984){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17001 = f__5862__auto__.call(null);(statearr_17001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_17001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17071){var state_val_17072 = (state_17071[1]);if((state_val_17072 === 1))
{var inst_17051 = cljs.core.seq.call(null,coll);var inst_17052 = inst_17051;var state_17071__$1 = (function (){var statearr_17073 = state_17071;(statearr_17073[7] = inst_17052);
return statearr_17073;
})();var statearr_17074_17092 = state_17071__$1;(statearr_17074_17092[2] = null);
(statearr_17074_17092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17072 === 2))
{var inst_17052 = (state_17071[7]);var state_17071__$1 = state_17071;if(cljs.core.truth_(inst_17052))
{var statearr_17075_17093 = state_17071__$1;(statearr_17075_17093[1] = 4);
} else
{var statearr_17076_17094 = state_17071__$1;(statearr_17076_17094[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17072 === 3))
{var inst_17069 = (state_17071[2]);var state_17071__$1 = state_17071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17071__$1,inst_17069);
} else
{if((state_val_17072 === 4))
{var inst_17052 = (state_17071[7]);var inst_17055 = cljs.core.first.call(null,inst_17052);var state_17071__$1 = state_17071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17071__$1,7,ch,inst_17055);
} else
{if((state_val_17072 === 5))
{var state_17071__$1 = state_17071;if(cljs.core.truth_(close_QMARK_))
{var statearr_17077_17095 = state_17071__$1;(statearr_17077_17095[1] = 8);
} else
{var statearr_17078_17096 = state_17071__$1;(statearr_17078_17096[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17072 === 6))
{var inst_17067 = (state_17071[2]);var state_17071__$1 = state_17071;var statearr_17079_17097 = state_17071__$1;(statearr_17079_17097[2] = inst_17067);
(statearr_17079_17097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17072 === 7))
{var inst_17052 = (state_17071[7]);var inst_17057 = (state_17071[2]);var inst_17058 = cljs.core.next.call(null,inst_17052);var inst_17052__$1 = inst_17058;var state_17071__$1 = (function (){var statearr_17080 = state_17071;(statearr_17080[7] = inst_17052__$1);
(statearr_17080[8] = inst_17057);
return statearr_17080;
})();var statearr_17081_17098 = state_17071__$1;(statearr_17081_17098[2] = null);
(statearr_17081_17098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17072 === 8))
{var inst_17062 = cljs.core.async.close_BANG_.call(null,ch);var state_17071__$1 = state_17071;var statearr_17082_17099 = state_17071__$1;(statearr_17082_17099[2] = inst_17062);
(statearr_17082_17099[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17072 === 9))
{var state_17071__$1 = state_17071;var statearr_17083_17100 = state_17071__$1;(statearr_17083_17100[2] = null);
(statearr_17083_17100[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17072 === 10))
{var inst_17065 = (state_17071[2]);var state_17071__$1 = state_17071;var statearr_17084_17101 = state_17071__$1;(statearr_17084_17101[2] = inst_17065);
(statearr_17084_17101[1] = 6);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_17088 = (new Array(9));(statearr_17088[0] = state_machine__5792__auto__);
(statearr_17088[1] = 1);
return statearr_17088;
});
var state_machine__5792__auto____1 = (function (state_17071){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17071);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17089){if((e17089 instanceof Object))
{var ex__5795__auto__ = e17089;var statearr_17090_17102 = state_17071;(statearr_17090_17102[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17103 = state_17071;
state_17071 = G__17103;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17071){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17091 = f__5862__auto__.call(null);(statearr_17091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_17091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
cljs.core.async.Mux = (function (){var obj17105 = {};return obj17105;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17107 = {};return obj17107;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17331 = (function (cs,ch,mult,meta17332){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17332 = meta17332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17331.cljs$lang$type = true;
cljs.core.async.t17331.cljs$lang$ctorStr = "cljs.core.async/t17331";
cljs.core.async.t17331.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17331");
});})(cs))
;
cljs.core.async.t17331.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17331.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17331.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17331.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17331.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17333){var self__ = this;
var _17333__$1 = this;return self__.meta17332;
});})(cs))
;
cljs.core.async.t17331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17333,meta17332__$1){var self__ = this;
var _17333__$1 = this;return (new cljs.core.async.t17331(self__.cs,self__.ch,self__.mult,meta17332__$1));
});})(cs))
;
cljs.core.async.__GT_t17331 = ((function (cs){
return (function __GT_t17331(cs__$1,ch__$1,mult__$1,meta17332){return (new cljs.core.async.t17331(cs__$1,ch__$1,mult__$1,meta17332));
});})(cs))
;
}
return (new cljs.core.async.t17331(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5861__auto___17554 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17468){var state_val_17469 = (state_17468[1]);if((state_val_17469 === 32))
{var inst_17412 = (state_17468[7]);var inst_17336 = (state_17468[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17468,31,Object,null,30);var inst_17419 = cljs.core.async.put_BANG_.call(null,inst_17412,inst_17336,done);var state_17468__$1 = state_17468;var statearr_17470_17555 = state_17468__$1;(statearr_17470_17555[2] = inst_17419);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 1))
{var state_17468__$1 = state_17468;var statearr_17471_17556 = state_17468__$1;(statearr_17471_17556[2] = null);
(statearr_17471_17556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 33))
{var inst_17425 = (state_17468[9]);var inst_17427 = cljs.core.chunked_seq_QMARK_.call(null,inst_17425);var state_17468__$1 = state_17468;if(inst_17427)
{var statearr_17472_17557 = state_17468__$1;(statearr_17472_17557[1] = 36);
} else
{var statearr_17473_17558 = state_17468__$1;(statearr_17473_17558[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 2))
{var state_17468__$1 = state_17468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17468__$1,4,ch);
} else
{if((state_val_17469 === 34))
{var state_17468__$1 = state_17468;var statearr_17474_17559 = state_17468__$1;(statearr_17474_17559[2] = null);
(statearr_17474_17559[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 3))
{var inst_17466 = (state_17468[2]);var state_17468__$1 = state_17468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17468__$1,inst_17466);
} else
{if((state_val_17469 === 35))
{var inst_17450 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17475_17560 = state_17468__$1;(statearr_17475_17560[2] = inst_17450);
(statearr_17475_17560[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 4))
{var inst_17336 = (state_17468[8]);var inst_17336__$1 = (state_17468[2]);var inst_17337 = (inst_17336__$1 == null);var state_17468__$1 = (function (){var statearr_17476 = state_17468;(statearr_17476[8] = inst_17336__$1);
return statearr_17476;
})();if(cljs.core.truth_(inst_17337))
{var statearr_17477_17561 = state_17468__$1;(statearr_17477_17561[1] = 5);
} else
{var statearr_17478_17562 = state_17468__$1;(statearr_17478_17562[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 36))
{var inst_17425 = (state_17468[9]);var inst_17429 = cljs.core.chunk_first.call(null,inst_17425);var inst_17430 = cljs.core.chunk_rest.call(null,inst_17425);var inst_17431 = cljs.core.count.call(null,inst_17429);var inst_17404 = inst_17430;var inst_17405 = inst_17429;var inst_17406 = inst_17431;var inst_17407 = 0;var state_17468__$1 = (function (){var statearr_17479 = state_17468;(statearr_17479[10] = inst_17406);
(statearr_17479[11] = inst_17405);
(statearr_17479[12] = inst_17404);
(statearr_17479[13] = inst_17407);
return statearr_17479;
})();var statearr_17480_17563 = state_17468__$1;(statearr_17480_17563[2] = null);
(statearr_17480_17563[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 5))
{var inst_17343 = cljs.core.deref.call(null,cs);var inst_17344 = cljs.core.seq.call(null,inst_17343);var inst_17345 = inst_17344;var inst_17346 = null;var inst_17347 = 0;var inst_17348 = 0;var state_17468__$1 = (function (){var statearr_17481 = state_17468;(statearr_17481[14] = inst_17348);
(statearr_17481[15] = inst_17346);
(statearr_17481[16] = inst_17347);
(statearr_17481[17] = inst_17345);
return statearr_17481;
})();var statearr_17482_17564 = state_17468__$1;(statearr_17482_17564[2] = null);
(statearr_17482_17564[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 37))
{var inst_17425 = (state_17468[9]);var inst_17434 = cljs.core.first.call(null,inst_17425);var state_17468__$1 = (function (){var statearr_17483 = state_17468;(statearr_17483[18] = inst_17434);
return statearr_17483;
})();var statearr_17484_17565 = state_17468__$1;(statearr_17484_17565[2] = null);
(statearr_17484_17565[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 6))
{var inst_17396 = (state_17468[19]);var inst_17395 = cljs.core.deref.call(null,cs);var inst_17396__$1 = cljs.core.keys.call(null,inst_17395);var inst_17397 = cljs.core.count.call(null,inst_17396__$1);var inst_17398 = cljs.core.reset_BANG_.call(null,dctr,inst_17397);var inst_17403 = cljs.core.seq.call(null,inst_17396__$1);var inst_17404 = inst_17403;var inst_17405 = null;var inst_17406 = 0;var inst_17407 = 0;var state_17468__$1 = (function (){var statearr_17485 = state_17468;(statearr_17485[19] = inst_17396__$1);
(statearr_17485[10] = inst_17406);
(statearr_17485[11] = inst_17405);
(statearr_17485[20] = inst_17398);
(statearr_17485[12] = inst_17404);
(statearr_17485[13] = inst_17407);
return statearr_17485;
})();var statearr_17486_17566 = state_17468__$1;(statearr_17486_17566[2] = null);
(statearr_17486_17566[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 38))
{var inst_17447 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17487_17567 = state_17468__$1;(statearr_17487_17567[2] = inst_17447);
(statearr_17487_17567[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 7))
{var inst_17464 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17488_17568 = state_17468__$1;(statearr_17488_17568[2] = inst_17464);
(statearr_17488_17568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 39))
{var inst_17425 = (state_17468[9]);var inst_17443 = (state_17468[2]);var inst_17444 = cljs.core.next.call(null,inst_17425);var inst_17404 = inst_17444;var inst_17405 = null;var inst_17406 = 0;var inst_17407 = 0;var state_17468__$1 = (function (){var statearr_17489 = state_17468;(statearr_17489[10] = inst_17406);
(statearr_17489[11] = inst_17405);
(statearr_17489[12] = inst_17404);
(statearr_17489[21] = inst_17443);
(statearr_17489[13] = inst_17407);
return statearr_17489;
})();var statearr_17490_17569 = state_17468__$1;(statearr_17490_17569[2] = null);
(statearr_17490_17569[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 8))
{var inst_17348 = (state_17468[14]);var inst_17347 = (state_17468[16]);var inst_17350 = (inst_17348 < inst_17347);var inst_17351 = inst_17350;var state_17468__$1 = state_17468;if(cljs.core.truth_(inst_17351))
{var statearr_17491_17570 = state_17468__$1;(statearr_17491_17570[1] = 10);
} else
{var statearr_17492_17571 = state_17468__$1;(statearr_17492_17571[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 40))
{var inst_17434 = (state_17468[18]);var inst_17435 = (state_17468[2]);var inst_17436 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17437 = cljs.core.async.untap_STAR_.call(null,m,inst_17434);var state_17468__$1 = (function (){var statearr_17493 = state_17468;(statearr_17493[22] = inst_17435);
(statearr_17493[23] = inst_17436);
return statearr_17493;
})();var statearr_17494_17572 = state_17468__$1;(statearr_17494_17572[2] = inst_17437);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 9))
{var inst_17393 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17495_17573 = state_17468__$1;(statearr_17495_17573[2] = inst_17393);
(statearr_17495_17573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 41))
{var inst_17434 = (state_17468[18]);var inst_17336 = (state_17468[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17468,40,Object,null,39);var inst_17441 = cljs.core.async.put_BANG_.call(null,inst_17434,inst_17336,done);var state_17468__$1 = state_17468;var statearr_17496_17574 = state_17468__$1;(statearr_17496_17574[2] = inst_17441);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 10))
{var inst_17348 = (state_17468[14]);var inst_17346 = (state_17468[15]);var inst_17354 = cljs.core._nth.call(null,inst_17346,inst_17348);var inst_17355 = cljs.core.nth.call(null,inst_17354,0,null);var inst_17356 = cljs.core.nth.call(null,inst_17354,1,null);var state_17468__$1 = (function (){var statearr_17497 = state_17468;(statearr_17497[24] = inst_17355);
return statearr_17497;
})();if(cljs.core.truth_(inst_17356))
{var statearr_17498_17575 = state_17468__$1;(statearr_17498_17575[1] = 13);
} else
{var statearr_17499_17576 = state_17468__$1;(statearr_17499_17576[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 42))
{var state_17468__$1 = state_17468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17468__$1,45,dchan);
} else
{if((state_val_17469 === 11))
{var inst_17365 = (state_17468[25]);var inst_17345 = (state_17468[17]);var inst_17365__$1 = cljs.core.seq.call(null,inst_17345);var state_17468__$1 = (function (){var statearr_17500 = state_17468;(statearr_17500[25] = inst_17365__$1);
return statearr_17500;
})();if(inst_17365__$1)
{var statearr_17501_17577 = state_17468__$1;(statearr_17501_17577[1] = 16);
} else
{var statearr_17502_17578 = state_17468__$1;(statearr_17502_17578[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 43))
{var state_17468__$1 = state_17468;var statearr_17503_17579 = state_17468__$1;(statearr_17503_17579[2] = null);
(statearr_17503_17579[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 12))
{var inst_17391 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17504_17580 = state_17468__$1;(statearr_17504_17580[2] = inst_17391);
(statearr_17504_17580[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 44))
{var inst_17461 = (state_17468[2]);var state_17468__$1 = (function (){var statearr_17505 = state_17468;(statearr_17505[26] = inst_17461);
return statearr_17505;
})();var statearr_17506_17581 = state_17468__$1;(statearr_17506_17581[2] = null);
(statearr_17506_17581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 13))
{var inst_17355 = (state_17468[24]);var inst_17358 = cljs.core.async.close_BANG_.call(null,inst_17355);var state_17468__$1 = state_17468;var statearr_17507_17582 = state_17468__$1;(statearr_17507_17582[2] = inst_17358);
(statearr_17507_17582[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 45))
{var inst_17458 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17511_17583 = state_17468__$1;(statearr_17511_17583[2] = inst_17458);
(statearr_17511_17583[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 14))
{var state_17468__$1 = state_17468;var statearr_17512_17584 = state_17468__$1;(statearr_17512_17584[2] = null);
(statearr_17512_17584[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 15))
{var inst_17348 = (state_17468[14]);var inst_17346 = (state_17468[15]);var inst_17347 = (state_17468[16]);var inst_17345 = (state_17468[17]);var inst_17361 = (state_17468[2]);var inst_17362 = (inst_17348 + 1);var tmp17508 = inst_17346;var tmp17509 = inst_17347;var tmp17510 = inst_17345;var inst_17345__$1 = tmp17510;var inst_17346__$1 = tmp17508;var inst_17347__$1 = tmp17509;var inst_17348__$1 = inst_17362;var state_17468__$1 = (function (){var statearr_17513 = state_17468;(statearr_17513[27] = inst_17361);
(statearr_17513[14] = inst_17348__$1);
(statearr_17513[15] = inst_17346__$1);
(statearr_17513[16] = inst_17347__$1);
(statearr_17513[17] = inst_17345__$1);
return statearr_17513;
})();var statearr_17514_17585 = state_17468__$1;(statearr_17514_17585[2] = null);
(statearr_17514_17585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 16))
{var inst_17365 = (state_17468[25]);var inst_17367 = cljs.core.chunked_seq_QMARK_.call(null,inst_17365);var state_17468__$1 = state_17468;if(inst_17367)
{var statearr_17515_17586 = state_17468__$1;(statearr_17515_17586[1] = 19);
} else
{var statearr_17516_17587 = state_17468__$1;(statearr_17516_17587[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 17))
{var state_17468__$1 = state_17468;var statearr_17517_17588 = state_17468__$1;(statearr_17517_17588[2] = null);
(statearr_17517_17588[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 18))
{var inst_17389 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17518_17589 = state_17468__$1;(statearr_17518_17589[2] = inst_17389);
(statearr_17518_17589[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 19))
{var inst_17365 = (state_17468[25]);var inst_17369 = cljs.core.chunk_first.call(null,inst_17365);var inst_17370 = cljs.core.chunk_rest.call(null,inst_17365);var inst_17371 = cljs.core.count.call(null,inst_17369);var inst_17345 = inst_17370;var inst_17346 = inst_17369;var inst_17347 = inst_17371;var inst_17348 = 0;var state_17468__$1 = (function (){var statearr_17519 = state_17468;(statearr_17519[14] = inst_17348);
(statearr_17519[15] = inst_17346);
(statearr_17519[16] = inst_17347);
(statearr_17519[17] = inst_17345);
return statearr_17519;
})();var statearr_17520_17590 = state_17468__$1;(statearr_17520_17590[2] = null);
(statearr_17520_17590[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 20))
{var inst_17365 = (state_17468[25]);var inst_17375 = cljs.core.first.call(null,inst_17365);var inst_17376 = cljs.core.nth.call(null,inst_17375,0,null);var inst_17377 = cljs.core.nth.call(null,inst_17375,1,null);var state_17468__$1 = (function (){var statearr_17521 = state_17468;(statearr_17521[28] = inst_17376);
return statearr_17521;
})();if(cljs.core.truth_(inst_17377))
{var statearr_17522_17591 = state_17468__$1;(statearr_17522_17591[1] = 22);
} else
{var statearr_17523_17592 = state_17468__$1;(statearr_17523_17592[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 21))
{var inst_17386 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17524_17593 = state_17468__$1;(statearr_17524_17593[2] = inst_17386);
(statearr_17524_17593[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 22))
{var inst_17376 = (state_17468[28]);var inst_17379 = cljs.core.async.close_BANG_.call(null,inst_17376);var state_17468__$1 = state_17468;var statearr_17525_17594 = state_17468__$1;(statearr_17525_17594[2] = inst_17379);
(statearr_17525_17594[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 23))
{var state_17468__$1 = state_17468;var statearr_17526_17595 = state_17468__$1;(statearr_17526_17595[2] = null);
(statearr_17526_17595[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 24))
{var inst_17365 = (state_17468[25]);var inst_17382 = (state_17468[2]);var inst_17383 = cljs.core.next.call(null,inst_17365);var inst_17345 = inst_17383;var inst_17346 = null;var inst_17347 = 0;var inst_17348 = 0;var state_17468__$1 = (function (){var statearr_17527 = state_17468;(statearr_17527[29] = inst_17382);
(statearr_17527[14] = inst_17348);
(statearr_17527[15] = inst_17346);
(statearr_17527[16] = inst_17347);
(statearr_17527[17] = inst_17345);
return statearr_17527;
})();var statearr_17528_17596 = state_17468__$1;(statearr_17528_17596[2] = null);
(statearr_17528_17596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 25))
{var inst_17406 = (state_17468[10]);var inst_17407 = (state_17468[13]);var inst_17409 = (inst_17407 < inst_17406);var inst_17410 = inst_17409;var state_17468__$1 = state_17468;if(cljs.core.truth_(inst_17410))
{var statearr_17529_17597 = state_17468__$1;(statearr_17529_17597[1] = 27);
} else
{var statearr_17530_17598 = state_17468__$1;(statearr_17530_17598[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 26))
{var inst_17396 = (state_17468[19]);var inst_17454 = (state_17468[2]);var inst_17455 = cljs.core.seq.call(null,inst_17396);var state_17468__$1 = (function (){var statearr_17531 = state_17468;(statearr_17531[30] = inst_17454);
return statearr_17531;
})();if(inst_17455)
{var statearr_17532_17599 = state_17468__$1;(statearr_17532_17599[1] = 42);
} else
{var statearr_17533_17600 = state_17468__$1;(statearr_17533_17600[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 27))
{var inst_17405 = (state_17468[11]);var inst_17407 = (state_17468[13]);var inst_17412 = cljs.core._nth.call(null,inst_17405,inst_17407);var state_17468__$1 = (function (){var statearr_17534 = state_17468;(statearr_17534[7] = inst_17412);
return statearr_17534;
})();var statearr_17535_17601 = state_17468__$1;(statearr_17535_17601[2] = null);
(statearr_17535_17601[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 28))
{var inst_17404 = (state_17468[12]);var inst_17425 = (state_17468[9]);var inst_17425__$1 = cljs.core.seq.call(null,inst_17404);var state_17468__$1 = (function (){var statearr_17539 = state_17468;(statearr_17539[9] = inst_17425__$1);
return statearr_17539;
})();if(inst_17425__$1)
{var statearr_17540_17602 = state_17468__$1;(statearr_17540_17602[1] = 33);
} else
{var statearr_17541_17603 = state_17468__$1;(statearr_17541_17603[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 29))
{var inst_17452 = (state_17468[2]);var state_17468__$1 = state_17468;var statearr_17542_17604 = state_17468__$1;(statearr_17542_17604[2] = inst_17452);
(statearr_17542_17604[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 30))
{var inst_17406 = (state_17468[10]);var inst_17405 = (state_17468[11]);var inst_17404 = (state_17468[12]);var inst_17407 = (state_17468[13]);var inst_17421 = (state_17468[2]);var inst_17422 = (inst_17407 + 1);var tmp17536 = inst_17406;var tmp17537 = inst_17405;var tmp17538 = inst_17404;var inst_17404__$1 = tmp17538;var inst_17405__$1 = tmp17537;var inst_17406__$1 = tmp17536;var inst_17407__$1 = inst_17422;var state_17468__$1 = (function (){var statearr_17543 = state_17468;(statearr_17543[10] = inst_17406__$1);
(statearr_17543[11] = inst_17405__$1);
(statearr_17543[12] = inst_17404__$1);
(statearr_17543[31] = inst_17421);
(statearr_17543[13] = inst_17407__$1);
return statearr_17543;
})();var statearr_17544_17605 = state_17468__$1;(statearr_17544_17605[2] = null);
(statearr_17544_17605[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17469 === 31))
{var inst_17412 = (state_17468[7]);var inst_17413 = (state_17468[2]);var inst_17414 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17415 = cljs.core.async.untap_STAR_.call(null,m,inst_17412);var state_17468__$1 = (function (){var statearr_17545 = state_17468;(statearr_17545[32] = inst_17413);
(statearr_17545[33] = inst_17414);
return statearr_17545;
})();var statearr_17546_17606 = state_17468__$1;(statearr_17546_17606[2] = inst_17415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17468__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_17550 = (new Array(34));(statearr_17550[0] = state_machine__5792__auto__);
(statearr_17550[1] = 1);
return statearr_17550;
});
var state_machine__5792__auto____1 = (function (state_17468){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17468);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17551){if((e17551 instanceof Object))
{var ex__5795__auto__ = e17551;var statearr_17552_17607 = state_17468;(statearr_17552_17607[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17608 = state_17468;
state_17468 = G__17608;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17468){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17553 = f__5862__auto__.call(null);(statearr_17553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17554);
return statearr_17553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.Mix = (function (){var obj17610 = {};return obj17610;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t17720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17720 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17721){
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
this.meta17721 = meta17721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17720.cljs$lang$type = true;
cljs.core.async.t17720.cljs$lang$ctorStr = "cljs.core.async/t17720";
cljs.core.async.t17720.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17720");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17720.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17722){var self__ = this;
var _17722__$1 = this;return self__.meta17721;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17722,meta17721__$1){var self__ = this;
var _17722__$1 = this;return (new cljs.core.async.t17720(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17721__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17720 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17720(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17721){return (new cljs.core.async.t17720(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17721));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17720(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5861__auto___17829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17787){var state_val_17788 = (state_17787[1]);if((state_val_17788 === 1))
{var inst_17726 = (state_17787[7]);var inst_17726__$1 = calc_state.call(null);var inst_17727 = cljs.core.seq_QMARK_.call(null,inst_17726__$1);var state_17787__$1 = (function (){var statearr_17789 = state_17787;(statearr_17789[7] = inst_17726__$1);
return statearr_17789;
})();if(inst_17727)
{var statearr_17790_17830 = state_17787__$1;(statearr_17790_17830[1] = 2);
} else
{var statearr_17791_17831 = state_17787__$1;(statearr_17791_17831[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 2))
{var inst_17726 = (state_17787[7]);var inst_17729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17726);var state_17787__$1 = state_17787;var statearr_17792_17832 = state_17787__$1;(statearr_17792_17832[2] = inst_17729);
(statearr_17792_17832[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 3))
{var inst_17726 = (state_17787[7]);var state_17787__$1 = state_17787;var statearr_17793_17833 = state_17787__$1;(statearr_17793_17833[2] = inst_17726);
(statearr_17793_17833[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 4))
{var inst_17726 = (state_17787[7]);var inst_17732 = (state_17787[2]);var inst_17733 = cljs.core.get.call(null,inst_17732,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17734 = cljs.core.get.call(null,inst_17732,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17735 = cljs.core.get.call(null,inst_17732,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17736 = inst_17726;var state_17787__$1 = (function (){var statearr_17794 = state_17787;(statearr_17794[8] = inst_17736);
(statearr_17794[9] = inst_17735);
(statearr_17794[10] = inst_17734);
(statearr_17794[11] = inst_17733);
return statearr_17794;
})();var statearr_17795_17834 = state_17787__$1;(statearr_17795_17834[2] = null);
(statearr_17795_17834[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 5))
{var inst_17736 = (state_17787[8]);var inst_17739 = cljs.core.seq_QMARK_.call(null,inst_17736);var state_17787__$1 = state_17787;if(inst_17739)
{var statearr_17796_17835 = state_17787__$1;(statearr_17796_17835[1] = 7);
} else
{var statearr_17797_17836 = state_17787__$1;(statearr_17797_17836[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 6))
{var inst_17785 = (state_17787[2]);var state_17787__$1 = state_17787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17787__$1,inst_17785);
} else
{if((state_val_17788 === 7))
{var inst_17736 = (state_17787[8]);var inst_17741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17736);var state_17787__$1 = state_17787;var statearr_17798_17837 = state_17787__$1;(statearr_17798_17837[2] = inst_17741);
(statearr_17798_17837[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 8))
{var inst_17736 = (state_17787[8]);var state_17787__$1 = state_17787;var statearr_17799_17838 = state_17787__$1;(statearr_17799_17838[2] = inst_17736);
(statearr_17799_17838[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 9))
{var inst_17744 = (state_17787[12]);var inst_17744__$1 = (state_17787[2]);var inst_17745 = cljs.core.get.call(null,inst_17744__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17746 = cljs.core.get.call(null,inst_17744__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17747 = cljs.core.get.call(null,inst_17744__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17787__$1 = (function (){var statearr_17800 = state_17787;(statearr_17800[13] = inst_17747);
(statearr_17800[14] = inst_17746);
(statearr_17800[12] = inst_17744__$1);
return statearr_17800;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17787__$1,10,inst_17745);
} else
{if((state_val_17788 === 10))
{var inst_17751 = (state_17787[15]);var inst_17752 = (state_17787[16]);var inst_17750 = (state_17787[2]);var inst_17751__$1 = cljs.core.nth.call(null,inst_17750,0,null);var inst_17752__$1 = cljs.core.nth.call(null,inst_17750,1,null);var inst_17753 = (inst_17751__$1 == null);var inst_17754 = cljs.core._EQ_.call(null,inst_17752__$1,change);var inst_17755 = (inst_17753) || (inst_17754);var state_17787__$1 = (function (){var statearr_17801 = state_17787;(statearr_17801[15] = inst_17751__$1);
(statearr_17801[16] = inst_17752__$1);
return statearr_17801;
})();if(cljs.core.truth_(inst_17755))
{var statearr_17802_17839 = state_17787__$1;(statearr_17802_17839[1] = 11);
} else
{var statearr_17803_17840 = state_17787__$1;(statearr_17803_17840[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 11))
{var inst_17751 = (state_17787[15]);var inst_17757 = (inst_17751 == null);var state_17787__$1 = state_17787;if(cljs.core.truth_(inst_17757))
{var statearr_17804_17841 = state_17787__$1;(statearr_17804_17841[1] = 14);
} else
{var statearr_17805_17842 = state_17787__$1;(statearr_17805_17842[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 12))
{var inst_17752 = (state_17787[16]);var inst_17766 = (state_17787[17]);var inst_17747 = (state_17787[13]);var inst_17766__$1 = inst_17747.call(null,inst_17752);var state_17787__$1 = (function (){var statearr_17806 = state_17787;(statearr_17806[17] = inst_17766__$1);
return statearr_17806;
})();if(cljs.core.truth_(inst_17766__$1))
{var statearr_17807_17843 = state_17787__$1;(statearr_17807_17843[1] = 17);
} else
{var statearr_17808_17844 = state_17787__$1;(statearr_17808_17844[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 13))
{var inst_17783 = (state_17787[2]);var state_17787__$1 = state_17787;var statearr_17809_17845 = state_17787__$1;(statearr_17809_17845[2] = inst_17783);
(statearr_17809_17845[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 14))
{var inst_17752 = (state_17787[16]);var inst_17759 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17752);var state_17787__$1 = state_17787;var statearr_17810_17846 = state_17787__$1;(statearr_17810_17846[2] = inst_17759);
(statearr_17810_17846[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 15))
{var state_17787__$1 = state_17787;var statearr_17811_17847 = state_17787__$1;(statearr_17811_17847[2] = null);
(statearr_17811_17847[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 16))
{var inst_17762 = (state_17787[2]);var inst_17763 = calc_state.call(null);var inst_17736 = inst_17763;var state_17787__$1 = (function (){var statearr_17812 = state_17787;(statearr_17812[18] = inst_17762);
(statearr_17812[8] = inst_17736);
return statearr_17812;
})();var statearr_17813_17848 = state_17787__$1;(statearr_17813_17848[2] = null);
(statearr_17813_17848[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 17))
{var inst_17766 = (state_17787[17]);var state_17787__$1 = state_17787;var statearr_17814_17849 = state_17787__$1;(statearr_17814_17849[2] = inst_17766);
(statearr_17814_17849[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 18))
{var inst_17752 = (state_17787[16]);var inst_17747 = (state_17787[13]);var inst_17746 = (state_17787[14]);var inst_17769 = cljs.core.empty_QMARK_.call(null,inst_17747);var inst_17770 = inst_17746.call(null,inst_17752);var inst_17771 = cljs.core.not.call(null,inst_17770);var inst_17772 = (inst_17769) && (inst_17771);var state_17787__$1 = state_17787;var statearr_17815_17850 = state_17787__$1;(statearr_17815_17850[2] = inst_17772);
(statearr_17815_17850[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 19))
{var inst_17774 = (state_17787[2]);var state_17787__$1 = state_17787;if(cljs.core.truth_(inst_17774))
{var statearr_17816_17851 = state_17787__$1;(statearr_17816_17851[1] = 20);
} else
{var statearr_17817_17852 = state_17787__$1;(statearr_17817_17852[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 20))
{var inst_17751 = (state_17787[15]);var state_17787__$1 = state_17787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17787__$1,23,out,inst_17751);
} else
{if((state_val_17788 === 21))
{var state_17787__$1 = state_17787;var statearr_17818_17853 = state_17787__$1;(statearr_17818_17853[2] = null);
(statearr_17818_17853[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 22))
{var inst_17744 = (state_17787[12]);var inst_17780 = (state_17787[2]);var inst_17736 = inst_17744;var state_17787__$1 = (function (){var statearr_17819 = state_17787;(statearr_17819[8] = inst_17736);
(statearr_17819[19] = inst_17780);
return statearr_17819;
})();var statearr_17820_17854 = state_17787__$1;(statearr_17820_17854[2] = null);
(statearr_17820_17854[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17788 === 23))
{var inst_17777 = (state_17787[2]);var state_17787__$1 = state_17787;var statearr_17821_17855 = state_17787__$1;(statearr_17821_17855[2] = inst_17777);
(statearr_17821_17855[1] = 22);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_17825 = (new Array(20));(statearr_17825[0] = state_machine__5792__auto__);
(statearr_17825[1] = 1);
return statearr_17825;
});
var state_machine__5792__auto____1 = (function (state_17787){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17826){if((e17826 instanceof Object))
{var ex__5795__auto__ = e17826;var statearr_17827_17856 = state_17787;(statearr_17827_17856[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17857 = state_17787;
state_17787 = G__17857;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17787){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17828 = f__5862__auto__.call(null);(statearr_17828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17829);
return statearr_17828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.Pub = (function (){var obj17859 = {};return obj17859;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3291__auto__,mults){
return (function (p1__17860_SHARP_){if(cljs.core.truth_(p1__17860_SHARP_.call(null,topic)))
{return p1__17860_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17860_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17985 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17986){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17986 = meta17986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17985.cljs$lang$type = true;
cljs.core.async.t17985.cljs$lang$ctorStr = "cljs.core.async/t17985";
cljs.core.async.t17985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17985");
});})(mults,ensure_mult))
;
cljs.core.async.t17985.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17985.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17987){var self__ = this;
var _17987__$1 = this;return self__.meta17986;
});})(mults,ensure_mult))
;
cljs.core.async.t17985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17987,meta17986__$1){var self__ = this;
var _17987__$1 = this;return (new cljs.core.async.t17985(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17986__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17985 = ((function (mults,ensure_mult){
return (function __GT_t17985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17986){return (new cljs.core.async.t17985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17986));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17985(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5861__auto___18109 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18061){var state_val_18062 = (state_18061[1]);if((state_val_18062 === 1))
{var state_18061__$1 = state_18061;var statearr_18063_18110 = state_18061__$1;(statearr_18063_18110[2] = null);
(statearr_18063_18110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 2))
{var state_18061__$1 = state_18061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18061__$1,4,ch);
} else
{if((state_val_18062 === 3))
{var inst_18059 = (state_18061[2]);var state_18061__$1 = state_18061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18061__$1,inst_18059);
} else
{if((state_val_18062 === 4))
{var inst_17990 = (state_18061[7]);var inst_17990__$1 = (state_18061[2]);var inst_17991 = (inst_17990__$1 == null);var state_18061__$1 = (function (){var statearr_18064 = state_18061;(statearr_18064[7] = inst_17990__$1);
return statearr_18064;
})();if(cljs.core.truth_(inst_17991))
{var statearr_18065_18111 = state_18061__$1;(statearr_18065_18111[1] = 5);
} else
{var statearr_18066_18112 = state_18061__$1;(statearr_18066_18112[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 5))
{var inst_17997 = cljs.core.deref.call(null,mults);var inst_17998 = cljs.core.vals.call(null,inst_17997);var inst_17999 = cljs.core.seq.call(null,inst_17998);var inst_18000 = inst_17999;var inst_18001 = null;var inst_18002 = 0;var inst_18003 = 0;var state_18061__$1 = (function (){var statearr_18067 = state_18061;(statearr_18067[8] = inst_18001);
(statearr_18067[9] = inst_18000);
(statearr_18067[10] = inst_18003);
(statearr_18067[11] = inst_18002);
return statearr_18067;
})();var statearr_18068_18113 = state_18061__$1;(statearr_18068_18113[2] = null);
(statearr_18068_18113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 6))
{var inst_17990 = (state_18061[7]);var inst_18040 = (state_18061[12]);var inst_18038 = (state_18061[13]);var inst_18038__$1 = topic_fn.call(null,inst_17990);var inst_18039 = cljs.core.deref.call(null,mults);var inst_18040__$1 = cljs.core.get.call(null,inst_18039,inst_18038__$1);var state_18061__$1 = (function (){var statearr_18069 = state_18061;(statearr_18069[12] = inst_18040__$1);
(statearr_18069[13] = inst_18038__$1);
return statearr_18069;
})();if(cljs.core.truth_(inst_18040__$1))
{var statearr_18070_18114 = state_18061__$1;(statearr_18070_18114[1] = 19);
} else
{var statearr_18071_18115 = state_18061__$1;(statearr_18071_18115[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 7))
{var inst_18057 = (state_18061[2]);var state_18061__$1 = state_18061;var statearr_18072_18116 = state_18061__$1;(statearr_18072_18116[2] = inst_18057);
(statearr_18072_18116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 8))
{var inst_18003 = (state_18061[10]);var inst_18002 = (state_18061[11]);var inst_18005 = (inst_18003 < inst_18002);var inst_18006 = inst_18005;var state_18061__$1 = state_18061;if(cljs.core.truth_(inst_18006))
{var statearr_18076_18117 = state_18061__$1;(statearr_18076_18117[1] = 10);
} else
{var statearr_18077_18118 = state_18061__$1;(statearr_18077_18118[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 9))
{var inst_18036 = (state_18061[2]);var state_18061__$1 = state_18061;var statearr_18078_18119 = state_18061__$1;(statearr_18078_18119[2] = inst_18036);
(statearr_18078_18119[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 10))
{var inst_18001 = (state_18061[8]);var inst_18000 = (state_18061[9]);var inst_18003 = (state_18061[10]);var inst_18002 = (state_18061[11]);var inst_18008 = cljs.core._nth.call(null,inst_18001,inst_18003);var inst_18009 = cljs.core.async.muxch_STAR_.call(null,inst_18008);var inst_18010 = cljs.core.async.close_BANG_.call(null,inst_18009);var inst_18011 = (inst_18003 + 1);var tmp18073 = inst_18001;var tmp18074 = inst_18000;var tmp18075 = inst_18002;var inst_18000__$1 = tmp18074;var inst_18001__$1 = tmp18073;var inst_18002__$1 = tmp18075;var inst_18003__$1 = inst_18011;var state_18061__$1 = (function (){var statearr_18079 = state_18061;(statearr_18079[8] = inst_18001__$1);
(statearr_18079[9] = inst_18000__$1);
(statearr_18079[10] = inst_18003__$1);
(statearr_18079[11] = inst_18002__$1);
(statearr_18079[14] = inst_18010);
return statearr_18079;
})();var statearr_18080_18120 = state_18061__$1;(statearr_18080_18120[2] = null);
(statearr_18080_18120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 11))
{var inst_18000 = (state_18061[9]);var inst_18014 = (state_18061[15]);var inst_18014__$1 = cljs.core.seq.call(null,inst_18000);var state_18061__$1 = (function (){var statearr_18081 = state_18061;(statearr_18081[15] = inst_18014__$1);
return statearr_18081;
})();if(inst_18014__$1)
{var statearr_18082_18121 = state_18061__$1;(statearr_18082_18121[1] = 13);
} else
{var statearr_18083_18122 = state_18061__$1;(statearr_18083_18122[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 12))
{var inst_18034 = (state_18061[2]);var state_18061__$1 = state_18061;var statearr_18084_18123 = state_18061__$1;(statearr_18084_18123[2] = inst_18034);
(statearr_18084_18123[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 13))
{var inst_18014 = (state_18061[15]);var inst_18016 = cljs.core.chunked_seq_QMARK_.call(null,inst_18014);var state_18061__$1 = state_18061;if(inst_18016)
{var statearr_18085_18124 = state_18061__$1;(statearr_18085_18124[1] = 16);
} else
{var statearr_18086_18125 = state_18061__$1;(statearr_18086_18125[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 14))
{var state_18061__$1 = state_18061;var statearr_18087_18126 = state_18061__$1;(statearr_18087_18126[2] = null);
(statearr_18087_18126[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 15))
{var inst_18032 = (state_18061[2]);var state_18061__$1 = state_18061;var statearr_18088_18127 = state_18061__$1;(statearr_18088_18127[2] = inst_18032);
(statearr_18088_18127[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 16))
{var inst_18014 = (state_18061[15]);var inst_18018 = cljs.core.chunk_first.call(null,inst_18014);var inst_18019 = cljs.core.chunk_rest.call(null,inst_18014);var inst_18020 = cljs.core.count.call(null,inst_18018);var inst_18000 = inst_18019;var inst_18001 = inst_18018;var inst_18002 = inst_18020;var inst_18003 = 0;var state_18061__$1 = (function (){var statearr_18089 = state_18061;(statearr_18089[8] = inst_18001);
(statearr_18089[9] = inst_18000);
(statearr_18089[10] = inst_18003);
(statearr_18089[11] = inst_18002);
return statearr_18089;
})();var statearr_18090_18128 = state_18061__$1;(statearr_18090_18128[2] = null);
(statearr_18090_18128[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 17))
{var inst_18014 = (state_18061[15]);var inst_18023 = cljs.core.first.call(null,inst_18014);var inst_18024 = cljs.core.async.muxch_STAR_.call(null,inst_18023);var inst_18025 = cljs.core.async.close_BANG_.call(null,inst_18024);var inst_18026 = cljs.core.next.call(null,inst_18014);var inst_18000 = inst_18026;var inst_18001 = null;var inst_18002 = 0;var inst_18003 = 0;var state_18061__$1 = (function (){var statearr_18091 = state_18061;(statearr_18091[8] = inst_18001);
(statearr_18091[9] = inst_18000);
(statearr_18091[10] = inst_18003);
(statearr_18091[11] = inst_18002);
(statearr_18091[16] = inst_18025);
return statearr_18091;
})();var statearr_18092_18129 = state_18061__$1;(statearr_18092_18129[2] = null);
(statearr_18092_18129[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 18))
{var inst_18029 = (state_18061[2]);var state_18061__$1 = state_18061;var statearr_18093_18130 = state_18061__$1;(statearr_18093_18130[2] = inst_18029);
(statearr_18093_18130[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 19))
{var state_18061__$1 = state_18061;var statearr_18094_18131 = state_18061__$1;(statearr_18094_18131[2] = null);
(statearr_18094_18131[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 20))
{var state_18061__$1 = state_18061;var statearr_18095_18132 = state_18061__$1;(statearr_18095_18132[2] = null);
(statearr_18095_18132[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 21))
{var inst_18054 = (state_18061[2]);var state_18061__$1 = (function (){var statearr_18096 = state_18061;(statearr_18096[17] = inst_18054);
return statearr_18096;
})();var statearr_18097_18133 = state_18061__$1;(statearr_18097_18133[2] = null);
(statearr_18097_18133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 22))
{var inst_18051 = (state_18061[2]);var state_18061__$1 = state_18061;var statearr_18098_18134 = state_18061__$1;(statearr_18098_18134[2] = inst_18051);
(statearr_18098_18134[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 23))
{var inst_18038 = (state_18061[13]);var inst_18042 = (state_18061[2]);var inst_18043 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18038);var state_18061__$1 = (function (){var statearr_18099 = state_18061;(statearr_18099[18] = inst_18042);
return statearr_18099;
})();var statearr_18100_18135 = state_18061__$1;(statearr_18100_18135[2] = inst_18043);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18061__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18062 === 24))
{var inst_17990 = (state_18061[7]);var inst_18040 = (state_18061[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18061,23,Object,null,22);var inst_18047 = cljs.core.async.muxch_STAR_.call(null,inst_18040);var state_18061__$1 = state_18061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18061__$1,25,inst_18047,inst_17990);
} else
{if((state_val_18062 === 25))
{var inst_18049 = (state_18061[2]);var state_18061__$1 = state_18061;var statearr_18101_18136 = state_18061__$1;(statearr_18101_18136[2] = inst_18049);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18061__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18105 = (new Array(19));(statearr_18105[0] = state_machine__5792__auto__);
(statearr_18105[1] = 1);
return statearr_18105;
});
var state_machine__5792__auto____1 = (function (state_18061){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18061);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18106){if((e18106 instanceof Object))
{var ex__5795__auto__ = e18106;var statearr_18107_18137 = state_18061;(statearr_18107_18137[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18138 = state_18061;
state_18061 = G__18138;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18061){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18108 = f__5862__auto__.call(null);(statearr_18108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18109);
return statearr_18108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
,cljs.core.range.call(null,cnt));var c__5861__auto___18275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18245){var state_val_18246 = (state_18245[1]);if((state_val_18246 === 1))
{var state_18245__$1 = state_18245;var statearr_18247_18276 = state_18245__$1;(statearr_18247_18276[2] = null);
(statearr_18247_18276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 2))
{var inst_18208 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18209 = 0;var state_18245__$1 = (function (){var statearr_18248 = state_18245;(statearr_18248[7] = inst_18209);
(statearr_18248[8] = inst_18208);
return statearr_18248;
})();var statearr_18249_18277 = state_18245__$1;(statearr_18249_18277[2] = null);
(statearr_18249_18277[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 3))
{var inst_18243 = (state_18245[2]);var state_18245__$1 = state_18245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18245__$1,inst_18243);
} else
{if((state_val_18246 === 4))
{var inst_18209 = (state_18245[7]);var inst_18211 = (inst_18209 < cnt);var state_18245__$1 = state_18245;if(cljs.core.truth_(inst_18211))
{var statearr_18250_18278 = state_18245__$1;(statearr_18250_18278[1] = 6);
} else
{var statearr_18251_18279 = state_18245__$1;(statearr_18251_18279[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 5))
{var inst_18229 = (state_18245[2]);var state_18245__$1 = (function (){var statearr_18252 = state_18245;(statearr_18252[9] = inst_18229);
return statearr_18252;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18245__$1,12,dchan);
} else
{if((state_val_18246 === 6))
{var state_18245__$1 = state_18245;var statearr_18253_18280 = state_18245__$1;(statearr_18253_18280[2] = null);
(statearr_18253_18280[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 7))
{var state_18245__$1 = state_18245;var statearr_18254_18281 = state_18245__$1;(statearr_18254_18281[2] = null);
(statearr_18254_18281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 8))
{var inst_18227 = (state_18245[2]);var state_18245__$1 = state_18245;var statearr_18255_18282 = state_18245__$1;(statearr_18255_18282[2] = inst_18227);
(statearr_18255_18282[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 9))
{var inst_18209 = (state_18245[7]);var inst_18222 = (state_18245[2]);var inst_18223 = (inst_18209 + 1);var inst_18209__$1 = inst_18223;var state_18245__$1 = (function (){var statearr_18256 = state_18245;(statearr_18256[7] = inst_18209__$1);
(statearr_18256[10] = inst_18222);
return statearr_18256;
})();var statearr_18257_18283 = state_18245__$1;(statearr_18257_18283[2] = null);
(statearr_18257_18283[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 10))
{var inst_18213 = (state_18245[2]);var inst_18214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18245__$1 = (function (){var statearr_18258 = state_18245;(statearr_18258[11] = inst_18213);
return statearr_18258;
})();var statearr_18259_18284 = state_18245__$1;(statearr_18259_18284[2] = inst_18214);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18245__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 11))
{var inst_18209 = (state_18245[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18245,10,Object,null,9);var inst_18218 = chs__$1.call(null,inst_18209);var inst_18219 = done.call(null,inst_18209);var inst_18220 = cljs.core.async.take_BANG_.call(null,inst_18218,inst_18219);var state_18245__$1 = state_18245;var statearr_18260_18285 = state_18245__$1;(statearr_18260_18285[2] = inst_18220);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18245__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 12))
{var inst_18231 = (state_18245[12]);var inst_18231__$1 = (state_18245[2]);var inst_18232 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18231__$1);var state_18245__$1 = (function (){var statearr_18261 = state_18245;(statearr_18261[12] = inst_18231__$1);
return statearr_18261;
})();if(cljs.core.truth_(inst_18232))
{var statearr_18262_18286 = state_18245__$1;(statearr_18262_18286[1] = 13);
} else
{var statearr_18263_18287 = state_18245__$1;(statearr_18263_18287[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 13))
{var inst_18234 = cljs.core.async.close_BANG_.call(null,out);var state_18245__$1 = state_18245;var statearr_18264_18288 = state_18245__$1;(statearr_18264_18288[2] = inst_18234);
(statearr_18264_18288[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 14))
{var inst_18231 = (state_18245[12]);var inst_18236 = cljs.core.apply.call(null,f,inst_18231);var state_18245__$1 = state_18245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18245__$1,16,out,inst_18236);
} else
{if((state_val_18246 === 15))
{var inst_18241 = (state_18245[2]);var state_18245__$1 = state_18245;var statearr_18265_18289 = state_18245__$1;(statearr_18265_18289[2] = inst_18241);
(statearr_18265_18289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18246 === 16))
{var inst_18238 = (state_18245[2]);var state_18245__$1 = (function (){var statearr_18266 = state_18245;(statearr_18266[13] = inst_18238);
return statearr_18266;
})();var statearr_18267_18290 = state_18245__$1;(statearr_18267_18290[2] = null);
(statearr_18267_18290[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18271 = (new Array(14));(statearr_18271[0] = state_machine__5792__auto__);
(statearr_18271[1] = 1);
return statearr_18271;
});
var state_machine__5792__auto____1 = (function (state_18245){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18245);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18272){if((e18272 instanceof Object))
{var ex__5795__auto__ = e18272;var statearr_18273_18291 = state_18245;(statearr_18273_18291[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18292 = state_18245;
state_18245 = G__18292;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18245){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18274 = f__5862__auto__.call(null);(statearr_18274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18275);
return statearr_18274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___18400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18376){var state_val_18377 = (state_18376[1]);if((state_val_18377 === 1))
{var inst_18347 = cljs.core.vec.call(null,chs);var inst_18348 = inst_18347;var state_18376__$1 = (function (){var statearr_18378 = state_18376;(statearr_18378[7] = inst_18348);
return statearr_18378;
})();var statearr_18379_18401 = state_18376__$1;(statearr_18379_18401[2] = null);
(statearr_18379_18401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18377 === 2))
{var inst_18348 = (state_18376[7]);var inst_18350 = cljs.core.count.call(null,inst_18348);var inst_18351 = (inst_18350 > 0);var state_18376__$1 = state_18376;if(cljs.core.truth_(inst_18351))
{var statearr_18380_18402 = state_18376__$1;(statearr_18380_18402[1] = 4);
} else
{var statearr_18381_18403 = state_18376__$1;(statearr_18381_18403[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18377 === 3))
{var inst_18374 = (state_18376[2]);var state_18376__$1 = state_18376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18376__$1,inst_18374);
} else
{if((state_val_18377 === 4))
{var inst_18348 = (state_18376[7]);var state_18376__$1 = state_18376;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18376__$1,7,inst_18348);
} else
{if((state_val_18377 === 5))
{var inst_18370 = cljs.core.async.close_BANG_.call(null,out);var state_18376__$1 = state_18376;var statearr_18382_18404 = state_18376__$1;(statearr_18382_18404[2] = inst_18370);
(statearr_18382_18404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18377 === 6))
{var inst_18372 = (state_18376[2]);var state_18376__$1 = state_18376;var statearr_18383_18405 = state_18376__$1;(statearr_18383_18405[2] = inst_18372);
(statearr_18383_18405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18377 === 7))
{var inst_18356 = (state_18376[8]);var inst_18355 = (state_18376[9]);var inst_18355__$1 = (state_18376[2]);var inst_18356__$1 = cljs.core.nth.call(null,inst_18355__$1,0,null);var inst_18357 = cljs.core.nth.call(null,inst_18355__$1,1,null);var inst_18358 = (inst_18356__$1 == null);var state_18376__$1 = (function (){var statearr_18384 = state_18376;(statearr_18384[8] = inst_18356__$1);
(statearr_18384[10] = inst_18357);
(statearr_18384[9] = inst_18355__$1);
return statearr_18384;
})();if(cljs.core.truth_(inst_18358))
{var statearr_18385_18406 = state_18376__$1;(statearr_18385_18406[1] = 8);
} else
{var statearr_18386_18407 = state_18376__$1;(statearr_18386_18407[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18377 === 8))
{var inst_18348 = (state_18376[7]);var inst_18356 = (state_18376[8]);var inst_18357 = (state_18376[10]);var inst_18355 = (state_18376[9]);var inst_18360 = (function (){var c = inst_18357;var v = inst_18356;var vec__18353 = inst_18355;var cs = inst_18348;return ((function (c,v,vec__18353,cs,inst_18348,inst_18356,inst_18357,inst_18355,state_val_18377){
return (function (p1__18293_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18293_SHARP_);
});
;})(c,v,vec__18353,cs,inst_18348,inst_18356,inst_18357,inst_18355,state_val_18377))
})();var inst_18361 = cljs.core.filterv.call(null,inst_18360,inst_18348);var inst_18348__$1 = inst_18361;var state_18376__$1 = (function (){var statearr_18387 = state_18376;(statearr_18387[7] = inst_18348__$1);
return statearr_18387;
})();var statearr_18388_18408 = state_18376__$1;(statearr_18388_18408[2] = null);
(statearr_18388_18408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18377 === 9))
{var inst_18356 = (state_18376[8]);var state_18376__$1 = state_18376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18376__$1,11,out,inst_18356);
} else
{if((state_val_18377 === 10))
{var inst_18368 = (state_18376[2]);var state_18376__$1 = state_18376;var statearr_18390_18409 = state_18376__$1;(statearr_18390_18409[2] = inst_18368);
(statearr_18390_18409[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18377 === 11))
{var inst_18348 = (state_18376[7]);var inst_18365 = (state_18376[2]);var tmp18389 = inst_18348;var inst_18348__$1 = tmp18389;var state_18376__$1 = (function (){var statearr_18391 = state_18376;(statearr_18391[11] = inst_18365);
(statearr_18391[7] = inst_18348__$1);
return statearr_18391;
})();var statearr_18392_18410 = state_18376__$1;(statearr_18392_18410[2] = null);
(statearr_18392_18410[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18396 = (new Array(12));(statearr_18396[0] = state_machine__5792__auto__);
(statearr_18396[1] = 1);
return statearr_18396;
});
var state_machine__5792__auto____1 = (function (state_18376){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18376);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18397){if((e18397 instanceof Object))
{var ex__5795__auto__ = e18397;var statearr_18398_18411 = state_18376;(statearr_18398_18411[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18376);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18412 = state_18376;
state_18376 = G__18412;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18376){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18399 = f__5862__auto__.call(null);(statearr_18399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18400);
return statearr_18399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___18505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18482){var state_val_18483 = (state_18482[1]);if((state_val_18483 === 1))
{var inst_18459 = 0;var state_18482__$1 = (function (){var statearr_18484 = state_18482;(statearr_18484[7] = inst_18459);
return statearr_18484;
})();var statearr_18485_18506 = state_18482__$1;(statearr_18485_18506[2] = null);
(statearr_18485_18506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18483 === 2))
{var inst_18459 = (state_18482[7]);var inst_18461 = (inst_18459 < n);var state_18482__$1 = state_18482;if(cljs.core.truth_(inst_18461))
{var statearr_18486_18507 = state_18482__$1;(statearr_18486_18507[1] = 4);
} else
{var statearr_18487_18508 = state_18482__$1;(statearr_18487_18508[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18483 === 3))
{var inst_18479 = (state_18482[2]);var inst_18480 = cljs.core.async.close_BANG_.call(null,out);var state_18482__$1 = (function (){var statearr_18488 = state_18482;(statearr_18488[8] = inst_18479);
return statearr_18488;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18482__$1,inst_18480);
} else
{if((state_val_18483 === 4))
{var state_18482__$1 = state_18482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18482__$1,7,ch);
} else
{if((state_val_18483 === 5))
{var state_18482__$1 = state_18482;var statearr_18489_18509 = state_18482__$1;(statearr_18489_18509[2] = null);
(statearr_18489_18509[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18483 === 6))
{var inst_18477 = (state_18482[2]);var state_18482__$1 = state_18482;var statearr_18490_18510 = state_18482__$1;(statearr_18490_18510[2] = inst_18477);
(statearr_18490_18510[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18483 === 7))
{var inst_18464 = (state_18482[9]);var inst_18464__$1 = (state_18482[2]);var inst_18465 = (inst_18464__$1 == null);var inst_18466 = cljs.core.not.call(null,inst_18465);var state_18482__$1 = (function (){var statearr_18491 = state_18482;(statearr_18491[9] = inst_18464__$1);
return statearr_18491;
})();if(inst_18466)
{var statearr_18492_18511 = state_18482__$1;(statearr_18492_18511[1] = 8);
} else
{var statearr_18493_18512 = state_18482__$1;(statearr_18493_18512[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18483 === 8))
{var inst_18464 = (state_18482[9]);var state_18482__$1 = state_18482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18482__$1,11,out,inst_18464);
} else
{if((state_val_18483 === 9))
{var state_18482__$1 = state_18482;var statearr_18494_18513 = state_18482__$1;(statearr_18494_18513[2] = null);
(statearr_18494_18513[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18483 === 10))
{var inst_18474 = (state_18482[2]);var state_18482__$1 = state_18482;var statearr_18495_18514 = state_18482__$1;(statearr_18495_18514[2] = inst_18474);
(statearr_18495_18514[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18483 === 11))
{var inst_18459 = (state_18482[7]);var inst_18469 = (state_18482[2]);var inst_18470 = (inst_18459 + 1);var inst_18459__$1 = inst_18470;var state_18482__$1 = (function (){var statearr_18496 = state_18482;(statearr_18496[7] = inst_18459__$1);
(statearr_18496[10] = inst_18469);
return statearr_18496;
})();var statearr_18497_18515 = state_18482__$1;(statearr_18497_18515[2] = null);
(statearr_18497_18515[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18501 = (new Array(11));(statearr_18501[0] = state_machine__5792__auto__);
(statearr_18501[1] = 1);
return statearr_18501;
});
var state_machine__5792__auto____1 = (function (state_18482){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18482);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18502){if((e18502 instanceof Object))
{var ex__5795__auto__ = e18502;var statearr_18503_18516 = state_18482;(statearr_18503_18516[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18517 = state_18482;
state_18482 = G__18517;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18482){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18504 = f__5862__auto__.call(null);(statearr_18504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18505);
return statearr_18504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___18614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18589){var state_val_18590 = (state_18589[1]);if((state_val_18590 === 1))
{var inst_18566 = null;var state_18589__$1 = (function (){var statearr_18591 = state_18589;(statearr_18591[7] = inst_18566);
return statearr_18591;
})();var statearr_18592_18615 = state_18589__$1;(statearr_18592_18615[2] = null);
(statearr_18592_18615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18590 === 2))
{var state_18589__$1 = state_18589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18589__$1,4,ch);
} else
{if((state_val_18590 === 3))
{var inst_18586 = (state_18589[2]);var inst_18587 = cljs.core.async.close_BANG_.call(null,out);var state_18589__$1 = (function (){var statearr_18593 = state_18589;(statearr_18593[8] = inst_18586);
return statearr_18593;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18589__$1,inst_18587);
} else
{if((state_val_18590 === 4))
{var inst_18569 = (state_18589[9]);var inst_18569__$1 = (state_18589[2]);var inst_18570 = (inst_18569__$1 == null);var inst_18571 = cljs.core.not.call(null,inst_18570);var state_18589__$1 = (function (){var statearr_18594 = state_18589;(statearr_18594[9] = inst_18569__$1);
return statearr_18594;
})();if(inst_18571)
{var statearr_18595_18616 = state_18589__$1;(statearr_18595_18616[1] = 5);
} else
{var statearr_18596_18617 = state_18589__$1;(statearr_18596_18617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18590 === 5))
{var inst_18566 = (state_18589[7]);var inst_18569 = (state_18589[9]);var inst_18573 = cljs.core._EQ_.call(null,inst_18569,inst_18566);var state_18589__$1 = state_18589;if(inst_18573)
{var statearr_18597_18618 = state_18589__$1;(statearr_18597_18618[1] = 8);
} else
{var statearr_18598_18619 = state_18589__$1;(statearr_18598_18619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18590 === 6))
{var state_18589__$1 = state_18589;var statearr_18600_18620 = state_18589__$1;(statearr_18600_18620[2] = null);
(statearr_18600_18620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18590 === 7))
{var inst_18584 = (state_18589[2]);var state_18589__$1 = state_18589;var statearr_18601_18621 = state_18589__$1;(statearr_18601_18621[2] = inst_18584);
(statearr_18601_18621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18590 === 8))
{var inst_18566 = (state_18589[7]);var tmp18599 = inst_18566;var inst_18566__$1 = tmp18599;var state_18589__$1 = (function (){var statearr_18602 = state_18589;(statearr_18602[7] = inst_18566__$1);
return statearr_18602;
})();var statearr_18603_18622 = state_18589__$1;(statearr_18603_18622[2] = null);
(statearr_18603_18622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18590 === 9))
{var inst_18569 = (state_18589[9]);var state_18589__$1 = state_18589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18589__$1,11,out,inst_18569);
} else
{if((state_val_18590 === 10))
{var inst_18581 = (state_18589[2]);var state_18589__$1 = state_18589;var statearr_18604_18623 = state_18589__$1;(statearr_18604_18623[2] = inst_18581);
(statearr_18604_18623[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18590 === 11))
{var inst_18569 = (state_18589[9]);var inst_18578 = (state_18589[2]);var inst_18566 = inst_18569;var state_18589__$1 = (function (){var statearr_18605 = state_18589;(statearr_18605[7] = inst_18566);
(statearr_18605[10] = inst_18578);
return statearr_18605;
})();var statearr_18606_18624 = state_18589__$1;(statearr_18606_18624[2] = null);
(statearr_18606_18624[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18610 = (new Array(11));(statearr_18610[0] = state_machine__5792__auto__);
(statearr_18610[1] = 1);
return statearr_18610;
});
var state_machine__5792__auto____1 = (function (state_18589){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18589);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18611){if((e18611 instanceof Object))
{var ex__5795__auto__ = e18611;var statearr_18612_18625 = state_18589;(statearr_18612_18625[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18626 = state_18589;
state_18589 = G__18626;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18589){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18613 = f__5862__auto__.call(null);(statearr_18613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18614);
return statearr_18613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___18761 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18731){var state_val_18732 = (state_18731[1]);if((state_val_18732 === 1))
{var inst_18694 = (new Array(n));var inst_18695 = inst_18694;var inst_18696 = 0;var state_18731__$1 = (function (){var statearr_18733 = state_18731;(statearr_18733[7] = inst_18696);
(statearr_18733[8] = inst_18695);
return statearr_18733;
})();var statearr_18734_18762 = state_18731__$1;(statearr_18734_18762[2] = null);
(statearr_18734_18762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 2))
{var state_18731__$1 = state_18731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18731__$1,4,ch);
} else
{if((state_val_18732 === 3))
{var inst_18729 = (state_18731[2]);var state_18731__$1 = state_18731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18731__$1,inst_18729);
} else
{if((state_val_18732 === 4))
{var inst_18699 = (state_18731[9]);var inst_18699__$1 = (state_18731[2]);var inst_18700 = (inst_18699__$1 == null);var inst_18701 = cljs.core.not.call(null,inst_18700);var state_18731__$1 = (function (){var statearr_18735 = state_18731;(statearr_18735[9] = inst_18699__$1);
return statearr_18735;
})();if(inst_18701)
{var statearr_18736_18763 = state_18731__$1;(statearr_18736_18763[1] = 5);
} else
{var statearr_18737_18764 = state_18731__$1;(statearr_18737_18764[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 5))
{var inst_18699 = (state_18731[9]);var inst_18696 = (state_18731[7]);var inst_18695 = (state_18731[8]);var inst_18704 = (state_18731[10]);var inst_18703 = (inst_18695[inst_18696] = inst_18699);var inst_18704__$1 = (inst_18696 + 1);var inst_18705 = (inst_18704__$1 < n);var state_18731__$1 = (function (){var statearr_18738 = state_18731;(statearr_18738[10] = inst_18704__$1);
(statearr_18738[11] = inst_18703);
return statearr_18738;
})();if(cljs.core.truth_(inst_18705))
{var statearr_18739_18765 = state_18731__$1;(statearr_18739_18765[1] = 8);
} else
{var statearr_18740_18766 = state_18731__$1;(statearr_18740_18766[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 6))
{var inst_18696 = (state_18731[7]);var inst_18717 = (inst_18696 > 0);var state_18731__$1 = state_18731;if(cljs.core.truth_(inst_18717))
{var statearr_18742_18767 = state_18731__$1;(statearr_18742_18767[1] = 12);
} else
{var statearr_18743_18768 = state_18731__$1;(statearr_18743_18768[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 7))
{var inst_18727 = (state_18731[2]);var state_18731__$1 = state_18731;var statearr_18744_18769 = state_18731__$1;(statearr_18744_18769[2] = inst_18727);
(statearr_18744_18769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 8))
{var inst_18695 = (state_18731[8]);var inst_18704 = (state_18731[10]);var tmp18741 = inst_18695;var inst_18695__$1 = tmp18741;var inst_18696 = inst_18704;var state_18731__$1 = (function (){var statearr_18745 = state_18731;(statearr_18745[7] = inst_18696);
(statearr_18745[8] = inst_18695__$1);
return statearr_18745;
})();var statearr_18746_18770 = state_18731__$1;(statearr_18746_18770[2] = null);
(statearr_18746_18770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 9))
{var inst_18695 = (state_18731[8]);var inst_18709 = cljs.core.vec.call(null,inst_18695);var state_18731__$1 = state_18731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18731__$1,11,out,inst_18709);
} else
{if((state_val_18732 === 10))
{var inst_18715 = (state_18731[2]);var state_18731__$1 = state_18731;var statearr_18747_18771 = state_18731__$1;(statearr_18747_18771[2] = inst_18715);
(statearr_18747_18771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 11))
{var inst_18711 = (state_18731[2]);var inst_18712 = (new Array(n));var inst_18695 = inst_18712;var inst_18696 = 0;var state_18731__$1 = (function (){var statearr_18748 = state_18731;(statearr_18748[7] = inst_18696);
(statearr_18748[8] = inst_18695);
(statearr_18748[12] = inst_18711);
return statearr_18748;
})();var statearr_18749_18772 = state_18731__$1;(statearr_18749_18772[2] = null);
(statearr_18749_18772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 12))
{var inst_18695 = (state_18731[8]);var inst_18719 = cljs.core.vec.call(null,inst_18695);var state_18731__$1 = state_18731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18731__$1,15,out,inst_18719);
} else
{if((state_val_18732 === 13))
{var state_18731__$1 = state_18731;var statearr_18750_18773 = state_18731__$1;(statearr_18750_18773[2] = null);
(statearr_18750_18773[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 14))
{var inst_18724 = (state_18731[2]);var inst_18725 = cljs.core.async.close_BANG_.call(null,out);var state_18731__$1 = (function (){var statearr_18751 = state_18731;(statearr_18751[13] = inst_18724);
return statearr_18751;
})();var statearr_18752_18774 = state_18731__$1;(statearr_18752_18774[2] = inst_18725);
(statearr_18752_18774[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18732 === 15))
{var inst_18721 = (state_18731[2]);var state_18731__$1 = state_18731;var statearr_18753_18775 = state_18731__$1;(statearr_18753_18775[2] = inst_18721);
(statearr_18753_18775[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18757 = (new Array(14));(statearr_18757[0] = state_machine__5792__auto__);
(statearr_18757[1] = 1);
return statearr_18757;
});
var state_machine__5792__auto____1 = (function (state_18731){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18758){if((e18758 instanceof Object))
{var ex__5795__auto__ = e18758;var statearr_18759_18776 = state_18731;(statearr_18759_18776[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18731);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18777 = state_18731;
state_18731 = G__18777;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18731){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18760 = f__5862__auto__.call(null);(statearr_18760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18761);
return statearr_18760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___18920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18890){var state_val_18891 = (state_18890[1]);if((state_val_18891 === 1))
{var inst_18849 = (new Array(0));var inst_18850 = inst_18849;var inst_18851 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18890__$1 = (function (){var statearr_18892 = state_18890;(statearr_18892[7] = inst_18851);
(statearr_18892[8] = inst_18850);
return statearr_18892;
})();var statearr_18893_18921 = state_18890__$1;(statearr_18893_18921[2] = null);
(statearr_18893_18921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 2))
{var state_18890__$1 = state_18890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18890__$1,4,ch);
} else
{if((state_val_18891 === 3))
{var inst_18888 = (state_18890[2]);var state_18890__$1 = state_18890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18890__$1,inst_18888);
} else
{if((state_val_18891 === 4))
{var inst_18854 = (state_18890[9]);var inst_18854__$1 = (state_18890[2]);var inst_18855 = (inst_18854__$1 == null);var inst_18856 = cljs.core.not.call(null,inst_18855);var state_18890__$1 = (function (){var statearr_18894 = state_18890;(statearr_18894[9] = inst_18854__$1);
return statearr_18894;
})();if(inst_18856)
{var statearr_18895_18922 = state_18890__$1;(statearr_18895_18922[1] = 5);
} else
{var statearr_18896_18923 = state_18890__$1;(statearr_18896_18923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 5))
{var inst_18858 = (state_18890[10]);var inst_18854 = (state_18890[9]);var inst_18851 = (state_18890[7]);var inst_18858__$1 = f.call(null,inst_18854);var inst_18859 = cljs.core._EQ_.call(null,inst_18858__$1,inst_18851);var inst_18860 = cljs.core.keyword_identical_QMARK_.call(null,inst_18851,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18861 = (inst_18859) || (inst_18860);var state_18890__$1 = (function (){var statearr_18897 = state_18890;(statearr_18897[10] = inst_18858__$1);
return statearr_18897;
})();if(cljs.core.truth_(inst_18861))
{var statearr_18898_18924 = state_18890__$1;(statearr_18898_18924[1] = 8);
} else
{var statearr_18899_18925 = state_18890__$1;(statearr_18899_18925[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 6))
{var inst_18850 = (state_18890[8]);var inst_18875 = inst_18850.length;var inst_18876 = (inst_18875 > 0);var state_18890__$1 = state_18890;if(cljs.core.truth_(inst_18876))
{var statearr_18901_18926 = state_18890__$1;(statearr_18901_18926[1] = 12);
} else
{var statearr_18902_18927 = state_18890__$1;(statearr_18902_18927[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 7))
{var inst_18886 = (state_18890[2]);var state_18890__$1 = state_18890;var statearr_18903_18928 = state_18890__$1;(statearr_18903_18928[2] = inst_18886);
(statearr_18903_18928[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 8))
{var inst_18858 = (state_18890[10]);var inst_18854 = (state_18890[9]);var inst_18850 = (state_18890[8]);var inst_18863 = inst_18850.push(inst_18854);var tmp18900 = inst_18850;var inst_18850__$1 = tmp18900;var inst_18851 = inst_18858;var state_18890__$1 = (function (){var statearr_18904 = state_18890;(statearr_18904[7] = inst_18851);
(statearr_18904[8] = inst_18850__$1);
(statearr_18904[11] = inst_18863);
return statearr_18904;
})();var statearr_18905_18929 = state_18890__$1;(statearr_18905_18929[2] = null);
(statearr_18905_18929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 9))
{var inst_18850 = (state_18890[8]);var inst_18866 = cljs.core.vec.call(null,inst_18850);var state_18890__$1 = state_18890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18890__$1,11,out,inst_18866);
} else
{if((state_val_18891 === 10))
{var inst_18873 = (state_18890[2]);var state_18890__$1 = state_18890;var statearr_18906_18930 = state_18890__$1;(statearr_18906_18930[2] = inst_18873);
(statearr_18906_18930[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 11))
{var inst_18858 = (state_18890[10]);var inst_18854 = (state_18890[9]);var inst_18868 = (state_18890[2]);var inst_18869 = (new Array(0));var inst_18870 = inst_18869.push(inst_18854);var inst_18850 = inst_18869;var inst_18851 = inst_18858;var state_18890__$1 = (function (){var statearr_18907 = state_18890;(statearr_18907[7] = inst_18851);
(statearr_18907[8] = inst_18850);
(statearr_18907[12] = inst_18870);
(statearr_18907[13] = inst_18868);
return statearr_18907;
})();var statearr_18908_18931 = state_18890__$1;(statearr_18908_18931[2] = null);
(statearr_18908_18931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 12))
{var inst_18850 = (state_18890[8]);var inst_18878 = cljs.core.vec.call(null,inst_18850);var state_18890__$1 = state_18890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18890__$1,15,out,inst_18878);
} else
{if((state_val_18891 === 13))
{var state_18890__$1 = state_18890;var statearr_18909_18932 = state_18890__$1;(statearr_18909_18932[2] = null);
(statearr_18909_18932[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 14))
{var inst_18883 = (state_18890[2]);var inst_18884 = cljs.core.async.close_BANG_.call(null,out);var state_18890__$1 = (function (){var statearr_18910 = state_18890;(statearr_18910[14] = inst_18883);
return statearr_18910;
})();var statearr_18911_18933 = state_18890__$1;(statearr_18911_18933[2] = inst_18884);
(statearr_18911_18933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18891 === 15))
{var inst_18880 = (state_18890[2]);var state_18890__$1 = state_18890;var statearr_18912_18934 = state_18890__$1;(statearr_18912_18934[2] = inst_18880);
(statearr_18912_18934[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_18916 = (new Array(15));(statearr_18916[0] = state_machine__5792__auto__);
(statearr_18916[1] = 1);
return statearr_18916;
});
var state_machine__5792__auto____1 = (function (state_18890){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18917){if((e18917 instanceof Object))
{var ex__5795__auto__ = e18917;var statearr_18918_18935 = state_18890;(statearr_18918_18935[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18936 = state_18890;
state_18890 = G__18936;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18890){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18919 = f__5862__auto__.call(null);(statearr_18919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18920);
return statearr_18919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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