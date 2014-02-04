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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33321 = (function (f,fn_handler,meta33322){
this.f = f;
this.fn_handler = fn_handler;
this.meta33322 = meta33322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33321.cljs$lang$type = true;
cljs.core.async.t33321.cljs$lang$ctorStr = "cljs.core.async/t33321";
cljs.core.async.t33321.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33321");
});
cljs.core.async.t33321.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33323){var self__ = this;
var _33323__$1 = this;return self__.meta33322;
});
cljs.core.async.t33321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33323,meta33322__$1){var self__ = this;
var _33323__$1 = this;return (new cljs.core.async.t33321(self__.f,self__.fn_handler,meta33322__$1));
});
cljs.core.async.__GT_t33321 = (function __GT_t33321(f__$1,fn_handler__$1,meta33322){return (new cljs.core.async.t33321(f__$1,fn_handler__$1,meta33322));
});
}
return (new cljs.core.async.t33321(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33325 = buff;if(G__33325)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33325.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33325.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33325);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33325);
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
{var val_33326 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33326);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33326);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33327 = n;var x_33328 = 0;while(true){
if((x_33328 < n__4248__auto___33327))
{(a[x_33328] = 0);
{
var G__33329 = (x_33328 + 1);
x_33328 = G__33329;
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
var G__33330 = (i + 1);
i = G__33330;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33334 = (function (flag,alt_flag,meta33335){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33335 = meta33335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33334.cljs$lang$type = true;
cljs.core.async.t33334.cljs$lang$ctorStr = "cljs.core.async/t33334";
cljs.core.async.t33334.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33334");
});
cljs.core.async.t33334.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33336){var self__ = this;
var _33336__$1 = this;return self__.meta33335;
});
cljs.core.async.t33334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33336,meta33335__$1){var self__ = this;
var _33336__$1 = this;return (new cljs.core.async.t33334(self__.flag,self__.alt_flag,meta33335__$1));
});
cljs.core.async.__GT_t33334 = (function __GT_t33334(flag__$1,alt_flag__$1,meta33335){return (new cljs.core.async.t33334(flag__$1,alt_flag__$1,meta33335));
});
}
return (new cljs.core.async.t33334(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33340 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33340 = (function (cb,flag,alt_handler,meta33341){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33341 = meta33341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33340.cljs$lang$type = true;
cljs.core.async.t33340.cljs$lang$ctorStr = "cljs.core.async/t33340";
cljs.core.async.t33340.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33340");
});
cljs.core.async.t33340.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33342){var self__ = this;
var _33342__$1 = this;return self__.meta33341;
});
cljs.core.async.t33340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33342,meta33341__$1){var self__ = this;
var _33342__$1 = this;return (new cljs.core.async.t33340(self__.cb,self__.flag,self__.alt_handler,meta33341__$1));
});
cljs.core.async.__GT_t33340 = (function __GT_t33340(cb__$1,flag__$1,alt_handler__$1,meta33341){return (new cljs.core.async.t33340(cb__$1,flag__$1,alt_handler__$1,meta33341));
});
}
return (new cljs.core.async.t33340(cb,flag,alt_handler,null));
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
return (function (p1__33343_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33343_SHARP_,port], null));
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
var G__33344 = (i + 1);
i = G__33344;
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
var alts_BANG___delegate = function (ports,p__33345){var map__33347 = p__33345;var map__33347__$1 = ((cljs.core.seq_QMARK_.call(null,map__33347))?cljs.core.apply.call(null,cljs.core.hash_map,map__33347):map__33347);var opts = map__33347__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33345 = null;if (arguments.length > 1) {
  p__33345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33345);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33348){
var ports = cljs.core.first(arglist__33348);
var p__33345 = cljs.core.rest(arglist__33348);
return alts_BANG___delegate(ports,p__33345);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33356 = (function (ch,f,map_LT_,meta33357){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33357 = meta33357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33356.cljs$lang$type = true;
cljs.core.async.t33356.cljs$lang$ctorStr = "cljs.core.async/t33356";
cljs.core.async.t33356.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33356");
});
cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33359 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33359 = (function (fn1,_,meta33357,ch,f,map_LT_,meta33360){
this.fn1 = fn1;
this._ = _;
this.meta33357 = meta33357;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33360 = meta33360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33359.cljs$lang$type = true;
cljs.core.async.t33359.cljs$lang$ctorStr = "cljs.core.async/t33359";
cljs.core.async.t33359.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33359");
});
cljs.core.async.t33359.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33359.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33349_SHARP_){return f1.call(null,(((p1__33349_SHARP_ == null))?null:self__.f.call(null,p1__33349_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33361){var self__ = this;
var _33361__$1 = this;return self__.meta33360;
});
cljs.core.async.t33359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33361,meta33360__$1){var self__ = this;
var _33361__$1 = this;return (new cljs.core.async.t33359(self__.fn1,self__._,self__.meta33357,self__.ch,self__.f,self__.map_LT_,meta33360__$1));
});
cljs.core.async.__GT_t33359 = (function __GT_t33359(fn1__$1,___$2,meta33357__$1,ch__$2,f__$2,map_LT___$2,meta33360){return (new cljs.core.async.t33359(fn1__$1,___$2,meta33357__$1,ch__$2,f__$2,map_LT___$2,meta33360));
});
}
return (new cljs.core.async.t33359(fn1,___$1,self__.meta33357,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33358){var self__ = this;
var _33358__$1 = this;return self__.meta33357;
});
cljs.core.async.t33356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33358,meta33357__$1){var self__ = this;
var _33358__$1 = this;return (new cljs.core.async.t33356(self__.ch,self__.f,self__.map_LT_,meta33357__$1));
});
cljs.core.async.__GT_t33356 = (function __GT_t33356(ch__$1,f__$1,map_LT___$1,meta33357){return (new cljs.core.async.t33356(ch__$1,f__$1,map_LT___$1,meta33357));
});
}
return (new cljs.core.async.t33356(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33365 = (function (ch,f,map_GT_,meta33366){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33366 = meta33366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33365.cljs$lang$type = true;
cljs.core.async.t33365.cljs$lang$ctorStr = "cljs.core.async/t33365";
cljs.core.async.t33365.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33365");
});
cljs.core.async.t33365.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33365.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33365.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33367){var self__ = this;
var _33367__$1 = this;return self__.meta33366;
});
cljs.core.async.t33365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33367,meta33366__$1){var self__ = this;
var _33367__$1 = this;return (new cljs.core.async.t33365(self__.ch,self__.f,self__.map_GT_,meta33366__$1));
});
cljs.core.async.__GT_t33365 = (function __GT_t33365(ch__$1,f__$1,map_GT___$1,meta33366){return (new cljs.core.async.t33365(ch__$1,f__$1,map_GT___$1,meta33366));
});
}
return (new cljs.core.async.t33365(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33371 = (function (ch,p,filter_GT_,meta33372){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33372 = meta33372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33371.cljs$lang$type = true;
cljs.core.async.t33371.cljs$lang$ctorStr = "cljs.core.async/t33371";
cljs.core.async.t33371.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33371");
});
cljs.core.async.t33371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33371.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33373){var self__ = this;
var _33373__$1 = this;return self__.meta33372;
});
cljs.core.async.t33371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33373,meta33372__$1){var self__ = this;
var _33373__$1 = this;return (new cljs.core.async.t33371(self__.ch,self__.p,self__.filter_GT_,meta33372__$1));
});
cljs.core.async.__GT_t33371 = (function __GT_t33371(ch__$1,p__$1,filter_GT___$1,meta33372){return (new cljs.core.async.t33371(ch__$1,p__$1,filter_GT___$1,meta33372));
});
}
return (new cljs.core.async.t33371(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33456 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33435){var state_val_33436 = (state_33435[1]);if((state_val_33436 === 1))
{var state_33435__$1 = state_33435;var statearr_33437_33457 = state_33435__$1;(statearr_33437_33457[2] = null);
(statearr_33437_33457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33436 === 2))
{var state_33435__$1 = state_33435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33435__$1,4,ch);
} else
{if((state_val_33436 === 3))
{var inst_33433 = (state_33435[2]);var state_33435__$1 = state_33435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33435__$1,inst_33433);
} else
{if((state_val_33436 === 4))
{var inst_33417 = (state_33435[7]);var inst_33417__$1 = (state_33435[2]);var inst_33418 = (inst_33417__$1 == null);var state_33435__$1 = (function (){var statearr_33438 = state_33435;(statearr_33438[7] = inst_33417__$1);
return statearr_33438;
})();if(cljs.core.truth_(inst_33418))
{var statearr_33439_33458 = state_33435__$1;(statearr_33439_33458[1] = 5);
} else
{var statearr_33440_33459 = state_33435__$1;(statearr_33440_33459[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33436 === 5))
{var inst_33420 = cljs.core.async.close_BANG_.call(null,out);var state_33435__$1 = state_33435;var statearr_33441_33460 = state_33435__$1;(statearr_33441_33460[2] = inst_33420);
(statearr_33441_33460[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33436 === 6))
{var inst_33417 = (state_33435[7]);var inst_33422 = p.call(null,inst_33417);var state_33435__$1 = state_33435;if(cljs.core.truth_(inst_33422))
{var statearr_33442_33461 = state_33435__$1;(statearr_33442_33461[1] = 8);
} else
{var statearr_33443_33462 = state_33435__$1;(statearr_33443_33462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33436 === 7))
{var inst_33431 = (state_33435[2]);var state_33435__$1 = state_33435;var statearr_33444_33463 = state_33435__$1;(statearr_33444_33463[2] = inst_33431);
(statearr_33444_33463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33436 === 8))
{var inst_33417 = (state_33435[7]);var state_33435__$1 = state_33435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33435__$1,11,out,inst_33417);
} else
{if((state_val_33436 === 9))
{var state_33435__$1 = state_33435;var statearr_33445_33464 = state_33435__$1;(statearr_33445_33464[2] = null);
(statearr_33445_33464[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33436 === 10))
{var inst_33428 = (state_33435[2]);var state_33435__$1 = (function (){var statearr_33446 = state_33435;(statearr_33446[8] = inst_33428);
return statearr_33446;
})();var statearr_33447_33465 = state_33435__$1;(statearr_33447_33465[2] = null);
(statearr_33447_33465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33436 === 11))
{var inst_33425 = (state_33435[2]);var state_33435__$1 = state_33435;var statearr_33448_33466 = state_33435__$1;(statearr_33448_33466[2] = inst_33425);
(statearr_33448_33466[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33452 = [null,null,null,null,null,null,null,null,null];(statearr_33452[0] = state_machine__5507__auto__);
(statearr_33452[1] = 1);
return statearr_33452;
});
var state_machine__5507__auto____1 = (function (state_33435){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33435);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33453){if((e33453 instanceof Object))
{var ex__5510__auto__ = e33453;var statearr_33454_33467 = state_33435;(statearr_33454_33467[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33435);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33468 = state_33435;
state_33435 = G__33468;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33435){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33455 = f__5522__auto__.call(null);(statearr_33455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33456);
return statearr_33455;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33620){var state_val_33621 = (state_33620[1]);if((state_val_33621 === 1))
{var state_33620__$1 = state_33620;var statearr_33622_33659 = state_33620__$1;(statearr_33622_33659[2] = null);
(statearr_33622_33659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 2))
{var state_33620__$1 = state_33620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33620__$1,4,in$);
} else
{if((state_val_33621 === 3))
{var inst_33618 = (state_33620[2]);var state_33620__$1 = state_33620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33620__$1,inst_33618);
} else
{if((state_val_33621 === 4))
{var inst_33566 = (state_33620[7]);var inst_33566__$1 = (state_33620[2]);var inst_33567 = (inst_33566__$1 == null);var state_33620__$1 = (function (){var statearr_33623 = state_33620;(statearr_33623[7] = inst_33566__$1);
return statearr_33623;
})();if(cljs.core.truth_(inst_33567))
{var statearr_33624_33660 = state_33620__$1;(statearr_33624_33660[1] = 5);
} else
{var statearr_33625_33661 = state_33620__$1;(statearr_33625_33661[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 5))
{var inst_33569 = cljs.core.async.close_BANG_.call(null,out);var state_33620__$1 = state_33620;var statearr_33626_33662 = state_33620__$1;(statearr_33626_33662[2] = inst_33569);
(statearr_33626_33662[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 6))
{var inst_33566 = (state_33620[7]);var inst_33571 = f.call(null,inst_33566);var inst_33576 = cljs.core.seq.call(null,inst_33571);var inst_33577 = inst_33576;var inst_33578 = null;var inst_33579 = 0;var inst_33580 = 0;var state_33620__$1 = (function (){var statearr_33627 = state_33620;(statearr_33627[8] = inst_33577);
(statearr_33627[9] = inst_33578);
(statearr_33627[10] = inst_33579);
(statearr_33627[11] = inst_33580);
return statearr_33627;
})();var statearr_33628_33663 = state_33620__$1;(statearr_33628_33663[2] = null);
(statearr_33628_33663[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 7))
{var inst_33616 = (state_33620[2]);var state_33620__$1 = state_33620;var statearr_33629_33664 = state_33620__$1;(statearr_33629_33664[2] = inst_33616);
(statearr_33629_33664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 8))
{var inst_33579 = (state_33620[10]);var inst_33580 = (state_33620[11]);var inst_33582 = (inst_33580 < inst_33579);var inst_33583 = inst_33582;var state_33620__$1 = state_33620;if(cljs.core.truth_(inst_33583))
{var statearr_33630_33665 = state_33620__$1;(statearr_33630_33665[1] = 10);
} else
{var statearr_33631_33666 = state_33620__$1;(statearr_33631_33666[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 9))
{var inst_33613 = (state_33620[2]);var state_33620__$1 = (function (){var statearr_33632 = state_33620;(statearr_33632[12] = inst_33613);
return statearr_33632;
})();var statearr_33633_33667 = state_33620__$1;(statearr_33633_33667[2] = null);
(statearr_33633_33667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 10))
{var inst_33578 = (state_33620[9]);var inst_33580 = (state_33620[11]);var inst_33585 = cljs.core._nth.call(null,inst_33578,inst_33580);var state_33620__$1 = state_33620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33620__$1,13,out,inst_33585);
} else
{if((state_val_33621 === 11))
{var inst_33591 = (state_33620[13]);var inst_33577 = (state_33620[8]);var inst_33591__$1 = cljs.core.seq.call(null,inst_33577);var state_33620__$1 = (function (){var statearr_33637 = state_33620;(statearr_33637[13] = inst_33591__$1);
return statearr_33637;
})();if(inst_33591__$1)
{var statearr_33638_33668 = state_33620__$1;(statearr_33638_33668[1] = 14);
} else
{var statearr_33639_33669 = state_33620__$1;(statearr_33639_33669[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 12))
{var inst_33611 = (state_33620[2]);var state_33620__$1 = state_33620;var statearr_33640_33670 = state_33620__$1;(statearr_33640_33670[2] = inst_33611);
(statearr_33640_33670[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 13))
{var inst_33577 = (state_33620[8]);var inst_33578 = (state_33620[9]);var inst_33579 = (state_33620[10]);var inst_33580 = (state_33620[11]);var inst_33587 = (state_33620[2]);var inst_33588 = (inst_33580 + 1);var tmp33634 = inst_33577;var tmp33635 = inst_33578;var tmp33636 = inst_33579;var inst_33577__$1 = tmp33634;var inst_33578__$1 = tmp33635;var inst_33579__$1 = tmp33636;var inst_33580__$1 = inst_33588;var state_33620__$1 = (function (){var statearr_33641 = state_33620;(statearr_33641[14] = inst_33587);
(statearr_33641[8] = inst_33577__$1);
(statearr_33641[9] = inst_33578__$1);
(statearr_33641[10] = inst_33579__$1);
(statearr_33641[11] = inst_33580__$1);
return statearr_33641;
})();var statearr_33642_33671 = state_33620__$1;(statearr_33642_33671[2] = null);
(statearr_33642_33671[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 14))
{var inst_33591 = (state_33620[13]);var inst_33593 = cljs.core.chunked_seq_QMARK_.call(null,inst_33591);var state_33620__$1 = state_33620;if(inst_33593)
{var statearr_33643_33672 = state_33620__$1;(statearr_33643_33672[1] = 17);
} else
{var statearr_33644_33673 = state_33620__$1;(statearr_33644_33673[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 15))
{var state_33620__$1 = state_33620;var statearr_33645_33674 = state_33620__$1;(statearr_33645_33674[2] = null);
(statearr_33645_33674[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 16))
{var inst_33609 = (state_33620[2]);var state_33620__$1 = state_33620;var statearr_33646_33675 = state_33620__$1;(statearr_33646_33675[2] = inst_33609);
(statearr_33646_33675[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 17))
{var inst_33591 = (state_33620[13]);var inst_33595 = cljs.core.chunk_first.call(null,inst_33591);var inst_33596 = cljs.core.chunk_rest.call(null,inst_33591);var inst_33597 = cljs.core.count.call(null,inst_33595);var inst_33577 = inst_33596;var inst_33578 = inst_33595;var inst_33579 = inst_33597;var inst_33580 = 0;var state_33620__$1 = (function (){var statearr_33647 = state_33620;(statearr_33647[8] = inst_33577);
(statearr_33647[9] = inst_33578);
(statearr_33647[10] = inst_33579);
(statearr_33647[11] = inst_33580);
return statearr_33647;
})();var statearr_33648_33676 = state_33620__$1;(statearr_33648_33676[2] = null);
(statearr_33648_33676[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 18))
{var inst_33591 = (state_33620[13]);var inst_33600 = cljs.core.first.call(null,inst_33591);var state_33620__$1 = state_33620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33620__$1,20,out,inst_33600);
} else
{if((state_val_33621 === 19))
{var inst_33606 = (state_33620[2]);var state_33620__$1 = state_33620;var statearr_33649_33677 = state_33620__$1;(statearr_33649_33677[2] = inst_33606);
(statearr_33649_33677[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33621 === 20))
{var inst_33591 = (state_33620[13]);var inst_33602 = (state_33620[2]);var inst_33603 = cljs.core.next.call(null,inst_33591);var inst_33577 = inst_33603;var inst_33578 = null;var inst_33579 = 0;var inst_33580 = 0;var state_33620__$1 = (function (){var statearr_33650 = state_33620;(statearr_33650[8] = inst_33577);
(statearr_33650[9] = inst_33578);
(statearr_33650[10] = inst_33579);
(statearr_33650[11] = inst_33580);
(statearr_33650[15] = inst_33602);
return statearr_33650;
})();var statearr_33651_33678 = state_33620__$1;(statearr_33651_33678[2] = null);
(statearr_33651_33678[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33655[0] = state_machine__5507__auto__);
(statearr_33655[1] = 1);
return statearr_33655;
});
var state_machine__5507__auto____1 = (function (state_33620){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33656){if((e33656 instanceof Object))
{var ex__5510__auto__ = e33656;var statearr_33657_33679 = state_33620;(statearr_33657_33679[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33680 = state_33620;
state_33620 = G__33680;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33620){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33658 = f__5522__auto__.call(null);(statearr_33658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33658;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33761 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33740){var state_val_33741 = (state_33740[1]);if((state_val_33741 === 1))
{var state_33740__$1 = state_33740;var statearr_33742_33762 = state_33740__$1;(statearr_33742_33762[2] = null);
(statearr_33742_33762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33741 === 2))
{var state_33740__$1 = state_33740;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33740__$1,4,from);
} else
{if((state_val_33741 === 3))
{var inst_33738 = (state_33740[2]);var state_33740__$1 = state_33740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33740__$1,inst_33738);
} else
{if((state_val_33741 === 4))
{var inst_33723 = (state_33740[7]);var inst_33723__$1 = (state_33740[2]);var inst_33724 = (inst_33723__$1 == null);var state_33740__$1 = (function (){var statearr_33743 = state_33740;(statearr_33743[7] = inst_33723__$1);
return statearr_33743;
})();if(cljs.core.truth_(inst_33724))
{var statearr_33744_33763 = state_33740__$1;(statearr_33744_33763[1] = 5);
} else
{var statearr_33745_33764 = state_33740__$1;(statearr_33745_33764[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33741 === 5))
{var state_33740__$1 = state_33740;if(cljs.core.truth_(close_QMARK_))
{var statearr_33746_33765 = state_33740__$1;(statearr_33746_33765[1] = 8);
} else
{var statearr_33747_33766 = state_33740__$1;(statearr_33747_33766[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33741 === 6))
{var inst_33723 = (state_33740[7]);var state_33740__$1 = state_33740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33740__$1,11,to,inst_33723);
} else
{if((state_val_33741 === 7))
{var inst_33736 = (state_33740[2]);var state_33740__$1 = state_33740;var statearr_33748_33767 = state_33740__$1;(statearr_33748_33767[2] = inst_33736);
(statearr_33748_33767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33741 === 8))
{var inst_33727 = cljs.core.async.close_BANG_.call(null,to);var state_33740__$1 = state_33740;var statearr_33749_33768 = state_33740__$1;(statearr_33749_33768[2] = inst_33727);
(statearr_33749_33768[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33741 === 9))
{var state_33740__$1 = state_33740;var statearr_33750_33769 = state_33740__$1;(statearr_33750_33769[2] = null);
(statearr_33750_33769[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33741 === 10))
{var inst_33730 = (state_33740[2]);var state_33740__$1 = state_33740;var statearr_33751_33770 = state_33740__$1;(statearr_33751_33770[2] = inst_33730);
(statearr_33751_33770[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33741 === 11))
{var inst_33733 = (state_33740[2]);var state_33740__$1 = (function (){var statearr_33752 = state_33740;(statearr_33752[8] = inst_33733);
return statearr_33752;
})();var statearr_33753_33771 = state_33740__$1;(statearr_33753_33771[2] = null);
(statearr_33753_33771[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33757 = [null,null,null,null,null,null,null,null,null];(statearr_33757[0] = state_machine__5507__auto__);
(statearr_33757[1] = 1);
return statearr_33757;
});
var state_machine__5507__auto____1 = (function (state_33740){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33740);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33758){if((e33758 instanceof Object))
{var ex__5510__auto__ = e33758;var statearr_33759_33772 = state_33740;(statearr_33759_33772[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33740);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33773 = state_33740;
state_33740 = G__33773;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33740){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33760 = f__5522__auto__.call(null);(statearr_33760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33761);
return statearr_33760;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33838){var state_val_33839 = (state_33838[1]);if((state_val_33839 === 1))
{var state_33838__$1 = state_33838;var statearr_33840_33861 = state_33838__$1;(statearr_33840_33861[2] = null);
(statearr_33840_33861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 2))
{var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33838__$1,4,ch);
} else
{if((state_val_33839 === 3))
{var inst_33836 = (state_33838[2]);var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33838__$1,inst_33836);
} else
{if((state_val_33839 === 4))
{var inst_33819 = (state_33838[7]);var inst_33819__$1 = (state_33838[2]);var inst_33820 = (inst_33819__$1 == null);var state_33838__$1 = (function (){var statearr_33841 = state_33838;(statearr_33841[7] = inst_33819__$1);
return statearr_33841;
})();if(cljs.core.truth_(inst_33820))
{var statearr_33842_33862 = state_33838__$1;(statearr_33842_33862[1] = 5);
} else
{var statearr_33843_33863 = state_33838__$1;(statearr_33843_33863[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 5))
{var inst_33822 = cljs.core.async.close_BANG_.call(null,tc);var inst_33823 = cljs.core.async.close_BANG_.call(null,fc);var state_33838__$1 = (function (){var statearr_33844 = state_33838;(statearr_33844[8] = inst_33822);
return statearr_33844;
})();var statearr_33845_33864 = state_33838__$1;(statearr_33845_33864[2] = inst_33823);
(statearr_33845_33864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 6))
{var inst_33819 = (state_33838[7]);var inst_33825 = p.call(null,inst_33819);var state_33838__$1 = state_33838;if(cljs.core.truth_(inst_33825))
{var statearr_33846_33865 = state_33838__$1;(statearr_33846_33865[1] = 9);
} else
{var statearr_33847_33866 = state_33838__$1;(statearr_33847_33866[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 7))
{var inst_33834 = (state_33838[2]);var state_33838__$1 = state_33838;var statearr_33848_33867 = state_33838__$1;(statearr_33848_33867[2] = inst_33834);
(statearr_33848_33867[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 8))
{var inst_33831 = (state_33838[2]);var state_33838__$1 = (function (){var statearr_33849 = state_33838;(statearr_33849[9] = inst_33831);
return statearr_33849;
})();var statearr_33850_33868 = state_33838__$1;(statearr_33850_33868[2] = null);
(statearr_33850_33868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 9))
{var state_33838__$1 = state_33838;var statearr_33851_33869 = state_33838__$1;(statearr_33851_33869[2] = tc);
(statearr_33851_33869[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 10))
{var state_33838__$1 = state_33838;var statearr_33852_33870 = state_33838__$1;(statearr_33852_33870[2] = fc);
(statearr_33852_33870[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 11))
{var inst_33819 = (state_33838[7]);var inst_33829 = (state_33838[2]);var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33838__$1,8,inst_33829,inst_33819);
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
var state_machine__5507__auto____0 = (function (){var statearr_33856 = [null,null,null,null,null,null,null,null,null,null];(statearr_33856[0] = state_machine__5507__auto__);
(statearr_33856[1] = 1);
return statearr_33856;
});
var state_machine__5507__auto____1 = (function (state_33838){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33838);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33857){if((e33857 instanceof Object))
{var ex__5510__auto__ = e33857;var statearr_33858_33871 = state_33838;(statearr_33858_33871[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33872 = state_33838;
state_33838 = G__33872;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33838){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33859 = f__5522__auto__.call(null);(statearr_33859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33860);
return statearr_33859;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33919){var state_val_33920 = (state_33919[1]);if((state_val_33920 === 7))
{var inst_33915 = (state_33919[2]);var state_33919__$1 = state_33919;var statearr_33921_33937 = state_33919__$1;(statearr_33921_33937[2] = inst_33915);
(statearr_33921_33937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33920 === 6))
{var inst_33905 = (state_33919[7]);var inst_33908 = (state_33919[8]);var inst_33912 = f.call(null,inst_33905,inst_33908);var inst_33905__$1 = inst_33912;var state_33919__$1 = (function (){var statearr_33922 = state_33919;(statearr_33922[7] = inst_33905__$1);
return statearr_33922;
})();var statearr_33923_33938 = state_33919__$1;(statearr_33923_33938[2] = null);
(statearr_33923_33938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33920 === 5))
{var inst_33905 = (state_33919[7]);var state_33919__$1 = state_33919;var statearr_33924_33939 = state_33919__$1;(statearr_33924_33939[2] = inst_33905);
(statearr_33924_33939[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33920 === 4))
{var inst_33908 = (state_33919[8]);var inst_33908__$1 = (state_33919[2]);var inst_33909 = (inst_33908__$1 == null);var state_33919__$1 = (function (){var statearr_33925 = state_33919;(statearr_33925[8] = inst_33908__$1);
return statearr_33925;
})();if(cljs.core.truth_(inst_33909))
{var statearr_33926_33940 = state_33919__$1;(statearr_33926_33940[1] = 5);
} else
{var statearr_33927_33941 = state_33919__$1;(statearr_33927_33941[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33920 === 3))
{var inst_33917 = (state_33919[2]);var state_33919__$1 = state_33919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33919__$1,inst_33917);
} else
{if((state_val_33920 === 2))
{var state_33919__$1 = state_33919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33919__$1,4,ch);
} else
{if((state_val_33920 === 1))
{var inst_33905 = init;var state_33919__$1 = (function (){var statearr_33928 = state_33919;(statearr_33928[7] = inst_33905);
return statearr_33928;
})();var statearr_33929_33942 = state_33919__$1;(statearr_33929_33942[2] = null);
(statearr_33929_33942[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33933 = [null,null,null,null,null,null,null,null,null];(statearr_33933[0] = state_machine__5507__auto__);
(statearr_33933[1] = 1);
return statearr_33933;
});
var state_machine__5507__auto____1 = (function (state_33919){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33919);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33934){if((e33934 instanceof Object))
{var ex__5510__auto__ = e33934;var statearr_33935_33943 = state_33919;(statearr_33935_33943[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33944 = state_33919;
state_33919 = G__33944;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33919){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33936 = f__5522__auto__.call(null);(statearr_33936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33936;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34006){var state_val_34007 = (state_34006[1]);if((state_val_34007 === 1))
{var inst_33986 = cljs.core.seq.call(null,coll);var inst_33987 = inst_33986;var state_34006__$1 = (function (){var statearr_34008 = state_34006;(statearr_34008[7] = inst_33987);
return statearr_34008;
})();var statearr_34009_34027 = state_34006__$1;(statearr_34009_34027[2] = null);
(statearr_34009_34027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34007 === 2))
{var inst_33987 = (state_34006[7]);var state_34006__$1 = state_34006;if(cljs.core.truth_(inst_33987))
{var statearr_34010_34028 = state_34006__$1;(statearr_34010_34028[1] = 4);
} else
{var statearr_34011_34029 = state_34006__$1;(statearr_34011_34029[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34007 === 3))
{var inst_34004 = (state_34006[2]);var state_34006__$1 = state_34006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34006__$1,inst_34004);
} else
{if((state_val_34007 === 4))
{var inst_33987 = (state_34006[7]);var inst_33990 = cljs.core.first.call(null,inst_33987);var state_34006__$1 = state_34006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34006__$1,7,ch,inst_33990);
} else
{if((state_val_34007 === 5))
{var state_34006__$1 = state_34006;if(cljs.core.truth_(close_QMARK_))
{var statearr_34012_34030 = state_34006__$1;(statearr_34012_34030[1] = 8);
} else
{var statearr_34013_34031 = state_34006__$1;(statearr_34013_34031[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34007 === 6))
{var inst_34002 = (state_34006[2]);var state_34006__$1 = state_34006;var statearr_34014_34032 = state_34006__$1;(statearr_34014_34032[2] = inst_34002);
(statearr_34014_34032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34007 === 7))
{var inst_33987 = (state_34006[7]);var inst_33992 = (state_34006[2]);var inst_33993 = cljs.core.next.call(null,inst_33987);var inst_33987__$1 = inst_33993;var state_34006__$1 = (function (){var statearr_34015 = state_34006;(statearr_34015[8] = inst_33992);
(statearr_34015[7] = inst_33987__$1);
return statearr_34015;
})();var statearr_34016_34033 = state_34006__$1;(statearr_34016_34033[2] = null);
(statearr_34016_34033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34007 === 8))
{var inst_33997 = cljs.core.async.close_BANG_.call(null,ch);var state_34006__$1 = state_34006;var statearr_34017_34034 = state_34006__$1;(statearr_34017_34034[2] = inst_33997);
(statearr_34017_34034[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34007 === 9))
{var state_34006__$1 = state_34006;var statearr_34018_34035 = state_34006__$1;(statearr_34018_34035[2] = null);
(statearr_34018_34035[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34007 === 10))
{var inst_34000 = (state_34006[2]);var state_34006__$1 = state_34006;var statearr_34019_34036 = state_34006__$1;(statearr_34019_34036[2] = inst_34000);
(statearr_34019_34036[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_34023 = [null,null,null,null,null,null,null,null,null];(statearr_34023[0] = state_machine__5507__auto__);
(statearr_34023[1] = 1);
return statearr_34023;
});
var state_machine__5507__auto____1 = (function (state_34006){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34006);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34024){if((e34024 instanceof Object))
{var ex__5510__auto__ = e34024;var statearr_34025_34037 = state_34006;(statearr_34025_34037[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34038 = state_34006;
state_34006 = G__34038;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34006){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34026 = f__5522__auto__.call(null);(statearr_34026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34026;
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
cljs.core.async.Mux = (function (){var obj34040 = {};return obj34040;
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
cljs.core.async.Mult = (function (){var obj34042 = {};return obj34042;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34266 = (function (cs,ch,mult,meta34267){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34267 = meta34267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34266.cljs$lang$type = true;
cljs.core.async.t34266.cljs$lang$ctorStr = "cljs.core.async/t34266";
cljs.core.async.t34266.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34266");
});})(cs))
;
cljs.core.async.t34266.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34266.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34266.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34266.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34266.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34268){var self__ = this;
var _34268__$1 = this;return self__.meta34267;
});})(cs))
;
cljs.core.async.t34266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34268,meta34267__$1){var self__ = this;
var _34268__$1 = this;return (new cljs.core.async.t34266(self__.cs,self__.ch,self__.mult,meta34267__$1));
});})(cs))
;
cljs.core.async.__GT_t34266 = ((function (cs){
return (function __GT_t34266(cs__$1,ch__$1,mult__$1,meta34267){return (new cljs.core.async.t34266(cs__$1,ch__$1,mult__$1,meta34267));
});})(cs))
;
}
return (new cljs.core.async.t34266(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34489 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34403){var state_val_34404 = (state_34403[1]);if((state_val_34404 === 32))
{var inst_34347 = (state_34403[7]);var inst_34271 = (state_34403[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34403,31,Object,null,30);var inst_34354 = cljs.core.async.put_BANG_.call(null,inst_34347,inst_34271,done);var state_34403__$1 = state_34403;var statearr_34405_34490 = state_34403__$1;(statearr_34405_34490[2] = inst_34354);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 1))
{var state_34403__$1 = state_34403;var statearr_34406_34491 = state_34403__$1;(statearr_34406_34491[2] = null);
(statearr_34406_34491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 33))
{var inst_34360 = (state_34403[9]);var inst_34362 = cljs.core.chunked_seq_QMARK_.call(null,inst_34360);var state_34403__$1 = state_34403;if(inst_34362)
{var statearr_34407_34492 = state_34403__$1;(statearr_34407_34492[1] = 36);
} else
{var statearr_34408_34493 = state_34403__$1;(statearr_34408_34493[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 2))
{var state_34403__$1 = state_34403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34403__$1,4,ch);
} else
{if((state_val_34404 === 34))
{var state_34403__$1 = state_34403;var statearr_34409_34494 = state_34403__$1;(statearr_34409_34494[2] = null);
(statearr_34409_34494[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 3))
{var inst_34401 = (state_34403[2]);var state_34403__$1 = state_34403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34403__$1,inst_34401);
} else
{if((state_val_34404 === 35))
{var inst_34385 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34410_34495 = state_34403__$1;(statearr_34410_34495[2] = inst_34385);
(statearr_34410_34495[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 4))
{var inst_34271 = (state_34403[8]);var inst_34271__$1 = (state_34403[2]);var inst_34272 = (inst_34271__$1 == null);var state_34403__$1 = (function (){var statearr_34411 = state_34403;(statearr_34411[8] = inst_34271__$1);
return statearr_34411;
})();if(cljs.core.truth_(inst_34272))
{var statearr_34412_34496 = state_34403__$1;(statearr_34412_34496[1] = 5);
} else
{var statearr_34413_34497 = state_34403__$1;(statearr_34413_34497[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 36))
{var inst_34360 = (state_34403[9]);var inst_34364 = cljs.core.chunk_first.call(null,inst_34360);var inst_34365 = cljs.core.chunk_rest.call(null,inst_34360);var inst_34366 = cljs.core.count.call(null,inst_34364);var inst_34339 = inst_34365;var inst_34340 = inst_34364;var inst_34341 = inst_34366;var inst_34342 = 0;var state_34403__$1 = (function (){var statearr_34414 = state_34403;(statearr_34414[10] = inst_34341);
(statearr_34414[11] = inst_34342);
(statearr_34414[12] = inst_34340);
(statearr_34414[13] = inst_34339);
return statearr_34414;
})();var statearr_34415_34498 = state_34403__$1;(statearr_34415_34498[2] = null);
(statearr_34415_34498[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 5))
{var inst_34278 = cljs.core.deref.call(null,cs);var inst_34279 = cljs.core.seq.call(null,inst_34278);var inst_34280 = inst_34279;var inst_34281 = null;var inst_34282 = 0;var inst_34283 = 0;var state_34403__$1 = (function (){var statearr_34416 = state_34403;(statearr_34416[14] = inst_34281);
(statearr_34416[15] = inst_34280);
(statearr_34416[16] = inst_34283);
(statearr_34416[17] = inst_34282);
return statearr_34416;
})();var statearr_34417_34499 = state_34403__$1;(statearr_34417_34499[2] = null);
(statearr_34417_34499[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 37))
{var inst_34360 = (state_34403[9]);var inst_34369 = cljs.core.first.call(null,inst_34360);var state_34403__$1 = (function (){var statearr_34418 = state_34403;(statearr_34418[18] = inst_34369);
return statearr_34418;
})();var statearr_34419_34500 = state_34403__$1;(statearr_34419_34500[2] = null);
(statearr_34419_34500[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 6))
{var inst_34331 = (state_34403[19]);var inst_34330 = cljs.core.deref.call(null,cs);var inst_34331__$1 = cljs.core.keys.call(null,inst_34330);var inst_34332 = cljs.core.count.call(null,inst_34331__$1);var inst_34333 = cljs.core.reset_BANG_.call(null,dctr,inst_34332);var inst_34338 = cljs.core.seq.call(null,inst_34331__$1);var inst_34339 = inst_34338;var inst_34340 = null;var inst_34341 = 0;var inst_34342 = 0;var state_34403__$1 = (function (){var statearr_34420 = state_34403;(statearr_34420[20] = inst_34333);
(statearr_34420[19] = inst_34331__$1);
(statearr_34420[10] = inst_34341);
(statearr_34420[11] = inst_34342);
(statearr_34420[12] = inst_34340);
(statearr_34420[13] = inst_34339);
return statearr_34420;
})();var statearr_34421_34501 = state_34403__$1;(statearr_34421_34501[2] = null);
(statearr_34421_34501[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 38))
{var inst_34382 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34422_34502 = state_34403__$1;(statearr_34422_34502[2] = inst_34382);
(statearr_34422_34502[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 7))
{var inst_34399 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34423_34503 = state_34403__$1;(statearr_34423_34503[2] = inst_34399);
(statearr_34423_34503[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 39))
{var inst_34360 = (state_34403[9]);var inst_34378 = (state_34403[2]);var inst_34379 = cljs.core.next.call(null,inst_34360);var inst_34339 = inst_34379;var inst_34340 = null;var inst_34341 = 0;var inst_34342 = 0;var state_34403__$1 = (function (){var statearr_34424 = state_34403;(statearr_34424[21] = inst_34378);
(statearr_34424[10] = inst_34341);
(statearr_34424[11] = inst_34342);
(statearr_34424[12] = inst_34340);
(statearr_34424[13] = inst_34339);
return statearr_34424;
})();var statearr_34425_34504 = state_34403__$1;(statearr_34425_34504[2] = null);
(statearr_34425_34504[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 8))
{var inst_34283 = (state_34403[16]);var inst_34282 = (state_34403[17]);var inst_34285 = (inst_34283 < inst_34282);var inst_34286 = inst_34285;var state_34403__$1 = state_34403;if(cljs.core.truth_(inst_34286))
{var statearr_34426_34505 = state_34403__$1;(statearr_34426_34505[1] = 10);
} else
{var statearr_34427_34506 = state_34403__$1;(statearr_34427_34506[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 40))
{var inst_34369 = (state_34403[18]);var inst_34370 = (state_34403[2]);var inst_34371 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34372 = cljs.core.async.untap_STAR_.call(null,m,inst_34369);var state_34403__$1 = (function (){var statearr_34428 = state_34403;(statearr_34428[22] = inst_34371);
(statearr_34428[23] = inst_34370);
return statearr_34428;
})();var statearr_34429_34507 = state_34403__$1;(statearr_34429_34507[2] = inst_34372);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 9))
{var inst_34328 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34430_34508 = state_34403__$1;(statearr_34430_34508[2] = inst_34328);
(statearr_34430_34508[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 41))
{var inst_34369 = (state_34403[18]);var inst_34271 = (state_34403[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34403,40,Object,null,39);var inst_34376 = cljs.core.async.put_BANG_.call(null,inst_34369,inst_34271,done);var state_34403__$1 = state_34403;var statearr_34431_34509 = state_34403__$1;(statearr_34431_34509[2] = inst_34376);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 10))
{var inst_34281 = (state_34403[14]);var inst_34283 = (state_34403[16]);var inst_34289 = cljs.core._nth.call(null,inst_34281,inst_34283);var inst_34290 = cljs.core.nth.call(null,inst_34289,0,null);var inst_34291 = cljs.core.nth.call(null,inst_34289,1,null);var state_34403__$1 = (function (){var statearr_34432 = state_34403;(statearr_34432[24] = inst_34290);
return statearr_34432;
})();if(cljs.core.truth_(inst_34291))
{var statearr_34433_34510 = state_34403__$1;(statearr_34433_34510[1] = 13);
} else
{var statearr_34434_34511 = state_34403__$1;(statearr_34434_34511[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 42))
{var state_34403__$1 = state_34403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34403__$1,45,dchan);
} else
{if((state_val_34404 === 11))
{var inst_34280 = (state_34403[15]);var inst_34300 = (state_34403[25]);var inst_34300__$1 = cljs.core.seq.call(null,inst_34280);var state_34403__$1 = (function (){var statearr_34435 = state_34403;(statearr_34435[25] = inst_34300__$1);
return statearr_34435;
})();if(inst_34300__$1)
{var statearr_34436_34512 = state_34403__$1;(statearr_34436_34512[1] = 16);
} else
{var statearr_34437_34513 = state_34403__$1;(statearr_34437_34513[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 43))
{var state_34403__$1 = state_34403;var statearr_34438_34514 = state_34403__$1;(statearr_34438_34514[2] = null);
(statearr_34438_34514[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 12))
{var inst_34326 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34439_34515 = state_34403__$1;(statearr_34439_34515[2] = inst_34326);
(statearr_34439_34515[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 44))
{var inst_34396 = (state_34403[2]);var state_34403__$1 = (function (){var statearr_34440 = state_34403;(statearr_34440[26] = inst_34396);
return statearr_34440;
})();var statearr_34441_34516 = state_34403__$1;(statearr_34441_34516[2] = null);
(statearr_34441_34516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 13))
{var inst_34290 = (state_34403[24]);var inst_34293 = cljs.core.async.close_BANG_.call(null,inst_34290);var state_34403__$1 = state_34403;var statearr_34442_34517 = state_34403__$1;(statearr_34442_34517[2] = inst_34293);
(statearr_34442_34517[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 45))
{var inst_34393 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34446_34518 = state_34403__$1;(statearr_34446_34518[2] = inst_34393);
(statearr_34446_34518[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 14))
{var state_34403__$1 = state_34403;var statearr_34447_34519 = state_34403__$1;(statearr_34447_34519[2] = null);
(statearr_34447_34519[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 15))
{var inst_34281 = (state_34403[14]);var inst_34280 = (state_34403[15]);var inst_34283 = (state_34403[16]);var inst_34282 = (state_34403[17]);var inst_34296 = (state_34403[2]);var inst_34297 = (inst_34283 + 1);var tmp34443 = inst_34281;var tmp34444 = inst_34280;var tmp34445 = inst_34282;var inst_34280__$1 = tmp34444;var inst_34281__$1 = tmp34443;var inst_34282__$1 = tmp34445;var inst_34283__$1 = inst_34297;var state_34403__$1 = (function (){var statearr_34448 = state_34403;(statearr_34448[14] = inst_34281__$1);
(statearr_34448[15] = inst_34280__$1);
(statearr_34448[16] = inst_34283__$1);
(statearr_34448[17] = inst_34282__$1);
(statearr_34448[27] = inst_34296);
return statearr_34448;
})();var statearr_34449_34520 = state_34403__$1;(statearr_34449_34520[2] = null);
(statearr_34449_34520[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 16))
{var inst_34300 = (state_34403[25]);var inst_34302 = cljs.core.chunked_seq_QMARK_.call(null,inst_34300);var state_34403__$1 = state_34403;if(inst_34302)
{var statearr_34450_34521 = state_34403__$1;(statearr_34450_34521[1] = 19);
} else
{var statearr_34451_34522 = state_34403__$1;(statearr_34451_34522[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 17))
{var state_34403__$1 = state_34403;var statearr_34452_34523 = state_34403__$1;(statearr_34452_34523[2] = null);
(statearr_34452_34523[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 18))
{var inst_34324 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34453_34524 = state_34403__$1;(statearr_34453_34524[2] = inst_34324);
(statearr_34453_34524[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 19))
{var inst_34300 = (state_34403[25]);var inst_34304 = cljs.core.chunk_first.call(null,inst_34300);var inst_34305 = cljs.core.chunk_rest.call(null,inst_34300);var inst_34306 = cljs.core.count.call(null,inst_34304);var inst_34280 = inst_34305;var inst_34281 = inst_34304;var inst_34282 = inst_34306;var inst_34283 = 0;var state_34403__$1 = (function (){var statearr_34454 = state_34403;(statearr_34454[14] = inst_34281);
(statearr_34454[15] = inst_34280);
(statearr_34454[16] = inst_34283);
(statearr_34454[17] = inst_34282);
return statearr_34454;
})();var statearr_34455_34525 = state_34403__$1;(statearr_34455_34525[2] = null);
(statearr_34455_34525[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 20))
{var inst_34300 = (state_34403[25]);var inst_34310 = cljs.core.first.call(null,inst_34300);var inst_34311 = cljs.core.nth.call(null,inst_34310,0,null);var inst_34312 = cljs.core.nth.call(null,inst_34310,1,null);var state_34403__$1 = (function (){var statearr_34456 = state_34403;(statearr_34456[28] = inst_34311);
return statearr_34456;
})();if(cljs.core.truth_(inst_34312))
{var statearr_34457_34526 = state_34403__$1;(statearr_34457_34526[1] = 22);
} else
{var statearr_34458_34527 = state_34403__$1;(statearr_34458_34527[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 21))
{var inst_34321 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34459_34528 = state_34403__$1;(statearr_34459_34528[2] = inst_34321);
(statearr_34459_34528[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 22))
{var inst_34311 = (state_34403[28]);var inst_34314 = cljs.core.async.close_BANG_.call(null,inst_34311);var state_34403__$1 = state_34403;var statearr_34460_34529 = state_34403__$1;(statearr_34460_34529[2] = inst_34314);
(statearr_34460_34529[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 23))
{var state_34403__$1 = state_34403;var statearr_34461_34530 = state_34403__$1;(statearr_34461_34530[2] = null);
(statearr_34461_34530[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 24))
{var inst_34300 = (state_34403[25]);var inst_34317 = (state_34403[2]);var inst_34318 = cljs.core.next.call(null,inst_34300);var inst_34280 = inst_34318;var inst_34281 = null;var inst_34282 = 0;var inst_34283 = 0;var state_34403__$1 = (function (){var statearr_34462 = state_34403;(statearr_34462[14] = inst_34281);
(statearr_34462[15] = inst_34280);
(statearr_34462[16] = inst_34283);
(statearr_34462[17] = inst_34282);
(statearr_34462[29] = inst_34317);
return statearr_34462;
})();var statearr_34463_34531 = state_34403__$1;(statearr_34463_34531[2] = null);
(statearr_34463_34531[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 25))
{var inst_34341 = (state_34403[10]);var inst_34342 = (state_34403[11]);var inst_34344 = (inst_34342 < inst_34341);var inst_34345 = inst_34344;var state_34403__$1 = state_34403;if(cljs.core.truth_(inst_34345))
{var statearr_34464_34532 = state_34403__$1;(statearr_34464_34532[1] = 27);
} else
{var statearr_34465_34533 = state_34403__$1;(statearr_34465_34533[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 26))
{var inst_34331 = (state_34403[19]);var inst_34389 = (state_34403[2]);var inst_34390 = cljs.core.seq.call(null,inst_34331);var state_34403__$1 = (function (){var statearr_34466 = state_34403;(statearr_34466[30] = inst_34389);
return statearr_34466;
})();if(inst_34390)
{var statearr_34467_34534 = state_34403__$1;(statearr_34467_34534[1] = 42);
} else
{var statearr_34468_34535 = state_34403__$1;(statearr_34468_34535[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 27))
{var inst_34342 = (state_34403[11]);var inst_34340 = (state_34403[12]);var inst_34347 = cljs.core._nth.call(null,inst_34340,inst_34342);var state_34403__$1 = (function (){var statearr_34469 = state_34403;(statearr_34469[7] = inst_34347);
return statearr_34469;
})();var statearr_34470_34536 = state_34403__$1;(statearr_34470_34536[2] = null);
(statearr_34470_34536[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 28))
{var inst_34360 = (state_34403[9]);var inst_34339 = (state_34403[13]);var inst_34360__$1 = cljs.core.seq.call(null,inst_34339);var state_34403__$1 = (function (){var statearr_34474 = state_34403;(statearr_34474[9] = inst_34360__$1);
return statearr_34474;
})();if(inst_34360__$1)
{var statearr_34475_34537 = state_34403__$1;(statearr_34475_34537[1] = 33);
} else
{var statearr_34476_34538 = state_34403__$1;(statearr_34476_34538[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 29))
{var inst_34387 = (state_34403[2]);var state_34403__$1 = state_34403;var statearr_34477_34539 = state_34403__$1;(statearr_34477_34539[2] = inst_34387);
(statearr_34477_34539[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 30))
{var inst_34341 = (state_34403[10]);var inst_34342 = (state_34403[11]);var inst_34340 = (state_34403[12]);var inst_34339 = (state_34403[13]);var inst_34356 = (state_34403[2]);var inst_34357 = (inst_34342 + 1);var tmp34471 = inst_34341;var tmp34472 = inst_34340;var tmp34473 = inst_34339;var inst_34339__$1 = tmp34473;var inst_34340__$1 = tmp34472;var inst_34341__$1 = tmp34471;var inst_34342__$1 = inst_34357;var state_34403__$1 = (function (){var statearr_34478 = state_34403;(statearr_34478[10] = inst_34341__$1);
(statearr_34478[11] = inst_34342__$1);
(statearr_34478[12] = inst_34340__$1);
(statearr_34478[31] = inst_34356);
(statearr_34478[13] = inst_34339__$1);
return statearr_34478;
})();var statearr_34479_34540 = state_34403__$1;(statearr_34479_34540[2] = null);
(statearr_34479_34540[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34404 === 31))
{var inst_34347 = (state_34403[7]);var inst_34348 = (state_34403[2]);var inst_34349 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34350 = cljs.core.async.untap_STAR_.call(null,m,inst_34347);var state_34403__$1 = (function (){var statearr_34480 = state_34403;(statearr_34480[32] = inst_34348);
(statearr_34480[33] = inst_34349);
return statearr_34480;
})();var statearr_34481_34541 = state_34403__$1;(statearr_34481_34541[2] = inst_34350);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34485[0] = state_machine__5507__auto__);
(statearr_34485[1] = 1);
return statearr_34485;
});
var state_machine__5507__auto____1 = (function (state_34403){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34486){if((e34486 instanceof Object))
{var ex__5510__auto__ = e34486;var statearr_34487_34542 = state_34403;(statearr_34487_34542[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34543 = state_34403;
state_34403 = G__34543;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34403){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34488 = f__5522__auto__.call(null);(statearr_34488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34489);
return statearr_34488;
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
cljs.core.async.Mix = (function (){var obj34545 = {};return obj34545;
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
;var m = (function (){if(typeof cljs.core.async.t34655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34655 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34656){
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
this.meta34656 = meta34656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34655.cljs$lang$type = true;
cljs.core.async.t34655.cljs$lang$ctorStr = "cljs.core.async/t34655";
cljs.core.async.t34655.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34655");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34655.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34657){var self__ = this;
var _34657__$1 = this;return self__.meta34656;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34657,meta34656__$1){var self__ = this;
var _34657__$1 = this;return (new cljs.core.async.t34655(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34656__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34655 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34655(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34656){return (new cljs.core.async.t34655(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34656));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34655(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34764 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34722){var state_val_34723 = (state_34722[1]);if((state_val_34723 === 1))
{var inst_34661 = (state_34722[7]);var inst_34661__$1 = calc_state.call(null);var inst_34662 = cljs.core.seq_QMARK_.call(null,inst_34661__$1);var state_34722__$1 = (function (){var statearr_34724 = state_34722;(statearr_34724[7] = inst_34661__$1);
return statearr_34724;
})();if(inst_34662)
{var statearr_34725_34765 = state_34722__$1;(statearr_34725_34765[1] = 2);
} else
{var statearr_34726_34766 = state_34722__$1;(statearr_34726_34766[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 2))
{var inst_34661 = (state_34722[7]);var inst_34664 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34661);var state_34722__$1 = state_34722;var statearr_34727_34767 = state_34722__$1;(statearr_34727_34767[2] = inst_34664);
(statearr_34727_34767[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 3))
{var inst_34661 = (state_34722[7]);var state_34722__$1 = state_34722;var statearr_34728_34768 = state_34722__$1;(statearr_34728_34768[2] = inst_34661);
(statearr_34728_34768[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 4))
{var inst_34661 = (state_34722[7]);var inst_34667 = (state_34722[2]);var inst_34668 = cljs.core.get.call(null,inst_34667,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34669 = cljs.core.get.call(null,inst_34667,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34670 = cljs.core.get.call(null,inst_34667,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34671 = inst_34661;var state_34722__$1 = (function (){var statearr_34729 = state_34722;(statearr_34729[8] = inst_34668);
(statearr_34729[9] = inst_34669);
(statearr_34729[10] = inst_34671);
(statearr_34729[11] = inst_34670);
return statearr_34729;
})();var statearr_34730_34769 = state_34722__$1;(statearr_34730_34769[2] = null);
(statearr_34730_34769[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 5))
{var inst_34671 = (state_34722[10]);var inst_34674 = cljs.core.seq_QMARK_.call(null,inst_34671);var state_34722__$1 = state_34722;if(inst_34674)
{var statearr_34731_34770 = state_34722__$1;(statearr_34731_34770[1] = 7);
} else
{var statearr_34732_34771 = state_34722__$1;(statearr_34732_34771[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 6))
{var inst_34720 = (state_34722[2]);var state_34722__$1 = state_34722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34722__$1,inst_34720);
} else
{if((state_val_34723 === 7))
{var inst_34671 = (state_34722[10]);var inst_34676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34671);var state_34722__$1 = state_34722;var statearr_34733_34772 = state_34722__$1;(statearr_34733_34772[2] = inst_34676);
(statearr_34733_34772[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 8))
{var inst_34671 = (state_34722[10]);var state_34722__$1 = state_34722;var statearr_34734_34773 = state_34722__$1;(statearr_34734_34773[2] = inst_34671);
(statearr_34734_34773[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 9))
{var inst_34679 = (state_34722[12]);var inst_34679__$1 = (state_34722[2]);var inst_34680 = cljs.core.get.call(null,inst_34679__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34681 = cljs.core.get.call(null,inst_34679__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34682 = cljs.core.get.call(null,inst_34679__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34722__$1 = (function (){var statearr_34735 = state_34722;(statearr_34735[13] = inst_34682);
(statearr_34735[14] = inst_34681);
(statearr_34735[12] = inst_34679__$1);
return statearr_34735;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34722__$1,10,inst_34680);
} else
{if((state_val_34723 === 10))
{var inst_34687 = (state_34722[15]);var inst_34686 = (state_34722[16]);var inst_34685 = (state_34722[2]);var inst_34686__$1 = cljs.core.nth.call(null,inst_34685,0,null);var inst_34687__$1 = cljs.core.nth.call(null,inst_34685,1,null);var inst_34688 = (inst_34686__$1 == null);var inst_34689 = cljs.core._EQ_.call(null,inst_34687__$1,change);var inst_34690 = (inst_34688) || (inst_34689);var state_34722__$1 = (function (){var statearr_34736 = state_34722;(statearr_34736[15] = inst_34687__$1);
(statearr_34736[16] = inst_34686__$1);
return statearr_34736;
})();if(cljs.core.truth_(inst_34690))
{var statearr_34737_34774 = state_34722__$1;(statearr_34737_34774[1] = 11);
} else
{var statearr_34738_34775 = state_34722__$1;(statearr_34738_34775[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 11))
{var inst_34686 = (state_34722[16]);var inst_34692 = (inst_34686 == null);var state_34722__$1 = state_34722;if(cljs.core.truth_(inst_34692))
{var statearr_34739_34776 = state_34722__$1;(statearr_34739_34776[1] = 14);
} else
{var statearr_34740_34777 = state_34722__$1;(statearr_34740_34777[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 12))
{var inst_34682 = (state_34722[13]);var inst_34687 = (state_34722[15]);var inst_34701 = (state_34722[17]);var inst_34701__$1 = inst_34682.call(null,inst_34687);var state_34722__$1 = (function (){var statearr_34741 = state_34722;(statearr_34741[17] = inst_34701__$1);
return statearr_34741;
})();if(cljs.core.truth_(inst_34701__$1))
{var statearr_34742_34778 = state_34722__$1;(statearr_34742_34778[1] = 17);
} else
{var statearr_34743_34779 = state_34722__$1;(statearr_34743_34779[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 13))
{var inst_34718 = (state_34722[2]);var state_34722__$1 = state_34722;var statearr_34744_34780 = state_34722__$1;(statearr_34744_34780[2] = inst_34718);
(statearr_34744_34780[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 14))
{var inst_34687 = (state_34722[15]);var inst_34694 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34687);var state_34722__$1 = state_34722;var statearr_34745_34781 = state_34722__$1;(statearr_34745_34781[2] = inst_34694);
(statearr_34745_34781[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 15))
{var state_34722__$1 = state_34722;var statearr_34746_34782 = state_34722__$1;(statearr_34746_34782[2] = null);
(statearr_34746_34782[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 16))
{var inst_34697 = (state_34722[2]);var inst_34698 = calc_state.call(null);var inst_34671 = inst_34698;var state_34722__$1 = (function (){var statearr_34747 = state_34722;(statearr_34747[18] = inst_34697);
(statearr_34747[10] = inst_34671);
return statearr_34747;
})();var statearr_34748_34783 = state_34722__$1;(statearr_34748_34783[2] = null);
(statearr_34748_34783[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 17))
{var inst_34701 = (state_34722[17]);var state_34722__$1 = state_34722;var statearr_34749_34784 = state_34722__$1;(statearr_34749_34784[2] = inst_34701);
(statearr_34749_34784[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 18))
{var inst_34682 = (state_34722[13]);var inst_34681 = (state_34722[14]);var inst_34687 = (state_34722[15]);var inst_34704 = cljs.core.empty_QMARK_.call(null,inst_34682);var inst_34705 = inst_34681.call(null,inst_34687);var inst_34706 = cljs.core.not.call(null,inst_34705);var inst_34707 = (inst_34704) && (inst_34706);var state_34722__$1 = state_34722;var statearr_34750_34785 = state_34722__$1;(statearr_34750_34785[2] = inst_34707);
(statearr_34750_34785[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 19))
{var inst_34709 = (state_34722[2]);var state_34722__$1 = state_34722;if(cljs.core.truth_(inst_34709))
{var statearr_34751_34786 = state_34722__$1;(statearr_34751_34786[1] = 20);
} else
{var statearr_34752_34787 = state_34722__$1;(statearr_34752_34787[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 20))
{var inst_34686 = (state_34722[16]);var state_34722__$1 = state_34722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34722__$1,23,out,inst_34686);
} else
{if((state_val_34723 === 21))
{var state_34722__$1 = state_34722;var statearr_34753_34788 = state_34722__$1;(statearr_34753_34788[2] = null);
(statearr_34753_34788[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 22))
{var inst_34679 = (state_34722[12]);var inst_34715 = (state_34722[2]);var inst_34671 = inst_34679;var state_34722__$1 = (function (){var statearr_34754 = state_34722;(statearr_34754[19] = inst_34715);
(statearr_34754[10] = inst_34671);
return statearr_34754;
})();var statearr_34755_34789 = state_34722__$1;(statearr_34755_34789[2] = null);
(statearr_34755_34789[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34723 === 23))
{var inst_34712 = (state_34722[2]);var state_34722__$1 = state_34722;var statearr_34756_34790 = state_34722__$1;(statearr_34756_34790[2] = inst_34712);
(statearr_34756_34790[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34760[0] = state_machine__5507__auto__);
(statearr_34760[1] = 1);
return statearr_34760;
});
var state_machine__5507__auto____1 = (function (state_34722){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34722);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34761){if((e34761 instanceof Object))
{var ex__5510__auto__ = e34761;var statearr_34762_34791 = state_34722;(statearr_34762_34791[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34792 = state_34722;
state_34722 = G__34792;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34722){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34763 = f__5522__auto__.call(null);(statearr_34763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34764);
return statearr_34763;
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
cljs.core.async.Pub = (function (){var obj34794 = {};return obj34794;
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
return (function (p1__34795_SHARP_){if(cljs.core.truth_(p1__34795_SHARP_.call(null,topic)))
{return p1__34795_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34795_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34920 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34920 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34921){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34921 = meta34921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34920.cljs$lang$type = true;
cljs.core.async.t34920.cljs$lang$ctorStr = "cljs.core.async/t34920";
cljs.core.async.t34920.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34920");
});})(mults,ensure_mult))
;
cljs.core.async.t34920.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34920.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34920.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34920.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34922){var self__ = this;
var _34922__$1 = this;return self__.meta34921;
});})(mults,ensure_mult))
;
cljs.core.async.t34920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34922,meta34921__$1){var self__ = this;
var _34922__$1 = this;return (new cljs.core.async.t34920(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34921__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34920 = ((function (mults,ensure_mult){
return (function __GT_t34920(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34921){return (new cljs.core.async.t34920(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34921));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34920(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___35044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34996){var state_val_34997 = (state_34996[1]);if((state_val_34997 === 1))
{var state_34996__$1 = state_34996;var statearr_34998_35045 = state_34996__$1;(statearr_34998_35045[2] = null);
(statearr_34998_35045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 2))
{var state_34996__$1 = state_34996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34996__$1,4,ch);
} else
{if((state_val_34997 === 3))
{var inst_34994 = (state_34996[2]);var state_34996__$1 = state_34996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34996__$1,inst_34994);
} else
{if((state_val_34997 === 4))
{var inst_34925 = (state_34996[7]);var inst_34925__$1 = (state_34996[2]);var inst_34926 = (inst_34925__$1 == null);var state_34996__$1 = (function (){var statearr_34999 = state_34996;(statearr_34999[7] = inst_34925__$1);
return statearr_34999;
})();if(cljs.core.truth_(inst_34926))
{var statearr_35000_35046 = state_34996__$1;(statearr_35000_35046[1] = 5);
} else
{var statearr_35001_35047 = state_34996__$1;(statearr_35001_35047[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 5))
{var inst_34932 = cljs.core.deref.call(null,mults);var inst_34933 = cljs.core.vals.call(null,inst_34932);var inst_34934 = cljs.core.seq.call(null,inst_34933);var inst_34935 = inst_34934;var inst_34936 = null;var inst_34937 = 0;var inst_34938 = 0;var state_34996__$1 = (function (){var statearr_35002 = state_34996;(statearr_35002[8] = inst_34935);
(statearr_35002[9] = inst_34937);
(statearr_35002[10] = inst_34936);
(statearr_35002[11] = inst_34938);
return statearr_35002;
})();var statearr_35003_35048 = state_34996__$1;(statearr_35003_35048[2] = null);
(statearr_35003_35048[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 6))
{var inst_34973 = (state_34996[12]);var inst_34925 = (state_34996[7]);var inst_34975 = (state_34996[13]);var inst_34973__$1 = topic_fn.call(null,inst_34925);var inst_34974 = cljs.core.deref.call(null,mults);var inst_34975__$1 = cljs.core.get.call(null,inst_34974,inst_34973__$1);var state_34996__$1 = (function (){var statearr_35004 = state_34996;(statearr_35004[12] = inst_34973__$1);
(statearr_35004[13] = inst_34975__$1);
return statearr_35004;
})();if(cljs.core.truth_(inst_34975__$1))
{var statearr_35005_35049 = state_34996__$1;(statearr_35005_35049[1] = 19);
} else
{var statearr_35006_35050 = state_34996__$1;(statearr_35006_35050[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 7))
{var inst_34992 = (state_34996[2]);var state_34996__$1 = state_34996;var statearr_35007_35051 = state_34996__$1;(statearr_35007_35051[2] = inst_34992);
(statearr_35007_35051[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 8))
{var inst_34937 = (state_34996[9]);var inst_34938 = (state_34996[11]);var inst_34940 = (inst_34938 < inst_34937);var inst_34941 = inst_34940;var state_34996__$1 = state_34996;if(cljs.core.truth_(inst_34941))
{var statearr_35011_35052 = state_34996__$1;(statearr_35011_35052[1] = 10);
} else
{var statearr_35012_35053 = state_34996__$1;(statearr_35012_35053[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 9))
{var inst_34971 = (state_34996[2]);var state_34996__$1 = state_34996;var statearr_35013_35054 = state_34996__$1;(statearr_35013_35054[2] = inst_34971);
(statearr_35013_35054[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 10))
{var inst_34935 = (state_34996[8]);var inst_34937 = (state_34996[9]);var inst_34936 = (state_34996[10]);var inst_34938 = (state_34996[11]);var inst_34943 = cljs.core._nth.call(null,inst_34936,inst_34938);var inst_34944 = cljs.core.async.muxch_STAR_.call(null,inst_34943);var inst_34945 = cljs.core.async.close_BANG_.call(null,inst_34944);var inst_34946 = (inst_34938 + 1);var tmp35008 = inst_34935;var tmp35009 = inst_34937;var tmp35010 = inst_34936;var inst_34935__$1 = tmp35008;var inst_34936__$1 = tmp35010;var inst_34937__$1 = tmp35009;var inst_34938__$1 = inst_34946;var state_34996__$1 = (function (){var statearr_35014 = state_34996;(statearr_35014[8] = inst_34935__$1);
(statearr_35014[9] = inst_34937__$1);
(statearr_35014[10] = inst_34936__$1);
(statearr_35014[11] = inst_34938__$1);
(statearr_35014[14] = inst_34945);
return statearr_35014;
})();var statearr_35015_35055 = state_34996__$1;(statearr_35015_35055[2] = null);
(statearr_35015_35055[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 11))
{var inst_34935 = (state_34996[8]);var inst_34949 = (state_34996[15]);var inst_34949__$1 = cljs.core.seq.call(null,inst_34935);var state_34996__$1 = (function (){var statearr_35016 = state_34996;(statearr_35016[15] = inst_34949__$1);
return statearr_35016;
})();if(inst_34949__$1)
{var statearr_35017_35056 = state_34996__$1;(statearr_35017_35056[1] = 13);
} else
{var statearr_35018_35057 = state_34996__$1;(statearr_35018_35057[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 12))
{var inst_34969 = (state_34996[2]);var state_34996__$1 = state_34996;var statearr_35019_35058 = state_34996__$1;(statearr_35019_35058[2] = inst_34969);
(statearr_35019_35058[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 13))
{var inst_34949 = (state_34996[15]);var inst_34951 = cljs.core.chunked_seq_QMARK_.call(null,inst_34949);var state_34996__$1 = state_34996;if(inst_34951)
{var statearr_35020_35059 = state_34996__$1;(statearr_35020_35059[1] = 16);
} else
{var statearr_35021_35060 = state_34996__$1;(statearr_35021_35060[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 14))
{var state_34996__$1 = state_34996;var statearr_35022_35061 = state_34996__$1;(statearr_35022_35061[2] = null);
(statearr_35022_35061[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 15))
{var inst_34967 = (state_34996[2]);var state_34996__$1 = state_34996;var statearr_35023_35062 = state_34996__$1;(statearr_35023_35062[2] = inst_34967);
(statearr_35023_35062[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 16))
{var inst_34949 = (state_34996[15]);var inst_34953 = cljs.core.chunk_first.call(null,inst_34949);var inst_34954 = cljs.core.chunk_rest.call(null,inst_34949);var inst_34955 = cljs.core.count.call(null,inst_34953);var inst_34935 = inst_34954;var inst_34936 = inst_34953;var inst_34937 = inst_34955;var inst_34938 = 0;var state_34996__$1 = (function (){var statearr_35024 = state_34996;(statearr_35024[8] = inst_34935);
(statearr_35024[9] = inst_34937);
(statearr_35024[10] = inst_34936);
(statearr_35024[11] = inst_34938);
return statearr_35024;
})();var statearr_35025_35063 = state_34996__$1;(statearr_35025_35063[2] = null);
(statearr_35025_35063[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 17))
{var inst_34949 = (state_34996[15]);var inst_34958 = cljs.core.first.call(null,inst_34949);var inst_34959 = cljs.core.async.muxch_STAR_.call(null,inst_34958);var inst_34960 = cljs.core.async.close_BANG_.call(null,inst_34959);var inst_34961 = cljs.core.next.call(null,inst_34949);var inst_34935 = inst_34961;var inst_34936 = null;var inst_34937 = 0;var inst_34938 = 0;var state_34996__$1 = (function (){var statearr_35026 = state_34996;(statearr_35026[8] = inst_34935);
(statearr_35026[9] = inst_34937);
(statearr_35026[10] = inst_34936);
(statearr_35026[11] = inst_34938);
(statearr_35026[16] = inst_34960);
return statearr_35026;
})();var statearr_35027_35064 = state_34996__$1;(statearr_35027_35064[2] = null);
(statearr_35027_35064[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 18))
{var inst_34964 = (state_34996[2]);var state_34996__$1 = state_34996;var statearr_35028_35065 = state_34996__$1;(statearr_35028_35065[2] = inst_34964);
(statearr_35028_35065[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 19))
{var state_34996__$1 = state_34996;var statearr_35029_35066 = state_34996__$1;(statearr_35029_35066[2] = null);
(statearr_35029_35066[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 20))
{var state_34996__$1 = state_34996;var statearr_35030_35067 = state_34996__$1;(statearr_35030_35067[2] = null);
(statearr_35030_35067[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 21))
{var inst_34989 = (state_34996[2]);var state_34996__$1 = (function (){var statearr_35031 = state_34996;(statearr_35031[17] = inst_34989);
return statearr_35031;
})();var statearr_35032_35068 = state_34996__$1;(statearr_35032_35068[2] = null);
(statearr_35032_35068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 22))
{var inst_34986 = (state_34996[2]);var state_34996__$1 = state_34996;var statearr_35033_35069 = state_34996__$1;(statearr_35033_35069[2] = inst_34986);
(statearr_35033_35069[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 23))
{var inst_34973 = (state_34996[12]);var inst_34977 = (state_34996[2]);var inst_34978 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34973);var state_34996__$1 = (function (){var statearr_35034 = state_34996;(statearr_35034[18] = inst_34977);
return statearr_35034;
})();var statearr_35035_35070 = state_34996__$1;(statearr_35035_35070[2] = inst_34978);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34996__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34997 === 24))
{var inst_34925 = (state_34996[7]);var inst_34975 = (state_34996[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34996,23,Object,null,22);var inst_34982 = cljs.core.async.muxch_STAR_.call(null,inst_34975);var state_34996__$1 = state_34996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34996__$1,25,inst_34982,inst_34925);
} else
{if((state_val_34997 === 25))
{var inst_34984 = (state_34996[2]);var state_34996__$1 = state_34996;var statearr_35036_35071 = state_34996__$1;(statearr_35036_35071[2] = inst_34984);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34996__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35040[0] = state_machine__5507__auto__);
(statearr_35040[1] = 1);
return statearr_35040;
});
var state_machine__5507__auto____1 = (function (state_34996){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35041){if((e35041 instanceof Object))
{var ex__5510__auto__ = e35041;var statearr_35042_35072 = state_34996;(statearr_35042_35072[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35073 = state_34996;
state_34996 = G__35073;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34996){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35043 = f__5522__auto__.call(null);(statearr_35043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35044);
return statearr_35043;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___35210 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35180){var state_val_35181 = (state_35180[1]);if((state_val_35181 === 1))
{var state_35180__$1 = state_35180;var statearr_35182_35211 = state_35180__$1;(statearr_35182_35211[2] = null);
(statearr_35182_35211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 2))
{var inst_35143 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35144 = 0;var state_35180__$1 = (function (){var statearr_35183 = state_35180;(statearr_35183[7] = inst_35144);
(statearr_35183[8] = inst_35143);
return statearr_35183;
})();var statearr_35184_35212 = state_35180__$1;(statearr_35184_35212[2] = null);
(statearr_35184_35212[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 3))
{var inst_35178 = (state_35180[2]);var state_35180__$1 = state_35180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35180__$1,inst_35178);
} else
{if((state_val_35181 === 4))
{var inst_35144 = (state_35180[7]);var inst_35146 = (inst_35144 < cnt);var state_35180__$1 = state_35180;if(cljs.core.truth_(inst_35146))
{var statearr_35185_35213 = state_35180__$1;(statearr_35185_35213[1] = 6);
} else
{var statearr_35186_35214 = state_35180__$1;(statearr_35186_35214[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 5))
{var inst_35164 = (state_35180[2]);var state_35180__$1 = (function (){var statearr_35187 = state_35180;(statearr_35187[9] = inst_35164);
return statearr_35187;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35180__$1,12,dchan);
} else
{if((state_val_35181 === 6))
{var state_35180__$1 = state_35180;var statearr_35188_35215 = state_35180__$1;(statearr_35188_35215[2] = null);
(statearr_35188_35215[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 7))
{var state_35180__$1 = state_35180;var statearr_35189_35216 = state_35180__$1;(statearr_35189_35216[2] = null);
(statearr_35189_35216[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 8))
{var inst_35162 = (state_35180[2]);var state_35180__$1 = state_35180;var statearr_35190_35217 = state_35180__$1;(statearr_35190_35217[2] = inst_35162);
(statearr_35190_35217[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 9))
{var inst_35144 = (state_35180[7]);var inst_35157 = (state_35180[2]);var inst_35158 = (inst_35144 + 1);var inst_35144__$1 = inst_35158;var state_35180__$1 = (function (){var statearr_35191 = state_35180;(statearr_35191[7] = inst_35144__$1);
(statearr_35191[10] = inst_35157);
return statearr_35191;
})();var statearr_35192_35218 = state_35180__$1;(statearr_35192_35218[2] = null);
(statearr_35192_35218[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 10))
{var inst_35148 = (state_35180[2]);var inst_35149 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35180__$1 = (function (){var statearr_35193 = state_35180;(statearr_35193[11] = inst_35148);
return statearr_35193;
})();var statearr_35194_35219 = state_35180__$1;(statearr_35194_35219[2] = inst_35149);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35180__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 11))
{var inst_35144 = (state_35180[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35180,10,Object,null,9);var inst_35153 = chs__$1.call(null,inst_35144);var inst_35154 = done.call(null,inst_35144);var inst_35155 = cljs.core.async.take_BANG_.call(null,inst_35153,inst_35154);var state_35180__$1 = state_35180;var statearr_35195_35220 = state_35180__$1;(statearr_35195_35220[2] = inst_35155);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35180__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 12))
{var inst_35166 = (state_35180[12]);var inst_35166__$1 = (state_35180[2]);var inst_35167 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35166__$1);var state_35180__$1 = (function (){var statearr_35196 = state_35180;(statearr_35196[12] = inst_35166__$1);
return statearr_35196;
})();if(cljs.core.truth_(inst_35167))
{var statearr_35197_35221 = state_35180__$1;(statearr_35197_35221[1] = 13);
} else
{var statearr_35198_35222 = state_35180__$1;(statearr_35198_35222[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 13))
{var inst_35169 = cljs.core.async.close_BANG_.call(null,out);var state_35180__$1 = state_35180;var statearr_35199_35223 = state_35180__$1;(statearr_35199_35223[2] = inst_35169);
(statearr_35199_35223[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 14))
{var inst_35166 = (state_35180[12]);var inst_35171 = cljs.core.apply.call(null,f,inst_35166);var state_35180__$1 = state_35180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35180__$1,16,out,inst_35171);
} else
{if((state_val_35181 === 15))
{var inst_35176 = (state_35180[2]);var state_35180__$1 = state_35180;var statearr_35200_35224 = state_35180__$1;(statearr_35200_35224[2] = inst_35176);
(statearr_35200_35224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35181 === 16))
{var inst_35173 = (state_35180[2]);var state_35180__$1 = (function (){var statearr_35201 = state_35180;(statearr_35201[13] = inst_35173);
return statearr_35201;
})();var statearr_35202_35225 = state_35180__$1;(statearr_35202_35225[2] = null);
(statearr_35202_35225[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35206[0] = state_machine__5507__auto__);
(statearr_35206[1] = 1);
return statearr_35206;
});
var state_machine__5507__auto____1 = (function (state_35180){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35180);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35207){if((e35207 instanceof Object))
{var ex__5510__auto__ = e35207;var statearr_35208_35226 = state_35180;(statearr_35208_35226[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35180);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35227 = state_35180;
state_35180 = G__35227;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35180){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35209 = f__5522__auto__.call(null);(statearr_35209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35210);
return statearr_35209;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35335 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35311){var state_val_35312 = (state_35311[1]);if((state_val_35312 === 1))
{var inst_35282 = cljs.core.vec.call(null,chs);var inst_35283 = inst_35282;var state_35311__$1 = (function (){var statearr_35313 = state_35311;(statearr_35313[7] = inst_35283);
return statearr_35313;
})();var statearr_35314_35336 = state_35311__$1;(statearr_35314_35336[2] = null);
(statearr_35314_35336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35312 === 2))
{var inst_35283 = (state_35311[7]);var inst_35285 = cljs.core.count.call(null,inst_35283);var inst_35286 = (inst_35285 > 0);var state_35311__$1 = state_35311;if(cljs.core.truth_(inst_35286))
{var statearr_35315_35337 = state_35311__$1;(statearr_35315_35337[1] = 4);
} else
{var statearr_35316_35338 = state_35311__$1;(statearr_35316_35338[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35312 === 3))
{var inst_35309 = (state_35311[2]);var state_35311__$1 = state_35311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35311__$1,inst_35309);
} else
{if((state_val_35312 === 4))
{var inst_35283 = (state_35311[7]);var state_35311__$1 = state_35311;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35311__$1,7,inst_35283);
} else
{if((state_val_35312 === 5))
{var inst_35305 = cljs.core.async.close_BANG_.call(null,out);var state_35311__$1 = state_35311;var statearr_35317_35339 = state_35311__$1;(statearr_35317_35339[2] = inst_35305);
(statearr_35317_35339[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35312 === 6))
{var inst_35307 = (state_35311[2]);var state_35311__$1 = state_35311;var statearr_35318_35340 = state_35311__$1;(statearr_35318_35340[2] = inst_35307);
(statearr_35318_35340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35312 === 7))
{var inst_35290 = (state_35311[8]);var inst_35291 = (state_35311[9]);var inst_35290__$1 = (state_35311[2]);var inst_35291__$1 = cljs.core.nth.call(null,inst_35290__$1,0,null);var inst_35292 = cljs.core.nth.call(null,inst_35290__$1,1,null);var inst_35293 = (inst_35291__$1 == null);var state_35311__$1 = (function (){var statearr_35319 = state_35311;(statearr_35319[10] = inst_35292);
(statearr_35319[8] = inst_35290__$1);
(statearr_35319[9] = inst_35291__$1);
return statearr_35319;
})();if(cljs.core.truth_(inst_35293))
{var statearr_35320_35341 = state_35311__$1;(statearr_35320_35341[1] = 8);
} else
{var statearr_35321_35342 = state_35311__$1;(statearr_35321_35342[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35312 === 8))
{var inst_35292 = (state_35311[10]);var inst_35290 = (state_35311[8]);var inst_35291 = (state_35311[9]);var inst_35283 = (state_35311[7]);var inst_35295 = (function (){var c = inst_35292;var v = inst_35291;var vec__35288 = inst_35290;var cs = inst_35283;return ((function (c,v,vec__35288,cs,inst_35292,inst_35290,inst_35291,inst_35283,state_val_35312){
return (function (p1__35228_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35228_SHARP_);
});
;})(c,v,vec__35288,cs,inst_35292,inst_35290,inst_35291,inst_35283,state_val_35312))
})();var inst_35296 = cljs.core.filterv.call(null,inst_35295,inst_35283);var inst_35283__$1 = inst_35296;var state_35311__$1 = (function (){var statearr_35322 = state_35311;(statearr_35322[7] = inst_35283__$1);
return statearr_35322;
})();var statearr_35323_35343 = state_35311__$1;(statearr_35323_35343[2] = null);
(statearr_35323_35343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35312 === 9))
{var inst_35291 = (state_35311[9]);var state_35311__$1 = state_35311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35311__$1,11,out,inst_35291);
} else
{if((state_val_35312 === 10))
{var inst_35303 = (state_35311[2]);var state_35311__$1 = state_35311;var statearr_35325_35344 = state_35311__$1;(statearr_35325_35344[2] = inst_35303);
(statearr_35325_35344[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35312 === 11))
{var inst_35283 = (state_35311[7]);var inst_35300 = (state_35311[2]);var tmp35324 = inst_35283;var inst_35283__$1 = tmp35324;var state_35311__$1 = (function (){var statearr_35326 = state_35311;(statearr_35326[11] = inst_35300);
(statearr_35326[7] = inst_35283__$1);
return statearr_35326;
})();var statearr_35327_35345 = state_35311__$1;(statearr_35327_35345[2] = null);
(statearr_35327_35345[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35331 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35331[0] = state_machine__5507__auto__);
(statearr_35331[1] = 1);
return statearr_35331;
});
var state_machine__5507__auto____1 = (function (state_35311){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35311);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35332){if((e35332 instanceof Object))
{var ex__5510__auto__ = e35332;var statearr_35333_35346 = state_35311;(statearr_35333_35346[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35311);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35347 = state_35311;
state_35311 = G__35347;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35311){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35334 = f__5522__auto__.call(null);(statearr_35334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35335);
return statearr_35334;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35440 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35417){var state_val_35418 = (state_35417[1]);if((state_val_35418 === 1))
{var inst_35394 = 0;var state_35417__$1 = (function (){var statearr_35419 = state_35417;(statearr_35419[7] = inst_35394);
return statearr_35419;
})();var statearr_35420_35441 = state_35417__$1;(statearr_35420_35441[2] = null);
(statearr_35420_35441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35418 === 2))
{var inst_35394 = (state_35417[7]);var inst_35396 = (inst_35394 < n);var state_35417__$1 = state_35417;if(cljs.core.truth_(inst_35396))
{var statearr_35421_35442 = state_35417__$1;(statearr_35421_35442[1] = 4);
} else
{var statearr_35422_35443 = state_35417__$1;(statearr_35422_35443[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35418 === 3))
{var inst_35414 = (state_35417[2]);var inst_35415 = cljs.core.async.close_BANG_.call(null,out);var state_35417__$1 = (function (){var statearr_35423 = state_35417;(statearr_35423[8] = inst_35414);
return statearr_35423;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35417__$1,inst_35415);
} else
{if((state_val_35418 === 4))
{var state_35417__$1 = state_35417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35417__$1,7,ch);
} else
{if((state_val_35418 === 5))
{var state_35417__$1 = state_35417;var statearr_35424_35444 = state_35417__$1;(statearr_35424_35444[2] = null);
(statearr_35424_35444[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35418 === 6))
{var inst_35412 = (state_35417[2]);var state_35417__$1 = state_35417;var statearr_35425_35445 = state_35417__$1;(statearr_35425_35445[2] = inst_35412);
(statearr_35425_35445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35418 === 7))
{var inst_35399 = (state_35417[9]);var inst_35399__$1 = (state_35417[2]);var inst_35400 = (inst_35399__$1 == null);var inst_35401 = cljs.core.not.call(null,inst_35400);var state_35417__$1 = (function (){var statearr_35426 = state_35417;(statearr_35426[9] = inst_35399__$1);
return statearr_35426;
})();if(inst_35401)
{var statearr_35427_35446 = state_35417__$1;(statearr_35427_35446[1] = 8);
} else
{var statearr_35428_35447 = state_35417__$1;(statearr_35428_35447[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35418 === 8))
{var inst_35399 = (state_35417[9]);var state_35417__$1 = state_35417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35417__$1,11,out,inst_35399);
} else
{if((state_val_35418 === 9))
{var state_35417__$1 = state_35417;var statearr_35429_35448 = state_35417__$1;(statearr_35429_35448[2] = null);
(statearr_35429_35448[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35418 === 10))
{var inst_35409 = (state_35417[2]);var state_35417__$1 = state_35417;var statearr_35430_35449 = state_35417__$1;(statearr_35430_35449[2] = inst_35409);
(statearr_35430_35449[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35418 === 11))
{var inst_35394 = (state_35417[7]);var inst_35404 = (state_35417[2]);var inst_35405 = (inst_35394 + 1);var inst_35394__$1 = inst_35405;var state_35417__$1 = (function (){var statearr_35431 = state_35417;(statearr_35431[10] = inst_35404);
(statearr_35431[7] = inst_35394__$1);
return statearr_35431;
})();var statearr_35432_35450 = state_35417__$1;(statearr_35432_35450[2] = null);
(statearr_35432_35450[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35436 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35436[0] = state_machine__5507__auto__);
(statearr_35436[1] = 1);
return statearr_35436;
});
var state_machine__5507__auto____1 = (function (state_35417){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35417);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35437){if((e35437 instanceof Object))
{var ex__5510__auto__ = e35437;var statearr_35438_35451 = state_35417;(statearr_35438_35451[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35417);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35452 = state_35417;
state_35417 = G__35452;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35417){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35439 = f__5522__auto__.call(null);(statearr_35439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35440);
return statearr_35439;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35524){var state_val_35525 = (state_35524[1]);if((state_val_35525 === 1))
{var inst_35501 = null;var state_35524__$1 = (function (){var statearr_35526 = state_35524;(statearr_35526[7] = inst_35501);
return statearr_35526;
})();var statearr_35527_35550 = state_35524__$1;(statearr_35527_35550[2] = null);
(statearr_35527_35550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35525 === 2))
{var state_35524__$1 = state_35524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35524__$1,4,ch);
} else
{if((state_val_35525 === 3))
{var inst_35521 = (state_35524[2]);var inst_35522 = cljs.core.async.close_BANG_.call(null,out);var state_35524__$1 = (function (){var statearr_35528 = state_35524;(statearr_35528[8] = inst_35521);
return statearr_35528;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35524__$1,inst_35522);
} else
{if((state_val_35525 === 4))
{var inst_35504 = (state_35524[9]);var inst_35504__$1 = (state_35524[2]);var inst_35505 = (inst_35504__$1 == null);var inst_35506 = cljs.core.not.call(null,inst_35505);var state_35524__$1 = (function (){var statearr_35529 = state_35524;(statearr_35529[9] = inst_35504__$1);
return statearr_35529;
})();if(inst_35506)
{var statearr_35530_35551 = state_35524__$1;(statearr_35530_35551[1] = 5);
} else
{var statearr_35531_35552 = state_35524__$1;(statearr_35531_35552[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35525 === 5))
{var inst_35501 = (state_35524[7]);var inst_35504 = (state_35524[9]);var inst_35508 = cljs.core._EQ_.call(null,inst_35504,inst_35501);var state_35524__$1 = state_35524;if(inst_35508)
{var statearr_35532_35553 = state_35524__$1;(statearr_35532_35553[1] = 8);
} else
{var statearr_35533_35554 = state_35524__$1;(statearr_35533_35554[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35525 === 6))
{var state_35524__$1 = state_35524;var statearr_35535_35555 = state_35524__$1;(statearr_35535_35555[2] = null);
(statearr_35535_35555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35525 === 7))
{var inst_35519 = (state_35524[2]);var state_35524__$1 = state_35524;var statearr_35536_35556 = state_35524__$1;(statearr_35536_35556[2] = inst_35519);
(statearr_35536_35556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35525 === 8))
{var inst_35501 = (state_35524[7]);var tmp35534 = inst_35501;var inst_35501__$1 = tmp35534;var state_35524__$1 = (function (){var statearr_35537 = state_35524;(statearr_35537[7] = inst_35501__$1);
return statearr_35537;
})();var statearr_35538_35557 = state_35524__$1;(statearr_35538_35557[2] = null);
(statearr_35538_35557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35525 === 9))
{var inst_35504 = (state_35524[9]);var state_35524__$1 = state_35524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35524__$1,11,out,inst_35504);
} else
{if((state_val_35525 === 10))
{var inst_35516 = (state_35524[2]);var state_35524__$1 = state_35524;var statearr_35539_35558 = state_35524__$1;(statearr_35539_35558[2] = inst_35516);
(statearr_35539_35558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35525 === 11))
{var inst_35504 = (state_35524[9]);var inst_35513 = (state_35524[2]);var inst_35501 = inst_35504;var state_35524__$1 = (function (){var statearr_35540 = state_35524;(statearr_35540[7] = inst_35501);
(statearr_35540[10] = inst_35513);
return statearr_35540;
})();var statearr_35541_35559 = state_35524__$1;(statearr_35541_35559[2] = null);
(statearr_35541_35559[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35545 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35545[0] = state_machine__5507__auto__);
(statearr_35545[1] = 1);
return statearr_35545;
});
var state_machine__5507__auto____1 = (function (state_35524){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35524);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35546){if((e35546 instanceof Object))
{var ex__5510__auto__ = e35546;var statearr_35547_35560 = state_35524;(statearr_35547_35560[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35561 = state_35524;
state_35524 = G__35561;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35524){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35548 = f__5522__auto__.call(null);(statearr_35548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35549);
return statearr_35548;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35696 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35666){var state_val_35667 = (state_35666[1]);if((state_val_35667 === 1))
{var inst_35629 = (new Array(n));var inst_35630 = inst_35629;var inst_35631 = 0;var state_35666__$1 = (function (){var statearr_35668 = state_35666;(statearr_35668[7] = inst_35631);
(statearr_35668[8] = inst_35630);
return statearr_35668;
})();var statearr_35669_35697 = state_35666__$1;(statearr_35669_35697[2] = null);
(statearr_35669_35697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 2))
{var state_35666__$1 = state_35666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35666__$1,4,ch);
} else
{if((state_val_35667 === 3))
{var inst_35664 = (state_35666[2]);var state_35666__$1 = state_35666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35666__$1,inst_35664);
} else
{if((state_val_35667 === 4))
{var inst_35634 = (state_35666[9]);var inst_35634__$1 = (state_35666[2]);var inst_35635 = (inst_35634__$1 == null);var inst_35636 = cljs.core.not.call(null,inst_35635);var state_35666__$1 = (function (){var statearr_35670 = state_35666;(statearr_35670[9] = inst_35634__$1);
return statearr_35670;
})();if(inst_35636)
{var statearr_35671_35698 = state_35666__$1;(statearr_35671_35698[1] = 5);
} else
{var statearr_35672_35699 = state_35666__$1;(statearr_35672_35699[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 5))
{var inst_35639 = (state_35666[10]);var inst_35634 = (state_35666[9]);var inst_35631 = (state_35666[7]);var inst_35630 = (state_35666[8]);var inst_35638 = (inst_35630[inst_35631] = inst_35634);var inst_35639__$1 = (inst_35631 + 1);var inst_35640 = (inst_35639__$1 < n);var state_35666__$1 = (function (){var statearr_35673 = state_35666;(statearr_35673[10] = inst_35639__$1);
(statearr_35673[11] = inst_35638);
return statearr_35673;
})();if(cljs.core.truth_(inst_35640))
{var statearr_35674_35700 = state_35666__$1;(statearr_35674_35700[1] = 8);
} else
{var statearr_35675_35701 = state_35666__$1;(statearr_35675_35701[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 6))
{var inst_35631 = (state_35666[7]);var inst_35652 = (inst_35631 > 0);var state_35666__$1 = state_35666;if(cljs.core.truth_(inst_35652))
{var statearr_35677_35702 = state_35666__$1;(statearr_35677_35702[1] = 12);
} else
{var statearr_35678_35703 = state_35666__$1;(statearr_35678_35703[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 7))
{var inst_35662 = (state_35666[2]);var state_35666__$1 = state_35666;var statearr_35679_35704 = state_35666__$1;(statearr_35679_35704[2] = inst_35662);
(statearr_35679_35704[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 8))
{var inst_35639 = (state_35666[10]);var inst_35630 = (state_35666[8]);var tmp35676 = inst_35630;var inst_35630__$1 = tmp35676;var inst_35631 = inst_35639;var state_35666__$1 = (function (){var statearr_35680 = state_35666;(statearr_35680[7] = inst_35631);
(statearr_35680[8] = inst_35630__$1);
return statearr_35680;
})();var statearr_35681_35705 = state_35666__$1;(statearr_35681_35705[2] = null);
(statearr_35681_35705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 9))
{var inst_35630 = (state_35666[8]);var inst_35644 = cljs.core.vec.call(null,inst_35630);var state_35666__$1 = state_35666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35666__$1,11,out,inst_35644);
} else
{if((state_val_35667 === 10))
{var inst_35650 = (state_35666[2]);var state_35666__$1 = state_35666;var statearr_35682_35706 = state_35666__$1;(statearr_35682_35706[2] = inst_35650);
(statearr_35682_35706[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 11))
{var inst_35646 = (state_35666[2]);var inst_35647 = (new Array(n));var inst_35630 = inst_35647;var inst_35631 = 0;var state_35666__$1 = (function (){var statearr_35683 = state_35666;(statearr_35683[12] = inst_35646);
(statearr_35683[7] = inst_35631);
(statearr_35683[8] = inst_35630);
return statearr_35683;
})();var statearr_35684_35707 = state_35666__$1;(statearr_35684_35707[2] = null);
(statearr_35684_35707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 12))
{var inst_35630 = (state_35666[8]);var inst_35654 = cljs.core.vec.call(null,inst_35630);var state_35666__$1 = state_35666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35666__$1,15,out,inst_35654);
} else
{if((state_val_35667 === 13))
{var state_35666__$1 = state_35666;var statearr_35685_35708 = state_35666__$1;(statearr_35685_35708[2] = null);
(statearr_35685_35708[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 14))
{var inst_35659 = (state_35666[2]);var inst_35660 = cljs.core.async.close_BANG_.call(null,out);var state_35666__$1 = (function (){var statearr_35686 = state_35666;(statearr_35686[13] = inst_35659);
return statearr_35686;
})();var statearr_35687_35709 = state_35666__$1;(statearr_35687_35709[2] = inst_35660);
(statearr_35687_35709[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35667 === 15))
{var inst_35656 = (state_35666[2]);var state_35666__$1 = state_35666;var statearr_35688_35710 = state_35666__$1;(statearr_35688_35710[2] = inst_35656);
(statearr_35688_35710[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35692[0] = state_machine__5507__auto__);
(statearr_35692[1] = 1);
return statearr_35692;
});
var state_machine__5507__auto____1 = (function (state_35666){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35666);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35693){if((e35693 instanceof Object))
{var ex__5510__auto__ = e35693;var statearr_35694_35711 = state_35666;(statearr_35694_35711[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35666);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35712 = state_35666;
state_35666 = G__35712;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35666){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35695 = f__5522__auto__.call(null);(statearr_35695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35696);
return statearr_35695;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35855 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35825){var state_val_35826 = (state_35825[1]);if((state_val_35826 === 1))
{var inst_35784 = [];var inst_35785 = inst_35784;var inst_35786 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35825__$1 = (function (){var statearr_35827 = state_35825;(statearr_35827[7] = inst_35786);
(statearr_35827[8] = inst_35785);
return statearr_35827;
})();var statearr_35828_35856 = state_35825__$1;(statearr_35828_35856[2] = null);
(statearr_35828_35856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 2))
{var state_35825__$1 = state_35825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35825__$1,4,ch);
} else
{if((state_val_35826 === 3))
{var inst_35823 = (state_35825[2]);var state_35825__$1 = state_35825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35825__$1,inst_35823);
} else
{if((state_val_35826 === 4))
{var inst_35789 = (state_35825[9]);var inst_35789__$1 = (state_35825[2]);var inst_35790 = (inst_35789__$1 == null);var inst_35791 = cljs.core.not.call(null,inst_35790);var state_35825__$1 = (function (){var statearr_35829 = state_35825;(statearr_35829[9] = inst_35789__$1);
return statearr_35829;
})();if(inst_35791)
{var statearr_35830_35857 = state_35825__$1;(statearr_35830_35857[1] = 5);
} else
{var statearr_35831_35858 = state_35825__$1;(statearr_35831_35858[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 5))
{var inst_35786 = (state_35825[7]);var inst_35793 = (state_35825[10]);var inst_35789 = (state_35825[9]);var inst_35793__$1 = f.call(null,inst_35789);var inst_35794 = cljs.core._EQ_.call(null,inst_35793__$1,inst_35786);var inst_35795 = cljs.core.keyword_identical_QMARK_.call(null,inst_35786,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35796 = (inst_35794) || (inst_35795);var state_35825__$1 = (function (){var statearr_35832 = state_35825;(statearr_35832[10] = inst_35793__$1);
return statearr_35832;
})();if(cljs.core.truth_(inst_35796))
{var statearr_35833_35859 = state_35825__$1;(statearr_35833_35859[1] = 8);
} else
{var statearr_35834_35860 = state_35825__$1;(statearr_35834_35860[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 6))
{var inst_35785 = (state_35825[8]);var inst_35810 = inst_35785.length;var inst_35811 = (inst_35810 > 0);var state_35825__$1 = state_35825;if(cljs.core.truth_(inst_35811))
{var statearr_35836_35861 = state_35825__$1;(statearr_35836_35861[1] = 12);
} else
{var statearr_35837_35862 = state_35825__$1;(statearr_35837_35862[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 7))
{var inst_35821 = (state_35825[2]);var state_35825__$1 = state_35825;var statearr_35838_35863 = state_35825__$1;(statearr_35838_35863[2] = inst_35821);
(statearr_35838_35863[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 8))
{var inst_35785 = (state_35825[8]);var inst_35793 = (state_35825[10]);var inst_35789 = (state_35825[9]);var inst_35798 = inst_35785.push(inst_35789);var tmp35835 = inst_35785;var inst_35785__$1 = tmp35835;var inst_35786 = inst_35793;var state_35825__$1 = (function (){var statearr_35839 = state_35825;(statearr_35839[7] = inst_35786);
(statearr_35839[8] = inst_35785__$1);
(statearr_35839[11] = inst_35798);
return statearr_35839;
})();var statearr_35840_35864 = state_35825__$1;(statearr_35840_35864[2] = null);
(statearr_35840_35864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 9))
{var inst_35785 = (state_35825[8]);var inst_35801 = cljs.core.vec.call(null,inst_35785);var state_35825__$1 = state_35825;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35825__$1,11,out,inst_35801);
} else
{if((state_val_35826 === 10))
{var inst_35808 = (state_35825[2]);var state_35825__$1 = state_35825;var statearr_35841_35865 = state_35825__$1;(statearr_35841_35865[2] = inst_35808);
(statearr_35841_35865[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 11))
{var inst_35793 = (state_35825[10]);var inst_35789 = (state_35825[9]);var inst_35803 = (state_35825[2]);var inst_35804 = [];var inst_35805 = inst_35804.push(inst_35789);var inst_35785 = inst_35804;var inst_35786 = inst_35793;var state_35825__$1 = (function (){var statearr_35842 = state_35825;(statearr_35842[7] = inst_35786);
(statearr_35842[8] = inst_35785);
(statearr_35842[12] = inst_35803);
(statearr_35842[13] = inst_35805);
return statearr_35842;
})();var statearr_35843_35866 = state_35825__$1;(statearr_35843_35866[2] = null);
(statearr_35843_35866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 12))
{var inst_35785 = (state_35825[8]);var inst_35813 = cljs.core.vec.call(null,inst_35785);var state_35825__$1 = state_35825;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35825__$1,15,out,inst_35813);
} else
{if((state_val_35826 === 13))
{var state_35825__$1 = state_35825;var statearr_35844_35867 = state_35825__$1;(statearr_35844_35867[2] = null);
(statearr_35844_35867[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 14))
{var inst_35818 = (state_35825[2]);var inst_35819 = cljs.core.async.close_BANG_.call(null,out);var state_35825__$1 = (function (){var statearr_35845 = state_35825;(statearr_35845[14] = inst_35818);
return statearr_35845;
})();var statearr_35846_35868 = state_35825__$1;(statearr_35846_35868[2] = inst_35819);
(statearr_35846_35868[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35826 === 15))
{var inst_35815 = (state_35825[2]);var state_35825__$1 = state_35825;var statearr_35847_35869 = state_35825__$1;(statearr_35847_35869[2] = inst_35815);
(statearr_35847_35869[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35851[0] = state_machine__5507__auto__);
(statearr_35851[1] = 1);
return statearr_35851;
});
var state_machine__5507__auto____1 = (function (state_35825){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35825);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35852){if((e35852 instanceof Object))
{var ex__5510__auto__ = e35852;var statearr_35853_35870 = state_35825;(statearr_35853_35870[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35825);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35871 = state_35825;
state_35825 = G__35871;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35825){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35854 = f__5522__auto__.call(null);(statearr_35854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35855);
return statearr_35854;
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
