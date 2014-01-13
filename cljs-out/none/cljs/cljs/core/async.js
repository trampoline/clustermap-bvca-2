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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12052 = (function (f,fn_handler,meta12053){
this.f = f;
this.fn_handler = fn_handler;
this.meta12053 = meta12053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12052.cljs$lang$type = true;
cljs.core.async.t12052.cljs$lang$ctorStr = "cljs.core.async/t12052";
cljs.core.async.t12052.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12052");
});
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12054){var self__ = this;
var _12054__$1 = this;return self__.meta12053;
});
cljs.core.async.t12052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12054,meta12053__$1){var self__ = this;
var _12054__$1 = this;return (new cljs.core.async.t12052(self__.f,self__.fn_handler,meta12053__$1));
});
cljs.core.async.__GT_t12052 = (function __GT_t12052(f__$1,fn_handler__$1,meta12053){return (new cljs.core.async.t12052(f__$1,fn_handler__$1,meta12053));
});
}
return (new cljs.core.async.t12052(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12056 = buff;if(G__12056)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12056.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12056.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12056);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12056);
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
{var val_12057 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12057);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12057);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12058 = n;var x_12059 = 0;while(true){
if((x_12059 < n__4248__auto___12058))
{(a[x_12059] = 0);
{
var G__12060 = (x_12059 + 1);
x_12059 = G__12060;
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
var G__12061 = (i + 1);
i = G__12061;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12065 = (function (flag,alt_flag,meta12066){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12066 = meta12066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12065.cljs$lang$type = true;
cljs.core.async.t12065.cljs$lang$ctorStr = "cljs.core.async/t12065";
cljs.core.async.t12065.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12065");
});
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12067){var self__ = this;
var _12067__$1 = this;return self__.meta12066;
});
cljs.core.async.t12065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12067,meta12066__$1){var self__ = this;
var _12067__$1 = this;return (new cljs.core.async.t12065(self__.flag,self__.alt_flag,meta12066__$1));
});
cljs.core.async.__GT_t12065 = (function __GT_t12065(flag__$1,alt_flag__$1,meta12066){return (new cljs.core.async.t12065(flag__$1,alt_flag__$1,meta12066));
});
}
return (new cljs.core.async.t12065(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12071 = (function (cb,flag,alt_handler,meta12072){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12072 = meta12072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12071.cljs$lang$type = true;
cljs.core.async.t12071.cljs$lang$ctorStr = "cljs.core.async/t12071";
cljs.core.async.t12071.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12071");
});
cljs.core.async.t12071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12073){var self__ = this;
var _12073__$1 = this;return self__.meta12072;
});
cljs.core.async.t12071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12073,meta12072__$1){var self__ = this;
var _12073__$1 = this;return (new cljs.core.async.t12071(self__.cb,self__.flag,self__.alt_handler,meta12072__$1));
});
cljs.core.async.__GT_t12071 = (function __GT_t12071(cb__$1,flag__$1,alt_handler__$1,meta12072){return (new cljs.core.async.t12071(cb__$1,flag__$1,alt_handler__$1,meta12072));
});
}
return (new cljs.core.async.t12071(cb,flag,alt_handler,null));
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
return (function (p1__12074_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12074_SHARP_,port], null));
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
var G__12075 = (i + 1);
i = G__12075;
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
var alts_BANG___delegate = function (ports,p__12076){var map__12078 = p__12076;var map__12078__$1 = ((cljs.core.seq_QMARK_.call(null,map__12078))?cljs.core.apply.call(null,cljs.core.hash_map,map__12078):map__12078);var opts = map__12078__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12076 = null;if (arguments.length > 1) {
  p__12076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12076);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12079){
var ports = cljs.core.first(arglist__12079);
var p__12076 = cljs.core.rest(arglist__12079);
return alts_BANG___delegate(ports,p__12076);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12087 = (function (ch,f,map_LT_,meta12088){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12088 = meta12088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12087.cljs$lang$type = true;
cljs.core.async.t12087.cljs$lang$ctorStr = "cljs.core.async/t12087";
cljs.core.async.t12087.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12087");
});
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12090 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12090 = (function (fn1,_,meta12088,ch,f,map_LT_,meta12091){
this.fn1 = fn1;
this._ = _;
this.meta12088 = meta12088;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12091 = meta12091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12090.cljs$lang$type = true;
cljs.core.async.t12090.cljs$lang$ctorStr = "cljs.core.async/t12090";
cljs.core.async.t12090.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12090");
});
cljs.core.async.t12090.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12090.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12080_SHARP_){return f1.call(null,(((p1__12080_SHARP_ == null))?null:self__.f.call(null,p1__12080_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12092){var self__ = this;
var _12092__$1 = this;return self__.meta12091;
});
cljs.core.async.t12090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12092,meta12091__$1){var self__ = this;
var _12092__$1 = this;return (new cljs.core.async.t12090(self__.fn1,self__._,self__.meta12088,self__.ch,self__.f,self__.map_LT_,meta12091__$1));
});
cljs.core.async.__GT_t12090 = (function __GT_t12090(fn1__$1,___$2,meta12088__$1,ch__$2,f__$2,map_LT___$2,meta12091){return (new cljs.core.async.t12090(fn1__$1,___$2,meta12088__$1,ch__$2,f__$2,map_LT___$2,meta12091));
});
}
return (new cljs.core.async.t12090(fn1,___$1,self__.meta12088,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12089){var self__ = this;
var _12089__$1 = this;return self__.meta12088;
});
cljs.core.async.t12087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12089,meta12088__$1){var self__ = this;
var _12089__$1 = this;return (new cljs.core.async.t12087(self__.ch,self__.f,self__.map_LT_,meta12088__$1));
});
cljs.core.async.__GT_t12087 = (function __GT_t12087(ch__$1,f__$1,map_LT___$1,meta12088){return (new cljs.core.async.t12087(ch__$1,f__$1,map_LT___$1,meta12088));
});
}
return (new cljs.core.async.t12087(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12096 = (function (ch,f,map_GT_,meta12097){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12097 = meta12097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12096.cljs$lang$type = true;
cljs.core.async.t12096.cljs$lang$ctorStr = "cljs.core.async/t12096";
cljs.core.async.t12096.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12096");
});
cljs.core.async.t12096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12096.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12098){var self__ = this;
var _12098__$1 = this;return self__.meta12097;
});
cljs.core.async.t12096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12098,meta12097__$1){var self__ = this;
var _12098__$1 = this;return (new cljs.core.async.t12096(self__.ch,self__.f,self__.map_GT_,meta12097__$1));
});
cljs.core.async.__GT_t12096 = (function __GT_t12096(ch__$1,f__$1,map_GT___$1,meta12097){return (new cljs.core.async.t12096(ch__$1,f__$1,map_GT___$1,meta12097));
});
}
return (new cljs.core.async.t12096(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12102 = (function (ch,p,filter_GT_,meta12103){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12103 = meta12103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12102.cljs$lang$type = true;
cljs.core.async.t12102.cljs$lang$ctorStr = "cljs.core.async/t12102";
cljs.core.async.t12102.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12102");
});
cljs.core.async.t12102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12102.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12104){var self__ = this;
var _12104__$1 = this;return self__.meta12103;
});
cljs.core.async.t12102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12104,meta12103__$1){var self__ = this;
var _12104__$1 = this;return (new cljs.core.async.t12102(self__.ch,self__.p,self__.filter_GT_,meta12103__$1));
});
cljs.core.async.__GT_t12102 = (function __GT_t12102(ch__$1,p__$1,filter_GT___$1,meta12103){return (new cljs.core.async.t12102(ch__$1,p__$1,filter_GT___$1,meta12103));
});
}
return (new cljs.core.async.t12102(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12166){var state_val_12167 = (state_12166[1]);if((state_val_12167 === 1))
{var state_12166__$1 = state_12166;var statearr_12168_12188 = state_12166__$1;(statearr_12168_12188[2] = null);
(statearr_12168_12188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 2))
{var state_12166__$1 = state_12166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12166__$1,4,ch);
} else
{if((state_val_12167 === 3))
{var inst_12164 = (state_12166[2]);var state_12166__$1 = state_12166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12166__$1,inst_12164);
} else
{if((state_val_12167 === 4))
{var inst_12148 = (state_12166[7]);var inst_12148__$1 = (state_12166[2]);var inst_12149 = (inst_12148__$1 == null);var state_12166__$1 = (function (){var statearr_12169 = state_12166;(statearr_12169[7] = inst_12148__$1);
return statearr_12169;
})();if(cljs.core.truth_(inst_12149))
{var statearr_12170_12189 = state_12166__$1;(statearr_12170_12189[1] = 5);
} else
{var statearr_12171_12190 = state_12166__$1;(statearr_12171_12190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 5))
{var inst_12151 = cljs.core.async.close_BANG_.call(null,out);var state_12166__$1 = state_12166;var statearr_12172_12191 = state_12166__$1;(statearr_12172_12191[2] = inst_12151);
(statearr_12172_12191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 6))
{var inst_12148 = (state_12166[7]);var inst_12153 = p.call(null,inst_12148);var state_12166__$1 = state_12166;if(cljs.core.truth_(inst_12153))
{var statearr_12173_12192 = state_12166__$1;(statearr_12173_12192[1] = 8);
} else
{var statearr_12174_12193 = state_12166__$1;(statearr_12174_12193[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 7))
{var inst_12162 = (state_12166[2]);var state_12166__$1 = state_12166;var statearr_12175_12194 = state_12166__$1;(statearr_12175_12194[2] = inst_12162);
(statearr_12175_12194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 8))
{var inst_12148 = (state_12166[7]);var state_12166__$1 = state_12166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12166__$1,11,out,inst_12148);
} else
{if((state_val_12167 === 9))
{var state_12166__$1 = state_12166;var statearr_12176_12195 = state_12166__$1;(statearr_12176_12195[2] = null);
(statearr_12176_12195[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 10))
{var inst_12159 = (state_12166[2]);var state_12166__$1 = (function (){var statearr_12177 = state_12166;(statearr_12177[8] = inst_12159);
return statearr_12177;
})();var statearr_12178_12196 = state_12166__$1;(statearr_12178_12196[2] = null);
(statearr_12178_12196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 11))
{var inst_12156 = (state_12166[2]);var state_12166__$1 = state_12166;var statearr_12179_12197 = state_12166__$1;(statearr_12179_12197[2] = inst_12156);
(statearr_12179_12197[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12183 = [null,null,null,null,null,null,null,null,null];(statearr_12183[0] = state_machine__5507__auto__);
(statearr_12183[1] = 1);
return statearr_12183;
});
var state_machine__5507__auto____1 = (function (state_12166){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12166);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12184){if((e12184 instanceof Object))
{var ex__5510__auto__ = e12184;var statearr_12185_12198 = state_12166;(statearr_12185_12198[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12199 = state_12166;
state_12166 = G__12199;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12166){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12186 = f__5522__auto__.call(null);(statearr_12186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12187);
return statearr_12186;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12351){var state_val_12352 = (state_12351[1]);if((state_val_12352 === 1))
{var state_12351__$1 = state_12351;var statearr_12353_12390 = state_12351__$1;(statearr_12353_12390[2] = null);
(statearr_12353_12390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 2))
{var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12351__$1,4,in$);
} else
{if((state_val_12352 === 3))
{var inst_12349 = (state_12351[2]);var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12351__$1,inst_12349);
} else
{if((state_val_12352 === 4))
{var inst_12297 = (state_12351[7]);var inst_12297__$1 = (state_12351[2]);var inst_12298 = (inst_12297__$1 == null);var state_12351__$1 = (function (){var statearr_12354 = state_12351;(statearr_12354[7] = inst_12297__$1);
return statearr_12354;
})();if(cljs.core.truth_(inst_12298))
{var statearr_12355_12391 = state_12351__$1;(statearr_12355_12391[1] = 5);
} else
{var statearr_12356_12392 = state_12351__$1;(statearr_12356_12392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 5))
{var inst_12300 = cljs.core.async.close_BANG_.call(null,out);var state_12351__$1 = state_12351;var statearr_12357_12393 = state_12351__$1;(statearr_12357_12393[2] = inst_12300);
(statearr_12357_12393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 6))
{var inst_12297 = (state_12351[7]);var inst_12302 = f.call(null,inst_12297);var inst_12307 = cljs.core.seq.call(null,inst_12302);var inst_12308 = inst_12307;var inst_12309 = null;var inst_12310 = 0;var inst_12311 = 0;var state_12351__$1 = (function (){var statearr_12358 = state_12351;(statearr_12358[8] = inst_12311);
(statearr_12358[9] = inst_12310);
(statearr_12358[10] = inst_12308);
(statearr_12358[11] = inst_12309);
return statearr_12358;
})();var statearr_12359_12394 = state_12351__$1;(statearr_12359_12394[2] = null);
(statearr_12359_12394[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 7))
{var inst_12347 = (state_12351[2]);var state_12351__$1 = state_12351;var statearr_12360_12395 = state_12351__$1;(statearr_12360_12395[2] = inst_12347);
(statearr_12360_12395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 8))
{var inst_12311 = (state_12351[8]);var inst_12310 = (state_12351[9]);var inst_12313 = (inst_12311 < inst_12310);var inst_12314 = inst_12313;var state_12351__$1 = state_12351;if(cljs.core.truth_(inst_12314))
{var statearr_12361_12396 = state_12351__$1;(statearr_12361_12396[1] = 10);
} else
{var statearr_12362_12397 = state_12351__$1;(statearr_12362_12397[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 9))
{var inst_12344 = (state_12351[2]);var state_12351__$1 = (function (){var statearr_12363 = state_12351;(statearr_12363[12] = inst_12344);
return statearr_12363;
})();var statearr_12364_12398 = state_12351__$1;(statearr_12364_12398[2] = null);
(statearr_12364_12398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 10))
{var inst_12311 = (state_12351[8]);var inst_12309 = (state_12351[11]);var inst_12316 = cljs.core._nth.call(null,inst_12309,inst_12311);var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12351__$1,13,out,inst_12316);
} else
{if((state_val_12352 === 11))
{var inst_12308 = (state_12351[10]);var inst_12322 = (state_12351[13]);var inst_12322__$1 = cljs.core.seq.call(null,inst_12308);var state_12351__$1 = (function (){var statearr_12368 = state_12351;(statearr_12368[13] = inst_12322__$1);
return statearr_12368;
})();if(inst_12322__$1)
{var statearr_12369_12399 = state_12351__$1;(statearr_12369_12399[1] = 14);
} else
{var statearr_12370_12400 = state_12351__$1;(statearr_12370_12400[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 12))
{var inst_12342 = (state_12351[2]);var state_12351__$1 = state_12351;var statearr_12371_12401 = state_12351__$1;(statearr_12371_12401[2] = inst_12342);
(statearr_12371_12401[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 13))
{var inst_12311 = (state_12351[8]);var inst_12310 = (state_12351[9]);var inst_12308 = (state_12351[10]);var inst_12309 = (state_12351[11]);var inst_12318 = (state_12351[2]);var inst_12319 = (inst_12311 + 1);var tmp12365 = inst_12310;var tmp12366 = inst_12308;var tmp12367 = inst_12309;var inst_12308__$1 = tmp12366;var inst_12309__$1 = tmp12367;var inst_12310__$1 = tmp12365;var inst_12311__$1 = inst_12319;var state_12351__$1 = (function (){var statearr_12372 = state_12351;(statearr_12372[14] = inst_12318);
(statearr_12372[8] = inst_12311__$1);
(statearr_12372[9] = inst_12310__$1);
(statearr_12372[10] = inst_12308__$1);
(statearr_12372[11] = inst_12309__$1);
return statearr_12372;
})();var statearr_12373_12402 = state_12351__$1;(statearr_12373_12402[2] = null);
(statearr_12373_12402[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 14))
{var inst_12322 = (state_12351[13]);var inst_12324 = cljs.core.chunked_seq_QMARK_.call(null,inst_12322);var state_12351__$1 = state_12351;if(inst_12324)
{var statearr_12374_12403 = state_12351__$1;(statearr_12374_12403[1] = 17);
} else
{var statearr_12375_12404 = state_12351__$1;(statearr_12375_12404[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 15))
{var state_12351__$1 = state_12351;var statearr_12376_12405 = state_12351__$1;(statearr_12376_12405[2] = null);
(statearr_12376_12405[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 16))
{var inst_12340 = (state_12351[2]);var state_12351__$1 = state_12351;var statearr_12377_12406 = state_12351__$1;(statearr_12377_12406[2] = inst_12340);
(statearr_12377_12406[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 17))
{var inst_12322 = (state_12351[13]);var inst_12326 = cljs.core.chunk_first.call(null,inst_12322);var inst_12327 = cljs.core.chunk_rest.call(null,inst_12322);var inst_12328 = cljs.core.count.call(null,inst_12326);var inst_12308 = inst_12327;var inst_12309 = inst_12326;var inst_12310 = inst_12328;var inst_12311 = 0;var state_12351__$1 = (function (){var statearr_12378 = state_12351;(statearr_12378[8] = inst_12311);
(statearr_12378[9] = inst_12310);
(statearr_12378[10] = inst_12308);
(statearr_12378[11] = inst_12309);
return statearr_12378;
})();var statearr_12379_12407 = state_12351__$1;(statearr_12379_12407[2] = null);
(statearr_12379_12407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 18))
{var inst_12322 = (state_12351[13]);var inst_12331 = cljs.core.first.call(null,inst_12322);var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12351__$1,20,out,inst_12331);
} else
{if((state_val_12352 === 19))
{var inst_12337 = (state_12351[2]);var state_12351__$1 = state_12351;var statearr_12380_12408 = state_12351__$1;(statearr_12380_12408[2] = inst_12337);
(statearr_12380_12408[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 20))
{var inst_12322 = (state_12351[13]);var inst_12333 = (state_12351[2]);var inst_12334 = cljs.core.next.call(null,inst_12322);var inst_12308 = inst_12334;var inst_12309 = null;var inst_12310 = 0;var inst_12311 = 0;var state_12351__$1 = (function (){var statearr_12381 = state_12351;(statearr_12381[8] = inst_12311);
(statearr_12381[9] = inst_12310);
(statearr_12381[15] = inst_12333);
(statearr_12381[10] = inst_12308);
(statearr_12381[11] = inst_12309);
return statearr_12381;
})();var statearr_12382_12409 = state_12351__$1;(statearr_12382_12409[2] = null);
(statearr_12382_12409[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12386[0] = state_machine__5507__auto__);
(statearr_12386[1] = 1);
return statearr_12386;
});
var state_machine__5507__auto____1 = (function (state_12351){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12351);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12387){if((e12387 instanceof Object))
{var ex__5510__auto__ = e12387;var statearr_12388_12410 = state_12351;(statearr_12388_12410[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12351);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12411 = state_12351;
state_12351 = G__12411;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12351){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12389 = f__5522__auto__.call(null);(statearr_12389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12389;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12471){var state_val_12472 = (state_12471[1]);if((state_val_12472 === 1))
{var state_12471__$1 = state_12471;var statearr_12473_12493 = state_12471__$1;(statearr_12473_12493[2] = null);
(statearr_12473_12493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12472 === 2))
{var state_12471__$1 = state_12471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12471__$1,4,from);
} else
{if((state_val_12472 === 3))
{var inst_12469 = (state_12471[2]);var state_12471__$1 = state_12471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12471__$1,inst_12469);
} else
{if((state_val_12472 === 4))
{var inst_12454 = (state_12471[7]);var inst_12454__$1 = (state_12471[2]);var inst_12455 = (inst_12454__$1 == null);var state_12471__$1 = (function (){var statearr_12474 = state_12471;(statearr_12474[7] = inst_12454__$1);
return statearr_12474;
})();if(cljs.core.truth_(inst_12455))
{var statearr_12475_12494 = state_12471__$1;(statearr_12475_12494[1] = 5);
} else
{var statearr_12476_12495 = state_12471__$1;(statearr_12476_12495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12472 === 5))
{var state_12471__$1 = state_12471;if(cljs.core.truth_(close_QMARK_))
{var statearr_12477_12496 = state_12471__$1;(statearr_12477_12496[1] = 8);
} else
{var statearr_12478_12497 = state_12471__$1;(statearr_12478_12497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12472 === 6))
{var inst_12454 = (state_12471[7]);var state_12471__$1 = state_12471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12471__$1,11,to,inst_12454);
} else
{if((state_val_12472 === 7))
{var inst_12467 = (state_12471[2]);var state_12471__$1 = state_12471;var statearr_12479_12498 = state_12471__$1;(statearr_12479_12498[2] = inst_12467);
(statearr_12479_12498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12472 === 8))
{var inst_12458 = cljs.core.async.close_BANG_.call(null,to);var state_12471__$1 = state_12471;var statearr_12480_12499 = state_12471__$1;(statearr_12480_12499[2] = inst_12458);
(statearr_12480_12499[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12472 === 9))
{var state_12471__$1 = state_12471;var statearr_12481_12500 = state_12471__$1;(statearr_12481_12500[2] = null);
(statearr_12481_12500[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12472 === 10))
{var inst_12461 = (state_12471[2]);var state_12471__$1 = state_12471;var statearr_12482_12501 = state_12471__$1;(statearr_12482_12501[2] = inst_12461);
(statearr_12482_12501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12472 === 11))
{var inst_12464 = (state_12471[2]);var state_12471__$1 = (function (){var statearr_12483 = state_12471;(statearr_12483[8] = inst_12464);
return statearr_12483;
})();var statearr_12484_12502 = state_12471__$1;(statearr_12484_12502[2] = null);
(statearr_12484_12502[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12488 = [null,null,null,null,null,null,null,null,null];(statearr_12488[0] = state_machine__5507__auto__);
(statearr_12488[1] = 1);
return statearr_12488;
});
var state_machine__5507__auto____1 = (function (state_12471){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12471);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12489){if((e12489 instanceof Object))
{var ex__5510__auto__ = e12489;var statearr_12490_12503 = state_12471;(statearr_12490_12503[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12471);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12504 = state_12471;
state_12471 = G__12504;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12471){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12491 = f__5522__auto__.call(null);(statearr_12491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12492);
return statearr_12491;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12591 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12569){var state_val_12570 = (state_12569[1]);if((state_val_12570 === 1))
{var state_12569__$1 = state_12569;var statearr_12571_12592 = state_12569__$1;(statearr_12571_12592[2] = null);
(statearr_12571_12592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 2))
{var state_12569__$1 = state_12569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12569__$1,4,ch);
} else
{if((state_val_12570 === 3))
{var inst_12567 = (state_12569[2]);var state_12569__$1 = state_12569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12569__$1,inst_12567);
} else
{if((state_val_12570 === 4))
{var inst_12550 = (state_12569[7]);var inst_12550__$1 = (state_12569[2]);var inst_12551 = (inst_12550__$1 == null);var state_12569__$1 = (function (){var statearr_12572 = state_12569;(statearr_12572[7] = inst_12550__$1);
return statearr_12572;
})();if(cljs.core.truth_(inst_12551))
{var statearr_12573_12593 = state_12569__$1;(statearr_12573_12593[1] = 5);
} else
{var statearr_12574_12594 = state_12569__$1;(statearr_12574_12594[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 5))
{var inst_12553 = cljs.core.async.close_BANG_.call(null,tc);var inst_12554 = cljs.core.async.close_BANG_.call(null,fc);var state_12569__$1 = (function (){var statearr_12575 = state_12569;(statearr_12575[8] = inst_12553);
return statearr_12575;
})();var statearr_12576_12595 = state_12569__$1;(statearr_12576_12595[2] = inst_12554);
(statearr_12576_12595[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 6))
{var inst_12550 = (state_12569[7]);var inst_12556 = p.call(null,inst_12550);var state_12569__$1 = state_12569;if(cljs.core.truth_(inst_12556))
{var statearr_12577_12596 = state_12569__$1;(statearr_12577_12596[1] = 9);
} else
{var statearr_12578_12597 = state_12569__$1;(statearr_12578_12597[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 7))
{var inst_12565 = (state_12569[2]);var state_12569__$1 = state_12569;var statearr_12579_12598 = state_12569__$1;(statearr_12579_12598[2] = inst_12565);
(statearr_12579_12598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 8))
{var inst_12562 = (state_12569[2]);var state_12569__$1 = (function (){var statearr_12580 = state_12569;(statearr_12580[9] = inst_12562);
return statearr_12580;
})();var statearr_12581_12599 = state_12569__$1;(statearr_12581_12599[2] = null);
(statearr_12581_12599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 9))
{var state_12569__$1 = state_12569;var statearr_12582_12600 = state_12569__$1;(statearr_12582_12600[2] = tc);
(statearr_12582_12600[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 10))
{var state_12569__$1 = state_12569;var statearr_12583_12601 = state_12569__$1;(statearr_12583_12601[2] = fc);
(statearr_12583_12601[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12570 === 11))
{var inst_12550 = (state_12569[7]);var inst_12560 = (state_12569[2]);var state_12569__$1 = state_12569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12569__$1,8,inst_12560,inst_12550);
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
var state_machine__5507__auto____0 = (function (){var statearr_12587 = [null,null,null,null,null,null,null,null,null,null];(statearr_12587[0] = state_machine__5507__auto__);
(statearr_12587[1] = 1);
return statearr_12587;
});
var state_machine__5507__auto____1 = (function (state_12569){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12588){if((e12588 instanceof Object))
{var ex__5510__auto__ = e12588;var statearr_12589_12602 = state_12569;(statearr_12589_12602[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12603 = state_12569;
state_12569 = G__12603;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12569){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12590 = f__5522__auto__.call(null);(statearr_12590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12591);
return statearr_12590;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12650){var state_val_12651 = (state_12650[1]);if((state_val_12651 === 7))
{var inst_12646 = (state_12650[2]);var state_12650__$1 = state_12650;var statearr_12652_12668 = state_12650__$1;(statearr_12652_12668[2] = inst_12646);
(statearr_12652_12668[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12651 === 6))
{var inst_12639 = (state_12650[7]);var inst_12636 = (state_12650[8]);var inst_12643 = f.call(null,inst_12636,inst_12639);var inst_12636__$1 = inst_12643;var state_12650__$1 = (function (){var statearr_12653 = state_12650;(statearr_12653[8] = inst_12636__$1);
return statearr_12653;
})();var statearr_12654_12669 = state_12650__$1;(statearr_12654_12669[2] = null);
(statearr_12654_12669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12651 === 5))
{var inst_12636 = (state_12650[8]);var state_12650__$1 = state_12650;var statearr_12655_12670 = state_12650__$1;(statearr_12655_12670[2] = inst_12636);
(statearr_12655_12670[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12651 === 4))
{var inst_12639 = (state_12650[7]);var inst_12639__$1 = (state_12650[2]);var inst_12640 = (inst_12639__$1 == null);var state_12650__$1 = (function (){var statearr_12656 = state_12650;(statearr_12656[7] = inst_12639__$1);
return statearr_12656;
})();if(cljs.core.truth_(inst_12640))
{var statearr_12657_12671 = state_12650__$1;(statearr_12657_12671[1] = 5);
} else
{var statearr_12658_12672 = state_12650__$1;(statearr_12658_12672[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12651 === 3))
{var inst_12648 = (state_12650[2]);var state_12650__$1 = state_12650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12650__$1,inst_12648);
} else
{if((state_val_12651 === 2))
{var state_12650__$1 = state_12650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12650__$1,4,ch);
} else
{if((state_val_12651 === 1))
{var inst_12636 = init;var state_12650__$1 = (function (){var statearr_12659 = state_12650;(statearr_12659[8] = inst_12636);
return statearr_12659;
})();var statearr_12660_12673 = state_12650__$1;(statearr_12660_12673[2] = null);
(statearr_12660_12673[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12664 = [null,null,null,null,null,null,null,null,null];(statearr_12664[0] = state_machine__5507__auto__);
(statearr_12664[1] = 1);
return statearr_12664;
});
var state_machine__5507__auto____1 = (function (state_12650){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12650);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12665){if((e12665 instanceof Object))
{var ex__5510__auto__ = e12665;var statearr_12666_12674 = state_12650;(statearr_12666_12674[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12650);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12675 = state_12650;
state_12650 = G__12675;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12650){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12667 = f__5522__auto__.call(null);(statearr_12667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12667;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12737){var state_val_12738 = (state_12737[1]);if((state_val_12738 === 1))
{var inst_12717 = cljs.core.seq.call(null,coll);var inst_12718 = inst_12717;var state_12737__$1 = (function (){var statearr_12739 = state_12737;(statearr_12739[7] = inst_12718);
return statearr_12739;
})();var statearr_12740_12758 = state_12737__$1;(statearr_12740_12758[2] = null);
(statearr_12740_12758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12738 === 2))
{var inst_12718 = (state_12737[7]);var state_12737__$1 = state_12737;if(cljs.core.truth_(inst_12718))
{var statearr_12741_12759 = state_12737__$1;(statearr_12741_12759[1] = 4);
} else
{var statearr_12742_12760 = state_12737__$1;(statearr_12742_12760[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12738 === 3))
{var inst_12735 = (state_12737[2]);var state_12737__$1 = state_12737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12737__$1,inst_12735);
} else
{if((state_val_12738 === 4))
{var inst_12718 = (state_12737[7]);var inst_12721 = cljs.core.first.call(null,inst_12718);var state_12737__$1 = state_12737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12737__$1,7,ch,inst_12721);
} else
{if((state_val_12738 === 5))
{var state_12737__$1 = state_12737;if(cljs.core.truth_(close_QMARK_))
{var statearr_12743_12761 = state_12737__$1;(statearr_12743_12761[1] = 8);
} else
{var statearr_12744_12762 = state_12737__$1;(statearr_12744_12762[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12738 === 6))
{var inst_12733 = (state_12737[2]);var state_12737__$1 = state_12737;var statearr_12745_12763 = state_12737__$1;(statearr_12745_12763[2] = inst_12733);
(statearr_12745_12763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12738 === 7))
{var inst_12718 = (state_12737[7]);var inst_12723 = (state_12737[2]);var inst_12724 = cljs.core.next.call(null,inst_12718);var inst_12718__$1 = inst_12724;var state_12737__$1 = (function (){var statearr_12746 = state_12737;(statearr_12746[7] = inst_12718__$1);
(statearr_12746[8] = inst_12723);
return statearr_12746;
})();var statearr_12747_12764 = state_12737__$1;(statearr_12747_12764[2] = null);
(statearr_12747_12764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12738 === 8))
{var inst_12728 = cljs.core.async.close_BANG_.call(null,ch);var state_12737__$1 = state_12737;var statearr_12748_12765 = state_12737__$1;(statearr_12748_12765[2] = inst_12728);
(statearr_12748_12765[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12738 === 9))
{var state_12737__$1 = state_12737;var statearr_12749_12766 = state_12737__$1;(statearr_12749_12766[2] = null);
(statearr_12749_12766[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12738 === 10))
{var inst_12731 = (state_12737[2]);var state_12737__$1 = state_12737;var statearr_12750_12767 = state_12737__$1;(statearr_12750_12767[2] = inst_12731);
(statearr_12750_12767[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12754 = [null,null,null,null,null,null,null,null,null];(statearr_12754[0] = state_machine__5507__auto__);
(statearr_12754[1] = 1);
return statearr_12754;
});
var state_machine__5507__auto____1 = (function (state_12737){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12755){if((e12755 instanceof Object))
{var ex__5510__auto__ = e12755;var statearr_12756_12768 = state_12737;(statearr_12756_12768[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12769 = state_12737;
state_12737 = G__12769;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12737){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12757 = f__5522__auto__.call(null);(statearr_12757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12757;
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
cljs.core.async.Mux = (function (){var obj12771 = {};return obj12771;
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
cljs.core.async.Mult = (function (){var obj12773 = {};return obj12773;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12997 = (function (cs,ch,mult,meta12998){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12998 = meta12998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12997.cljs$lang$type = true;
cljs.core.async.t12997.cljs$lang$ctorStr = "cljs.core.async/t12997";
cljs.core.async.t12997.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12997");
});})(cs))
;
cljs.core.async.t12997.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12997.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12997.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12997.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12997.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12999){var self__ = this;
var _12999__$1 = this;return self__.meta12998;
});})(cs))
;
cljs.core.async.t12997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12999,meta12998__$1){var self__ = this;
var _12999__$1 = this;return (new cljs.core.async.t12997(self__.cs,self__.ch,self__.mult,meta12998__$1));
});})(cs))
;
cljs.core.async.__GT_t12997 = ((function (cs){
return (function __GT_t12997(cs__$1,ch__$1,mult__$1,meta12998){return (new cljs.core.async.t12997(cs__$1,ch__$1,mult__$1,meta12998));
});})(cs))
;
}
return (new cljs.core.async.t12997(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13134){var state_val_13135 = (state_13134[1]);if((state_val_13135 === 32))
{var inst_13078 = (state_13134[7]);var inst_13002 = (state_13134[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13134,31,Object,null,30);var inst_13085 = cljs.core.async.put_BANG_.call(null,inst_13078,inst_13002,done);var state_13134__$1 = state_13134;var statearr_13136_13221 = state_13134__$1;(statearr_13136_13221[2] = inst_13085);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13134__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 1))
{var state_13134__$1 = state_13134;var statearr_13137_13222 = state_13134__$1;(statearr_13137_13222[2] = null);
(statearr_13137_13222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 33))
{var inst_13091 = (state_13134[9]);var inst_13093 = cljs.core.chunked_seq_QMARK_.call(null,inst_13091);var state_13134__$1 = state_13134;if(inst_13093)
{var statearr_13138_13223 = state_13134__$1;(statearr_13138_13223[1] = 36);
} else
{var statearr_13139_13224 = state_13134__$1;(statearr_13139_13224[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 2))
{var state_13134__$1 = state_13134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13134__$1,4,ch);
} else
{if((state_val_13135 === 34))
{var state_13134__$1 = state_13134;var statearr_13140_13225 = state_13134__$1;(statearr_13140_13225[2] = null);
(statearr_13140_13225[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 3))
{var inst_13132 = (state_13134[2]);var state_13134__$1 = state_13134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13134__$1,inst_13132);
} else
{if((state_val_13135 === 35))
{var inst_13116 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13141_13226 = state_13134__$1;(statearr_13141_13226[2] = inst_13116);
(statearr_13141_13226[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 4))
{var inst_13002 = (state_13134[8]);var inst_13002__$1 = (state_13134[2]);var inst_13003 = (inst_13002__$1 == null);var state_13134__$1 = (function (){var statearr_13142 = state_13134;(statearr_13142[8] = inst_13002__$1);
return statearr_13142;
})();if(cljs.core.truth_(inst_13003))
{var statearr_13143_13227 = state_13134__$1;(statearr_13143_13227[1] = 5);
} else
{var statearr_13144_13228 = state_13134__$1;(statearr_13144_13228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 36))
{var inst_13091 = (state_13134[9]);var inst_13095 = cljs.core.chunk_first.call(null,inst_13091);var inst_13096 = cljs.core.chunk_rest.call(null,inst_13091);var inst_13097 = cljs.core.count.call(null,inst_13095);var inst_13070 = inst_13096;var inst_13071 = inst_13095;var inst_13072 = inst_13097;var inst_13073 = 0;var state_13134__$1 = (function (){var statearr_13145 = state_13134;(statearr_13145[10] = inst_13073);
(statearr_13145[11] = inst_13072);
(statearr_13145[12] = inst_13070);
(statearr_13145[13] = inst_13071);
return statearr_13145;
})();var statearr_13146_13229 = state_13134__$1;(statearr_13146_13229[2] = null);
(statearr_13146_13229[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 5))
{var inst_13009 = cljs.core.deref.call(null,cs);var inst_13010 = cljs.core.seq.call(null,inst_13009);var inst_13011 = inst_13010;var inst_13012 = null;var inst_13013 = 0;var inst_13014 = 0;var state_13134__$1 = (function (){var statearr_13147 = state_13134;(statearr_13147[14] = inst_13012);
(statearr_13147[15] = inst_13013);
(statearr_13147[16] = inst_13011);
(statearr_13147[17] = inst_13014);
return statearr_13147;
})();var statearr_13148_13230 = state_13134__$1;(statearr_13148_13230[2] = null);
(statearr_13148_13230[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 37))
{var inst_13091 = (state_13134[9]);var inst_13100 = cljs.core.first.call(null,inst_13091);var state_13134__$1 = (function (){var statearr_13149 = state_13134;(statearr_13149[18] = inst_13100);
return statearr_13149;
})();var statearr_13150_13231 = state_13134__$1;(statearr_13150_13231[2] = null);
(statearr_13150_13231[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 6))
{var inst_13062 = (state_13134[19]);var inst_13061 = cljs.core.deref.call(null,cs);var inst_13062__$1 = cljs.core.keys.call(null,inst_13061);var inst_13063 = cljs.core.count.call(null,inst_13062__$1);var inst_13064 = cljs.core.reset_BANG_.call(null,dctr,inst_13063);var inst_13069 = cljs.core.seq.call(null,inst_13062__$1);var inst_13070 = inst_13069;var inst_13071 = null;var inst_13072 = 0;var inst_13073 = 0;var state_13134__$1 = (function (){var statearr_13151 = state_13134;(statearr_13151[10] = inst_13073);
(statearr_13151[11] = inst_13072);
(statearr_13151[12] = inst_13070);
(statearr_13151[13] = inst_13071);
(statearr_13151[19] = inst_13062__$1);
(statearr_13151[20] = inst_13064);
return statearr_13151;
})();var statearr_13152_13232 = state_13134__$1;(statearr_13152_13232[2] = null);
(statearr_13152_13232[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 38))
{var inst_13113 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13153_13233 = state_13134__$1;(statearr_13153_13233[2] = inst_13113);
(statearr_13153_13233[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 7))
{var inst_13130 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13154_13234 = state_13134__$1;(statearr_13154_13234[2] = inst_13130);
(statearr_13154_13234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 39))
{var inst_13091 = (state_13134[9]);var inst_13109 = (state_13134[2]);var inst_13110 = cljs.core.next.call(null,inst_13091);var inst_13070 = inst_13110;var inst_13071 = null;var inst_13072 = 0;var inst_13073 = 0;var state_13134__$1 = (function (){var statearr_13155 = state_13134;(statearr_13155[10] = inst_13073);
(statearr_13155[11] = inst_13072);
(statearr_13155[21] = inst_13109);
(statearr_13155[12] = inst_13070);
(statearr_13155[13] = inst_13071);
return statearr_13155;
})();var statearr_13156_13235 = state_13134__$1;(statearr_13156_13235[2] = null);
(statearr_13156_13235[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 8))
{var inst_13013 = (state_13134[15]);var inst_13014 = (state_13134[17]);var inst_13016 = (inst_13014 < inst_13013);var inst_13017 = inst_13016;var state_13134__$1 = state_13134;if(cljs.core.truth_(inst_13017))
{var statearr_13157_13236 = state_13134__$1;(statearr_13157_13236[1] = 10);
} else
{var statearr_13158_13237 = state_13134__$1;(statearr_13158_13237[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 40))
{var inst_13100 = (state_13134[18]);var inst_13101 = (state_13134[2]);var inst_13102 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13103 = cljs.core.async.untap_STAR_.call(null,m,inst_13100);var state_13134__$1 = (function (){var statearr_13159 = state_13134;(statearr_13159[22] = inst_13102);
(statearr_13159[23] = inst_13101);
return statearr_13159;
})();var statearr_13160_13238 = state_13134__$1;(statearr_13160_13238[2] = inst_13103);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13134__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 9))
{var inst_13059 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13161_13239 = state_13134__$1;(statearr_13161_13239[2] = inst_13059);
(statearr_13161_13239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 41))
{var inst_13002 = (state_13134[8]);var inst_13100 = (state_13134[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13134,40,Object,null,39);var inst_13107 = cljs.core.async.put_BANG_.call(null,inst_13100,inst_13002,done);var state_13134__$1 = state_13134;var statearr_13162_13240 = state_13134__$1;(statearr_13162_13240[2] = inst_13107);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13134__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 10))
{var inst_13012 = (state_13134[14]);var inst_13014 = (state_13134[17]);var inst_13020 = cljs.core._nth.call(null,inst_13012,inst_13014);var inst_13021 = cljs.core.nth.call(null,inst_13020,0,null);var inst_13022 = cljs.core.nth.call(null,inst_13020,1,null);var state_13134__$1 = (function (){var statearr_13163 = state_13134;(statearr_13163[24] = inst_13021);
return statearr_13163;
})();if(cljs.core.truth_(inst_13022))
{var statearr_13164_13241 = state_13134__$1;(statearr_13164_13241[1] = 13);
} else
{var statearr_13165_13242 = state_13134__$1;(statearr_13165_13242[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 42))
{var state_13134__$1 = state_13134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13134__$1,45,dchan);
} else
{if((state_val_13135 === 11))
{var inst_13031 = (state_13134[25]);var inst_13011 = (state_13134[16]);var inst_13031__$1 = cljs.core.seq.call(null,inst_13011);var state_13134__$1 = (function (){var statearr_13166 = state_13134;(statearr_13166[25] = inst_13031__$1);
return statearr_13166;
})();if(inst_13031__$1)
{var statearr_13167_13243 = state_13134__$1;(statearr_13167_13243[1] = 16);
} else
{var statearr_13168_13244 = state_13134__$1;(statearr_13168_13244[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 43))
{var state_13134__$1 = state_13134;var statearr_13169_13245 = state_13134__$1;(statearr_13169_13245[2] = null);
(statearr_13169_13245[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 12))
{var inst_13057 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13170_13246 = state_13134__$1;(statearr_13170_13246[2] = inst_13057);
(statearr_13170_13246[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 44))
{var inst_13127 = (state_13134[2]);var state_13134__$1 = (function (){var statearr_13171 = state_13134;(statearr_13171[26] = inst_13127);
return statearr_13171;
})();var statearr_13172_13247 = state_13134__$1;(statearr_13172_13247[2] = null);
(statearr_13172_13247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 13))
{var inst_13021 = (state_13134[24]);var inst_13024 = cljs.core.async.close_BANG_.call(null,inst_13021);var state_13134__$1 = state_13134;var statearr_13173_13248 = state_13134__$1;(statearr_13173_13248[2] = inst_13024);
(statearr_13173_13248[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 45))
{var inst_13124 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13177_13249 = state_13134__$1;(statearr_13177_13249[2] = inst_13124);
(statearr_13177_13249[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 14))
{var state_13134__$1 = state_13134;var statearr_13178_13250 = state_13134__$1;(statearr_13178_13250[2] = null);
(statearr_13178_13250[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 15))
{var inst_13012 = (state_13134[14]);var inst_13013 = (state_13134[15]);var inst_13011 = (state_13134[16]);var inst_13014 = (state_13134[17]);var inst_13027 = (state_13134[2]);var inst_13028 = (inst_13014 + 1);var tmp13174 = inst_13012;var tmp13175 = inst_13013;var tmp13176 = inst_13011;var inst_13011__$1 = tmp13176;var inst_13012__$1 = tmp13174;var inst_13013__$1 = tmp13175;var inst_13014__$1 = inst_13028;var state_13134__$1 = (function (){var statearr_13179 = state_13134;(statearr_13179[14] = inst_13012__$1);
(statearr_13179[15] = inst_13013__$1);
(statearr_13179[16] = inst_13011__$1);
(statearr_13179[27] = inst_13027);
(statearr_13179[17] = inst_13014__$1);
return statearr_13179;
})();var statearr_13180_13251 = state_13134__$1;(statearr_13180_13251[2] = null);
(statearr_13180_13251[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 16))
{var inst_13031 = (state_13134[25]);var inst_13033 = cljs.core.chunked_seq_QMARK_.call(null,inst_13031);var state_13134__$1 = state_13134;if(inst_13033)
{var statearr_13181_13252 = state_13134__$1;(statearr_13181_13252[1] = 19);
} else
{var statearr_13182_13253 = state_13134__$1;(statearr_13182_13253[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 17))
{var state_13134__$1 = state_13134;var statearr_13183_13254 = state_13134__$1;(statearr_13183_13254[2] = null);
(statearr_13183_13254[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 18))
{var inst_13055 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13184_13255 = state_13134__$1;(statearr_13184_13255[2] = inst_13055);
(statearr_13184_13255[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 19))
{var inst_13031 = (state_13134[25]);var inst_13035 = cljs.core.chunk_first.call(null,inst_13031);var inst_13036 = cljs.core.chunk_rest.call(null,inst_13031);var inst_13037 = cljs.core.count.call(null,inst_13035);var inst_13011 = inst_13036;var inst_13012 = inst_13035;var inst_13013 = inst_13037;var inst_13014 = 0;var state_13134__$1 = (function (){var statearr_13185 = state_13134;(statearr_13185[14] = inst_13012);
(statearr_13185[15] = inst_13013);
(statearr_13185[16] = inst_13011);
(statearr_13185[17] = inst_13014);
return statearr_13185;
})();var statearr_13186_13256 = state_13134__$1;(statearr_13186_13256[2] = null);
(statearr_13186_13256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 20))
{var inst_13031 = (state_13134[25]);var inst_13041 = cljs.core.first.call(null,inst_13031);var inst_13042 = cljs.core.nth.call(null,inst_13041,0,null);var inst_13043 = cljs.core.nth.call(null,inst_13041,1,null);var state_13134__$1 = (function (){var statearr_13187 = state_13134;(statearr_13187[28] = inst_13042);
return statearr_13187;
})();if(cljs.core.truth_(inst_13043))
{var statearr_13188_13257 = state_13134__$1;(statearr_13188_13257[1] = 22);
} else
{var statearr_13189_13258 = state_13134__$1;(statearr_13189_13258[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 21))
{var inst_13052 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13190_13259 = state_13134__$1;(statearr_13190_13259[2] = inst_13052);
(statearr_13190_13259[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 22))
{var inst_13042 = (state_13134[28]);var inst_13045 = cljs.core.async.close_BANG_.call(null,inst_13042);var state_13134__$1 = state_13134;var statearr_13191_13260 = state_13134__$1;(statearr_13191_13260[2] = inst_13045);
(statearr_13191_13260[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 23))
{var state_13134__$1 = state_13134;var statearr_13192_13261 = state_13134__$1;(statearr_13192_13261[2] = null);
(statearr_13192_13261[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 24))
{var inst_13031 = (state_13134[25]);var inst_13048 = (state_13134[2]);var inst_13049 = cljs.core.next.call(null,inst_13031);var inst_13011 = inst_13049;var inst_13012 = null;var inst_13013 = 0;var inst_13014 = 0;var state_13134__$1 = (function (){var statearr_13193 = state_13134;(statearr_13193[29] = inst_13048);
(statearr_13193[14] = inst_13012);
(statearr_13193[15] = inst_13013);
(statearr_13193[16] = inst_13011);
(statearr_13193[17] = inst_13014);
return statearr_13193;
})();var statearr_13194_13262 = state_13134__$1;(statearr_13194_13262[2] = null);
(statearr_13194_13262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 25))
{var inst_13073 = (state_13134[10]);var inst_13072 = (state_13134[11]);var inst_13075 = (inst_13073 < inst_13072);var inst_13076 = inst_13075;var state_13134__$1 = state_13134;if(cljs.core.truth_(inst_13076))
{var statearr_13195_13263 = state_13134__$1;(statearr_13195_13263[1] = 27);
} else
{var statearr_13196_13264 = state_13134__$1;(statearr_13196_13264[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 26))
{var inst_13062 = (state_13134[19]);var inst_13120 = (state_13134[2]);var inst_13121 = cljs.core.seq.call(null,inst_13062);var state_13134__$1 = (function (){var statearr_13197 = state_13134;(statearr_13197[30] = inst_13120);
return statearr_13197;
})();if(inst_13121)
{var statearr_13198_13265 = state_13134__$1;(statearr_13198_13265[1] = 42);
} else
{var statearr_13199_13266 = state_13134__$1;(statearr_13199_13266[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 27))
{var inst_13073 = (state_13134[10]);var inst_13071 = (state_13134[13]);var inst_13078 = cljs.core._nth.call(null,inst_13071,inst_13073);var state_13134__$1 = (function (){var statearr_13200 = state_13134;(statearr_13200[7] = inst_13078);
return statearr_13200;
})();var statearr_13201_13267 = state_13134__$1;(statearr_13201_13267[2] = null);
(statearr_13201_13267[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 28))
{var inst_13091 = (state_13134[9]);var inst_13070 = (state_13134[12]);var inst_13091__$1 = cljs.core.seq.call(null,inst_13070);var state_13134__$1 = (function (){var statearr_13205 = state_13134;(statearr_13205[9] = inst_13091__$1);
return statearr_13205;
})();if(inst_13091__$1)
{var statearr_13206_13268 = state_13134__$1;(statearr_13206_13268[1] = 33);
} else
{var statearr_13207_13269 = state_13134__$1;(statearr_13207_13269[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 29))
{var inst_13118 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13208_13270 = state_13134__$1;(statearr_13208_13270[2] = inst_13118);
(statearr_13208_13270[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 30))
{var inst_13073 = (state_13134[10]);var inst_13072 = (state_13134[11]);var inst_13070 = (state_13134[12]);var inst_13071 = (state_13134[13]);var inst_13087 = (state_13134[2]);var inst_13088 = (inst_13073 + 1);var tmp13202 = inst_13072;var tmp13203 = inst_13070;var tmp13204 = inst_13071;var inst_13070__$1 = tmp13203;var inst_13071__$1 = tmp13204;var inst_13072__$1 = tmp13202;var inst_13073__$1 = inst_13088;var state_13134__$1 = (function (){var statearr_13209 = state_13134;(statearr_13209[10] = inst_13073__$1);
(statearr_13209[11] = inst_13072__$1);
(statearr_13209[31] = inst_13087);
(statearr_13209[12] = inst_13070__$1);
(statearr_13209[13] = inst_13071__$1);
return statearr_13209;
})();var statearr_13210_13271 = state_13134__$1;(statearr_13210_13271[2] = null);
(statearr_13210_13271[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 31))
{var inst_13078 = (state_13134[7]);var inst_13079 = (state_13134[2]);var inst_13080 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13081 = cljs.core.async.untap_STAR_.call(null,m,inst_13078);var state_13134__$1 = (function (){var statearr_13211 = state_13134;(statearr_13211[32] = inst_13079);
(statearr_13211[33] = inst_13080);
return statearr_13211;
})();var statearr_13212_13272 = state_13134__$1;(statearr_13212_13272[2] = inst_13081);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13134__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13216[0] = state_machine__5507__auto__);
(statearr_13216[1] = 1);
return statearr_13216;
});
var state_machine__5507__auto____1 = (function (state_13134){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13134);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13217){if((e13217 instanceof Object))
{var ex__5510__auto__ = e13217;var statearr_13218_13273 = state_13134;(statearr_13218_13273[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13274 = state_13134;
state_13134 = G__13274;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13134){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13219 = f__5522__auto__.call(null);(statearr_13219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13220);
return statearr_13219;
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
cljs.core.async.Mix = (function (){var obj13276 = {};return obj13276;
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
;var m = (function (){if(typeof cljs.core.async.t13386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13386 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13387){
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
this.meta13387 = meta13387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13386.cljs$lang$type = true;
cljs.core.async.t13386.cljs$lang$ctorStr = "cljs.core.async/t13386";
cljs.core.async.t13386.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13386");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13386.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13388){var self__ = this;
var _13388__$1 = this;return self__.meta13387;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13388,meta13387__$1){var self__ = this;
var _13388__$1 = this;return (new cljs.core.async.t13386(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13387__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13386 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13386(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13387){return (new cljs.core.async.t13386(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13387));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13386(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13495 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13453){var state_val_13454 = (state_13453[1]);if((state_val_13454 === 1))
{var inst_13392 = (state_13453[7]);var inst_13392__$1 = calc_state.call(null);var inst_13393 = cljs.core.seq_QMARK_.call(null,inst_13392__$1);var state_13453__$1 = (function (){var statearr_13455 = state_13453;(statearr_13455[7] = inst_13392__$1);
return statearr_13455;
})();if(inst_13393)
{var statearr_13456_13496 = state_13453__$1;(statearr_13456_13496[1] = 2);
} else
{var statearr_13457_13497 = state_13453__$1;(statearr_13457_13497[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 2))
{var inst_13392 = (state_13453[7]);var inst_13395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13392);var state_13453__$1 = state_13453;var statearr_13458_13498 = state_13453__$1;(statearr_13458_13498[2] = inst_13395);
(statearr_13458_13498[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 3))
{var inst_13392 = (state_13453[7]);var state_13453__$1 = state_13453;var statearr_13459_13499 = state_13453__$1;(statearr_13459_13499[2] = inst_13392);
(statearr_13459_13499[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 4))
{var inst_13392 = (state_13453[7]);var inst_13398 = (state_13453[2]);var inst_13399 = cljs.core.get.call(null,inst_13398,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13400 = cljs.core.get.call(null,inst_13398,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13401 = cljs.core.get.call(null,inst_13398,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13402 = inst_13392;var state_13453__$1 = (function (){var statearr_13460 = state_13453;(statearr_13460[8] = inst_13402);
(statearr_13460[9] = inst_13401);
(statearr_13460[10] = inst_13400);
(statearr_13460[11] = inst_13399);
return statearr_13460;
})();var statearr_13461_13500 = state_13453__$1;(statearr_13461_13500[2] = null);
(statearr_13461_13500[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 5))
{var inst_13402 = (state_13453[8]);var inst_13405 = cljs.core.seq_QMARK_.call(null,inst_13402);var state_13453__$1 = state_13453;if(inst_13405)
{var statearr_13462_13501 = state_13453__$1;(statearr_13462_13501[1] = 7);
} else
{var statearr_13463_13502 = state_13453__$1;(statearr_13463_13502[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 6))
{var inst_13451 = (state_13453[2]);var state_13453__$1 = state_13453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13453__$1,inst_13451);
} else
{if((state_val_13454 === 7))
{var inst_13402 = (state_13453[8]);var inst_13407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13402);var state_13453__$1 = state_13453;var statearr_13464_13503 = state_13453__$1;(statearr_13464_13503[2] = inst_13407);
(statearr_13464_13503[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 8))
{var inst_13402 = (state_13453[8]);var state_13453__$1 = state_13453;var statearr_13465_13504 = state_13453__$1;(statearr_13465_13504[2] = inst_13402);
(statearr_13465_13504[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 9))
{var inst_13410 = (state_13453[12]);var inst_13410__$1 = (state_13453[2]);var inst_13411 = cljs.core.get.call(null,inst_13410__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13412 = cljs.core.get.call(null,inst_13410__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13413 = cljs.core.get.call(null,inst_13410__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13453__$1 = (function (){var statearr_13466 = state_13453;(statearr_13466[13] = inst_13413);
(statearr_13466[14] = inst_13412);
(statearr_13466[12] = inst_13410__$1);
return statearr_13466;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13453__$1,10,inst_13411);
} else
{if((state_val_13454 === 10))
{var inst_13418 = (state_13453[15]);var inst_13417 = (state_13453[16]);var inst_13416 = (state_13453[2]);var inst_13417__$1 = cljs.core.nth.call(null,inst_13416,0,null);var inst_13418__$1 = cljs.core.nth.call(null,inst_13416,1,null);var inst_13419 = (inst_13417__$1 == null);var inst_13420 = cljs.core._EQ_.call(null,inst_13418__$1,change);var inst_13421 = (inst_13419) || (inst_13420);var state_13453__$1 = (function (){var statearr_13467 = state_13453;(statearr_13467[15] = inst_13418__$1);
(statearr_13467[16] = inst_13417__$1);
return statearr_13467;
})();if(cljs.core.truth_(inst_13421))
{var statearr_13468_13505 = state_13453__$1;(statearr_13468_13505[1] = 11);
} else
{var statearr_13469_13506 = state_13453__$1;(statearr_13469_13506[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 11))
{var inst_13417 = (state_13453[16]);var inst_13423 = (inst_13417 == null);var state_13453__$1 = state_13453;if(cljs.core.truth_(inst_13423))
{var statearr_13470_13507 = state_13453__$1;(statearr_13470_13507[1] = 14);
} else
{var statearr_13471_13508 = state_13453__$1;(statearr_13471_13508[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 12))
{var inst_13418 = (state_13453[15]);var inst_13432 = (state_13453[17]);var inst_13413 = (state_13453[13]);var inst_13432__$1 = inst_13413.call(null,inst_13418);var state_13453__$1 = (function (){var statearr_13472 = state_13453;(statearr_13472[17] = inst_13432__$1);
return statearr_13472;
})();if(cljs.core.truth_(inst_13432__$1))
{var statearr_13473_13509 = state_13453__$1;(statearr_13473_13509[1] = 17);
} else
{var statearr_13474_13510 = state_13453__$1;(statearr_13474_13510[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 13))
{var inst_13449 = (state_13453[2]);var state_13453__$1 = state_13453;var statearr_13475_13511 = state_13453__$1;(statearr_13475_13511[2] = inst_13449);
(statearr_13475_13511[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 14))
{var inst_13418 = (state_13453[15]);var inst_13425 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13418);var state_13453__$1 = state_13453;var statearr_13476_13512 = state_13453__$1;(statearr_13476_13512[2] = inst_13425);
(statearr_13476_13512[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 15))
{var state_13453__$1 = state_13453;var statearr_13477_13513 = state_13453__$1;(statearr_13477_13513[2] = null);
(statearr_13477_13513[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 16))
{var inst_13428 = (state_13453[2]);var inst_13429 = calc_state.call(null);var inst_13402 = inst_13429;var state_13453__$1 = (function (){var statearr_13478 = state_13453;(statearr_13478[8] = inst_13402);
(statearr_13478[18] = inst_13428);
return statearr_13478;
})();var statearr_13479_13514 = state_13453__$1;(statearr_13479_13514[2] = null);
(statearr_13479_13514[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 17))
{var inst_13432 = (state_13453[17]);var state_13453__$1 = state_13453;var statearr_13480_13515 = state_13453__$1;(statearr_13480_13515[2] = inst_13432);
(statearr_13480_13515[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 18))
{var inst_13418 = (state_13453[15]);var inst_13413 = (state_13453[13]);var inst_13412 = (state_13453[14]);var inst_13435 = cljs.core.empty_QMARK_.call(null,inst_13413);var inst_13436 = inst_13412.call(null,inst_13418);var inst_13437 = cljs.core.not.call(null,inst_13436);var inst_13438 = (inst_13435) && (inst_13437);var state_13453__$1 = state_13453;var statearr_13481_13516 = state_13453__$1;(statearr_13481_13516[2] = inst_13438);
(statearr_13481_13516[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 19))
{var inst_13440 = (state_13453[2]);var state_13453__$1 = state_13453;if(cljs.core.truth_(inst_13440))
{var statearr_13482_13517 = state_13453__$1;(statearr_13482_13517[1] = 20);
} else
{var statearr_13483_13518 = state_13453__$1;(statearr_13483_13518[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 20))
{var inst_13417 = (state_13453[16]);var state_13453__$1 = state_13453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13453__$1,23,out,inst_13417);
} else
{if((state_val_13454 === 21))
{var state_13453__$1 = state_13453;var statearr_13484_13519 = state_13453__$1;(statearr_13484_13519[2] = null);
(statearr_13484_13519[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 22))
{var inst_13410 = (state_13453[12]);var inst_13446 = (state_13453[2]);var inst_13402 = inst_13410;var state_13453__$1 = (function (){var statearr_13485 = state_13453;(statearr_13485[19] = inst_13446);
(statearr_13485[8] = inst_13402);
return statearr_13485;
})();var statearr_13486_13520 = state_13453__$1;(statearr_13486_13520[2] = null);
(statearr_13486_13520[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 23))
{var inst_13443 = (state_13453[2]);var state_13453__$1 = state_13453;var statearr_13487_13521 = state_13453__$1;(statearr_13487_13521[2] = inst_13443);
(statearr_13487_13521[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13491[0] = state_machine__5507__auto__);
(statearr_13491[1] = 1);
return statearr_13491;
});
var state_machine__5507__auto____1 = (function (state_13453){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13492){if((e13492 instanceof Object))
{var ex__5510__auto__ = e13492;var statearr_13493_13522 = state_13453;(statearr_13493_13522[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13523 = state_13453;
state_13453 = G__13523;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13453){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13494 = f__5522__auto__.call(null);(statearr_13494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13495);
return statearr_13494;
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
cljs.core.async.Pub = (function (){var obj13525 = {};return obj13525;
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
return (function (p1__13526_SHARP_){if(cljs.core.truth_(p1__13526_SHARP_.call(null,topic)))
{return p1__13526_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13526_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13651 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13652){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13652 = meta13652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13651.cljs$lang$type = true;
cljs.core.async.t13651.cljs$lang$ctorStr = "cljs.core.async/t13651";
cljs.core.async.t13651.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13651");
});})(mults,ensure_mult))
;
cljs.core.async.t13651.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13651.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13651.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13651.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13653){var self__ = this;
var _13653__$1 = this;return self__.meta13652;
});})(mults,ensure_mult))
;
cljs.core.async.t13651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13653,meta13652__$1){var self__ = this;
var _13653__$1 = this;return (new cljs.core.async.t13651(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13652__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13651 = ((function (mults,ensure_mult){
return (function __GT_t13651(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13652){return (new cljs.core.async.t13651(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13652));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13651(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13727){var state_val_13728 = (state_13727[1]);if((state_val_13728 === 1))
{var state_13727__$1 = state_13727;var statearr_13729_13776 = state_13727__$1;(statearr_13729_13776[2] = null);
(statearr_13729_13776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 2))
{var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13727__$1,4,ch);
} else
{if((state_val_13728 === 3))
{var inst_13725 = (state_13727[2]);var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13727__$1,inst_13725);
} else
{if((state_val_13728 === 4))
{var inst_13656 = (state_13727[7]);var inst_13656__$1 = (state_13727[2]);var inst_13657 = (inst_13656__$1 == null);var state_13727__$1 = (function (){var statearr_13730 = state_13727;(statearr_13730[7] = inst_13656__$1);
return statearr_13730;
})();if(cljs.core.truth_(inst_13657))
{var statearr_13731_13777 = state_13727__$1;(statearr_13731_13777[1] = 5);
} else
{var statearr_13732_13778 = state_13727__$1;(statearr_13732_13778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 5))
{var inst_13663 = cljs.core.deref.call(null,mults);var inst_13664 = cljs.core.vals.call(null,inst_13663);var inst_13665 = cljs.core.seq.call(null,inst_13664);var inst_13666 = inst_13665;var inst_13667 = null;var inst_13668 = 0;var inst_13669 = 0;var state_13727__$1 = (function (){var statearr_13733 = state_13727;(statearr_13733[8] = inst_13667);
(statearr_13733[9] = inst_13668);
(statearr_13733[10] = inst_13669);
(statearr_13733[11] = inst_13666);
return statearr_13733;
})();var statearr_13734_13779 = state_13727__$1;(statearr_13734_13779[2] = null);
(statearr_13734_13779[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 6))
{var inst_13704 = (state_13727[12]);var inst_13706 = (state_13727[13]);var inst_13656 = (state_13727[7]);var inst_13704__$1 = topic_fn.call(null,inst_13656);var inst_13705 = cljs.core.deref.call(null,mults);var inst_13706__$1 = cljs.core.get.call(null,inst_13705,inst_13704__$1);var state_13727__$1 = (function (){var statearr_13735 = state_13727;(statearr_13735[12] = inst_13704__$1);
(statearr_13735[13] = inst_13706__$1);
return statearr_13735;
})();if(cljs.core.truth_(inst_13706__$1))
{var statearr_13736_13780 = state_13727__$1;(statearr_13736_13780[1] = 19);
} else
{var statearr_13737_13781 = state_13727__$1;(statearr_13737_13781[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 7))
{var inst_13723 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13738_13782 = state_13727__$1;(statearr_13738_13782[2] = inst_13723);
(statearr_13738_13782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 8))
{var inst_13668 = (state_13727[9]);var inst_13669 = (state_13727[10]);var inst_13671 = (inst_13669 < inst_13668);var inst_13672 = inst_13671;var state_13727__$1 = state_13727;if(cljs.core.truth_(inst_13672))
{var statearr_13742_13783 = state_13727__$1;(statearr_13742_13783[1] = 10);
} else
{var statearr_13743_13784 = state_13727__$1;(statearr_13743_13784[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 9))
{var inst_13702 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13744_13785 = state_13727__$1;(statearr_13744_13785[2] = inst_13702);
(statearr_13744_13785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 10))
{var inst_13667 = (state_13727[8]);var inst_13668 = (state_13727[9]);var inst_13669 = (state_13727[10]);var inst_13666 = (state_13727[11]);var inst_13674 = cljs.core._nth.call(null,inst_13667,inst_13669);var inst_13675 = cljs.core.async.muxch_STAR_.call(null,inst_13674);var inst_13676 = cljs.core.async.close_BANG_.call(null,inst_13675);var inst_13677 = (inst_13669 + 1);var tmp13739 = inst_13667;var tmp13740 = inst_13668;var tmp13741 = inst_13666;var inst_13666__$1 = tmp13741;var inst_13667__$1 = tmp13739;var inst_13668__$1 = tmp13740;var inst_13669__$1 = inst_13677;var state_13727__$1 = (function (){var statearr_13745 = state_13727;(statearr_13745[8] = inst_13667__$1);
(statearr_13745[9] = inst_13668__$1);
(statearr_13745[14] = inst_13676);
(statearr_13745[10] = inst_13669__$1);
(statearr_13745[11] = inst_13666__$1);
return statearr_13745;
})();var statearr_13746_13786 = state_13727__$1;(statearr_13746_13786[2] = null);
(statearr_13746_13786[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 11))
{var inst_13680 = (state_13727[15]);var inst_13666 = (state_13727[11]);var inst_13680__$1 = cljs.core.seq.call(null,inst_13666);var state_13727__$1 = (function (){var statearr_13747 = state_13727;(statearr_13747[15] = inst_13680__$1);
return statearr_13747;
})();if(inst_13680__$1)
{var statearr_13748_13787 = state_13727__$1;(statearr_13748_13787[1] = 13);
} else
{var statearr_13749_13788 = state_13727__$1;(statearr_13749_13788[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 12))
{var inst_13700 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13750_13789 = state_13727__$1;(statearr_13750_13789[2] = inst_13700);
(statearr_13750_13789[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 13))
{var inst_13680 = (state_13727[15]);var inst_13682 = cljs.core.chunked_seq_QMARK_.call(null,inst_13680);var state_13727__$1 = state_13727;if(inst_13682)
{var statearr_13751_13790 = state_13727__$1;(statearr_13751_13790[1] = 16);
} else
{var statearr_13752_13791 = state_13727__$1;(statearr_13752_13791[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 14))
{var state_13727__$1 = state_13727;var statearr_13753_13792 = state_13727__$1;(statearr_13753_13792[2] = null);
(statearr_13753_13792[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 15))
{var inst_13698 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13754_13793 = state_13727__$1;(statearr_13754_13793[2] = inst_13698);
(statearr_13754_13793[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 16))
{var inst_13680 = (state_13727[15]);var inst_13684 = cljs.core.chunk_first.call(null,inst_13680);var inst_13685 = cljs.core.chunk_rest.call(null,inst_13680);var inst_13686 = cljs.core.count.call(null,inst_13684);var inst_13666 = inst_13685;var inst_13667 = inst_13684;var inst_13668 = inst_13686;var inst_13669 = 0;var state_13727__$1 = (function (){var statearr_13755 = state_13727;(statearr_13755[8] = inst_13667);
(statearr_13755[9] = inst_13668);
(statearr_13755[10] = inst_13669);
(statearr_13755[11] = inst_13666);
return statearr_13755;
})();var statearr_13756_13794 = state_13727__$1;(statearr_13756_13794[2] = null);
(statearr_13756_13794[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 17))
{var inst_13680 = (state_13727[15]);var inst_13689 = cljs.core.first.call(null,inst_13680);var inst_13690 = cljs.core.async.muxch_STAR_.call(null,inst_13689);var inst_13691 = cljs.core.async.close_BANG_.call(null,inst_13690);var inst_13692 = cljs.core.next.call(null,inst_13680);var inst_13666 = inst_13692;var inst_13667 = null;var inst_13668 = 0;var inst_13669 = 0;var state_13727__$1 = (function (){var statearr_13757 = state_13727;(statearr_13757[8] = inst_13667);
(statearr_13757[9] = inst_13668);
(statearr_13757[10] = inst_13669);
(statearr_13757[11] = inst_13666);
(statearr_13757[16] = inst_13691);
return statearr_13757;
})();var statearr_13758_13795 = state_13727__$1;(statearr_13758_13795[2] = null);
(statearr_13758_13795[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 18))
{var inst_13695 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13759_13796 = state_13727__$1;(statearr_13759_13796[2] = inst_13695);
(statearr_13759_13796[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 19))
{var state_13727__$1 = state_13727;var statearr_13760_13797 = state_13727__$1;(statearr_13760_13797[2] = null);
(statearr_13760_13797[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 20))
{var state_13727__$1 = state_13727;var statearr_13761_13798 = state_13727__$1;(statearr_13761_13798[2] = null);
(statearr_13761_13798[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 21))
{var inst_13720 = (state_13727[2]);var state_13727__$1 = (function (){var statearr_13762 = state_13727;(statearr_13762[17] = inst_13720);
return statearr_13762;
})();var statearr_13763_13799 = state_13727__$1;(statearr_13763_13799[2] = null);
(statearr_13763_13799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 22))
{var inst_13717 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13764_13800 = state_13727__$1;(statearr_13764_13800[2] = inst_13717);
(statearr_13764_13800[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 23))
{var inst_13704 = (state_13727[12]);var inst_13708 = (state_13727[2]);var inst_13709 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13704);var state_13727__$1 = (function (){var statearr_13765 = state_13727;(statearr_13765[18] = inst_13708);
return statearr_13765;
})();var statearr_13766_13801 = state_13727__$1;(statearr_13766_13801[2] = inst_13709);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13727__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13728 === 24))
{var inst_13706 = (state_13727[13]);var inst_13656 = (state_13727[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13727,23,Object,null,22);var inst_13713 = cljs.core.async.muxch_STAR_.call(null,inst_13706);var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13727__$1,25,inst_13713,inst_13656);
} else
{if((state_val_13728 === 25))
{var inst_13715 = (state_13727[2]);var state_13727__$1 = state_13727;var statearr_13767_13802 = state_13727__$1;(statearr_13767_13802[2] = inst_13715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13727__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13771[0] = state_machine__5507__auto__);
(statearr_13771[1] = 1);
return statearr_13771;
});
var state_machine__5507__auto____1 = (function (state_13727){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13727);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13772){if((e13772 instanceof Object))
{var ex__5510__auto__ = e13772;var statearr_13773_13803 = state_13727;(statearr_13773_13803[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13804 = state_13727;
state_13727 = G__13804;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13727){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13774 = f__5522__auto__.call(null);(statearr_13774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13775);
return statearr_13774;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13911){var state_val_13912 = (state_13911[1]);if((state_val_13912 === 1))
{var state_13911__$1 = state_13911;var statearr_13913_13942 = state_13911__$1;(statearr_13913_13942[2] = null);
(statearr_13913_13942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 2))
{var inst_13874 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13875 = 0;var state_13911__$1 = (function (){var statearr_13914 = state_13911;(statearr_13914[7] = inst_13875);
(statearr_13914[8] = inst_13874);
return statearr_13914;
})();var statearr_13915_13943 = state_13911__$1;(statearr_13915_13943[2] = null);
(statearr_13915_13943[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 3))
{var inst_13909 = (state_13911[2]);var state_13911__$1 = state_13911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13911__$1,inst_13909);
} else
{if((state_val_13912 === 4))
{var inst_13875 = (state_13911[7]);var inst_13877 = (inst_13875 < cnt);var state_13911__$1 = state_13911;if(cljs.core.truth_(inst_13877))
{var statearr_13916_13944 = state_13911__$1;(statearr_13916_13944[1] = 6);
} else
{var statearr_13917_13945 = state_13911__$1;(statearr_13917_13945[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 5))
{var inst_13895 = (state_13911[2]);var state_13911__$1 = (function (){var statearr_13918 = state_13911;(statearr_13918[9] = inst_13895);
return statearr_13918;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13911__$1,12,dchan);
} else
{if((state_val_13912 === 6))
{var state_13911__$1 = state_13911;var statearr_13919_13946 = state_13911__$1;(statearr_13919_13946[2] = null);
(statearr_13919_13946[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 7))
{var state_13911__$1 = state_13911;var statearr_13920_13947 = state_13911__$1;(statearr_13920_13947[2] = null);
(statearr_13920_13947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 8))
{var inst_13893 = (state_13911[2]);var state_13911__$1 = state_13911;var statearr_13921_13948 = state_13911__$1;(statearr_13921_13948[2] = inst_13893);
(statearr_13921_13948[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 9))
{var inst_13875 = (state_13911[7]);var inst_13888 = (state_13911[2]);var inst_13889 = (inst_13875 + 1);var inst_13875__$1 = inst_13889;var state_13911__$1 = (function (){var statearr_13922 = state_13911;(statearr_13922[7] = inst_13875__$1);
(statearr_13922[10] = inst_13888);
return statearr_13922;
})();var statearr_13923_13949 = state_13911__$1;(statearr_13923_13949[2] = null);
(statearr_13923_13949[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 10))
{var inst_13879 = (state_13911[2]);var inst_13880 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13911__$1 = (function (){var statearr_13924 = state_13911;(statearr_13924[11] = inst_13879);
return statearr_13924;
})();var statearr_13925_13950 = state_13911__$1;(statearr_13925_13950[2] = inst_13880);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 11))
{var inst_13875 = (state_13911[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13911,10,Object,null,9);var inst_13884 = chs__$1.call(null,inst_13875);var inst_13885 = done.call(null,inst_13875);var inst_13886 = cljs.core.async.take_BANG_.call(null,inst_13884,inst_13885);var state_13911__$1 = state_13911;var statearr_13926_13951 = state_13911__$1;(statearr_13926_13951[2] = inst_13886);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 12))
{var inst_13897 = (state_13911[12]);var inst_13897__$1 = (state_13911[2]);var inst_13898 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13897__$1);var state_13911__$1 = (function (){var statearr_13927 = state_13911;(statearr_13927[12] = inst_13897__$1);
return statearr_13927;
})();if(cljs.core.truth_(inst_13898))
{var statearr_13928_13952 = state_13911__$1;(statearr_13928_13952[1] = 13);
} else
{var statearr_13929_13953 = state_13911__$1;(statearr_13929_13953[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 13))
{var inst_13900 = cljs.core.async.close_BANG_.call(null,out);var state_13911__$1 = state_13911;var statearr_13930_13954 = state_13911__$1;(statearr_13930_13954[2] = inst_13900);
(statearr_13930_13954[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 14))
{var inst_13897 = (state_13911[12]);var inst_13902 = cljs.core.apply.call(null,f,inst_13897);var state_13911__$1 = state_13911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13911__$1,16,out,inst_13902);
} else
{if((state_val_13912 === 15))
{var inst_13907 = (state_13911[2]);var state_13911__$1 = state_13911;var statearr_13931_13955 = state_13911__$1;(statearr_13931_13955[2] = inst_13907);
(statearr_13931_13955[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 16))
{var inst_13904 = (state_13911[2]);var state_13911__$1 = (function (){var statearr_13932 = state_13911;(statearr_13932[13] = inst_13904);
return statearr_13932;
})();var statearr_13933_13956 = state_13911__$1;(statearr_13933_13956[2] = null);
(statearr_13933_13956[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13937[0] = state_machine__5507__auto__);
(statearr_13937[1] = 1);
return statearr_13937;
});
var state_machine__5507__auto____1 = (function (state_13911){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13938){if((e13938 instanceof Object))
{var ex__5510__auto__ = e13938;var statearr_13939_13957 = state_13911;(statearr_13939_13957[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13958 = state_13911;
state_13911 = G__13958;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13911){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13940 = f__5522__auto__.call(null);(statearr_13940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13941);
return statearr_13940;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14042){var state_val_14043 = (state_14042[1]);if((state_val_14043 === 1))
{var inst_14013 = cljs.core.vec.call(null,chs);var inst_14014 = inst_14013;var state_14042__$1 = (function (){var statearr_14044 = state_14042;(statearr_14044[7] = inst_14014);
return statearr_14044;
})();var statearr_14045_14067 = state_14042__$1;(statearr_14045_14067[2] = null);
(statearr_14045_14067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14043 === 2))
{var inst_14014 = (state_14042[7]);var inst_14016 = cljs.core.count.call(null,inst_14014);var inst_14017 = (inst_14016 > 0);var state_14042__$1 = state_14042;if(cljs.core.truth_(inst_14017))
{var statearr_14046_14068 = state_14042__$1;(statearr_14046_14068[1] = 4);
} else
{var statearr_14047_14069 = state_14042__$1;(statearr_14047_14069[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14043 === 3))
{var inst_14040 = (state_14042[2]);var state_14042__$1 = state_14042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14042__$1,inst_14040);
} else
{if((state_val_14043 === 4))
{var inst_14014 = (state_14042[7]);var state_14042__$1 = state_14042;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14042__$1,7,inst_14014);
} else
{if((state_val_14043 === 5))
{var inst_14036 = cljs.core.async.close_BANG_.call(null,out);var state_14042__$1 = state_14042;var statearr_14048_14070 = state_14042__$1;(statearr_14048_14070[2] = inst_14036);
(statearr_14048_14070[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14043 === 6))
{var inst_14038 = (state_14042[2]);var state_14042__$1 = state_14042;var statearr_14049_14071 = state_14042__$1;(statearr_14049_14071[2] = inst_14038);
(statearr_14049_14071[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14043 === 7))
{var inst_14022 = (state_14042[8]);var inst_14021 = (state_14042[9]);var inst_14021__$1 = (state_14042[2]);var inst_14022__$1 = cljs.core.nth.call(null,inst_14021__$1,0,null);var inst_14023 = cljs.core.nth.call(null,inst_14021__$1,1,null);var inst_14024 = (inst_14022__$1 == null);var state_14042__$1 = (function (){var statearr_14050 = state_14042;(statearr_14050[8] = inst_14022__$1);
(statearr_14050[10] = inst_14023);
(statearr_14050[9] = inst_14021__$1);
return statearr_14050;
})();if(cljs.core.truth_(inst_14024))
{var statearr_14051_14072 = state_14042__$1;(statearr_14051_14072[1] = 8);
} else
{var statearr_14052_14073 = state_14042__$1;(statearr_14052_14073[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14043 === 8))
{var inst_14014 = (state_14042[7]);var inst_14022 = (state_14042[8]);var inst_14023 = (state_14042[10]);var inst_14021 = (state_14042[9]);var inst_14026 = (function (){var c = inst_14023;var v = inst_14022;var vec__14019 = inst_14021;var cs = inst_14014;return ((function (c,v,vec__14019,cs,inst_14014,inst_14022,inst_14023,inst_14021,state_val_14043){
return (function (p1__13959_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13959_SHARP_);
});
;})(c,v,vec__14019,cs,inst_14014,inst_14022,inst_14023,inst_14021,state_val_14043))
})();var inst_14027 = cljs.core.filterv.call(null,inst_14026,inst_14014);var inst_14014__$1 = inst_14027;var state_14042__$1 = (function (){var statearr_14053 = state_14042;(statearr_14053[7] = inst_14014__$1);
return statearr_14053;
})();var statearr_14054_14074 = state_14042__$1;(statearr_14054_14074[2] = null);
(statearr_14054_14074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14043 === 9))
{var inst_14022 = (state_14042[8]);var state_14042__$1 = state_14042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14042__$1,11,out,inst_14022);
} else
{if((state_val_14043 === 10))
{var inst_14034 = (state_14042[2]);var state_14042__$1 = state_14042;var statearr_14056_14075 = state_14042__$1;(statearr_14056_14075[2] = inst_14034);
(statearr_14056_14075[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14043 === 11))
{var inst_14014 = (state_14042[7]);var inst_14031 = (state_14042[2]);var tmp14055 = inst_14014;var inst_14014__$1 = tmp14055;var state_14042__$1 = (function (){var statearr_14057 = state_14042;(statearr_14057[7] = inst_14014__$1);
(statearr_14057[11] = inst_14031);
return statearr_14057;
})();var statearr_14058_14076 = state_14042__$1;(statearr_14058_14076[2] = null);
(statearr_14058_14076[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14062 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14062[0] = state_machine__5507__auto__);
(statearr_14062[1] = 1);
return statearr_14062;
});
var state_machine__5507__auto____1 = (function (state_14042){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14063){if((e14063 instanceof Object))
{var ex__5510__auto__ = e14063;var statearr_14064_14077 = state_14042;(statearr_14064_14077[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14078 = state_14042;
state_14042 = G__14078;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14042){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14065 = f__5522__auto__.call(null);(statearr_14065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14066);
return statearr_14065;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14148){var state_val_14149 = (state_14148[1]);if((state_val_14149 === 1))
{var inst_14125 = 0;var state_14148__$1 = (function (){var statearr_14150 = state_14148;(statearr_14150[7] = inst_14125);
return statearr_14150;
})();var statearr_14151_14172 = state_14148__$1;(statearr_14151_14172[2] = null);
(statearr_14151_14172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 2))
{var inst_14125 = (state_14148[7]);var inst_14127 = (inst_14125 < n);var state_14148__$1 = state_14148;if(cljs.core.truth_(inst_14127))
{var statearr_14152_14173 = state_14148__$1;(statearr_14152_14173[1] = 4);
} else
{var statearr_14153_14174 = state_14148__$1;(statearr_14153_14174[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 3))
{var inst_14145 = (state_14148[2]);var inst_14146 = cljs.core.async.close_BANG_.call(null,out);var state_14148__$1 = (function (){var statearr_14154 = state_14148;(statearr_14154[8] = inst_14145);
return statearr_14154;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14148__$1,inst_14146);
} else
{if((state_val_14149 === 4))
{var state_14148__$1 = state_14148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14148__$1,7,ch);
} else
{if((state_val_14149 === 5))
{var state_14148__$1 = state_14148;var statearr_14155_14175 = state_14148__$1;(statearr_14155_14175[2] = null);
(statearr_14155_14175[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 6))
{var inst_14143 = (state_14148[2]);var state_14148__$1 = state_14148;var statearr_14156_14176 = state_14148__$1;(statearr_14156_14176[2] = inst_14143);
(statearr_14156_14176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 7))
{var inst_14130 = (state_14148[9]);var inst_14130__$1 = (state_14148[2]);var inst_14131 = (inst_14130__$1 == null);var inst_14132 = cljs.core.not.call(null,inst_14131);var state_14148__$1 = (function (){var statearr_14157 = state_14148;(statearr_14157[9] = inst_14130__$1);
return statearr_14157;
})();if(inst_14132)
{var statearr_14158_14177 = state_14148__$1;(statearr_14158_14177[1] = 8);
} else
{var statearr_14159_14178 = state_14148__$1;(statearr_14159_14178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 8))
{var inst_14130 = (state_14148[9]);var state_14148__$1 = state_14148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14148__$1,11,out,inst_14130);
} else
{if((state_val_14149 === 9))
{var state_14148__$1 = state_14148;var statearr_14160_14179 = state_14148__$1;(statearr_14160_14179[2] = null);
(statearr_14160_14179[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 10))
{var inst_14140 = (state_14148[2]);var state_14148__$1 = state_14148;var statearr_14161_14180 = state_14148__$1;(statearr_14161_14180[2] = inst_14140);
(statearr_14161_14180[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 11))
{var inst_14125 = (state_14148[7]);var inst_14135 = (state_14148[2]);var inst_14136 = (inst_14125 + 1);var inst_14125__$1 = inst_14136;var state_14148__$1 = (function (){var statearr_14162 = state_14148;(statearr_14162[10] = inst_14135);
(statearr_14162[7] = inst_14125__$1);
return statearr_14162;
})();var statearr_14163_14181 = state_14148__$1;(statearr_14163_14181[2] = null);
(statearr_14163_14181[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14167 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14167[0] = state_machine__5507__auto__);
(statearr_14167[1] = 1);
return statearr_14167;
});
var state_machine__5507__auto____1 = (function (state_14148){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14168){if((e14168 instanceof Object))
{var ex__5510__auto__ = e14168;var statearr_14169_14182 = state_14148;(statearr_14169_14182[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14183 = state_14148;
state_14148 = G__14183;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14148){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14170 = f__5522__auto__.call(null);(statearr_14170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14171);
return statearr_14170;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14255){var state_val_14256 = (state_14255[1]);if((state_val_14256 === 1))
{var inst_14232 = null;var state_14255__$1 = (function (){var statearr_14257 = state_14255;(statearr_14257[7] = inst_14232);
return statearr_14257;
})();var statearr_14258_14281 = state_14255__$1;(statearr_14258_14281[2] = null);
(statearr_14258_14281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14256 === 2))
{var state_14255__$1 = state_14255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14255__$1,4,ch);
} else
{if((state_val_14256 === 3))
{var inst_14252 = (state_14255[2]);var inst_14253 = cljs.core.async.close_BANG_.call(null,out);var state_14255__$1 = (function (){var statearr_14259 = state_14255;(statearr_14259[8] = inst_14252);
return statearr_14259;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14255__$1,inst_14253);
} else
{if((state_val_14256 === 4))
{var inst_14235 = (state_14255[9]);var inst_14235__$1 = (state_14255[2]);var inst_14236 = (inst_14235__$1 == null);var inst_14237 = cljs.core.not.call(null,inst_14236);var state_14255__$1 = (function (){var statearr_14260 = state_14255;(statearr_14260[9] = inst_14235__$1);
return statearr_14260;
})();if(inst_14237)
{var statearr_14261_14282 = state_14255__$1;(statearr_14261_14282[1] = 5);
} else
{var statearr_14262_14283 = state_14255__$1;(statearr_14262_14283[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14256 === 5))
{var inst_14235 = (state_14255[9]);var inst_14232 = (state_14255[7]);var inst_14239 = cljs.core._EQ_.call(null,inst_14235,inst_14232);var state_14255__$1 = state_14255;if(inst_14239)
{var statearr_14263_14284 = state_14255__$1;(statearr_14263_14284[1] = 8);
} else
{var statearr_14264_14285 = state_14255__$1;(statearr_14264_14285[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14256 === 6))
{var state_14255__$1 = state_14255;var statearr_14266_14286 = state_14255__$1;(statearr_14266_14286[2] = null);
(statearr_14266_14286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14256 === 7))
{var inst_14250 = (state_14255[2]);var state_14255__$1 = state_14255;var statearr_14267_14287 = state_14255__$1;(statearr_14267_14287[2] = inst_14250);
(statearr_14267_14287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14256 === 8))
{var inst_14232 = (state_14255[7]);var tmp14265 = inst_14232;var inst_14232__$1 = tmp14265;var state_14255__$1 = (function (){var statearr_14268 = state_14255;(statearr_14268[7] = inst_14232__$1);
return statearr_14268;
})();var statearr_14269_14288 = state_14255__$1;(statearr_14269_14288[2] = null);
(statearr_14269_14288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14256 === 9))
{var inst_14235 = (state_14255[9]);var state_14255__$1 = state_14255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14255__$1,11,out,inst_14235);
} else
{if((state_val_14256 === 10))
{var inst_14247 = (state_14255[2]);var state_14255__$1 = state_14255;var statearr_14270_14289 = state_14255__$1;(statearr_14270_14289[2] = inst_14247);
(statearr_14270_14289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14256 === 11))
{var inst_14235 = (state_14255[9]);var inst_14244 = (state_14255[2]);var inst_14232 = inst_14235;var state_14255__$1 = (function (){var statearr_14271 = state_14255;(statearr_14271[10] = inst_14244);
(statearr_14271[7] = inst_14232);
return statearr_14271;
})();var statearr_14272_14290 = state_14255__$1;(statearr_14272_14290[2] = null);
(statearr_14272_14290[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14276 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14276[0] = state_machine__5507__auto__);
(statearr_14276[1] = 1);
return statearr_14276;
});
var state_machine__5507__auto____1 = (function (state_14255){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14277){if((e14277 instanceof Object))
{var ex__5510__auto__ = e14277;var statearr_14278_14291 = state_14255;(statearr_14278_14291[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14292 = state_14255;
state_14255 = G__14292;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14255){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14279 = f__5522__auto__.call(null);(statearr_14279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14280);
return statearr_14279;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14397){var state_val_14398 = (state_14397[1]);if((state_val_14398 === 1))
{var inst_14360 = (new Array(n));var inst_14361 = inst_14360;var inst_14362 = 0;var state_14397__$1 = (function (){var statearr_14399 = state_14397;(statearr_14399[7] = inst_14362);
(statearr_14399[8] = inst_14361);
return statearr_14399;
})();var statearr_14400_14428 = state_14397__$1;(statearr_14400_14428[2] = null);
(statearr_14400_14428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 2))
{var state_14397__$1 = state_14397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14397__$1,4,ch);
} else
{if((state_val_14398 === 3))
{var inst_14395 = (state_14397[2]);var state_14397__$1 = state_14397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14397__$1,inst_14395);
} else
{if((state_val_14398 === 4))
{var inst_14365 = (state_14397[9]);var inst_14365__$1 = (state_14397[2]);var inst_14366 = (inst_14365__$1 == null);var inst_14367 = cljs.core.not.call(null,inst_14366);var state_14397__$1 = (function (){var statearr_14401 = state_14397;(statearr_14401[9] = inst_14365__$1);
return statearr_14401;
})();if(inst_14367)
{var statearr_14402_14429 = state_14397__$1;(statearr_14402_14429[1] = 5);
} else
{var statearr_14403_14430 = state_14397__$1;(statearr_14403_14430[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 5))
{var inst_14365 = (state_14397[9]);var inst_14362 = (state_14397[7]);var inst_14361 = (state_14397[8]);var inst_14370 = (state_14397[10]);var inst_14369 = (inst_14361[inst_14362] = inst_14365);var inst_14370__$1 = (inst_14362 + 1);var inst_14371 = (inst_14370__$1 < n);var state_14397__$1 = (function (){var statearr_14404 = state_14397;(statearr_14404[11] = inst_14369);
(statearr_14404[10] = inst_14370__$1);
return statearr_14404;
})();if(cljs.core.truth_(inst_14371))
{var statearr_14405_14431 = state_14397__$1;(statearr_14405_14431[1] = 8);
} else
{var statearr_14406_14432 = state_14397__$1;(statearr_14406_14432[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 6))
{var inst_14362 = (state_14397[7]);var inst_14383 = (inst_14362 > 0);var state_14397__$1 = state_14397;if(cljs.core.truth_(inst_14383))
{var statearr_14408_14433 = state_14397__$1;(statearr_14408_14433[1] = 12);
} else
{var statearr_14409_14434 = state_14397__$1;(statearr_14409_14434[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 7))
{var inst_14393 = (state_14397[2]);var state_14397__$1 = state_14397;var statearr_14410_14435 = state_14397__$1;(statearr_14410_14435[2] = inst_14393);
(statearr_14410_14435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 8))
{var inst_14361 = (state_14397[8]);var inst_14370 = (state_14397[10]);var tmp14407 = inst_14361;var inst_14361__$1 = tmp14407;var inst_14362 = inst_14370;var state_14397__$1 = (function (){var statearr_14411 = state_14397;(statearr_14411[7] = inst_14362);
(statearr_14411[8] = inst_14361__$1);
return statearr_14411;
})();var statearr_14412_14436 = state_14397__$1;(statearr_14412_14436[2] = null);
(statearr_14412_14436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 9))
{var inst_14361 = (state_14397[8]);var inst_14375 = cljs.core.vec.call(null,inst_14361);var state_14397__$1 = state_14397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14397__$1,11,out,inst_14375);
} else
{if((state_val_14398 === 10))
{var inst_14381 = (state_14397[2]);var state_14397__$1 = state_14397;var statearr_14413_14437 = state_14397__$1;(statearr_14413_14437[2] = inst_14381);
(statearr_14413_14437[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 11))
{var inst_14377 = (state_14397[2]);var inst_14378 = (new Array(n));var inst_14361 = inst_14378;var inst_14362 = 0;var state_14397__$1 = (function (){var statearr_14414 = state_14397;(statearr_14414[7] = inst_14362);
(statearr_14414[8] = inst_14361);
(statearr_14414[12] = inst_14377);
return statearr_14414;
})();var statearr_14415_14438 = state_14397__$1;(statearr_14415_14438[2] = null);
(statearr_14415_14438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 12))
{var inst_14361 = (state_14397[8]);var inst_14385 = cljs.core.vec.call(null,inst_14361);var state_14397__$1 = state_14397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14397__$1,15,out,inst_14385);
} else
{if((state_val_14398 === 13))
{var state_14397__$1 = state_14397;var statearr_14416_14439 = state_14397__$1;(statearr_14416_14439[2] = null);
(statearr_14416_14439[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 14))
{var inst_14390 = (state_14397[2]);var inst_14391 = cljs.core.async.close_BANG_.call(null,out);var state_14397__$1 = (function (){var statearr_14417 = state_14397;(statearr_14417[13] = inst_14390);
return statearr_14417;
})();var statearr_14418_14440 = state_14397__$1;(statearr_14418_14440[2] = inst_14391);
(statearr_14418_14440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14398 === 15))
{var inst_14387 = (state_14397[2]);var state_14397__$1 = state_14397;var statearr_14419_14441 = state_14397__$1;(statearr_14419_14441[2] = inst_14387);
(statearr_14419_14441[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14423[0] = state_machine__5507__auto__);
(statearr_14423[1] = 1);
return statearr_14423;
});
var state_machine__5507__auto____1 = (function (state_14397){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14397);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14424){if((e14424 instanceof Object))
{var ex__5510__auto__ = e14424;var statearr_14425_14442 = state_14397;(statearr_14425_14442[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14443 = state_14397;
state_14397 = G__14443;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14397){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14426 = f__5522__auto__.call(null);(statearr_14426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14427);
return statearr_14426;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14556){var state_val_14557 = (state_14556[1]);if((state_val_14557 === 1))
{var inst_14515 = [];var inst_14516 = inst_14515;var inst_14517 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14556__$1 = (function (){var statearr_14558 = state_14556;(statearr_14558[7] = inst_14516);
(statearr_14558[8] = inst_14517);
return statearr_14558;
})();var statearr_14559_14587 = state_14556__$1;(statearr_14559_14587[2] = null);
(statearr_14559_14587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 2))
{var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14556__$1,4,ch);
} else
{if((state_val_14557 === 3))
{var inst_14554 = (state_14556[2]);var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14556__$1,inst_14554);
} else
{if((state_val_14557 === 4))
{var inst_14520 = (state_14556[9]);var inst_14520__$1 = (state_14556[2]);var inst_14521 = (inst_14520__$1 == null);var inst_14522 = cljs.core.not.call(null,inst_14521);var state_14556__$1 = (function (){var statearr_14560 = state_14556;(statearr_14560[9] = inst_14520__$1);
return statearr_14560;
})();if(inst_14522)
{var statearr_14561_14588 = state_14556__$1;(statearr_14561_14588[1] = 5);
} else
{var statearr_14562_14589 = state_14556__$1;(statearr_14562_14589[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 5))
{var inst_14520 = (state_14556[9]);var inst_14524 = (state_14556[10]);var inst_14517 = (state_14556[8]);var inst_14524__$1 = f.call(null,inst_14520);var inst_14525 = cljs.core._EQ_.call(null,inst_14524__$1,inst_14517);var inst_14526 = cljs.core.keyword_identical_QMARK_.call(null,inst_14517,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14527 = (inst_14525) || (inst_14526);var state_14556__$1 = (function (){var statearr_14563 = state_14556;(statearr_14563[10] = inst_14524__$1);
return statearr_14563;
})();if(cljs.core.truth_(inst_14527))
{var statearr_14564_14590 = state_14556__$1;(statearr_14564_14590[1] = 8);
} else
{var statearr_14565_14591 = state_14556__$1;(statearr_14565_14591[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 6))
{var inst_14516 = (state_14556[7]);var inst_14541 = inst_14516.length;var inst_14542 = (inst_14541 > 0);var state_14556__$1 = state_14556;if(cljs.core.truth_(inst_14542))
{var statearr_14567_14592 = state_14556__$1;(statearr_14567_14592[1] = 12);
} else
{var statearr_14568_14593 = state_14556__$1;(statearr_14568_14593[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 7))
{var inst_14552 = (state_14556[2]);var state_14556__$1 = state_14556;var statearr_14569_14594 = state_14556__$1;(statearr_14569_14594[2] = inst_14552);
(statearr_14569_14594[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 8))
{var inst_14520 = (state_14556[9]);var inst_14524 = (state_14556[10]);var inst_14516 = (state_14556[7]);var inst_14529 = inst_14516.push(inst_14520);var tmp14566 = inst_14516;var inst_14516__$1 = tmp14566;var inst_14517 = inst_14524;var state_14556__$1 = (function (){var statearr_14570 = state_14556;(statearr_14570[7] = inst_14516__$1);
(statearr_14570[8] = inst_14517);
(statearr_14570[11] = inst_14529);
return statearr_14570;
})();var statearr_14571_14595 = state_14556__$1;(statearr_14571_14595[2] = null);
(statearr_14571_14595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 9))
{var inst_14516 = (state_14556[7]);var inst_14532 = cljs.core.vec.call(null,inst_14516);var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14556__$1,11,out,inst_14532);
} else
{if((state_val_14557 === 10))
{var inst_14539 = (state_14556[2]);var state_14556__$1 = state_14556;var statearr_14572_14596 = state_14556__$1;(statearr_14572_14596[2] = inst_14539);
(statearr_14572_14596[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 11))
{var inst_14520 = (state_14556[9]);var inst_14524 = (state_14556[10]);var inst_14534 = (state_14556[2]);var inst_14535 = [];var inst_14536 = inst_14535.push(inst_14520);var inst_14516 = inst_14535;var inst_14517 = inst_14524;var state_14556__$1 = (function (){var statearr_14573 = state_14556;(statearr_14573[12] = inst_14534);
(statearr_14573[7] = inst_14516);
(statearr_14573[8] = inst_14517);
(statearr_14573[13] = inst_14536);
return statearr_14573;
})();var statearr_14574_14597 = state_14556__$1;(statearr_14574_14597[2] = null);
(statearr_14574_14597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 12))
{var inst_14516 = (state_14556[7]);var inst_14544 = cljs.core.vec.call(null,inst_14516);var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14556__$1,15,out,inst_14544);
} else
{if((state_val_14557 === 13))
{var state_14556__$1 = state_14556;var statearr_14575_14598 = state_14556__$1;(statearr_14575_14598[2] = null);
(statearr_14575_14598[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 14))
{var inst_14549 = (state_14556[2]);var inst_14550 = cljs.core.async.close_BANG_.call(null,out);var state_14556__$1 = (function (){var statearr_14576 = state_14556;(statearr_14576[14] = inst_14549);
return statearr_14576;
})();var statearr_14577_14599 = state_14556__$1;(statearr_14577_14599[2] = inst_14550);
(statearr_14577_14599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14557 === 15))
{var inst_14546 = (state_14556[2]);var state_14556__$1 = state_14556;var statearr_14578_14600 = state_14556__$1;(statearr_14578_14600[2] = inst_14546);
(statearr_14578_14600[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14582[0] = state_machine__5507__auto__);
(statearr_14582[1] = 1);
return statearr_14582;
});
var state_machine__5507__auto____1 = (function (state_14556){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14556);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object))
{var ex__5510__auto__ = e14583;var statearr_14584_14601 = state_14556;(statearr_14584_14601[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14602 = state_14556;
state_14556 = G__14602;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14556){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14585 = f__5522__auto__.call(null);(statearr_14585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14586);
return statearr_14585;
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

//# sourceMappingURL=async.js.map