// Compiled by ClojureScript 0.0-2227
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14268 = (function (f,fn_handler,meta14269){
this.f = f;
this.fn_handler = fn_handler;
this.meta14269 = meta14269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14268.cljs$lang$type = true;
cljs.core.async.t14268.cljs$lang$ctorStr = "cljs.core.async/t14268";
cljs.core.async.t14268.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14268");
});
cljs.core.async.t14268.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14270){var self__ = this;
var _14270__$1 = this;return self__.meta14269;
});
cljs.core.async.t14268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14270,meta14269__$1){var self__ = this;
var _14270__$1 = this;return (new cljs.core.async.t14268(self__.f,self__.fn_handler,meta14269__$1));
});
cljs.core.async.__GT_t14268 = (function __GT_t14268(f__$1,fn_handler__$1,meta14269){return (new cljs.core.async.t14268(f__$1,fn_handler__$1,meta14269));
});
}
return (new cljs.core.async.t14268(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14272 = buff;if(G__14272)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__14272.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14272.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14272);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14272);
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
{var val_14273 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14273);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14273,ret){
return (function (){return fn1.call(null,val_14273);
});})(val_14273,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3527__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___14274 = n;var x_14275 = 0;while(true){
if((x_14275 < n__4395__auto___14274))
{(a[x_14275] = 0);
{
var G__14276 = (x_14275 + 1);
x_14275 = G__14276;
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
var G__14277 = (i + 1);
i = G__14277;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14281 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14281 = (function (flag,alt_flag,meta14282){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14282 = meta14282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14281.cljs$lang$type = true;
cljs.core.async.t14281.cljs$lang$ctorStr = "cljs.core.async/t14281";
cljs.core.async.t14281.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14281");
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14283){var self__ = this;
var _14283__$1 = this;return self__.meta14282;
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14283,meta14282__$1){var self__ = this;
var _14283__$1 = this;return (new cljs.core.async.t14281(self__.flag,self__.alt_flag,meta14282__$1));
});})(flag))
;
cljs.core.async.__GT_t14281 = ((function (flag){
return (function __GT_t14281(flag__$1,alt_flag__$1,meta14282){return (new cljs.core.async.t14281(flag__$1,alt_flag__$1,meta14282));
});})(flag))
;
}
return (new cljs.core.async.t14281(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14287 = (function (cb,flag,alt_handler,meta14288){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14288 = meta14288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14287.cljs$lang$type = true;
cljs.core.async.t14287.cljs$lang$ctorStr = "cljs.core.async/t14287";
cljs.core.async.t14287.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14287");
});
cljs.core.async.t14287.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14289){var self__ = this;
var _14289__$1 = this;return self__.meta14288;
});
cljs.core.async.t14287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14289,meta14288__$1){var self__ = this;
var _14289__$1 = this;return (new cljs.core.async.t14287(self__.cb,self__.flag,self__.alt_handler,meta14288__$1));
});
cljs.core.async.__GT_t14287 = (function __GT_t14287(cb__$1,flag__$1,alt_handler__$1,meta14288){return (new cljs.core.async.t14287(cb__$1,flag__$1,alt_handler__$1,meta14288));
});
}
return (new cljs.core.async.t14287(cb,flag,alt_handler,null));
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
return (function (p1__14290_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14290_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14291 = (i + 1);
i = G__14291;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3527__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__14292){var map__14294 = p__14292;var map__14294__$1 = ((cljs.core.seq_QMARK_.call(null,map__14294))?cljs.core.apply.call(null,cljs.core.hash_map,map__14294):map__14294);var opts = map__14294__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14292 = null;if (arguments.length > 1) {
  p__14292 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14292);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14295){
var ports = cljs.core.first(arglist__14295);
var p__14292 = cljs.core.rest(arglist__14295);
return alts_BANG___delegate(ports,p__14292);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14303 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14303 = (function (ch,f,map_LT_,meta14304){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14304 = meta14304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14303.cljs$lang$type = true;
cljs.core.async.t14303.cljs$lang$ctorStr = "cljs.core.async/t14303";
cljs.core.async.t14303.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14303");
});
cljs.core.async.t14303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14306 = (function (fn1,_,meta14304,ch,f,map_LT_,meta14307){
this.fn1 = fn1;
this._ = _;
this.meta14304 = meta14304;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14307 = meta14307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14306.cljs$lang$type = true;
cljs.core.async.t14306.cljs$lang$ctorStr = "cljs.core.async/t14306";
cljs.core.async.t14306.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14306");
});})(___$1))
;
cljs.core.async.t14306.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14306.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14296_SHARP_){return f1.call(null,(((p1__14296_SHARP_ == null))?null:self__.f.call(null,p1__14296_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14308){var self__ = this;
var _14308__$1 = this;return self__.meta14307;
});})(___$1))
;
cljs.core.async.t14306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14308,meta14307__$1){var self__ = this;
var _14308__$1 = this;return (new cljs.core.async.t14306(self__.fn1,self__._,self__.meta14304,self__.ch,self__.f,self__.map_LT_,meta14307__$1));
});})(___$1))
;
cljs.core.async.__GT_t14306 = ((function (___$1){
return (function __GT_t14306(fn1__$1,___$2,meta14304__$1,ch__$2,f__$2,map_LT___$2,meta14307){return (new cljs.core.async.t14306(fn1__$1,___$2,meta14304__$1,ch__$2,f__$2,map_LT___$2,meta14307));
});})(___$1))
;
}
return (new cljs.core.async.t14306(fn1,___$1,self__.meta14304,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14303.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14305){var self__ = this;
var _14305__$1 = this;return self__.meta14304;
});
cljs.core.async.t14303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14305,meta14304__$1){var self__ = this;
var _14305__$1 = this;return (new cljs.core.async.t14303(self__.ch,self__.f,self__.map_LT_,meta14304__$1));
});
cljs.core.async.__GT_t14303 = (function __GT_t14303(ch__$1,f__$1,map_LT___$1,meta14304){return (new cljs.core.async.t14303(ch__$1,f__$1,map_LT___$1,meta14304));
});
}
return (new cljs.core.async.t14303(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14312 = (function (ch,f,map_GT_,meta14313){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14313 = meta14313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14312.cljs$lang$type = true;
cljs.core.async.t14312.cljs$lang$ctorStr = "cljs.core.async/t14312";
cljs.core.async.t14312.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14312");
});
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14314){var self__ = this;
var _14314__$1 = this;return self__.meta14313;
});
cljs.core.async.t14312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14314,meta14313__$1){var self__ = this;
var _14314__$1 = this;return (new cljs.core.async.t14312(self__.ch,self__.f,self__.map_GT_,meta14313__$1));
});
cljs.core.async.__GT_t14312 = (function __GT_t14312(ch__$1,f__$1,map_GT___$1,meta14313){return (new cljs.core.async.t14312(ch__$1,f__$1,map_GT___$1,meta14313));
});
}
return (new cljs.core.async.t14312(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14318 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14318 = (function (ch,p,filter_GT_,meta14319){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14319 = meta14319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14318.cljs$lang$type = true;
cljs.core.async.t14318.cljs$lang$ctorStr = "cljs.core.async/t14318";
cljs.core.async.t14318.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14318");
});
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14320){var self__ = this;
var _14320__$1 = this;return self__.meta14319;
});
cljs.core.async.t14318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14320,meta14319__$1){var self__ = this;
var _14320__$1 = this;return (new cljs.core.async.t14318(self__.ch,self__.p,self__.filter_GT_,meta14319__$1));
});
cljs.core.async.__GT_t14318 = (function __GT_t14318(ch__$1,p__$1,filter_GT___$1,meta14319){return (new cljs.core.async.t14318(ch__$1,p__$1,filter_GT___$1,meta14319));
});
}
return (new cljs.core.async.t14318(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___14403 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___14403,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___14403,out){
return (function (state_14382){var state_val_14383 = (state_14382[1]);if((state_val_14383 === 7))
{var inst_14378 = (state_14382[2]);var state_14382__$1 = state_14382;var statearr_14384_14404 = state_14382__$1;(statearr_14384_14404[2] = inst_14378);
(statearr_14384_14404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 1))
{var state_14382__$1 = state_14382;var statearr_14385_14405 = state_14382__$1;(statearr_14385_14405[2] = null);
(statearr_14385_14405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 4))
{var inst_14364 = (state_14382[7]);var inst_14364__$1 = (state_14382[2]);var inst_14365 = (inst_14364__$1 == null);var state_14382__$1 = (function (){var statearr_14386 = state_14382;(statearr_14386[7] = inst_14364__$1);
return statearr_14386;
})();if(cljs.core.truth_(inst_14365))
{var statearr_14387_14406 = state_14382__$1;(statearr_14387_14406[1] = 5);
} else
{var statearr_14388_14407 = state_14382__$1;(statearr_14388_14407[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 6))
{var inst_14364 = (state_14382[7]);var inst_14369 = p.call(null,inst_14364);var state_14382__$1 = state_14382;if(cljs.core.truth_(inst_14369))
{var statearr_14389_14408 = state_14382__$1;(statearr_14389_14408[1] = 8);
} else
{var statearr_14390_14409 = state_14382__$1;(statearr_14390_14409[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 3))
{var inst_14380 = (state_14382[2]);var state_14382__$1 = state_14382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14382__$1,inst_14380);
} else
{if((state_val_14383 === 2))
{var state_14382__$1 = state_14382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14382__$1,4,ch);
} else
{if((state_val_14383 === 11))
{var inst_14372 = (state_14382[2]);var state_14382__$1 = state_14382;var statearr_14391_14410 = state_14382__$1;(statearr_14391_14410[2] = inst_14372);
(statearr_14391_14410[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 9))
{var state_14382__$1 = state_14382;var statearr_14392_14411 = state_14382__$1;(statearr_14392_14411[2] = null);
(statearr_14392_14411[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 5))
{var inst_14367 = cljs.core.async.close_BANG_.call(null,out);var state_14382__$1 = state_14382;var statearr_14393_14412 = state_14382__$1;(statearr_14393_14412[2] = inst_14367);
(statearr_14393_14412[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 10))
{var inst_14375 = (state_14382[2]);var state_14382__$1 = (function (){var statearr_14394 = state_14382;(statearr_14394[8] = inst_14375);
return statearr_14394;
})();var statearr_14395_14413 = state_14382__$1;(statearr_14395_14413[2] = null);
(statearr_14395_14413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14383 === 8))
{var inst_14364 = (state_14382[7]);var state_14382__$1 = state_14382;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14382__$1,11,out,inst_14364);
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
});})(c__5689__auto___14403,out))
;return ((function (switch__5674__auto__,c__5689__auto___14403,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14399 = [null,null,null,null,null,null,null,null,null];(statearr_14399[0] = state_machine__5675__auto__);
(statearr_14399[1] = 1);
return statearr_14399;
});
var state_machine__5675__auto____1 = (function (state_14382){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14382);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14400){if((e14400 instanceof Object))
{var ex__5678__auto__ = e14400;var statearr_14401_14414 = state_14382;(statearr_14401_14414[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14382);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14415 = state_14382;
state_14382 = G__14415;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14382){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___14403,out))
})();var state__5691__auto__ = (function (){var statearr_14402 = f__5690__auto__.call(null);(statearr_14402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___14403);
return statearr_14402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___14403,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_14567){var state_val_14568 = (state_14567[1]);if((state_val_14568 === 7))
{var inst_14563 = (state_14567[2]);var state_14567__$1 = state_14567;var statearr_14569_14606 = state_14567__$1;(statearr_14569_14606[2] = inst_14563);
(statearr_14569_14606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 20))
{var inst_14538 = (state_14567[7]);var inst_14549 = (state_14567[2]);var inst_14550 = cljs.core.next.call(null,inst_14538);var inst_14524 = inst_14550;var inst_14525 = null;var inst_14526 = 0;var inst_14527 = 0;var state_14567__$1 = (function (){var statearr_14570 = state_14567;(statearr_14570[8] = inst_14525);
(statearr_14570[9] = inst_14524);
(statearr_14570[10] = inst_14526);
(statearr_14570[11] = inst_14549);
(statearr_14570[12] = inst_14527);
return statearr_14570;
})();var statearr_14571_14607 = state_14567__$1;(statearr_14571_14607[2] = null);
(statearr_14571_14607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 1))
{var state_14567__$1 = state_14567;var statearr_14572_14608 = state_14567__$1;(statearr_14572_14608[2] = null);
(statearr_14572_14608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 4))
{var inst_14513 = (state_14567[13]);var inst_14513__$1 = (state_14567[2]);var inst_14514 = (inst_14513__$1 == null);var state_14567__$1 = (function (){var statearr_14576 = state_14567;(statearr_14576[13] = inst_14513__$1);
return statearr_14576;
})();if(cljs.core.truth_(inst_14514))
{var statearr_14577_14609 = state_14567__$1;(statearr_14577_14609[1] = 5);
} else
{var statearr_14578_14610 = state_14567__$1;(statearr_14578_14610[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 15))
{var state_14567__$1 = state_14567;var statearr_14579_14611 = state_14567__$1;(statearr_14579_14611[2] = null);
(statearr_14579_14611[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 13))
{var inst_14525 = (state_14567[8]);var inst_14524 = (state_14567[9]);var inst_14526 = (state_14567[10]);var inst_14527 = (state_14567[12]);var inst_14534 = (state_14567[2]);var inst_14535 = (inst_14527 + 1);var tmp14573 = inst_14525;var tmp14574 = inst_14524;var tmp14575 = inst_14526;var inst_14524__$1 = tmp14574;var inst_14525__$1 = tmp14573;var inst_14526__$1 = tmp14575;var inst_14527__$1 = inst_14535;var state_14567__$1 = (function (){var statearr_14580 = state_14567;(statearr_14580[8] = inst_14525__$1);
(statearr_14580[9] = inst_14524__$1);
(statearr_14580[10] = inst_14526__$1);
(statearr_14580[12] = inst_14527__$1);
(statearr_14580[14] = inst_14534);
return statearr_14580;
})();var statearr_14581_14612 = state_14567__$1;(statearr_14581_14612[2] = null);
(statearr_14581_14612[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 6))
{var inst_14513 = (state_14567[13]);var inst_14518 = f.call(null,inst_14513);var inst_14523 = cljs.core.seq.call(null,inst_14518);var inst_14524 = inst_14523;var inst_14525 = null;var inst_14526 = 0;var inst_14527 = 0;var state_14567__$1 = (function (){var statearr_14582 = state_14567;(statearr_14582[8] = inst_14525);
(statearr_14582[9] = inst_14524);
(statearr_14582[10] = inst_14526);
(statearr_14582[12] = inst_14527);
return statearr_14582;
})();var statearr_14583_14613 = state_14567__$1;(statearr_14583_14613[2] = null);
(statearr_14583_14613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 17))
{var inst_14538 = (state_14567[7]);var inst_14542 = cljs.core.chunk_first.call(null,inst_14538);var inst_14543 = cljs.core.chunk_rest.call(null,inst_14538);var inst_14544 = cljs.core.count.call(null,inst_14542);var inst_14524 = inst_14543;var inst_14525 = inst_14542;var inst_14526 = inst_14544;var inst_14527 = 0;var state_14567__$1 = (function (){var statearr_14584 = state_14567;(statearr_14584[8] = inst_14525);
(statearr_14584[9] = inst_14524);
(statearr_14584[10] = inst_14526);
(statearr_14584[12] = inst_14527);
return statearr_14584;
})();var statearr_14585_14614 = state_14567__$1;(statearr_14585_14614[2] = null);
(statearr_14585_14614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 3))
{var inst_14565 = (state_14567[2]);var state_14567__$1 = state_14567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14567__$1,inst_14565);
} else
{if((state_val_14568 === 12))
{var inst_14558 = (state_14567[2]);var state_14567__$1 = state_14567;var statearr_14586_14615 = state_14567__$1;(statearr_14586_14615[2] = inst_14558);
(statearr_14586_14615[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 2))
{var state_14567__$1 = state_14567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14567__$1,4,in$);
} else
{if((state_val_14568 === 19))
{var inst_14553 = (state_14567[2]);var state_14567__$1 = state_14567;var statearr_14587_14616 = state_14567__$1;(statearr_14587_14616[2] = inst_14553);
(statearr_14587_14616[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 11))
{var inst_14524 = (state_14567[9]);var inst_14538 = (state_14567[7]);var inst_14538__$1 = cljs.core.seq.call(null,inst_14524);var state_14567__$1 = (function (){var statearr_14588 = state_14567;(statearr_14588[7] = inst_14538__$1);
return statearr_14588;
})();if(inst_14538__$1)
{var statearr_14589_14617 = state_14567__$1;(statearr_14589_14617[1] = 14);
} else
{var statearr_14590_14618 = state_14567__$1;(statearr_14590_14618[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 9))
{var inst_14560 = (state_14567[2]);var state_14567__$1 = (function (){var statearr_14591 = state_14567;(statearr_14591[15] = inst_14560);
return statearr_14591;
})();var statearr_14592_14619 = state_14567__$1;(statearr_14592_14619[2] = null);
(statearr_14592_14619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 5))
{var inst_14516 = cljs.core.async.close_BANG_.call(null,out);var state_14567__$1 = state_14567;var statearr_14593_14620 = state_14567__$1;(statearr_14593_14620[2] = inst_14516);
(statearr_14593_14620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 14))
{var inst_14538 = (state_14567[7]);var inst_14540 = cljs.core.chunked_seq_QMARK_.call(null,inst_14538);var state_14567__$1 = state_14567;if(inst_14540)
{var statearr_14594_14621 = state_14567__$1;(statearr_14594_14621[1] = 17);
} else
{var statearr_14595_14622 = state_14567__$1;(statearr_14595_14622[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 16))
{var inst_14556 = (state_14567[2]);var state_14567__$1 = state_14567;var statearr_14596_14623 = state_14567__$1;(statearr_14596_14623[2] = inst_14556);
(statearr_14596_14623[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14568 === 10))
{var inst_14525 = (state_14567[8]);var inst_14527 = (state_14567[12]);var inst_14532 = cljs.core._nth.call(null,inst_14525,inst_14527);var state_14567__$1 = state_14567;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14567__$1,13,out,inst_14532);
} else
{if((state_val_14568 === 18))
{var inst_14538 = (state_14567[7]);var inst_14547 = cljs.core.first.call(null,inst_14538);var state_14567__$1 = state_14567;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14567__$1,20,out,inst_14547);
} else
{if((state_val_14568 === 8))
{var inst_14526 = (state_14567[10]);var inst_14527 = (state_14567[12]);var inst_14529 = (inst_14527 < inst_14526);var inst_14530 = inst_14529;var state_14567__$1 = state_14567;if(cljs.core.truth_(inst_14530))
{var statearr_14597_14624 = state_14567__$1;(statearr_14597_14624[1] = 10);
} else
{var statearr_14598_14625 = state_14567__$1;(statearr_14598_14625[1] = 11);
}
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14602[0] = state_machine__5675__auto__);
(statearr_14602[1] = 1);
return statearr_14602;
});
var state_machine__5675__auto____1 = (function (state_14567){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14567);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14603){if((e14603 instanceof Object))
{var ex__5678__auto__ = e14603;var statearr_14604_14626 = state_14567;(statearr_14604_14626[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14567);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14627 = state_14567;
state_14567 = G__14627;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14567){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_14605 = f__5690__auto__.call(null);(statearr_14605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_14605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___14708 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___14708){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___14708){
return (function (state_14687){var state_val_14688 = (state_14687[1]);if((state_val_14688 === 7))
{var inst_14683 = (state_14687[2]);var state_14687__$1 = state_14687;var statearr_14689_14709 = state_14687__$1;(statearr_14689_14709[2] = inst_14683);
(statearr_14689_14709[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 1))
{var state_14687__$1 = state_14687;var statearr_14690_14710 = state_14687__$1;(statearr_14690_14710[2] = null);
(statearr_14690_14710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 4))
{var inst_14670 = (state_14687[7]);var inst_14670__$1 = (state_14687[2]);var inst_14671 = (inst_14670__$1 == null);var state_14687__$1 = (function (){var statearr_14691 = state_14687;(statearr_14691[7] = inst_14670__$1);
return statearr_14691;
})();if(cljs.core.truth_(inst_14671))
{var statearr_14692_14711 = state_14687__$1;(statearr_14692_14711[1] = 5);
} else
{var statearr_14693_14712 = state_14687__$1;(statearr_14693_14712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 6))
{var inst_14670 = (state_14687[7]);var state_14687__$1 = state_14687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14687__$1,11,to,inst_14670);
} else
{if((state_val_14688 === 3))
{var inst_14685 = (state_14687[2]);var state_14687__$1 = state_14687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14687__$1,inst_14685);
} else
{if((state_val_14688 === 2))
{var state_14687__$1 = state_14687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14687__$1,4,from);
} else
{if((state_val_14688 === 11))
{var inst_14680 = (state_14687[2]);var state_14687__$1 = (function (){var statearr_14694 = state_14687;(statearr_14694[8] = inst_14680);
return statearr_14694;
})();var statearr_14695_14713 = state_14687__$1;(statearr_14695_14713[2] = null);
(statearr_14695_14713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 9))
{var state_14687__$1 = state_14687;var statearr_14696_14714 = state_14687__$1;(statearr_14696_14714[2] = null);
(statearr_14696_14714[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 5))
{var state_14687__$1 = state_14687;if(cljs.core.truth_(close_QMARK_))
{var statearr_14697_14715 = state_14687__$1;(statearr_14697_14715[1] = 8);
} else
{var statearr_14698_14716 = state_14687__$1;(statearr_14698_14716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 10))
{var inst_14677 = (state_14687[2]);var state_14687__$1 = state_14687;var statearr_14699_14717 = state_14687__$1;(statearr_14699_14717[2] = inst_14677);
(statearr_14699_14717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 8))
{var inst_14674 = cljs.core.async.close_BANG_.call(null,to);var state_14687__$1 = state_14687;var statearr_14700_14718 = state_14687__$1;(statearr_14700_14718[2] = inst_14674);
(statearr_14700_14718[1] = 10);
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
});})(c__5689__auto___14708))
;return ((function (switch__5674__auto__,c__5689__auto___14708){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14704 = [null,null,null,null,null,null,null,null,null];(statearr_14704[0] = state_machine__5675__auto__);
(statearr_14704[1] = 1);
return statearr_14704;
});
var state_machine__5675__auto____1 = (function (state_14687){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14705){if((e14705 instanceof Object))
{var ex__5678__auto__ = e14705;var statearr_14706_14719 = state_14687;(statearr_14706_14719[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14720 = state_14687;
state_14687 = G__14720;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14687){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___14708))
})();var state__5691__auto__ = (function (){var statearr_14707 = f__5690__auto__.call(null);(statearr_14707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___14708);
return statearr_14707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___14708))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5689__auto___14807 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___14807,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___14807,tc,fc){
return (function (state_14785){var state_val_14786 = (state_14785[1]);if((state_val_14786 === 7))
{var inst_14781 = (state_14785[2]);var state_14785__$1 = state_14785;var statearr_14787_14808 = state_14785__$1;(statearr_14787_14808[2] = inst_14781);
(statearr_14787_14808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 1))
{var state_14785__$1 = state_14785;var statearr_14788_14809 = state_14785__$1;(statearr_14788_14809[2] = null);
(statearr_14788_14809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 4))
{var inst_14766 = (state_14785[7]);var inst_14766__$1 = (state_14785[2]);var inst_14767 = (inst_14766__$1 == null);var state_14785__$1 = (function (){var statearr_14789 = state_14785;(statearr_14789[7] = inst_14766__$1);
return statearr_14789;
})();if(cljs.core.truth_(inst_14767))
{var statearr_14790_14810 = state_14785__$1;(statearr_14790_14810[1] = 5);
} else
{var statearr_14791_14811 = state_14785__$1;(statearr_14791_14811[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 6))
{var inst_14766 = (state_14785[7]);var inst_14772 = p.call(null,inst_14766);var state_14785__$1 = state_14785;if(cljs.core.truth_(inst_14772))
{var statearr_14792_14812 = state_14785__$1;(statearr_14792_14812[1] = 9);
} else
{var statearr_14793_14813 = state_14785__$1;(statearr_14793_14813[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 3))
{var inst_14783 = (state_14785[2]);var state_14785__$1 = state_14785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14785__$1,inst_14783);
} else
{if((state_val_14786 === 2))
{var state_14785__$1 = state_14785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14785__$1,4,ch);
} else
{if((state_val_14786 === 11))
{var inst_14766 = (state_14785[7]);var inst_14776 = (state_14785[2]);var state_14785__$1 = state_14785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14785__$1,8,inst_14776,inst_14766);
} else
{if((state_val_14786 === 9))
{var state_14785__$1 = state_14785;var statearr_14794_14814 = state_14785__$1;(statearr_14794_14814[2] = tc);
(statearr_14794_14814[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 5))
{var inst_14769 = cljs.core.async.close_BANG_.call(null,tc);var inst_14770 = cljs.core.async.close_BANG_.call(null,fc);var state_14785__$1 = (function (){var statearr_14795 = state_14785;(statearr_14795[8] = inst_14769);
return statearr_14795;
})();var statearr_14796_14815 = state_14785__$1;(statearr_14796_14815[2] = inst_14770);
(statearr_14796_14815[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 10))
{var state_14785__$1 = state_14785;var statearr_14797_14816 = state_14785__$1;(statearr_14797_14816[2] = fc);
(statearr_14797_14816[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14786 === 8))
{var inst_14778 = (state_14785[2]);var state_14785__$1 = (function (){var statearr_14798 = state_14785;(statearr_14798[9] = inst_14778);
return statearr_14798;
})();var statearr_14799_14817 = state_14785__$1;(statearr_14799_14817[2] = null);
(statearr_14799_14817[1] = 2);
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
});})(c__5689__auto___14807,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___14807,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14803 = [null,null,null,null,null,null,null,null,null,null];(statearr_14803[0] = state_machine__5675__auto__);
(statearr_14803[1] = 1);
return statearr_14803;
});
var state_machine__5675__auto____1 = (function (state_14785){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14785);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14804){if((e14804 instanceof Object))
{var ex__5678__auto__ = e14804;var statearr_14805_14818 = state_14785;(statearr_14805_14818[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14819 = state_14785;
state_14785 = G__14819;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14785){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___14807,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_14806 = f__5690__auto__.call(null);(statearr_14806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___14807);
return statearr_14806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___14807,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_14866){var state_val_14867 = (state_14866[1]);if((state_val_14867 === 7))
{var inst_14862 = (state_14866[2]);var state_14866__$1 = state_14866;var statearr_14868_14884 = state_14866__$1;(statearr_14868_14884[2] = inst_14862);
(statearr_14868_14884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14867 === 6))
{var inst_14855 = (state_14866[7]);var inst_14852 = (state_14866[8]);var inst_14859 = f.call(null,inst_14852,inst_14855);var inst_14852__$1 = inst_14859;var state_14866__$1 = (function (){var statearr_14869 = state_14866;(statearr_14869[8] = inst_14852__$1);
return statearr_14869;
})();var statearr_14870_14885 = state_14866__$1;(statearr_14870_14885[2] = null);
(statearr_14870_14885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14867 === 5))
{var inst_14852 = (state_14866[8]);var state_14866__$1 = state_14866;var statearr_14871_14886 = state_14866__$1;(statearr_14871_14886[2] = inst_14852);
(statearr_14871_14886[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14867 === 4))
{var inst_14855 = (state_14866[7]);var inst_14855__$1 = (state_14866[2]);var inst_14856 = (inst_14855__$1 == null);var state_14866__$1 = (function (){var statearr_14872 = state_14866;(statearr_14872[7] = inst_14855__$1);
return statearr_14872;
})();if(cljs.core.truth_(inst_14856))
{var statearr_14873_14887 = state_14866__$1;(statearr_14873_14887[1] = 5);
} else
{var statearr_14874_14888 = state_14866__$1;(statearr_14874_14888[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14867 === 3))
{var inst_14864 = (state_14866[2]);var state_14866__$1 = state_14866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14866__$1,inst_14864);
} else
{if((state_val_14867 === 2))
{var state_14866__$1 = state_14866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14866__$1,4,ch);
} else
{if((state_val_14867 === 1))
{var inst_14852 = init;var state_14866__$1 = (function (){var statearr_14875 = state_14866;(statearr_14875[8] = inst_14852);
return statearr_14875;
})();var statearr_14876_14889 = state_14866__$1;(statearr_14876_14889[2] = null);
(statearr_14876_14889[1] = 2);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14880 = [null,null,null,null,null,null,null,null,null];(statearr_14880[0] = state_machine__5675__auto__);
(statearr_14880[1] = 1);
return statearr_14880;
});
var state_machine__5675__auto____1 = (function (state_14866){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14866);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14881){if((e14881 instanceof Object))
{var ex__5678__auto__ = e14881;var statearr_14882_14890 = state_14866;(statearr_14882_14890[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14891 = state_14866;
state_14866 = G__14891;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14866){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_14883 = f__5690__auto__.call(null);(statearr_14883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_14883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_14953){var state_val_14954 = (state_14953[1]);if((state_val_14954 === 7))
{var inst_14934 = (state_14953[7]);var inst_14939 = (state_14953[2]);var inst_14940 = cljs.core.next.call(null,inst_14934);var inst_14934__$1 = inst_14940;var state_14953__$1 = (function (){var statearr_14955 = state_14953;(statearr_14955[8] = inst_14939);
(statearr_14955[7] = inst_14934__$1);
return statearr_14955;
})();var statearr_14956_14974 = state_14953__$1;(statearr_14956_14974[2] = null);
(statearr_14956_14974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 1))
{var inst_14933 = cljs.core.seq.call(null,coll);var inst_14934 = inst_14933;var state_14953__$1 = (function (){var statearr_14957 = state_14953;(statearr_14957[7] = inst_14934);
return statearr_14957;
})();var statearr_14958_14975 = state_14953__$1;(statearr_14958_14975[2] = null);
(statearr_14958_14975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 4))
{var inst_14934 = (state_14953[7]);var inst_14937 = cljs.core.first.call(null,inst_14934);var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14953__$1,7,ch,inst_14937);
} else
{if((state_val_14954 === 6))
{var inst_14949 = (state_14953[2]);var state_14953__$1 = state_14953;var statearr_14959_14976 = state_14953__$1;(statearr_14959_14976[2] = inst_14949);
(statearr_14959_14976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 3))
{var inst_14951 = (state_14953[2]);var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14953__$1,inst_14951);
} else
{if((state_val_14954 === 2))
{var inst_14934 = (state_14953[7]);var state_14953__$1 = state_14953;if(cljs.core.truth_(inst_14934))
{var statearr_14960_14977 = state_14953__$1;(statearr_14960_14977[1] = 4);
} else
{var statearr_14961_14978 = state_14953__$1;(statearr_14961_14978[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 9))
{var state_14953__$1 = state_14953;var statearr_14962_14979 = state_14953__$1;(statearr_14962_14979[2] = null);
(statearr_14962_14979[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 5))
{var state_14953__$1 = state_14953;if(cljs.core.truth_(close_QMARK_))
{var statearr_14963_14980 = state_14953__$1;(statearr_14963_14980[1] = 8);
} else
{var statearr_14964_14981 = state_14953__$1;(statearr_14964_14981[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 10))
{var inst_14947 = (state_14953[2]);var state_14953__$1 = state_14953;var statearr_14965_14982 = state_14953__$1;(statearr_14965_14982[2] = inst_14947);
(statearr_14965_14982[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 8))
{var inst_14944 = cljs.core.async.close_BANG_.call(null,ch);var state_14953__$1 = state_14953;var statearr_14966_14983 = state_14953__$1;(statearr_14966_14983[2] = inst_14944);
(statearr_14966_14983[1] = 10);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14970 = [null,null,null,null,null,null,null,null,null];(statearr_14970[0] = state_machine__5675__auto__);
(statearr_14970[1] = 1);
return statearr_14970;
});
var state_machine__5675__auto____1 = (function (state_14953){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14971){if((e14971 instanceof Object))
{var ex__5678__auto__ = e14971;var statearr_14972_14984 = state_14953;(statearr_14972_14984[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14985 = state_14953;
state_14953 = G__14985;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14953){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_14973 = f__5690__auto__.call(null);(statearr_14973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_14973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
cljs.core.async.Mux = (function (){var obj14987 = {};return obj14987;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14989 = {};return obj14989;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15213 = (function (cs,ch,mult,meta15214){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15214 = meta15214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15213.cljs$lang$type = true;
cljs.core.async.t15213.cljs$lang$ctorStr = "cljs.core.async/t15213";
cljs.core.async.t15213.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t15213");
});})(cs))
;
cljs.core.async.t15213.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15213.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15213.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15213.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15213.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15215){var self__ = this;
var _15215__$1 = this;return self__.meta15214;
});})(cs))
;
cljs.core.async.t15213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15215,meta15214__$1){var self__ = this;
var _15215__$1 = this;return (new cljs.core.async.t15213(self__.cs,self__.ch,self__.mult,meta15214__$1));
});})(cs))
;
cljs.core.async.__GT_t15213 = ((function (cs){
return (function __GT_t15213(cs__$1,ch__$1,mult__$1,meta15214){return (new cljs.core.async.t15213(cs__$1,ch__$1,mult__$1,meta15214));
});})(cs))
;
}
return (new cljs.core.async.t15213(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___15436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___15436,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___15436,cs,m,dchan,dctr,done){
return (function (state_15350){var state_val_15351 = (state_15350[1]);if((state_val_15351 === 7))
{var inst_15346 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15352_15437 = state_15350__$1;(statearr_15352_15437[2] = inst_15346);
(statearr_15352_15437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 20))
{var inst_15247 = (state_15350[7]);var inst_15257 = cljs.core.first.call(null,inst_15247);var inst_15258 = cljs.core.nth.call(null,inst_15257,0,null);var inst_15259 = cljs.core.nth.call(null,inst_15257,1,null);var state_15350__$1 = (function (){var statearr_15353 = state_15350;(statearr_15353[8] = inst_15258);
return statearr_15353;
})();if(cljs.core.truth_(inst_15259))
{var statearr_15354_15438 = state_15350__$1;(statearr_15354_15438[1] = 22);
} else
{var statearr_15355_15439 = state_15350__$1;(statearr_15355_15439[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 27))
{var inst_15289 = (state_15350[9]);var inst_15287 = (state_15350[10]);var inst_15294 = cljs.core._nth.call(null,inst_15287,inst_15289);var state_15350__$1 = (function (){var statearr_15356 = state_15350;(statearr_15356[11] = inst_15294);
return statearr_15356;
})();var statearr_15357_15440 = state_15350__$1;(statearr_15357_15440[2] = null);
(statearr_15357_15440[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 1))
{var state_15350__$1 = state_15350;var statearr_15358_15441 = state_15350__$1;(statearr_15358_15441[2] = null);
(statearr_15358_15441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 24))
{var inst_15247 = (state_15350[7]);var inst_15264 = (state_15350[2]);var inst_15265 = cljs.core.next.call(null,inst_15247);var inst_15227 = inst_15265;var inst_15228 = null;var inst_15229 = 0;var inst_15230 = 0;var state_15350__$1 = (function (){var statearr_15359 = state_15350;(statearr_15359[12] = inst_15264);
(statearr_15359[13] = inst_15227);
(statearr_15359[14] = inst_15229);
(statearr_15359[15] = inst_15230);
(statearr_15359[16] = inst_15228);
return statearr_15359;
})();var statearr_15360_15442 = state_15350__$1;(statearr_15360_15442[2] = null);
(statearr_15360_15442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 39))
{var inst_15307 = (state_15350[17]);var inst_15325 = (state_15350[2]);var inst_15326 = cljs.core.next.call(null,inst_15307);var inst_15286 = inst_15326;var inst_15287 = null;var inst_15288 = 0;var inst_15289 = 0;var state_15350__$1 = (function (){var statearr_15364 = state_15350;(statearr_15364[9] = inst_15289);
(statearr_15364[18] = inst_15288);
(statearr_15364[19] = inst_15286);
(statearr_15364[20] = inst_15325);
(statearr_15364[10] = inst_15287);
return statearr_15364;
})();var statearr_15365_15443 = state_15350__$1;(statearr_15365_15443[2] = null);
(statearr_15365_15443[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 4))
{var inst_15218 = (state_15350[21]);var inst_15218__$1 = (state_15350[2]);var inst_15219 = (inst_15218__$1 == null);var state_15350__$1 = (function (){var statearr_15366 = state_15350;(statearr_15366[21] = inst_15218__$1);
return statearr_15366;
})();if(cljs.core.truth_(inst_15219))
{var statearr_15367_15444 = state_15350__$1;(statearr_15367_15444[1] = 5);
} else
{var statearr_15368_15445 = state_15350__$1;(statearr_15368_15445[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 15))
{var inst_15227 = (state_15350[13]);var inst_15229 = (state_15350[14]);var inst_15230 = (state_15350[15]);var inst_15228 = (state_15350[16]);var inst_15243 = (state_15350[2]);var inst_15244 = (inst_15230 + 1);var tmp15361 = inst_15227;var tmp15362 = inst_15229;var tmp15363 = inst_15228;var inst_15227__$1 = tmp15361;var inst_15228__$1 = tmp15363;var inst_15229__$1 = tmp15362;var inst_15230__$1 = inst_15244;var state_15350__$1 = (function (){var statearr_15369 = state_15350;(statearr_15369[13] = inst_15227__$1);
(statearr_15369[14] = inst_15229__$1);
(statearr_15369[22] = inst_15243);
(statearr_15369[15] = inst_15230__$1);
(statearr_15369[16] = inst_15228__$1);
return statearr_15369;
})();var statearr_15370_15446 = state_15350__$1;(statearr_15370_15446[2] = null);
(statearr_15370_15446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 21))
{var inst_15268 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15371_15447 = state_15350__$1;(statearr_15371_15447[2] = inst_15268);
(statearr_15371_15447[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 31))
{var inst_15294 = (state_15350[11]);var inst_15295 = (state_15350[2]);var inst_15296 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15297 = cljs.core.async.untap_STAR_.call(null,m,inst_15294);var state_15350__$1 = (function (){var statearr_15372 = state_15350;(statearr_15372[23] = inst_15295);
(statearr_15372[24] = inst_15296);
return statearr_15372;
})();var statearr_15373_15448 = state_15350__$1;(statearr_15373_15448[2] = inst_15297);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15350__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 32))
{var inst_15218 = (state_15350[21]);var inst_15294 = (state_15350[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15350,31,Object,null,30);var inst_15301 = cljs.core.async.put_BANG_.call(null,inst_15294,inst_15218,done);var state_15350__$1 = state_15350;var statearr_15374_15449 = state_15350__$1;(statearr_15374_15449[2] = inst_15301);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15350__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 40))
{var inst_15316 = (state_15350[25]);var inst_15317 = (state_15350[2]);var inst_15318 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15319 = cljs.core.async.untap_STAR_.call(null,m,inst_15316);var state_15350__$1 = (function (){var statearr_15375 = state_15350;(statearr_15375[26] = inst_15318);
(statearr_15375[27] = inst_15317);
return statearr_15375;
})();var statearr_15376_15450 = state_15350__$1;(statearr_15376_15450[2] = inst_15319);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15350__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 33))
{var inst_15307 = (state_15350[17]);var inst_15309 = cljs.core.chunked_seq_QMARK_.call(null,inst_15307);var state_15350__$1 = state_15350;if(inst_15309)
{var statearr_15377_15451 = state_15350__$1;(statearr_15377_15451[1] = 36);
} else
{var statearr_15378_15452 = state_15350__$1;(statearr_15378_15452[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 13))
{var inst_15237 = (state_15350[28]);var inst_15240 = cljs.core.async.close_BANG_.call(null,inst_15237);var state_15350__$1 = state_15350;var statearr_15379_15453 = state_15350__$1;(statearr_15379_15453[2] = inst_15240);
(statearr_15379_15453[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 22))
{var inst_15258 = (state_15350[8]);var inst_15261 = cljs.core.async.close_BANG_.call(null,inst_15258);var state_15350__$1 = state_15350;var statearr_15380_15454 = state_15350__$1;(statearr_15380_15454[2] = inst_15261);
(statearr_15380_15454[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 36))
{var inst_15307 = (state_15350[17]);var inst_15311 = cljs.core.chunk_first.call(null,inst_15307);var inst_15312 = cljs.core.chunk_rest.call(null,inst_15307);var inst_15313 = cljs.core.count.call(null,inst_15311);var inst_15286 = inst_15312;var inst_15287 = inst_15311;var inst_15288 = inst_15313;var inst_15289 = 0;var state_15350__$1 = (function (){var statearr_15381 = state_15350;(statearr_15381[9] = inst_15289);
(statearr_15381[18] = inst_15288);
(statearr_15381[19] = inst_15286);
(statearr_15381[10] = inst_15287);
return statearr_15381;
})();var statearr_15382_15455 = state_15350__$1;(statearr_15382_15455[2] = null);
(statearr_15382_15455[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 41))
{var inst_15316 = (state_15350[25]);var inst_15218 = (state_15350[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15350,40,Object,null,39);var inst_15323 = cljs.core.async.put_BANG_.call(null,inst_15316,inst_15218,done);var state_15350__$1 = state_15350;var statearr_15383_15456 = state_15350__$1;(statearr_15383_15456[2] = inst_15323);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15350__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 43))
{var state_15350__$1 = state_15350;var statearr_15384_15457 = state_15350__$1;(statearr_15384_15457[2] = null);
(statearr_15384_15457[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 29))
{var inst_15334 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15385_15458 = state_15350__$1;(statearr_15385_15458[2] = inst_15334);
(statearr_15385_15458[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 44))
{var inst_15343 = (state_15350[2]);var state_15350__$1 = (function (){var statearr_15386 = state_15350;(statearr_15386[29] = inst_15343);
return statearr_15386;
})();var statearr_15387_15459 = state_15350__$1;(statearr_15387_15459[2] = null);
(statearr_15387_15459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 6))
{var inst_15278 = (state_15350[30]);var inst_15277 = cljs.core.deref.call(null,cs);var inst_15278__$1 = cljs.core.keys.call(null,inst_15277);var inst_15279 = cljs.core.count.call(null,inst_15278__$1);var inst_15280 = cljs.core.reset_BANG_.call(null,dctr,inst_15279);var inst_15285 = cljs.core.seq.call(null,inst_15278__$1);var inst_15286 = inst_15285;var inst_15287 = null;var inst_15288 = 0;var inst_15289 = 0;var state_15350__$1 = (function (){var statearr_15388 = state_15350;(statearr_15388[9] = inst_15289);
(statearr_15388[18] = inst_15288);
(statearr_15388[31] = inst_15280);
(statearr_15388[19] = inst_15286);
(statearr_15388[30] = inst_15278__$1);
(statearr_15388[10] = inst_15287);
return statearr_15388;
})();var statearr_15389_15460 = state_15350__$1;(statearr_15389_15460[2] = null);
(statearr_15389_15460[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 28))
{var inst_15307 = (state_15350[17]);var inst_15286 = (state_15350[19]);var inst_15307__$1 = cljs.core.seq.call(null,inst_15286);var state_15350__$1 = (function (){var statearr_15390 = state_15350;(statearr_15390[17] = inst_15307__$1);
return statearr_15390;
})();if(inst_15307__$1)
{var statearr_15391_15461 = state_15350__$1;(statearr_15391_15461[1] = 33);
} else
{var statearr_15392_15462 = state_15350__$1;(statearr_15392_15462[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 25))
{var inst_15289 = (state_15350[9]);var inst_15288 = (state_15350[18]);var inst_15291 = (inst_15289 < inst_15288);var inst_15292 = inst_15291;var state_15350__$1 = state_15350;if(cljs.core.truth_(inst_15292))
{var statearr_15393_15463 = state_15350__$1;(statearr_15393_15463[1] = 27);
} else
{var statearr_15394_15464 = state_15350__$1;(statearr_15394_15464[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 34))
{var state_15350__$1 = state_15350;var statearr_15395_15465 = state_15350__$1;(statearr_15395_15465[2] = null);
(statearr_15395_15465[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 17))
{var state_15350__$1 = state_15350;var statearr_15396_15466 = state_15350__$1;(statearr_15396_15466[2] = null);
(statearr_15396_15466[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 3))
{var inst_15348 = (state_15350[2]);var state_15350__$1 = state_15350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15350__$1,inst_15348);
} else
{if((state_val_15351 === 12))
{var inst_15273 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15397_15467 = state_15350__$1;(statearr_15397_15467[2] = inst_15273);
(statearr_15397_15467[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 2))
{var state_15350__$1 = state_15350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15350__$1,4,ch);
} else
{if((state_val_15351 === 23))
{var state_15350__$1 = state_15350;var statearr_15398_15468 = state_15350__$1;(statearr_15398_15468[2] = null);
(statearr_15398_15468[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 35))
{var inst_15332 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15399_15469 = state_15350__$1;(statearr_15399_15469[2] = inst_15332);
(statearr_15399_15469[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 19))
{var inst_15247 = (state_15350[7]);var inst_15251 = cljs.core.chunk_first.call(null,inst_15247);var inst_15252 = cljs.core.chunk_rest.call(null,inst_15247);var inst_15253 = cljs.core.count.call(null,inst_15251);var inst_15227 = inst_15252;var inst_15228 = inst_15251;var inst_15229 = inst_15253;var inst_15230 = 0;var state_15350__$1 = (function (){var statearr_15400 = state_15350;(statearr_15400[13] = inst_15227);
(statearr_15400[14] = inst_15229);
(statearr_15400[15] = inst_15230);
(statearr_15400[16] = inst_15228);
return statearr_15400;
})();var statearr_15401_15470 = state_15350__$1;(statearr_15401_15470[2] = null);
(statearr_15401_15470[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 11))
{var inst_15227 = (state_15350[13]);var inst_15247 = (state_15350[7]);var inst_15247__$1 = cljs.core.seq.call(null,inst_15227);var state_15350__$1 = (function (){var statearr_15402 = state_15350;(statearr_15402[7] = inst_15247__$1);
return statearr_15402;
})();if(inst_15247__$1)
{var statearr_15403_15471 = state_15350__$1;(statearr_15403_15471[1] = 16);
} else
{var statearr_15404_15472 = state_15350__$1;(statearr_15404_15472[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 9))
{var inst_15275 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15405_15473 = state_15350__$1;(statearr_15405_15473[2] = inst_15275);
(statearr_15405_15473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 5))
{var inst_15225 = cljs.core.deref.call(null,cs);var inst_15226 = cljs.core.seq.call(null,inst_15225);var inst_15227 = inst_15226;var inst_15228 = null;var inst_15229 = 0;var inst_15230 = 0;var state_15350__$1 = (function (){var statearr_15406 = state_15350;(statearr_15406[13] = inst_15227);
(statearr_15406[14] = inst_15229);
(statearr_15406[15] = inst_15230);
(statearr_15406[16] = inst_15228);
return statearr_15406;
})();var statearr_15407_15474 = state_15350__$1;(statearr_15407_15474[2] = null);
(statearr_15407_15474[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 14))
{var state_15350__$1 = state_15350;var statearr_15408_15475 = state_15350__$1;(statearr_15408_15475[2] = null);
(statearr_15408_15475[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 45))
{var inst_15340 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15409_15476 = state_15350__$1;(statearr_15409_15476[2] = inst_15340);
(statearr_15409_15476[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 26))
{var inst_15278 = (state_15350[30]);var inst_15336 = (state_15350[2]);var inst_15337 = cljs.core.seq.call(null,inst_15278);var state_15350__$1 = (function (){var statearr_15410 = state_15350;(statearr_15410[32] = inst_15336);
return statearr_15410;
})();if(inst_15337)
{var statearr_15411_15477 = state_15350__$1;(statearr_15411_15477[1] = 42);
} else
{var statearr_15412_15478 = state_15350__$1;(statearr_15412_15478[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 16))
{var inst_15247 = (state_15350[7]);var inst_15249 = cljs.core.chunked_seq_QMARK_.call(null,inst_15247);var state_15350__$1 = state_15350;if(inst_15249)
{var statearr_15416_15479 = state_15350__$1;(statearr_15416_15479[1] = 19);
} else
{var statearr_15417_15480 = state_15350__$1;(statearr_15417_15480[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 38))
{var inst_15329 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15418_15481 = state_15350__$1;(statearr_15418_15481[2] = inst_15329);
(statearr_15418_15481[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 30))
{var inst_15289 = (state_15350[9]);var inst_15288 = (state_15350[18]);var inst_15286 = (state_15350[19]);var inst_15287 = (state_15350[10]);var inst_15303 = (state_15350[2]);var inst_15304 = (inst_15289 + 1);var tmp15413 = inst_15288;var tmp15414 = inst_15286;var tmp15415 = inst_15287;var inst_15286__$1 = tmp15414;var inst_15287__$1 = tmp15415;var inst_15288__$1 = tmp15413;var inst_15289__$1 = inst_15304;var state_15350__$1 = (function (){var statearr_15419 = state_15350;(statearr_15419[9] = inst_15289__$1);
(statearr_15419[18] = inst_15288__$1);
(statearr_15419[19] = inst_15286__$1);
(statearr_15419[33] = inst_15303);
(statearr_15419[10] = inst_15287__$1);
return statearr_15419;
})();var statearr_15420_15482 = state_15350__$1;(statearr_15420_15482[2] = null);
(statearr_15420_15482[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 10))
{var inst_15230 = (state_15350[15]);var inst_15228 = (state_15350[16]);var inst_15236 = cljs.core._nth.call(null,inst_15228,inst_15230);var inst_15237 = cljs.core.nth.call(null,inst_15236,0,null);var inst_15238 = cljs.core.nth.call(null,inst_15236,1,null);var state_15350__$1 = (function (){var statearr_15421 = state_15350;(statearr_15421[28] = inst_15237);
return statearr_15421;
})();if(cljs.core.truth_(inst_15238))
{var statearr_15422_15483 = state_15350__$1;(statearr_15422_15483[1] = 13);
} else
{var statearr_15423_15484 = state_15350__$1;(statearr_15423_15484[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 18))
{var inst_15271 = (state_15350[2]);var state_15350__$1 = state_15350;var statearr_15424_15485 = state_15350__$1;(statearr_15424_15485[2] = inst_15271);
(statearr_15424_15485[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 42))
{var state_15350__$1 = state_15350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15350__$1,45,dchan);
} else
{if((state_val_15351 === 37))
{var inst_15307 = (state_15350[17]);var inst_15316 = cljs.core.first.call(null,inst_15307);var state_15350__$1 = (function (){var statearr_15425 = state_15350;(statearr_15425[25] = inst_15316);
return statearr_15425;
})();var statearr_15426_15486 = state_15350__$1;(statearr_15426_15486[2] = null);
(statearr_15426_15486[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15351 === 8))
{var inst_15229 = (state_15350[14]);var inst_15230 = (state_15350[15]);var inst_15232 = (inst_15230 < inst_15229);var inst_15233 = inst_15232;var state_15350__$1 = state_15350;if(cljs.core.truth_(inst_15233))
{var statearr_15427_15487 = state_15350__$1;(statearr_15427_15487[1] = 10);
} else
{var statearr_15428_15488 = state_15350__$1;(statearr_15428_15488[1] = 11);
}
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
});})(c__5689__auto___15436,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___15436,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_15432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15432[0] = state_machine__5675__auto__);
(statearr_15432[1] = 1);
return statearr_15432;
});
var state_machine__5675__auto____1 = (function (state_15350){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_15350);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e15433){if((e15433 instanceof Object))
{var ex__5678__auto__ = e15433;var statearr_15434_15489 = state_15350;(statearr_15434_15489[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15490 = state_15350;
state_15350 = G__15490;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_15350){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_15350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___15436,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_15435 = f__5690__auto__.call(null);(statearr_15435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___15436);
return statearr_15435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___15436,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj15492 = {};return obj15492;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t15602 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15602 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15603){
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
this.meta15603 = meta15603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15602.cljs$lang$type = true;
cljs.core.async.t15602.cljs$lang$ctorStr = "cljs.core.async/t15602";
cljs.core.async.t15602.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t15602");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15602.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15604){var self__ = this;
var _15604__$1 = this;return self__.meta15603;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15604,meta15603__$1){var self__ = this;
var _15604__$1 = this;return (new cljs.core.async.t15602(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15603__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15602 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15602(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15603){return (new cljs.core.async.t15602(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15603));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15602(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___15711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___15711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___15711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15669){var state_val_15670 = (state_15669[1]);if((state_val_15670 === 7))
{var inst_15618 = (state_15669[7]);var inst_15623 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15618);var state_15669__$1 = state_15669;var statearr_15671_15712 = state_15669__$1;(statearr_15671_15712[2] = inst_15623);
(statearr_15671_15712[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 20))
{var inst_15633 = (state_15669[8]);var state_15669__$1 = state_15669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15669__$1,23,out,inst_15633);
} else
{if((state_val_15670 === 1))
{var inst_15608 = (state_15669[9]);var inst_15608__$1 = calc_state.call(null);var inst_15609 = cljs.core.seq_QMARK_.call(null,inst_15608__$1);var state_15669__$1 = (function (){var statearr_15672 = state_15669;(statearr_15672[9] = inst_15608__$1);
return statearr_15672;
})();if(inst_15609)
{var statearr_15673_15713 = state_15669__$1;(statearr_15673_15713[1] = 2);
} else
{var statearr_15674_15714 = state_15669__$1;(statearr_15674_15714[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 4))
{var inst_15608 = (state_15669[9]);var inst_15614 = (state_15669[2]);var inst_15615 = cljs.core.get.call(null,inst_15614,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15616 = cljs.core.get.call(null,inst_15614,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15617 = cljs.core.get.call(null,inst_15614,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15618 = inst_15608;var state_15669__$1 = (function (){var statearr_15675 = state_15669;(statearr_15675[7] = inst_15618);
(statearr_15675[10] = inst_15616);
(statearr_15675[11] = inst_15617);
(statearr_15675[12] = inst_15615);
return statearr_15675;
})();var statearr_15676_15715 = state_15669__$1;(statearr_15676_15715[2] = null);
(statearr_15676_15715[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 15))
{var state_15669__$1 = state_15669;var statearr_15677_15716 = state_15669__$1;(statearr_15677_15716[2] = null);
(statearr_15677_15716[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 21))
{var state_15669__$1 = state_15669;var statearr_15678_15717 = state_15669__$1;(statearr_15678_15717[2] = null);
(statearr_15678_15717[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 13))
{var inst_15665 = (state_15669[2]);var state_15669__$1 = state_15669;var statearr_15679_15718 = state_15669__$1;(statearr_15679_15718[2] = inst_15665);
(statearr_15679_15718[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 22))
{var inst_15626 = (state_15669[13]);var inst_15662 = (state_15669[2]);var inst_15618 = inst_15626;var state_15669__$1 = (function (){var statearr_15680 = state_15669;(statearr_15680[7] = inst_15618);
(statearr_15680[14] = inst_15662);
return statearr_15680;
})();var statearr_15681_15719 = state_15669__$1;(statearr_15681_15719[2] = null);
(statearr_15681_15719[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 6))
{var inst_15667 = (state_15669[2]);var state_15669__$1 = state_15669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15669__$1,inst_15667);
} else
{if((state_val_15670 === 17))
{var inst_15648 = (state_15669[15]);var state_15669__$1 = state_15669;var statearr_15682_15720 = state_15669__$1;(statearr_15682_15720[2] = inst_15648);
(statearr_15682_15720[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 3))
{var inst_15608 = (state_15669[9]);var state_15669__$1 = state_15669;var statearr_15683_15721 = state_15669__$1;(statearr_15683_15721[2] = inst_15608);
(statearr_15683_15721[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 12))
{var inst_15629 = (state_15669[16]);var inst_15648 = (state_15669[15]);var inst_15634 = (state_15669[17]);var inst_15648__$1 = inst_15629.call(null,inst_15634);var state_15669__$1 = (function (){var statearr_15684 = state_15669;(statearr_15684[15] = inst_15648__$1);
return statearr_15684;
})();if(cljs.core.truth_(inst_15648__$1))
{var statearr_15685_15722 = state_15669__$1;(statearr_15685_15722[1] = 17);
} else
{var statearr_15686_15723 = state_15669__$1;(statearr_15686_15723[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 2))
{var inst_15608 = (state_15669[9]);var inst_15611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15608);var state_15669__$1 = state_15669;var statearr_15687_15724 = state_15669__$1;(statearr_15687_15724[2] = inst_15611);
(statearr_15687_15724[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 23))
{var inst_15659 = (state_15669[2]);var state_15669__$1 = state_15669;var statearr_15688_15725 = state_15669__$1;(statearr_15688_15725[2] = inst_15659);
(statearr_15688_15725[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 19))
{var inst_15656 = (state_15669[2]);var state_15669__$1 = state_15669;if(cljs.core.truth_(inst_15656))
{var statearr_15689_15726 = state_15669__$1;(statearr_15689_15726[1] = 20);
} else
{var statearr_15690_15727 = state_15669__$1;(statearr_15690_15727[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 11))
{var inst_15633 = (state_15669[8]);var inst_15639 = (inst_15633 == null);var state_15669__$1 = state_15669;if(cljs.core.truth_(inst_15639))
{var statearr_15691_15728 = state_15669__$1;(statearr_15691_15728[1] = 14);
} else
{var statearr_15692_15729 = state_15669__$1;(statearr_15692_15729[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 9))
{var inst_15626 = (state_15669[13]);var inst_15626__$1 = (state_15669[2]);var inst_15627 = cljs.core.get.call(null,inst_15626__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15628 = cljs.core.get.call(null,inst_15626__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15629 = cljs.core.get.call(null,inst_15626__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15669__$1 = (function (){var statearr_15693 = state_15669;(statearr_15693[16] = inst_15629);
(statearr_15693[18] = inst_15628);
(statearr_15693[13] = inst_15626__$1);
return statearr_15693;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15669__$1,10,inst_15627);
} else
{if((state_val_15670 === 5))
{var inst_15618 = (state_15669[7]);var inst_15621 = cljs.core.seq_QMARK_.call(null,inst_15618);var state_15669__$1 = state_15669;if(inst_15621)
{var statearr_15694_15730 = state_15669__$1;(statearr_15694_15730[1] = 7);
} else
{var statearr_15695_15731 = state_15669__$1;(statearr_15695_15731[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 14))
{var inst_15634 = (state_15669[17]);var inst_15641 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15634);var state_15669__$1 = state_15669;var statearr_15696_15732 = state_15669__$1;(statearr_15696_15732[2] = inst_15641);
(statearr_15696_15732[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 16))
{var inst_15644 = (state_15669[2]);var inst_15645 = calc_state.call(null);var inst_15618 = inst_15645;var state_15669__$1 = (function (){var statearr_15697 = state_15669;(statearr_15697[7] = inst_15618);
(statearr_15697[19] = inst_15644);
return statearr_15697;
})();var statearr_15698_15733 = state_15669__$1;(statearr_15698_15733[2] = null);
(statearr_15698_15733[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 10))
{var inst_15633 = (state_15669[8]);var inst_15634 = (state_15669[17]);var inst_15632 = (state_15669[2]);var inst_15633__$1 = cljs.core.nth.call(null,inst_15632,0,null);var inst_15634__$1 = cljs.core.nth.call(null,inst_15632,1,null);var inst_15635 = (inst_15633__$1 == null);var inst_15636 = cljs.core._EQ_.call(null,inst_15634__$1,change);var inst_15637 = (inst_15635) || (inst_15636);var state_15669__$1 = (function (){var statearr_15699 = state_15669;(statearr_15699[8] = inst_15633__$1);
(statearr_15699[17] = inst_15634__$1);
return statearr_15699;
})();if(cljs.core.truth_(inst_15637))
{var statearr_15700_15734 = state_15669__$1;(statearr_15700_15734[1] = 11);
} else
{var statearr_15701_15735 = state_15669__$1;(statearr_15701_15735[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 18))
{var inst_15629 = (state_15669[16]);var inst_15628 = (state_15669[18]);var inst_15634 = (state_15669[17]);var inst_15651 = cljs.core.empty_QMARK_.call(null,inst_15629);var inst_15652 = inst_15628.call(null,inst_15634);var inst_15653 = cljs.core.not.call(null,inst_15652);var inst_15654 = (inst_15651) && (inst_15653);var state_15669__$1 = state_15669;var statearr_15702_15736 = state_15669__$1;(statearr_15702_15736[2] = inst_15654);
(statearr_15702_15736[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15670 === 8))
{var inst_15618 = (state_15669[7]);var state_15669__$1 = state_15669;var statearr_15703_15737 = state_15669__$1;(statearr_15703_15737[2] = inst_15618);
(statearr_15703_15737[1] = 9);
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
});})(c__5689__auto___15711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___15711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_15707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15707[0] = state_machine__5675__auto__);
(statearr_15707[1] = 1);
return statearr_15707;
});
var state_machine__5675__auto____1 = (function (state_15669){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_15669);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e15708){if((e15708 instanceof Object))
{var ex__5678__auto__ = e15708;var statearr_15709_15738 = state_15669;(statearr_15709_15738[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15739 = state_15669;
state_15669 = G__15739;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_15669){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_15669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___15711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_15710 = f__5690__auto__.call(null);(statearr_15710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___15711);
return statearr_15710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___15711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj15741 = {};return obj15741;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
return (function (topic){var or__3539__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3539__auto__,mults){
return (function (p1__15742_SHARP_){if(cljs.core.truth_(p1__15742_SHARP_.call(null,topic)))
{return p1__15742_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15742_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15867 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15867 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15868){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15868 = meta15868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15867.cljs$lang$type = true;
cljs.core.async.t15867.cljs$lang$ctorStr = "cljs.core.async/t15867";
cljs.core.async.t15867.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t15867");
});})(mults,ensure_mult))
;
cljs.core.async.t15867.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15867.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15867.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15867.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15869){var self__ = this;
var _15869__$1 = this;return self__.meta15868;
});})(mults,ensure_mult))
;
cljs.core.async.t15867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15869,meta15868__$1){var self__ = this;
var _15869__$1 = this;return (new cljs.core.async.t15867(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15868__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15867 = ((function (mults,ensure_mult){
return (function __GT_t15867(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15868){return (new cljs.core.async.t15867(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15868));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15867(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___15991 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___15991,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___15991,mults,ensure_mult,p){
return (function (state_15943){var state_val_15944 = (state_15943[1]);if((state_val_15944 === 7))
{var inst_15939 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15945_15992 = state_15943__$1;(statearr_15945_15992[2] = inst_15939);
(statearr_15945_15992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 20))
{var state_15943__$1 = state_15943;var statearr_15946_15993 = state_15943__$1;(statearr_15946_15993[2] = null);
(statearr_15946_15993[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 1))
{var state_15943__$1 = state_15943;var statearr_15947_15994 = state_15943__$1;(statearr_15947_15994[2] = null);
(statearr_15947_15994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 24))
{var inst_15872 = (state_15943[7]);var inst_15922 = (state_15943[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15943,23,Object,null,22);var inst_15929 = cljs.core.async.muxch_STAR_.call(null,inst_15922);var state_15943__$1 = state_15943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15943__$1,25,inst_15929,inst_15872);
} else
{if((state_val_15944 === 4))
{var inst_15872 = (state_15943[7]);var inst_15872__$1 = (state_15943[2]);var inst_15873 = (inst_15872__$1 == null);var state_15943__$1 = (function (){var statearr_15948 = state_15943;(statearr_15948[7] = inst_15872__$1);
return statearr_15948;
})();if(cljs.core.truth_(inst_15873))
{var statearr_15949_15995 = state_15943__$1;(statearr_15949_15995[1] = 5);
} else
{var statearr_15950_15996 = state_15943__$1;(statearr_15950_15996[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 15))
{var inst_15914 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15951_15997 = state_15943__$1;(statearr_15951_15997[2] = inst_15914);
(statearr_15951_15997[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 21))
{var inst_15936 = (state_15943[2]);var state_15943__$1 = (function (){var statearr_15952 = state_15943;(statearr_15952[9] = inst_15936);
return statearr_15952;
})();var statearr_15953_15998 = state_15943__$1;(statearr_15953_15998[2] = null);
(statearr_15953_15998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 13))
{var inst_15896 = (state_15943[10]);var inst_15898 = cljs.core.chunked_seq_QMARK_.call(null,inst_15896);var state_15943__$1 = state_15943;if(inst_15898)
{var statearr_15954_15999 = state_15943__$1;(statearr_15954_15999[1] = 16);
} else
{var statearr_15955_16000 = state_15943__$1;(statearr_15955_16000[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 22))
{var inst_15933 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15956_16001 = state_15943__$1;(statearr_15956_16001[2] = inst_15933);
(statearr_15956_16001[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 6))
{var inst_15920 = (state_15943[11]);var inst_15872 = (state_15943[7]);var inst_15922 = (state_15943[8]);var inst_15920__$1 = topic_fn.call(null,inst_15872);var inst_15921 = cljs.core.deref.call(null,mults);var inst_15922__$1 = cljs.core.get.call(null,inst_15921,inst_15920__$1);var state_15943__$1 = (function (){var statearr_15957 = state_15943;(statearr_15957[11] = inst_15920__$1);
(statearr_15957[8] = inst_15922__$1);
return statearr_15957;
})();if(cljs.core.truth_(inst_15922__$1))
{var statearr_15958_16002 = state_15943__$1;(statearr_15958_16002[1] = 19);
} else
{var statearr_15959_16003 = state_15943__$1;(statearr_15959_16003[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 25))
{var inst_15931 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15960_16004 = state_15943__$1;(statearr_15960_16004[2] = inst_15931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15943__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 17))
{var inst_15896 = (state_15943[10]);var inst_15905 = cljs.core.first.call(null,inst_15896);var inst_15906 = cljs.core.async.muxch_STAR_.call(null,inst_15905);var inst_15907 = cljs.core.async.close_BANG_.call(null,inst_15906);var inst_15908 = cljs.core.next.call(null,inst_15896);var inst_15882 = inst_15908;var inst_15883 = null;var inst_15884 = 0;var inst_15885 = 0;var state_15943__$1 = (function (){var statearr_15961 = state_15943;(statearr_15961[12] = inst_15883);
(statearr_15961[13] = inst_15882);
(statearr_15961[14] = inst_15907);
(statearr_15961[15] = inst_15885);
(statearr_15961[16] = inst_15884);
return statearr_15961;
})();var statearr_15962_16005 = state_15943__$1;(statearr_15962_16005[2] = null);
(statearr_15962_16005[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 3))
{var inst_15941 = (state_15943[2]);var state_15943__$1 = state_15943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15943__$1,inst_15941);
} else
{if((state_val_15944 === 12))
{var inst_15916 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15963_16006 = state_15943__$1;(statearr_15963_16006[2] = inst_15916);
(statearr_15963_16006[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 2))
{var state_15943__$1 = state_15943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15943__$1,4,ch);
} else
{if((state_val_15944 === 23))
{var inst_15920 = (state_15943[11]);var inst_15924 = (state_15943[2]);var inst_15925 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15920);var state_15943__$1 = (function (){var statearr_15964 = state_15943;(statearr_15964[17] = inst_15924);
return statearr_15964;
})();var statearr_15965_16007 = state_15943__$1;(statearr_15965_16007[2] = inst_15925);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15943__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 19))
{var state_15943__$1 = state_15943;var statearr_15966_16008 = state_15943__$1;(statearr_15966_16008[2] = null);
(statearr_15966_16008[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 11))
{var inst_15882 = (state_15943[13]);var inst_15896 = (state_15943[10]);var inst_15896__$1 = cljs.core.seq.call(null,inst_15882);var state_15943__$1 = (function (){var statearr_15967 = state_15943;(statearr_15967[10] = inst_15896__$1);
return statearr_15967;
})();if(inst_15896__$1)
{var statearr_15968_16009 = state_15943__$1;(statearr_15968_16009[1] = 13);
} else
{var statearr_15969_16010 = state_15943__$1;(statearr_15969_16010[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 9))
{var inst_15918 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15970_16011 = state_15943__$1;(statearr_15970_16011[2] = inst_15918);
(statearr_15970_16011[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 5))
{var inst_15879 = cljs.core.deref.call(null,mults);var inst_15880 = cljs.core.vals.call(null,inst_15879);var inst_15881 = cljs.core.seq.call(null,inst_15880);var inst_15882 = inst_15881;var inst_15883 = null;var inst_15884 = 0;var inst_15885 = 0;var state_15943__$1 = (function (){var statearr_15971 = state_15943;(statearr_15971[12] = inst_15883);
(statearr_15971[13] = inst_15882);
(statearr_15971[15] = inst_15885);
(statearr_15971[16] = inst_15884);
return statearr_15971;
})();var statearr_15972_16012 = state_15943__$1;(statearr_15972_16012[2] = null);
(statearr_15972_16012[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 14))
{var state_15943__$1 = state_15943;var statearr_15976_16013 = state_15943__$1;(statearr_15976_16013[2] = null);
(statearr_15976_16013[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 16))
{var inst_15896 = (state_15943[10]);var inst_15900 = cljs.core.chunk_first.call(null,inst_15896);var inst_15901 = cljs.core.chunk_rest.call(null,inst_15896);var inst_15902 = cljs.core.count.call(null,inst_15900);var inst_15882 = inst_15901;var inst_15883 = inst_15900;var inst_15884 = inst_15902;var inst_15885 = 0;var state_15943__$1 = (function (){var statearr_15977 = state_15943;(statearr_15977[12] = inst_15883);
(statearr_15977[13] = inst_15882);
(statearr_15977[15] = inst_15885);
(statearr_15977[16] = inst_15884);
return statearr_15977;
})();var statearr_15978_16014 = state_15943__$1;(statearr_15978_16014[2] = null);
(statearr_15978_16014[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 10))
{var inst_15883 = (state_15943[12]);var inst_15882 = (state_15943[13]);var inst_15885 = (state_15943[15]);var inst_15884 = (state_15943[16]);var inst_15890 = cljs.core._nth.call(null,inst_15883,inst_15885);var inst_15891 = cljs.core.async.muxch_STAR_.call(null,inst_15890);var inst_15892 = cljs.core.async.close_BANG_.call(null,inst_15891);var inst_15893 = (inst_15885 + 1);var tmp15973 = inst_15883;var tmp15974 = inst_15882;var tmp15975 = inst_15884;var inst_15882__$1 = tmp15974;var inst_15883__$1 = tmp15973;var inst_15884__$1 = tmp15975;var inst_15885__$1 = inst_15893;var state_15943__$1 = (function (){var statearr_15979 = state_15943;(statearr_15979[12] = inst_15883__$1);
(statearr_15979[18] = inst_15892);
(statearr_15979[13] = inst_15882__$1);
(statearr_15979[15] = inst_15885__$1);
(statearr_15979[16] = inst_15884__$1);
return statearr_15979;
})();var statearr_15980_16015 = state_15943__$1;(statearr_15980_16015[2] = null);
(statearr_15980_16015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 18))
{var inst_15911 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15981_16016 = state_15943__$1;(statearr_15981_16016[2] = inst_15911);
(statearr_15981_16016[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 8))
{var inst_15885 = (state_15943[15]);var inst_15884 = (state_15943[16]);var inst_15887 = (inst_15885 < inst_15884);var inst_15888 = inst_15887;var state_15943__$1 = state_15943;if(cljs.core.truth_(inst_15888))
{var statearr_15982_16017 = state_15943__$1;(statearr_15982_16017[1] = 10);
} else
{var statearr_15983_16018 = state_15943__$1;(statearr_15983_16018[1] = 11);
}
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
});})(c__5689__auto___15991,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___15991,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_15987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15987[0] = state_machine__5675__auto__);
(statearr_15987[1] = 1);
return statearr_15987;
});
var state_machine__5675__auto____1 = (function (state_15943){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_15943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e15988){if((e15988 instanceof Object))
{var ex__5678__auto__ = e15988;var statearr_15989_16019 = state_15943;(statearr_15989_16019[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15943);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16020 = state_15943;
state_15943 = G__16020;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_15943){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_15943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___15991,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_15990 = f__5690__auto__.call(null);(statearr_15990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___15991);
return statearr_15990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___15991,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5689__auto___16157 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16157,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16157,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16127){var state_val_16128 = (state_16127[1]);if((state_val_16128 === 7))
{var state_16127__$1 = state_16127;var statearr_16129_16158 = state_16127__$1;(statearr_16129_16158[2] = null);
(statearr_16129_16158[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 1))
{var state_16127__$1 = state_16127;var statearr_16130_16159 = state_16127__$1;(statearr_16130_16159[2] = null);
(statearr_16130_16159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 4))
{var inst_16091 = (state_16127[7]);var inst_16093 = (inst_16091 < cnt);var state_16127__$1 = state_16127;if(cljs.core.truth_(inst_16093))
{var statearr_16131_16160 = state_16127__$1;(statearr_16131_16160[1] = 6);
} else
{var statearr_16132_16161 = state_16127__$1;(statearr_16132_16161[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 15))
{var inst_16123 = (state_16127[2]);var state_16127__$1 = state_16127;var statearr_16133_16162 = state_16127__$1;(statearr_16133_16162[2] = inst_16123);
(statearr_16133_16162[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 13))
{var inst_16116 = cljs.core.async.close_BANG_.call(null,out);var state_16127__$1 = state_16127;var statearr_16134_16163 = state_16127__$1;(statearr_16134_16163[2] = inst_16116);
(statearr_16134_16163[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 6))
{var state_16127__$1 = state_16127;var statearr_16135_16164 = state_16127__$1;(statearr_16135_16164[2] = null);
(statearr_16135_16164[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 3))
{var inst_16125 = (state_16127[2]);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16127__$1,inst_16125);
} else
{if((state_val_16128 === 12))
{var inst_16113 = (state_16127[8]);var inst_16113__$1 = (state_16127[2]);var inst_16114 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16113__$1);var state_16127__$1 = (function (){var statearr_16136 = state_16127;(statearr_16136[8] = inst_16113__$1);
return statearr_16136;
})();if(cljs.core.truth_(inst_16114))
{var statearr_16137_16165 = state_16127__$1;(statearr_16137_16165[1] = 13);
} else
{var statearr_16138_16166 = state_16127__$1;(statearr_16138_16166[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 2))
{var inst_16090 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16091 = 0;var state_16127__$1 = (function (){var statearr_16139 = state_16127;(statearr_16139[7] = inst_16091);
(statearr_16139[9] = inst_16090);
return statearr_16139;
})();var statearr_16140_16167 = state_16127__$1;(statearr_16140_16167[2] = null);
(statearr_16140_16167[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 11))
{var inst_16091 = (state_16127[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16127,10,Object,null,9);var inst_16100 = chs__$1.call(null,inst_16091);var inst_16101 = done.call(null,inst_16091);var inst_16102 = cljs.core.async.take_BANG_.call(null,inst_16100,inst_16101);var state_16127__$1 = state_16127;var statearr_16141_16168 = state_16127__$1;(statearr_16141_16168[2] = inst_16102);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16127__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 9))
{var inst_16091 = (state_16127[7]);var inst_16104 = (state_16127[2]);var inst_16105 = (inst_16091 + 1);var inst_16091__$1 = inst_16105;var state_16127__$1 = (function (){var statearr_16142 = state_16127;(statearr_16142[10] = inst_16104);
(statearr_16142[7] = inst_16091__$1);
return statearr_16142;
})();var statearr_16143_16169 = state_16127__$1;(statearr_16143_16169[2] = null);
(statearr_16143_16169[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 5))
{var inst_16111 = (state_16127[2]);var state_16127__$1 = (function (){var statearr_16144 = state_16127;(statearr_16144[11] = inst_16111);
return statearr_16144;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16127__$1,12,dchan);
} else
{if((state_val_16128 === 14))
{var inst_16113 = (state_16127[8]);var inst_16118 = cljs.core.apply.call(null,f,inst_16113);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16127__$1,16,out,inst_16118);
} else
{if((state_val_16128 === 16))
{var inst_16120 = (state_16127[2]);var state_16127__$1 = (function (){var statearr_16145 = state_16127;(statearr_16145[12] = inst_16120);
return statearr_16145;
})();var statearr_16146_16170 = state_16127__$1;(statearr_16146_16170[2] = null);
(statearr_16146_16170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 10))
{var inst_16095 = (state_16127[2]);var inst_16096 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16127__$1 = (function (){var statearr_16147 = state_16127;(statearr_16147[13] = inst_16095);
return statearr_16147;
})();var statearr_16148_16171 = state_16127__$1;(statearr_16148_16171[2] = inst_16096);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16127__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 8))
{var inst_16109 = (state_16127[2]);var state_16127__$1 = state_16127;var statearr_16149_16172 = state_16127__$1;(statearr_16149_16172[2] = inst_16109);
(statearr_16149_16172[1] = 5);
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
});})(c__5689__auto___16157,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___16157,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16153[0] = state_machine__5675__auto__);
(statearr_16153[1] = 1);
return statearr_16153;
});
var state_machine__5675__auto____1 = (function (state_16127){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16127);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16154){if((e16154 instanceof Object))
{var ex__5678__auto__ = e16154;var statearr_16155_16173 = state_16127;(statearr_16155_16173[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16127);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16174 = state_16127;
state_16127 = G__16174;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16127){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16157,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_16156 = f__5690__auto__.call(null);(statearr_16156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16157);
return statearr_16156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16157,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16282 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16282,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16282,out){
return (function (state_16258){var state_val_16259 = (state_16258[1]);if((state_val_16259 === 7))
{var inst_16237 = (state_16258[7]);var inst_16238 = (state_16258[8]);var inst_16237__$1 = (state_16258[2]);var inst_16238__$1 = cljs.core.nth.call(null,inst_16237__$1,0,null);var inst_16239 = cljs.core.nth.call(null,inst_16237__$1,1,null);var inst_16240 = (inst_16238__$1 == null);var state_16258__$1 = (function (){var statearr_16260 = state_16258;(statearr_16260[9] = inst_16239);
(statearr_16260[7] = inst_16237__$1);
(statearr_16260[8] = inst_16238__$1);
return statearr_16260;
})();if(cljs.core.truth_(inst_16240))
{var statearr_16261_16283 = state_16258__$1;(statearr_16261_16283[1] = 8);
} else
{var statearr_16262_16284 = state_16258__$1;(statearr_16262_16284[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16259 === 1))
{var inst_16229 = cljs.core.vec.call(null,chs);var inst_16230 = inst_16229;var state_16258__$1 = (function (){var statearr_16263 = state_16258;(statearr_16263[10] = inst_16230);
return statearr_16263;
})();var statearr_16264_16285 = state_16258__$1;(statearr_16264_16285[2] = null);
(statearr_16264_16285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16259 === 4))
{var inst_16230 = (state_16258[10]);var state_16258__$1 = state_16258;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16258__$1,7,inst_16230);
} else
{if((state_val_16259 === 6))
{var inst_16254 = (state_16258[2]);var state_16258__$1 = state_16258;var statearr_16265_16286 = state_16258__$1;(statearr_16265_16286[2] = inst_16254);
(statearr_16265_16286[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16259 === 3))
{var inst_16256 = (state_16258[2]);var state_16258__$1 = state_16258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16258__$1,inst_16256);
} else
{if((state_val_16259 === 2))
{var inst_16230 = (state_16258[10]);var inst_16232 = cljs.core.count.call(null,inst_16230);var inst_16233 = (inst_16232 > 0);var state_16258__$1 = state_16258;if(cljs.core.truth_(inst_16233))
{var statearr_16267_16287 = state_16258__$1;(statearr_16267_16287[1] = 4);
} else
{var statearr_16268_16288 = state_16258__$1;(statearr_16268_16288[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16259 === 11))
{var inst_16230 = (state_16258[10]);var inst_16247 = (state_16258[2]);var tmp16266 = inst_16230;var inst_16230__$1 = tmp16266;var state_16258__$1 = (function (){var statearr_16269 = state_16258;(statearr_16269[11] = inst_16247);
(statearr_16269[10] = inst_16230__$1);
return statearr_16269;
})();var statearr_16270_16289 = state_16258__$1;(statearr_16270_16289[2] = null);
(statearr_16270_16289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16259 === 9))
{var inst_16238 = (state_16258[8]);var state_16258__$1 = state_16258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16258__$1,11,out,inst_16238);
} else
{if((state_val_16259 === 5))
{var inst_16252 = cljs.core.async.close_BANG_.call(null,out);var state_16258__$1 = state_16258;var statearr_16271_16290 = state_16258__$1;(statearr_16271_16290[2] = inst_16252);
(statearr_16271_16290[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16259 === 10))
{var inst_16250 = (state_16258[2]);var state_16258__$1 = state_16258;var statearr_16272_16291 = state_16258__$1;(statearr_16272_16291[2] = inst_16250);
(statearr_16272_16291[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16259 === 8))
{var inst_16239 = (state_16258[9]);var inst_16237 = (state_16258[7]);var inst_16238 = (state_16258[8]);var inst_16230 = (state_16258[10]);var inst_16242 = (function (){var c = inst_16239;var v = inst_16238;var vec__16235 = inst_16237;var cs = inst_16230;return ((function (c,v,vec__16235,cs,inst_16239,inst_16237,inst_16238,inst_16230,state_val_16259,c__5689__auto___16282,out){
return (function (p1__16175_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16175_SHARP_);
});
;})(c,v,vec__16235,cs,inst_16239,inst_16237,inst_16238,inst_16230,state_val_16259,c__5689__auto___16282,out))
})();var inst_16243 = cljs.core.filterv.call(null,inst_16242,inst_16230);var inst_16230__$1 = inst_16243;var state_16258__$1 = (function (){var statearr_16273 = state_16258;(statearr_16273[10] = inst_16230__$1);
return statearr_16273;
})();var statearr_16274_16292 = state_16258__$1;(statearr_16274_16292[2] = null);
(statearr_16274_16292[1] = 2);
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
});})(c__5689__auto___16282,out))
;return ((function (switch__5674__auto__,c__5689__auto___16282,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16278 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16278[0] = state_machine__5675__auto__);
(statearr_16278[1] = 1);
return statearr_16278;
});
var state_machine__5675__auto____1 = (function (state_16258){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16258);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16279){if((e16279 instanceof Object))
{var ex__5678__auto__ = e16279;var statearr_16280_16293 = state_16258;(statearr_16280_16293[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16294 = state_16258;
state_16258 = G__16294;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16258){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16282,out))
})();var state__5691__auto__ = (function (){var statearr_16281 = f__5690__auto__.call(null);(statearr_16281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16282);
return statearr_16281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16282,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16387,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16387,out){
return (function (state_16364){var state_val_16365 = (state_16364[1]);if((state_val_16365 === 7))
{var inst_16346 = (state_16364[7]);var inst_16346__$1 = (state_16364[2]);var inst_16347 = (inst_16346__$1 == null);var inst_16348 = cljs.core.not.call(null,inst_16347);var state_16364__$1 = (function (){var statearr_16366 = state_16364;(statearr_16366[7] = inst_16346__$1);
return statearr_16366;
})();if(inst_16348)
{var statearr_16367_16388 = state_16364__$1;(statearr_16367_16388[1] = 8);
} else
{var statearr_16368_16389 = state_16364__$1;(statearr_16368_16389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 1))
{var inst_16341 = 0;var state_16364__$1 = (function (){var statearr_16369 = state_16364;(statearr_16369[8] = inst_16341);
return statearr_16369;
})();var statearr_16370_16390 = state_16364__$1;(statearr_16370_16390[2] = null);
(statearr_16370_16390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 4))
{var state_16364__$1 = state_16364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16364__$1,7,ch);
} else
{if((state_val_16365 === 6))
{var inst_16359 = (state_16364[2]);var state_16364__$1 = state_16364;var statearr_16371_16391 = state_16364__$1;(statearr_16371_16391[2] = inst_16359);
(statearr_16371_16391[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 3))
{var inst_16361 = (state_16364[2]);var inst_16362 = cljs.core.async.close_BANG_.call(null,out);var state_16364__$1 = (function (){var statearr_16372 = state_16364;(statearr_16372[9] = inst_16361);
return statearr_16372;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16364__$1,inst_16362);
} else
{if((state_val_16365 === 2))
{var inst_16341 = (state_16364[8]);var inst_16343 = (inst_16341 < n);var state_16364__$1 = state_16364;if(cljs.core.truth_(inst_16343))
{var statearr_16373_16392 = state_16364__$1;(statearr_16373_16392[1] = 4);
} else
{var statearr_16374_16393 = state_16364__$1;(statearr_16374_16393[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 11))
{var inst_16341 = (state_16364[8]);var inst_16351 = (state_16364[2]);var inst_16352 = (inst_16341 + 1);var inst_16341__$1 = inst_16352;var state_16364__$1 = (function (){var statearr_16375 = state_16364;(statearr_16375[8] = inst_16341__$1);
(statearr_16375[10] = inst_16351);
return statearr_16375;
})();var statearr_16376_16394 = state_16364__$1;(statearr_16376_16394[2] = null);
(statearr_16376_16394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 9))
{var state_16364__$1 = state_16364;var statearr_16377_16395 = state_16364__$1;(statearr_16377_16395[2] = null);
(statearr_16377_16395[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 5))
{var state_16364__$1 = state_16364;var statearr_16378_16396 = state_16364__$1;(statearr_16378_16396[2] = null);
(statearr_16378_16396[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 10))
{var inst_16356 = (state_16364[2]);var state_16364__$1 = state_16364;var statearr_16379_16397 = state_16364__$1;(statearr_16379_16397[2] = inst_16356);
(statearr_16379_16397[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16365 === 8))
{var inst_16346 = (state_16364[7]);var state_16364__$1 = state_16364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16364__$1,11,out,inst_16346);
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
});})(c__5689__auto___16387,out))
;return ((function (switch__5674__auto__,c__5689__auto___16387,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16383 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16383[0] = state_machine__5675__auto__);
(statearr_16383[1] = 1);
return statearr_16383;
});
var state_machine__5675__auto____1 = (function (state_16364){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16364);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16384){if((e16384 instanceof Object))
{var ex__5678__auto__ = e16384;var statearr_16385_16398 = state_16364;(statearr_16385_16398[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16364);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16399 = state_16364;
state_16364 = G__16399;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16364){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16387,out))
})();var state__5691__auto__ = (function (){var statearr_16386 = f__5690__auto__.call(null);(statearr_16386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16387);
return statearr_16386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16387,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16496,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16496,out){
return (function (state_16471){var state_val_16472 = (state_16471[1]);if((state_val_16472 === 7))
{var inst_16466 = (state_16471[2]);var state_16471__$1 = state_16471;var statearr_16473_16497 = state_16471__$1;(statearr_16473_16497[2] = inst_16466);
(statearr_16473_16497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16472 === 1))
{var inst_16448 = null;var state_16471__$1 = (function (){var statearr_16474 = state_16471;(statearr_16474[7] = inst_16448);
return statearr_16474;
})();var statearr_16475_16498 = state_16471__$1;(statearr_16475_16498[2] = null);
(statearr_16475_16498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16472 === 4))
{var inst_16451 = (state_16471[8]);var inst_16451__$1 = (state_16471[2]);var inst_16452 = (inst_16451__$1 == null);var inst_16453 = cljs.core.not.call(null,inst_16452);var state_16471__$1 = (function (){var statearr_16476 = state_16471;(statearr_16476[8] = inst_16451__$1);
return statearr_16476;
})();if(inst_16453)
{var statearr_16477_16499 = state_16471__$1;(statearr_16477_16499[1] = 5);
} else
{var statearr_16478_16500 = state_16471__$1;(statearr_16478_16500[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16472 === 6))
{var state_16471__$1 = state_16471;var statearr_16479_16501 = state_16471__$1;(statearr_16479_16501[2] = null);
(statearr_16479_16501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16472 === 3))
{var inst_16468 = (state_16471[2]);var inst_16469 = cljs.core.async.close_BANG_.call(null,out);var state_16471__$1 = (function (){var statearr_16480 = state_16471;(statearr_16480[9] = inst_16468);
return statearr_16480;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16471__$1,inst_16469);
} else
{if((state_val_16472 === 2))
{var state_16471__$1 = state_16471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16471__$1,4,ch);
} else
{if((state_val_16472 === 11))
{var inst_16451 = (state_16471[8]);var inst_16460 = (state_16471[2]);var inst_16448 = inst_16451;var state_16471__$1 = (function (){var statearr_16481 = state_16471;(statearr_16481[10] = inst_16460);
(statearr_16481[7] = inst_16448);
return statearr_16481;
})();var statearr_16482_16502 = state_16471__$1;(statearr_16482_16502[2] = null);
(statearr_16482_16502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16472 === 9))
{var inst_16451 = (state_16471[8]);var state_16471__$1 = state_16471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16471__$1,11,out,inst_16451);
} else
{if((state_val_16472 === 5))
{var inst_16451 = (state_16471[8]);var inst_16448 = (state_16471[7]);var inst_16455 = cljs.core._EQ_.call(null,inst_16451,inst_16448);var state_16471__$1 = state_16471;if(inst_16455)
{var statearr_16484_16503 = state_16471__$1;(statearr_16484_16503[1] = 8);
} else
{var statearr_16485_16504 = state_16471__$1;(statearr_16485_16504[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16472 === 10))
{var inst_16463 = (state_16471[2]);var state_16471__$1 = state_16471;var statearr_16486_16505 = state_16471__$1;(statearr_16486_16505[2] = inst_16463);
(statearr_16486_16505[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16472 === 8))
{var inst_16448 = (state_16471[7]);var tmp16483 = inst_16448;var inst_16448__$1 = tmp16483;var state_16471__$1 = (function (){var statearr_16487 = state_16471;(statearr_16487[7] = inst_16448__$1);
return statearr_16487;
})();var statearr_16488_16506 = state_16471__$1;(statearr_16488_16506[2] = null);
(statearr_16488_16506[1] = 2);
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
});})(c__5689__auto___16496,out))
;return ((function (switch__5674__auto__,c__5689__auto___16496,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16492 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16492[0] = state_machine__5675__auto__);
(statearr_16492[1] = 1);
return statearr_16492;
});
var state_machine__5675__auto____1 = (function (state_16471){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16471);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16493){if((e16493 instanceof Object))
{var ex__5678__auto__ = e16493;var statearr_16494_16507 = state_16471;(statearr_16494_16507[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16471);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16508 = state_16471;
state_16471 = G__16508;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16471){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16496,out))
})();var state__5691__auto__ = (function (){var statearr_16495 = f__5690__auto__.call(null);(statearr_16495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16496);
return statearr_16495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16496,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16643,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16643,out){
return (function (state_16613){var state_val_16614 = (state_16613[1]);if((state_val_16614 === 7))
{var inst_16609 = (state_16613[2]);var state_16613__$1 = state_16613;var statearr_16615_16644 = state_16613__$1;(statearr_16615_16644[2] = inst_16609);
(statearr_16615_16644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 1))
{var inst_16576 = (new Array(n));var inst_16577 = inst_16576;var inst_16578 = 0;var state_16613__$1 = (function (){var statearr_16616 = state_16613;(statearr_16616[7] = inst_16577);
(statearr_16616[8] = inst_16578);
return statearr_16616;
})();var statearr_16617_16645 = state_16613__$1;(statearr_16617_16645[2] = null);
(statearr_16617_16645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 4))
{var inst_16581 = (state_16613[9]);var inst_16581__$1 = (state_16613[2]);var inst_16582 = (inst_16581__$1 == null);var inst_16583 = cljs.core.not.call(null,inst_16582);var state_16613__$1 = (function (){var statearr_16618 = state_16613;(statearr_16618[9] = inst_16581__$1);
return statearr_16618;
})();if(inst_16583)
{var statearr_16619_16646 = state_16613__$1;(statearr_16619_16646[1] = 5);
} else
{var statearr_16620_16647 = state_16613__$1;(statearr_16620_16647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 15))
{var inst_16603 = (state_16613[2]);var state_16613__$1 = state_16613;var statearr_16621_16648 = state_16613__$1;(statearr_16621_16648[2] = inst_16603);
(statearr_16621_16648[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 13))
{var state_16613__$1 = state_16613;var statearr_16622_16649 = state_16613__$1;(statearr_16622_16649[2] = null);
(statearr_16622_16649[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 6))
{var inst_16578 = (state_16613[8]);var inst_16599 = (inst_16578 > 0);var state_16613__$1 = state_16613;if(cljs.core.truth_(inst_16599))
{var statearr_16623_16650 = state_16613__$1;(statearr_16623_16650[1] = 12);
} else
{var statearr_16624_16651 = state_16613__$1;(statearr_16624_16651[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 3))
{var inst_16611 = (state_16613[2]);var state_16613__$1 = state_16613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16613__$1,inst_16611);
} else
{if((state_val_16614 === 12))
{var inst_16577 = (state_16613[7]);var inst_16601 = cljs.core.vec.call(null,inst_16577);var state_16613__$1 = state_16613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16613__$1,15,out,inst_16601);
} else
{if((state_val_16614 === 2))
{var state_16613__$1 = state_16613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16613__$1,4,ch);
} else
{if((state_val_16614 === 11))
{var inst_16593 = (state_16613[2]);var inst_16594 = (new Array(n));var inst_16577 = inst_16594;var inst_16578 = 0;var state_16613__$1 = (function (){var statearr_16625 = state_16613;(statearr_16625[7] = inst_16577);
(statearr_16625[10] = inst_16593);
(statearr_16625[8] = inst_16578);
return statearr_16625;
})();var statearr_16626_16652 = state_16613__$1;(statearr_16626_16652[2] = null);
(statearr_16626_16652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 9))
{var inst_16577 = (state_16613[7]);var inst_16591 = cljs.core.vec.call(null,inst_16577);var state_16613__$1 = state_16613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16613__$1,11,out,inst_16591);
} else
{if((state_val_16614 === 5))
{var inst_16577 = (state_16613[7]);var inst_16578 = (state_16613[8]);var inst_16581 = (state_16613[9]);var inst_16586 = (state_16613[11]);var inst_16585 = (inst_16577[inst_16578] = inst_16581);var inst_16586__$1 = (inst_16578 + 1);var inst_16587 = (inst_16586__$1 < n);var state_16613__$1 = (function (){var statearr_16627 = state_16613;(statearr_16627[12] = inst_16585);
(statearr_16627[11] = inst_16586__$1);
return statearr_16627;
})();if(cljs.core.truth_(inst_16587))
{var statearr_16628_16653 = state_16613__$1;(statearr_16628_16653[1] = 8);
} else
{var statearr_16629_16654 = state_16613__$1;(statearr_16629_16654[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 14))
{var inst_16606 = (state_16613[2]);var inst_16607 = cljs.core.async.close_BANG_.call(null,out);var state_16613__$1 = (function (){var statearr_16631 = state_16613;(statearr_16631[13] = inst_16606);
return statearr_16631;
})();var statearr_16632_16655 = state_16613__$1;(statearr_16632_16655[2] = inst_16607);
(statearr_16632_16655[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 10))
{var inst_16597 = (state_16613[2]);var state_16613__$1 = state_16613;var statearr_16633_16656 = state_16613__$1;(statearr_16633_16656[2] = inst_16597);
(statearr_16633_16656[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16614 === 8))
{var inst_16577 = (state_16613[7]);var inst_16586 = (state_16613[11]);var tmp16630 = inst_16577;var inst_16577__$1 = tmp16630;var inst_16578 = inst_16586;var state_16613__$1 = (function (){var statearr_16634 = state_16613;(statearr_16634[7] = inst_16577__$1);
(statearr_16634[8] = inst_16578);
return statearr_16634;
})();var statearr_16635_16657 = state_16613__$1;(statearr_16635_16657[2] = null);
(statearr_16635_16657[1] = 2);
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
});})(c__5689__auto___16643,out))
;return ((function (switch__5674__auto__,c__5689__auto___16643,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16639[0] = state_machine__5675__auto__);
(statearr_16639[1] = 1);
return statearr_16639;
});
var state_machine__5675__auto____1 = (function (state_16613){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16613);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16640){if((e16640 instanceof Object))
{var ex__5678__auto__ = e16640;var statearr_16641_16658 = state_16613;(statearr_16641_16658[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16613);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16659 = state_16613;
state_16613 = G__16659;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16613){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16643,out))
})();var state__5691__auto__ = (function (){var statearr_16642 = f__5690__auto__.call(null);(statearr_16642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16643);
return statearr_16642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16643,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16802,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16802,out){
return (function (state_16772){var state_val_16773 = (state_16772[1]);if((state_val_16773 === 7))
{var inst_16768 = (state_16772[2]);var state_16772__$1 = state_16772;var statearr_16774_16803 = state_16772__$1;(statearr_16774_16803[2] = inst_16768);
(statearr_16774_16803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 1))
{var inst_16731 = [];var inst_16732 = inst_16731;var inst_16733 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16772__$1 = (function (){var statearr_16775 = state_16772;(statearr_16775[7] = inst_16733);
(statearr_16775[8] = inst_16732);
return statearr_16775;
})();var statearr_16776_16804 = state_16772__$1;(statearr_16776_16804[2] = null);
(statearr_16776_16804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 4))
{var inst_16736 = (state_16772[9]);var inst_16736__$1 = (state_16772[2]);var inst_16737 = (inst_16736__$1 == null);var inst_16738 = cljs.core.not.call(null,inst_16737);var state_16772__$1 = (function (){var statearr_16777 = state_16772;(statearr_16777[9] = inst_16736__$1);
return statearr_16777;
})();if(inst_16738)
{var statearr_16778_16805 = state_16772__$1;(statearr_16778_16805[1] = 5);
} else
{var statearr_16779_16806 = state_16772__$1;(statearr_16779_16806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 15))
{var inst_16762 = (state_16772[2]);var state_16772__$1 = state_16772;var statearr_16780_16807 = state_16772__$1;(statearr_16780_16807[2] = inst_16762);
(statearr_16780_16807[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 13))
{var state_16772__$1 = state_16772;var statearr_16781_16808 = state_16772__$1;(statearr_16781_16808[2] = null);
(statearr_16781_16808[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 6))
{var inst_16732 = (state_16772[8]);var inst_16757 = inst_16732.length;var inst_16758 = (inst_16757 > 0);var state_16772__$1 = state_16772;if(cljs.core.truth_(inst_16758))
{var statearr_16782_16809 = state_16772__$1;(statearr_16782_16809[1] = 12);
} else
{var statearr_16783_16810 = state_16772__$1;(statearr_16783_16810[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 3))
{var inst_16770 = (state_16772[2]);var state_16772__$1 = state_16772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16772__$1,inst_16770);
} else
{if((state_val_16773 === 12))
{var inst_16732 = (state_16772[8]);var inst_16760 = cljs.core.vec.call(null,inst_16732);var state_16772__$1 = state_16772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16772__$1,15,out,inst_16760);
} else
{if((state_val_16773 === 2))
{var state_16772__$1 = state_16772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16772__$1,4,ch);
} else
{if((state_val_16773 === 11))
{var inst_16740 = (state_16772[10]);var inst_16736 = (state_16772[9]);var inst_16750 = (state_16772[2]);var inst_16751 = [];var inst_16752 = inst_16751.push(inst_16736);var inst_16732 = inst_16751;var inst_16733 = inst_16740;var state_16772__$1 = (function (){var statearr_16784 = state_16772;(statearr_16784[7] = inst_16733);
(statearr_16784[11] = inst_16750);
(statearr_16784[12] = inst_16752);
(statearr_16784[8] = inst_16732);
return statearr_16784;
})();var statearr_16785_16811 = state_16772__$1;(statearr_16785_16811[2] = null);
(statearr_16785_16811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 9))
{var inst_16732 = (state_16772[8]);var inst_16748 = cljs.core.vec.call(null,inst_16732);var state_16772__$1 = state_16772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16772__$1,11,out,inst_16748);
} else
{if((state_val_16773 === 5))
{var inst_16733 = (state_16772[7]);var inst_16740 = (state_16772[10]);var inst_16736 = (state_16772[9]);var inst_16740__$1 = f.call(null,inst_16736);var inst_16741 = cljs.core._EQ_.call(null,inst_16740__$1,inst_16733);var inst_16742 = cljs.core.keyword_identical_QMARK_.call(null,inst_16733,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16743 = (inst_16741) || (inst_16742);var state_16772__$1 = (function (){var statearr_16786 = state_16772;(statearr_16786[10] = inst_16740__$1);
return statearr_16786;
})();if(cljs.core.truth_(inst_16743))
{var statearr_16787_16812 = state_16772__$1;(statearr_16787_16812[1] = 8);
} else
{var statearr_16788_16813 = state_16772__$1;(statearr_16788_16813[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 14))
{var inst_16765 = (state_16772[2]);var inst_16766 = cljs.core.async.close_BANG_.call(null,out);var state_16772__$1 = (function (){var statearr_16790 = state_16772;(statearr_16790[13] = inst_16765);
return statearr_16790;
})();var statearr_16791_16814 = state_16772__$1;(statearr_16791_16814[2] = inst_16766);
(statearr_16791_16814[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 10))
{var inst_16755 = (state_16772[2]);var state_16772__$1 = state_16772;var statearr_16792_16815 = state_16772__$1;(statearr_16792_16815[2] = inst_16755);
(statearr_16792_16815[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16773 === 8))
{var inst_16740 = (state_16772[10]);var inst_16736 = (state_16772[9]);var inst_16732 = (state_16772[8]);var inst_16745 = inst_16732.push(inst_16736);var tmp16789 = inst_16732;var inst_16732__$1 = tmp16789;var inst_16733 = inst_16740;var state_16772__$1 = (function (){var statearr_16793 = state_16772;(statearr_16793[7] = inst_16733);
(statearr_16793[14] = inst_16745);
(statearr_16793[8] = inst_16732__$1);
return statearr_16793;
})();var statearr_16794_16816 = state_16772__$1;(statearr_16794_16816[2] = null);
(statearr_16794_16816[1] = 2);
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
});})(c__5689__auto___16802,out))
;return ((function (switch__5674__auto__,c__5689__auto___16802,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16798[0] = state_machine__5675__auto__);
(statearr_16798[1] = 1);
return statearr_16798;
});
var state_machine__5675__auto____1 = (function (state_16772){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16772);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16799){if((e16799 instanceof Object))
{var ex__5678__auto__ = e16799;var statearr_16800_16817 = state_16772;(statearr_16800_16817[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16818 = state_16772;
state_16772 = G__16818;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16772){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16802,out))
})();var state__5691__auto__ = (function (){var statearr_16801 = f__5690__auto__.call(null);(statearr_16801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16802);
return statearr_16801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16802,out))
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
