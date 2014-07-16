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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26909 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26909 = (function (f,fn_handler,meta26910){
this.f = f;
this.fn_handler = fn_handler;
this.meta26910 = meta26910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26909.cljs$lang$type = true;
cljs.core.async.t26909.cljs$lang$ctorStr = "cljs.core.async/t26909";
cljs.core.async.t26909.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26909");
});
cljs.core.async.t26909.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26911){var self__ = this;
var _26911__$1 = this;return self__.meta26910;
});
cljs.core.async.t26909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26911,meta26910__$1){var self__ = this;
var _26911__$1 = this;return (new cljs.core.async.t26909(self__.f,self__.fn_handler,meta26910__$1));
});
cljs.core.async.__GT_t26909 = (function __GT_t26909(f__$1,fn_handler__$1,meta26910){return (new cljs.core.async.t26909(f__$1,fn_handler__$1,meta26910));
});
}
return (new cljs.core.async.t26909(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26913 = buff;if(G__26913)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__26913.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26913.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26913);
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
{var val_26914 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26914);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_26914,ret){
return (function (){return fn1.call(null,val_26914);
});})(val_26914,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___26915 = n;var x_26916 = (0);while(true){
if((x_26916 < n__4399__auto___26915))
{(a[x_26916] = (0));
{
var G__26917 = (x_26916 + (1));
x_26916 = G__26917;
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
var G__26918 = (i + (1));
i = G__26918;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26922 = (function (flag,alt_flag,meta26923){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26923 = meta26923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26922.cljs$lang$type = true;
cljs.core.async.t26922.cljs$lang$ctorStr = "cljs.core.async/t26922";
cljs.core.async.t26922.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26922");
});})(flag))
;
cljs.core.async.t26922.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t26922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t26922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26924){var self__ = this;
var _26924__$1 = this;return self__.meta26923;
});})(flag))
;
cljs.core.async.t26922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26924,meta26923__$1){var self__ = this;
var _26924__$1 = this;return (new cljs.core.async.t26922(self__.flag,self__.alt_flag,meta26923__$1));
});})(flag))
;
cljs.core.async.__GT_t26922 = ((function (flag){
return (function __GT_t26922(flag__$1,alt_flag__$1,meta26923){return (new cljs.core.async.t26922(flag__$1,alt_flag__$1,meta26923));
});})(flag))
;
}
return (new cljs.core.async.t26922(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26928 = (function (cb,flag,alt_handler,meta26929){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26929 = meta26929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26928.cljs$lang$type = true;
cljs.core.async.t26928.cljs$lang$ctorStr = "cljs.core.async/t26928";
cljs.core.async.t26928.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26928");
});
cljs.core.async.t26928.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26930){var self__ = this;
var _26930__$1 = this;return self__.meta26929;
});
cljs.core.async.t26928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26930,meta26929__$1){var self__ = this;
var _26930__$1 = this;return (new cljs.core.async.t26928(self__.cb,self__.flag,self__.alt_handler,meta26929__$1));
});
cljs.core.async.__GT_t26928 = (function __GT_t26928(cb__$1,flag__$1,alt_handler__$1,meta26929){return (new cljs.core.async.t26928(cb__$1,flag__$1,alt_handler__$1,meta26929));
});
}
return (new cljs.core.async.t26928(cb,flag,alt_handler,null));
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
return (function (p1__26931_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26931_SHARP_,port], null));
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
var G__26932 = (i + (1));
i = G__26932;
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
var alts_BANG___delegate = function (ports,p__26933){var map__26935 = p__26933;var map__26935__$1 = ((cljs.core.seq_QMARK_.call(null,map__26935))?cljs.core.apply.call(null,cljs.core.hash_map,map__26935):map__26935);var opts = map__26935__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__26933 = null;if (arguments.length > 1) {
  p__26933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26933);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26936){
var ports = cljs.core.first(arglist__26936);
var p__26933 = cljs.core.rest(arglist__26936);
return alts_BANG___delegate(ports,p__26933);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26944 = (function (ch,f,map_LT_,meta26945){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26945 = meta26945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26944.cljs$lang$type = true;
cljs.core.async.t26944.cljs$lang$ctorStr = "cljs.core.async/t26944";
cljs.core.async.t26944.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26944");
});
cljs.core.async.t26944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t26944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26947 = (function (fn1,_,meta26945,ch,f,map_LT_,meta26948){
this.fn1 = fn1;
this._ = _;
this.meta26945 = meta26945;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26948 = meta26948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26947.cljs$lang$type = true;
cljs.core.async.t26947.cljs$lang$ctorStr = "cljs.core.async/t26947";
cljs.core.async.t26947.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26947");
});})(___$1))
;
cljs.core.async.t26947.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26947.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26937_SHARP_){return f1.call(null,(((p1__26937_SHARP_ == null))?null:self__.f.call(null,p1__26937_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26949){var self__ = this;
var _26949__$1 = this;return self__.meta26948;
});})(___$1))
;
cljs.core.async.t26947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26949,meta26948__$1){var self__ = this;
var _26949__$1 = this;return (new cljs.core.async.t26947(self__.fn1,self__._,self__.meta26945,self__.ch,self__.f,self__.map_LT_,meta26948__$1));
});})(___$1))
;
cljs.core.async.__GT_t26947 = ((function (___$1){
return (function __GT_t26947(fn1__$1,___$2,meta26945__$1,ch__$2,f__$2,map_LT___$2,meta26948){return (new cljs.core.async.t26947(fn1__$1,___$2,meta26945__$1,ch__$2,f__$2,map_LT___$2,meta26948));
});})(___$1))
;
}
return (new cljs.core.async.t26947(fn1,___$1,self__.meta26945,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26944.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26946){var self__ = this;
var _26946__$1 = this;return self__.meta26945;
});
cljs.core.async.t26944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26946,meta26945__$1){var self__ = this;
var _26946__$1 = this;return (new cljs.core.async.t26944(self__.ch,self__.f,self__.map_LT_,meta26945__$1));
});
cljs.core.async.__GT_t26944 = (function __GT_t26944(ch__$1,f__$1,map_LT___$1,meta26945){return (new cljs.core.async.t26944(ch__$1,f__$1,map_LT___$1,meta26945));
});
}
return (new cljs.core.async.t26944(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26953 = (function (ch,f,map_GT_,meta26954){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26954 = meta26954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26953.cljs$lang$type = true;
cljs.core.async.t26953.cljs$lang$ctorStr = "cljs.core.async/t26953";
cljs.core.async.t26953.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26953");
});
cljs.core.async.t26953.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26953.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t26953.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26953.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26953.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26953.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26955){var self__ = this;
var _26955__$1 = this;return self__.meta26954;
});
cljs.core.async.t26953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26955,meta26954__$1){var self__ = this;
var _26955__$1 = this;return (new cljs.core.async.t26953(self__.ch,self__.f,self__.map_GT_,meta26954__$1));
});
cljs.core.async.__GT_t26953 = (function __GT_t26953(ch__$1,f__$1,map_GT___$1,meta26954){return (new cljs.core.async.t26953(ch__$1,f__$1,map_GT___$1,meta26954));
});
}
return (new cljs.core.async.t26953(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26959 = (function (ch,p,filter_GT_,meta26960){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26960 = meta26960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26959.cljs$lang$type = true;
cljs.core.async.t26959.cljs$lang$ctorStr = "cljs.core.async/t26959";
cljs.core.async.t26959.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26959");
});
cljs.core.async.t26959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t26959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26959.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26961){var self__ = this;
var _26961__$1 = this;return self__.meta26960;
});
cljs.core.async.t26959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26961,meta26960__$1){var self__ = this;
var _26961__$1 = this;return (new cljs.core.async.t26959(self__.ch,self__.p,self__.filter_GT_,meta26960__$1));
});
cljs.core.async.__GT_t26959 = (function __GT_t26959(ch__$1,p__$1,filter_GT___$1,meta26960){return (new cljs.core.async.t26959(ch__$1,p__$1,filter_GT___$1,meta26960));
});
}
return (new cljs.core.async.t26959(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27044,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27044,out){
return (function (state_27023){var state_val_27024 = (state_27023[(1)]);if((state_val_27024 === (7)))
{var inst_27019 = (state_27023[(2)]);var state_27023__$1 = state_27023;var statearr_27025_27045 = state_27023__$1;(statearr_27025_27045[(2)] = inst_27019);
(statearr_27025_27045[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (1)))
{var state_27023__$1 = state_27023;var statearr_27026_27046 = state_27023__$1;(statearr_27026_27046[(2)] = null);
(statearr_27026_27046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (4)))
{var inst_27005 = (state_27023[(7)]);var inst_27005__$1 = (state_27023[(2)]);var inst_27006 = (inst_27005__$1 == null);var state_27023__$1 = (function (){var statearr_27027 = state_27023;(statearr_27027[(7)] = inst_27005__$1);
return statearr_27027;
})();if(cljs.core.truth_(inst_27006))
{var statearr_27028_27047 = state_27023__$1;(statearr_27028_27047[(1)] = (5));
} else
{var statearr_27029_27048 = state_27023__$1;(statearr_27029_27048[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (6)))
{var inst_27005 = (state_27023[(7)]);var inst_27010 = p.call(null,inst_27005);var state_27023__$1 = state_27023;if(cljs.core.truth_(inst_27010))
{var statearr_27030_27049 = state_27023__$1;(statearr_27030_27049[(1)] = (8));
} else
{var statearr_27031_27050 = state_27023__$1;(statearr_27031_27050[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (3)))
{var inst_27021 = (state_27023[(2)]);var state_27023__$1 = state_27023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else
{if((state_val_27024 === (2)))
{var state_27023__$1 = state_27023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(4),ch);
} else
{if((state_val_27024 === (11)))
{var inst_27013 = (state_27023[(2)]);var state_27023__$1 = state_27023;var statearr_27032_27051 = state_27023__$1;(statearr_27032_27051[(2)] = inst_27013);
(statearr_27032_27051[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (9)))
{var state_27023__$1 = state_27023;var statearr_27033_27052 = state_27023__$1;(statearr_27033_27052[(2)] = null);
(statearr_27033_27052[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (5)))
{var inst_27008 = cljs.core.async.close_BANG_.call(null,out);var state_27023__$1 = state_27023;var statearr_27034_27053 = state_27023__$1;(statearr_27034_27053[(2)] = inst_27008);
(statearr_27034_27053[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (10)))
{var inst_27016 = (state_27023[(2)]);var state_27023__$1 = (function (){var statearr_27035 = state_27023;(statearr_27035[(8)] = inst_27016);
return statearr_27035;
})();var statearr_27036_27054 = state_27023__$1;(statearr_27036_27054[(2)] = null);
(statearr_27036_27054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (8)))
{var inst_27005 = (state_27023[(7)]);var state_27023__$1 = state_27023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(11),out,inst_27005);
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
});})(c__5693__auto___27044,out))
;return ((function (switch__5678__auto__,c__5693__auto___27044,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27040 = [null,null,null,null,null,null,null,null,null];(statearr_27040[(0)] = state_machine__5679__auto__);
(statearr_27040[(1)] = (1));
return statearr_27040;
});
var state_machine__5679__auto____1 = (function (state_27023){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27023);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27041){if((e27041 instanceof Object))
{var ex__5682__auto__ = e27041;var statearr_27042_27055 = state_27023;(statearr_27042_27055[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27056 = state_27023;
state_27023 = G__27056;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27044,out))
})();var state__5695__auto__ = (function (){var statearr_27043 = f__5694__auto__.call(null);(statearr_27043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27044);
return statearr_27043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27044,out))
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
return (function (state_27208){var state_val_27209 = (state_27208[(1)]);if((state_val_27209 === (7)))
{var inst_27204 = (state_27208[(2)]);var state_27208__$1 = state_27208;var statearr_27210_27247 = state_27208__$1;(statearr_27210_27247[(2)] = inst_27204);
(statearr_27210_27247[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (20)))
{var inst_27179 = (state_27208[(7)]);var inst_27190 = (state_27208[(2)]);var inst_27191 = cljs.core.next.call(null,inst_27179);var inst_27165 = inst_27191;var inst_27166 = null;var inst_27167 = (0);var inst_27168 = (0);var state_27208__$1 = (function (){var statearr_27211 = state_27208;(statearr_27211[(8)] = inst_27167);
(statearr_27211[(9)] = inst_27168);
(statearr_27211[(10)] = inst_27190);
(statearr_27211[(11)] = inst_27166);
(statearr_27211[(12)] = inst_27165);
return statearr_27211;
})();var statearr_27212_27248 = state_27208__$1;(statearr_27212_27248[(2)] = null);
(statearr_27212_27248[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (1)))
{var state_27208__$1 = state_27208;var statearr_27213_27249 = state_27208__$1;(statearr_27213_27249[(2)] = null);
(statearr_27213_27249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (4)))
{var inst_27154 = (state_27208[(13)]);var inst_27154__$1 = (state_27208[(2)]);var inst_27155 = (inst_27154__$1 == null);var state_27208__$1 = (function (){var statearr_27217 = state_27208;(statearr_27217[(13)] = inst_27154__$1);
return statearr_27217;
})();if(cljs.core.truth_(inst_27155))
{var statearr_27218_27250 = state_27208__$1;(statearr_27218_27250[(1)] = (5));
} else
{var statearr_27219_27251 = state_27208__$1;(statearr_27219_27251[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (15)))
{var state_27208__$1 = state_27208;var statearr_27220_27252 = state_27208__$1;(statearr_27220_27252[(2)] = null);
(statearr_27220_27252[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (13)))
{var inst_27167 = (state_27208[(8)]);var inst_27168 = (state_27208[(9)]);var inst_27166 = (state_27208[(11)]);var inst_27165 = (state_27208[(12)]);var inst_27175 = (state_27208[(2)]);var inst_27176 = (inst_27168 + (1));var tmp27214 = inst_27167;var tmp27215 = inst_27166;var tmp27216 = inst_27165;var inst_27165__$1 = tmp27216;var inst_27166__$1 = tmp27215;var inst_27167__$1 = tmp27214;var inst_27168__$1 = inst_27176;var state_27208__$1 = (function (){var statearr_27221 = state_27208;(statearr_27221[(8)] = inst_27167__$1);
(statearr_27221[(14)] = inst_27175);
(statearr_27221[(9)] = inst_27168__$1);
(statearr_27221[(11)] = inst_27166__$1);
(statearr_27221[(12)] = inst_27165__$1);
return statearr_27221;
})();var statearr_27222_27253 = state_27208__$1;(statearr_27222_27253[(2)] = null);
(statearr_27222_27253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (6)))
{var inst_27154 = (state_27208[(13)]);var inst_27159 = f.call(null,inst_27154);var inst_27164 = cljs.core.seq.call(null,inst_27159);var inst_27165 = inst_27164;var inst_27166 = null;var inst_27167 = (0);var inst_27168 = (0);var state_27208__$1 = (function (){var statearr_27223 = state_27208;(statearr_27223[(8)] = inst_27167);
(statearr_27223[(9)] = inst_27168);
(statearr_27223[(11)] = inst_27166);
(statearr_27223[(12)] = inst_27165);
return statearr_27223;
})();var statearr_27224_27254 = state_27208__$1;(statearr_27224_27254[(2)] = null);
(statearr_27224_27254[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (17)))
{var inst_27179 = (state_27208[(7)]);var inst_27183 = cljs.core.chunk_first.call(null,inst_27179);var inst_27184 = cljs.core.chunk_rest.call(null,inst_27179);var inst_27185 = cljs.core.count.call(null,inst_27183);var inst_27165 = inst_27184;var inst_27166 = inst_27183;var inst_27167 = inst_27185;var inst_27168 = (0);var state_27208__$1 = (function (){var statearr_27225 = state_27208;(statearr_27225[(8)] = inst_27167);
(statearr_27225[(9)] = inst_27168);
(statearr_27225[(11)] = inst_27166);
(statearr_27225[(12)] = inst_27165);
return statearr_27225;
})();var statearr_27226_27255 = state_27208__$1;(statearr_27226_27255[(2)] = null);
(statearr_27226_27255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (3)))
{var inst_27206 = (state_27208[(2)]);var state_27208__$1 = state_27208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27208__$1,inst_27206);
} else
{if((state_val_27209 === (12)))
{var inst_27199 = (state_27208[(2)]);var state_27208__$1 = state_27208;var statearr_27227_27256 = state_27208__$1;(statearr_27227_27256[(2)] = inst_27199);
(statearr_27227_27256[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (2)))
{var state_27208__$1 = state_27208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27208__$1,(4),in$);
} else
{if((state_val_27209 === (19)))
{var inst_27194 = (state_27208[(2)]);var state_27208__$1 = state_27208;var statearr_27228_27257 = state_27208__$1;(statearr_27228_27257[(2)] = inst_27194);
(statearr_27228_27257[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (11)))
{var inst_27179 = (state_27208[(7)]);var inst_27165 = (state_27208[(12)]);var inst_27179__$1 = cljs.core.seq.call(null,inst_27165);var state_27208__$1 = (function (){var statearr_27229 = state_27208;(statearr_27229[(7)] = inst_27179__$1);
return statearr_27229;
})();if(inst_27179__$1)
{var statearr_27230_27258 = state_27208__$1;(statearr_27230_27258[(1)] = (14));
} else
{var statearr_27231_27259 = state_27208__$1;(statearr_27231_27259[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (9)))
{var inst_27201 = (state_27208[(2)]);var state_27208__$1 = (function (){var statearr_27232 = state_27208;(statearr_27232[(15)] = inst_27201);
return statearr_27232;
})();var statearr_27233_27260 = state_27208__$1;(statearr_27233_27260[(2)] = null);
(statearr_27233_27260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (5)))
{var inst_27157 = cljs.core.async.close_BANG_.call(null,out);var state_27208__$1 = state_27208;var statearr_27234_27261 = state_27208__$1;(statearr_27234_27261[(2)] = inst_27157);
(statearr_27234_27261[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (14)))
{var inst_27179 = (state_27208[(7)]);var inst_27181 = cljs.core.chunked_seq_QMARK_.call(null,inst_27179);var state_27208__$1 = state_27208;if(inst_27181)
{var statearr_27235_27262 = state_27208__$1;(statearr_27235_27262[(1)] = (17));
} else
{var statearr_27236_27263 = state_27208__$1;(statearr_27236_27263[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (16)))
{var inst_27197 = (state_27208[(2)]);var state_27208__$1 = state_27208;var statearr_27237_27264 = state_27208__$1;(statearr_27237_27264[(2)] = inst_27197);
(statearr_27237_27264[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27209 === (10)))
{var inst_27168 = (state_27208[(9)]);var inst_27166 = (state_27208[(11)]);var inst_27173 = cljs.core._nth.call(null,inst_27166,inst_27168);var state_27208__$1 = state_27208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27208__$1,(13),out,inst_27173);
} else
{if((state_val_27209 === (18)))
{var inst_27179 = (state_27208[(7)]);var inst_27188 = cljs.core.first.call(null,inst_27179);var state_27208__$1 = state_27208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27208__$1,(20),out,inst_27188);
} else
{if((state_val_27209 === (8)))
{var inst_27167 = (state_27208[(8)]);var inst_27168 = (state_27208[(9)]);var inst_27170 = (inst_27168 < inst_27167);var inst_27171 = inst_27170;var state_27208__$1 = state_27208;if(cljs.core.truth_(inst_27171))
{var statearr_27238_27265 = state_27208__$1;(statearr_27238_27265[(1)] = (10));
} else
{var statearr_27239_27266 = state_27208__$1;(statearr_27239_27266[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_27243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27243[(0)] = state_machine__5679__auto__);
(statearr_27243[(1)] = (1));
return statearr_27243;
});
var state_machine__5679__auto____1 = (function (state_27208){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27208);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27244){if((e27244 instanceof Object))
{var ex__5682__auto__ = e27244;var statearr_27245_27267 = state_27208;(statearr_27245_27267[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27208);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27268 = state_27208;
state_27208 = G__27268;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27208){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27246 = f__5694__auto__.call(null);(statearr_27246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27246;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___27349 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27349){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27349){
return (function (state_27328){var state_val_27329 = (state_27328[(1)]);if((state_val_27329 === (7)))
{var inst_27324 = (state_27328[(2)]);var state_27328__$1 = state_27328;var statearr_27330_27350 = state_27328__$1;(statearr_27330_27350[(2)] = inst_27324);
(statearr_27330_27350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27329 === (1)))
{var state_27328__$1 = state_27328;var statearr_27331_27351 = state_27328__$1;(statearr_27331_27351[(2)] = null);
(statearr_27331_27351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27329 === (4)))
{var inst_27311 = (state_27328[(7)]);var inst_27311__$1 = (state_27328[(2)]);var inst_27312 = (inst_27311__$1 == null);var state_27328__$1 = (function (){var statearr_27332 = state_27328;(statearr_27332[(7)] = inst_27311__$1);
return statearr_27332;
})();if(cljs.core.truth_(inst_27312))
{var statearr_27333_27352 = state_27328__$1;(statearr_27333_27352[(1)] = (5));
} else
{var statearr_27334_27353 = state_27328__$1;(statearr_27334_27353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27329 === (6)))
{var inst_27311 = (state_27328[(7)]);var state_27328__$1 = state_27328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27328__$1,(11),to,inst_27311);
} else
{if((state_val_27329 === (3)))
{var inst_27326 = (state_27328[(2)]);var state_27328__$1 = state_27328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27328__$1,inst_27326);
} else
{if((state_val_27329 === (2)))
{var state_27328__$1 = state_27328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27328__$1,(4),from);
} else
{if((state_val_27329 === (11)))
{var inst_27321 = (state_27328[(2)]);var state_27328__$1 = (function (){var statearr_27335 = state_27328;(statearr_27335[(8)] = inst_27321);
return statearr_27335;
})();var statearr_27336_27354 = state_27328__$1;(statearr_27336_27354[(2)] = null);
(statearr_27336_27354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27329 === (9)))
{var state_27328__$1 = state_27328;var statearr_27337_27355 = state_27328__$1;(statearr_27337_27355[(2)] = null);
(statearr_27337_27355[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27329 === (5)))
{var state_27328__$1 = state_27328;if(cljs.core.truth_(close_QMARK_))
{var statearr_27338_27356 = state_27328__$1;(statearr_27338_27356[(1)] = (8));
} else
{var statearr_27339_27357 = state_27328__$1;(statearr_27339_27357[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27329 === (10)))
{var inst_27318 = (state_27328[(2)]);var state_27328__$1 = state_27328;var statearr_27340_27358 = state_27328__$1;(statearr_27340_27358[(2)] = inst_27318);
(statearr_27340_27358[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27329 === (8)))
{var inst_27315 = cljs.core.async.close_BANG_.call(null,to);var state_27328__$1 = state_27328;var statearr_27341_27359 = state_27328__$1;(statearr_27341_27359[(2)] = inst_27315);
(statearr_27341_27359[(1)] = (10));
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
});})(c__5693__auto___27349))
;return ((function (switch__5678__auto__,c__5693__auto___27349){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27345 = [null,null,null,null,null,null,null,null,null];(statearr_27345[(0)] = state_machine__5679__auto__);
(statearr_27345[(1)] = (1));
return statearr_27345;
});
var state_machine__5679__auto____1 = (function (state_27328){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27328);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27346){if((e27346 instanceof Object))
{var ex__5682__auto__ = e27346;var statearr_27347_27360 = state_27328;(statearr_27347_27360[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27361 = state_27328;
state_27328 = G__27361;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27328){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27349))
})();var state__5695__auto__ = (function (){var statearr_27348 = f__5694__auto__.call(null);(statearr_27348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27349);
return statearr_27348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27349))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___27448 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27448,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27448,tc,fc){
return (function (state_27426){var state_val_27427 = (state_27426[(1)]);if((state_val_27427 === (7)))
{var inst_27422 = (state_27426[(2)]);var state_27426__$1 = state_27426;var statearr_27428_27449 = state_27426__$1;(statearr_27428_27449[(2)] = inst_27422);
(statearr_27428_27449[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27427 === (1)))
{var state_27426__$1 = state_27426;var statearr_27429_27450 = state_27426__$1;(statearr_27429_27450[(2)] = null);
(statearr_27429_27450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27427 === (4)))
{var inst_27407 = (state_27426[(7)]);var inst_27407__$1 = (state_27426[(2)]);var inst_27408 = (inst_27407__$1 == null);var state_27426__$1 = (function (){var statearr_27430 = state_27426;(statearr_27430[(7)] = inst_27407__$1);
return statearr_27430;
})();if(cljs.core.truth_(inst_27408))
{var statearr_27431_27451 = state_27426__$1;(statearr_27431_27451[(1)] = (5));
} else
{var statearr_27432_27452 = state_27426__$1;(statearr_27432_27452[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27427 === (6)))
{var inst_27407 = (state_27426[(7)]);var inst_27413 = p.call(null,inst_27407);var state_27426__$1 = state_27426;if(cljs.core.truth_(inst_27413))
{var statearr_27433_27453 = state_27426__$1;(statearr_27433_27453[(1)] = (9));
} else
{var statearr_27434_27454 = state_27426__$1;(statearr_27434_27454[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27427 === (3)))
{var inst_27424 = (state_27426[(2)]);var state_27426__$1 = state_27426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27426__$1,inst_27424);
} else
{if((state_val_27427 === (2)))
{var state_27426__$1 = state_27426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27426__$1,(4),ch);
} else
{if((state_val_27427 === (11)))
{var inst_27407 = (state_27426[(7)]);var inst_27417 = (state_27426[(2)]);var state_27426__$1 = state_27426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27426__$1,(8),inst_27417,inst_27407);
} else
{if((state_val_27427 === (9)))
{var state_27426__$1 = state_27426;var statearr_27435_27455 = state_27426__$1;(statearr_27435_27455[(2)] = tc);
(statearr_27435_27455[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27427 === (5)))
{var inst_27410 = cljs.core.async.close_BANG_.call(null,tc);var inst_27411 = cljs.core.async.close_BANG_.call(null,fc);var state_27426__$1 = (function (){var statearr_27436 = state_27426;(statearr_27436[(8)] = inst_27410);
return statearr_27436;
})();var statearr_27437_27456 = state_27426__$1;(statearr_27437_27456[(2)] = inst_27411);
(statearr_27437_27456[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27427 === (10)))
{var state_27426__$1 = state_27426;var statearr_27438_27457 = state_27426__$1;(statearr_27438_27457[(2)] = fc);
(statearr_27438_27457[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27427 === (8)))
{var inst_27419 = (state_27426[(2)]);var state_27426__$1 = (function (){var statearr_27439 = state_27426;(statearr_27439[(9)] = inst_27419);
return statearr_27439;
})();var statearr_27440_27458 = state_27426__$1;(statearr_27440_27458[(2)] = null);
(statearr_27440_27458[(1)] = (2));
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
});})(c__5693__auto___27448,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___27448,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27444 = [null,null,null,null,null,null,null,null,null,null];(statearr_27444[(0)] = state_machine__5679__auto__);
(statearr_27444[(1)] = (1));
return statearr_27444;
});
var state_machine__5679__auto____1 = (function (state_27426){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27426);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27445){if((e27445 instanceof Object))
{var ex__5682__auto__ = e27445;var statearr_27446_27459 = state_27426;(statearr_27446_27459[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27426);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27460 = state_27426;
state_27426 = G__27460;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27426){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27448,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_27447 = f__5694__auto__.call(null);(statearr_27447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27448);
return statearr_27447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27448,tc,fc))
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
return (function (state_27507){var state_val_27508 = (state_27507[(1)]);if((state_val_27508 === (7)))
{var inst_27503 = (state_27507[(2)]);var state_27507__$1 = state_27507;var statearr_27509_27525 = state_27507__$1;(statearr_27509_27525[(2)] = inst_27503);
(statearr_27509_27525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27508 === (6)))
{var inst_27496 = (state_27507[(7)]);var inst_27493 = (state_27507[(8)]);var inst_27500 = f.call(null,inst_27493,inst_27496);var inst_27493__$1 = inst_27500;var state_27507__$1 = (function (){var statearr_27510 = state_27507;(statearr_27510[(8)] = inst_27493__$1);
return statearr_27510;
})();var statearr_27511_27526 = state_27507__$1;(statearr_27511_27526[(2)] = null);
(statearr_27511_27526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27508 === (5)))
{var inst_27493 = (state_27507[(8)]);var state_27507__$1 = state_27507;var statearr_27512_27527 = state_27507__$1;(statearr_27512_27527[(2)] = inst_27493);
(statearr_27512_27527[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27508 === (4)))
{var inst_27496 = (state_27507[(7)]);var inst_27496__$1 = (state_27507[(2)]);var inst_27497 = (inst_27496__$1 == null);var state_27507__$1 = (function (){var statearr_27513 = state_27507;(statearr_27513[(7)] = inst_27496__$1);
return statearr_27513;
})();if(cljs.core.truth_(inst_27497))
{var statearr_27514_27528 = state_27507__$1;(statearr_27514_27528[(1)] = (5));
} else
{var statearr_27515_27529 = state_27507__$1;(statearr_27515_27529[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27508 === (3)))
{var inst_27505 = (state_27507[(2)]);var state_27507__$1 = state_27507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27507__$1,inst_27505);
} else
{if((state_val_27508 === (2)))
{var state_27507__$1 = state_27507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27507__$1,(4),ch);
} else
{if((state_val_27508 === (1)))
{var inst_27493 = init;var state_27507__$1 = (function (){var statearr_27516 = state_27507;(statearr_27516[(8)] = inst_27493);
return statearr_27516;
})();var statearr_27517_27530 = state_27507__$1;(statearr_27517_27530[(2)] = null);
(statearr_27517_27530[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_27521 = [null,null,null,null,null,null,null,null,null];(statearr_27521[(0)] = state_machine__5679__auto__);
(statearr_27521[(1)] = (1));
return statearr_27521;
});
var state_machine__5679__auto____1 = (function (state_27507){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27522){if((e27522 instanceof Object))
{var ex__5682__auto__ = e27522;var statearr_27523_27531 = state_27507;(statearr_27523_27531[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27507);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27532 = state_27507;
state_27507 = G__27532;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27507){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27524 = f__5694__auto__.call(null);(statearr_27524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27524;
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
return (function (state_27594){var state_val_27595 = (state_27594[(1)]);if((state_val_27595 === (7)))
{var inst_27575 = (state_27594[(7)]);var inst_27580 = (state_27594[(2)]);var inst_27581 = cljs.core.next.call(null,inst_27575);var inst_27575__$1 = inst_27581;var state_27594__$1 = (function (){var statearr_27596 = state_27594;(statearr_27596[(8)] = inst_27580);
(statearr_27596[(7)] = inst_27575__$1);
return statearr_27596;
})();var statearr_27597_27615 = state_27594__$1;(statearr_27597_27615[(2)] = null);
(statearr_27597_27615[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27595 === (1)))
{var inst_27574 = cljs.core.seq.call(null,coll);var inst_27575 = inst_27574;var state_27594__$1 = (function (){var statearr_27598 = state_27594;(statearr_27598[(7)] = inst_27575);
return statearr_27598;
})();var statearr_27599_27616 = state_27594__$1;(statearr_27599_27616[(2)] = null);
(statearr_27599_27616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27595 === (4)))
{var inst_27575 = (state_27594[(7)]);var inst_27578 = cljs.core.first.call(null,inst_27575);var state_27594__$1 = state_27594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27594__$1,(7),ch,inst_27578);
} else
{if((state_val_27595 === (6)))
{var inst_27590 = (state_27594[(2)]);var state_27594__$1 = state_27594;var statearr_27600_27617 = state_27594__$1;(statearr_27600_27617[(2)] = inst_27590);
(statearr_27600_27617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27595 === (3)))
{var inst_27592 = (state_27594[(2)]);var state_27594__$1 = state_27594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27594__$1,inst_27592);
} else
{if((state_val_27595 === (2)))
{var inst_27575 = (state_27594[(7)]);var state_27594__$1 = state_27594;if(cljs.core.truth_(inst_27575))
{var statearr_27601_27618 = state_27594__$1;(statearr_27601_27618[(1)] = (4));
} else
{var statearr_27602_27619 = state_27594__$1;(statearr_27602_27619[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27595 === (9)))
{var state_27594__$1 = state_27594;var statearr_27603_27620 = state_27594__$1;(statearr_27603_27620[(2)] = null);
(statearr_27603_27620[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27595 === (5)))
{var state_27594__$1 = state_27594;if(cljs.core.truth_(close_QMARK_))
{var statearr_27604_27621 = state_27594__$1;(statearr_27604_27621[(1)] = (8));
} else
{var statearr_27605_27622 = state_27594__$1;(statearr_27605_27622[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27595 === (10)))
{var inst_27588 = (state_27594[(2)]);var state_27594__$1 = state_27594;var statearr_27606_27623 = state_27594__$1;(statearr_27606_27623[(2)] = inst_27588);
(statearr_27606_27623[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27595 === (8)))
{var inst_27585 = cljs.core.async.close_BANG_.call(null,ch);var state_27594__$1 = state_27594;var statearr_27607_27624 = state_27594__$1;(statearr_27607_27624[(2)] = inst_27585);
(statearr_27607_27624[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_27611 = [null,null,null,null,null,null,null,null,null];(statearr_27611[(0)] = state_machine__5679__auto__);
(statearr_27611[(1)] = (1));
return statearr_27611;
});
var state_machine__5679__auto____1 = (function (state_27594){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27594);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27612){if((e27612 instanceof Object))
{var ex__5682__auto__ = e27612;var statearr_27613_27625 = state_27594;(statearr_27613_27625[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27626 = state_27594;
state_27594 = G__27626;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27594){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27614 = f__5694__auto__.call(null);(statearr_27614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27614;
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
cljs.core.async.Mux = (function (){var obj27628 = {};return obj27628;
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
cljs.core.async.Mult = (function (){var obj27630 = {};return obj27630;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27854 = (function (cs,ch,mult,meta27855){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27855 = meta27855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27854.cljs$lang$type = true;
cljs.core.async.t27854.cljs$lang$ctorStr = "cljs.core.async/t27854";
cljs.core.async.t27854.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27854");
});})(cs))
;
cljs.core.async.t27854.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27854.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27854.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27854.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27854.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27856){var self__ = this;
var _27856__$1 = this;return self__.meta27855;
});})(cs))
;
cljs.core.async.t27854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27856,meta27855__$1){var self__ = this;
var _27856__$1 = this;return (new cljs.core.async.t27854(self__.cs,self__.ch,self__.mult,meta27855__$1));
});})(cs))
;
cljs.core.async.__GT_t27854 = ((function (cs){
return (function __GT_t27854(cs__$1,ch__$1,mult__$1,meta27855){return (new cljs.core.async.t27854(cs__$1,ch__$1,mult__$1,meta27855));
});})(cs))
;
}
return (new cljs.core.async.t27854(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___28077 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28077,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28077,cs,m,dchan,dctr,done){
return (function (state_27991){var state_val_27992 = (state_27991[(1)]);if((state_val_27992 === (7)))
{var inst_27987 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_27993_28078 = state_27991__$1;(statearr_27993_28078[(2)] = inst_27987);
(statearr_27993_28078[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (20)))
{var inst_27888 = (state_27991[(7)]);var inst_27898 = cljs.core.first.call(null,inst_27888);var inst_27899 = cljs.core.nth.call(null,inst_27898,(0),null);var inst_27900 = cljs.core.nth.call(null,inst_27898,(1),null);var state_27991__$1 = (function (){var statearr_27994 = state_27991;(statearr_27994[(8)] = inst_27899);
return statearr_27994;
})();if(cljs.core.truth_(inst_27900))
{var statearr_27995_28079 = state_27991__$1;(statearr_27995_28079[(1)] = (22));
} else
{var statearr_27996_28080 = state_27991__$1;(statearr_27996_28080[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (27)))
{var inst_27928 = (state_27991[(9)]);var inst_27930 = (state_27991[(10)]);var inst_27935 = cljs.core._nth.call(null,inst_27928,inst_27930);var state_27991__$1 = (function (){var statearr_27997 = state_27991;(statearr_27997[(11)] = inst_27935);
return statearr_27997;
})();var statearr_27998_28081 = state_27991__$1;(statearr_27998_28081[(2)] = null);
(statearr_27998_28081[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (1)))
{var state_27991__$1 = state_27991;var statearr_27999_28082 = state_27991__$1;(statearr_27999_28082[(2)] = null);
(statearr_27999_28082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (24)))
{var inst_27888 = (state_27991[(7)]);var inst_27905 = (state_27991[(2)]);var inst_27906 = cljs.core.next.call(null,inst_27888);var inst_27868 = inst_27906;var inst_27869 = null;var inst_27870 = (0);var inst_27871 = (0);var state_27991__$1 = (function (){var statearr_28000 = state_27991;(statearr_28000[(12)] = inst_27868);
(statearr_28000[(13)] = inst_27905);
(statearr_28000[(14)] = inst_27869);
(statearr_28000[(15)] = inst_27870);
(statearr_28000[(16)] = inst_27871);
return statearr_28000;
})();var statearr_28001_28083 = state_27991__$1;(statearr_28001_28083[(2)] = null);
(statearr_28001_28083[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (39)))
{var inst_27948 = (state_27991[(17)]);var inst_27966 = (state_27991[(2)]);var inst_27967 = cljs.core.next.call(null,inst_27948);var inst_27927 = inst_27967;var inst_27928 = null;var inst_27929 = (0);var inst_27930 = (0);var state_27991__$1 = (function (){var statearr_28005 = state_27991;(statearr_28005[(18)] = inst_27929);
(statearr_28005[(19)] = inst_27966);
(statearr_28005[(9)] = inst_27928);
(statearr_28005[(20)] = inst_27927);
(statearr_28005[(10)] = inst_27930);
return statearr_28005;
})();var statearr_28006_28084 = state_27991__$1;(statearr_28006_28084[(2)] = null);
(statearr_28006_28084[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (4)))
{var inst_27859 = (state_27991[(21)]);var inst_27859__$1 = (state_27991[(2)]);var inst_27860 = (inst_27859__$1 == null);var state_27991__$1 = (function (){var statearr_28007 = state_27991;(statearr_28007[(21)] = inst_27859__$1);
return statearr_28007;
})();if(cljs.core.truth_(inst_27860))
{var statearr_28008_28085 = state_27991__$1;(statearr_28008_28085[(1)] = (5));
} else
{var statearr_28009_28086 = state_27991__$1;(statearr_28009_28086[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (15)))
{var inst_27868 = (state_27991[(12)]);var inst_27869 = (state_27991[(14)]);var inst_27870 = (state_27991[(15)]);var inst_27871 = (state_27991[(16)]);var inst_27884 = (state_27991[(2)]);var inst_27885 = (inst_27871 + (1));var tmp28002 = inst_27868;var tmp28003 = inst_27869;var tmp28004 = inst_27870;var inst_27868__$1 = tmp28002;var inst_27869__$1 = tmp28003;var inst_27870__$1 = tmp28004;var inst_27871__$1 = inst_27885;var state_27991__$1 = (function (){var statearr_28010 = state_27991;(statearr_28010[(12)] = inst_27868__$1);
(statearr_28010[(22)] = inst_27884);
(statearr_28010[(14)] = inst_27869__$1);
(statearr_28010[(15)] = inst_27870__$1);
(statearr_28010[(16)] = inst_27871__$1);
return statearr_28010;
})();var statearr_28011_28087 = state_27991__$1;(statearr_28011_28087[(2)] = null);
(statearr_28011_28087[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (21)))
{var inst_27909 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28012_28088 = state_27991__$1;(statearr_28012_28088[(2)] = inst_27909);
(statearr_28012_28088[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (31)))
{var inst_27935 = (state_27991[(11)]);var inst_27936 = (state_27991[(2)]);var inst_27937 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27938 = cljs.core.async.untap_STAR_.call(null,m,inst_27935);var state_27991__$1 = (function (){var statearr_28013 = state_27991;(statearr_28013[(23)] = inst_27937);
(statearr_28013[(24)] = inst_27936);
return statearr_28013;
})();var statearr_28014_28089 = state_27991__$1;(statearr_28014_28089[(2)] = inst_27938);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (32)))
{var inst_27935 = (state_27991[(11)]);var inst_27859 = (state_27991[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27991,(31),Object,null,(30));var inst_27942 = cljs.core.async.put_BANG_.call(null,inst_27935,inst_27859,done);var state_27991__$1 = state_27991;var statearr_28015_28090 = state_27991__$1;(statearr_28015_28090[(2)] = inst_27942);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (40)))
{var inst_27957 = (state_27991[(25)]);var inst_27958 = (state_27991[(2)]);var inst_27959 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27960 = cljs.core.async.untap_STAR_.call(null,m,inst_27957);var state_27991__$1 = (function (){var statearr_28016 = state_27991;(statearr_28016[(26)] = inst_27958);
(statearr_28016[(27)] = inst_27959);
return statearr_28016;
})();var statearr_28017_28091 = state_27991__$1;(statearr_28017_28091[(2)] = inst_27960);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (33)))
{var inst_27948 = (state_27991[(17)]);var inst_27950 = cljs.core.chunked_seq_QMARK_.call(null,inst_27948);var state_27991__$1 = state_27991;if(inst_27950)
{var statearr_28018_28092 = state_27991__$1;(statearr_28018_28092[(1)] = (36));
} else
{var statearr_28019_28093 = state_27991__$1;(statearr_28019_28093[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (13)))
{var inst_27878 = (state_27991[(28)]);var inst_27881 = cljs.core.async.close_BANG_.call(null,inst_27878);var state_27991__$1 = state_27991;var statearr_28020_28094 = state_27991__$1;(statearr_28020_28094[(2)] = inst_27881);
(statearr_28020_28094[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (22)))
{var inst_27899 = (state_27991[(8)]);var inst_27902 = cljs.core.async.close_BANG_.call(null,inst_27899);var state_27991__$1 = state_27991;var statearr_28021_28095 = state_27991__$1;(statearr_28021_28095[(2)] = inst_27902);
(statearr_28021_28095[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (36)))
{var inst_27948 = (state_27991[(17)]);var inst_27952 = cljs.core.chunk_first.call(null,inst_27948);var inst_27953 = cljs.core.chunk_rest.call(null,inst_27948);var inst_27954 = cljs.core.count.call(null,inst_27952);var inst_27927 = inst_27953;var inst_27928 = inst_27952;var inst_27929 = inst_27954;var inst_27930 = (0);var state_27991__$1 = (function (){var statearr_28022 = state_27991;(statearr_28022[(18)] = inst_27929);
(statearr_28022[(9)] = inst_27928);
(statearr_28022[(20)] = inst_27927);
(statearr_28022[(10)] = inst_27930);
return statearr_28022;
})();var statearr_28023_28096 = state_27991__$1;(statearr_28023_28096[(2)] = null);
(statearr_28023_28096[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (41)))
{var inst_27957 = (state_27991[(25)]);var inst_27859 = (state_27991[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27991,(40),Object,null,(39));var inst_27964 = cljs.core.async.put_BANG_.call(null,inst_27957,inst_27859,done);var state_27991__$1 = state_27991;var statearr_28024_28097 = state_27991__$1;(statearr_28024_28097[(2)] = inst_27964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (43)))
{var state_27991__$1 = state_27991;var statearr_28025_28098 = state_27991__$1;(statearr_28025_28098[(2)] = null);
(statearr_28025_28098[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (29)))
{var inst_27975 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28026_28099 = state_27991__$1;(statearr_28026_28099[(2)] = inst_27975);
(statearr_28026_28099[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (44)))
{var inst_27984 = (state_27991[(2)]);var state_27991__$1 = (function (){var statearr_28027 = state_27991;(statearr_28027[(29)] = inst_27984);
return statearr_28027;
})();var statearr_28028_28100 = state_27991__$1;(statearr_28028_28100[(2)] = null);
(statearr_28028_28100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (6)))
{var inst_27919 = (state_27991[(30)]);var inst_27918 = cljs.core.deref.call(null,cs);var inst_27919__$1 = cljs.core.keys.call(null,inst_27918);var inst_27920 = cljs.core.count.call(null,inst_27919__$1);var inst_27921 = cljs.core.reset_BANG_.call(null,dctr,inst_27920);var inst_27926 = cljs.core.seq.call(null,inst_27919__$1);var inst_27927 = inst_27926;var inst_27928 = null;var inst_27929 = (0);var inst_27930 = (0);var state_27991__$1 = (function (){var statearr_28029 = state_27991;(statearr_28029[(18)] = inst_27929);
(statearr_28029[(31)] = inst_27921);
(statearr_28029[(9)] = inst_27928);
(statearr_28029[(20)] = inst_27927);
(statearr_28029[(30)] = inst_27919__$1);
(statearr_28029[(10)] = inst_27930);
return statearr_28029;
})();var statearr_28030_28101 = state_27991__$1;(statearr_28030_28101[(2)] = null);
(statearr_28030_28101[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (28)))
{var inst_27948 = (state_27991[(17)]);var inst_27927 = (state_27991[(20)]);var inst_27948__$1 = cljs.core.seq.call(null,inst_27927);var state_27991__$1 = (function (){var statearr_28031 = state_27991;(statearr_28031[(17)] = inst_27948__$1);
return statearr_28031;
})();if(inst_27948__$1)
{var statearr_28032_28102 = state_27991__$1;(statearr_28032_28102[(1)] = (33));
} else
{var statearr_28033_28103 = state_27991__$1;(statearr_28033_28103[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (25)))
{var inst_27929 = (state_27991[(18)]);var inst_27930 = (state_27991[(10)]);var inst_27932 = (inst_27930 < inst_27929);var inst_27933 = inst_27932;var state_27991__$1 = state_27991;if(cljs.core.truth_(inst_27933))
{var statearr_28034_28104 = state_27991__$1;(statearr_28034_28104[(1)] = (27));
} else
{var statearr_28035_28105 = state_27991__$1;(statearr_28035_28105[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (34)))
{var state_27991__$1 = state_27991;var statearr_28036_28106 = state_27991__$1;(statearr_28036_28106[(2)] = null);
(statearr_28036_28106[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (17)))
{var state_27991__$1 = state_27991;var statearr_28037_28107 = state_27991__$1;(statearr_28037_28107[(2)] = null);
(statearr_28037_28107[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (3)))
{var inst_27989 = (state_27991[(2)]);var state_27991__$1 = state_27991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27991__$1,inst_27989);
} else
{if((state_val_27992 === (12)))
{var inst_27914 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28038_28108 = state_27991__$1;(statearr_28038_28108[(2)] = inst_27914);
(statearr_28038_28108[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (2)))
{var state_27991__$1 = state_27991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27991__$1,(4),ch);
} else
{if((state_val_27992 === (23)))
{var state_27991__$1 = state_27991;var statearr_28039_28109 = state_27991__$1;(statearr_28039_28109[(2)] = null);
(statearr_28039_28109[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (35)))
{var inst_27973 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28040_28110 = state_27991__$1;(statearr_28040_28110[(2)] = inst_27973);
(statearr_28040_28110[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (19)))
{var inst_27888 = (state_27991[(7)]);var inst_27892 = cljs.core.chunk_first.call(null,inst_27888);var inst_27893 = cljs.core.chunk_rest.call(null,inst_27888);var inst_27894 = cljs.core.count.call(null,inst_27892);var inst_27868 = inst_27893;var inst_27869 = inst_27892;var inst_27870 = inst_27894;var inst_27871 = (0);var state_27991__$1 = (function (){var statearr_28041 = state_27991;(statearr_28041[(12)] = inst_27868);
(statearr_28041[(14)] = inst_27869);
(statearr_28041[(15)] = inst_27870);
(statearr_28041[(16)] = inst_27871);
return statearr_28041;
})();var statearr_28042_28111 = state_27991__$1;(statearr_28042_28111[(2)] = null);
(statearr_28042_28111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (11)))
{var inst_27868 = (state_27991[(12)]);var inst_27888 = (state_27991[(7)]);var inst_27888__$1 = cljs.core.seq.call(null,inst_27868);var state_27991__$1 = (function (){var statearr_28043 = state_27991;(statearr_28043[(7)] = inst_27888__$1);
return statearr_28043;
})();if(inst_27888__$1)
{var statearr_28044_28112 = state_27991__$1;(statearr_28044_28112[(1)] = (16));
} else
{var statearr_28045_28113 = state_27991__$1;(statearr_28045_28113[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (9)))
{var inst_27916 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28046_28114 = state_27991__$1;(statearr_28046_28114[(2)] = inst_27916);
(statearr_28046_28114[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (5)))
{var inst_27866 = cljs.core.deref.call(null,cs);var inst_27867 = cljs.core.seq.call(null,inst_27866);var inst_27868 = inst_27867;var inst_27869 = null;var inst_27870 = (0);var inst_27871 = (0);var state_27991__$1 = (function (){var statearr_28047 = state_27991;(statearr_28047[(12)] = inst_27868);
(statearr_28047[(14)] = inst_27869);
(statearr_28047[(15)] = inst_27870);
(statearr_28047[(16)] = inst_27871);
return statearr_28047;
})();var statearr_28048_28115 = state_27991__$1;(statearr_28048_28115[(2)] = null);
(statearr_28048_28115[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (14)))
{var state_27991__$1 = state_27991;var statearr_28049_28116 = state_27991__$1;(statearr_28049_28116[(2)] = null);
(statearr_28049_28116[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (45)))
{var inst_27981 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28050_28117 = state_27991__$1;(statearr_28050_28117[(2)] = inst_27981);
(statearr_28050_28117[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (26)))
{var inst_27919 = (state_27991[(30)]);var inst_27977 = (state_27991[(2)]);var inst_27978 = cljs.core.seq.call(null,inst_27919);var state_27991__$1 = (function (){var statearr_28051 = state_27991;(statearr_28051[(32)] = inst_27977);
return statearr_28051;
})();if(inst_27978)
{var statearr_28052_28118 = state_27991__$1;(statearr_28052_28118[(1)] = (42));
} else
{var statearr_28053_28119 = state_27991__$1;(statearr_28053_28119[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (16)))
{var inst_27888 = (state_27991[(7)]);var inst_27890 = cljs.core.chunked_seq_QMARK_.call(null,inst_27888);var state_27991__$1 = state_27991;if(inst_27890)
{var statearr_28057_28120 = state_27991__$1;(statearr_28057_28120[(1)] = (19));
} else
{var statearr_28058_28121 = state_27991__$1;(statearr_28058_28121[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (38)))
{var inst_27970 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28059_28122 = state_27991__$1;(statearr_28059_28122[(2)] = inst_27970);
(statearr_28059_28122[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (30)))
{var inst_27929 = (state_27991[(18)]);var inst_27928 = (state_27991[(9)]);var inst_27927 = (state_27991[(20)]);var inst_27930 = (state_27991[(10)]);var inst_27944 = (state_27991[(2)]);var inst_27945 = (inst_27930 + (1));var tmp28054 = inst_27929;var tmp28055 = inst_27928;var tmp28056 = inst_27927;var inst_27927__$1 = tmp28056;var inst_27928__$1 = tmp28055;var inst_27929__$1 = tmp28054;var inst_27930__$1 = inst_27945;var state_27991__$1 = (function (){var statearr_28060 = state_27991;(statearr_28060[(18)] = inst_27929__$1);
(statearr_28060[(9)] = inst_27928__$1);
(statearr_28060[(33)] = inst_27944);
(statearr_28060[(20)] = inst_27927__$1);
(statearr_28060[(10)] = inst_27930__$1);
return statearr_28060;
})();var statearr_28061_28123 = state_27991__$1;(statearr_28061_28123[(2)] = null);
(statearr_28061_28123[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (10)))
{var inst_27869 = (state_27991[(14)]);var inst_27871 = (state_27991[(16)]);var inst_27877 = cljs.core._nth.call(null,inst_27869,inst_27871);var inst_27878 = cljs.core.nth.call(null,inst_27877,(0),null);var inst_27879 = cljs.core.nth.call(null,inst_27877,(1),null);var state_27991__$1 = (function (){var statearr_28062 = state_27991;(statearr_28062[(28)] = inst_27878);
return statearr_28062;
})();if(cljs.core.truth_(inst_27879))
{var statearr_28063_28124 = state_27991__$1;(statearr_28063_28124[(1)] = (13));
} else
{var statearr_28064_28125 = state_27991__$1;(statearr_28064_28125[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (18)))
{var inst_27912 = (state_27991[(2)]);var state_27991__$1 = state_27991;var statearr_28065_28126 = state_27991__$1;(statearr_28065_28126[(2)] = inst_27912);
(statearr_28065_28126[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (42)))
{var state_27991__$1 = state_27991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27991__$1,(45),dchan);
} else
{if((state_val_27992 === (37)))
{var inst_27948 = (state_27991[(17)]);var inst_27957 = cljs.core.first.call(null,inst_27948);var state_27991__$1 = (function (){var statearr_28066 = state_27991;(statearr_28066[(25)] = inst_27957);
return statearr_28066;
})();var statearr_28067_28127 = state_27991__$1;(statearr_28067_28127[(2)] = null);
(statearr_28067_28127[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27992 === (8)))
{var inst_27870 = (state_27991[(15)]);var inst_27871 = (state_27991[(16)]);var inst_27873 = (inst_27871 < inst_27870);var inst_27874 = inst_27873;var state_27991__$1 = state_27991;if(cljs.core.truth_(inst_27874))
{var statearr_28068_28128 = state_27991__$1;(statearr_28068_28128[(1)] = (10));
} else
{var statearr_28069_28129 = state_27991__$1;(statearr_28069_28129[(1)] = (11));
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
});})(c__5693__auto___28077,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___28077,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28073[(0)] = state_machine__5679__auto__);
(statearr_28073[(1)] = (1));
return statearr_28073;
});
var state_machine__5679__auto____1 = (function (state_27991){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28074){if((e28074 instanceof Object))
{var ex__5682__auto__ = e28074;var statearr_28075_28130 = state_27991;(statearr_28075_28130[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28131 = state_27991;
state_27991 = G__28131;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27991){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28077,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_28076 = f__5694__auto__.call(null);(statearr_28076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28077);
return statearr_28076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28077,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj28133 = {};return obj28133;
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
;var m = (function (){if(typeof cljs.core.async.t28243 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28243 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28244){
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
this.meta28244 = meta28244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28243.cljs$lang$type = true;
cljs.core.async.t28243.cljs$lang$ctorStr = "cljs.core.async/t28243";
cljs.core.async.t28243.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28243");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t28243.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28245){var self__ = this;
var _28245__$1 = this;return self__.meta28244;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28245,meta28244__$1){var self__ = this;
var _28245__$1 = this;return (new cljs.core.async.t28243(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28244__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t28243 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28244){return (new cljs.core.async.t28243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28244));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t28243(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___28352 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28310){var state_val_28311 = (state_28310[(1)]);if((state_val_28311 === (7)))
{var inst_28259 = (state_28310[(7)]);var inst_28264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28259);var state_28310__$1 = state_28310;var statearr_28312_28353 = state_28310__$1;(statearr_28312_28353[(2)] = inst_28264);
(statearr_28312_28353[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (20)))
{var inst_28274 = (state_28310[(8)]);var state_28310__$1 = state_28310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28310__$1,(23),out,inst_28274);
} else
{if((state_val_28311 === (1)))
{var inst_28249 = (state_28310[(9)]);var inst_28249__$1 = calc_state.call(null);var inst_28250 = cljs.core.seq_QMARK_.call(null,inst_28249__$1);var state_28310__$1 = (function (){var statearr_28313 = state_28310;(statearr_28313[(9)] = inst_28249__$1);
return statearr_28313;
})();if(inst_28250)
{var statearr_28314_28354 = state_28310__$1;(statearr_28314_28354[(1)] = (2));
} else
{var statearr_28315_28355 = state_28310__$1;(statearr_28315_28355[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (4)))
{var inst_28249 = (state_28310[(9)]);var inst_28255 = (state_28310[(2)]);var inst_28256 = cljs.core.get.call(null,inst_28255,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28257 = cljs.core.get.call(null,inst_28255,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28258 = cljs.core.get.call(null,inst_28255,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_28259 = inst_28249;var state_28310__$1 = (function (){var statearr_28316 = state_28310;(statearr_28316[(10)] = inst_28258);
(statearr_28316[(7)] = inst_28259);
(statearr_28316[(11)] = inst_28256);
(statearr_28316[(12)] = inst_28257);
return statearr_28316;
})();var statearr_28317_28356 = state_28310__$1;(statearr_28317_28356[(2)] = null);
(statearr_28317_28356[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (15)))
{var state_28310__$1 = state_28310;var statearr_28318_28357 = state_28310__$1;(statearr_28318_28357[(2)] = null);
(statearr_28318_28357[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (21)))
{var state_28310__$1 = state_28310;var statearr_28319_28358 = state_28310__$1;(statearr_28319_28358[(2)] = null);
(statearr_28319_28358[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (13)))
{var inst_28306 = (state_28310[(2)]);var state_28310__$1 = state_28310;var statearr_28320_28359 = state_28310__$1;(statearr_28320_28359[(2)] = inst_28306);
(statearr_28320_28359[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (22)))
{var inst_28267 = (state_28310[(13)]);var inst_28303 = (state_28310[(2)]);var inst_28259 = inst_28267;var state_28310__$1 = (function (){var statearr_28321 = state_28310;(statearr_28321[(7)] = inst_28259);
(statearr_28321[(14)] = inst_28303);
return statearr_28321;
})();var statearr_28322_28360 = state_28310__$1;(statearr_28322_28360[(2)] = null);
(statearr_28322_28360[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (6)))
{var inst_28308 = (state_28310[(2)]);var state_28310__$1 = state_28310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28310__$1,inst_28308);
} else
{if((state_val_28311 === (17)))
{var inst_28289 = (state_28310[(15)]);var state_28310__$1 = state_28310;var statearr_28323_28361 = state_28310__$1;(statearr_28323_28361[(2)] = inst_28289);
(statearr_28323_28361[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (3)))
{var inst_28249 = (state_28310[(9)]);var state_28310__$1 = state_28310;var statearr_28324_28362 = state_28310__$1;(statearr_28324_28362[(2)] = inst_28249);
(statearr_28324_28362[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (12)))
{var inst_28275 = (state_28310[(16)]);var inst_28289 = (state_28310[(15)]);var inst_28270 = (state_28310[(17)]);var inst_28289__$1 = inst_28270.call(null,inst_28275);var state_28310__$1 = (function (){var statearr_28325 = state_28310;(statearr_28325[(15)] = inst_28289__$1);
return statearr_28325;
})();if(cljs.core.truth_(inst_28289__$1))
{var statearr_28326_28363 = state_28310__$1;(statearr_28326_28363[(1)] = (17));
} else
{var statearr_28327_28364 = state_28310__$1;(statearr_28327_28364[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (2)))
{var inst_28249 = (state_28310[(9)]);var inst_28252 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28249);var state_28310__$1 = state_28310;var statearr_28328_28365 = state_28310__$1;(statearr_28328_28365[(2)] = inst_28252);
(statearr_28328_28365[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (23)))
{var inst_28300 = (state_28310[(2)]);var state_28310__$1 = state_28310;var statearr_28329_28366 = state_28310__$1;(statearr_28329_28366[(2)] = inst_28300);
(statearr_28329_28366[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (19)))
{var inst_28297 = (state_28310[(2)]);var state_28310__$1 = state_28310;if(cljs.core.truth_(inst_28297))
{var statearr_28330_28367 = state_28310__$1;(statearr_28330_28367[(1)] = (20));
} else
{var statearr_28331_28368 = state_28310__$1;(statearr_28331_28368[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (11)))
{var inst_28274 = (state_28310[(8)]);var inst_28280 = (inst_28274 == null);var state_28310__$1 = state_28310;if(cljs.core.truth_(inst_28280))
{var statearr_28332_28369 = state_28310__$1;(statearr_28332_28369[(1)] = (14));
} else
{var statearr_28333_28370 = state_28310__$1;(statearr_28333_28370[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (9)))
{var inst_28267 = (state_28310[(13)]);var inst_28267__$1 = (state_28310[(2)]);var inst_28268 = cljs.core.get.call(null,inst_28267__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28269 = cljs.core.get.call(null,inst_28267__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28270 = cljs.core.get.call(null,inst_28267__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_28310__$1 = (function (){var statearr_28334 = state_28310;(statearr_28334[(18)] = inst_28269);
(statearr_28334[(13)] = inst_28267__$1);
(statearr_28334[(17)] = inst_28270);
return statearr_28334;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28310__$1,(10),inst_28268);
} else
{if((state_val_28311 === (5)))
{var inst_28259 = (state_28310[(7)]);var inst_28262 = cljs.core.seq_QMARK_.call(null,inst_28259);var state_28310__$1 = state_28310;if(inst_28262)
{var statearr_28335_28371 = state_28310__$1;(statearr_28335_28371[(1)] = (7));
} else
{var statearr_28336_28372 = state_28310__$1;(statearr_28336_28372[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (14)))
{var inst_28275 = (state_28310[(16)]);var inst_28282 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28275);var state_28310__$1 = state_28310;var statearr_28337_28373 = state_28310__$1;(statearr_28337_28373[(2)] = inst_28282);
(statearr_28337_28373[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (16)))
{var inst_28285 = (state_28310[(2)]);var inst_28286 = calc_state.call(null);var inst_28259 = inst_28286;var state_28310__$1 = (function (){var statearr_28338 = state_28310;(statearr_28338[(19)] = inst_28285);
(statearr_28338[(7)] = inst_28259);
return statearr_28338;
})();var statearr_28339_28374 = state_28310__$1;(statearr_28339_28374[(2)] = null);
(statearr_28339_28374[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (10)))
{var inst_28275 = (state_28310[(16)]);var inst_28274 = (state_28310[(8)]);var inst_28273 = (state_28310[(2)]);var inst_28274__$1 = cljs.core.nth.call(null,inst_28273,(0),null);var inst_28275__$1 = cljs.core.nth.call(null,inst_28273,(1),null);var inst_28276 = (inst_28274__$1 == null);var inst_28277 = cljs.core._EQ_.call(null,inst_28275__$1,change);var inst_28278 = (inst_28276) || (inst_28277);var state_28310__$1 = (function (){var statearr_28340 = state_28310;(statearr_28340[(16)] = inst_28275__$1);
(statearr_28340[(8)] = inst_28274__$1);
return statearr_28340;
})();if(cljs.core.truth_(inst_28278))
{var statearr_28341_28375 = state_28310__$1;(statearr_28341_28375[(1)] = (11));
} else
{var statearr_28342_28376 = state_28310__$1;(statearr_28342_28376[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (18)))
{var inst_28269 = (state_28310[(18)]);var inst_28275 = (state_28310[(16)]);var inst_28270 = (state_28310[(17)]);var inst_28292 = cljs.core.empty_QMARK_.call(null,inst_28270);var inst_28293 = inst_28269.call(null,inst_28275);var inst_28294 = cljs.core.not.call(null,inst_28293);var inst_28295 = (inst_28292) && (inst_28294);var state_28310__$1 = state_28310;var statearr_28343_28377 = state_28310__$1;(statearr_28343_28377[(2)] = inst_28295);
(statearr_28343_28377[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28311 === (8)))
{var inst_28259 = (state_28310[(7)]);var state_28310__$1 = state_28310;var statearr_28344_28378 = state_28310__$1;(statearr_28344_28378[(2)] = inst_28259);
(statearr_28344_28378[(1)] = (9));
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
});})(c__5693__auto___28352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___28352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28348[(0)] = state_machine__5679__auto__);
(statearr_28348[(1)] = (1));
return statearr_28348;
});
var state_machine__5679__auto____1 = (function (state_28310){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28310);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28349){if((e28349 instanceof Object))
{var ex__5682__auto__ = e28349;var statearr_28350_28379 = state_28310;(statearr_28350_28379[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28310);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28380 = state_28310;
state_28310 = G__28380;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28310){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_28351 = f__5694__auto__.call(null);(statearr_28351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28352);
return statearr_28351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj28382 = {};return obj28382;
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
return (function (p1__28383_SHARP_){if(cljs.core.truth_(p1__28383_SHARP_.call(null,topic)))
{return p1__28383_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28383_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28508 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28508 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28509){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28509 = meta28509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28508.cljs$lang$type = true;
cljs.core.async.t28508.cljs$lang$ctorStr = "cljs.core.async/t28508";
cljs.core.async.t28508.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28508");
});})(mults,ensure_mult))
;
cljs.core.async.t28508.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28508.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28508.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28508.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28510){var self__ = this;
var _28510__$1 = this;return self__.meta28509;
});})(mults,ensure_mult))
;
cljs.core.async.t28508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28510,meta28509__$1){var self__ = this;
var _28510__$1 = this;return (new cljs.core.async.t28508(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28509__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28508 = ((function (mults,ensure_mult){
return (function __GT_t28508(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28509){return (new cljs.core.async.t28508(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28509));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28508(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___28632 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28632,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28632,mults,ensure_mult,p){
return (function (state_28584){var state_val_28585 = (state_28584[(1)]);if((state_val_28585 === (7)))
{var inst_28580 = (state_28584[(2)]);var state_28584__$1 = state_28584;var statearr_28586_28633 = state_28584__$1;(statearr_28586_28633[(2)] = inst_28580);
(statearr_28586_28633[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (20)))
{var state_28584__$1 = state_28584;var statearr_28587_28634 = state_28584__$1;(statearr_28587_28634[(2)] = null);
(statearr_28587_28634[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (1)))
{var state_28584__$1 = state_28584;var statearr_28588_28635 = state_28584__$1;(statearr_28588_28635[(2)] = null);
(statearr_28588_28635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (24)))
{var inst_28563 = (state_28584[(7)]);var inst_28513 = (state_28584[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28584,(23),Object,null,(22));var inst_28570 = cljs.core.async.muxch_STAR_.call(null,inst_28563);var state_28584__$1 = state_28584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28584__$1,(25),inst_28570,inst_28513);
} else
{if((state_val_28585 === (4)))
{var inst_28513 = (state_28584[(8)]);var inst_28513__$1 = (state_28584[(2)]);var inst_28514 = (inst_28513__$1 == null);var state_28584__$1 = (function (){var statearr_28589 = state_28584;(statearr_28589[(8)] = inst_28513__$1);
return statearr_28589;
})();if(cljs.core.truth_(inst_28514))
{var statearr_28590_28636 = state_28584__$1;(statearr_28590_28636[(1)] = (5));
} else
{var statearr_28591_28637 = state_28584__$1;(statearr_28591_28637[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (15)))
{var inst_28555 = (state_28584[(2)]);var state_28584__$1 = state_28584;var statearr_28592_28638 = state_28584__$1;(statearr_28592_28638[(2)] = inst_28555);
(statearr_28592_28638[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (21)))
{var inst_28577 = (state_28584[(2)]);var state_28584__$1 = (function (){var statearr_28593 = state_28584;(statearr_28593[(9)] = inst_28577);
return statearr_28593;
})();var statearr_28594_28639 = state_28584__$1;(statearr_28594_28639[(2)] = null);
(statearr_28594_28639[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (13)))
{var inst_28537 = (state_28584[(10)]);var inst_28539 = cljs.core.chunked_seq_QMARK_.call(null,inst_28537);var state_28584__$1 = state_28584;if(inst_28539)
{var statearr_28595_28640 = state_28584__$1;(statearr_28595_28640[(1)] = (16));
} else
{var statearr_28596_28641 = state_28584__$1;(statearr_28596_28641[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (22)))
{var inst_28574 = (state_28584[(2)]);var state_28584__$1 = state_28584;var statearr_28597_28642 = state_28584__$1;(statearr_28597_28642[(2)] = inst_28574);
(statearr_28597_28642[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (6)))
{var inst_28563 = (state_28584[(7)]);var inst_28561 = (state_28584[(11)]);var inst_28513 = (state_28584[(8)]);var inst_28561__$1 = topic_fn.call(null,inst_28513);var inst_28562 = cljs.core.deref.call(null,mults);var inst_28563__$1 = cljs.core.get.call(null,inst_28562,inst_28561__$1);var state_28584__$1 = (function (){var statearr_28598 = state_28584;(statearr_28598[(7)] = inst_28563__$1);
(statearr_28598[(11)] = inst_28561__$1);
return statearr_28598;
})();if(cljs.core.truth_(inst_28563__$1))
{var statearr_28599_28643 = state_28584__$1;(statearr_28599_28643[(1)] = (19));
} else
{var statearr_28600_28644 = state_28584__$1;(statearr_28600_28644[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (25)))
{var inst_28572 = (state_28584[(2)]);var state_28584__$1 = state_28584;var statearr_28601_28645 = state_28584__$1;(statearr_28601_28645[(2)] = inst_28572);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28584__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (17)))
{var inst_28537 = (state_28584[(10)]);var inst_28546 = cljs.core.first.call(null,inst_28537);var inst_28547 = cljs.core.async.muxch_STAR_.call(null,inst_28546);var inst_28548 = cljs.core.async.close_BANG_.call(null,inst_28547);var inst_28549 = cljs.core.next.call(null,inst_28537);var inst_28523 = inst_28549;var inst_28524 = null;var inst_28525 = (0);var inst_28526 = (0);var state_28584__$1 = (function (){var statearr_28602 = state_28584;(statearr_28602[(12)] = inst_28548);
(statearr_28602[(13)] = inst_28525);
(statearr_28602[(14)] = inst_28524);
(statearr_28602[(15)] = inst_28526);
(statearr_28602[(16)] = inst_28523);
return statearr_28602;
})();var statearr_28603_28646 = state_28584__$1;(statearr_28603_28646[(2)] = null);
(statearr_28603_28646[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (3)))
{var inst_28582 = (state_28584[(2)]);var state_28584__$1 = state_28584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28584__$1,inst_28582);
} else
{if((state_val_28585 === (12)))
{var inst_28557 = (state_28584[(2)]);var state_28584__$1 = state_28584;var statearr_28604_28647 = state_28584__$1;(statearr_28604_28647[(2)] = inst_28557);
(statearr_28604_28647[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (2)))
{var state_28584__$1 = state_28584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28584__$1,(4),ch);
} else
{if((state_val_28585 === (23)))
{var inst_28561 = (state_28584[(11)]);var inst_28565 = (state_28584[(2)]);var inst_28566 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28561);var state_28584__$1 = (function (){var statearr_28605 = state_28584;(statearr_28605[(17)] = inst_28565);
return statearr_28605;
})();var statearr_28606_28648 = state_28584__$1;(statearr_28606_28648[(2)] = inst_28566);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28584__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (19)))
{var state_28584__$1 = state_28584;var statearr_28607_28649 = state_28584__$1;(statearr_28607_28649[(2)] = null);
(statearr_28607_28649[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (11)))
{var inst_28537 = (state_28584[(10)]);var inst_28523 = (state_28584[(16)]);var inst_28537__$1 = cljs.core.seq.call(null,inst_28523);var state_28584__$1 = (function (){var statearr_28608 = state_28584;(statearr_28608[(10)] = inst_28537__$1);
return statearr_28608;
})();if(inst_28537__$1)
{var statearr_28609_28650 = state_28584__$1;(statearr_28609_28650[(1)] = (13));
} else
{var statearr_28610_28651 = state_28584__$1;(statearr_28610_28651[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (9)))
{var inst_28559 = (state_28584[(2)]);var state_28584__$1 = state_28584;var statearr_28611_28652 = state_28584__$1;(statearr_28611_28652[(2)] = inst_28559);
(statearr_28611_28652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (5)))
{var inst_28520 = cljs.core.deref.call(null,mults);var inst_28521 = cljs.core.vals.call(null,inst_28520);var inst_28522 = cljs.core.seq.call(null,inst_28521);var inst_28523 = inst_28522;var inst_28524 = null;var inst_28525 = (0);var inst_28526 = (0);var state_28584__$1 = (function (){var statearr_28612 = state_28584;(statearr_28612[(13)] = inst_28525);
(statearr_28612[(14)] = inst_28524);
(statearr_28612[(15)] = inst_28526);
(statearr_28612[(16)] = inst_28523);
return statearr_28612;
})();var statearr_28613_28653 = state_28584__$1;(statearr_28613_28653[(2)] = null);
(statearr_28613_28653[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (14)))
{var state_28584__$1 = state_28584;var statearr_28617_28654 = state_28584__$1;(statearr_28617_28654[(2)] = null);
(statearr_28617_28654[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (16)))
{var inst_28537 = (state_28584[(10)]);var inst_28541 = cljs.core.chunk_first.call(null,inst_28537);var inst_28542 = cljs.core.chunk_rest.call(null,inst_28537);var inst_28543 = cljs.core.count.call(null,inst_28541);var inst_28523 = inst_28542;var inst_28524 = inst_28541;var inst_28525 = inst_28543;var inst_28526 = (0);var state_28584__$1 = (function (){var statearr_28618 = state_28584;(statearr_28618[(13)] = inst_28525);
(statearr_28618[(14)] = inst_28524);
(statearr_28618[(15)] = inst_28526);
(statearr_28618[(16)] = inst_28523);
return statearr_28618;
})();var statearr_28619_28655 = state_28584__$1;(statearr_28619_28655[(2)] = null);
(statearr_28619_28655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (10)))
{var inst_28525 = (state_28584[(13)]);var inst_28524 = (state_28584[(14)]);var inst_28526 = (state_28584[(15)]);var inst_28523 = (state_28584[(16)]);var inst_28531 = cljs.core._nth.call(null,inst_28524,inst_28526);var inst_28532 = cljs.core.async.muxch_STAR_.call(null,inst_28531);var inst_28533 = cljs.core.async.close_BANG_.call(null,inst_28532);var inst_28534 = (inst_28526 + (1));var tmp28614 = inst_28525;var tmp28615 = inst_28524;var tmp28616 = inst_28523;var inst_28523__$1 = tmp28616;var inst_28524__$1 = tmp28615;var inst_28525__$1 = tmp28614;var inst_28526__$1 = inst_28534;var state_28584__$1 = (function (){var statearr_28620 = state_28584;(statearr_28620[(13)] = inst_28525__$1);
(statearr_28620[(14)] = inst_28524__$1);
(statearr_28620[(15)] = inst_28526__$1);
(statearr_28620[(16)] = inst_28523__$1);
(statearr_28620[(18)] = inst_28533);
return statearr_28620;
})();var statearr_28621_28656 = state_28584__$1;(statearr_28621_28656[(2)] = null);
(statearr_28621_28656[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (18)))
{var inst_28552 = (state_28584[(2)]);var state_28584__$1 = state_28584;var statearr_28622_28657 = state_28584__$1;(statearr_28622_28657[(2)] = inst_28552);
(statearr_28622_28657[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28585 === (8)))
{var inst_28525 = (state_28584[(13)]);var inst_28526 = (state_28584[(15)]);var inst_28528 = (inst_28526 < inst_28525);var inst_28529 = inst_28528;var state_28584__$1 = state_28584;if(cljs.core.truth_(inst_28529))
{var statearr_28623_28658 = state_28584__$1;(statearr_28623_28658[(1)] = (10));
} else
{var statearr_28624_28659 = state_28584__$1;(statearr_28624_28659[(1)] = (11));
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
});})(c__5693__auto___28632,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___28632,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28628[(0)] = state_machine__5679__auto__);
(statearr_28628[(1)] = (1));
return statearr_28628;
});
var state_machine__5679__auto____1 = (function (state_28584){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28584);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28629){if((e28629 instanceof Object))
{var ex__5682__auto__ = e28629;var statearr_28630_28660 = state_28584;(statearr_28630_28660[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28661 = state_28584;
state_28584 = G__28661;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28584){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28632,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_28631 = f__5694__auto__.call(null);(statearr_28631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28632);
return statearr_28631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28632,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___28798 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28798,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28798,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28768){var state_val_28769 = (state_28768[(1)]);if((state_val_28769 === (7)))
{var state_28768__$1 = state_28768;var statearr_28770_28799 = state_28768__$1;(statearr_28770_28799[(2)] = null);
(statearr_28770_28799[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (1)))
{var state_28768__$1 = state_28768;var statearr_28771_28800 = state_28768__$1;(statearr_28771_28800[(2)] = null);
(statearr_28771_28800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (4)))
{var inst_28732 = (state_28768[(7)]);var inst_28734 = (inst_28732 < cnt);var state_28768__$1 = state_28768;if(cljs.core.truth_(inst_28734))
{var statearr_28772_28801 = state_28768__$1;(statearr_28772_28801[(1)] = (6));
} else
{var statearr_28773_28802 = state_28768__$1;(statearr_28773_28802[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (15)))
{var inst_28764 = (state_28768[(2)]);var state_28768__$1 = state_28768;var statearr_28774_28803 = state_28768__$1;(statearr_28774_28803[(2)] = inst_28764);
(statearr_28774_28803[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (13)))
{var inst_28757 = cljs.core.async.close_BANG_.call(null,out);var state_28768__$1 = state_28768;var statearr_28775_28804 = state_28768__$1;(statearr_28775_28804[(2)] = inst_28757);
(statearr_28775_28804[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (6)))
{var state_28768__$1 = state_28768;var statearr_28776_28805 = state_28768__$1;(statearr_28776_28805[(2)] = null);
(statearr_28776_28805[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (3)))
{var inst_28766 = (state_28768[(2)]);var state_28768__$1 = state_28768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28768__$1,inst_28766);
} else
{if((state_val_28769 === (12)))
{var inst_28754 = (state_28768[(8)]);var inst_28754__$1 = (state_28768[(2)]);var inst_28755 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28754__$1);var state_28768__$1 = (function (){var statearr_28777 = state_28768;(statearr_28777[(8)] = inst_28754__$1);
return statearr_28777;
})();if(cljs.core.truth_(inst_28755))
{var statearr_28778_28806 = state_28768__$1;(statearr_28778_28806[(1)] = (13));
} else
{var statearr_28779_28807 = state_28768__$1;(statearr_28779_28807[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (2)))
{var inst_28731 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28732 = (0);var state_28768__$1 = (function (){var statearr_28780 = state_28768;(statearr_28780[(9)] = inst_28731);
(statearr_28780[(7)] = inst_28732);
return statearr_28780;
})();var statearr_28781_28808 = state_28768__$1;(statearr_28781_28808[(2)] = null);
(statearr_28781_28808[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (11)))
{var inst_28732 = (state_28768[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28768,(10),Object,null,(9));var inst_28741 = chs__$1.call(null,inst_28732);var inst_28742 = done.call(null,inst_28732);var inst_28743 = cljs.core.async.take_BANG_.call(null,inst_28741,inst_28742);var state_28768__$1 = state_28768;var statearr_28782_28809 = state_28768__$1;(statearr_28782_28809[(2)] = inst_28743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (9)))
{var inst_28732 = (state_28768[(7)]);var inst_28745 = (state_28768[(2)]);var inst_28746 = (inst_28732 + (1));var inst_28732__$1 = inst_28746;var state_28768__$1 = (function (){var statearr_28783 = state_28768;(statearr_28783[(7)] = inst_28732__$1);
(statearr_28783[(10)] = inst_28745);
return statearr_28783;
})();var statearr_28784_28810 = state_28768__$1;(statearr_28784_28810[(2)] = null);
(statearr_28784_28810[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (5)))
{var inst_28752 = (state_28768[(2)]);var state_28768__$1 = (function (){var statearr_28785 = state_28768;(statearr_28785[(11)] = inst_28752);
return statearr_28785;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(12),dchan);
} else
{if((state_val_28769 === (14)))
{var inst_28754 = (state_28768[(8)]);var inst_28759 = cljs.core.apply.call(null,f,inst_28754);var state_28768__$1 = state_28768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28768__$1,(16),out,inst_28759);
} else
{if((state_val_28769 === (16)))
{var inst_28761 = (state_28768[(2)]);var state_28768__$1 = (function (){var statearr_28786 = state_28768;(statearr_28786[(12)] = inst_28761);
return statearr_28786;
})();var statearr_28787_28811 = state_28768__$1;(statearr_28787_28811[(2)] = null);
(statearr_28787_28811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (10)))
{var inst_28736 = (state_28768[(2)]);var inst_28737 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28768__$1 = (function (){var statearr_28788 = state_28768;(statearr_28788[(13)] = inst_28736);
return statearr_28788;
})();var statearr_28789_28812 = state_28768__$1;(statearr_28789_28812[(2)] = inst_28737);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28769 === (8)))
{var inst_28750 = (state_28768[(2)]);var state_28768__$1 = state_28768;var statearr_28790_28813 = state_28768__$1;(statearr_28790_28813[(2)] = inst_28750);
(statearr_28790_28813[(1)] = (5));
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
});})(c__5693__auto___28798,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___28798,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28794[(0)] = state_machine__5679__auto__);
(statearr_28794[(1)] = (1));
return statearr_28794;
});
var state_machine__5679__auto____1 = (function (state_28768){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28795){if((e28795 instanceof Object))
{var ex__5682__auto__ = e28795;var statearr_28796_28814 = state_28768;(statearr_28796_28814[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28815 = state_28768;
state_28768 = G__28815;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28768){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28798,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_28797 = f__5694__auto__.call(null);(statearr_28797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28798);
return statearr_28797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28798,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28923 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28923,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28923,out){
return (function (state_28899){var state_val_28900 = (state_28899[(1)]);if((state_val_28900 === (7)))
{var inst_28879 = (state_28899[(7)]);var inst_28878 = (state_28899[(8)]);var inst_28878__$1 = (state_28899[(2)]);var inst_28879__$1 = cljs.core.nth.call(null,inst_28878__$1,(0),null);var inst_28880 = cljs.core.nth.call(null,inst_28878__$1,(1),null);var inst_28881 = (inst_28879__$1 == null);var state_28899__$1 = (function (){var statearr_28901 = state_28899;(statearr_28901[(7)] = inst_28879__$1);
(statearr_28901[(9)] = inst_28880);
(statearr_28901[(8)] = inst_28878__$1);
return statearr_28901;
})();if(cljs.core.truth_(inst_28881))
{var statearr_28902_28924 = state_28899__$1;(statearr_28902_28924[(1)] = (8));
} else
{var statearr_28903_28925 = state_28899__$1;(statearr_28903_28925[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28900 === (1)))
{var inst_28870 = cljs.core.vec.call(null,chs);var inst_28871 = inst_28870;var state_28899__$1 = (function (){var statearr_28904 = state_28899;(statearr_28904[(10)] = inst_28871);
return statearr_28904;
})();var statearr_28905_28926 = state_28899__$1;(statearr_28905_28926[(2)] = null);
(statearr_28905_28926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28900 === (4)))
{var inst_28871 = (state_28899[(10)]);var state_28899__$1 = state_28899;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28899__$1,(7),inst_28871);
} else
{if((state_val_28900 === (6)))
{var inst_28895 = (state_28899[(2)]);var state_28899__$1 = state_28899;var statearr_28906_28927 = state_28899__$1;(statearr_28906_28927[(2)] = inst_28895);
(statearr_28906_28927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28900 === (3)))
{var inst_28897 = (state_28899[(2)]);var state_28899__$1 = state_28899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28899__$1,inst_28897);
} else
{if((state_val_28900 === (2)))
{var inst_28871 = (state_28899[(10)]);var inst_28873 = cljs.core.count.call(null,inst_28871);var inst_28874 = (inst_28873 > (0));var state_28899__$1 = state_28899;if(cljs.core.truth_(inst_28874))
{var statearr_28908_28928 = state_28899__$1;(statearr_28908_28928[(1)] = (4));
} else
{var statearr_28909_28929 = state_28899__$1;(statearr_28909_28929[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28900 === (11)))
{var inst_28871 = (state_28899[(10)]);var inst_28888 = (state_28899[(2)]);var tmp28907 = inst_28871;var inst_28871__$1 = tmp28907;var state_28899__$1 = (function (){var statearr_28910 = state_28899;(statearr_28910[(11)] = inst_28888);
(statearr_28910[(10)] = inst_28871__$1);
return statearr_28910;
})();var statearr_28911_28930 = state_28899__$1;(statearr_28911_28930[(2)] = null);
(statearr_28911_28930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28900 === (9)))
{var inst_28879 = (state_28899[(7)]);var state_28899__$1 = state_28899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28899__$1,(11),out,inst_28879);
} else
{if((state_val_28900 === (5)))
{var inst_28893 = cljs.core.async.close_BANG_.call(null,out);var state_28899__$1 = state_28899;var statearr_28912_28931 = state_28899__$1;(statearr_28912_28931[(2)] = inst_28893);
(statearr_28912_28931[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28900 === (10)))
{var inst_28891 = (state_28899[(2)]);var state_28899__$1 = state_28899;var statearr_28913_28932 = state_28899__$1;(statearr_28913_28932[(2)] = inst_28891);
(statearr_28913_28932[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28900 === (8)))
{var inst_28871 = (state_28899[(10)]);var inst_28879 = (state_28899[(7)]);var inst_28880 = (state_28899[(9)]);var inst_28878 = (state_28899[(8)]);var inst_28883 = (function (){var c = inst_28880;var v = inst_28879;var vec__28876 = inst_28878;var cs = inst_28871;return ((function (c,v,vec__28876,cs,inst_28871,inst_28879,inst_28880,inst_28878,state_val_28900,c__5693__auto___28923,out){
return (function (p1__28816_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28816_SHARP_);
});
;})(c,v,vec__28876,cs,inst_28871,inst_28879,inst_28880,inst_28878,state_val_28900,c__5693__auto___28923,out))
})();var inst_28884 = cljs.core.filterv.call(null,inst_28883,inst_28871);var inst_28871__$1 = inst_28884;var state_28899__$1 = (function (){var statearr_28914 = state_28899;(statearr_28914[(10)] = inst_28871__$1);
return statearr_28914;
})();var statearr_28915_28933 = state_28899__$1;(statearr_28915_28933[(2)] = null);
(statearr_28915_28933[(1)] = (2));
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
});})(c__5693__auto___28923,out))
;return ((function (switch__5678__auto__,c__5693__auto___28923,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28919 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28919[(0)] = state_machine__5679__auto__);
(statearr_28919[(1)] = (1));
return statearr_28919;
});
var state_machine__5679__auto____1 = (function (state_28899){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28899);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28920){if((e28920 instanceof Object))
{var ex__5682__auto__ = e28920;var statearr_28921_28934 = state_28899;(statearr_28921_28934[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28935 = state_28899;
state_28899 = G__28935;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28899){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28923,out))
})();var state__5695__auto__ = (function (){var statearr_28922 = f__5694__auto__.call(null);(statearr_28922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28923);
return statearr_28922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28923,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29028 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29028,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29028,out){
return (function (state_29005){var state_val_29006 = (state_29005[(1)]);if((state_val_29006 === (7)))
{var inst_28987 = (state_29005[(7)]);var inst_28987__$1 = (state_29005[(2)]);var inst_28988 = (inst_28987__$1 == null);var inst_28989 = cljs.core.not.call(null,inst_28988);var state_29005__$1 = (function (){var statearr_29007 = state_29005;(statearr_29007[(7)] = inst_28987__$1);
return statearr_29007;
})();if(inst_28989)
{var statearr_29008_29029 = state_29005__$1;(statearr_29008_29029[(1)] = (8));
} else
{var statearr_29009_29030 = state_29005__$1;(statearr_29009_29030[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (1)))
{var inst_28982 = (0);var state_29005__$1 = (function (){var statearr_29010 = state_29005;(statearr_29010[(8)] = inst_28982);
return statearr_29010;
})();var statearr_29011_29031 = state_29005__$1;(statearr_29011_29031[(2)] = null);
(statearr_29011_29031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (4)))
{var state_29005__$1 = state_29005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(7),ch);
} else
{if((state_val_29006 === (6)))
{var inst_29000 = (state_29005[(2)]);var state_29005__$1 = state_29005;var statearr_29012_29032 = state_29005__$1;(statearr_29012_29032[(2)] = inst_29000);
(statearr_29012_29032[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (3)))
{var inst_29002 = (state_29005[(2)]);var inst_29003 = cljs.core.async.close_BANG_.call(null,out);var state_29005__$1 = (function (){var statearr_29013 = state_29005;(statearr_29013[(9)] = inst_29002);
return statearr_29013;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29005__$1,inst_29003);
} else
{if((state_val_29006 === (2)))
{var inst_28982 = (state_29005[(8)]);var inst_28984 = (inst_28982 < n);var state_29005__$1 = state_29005;if(cljs.core.truth_(inst_28984))
{var statearr_29014_29033 = state_29005__$1;(statearr_29014_29033[(1)] = (4));
} else
{var statearr_29015_29034 = state_29005__$1;(statearr_29015_29034[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (11)))
{var inst_28982 = (state_29005[(8)]);var inst_28992 = (state_29005[(2)]);var inst_28993 = (inst_28982 + (1));var inst_28982__$1 = inst_28993;var state_29005__$1 = (function (){var statearr_29016 = state_29005;(statearr_29016[(8)] = inst_28982__$1);
(statearr_29016[(10)] = inst_28992);
return statearr_29016;
})();var statearr_29017_29035 = state_29005__$1;(statearr_29017_29035[(2)] = null);
(statearr_29017_29035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (9)))
{var state_29005__$1 = state_29005;var statearr_29018_29036 = state_29005__$1;(statearr_29018_29036[(2)] = null);
(statearr_29018_29036[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (5)))
{var state_29005__$1 = state_29005;var statearr_29019_29037 = state_29005__$1;(statearr_29019_29037[(2)] = null);
(statearr_29019_29037[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (10)))
{var inst_28997 = (state_29005[(2)]);var state_29005__$1 = state_29005;var statearr_29020_29038 = state_29005__$1;(statearr_29020_29038[(2)] = inst_28997);
(statearr_29020_29038[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29006 === (8)))
{var inst_28987 = (state_29005[(7)]);var state_29005__$1 = state_29005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29005__$1,(11),out,inst_28987);
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
});})(c__5693__auto___29028,out))
;return ((function (switch__5678__auto__,c__5693__auto___29028,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29024 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29024[(0)] = state_machine__5679__auto__);
(statearr_29024[(1)] = (1));
return statearr_29024;
});
var state_machine__5679__auto____1 = (function (state_29005){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29025){if((e29025 instanceof Object))
{var ex__5682__auto__ = e29025;var statearr_29026_29039 = state_29005;(statearr_29026_29039[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29040 = state_29005;
state_29005 = G__29040;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29005){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29028,out))
})();var state__5695__auto__ = (function (){var statearr_29027 = f__5694__auto__.call(null);(statearr_29027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29028);
return statearr_29027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29028,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29137 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29137,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29137,out){
return (function (state_29112){var state_val_29113 = (state_29112[(1)]);if((state_val_29113 === (7)))
{var inst_29107 = (state_29112[(2)]);var state_29112__$1 = state_29112;var statearr_29114_29138 = state_29112__$1;(statearr_29114_29138[(2)] = inst_29107);
(statearr_29114_29138[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29113 === (1)))
{var inst_29089 = null;var state_29112__$1 = (function (){var statearr_29115 = state_29112;(statearr_29115[(7)] = inst_29089);
return statearr_29115;
})();var statearr_29116_29139 = state_29112__$1;(statearr_29116_29139[(2)] = null);
(statearr_29116_29139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29113 === (4)))
{var inst_29092 = (state_29112[(8)]);var inst_29092__$1 = (state_29112[(2)]);var inst_29093 = (inst_29092__$1 == null);var inst_29094 = cljs.core.not.call(null,inst_29093);var state_29112__$1 = (function (){var statearr_29117 = state_29112;(statearr_29117[(8)] = inst_29092__$1);
return statearr_29117;
})();if(inst_29094)
{var statearr_29118_29140 = state_29112__$1;(statearr_29118_29140[(1)] = (5));
} else
{var statearr_29119_29141 = state_29112__$1;(statearr_29119_29141[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29113 === (6)))
{var state_29112__$1 = state_29112;var statearr_29120_29142 = state_29112__$1;(statearr_29120_29142[(2)] = null);
(statearr_29120_29142[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29113 === (3)))
{var inst_29109 = (state_29112[(2)]);var inst_29110 = cljs.core.async.close_BANG_.call(null,out);var state_29112__$1 = (function (){var statearr_29121 = state_29112;(statearr_29121[(9)] = inst_29109);
return statearr_29121;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29112__$1,inst_29110);
} else
{if((state_val_29113 === (2)))
{var state_29112__$1 = state_29112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29112__$1,(4),ch);
} else
{if((state_val_29113 === (11)))
{var inst_29092 = (state_29112[(8)]);var inst_29101 = (state_29112[(2)]);var inst_29089 = inst_29092;var state_29112__$1 = (function (){var statearr_29122 = state_29112;(statearr_29122[(10)] = inst_29101);
(statearr_29122[(7)] = inst_29089);
return statearr_29122;
})();var statearr_29123_29143 = state_29112__$1;(statearr_29123_29143[(2)] = null);
(statearr_29123_29143[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29113 === (9)))
{var inst_29092 = (state_29112[(8)]);var state_29112__$1 = state_29112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29112__$1,(11),out,inst_29092);
} else
{if((state_val_29113 === (5)))
{var inst_29089 = (state_29112[(7)]);var inst_29092 = (state_29112[(8)]);var inst_29096 = cljs.core._EQ_.call(null,inst_29092,inst_29089);var state_29112__$1 = state_29112;if(inst_29096)
{var statearr_29125_29144 = state_29112__$1;(statearr_29125_29144[(1)] = (8));
} else
{var statearr_29126_29145 = state_29112__$1;(statearr_29126_29145[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29113 === (10)))
{var inst_29104 = (state_29112[(2)]);var state_29112__$1 = state_29112;var statearr_29127_29146 = state_29112__$1;(statearr_29127_29146[(2)] = inst_29104);
(statearr_29127_29146[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29113 === (8)))
{var inst_29089 = (state_29112[(7)]);var tmp29124 = inst_29089;var inst_29089__$1 = tmp29124;var state_29112__$1 = (function (){var statearr_29128 = state_29112;(statearr_29128[(7)] = inst_29089__$1);
return statearr_29128;
})();var statearr_29129_29147 = state_29112__$1;(statearr_29129_29147[(2)] = null);
(statearr_29129_29147[(1)] = (2));
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
});})(c__5693__auto___29137,out))
;return ((function (switch__5678__auto__,c__5693__auto___29137,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29133 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29133[(0)] = state_machine__5679__auto__);
(statearr_29133[(1)] = (1));
return statearr_29133;
});
var state_machine__5679__auto____1 = (function (state_29112){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29112);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29134){if((e29134 instanceof Object))
{var ex__5682__auto__ = e29134;var statearr_29135_29148 = state_29112;(statearr_29135_29148[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29149 = state_29112;
state_29112 = G__29149;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29112){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29137,out))
})();var state__5695__auto__ = (function (){var statearr_29136 = f__5694__auto__.call(null);(statearr_29136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29137);
return statearr_29136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29137,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29284 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29284,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29284,out){
return (function (state_29254){var state_val_29255 = (state_29254[(1)]);if((state_val_29255 === (7)))
{var inst_29250 = (state_29254[(2)]);var state_29254__$1 = state_29254;var statearr_29256_29285 = state_29254__$1;(statearr_29256_29285[(2)] = inst_29250);
(statearr_29256_29285[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (1)))
{var inst_29217 = (new Array(n));var inst_29218 = inst_29217;var inst_29219 = (0);var state_29254__$1 = (function (){var statearr_29257 = state_29254;(statearr_29257[(7)] = inst_29219);
(statearr_29257[(8)] = inst_29218);
return statearr_29257;
})();var statearr_29258_29286 = state_29254__$1;(statearr_29258_29286[(2)] = null);
(statearr_29258_29286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (4)))
{var inst_29222 = (state_29254[(9)]);var inst_29222__$1 = (state_29254[(2)]);var inst_29223 = (inst_29222__$1 == null);var inst_29224 = cljs.core.not.call(null,inst_29223);var state_29254__$1 = (function (){var statearr_29259 = state_29254;(statearr_29259[(9)] = inst_29222__$1);
return statearr_29259;
})();if(inst_29224)
{var statearr_29260_29287 = state_29254__$1;(statearr_29260_29287[(1)] = (5));
} else
{var statearr_29261_29288 = state_29254__$1;(statearr_29261_29288[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (15)))
{var inst_29244 = (state_29254[(2)]);var state_29254__$1 = state_29254;var statearr_29262_29289 = state_29254__$1;(statearr_29262_29289[(2)] = inst_29244);
(statearr_29262_29289[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (13)))
{var state_29254__$1 = state_29254;var statearr_29263_29290 = state_29254__$1;(statearr_29263_29290[(2)] = null);
(statearr_29263_29290[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (6)))
{var inst_29219 = (state_29254[(7)]);var inst_29240 = (inst_29219 > (0));var state_29254__$1 = state_29254;if(cljs.core.truth_(inst_29240))
{var statearr_29264_29291 = state_29254__$1;(statearr_29264_29291[(1)] = (12));
} else
{var statearr_29265_29292 = state_29254__$1;(statearr_29265_29292[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (3)))
{var inst_29252 = (state_29254[(2)]);var state_29254__$1 = state_29254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29254__$1,inst_29252);
} else
{if((state_val_29255 === (12)))
{var inst_29218 = (state_29254[(8)]);var inst_29242 = cljs.core.vec.call(null,inst_29218);var state_29254__$1 = state_29254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29254__$1,(15),out,inst_29242);
} else
{if((state_val_29255 === (2)))
{var state_29254__$1 = state_29254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29254__$1,(4),ch);
} else
{if((state_val_29255 === (11)))
{var inst_29234 = (state_29254[(2)]);var inst_29235 = (new Array(n));var inst_29218 = inst_29235;var inst_29219 = (0);var state_29254__$1 = (function (){var statearr_29266 = state_29254;(statearr_29266[(7)] = inst_29219);
(statearr_29266[(8)] = inst_29218);
(statearr_29266[(10)] = inst_29234);
return statearr_29266;
})();var statearr_29267_29293 = state_29254__$1;(statearr_29267_29293[(2)] = null);
(statearr_29267_29293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (9)))
{var inst_29218 = (state_29254[(8)]);var inst_29232 = cljs.core.vec.call(null,inst_29218);var state_29254__$1 = state_29254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29254__$1,(11),out,inst_29232);
} else
{if((state_val_29255 === (5)))
{var inst_29227 = (state_29254[(11)]);var inst_29219 = (state_29254[(7)]);var inst_29218 = (state_29254[(8)]);var inst_29222 = (state_29254[(9)]);var inst_29226 = (inst_29218[inst_29219] = inst_29222);var inst_29227__$1 = (inst_29219 + (1));var inst_29228 = (inst_29227__$1 < n);var state_29254__$1 = (function (){var statearr_29268 = state_29254;(statearr_29268[(11)] = inst_29227__$1);
(statearr_29268[(12)] = inst_29226);
return statearr_29268;
})();if(cljs.core.truth_(inst_29228))
{var statearr_29269_29294 = state_29254__$1;(statearr_29269_29294[(1)] = (8));
} else
{var statearr_29270_29295 = state_29254__$1;(statearr_29270_29295[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (14)))
{var inst_29247 = (state_29254[(2)]);var inst_29248 = cljs.core.async.close_BANG_.call(null,out);var state_29254__$1 = (function (){var statearr_29272 = state_29254;(statearr_29272[(13)] = inst_29247);
return statearr_29272;
})();var statearr_29273_29296 = state_29254__$1;(statearr_29273_29296[(2)] = inst_29248);
(statearr_29273_29296[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (10)))
{var inst_29238 = (state_29254[(2)]);var state_29254__$1 = state_29254;var statearr_29274_29297 = state_29254__$1;(statearr_29274_29297[(2)] = inst_29238);
(statearr_29274_29297[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29255 === (8)))
{var inst_29227 = (state_29254[(11)]);var inst_29218 = (state_29254[(8)]);var tmp29271 = inst_29218;var inst_29218__$1 = tmp29271;var inst_29219 = inst_29227;var state_29254__$1 = (function (){var statearr_29275 = state_29254;(statearr_29275[(7)] = inst_29219);
(statearr_29275[(8)] = inst_29218__$1);
return statearr_29275;
})();var statearr_29276_29298 = state_29254__$1;(statearr_29276_29298[(2)] = null);
(statearr_29276_29298[(1)] = (2));
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
});})(c__5693__auto___29284,out))
;return ((function (switch__5678__auto__,c__5693__auto___29284,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29280[(0)] = state_machine__5679__auto__);
(statearr_29280[(1)] = (1));
return statearr_29280;
});
var state_machine__5679__auto____1 = (function (state_29254){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29254);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29281){if((e29281 instanceof Object))
{var ex__5682__auto__ = e29281;var statearr_29282_29299 = state_29254;(statearr_29282_29299[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29300 = state_29254;
state_29254 = G__29300;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29254){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29284,out))
})();var state__5695__auto__ = (function (){var statearr_29283 = f__5694__auto__.call(null);(statearr_29283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29284);
return statearr_29283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29284,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29443 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29443,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29443,out){
return (function (state_29413){var state_val_29414 = (state_29413[(1)]);if((state_val_29414 === (7)))
{var inst_29409 = (state_29413[(2)]);var state_29413__$1 = state_29413;var statearr_29415_29444 = state_29413__$1;(statearr_29415_29444[(2)] = inst_29409);
(statearr_29415_29444[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (1)))
{var inst_29372 = [];var inst_29373 = inst_29372;var inst_29374 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_29413__$1 = (function (){var statearr_29416 = state_29413;(statearr_29416[(7)] = inst_29374);
(statearr_29416[(8)] = inst_29373);
return statearr_29416;
})();var statearr_29417_29445 = state_29413__$1;(statearr_29417_29445[(2)] = null);
(statearr_29417_29445[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (4)))
{var inst_29377 = (state_29413[(9)]);var inst_29377__$1 = (state_29413[(2)]);var inst_29378 = (inst_29377__$1 == null);var inst_29379 = cljs.core.not.call(null,inst_29378);var state_29413__$1 = (function (){var statearr_29418 = state_29413;(statearr_29418[(9)] = inst_29377__$1);
return statearr_29418;
})();if(inst_29379)
{var statearr_29419_29446 = state_29413__$1;(statearr_29419_29446[(1)] = (5));
} else
{var statearr_29420_29447 = state_29413__$1;(statearr_29420_29447[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (15)))
{var inst_29403 = (state_29413[(2)]);var state_29413__$1 = state_29413;var statearr_29421_29448 = state_29413__$1;(statearr_29421_29448[(2)] = inst_29403);
(statearr_29421_29448[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (13)))
{var state_29413__$1 = state_29413;var statearr_29422_29449 = state_29413__$1;(statearr_29422_29449[(2)] = null);
(statearr_29422_29449[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (6)))
{var inst_29373 = (state_29413[(8)]);var inst_29398 = inst_29373.length;var inst_29399 = (inst_29398 > (0));var state_29413__$1 = state_29413;if(cljs.core.truth_(inst_29399))
{var statearr_29423_29450 = state_29413__$1;(statearr_29423_29450[(1)] = (12));
} else
{var statearr_29424_29451 = state_29413__$1;(statearr_29424_29451[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (3)))
{var inst_29411 = (state_29413[(2)]);var state_29413__$1 = state_29413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29413__$1,inst_29411);
} else
{if((state_val_29414 === (12)))
{var inst_29373 = (state_29413[(8)]);var inst_29401 = cljs.core.vec.call(null,inst_29373);var state_29413__$1 = state_29413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29413__$1,(15),out,inst_29401);
} else
{if((state_val_29414 === (2)))
{var state_29413__$1 = state_29413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29413__$1,(4),ch);
} else
{if((state_val_29414 === (11)))
{var inst_29377 = (state_29413[(9)]);var inst_29381 = (state_29413[(10)]);var inst_29391 = (state_29413[(2)]);var inst_29392 = [];var inst_29393 = inst_29392.push(inst_29377);var inst_29373 = inst_29392;var inst_29374 = inst_29381;var state_29413__$1 = (function (){var statearr_29425 = state_29413;(statearr_29425[(7)] = inst_29374);
(statearr_29425[(11)] = inst_29393);
(statearr_29425[(12)] = inst_29391);
(statearr_29425[(8)] = inst_29373);
return statearr_29425;
})();var statearr_29426_29452 = state_29413__$1;(statearr_29426_29452[(2)] = null);
(statearr_29426_29452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (9)))
{var inst_29373 = (state_29413[(8)]);var inst_29389 = cljs.core.vec.call(null,inst_29373);var state_29413__$1 = state_29413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29413__$1,(11),out,inst_29389);
} else
{if((state_val_29414 === (5)))
{var inst_29374 = (state_29413[(7)]);var inst_29377 = (state_29413[(9)]);var inst_29381 = (state_29413[(10)]);var inst_29381__$1 = f.call(null,inst_29377);var inst_29382 = cljs.core._EQ_.call(null,inst_29381__$1,inst_29374);var inst_29383 = cljs.core.keyword_identical_QMARK_.call(null,inst_29374,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_29384 = (inst_29382) || (inst_29383);var state_29413__$1 = (function (){var statearr_29427 = state_29413;(statearr_29427[(10)] = inst_29381__$1);
return statearr_29427;
})();if(cljs.core.truth_(inst_29384))
{var statearr_29428_29453 = state_29413__$1;(statearr_29428_29453[(1)] = (8));
} else
{var statearr_29429_29454 = state_29413__$1;(statearr_29429_29454[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (14)))
{var inst_29406 = (state_29413[(2)]);var inst_29407 = cljs.core.async.close_BANG_.call(null,out);var state_29413__$1 = (function (){var statearr_29431 = state_29413;(statearr_29431[(13)] = inst_29406);
return statearr_29431;
})();var statearr_29432_29455 = state_29413__$1;(statearr_29432_29455[(2)] = inst_29407);
(statearr_29432_29455[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (10)))
{var inst_29396 = (state_29413[(2)]);var state_29413__$1 = state_29413;var statearr_29433_29456 = state_29413__$1;(statearr_29433_29456[(2)] = inst_29396);
(statearr_29433_29456[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29414 === (8)))
{var inst_29377 = (state_29413[(9)]);var inst_29381 = (state_29413[(10)]);var inst_29373 = (state_29413[(8)]);var inst_29386 = inst_29373.push(inst_29377);var tmp29430 = inst_29373;var inst_29373__$1 = tmp29430;var inst_29374 = inst_29381;var state_29413__$1 = (function (){var statearr_29434 = state_29413;(statearr_29434[(7)] = inst_29374);
(statearr_29434[(14)] = inst_29386);
(statearr_29434[(8)] = inst_29373__$1);
return statearr_29434;
})();var statearr_29435_29457 = state_29413__$1;(statearr_29435_29457[(2)] = null);
(statearr_29435_29457[(1)] = (2));
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
});})(c__5693__auto___29443,out))
;return ((function (switch__5678__auto__,c__5693__auto___29443,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29439[(0)] = state_machine__5679__auto__);
(statearr_29439[(1)] = (1));
return statearr_29439;
});
var state_machine__5679__auto____1 = (function (state_29413){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29413);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29440){if((e29440 instanceof Object))
{var ex__5682__auto__ = e29440;var statearr_29441_29458 = state_29413;(statearr_29441_29458[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29459 = state_29413;
state_29413 = G__29459;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29413){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29443,out))
})();var state__5695__auto__ = (function (){var statearr_29442 = f__5694__auto__.call(null);(statearr_29442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29443);
return statearr_29442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29443,out))
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
