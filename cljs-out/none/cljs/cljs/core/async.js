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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16294 = (function (f,fn_handler,meta16295){
this.f = f;
this.fn_handler = fn_handler;
this.meta16295 = meta16295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16294.cljs$lang$type = true;
cljs.core.async.t16294.cljs$lang$ctorStr = "cljs.core.async/t16294";
cljs.core.async.t16294.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16294");
});
cljs.core.async.t16294.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16296){var self__ = this;
var _16296__$1 = this;return self__.meta16295;
});
cljs.core.async.t16294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16296,meta16295__$1){var self__ = this;
var _16296__$1 = this;return (new cljs.core.async.t16294(self__.f,self__.fn_handler,meta16295__$1));
});
cljs.core.async.__GT_t16294 = (function __GT_t16294(f__$1,fn_handler__$1,meta16295){return (new cljs.core.async.t16294(f__$1,fn_handler__$1,meta16295));
});
}
return (new cljs.core.async.t16294(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16298 = buff;if(G__16298)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16298.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16298.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16298);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16298);
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
{var val_16299 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16299);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_16299);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___16300 = n;var x_16301 = 0;while(true){
if((x_16301 < n__4114__auto___16300))
{(a[x_16301] = 0);
{
var G__16302 = (x_16301 + 1);
x_16301 = G__16302;
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
var G__16303 = (i + 1);
i = G__16303;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16307 = (function (flag,alt_flag,meta16308){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16308 = meta16308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16307.cljs$lang$type = true;
cljs.core.async.t16307.cljs$lang$ctorStr = "cljs.core.async/t16307";
cljs.core.async.t16307.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16307");
});
cljs.core.async.t16307.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t16307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t16307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16309){var self__ = this;
var _16309__$1 = this;return self__.meta16308;
});
cljs.core.async.t16307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16309,meta16308__$1){var self__ = this;
var _16309__$1 = this;return (new cljs.core.async.t16307(self__.flag,self__.alt_flag,meta16308__$1));
});
cljs.core.async.__GT_t16307 = (function __GT_t16307(flag__$1,alt_flag__$1,meta16308){return (new cljs.core.async.t16307(flag__$1,alt_flag__$1,meta16308));
});
}
return (new cljs.core.async.t16307(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16313 = (function (cb,flag,alt_handler,meta16314){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16314 = meta16314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16313.cljs$lang$type = true;
cljs.core.async.t16313.cljs$lang$ctorStr = "cljs.core.async/t16313";
cljs.core.async.t16313.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16313");
});
cljs.core.async.t16313.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16315){var self__ = this;
var _16315__$1 = this;return self__.meta16314;
});
cljs.core.async.t16313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16315,meta16314__$1){var self__ = this;
var _16315__$1 = this;return (new cljs.core.async.t16313(self__.cb,self__.flag,self__.alt_handler,meta16314__$1));
});
cljs.core.async.__GT_t16313 = (function __GT_t16313(cb__$1,flag__$1,alt_handler__$1,meta16314){return (new cljs.core.async.t16313(cb__$1,flag__$1,alt_handler__$1,meta16314));
});
}
return (new cljs.core.async.t16313(cb,flag,alt_handler,null));
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
return (function (p1__16316_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16316_SHARP_,port], null));
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
var G__16317 = (i + 1);
i = G__16317;
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
var alts_BANG___delegate = function (ports,p__16318){var map__16320 = p__16318;var map__16320__$1 = ((cljs.core.seq_QMARK_.call(null,map__16320))?cljs.core.apply.call(null,cljs.core.hash_map,map__16320):map__16320);var opts = map__16320__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16318 = null;if (arguments.length > 1) {
  p__16318 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16318);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16321){
var ports = cljs.core.first(arglist__16321);
var p__16318 = cljs.core.rest(arglist__16321);
return alts_BANG___delegate(ports,p__16318);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16329 = (function (ch,f,map_LT_,meta16330){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16330 = meta16330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16329.cljs$lang$type = true;
cljs.core.async.t16329.cljs$lang$ctorStr = "cljs.core.async/t16329";
cljs.core.async.t16329.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16329");
});
cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16332 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16332 = (function (fn1,_,meta16330,ch,f,map_LT_,meta16333){
this.fn1 = fn1;
this._ = _;
this.meta16330 = meta16330;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16333 = meta16333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16332.cljs$lang$type = true;
cljs.core.async.t16332.cljs$lang$ctorStr = "cljs.core.async/t16332";
cljs.core.async.t16332.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16332");
});
cljs.core.async.t16332.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t16332.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t16332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__16322_SHARP_){return f1.call(null,(((p1__16322_SHARP_ == null))?null:self__.f.call(null,p1__16322_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t16332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16334){var self__ = this;
var _16334__$1 = this;return self__.meta16333;
});
cljs.core.async.t16332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16334,meta16333__$1){var self__ = this;
var _16334__$1 = this;return (new cljs.core.async.t16332(self__.fn1,self__._,self__.meta16330,self__.ch,self__.f,self__.map_LT_,meta16333__$1));
});
cljs.core.async.__GT_t16332 = (function __GT_t16332(fn1__$1,___$2,meta16330__$1,ch__$2,f__$2,map_LT___$2,meta16333){return (new cljs.core.async.t16332(fn1__$1,___$2,meta16330__$1,ch__$2,f__$2,map_LT___$2,meta16333));
});
}
return (new cljs.core.async.t16332(fn1,___$1,self__.meta16330,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16331){var self__ = this;
var _16331__$1 = this;return self__.meta16330;
});
cljs.core.async.t16329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16331,meta16330__$1){var self__ = this;
var _16331__$1 = this;return (new cljs.core.async.t16329(self__.ch,self__.f,self__.map_LT_,meta16330__$1));
});
cljs.core.async.__GT_t16329 = (function __GT_t16329(ch__$1,f__$1,map_LT___$1,meta16330){return (new cljs.core.async.t16329(ch__$1,f__$1,map_LT___$1,meta16330));
});
}
return (new cljs.core.async.t16329(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16338 = (function (ch,f,map_GT_,meta16339){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16339 = meta16339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16338.cljs$lang$type = true;
cljs.core.async.t16338.cljs$lang$ctorStr = "cljs.core.async/t16338";
cljs.core.async.t16338.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16338");
});
cljs.core.async.t16338.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t16338.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16338.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16340){var self__ = this;
var _16340__$1 = this;return self__.meta16339;
});
cljs.core.async.t16338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16340,meta16339__$1){var self__ = this;
var _16340__$1 = this;return (new cljs.core.async.t16338(self__.ch,self__.f,self__.map_GT_,meta16339__$1));
});
cljs.core.async.__GT_t16338 = (function __GT_t16338(ch__$1,f__$1,map_GT___$1,meta16339){return (new cljs.core.async.t16338(ch__$1,f__$1,map_GT___$1,meta16339));
});
}
return (new cljs.core.async.t16338(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16344 = (function (ch,p,filter_GT_,meta16345){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16345 = meta16345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16344.cljs$lang$type = true;
cljs.core.async.t16344.cljs$lang$ctorStr = "cljs.core.async/t16344";
cljs.core.async.t16344.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16344");
});
cljs.core.async.t16344.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t16344.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16344.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16346){var self__ = this;
var _16346__$1 = this;return self__.meta16345;
});
cljs.core.async.t16344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16346,meta16345__$1){var self__ = this;
var _16346__$1 = this;return (new cljs.core.async.t16344(self__.ch,self__.p,self__.filter_GT_,meta16345__$1));
});
cljs.core.async.__GT_t16344 = (function __GT_t16344(ch__$1,p__$1,filter_GT___$1,meta16345){return (new cljs.core.async.t16344(ch__$1,p__$1,filter_GT___$1,meta16345));
});
}
return (new cljs.core.async.t16344(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___16429 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16408){var state_val_16409 = (state_16408[1]);if((state_val_16409 === 1))
{var state_16408__$1 = state_16408;var statearr_16410_16430 = state_16408__$1;(statearr_16410_16430[2] = null);
(statearr_16410_16430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16409 === 2))
{var state_16408__$1 = state_16408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16408__$1,4,ch);
} else
{if((state_val_16409 === 3))
{var inst_16406 = (state_16408[2]);var state_16408__$1 = state_16408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16408__$1,inst_16406);
} else
{if((state_val_16409 === 4))
{var inst_16390 = (state_16408[7]);var inst_16390__$1 = (state_16408[2]);var inst_16391 = (inst_16390__$1 == null);var state_16408__$1 = (function (){var statearr_16411 = state_16408;(statearr_16411[7] = inst_16390__$1);
return statearr_16411;
})();if(cljs.core.truth_(inst_16391))
{var statearr_16412_16431 = state_16408__$1;(statearr_16412_16431[1] = 5);
} else
{var statearr_16413_16432 = state_16408__$1;(statearr_16413_16432[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16409 === 5))
{var inst_16393 = cljs.core.async.close_BANG_.call(null,out);var state_16408__$1 = state_16408;var statearr_16414_16433 = state_16408__$1;(statearr_16414_16433[2] = inst_16393);
(statearr_16414_16433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16409 === 6))
{var inst_16390 = (state_16408[7]);var inst_16395 = p.call(null,inst_16390);var state_16408__$1 = state_16408;if(cljs.core.truth_(inst_16395))
{var statearr_16415_16434 = state_16408__$1;(statearr_16415_16434[1] = 8);
} else
{var statearr_16416_16435 = state_16408__$1;(statearr_16416_16435[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16409 === 7))
{var inst_16404 = (state_16408[2]);var state_16408__$1 = state_16408;var statearr_16417_16436 = state_16408__$1;(statearr_16417_16436[2] = inst_16404);
(statearr_16417_16436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16409 === 8))
{var inst_16390 = (state_16408[7]);var state_16408__$1 = state_16408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16408__$1,11,out,inst_16390);
} else
{if((state_val_16409 === 9))
{var state_16408__$1 = state_16408;var statearr_16418_16437 = state_16408__$1;(statearr_16418_16437[2] = null);
(statearr_16418_16437[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16409 === 10))
{var inst_16401 = (state_16408[2]);var state_16408__$1 = (function (){var statearr_16419 = state_16408;(statearr_16419[8] = inst_16401);
return statearr_16419;
})();var statearr_16420_16438 = state_16408__$1;(statearr_16420_16438[2] = null);
(statearr_16420_16438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16409 === 11))
{var inst_16398 = (state_16408[2]);var state_16408__$1 = state_16408;var statearr_16421_16439 = state_16408__$1;(statearr_16421_16439[2] = inst_16398);
(statearr_16421_16439[1] = 10);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16425 = (new Array(9));(statearr_16425[0] = state_machine__5985__auto__);
(statearr_16425[1] = 1);
return statearr_16425;
});
var state_machine__5985__auto____1 = (function (state_16408){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_16408);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16426){if((e16426 instanceof Object))
{var ex__5988__auto__ = e16426;var statearr_16427_16440 = state_16408;(statearr_16427_16440[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16441 = state_16408;
state_16408 = G__16441;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16408){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16428 = f__6055__auto__.call(null);(statearr_16428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___16429);
return statearr_16428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6054__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16593){var state_val_16594 = (state_16593[1]);if((state_val_16594 === 1))
{var state_16593__$1 = state_16593;var statearr_16595_16632 = state_16593__$1;(statearr_16595_16632[2] = null);
(statearr_16595_16632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 2))
{var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16593__$1,4,in$);
} else
{if((state_val_16594 === 3))
{var inst_16591 = (state_16593[2]);var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16593__$1,inst_16591);
} else
{if((state_val_16594 === 4))
{var inst_16539 = (state_16593[7]);var inst_16539__$1 = (state_16593[2]);var inst_16540 = (inst_16539__$1 == null);var state_16593__$1 = (function (){var statearr_16596 = state_16593;(statearr_16596[7] = inst_16539__$1);
return statearr_16596;
})();if(cljs.core.truth_(inst_16540))
{var statearr_16597_16633 = state_16593__$1;(statearr_16597_16633[1] = 5);
} else
{var statearr_16598_16634 = state_16593__$1;(statearr_16598_16634[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 5))
{var inst_16542 = cljs.core.async.close_BANG_.call(null,out);var state_16593__$1 = state_16593;var statearr_16599_16635 = state_16593__$1;(statearr_16599_16635[2] = inst_16542);
(statearr_16599_16635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 6))
{var inst_16539 = (state_16593[7]);var inst_16544 = f.call(null,inst_16539);var inst_16549 = cljs.core.seq.call(null,inst_16544);var inst_16550 = inst_16549;var inst_16551 = null;var inst_16552 = 0;var inst_16553 = 0;var state_16593__$1 = (function (){var statearr_16600 = state_16593;(statearr_16600[8] = inst_16552);
(statearr_16600[9] = inst_16553);
(statearr_16600[10] = inst_16551);
(statearr_16600[11] = inst_16550);
return statearr_16600;
})();var statearr_16601_16636 = state_16593__$1;(statearr_16601_16636[2] = null);
(statearr_16601_16636[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 7))
{var inst_16589 = (state_16593[2]);var state_16593__$1 = state_16593;var statearr_16602_16637 = state_16593__$1;(statearr_16602_16637[2] = inst_16589);
(statearr_16602_16637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 8))
{var inst_16552 = (state_16593[8]);var inst_16553 = (state_16593[9]);var inst_16555 = (inst_16553 < inst_16552);var inst_16556 = inst_16555;var state_16593__$1 = state_16593;if(cljs.core.truth_(inst_16556))
{var statearr_16603_16638 = state_16593__$1;(statearr_16603_16638[1] = 10);
} else
{var statearr_16604_16639 = state_16593__$1;(statearr_16604_16639[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 9))
{var inst_16586 = (state_16593[2]);var state_16593__$1 = (function (){var statearr_16605 = state_16593;(statearr_16605[12] = inst_16586);
return statearr_16605;
})();var statearr_16606_16640 = state_16593__$1;(statearr_16606_16640[2] = null);
(statearr_16606_16640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 10))
{var inst_16553 = (state_16593[9]);var inst_16551 = (state_16593[10]);var inst_16558 = cljs.core._nth.call(null,inst_16551,inst_16553);var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16593__$1,13,out,inst_16558);
} else
{if((state_val_16594 === 11))
{var inst_16550 = (state_16593[11]);var inst_16564 = (state_16593[13]);var inst_16564__$1 = cljs.core.seq.call(null,inst_16550);var state_16593__$1 = (function (){var statearr_16610 = state_16593;(statearr_16610[13] = inst_16564__$1);
return statearr_16610;
})();if(inst_16564__$1)
{var statearr_16611_16641 = state_16593__$1;(statearr_16611_16641[1] = 14);
} else
{var statearr_16612_16642 = state_16593__$1;(statearr_16612_16642[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 12))
{var inst_16584 = (state_16593[2]);var state_16593__$1 = state_16593;var statearr_16613_16643 = state_16593__$1;(statearr_16613_16643[2] = inst_16584);
(statearr_16613_16643[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 13))
{var inst_16552 = (state_16593[8]);var inst_16553 = (state_16593[9]);var inst_16551 = (state_16593[10]);var inst_16550 = (state_16593[11]);var inst_16560 = (state_16593[2]);var inst_16561 = (inst_16553 + 1);var tmp16607 = inst_16552;var tmp16608 = inst_16551;var tmp16609 = inst_16550;var inst_16550__$1 = tmp16609;var inst_16551__$1 = tmp16608;var inst_16552__$1 = tmp16607;var inst_16553__$1 = inst_16561;var state_16593__$1 = (function (){var statearr_16614 = state_16593;(statearr_16614[8] = inst_16552__$1);
(statearr_16614[9] = inst_16553__$1);
(statearr_16614[10] = inst_16551__$1);
(statearr_16614[11] = inst_16550__$1);
(statearr_16614[14] = inst_16560);
return statearr_16614;
})();var statearr_16615_16644 = state_16593__$1;(statearr_16615_16644[2] = null);
(statearr_16615_16644[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 14))
{var inst_16564 = (state_16593[13]);var inst_16566 = cljs.core.chunked_seq_QMARK_.call(null,inst_16564);var state_16593__$1 = state_16593;if(inst_16566)
{var statearr_16616_16645 = state_16593__$1;(statearr_16616_16645[1] = 17);
} else
{var statearr_16617_16646 = state_16593__$1;(statearr_16617_16646[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 15))
{var state_16593__$1 = state_16593;var statearr_16618_16647 = state_16593__$1;(statearr_16618_16647[2] = null);
(statearr_16618_16647[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 16))
{var inst_16582 = (state_16593[2]);var state_16593__$1 = state_16593;var statearr_16619_16648 = state_16593__$1;(statearr_16619_16648[2] = inst_16582);
(statearr_16619_16648[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 17))
{var inst_16564 = (state_16593[13]);var inst_16568 = cljs.core.chunk_first.call(null,inst_16564);var inst_16569 = cljs.core.chunk_rest.call(null,inst_16564);var inst_16570 = cljs.core.count.call(null,inst_16568);var inst_16550 = inst_16569;var inst_16551 = inst_16568;var inst_16552 = inst_16570;var inst_16553 = 0;var state_16593__$1 = (function (){var statearr_16620 = state_16593;(statearr_16620[8] = inst_16552);
(statearr_16620[9] = inst_16553);
(statearr_16620[10] = inst_16551);
(statearr_16620[11] = inst_16550);
return statearr_16620;
})();var statearr_16621_16649 = state_16593__$1;(statearr_16621_16649[2] = null);
(statearr_16621_16649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 18))
{var inst_16564 = (state_16593[13]);var inst_16573 = cljs.core.first.call(null,inst_16564);var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16593__$1,20,out,inst_16573);
} else
{if((state_val_16594 === 19))
{var inst_16579 = (state_16593[2]);var state_16593__$1 = state_16593;var statearr_16622_16650 = state_16593__$1;(statearr_16622_16650[2] = inst_16579);
(statearr_16622_16650[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 20))
{var inst_16564 = (state_16593[13]);var inst_16575 = (state_16593[2]);var inst_16576 = cljs.core.next.call(null,inst_16564);var inst_16550 = inst_16576;var inst_16551 = null;var inst_16552 = 0;var inst_16553 = 0;var state_16593__$1 = (function (){var statearr_16623 = state_16593;(statearr_16623[8] = inst_16552);
(statearr_16623[9] = inst_16553);
(statearr_16623[10] = inst_16551);
(statearr_16623[11] = inst_16550);
(statearr_16623[15] = inst_16575);
return statearr_16623;
})();var statearr_16624_16651 = state_16593__$1;(statearr_16624_16651[2] = null);
(statearr_16624_16651[1] = 8);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16628 = (new Array(16));(statearr_16628[0] = state_machine__5985__auto__);
(statearr_16628[1] = 1);
return statearr_16628;
});
var state_machine__5985__auto____1 = (function (state_16593){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_16593);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16629){if((e16629 instanceof Object))
{var ex__5988__auto__ = e16629;var statearr_16630_16652 = state_16593;(statearr_16630_16652[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16653 = state_16593;
state_16593 = G__16653;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16593){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16631 = f__6055__auto__.call(null);(statearr_16631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_16631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
}));
return c__6054__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6054__auto___16734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16713){var state_val_16714 = (state_16713[1]);if((state_val_16714 === 1))
{var state_16713__$1 = state_16713;var statearr_16715_16735 = state_16713__$1;(statearr_16715_16735[2] = null);
(statearr_16715_16735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16714 === 2))
{var state_16713__$1 = state_16713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16713__$1,4,from);
} else
{if((state_val_16714 === 3))
{var inst_16711 = (state_16713[2]);var state_16713__$1 = state_16713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16713__$1,inst_16711);
} else
{if((state_val_16714 === 4))
{var inst_16696 = (state_16713[7]);var inst_16696__$1 = (state_16713[2]);var inst_16697 = (inst_16696__$1 == null);var state_16713__$1 = (function (){var statearr_16716 = state_16713;(statearr_16716[7] = inst_16696__$1);
return statearr_16716;
})();if(cljs.core.truth_(inst_16697))
{var statearr_16717_16736 = state_16713__$1;(statearr_16717_16736[1] = 5);
} else
{var statearr_16718_16737 = state_16713__$1;(statearr_16718_16737[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16714 === 5))
{var state_16713__$1 = state_16713;if(cljs.core.truth_(close_QMARK_))
{var statearr_16719_16738 = state_16713__$1;(statearr_16719_16738[1] = 8);
} else
{var statearr_16720_16739 = state_16713__$1;(statearr_16720_16739[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16714 === 6))
{var inst_16696 = (state_16713[7]);var state_16713__$1 = state_16713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16713__$1,11,to,inst_16696);
} else
{if((state_val_16714 === 7))
{var inst_16709 = (state_16713[2]);var state_16713__$1 = state_16713;var statearr_16721_16740 = state_16713__$1;(statearr_16721_16740[2] = inst_16709);
(statearr_16721_16740[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16714 === 8))
{var inst_16700 = cljs.core.async.close_BANG_.call(null,to);var state_16713__$1 = state_16713;var statearr_16722_16741 = state_16713__$1;(statearr_16722_16741[2] = inst_16700);
(statearr_16722_16741[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16714 === 9))
{var state_16713__$1 = state_16713;var statearr_16723_16742 = state_16713__$1;(statearr_16723_16742[2] = null);
(statearr_16723_16742[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16714 === 10))
{var inst_16703 = (state_16713[2]);var state_16713__$1 = state_16713;var statearr_16724_16743 = state_16713__$1;(statearr_16724_16743[2] = inst_16703);
(statearr_16724_16743[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16714 === 11))
{var inst_16706 = (state_16713[2]);var state_16713__$1 = (function (){var statearr_16725 = state_16713;(statearr_16725[8] = inst_16706);
return statearr_16725;
})();var statearr_16726_16744 = state_16713__$1;(statearr_16726_16744[2] = null);
(statearr_16726_16744[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16730 = (new Array(9));(statearr_16730[0] = state_machine__5985__auto__);
(statearr_16730[1] = 1);
return statearr_16730;
});
var state_machine__5985__auto____1 = (function (state_16713){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_16713);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16731){if((e16731 instanceof Object))
{var ex__5988__auto__ = e16731;var statearr_16732_16745 = state_16713;(statearr_16732_16745[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16746 = state_16713;
state_16713 = G__16746;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16713){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16733 = f__6055__auto__.call(null);(statearr_16733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___16734);
return statearr_16733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6054__auto___16833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16811){var state_val_16812 = (state_16811[1]);if((state_val_16812 === 1))
{var state_16811__$1 = state_16811;var statearr_16813_16834 = state_16811__$1;(statearr_16813_16834[2] = null);
(statearr_16813_16834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 2))
{var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16811__$1,4,ch);
} else
{if((state_val_16812 === 3))
{var inst_16809 = (state_16811[2]);var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16811__$1,inst_16809);
} else
{if((state_val_16812 === 4))
{var inst_16792 = (state_16811[7]);var inst_16792__$1 = (state_16811[2]);var inst_16793 = (inst_16792__$1 == null);var state_16811__$1 = (function (){var statearr_16814 = state_16811;(statearr_16814[7] = inst_16792__$1);
return statearr_16814;
})();if(cljs.core.truth_(inst_16793))
{var statearr_16815_16835 = state_16811__$1;(statearr_16815_16835[1] = 5);
} else
{var statearr_16816_16836 = state_16811__$1;(statearr_16816_16836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 5))
{var inst_16795 = cljs.core.async.close_BANG_.call(null,tc);var inst_16796 = cljs.core.async.close_BANG_.call(null,fc);var state_16811__$1 = (function (){var statearr_16817 = state_16811;(statearr_16817[8] = inst_16795);
return statearr_16817;
})();var statearr_16818_16837 = state_16811__$1;(statearr_16818_16837[2] = inst_16796);
(statearr_16818_16837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 6))
{var inst_16792 = (state_16811[7]);var inst_16798 = p.call(null,inst_16792);var state_16811__$1 = state_16811;if(cljs.core.truth_(inst_16798))
{var statearr_16819_16838 = state_16811__$1;(statearr_16819_16838[1] = 9);
} else
{var statearr_16820_16839 = state_16811__$1;(statearr_16820_16839[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 7))
{var inst_16807 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16821_16840 = state_16811__$1;(statearr_16821_16840[2] = inst_16807);
(statearr_16821_16840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 8))
{var inst_16804 = (state_16811[2]);var state_16811__$1 = (function (){var statearr_16822 = state_16811;(statearr_16822[9] = inst_16804);
return statearr_16822;
})();var statearr_16823_16841 = state_16811__$1;(statearr_16823_16841[2] = null);
(statearr_16823_16841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 9))
{var state_16811__$1 = state_16811;var statearr_16824_16842 = state_16811__$1;(statearr_16824_16842[2] = tc);
(statearr_16824_16842[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 10))
{var state_16811__$1 = state_16811;var statearr_16825_16843 = state_16811__$1;(statearr_16825_16843[2] = fc);
(statearr_16825_16843[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 11))
{var inst_16792 = (state_16811[7]);var inst_16802 = (state_16811[2]);var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16811__$1,8,inst_16802,inst_16792);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16829 = (new Array(10));(statearr_16829[0] = state_machine__5985__auto__);
(statearr_16829[1] = 1);
return statearr_16829;
});
var state_machine__5985__auto____1 = (function (state_16811){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_16811);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16830){if((e16830 instanceof Object))
{var ex__5988__auto__ = e16830;var statearr_16831_16844 = state_16811;(statearr_16831_16844[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16845 = state_16811;
state_16811 = G__16845;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16832 = f__6055__auto__.call(null);(statearr_16832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___16833);
return statearr_16832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6054__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16892){var state_val_16893 = (state_16892[1]);if((state_val_16893 === 7))
{var inst_16888 = (state_16892[2]);var state_16892__$1 = state_16892;var statearr_16894_16910 = state_16892__$1;(statearr_16894_16910[2] = inst_16888);
(statearr_16894_16910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16893 === 6))
{var inst_16878 = (state_16892[7]);var inst_16881 = (state_16892[8]);var inst_16885 = f.call(null,inst_16878,inst_16881);var inst_16878__$1 = inst_16885;var state_16892__$1 = (function (){var statearr_16895 = state_16892;(statearr_16895[7] = inst_16878__$1);
return statearr_16895;
})();var statearr_16896_16911 = state_16892__$1;(statearr_16896_16911[2] = null);
(statearr_16896_16911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16893 === 5))
{var inst_16878 = (state_16892[7]);var state_16892__$1 = state_16892;var statearr_16897_16912 = state_16892__$1;(statearr_16897_16912[2] = inst_16878);
(statearr_16897_16912[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16893 === 4))
{var inst_16881 = (state_16892[8]);var inst_16881__$1 = (state_16892[2]);var inst_16882 = (inst_16881__$1 == null);var state_16892__$1 = (function (){var statearr_16898 = state_16892;(statearr_16898[8] = inst_16881__$1);
return statearr_16898;
})();if(cljs.core.truth_(inst_16882))
{var statearr_16899_16913 = state_16892__$1;(statearr_16899_16913[1] = 5);
} else
{var statearr_16900_16914 = state_16892__$1;(statearr_16900_16914[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16893 === 3))
{var inst_16890 = (state_16892[2]);var state_16892__$1 = state_16892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16892__$1,inst_16890);
} else
{if((state_val_16893 === 2))
{var state_16892__$1 = state_16892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16892__$1,4,ch);
} else
{if((state_val_16893 === 1))
{var inst_16878 = init;var state_16892__$1 = (function (){var statearr_16901 = state_16892;(statearr_16901[7] = inst_16878);
return statearr_16901;
})();var statearr_16902_16915 = state_16892__$1;(statearr_16902_16915[2] = null);
(statearr_16902_16915[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16906 = (new Array(9));(statearr_16906[0] = state_machine__5985__auto__);
(statearr_16906[1] = 1);
return statearr_16906;
});
var state_machine__5985__auto____1 = (function (state_16892){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_16892);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16907){if((e16907 instanceof Object))
{var ex__5988__auto__ = e16907;var statearr_16908_16916 = state_16892;(statearr_16908_16916[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16917 = state_16892;
state_16892 = G__16917;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16892){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16909 = f__6055__auto__.call(null);(statearr_16909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_16909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
}));
return c__6054__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6054__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16979){var state_val_16980 = (state_16979[1]);if((state_val_16980 === 1))
{var inst_16959 = cljs.core.seq.call(null,coll);var inst_16960 = inst_16959;var state_16979__$1 = (function (){var statearr_16981 = state_16979;(statearr_16981[7] = inst_16960);
return statearr_16981;
})();var statearr_16982_17000 = state_16979__$1;(statearr_16982_17000[2] = null);
(statearr_16982_17000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16980 === 2))
{var inst_16960 = (state_16979[7]);var state_16979__$1 = state_16979;if(cljs.core.truth_(inst_16960))
{var statearr_16983_17001 = state_16979__$1;(statearr_16983_17001[1] = 4);
} else
{var statearr_16984_17002 = state_16979__$1;(statearr_16984_17002[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16980 === 3))
{var inst_16977 = (state_16979[2]);var state_16979__$1 = state_16979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16979__$1,inst_16977);
} else
{if((state_val_16980 === 4))
{var inst_16960 = (state_16979[7]);var inst_16963 = cljs.core.first.call(null,inst_16960);var state_16979__$1 = state_16979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16979__$1,7,ch,inst_16963);
} else
{if((state_val_16980 === 5))
{var state_16979__$1 = state_16979;if(cljs.core.truth_(close_QMARK_))
{var statearr_16985_17003 = state_16979__$1;(statearr_16985_17003[1] = 8);
} else
{var statearr_16986_17004 = state_16979__$1;(statearr_16986_17004[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16980 === 6))
{var inst_16975 = (state_16979[2]);var state_16979__$1 = state_16979;var statearr_16987_17005 = state_16979__$1;(statearr_16987_17005[2] = inst_16975);
(statearr_16987_17005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16980 === 7))
{var inst_16960 = (state_16979[7]);var inst_16965 = (state_16979[2]);var inst_16966 = cljs.core.next.call(null,inst_16960);var inst_16960__$1 = inst_16966;var state_16979__$1 = (function (){var statearr_16988 = state_16979;(statearr_16988[7] = inst_16960__$1);
(statearr_16988[8] = inst_16965);
return statearr_16988;
})();var statearr_16989_17006 = state_16979__$1;(statearr_16989_17006[2] = null);
(statearr_16989_17006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16980 === 8))
{var inst_16970 = cljs.core.async.close_BANG_.call(null,ch);var state_16979__$1 = state_16979;var statearr_16990_17007 = state_16979__$1;(statearr_16990_17007[2] = inst_16970);
(statearr_16990_17007[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16980 === 9))
{var state_16979__$1 = state_16979;var statearr_16991_17008 = state_16979__$1;(statearr_16991_17008[2] = null);
(statearr_16991_17008[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16980 === 10))
{var inst_16973 = (state_16979[2]);var state_16979__$1 = state_16979;var statearr_16992_17009 = state_16979__$1;(statearr_16992_17009[2] = inst_16973);
(statearr_16992_17009[1] = 6);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16996 = (new Array(9));(statearr_16996[0] = state_machine__5985__auto__);
(statearr_16996[1] = 1);
return statearr_16996;
});
var state_machine__5985__auto____1 = (function (state_16979){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_16979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16997){if((e16997 instanceof Object))
{var ex__5988__auto__ = e16997;var statearr_16998_17010 = state_16979;(statearr_16998_17010[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17011 = state_16979;
state_16979 = G__17011;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16979){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16999 = f__6055__auto__.call(null);(statearr_16999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_16999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
}));
return c__6054__auto__;
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
cljs.core.async.Mux = (function (){var obj17013 = {};return obj17013;
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
cljs.core.async.Mult = (function (){var obj17015 = {};return obj17015;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17230 = (function (cs,ch,mult,meta17231){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17231 = meta17231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17230.cljs$lang$type = true;
cljs.core.async.t17230.cljs$lang$ctorStr = "cljs.core.async/t17230";
cljs.core.async.t17230.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17230");
});})(cs))
;
cljs.core.async.t17230.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17230.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17230.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17230.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17230.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17232){var self__ = this;
var _17232__$1 = this;return self__.meta17231;
});})(cs))
;
cljs.core.async.t17230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17232,meta17231__$1){var self__ = this;
var _17232__$1 = this;return (new cljs.core.async.t17230(self__.cs,self__.ch,self__.mult,meta17231__$1));
});})(cs))
;
cljs.core.async.__GT_t17230 = ((function (cs){
return (function __GT_t17230(cs__$1,ch__$1,mult__$1,meta17231){return (new cljs.core.async.t17230(cs__$1,ch__$1,mult__$1,meta17231));
});})(cs))
;
}
return (new cljs.core.async.t17230(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6054__auto___17444 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_17362){var state_val_17363 = (state_17362[1]);if((state_val_17363 === 32))
{var inst_17311 = (state_17362[7]);var inst_17235 = (state_17362[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17362,31,Object,null,30);var inst_17318 = cljs.core.async.put_BANG_.call(null,inst_17311,inst_17235,done);var state_17362__$1 = state_17362;var statearr_17364_17445 = state_17362__$1;(statearr_17364_17445[2] = inst_17318);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17362__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 1))
{var state_17362__$1 = state_17362;var statearr_17365_17446 = state_17362__$1;(statearr_17365_17446[2] = null);
(statearr_17365_17446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 33))
{var inst_17324 = (state_17362[9]);var inst_17326 = cljs.core.chunked_seq_QMARK_.call(null,inst_17324);var state_17362__$1 = state_17362;if(inst_17326)
{var statearr_17366_17447 = state_17362__$1;(statearr_17366_17447[1] = 36);
} else
{var statearr_17367_17448 = state_17362__$1;(statearr_17367_17448[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 2))
{var state_17362__$1 = state_17362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17362__$1,4,ch);
} else
{if((state_val_17363 === 34))
{var state_17362__$1 = state_17362;var statearr_17368_17449 = state_17362__$1;(statearr_17368_17449[2] = null);
(statearr_17368_17449[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 3))
{var inst_17360 = (state_17362[2]);var state_17362__$1 = state_17362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17362__$1,inst_17360);
} else
{if((state_val_17363 === 35))
{var inst_17349 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17369_17450 = state_17362__$1;(statearr_17369_17450[2] = inst_17349);
(statearr_17369_17450[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 4))
{var inst_17235 = (state_17362[8]);var inst_17235__$1 = (state_17362[2]);var inst_17236 = (inst_17235__$1 == null);var state_17362__$1 = (function (){var statearr_17370 = state_17362;(statearr_17370[8] = inst_17235__$1);
return statearr_17370;
})();if(cljs.core.truth_(inst_17236))
{var statearr_17371_17451 = state_17362__$1;(statearr_17371_17451[1] = 5);
} else
{var statearr_17372_17452 = state_17362__$1;(statearr_17372_17452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 36))
{var inst_17324 = (state_17362[9]);var inst_17328 = cljs.core.chunk_first.call(null,inst_17324);var inst_17329 = cljs.core.chunk_rest.call(null,inst_17324);var inst_17330 = cljs.core.count.call(null,inst_17328);var inst_17303 = inst_17329;var inst_17304 = inst_17328;var inst_17305 = inst_17330;var inst_17306 = 0;var state_17362__$1 = (function (){var statearr_17373 = state_17362;(statearr_17373[10] = inst_17306);
(statearr_17373[11] = inst_17305);
(statearr_17373[12] = inst_17304);
(statearr_17373[13] = inst_17303);
return statearr_17373;
})();var statearr_17374_17453 = state_17362__$1;(statearr_17374_17453[2] = null);
(statearr_17374_17453[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 5))
{var inst_17242 = cljs.core.deref.call(null,cs);var inst_17243 = cljs.core.seq.call(null,inst_17242);var inst_17244 = inst_17243;var inst_17245 = null;var inst_17246 = 0;var inst_17247 = 0;var state_17362__$1 = (function (){var statearr_17375 = state_17362;(statearr_17375[14] = inst_17247);
(statearr_17375[15] = inst_17245);
(statearr_17375[16] = inst_17246);
(statearr_17375[17] = inst_17244);
return statearr_17375;
})();var statearr_17376_17454 = state_17362__$1;(statearr_17376_17454[2] = null);
(statearr_17376_17454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 37))
{var inst_17324 = (state_17362[9]);var inst_17333 = cljs.core.first.call(null,inst_17324);var state_17362__$1 = (function (){var statearr_17377 = state_17362;(statearr_17377[18] = inst_17333);
return statearr_17377;
})();var statearr_17378_17455 = state_17362__$1;(statearr_17378_17455[2] = null);
(statearr_17378_17455[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 6))
{var inst_17294 = cljs.core.deref.call(null,cs);var inst_17295 = cljs.core.keys.call(null,inst_17294);var inst_17296 = cljs.core.count.call(null,inst_17295);var inst_17297 = cljs.core.reset_BANG_.call(null,dctr,inst_17296);var inst_17302 = cljs.core.seq.call(null,inst_17295);var inst_17303 = inst_17302;var inst_17304 = null;var inst_17305 = 0;var inst_17306 = 0;var state_17362__$1 = (function (){var statearr_17379 = state_17362;(statearr_17379[19] = inst_17297);
(statearr_17379[10] = inst_17306);
(statearr_17379[11] = inst_17305);
(statearr_17379[12] = inst_17304);
(statearr_17379[13] = inst_17303);
return statearr_17379;
})();var statearr_17380_17456 = state_17362__$1;(statearr_17380_17456[2] = null);
(statearr_17380_17456[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 38))
{var inst_17346 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17381_17457 = state_17362__$1;(statearr_17381_17457[2] = inst_17346);
(statearr_17381_17457[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 7))
{var inst_17358 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17382_17458 = state_17362__$1;(statearr_17382_17458[2] = inst_17358);
(statearr_17382_17458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 39))
{var inst_17324 = (state_17362[9]);var inst_17342 = (state_17362[2]);var inst_17343 = cljs.core.next.call(null,inst_17324);var inst_17303 = inst_17343;var inst_17304 = null;var inst_17305 = 0;var inst_17306 = 0;var state_17362__$1 = (function (){var statearr_17383 = state_17362;(statearr_17383[10] = inst_17306);
(statearr_17383[11] = inst_17305);
(statearr_17383[12] = inst_17304);
(statearr_17383[13] = inst_17303);
(statearr_17383[20] = inst_17342);
return statearr_17383;
})();var statearr_17384_17459 = state_17362__$1;(statearr_17384_17459[2] = null);
(statearr_17384_17459[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 8))
{var inst_17247 = (state_17362[14]);var inst_17246 = (state_17362[16]);var inst_17249 = (inst_17247 < inst_17246);var inst_17250 = inst_17249;var state_17362__$1 = state_17362;if(cljs.core.truth_(inst_17250))
{var statearr_17385_17460 = state_17362__$1;(statearr_17385_17460[1] = 10);
} else
{var statearr_17386_17461 = state_17362__$1;(statearr_17386_17461[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 40))
{var inst_17333 = (state_17362[18]);var inst_17334 = (state_17362[2]);var inst_17335 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17336 = cljs.core.async.untap_STAR_.call(null,m,inst_17333);var state_17362__$1 = (function (){var statearr_17387 = state_17362;(statearr_17387[21] = inst_17335);
(statearr_17387[22] = inst_17334);
return statearr_17387;
})();var statearr_17388_17462 = state_17362__$1;(statearr_17388_17462[2] = inst_17336);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17362__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 9))
{var inst_17292 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17389_17463 = state_17362__$1;(statearr_17389_17463[2] = inst_17292);
(statearr_17389_17463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 41))
{var inst_17235 = (state_17362[8]);var inst_17333 = (state_17362[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17362,40,Object,null,39);var inst_17340 = cljs.core.async.put_BANG_.call(null,inst_17333,inst_17235,done);var state_17362__$1 = state_17362;var statearr_17390_17464 = state_17362__$1;(statearr_17390_17464[2] = inst_17340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17362__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 10))
{var inst_17247 = (state_17362[14]);var inst_17245 = (state_17362[15]);var inst_17253 = cljs.core._nth.call(null,inst_17245,inst_17247);var inst_17254 = cljs.core.nth.call(null,inst_17253,0,null);var inst_17255 = cljs.core.nth.call(null,inst_17253,1,null);var state_17362__$1 = (function (){var statearr_17391 = state_17362;(statearr_17391[23] = inst_17254);
return statearr_17391;
})();if(cljs.core.truth_(inst_17255))
{var statearr_17392_17465 = state_17362__$1;(statearr_17392_17465[1] = 13);
} else
{var statearr_17393_17466 = state_17362__$1;(statearr_17393_17466[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 42))
{var inst_17355 = (state_17362[2]);var state_17362__$1 = (function (){var statearr_17394 = state_17362;(statearr_17394[24] = inst_17355);
return statearr_17394;
})();var statearr_17395_17467 = state_17362__$1;(statearr_17395_17467[2] = null);
(statearr_17395_17467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 11))
{var inst_17244 = (state_17362[17]);var inst_17264 = (state_17362[25]);var inst_17264__$1 = cljs.core.seq.call(null,inst_17244);var state_17362__$1 = (function (){var statearr_17396 = state_17362;(statearr_17396[25] = inst_17264__$1);
return statearr_17396;
})();if(inst_17264__$1)
{var statearr_17397_17468 = state_17362__$1;(statearr_17397_17468[1] = 16);
} else
{var statearr_17398_17469 = state_17362__$1;(statearr_17398_17469[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 12))
{var inst_17290 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17399_17470 = state_17362__$1;(statearr_17399_17470[2] = inst_17290);
(statearr_17399_17470[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 13))
{var inst_17254 = (state_17362[23]);var inst_17257 = cljs.core.async.close_BANG_.call(null,inst_17254);var state_17362__$1 = state_17362;var statearr_17403_17471 = state_17362__$1;(statearr_17403_17471[2] = inst_17257);
(statearr_17403_17471[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 14))
{var state_17362__$1 = state_17362;var statearr_17404_17472 = state_17362__$1;(statearr_17404_17472[2] = null);
(statearr_17404_17472[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 15))
{var inst_17247 = (state_17362[14]);var inst_17245 = (state_17362[15]);var inst_17246 = (state_17362[16]);var inst_17244 = (state_17362[17]);var inst_17260 = (state_17362[2]);var inst_17261 = (inst_17247 + 1);var tmp17400 = inst_17245;var tmp17401 = inst_17246;var tmp17402 = inst_17244;var inst_17244__$1 = tmp17402;var inst_17245__$1 = tmp17400;var inst_17246__$1 = tmp17401;var inst_17247__$1 = inst_17261;var state_17362__$1 = (function (){var statearr_17405 = state_17362;(statearr_17405[26] = inst_17260);
(statearr_17405[14] = inst_17247__$1);
(statearr_17405[15] = inst_17245__$1);
(statearr_17405[16] = inst_17246__$1);
(statearr_17405[17] = inst_17244__$1);
return statearr_17405;
})();var statearr_17406_17473 = state_17362__$1;(statearr_17406_17473[2] = null);
(statearr_17406_17473[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 16))
{var inst_17264 = (state_17362[25]);var inst_17266 = cljs.core.chunked_seq_QMARK_.call(null,inst_17264);var state_17362__$1 = state_17362;if(inst_17266)
{var statearr_17407_17474 = state_17362__$1;(statearr_17407_17474[1] = 19);
} else
{var statearr_17408_17475 = state_17362__$1;(statearr_17408_17475[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 17))
{var state_17362__$1 = state_17362;var statearr_17409_17476 = state_17362__$1;(statearr_17409_17476[2] = null);
(statearr_17409_17476[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 18))
{var inst_17288 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17410_17477 = state_17362__$1;(statearr_17410_17477[2] = inst_17288);
(statearr_17410_17477[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 19))
{var inst_17264 = (state_17362[25]);var inst_17268 = cljs.core.chunk_first.call(null,inst_17264);var inst_17269 = cljs.core.chunk_rest.call(null,inst_17264);var inst_17270 = cljs.core.count.call(null,inst_17268);var inst_17244 = inst_17269;var inst_17245 = inst_17268;var inst_17246 = inst_17270;var inst_17247 = 0;var state_17362__$1 = (function (){var statearr_17411 = state_17362;(statearr_17411[14] = inst_17247);
(statearr_17411[15] = inst_17245);
(statearr_17411[16] = inst_17246);
(statearr_17411[17] = inst_17244);
return statearr_17411;
})();var statearr_17412_17478 = state_17362__$1;(statearr_17412_17478[2] = null);
(statearr_17412_17478[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 20))
{var inst_17264 = (state_17362[25]);var inst_17274 = cljs.core.first.call(null,inst_17264);var inst_17275 = cljs.core.nth.call(null,inst_17274,0,null);var inst_17276 = cljs.core.nth.call(null,inst_17274,1,null);var state_17362__$1 = (function (){var statearr_17413 = state_17362;(statearr_17413[27] = inst_17275);
return statearr_17413;
})();if(cljs.core.truth_(inst_17276))
{var statearr_17414_17479 = state_17362__$1;(statearr_17414_17479[1] = 22);
} else
{var statearr_17415_17480 = state_17362__$1;(statearr_17415_17480[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 21))
{var inst_17285 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17416_17481 = state_17362__$1;(statearr_17416_17481[2] = inst_17285);
(statearr_17416_17481[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 22))
{var inst_17275 = (state_17362[27]);var inst_17278 = cljs.core.async.close_BANG_.call(null,inst_17275);var state_17362__$1 = state_17362;var statearr_17417_17482 = state_17362__$1;(statearr_17417_17482[2] = inst_17278);
(statearr_17417_17482[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 23))
{var state_17362__$1 = state_17362;var statearr_17418_17483 = state_17362__$1;(statearr_17418_17483[2] = null);
(statearr_17418_17483[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 24))
{var inst_17264 = (state_17362[25]);var inst_17281 = (state_17362[2]);var inst_17282 = cljs.core.next.call(null,inst_17264);var inst_17244 = inst_17282;var inst_17245 = null;var inst_17246 = 0;var inst_17247 = 0;var state_17362__$1 = (function (){var statearr_17419 = state_17362;(statearr_17419[14] = inst_17247);
(statearr_17419[15] = inst_17245);
(statearr_17419[16] = inst_17246);
(statearr_17419[17] = inst_17244);
(statearr_17419[28] = inst_17281);
return statearr_17419;
})();var statearr_17420_17484 = state_17362__$1;(statearr_17420_17484[2] = null);
(statearr_17420_17484[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 25))
{var inst_17306 = (state_17362[10]);var inst_17305 = (state_17362[11]);var inst_17308 = (inst_17306 < inst_17305);var inst_17309 = inst_17308;var state_17362__$1 = state_17362;if(cljs.core.truth_(inst_17309))
{var statearr_17421_17485 = state_17362__$1;(statearr_17421_17485[1] = 27);
} else
{var statearr_17422_17486 = state_17362__$1;(statearr_17422_17486[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 26))
{var inst_17353 = (state_17362[2]);var state_17362__$1 = (function (){var statearr_17423 = state_17362;(statearr_17423[29] = inst_17353);
return statearr_17423;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17362__$1,42,dchan);
} else
{if((state_val_17363 === 27))
{var inst_17306 = (state_17362[10]);var inst_17304 = (state_17362[12]);var inst_17311 = cljs.core._nth.call(null,inst_17304,inst_17306);var state_17362__$1 = (function (){var statearr_17424 = state_17362;(statearr_17424[7] = inst_17311);
return statearr_17424;
})();var statearr_17425_17487 = state_17362__$1;(statearr_17425_17487[2] = null);
(statearr_17425_17487[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 28))
{var inst_17324 = (state_17362[9]);var inst_17303 = (state_17362[13]);var inst_17324__$1 = cljs.core.seq.call(null,inst_17303);var state_17362__$1 = (function (){var statearr_17429 = state_17362;(statearr_17429[9] = inst_17324__$1);
return statearr_17429;
})();if(inst_17324__$1)
{var statearr_17430_17488 = state_17362__$1;(statearr_17430_17488[1] = 33);
} else
{var statearr_17431_17489 = state_17362__$1;(statearr_17431_17489[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 29))
{var inst_17351 = (state_17362[2]);var state_17362__$1 = state_17362;var statearr_17432_17490 = state_17362__$1;(statearr_17432_17490[2] = inst_17351);
(statearr_17432_17490[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 30))
{var inst_17306 = (state_17362[10]);var inst_17305 = (state_17362[11]);var inst_17304 = (state_17362[12]);var inst_17303 = (state_17362[13]);var inst_17320 = (state_17362[2]);var inst_17321 = (inst_17306 + 1);var tmp17426 = inst_17305;var tmp17427 = inst_17304;var tmp17428 = inst_17303;var inst_17303__$1 = tmp17428;var inst_17304__$1 = tmp17427;var inst_17305__$1 = tmp17426;var inst_17306__$1 = inst_17321;var state_17362__$1 = (function (){var statearr_17433 = state_17362;(statearr_17433[30] = inst_17320);
(statearr_17433[10] = inst_17306__$1);
(statearr_17433[11] = inst_17305__$1);
(statearr_17433[12] = inst_17304__$1);
(statearr_17433[13] = inst_17303__$1);
return statearr_17433;
})();var statearr_17434_17491 = state_17362__$1;(statearr_17434_17491[2] = null);
(statearr_17434_17491[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17363 === 31))
{var inst_17311 = (state_17362[7]);var inst_17312 = (state_17362[2]);var inst_17313 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17314 = cljs.core.async.untap_STAR_.call(null,m,inst_17311);var state_17362__$1 = (function (){var statearr_17435 = state_17362;(statearr_17435[31] = inst_17313);
(statearr_17435[32] = inst_17312);
return statearr_17435;
})();var statearr_17436_17492 = state_17362__$1;(statearr_17436_17492[2] = inst_17314);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17362__$1);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_17440 = (new Array(33));(statearr_17440[0] = state_machine__5985__auto__);
(statearr_17440[1] = 1);
return statearr_17440;
});
var state_machine__5985__auto____1 = (function (state_17362){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_17362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e17441){if((e17441 instanceof Object))
{var ex__5988__auto__ = e17441;var statearr_17442_17493 = state_17362;(statearr_17442_17493[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17494 = state_17362;
state_17362 = G__17494;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_17362){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_17362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_17443 = f__6055__auto__.call(null);(statearr_17443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___17444);
return statearr_17443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.Mix = (function (){var obj17496 = {};return obj17496;
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
;var m = (function (){if(typeof cljs.core.async.t17606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17606 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17607){
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
this.meta17607 = meta17607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17606.cljs$lang$type = true;
cljs.core.async.t17606.cljs$lang$ctorStr = "cljs.core.async/t17606";
cljs.core.async.t17606.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17606");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17606.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17608){var self__ = this;
var _17608__$1 = this;return self__.meta17607;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17608,meta17607__$1){var self__ = this;
var _17608__$1 = this;return (new cljs.core.async.t17606(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17607__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17606 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17606(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17607){return (new cljs.core.async.t17606(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17607));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17606(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6054__auto___17715 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_17673){var state_val_17674 = (state_17673[1]);if((state_val_17674 === 1))
{var inst_17612 = (state_17673[7]);var inst_17612__$1 = calc_state.call(null);var inst_17613 = cljs.core.seq_QMARK_.call(null,inst_17612__$1);var state_17673__$1 = (function (){var statearr_17675 = state_17673;(statearr_17675[7] = inst_17612__$1);
return statearr_17675;
})();if(inst_17613)
{var statearr_17676_17716 = state_17673__$1;(statearr_17676_17716[1] = 2);
} else
{var statearr_17677_17717 = state_17673__$1;(statearr_17677_17717[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 2))
{var inst_17612 = (state_17673[7]);var inst_17615 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17612);var state_17673__$1 = state_17673;var statearr_17678_17718 = state_17673__$1;(statearr_17678_17718[2] = inst_17615);
(statearr_17678_17718[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 3))
{var inst_17612 = (state_17673[7]);var state_17673__$1 = state_17673;var statearr_17679_17719 = state_17673__$1;(statearr_17679_17719[2] = inst_17612);
(statearr_17679_17719[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 4))
{var inst_17612 = (state_17673[7]);var inst_17618 = (state_17673[2]);var inst_17619 = cljs.core.get.call(null,inst_17618,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17620 = cljs.core.get.call(null,inst_17618,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17621 = cljs.core.get.call(null,inst_17618,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17622 = inst_17612;var state_17673__$1 = (function (){var statearr_17680 = state_17673;(statearr_17680[8] = inst_17619);
(statearr_17680[9] = inst_17621);
(statearr_17680[10] = inst_17622);
(statearr_17680[11] = inst_17620);
return statearr_17680;
})();var statearr_17681_17720 = state_17673__$1;(statearr_17681_17720[2] = null);
(statearr_17681_17720[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 5))
{var inst_17622 = (state_17673[10]);var inst_17625 = cljs.core.seq_QMARK_.call(null,inst_17622);var state_17673__$1 = state_17673;if(inst_17625)
{var statearr_17682_17721 = state_17673__$1;(statearr_17682_17721[1] = 7);
} else
{var statearr_17683_17722 = state_17673__$1;(statearr_17683_17722[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 6))
{var inst_17671 = (state_17673[2]);var state_17673__$1 = state_17673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17673__$1,inst_17671);
} else
{if((state_val_17674 === 7))
{var inst_17622 = (state_17673[10]);var inst_17627 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17622);var state_17673__$1 = state_17673;var statearr_17684_17723 = state_17673__$1;(statearr_17684_17723[2] = inst_17627);
(statearr_17684_17723[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 8))
{var inst_17622 = (state_17673[10]);var state_17673__$1 = state_17673;var statearr_17685_17724 = state_17673__$1;(statearr_17685_17724[2] = inst_17622);
(statearr_17685_17724[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 9))
{var inst_17630 = (state_17673[12]);var inst_17630__$1 = (state_17673[2]);var inst_17631 = cljs.core.get.call(null,inst_17630__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17632 = cljs.core.get.call(null,inst_17630__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17633 = cljs.core.get.call(null,inst_17630__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17673__$1 = (function (){var statearr_17686 = state_17673;(statearr_17686[13] = inst_17632);
(statearr_17686[14] = inst_17633);
(statearr_17686[12] = inst_17630__$1);
return statearr_17686;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17673__$1,10,inst_17631);
} else
{if((state_val_17674 === 10))
{var inst_17638 = (state_17673[15]);var inst_17637 = (state_17673[16]);var inst_17636 = (state_17673[2]);var inst_17637__$1 = cljs.core.nth.call(null,inst_17636,0,null);var inst_17638__$1 = cljs.core.nth.call(null,inst_17636,1,null);var inst_17639 = (inst_17637__$1 == null);var inst_17640 = cljs.core._EQ_.call(null,inst_17638__$1,change);var inst_17641 = (inst_17639) || (inst_17640);var state_17673__$1 = (function (){var statearr_17687 = state_17673;(statearr_17687[15] = inst_17638__$1);
(statearr_17687[16] = inst_17637__$1);
return statearr_17687;
})();if(cljs.core.truth_(inst_17641))
{var statearr_17688_17725 = state_17673__$1;(statearr_17688_17725[1] = 11);
} else
{var statearr_17689_17726 = state_17673__$1;(statearr_17689_17726[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 11))
{var inst_17637 = (state_17673[16]);var inst_17643 = (inst_17637 == null);var state_17673__$1 = state_17673;if(cljs.core.truth_(inst_17643))
{var statearr_17690_17727 = state_17673__$1;(statearr_17690_17727[1] = 14);
} else
{var statearr_17691_17728 = state_17673__$1;(statearr_17691_17728[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 12))
{var inst_17633 = (state_17673[14]);var inst_17638 = (state_17673[15]);var inst_17652 = (state_17673[17]);var inst_17652__$1 = inst_17633.call(null,inst_17638);var state_17673__$1 = (function (){var statearr_17692 = state_17673;(statearr_17692[17] = inst_17652__$1);
return statearr_17692;
})();if(cljs.core.truth_(inst_17652__$1))
{var statearr_17693_17729 = state_17673__$1;(statearr_17693_17729[1] = 17);
} else
{var statearr_17694_17730 = state_17673__$1;(statearr_17694_17730[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 13))
{var inst_17669 = (state_17673[2]);var state_17673__$1 = state_17673;var statearr_17695_17731 = state_17673__$1;(statearr_17695_17731[2] = inst_17669);
(statearr_17695_17731[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 14))
{var inst_17638 = (state_17673[15]);var inst_17645 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17638);var state_17673__$1 = state_17673;var statearr_17696_17732 = state_17673__$1;(statearr_17696_17732[2] = inst_17645);
(statearr_17696_17732[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 15))
{var state_17673__$1 = state_17673;var statearr_17697_17733 = state_17673__$1;(statearr_17697_17733[2] = null);
(statearr_17697_17733[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 16))
{var inst_17648 = (state_17673[2]);var inst_17649 = calc_state.call(null);var inst_17622 = inst_17649;var state_17673__$1 = (function (){var statearr_17698 = state_17673;(statearr_17698[18] = inst_17648);
(statearr_17698[10] = inst_17622);
return statearr_17698;
})();var statearr_17699_17734 = state_17673__$1;(statearr_17699_17734[2] = null);
(statearr_17699_17734[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 17))
{var inst_17652 = (state_17673[17]);var state_17673__$1 = state_17673;var statearr_17700_17735 = state_17673__$1;(statearr_17700_17735[2] = inst_17652);
(statearr_17700_17735[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 18))
{var inst_17632 = (state_17673[13]);var inst_17633 = (state_17673[14]);var inst_17638 = (state_17673[15]);var inst_17655 = cljs.core.empty_QMARK_.call(null,inst_17633);var inst_17656 = inst_17632.call(null,inst_17638);var inst_17657 = cljs.core.not.call(null,inst_17656);var inst_17658 = (inst_17655) && (inst_17657);var state_17673__$1 = state_17673;var statearr_17701_17736 = state_17673__$1;(statearr_17701_17736[2] = inst_17658);
(statearr_17701_17736[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 19))
{var inst_17660 = (state_17673[2]);var state_17673__$1 = state_17673;if(cljs.core.truth_(inst_17660))
{var statearr_17702_17737 = state_17673__$1;(statearr_17702_17737[1] = 20);
} else
{var statearr_17703_17738 = state_17673__$1;(statearr_17703_17738[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 20))
{var inst_17637 = (state_17673[16]);var state_17673__$1 = state_17673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17673__$1,23,out,inst_17637);
} else
{if((state_val_17674 === 21))
{var state_17673__$1 = state_17673;var statearr_17704_17739 = state_17673__$1;(statearr_17704_17739[2] = null);
(statearr_17704_17739[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 22))
{var inst_17630 = (state_17673[12]);var inst_17666 = (state_17673[2]);var inst_17622 = inst_17630;var state_17673__$1 = (function (){var statearr_17705 = state_17673;(statearr_17705[19] = inst_17666);
(statearr_17705[10] = inst_17622);
return statearr_17705;
})();var statearr_17706_17740 = state_17673__$1;(statearr_17706_17740[2] = null);
(statearr_17706_17740[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17674 === 23))
{var inst_17663 = (state_17673[2]);var state_17673__$1 = state_17673;var statearr_17707_17741 = state_17673__$1;(statearr_17707_17741[2] = inst_17663);
(statearr_17707_17741[1] = 22);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_17711 = (new Array(20));(statearr_17711[0] = state_machine__5985__auto__);
(statearr_17711[1] = 1);
return statearr_17711;
});
var state_machine__5985__auto____1 = (function (state_17673){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_17673);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e17712){if((e17712 instanceof Object))
{var ex__5988__auto__ = e17712;var statearr_17713_17742 = state_17673;(statearr_17713_17742[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17673);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17743 = state_17673;
state_17673 = G__17743;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_17673){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_17673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_17714 = f__6055__auto__.call(null);(statearr_17714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___17715);
return statearr_17714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.Pub = (function (){var obj17745 = {};return obj17745;
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
return (function (p1__17746_SHARP_){if(cljs.core.truth_(p1__17746_SHARP_.call(null,topic)))
{return p1__17746_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17746_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17871 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17871 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17872){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17872 = meta17872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17871.cljs$lang$type = true;
cljs.core.async.t17871.cljs$lang$ctorStr = "cljs.core.async/t17871";
cljs.core.async.t17871.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17871");
});})(mults,ensure_mult))
;
cljs.core.async.t17871.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17871.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17871.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17871.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17873){var self__ = this;
var _17873__$1 = this;return self__.meta17872;
});})(mults,ensure_mult))
;
cljs.core.async.t17871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17873,meta17872__$1){var self__ = this;
var _17873__$1 = this;return (new cljs.core.async.t17871(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17872__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17871 = ((function (mults,ensure_mult){
return (function __GT_t17871(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17872){return (new cljs.core.async.t17871(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17872));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17871(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6054__auto___17995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_17947){var state_val_17948 = (state_17947[1]);if((state_val_17948 === 1))
{var state_17947__$1 = state_17947;var statearr_17949_17996 = state_17947__$1;(statearr_17949_17996[2] = null);
(statearr_17949_17996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 2))
{var state_17947__$1 = state_17947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17947__$1,4,ch);
} else
{if((state_val_17948 === 3))
{var inst_17945 = (state_17947[2]);var state_17947__$1 = state_17947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17947__$1,inst_17945);
} else
{if((state_val_17948 === 4))
{var inst_17876 = (state_17947[7]);var inst_17876__$1 = (state_17947[2]);var inst_17877 = (inst_17876__$1 == null);var state_17947__$1 = (function (){var statearr_17950 = state_17947;(statearr_17950[7] = inst_17876__$1);
return statearr_17950;
})();if(cljs.core.truth_(inst_17877))
{var statearr_17951_17997 = state_17947__$1;(statearr_17951_17997[1] = 5);
} else
{var statearr_17952_17998 = state_17947__$1;(statearr_17952_17998[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 5))
{var inst_17883 = cljs.core.deref.call(null,mults);var inst_17884 = cljs.core.vals.call(null,inst_17883);var inst_17885 = cljs.core.seq.call(null,inst_17884);var inst_17886 = inst_17885;var inst_17887 = null;var inst_17888 = 0;var inst_17889 = 0;var state_17947__$1 = (function (){var statearr_17953 = state_17947;(statearr_17953[8] = inst_17889);
(statearr_17953[9] = inst_17888);
(statearr_17953[10] = inst_17887);
(statearr_17953[11] = inst_17886);
return statearr_17953;
})();var statearr_17954_17999 = state_17947__$1;(statearr_17954_17999[2] = null);
(statearr_17954_17999[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 6))
{var inst_17876 = (state_17947[7]);var inst_17924 = (state_17947[12]);var inst_17926 = (state_17947[13]);var inst_17924__$1 = topic_fn.call(null,inst_17876);var inst_17925 = cljs.core.deref.call(null,mults);var inst_17926__$1 = cljs.core.get.call(null,inst_17925,inst_17924__$1);var state_17947__$1 = (function (){var statearr_17955 = state_17947;(statearr_17955[12] = inst_17924__$1);
(statearr_17955[13] = inst_17926__$1);
return statearr_17955;
})();if(cljs.core.truth_(inst_17926__$1))
{var statearr_17956_18000 = state_17947__$1;(statearr_17956_18000[1] = 19);
} else
{var statearr_17957_18001 = state_17947__$1;(statearr_17957_18001[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 7))
{var inst_17943 = (state_17947[2]);var state_17947__$1 = state_17947;var statearr_17958_18002 = state_17947__$1;(statearr_17958_18002[2] = inst_17943);
(statearr_17958_18002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 8))
{var inst_17889 = (state_17947[8]);var inst_17888 = (state_17947[9]);var inst_17891 = (inst_17889 < inst_17888);var inst_17892 = inst_17891;var state_17947__$1 = state_17947;if(cljs.core.truth_(inst_17892))
{var statearr_17962_18003 = state_17947__$1;(statearr_17962_18003[1] = 10);
} else
{var statearr_17963_18004 = state_17947__$1;(statearr_17963_18004[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 9))
{var inst_17922 = (state_17947[2]);var state_17947__$1 = state_17947;var statearr_17964_18005 = state_17947__$1;(statearr_17964_18005[2] = inst_17922);
(statearr_17964_18005[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 10))
{var inst_17889 = (state_17947[8]);var inst_17888 = (state_17947[9]);var inst_17887 = (state_17947[10]);var inst_17886 = (state_17947[11]);var inst_17894 = cljs.core._nth.call(null,inst_17887,inst_17889);var inst_17895 = cljs.core.async.muxch_STAR_.call(null,inst_17894);var inst_17896 = cljs.core.async.close_BANG_.call(null,inst_17895);var inst_17897 = (inst_17889 + 1);var tmp17959 = inst_17888;var tmp17960 = inst_17887;var tmp17961 = inst_17886;var inst_17886__$1 = tmp17961;var inst_17887__$1 = tmp17960;var inst_17888__$1 = tmp17959;var inst_17889__$1 = inst_17897;var state_17947__$1 = (function (){var statearr_17965 = state_17947;(statearr_17965[8] = inst_17889__$1);
(statearr_17965[9] = inst_17888__$1);
(statearr_17965[10] = inst_17887__$1);
(statearr_17965[11] = inst_17886__$1);
(statearr_17965[14] = inst_17896);
return statearr_17965;
})();var statearr_17966_18006 = state_17947__$1;(statearr_17966_18006[2] = null);
(statearr_17966_18006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 11))
{var inst_17886 = (state_17947[11]);var inst_17900 = (state_17947[15]);var inst_17900__$1 = cljs.core.seq.call(null,inst_17886);var state_17947__$1 = (function (){var statearr_17967 = state_17947;(statearr_17967[15] = inst_17900__$1);
return statearr_17967;
})();if(inst_17900__$1)
{var statearr_17968_18007 = state_17947__$1;(statearr_17968_18007[1] = 13);
} else
{var statearr_17969_18008 = state_17947__$1;(statearr_17969_18008[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 12))
{var inst_17920 = (state_17947[2]);var state_17947__$1 = state_17947;var statearr_17970_18009 = state_17947__$1;(statearr_17970_18009[2] = inst_17920);
(statearr_17970_18009[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 13))
{var inst_17900 = (state_17947[15]);var inst_17902 = cljs.core.chunked_seq_QMARK_.call(null,inst_17900);var state_17947__$1 = state_17947;if(inst_17902)
{var statearr_17971_18010 = state_17947__$1;(statearr_17971_18010[1] = 16);
} else
{var statearr_17972_18011 = state_17947__$1;(statearr_17972_18011[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 14))
{var state_17947__$1 = state_17947;var statearr_17973_18012 = state_17947__$1;(statearr_17973_18012[2] = null);
(statearr_17973_18012[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 15))
{var inst_17918 = (state_17947[2]);var state_17947__$1 = state_17947;var statearr_17974_18013 = state_17947__$1;(statearr_17974_18013[2] = inst_17918);
(statearr_17974_18013[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 16))
{var inst_17900 = (state_17947[15]);var inst_17904 = cljs.core.chunk_first.call(null,inst_17900);var inst_17905 = cljs.core.chunk_rest.call(null,inst_17900);var inst_17906 = cljs.core.count.call(null,inst_17904);var inst_17886 = inst_17905;var inst_17887 = inst_17904;var inst_17888 = inst_17906;var inst_17889 = 0;var state_17947__$1 = (function (){var statearr_17975 = state_17947;(statearr_17975[8] = inst_17889);
(statearr_17975[9] = inst_17888);
(statearr_17975[10] = inst_17887);
(statearr_17975[11] = inst_17886);
return statearr_17975;
})();var statearr_17976_18014 = state_17947__$1;(statearr_17976_18014[2] = null);
(statearr_17976_18014[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 17))
{var inst_17900 = (state_17947[15]);var inst_17909 = cljs.core.first.call(null,inst_17900);var inst_17910 = cljs.core.async.muxch_STAR_.call(null,inst_17909);var inst_17911 = cljs.core.async.close_BANG_.call(null,inst_17910);var inst_17912 = cljs.core.next.call(null,inst_17900);var inst_17886 = inst_17912;var inst_17887 = null;var inst_17888 = 0;var inst_17889 = 0;var state_17947__$1 = (function (){var statearr_17977 = state_17947;(statearr_17977[8] = inst_17889);
(statearr_17977[9] = inst_17888);
(statearr_17977[10] = inst_17887);
(statearr_17977[11] = inst_17886);
(statearr_17977[16] = inst_17911);
return statearr_17977;
})();var statearr_17978_18015 = state_17947__$1;(statearr_17978_18015[2] = null);
(statearr_17978_18015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 18))
{var inst_17915 = (state_17947[2]);var state_17947__$1 = state_17947;var statearr_17979_18016 = state_17947__$1;(statearr_17979_18016[2] = inst_17915);
(statearr_17979_18016[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 19))
{var state_17947__$1 = state_17947;var statearr_17980_18017 = state_17947__$1;(statearr_17980_18017[2] = null);
(statearr_17980_18017[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 20))
{var state_17947__$1 = state_17947;var statearr_17981_18018 = state_17947__$1;(statearr_17981_18018[2] = null);
(statearr_17981_18018[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 21))
{var inst_17940 = (state_17947[2]);var state_17947__$1 = (function (){var statearr_17982 = state_17947;(statearr_17982[17] = inst_17940);
return statearr_17982;
})();var statearr_17983_18019 = state_17947__$1;(statearr_17983_18019[2] = null);
(statearr_17983_18019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 22))
{var inst_17937 = (state_17947[2]);var state_17947__$1 = state_17947;var statearr_17984_18020 = state_17947__$1;(statearr_17984_18020[2] = inst_17937);
(statearr_17984_18020[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 23))
{var inst_17924 = (state_17947[12]);var inst_17928 = (state_17947[2]);var inst_17929 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17924);var state_17947__$1 = (function (){var statearr_17985 = state_17947;(statearr_17985[18] = inst_17928);
return statearr_17985;
})();var statearr_17986_18021 = state_17947__$1;(statearr_17986_18021[2] = inst_17929);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17947__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17948 === 24))
{var inst_17876 = (state_17947[7]);var inst_17926 = (state_17947[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17947,23,Object,null,22);var inst_17933 = cljs.core.async.muxch_STAR_.call(null,inst_17926);var state_17947__$1 = state_17947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17947__$1,25,inst_17933,inst_17876);
} else
{if((state_val_17948 === 25))
{var inst_17935 = (state_17947[2]);var state_17947__$1 = state_17947;var statearr_17987_18022 = state_17947__$1;(statearr_17987_18022[2] = inst_17935);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17947__$1);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_17991 = (new Array(19));(statearr_17991[0] = state_machine__5985__auto__);
(statearr_17991[1] = 1);
return statearr_17991;
});
var state_machine__5985__auto____1 = (function (state_17947){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_17947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e17992){if((e17992 instanceof Object))
{var ex__5988__auto__ = e17992;var statearr_17993_18023 = state_17947;(statearr_17993_18023[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18024 = state_17947;
state_17947 = G__18024;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_17947){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_17947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_17994 = f__6055__auto__.call(null);(statearr_17994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___17995);
return statearr_17994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
,cljs.core.range.call(null,cnt));var c__6054__auto___18161 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18131){var state_val_18132 = (state_18131[1]);if((state_val_18132 === 1))
{var state_18131__$1 = state_18131;var statearr_18133_18162 = state_18131__$1;(statearr_18133_18162[2] = null);
(statearr_18133_18162[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 2))
{var inst_18094 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18095 = 0;var state_18131__$1 = (function (){var statearr_18134 = state_18131;(statearr_18134[7] = inst_18094);
(statearr_18134[8] = inst_18095);
return statearr_18134;
})();var statearr_18135_18163 = state_18131__$1;(statearr_18135_18163[2] = null);
(statearr_18135_18163[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 3))
{var inst_18129 = (state_18131[2]);var state_18131__$1 = state_18131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18131__$1,inst_18129);
} else
{if((state_val_18132 === 4))
{var inst_18095 = (state_18131[8]);var inst_18097 = (inst_18095 < cnt);var state_18131__$1 = state_18131;if(cljs.core.truth_(inst_18097))
{var statearr_18136_18164 = state_18131__$1;(statearr_18136_18164[1] = 6);
} else
{var statearr_18137_18165 = state_18131__$1;(statearr_18137_18165[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 5))
{var inst_18115 = (state_18131[2]);var state_18131__$1 = (function (){var statearr_18138 = state_18131;(statearr_18138[9] = inst_18115);
return statearr_18138;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18131__$1,12,dchan);
} else
{if((state_val_18132 === 6))
{var state_18131__$1 = state_18131;var statearr_18139_18166 = state_18131__$1;(statearr_18139_18166[2] = null);
(statearr_18139_18166[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 7))
{var state_18131__$1 = state_18131;var statearr_18140_18167 = state_18131__$1;(statearr_18140_18167[2] = null);
(statearr_18140_18167[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 8))
{var inst_18113 = (state_18131[2]);var state_18131__$1 = state_18131;var statearr_18141_18168 = state_18131__$1;(statearr_18141_18168[2] = inst_18113);
(statearr_18141_18168[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 9))
{var inst_18095 = (state_18131[8]);var inst_18108 = (state_18131[2]);var inst_18109 = (inst_18095 + 1);var inst_18095__$1 = inst_18109;var state_18131__$1 = (function (){var statearr_18142 = state_18131;(statearr_18142[8] = inst_18095__$1);
(statearr_18142[10] = inst_18108);
return statearr_18142;
})();var statearr_18143_18169 = state_18131__$1;(statearr_18143_18169[2] = null);
(statearr_18143_18169[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 10))
{var inst_18099 = (state_18131[2]);var inst_18100 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18131__$1 = (function (){var statearr_18144 = state_18131;(statearr_18144[11] = inst_18099);
return statearr_18144;
})();var statearr_18145_18170 = state_18131__$1;(statearr_18145_18170[2] = inst_18100);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18131__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 11))
{var inst_18095 = (state_18131[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18131,10,Object,null,9);var inst_18104 = chs__$1.call(null,inst_18095);var inst_18105 = done.call(null,inst_18095);var inst_18106 = cljs.core.async.take_BANG_.call(null,inst_18104,inst_18105);var state_18131__$1 = state_18131;var statearr_18146_18171 = state_18131__$1;(statearr_18146_18171[2] = inst_18106);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18131__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 12))
{var inst_18117 = (state_18131[12]);var inst_18117__$1 = (state_18131[2]);var inst_18118 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18117__$1);var state_18131__$1 = (function (){var statearr_18147 = state_18131;(statearr_18147[12] = inst_18117__$1);
return statearr_18147;
})();if(cljs.core.truth_(inst_18118))
{var statearr_18148_18172 = state_18131__$1;(statearr_18148_18172[1] = 13);
} else
{var statearr_18149_18173 = state_18131__$1;(statearr_18149_18173[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 13))
{var inst_18120 = cljs.core.async.close_BANG_.call(null,out);var state_18131__$1 = state_18131;var statearr_18150_18174 = state_18131__$1;(statearr_18150_18174[2] = inst_18120);
(statearr_18150_18174[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 14))
{var inst_18117 = (state_18131[12]);var inst_18122 = cljs.core.apply.call(null,f,inst_18117);var state_18131__$1 = state_18131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18131__$1,16,out,inst_18122);
} else
{if((state_val_18132 === 15))
{var inst_18127 = (state_18131[2]);var state_18131__$1 = state_18131;var statearr_18151_18175 = state_18131__$1;(statearr_18151_18175[2] = inst_18127);
(statearr_18151_18175[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18132 === 16))
{var inst_18124 = (state_18131[2]);var state_18131__$1 = (function (){var statearr_18152 = state_18131;(statearr_18152[13] = inst_18124);
return statearr_18152;
})();var statearr_18153_18176 = state_18131__$1;(statearr_18153_18176[2] = null);
(statearr_18153_18176[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18157 = (new Array(14));(statearr_18157[0] = state_machine__5985__auto__);
(statearr_18157[1] = 1);
return statearr_18157;
});
var state_machine__5985__auto____1 = (function (state_18131){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_18131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18158){if((e18158 instanceof Object))
{var ex__5988__auto__ = e18158;var statearr_18159_18177 = state_18131;(statearr_18159_18177[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18178 = state_18131;
state_18131 = G__18178;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18131){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18160 = f__6055__auto__.call(null);(statearr_18160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18161);
return statearr_18160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___18286 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18262){var state_val_18263 = (state_18262[1]);if((state_val_18263 === 1))
{var inst_18233 = cljs.core.vec.call(null,chs);var inst_18234 = inst_18233;var state_18262__$1 = (function (){var statearr_18264 = state_18262;(statearr_18264[7] = inst_18234);
return statearr_18264;
})();var statearr_18265_18287 = state_18262__$1;(statearr_18265_18287[2] = null);
(statearr_18265_18287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18263 === 2))
{var inst_18234 = (state_18262[7]);var inst_18236 = cljs.core.count.call(null,inst_18234);var inst_18237 = (inst_18236 > 0);var state_18262__$1 = state_18262;if(cljs.core.truth_(inst_18237))
{var statearr_18266_18288 = state_18262__$1;(statearr_18266_18288[1] = 4);
} else
{var statearr_18267_18289 = state_18262__$1;(statearr_18267_18289[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18263 === 3))
{var inst_18260 = (state_18262[2]);var state_18262__$1 = state_18262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18262__$1,inst_18260);
} else
{if((state_val_18263 === 4))
{var inst_18234 = (state_18262[7]);var state_18262__$1 = state_18262;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18262__$1,7,inst_18234);
} else
{if((state_val_18263 === 5))
{var inst_18256 = cljs.core.async.close_BANG_.call(null,out);var state_18262__$1 = state_18262;var statearr_18268_18290 = state_18262__$1;(statearr_18268_18290[2] = inst_18256);
(statearr_18268_18290[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18263 === 6))
{var inst_18258 = (state_18262[2]);var state_18262__$1 = state_18262;var statearr_18269_18291 = state_18262__$1;(statearr_18269_18291[2] = inst_18258);
(statearr_18269_18291[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18263 === 7))
{var inst_18242 = (state_18262[8]);var inst_18241 = (state_18262[9]);var inst_18241__$1 = (state_18262[2]);var inst_18242__$1 = cljs.core.nth.call(null,inst_18241__$1,0,null);var inst_18243 = cljs.core.nth.call(null,inst_18241__$1,1,null);var inst_18244 = (inst_18242__$1 == null);var state_18262__$1 = (function (){var statearr_18270 = state_18262;(statearr_18270[10] = inst_18243);
(statearr_18270[8] = inst_18242__$1);
(statearr_18270[9] = inst_18241__$1);
return statearr_18270;
})();if(cljs.core.truth_(inst_18244))
{var statearr_18271_18292 = state_18262__$1;(statearr_18271_18292[1] = 8);
} else
{var statearr_18272_18293 = state_18262__$1;(statearr_18272_18293[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18263 === 8))
{var inst_18243 = (state_18262[10]);var inst_18242 = (state_18262[8]);var inst_18241 = (state_18262[9]);var inst_18234 = (state_18262[7]);var inst_18246 = (function (){var c = inst_18243;var v = inst_18242;var vec__18239 = inst_18241;var cs = inst_18234;return ((function (c,v,vec__18239,cs,inst_18243,inst_18242,inst_18241,inst_18234,state_val_18263){
return (function (p1__18179_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18179_SHARP_);
});
;})(c,v,vec__18239,cs,inst_18243,inst_18242,inst_18241,inst_18234,state_val_18263))
})();var inst_18247 = cljs.core.filterv.call(null,inst_18246,inst_18234);var inst_18234__$1 = inst_18247;var state_18262__$1 = (function (){var statearr_18273 = state_18262;(statearr_18273[7] = inst_18234__$1);
return statearr_18273;
})();var statearr_18274_18294 = state_18262__$1;(statearr_18274_18294[2] = null);
(statearr_18274_18294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18263 === 9))
{var inst_18242 = (state_18262[8]);var state_18262__$1 = state_18262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18262__$1,11,out,inst_18242);
} else
{if((state_val_18263 === 10))
{var inst_18254 = (state_18262[2]);var state_18262__$1 = state_18262;var statearr_18276_18295 = state_18262__$1;(statearr_18276_18295[2] = inst_18254);
(statearr_18276_18295[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18263 === 11))
{var inst_18234 = (state_18262[7]);var inst_18251 = (state_18262[2]);var tmp18275 = inst_18234;var inst_18234__$1 = tmp18275;var state_18262__$1 = (function (){var statearr_18277 = state_18262;(statearr_18277[11] = inst_18251);
(statearr_18277[7] = inst_18234__$1);
return statearr_18277;
})();var statearr_18278_18296 = state_18262__$1;(statearr_18278_18296[2] = null);
(statearr_18278_18296[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18282 = (new Array(12));(statearr_18282[0] = state_machine__5985__auto__);
(statearr_18282[1] = 1);
return statearr_18282;
});
var state_machine__5985__auto____1 = (function (state_18262){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_18262);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18283){if((e18283 instanceof Object))
{var ex__5988__auto__ = e18283;var statearr_18284_18297 = state_18262;(statearr_18284_18297[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18262);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18298 = state_18262;
state_18262 = G__18298;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18262){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18285 = f__6055__auto__.call(null);(statearr_18285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18286);
return statearr_18285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___18391 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18368){var state_val_18369 = (state_18368[1]);if((state_val_18369 === 1))
{var inst_18345 = 0;var state_18368__$1 = (function (){var statearr_18370 = state_18368;(statearr_18370[7] = inst_18345);
return statearr_18370;
})();var statearr_18371_18392 = state_18368__$1;(statearr_18371_18392[2] = null);
(statearr_18371_18392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18369 === 2))
{var inst_18345 = (state_18368[7]);var inst_18347 = (inst_18345 < n);var state_18368__$1 = state_18368;if(cljs.core.truth_(inst_18347))
{var statearr_18372_18393 = state_18368__$1;(statearr_18372_18393[1] = 4);
} else
{var statearr_18373_18394 = state_18368__$1;(statearr_18373_18394[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18369 === 3))
{var inst_18365 = (state_18368[2]);var inst_18366 = cljs.core.async.close_BANG_.call(null,out);var state_18368__$1 = (function (){var statearr_18374 = state_18368;(statearr_18374[8] = inst_18365);
return statearr_18374;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18368__$1,inst_18366);
} else
{if((state_val_18369 === 4))
{var state_18368__$1 = state_18368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18368__$1,7,ch);
} else
{if((state_val_18369 === 5))
{var state_18368__$1 = state_18368;var statearr_18375_18395 = state_18368__$1;(statearr_18375_18395[2] = null);
(statearr_18375_18395[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18369 === 6))
{var inst_18363 = (state_18368[2]);var state_18368__$1 = state_18368;var statearr_18376_18396 = state_18368__$1;(statearr_18376_18396[2] = inst_18363);
(statearr_18376_18396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18369 === 7))
{var inst_18350 = (state_18368[9]);var inst_18350__$1 = (state_18368[2]);var inst_18351 = (inst_18350__$1 == null);var inst_18352 = cljs.core.not.call(null,inst_18351);var state_18368__$1 = (function (){var statearr_18377 = state_18368;(statearr_18377[9] = inst_18350__$1);
return statearr_18377;
})();if(inst_18352)
{var statearr_18378_18397 = state_18368__$1;(statearr_18378_18397[1] = 8);
} else
{var statearr_18379_18398 = state_18368__$1;(statearr_18379_18398[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18369 === 8))
{var inst_18350 = (state_18368[9]);var state_18368__$1 = state_18368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18368__$1,11,out,inst_18350);
} else
{if((state_val_18369 === 9))
{var state_18368__$1 = state_18368;var statearr_18380_18399 = state_18368__$1;(statearr_18380_18399[2] = null);
(statearr_18380_18399[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18369 === 10))
{var inst_18360 = (state_18368[2]);var state_18368__$1 = state_18368;var statearr_18381_18400 = state_18368__$1;(statearr_18381_18400[2] = inst_18360);
(statearr_18381_18400[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18369 === 11))
{var inst_18345 = (state_18368[7]);var inst_18355 = (state_18368[2]);var inst_18356 = (inst_18345 + 1);var inst_18345__$1 = inst_18356;var state_18368__$1 = (function (){var statearr_18382 = state_18368;(statearr_18382[7] = inst_18345__$1);
(statearr_18382[10] = inst_18355);
return statearr_18382;
})();var statearr_18383_18401 = state_18368__$1;(statearr_18383_18401[2] = null);
(statearr_18383_18401[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18387 = (new Array(11));(statearr_18387[0] = state_machine__5985__auto__);
(statearr_18387[1] = 1);
return statearr_18387;
});
var state_machine__5985__auto____1 = (function (state_18368){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_18368);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18388){if((e18388 instanceof Object))
{var ex__5988__auto__ = e18388;var statearr_18389_18402 = state_18368;(statearr_18389_18402[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18403 = state_18368;
state_18368 = G__18403;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18368){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18390 = f__6055__auto__.call(null);(statearr_18390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18391);
return statearr_18390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___18500 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18475){var state_val_18476 = (state_18475[1]);if((state_val_18476 === 1))
{var inst_18452 = null;var state_18475__$1 = (function (){var statearr_18477 = state_18475;(statearr_18477[7] = inst_18452);
return statearr_18477;
})();var statearr_18478_18501 = state_18475__$1;(statearr_18478_18501[2] = null);
(statearr_18478_18501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18476 === 2))
{var state_18475__$1 = state_18475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18475__$1,4,ch);
} else
{if((state_val_18476 === 3))
{var inst_18472 = (state_18475[2]);var inst_18473 = cljs.core.async.close_BANG_.call(null,out);var state_18475__$1 = (function (){var statearr_18479 = state_18475;(statearr_18479[8] = inst_18472);
return statearr_18479;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18475__$1,inst_18473);
} else
{if((state_val_18476 === 4))
{var inst_18455 = (state_18475[9]);var inst_18455__$1 = (state_18475[2]);var inst_18456 = (inst_18455__$1 == null);var inst_18457 = cljs.core.not.call(null,inst_18456);var state_18475__$1 = (function (){var statearr_18480 = state_18475;(statearr_18480[9] = inst_18455__$1);
return statearr_18480;
})();if(inst_18457)
{var statearr_18481_18502 = state_18475__$1;(statearr_18481_18502[1] = 5);
} else
{var statearr_18482_18503 = state_18475__$1;(statearr_18482_18503[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18476 === 5))
{var inst_18455 = (state_18475[9]);var inst_18452 = (state_18475[7]);var inst_18459 = cljs.core._EQ_.call(null,inst_18455,inst_18452);var state_18475__$1 = state_18475;if(inst_18459)
{var statearr_18483_18504 = state_18475__$1;(statearr_18483_18504[1] = 8);
} else
{var statearr_18484_18505 = state_18475__$1;(statearr_18484_18505[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18476 === 6))
{var state_18475__$1 = state_18475;var statearr_18486_18506 = state_18475__$1;(statearr_18486_18506[2] = null);
(statearr_18486_18506[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18476 === 7))
{var inst_18470 = (state_18475[2]);var state_18475__$1 = state_18475;var statearr_18487_18507 = state_18475__$1;(statearr_18487_18507[2] = inst_18470);
(statearr_18487_18507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18476 === 8))
{var inst_18452 = (state_18475[7]);var tmp18485 = inst_18452;var inst_18452__$1 = tmp18485;var state_18475__$1 = (function (){var statearr_18488 = state_18475;(statearr_18488[7] = inst_18452__$1);
return statearr_18488;
})();var statearr_18489_18508 = state_18475__$1;(statearr_18489_18508[2] = null);
(statearr_18489_18508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18476 === 9))
{var inst_18455 = (state_18475[9]);var state_18475__$1 = state_18475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18475__$1,11,out,inst_18455);
} else
{if((state_val_18476 === 10))
{var inst_18467 = (state_18475[2]);var state_18475__$1 = state_18475;var statearr_18490_18509 = state_18475__$1;(statearr_18490_18509[2] = inst_18467);
(statearr_18490_18509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18476 === 11))
{var inst_18455 = (state_18475[9]);var inst_18464 = (state_18475[2]);var inst_18452 = inst_18455;var state_18475__$1 = (function (){var statearr_18491 = state_18475;(statearr_18491[7] = inst_18452);
(statearr_18491[10] = inst_18464);
return statearr_18491;
})();var statearr_18492_18510 = state_18475__$1;(statearr_18492_18510[2] = null);
(statearr_18492_18510[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18496 = (new Array(11));(statearr_18496[0] = state_machine__5985__auto__);
(statearr_18496[1] = 1);
return statearr_18496;
});
var state_machine__5985__auto____1 = (function (state_18475){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_18475);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18497){if((e18497 instanceof Object))
{var ex__5988__auto__ = e18497;var statearr_18498_18511 = state_18475;(statearr_18498_18511[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18512 = state_18475;
state_18475 = G__18512;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18475){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18499 = f__6055__auto__.call(null);(statearr_18499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18500);
return statearr_18499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___18647 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18617){var state_val_18618 = (state_18617[1]);if((state_val_18618 === 1))
{var inst_18580 = (new Array(n));var inst_18581 = inst_18580;var inst_18582 = 0;var state_18617__$1 = (function (){var statearr_18619 = state_18617;(statearr_18619[7] = inst_18581);
(statearr_18619[8] = inst_18582);
return statearr_18619;
})();var statearr_18620_18648 = state_18617__$1;(statearr_18620_18648[2] = null);
(statearr_18620_18648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 2))
{var state_18617__$1 = state_18617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18617__$1,4,ch);
} else
{if((state_val_18618 === 3))
{var inst_18615 = (state_18617[2]);var state_18617__$1 = state_18617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18617__$1,inst_18615);
} else
{if((state_val_18618 === 4))
{var inst_18585 = (state_18617[9]);var inst_18585__$1 = (state_18617[2]);var inst_18586 = (inst_18585__$1 == null);var inst_18587 = cljs.core.not.call(null,inst_18586);var state_18617__$1 = (function (){var statearr_18621 = state_18617;(statearr_18621[9] = inst_18585__$1);
return statearr_18621;
})();if(inst_18587)
{var statearr_18622_18649 = state_18617__$1;(statearr_18622_18649[1] = 5);
} else
{var statearr_18623_18650 = state_18617__$1;(statearr_18623_18650[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 5))
{var inst_18590 = (state_18617[10]);var inst_18581 = (state_18617[7]);var inst_18582 = (state_18617[8]);var inst_18585 = (state_18617[9]);var inst_18589 = (inst_18581[inst_18582] = inst_18585);var inst_18590__$1 = (inst_18582 + 1);var inst_18591 = (inst_18590__$1 < n);var state_18617__$1 = (function (){var statearr_18624 = state_18617;(statearr_18624[10] = inst_18590__$1);
(statearr_18624[11] = inst_18589);
return statearr_18624;
})();if(cljs.core.truth_(inst_18591))
{var statearr_18625_18651 = state_18617__$1;(statearr_18625_18651[1] = 8);
} else
{var statearr_18626_18652 = state_18617__$1;(statearr_18626_18652[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 6))
{var inst_18582 = (state_18617[8]);var inst_18603 = (inst_18582 > 0);var state_18617__$1 = state_18617;if(cljs.core.truth_(inst_18603))
{var statearr_18628_18653 = state_18617__$1;(statearr_18628_18653[1] = 12);
} else
{var statearr_18629_18654 = state_18617__$1;(statearr_18629_18654[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 7))
{var inst_18613 = (state_18617[2]);var state_18617__$1 = state_18617;var statearr_18630_18655 = state_18617__$1;(statearr_18630_18655[2] = inst_18613);
(statearr_18630_18655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 8))
{var inst_18590 = (state_18617[10]);var inst_18581 = (state_18617[7]);var tmp18627 = inst_18581;var inst_18581__$1 = tmp18627;var inst_18582 = inst_18590;var state_18617__$1 = (function (){var statearr_18631 = state_18617;(statearr_18631[7] = inst_18581__$1);
(statearr_18631[8] = inst_18582);
return statearr_18631;
})();var statearr_18632_18656 = state_18617__$1;(statearr_18632_18656[2] = null);
(statearr_18632_18656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 9))
{var inst_18581 = (state_18617[7]);var inst_18595 = cljs.core.vec.call(null,inst_18581);var state_18617__$1 = state_18617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18617__$1,11,out,inst_18595);
} else
{if((state_val_18618 === 10))
{var inst_18601 = (state_18617[2]);var state_18617__$1 = state_18617;var statearr_18633_18657 = state_18617__$1;(statearr_18633_18657[2] = inst_18601);
(statearr_18633_18657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 11))
{var inst_18597 = (state_18617[2]);var inst_18598 = (new Array(n));var inst_18581 = inst_18598;var inst_18582 = 0;var state_18617__$1 = (function (){var statearr_18634 = state_18617;(statearr_18634[7] = inst_18581);
(statearr_18634[8] = inst_18582);
(statearr_18634[12] = inst_18597);
return statearr_18634;
})();var statearr_18635_18658 = state_18617__$1;(statearr_18635_18658[2] = null);
(statearr_18635_18658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 12))
{var inst_18581 = (state_18617[7]);var inst_18605 = cljs.core.vec.call(null,inst_18581);var state_18617__$1 = state_18617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18617__$1,15,out,inst_18605);
} else
{if((state_val_18618 === 13))
{var state_18617__$1 = state_18617;var statearr_18636_18659 = state_18617__$1;(statearr_18636_18659[2] = null);
(statearr_18636_18659[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 14))
{var inst_18610 = (state_18617[2]);var inst_18611 = cljs.core.async.close_BANG_.call(null,out);var state_18617__$1 = (function (){var statearr_18637 = state_18617;(statearr_18637[13] = inst_18610);
return statearr_18637;
})();var statearr_18638_18660 = state_18617__$1;(statearr_18638_18660[2] = inst_18611);
(statearr_18638_18660[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18618 === 15))
{var inst_18607 = (state_18617[2]);var state_18617__$1 = state_18617;var statearr_18639_18661 = state_18617__$1;(statearr_18639_18661[2] = inst_18607);
(statearr_18639_18661[1] = 14);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18643 = (new Array(14));(statearr_18643[0] = state_machine__5985__auto__);
(statearr_18643[1] = 1);
return statearr_18643;
});
var state_machine__5985__auto____1 = (function (state_18617){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_18617);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18644){if((e18644 instanceof Object))
{var ex__5988__auto__ = e18644;var statearr_18645_18662 = state_18617;(statearr_18645_18662[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18617);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18663 = state_18617;
state_18617 = G__18663;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18617){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18646 = f__6055__auto__.call(null);(statearr_18646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18647);
return statearr_18646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___18806 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18776){var state_val_18777 = (state_18776[1]);if((state_val_18777 === 1))
{var inst_18735 = (new Array(0));var inst_18736 = inst_18735;var inst_18737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18776__$1 = (function (){var statearr_18778 = state_18776;(statearr_18778[7] = inst_18737);
(statearr_18778[8] = inst_18736);
return statearr_18778;
})();var statearr_18779_18807 = state_18776__$1;(statearr_18779_18807[2] = null);
(statearr_18779_18807[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 2))
{var state_18776__$1 = state_18776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18776__$1,4,ch);
} else
{if((state_val_18777 === 3))
{var inst_18774 = (state_18776[2]);var state_18776__$1 = state_18776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18776__$1,inst_18774);
} else
{if((state_val_18777 === 4))
{var inst_18740 = (state_18776[9]);var inst_18740__$1 = (state_18776[2]);var inst_18741 = (inst_18740__$1 == null);var inst_18742 = cljs.core.not.call(null,inst_18741);var state_18776__$1 = (function (){var statearr_18780 = state_18776;(statearr_18780[9] = inst_18740__$1);
return statearr_18780;
})();if(inst_18742)
{var statearr_18781_18808 = state_18776__$1;(statearr_18781_18808[1] = 5);
} else
{var statearr_18782_18809 = state_18776__$1;(statearr_18782_18809[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 5))
{var inst_18737 = (state_18776[7]);var inst_18744 = (state_18776[10]);var inst_18740 = (state_18776[9]);var inst_18744__$1 = f.call(null,inst_18740);var inst_18745 = cljs.core._EQ_.call(null,inst_18744__$1,inst_18737);var inst_18746 = cljs.core.keyword_identical_QMARK_.call(null,inst_18737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18747 = (inst_18745) || (inst_18746);var state_18776__$1 = (function (){var statearr_18783 = state_18776;(statearr_18783[10] = inst_18744__$1);
return statearr_18783;
})();if(cljs.core.truth_(inst_18747))
{var statearr_18784_18810 = state_18776__$1;(statearr_18784_18810[1] = 8);
} else
{var statearr_18785_18811 = state_18776__$1;(statearr_18785_18811[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 6))
{var inst_18736 = (state_18776[8]);var inst_18761 = inst_18736.length;var inst_18762 = (inst_18761 > 0);var state_18776__$1 = state_18776;if(cljs.core.truth_(inst_18762))
{var statearr_18787_18812 = state_18776__$1;(statearr_18787_18812[1] = 12);
} else
{var statearr_18788_18813 = state_18776__$1;(statearr_18788_18813[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 7))
{var inst_18772 = (state_18776[2]);var state_18776__$1 = state_18776;var statearr_18789_18814 = state_18776__$1;(statearr_18789_18814[2] = inst_18772);
(statearr_18789_18814[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 8))
{var inst_18736 = (state_18776[8]);var inst_18744 = (state_18776[10]);var inst_18740 = (state_18776[9]);var inst_18749 = inst_18736.push(inst_18740);var tmp18786 = inst_18736;var inst_18736__$1 = tmp18786;var inst_18737 = inst_18744;var state_18776__$1 = (function (){var statearr_18790 = state_18776;(statearr_18790[7] = inst_18737);
(statearr_18790[8] = inst_18736__$1);
(statearr_18790[11] = inst_18749);
return statearr_18790;
})();var statearr_18791_18815 = state_18776__$1;(statearr_18791_18815[2] = null);
(statearr_18791_18815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 9))
{var inst_18736 = (state_18776[8]);var inst_18752 = cljs.core.vec.call(null,inst_18736);var state_18776__$1 = state_18776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18776__$1,11,out,inst_18752);
} else
{if((state_val_18777 === 10))
{var inst_18759 = (state_18776[2]);var state_18776__$1 = state_18776;var statearr_18792_18816 = state_18776__$1;(statearr_18792_18816[2] = inst_18759);
(statearr_18792_18816[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 11))
{var inst_18744 = (state_18776[10]);var inst_18740 = (state_18776[9]);var inst_18754 = (state_18776[2]);var inst_18755 = (new Array(0));var inst_18756 = inst_18755.push(inst_18740);var inst_18736 = inst_18755;var inst_18737 = inst_18744;var state_18776__$1 = (function (){var statearr_18793 = state_18776;(statearr_18793[7] = inst_18737);
(statearr_18793[8] = inst_18736);
(statearr_18793[12] = inst_18756);
(statearr_18793[13] = inst_18754);
return statearr_18793;
})();var statearr_18794_18817 = state_18776__$1;(statearr_18794_18817[2] = null);
(statearr_18794_18817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 12))
{var inst_18736 = (state_18776[8]);var inst_18764 = cljs.core.vec.call(null,inst_18736);var state_18776__$1 = state_18776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18776__$1,15,out,inst_18764);
} else
{if((state_val_18777 === 13))
{var state_18776__$1 = state_18776;var statearr_18795_18818 = state_18776__$1;(statearr_18795_18818[2] = null);
(statearr_18795_18818[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 14))
{var inst_18769 = (state_18776[2]);var inst_18770 = cljs.core.async.close_BANG_.call(null,out);var state_18776__$1 = (function (){var statearr_18796 = state_18776;(statearr_18796[14] = inst_18769);
return statearr_18796;
})();var statearr_18797_18819 = state_18776__$1;(statearr_18797_18819[2] = inst_18770);
(statearr_18797_18819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18777 === 15))
{var inst_18766 = (state_18776[2]);var state_18776__$1 = state_18776;var statearr_18798_18820 = state_18776__$1;(statearr_18798_18820[2] = inst_18766);
(statearr_18798_18820[1] = 14);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18802 = (new Array(15));(statearr_18802[0] = state_machine__5985__auto__);
(statearr_18802[1] = 1);
return statearr_18802;
});
var state_machine__5985__auto____1 = (function (state_18776){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_18776);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18803){if((e18803 instanceof Object))
{var ex__5988__auto__ = e18803;var statearr_18804_18821 = state_18776;(statearr_18804_18821[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18822 = state_18776;
state_18776 = G__18822;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18776){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18805 = f__6055__auto__.call(null);(statearr_18805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18806);
return statearr_18805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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