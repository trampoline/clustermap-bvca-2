// Compiled by ClojureScript 0.0-2261
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14386 = (function (f,fn_handler,meta14387){
this.f = f;
this.fn_handler = fn_handler;
this.meta14387 = meta14387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14386.cljs$lang$type = true;
cljs.core.async.t14386.cljs$lang$ctorStr = "cljs.core.async/t14386";
cljs.core.async.t14386.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14386");
});
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14388){var self__ = this;
var _14388__$1 = this;return self__.meta14387;
});
cljs.core.async.t14386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14388,meta14387__$1){var self__ = this;
var _14388__$1 = this;return (new cljs.core.async.t14386(self__.f,self__.fn_handler,meta14387__$1));
});
cljs.core.async.__GT_t14386 = (function __GT_t14386(f__$1,fn_handler__$1,meta14387){return (new cljs.core.async.t14386(f__$1,fn_handler__$1,meta14387));
});
}
return (new cljs.core.async.t14386(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14390 = buff;if(G__14390)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__14390.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14390.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14390);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
{var val_14391 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14391);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14391,ret){
return (function (){return fn1.call(null,val_14391);
});})(val_14391,ret))
);
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
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___14392 = n;var x_14393 = (0);while(true){
if((x_14393 < n__4399__auto___14392))
{(a[x_14393] = (0));
{
var G__14394 = (x_14393 + (1));
x_14393 = G__14394;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14395 = (i + (1));
i = G__14395;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14399 = (function (flag,alt_flag,meta14400){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14400 = meta14400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14399.cljs$lang$type = true;
cljs.core.async.t14399.cljs$lang$ctorStr = "cljs.core.async/t14399";
cljs.core.async.t14399.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14399");
});})(flag))
;
cljs.core.async.t14399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14401){var self__ = this;
var _14401__$1 = this;return self__.meta14400;
});})(flag))
;
cljs.core.async.t14399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14401,meta14400__$1){var self__ = this;
var _14401__$1 = this;return (new cljs.core.async.t14399(self__.flag,self__.alt_flag,meta14400__$1));
});})(flag))
;
cljs.core.async.__GT_t14399 = ((function (flag){
return (function __GT_t14399(flag__$1,alt_flag__$1,meta14400){return (new cljs.core.async.t14399(flag__$1,alt_flag__$1,meta14400));
});})(flag))
;
}
return (new cljs.core.async.t14399(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14405 = (function (cb,flag,alt_handler,meta14406){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14406 = meta14406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14405.cljs$lang$type = true;
cljs.core.async.t14405.cljs$lang$ctorStr = "cljs.core.async/t14405";
cljs.core.async.t14405.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14405");
});
cljs.core.async.t14405.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14407){var self__ = this;
var _14407__$1 = this;return self__.meta14406;
});
cljs.core.async.t14405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14407,meta14406__$1){var self__ = this;
var _14407__$1 = this;return (new cljs.core.async.t14405(self__.cb,self__.flag,self__.alt_handler,meta14406__$1));
});
cljs.core.async.__GT_t14405 = (function __GT_t14405(cb__$1,flag__$1,alt_handler__$1,meta14406){return (new cljs.core.async.t14405(cb__$1,flag__$1,alt_handler__$1,meta14406));
});
}
return (new cljs.core.async.t14405(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14408_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14408_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14409 = (i + (1));
i = G__14409;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__14410){var map__14412 = p__14410;var map__14412__$1 = ((cljs.core.seq_QMARK_.call(null,map__14412))?cljs.core.apply.call(null,cljs.core.hash_map,map__14412):map__14412);var opts = map__14412__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14410 = null;if (arguments.length > 1) {
  p__14410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14410);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14413){
var ports = cljs.core.first(arglist__14413);
var p__14410 = cljs.core.rest(arglist__14413);
return alts_BANG___delegate(ports,p__14410);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14421 = (function (ch,f,map_LT_,meta14422){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14422 = meta14422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14421.cljs$lang$type = true;
cljs.core.async.t14421.cljs$lang$ctorStr = "cljs.core.async/t14421";
cljs.core.async.t14421.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14421");
});
cljs.core.async.t14421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14424 = (function (fn1,_,meta14422,ch,f,map_LT_,meta14425){
this.fn1 = fn1;
this._ = _;
this.meta14422 = meta14422;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14425 = meta14425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14424.cljs$lang$type = true;
cljs.core.async.t14424.cljs$lang$ctorStr = "cljs.core.async/t14424";
cljs.core.async.t14424.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14424");
});})(___$1))
;
cljs.core.async.t14424.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14424.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14414_SHARP_){return f1.call(null,(((p1__14414_SHARP_ == null))?null:self__.f.call(null,p1__14414_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14426){var self__ = this;
var _14426__$1 = this;return self__.meta14425;
});})(___$1))
;
cljs.core.async.t14424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14426,meta14425__$1){var self__ = this;
var _14426__$1 = this;return (new cljs.core.async.t14424(self__.fn1,self__._,self__.meta14422,self__.ch,self__.f,self__.map_LT_,meta14425__$1));
});})(___$1))
;
cljs.core.async.__GT_t14424 = ((function (___$1){
return (function __GT_t14424(fn1__$1,___$2,meta14422__$1,ch__$2,f__$2,map_LT___$2,meta14425){return (new cljs.core.async.t14424(fn1__$1,___$2,meta14422__$1,ch__$2,f__$2,map_LT___$2,meta14425));
});})(___$1))
;
}
return (new cljs.core.async.t14424(fn1,___$1,self__.meta14422,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14421.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14423){var self__ = this;
var _14423__$1 = this;return self__.meta14422;
});
cljs.core.async.t14421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14423,meta14422__$1){var self__ = this;
var _14423__$1 = this;return (new cljs.core.async.t14421(self__.ch,self__.f,self__.map_LT_,meta14422__$1));
});
cljs.core.async.__GT_t14421 = (function __GT_t14421(ch__$1,f__$1,map_LT___$1,meta14422){return (new cljs.core.async.t14421(ch__$1,f__$1,map_LT___$1,meta14422));
});
}
return (new cljs.core.async.t14421(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14430 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14430 = (function (ch,f,map_GT_,meta14431){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14431 = meta14431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14430.cljs$lang$type = true;
cljs.core.async.t14430.cljs$lang$ctorStr = "cljs.core.async/t14430";
cljs.core.async.t14430.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14430");
});
cljs.core.async.t14430.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14430.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14430.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14432){var self__ = this;
var _14432__$1 = this;return self__.meta14431;
});
cljs.core.async.t14430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14432,meta14431__$1){var self__ = this;
var _14432__$1 = this;return (new cljs.core.async.t14430(self__.ch,self__.f,self__.map_GT_,meta14431__$1));
});
cljs.core.async.__GT_t14430 = (function __GT_t14430(ch__$1,f__$1,map_GT___$1,meta14431){return (new cljs.core.async.t14430(ch__$1,f__$1,map_GT___$1,meta14431));
});
}
return (new cljs.core.async.t14430(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14436 = (function (ch,p,filter_GT_,meta14437){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14437 = meta14437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14436.cljs$lang$type = true;
cljs.core.async.t14436.cljs$lang$ctorStr = "cljs.core.async/t14436";
cljs.core.async.t14436.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14436");
});
cljs.core.async.t14436.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14436.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14436.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14438){var self__ = this;
var _14438__$1 = this;return self__.meta14437;
});
cljs.core.async.t14436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14438,meta14437__$1){var self__ = this;
var _14438__$1 = this;return (new cljs.core.async.t14436(self__.ch,self__.p,self__.filter_GT_,meta14437__$1));
});
cljs.core.async.__GT_t14436 = (function __GT_t14436(ch__$1,p__$1,filter_GT___$1,meta14437){return (new cljs.core.async.t14436(ch__$1,p__$1,filter_GT___$1,meta14437));
});
}
return (new cljs.core.async.t14436(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___14521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___14521,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___14521,out){
return (function (state_14500){var state_val_14501 = (state_14500[(1)]);if((state_val_14501 === (7)))
{var inst_14496 = (state_14500[(2)]);var state_14500__$1 = state_14500;var statearr_14502_14522 = state_14500__$1;(statearr_14502_14522[(2)] = inst_14496);
(statearr_14502_14522[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (1)))
{var state_14500__$1 = state_14500;var statearr_14503_14523 = state_14500__$1;(statearr_14503_14523[(2)] = null);
(statearr_14503_14523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (4)))
{var inst_14482 = (state_14500[(7)]);var inst_14482__$1 = (state_14500[(2)]);var inst_14483 = (inst_14482__$1 == null);var state_14500__$1 = (function (){var statearr_14504 = state_14500;(statearr_14504[(7)] = inst_14482__$1);
return statearr_14504;
})();if(cljs.core.truth_(inst_14483))
{var statearr_14505_14524 = state_14500__$1;(statearr_14505_14524[(1)] = (5));
} else
{var statearr_14506_14525 = state_14500__$1;(statearr_14506_14525[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (6)))
{var inst_14482 = (state_14500[(7)]);var inst_14487 = p.call(null,inst_14482);var state_14500__$1 = state_14500;if(cljs.core.truth_(inst_14487))
{var statearr_14507_14526 = state_14500__$1;(statearr_14507_14526[(1)] = (8));
} else
{var statearr_14508_14527 = state_14500__$1;(statearr_14508_14527[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (3)))
{var inst_14498 = (state_14500[(2)]);var state_14500__$1 = state_14500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14500__$1,inst_14498);
} else
{if((state_val_14501 === (2)))
{var state_14500__$1 = state_14500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14500__$1,(4),ch);
} else
{if((state_val_14501 === (11)))
{var inst_14490 = (state_14500[(2)]);var state_14500__$1 = state_14500;var statearr_14509_14528 = state_14500__$1;(statearr_14509_14528[(2)] = inst_14490);
(statearr_14509_14528[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (9)))
{var state_14500__$1 = state_14500;var statearr_14510_14529 = state_14500__$1;(statearr_14510_14529[(2)] = null);
(statearr_14510_14529[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (5)))
{var inst_14485 = cljs.core.async.close_BANG_.call(null,out);var state_14500__$1 = state_14500;var statearr_14511_14530 = state_14500__$1;(statearr_14511_14530[(2)] = inst_14485);
(statearr_14511_14530[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (10)))
{var inst_14493 = (state_14500[(2)]);var state_14500__$1 = (function (){var statearr_14512 = state_14500;(statearr_14512[(8)] = inst_14493);
return statearr_14512;
})();var statearr_14513_14531 = state_14500__$1;(statearr_14513_14531[(2)] = null);
(statearr_14513_14531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14501 === (8)))
{var inst_14482 = (state_14500[(7)]);var state_14500__$1 = state_14500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14500__$1,(11),out,inst_14482);
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
});})(c__5693__auto___14521,out))
;return ((function (switch__5678__auto__,c__5693__auto___14521,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_14517 = [null,null,null,null,null,null,null,null,null];(statearr_14517[(0)] = state_machine__5679__auto__);
(statearr_14517[(1)] = (1));
return statearr_14517;
});
var state_machine__5679__auto____1 = (function (state_14500){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14518){if((e14518 instanceof Object))
{var ex__5682__auto__ = e14518;var statearr_14519_14532 = state_14500;(statearr_14519_14532[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14533 = state_14500;
state_14500 = G__14533;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14500){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___14521,out))
})();var state__5695__auto__ = (function (){var statearr_14520 = f__5694__auto__.call(null);(statearr_14520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___14521);
return statearr_14520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___14521,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_14685){var state_val_14686 = (state_14685[(1)]);if((state_val_14686 === (7)))
{var inst_14681 = (state_14685[(2)]);var state_14685__$1 = state_14685;var statearr_14687_14724 = state_14685__$1;(statearr_14687_14724[(2)] = inst_14681);
(statearr_14687_14724[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (20)))
{var inst_14656 = (state_14685[(7)]);var inst_14667 = (state_14685[(2)]);var inst_14668 = cljs.core.next.call(null,inst_14656);var inst_14642 = inst_14668;var inst_14643 = null;var inst_14644 = (0);var inst_14645 = (0);var state_14685__$1 = (function (){var statearr_14688 = state_14685;(statearr_14688[(8)] = inst_14644);
(statearr_14688[(9)] = inst_14642);
(statearr_14688[(10)] = inst_14643);
(statearr_14688[(11)] = inst_14667);
(statearr_14688[(12)] = inst_14645);
return statearr_14688;
})();var statearr_14689_14725 = state_14685__$1;(statearr_14689_14725[(2)] = null);
(statearr_14689_14725[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (1)))
{var state_14685__$1 = state_14685;var statearr_14690_14726 = state_14685__$1;(statearr_14690_14726[(2)] = null);
(statearr_14690_14726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (4)))
{var inst_14631 = (state_14685[(13)]);var inst_14631__$1 = (state_14685[(2)]);var inst_14632 = (inst_14631__$1 == null);var state_14685__$1 = (function (){var statearr_14694 = state_14685;(statearr_14694[(13)] = inst_14631__$1);
return statearr_14694;
})();if(cljs.core.truth_(inst_14632))
{var statearr_14695_14727 = state_14685__$1;(statearr_14695_14727[(1)] = (5));
} else
{var statearr_14696_14728 = state_14685__$1;(statearr_14696_14728[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (15)))
{var state_14685__$1 = state_14685;var statearr_14697_14729 = state_14685__$1;(statearr_14697_14729[(2)] = null);
(statearr_14697_14729[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (13)))
{var inst_14644 = (state_14685[(8)]);var inst_14642 = (state_14685[(9)]);var inst_14643 = (state_14685[(10)]);var inst_14645 = (state_14685[(12)]);var inst_14652 = (state_14685[(2)]);var inst_14653 = (inst_14645 + (1));var tmp14691 = inst_14644;var tmp14692 = inst_14642;var tmp14693 = inst_14643;var inst_14642__$1 = tmp14692;var inst_14643__$1 = tmp14693;var inst_14644__$1 = tmp14691;var inst_14645__$1 = inst_14653;var state_14685__$1 = (function (){var statearr_14698 = state_14685;(statearr_14698[(8)] = inst_14644__$1);
(statearr_14698[(9)] = inst_14642__$1);
(statearr_14698[(10)] = inst_14643__$1);
(statearr_14698[(12)] = inst_14645__$1);
(statearr_14698[(14)] = inst_14652);
return statearr_14698;
})();var statearr_14699_14730 = state_14685__$1;(statearr_14699_14730[(2)] = null);
(statearr_14699_14730[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (6)))
{var inst_14631 = (state_14685[(13)]);var inst_14636 = f.call(null,inst_14631);var inst_14641 = cljs.core.seq.call(null,inst_14636);var inst_14642 = inst_14641;var inst_14643 = null;var inst_14644 = (0);var inst_14645 = (0);var state_14685__$1 = (function (){var statearr_14700 = state_14685;(statearr_14700[(8)] = inst_14644);
(statearr_14700[(9)] = inst_14642);
(statearr_14700[(10)] = inst_14643);
(statearr_14700[(12)] = inst_14645);
return statearr_14700;
})();var statearr_14701_14731 = state_14685__$1;(statearr_14701_14731[(2)] = null);
(statearr_14701_14731[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (17)))
{var inst_14656 = (state_14685[(7)]);var inst_14660 = cljs.core.chunk_first.call(null,inst_14656);var inst_14661 = cljs.core.chunk_rest.call(null,inst_14656);var inst_14662 = cljs.core.count.call(null,inst_14660);var inst_14642 = inst_14661;var inst_14643 = inst_14660;var inst_14644 = inst_14662;var inst_14645 = (0);var state_14685__$1 = (function (){var statearr_14702 = state_14685;(statearr_14702[(8)] = inst_14644);
(statearr_14702[(9)] = inst_14642);
(statearr_14702[(10)] = inst_14643);
(statearr_14702[(12)] = inst_14645);
return statearr_14702;
})();var statearr_14703_14732 = state_14685__$1;(statearr_14703_14732[(2)] = null);
(statearr_14703_14732[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (3)))
{var inst_14683 = (state_14685[(2)]);var state_14685__$1 = state_14685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14685__$1,inst_14683);
} else
{if((state_val_14686 === (12)))
{var inst_14676 = (state_14685[(2)]);var state_14685__$1 = state_14685;var statearr_14704_14733 = state_14685__$1;(statearr_14704_14733[(2)] = inst_14676);
(statearr_14704_14733[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (2)))
{var state_14685__$1 = state_14685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14685__$1,(4),in$);
} else
{if((state_val_14686 === (19)))
{var inst_14671 = (state_14685[(2)]);var state_14685__$1 = state_14685;var statearr_14705_14734 = state_14685__$1;(statearr_14705_14734[(2)] = inst_14671);
(statearr_14705_14734[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (11)))
{var inst_14642 = (state_14685[(9)]);var inst_14656 = (state_14685[(7)]);var inst_14656__$1 = cljs.core.seq.call(null,inst_14642);var state_14685__$1 = (function (){var statearr_14706 = state_14685;(statearr_14706[(7)] = inst_14656__$1);
return statearr_14706;
})();if(inst_14656__$1)
{var statearr_14707_14735 = state_14685__$1;(statearr_14707_14735[(1)] = (14));
} else
{var statearr_14708_14736 = state_14685__$1;(statearr_14708_14736[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (9)))
{var inst_14678 = (state_14685[(2)]);var state_14685__$1 = (function (){var statearr_14709 = state_14685;(statearr_14709[(15)] = inst_14678);
return statearr_14709;
})();var statearr_14710_14737 = state_14685__$1;(statearr_14710_14737[(2)] = null);
(statearr_14710_14737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (5)))
{var inst_14634 = cljs.core.async.close_BANG_.call(null,out);var state_14685__$1 = state_14685;var statearr_14711_14738 = state_14685__$1;(statearr_14711_14738[(2)] = inst_14634);
(statearr_14711_14738[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (14)))
{var inst_14656 = (state_14685[(7)]);var inst_14658 = cljs.core.chunked_seq_QMARK_.call(null,inst_14656);var state_14685__$1 = state_14685;if(inst_14658)
{var statearr_14712_14739 = state_14685__$1;(statearr_14712_14739[(1)] = (17));
} else
{var statearr_14713_14740 = state_14685__$1;(statearr_14713_14740[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (16)))
{var inst_14674 = (state_14685[(2)]);var state_14685__$1 = state_14685;var statearr_14714_14741 = state_14685__$1;(statearr_14714_14741[(2)] = inst_14674);
(statearr_14714_14741[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14686 === (10)))
{var inst_14643 = (state_14685[(10)]);var inst_14645 = (state_14685[(12)]);var inst_14650 = cljs.core._nth.call(null,inst_14643,inst_14645);var state_14685__$1 = state_14685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14685__$1,(13),out,inst_14650);
} else
{if((state_val_14686 === (18)))
{var inst_14656 = (state_14685[(7)]);var inst_14665 = cljs.core.first.call(null,inst_14656);var state_14685__$1 = state_14685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14685__$1,(20),out,inst_14665);
} else
{if((state_val_14686 === (8)))
{var inst_14644 = (state_14685[(8)]);var inst_14645 = (state_14685[(12)]);var inst_14647 = (inst_14645 < inst_14644);var inst_14648 = inst_14647;var state_14685__$1 = state_14685;if(cljs.core.truth_(inst_14648))
{var statearr_14715_14742 = state_14685__$1;(statearr_14715_14742[(1)] = (10));
} else
{var statearr_14716_14743 = state_14685__$1;(statearr_14716_14743[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_14720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14720[(0)] = state_machine__5679__auto__);
(statearr_14720[(1)] = (1));
return statearr_14720;
});
var state_machine__5679__auto____1 = (function (state_14685){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14721){if((e14721 instanceof Object))
{var ex__5682__auto__ = e14721;var statearr_14722_14744 = state_14685;(statearr_14722_14744[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14745 = state_14685;
state_14685 = G__14745;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14685){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_14723 = f__5694__auto__.call(null);(statearr_14723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_14723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___14826 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___14826){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___14826){
return (function (state_14805){var state_val_14806 = (state_14805[(1)]);if((state_val_14806 === (7)))
{var inst_14801 = (state_14805[(2)]);var state_14805__$1 = state_14805;var statearr_14807_14827 = state_14805__$1;(statearr_14807_14827[(2)] = inst_14801);
(statearr_14807_14827[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14806 === (1)))
{var state_14805__$1 = state_14805;var statearr_14808_14828 = state_14805__$1;(statearr_14808_14828[(2)] = null);
(statearr_14808_14828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14806 === (4)))
{var inst_14788 = (state_14805[(7)]);var inst_14788__$1 = (state_14805[(2)]);var inst_14789 = (inst_14788__$1 == null);var state_14805__$1 = (function (){var statearr_14809 = state_14805;(statearr_14809[(7)] = inst_14788__$1);
return statearr_14809;
})();if(cljs.core.truth_(inst_14789))
{var statearr_14810_14829 = state_14805__$1;(statearr_14810_14829[(1)] = (5));
} else
{var statearr_14811_14830 = state_14805__$1;(statearr_14811_14830[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14806 === (6)))
{var inst_14788 = (state_14805[(7)]);var state_14805__$1 = state_14805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14805__$1,(11),to,inst_14788);
} else
{if((state_val_14806 === (3)))
{var inst_14803 = (state_14805[(2)]);var state_14805__$1 = state_14805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14805__$1,inst_14803);
} else
{if((state_val_14806 === (2)))
{var state_14805__$1 = state_14805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14805__$1,(4),from);
} else
{if((state_val_14806 === (11)))
{var inst_14798 = (state_14805[(2)]);var state_14805__$1 = (function (){var statearr_14812 = state_14805;(statearr_14812[(8)] = inst_14798);
return statearr_14812;
})();var statearr_14813_14831 = state_14805__$1;(statearr_14813_14831[(2)] = null);
(statearr_14813_14831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14806 === (9)))
{var state_14805__$1 = state_14805;var statearr_14814_14832 = state_14805__$1;(statearr_14814_14832[(2)] = null);
(statearr_14814_14832[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14806 === (5)))
{var state_14805__$1 = state_14805;if(cljs.core.truth_(close_QMARK_))
{var statearr_14815_14833 = state_14805__$1;(statearr_14815_14833[(1)] = (8));
} else
{var statearr_14816_14834 = state_14805__$1;(statearr_14816_14834[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14806 === (10)))
{var inst_14795 = (state_14805[(2)]);var state_14805__$1 = state_14805;var statearr_14817_14835 = state_14805__$1;(statearr_14817_14835[(2)] = inst_14795);
(statearr_14817_14835[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14806 === (8)))
{var inst_14792 = cljs.core.async.close_BANG_.call(null,to);var state_14805__$1 = state_14805;var statearr_14818_14836 = state_14805__$1;(statearr_14818_14836[(2)] = inst_14792);
(statearr_14818_14836[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___14826))
;return ((function (switch__5678__auto__,c__5693__auto___14826){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_14822 = [null,null,null,null,null,null,null,null,null];(statearr_14822[(0)] = state_machine__5679__auto__);
(statearr_14822[(1)] = (1));
return statearr_14822;
});
var state_machine__5679__auto____1 = (function (state_14805){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14823){if((e14823 instanceof Object))
{var ex__5682__auto__ = e14823;var statearr_14824_14837 = state_14805;(statearr_14824_14837[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14838 = state_14805;
state_14805 = G__14838;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14805){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___14826))
})();var state__5695__auto__ = (function (){var statearr_14825 = f__5694__auto__.call(null);(statearr_14825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___14826);
return statearr_14825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___14826))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___14925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___14925,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___14925,tc,fc){
return (function (state_14903){var state_val_14904 = (state_14903[(1)]);if((state_val_14904 === (7)))
{var inst_14899 = (state_14903[(2)]);var state_14903__$1 = state_14903;var statearr_14905_14926 = state_14903__$1;(statearr_14905_14926[(2)] = inst_14899);
(statearr_14905_14926[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14904 === (1)))
{var state_14903__$1 = state_14903;var statearr_14906_14927 = state_14903__$1;(statearr_14906_14927[(2)] = null);
(statearr_14906_14927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14904 === (4)))
{var inst_14884 = (state_14903[(7)]);var inst_14884__$1 = (state_14903[(2)]);var inst_14885 = (inst_14884__$1 == null);var state_14903__$1 = (function (){var statearr_14907 = state_14903;(statearr_14907[(7)] = inst_14884__$1);
return statearr_14907;
})();if(cljs.core.truth_(inst_14885))
{var statearr_14908_14928 = state_14903__$1;(statearr_14908_14928[(1)] = (5));
} else
{var statearr_14909_14929 = state_14903__$1;(statearr_14909_14929[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14904 === (6)))
{var inst_14884 = (state_14903[(7)]);var inst_14890 = p.call(null,inst_14884);var state_14903__$1 = state_14903;if(cljs.core.truth_(inst_14890))
{var statearr_14910_14930 = state_14903__$1;(statearr_14910_14930[(1)] = (9));
} else
{var statearr_14911_14931 = state_14903__$1;(statearr_14911_14931[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14904 === (3)))
{var inst_14901 = (state_14903[(2)]);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14903__$1,inst_14901);
} else
{if((state_val_14904 === (2)))
{var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14903__$1,(4),ch);
} else
{if((state_val_14904 === (11)))
{var inst_14884 = (state_14903[(7)]);var inst_14894 = (state_14903[(2)]);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14903__$1,(8),inst_14894,inst_14884);
} else
{if((state_val_14904 === (9)))
{var state_14903__$1 = state_14903;var statearr_14912_14932 = state_14903__$1;(statearr_14912_14932[(2)] = tc);
(statearr_14912_14932[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14904 === (5)))
{var inst_14887 = cljs.core.async.close_BANG_.call(null,tc);var inst_14888 = cljs.core.async.close_BANG_.call(null,fc);var state_14903__$1 = (function (){var statearr_14913 = state_14903;(statearr_14913[(8)] = inst_14887);
return statearr_14913;
})();var statearr_14914_14933 = state_14903__$1;(statearr_14914_14933[(2)] = inst_14888);
(statearr_14914_14933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14904 === (10)))
{var state_14903__$1 = state_14903;var statearr_14915_14934 = state_14903__$1;(statearr_14915_14934[(2)] = fc);
(statearr_14915_14934[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14904 === (8)))
{var inst_14896 = (state_14903[(2)]);var state_14903__$1 = (function (){var statearr_14916 = state_14903;(statearr_14916[(9)] = inst_14896);
return statearr_14916;
})();var statearr_14917_14935 = state_14903__$1;(statearr_14917_14935[(2)] = null);
(statearr_14917_14935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___14925,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___14925,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_14921 = [null,null,null,null,null,null,null,null,null,null];(statearr_14921[(0)] = state_machine__5679__auto__);
(statearr_14921[(1)] = (1));
return statearr_14921;
});
var state_machine__5679__auto____1 = (function (state_14903){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14903);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14922){if((e14922 instanceof Object))
{var ex__5682__auto__ = e14922;var statearr_14923_14936 = state_14903;(statearr_14923_14936[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14903);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14937 = state_14903;
state_14903 = G__14937;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14903){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___14925,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_14924 = f__5694__auto__.call(null);(statearr_14924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___14925);
return statearr_14924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___14925,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_14984){var state_val_14985 = (state_14984[(1)]);if((state_val_14985 === (7)))
{var inst_14980 = (state_14984[(2)]);var state_14984__$1 = state_14984;var statearr_14986_15002 = state_14984__$1;(statearr_14986_15002[(2)] = inst_14980);
(statearr_14986_15002[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14985 === (6)))
{var inst_14973 = (state_14984[(7)]);var inst_14970 = (state_14984[(8)]);var inst_14977 = f.call(null,inst_14970,inst_14973);var inst_14970__$1 = inst_14977;var state_14984__$1 = (function (){var statearr_14987 = state_14984;(statearr_14987[(8)] = inst_14970__$1);
return statearr_14987;
})();var statearr_14988_15003 = state_14984__$1;(statearr_14988_15003[(2)] = null);
(statearr_14988_15003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14985 === (5)))
{var inst_14970 = (state_14984[(8)]);var state_14984__$1 = state_14984;var statearr_14989_15004 = state_14984__$1;(statearr_14989_15004[(2)] = inst_14970);
(statearr_14989_15004[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14985 === (4)))
{var inst_14973 = (state_14984[(7)]);var inst_14973__$1 = (state_14984[(2)]);var inst_14974 = (inst_14973__$1 == null);var state_14984__$1 = (function (){var statearr_14990 = state_14984;(statearr_14990[(7)] = inst_14973__$1);
return statearr_14990;
})();if(cljs.core.truth_(inst_14974))
{var statearr_14991_15005 = state_14984__$1;(statearr_14991_15005[(1)] = (5));
} else
{var statearr_14992_15006 = state_14984__$1;(statearr_14992_15006[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14985 === (3)))
{var inst_14982 = (state_14984[(2)]);var state_14984__$1 = state_14984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14984__$1,inst_14982);
} else
{if((state_val_14985 === (2)))
{var state_14984__$1 = state_14984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14984__$1,(4),ch);
} else
{if((state_val_14985 === (1)))
{var inst_14970 = init;var state_14984__$1 = (function (){var statearr_14993 = state_14984;(statearr_14993[(8)] = inst_14970);
return statearr_14993;
})();var statearr_14994_15007 = state_14984__$1;(statearr_14994_15007[(2)] = null);
(statearr_14994_15007[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_14998 = [null,null,null,null,null,null,null,null,null];(statearr_14998[(0)] = state_machine__5679__auto__);
(statearr_14998[(1)] = (1));
return statearr_14998;
});
var state_machine__5679__auto____1 = (function (state_14984){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14999){if((e14999 instanceof Object))
{var ex__5682__auto__ = e14999;var statearr_15000_15008 = state_14984;(statearr_15000_15008[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15009 = state_14984;
state_14984 = G__15009;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14984){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15001 = f__5694__auto__.call(null);(statearr_15001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_15071){var state_val_15072 = (state_15071[(1)]);if((state_val_15072 === (7)))
{var inst_15052 = (state_15071[(7)]);var inst_15057 = (state_15071[(2)]);var inst_15058 = cljs.core.next.call(null,inst_15052);var inst_15052__$1 = inst_15058;var state_15071__$1 = (function (){var statearr_15073 = state_15071;(statearr_15073[(7)] = inst_15052__$1);
(statearr_15073[(8)] = inst_15057);
return statearr_15073;
})();var statearr_15074_15092 = state_15071__$1;(statearr_15074_15092[(2)] = null);
(statearr_15074_15092[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15072 === (1)))
{var inst_15051 = cljs.core.seq.call(null,coll);var inst_15052 = inst_15051;var state_15071__$1 = (function (){var statearr_15075 = state_15071;(statearr_15075[(7)] = inst_15052);
return statearr_15075;
})();var statearr_15076_15093 = state_15071__$1;(statearr_15076_15093[(2)] = null);
(statearr_15076_15093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15072 === (4)))
{var inst_15052 = (state_15071[(7)]);var inst_15055 = cljs.core.first.call(null,inst_15052);var state_15071__$1 = state_15071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15071__$1,(7),ch,inst_15055);
} else
{if((state_val_15072 === (6)))
{var inst_15067 = (state_15071[(2)]);var state_15071__$1 = state_15071;var statearr_15077_15094 = state_15071__$1;(statearr_15077_15094[(2)] = inst_15067);
(statearr_15077_15094[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15072 === (3)))
{var inst_15069 = (state_15071[(2)]);var state_15071__$1 = state_15071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15071__$1,inst_15069);
} else
{if((state_val_15072 === (2)))
{var inst_15052 = (state_15071[(7)]);var state_15071__$1 = state_15071;if(cljs.core.truth_(inst_15052))
{var statearr_15078_15095 = state_15071__$1;(statearr_15078_15095[(1)] = (4));
} else
{var statearr_15079_15096 = state_15071__$1;(statearr_15079_15096[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15072 === (9)))
{var state_15071__$1 = state_15071;var statearr_15080_15097 = state_15071__$1;(statearr_15080_15097[(2)] = null);
(statearr_15080_15097[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15072 === (5)))
{var state_15071__$1 = state_15071;if(cljs.core.truth_(close_QMARK_))
{var statearr_15081_15098 = state_15071__$1;(statearr_15081_15098[(1)] = (8));
} else
{var statearr_15082_15099 = state_15071__$1;(statearr_15082_15099[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15072 === (10)))
{var inst_15065 = (state_15071[(2)]);var state_15071__$1 = state_15071;var statearr_15083_15100 = state_15071__$1;(statearr_15083_15100[(2)] = inst_15065);
(statearr_15083_15100[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15072 === (8)))
{var inst_15062 = cljs.core.async.close_BANG_.call(null,ch);var state_15071__$1 = state_15071;var statearr_15084_15101 = state_15071__$1;(statearr_15084_15101[(2)] = inst_15062);
(statearr_15084_15101[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15088 = [null,null,null,null,null,null,null,null,null];(statearr_15088[(0)] = state_machine__5679__auto__);
(statearr_15088[(1)] = (1));
return statearr_15088;
});
var state_machine__5679__auto____1 = (function (state_15071){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15071);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15089){if((e15089 instanceof Object))
{var ex__5682__auto__ = e15089;var statearr_15090_15102 = state_15071;(statearr_15090_15102[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15103 = state_15071;
state_15071 = G__15103;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15071){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15091 = f__5694__auto__.call(null);(statearr_15091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15105 = {};return obj15105;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15107 = {};return obj15107;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15331 = (function (cs,ch,mult,meta15332){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15332 = meta15332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15331.cljs$lang$type = true;
cljs.core.async.t15331.cljs$lang$ctorStr = "cljs.core.async/t15331";
cljs.core.async.t15331.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15331");
});})(cs))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15331.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15333){var self__ = this;
var _15333__$1 = this;return self__.meta15332;
});})(cs))
;
cljs.core.async.t15331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15333,meta15332__$1){var self__ = this;
var _15333__$1 = this;return (new cljs.core.async.t15331(self__.cs,self__.ch,self__.mult,meta15332__$1));
});})(cs))
;
cljs.core.async.__GT_t15331 = ((function (cs){
return (function __GT_t15331(cs__$1,ch__$1,mult__$1,meta15332){return (new cljs.core.async.t15331(cs__$1,ch__$1,mult__$1,meta15332));
});})(cs))
;
}
return (new cljs.core.async.t15331(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___15554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15554,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15554,cs,m,dchan,dctr,done){
return (function (state_15468){var state_val_15469 = (state_15468[(1)]);if((state_val_15469 === (7)))
{var inst_15464 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15470_15555 = state_15468__$1;(statearr_15470_15555[(2)] = inst_15464);
(statearr_15470_15555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (20)))
{var inst_15365 = (state_15468[(7)]);var inst_15375 = cljs.core.first.call(null,inst_15365);var inst_15376 = cljs.core.nth.call(null,inst_15375,(0),null);var inst_15377 = cljs.core.nth.call(null,inst_15375,(1),null);var state_15468__$1 = (function (){var statearr_15471 = state_15468;(statearr_15471[(8)] = inst_15376);
return statearr_15471;
})();if(cljs.core.truth_(inst_15377))
{var statearr_15472_15556 = state_15468__$1;(statearr_15472_15556[(1)] = (22));
} else
{var statearr_15473_15557 = state_15468__$1;(statearr_15473_15557[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (27)))
{var inst_15407 = (state_15468[(9)]);var inst_15405 = (state_15468[(10)]);var inst_15412 = cljs.core._nth.call(null,inst_15405,inst_15407);var state_15468__$1 = (function (){var statearr_15474 = state_15468;(statearr_15474[(11)] = inst_15412);
return statearr_15474;
})();var statearr_15475_15558 = state_15468__$1;(statearr_15475_15558[(2)] = null);
(statearr_15475_15558[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (1)))
{var state_15468__$1 = state_15468;var statearr_15476_15559 = state_15468__$1;(statearr_15476_15559[(2)] = null);
(statearr_15476_15559[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (24)))
{var inst_15365 = (state_15468[(7)]);var inst_15382 = (state_15468[(2)]);var inst_15383 = cljs.core.next.call(null,inst_15365);var inst_15345 = inst_15383;var inst_15346 = null;var inst_15347 = (0);var inst_15348 = (0);var state_15468__$1 = (function (){var statearr_15477 = state_15468;(statearr_15477[(12)] = inst_15348);
(statearr_15477[(13)] = inst_15382);
(statearr_15477[(14)] = inst_15345);
(statearr_15477[(15)] = inst_15346);
(statearr_15477[(16)] = inst_15347);
return statearr_15477;
})();var statearr_15478_15560 = state_15468__$1;(statearr_15478_15560[(2)] = null);
(statearr_15478_15560[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (39)))
{var inst_15425 = (state_15468[(17)]);var inst_15443 = (state_15468[(2)]);var inst_15444 = cljs.core.next.call(null,inst_15425);var inst_15404 = inst_15444;var inst_15405 = null;var inst_15406 = (0);var inst_15407 = (0);var state_15468__$1 = (function (){var statearr_15482 = state_15468;(statearr_15482[(18)] = inst_15406);
(statearr_15482[(9)] = inst_15407);
(statearr_15482[(19)] = inst_15404);
(statearr_15482[(10)] = inst_15405);
(statearr_15482[(20)] = inst_15443);
return statearr_15482;
})();var statearr_15483_15561 = state_15468__$1;(statearr_15483_15561[(2)] = null);
(statearr_15483_15561[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (4)))
{var inst_15336 = (state_15468[(21)]);var inst_15336__$1 = (state_15468[(2)]);var inst_15337 = (inst_15336__$1 == null);var state_15468__$1 = (function (){var statearr_15484 = state_15468;(statearr_15484[(21)] = inst_15336__$1);
return statearr_15484;
})();if(cljs.core.truth_(inst_15337))
{var statearr_15485_15562 = state_15468__$1;(statearr_15485_15562[(1)] = (5));
} else
{var statearr_15486_15563 = state_15468__$1;(statearr_15486_15563[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (15)))
{var inst_15348 = (state_15468[(12)]);var inst_15345 = (state_15468[(14)]);var inst_15346 = (state_15468[(15)]);var inst_15347 = (state_15468[(16)]);var inst_15361 = (state_15468[(2)]);var inst_15362 = (inst_15348 + (1));var tmp15479 = inst_15345;var tmp15480 = inst_15346;var tmp15481 = inst_15347;var inst_15345__$1 = tmp15479;var inst_15346__$1 = tmp15480;var inst_15347__$1 = tmp15481;var inst_15348__$1 = inst_15362;var state_15468__$1 = (function (){var statearr_15487 = state_15468;(statearr_15487[(22)] = inst_15361);
(statearr_15487[(12)] = inst_15348__$1);
(statearr_15487[(14)] = inst_15345__$1);
(statearr_15487[(15)] = inst_15346__$1);
(statearr_15487[(16)] = inst_15347__$1);
return statearr_15487;
})();var statearr_15488_15564 = state_15468__$1;(statearr_15488_15564[(2)] = null);
(statearr_15488_15564[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (21)))
{var inst_15386 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15489_15565 = state_15468__$1;(statearr_15489_15565[(2)] = inst_15386);
(statearr_15489_15565[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (31)))
{var inst_15412 = (state_15468[(11)]);var inst_15413 = (state_15468[(2)]);var inst_15414 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15415 = cljs.core.async.untap_STAR_.call(null,m,inst_15412);var state_15468__$1 = (function (){var statearr_15490 = state_15468;(statearr_15490[(23)] = inst_15413);
(statearr_15490[(24)] = inst_15414);
return statearr_15490;
})();var statearr_15491_15566 = state_15468__$1;(statearr_15491_15566[(2)] = inst_15415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15468__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (32)))
{var inst_15336 = (state_15468[(21)]);var inst_15412 = (state_15468[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15468,(31),Object,null,(30));var inst_15419 = cljs.core.async.put_BANG_.call(null,inst_15412,inst_15336,done);var state_15468__$1 = state_15468;var statearr_15492_15567 = state_15468__$1;(statearr_15492_15567[(2)] = inst_15419);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15468__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (40)))
{var inst_15434 = (state_15468[(25)]);var inst_15435 = (state_15468[(2)]);var inst_15436 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15437 = cljs.core.async.untap_STAR_.call(null,m,inst_15434);var state_15468__$1 = (function (){var statearr_15493 = state_15468;(statearr_15493[(26)] = inst_15436);
(statearr_15493[(27)] = inst_15435);
return statearr_15493;
})();var statearr_15494_15568 = state_15468__$1;(statearr_15494_15568[(2)] = inst_15437);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15468__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (33)))
{var inst_15425 = (state_15468[(17)]);var inst_15427 = cljs.core.chunked_seq_QMARK_.call(null,inst_15425);var state_15468__$1 = state_15468;if(inst_15427)
{var statearr_15495_15569 = state_15468__$1;(statearr_15495_15569[(1)] = (36));
} else
{var statearr_15496_15570 = state_15468__$1;(statearr_15496_15570[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (13)))
{var inst_15355 = (state_15468[(28)]);var inst_15358 = cljs.core.async.close_BANG_.call(null,inst_15355);var state_15468__$1 = state_15468;var statearr_15497_15571 = state_15468__$1;(statearr_15497_15571[(2)] = inst_15358);
(statearr_15497_15571[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (22)))
{var inst_15376 = (state_15468[(8)]);var inst_15379 = cljs.core.async.close_BANG_.call(null,inst_15376);var state_15468__$1 = state_15468;var statearr_15498_15572 = state_15468__$1;(statearr_15498_15572[(2)] = inst_15379);
(statearr_15498_15572[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (36)))
{var inst_15425 = (state_15468[(17)]);var inst_15429 = cljs.core.chunk_first.call(null,inst_15425);var inst_15430 = cljs.core.chunk_rest.call(null,inst_15425);var inst_15431 = cljs.core.count.call(null,inst_15429);var inst_15404 = inst_15430;var inst_15405 = inst_15429;var inst_15406 = inst_15431;var inst_15407 = (0);var state_15468__$1 = (function (){var statearr_15499 = state_15468;(statearr_15499[(18)] = inst_15406);
(statearr_15499[(9)] = inst_15407);
(statearr_15499[(19)] = inst_15404);
(statearr_15499[(10)] = inst_15405);
return statearr_15499;
})();var statearr_15500_15573 = state_15468__$1;(statearr_15500_15573[(2)] = null);
(statearr_15500_15573[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (41)))
{var inst_15336 = (state_15468[(21)]);var inst_15434 = (state_15468[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15468,(40),Object,null,(39));var inst_15441 = cljs.core.async.put_BANG_.call(null,inst_15434,inst_15336,done);var state_15468__$1 = state_15468;var statearr_15501_15574 = state_15468__$1;(statearr_15501_15574[(2)] = inst_15441);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15468__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (43)))
{var state_15468__$1 = state_15468;var statearr_15502_15575 = state_15468__$1;(statearr_15502_15575[(2)] = null);
(statearr_15502_15575[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (29)))
{var inst_15452 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15503_15576 = state_15468__$1;(statearr_15503_15576[(2)] = inst_15452);
(statearr_15503_15576[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (44)))
{var inst_15461 = (state_15468[(2)]);var state_15468__$1 = (function (){var statearr_15504 = state_15468;(statearr_15504[(29)] = inst_15461);
return statearr_15504;
})();var statearr_15505_15577 = state_15468__$1;(statearr_15505_15577[(2)] = null);
(statearr_15505_15577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (6)))
{var inst_15396 = (state_15468[(30)]);var inst_15395 = cljs.core.deref.call(null,cs);var inst_15396__$1 = cljs.core.keys.call(null,inst_15395);var inst_15397 = cljs.core.count.call(null,inst_15396__$1);var inst_15398 = cljs.core.reset_BANG_.call(null,dctr,inst_15397);var inst_15403 = cljs.core.seq.call(null,inst_15396__$1);var inst_15404 = inst_15403;var inst_15405 = null;var inst_15406 = (0);var inst_15407 = (0);var state_15468__$1 = (function (){var statearr_15506 = state_15468;(statearr_15506[(31)] = inst_15398);
(statearr_15506[(30)] = inst_15396__$1);
(statearr_15506[(18)] = inst_15406);
(statearr_15506[(9)] = inst_15407);
(statearr_15506[(19)] = inst_15404);
(statearr_15506[(10)] = inst_15405);
return statearr_15506;
})();var statearr_15507_15578 = state_15468__$1;(statearr_15507_15578[(2)] = null);
(statearr_15507_15578[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (28)))
{var inst_15404 = (state_15468[(19)]);var inst_15425 = (state_15468[(17)]);var inst_15425__$1 = cljs.core.seq.call(null,inst_15404);var state_15468__$1 = (function (){var statearr_15508 = state_15468;(statearr_15508[(17)] = inst_15425__$1);
return statearr_15508;
})();if(inst_15425__$1)
{var statearr_15509_15579 = state_15468__$1;(statearr_15509_15579[(1)] = (33));
} else
{var statearr_15510_15580 = state_15468__$1;(statearr_15510_15580[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (25)))
{var inst_15406 = (state_15468[(18)]);var inst_15407 = (state_15468[(9)]);var inst_15409 = (inst_15407 < inst_15406);var inst_15410 = inst_15409;var state_15468__$1 = state_15468;if(cljs.core.truth_(inst_15410))
{var statearr_15511_15581 = state_15468__$1;(statearr_15511_15581[(1)] = (27));
} else
{var statearr_15512_15582 = state_15468__$1;(statearr_15512_15582[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (34)))
{var state_15468__$1 = state_15468;var statearr_15513_15583 = state_15468__$1;(statearr_15513_15583[(2)] = null);
(statearr_15513_15583[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (17)))
{var state_15468__$1 = state_15468;var statearr_15514_15584 = state_15468__$1;(statearr_15514_15584[(2)] = null);
(statearr_15514_15584[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (3)))
{var inst_15466 = (state_15468[(2)]);var state_15468__$1 = state_15468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15468__$1,inst_15466);
} else
{if((state_val_15469 === (12)))
{var inst_15391 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15515_15585 = state_15468__$1;(statearr_15515_15585[(2)] = inst_15391);
(statearr_15515_15585[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (2)))
{var state_15468__$1 = state_15468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15468__$1,(4),ch);
} else
{if((state_val_15469 === (23)))
{var state_15468__$1 = state_15468;var statearr_15516_15586 = state_15468__$1;(statearr_15516_15586[(2)] = null);
(statearr_15516_15586[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (35)))
{var inst_15450 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15517_15587 = state_15468__$1;(statearr_15517_15587[(2)] = inst_15450);
(statearr_15517_15587[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (19)))
{var inst_15365 = (state_15468[(7)]);var inst_15369 = cljs.core.chunk_first.call(null,inst_15365);var inst_15370 = cljs.core.chunk_rest.call(null,inst_15365);var inst_15371 = cljs.core.count.call(null,inst_15369);var inst_15345 = inst_15370;var inst_15346 = inst_15369;var inst_15347 = inst_15371;var inst_15348 = (0);var state_15468__$1 = (function (){var statearr_15518 = state_15468;(statearr_15518[(12)] = inst_15348);
(statearr_15518[(14)] = inst_15345);
(statearr_15518[(15)] = inst_15346);
(statearr_15518[(16)] = inst_15347);
return statearr_15518;
})();var statearr_15519_15588 = state_15468__$1;(statearr_15519_15588[(2)] = null);
(statearr_15519_15588[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (11)))
{var inst_15365 = (state_15468[(7)]);var inst_15345 = (state_15468[(14)]);var inst_15365__$1 = cljs.core.seq.call(null,inst_15345);var state_15468__$1 = (function (){var statearr_15520 = state_15468;(statearr_15520[(7)] = inst_15365__$1);
return statearr_15520;
})();if(inst_15365__$1)
{var statearr_15521_15589 = state_15468__$1;(statearr_15521_15589[(1)] = (16));
} else
{var statearr_15522_15590 = state_15468__$1;(statearr_15522_15590[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (9)))
{var inst_15393 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15523_15591 = state_15468__$1;(statearr_15523_15591[(2)] = inst_15393);
(statearr_15523_15591[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (5)))
{var inst_15343 = cljs.core.deref.call(null,cs);var inst_15344 = cljs.core.seq.call(null,inst_15343);var inst_15345 = inst_15344;var inst_15346 = null;var inst_15347 = (0);var inst_15348 = (0);var state_15468__$1 = (function (){var statearr_15524 = state_15468;(statearr_15524[(12)] = inst_15348);
(statearr_15524[(14)] = inst_15345);
(statearr_15524[(15)] = inst_15346);
(statearr_15524[(16)] = inst_15347);
return statearr_15524;
})();var statearr_15525_15592 = state_15468__$1;(statearr_15525_15592[(2)] = null);
(statearr_15525_15592[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (14)))
{var state_15468__$1 = state_15468;var statearr_15526_15593 = state_15468__$1;(statearr_15526_15593[(2)] = null);
(statearr_15526_15593[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (45)))
{var inst_15458 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15527_15594 = state_15468__$1;(statearr_15527_15594[(2)] = inst_15458);
(statearr_15527_15594[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (26)))
{var inst_15396 = (state_15468[(30)]);var inst_15454 = (state_15468[(2)]);var inst_15455 = cljs.core.seq.call(null,inst_15396);var state_15468__$1 = (function (){var statearr_15528 = state_15468;(statearr_15528[(32)] = inst_15454);
return statearr_15528;
})();if(inst_15455)
{var statearr_15529_15595 = state_15468__$1;(statearr_15529_15595[(1)] = (42));
} else
{var statearr_15530_15596 = state_15468__$1;(statearr_15530_15596[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (16)))
{var inst_15365 = (state_15468[(7)]);var inst_15367 = cljs.core.chunked_seq_QMARK_.call(null,inst_15365);var state_15468__$1 = state_15468;if(inst_15367)
{var statearr_15534_15597 = state_15468__$1;(statearr_15534_15597[(1)] = (19));
} else
{var statearr_15535_15598 = state_15468__$1;(statearr_15535_15598[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (38)))
{var inst_15447 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15536_15599 = state_15468__$1;(statearr_15536_15599[(2)] = inst_15447);
(statearr_15536_15599[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (30)))
{var inst_15406 = (state_15468[(18)]);var inst_15407 = (state_15468[(9)]);var inst_15404 = (state_15468[(19)]);var inst_15405 = (state_15468[(10)]);var inst_15421 = (state_15468[(2)]);var inst_15422 = (inst_15407 + (1));var tmp15531 = inst_15406;var tmp15532 = inst_15404;var tmp15533 = inst_15405;var inst_15404__$1 = tmp15532;var inst_15405__$1 = tmp15533;var inst_15406__$1 = tmp15531;var inst_15407__$1 = inst_15422;var state_15468__$1 = (function (){var statearr_15537 = state_15468;(statearr_15537[(18)] = inst_15406__$1);
(statearr_15537[(9)] = inst_15407__$1);
(statearr_15537[(33)] = inst_15421);
(statearr_15537[(19)] = inst_15404__$1);
(statearr_15537[(10)] = inst_15405__$1);
return statearr_15537;
})();var statearr_15538_15600 = state_15468__$1;(statearr_15538_15600[(2)] = null);
(statearr_15538_15600[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (10)))
{var inst_15348 = (state_15468[(12)]);var inst_15346 = (state_15468[(15)]);var inst_15354 = cljs.core._nth.call(null,inst_15346,inst_15348);var inst_15355 = cljs.core.nth.call(null,inst_15354,(0),null);var inst_15356 = cljs.core.nth.call(null,inst_15354,(1),null);var state_15468__$1 = (function (){var statearr_15539 = state_15468;(statearr_15539[(28)] = inst_15355);
return statearr_15539;
})();if(cljs.core.truth_(inst_15356))
{var statearr_15540_15601 = state_15468__$1;(statearr_15540_15601[(1)] = (13));
} else
{var statearr_15541_15602 = state_15468__$1;(statearr_15541_15602[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (18)))
{var inst_15389 = (state_15468[(2)]);var state_15468__$1 = state_15468;var statearr_15542_15603 = state_15468__$1;(statearr_15542_15603[(2)] = inst_15389);
(statearr_15542_15603[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (42)))
{var state_15468__$1 = state_15468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15468__$1,(45),dchan);
} else
{if((state_val_15469 === (37)))
{var inst_15425 = (state_15468[(17)]);var inst_15434 = cljs.core.first.call(null,inst_15425);var state_15468__$1 = (function (){var statearr_15543 = state_15468;(statearr_15543[(25)] = inst_15434);
return statearr_15543;
})();var statearr_15544_15604 = state_15468__$1;(statearr_15544_15604[(2)] = null);
(statearr_15544_15604[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (8)))
{var inst_15348 = (state_15468[(12)]);var inst_15347 = (state_15468[(16)]);var inst_15350 = (inst_15348 < inst_15347);var inst_15351 = inst_15350;var state_15468__$1 = state_15468;if(cljs.core.truth_(inst_15351))
{var statearr_15545_15605 = state_15468__$1;(statearr_15545_15605[(1)] = (10));
} else
{var statearr_15546_15606 = state_15468__$1;(statearr_15546_15606[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___15554,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___15554,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15550[(0)] = state_machine__5679__auto__);
(statearr_15550[(1)] = (1));
return statearr_15550;
});
var state_machine__5679__auto____1 = (function (state_15468){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15468);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15551){if((e15551 instanceof Object))
{var ex__5682__auto__ = e15551;var statearr_15552_15607 = state_15468;(statearr_15552_15607[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15608 = state_15468;
state_15468 = G__15608;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15468){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15554,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_15553 = f__5694__auto__.call(null);(statearr_15553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15554);
return statearr_15553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15554,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj15610 = {};return obj15610;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15720 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15721){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15721 = meta15721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15720.cljs$lang$type = true;
cljs.core.async.t15720.cljs$lang$ctorStr = "cljs.core.async/t15720";
cljs.core.async.t15720.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15720");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15720.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15722){var self__ = this;
var _15722__$1 = this;return self__.meta15721;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15722,meta15721__$1){var self__ = this;
var _15722__$1 = this;return (new cljs.core.async.t15720(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15721__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15720 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15720(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15721){return (new cljs.core.async.t15720(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15721));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15720(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___15829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15787){var state_val_15788 = (state_15787[(1)]);if((state_val_15788 === (7)))
{var inst_15736 = (state_15787[(7)]);var inst_15741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15736);var state_15787__$1 = state_15787;var statearr_15789_15830 = state_15787__$1;(statearr_15789_15830[(2)] = inst_15741);
(statearr_15789_15830[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (20)))
{var inst_15751 = (state_15787[(8)]);var state_15787__$1 = state_15787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15787__$1,(23),out,inst_15751);
} else
{if((state_val_15788 === (1)))
{var inst_15726 = (state_15787[(9)]);var inst_15726__$1 = calc_state.call(null);var inst_15727 = cljs.core.seq_QMARK_.call(null,inst_15726__$1);var state_15787__$1 = (function (){var statearr_15790 = state_15787;(statearr_15790[(9)] = inst_15726__$1);
return statearr_15790;
})();if(inst_15727)
{var statearr_15791_15831 = state_15787__$1;(statearr_15791_15831[(1)] = (2));
} else
{var statearr_15792_15832 = state_15787__$1;(statearr_15792_15832[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (4)))
{var inst_15726 = (state_15787[(9)]);var inst_15732 = (state_15787[(2)]);var inst_15733 = cljs.core.get.call(null,inst_15732,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15734 = cljs.core.get.call(null,inst_15732,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15735 = cljs.core.get.call(null,inst_15732,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15736 = inst_15726;var state_15787__$1 = (function (){var statearr_15793 = state_15787;(statearr_15793[(10)] = inst_15734);
(statearr_15793[(7)] = inst_15736);
(statearr_15793[(11)] = inst_15733);
(statearr_15793[(12)] = inst_15735);
return statearr_15793;
})();var statearr_15794_15833 = state_15787__$1;(statearr_15794_15833[(2)] = null);
(statearr_15794_15833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (15)))
{var state_15787__$1 = state_15787;var statearr_15795_15834 = state_15787__$1;(statearr_15795_15834[(2)] = null);
(statearr_15795_15834[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (21)))
{var state_15787__$1 = state_15787;var statearr_15796_15835 = state_15787__$1;(statearr_15796_15835[(2)] = null);
(statearr_15796_15835[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (13)))
{var inst_15783 = (state_15787[(2)]);var state_15787__$1 = state_15787;var statearr_15797_15836 = state_15787__$1;(statearr_15797_15836[(2)] = inst_15783);
(statearr_15797_15836[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (22)))
{var inst_15744 = (state_15787[(13)]);var inst_15780 = (state_15787[(2)]);var inst_15736 = inst_15744;var state_15787__$1 = (function (){var statearr_15798 = state_15787;(statearr_15798[(7)] = inst_15736);
(statearr_15798[(14)] = inst_15780);
return statearr_15798;
})();var statearr_15799_15837 = state_15787__$1;(statearr_15799_15837[(2)] = null);
(statearr_15799_15837[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (6)))
{var inst_15785 = (state_15787[(2)]);var state_15787__$1 = state_15787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15787__$1,inst_15785);
} else
{if((state_val_15788 === (17)))
{var inst_15766 = (state_15787[(15)]);var state_15787__$1 = state_15787;var statearr_15800_15838 = state_15787__$1;(statearr_15800_15838[(2)] = inst_15766);
(statearr_15800_15838[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (3)))
{var inst_15726 = (state_15787[(9)]);var state_15787__$1 = state_15787;var statearr_15801_15839 = state_15787__$1;(statearr_15801_15839[(2)] = inst_15726);
(statearr_15801_15839[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (12)))
{var inst_15752 = (state_15787[(16)]);var inst_15766 = (state_15787[(15)]);var inst_15747 = (state_15787[(17)]);var inst_15766__$1 = inst_15747.call(null,inst_15752);var state_15787__$1 = (function (){var statearr_15802 = state_15787;(statearr_15802[(15)] = inst_15766__$1);
return statearr_15802;
})();if(cljs.core.truth_(inst_15766__$1))
{var statearr_15803_15840 = state_15787__$1;(statearr_15803_15840[(1)] = (17));
} else
{var statearr_15804_15841 = state_15787__$1;(statearr_15804_15841[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (2)))
{var inst_15726 = (state_15787[(9)]);var inst_15729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15726);var state_15787__$1 = state_15787;var statearr_15805_15842 = state_15787__$1;(statearr_15805_15842[(2)] = inst_15729);
(statearr_15805_15842[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (23)))
{var inst_15777 = (state_15787[(2)]);var state_15787__$1 = state_15787;var statearr_15806_15843 = state_15787__$1;(statearr_15806_15843[(2)] = inst_15777);
(statearr_15806_15843[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (19)))
{var inst_15774 = (state_15787[(2)]);var state_15787__$1 = state_15787;if(cljs.core.truth_(inst_15774))
{var statearr_15807_15844 = state_15787__$1;(statearr_15807_15844[(1)] = (20));
} else
{var statearr_15808_15845 = state_15787__$1;(statearr_15808_15845[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (11)))
{var inst_15751 = (state_15787[(8)]);var inst_15757 = (inst_15751 == null);var state_15787__$1 = state_15787;if(cljs.core.truth_(inst_15757))
{var statearr_15809_15846 = state_15787__$1;(statearr_15809_15846[(1)] = (14));
} else
{var statearr_15810_15847 = state_15787__$1;(statearr_15810_15847[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (9)))
{var inst_15744 = (state_15787[(13)]);var inst_15744__$1 = (state_15787[(2)]);var inst_15745 = cljs.core.get.call(null,inst_15744__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15746 = cljs.core.get.call(null,inst_15744__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15747 = cljs.core.get.call(null,inst_15744__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15787__$1 = (function (){var statearr_15811 = state_15787;(statearr_15811[(17)] = inst_15747);
(statearr_15811[(18)] = inst_15746);
(statearr_15811[(13)] = inst_15744__$1);
return statearr_15811;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15787__$1,(10),inst_15745);
} else
{if((state_val_15788 === (5)))
{var inst_15736 = (state_15787[(7)]);var inst_15739 = cljs.core.seq_QMARK_.call(null,inst_15736);var state_15787__$1 = state_15787;if(inst_15739)
{var statearr_15812_15848 = state_15787__$1;(statearr_15812_15848[(1)] = (7));
} else
{var statearr_15813_15849 = state_15787__$1;(statearr_15813_15849[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (14)))
{var inst_15752 = (state_15787[(16)]);var inst_15759 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15752);var state_15787__$1 = state_15787;var statearr_15814_15850 = state_15787__$1;(statearr_15814_15850[(2)] = inst_15759);
(statearr_15814_15850[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (16)))
{var inst_15762 = (state_15787[(2)]);var inst_15763 = calc_state.call(null);var inst_15736 = inst_15763;var state_15787__$1 = (function (){var statearr_15815 = state_15787;(statearr_15815[(7)] = inst_15736);
(statearr_15815[(19)] = inst_15762);
return statearr_15815;
})();var statearr_15816_15851 = state_15787__$1;(statearr_15816_15851[(2)] = null);
(statearr_15816_15851[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (10)))
{var inst_15752 = (state_15787[(16)]);var inst_15751 = (state_15787[(8)]);var inst_15750 = (state_15787[(2)]);var inst_15751__$1 = cljs.core.nth.call(null,inst_15750,(0),null);var inst_15752__$1 = cljs.core.nth.call(null,inst_15750,(1),null);var inst_15753 = (inst_15751__$1 == null);var inst_15754 = cljs.core._EQ_.call(null,inst_15752__$1,change);var inst_15755 = (inst_15753) || (inst_15754);var state_15787__$1 = (function (){var statearr_15817 = state_15787;(statearr_15817[(16)] = inst_15752__$1);
(statearr_15817[(8)] = inst_15751__$1);
return statearr_15817;
})();if(cljs.core.truth_(inst_15755))
{var statearr_15818_15852 = state_15787__$1;(statearr_15818_15852[(1)] = (11));
} else
{var statearr_15819_15853 = state_15787__$1;(statearr_15819_15853[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (18)))
{var inst_15752 = (state_15787[(16)]);var inst_15747 = (state_15787[(17)]);var inst_15746 = (state_15787[(18)]);var inst_15769 = cljs.core.empty_QMARK_.call(null,inst_15747);var inst_15770 = inst_15746.call(null,inst_15752);var inst_15771 = cljs.core.not.call(null,inst_15770);var inst_15772 = (inst_15769) && (inst_15771);var state_15787__$1 = state_15787;var statearr_15820_15854 = state_15787__$1;(statearr_15820_15854[(2)] = inst_15772);
(statearr_15820_15854[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15788 === (8)))
{var inst_15736 = (state_15787[(7)]);var state_15787__$1 = state_15787;var statearr_15821_15855 = state_15787__$1;(statearr_15821_15855[(2)] = inst_15736);
(statearr_15821_15855[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___15829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___15829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15825[(0)] = state_machine__5679__auto__);
(statearr_15825[(1)] = (1));
return statearr_15825;
});
var state_machine__5679__auto____1 = (function (state_15787){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15826){if((e15826 instanceof Object))
{var ex__5682__auto__ = e15826;var statearr_15827_15856 = state_15787;(statearr_15827_15856[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15787);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15857 = state_15787;
state_15787 = G__15857;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15787){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_15828 = f__5694__auto__.call(null);(statearr_15828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15829);
return statearr_15828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj15859 = {};return obj15859;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__15860_SHARP_){if(cljs.core.truth_(p1__15860_SHARP_.call(null,topic)))
{return p1__15860_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15860_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15985 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15986){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15986 = meta15986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15985.cljs$lang$type = true;
cljs.core.async.t15985.cljs$lang$ctorStr = "cljs.core.async/t15985";
cljs.core.async.t15985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15985");
});})(mults,ensure_mult))
;
cljs.core.async.t15985.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15985.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15987){var self__ = this;
var _15987__$1 = this;return self__.meta15986;
});})(mults,ensure_mult))
;
cljs.core.async.t15985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15987,meta15986__$1){var self__ = this;
var _15987__$1 = this;return (new cljs.core.async.t15985(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15986__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15985 = ((function (mults,ensure_mult){
return (function __GT_t15985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15986){return (new cljs.core.async.t15985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15986));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15985(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___16109 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16109,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16109,mults,ensure_mult,p){
return (function (state_16061){var state_val_16062 = (state_16061[(1)]);if((state_val_16062 === (7)))
{var inst_16057 = (state_16061[(2)]);var state_16061__$1 = state_16061;var statearr_16063_16110 = state_16061__$1;(statearr_16063_16110[(2)] = inst_16057);
(statearr_16063_16110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (20)))
{var state_16061__$1 = state_16061;var statearr_16064_16111 = state_16061__$1;(statearr_16064_16111[(2)] = null);
(statearr_16064_16111[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (1)))
{var state_16061__$1 = state_16061;var statearr_16065_16112 = state_16061__$1;(statearr_16065_16112[(2)] = null);
(statearr_16065_16112[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (24)))
{var inst_15990 = (state_16061[(7)]);var inst_16040 = (state_16061[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16061,(23),Object,null,(22));var inst_16047 = cljs.core.async.muxch_STAR_.call(null,inst_16040);var state_16061__$1 = state_16061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16061__$1,(25),inst_16047,inst_15990);
} else
{if((state_val_16062 === (4)))
{var inst_15990 = (state_16061[(7)]);var inst_15990__$1 = (state_16061[(2)]);var inst_15991 = (inst_15990__$1 == null);var state_16061__$1 = (function (){var statearr_16066 = state_16061;(statearr_16066[(7)] = inst_15990__$1);
return statearr_16066;
})();if(cljs.core.truth_(inst_15991))
{var statearr_16067_16113 = state_16061__$1;(statearr_16067_16113[(1)] = (5));
} else
{var statearr_16068_16114 = state_16061__$1;(statearr_16068_16114[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (15)))
{var inst_16032 = (state_16061[(2)]);var state_16061__$1 = state_16061;var statearr_16069_16115 = state_16061__$1;(statearr_16069_16115[(2)] = inst_16032);
(statearr_16069_16115[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (21)))
{var inst_16054 = (state_16061[(2)]);var state_16061__$1 = (function (){var statearr_16070 = state_16061;(statearr_16070[(9)] = inst_16054);
return statearr_16070;
})();var statearr_16071_16116 = state_16061__$1;(statearr_16071_16116[(2)] = null);
(statearr_16071_16116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (13)))
{var inst_16014 = (state_16061[(10)]);var inst_16016 = cljs.core.chunked_seq_QMARK_.call(null,inst_16014);var state_16061__$1 = state_16061;if(inst_16016)
{var statearr_16072_16117 = state_16061__$1;(statearr_16072_16117[(1)] = (16));
} else
{var statearr_16073_16118 = state_16061__$1;(statearr_16073_16118[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (22)))
{var inst_16051 = (state_16061[(2)]);var state_16061__$1 = state_16061;var statearr_16074_16119 = state_16061__$1;(statearr_16074_16119[(2)] = inst_16051);
(statearr_16074_16119[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (6)))
{var inst_15990 = (state_16061[(7)]);var inst_16038 = (state_16061[(11)]);var inst_16040 = (state_16061[(8)]);var inst_16038__$1 = topic_fn.call(null,inst_15990);var inst_16039 = cljs.core.deref.call(null,mults);var inst_16040__$1 = cljs.core.get.call(null,inst_16039,inst_16038__$1);var state_16061__$1 = (function (){var statearr_16075 = state_16061;(statearr_16075[(11)] = inst_16038__$1);
(statearr_16075[(8)] = inst_16040__$1);
return statearr_16075;
})();if(cljs.core.truth_(inst_16040__$1))
{var statearr_16076_16120 = state_16061__$1;(statearr_16076_16120[(1)] = (19));
} else
{var statearr_16077_16121 = state_16061__$1;(statearr_16077_16121[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (25)))
{var inst_16049 = (state_16061[(2)]);var state_16061__$1 = state_16061;var statearr_16078_16122 = state_16061__$1;(statearr_16078_16122[(2)] = inst_16049);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16061__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (17)))
{var inst_16014 = (state_16061[(10)]);var inst_16023 = cljs.core.first.call(null,inst_16014);var inst_16024 = cljs.core.async.muxch_STAR_.call(null,inst_16023);var inst_16025 = cljs.core.async.close_BANG_.call(null,inst_16024);var inst_16026 = cljs.core.next.call(null,inst_16014);var inst_16000 = inst_16026;var inst_16001 = null;var inst_16002 = (0);var inst_16003 = (0);var state_16061__$1 = (function (){var statearr_16079 = state_16061;(statearr_16079[(12)] = inst_16025);
(statearr_16079[(13)] = inst_16002);
(statearr_16079[(14)] = inst_16003);
(statearr_16079[(15)] = inst_16001);
(statearr_16079[(16)] = inst_16000);
return statearr_16079;
})();var statearr_16080_16123 = state_16061__$1;(statearr_16080_16123[(2)] = null);
(statearr_16080_16123[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (3)))
{var inst_16059 = (state_16061[(2)]);var state_16061__$1 = state_16061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16061__$1,inst_16059);
} else
{if((state_val_16062 === (12)))
{var inst_16034 = (state_16061[(2)]);var state_16061__$1 = state_16061;var statearr_16081_16124 = state_16061__$1;(statearr_16081_16124[(2)] = inst_16034);
(statearr_16081_16124[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (2)))
{var state_16061__$1 = state_16061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16061__$1,(4),ch);
} else
{if((state_val_16062 === (23)))
{var inst_16038 = (state_16061[(11)]);var inst_16042 = (state_16061[(2)]);var inst_16043 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16038);var state_16061__$1 = (function (){var statearr_16082 = state_16061;(statearr_16082[(17)] = inst_16042);
return statearr_16082;
})();var statearr_16083_16125 = state_16061__$1;(statearr_16083_16125[(2)] = inst_16043);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16061__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (19)))
{var state_16061__$1 = state_16061;var statearr_16084_16126 = state_16061__$1;(statearr_16084_16126[(2)] = null);
(statearr_16084_16126[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (11)))
{var inst_16000 = (state_16061[(16)]);var inst_16014 = (state_16061[(10)]);var inst_16014__$1 = cljs.core.seq.call(null,inst_16000);var state_16061__$1 = (function (){var statearr_16085 = state_16061;(statearr_16085[(10)] = inst_16014__$1);
return statearr_16085;
})();if(inst_16014__$1)
{var statearr_16086_16127 = state_16061__$1;(statearr_16086_16127[(1)] = (13));
} else
{var statearr_16087_16128 = state_16061__$1;(statearr_16087_16128[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (9)))
{var inst_16036 = (state_16061[(2)]);var state_16061__$1 = state_16061;var statearr_16088_16129 = state_16061__$1;(statearr_16088_16129[(2)] = inst_16036);
(statearr_16088_16129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (5)))
{var inst_15997 = cljs.core.deref.call(null,mults);var inst_15998 = cljs.core.vals.call(null,inst_15997);var inst_15999 = cljs.core.seq.call(null,inst_15998);var inst_16000 = inst_15999;var inst_16001 = null;var inst_16002 = (0);var inst_16003 = (0);var state_16061__$1 = (function (){var statearr_16089 = state_16061;(statearr_16089[(13)] = inst_16002);
(statearr_16089[(14)] = inst_16003);
(statearr_16089[(15)] = inst_16001);
(statearr_16089[(16)] = inst_16000);
return statearr_16089;
})();var statearr_16090_16130 = state_16061__$1;(statearr_16090_16130[(2)] = null);
(statearr_16090_16130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (14)))
{var state_16061__$1 = state_16061;var statearr_16094_16131 = state_16061__$1;(statearr_16094_16131[(2)] = null);
(statearr_16094_16131[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (16)))
{var inst_16014 = (state_16061[(10)]);var inst_16018 = cljs.core.chunk_first.call(null,inst_16014);var inst_16019 = cljs.core.chunk_rest.call(null,inst_16014);var inst_16020 = cljs.core.count.call(null,inst_16018);var inst_16000 = inst_16019;var inst_16001 = inst_16018;var inst_16002 = inst_16020;var inst_16003 = (0);var state_16061__$1 = (function (){var statearr_16095 = state_16061;(statearr_16095[(13)] = inst_16002);
(statearr_16095[(14)] = inst_16003);
(statearr_16095[(15)] = inst_16001);
(statearr_16095[(16)] = inst_16000);
return statearr_16095;
})();var statearr_16096_16132 = state_16061__$1;(statearr_16096_16132[(2)] = null);
(statearr_16096_16132[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (10)))
{var inst_16002 = (state_16061[(13)]);var inst_16003 = (state_16061[(14)]);var inst_16001 = (state_16061[(15)]);var inst_16000 = (state_16061[(16)]);var inst_16008 = cljs.core._nth.call(null,inst_16001,inst_16003);var inst_16009 = cljs.core.async.muxch_STAR_.call(null,inst_16008);var inst_16010 = cljs.core.async.close_BANG_.call(null,inst_16009);var inst_16011 = (inst_16003 + (1));var tmp16091 = inst_16002;var tmp16092 = inst_16001;var tmp16093 = inst_16000;var inst_16000__$1 = tmp16093;var inst_16001__$1 = tmp16092;var inst_16002__$1 = tmp16091;var inst_16003__$1 = inst_16011;var state_16061__$1 = (function (){var statearr_16097 = state_16061;(statearr_16097[(13)] = inst_16002__$1);
(statearr_16097[(14)] = inst_16003__$1);
(statearr_16097[(15)] = inst_16001__$1);
(statearr_16097[(16)] = inst_16000__$1);
(statearr_16097[(18)] = inst_16010);
return statearr_16097;
})();var statearr_16098_16133 = state_16061__$1;(statearr_16098_16133[(2)] = null);
(statearr_16098_16133[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (18)))
{var inst_16029 = (state_16061[(2)]);var state_16061__$1 = state_16061;var statearr_16099_16134 = state_16061__$1;(statearr_16099_16134[(2)] = inst_16029);
(statearr_16099_16134[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (8)))
{var inst_16002 = (state_16061[(13)]);var inst_16003 = (state_16061[(14)]);var inst_16005 = (inst_16003 < inst_16002);var inst_16006 = inst_16005;var state_16061__$1 = state_16061;if(cljs.core.truth_(inst_16006))
{var statearr_16100_16135 = state_16061__$1;(statearr_16100_16135[(1)] = (10));
} else
{var statearr_16101_16136 = state_16061__$1;(statearr_16101_16136[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___16109,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___16109,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16105[(0)] = state_machine__5679__auto__);
(statearr_16105[(1)] = (1));
return statearr_16105;
});
var state_machine__5679__auto____1 = (function (state_16061){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16061);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16106){if((e16106 instanceof Object))
{var ex__5682__auto__ = e16106;var statearr_16107_16137 = state_16061;(statearr_16107_16137[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16138 = state_16061;
state_16061 = G__16138;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16061){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16109,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_16108 = f__5694__auto__.call(null);(statearr_16108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16109);
return statearr_16108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16109,mults,ensure_mult,p))
);
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5693__auto___16275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16245){var state_val_16246 = (state_16245[(1)]);if((state_val_16246 === (7)))
{var state_16245__$1 = state_16245;var statearr_16247_16276 = state_16245__$1;(statearr_16247_16276[(2)] = null);
(statearr_16247_16276[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (1)))
{var state_16245__$1 = state_16245;var statearr_16248_16277 = state_16245__$1;(statearr_16248_16277[(2)] = null);
(statearr_16248_16277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (4)))
{var inst_16209 = (state_16245[(7)]);var inst_16211 = (inst_16209 < cnt);var state_16245__$1 = state_16245;if(cljs.core.truth_(inst_16211))
{var statearr_16249_16278 = state_16245__$1;(statearr_16249_16278[(1)] = (6));
} else
{var statearr_16250_16279 = state_16245__$1;(statearr_16250_16279[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (15)))
{var inst_16241 = (state_16245[(2)]);var state_16245__$1 = state_16245;var statearr_16251_16280 = state_16245__$1;(statearr_16251_16280[(2)] = inst_16241);
(statearr_16251_16280[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (13)))
{var inst_16234 = cljs.core.async.close_BANG_.call(null,out);var state_16245__$1 = state_16245;var statearr_16252_16281 = state_16245__$1;(statearr_16252_16281[(2)] = inst_16234);
(statearr_16252_16281[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (6)))
{var state_16245__$1 = state_16245;var statearr_16253_16282 = state_16245__$1;(statearr_16253_16282[(2)] = null);
(statearr_16253_16282[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (3)))
{var inst_16243 = (state_16245[(2)]);var state_16245__$1 = state_16245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16245__$1,inst_16243);
} else
{if((state_val_16246 === (12)))
{var inst_16231 = (state_16245[(8)]);var inst_16231__$1 = (state_16245[(2)]);var inst_16232 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16231__$1);var state_16245__$1 = (function (){var statearr_16254 = state_16245;(statearr_16254[(8)] = inst_16231__$1);
return statearr_16254;
})();if(cljs.core.truth_(inst_16232))
{var statearr_16255_16283 = state_16245__$1;(statearr_16255_16283[(1)] = (13));
} else
{var statearr_16256_16284 = state_16245__$1;(statearr_16256_16284[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (2)))
{var inst_16208 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16209 = (0);var state_16245__$1 = (function (){var statearr_16257 = state_16245;(statearr_16257[(9)] = inst_16208);
(statearr_16257[(7)] = inst_16209);
return statearr_16257;
})();var statearr_16258_16285 = state_16245__$1;(statearr_16258_16285[(2)] = null);
(statearr_16258_16285[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (11)))
{var inst_16209 = (state_16245[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16245,(10),Object,null,(9));var inst_16218 = chs__$1.call(null,inst_16209);var inst_16219 = done.call(null,inst_16209);var inst_16220 = cljs.core.async.take_BANG_.call(null,inst_16218,inst_16219);var state_16245__$1 = state_16245;var statearr_16259_16286 = state_16245__$1;(statearr_16259_16286[(2)] = inst_16220);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16245__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (9)))
{var inst_16209 = (state_16245[(7)]);var inst_16222 = (state_16245[(2)]);var inst_16223 = (inst_16209 + (1));var inst_16209__$1 = inst_16223;var state_16245__$1 = (function (){var statearr_16260 = state_16245;(statearr_16260[(10)] = inst_16222);
(statearr_16260[(7)] = inst_16209__$1);
return statearr_16260;
})();var statearr_16261_16287 = state_16245__$1;(statearr_16261_16287[(2)] = null);
(statearr_16261_16287[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (5)))
{var inst_16229 = (state_16245[(2)]);var state_16245__$1 = (function (){var statearr_16262 = state_16245;(statearr_16262[(11)] = inst_16229);
return statearr_16262;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16245__$1,(12),dchan);
} else
{if((state_val_16246 === (14)))
{var inst_16231 = (state_16245[(8)]);var inst_16236 = cljs.core.apply.call(null,f,inst_16231);var state_16245__$1 = state_16245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16245__$1,(16),out,inst_16236);
} else
{if((state_val_16246 === (16)))
{var inst_16238 = (state_16245[(2)]);var state_16245__$1 = (function (){var statearr_16263 = state_16245;(statearr_16263[(12)] = inst_16238);
return statearr_16263;
})();var statearr_16264_16288 = state_16245__$1;(statearr_16264_16288[(2)] = null);
(statearr_16264_16288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (10)))
{var inst_16213 = (state_16245[(2)]);var inst_16214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16245__$1 = (function (){var statearr_16265 = state_16245;(statearr_16265[(13)] = inst_16213);
return statearr_16265;
})();var statearr_16266_16289 = state_16245__$1;(statearr_16266_16289[(2)] = inst_16214);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16245__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16246 === (8)))
{var inst_16227 = (state_16245[(2)]);var state_16245__$1 = state_16245;var statearr_16267_16290 = state_16245__$1;(statearr_16267_16290[(2)] = inst_16227);
(statearr_16267_16290[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___16275,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16271[(0)] = state_machine__5679__auto__);
(statearr_16271[(1)] = (1));
return statearr_16271;
});
var state_machine__5679__auto____1 = (function (state_16245){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16245);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16272){if((e16272 instanceof Object))
{var ex__5682__auto__ = e16272;var statearr_16273_16291 = state_16245;(statearr_16273_16291[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16292 = state_16245;
state_16245 = G__16292;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16245){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16275,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16274 = f__5694__auto__.call(null);(statearr_16274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16275);
return statearr_16274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16275,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16400,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16400,out){
return (function (state_16376){var state_val_16377 = (state_16376[(1)]);if((state_val_16377 === (7)))
{var inst_16355 = (state_16376[(7)]);var inst_16356 = (state_16376[(8)]);var inst_16355__$1 = (state_16376[(2)]);var inst_16356__$1 = cljs.core.nth.call(null,inst_16355__$1,(0),null);var inst_16357 = cljs.core.nth.call(null,inst_16355__$1,(1),null);var inst_16358 = (inst_16356__$1 == null);var state_16376__$1 = (function (){var statearr_16378 = state_16376;(statearr_16378[(9)] = inst_16357);
(statearr_16378[(7)] = inst_16355__$1);
(statearr_16378[(8)] = inst_16356__$1);
return statearr_16378;
})();if(cljs.core.truth_(inst_16358))
{var statearr_16379_16401 = state_16376__$1;(statearr_16379_16401[(1)] = (8));
} else
{var statearr_16380_16402 = state_16376__$1;(statearr_16380_16402[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16377 === (1)))
{var inst_16347 = cljs.core.vec.call(null,chs);var inst_16348 = inst_16347;var state_16376__$1 = (function (){var statearr_16381 = state_16376;(statearr_16381[(10)] = inst_16348);
return statearr_16381;
})();var statearr_16382_16403 = state_16376__$1;(statearr_16382_16403[(2)] = null);
(statearr_16382_16403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16377 === (4)))
{var inst_16348 = (state_16376[(10)]);var state_16376__$1 = state_16376;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16376__$1,(7),inst_16348);
} else
{if((state_val_16377 === (6)))
{var inst_16372 = (state_16376[(2)]);var state_16376__$1 = state_16376;var statearr_16383_16404 = state_16376__$1;(statearr_16383_16404[(2)] = inst_16372);
(statearr_16383_16404[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16377 === (3)))
{var inst_16374 = (state_16376[(2)]);var state_16376__$1 = state_16376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16376__$1,inst_16374);
} else
{if((state_val_16377 === (2)))
{var inst_16348 = (state_16376[(10)]);var inst_16350 = cljs.core.count.call(null,inst_16348);var inst_16351 = (inst_16350 > (0));var state_16376__$1 = state_16376;if(cljs.core.truth_(inst_16351))
{var statearr_16385_16405 = state_16376__$1;(statearr_16385_16405[(1)] = (4));
} else
{var statearr_16386_16406 = state_16376__$1;(statearr_16386_16406[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16377 === (11)))
{var inst_16348 = (state_16376[(10)]);var inst_16365 = (state_16376[(2)]);var tmp16384 = inst_16348;var inst_16348__$1 = tmp16384;var state_16376__$1 = (function (){var statearr_16387 = state_16376;(statearr_16387[(10)] = inst_16348__$1);
(statearr_16387[(11)] = inst_16365);
return statearr_16387;
})();var statearr_16388_16407 = state_16376__$1;(statearr_16388_16407[(2)] = null);
(statearr_16388_16407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16377 === (9)))
{var inst_16356 = (state_16376[(8)]);var state_16376__$1 = state_16376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16376__$1,(11),out,inst_16356);
} else
{if((state_val_16377 === (5)))
{var inst_16370 = cljs.core.async.close_BANG_.call(null,out);var state_16376__$1 = state_16376;var statearr_16389_16408 = state_16376__$1;(statearr_16389_16408[(2)] = inst_16370);
(statearr_16389_16408[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16377 === (10)))
{var inst_16368 = (state_16376[(2)]);var state_16376__$1 = state_16376;var statearr_16390_16409 = state_16376__$1;(statearr_16390_16409[(2)] = inst_16368);
(statearr_16390_16409[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16377 === (8)))
{var inst_16357 = (state_16376[(9)]);var inst_16355 = (state_16376[(7)]);var inst_16348 = (state_16376[(10)]);var inst_16356 = (state_16376[(8)]);var inst_16360 = (function (){var c = inst_16357;var v = inst_16356;var vec__16353 = inst_16355;var cs = inst_16348;return ((function (c,v,vec__16353,cs,inst_16357,inst_16355,inst_16348,inst_16356,state_val_16377,c__5693__auto___16400,out){
return (function (p1__16293_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16293_SHARP_);
});
;})(c,v,vec__16353,cs,inst_16357,inst_16355,inst_16348,inst_16356,state_val_16377,c__5693__auto___16400,out))
})();var inst_16361 = cljs.core.filterv.call(null,inst_16360,inst_16348);var inst_16348__$1 = inst_16361;var state_16376__$1 = (function (){var statearr_16391 = state_16376;(statearr_16391[(10)] = inst_16348__$1);
return statearr_16391;
})();var statearr_16392_16410 = state_16376__$1;(statearr_16392_16410[(2)] = null);
(statearr_16392_16410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___16400,out))
;return ((function (switch__5678__auto__,c__5693__auto___16400,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16396 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16396[(0)] = state_machine__5679__auto__);
(statearr_16396[(1)] = (1));
return statearr_16396;
});
var state_machine__5679__auto____1 = (function (state_16376){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16376);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16397){if((e16397 instanceof Object))
{var ex__5682__auto__ = e16397;var statearr_16398_16411 = state_16376;(statearr_16398_16411[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16412 = state_16376;
state_16376 = G__16412;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16376){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16400,out))
})();var state__5695__auto__ = (function (){var statearr_16399 = f__5694__auto__.call(null);(statearr_16399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16400);
return statearr_16399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16400,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16505 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16505,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16505,out){
return (function (state_16482){var state_val_16483 = (state_16482[(1)]);if((state_val_16483 === (7)))
{var inst_16464 = (state_16482[(7)]);var inst_16464__$1 = (state_16482[(2)]);var inst_16465 = (inst_16464__$1 == null);var inst_16466 = cljs.core.not.call(null,inst_16465);var state_16482__$1 = (function (){var statearr_16484 = state_16482;(statearr_16484[(7)] = inst_16464__$1);
return statearr_16484;
})();if(inst_16466)
{var statearr_16485_16506 = state_16482__$1;(statearr_16485_16506[(1)] = (8));
} else
{var statearr_16486_16507 = state_16482__$1;(statearr_16486_16507[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (1)))
{var inst_16459 = (0);var state_16482__$1 = (function (){var statearr_16487 = state_16482;(statearr_16487[(8)] = inst_16459);
return statearr_16487;
})();var statearr_16488_16508 = state_16482__$1;(statearr_16488_16508[(2)] = null);
(statearr_16488_16508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (4)))
{var state_16482__$1 = state_16482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16482__$1,(7),ch);
} else
{if((state_val_16483 === (6)))
{var inst_16477 = (state_16482[(2)]);var state_16482__$1 = state_16482;var statearr_16489_16509 = state_16482__$1;(statearr_16489_16509[(2)] = inst_16477);
(statearr_16489_16509[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (3)))
{var inst_16479 = (state_16482[(2)]);var inst_16480 = cljs.core.async.close_BANG_.call(null,out);var state_16482__$1 = (function (){var statearr_16490 = state_16482;(statearr_16490[(9)] = inst_16479);
return statearr_16490;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16482__$1,inst_16480);
} else
{if((state_val_16483 === (2)))
{var inst_16459 = (state_16482[(8)]);var inst_16461 = (inst_16459 < n);var state_16482__$1 = state_16482;if(cljs.core.truth_(inst_16461))
{var statearr_16491_16510 = state_16482__$1;(statearr_16491_16510[(1)] = (4));
} else
{var statearr_16492_16511 = state_16482__$1;(statearr_16492_16511[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (11)))
{var inst_16459 = (state_16482[(8)]);var inst_16469 = (state_16482[(2)]);var inst_16470 = (inst_16459 + (1));var inst_16459__$1 = inst_16470;var state_16482__$1 = (function (){var statearr_16493 = state_16482;(statearr_16493[(10)] = inst_16469);
(statearr_16493[(8)] = inst_16459__$1);
return statearr_16493;
})();var statearr_16494_16512 = state_16482__$1;(statearr_16494_16512[(2)] = null);
(statearr_16494_16512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (9)))
{var state_16482__$1 = state_16482;var statearr_16495_16513 = state_16482__$1;(statearr_16495_16513[(2)] = null);
(statearr_16495_16513[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (5)))
{var state_16482__$1 = state_16482;var statearr_16496_16514 = state_16482__$1;(statearr_16496_16514[(2)] = null);
(statearr_16496_16514[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (10)))
{var inst_16474 = (state_16482[(2)]);var state_16482__$1 = state_16482;var statearr_16497_16515 = state_16482__$1;(statearr_16497_16515[(2)] = inst_16474);
(statearr_16497_16515[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16483 === (8)))
{var inst_16464 = (state_16482[(7)]);var state_16482__$1 = state_16482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16482__$1,(11),out,inst_16464);
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
});})(c__5693__auto___16505,out))
;return ((function (switch__5678__auto__,c__5693__auto___16505,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16501 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16501[(0)] = state_machine__5679__auto__);
(statearr_16501[(1)] = (1));
return statearr_16501;
});
var state_machine__5679__auto____1 = (function (state_16482){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16482);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16502){if((e16502 instanceof Object))
{var ex__5682__auto__ = e16502;var statearr_16503_16516 = state_16482;(statearr_16503_16516[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16517 = state_16482;
state_16482 = G__16517;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16482){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16505,out))
})();var state__5695__auto__ = (function (){var statearr_16504 = f__5694__auto__.call(null);(statearr_16504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16505);
return statearr_16504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16505,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16614,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16614,out){
return (function (state_16589){var state_val_16590 = (state_16589[(1)]);if((state_val_16590 === (7)))
{var inst_16584 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16591_16615 = state_16589__$1;(statearr_16591_16615[(2)] = inst_16584);
(statearr_16591_16615[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (1)))
{var inst_16566 = null;var state_16589__$1 = (function (){var statearr_16592 = state_16589;(statearr_16592[(7)] = inst_16566);
return statearr_16592;
})();var statearr_16593_16616 = state_16589__$1;(statearr_16593_16616[(2)] = null);
(statearr_16593_16616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (4)))
{var inst_16569 = (state_16589[(8)]);var inst_16569__$1 = (state_16589[(2)]);var inst_16570 = (inst_16569__$1 == null);var inst_16571 = cljs.core.not.call(null,inst_16570);var state_16589__$1 = (function (){var statearr_16594 = state_16589;(statearr_16594[(8)] = inst_16569__$1);
return statearr_16594;
})();if(inst_16571)
{var statearr_16595_16617 = state_16589__$1;(statearr_16595_16617[(1)] = (5));
} else
{var statearr_16596_16618 = state_16589__$1;(statearr_16596_16618[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (6)))
{var state_16589__$1 = state_16589;var statearr_16597_16619 = state_16589__$1;(statearr_16597_16619[(2)] = null);
(statearr_16597_16619[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (3)))
{var inst_16586 = (state_16589[(2)]);var inst_16587 = cljs.core.async.close_BANG_.call(null,out);var state_16589__$1 = (function (){var statearr_16598 = state_16589;(statearr_16598[(9)] = inst_16586);
return statearr_16598;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16589__$1,inst_16587);
} else
{if((state_val_16590 === (2)))
{var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16589__$1,(4),ch);
} else
{if((state_val_16590 === (11)))
{var inst_16569 = (state_16589[(8)]);var inst_16578 = (state_16589[(2)]);var inst_16566 = inst_16569;var state_16589__$1 = (function (){var statearr_16599 = state_16589;(statearr_16599[(7)] = inst_16566);
(statearr_16599[(10)] = inst_16578);
return statearr_16599;
})();var statearr_16600_16620 = state_16589__$1;(statearr_16600_16620[(2)] = null);
(statearr_16600_16620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (9)))
{var inst_16569 = (state_16589[(8)]);var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16589__$1,(11),out,inst_16569);
} else
{if((state_val_16590 === (5)))
{var inst_16569 = (state_16589[(8)]);var inst_16566 = (state_16589[(7)]);var inst_16573 = cljs.core._EQ_.call(null,inst_16569,inst_16566);var state_16589__$1 = state_16589;if(inst_16573)
{var statearr_16602_16621 = state_16589__$1;(statearr_16602_16621[(1)] = (8));
} else
{var statearr_16603_16622 = state_16589__$1;(statearr_16603_16622[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (10)))
{var inst_16581 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16604_16623 = state_16589__$1;(statearr_16604_16623[(2)] = inst_16581);
(statearr_16604_16623[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (8)))
{var inst_16566 = (state_16589[(7)]);var tmp16601 = inst_16566;var inst_16566__$1 = tmp16601;var state_16589__$1 = (function (){var statearr_16605 = state_16589;(statearr_16605[(7)] = inst_16566__$1);
return statearr_16605;
})();var statearr_16606_16624 = state_16589__$1;(statearr_16606_16624[(2)] = null);
(statearr_16606_16624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___16614,out))
;return ((function (switch__5678__auto__,c__5693__auto___16614,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16610 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16610[(0)] = state_machine__5679__auto__);
(statearr_16610[(1)] = (1));
return statearr_16610;
});
var state_machine__5679__auto____1 = (function (state_16589){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16589);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16611){if((e16611 instanceof Object))
{var ex__5682__auto__ = e16611;var statearr_16612_16625 = state_16589;(statearr_16612_16625[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16626 = state_16589;
state_16589 = G__16626;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16589){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16614,out))
})();var state__5695__auto__ = (function (){var statearr_16613 = f__5694__auto__.call(null);(statearr_16613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16614);
return statearr_16613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16614,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16761 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16761,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16761,out){
return (function (state_16731){var state_val_16732 = (state_16731[(1)]);if((state_val_16732 === (7)))
{var inst_16727 = (state_16731[(2)]);var state_16731__$1 = state_16731;var statearr_16733_16762 = state_16731__$1;(statearr_16733_16762[(2)] = inst_16727);
(statearr_16733_16762[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (1)))
{var inst_16694 = (new Array(n));var inst_16695 = inst_16694;var inst_16696 = (0);var state_16731__$1 = (function (){var statearr_16734 = state_16731;(statearr_16734[(7)] = inst_16696);
(statearr_16734[(8)] = inst_16695);
return statearr_16734;
})();var statearr_16735_16763 = state_16731__$1;(statearr_16735_16763[(2)] = null);
(statearr_16735_16763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (4)))
{var inst_16699 = (state_16731[(9)]);var inst_16699__$1 = (state_16731[(2)]);var inst_16700 = (inst_16699__$1 == null);var inst_16701 = cljs.core.not.call(null,inst_16700);var state_16731__$1 = (function (){var statearr_16736 = state_16731;(statearr_16736[(9)] = inst_16699__$1);
return statearr_16736;
})();if(inst_16701)
{var statearr_16737_16764 = state_16731__$1;(statearr_16737_16764[(1)] = (5));
} else
{var statearr_16738_16765 = state_16731__$1;(statearr_16738_16765[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (15)))
{var inst_16721 = (state_16731[(2)]);var state_16731__$1 = state_16731;var statearr_16739_16766 = state_16731__$1;(statearr_16739_16766[(2)] = inst_16721);
(statearr_16739_16766[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (13)))
{var state_16731__$1 = state_16731;var statearr_16740_16767 = state_16731__$1;(statearr_16740_16767[(2)] = null);
(statearr_16740_16767[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (6)))
{var inst_16696 = (state_16731[(7)]);var inst_16717 = (inst_16696 > (0));var state_16731__$1 = state_16731;if(cljs.core.truth_(inst_16717))
{var statearr_16741_16768 = state_16731__$1;(statearr_16741_16768[(1)] = (12));
} else
{var statearr_16742_16769 = state_16731__$1;(statearr_16742_16769[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (3)))
{var inst_16729 = (state_16731[(2)]);var state_16731__$1 = state_16731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16731__$1,inst_16729);
} else
{if((state_val_16732 === (12)))
{var inst_16695 = (state_16731[(8)]);var inst_16719 = cljs.core.vec.call(null,inst_16695);var state_16731__$1 = state_16731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16731__$1,(15),out,inst_16719);
} else
{if((state_val_16732 === (2)))
{var state_16731__$1 = state_16731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16731__$1,(4),ch);
} else
{if((state_val_16732 === (11)))
{var inst_16711 = (state_16731[(2)]);var inst_16712 = (new Array(n));var inst_16695 = inst_16712;var inst_16696 = (0);var state_16731__$1 = (function (){var statearr_16743 = state_16731;(statearr_16743[(7)] = inst_16696);
(statearr_16743[(10)] = inst_16711);
(statearr_16743[(8)] = inst_16695);
return statearr_16743;
})();var statearr_16744_16770 = state_16731__$1;(statearr_16744_16770[(2)] = null);
(statearr_16744_16770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (9)))
{var inst_16695 = (state_16731[(8)]);var inst_16709 = cljs.core.vec.call(null,inst_16695);var state_16731__$1 = state_16731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16731__$1,(11),out,inst_16709);
} else
{if((state_val_16732 === (5)))
{var inst_16696 = (state_16731[(7)]);var inst_16704 = (state_16731[(11)]);var inst_16699 = (state_16731[(9)]);var inst_16695 = (state_16731[(8)]);var inst_16703 = (inst_16695[inst_16696] = inst_16699);var inst_16704__$1 = (inst_16696 + (1));var inst_16705 = (inst_16704__$1 < n);var state_16731__$1 = (function (){var statearr_16745 = state_16731;(statearr_16745[(12)] = inst_16703);
(statearr_16745[(11)] = inst_16704__$1);
return statearr_16745;
})();if(cljs.core.truth_(inst_16705))
{var statearr_16746_16771 = state_16731__$1;(statearr_16746_16771[(1)] = (8));
} else
{var statearr_16747_16772 = state_16731__$1;(statearr_16747_16772[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (14)))
{var inst_16724 = (state_16731[(2)]);var inst_16725 = cljs.core.async.close_BANG_.call(null,out);var state_16731__$1 = (function (){var statearr_16749 = state_16731;(statearr_16749[(13)] = inst_16724);
return statearr_16749;
})();var statearr_16750_16773 = state_16731__$1;(statearr_16750_16773[(2)] = inst_16725);
(statearr_16750_16773[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (10)))
{var inst_16715 = (state_16731[(2)]);var state_16731__$1 = state_16731;var statearr_16751_16774 = state_16731__$1;(statearr_16751_16774[(2)] = inst_16715);
(statearr_16751_16774[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16732 === (8)))
{var inst_16704 = (state_16731[(11)]);var inst_16695 = (state_16731[(8)]);var tmp16748 = inst_16695;var inst_16695__$1 = tmp16748;var inst_16696 = inst_16704;var state_16731__$1 = (function (){var statearr_16752 = state_16731;(statearr_16752[(7)] = inst_16696);
(statearr_16752[(8)] = inst_16695__$1);
return statearr_16752;
})();var statearr_16753_16775 = state_16731__$1;(statearr_16753_16775[(2)] = null);
(statearr_16753_16775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___16761,out))
;return ((function (switch__5678__auto__,c__5693__auto___16761,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16757[(0)] = state_machine__5679__auto__);
(statearr_16757[(1)] = (1));
return statearr_16757;
});
var state_machine__5679__auto____1 = (function (state_16731){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16758){if((e16758 instanceof Object))
{var ex__5682__auto__ = e16758;var statearr_16759_16776 = state_16731;(statearr_16759_16776[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16777 = state_16731;
state_16731 = G__16777;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16731){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16761,out))
})();var state__5695__auto__ = (function (){var statearr_16760 = f__5694__auto__.call(null);(statearr_16760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16761);
return statearr_16760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16761,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16920 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16920,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16920,out){
return (function (state_16890){var state_val_16891 = (state_16890[(1)]);if((state_val_16891 === (7)))
{var inst_16886 = (state_16890[(2)]);var state_16890__$1 = state_16890;var statearr_16892_16921 = state_16890__$1;(statearr_16892_16921[(2)] = inst_16886);
(statearr_16892_16921[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (1)))
{var inst_16849 = [];var inst_16850 = inst_16849;var inst_16851 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16890__$1 = (function (){var statearr_16893 = state_16890;(statearr_16893[(7)] = inst_16851);
(statearr_16893[(8)] = inst_16850);
return statearr_16893;
})();var statearr_16894_16922 = state_16890__$1;(statearr_16894_16922[(2)] = null);
(statearr_16894_16922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (4)))
{var inst_16854 = (state_16890[(9)]);var inst_16854__$1 = (state_16890[(2)]);var inst_16855 = (inst_16854__$1 == null);var inst_16856 = cljs.core.not.call(null,inst_16855);var state_16890__$1 = (function (){var statearr_16895 = state_16890;(statearr_16895[(9)] = inst_16854__$1);
return statearr_16895;
})();if(inst_16856)
{var statearr_16896_16923 = state_16890__$1;(statearr_16896_16923[(1)] = (5));
} else
{var statearr_16897_16924 = state_16890__$1;(statearr_16897_16924[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (15)))
{var inst_16880 = (state_16890[(2)]);var state_16890__$1 = state_16890;var statearr_16898_16925 = state_16890__$1;(statearr_16898_16925[(2)] = inst_16880);
(statearr_16898_16925[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (13)))
{var state_16890__$1 = state_16890;var statearr_16899_16926 = state_16890__$1;(statearr_16899_16926[(2)] = null);
(statearr_16899_16926[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (6)))
{var inst_16850 = (state_16890[(8)]);var inst_16875 = inst_16850.length;var inst_16876 = (inst_16875 > (0));var state_16890__$1 = state_16890;if(cljs.core.truth_(inst_16876))
{var statearr_16900_16927 = state_16890__$1;(statearr_16900_16927[(1)] = (12));
} else
{var statearr_16901_16928 = state_16890__$1;(statearr_16901_16928[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (3)))
{var inst_16888 = (state_16890[(2)]);var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16890__$1,inst_16888);
} else
{if((state_val_16891 === (12)))
{var inst_16850 = (state_16890[(8)]);var inst_16878 = cljs.core.vec.call(null,inst_16850);var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16890__$1,(15),out,inst_16878);
} else
{if((state_val_16891 === (2)))
{var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16890__$1,(4),ch);
} else
{if((state_val_16891 === (11)))
{var inst_16858 = (state_16890[(10)]);var inst_16854 = (state_16890[(9)]);var inst_16868 = (state_16890[(2)]);var inst_16869 = [];var inst_16870 = inst_16869.push(inst_16854);var inst_16850 = inst_16869;var inst_16851 = inst_16858;var state_16890__$1 = (function (){var statearr_16902 = state_16890;(statearr_16902[(7)] = inst_16851);
(statearr_16902[(11)] = inst_16868);
(statearr_16902[(12)] = inst_16870);
(statearr_16902[(8)] = inst_16850);
return statearr_16902;
})();var statearr_16903_16929 = state_16890__$1;(statearr_16903_16929[(2)] = null);
(statearr_16903_16929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (9)))
{var inst_16850 = (state_16890[(8)]);var inst_16866 = cljs.core.vec.call(null,inst_16850);var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16890__$1,(11),out,inst_16866);
} else
{if((state_val_16891 === (5)))
{var inst_16851 = (state_16890[(7)]);var inst_16858 = (state_16890[(10)]);var inst_16854 = (state_16890[(9)]);var inst_16858__$1 = f.call(null,inst_16854);var inst_16859 = cljs.core._EQ_.call(null,inst_16858__$1,inst_16851);var inst_16860 = cljs.core.keyword_identical_QMARK_.call(null,inst_16851,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16861 = (inst_16859) || (inst_16860);var state_16890__$1 = (function (){var statearr_16904 = state_16890;(statearr_16904[(10)] = inst_16858__$1);
return statearr_16904;
})();if(cljs.core.truth_(inst_16861))
{var statearr_16905_16930 = state_16890__$1;(statearr_16905_16930[(1)] = (8));
} else
{var statearr_16906_16931 = state_16890__$1;(statearr_16906_16931[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (14)))
{var inst_16883 = (state_16890[(2)]);var inst_16884 = cljs.core.async.close_BANG_.call(null,out);var state_16890__$1 = (function (){var statearr_16908 = state_16890;(statearr_16908[(13)] = inst_16883);
return statearr_16908;
})();var statearr_16909_16932 = state_16890__$1;(statearr_16909_16932[(2)] = inst_16884);
(statearr_16909_16932[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (10)))
{var inst_16873 = (state_16890[(2)]);var state_16890__$1 = state_16890;var statearr_16910_16933 = state_16890__$1;(statearr_16910_16933[(2)] = inst_16873);
(statearr_16910_16933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16891 === (8)))
{var inst_16858 = (state_16890[(10)]);var inst_16850 = (state_16890[(8)]);var inst_16854 = (state_16890[(9)]);var inst_16863 = inst_16850.push(inst_16854);var tmp16907 = inst_16850;var inst_16850__$1 = tmp16907;var inst_16851 = inst_16858;var state_16890__$1 = (function (){var statearr_16911 = state_16890;(statearr_16911[(7)] = inst_16851);
(statearr_16911[(14)] = inst_16863);
(statearr_16911[(8)] = inst_16850__$1);
return statearr_16911;
})();var statearr_16912_16934 = state_16890__$1;(statearr_16912_16934[(2)] = null);
(statearr_16912_16934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___16920,out))
;return ((function (switch__5678__auto__,c__5693__auto___16920,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16916[(0)] = state_machine__5679__auto__);
(statearr_16916[(1)] = (1));
return statearr_16916;
});
var state_machine__5679__auto____1 = (function (state_16890){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16917){if((e16917 instanceof Object))
{var ex__5682__auto__ = e16917;var statearr_16918_16935 = state_16890;(statearr_16918_16935[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16936 = state_16890;
state_16890 = G__16936;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16920,out))
})();var state__5695__auto__ = (function (){var statearr_16919 = f__5694__auto__.call(null);(statearr_16919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16920);
return statearr_16919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16920,out))
);
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
