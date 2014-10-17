// Compiled by ClojureScript 0.0-2322
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19342 = (function (f,fn_handler,meta19343){
this.f = f;
this.fn_handler = fn_handler;
this.meta19343 = meta19343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19342.cljs$lang$type = true;
cljs.core.async.t19342.cljs$lang$ctorStr = "cljs.core.async/t19342";
cljs.core.async.t19342.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19342");
});
cljs.core.async.t19342.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19344){var self__ = this;
var _19344__$1 = this;return self__.meta19343;
});
cljs.core.async.t19342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19344,meta19343__$1){var self__ = this;
var _19344__$1 = this;return (new cljs.core.async.t19342(self__.f,self__.fn_handler,meta19343__$1));
});
cljs.core.async.__GT_t19342 = (function __GT_t19342(f__$1,fn_handler__$1,meta19343){return (new cljs.core.async.t19342(f__$1,fn_handler__$1,meta19343));
});
}
return (new cljs.core.async.t19342(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19346 = buff;if(G__19346)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__19346.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19346.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19346);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19346);
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_19347 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19347);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19347,ret){
return (function (){return fn1.call(null,val_19347);
});})(val_19347,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___19348 = n;var x_19349 = (0);while(true){
if((x_19349 < n__4414__auto___19348))
{(a[x_19349] = (0));
{
var G__19350 = (x_19349 + (1));
x_19349 = G__19350;
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
var G__19351 = (i + (1));
i = G__19351;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19355 = (function (flag,alt_flag,meta19356){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19356 = meta19356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19355.cljs$lang$type = true;
cljs.core.async.t19355.cljs$lang$ctorStr = "cljs.core.async/t19355";
cljs.core.async.t19355.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19355");
});})(flag))
;
cljs.core.async.t19355.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19357){var self__ = this;
var _19357__$1 = this;return self__.meta19356;
});})(flag))
;
cljs.core.async.t19355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19357,meta19356__$1){var self__ = this;
var _19357__$1 = this;return (new cljs.core.async.t19355(self__.flag,self__.alt_flag,meta19356__$1));
});})(flag))
;
cljs.core.async.__GT_t19355 = ((function (flag){
return (function __GT_t19355(flag__$1,alt_flag__$1,meta19356){return (new cljs.core.async.t19355(flag__$1,alt_flag__$1,meta19356));
});})(flag))
;
}
return (new cljs.core.async.t19355(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19361 = (function (cb,flag,alt_handler,meta19362){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19362 = meta19362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19361.cljs$lang$type = true;
cljs.core.async.t19361.cljs$lang$ctorStr = "cljs.core.async/t19361";
cljs.core.async.t19361.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19361");
});
cljs.core.async.t19361.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19363){var self__ = this;
var _19363__$1 = this;return self__.meta19362;
});
cljs.core.async.t19361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19363,meta19362__$1){var self__ = this;
var _19363__$1 = this;return (new cljs.core.async.t19361(self__.cb,self__.flag,self__.alt_handler,meta19362__$1));
});
cljs.core.async.__GT_t19361 = (function __GT_t19361(cb__$1,flag__$1,alt_handler__$1,meta19362){return (new cljs.core.async.t19361(cb__$1,flag__$1,alt_handler__$1,meta19362));
});
}
return (new cljs.core.async.t19361(cb,flag,alt_handler,null));
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
return (function (p1__19364_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19364_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__19365 = (i + (1));
i = G__19365;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
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
var alts_BANG___delegate = function (ports,p__19366){var map__19368 = p__19366;var map__19368__$1 = ((cljs.core.seq_QMARK_.call(null,map__19368))?cljs.core.apply.call(null,cljs.core.hash_map,map__19368):map__19368);var opts = map__19368__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__19366 = null;if (arguments.length > 1) {
  p__19366 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19366);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19369){
var ports = cljs.core.first(arglist__19369);
var p__19366 = cljs.core.rest(arglist__19369);
return alts_BANG___delegate(ports,p__19366);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19377 = (function (ch,f,map_LT_,meta19378){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19378 = meta19378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19377.cljs$lang$type = true;
cljs.core.async.t19377.cljs$lang$ctorStr = "cljs.core.async/t19377";
cljs.core.async.t19377.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19377");
});
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19380 = (function (fn1,_,meta19378,ch,f,map_LT_,meta19381){
this.fn1 = fn1;
this._ = _;
this.meta19378 = meta19378;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19381 = meta19381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19380.cljs$lang$type = true;
cljs.core.async.t19380.cljs$lang$ctorStr = "cljs.core.async/t19380";
cljs.core.async.t19380.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19380");
});})(___$1))
;
cljs.core.async.t19380.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19380.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19370_SHARP_){return f1.call(null,(((p1__19370_SHARP_ == null))?null:self__.f.call(null,p1__19370_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19382){var self__ = this;
var _19382__$1 = this;return self__.meta19381;
});})(___$1))
;
cljs.core.async.t19380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19382,meta19381__$1){var self__ = this;
var _19382__$1 = this;return (new cljs.core.async.t19380(self__.fn1,self__._,self__.meta19378,self__.ch,self__.f,self__.map_LT_,meta19381__$1));
});})(___$1))
;
cljs.core.async.__GT_t19380 = ((function (___$1){
return (function __GT_t19380(fn1__$1,___$2,meta19378__$1,ch__$2,f__$2,map_LT___$2,meta19381){return (new cljs.core.async.t19380(fn1__$1,___$2,meta19378__$1,ch__$2,f__$2,map_LT___$2,meta19381));
});})(___$1))
;
}
return (new cljs.core.async.t19380(fn1,___$1,self__.meta19378,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19379){var self__ = this;
var _19379__$1 = this;return self__.meta19378;
});
cljs.core.async.t19377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19379,meta19378__$1){var self__ = this;
var _19379__$1 = this;return (new cljs.core.async.t19377(self__.ch,self__.f,self__.map_LT_,meta19378__$1));
});
cljs.core.async.__GT_t19377 = (function __GT_t19377(ch__$1,f__$1,map_LT___$1,meta19378){return (new cljs.core.async.t19377(ch__$1,f__$1,map_LT___$1,meta19378));
});
}
return (new cljs.core.async.t19377(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19386 = (function (ch,f,map_GT_,meta19387){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19387 = meta19387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19386.cljs$lang$type = true;
cljs.core.async.t19386.cljs$lang$ctorStr = "cljs.core.async/t19386";
cljs.core.async.t19386.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19386");
});
cljs.core.async.t19386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t19386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19388){var self__ = this;
var _19388__$1 = this;return self__.meta19387;
});
cljs.core.async.t19386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19388,meta19387__$1){var self__ = this;
var _19388__$1 = this;return (new cljs.core.async.t19386(self__.ch,self__.f,self__.map_GT_,meta19387__$1));
});
cljs.core.async.__GT_t19386 = (function __GT_t19386(ch__$1,f__$1,map_GT___$1,meta19387){return (new cljs.core.async.t19386(ch__$1,f__$1,map_GT___$1,meta19387));
});
}
return (new cljs.core.async.t19386(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19392 = (function (ch,p,filter_GT_,meta19393){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19393 = meta19393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19392.cljs$lang$type = true;
cljs.core.async.t19392.cljs$lang$ctorStr = "cljs.core.async/t19392";
cljs.core.async.t19392.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19392");
});
cljs.core.async.t19392.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t19392.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19392.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19394){var self__ = this;
var _19394__$1 = this;return self__.meta19393;
});
cljs.core.async.t19392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19394,meta19393__$1){var self__ = this;
var _19394__$1 = this;return (new cljs.core.async.t19392(self__.ch,self__.p,self__.filter_GT_,meta19393__$1));
});
cljs.core.async.__GT_t19392 = (function __GT_t19392(ch__$1,p__$1,filter_GT___$1,meta19393){return (new cljs.core.async.t19392(ch__$1,p__$1,filter_GT___$1,meta19393));
});
}
return (new cljs.core.async.t19392(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___19477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19477,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19477,out){
return (function (state_19456){var state_val_19457 = (state_19456[(1)]);if((state_val_19457 === (7)))
{var inst_19452 = (state_19456[(2)]);var state_19456__$1 = state_19456;var statearr_19458_19478 = state_19456__$1;(statearr_19458_19478[(2)] = inst_19452);
(statearr_19458_19478[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (1)))
{var state_19456__$1 = state_19456;var statearr_19459_19479 = state_19456__$1;(statearr_19459_19479[(2)] = null);
(statearr_19459_19479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (4)))
{var inst_19438 = (state_19456[(7)]);var inst_19438__$1 = (state_19456[(2)]);var inst_19439 = (inst_19438__$1 == null);var state_19456__$1 = (function (){var statearr_19460 = state_19456;(statearr_19460[(7)] = inst_19438__$1);
return statearr_19460;
})();if(cljs.core.truth_(inst_19439))
{var statearr_19461_19480 = state_19456__$1;(statearr_19461_19480[(1)] = (5));
} else
{var statearr_19462_19481 = state_19456__$1;(statearr_19462_19481[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (6)))
{var inst_19438 = (state_19456[(7)]);var inst_19443 = p.call(null,inst_19438);var state_19456__$1 = state_19456;if(cljs.core.truth_(inst_19443))
{var statearr_19463_19482 = state_19456__$1;(statearr_19463_19482[(1)] = (8));
} else
{var statearr_19464_19483 = state_19456__$1;(statearr_19464_19483[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (3)))
{var inst_19454 = (state_19456[(2)]);var state_19456__$1 = state_19456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19456__$1,inst_19454);
} else
{if((state_val_19457 === (2)))
{var state_19456__$1 = state_19456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19456__$1,(4),ch);
} else
{if((state_val_19457 === (11)))
{var inst_19446 = (state_19456[(2)]);var state_19456__$1 = state_19456;var statearr_19465_19484 = state_19456__$1;(statearr_19465_19484[(2)] = inst_19446);
(statearr_19465_19484[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (9)))
{var state_19456__$1 = state_19456;var statearr_19466_19485 = state_19456__$1;(statearr_19466_19485[(2)] = null);
(statearr_19466_19485[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (5)))
{var inst_19441 = cljs.core.async.close_BANG_.call(null,out);var state_19456__$1 = state_19456;var statearr_19467_19486 = state_19456__$1;(statearr_19467_19486[(2)] = inst_19441);
(statearr_19467_19486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (10)))
{var inst_19449 = (state_19456[(2)]);var state_19456__$1 = (function (){var statearr_19468 = state_19456;(statearr_19468[(8)] = inst_19449);
return statearr_19468;
})();var statearr_19469_19487 = state_19456__$1;(statearr_19469_19487[(2)] = null);
(statearr_19469_19487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19457 === (8)))
{var inst_19438 = (state_19456[(7)]);var state_19456__$1 = state_19456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19456__$1,(11),out,inst_19438);
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
});})(c__5708__auto___19477,out))
;return ((function (switch__5693__auto__,c__5708__auto___19477,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19473 = [null,null,null,null,null,null,null,null,null];(statearr_19473[(0)] = state_machine__5694__auto__);
(statearr_19473[(1)] = (1));
return statearr_19473;
});
var state_machine__5694__auto____1 = (function (state_19456){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19456);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19474){if((e19474 instanceof Object))
{var ex__5697__auto__ = e19474;var statearr_19475_19488 = state_19456;(statearr_19475_19488[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19474;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19489 = state_19456;
state_19456 = G__19489;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19456){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19477,out))
})();var state__5710__auto__ = (function (){var statearr_19476 = f__5709__auto__.call(null);(statearr_19476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19477);
return statearr_19476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19477,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_19641){var state_val_19642 = (state_19641[(1)]);if((state_val_19642 === (7)))
{var inst_19637 = (state_19641[(2)]);var state_19641__$1 = state_19641;var statearr_19643_19680 = state_19641__$1;(statearr_19643_19680[(2)] = inst_19637);
(statearr_19643_19680[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (20)))
{var inst_19612 = (state_19641[(7)]);var inst_19623 = (state_19641[(2)]);var inst_19624 = cljs.core.next.call(null,inst_19612);var inst_19598 = inst_19624;var inst_19599 = null;var inst_19600 = (0);var inst_19601 = (0);var state_19641__$1 = (function (){var statearr_19644 = state_19641;(statearr_19644[(8)] = inst_19598);
(statearr_19644[(9)] = inst_19599);
(statearr_19644[(10)] = inst_19623);
(statearr_19644[(11)] = inst_19601);
(statearr_19644[(12)] = inst_19600);
return statearr_19644;
})();var statearr_19645_19681 = state_19641__$1;(statearr_19645_19681[(2)] = null);
(statearr_19645_19681[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (1)))
{var state_19641__$1 = state_19641;var statearr_19646_19682 = state_19641__$1;(statearr_19646_19682[(2)] = null);
(statearr_19646_19682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (4)))
{var inst_19587 = (state_19641[(13)]);var inst_19587__$1 = (state_19641[(2)]);var inst_19588 = (inst_19587__$1 == null);var state_19641__$1 = (function (){var statearr_19650 = state_19641;(statearr_19650[(13)] = inst_19587__$1);
return statearr_19650;
})();if(cljs.core.truth_(inst_19588))
{var statearr_19651_19683 = state_19641__$1;(statearr_19651_19683[(1)] = (5));
} else
{var statearr_19652_19684 = state_19641__$1;(statearr_19652_19684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (15)))
{var state_19641__$1 = state_19641;var statearr_19653_19685 = state_19641__$1;(statearr_19653_19685[(2)] = null);
(statearr_19653_19685[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (13)))
{var inst_19598 = (state_19641[(8)]);var inst_19599 = (state_19641[(9)]);var inst_19601 = (state_19641[(11)]);var inst_19600 = (state_19641[(12)]);var inst_19608 = (state_19641[(2)]);var inst_19609 = (inst_19601 + (1));var tmp19647 = inst_19598;var tmp19648 = inst_19599;var tmp19649 = inst_19600;var inst_19598__$1 = tmp19647;var inst_19599__$1 = tmp19648;var inst_19600__$1 = tmp19649;var inst_19601__$1 = inst_19609;var state_19641__$1 = (function (){var statearr_19654 = state_19641;(statearr_19654[(14)] = inst_19608);
(statearr_19654[(8)] = inst_19598__$1);
(statearr_19654[(9)] = inst_19599__$1);
(statearr_19654[(11)] = inst_19601__$1);
(statearr_19654[(12)] = inst_19600__$1);
return statearr_19654;
})();var statearr_19655_19686 = state_19641__$1;(statearr_19655_19686[(2)] = null);
(statearr_19655_19686[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (6)))
{var inst_19587 = (state_19641[(13)]);var inst_19592 = f.call(null,inst_19587);var inst_19597 = cljs.core.seq.call(null,inst_19592);var inst_19598 = inst_19597;var inst_19599 = null;var inst_19600 = (0);var inst_19601 = (0);var state_19641__$1 = (function (){var statearr_19656 = state_19641;(statearr_19656[(8)] = inst_19598);
(statearr_19656[(9)] = inst_19599);
(statearr_19656[(11)] = inst_19601);
(statearr_19656[(12)] = inst_19600);
return statearr_19656;
})();var statearr_19657_19687 = state_19641__$1;(statearr_19657_19687[(2)] = null);
(statearr_19657_19687[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (17)))
{var inst_19612 = (state_19641[(7)]);var inst_19616 = cljs.core.chunk_first.call(null,inst_19612);var inst_19617 = cljs.core.chunk_rest.call(null,inst_19612);var inst_19618 = cljs.core.count.call(null,inst_19616);var inst_19598 = inst_19617;var inst_19599 = inst_19616;var inst_19600 = inst_19618;var inst_19601 = (0);var state_19641__$1 = (function (){var statearr_19658 = state_19641;(statearr_19658[(8)] = inst_19598);
(statearr_19658[(9)] = inst_19599);
(statearr_19658[(11)] = inst_19601);
(statearr_19658[(12)] = inst_19600);
return statearr_19658;
})();var statearr_19659_19688 = state_19641__$1;(statearr_19659_19688[(2)] = null);
(statearr_19659_19688[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (3)))
{var inst_19639 = (state_19641[(2)]);var state_19641__$1 = state_19641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19641__$1,inst_19639);
} else
{if((state_val_19642 === (12)))
{var inst_19632 = (state_19641[(2)]);var state_19641__$1 = state_19641;var statearr_19660_19689 = state_19641__$1;(statearr_19660_19689[(2)] = inst_19632);
(statearr_19660_19689[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (2)))
{var state_19641__$1 = state_19641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19641__$1,(4),in$);
} else
{if((state_val_19642 === (19)))
{var inst_19627 = (state_19641[(2)]);var state_19641__$1 = state_19641;var statearr_19661_19690 = state_19641__$1;(statearr_19661_19690[(2)] = inst_19627);
(statearr_19661_19690[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (11)))
{var inst_19612 = (state_19641[(7)]);var inst_19598 = (state_19641[(8)]);var inst_19612__$1 = cljs.core.seq.call(null,inst_19598);var state_19641__$1 = (function (){var statearr_19662 = state_19641;(statearr_19662[(7)] = inst_19612__$1);
return statearr_19662;
})();if(inst_19612__$1)
{var statearr_19663_19691 = state_19641__$1;(statearr_19663_19691[(1)] = (14));
} else
{var statearr_19664_19692 = state_19641__$1;(statearr_19664_19692[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (9)))
{var inst_19634 = (state_19641[(2)]);var state_19641__$1 = (function (){var statearr_19665 = state_19641;(statearr_19665[(15)] = inst_19634);
return statearr_19665;
})();var statearr_19666_19693 = state_19641__$1;(statearr_19666_19693[(2)] = null);
(statearr_19666_19693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (5)))
{var inst_19590 = cljs.core.async.close_BANG_.call(null,out);var state_19641__$1 = state_19641;var statearr_19667_19694 = state_19641__$1;(statearr_19667_19694[(2)] = inst_19590);
(statearr_19667_19694[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (14)))
{var inst_19612 = (state_19641[(7)]);var inst_19614 = cljs.core.chunked_seq_QMARK_.call(null,inst_19612);var state_19641__$1 = state_19641;if(inst_19614)
{var statearr_19668_19695 = state_19641__$1;(statearr_19668_19695[(1)] = (17));
} else
{var statearr_19669_19696 = state_19641__$1;(statearr_19669_19696[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (16)))
{var inst_19630 = (state_19641[(2)]);var state_19641__$1 = state_19641;var statearr_19670_19697 = state_19641__$1;(statearr_19670_19697[(2)] = inst_19630);
(statearr_19670_19697[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19642 === (10)))
{var inst_19599 = (state_19641[(9)]);var inst_19601 = (state_19641[(11)]);var inst_19606 = cljs.core._nth.call(null,inst_19599,inst_19601);var state_19641__$1 = state_19641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19641__$1,(13),out,inst_19606);
} else
{if((state_val_19642 === (18)))
{var inst_19612 = (state_19641[(7)]);var inst_19621 = cljs.core.first.call(null,inst_19612);var state_19641__$1 = state_19641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19641__$1,(20),out,inst_19621);
} else
{if((state_val_19642 === (8)))
{var inst_19601 = (state_19641[(11)]);var inst_19600 = (state_19641[(12)]);var inst_19603 = (inst_19601 < inst_19600);var inst_19604 = inst_19603;var state_19641__$1 = state_19641;if(cljs.core.truth_(inst_19604))
{var statearr_19671_19698 = state_19641__$1;(statearr_19671_19698[(1)] = (10));
} else
{var statearr_19672_19699 = state_19641__$1;(statearr_19672_19699[(1)] = (11));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19676[(0)] = state_machine__5694__auto__);
(statearr_19676[(1)] = (1));
return statearr_19676;
});
var state_machine__5694__auto____1 = (function (state_19641){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19641);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19677){if((e19677 instanceof Object))
{var ex__5697__auto__ = e19677;var statearr_19678_19700 = state_19641;(statearr_19678_19700[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19701 = state_19641;
state_19641 = G__19701;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19641){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_19679 = f__5709__auto__.call(null);(statearr_19679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___19782 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19782){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19782){
return (function (state_19761){var state_val_19762 = (state_19761[(1)]);if((state_val_19762 === (7)))
{var inst_19757 = (state_19761[(2)]);var state_19761__$1 = state_19761;var statearr_19763_19783 = state_19761__$1;(statearr_19763_19783[(2)] = inst_19757);
(statearr_19763_19783[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19762 === (1)))
{var state_19761__$1 = state_19761;var statearr_19764_19784 = state_19761__$1;(statearr_19764_19784[(2)] = null);
(statearr_19764_19784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19762 === (4)))
{var inst_19744 = (state_19761[(7)]);var inst_19744__$1 = (state_19761[(2)]);var inst_19745 = (inst_19744__$1 == null);var state_19761__$1 = (function (){var statearr_19765 = state_19761;(statearr_19765[(7)] = inst_19744__$1);
return statearr_19765;
})();if(cljs.core.truth_(inst_19745))
{var statearr_19766_19785 = state_19761__$1;(statearr_19766_19785[(1)] = (5));
} else
{var statearr_19767_19786 = state_19761__$1;(statearr_19767_19786[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19762 === (6)))
{var inst_19744 = (state_19761[(7)]);var state_19761__$1 = state_19761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19761__$1,(11),to,inst_19744);
} else
{if((state_val_19762 === (3)))
{var inst_19759 = (state_19761[(2)]);var state_19761__$1 = state_19761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19761__$1,inst_19759);
} else
{if((state_val_19762 === (2)))
{var state_19761__$1 = state_19761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19761__$1,(4),from);
} else
{if((state_val_19762 === (11)))
{var inst_19754 = (state_19761[(2)]);var state_19761__$1 = (function (){var statearr_19768 = state_19761;(statearr_19768[(8)] = inst_19754);
return statearr_19768;
})();var statearr_19769_19787 = state_19761__$1;(statearr_19769_19787[(2)] = null);
(statearr_19769_19787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19762 === (9)))
{var state_19761__$1 = state_19761;var statearr_19770_19788 = state_19761__$1;(statearr_19770_19788[(2)] = null);
(statearr_19770_19788[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19762 === (5)))
{var state_19761__$1 = state_19761;if(cljs.core.truth_(close_QMARK_))
{var statearr_19771_19789 = state_19761__$1;(statearr_19771_19789[(1)] = (8));
} else
{var statearr_19772_19790 = state_19761__$1;(statearr_19772_19790[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19762 === (10)))
{var inst_19751 = (state_19761[(2)]);var state_19761__$1 = state_19761;var statearr_19773_19791 = state_19761__$1;(statearr_19773_19791[(2)] = inst_19751);
(statearr_19773_19791[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19762 === (8)))
{var inst_19748 = cljs.core.async.close_BANG_.call(null,to);var state_19761__$1 = state_19761;var statearr_19774_19792 = state_19761__$1;(statearr_19774_19792[(2)] = inst_19748);
(statearr_19774_19792[(1)] = (10));
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
});})(c__5708__auto___19782))
;return ((function (switch__5693__auto__,c__5708__auto___19782){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19778 = [null,null,null,null,null,null,null,null,null];(statearr_19778[(0)] = state_machine__5694__auto__);
(statearr_19778[(1)] = (1));
return statearr_19778;
});
var state_machine__5694__auto____1 = (function (state_19761){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19761);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19779){if((e19779 instanceof Object))
{var ex__5697__auto__ = e19779;var statearr_19780_19793 = state_19761;(statearr_19780_19793[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19779;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19794 = state_19761;
state_19761 = G__19794;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19761){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19782))
})();var state__5710__auto__ = (function (){var statearr_19781 = f__5709__auto__.call(null);(statearr_19781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19782);
return statearr_19781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19782))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___19881 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19881,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19881,tc,fc){
return (function (state_19859){var state_val_19860 = (state_19859[(1)]);if((state_val_19860 === (7)))
{var inst_19855 = (state_19859[(2)]);var state_19859__$1 = state_19859;var statearr_19861_19882 = state_19859__$1;(statearr_19861_19882[(2)] = inst_19855);
(statearr_19861_19882[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19860 === (1)))
{var state_19859__$1 = state_19859;var statearr_19862_19883 = state_19859__$1;(statearr_19862_19883[(2)] = null);
(statearr_19862_19883[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19860 === (4)))
{var inst_19840 = (state_19859[(7)]);var inst_19840__$1 = (state_19859[(2)]);var inst_19841 = (inst_19840__$1 == null);var state_19859__$1 = (function (){var statearr_19863 = state_19859;(statearr_19863[(7)] = inst_19840__$1);
return statearr_19863;
})();if(cljs.core.truth_(inst_19841))
{var statearr_19864_19884 = state_19859__$1;(statearr_19864_19884[(1)] = (5));
} else
{var statearr_19865_19885 = state_19859__$1;(statearr_19865_19885[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19860 === (6)))
{var inst_19840 = (state_19859[(7)]);var inst_19846 = p.call(null,inst_19840);var state_19859__$1 = state_19859;if(cljs.core.truth_(inst_19846))
{var statearr_19866_19886 = state_19859__$1;(statearr_19866_19886[(1)] = (9));
} else
{var statearr_19867_19887 = state_19859__$1;(statearr_19867_19887[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19860 === (3)))
{var inst_19857 = (state_19859[(2)]);var state_19859__$1 = state_19859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19859__$1,inst_19857);
} else
{if((state_val_19860 === (2)))
{var state_19859__$1 = state_19859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19859__$1,(4),ch);
} else
{if((state_val_19860 === (11)))
{var inst_19840 = (state_19859[(7)]);var inst_19850 = (state_19859[(2)]);var state_19859__$1 = state_19859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19859__$1,(8),inst_19850,inst_19840);
} else
{if((state_val_19860 === (9)))
{var state_19859__$1 = state_19859;var statearr_19868_19888 = state_19859__$1;(statearr_19868_19888[(2)] = tc);
(statearr_19868_19888[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19860 === (5)))
{var inst_19843 = cljs.core.async.close_BANG_.call(null,tc);var inst_19844 = cljs.core.async.close_BANG_.call(null,fc);var state_19859__$1 = (function (){var statearr_19869 = state_19859;(statearr_19869[(8)] = inst_19843);
return statearr_19869;
})();var statearr_19870_19889 = state_19859__$1;(statearr_19870_19889[(2)] = inst_19844);
(statearr_19870_19889[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19860 === (10)))
{var state_19859__$1 = state_19859;var statearr_19871_19890 = state_19859__$1;(statearr_19871_19890[(2)] = fc);
(statearr_19871_19890[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19860 === (8)))
{var inst_19852 = (state_19859[(2)]);var state_19859__$1 = (function (){var statearr_19872 = state_19859;(statearr_19872[(9)] = inst_19852);
return statearr_19872;
})();var statearr_19873_19891 = state_19859__$1;(statearr_19873_19891[(2)] = null);
(statearr_19873_19891[(1)] = (2));
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
});})(c__5708__auto___19881,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___19881,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19877 = [null,null,null,null,null,null,null,null,null,null];(statearr_19877[(0)] = state_machine__5694__auto__);
(statearr_19877[(1)] = (1));
return statearr_19877;
});
var state_machine__5694__auto____1 = (function (state_19859){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19859);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19878){if((e19878 instanceof Object))
{var ex__5697__auto__ = e19878;var statearr_19879_19892 = state_19859;(statearr_19879_19892[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19878;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19893 = state_19859;
state_19859 = G__19893;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19859){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19881,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_19880 = f__5709__auto__.call(null);(statearr_19880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19881);
return statearr_19880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19881,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_19940){var state_val_19941 = (state_19940[(1)]);if((state_val_19941 === (7)))
{var inst_19936 = (state_19940[(2)]);var state_19940__$1 = state_19940;var statearr_19942_19958 = state_19940__$1;(statearr_19942_19958[(2)] = inst_19936);
(statearr_19942_19958[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (6)))
{var inst_19926 = (state_19940[(7)]);var inst_19929 = (state_19940[(8)]);var inst_19933 = f.call(null,inst_19926,inst_19929);var inst_19926__$1 = inst_19933;var state_19940__$1 = (function (){var statearr_19943 = state_19940;(statearr_19943[(7)] = inst_19926__$1);
return statearr_19943;
})();var statearr_19944_19959 = state_19940__$1;(statearr_19944_19959[(2)] = null);
(statearr_19944_19959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (5)))
{var inst_19926 = (state_19940[(7)]);var state_19940__$1 = state_19940;var statearr_19945_19960 = state_19940__$1;(statearr_19945_19960[(2)] = inst_19926);
(statearr_19945_19960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (4)))
{var inst_19929 = (state_19940[(8)]);var inst_19929__$1 = (state_19940[(2)]);var inst_19930 = (inst_19929__$1 == null);var state_19940__$1 = (function (){var statearr_19946 = state_19940;(statearr_19946[(8)] = inst_19929__$1);
return statearr_19946;
})();if(cljs.core.truth_(inst_19930))
{var statearr_19947_19961 = state_19940__$1;(statearr_19947_19961[(1)] = (5));
} else
{var statearr_19948_19962 = state_19940__$1;(statearr_19948_19962[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (3)))
{var inst_19938 = (state_19940[(2)]);var state_19940__$1 = state_19940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19940__$1,inst_19938);
} else
{if((state_val_19941 === (2)))
{var state_19940__$1 = state_19940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19940__$1,(4),ch);
} else
{if((state_val_19941 === (1)))
{var inst_19926 = init;var state_19940__$1 = (function (){var statearr_19949 = state_19940;(statearr_19949[(7)] = inst_19926);
return statearr_19949;
})();var statearr_19950_19963 = state_19940__$1;(statearr_19950_19963[(2)] = null);
(statearr_19950_19963[(1)] = (2));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19954 = [null,null,null,null,null,null,null,null,null];(statearr_19954[(0)] = state_machine__5694__auto__);
(statearr_19954[(1)] = (1));
return statearr_19954;
});
var state_machine__5694__auto____1 = (function (state_19940){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19940);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19955){if((e19955 instanceof Object))
{var ex__5697__auto__ = e19955;var statearr_19956_19964 = state_19940;(statearr_19956_19964[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19940);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19955;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19965 = state_19940;
state_19940 = G__19965;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19940){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_19957 = f__5709__auto__.call(null);(statearr_19957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_20027){var state_val_20028 = (state_20027[(1)]);if((state_val_20028 === (7)))
{var inst_20008 = (state_20027[(7)]);var inst_20013 = (state_20027[(2)]);var inst_20014 = cljs.core.next.call(null,inst_20008);var inst_20008__$1 = inst_20014;var state_20027__$1 = (function (){var statearr_20029 = state_20027;(statearr_20029[(8)] = inst_20013);
(statearr_20029[(7)] = inst_20008__$1);
return statearr_20029;
})();var statearr_20030_20048 = state_20027__$1;(statearr_20030_20048[(2)] = null);
(statearr_20030_20048[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20028 === (1)))
{var inst_20007 = cljs.core.seq.call(null,coll);var inst_20008 = inst_20007;var state_20027__$1 = (function (){var statearr_20031 = state_20027;(statearr_20031[(7)] = inst_20008);
return statearr_20031;
})();var statearr_20032_20049 = state_20027__$1;(statearr_20032_20049[(2)] = null);
(statearr_20032_20049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20028 === (4)))
{var inst_20008 = (state_20027[(7)]);var inst_20011 = cljs.core.first.call(null,inst_20008);var state_20027__$1 = state_20027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20027__$1,(7),ch,inst_20011);
} else
{if((state_val_20028 === (6)))
{var inst_20023 = (state_20027[(2)]);var state_20027__$1 = state_20027;var statearr_20033_20050 = state_20027__$1;(statearr_20033_20050[(2)] = inst_20023);
(statearr_20033_20050[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20028 === (3)))
{var inst_20025 = (state_20027[(2)]);var state_20027__$1 = state_20027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20027__$1,inst_20025);
} else
{if((state_val_20028 === (2)))
{var inst_20008 = (state_20027[(7)]);var state_20027__$1 = state_20027;if(cljs.core.truth_(inst_20008))
{var statearr_20034_20051 = state_20027__$1;(statearr_20034_20051[(1)] = (4));
} else
{var statearr_20035_20052 = state_20027__$1;(statearr_20035_20052[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20028 === (9)))
{var state_20027__$1 = state_20027;var statearr_20036_20053 = state_20027__$1;(statearr_20036_20053[(2)] = null);
(statearr_20036_20053[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20028 === (5)))
{var state_20027__$1 = state_20027;if(cljs.core.truth_(close_QMARK_))
{var statearr_20037_20054 = state_20027__$1;(statearr_20037_20054[(1)] = (8));
} else
{var statearr_20038_20055 = state_20027__$1;(statearr_20038_20055[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20028 === (10)))
{var inst_20021 = (state_20027[(2)]);var state_20027__$1 = state_20027;var statearr_20039_20056 = state_20027__$1;(statearr_20039_20056[(2)] = inst_20021);
(statearr_20039_20056[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20028 === (8)))
{var inst_20018 = cljs.core.async.close_BANG_.call(null,ch);var state_20027__$1 = state_20027;var statearr_20040_20057 = state_20027__$1;(statearr_20040_20057[(2)] = inst_20018);
(statearr_20040_20057[(1)] = (10));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20044 = [null,null,null,null,null,null,null,null,null];(statearr_20044[(0)] = state_machine__5694__auto__);
(statearr_20044[(1)] = (1));
return statearr_20044;
});
var state_machine__5694__auto____1 = (function (state_20027){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20045){if((e20045 instanceof Object))
{var ex__5697__auto__ = e20045;var statearr_20046_20058 = state_20027;(statearr_20046_20058[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20045;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20059 = state_20027;
state_20027 = G__20059;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20027){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_20047 = f__5709__auto__.call(null);(statearr_20047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_20047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
cljs.core.async.Mux = (function (){var obj20061 = {};return obj20061;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj20063 = {};return obj20063;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20287 = (function (cs,ch,mult,meta20288){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20288 = meta20288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20287.cljs$lang$type = true;
cljs.core.async.t20287.cljs$lang$ctorStr = "cljs.core.async/t20287";
cljs.core.async.t20287.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20287");
});})(cs))
;
cljs.core.async.t20287.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20287.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20287.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20287.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20287.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20289){var self__ = this;
var _20289__$1 = this;return self__.meta20288;
});})(cs))
;
cljs.core.async.t20287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20289,meta20288__$1){var self__ = this;
var _20289__$1 = this;return (new cljs.core.async.t20287(self__.cs,self__.ch,self__.mult,meta20288__$1));
});})(cs))
;
cljs.core.async.__GT_t20287 = ((function (cs){
return (function __GT_t20287(cs__$1,ch__$1,mult__$1,meta20288){return (new cljs.core.async.t20287(cs__$1,ch__$1,mult__$1,meta20288));
});})(cs))
;
}
return (new cljs.core.async.t20287(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___20510 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20510,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20510,cs,m,dchan,dctr,done){
return (function (state_20424){var state_val_20425 = (state_20424[(1)]);if((state_val_20425 === (7)))
{var inst_20420 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20426_20511 = state_20424__$1;(statearr_20426_20511[(2)] = inst_20420);
(statearr_20426_20511[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (20)))
{var inst_20321 = (state_20424[(7)]);var inst_20331 = cljs.core.first.call(null,inst_20321);var inst_20332 = cljs.core.nth.call(null,inst_20331,(0),null);var inst_20333 = cljs.core.nth.call(null,inst_20331,(1),null);var state_20424__$1 = (function (){var statearr_20427 = state_20424;(statearr_20427[(8)] = inst_20332);
return statearr_20427;
})();if(cljs.core.truth_(inst_20333))
{var statearr_20428_20512 = state_20424__$1;(statearr_20428_20512[(1)] = (22));
} else
{var statearr_20429_20513 = state_20424__$1;(statearr_20429_20513[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (27)))
{var inst_20363 = (state_20424[(9)]);var inst_20361 = (state_20424[(10)]);var inst_20368 = cljs.core._nth.call(null,inst_20361,inst_20363);var state_20424__$1 = (function (){var statearr_20430 = state_20424;(statearr_20430[(11)] = inst_20368);
return statearr_20430;
})();var statearr_20431_20514 = state_20424__$1;(statearr_20431_20514[(2)] = null);
(statearr_20431_20514[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (1)))
{var state_20424__$1 = state_20424;var statearr_20432_20515 = state_20424__$1;(statearr_20432_20515[(2)] = null);
(statearr_20432_20515[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (24)))
{var inst_20321 = (state_20424[(7)]);var inst_20338 = (state_20424[(2)]);var inst_20339 = cljs.core.next.call(null,inst_20321);var inst_20301 = inst_20339;var inst_20302 = null;var inst_20303 = (0);var inst_20304 = (0);var state_20424__$1 = (function (){var statearr_20433 = state_20424;(statearr_20433[(12)] = inst_20302);
(statearr_20433[(13)] = inst_20338);
(statearr_20433[(14)] = inst_20303);
(statearr_20433[(15)] = inst_20301);
(statearr_20433[(16)] = inst_20304);
return statearr_20433;
})();var statearr_20434_20516 = state_20424__$1;(statearr_20434_20516[(2)] = null);
(statearr_20434_20516[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (39)))
{var inst_20381 = (state_20424[(17)]);var inst_20399 = (state_20424[(2)]);var inst_20400 = cljs.core.next.call(null,inst_20381);var inst_20360 = inst_20400;var inst_20361 = null;var inst_20362 = (0);var inst_20363 = (0);var state_20424__$1 = (function (){var statearr_20438 = state_20424;(statearr_20438[(9)] = inst_20363);
(statearr_20438[(18)] = inst_20362);
(statearr_20438[(19)] = inst_20360);
(statearr_20438[(20)] = inst_20399);
(statearr_20438[(10)] = inst_20361);
return statearr_20438;
})();var statearr_20439_20517 = state_20424__$1;(statearr_20439_20517[(2)] = null);
(statearr_20439_20517[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (4)))
{var inst_20292 = (state_20424[(21)]);var inst_20292__$1 = (state_20424[(2)]);var inst_20293 = (inst_20292__$1 == null);var state_20424__$1 = (function (){var statearr_20440 = state_20424;(statearr_20440[(21)] = inst_20292__$1);
return statearr_20440;
})();if(cljs.core.truth_(inst_20293))
{var statearr_20441_20518 = state_20424__$1;(statearr_20441_20518[(1)] = (5));
} else
{var statearr_20442_20519 = state_20424__$1;(statearr_20442_20519[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (15)))
{var inst_20302 = (state_20424[(12)]);var inst_20303 = (state_20424[(14)]);var inst_20301 = (state_20424[(15)]);var inst_20304 = (state_20424[(16)]);var inst_20317 = (state_20424[(2)]);var inst_20318 = (inst_20304 + (1));var tmp20435 = inst_20302;var tmp20436 = inst_20303;var tmp20437 = inst_20301;var inst_20301__$1 = tmp20437;var inst_20302__$1 = tmp20435;var inst_20303__$1 = tmp20436;var inst_20304__$1 = inst_20318;var state_20424__$1 = (function (){var statearr_20443 = state_20424;(statearr_20443[(12)] = inst_20302__$1);
(statearr_20443[(22)] = inst_20317);
(statearr_20443[(14)] = inst_20303__$1);
(statearr_20443[(15)] = inst_20301__$1);
(statearr_20443[(16)] = inst_20304__$1);
return statearr_20443;
})();var statearr_20444_20520 = state_20424__$1;(statearr_20444_20520[(2)] = null);
(statearr_20444_20520[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (21)))
{var inst_20342 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20445_20521 = state_20424__$1;(statearr_20445_20521[(2)] = inst_20342);
(statearr_20445_20521[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (31)))
{var inst_20368 = (state_20424[(11)]);var inst_20369 = (state_20424[(2)]);var inst_20370 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20371 = cljs.core.async.untap_STAR_.call(null,m,inst_20368);var state_20424__$1 = (function (){var statearr_20446 = state_20424;(statearr_20446[(23)] = inst_20370);
(statearr_20446[(24)] = inst_20369);
return statearr_20446;
})();var statearr_20447_20522 = state_20424__$1;(statearr_20447_20522[(2)] = inst_20371);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20424__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (32)))
{var inst_20292 = (state_20424[(21)]);var inst_20368 = (state_20424[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20424,(31),Object,null,(30));var inst_20375 = cljs.core.async.put_BANG_.call(null,inst_20368,inst_20292,done);var state_20424__$1 = state_20424;var statearr_20448_20523 = state_20424__$1;(statearr_20448_20523[(2)] = inst_20375);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20424__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (40)))
{var inst_20390 = (state_20424[(25)]);var inst_20391 = (state_20424[(2)]);var inst_20392 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20393 = cljs.core.async.untap_STAR_.call(null,m,inst_20390);var state_20424__$1 = (function (){var statearr_20449 = state_20424;(statearr_20449[(26)] = inst_20391);
(statearr_20449[(27)] = inst_20392);
return statearr_20449;
})();var statearr_20450_20524 = state_20424__$1;(statearr_20450_20524[(2)] = inst_20393);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20424__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (33)))
{var inst_20381 = (state_20424[(17)]);var inst_20383 = cljs.core.chunked_seq_QMARK_.call(null,inst_20381);var state_20424__$1 = state_20424;if(inst_20383)
{var statearr_20451_20525 = state_20424__$1;(statearr_20451_20525[(1)] = (36));
} else
{var statearr_20452_20526 = state_20424__$1;(statearr_20452_20526[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (13)))
{var inst_20311 = (state_20424[(28)]);var inst_20314 = cljs.core.async.close_BANG_.call(null,inst_20311);var state_20424__$1 = state_20424;var statearr_20453_20527 = state_20424__$1;(statearr_20453_20527[(2)] = inst_20314);
(statearr_20453_20527[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (22)))
{var inst_20332 = (state_20424[(8)]);var inst_20335 = cljs.core.async.close_BANG_.call(null,inst_20332);var state_20424__$1 = state_20424;var statearr_20454_20528 = state_20424__$1;(statearr_20454_20528[(2)] = inst_20335);
(statearr_20454_20528[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (36)))
{var inst_20381 = (state_20424[(17)]);var inst_20385 = cljs.core.chunk_first.call(null,inst_20381);var inst_20386 = cljs.core.chunk_rest.call(null,inst_20381);var inst_20387 = cljs.core.count.call(null,inst_20385);var inst_20360 = inst_20386;var inst_20361 = inst_20385;var inst_20362 = inst_20387;var inst_20363 = (0);var state_20424__$1 = (function (){var statearr_20455 = state_20424;(statearr_20455[(9)] = inst_20363);
(statearr_20455[(18)] = inst_20362);
(statearr_20455[(19)] = inst_20360);
(statearr_20455[(10)] = inst_20361);
return statearr_20455;
})();var statearr_20456_20529 = state_20424__$1;(statearr_20456_20529[(2)] = null);
(statearr_20456_20529[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (41)))
{var inst_20292 = (state_20424[(21)]);var inst_20390 = (state_20424[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20424,(40),Object,null,(39));var inst_20397 = cljs.core.async.put_BANG_.call(null,inst_20390,inst_20292,done);var state_20424__$1 = state_20424;var statearr_20457_20530 = state_20424__$1;(statearr_20457_20530[(2)] = inst_20397);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20424__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (43)))
{var state_20424__$1 = state_20424;var statearr_20458_20531 = state_20424__$1;(statearr_20458_20531[(2)] = null);
(statearr_20458_20531[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (29)))
{var inst_20408 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20459_20532 = state_20424__$1;(statearr_20459_20532[(2)] = inst_20408);
(statearr_20459_20532[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (44)))
{var inst_20417 = (state_20424[(2)]);var state_20424__$1 = (function (){var statearr_20460 = state_20424;(statearr_20460[(29)] = inst_20417);
return statearr_20460;
})();var statearr_20461_20533 = state_20424__$1;(statearr_20461_20533[(2)] = null);
(statearr_20461_20533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (6)))
{var inst_20352 = (state_20424[(30)]);var inst_20351 = cljs.core.deref.call(null,cs);var inst_20352__$1 = cljs.core.keys.call(null,inst_20351);var inst_20353 = cljs.core.count.call(null,inst_20352__$1);var inst_20354 = cljs.core.reset_BANG_.call(null,dctr,inst_20353);var inst_20359 = cljs.core.seq.call(null,inst_20352__$1);var inst_20360 = inst_20359;var inst_20361 = null;var inst_20362 = (0);var inst_20363 = (0);var state_20424__$1 = (function (){var statearr_20462 = state_20424;(statearr_20462[(9)] = inst_20363);
(statearr_20462[(18)] = inst_20362);
(statearr_20462[(31)] = inst_20354);
(statearr_20462[(19)] = inst_20360);
(statearr_20462[(30)] = inst_20352__$1);
(statearr_20462[(10)] = inst_20361);
return statearr_20462;
})();var statearr_20463_20534 = state_20424__$1;(statearr_20463_20534[(2)] = null);
(statearr_20463_20534[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (28)))
{var inst_20360 = (state_20424[(19)]);var inst_20381 = (state_20424[(17)]);var inst_20381__$1 = cljs.core.seq.call(null,inst_20360);var state_20424__$1 = (function (){var statearr_20464 = state_20424;(statearr_20464[(17)] = inst_20381__$1);
return statearr_20464;
})();if(inst_20381__$1)
{var statearr_20465_20535 = state_20424__$1;(statearr_20465_20535[(1)] = (33));
} else
{var statearr_20466_20536 = state_20424__$1;(statearr_20466_20536[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (25)))
{var inst_20363 = (state_20424[(9)]);var inst_20362 = (state_20424[(18)]);var inst_20365 = (inst_20363 < inst_20362);var inst_20366 = inst_20365;var state_20424__$1 = state_20424;if(cljs.core.truth_(inst_20366))
{var statearr_20467_20537 = state_20424__$1;(statearr_20467_20537[(1)] = (27));
} else
{var statearr_20468_20538 = state_20424__$1;(statearr_20468_20538[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (34)))
{var state_20424__$1 = state_20424;var statearr_20469_20539 = state_20424__$1;(statearr_20469_20539[(2)] = null);
(statearr_20469_20539[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (17)))
{var state_20424__$1 = state_20424;var statearr_20470_20540 = state_20424__$1;(statearr_20470_20540[(2)] = null);
(statearr_20470_20540[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (3)))
{var inst_20422 = (state_20424[(2)]);var state_20424__$1 = state_20424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20424__$1,inst_20422);
} else
{if((state_val_20425 === (12)))
{var inst_20347 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20471_20541 = state_20424__$1;(statearr_20471_20541[(2)] = inst_20347);
(statearr_20471_20541[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (2)))
{var state_20424__$1 = state_20424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20424__$1,(4),ch);
} else
{if((state_val_20425 === (23)))
{var state_20424__$1 = state_20424;var statearr_20472_20542 = state_20424__$1;(statearr_20472_20542[(2)] = null);
(statearr_20472_20542[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (35)))
{var inst_20406 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20473_20543 = state_20424__$1;(statearr_20473_20543[(2)] = inst_20406);
(statearr_20473_20543[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (19)))
{var inst_20321 = (state_20424[(7)]);var inst_20325 = cljs.core.chunk_first.call(null,inst_20321);var inst_20326 = cljs.core.chunk_rest.call(null,inst_20321);var inst_20327 = cljs.core.count.call(null,inst_20325);var inst_20301 = inst_20326;var inst_20302 = inst_20325;var inst_20303 = inst_20327;var inst_20304 = (0);var state_20424__$1 = (function (){var statearr_20474 = state_20424;(statearr_20474[(12)] = inst_20302);
(statearr_20474[(14)] = inst_20303);
(statearr_20474[(15)] = inst_20301);
(statearr_20474[(16)] = inst_20304);
return statearr_20474;
})();var statearr_20475_20544 = state_20424__$1;(statearr_20475_20544[(2)] = null);
(statearr_20475_20544[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (11)))
{var inst_20321 = (state_20424[(7)]);var inst_20301 = (state_20424[(15)]);var inst_20321__$1 = cljs.core.seq.call(null,inst_20301);var state_20424__$1 = (function (){var statearr_20476 = state_20424;(statearr_20476[(7)] = inst_20321__$1);
return statearr_20476;
})();if(inst_20321__$1)
{var statearr_20477_20545 = state_20424__$1;(statearr_20477_20545[(1)] = (16));
} else
{var statearr_20478_20546 = state_20424__$1;(statearr_20478_20546[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (9)))
{var inst_20349 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20479_20547 = state_20424__$1;(statearr_20479_20547[(2)] = inst_20349);
(statearr_20479_20547[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (5)))
{var inst_20299 = cljs.core.deref.call(null,cs);var inst_20300 = cljs.core.seq.call(null,inst_20299);var inst_20301 = inst_20300;var inst_20302 = null;var inst_20303 = (0);var inst_20304 = (0);var state_20424__$1 = (function (){var statearr_20480 = state_20424;(statearr_20480[(12)] = inst_20302);
(statearr_20480[(14)] = inst_20303);
(statearr_20480[(15)] = inst_20301);
(statearr_20480[(16)] = inst_20304);
return statearr_20480;
})();var statearr_20481_20548 = state_20424__$1;(statearr_20481_20548[(2)] = null);
(statearr_20481_20548[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (14)))
{var state_20424__$1 = state_20424;var statearr_20482_20549 = state_20424__$1;(statearr_20482_20549[(2)] = null);
(statearr_20482_20549[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (45)))
{var inst_20414 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20483_20550 = state_20424__$1;(statearr_20483_20550[(2)] = inst_20414);
(statearr_20483_20550[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (26)))
{var inst_20352 = (state_20424[(30)]);var inst_20410 = (state_20424[(2)]);var inst_20411 = cljs.core.seq.call(null,inst_20352);var state_20424__$1 = (function (){var statearr_20484 = state_20424;(statearr_20484[(32)] = inst_20410);
return statearr_20484;
})();if(inst_20411)
{var statearr_20485_20551 = state_20424__$1;(statearr_20485_20551[(1)] = (42));
} else
{var statearr_20486_20552 = state_20424__$1;(statearr_20486_20552[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (16)))
{var inst_20321 = (state_20424[(7)]);var inst_20323 = cljs.core.chunked_seq_QMARK_.call(null,inst_20321);var state_20424__$1 = state_20424;if(inst_20323)
{var statearr_20490_20553 = state_20424__$1;(statearr_20490_20553[(1)] = (19));
} else
{var statearr_20491_20554 = state_20424__$1;(statearr_20491_20554[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (38)))
{var inst_20403 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20492_20555 = state_20424__$1;(statearr_20492_20555[(2)] = inst_20403);
(statearr_20492_20555[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (30)))
{var inst_20363 = (state_20424[(9)]);var inst_20362 = (state_20424[(18)]);var inst_20360 = (state_20424[(19)]);var inst_20361 = (state_20424[(10)]);var inst_20377 = (state_20424[(2)]);var inst_20378 = (inst_20363 + (1));var tmp20487 = inst_20362;var tmp20488 = inst_20360;var tmp20489 = inst_20361;var inst_20360__$1 = tmp20488;var inst_20361__$1 = tmp20489;var inst_20362__$1 = tmp20487;var inst_20363__$1 = inst_20378;var state_20424__$1 = (function (){var statearr_20493 = state_20424;(statearr_20493[(9)] = inst_20363__$1);
(statearr_20493[(18)] = inst_20362__$1);
(statearr_20493[(33)] = inst_20377);
(statearr_20493[(19)] = inst_20360__$1);
(statearr_20493[(10)] = inst_20361__$1);
return statearr_20493;
})();var statearr_20494_20556 = state_20424__$1;(statearr_20494_20556[(2)] = null);
(statearr_20494_20556[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (10)))
{var inst_20302 = (state_20424[(12)]);var inst_20304 = (state_20424[(16)]);var inst_20310 = cljs.core._nth.call(null,inst_20302,inst_20304);var inst_20311 = cljs.core.nth.call(null,inst_20310,(0),null);var inst_20312 = cljs.core.nth.call(null,inst_20310,(1),null);var state_20424__$1 = (function (){var statearr_20495 = state_20424;(statearr_20495[(28)] = inst_20311);
return statearr_20495;
})();if(cljs.core.truth_(inst_20312))
{var statearr_20496_20557 = state_20424__$1;(statearr_20496_20557[(1)] = (13));
} else
{var statearr_20497_20558 = state_20424__$1;(statearr_20497_20558[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (18)))
{var inst_20345 = (state_20424[(2)]);var state_20424__$1 = state_20424;var statearr_20498_20559 = state_20424__$1;(statearr_20498_20559[(2)] = inst_20345);
(statearr_20498_20559[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (42)))
{var state_20424__$1 = state_20424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20424__$1,(45),dchan);
} else
{if((state_val_20425 === (37)))
{var inst_20381 = (state_20424[(17)]);var inst_20390 = cljs.core.first.call(null,inst_20381);var state_20424__$1 = (function (){var statearr_20499 = state_20424;(statearr_20499[(25)] = inst_20390);
return statearr_20499;
})();var statearr_20500_20560 = state_20424__$1;(statearr_20500_20560[(2)] = null);
(statearr_20500_20560[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20425 === (8)))
{var inst_20303 = (state_20424[(14)]);var inst_20304 = (state_20424[(16)]);var inst_20306 = (inst_20304 < inst_20303);var inst_20307 = inst_20306;var state_20424__$1 = state_20424;if(cljs.core.truth_(inst_20307))
{var statearr_20501_20561 = state_20424__$1;(statearr_20501_20561[(1)] = (10));
} else
{var statearr_20502_20562 = state_20424__$1;(statearr_20502_20562[(1)] = (11));
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
});})(c__5708__auto___20510,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___20510,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20506[(0)] = state_machine__5694__auto__);
(statearr_20506[(1)] = (1));
return statearr_20506;
});
var state_machine__5694__auto____1 = (function (state_20424){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20424);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20507){if((e20507 instanceof Object))
{var ex__5697__auto__ = e20507;var statearr_20508_20563 = state_20424;(statearr_20508_20563[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20507;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20564 = state_20424;
state_20424 = G__20564;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20424){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20510,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_20509 = f__5709__auto__.call(null);(statearr_20509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20510);
return statearr_20509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20510,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj20566 = {};return obj20566;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t20676 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20676 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20677){
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
this.meta20677 = meta20677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20676.cljs$lang$type = true;
cljs.core.async.t20676.cljs$lang$ctorStr = "cljs.core.async/t20676";
cljs.core.async.t20676.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20676");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20676.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20678){var self__ = this;
var _20678__$1 = this;return self__.meta20677;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20678,meta20677__$1){var self__ = this;
var _20678__$1 = this;return (new cljs.core.async.t20676(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20677__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20676 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20676(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20677){return (new cljs.core.async.t20676(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20677));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20676(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___20785 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20785,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20785,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20743){var state_val_20744 = (state_20743[(1)]);if((state_val_20744 === (7)))
{var inst_20692 = (state_20743[(7)]);var inst_20697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20692);var state_20743__$1 = state_20743;var statearr_20745_20786 = state_20743__$1;(statearr_20745_20786[(2)] = inst_20697);
(statearr_20745_20786[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (20)))
{var inst_20707 = (state_20743[(8)]);var state_20743__$1 = state_20743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20743__$1,(23),out,inst_20707);
} else
{if((state_val_20744 === (1)))
{var inst_20682 = (state_20743[(9)]);var inst_20682__$1 = calc_state.call(null);var inst_20683 = cljs.core.seq_QMARK_.call(null,inst_20682__$1);var state_20743__$1 = (function (){var statearr_20746 = state_20743;(statearr_20746[(9)] = inst_20682__$1);
return statearr_20746;
})();if(inst_20683)
{var statearr_20747_20787 = state_20743__$1;(statearr_20747_20787[(1)] = (2));
} else
{var statearr_20748_20788 = state_20743__$1;(statearr_20748_20788[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (4)))
{var inst_20682 = (state_20743[(9)]);var inst_20688 = (state_20743[(2)]);var inst_20689 = cljs.core.get.call(null,inst_20688,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20690 = cljs.core.get.call(null,inst_20688,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20691 = cljs.core.get.call(null,inst_20688,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20692 = inst_20682;var state_20743__$1 = (function (){var statearr_20749 = state_20743;(statearr_20749[(10)] = inst_20689);
(statearr_20749[(11)] = inst_20690);
(statearr_20749[(7)] = inst_20692);
(statearr_20749[(12)] = inst_20691);
return statearr_20749;
})();var statearr_20750_20789 = state_20743__$1;(statearr_20750_20789[(2)] = null);
(statearr_20750_20789[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (15)))
{var state_20743__$1 = state_20743;var statearr_20751_20790 = state_20743__$1;(statearr_20751_20790[(2)] = null);
(statearr_20751_20790[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (21)))
{var state_20743__$1 = state_20743;var statearr_20752_20791 = state_20743__$1;(statearr_20752_20791[(2)] = null);
(statearr_20752_20791[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (13)))
{var inst_20739 = (state_20743[(2)]);var state_20743__$1 = state_20743;var statearr_20753_20792 = state_20743__$1;(statearr_20753_20792[(2)] = inst_20739);
(statearr_20753_20792[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (22)))
{var inst_20700 = (state_20743[(13)]);var inst_20736 = (state_20743[(2)]);var inst_20692 = inst_20700;var state_20743__$1 = (function (){var statearr_20754 = state_20743;(statearr_20754[(14)] = inst_20736);
(statearr_20754[(7)] = inst_20692);
return statearr_20754;
})();var statearr_20755_20793 = state_20743__$1;(statearr_20755_20793[(2)] = null);
(statearr_20755_20793[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (6)))
{var inst_20741 = (state_20743[(2)]);var state_20743__$1 = state_20743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20743__$1,inst_20741);
} else
{if((state_val_20744 === (17)))
{var inst_20722 = (state_20743[(15)]);var state_20743__$1 = state_20743;var statearr_20756_20794 = state_20743__$1;(statearr_20756_20794[(2)] = inst_20722);
(statearr_20756_20794[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (3)))
{var inst_20682 = (state_20743[(9)]);var state_20743__$1 = state_20743;var statearr_20757_20795 = state_20743__$1;(statearr_20757_20795[(2)] = inst_20682);
(statearr_20757_20795[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (12)))
{var inst_20708 = (state_20743[(16)]);var inst_20722 = (state_20743[(15)]);var inst_20703 = (state_20743[(17)]);var inst_20722__$1 = inst_20703.call(null,inst_20708);var state_20743__$1 = (function (){var statearr_20758 = state_20743;(statearr_20758[(15)] = inst_20722__$1);
return statearr_20758;
})();if(cljs.core.truth_(inst_20722__$1))
{var statearr_20759_20796 = state_20743__$1;(statearr_20759_20796[(1)] = (17));
} else
{var statearr_20760_20797 = state_20743__$1;(statearr_20760_20797[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (2)))
{var inst_20682 = (state_20743[(9)]);var inst_20685 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20682);var state_20743__$1 = state_20743;var statearr_20761_20798 = state_20743__$1;(statearr_20761_20798[(2)] = inst_20685);
(statearr_20761_20798[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (23)))
{var inst_20733 = (state_20743[(2)]);var state_20743__$1 = state_20743;var statearr_20762_20799 = state_20743__$1;(statearr_20762_20799[(2)] = inst_20733);
(statearr_20762_20799[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (19)))
{var inst_20730 = (state_20743[(2)]);var state_20743__$1 = state_20743;if(cljs.core.truth_(inst_20730))
{var statearr_20763_20800 = state_20743__$1;(statearr_20763_20800[(1)] = (20));
} else
{var statearr_20764_20801 = state_20743__$1;(statearr_20764_20801[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (11)))
{var inst_20707 = (state_20743[(8)]);var inst_20713 = (inst_20707 == null);var state_20743__$1 = state_20743;if(cljs.core.truth_(inst_20713))
{var statearr_20765_20802 = state_20743__$1;(statearr_20765_20802[(1)] = (14));
} else
{var statearr_20766_20803 = state_20743__$1;(statearr_20766_20803[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (9)))
{var inst_20700 = (state_20743[(13)]);var inst_20700__$1 = (state_20743[(2)]);var inst_20701 = cljs.core.get.call(null,inst_20700__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20702 = cljs.core.get.call(null,inst_20700__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20703 = cljs.core.get.call(null,inst_20700__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20743__$1 = (function (){var statearr_20767 = state_20743;(statearr_20767[(13)] = inst_20700__$1);
(statearr_20767[(18)] = inst_20702);
(statearr_20767[(17)] = inst_20703);
return statearr_20767;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20743__$1,(10),inst_20701);
} else
{if((state_val_20744 === (5)))
{var inst_20692 = (state_20743[(7)]);var inst_20695 = cljs.core.seq_QMARK_.call(null,inst_20692);var state_20743__$1 = state_20743;if(inst_20695)
{var statearr_20768_20804 = state_20743__$1;(statearr_20768_20804[(1)] = (7));
} else
{var statearr_20769_20805 = state_20743__$1;(statearr_20769_20805[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (14)))
{var inst_20708 = (state_20743[(16)]);var inst_20715 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20708);var state_20743__$1 = state_20743;var statearr_20770_20806 = state_20743__$1;(statearr_20770_20806[(2)] = inst_20715);
(statearr_20770_20806[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (16)))
{var inst_20718 = (state_20743[(2)]);var inst_20719 = calc_state.call(null);var inst_20692 = inst_20719;var state_20743__$1 = (function (){var statearr_20771 = state_20743;(statearr_20771[(19)] = inst_20718);
(statearr_20771[(7)] = inst_20692);
return statearr_20771;
})();var statearr_20772_20807 = state_20743__$1;(statearr_20772_20807[(2)] = null);
(statearr_20772_20807[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (10)))
{var inst_20708 = (state_20743[(16)]);var inst_20707 = (state_20743[(8)]);var inst_20706 = (state_20743[(2)]);var inst_20707__$1 = cljs.core.nth.call(null,inst_20706,(0),null);var inst_20708__$1 = cljs.core.nth.call(null,inst_20706,(1),null);var inst_20709 = (inst_20707__$1 == null);var inst_20710 = cljs.core._EQ_.call(null,inst_20708__$1,change);var inst_20711 = (inst_20709) || (inst_20710);var state_20743__$1 = (function (){var statearr_20773 = state_20743;(statearr_20773[(16)] = inst_20708__$1);
(statearr_20773[(8)] = inst_20707__$1);
return statearr_20773;
})();if(cljs.core.truth_(inst_20711))
{var statearr_20774_20808 = state_20743__$1;(statearr_20774_20808[(1)] = (11));
} else
{var statearr_20775_20809 = state_20743__$1;(statearr_20775_20809[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (18)))
{var inst_20708 = (state_20743[(16)]);var inst_20702 = (state_20743[(18)]);var inst_20703 = (state_20743[(17)]);var inst_20725 = cljs.core.empty_QMARK_.call(null,inst_20703);var inst_20726 = inst_20702.call(null,inst_20708);var inst_20727 = cljs.core.not.call(null,inst_20726);var inst_20728 = (inst_20725) && (inst_20727);var state_20743__$1 = state_20743;var statearr_20776_20810 = state_20743__$1;(statearr_20776_20810[(2)] = inst_20728);
(statearr_20776_20810[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (8)))
{var inst_20692 = (state_20743[(7)]);var state_20743__$1 = state_20743;var statearr_20777_20811 = state_20743__$1;(statearr_20777_20811[(2)] = inst_20692);
(statearr_20777_20811[(1)] = (9));
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
});})(c__5708__auto___20785,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___20785,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20781[(0)] = state_machine__5694__auto__);
(statearr_20781[(1)] = (1));
return statearr_20781;
});
var state_machine__5694__auto____1 = (function (state_20743){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20743);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20782){if((e20782 instanceof Object))
{var ex__5697__auto__ = e20782;var statearr_20783_20812 = state_20743;(statearr_20783_20812[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20782;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20813 = state_20743;
state_20743 = G__20813;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20743){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20785,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_20784 = f__5709__auto__.call(null);(statearr_20784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20785);
return statearr_20784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20785,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20815 = {};return obj20815;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__20816_SHARP_){if(cljs.core.truth_(p1__20816_SHARP_.call(null,topic)))
{return p1__20816_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20816_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20941 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20941 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20942){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20942 = meta20942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20941.cljs$lang$type = true;
cljs.core.async.t20941.cljs$lang$ctorStr = "cljs.core.async/t20941";
cljs.core.async.t20941.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20941");
});})(mults,ensure_mult))
;
cljs.core.async.t20941.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20941.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20941.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20941.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20941.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20941.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20943){var self__ = this;
var _20943__$1 = this;return self__.meta20942;
});})(mults,ensure_mult))
;
cljs.core.async.t20941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20943,meta20942__$1){var self__ = this;
var _20943__$1 = this;return (new cljs.core.async.t20941(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20942__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20941 = ((function (mults,ensure_mult){
return (function __GT_t20941(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20942){return (new cljs.core.async.t20941(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20942));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20941(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___21065 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21065,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21065,mults,ensure_mult,p){
return (function (state_21017){var state_val_21018 = (state_21017[(1)]);if((state_val_21018 === (7)))
{var inst_21013 = (state_21017[(2)]);var state_21017__$1 = state_21017;var statearr_21019_21066 = state_21017__$1;(statearr_21019_21066[(2)] = inst_21013);
(statearr_21019_21066[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (20)))
{var state_21017__$1 = state_21017;var statearr_21020_21067 = state_21017__$1;(statearr_21020_21067[(2)] = null);
(statearr_21020_21067[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (1)))
{var state_21017__$1 = state_21017;var statearr_21021_21068 = state_21017__$1;(statearr_21021_21068[(2)] = null);
(statearr_21021_21068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (24)))
{var inst_20946 = (state_21017[(7)]);var inst_20996 = (state_21017[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21017,(23),Object,null,(22));var inst_21003 = cljs.core.async.muxch_STAR_.call(null,inst_20996);var state_21017__$1 = state_21017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21017__$1,(25),inst_21003,inst_20946);
} else
{if((state_val_21018 === (4)))
{var inst_20946 = (state_21017[(7)]);var inst_20946__$1 = (state_21017[(2)]);var inst_20947 = (inst_20946__$1 == null);var state_21017__$1 = (function (){var statearr_21022 = state_21017;(statearr_21022[(7)] = inst_20946__$1);
return statearr_21022;
})();if(cljs.core.truth_(inst_20947))
{var statearr_21023_21069 = state_21017__$1;(statearr_21023_21069[(1)] = (5));
} else
{var statearr_21024_21070 = state_21017__$1;(statearr_21024_21070[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (15)))
{var inst_20988 = (state_21017[(2)]);var state_21017__$1 = state_21017;var statearr_21025_21071 = state_21017__$1;(statearr_21025_21071[(2)] = inst_20988);
(statearr_21025_21071[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (21)))
{var inst_21010 = (state_21017[(2)]);var state_21017__$1 = (function (){var statearr_21026 = state_21017;(statearr_21026[(9)] = inst_21010);
return statearr_21026;
})();var statearr_21027_21072 = state_21017__$1;(statearr_21027_21072[(2)] = null);
(statearr_21027_21072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (13)))
{var inst_20970 = (state_21017[(10)]);var inst_20972 = cljs.core.chunked_seq_QMARK_.call(null,inst_20970);var state_21017__$1 = state_21017;if(inst_20972)
{var statearr_21028_21073 = state_21017__$1;(statearr_21028_21073[(1)] = (16));
} else
{var statearr_21029_21074 = state_21017__$1;(statearr_21029_21074[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (22)))
{var inst_21007 = (state_21017[(2)]);var state_21017__$1 = state_21017;var statearr_21030_21075 = state_21017__$1;(statearr_21030_21075[(2)] = inst_21007);
(statearr_21030_21075[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (6)))
{var inst_20946 = (state_21017[(7)]);var inst_20994 = (state_21017[(11)]);var inst_20996 = (state_21017[(8)]);var inst_20994__$1 = topic_fn.call(null,inst_20946);var inst_20995 = cljs.core.deref.call(null,mults);var inst_20996__$1 = cljs.core.get.call(null,inst_20995,inst_20994__$1);var state_21017__$1 = (function (){var statearr_21031 = state_21017;(statearr_21031[(11)] = inst_20994__$1);
(statearr_21031[(8)] = inst_20996__$1);
return statearr_21031;
})();if(cljs.core.truth_(inst_20996__$1))
{var statearr_21032_21076 = state_21017__$1;(statearr_21032_21076[(1)] = (19));
} else
{var statearr_21033_21077 = state_21017__$1;(statearr_21033_21077[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (25)))
{var inst_21005 = (state_21017[(2)]);var state_21017__$1 = state_21017;var statearr_21034_21078 = state_21017__$1;(statearr_21034_21078[(2)] = inst_21005);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21017__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (17)))
{var inst_20970 = (state_21017[(10)]);var inst_20979 = cljs.core.first.call(null,inst_20970);var inst_20980 = cljs.core.async.muxch_STAR_.call(null,inst_20979);var inst_20981 = cljs.core.async.close_BANG_.call(null,inst_20980);var inst_20982 = cljs.core.next.call(null,inst_20970);var inst_20956 = inst_20982;var inst_20957 = null;var inst_20958 = (0);var inst_20959 = (0);var state_21017__$1 = (function (){var statearr_21035 = state_21017;(statearr_21035[(12)] = inst_20981);
(statearr_21035[(13)] = inst_20957);
(statearr_21035[(14)] = inst_20956);
(statearr_21035[(15)] = inst_20958);
(statearr_21035[(16)] = inst_20959);
return statearr_21035;
})();var statearr_21036_21079 = state_21017__$1;(statearr_21036_21079[(2)] = null);
(statearr_21036_21079[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (3)))
{var inst_21015 = (state_21017[(2)]);var state_21017__$1 = state_21017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21017__$1,inst_21015);
} else
{if((state_val_21018 === (12)))
{var inst_20990 = (state_21017[(2)]);var state_21017__$1 = state_21017;var statearr_21037_21080 = state_21017__$1;(statearr_21037_21080[(2)] = inst_20990);
(statearr_21037_21080[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (2)))
{var state_21017__$1 = state_21017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21017__$1,(4),ch);
} else
{if((state_val_21018 === (23)))
{var inst_20994 = (state_21017[(11)]);var inst_20998 = (state_21017[(2)]);var inst_20999 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20994);var state_21017__$1 = (function (){var statearr_21038 = state_21017;(statearr_21038[(17)] = inst_20998);
return statearr_21038;
})();var statearr_21039_21081 = state_21017__$1;(statearr_21039_21081[(2)] = inst_20999);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21017__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (19)))
{var state_21017__$1 = state_21017;var statearr_21040_21082 = state_21017__$1;(statearr_21040_21082[(2)] = null);
(statearr_21040_21082[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (11)))
{var inst_20956 = (state_21017[(14)]);var inst_20970 = (state_21017[(10)]);var inst_20970__$1 = cljs.core.seq.call(null,inst_20956);var state_21017__$1 = (function (){var statearr_21041 = state_21017;(statearr_21041[(10)] = inst_20970__$1);
return statearr_21041;
})();if(inst_20970__$1)
{var statearr_21042_21083 = state_21017__$1;(statearr_21042_21083[(1)] = (13));
} else
{var statearr_21043_21084 = state_21017__$1;(statearr_21043_21084[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (9)))
{var inst_20992 = (state_21017[(2)]);var state_21017__$1 = state_21017;var statearr_21044_21085 = state_21017__$1;(statearr_21044_21085[(2)] = inst_20992);
(statearr_21044_21085[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (5)))
{var inst_20953 = cljs.core.deref.call(null,mults);var inst_20954 = cljs.core.vals.call(null,inst_20953);var inst_20955 = cljs.core.seq.call(null,inst_20954);var inst_20956 = inst_20955;var inst_20957 = null;var inst_20958 = (0);var inst_20959 = (0);var state_21017__$1 = (function (){var statearr_21045 = state_21017;(statearr_21045[(13)] = inst_20957);
(statearr_21045[(14)] = inst_20956);
(statearr_21045[(15)] = inst_20958);
(statearr_21045[(16)] = inst_20959);
return statearr_21045;
})();var statearr_21046_21086 = state_21017__$1;(statearr_21046_21086[(2)] = null);
(statearr_21046_21086[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (14)))
{var state_21017__$1 = state_21017;var statearr_21050_21087 = state_21017__$1;(statearr_21050_21087[(2)] = null);
(statearr_21050_21087[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (16)))
{var inst_20970 = (state_21017[(10)]);var inst_20974 = cljs.core.chunk_first.call(null,inst_20970);var inst_20975 = cljs.core.chunk_rest.call(null,inst_20970);var inst_20976 = cljs.core.count.call(null,inst_20974);var inst_20956 = inst_20975;var inst_20957 = inst_20974;var inst_20958 = inst_20976;var inst_20959 = (0);var state_21017__$1 = (function (){var statearr_21051 = state_21017;(statearr_21051[(13)] = inst_20957);
(statearr_21051[(14)] = inst_20956);
(statearr_21051[(15)] = inst_20958);
(statearr_21051[(16)] = inst_20959);
return statearr_21051;
})();var statearr_21052_21088 = state_21017__$1;(statearr_21052_21088[(2)] = null);
(statearr_21052_21088[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (10)))
{var inst_20957 = (state_21017[(13)]);var inst_20956 = (state_21017[(14)]);var inst_20958 = (state_21017[(15)]);var inst_20959 = (state_21017[(16)]);var inst_20964 = cljs.core._nth.call(null,inst_20957,inst_20959);var inst_20965 = cljs.core.async.muxch_STAR_.call(null,inst_20964);var inst_20966 = cljs.core.async.close_BANG_.call(null,inst_20965);var inst_20967 = (inst_20959 + (1));var tmp21047 = inst_20957;var tmp21048 = inst_20956;var tmp21049 = inst_20958;var inst_20956__$1 = tmp21048;var inst_20957__$1 = tmp21047;var inst_20958__$1 = tmp21049;var inst_20959__$1 = inst_20967;var state_21017__$1 = (function (){var statearr_21053 = state_21017;(statearr_21053[(18)] = inst_20966);
(statearr_21053[(13)] = inst_20957__$1);
(statearr_21053[(14)] = inst_20956__$1);
(statearr_21053[(15)] = inst_20958__$1);
(statearr_21053[(16)] = inst_20959__$1);
return statearr_21053;
})();var statearr_21054_21089 = state_21017__$1;(statearr_21054_21089[(2)] = null);
(statearr_21054_21089[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (18)))
{var inst_20985 = (state_21017[(2)]);var state_21017__$1 = state_21017;var statearr_21055_21090 = state_21017__$1;(statearr_21055_21090[(2)] = inst_20985);
(statearr_21055_21090[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21018 === (8)))
{var inst_20958 = (state_21017[(15)]);var inst_20959 = (state_21017[(16)]);var inst_20961 = (inst_20959 < inst_20958);var inst_20962 = inst_20961;var state_21017__$1 = state_21017;if(cljs.core.truth_(inst_20962))
{var statearr_21056_21091 = state_21017__$1;(statearr_21056_21091[(1)] = (10));
} else
{var statearr_21057_21092 = state_21017__$1;(statearr_21057_21092[(1)] = (11));
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
});})(c__5708__auto___21065,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___21065,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21061[(0)] = state_machine__5694__auto__);
(statearr_21061[(1)] = (1));
return statearr_21061;
});
var state_machine__5694__auto____1 = (function (state_21017){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21017);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21062){if((e21062 instanceof Object))
{var ex__5697__auto__ = e21062;var statearr_21063_21093 = state_21017;(statearr_21063_21093[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21062;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21094 = state_21017;
state_21017 = G__21094;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21017){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21065,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_21064 = f__5709__auto__.call(null);(statearr_21064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21065);
return statearr_21064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21065,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___21231 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21201){var state_val_21202 = (state_21201[(1)]);if((state_val_21202 === (7)))
{var state_21201__$1 = state_21201;var statearr_21203_21232 = state_21201__$1;(statearr_21203_21232[(2)] = null);
(statearr_21203_21232[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (1)))
{var state_21201__$1 = state_21201;var statearr_21204_21233 = state_21201__$1;(statearr_21204_21233[(2)] = null);
(statearr_21204_21233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (4)))
{var inst_21165 = (state_21201[(7)]);var inst_21167 = (inst_21165 < cnt);var state_21201__$1 = state_21201;if(cljs.core.truth_(inst_21167))
{var statearr_21205_21234 = state_21201__$1;(statearr_21205_21234[(1)] = (6));
} else
{var statearr_21206_21235 = state_21201__$1;(statearr_21206_21235[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (15)))
{var inst_21197 = (state_21201[(2)]);var state_21201__$1 = state_21201;var statearr_21207_21236 = state_21201__$1;(statearr_21207_21236[(2)] = inst_21197);
(statearr_21207_21236[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (13)))
{var inst_21190 = cljs.core.async.close_BANG_.call(null,out);var state_21201__$1 = state_21201;var statearr_21208_21237 = state_21201__$1;(statearr_21208_21237[(2)] = inst_21190);
(statearr_21208_21237[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (6)))
{var state_21201__$1 = state_21201;var statearr_21209_21238 = state_21201__$1;(statearr_21209_21238[(2)] = null);
(statearr_21209_21238[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (3)))
{var inst_21199 = (state_21201[(2)]);var state_21201__$1 = state_21201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21201__$1,inst_21199);
} else
{if((state_val_21202 === (12)))
{var inst_21187 = (state_21201[(8)]);var inst_21187__$1 = (state_21201[(2)]);var inst_21188 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21187__$1);var state_21201__$1 = (function (){var statearr_21210 = state_21201;(statearr_21210[(8)] = inst_21187__$1);
return statearr_21210;
})();if(cljs.core.truth_(inst_21188))
{var statearr_21211_21239 = state_21201__$1;(statearr_21211_21239[(1)] = (13));
} else
{var statearr_21212_21240 = state_21201__$1;(statearr_21212_21240[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (2)))
{var inst_21164 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21165 = (0);var state_21201__$1 = (function (){var statearr_21213 = state_21201;(statearr_21213[(9)] = inst_21164);
(statearr_21213[(7)] = inst_21165);
return statearr_21213;
})();var statearr_21214_21241 = state_21201__$1;(statearr_21214_21241[(2)] = null);
(statearr_21214_21241[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (11)))
{var inst_21165 = (state_21201[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21201,(10),Object,null,(9));var inst_21174 = chs__$1.call(null,inst_21165);var inst_21175 = done.call(null,inst_21165);var inst_21176 = cljs.core.async.take_BANG_.call(null,inst_21174,inst_21175);var state_21201__$1 = state_21201;var statearr_21215_21242 = state_21201__$1;(statearr_21215_21242[(2)] = inst_21176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21201__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (9)))
{var inst_21165 = (state_21201[(7)]);var inst_21178 = (state_21201[(2)]);var inst_21179 = (inst_21165 + (1));var inst_21165__$1 = inst_21179;var state_21201__$1 = (function (){var statearr_21216 = state_21201;(statearr_21216[(10)] = inst_21178);
(statearr_21216[(7)] = inst_21165__$1);
return statearr_21216;
})();var statearr_21217_21243 = state_21201__$1;(statearr_21217_21243[(2)] = null);
(statearr_21217_21243[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (5)))
{var inst_21185 = (state_21201[(2)]);var state_21201__$1 = (function (){var statearr_21218 = state_21201;(statearr_21218[(11)] = inst_21185);
return statearr_21218;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21201__$1,(12),dchan);
} else
{if((state_val_21202 === (14)))
{var inst_21187 = (state_21201[(8)]);var inst_21192 = cljs.core.apply.call(null,f,inst_21187);var state_21201__$1 = state_21201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21201__$1,(16),out,inst_21192);
} else
{if((state_val_21202 === (16)))
{var inst_21194 = (state_21201[(2)]);var state_21201__$1 = (function (){var statearr_21219 = state_21201;(statearr_21219[(12)] = inst_21194);
return statearr_21219;
})();var statearr_21220_21244 = state_21201__$1;(statearr_21220_21244[(2)] = null);
(statearr_21220_21244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (10)))
{var inst_21169 = (state_21201[(2)]);var inst_21170 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21201__$1 = (function (){var statearr_21221 = state_21201;(statearr_21221[(13)] = inst_21169);
return statearr_21221;
})();var statearr_21222_21245 = state_21201__$1;(statearr_21222_21245[(2)] = inst_21170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21201__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21202 === (8)))
{var inst_21183 = (state_21201[(2)]);var state_21201__$1 = state_21201;var statearr_21223_21246 = state_21201__$1;(statearr_21223_21246[(2)] = inst_21183);
(statearr_21223_21246[(1)] = (5));
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
});})(c__5708__auto___21231,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___21231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21227[(0)] = state_machine__5694__auto__);
(statearr_21227[(1)] = (1));
return statearr_21227;
});
var state_machine__5694__auto____1 = (function (state_21201){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21201);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21228){if((e21228 instanceof Object))
{var ex__5697__auto__ = e21228;var statearr_21229_21247 = state_21201;(statearr_21229_21247[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21228;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21248 = state_21201;
state_21201 = G__21248;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21201){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21231,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_21230 = f__5709__auto__.call(null);(statearr_21230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21231);
return statearr_21230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21231,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21356 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21356,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21356,out){
return (function (state_21332){var state_val_21333 = (state_21332[(1)]);if((state_val_21333 === (7)))
{var inst_21312 = (state_21332[(7)]);var inst_21311 = (state_21332[(8)]);var inst_21311__$1 = (state_21332[(2)]);var inst_21312__$1 = cljs.core.nth.call(null,inst_21311__$1,(0),null);var inst_21313 = cljs.core.nth.call(null,inst_21311__$1,(1),null);var inst_21314 = (inst_21312__$1 == null);var state_21332__$1 = (function (){var statearr_21334 = state_21332;(statearr_21334[(9)] = inst_21313);
(statearr_21334[(7)] = inst_21312__$1);
(statearr_21334[(8)] = inst_21311__$1);
return statearr_21334;
})();if(cljs.core.truth_(inst_21314))
{var statearr_21335_21357 = state_21332__$1;(statearr_21335_21357[(1)] = (8));
} else
{var statearr_21336_21358 = state_21332__$1;(statearr_21336_21358[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21333 === (1)))
{var inst_21303 = cljs.core.vec.call(null,chs);var inst_21304 = inst_21303;var state_21332__$1 = (function (){var statearr_21337 = state_21332;(statearr_21337[(10)] = inst_21304);
return statearr_21337;
})();var statearr_21338_21359 = state_21332__$1;(statearr_21338_21359[(2)] = null);
(statearr_21338_21359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21333 === (4)))
{var inst_21304 = (state_21332[(10)]);var state_21332__$1 = state_21332;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21332__$1,(7),inst_21304);
} else
{if((state_val_21333 === (6)))
{var inst_21328 = (state_21332[(2)]);var state_21332__$1 = state_21332;var statearr_21339_21360 = state_21332__$1;(statearr_21339_21360[(2)] = inst_21328);
(statearr_21339_21360[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21333 === (3)))
{var inst_21330 = (state_21332[(2)]);var state_21332__$1 = state_21332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21332__$1,inst_21330);
} else
{if((state_val_21333 === (2)))
{var inst_21304 = (state_21332[(10)]);var inst_21306 = cljs.core.count.call(null,inst_21304);var inst_21307 = (inst_21306 > (0));var state_21332__$1 = state_21332;if(cljs.core.truth_(inst_21307))
{var statearr_21341_21361 = state_21332__$1;(statearr_21341_21361[(1)] = (4));
} else
{var statearr_21342_21362 = state_21332__$1;(statearr_21342_21362[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21333 === (11)))
{var inst_21304 = (state_21332[(10)]);var inst_21321 = (state_21332[(2)]);var tmp21340 = inst_21304;var inst_21304__$1 = tmp21340;var state_21332__$1 = (function (){var statearr_21343 = state_21332;(statearr_21343[(11)] = inst_21321);
(statearr_21343[(10)] = inst_21304__$1);
return statearr_21343;
})();var statearr_21344_21363 = state_21332__$1;(statearr_21344_21363[(2)] = null);
(statearr_21344_21363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21333 === (9)))
{var inst_21312 = (state_21332[(7)]);var state_21332__$1 = state_21332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21332__$1,(11),out,inst_21312);
} else
{if((state_val_21333 === (5)))
{var inst_21326 = cljs.core.async.close_BANG_.call(null,out);var state_21332__$1 = state_21332;var statearr_21345_21364 = state_21332__$1;(statearr_21345_21364[(2)] = inst_21326);
(statearr_21345_21364[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21333 === (10)))
{var inst_21324 = (state_21332[(2)]);var state_21332__$1 = state_21332;var statearr_21346_21365 = state_21332__$1;(statearr_21346_21365[(2)] = inst_21324);
(statearr_21346_21365[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21333 === (8)))
{var inst_21313 = (state_21332[(9)]);var inst_21304 = (state_21332[(10)]);var inst_21312 = (state_21332[(7)]);var inst_21311 = (state_21332[(8)]);var inst_21316 = (function (){var c = inst_21313;var v = inst_21312;var vec__21309 = inst_21311;var cs = inst_21304;return ((function (c,v,vec__21309,cs,inst_21313,inst_21304,inst_21312,inst_21311,state_val_21333,c__5708__auto___21356,out){
return (function (p1__21249_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21249_SHARP_);
});
;})(c,v,vec__21309,cs,inst_21313,inst_21304,inst_21312,inst_21311,state_val_21333,c__5708__auto___21356,out))
})();var inst_21317 = cljs.core.filterv.call(null,inst_21316,inst_21304);var inst_21304__$1 = inst_21317;var state_21332__$1 = (function (){var statearr_21347 = state_21332;(statearr_21347[(10)] = inst_21304__$1);
return statearr_21347;
})();var statearr_21348_21366 = state_21332__$1;(statearr_21348_21366[(2)] = null);
(statearr_21348_21366[(1)] = (2));
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
});})(c__5708__auto___21356,out))
;return ((function (switch__5693__auto__,c__5708__auto___21356,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21352 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21352[(0)] = state_machine__5694__auto__);
(statearr_21352[(1)] = (1));
return statearr_21352;
});
var state_machine__5694__auto____1 = (function (state_21332){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21332);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21353){if((e21353 instanceof Object))
{var ex__5697__auto__ = e21353;var statearr_21354_21367 = state_21332;(statearr_21354_21367[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21332);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21353;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21368 = state_21332;
state_21332 = G__21368;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21332){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21356,out))
})();var state__5710__auto__ = (function (){var statearr_21355 = f__5709__auto__.call(null);(statearr_21355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21356);
return statearr_21355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21356,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21461 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21461,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21461,out){
return (function (state_21438){var state_val_21439 = (state_21438[(1)]);if((state_val_21439 === (7)))
{var inst_21420 = (state_21438[(7)]);var inst_21420__$1 = (state_21438[(2)]);var inst_21421 = (inst_21420__$1 == null);var inst_21422 = cljs.core.not.call(null,inst_21421);var state_21438__$1 = (function (){var statearr_21440 = state_21438;(statearr_21440[(7)] = inst_21420__$1);
return statearr_21440;
})();if(inst_21422)
{var statearr_21441_21462 = state_21438__$1;(statearr_21441_21462[(1)] = (8));
} else
{var statearr_21442_21463 = state_21438__$1;(statearr_21442_21463[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (1)))
{var inst_21415 = (0);var state_21438__$1 = (function (){var statearr_21443 = state_21438;(statearr_21443[(8)] = inst_21415);
return statearr_21443;
})();var statearr_21444_21464 = state_21438__$1;(statearr_21444_21464[(2)] = null);
(statearr_21444_21464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (4)))
{var state_21438__$1 = state_21438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21438__$1,(7),ch);
} else
{if((state_val_21439 === (6)))
{var inst_21433 = (state_21438[(2)]);var state_21438__$1 = state_21438;var statearr_21445_21465 = state_21438__$1;(statearr_21445_21465[(2)] = inst_21433);
(statearr_21445_21465[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (3)))
{var inst_21435 = (state_21438[(2)]);var inst_21436 = cljs.core.async.close_BANG_.call(null,out);var state_21438__$1 = (function (){var statearr_21446 = state_21438;(statearr_21446[(9)] = inst_21435);
return statearr_21446;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21438__$1,inst_21436);
} else
{if((state_val_21439 === (2)))
{var inst_21415 = (state_21438[(8)]);var inst_21417 = (inst_21415 < n);var state_21438__$1 = state_21438;if(cljs.core.truth_(inst_21417))
{var statearr_21447_21466 = state_21438__$1;(statearr_21447_21466[(1)] = (4));
} else
{var statearr_21448_21467 = state_21438__$1;(statearr_21448_21467[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (11)))
{var inst_21415 = (state_21438[(8)]);var inst_21425 = (state_21438[(2)]);var inst_21426 = (inst_21415 + (1));var inst_21415__$1 = inst_21426;var state_21438__$1 = (function (){var statearr_21449 = state_21438;(statearr_21449[(10)] = inst_21425);
(statearr_21449[(8)] = inst_21415__$1);
return statearr_21449;
})();var statearr_21450_21468 = state_21438__$1;(statearr_21450_21468[(2)] = null);
(statearr_21450_21468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (9)))
{var state_21438__$1 = state_21438;var statearr_21451_21469 = state_21438__$1;(statearr_21451_21469[(2)] = null);
(statearr_21451_21469[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (5)))
{var state_21438__$1 = state_21438;var statearr_21452_21470 = state_21438__$1;(statearr_21452_21470[(2)] = null);
(statearr_21452_21470[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (10)))
{var inst_21430 = (state_21438[(2)]);var state_21438__$1 = state_21438;var statearr_21453_21471 = state_21438__$1;(statearr_21453_21471[(2)] = inst_21430);
(statearr_21453_21471[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21439 === (8)))
{var inst_21420 = (state_21438[(7)]);var state_21438__$1 = state_21438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21438__$1,(11),out,inst_21420);
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
});})(c__5708__auto___21461,out))
;return ((function (switch__5693__auto__,c__5708__auto___21461,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21457 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21457[(0)] = state_machine__5694__auto__);
(statearr_21457[(1)] = (1));
return statearr_21457;
});
var state_machine__5694__auto____1 = (function (state_21438){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21438);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21458){if((e21458 instanceof Object))
{var ex__5697__auto__ = e21458;var statearr_21459_21472 = state_21438;(statearr_21459_21472[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21438);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21458;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21473 = state_21438;
state_21438 = G__21473;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21438){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21461,out))
})();var state__5710__auto__ = (function (){var statearr_21460 = f__5709__auto__.call(null);(statearr_21460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21461);
return statearr_21460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21461,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21570 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21570,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21570,out){
return (function (state_21545){var state_val_21546 = (state_21545[(1)]);if((state_val_21546 === (7)))
{var inst_21540 = (state_21545[(2)]);var state_21545__$1 = state_21545;var statearr_21547_21571 = state_21545__$1;(statearr_21547_21571[(2)] = inst_21540);
(statearr_21547_21571[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21546 === (1)))
{var inst_21522 = null;var state_21545__$1 = (function (){var statearr_21548 = state_21545;(statearr_21548[(7)] = inst_21522);
return statearr_21548;
})();var statearr_21549_21572 = state_21545__$1;(statearr_21549_21572[(2)] = null);
(statearr_21549_21572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21546 === (4)))
{var inst_21525 = (state_21545[(8)]);var inst_21525__$1 = (state_21545[(2)]);var inst_21526 = (inst_21525__$1 == null);var inst_21527 = cljs.core.not.call(null,inst_21526);var state_21545__$1 = (function (){var statearr_21550 = state_21545;(statearr_21550[(8)] = inst_21525__$1);
return statearr_21550;
})();if(inst_21527)
{var statearr_21551_21573 = state_21545__$1;(statearr_21551_21573[(1)] = (5));
} else
{var statearr_21552_21574 = state_21545__$1;(statearr_21552_21574[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21546 === (6)))
{var state_21545__$1 = state_21545;var statearr_21553_21575 = state_21545__$1;(statearr_21553_21575[(2)] = null);
(statearr_21553_21575[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21546 === (3)))
{var inst_21542 = (state_21545[(2)]);var inst_21543 = cljs.core.async.close_BANG_.call(null,out);var state_21545__$1 = (function (){var statearr_21554 = state_21545;(statearr_21554[(9)] = inst_21542);
return statearr_21554;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21545__$1,inst_21543);
} else
{if((state_val_21546 === (2)))
{var state_21545__$1 = state_21545;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21545__$1,(4),ch);
} else
{if((state_val_21546 === (11)))
{var inst_21525 = (state_21545[(8)]);var inst_21534 = (state_21545[(2)]);var inst_21522 = inst_21525;var state_21545__$1 = (function (){var statearr_21555 = state_21545;(statearr_21555[(7)] = inst_21522);
(statearr_21555[(10)] = inst_21534);
return statearr_21555;
})();var statearr_21556_21576 = state_21545__$1;(statearr_21556_21576[(2)] = null);
(statearr_21556_21576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21546 === (9)))
{var inst_21525 = (state_21545[(8)]);var state_21545__$1 = state_21545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21545__$1,(11),out,inst_21525);
} else
{if((state_val_21546 === (5)))
{var inst_21525 = (state_21545[(8)]);var inst_21522 = (state_21545[(7)]);var inst_21529 = cljs.core._EQ_.call(null,inst_21525,inst_21522);var state_21545__$1 = state_21545;if(inst_21529)
{var statearr_21558_21577 = state_21545__$1;(statearr_21558_21577[(1)] = (8));
} else
{var statearr_21559_21578 = state_21545__$1;(statearr_21559_21578[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21546 === (10)))
{var inst_21537 = (state_21545[(2)]);var state_21545__$1 = state_21545;var statearr_21560_21579 = state_21545__$1;(statearr_21560_21579[(2)] = inst_21537);
(statearr_21560_21579[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21546 === (8)))
{var inst_21522 = (state_21545[(7)]);var tmp21557 = inst_21522;var inst_21522__$1 = tmp21557;var state_21545__$1 = (function (){var statearr_21561 = state_21545;(statearr_21561[(7)] = inst_21522__$1);
return statearr_21561;
})();var statearr_21562_21580 = state_21545__$1;(statearr_21562_21580[(2)] = null);
(statearr_21562_21580[(1)] = (2));
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
});})(c__5708__auto___21570,out))
;return ((function (switch__5693__auto__,c__5708__auto___21570,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21566 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21566[(0)] = state_machine__5694__auto__);
(statearr_21566[(1)] = (1));
return statearr_21566;
});
var state_machine__5694__auto____1 = (function (state_21545){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21545);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21567){if((e21567 instanceof Object))
{var ex__5697__auto__ = e21567;var statearr_21568_21581 = state_21545;(statearr_21568_21581[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21567;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21582 = state_21545;
state_21545 = G__21582;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21545){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21570,out))
})();var state__5710__auto__ = (function (){var statearr_21569 = f__5709__auto__.call(null);(statearr_21569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21570);
return statearr_21569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21570,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21717 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21717,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21717,out){
return (function (state_21687){var state_val_21688 = (state_21687[(1)]);if((state_val_21688 === (7)))
{var inst_21683 = (state_21687[(2)]);var state_21687__$1 = state_21687;var statearr_21689_21718 = state_21687__$1;(statearr_21689_21718[(2)] = inst_21683);
(statearr_21689_21718[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (1)))
{var inst_21650 = (new Array(n));var inst_21651 = inst_21650;var inst_21652 = (0);var state_21687__$1 = (function (){var statearr_21690 = state_21687;(statearr_21690[(7)] = inst_21652);
(statearr_21690[(8)] = inst_21651);
return statearr_21690;
})();var statearr_21691_21719 = state_21687__$1;(statearr_21691_21719[(2)] = null);
(statearr_21691_21719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (4)))
{var inst_21655 = (state_21687[(9)]);var inst_21655__$1 = (state_21687[(2)]);var inst_21656 = (inst_21655__$1 == null);var inst_21657 = cljs.core.not.call(null,inst_21656);var state_21687__$1 = (function (){var statearr_21692 = state_21687;(statearr_21692[(9)] = inst_21655__$1);
return statearr_21692;
})();if(inst_21657)
{var statearr_21693_21720 = state_21687__$1;(statearr_21693_21720[(1)] = (5));
} else
{var statearr_21694_21721 = state_21687__$1;(statearr_21694_21721[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (15)))
{var inst_21677 = (state_21687[(2)]);var state_21687__$1 = state_21687;var statearr_21695_21722 = state_21687__$1;(statearr_21695_21722[(2)] = inst_21677);
(statearr_21695_21722[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (13)))
{var state_21687__$1 = state_21687;var statearr_21696_21723 = state_21687__$1;(statearr_21696_21723[(2)] = null);
(statearr_21696_21723[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (6)))
{var inst_21652 = (state_21687[(7)]);var inst_21673 = (inst_21652 > (0));var state_21687__$1 = state_21687;if(cljs.core.truth_(inst_21673))
{var statearr_21697_21724 = state_21687__$1;(statearr_21697_21724[(1)] = (12));
} else
{var statearr_21698_21725 = state_21687__$1;(statearr_21698_21725[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (3)))
{var inst_21685 = (state_21687[(2)]);var state_21687__$1 = state_21687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21687__$1,inst_21685);
} else
{if((state_val_21688 === (12)))
{var inst_21651 = (state_21687[(8)]);var inst_21675 = cljs.core.vec.call(null,inst_21651);var state_21687__$1 = state_21687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21687__$1,(15),out,inst_21675);
} else
{if((state_val_21688 === (2)))
{var state_21687__$1 = state_21687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21687__$1,(4),ch);
} else
{if((state_val_21688 === (11)))
{var inst_21667 = (state_21687[(2)]);var inst_21668 = (new Array(n));var inst_21651 = inst_21668;var inst_21652 = (0);var state_21687__$1 = (function (){var statearr_21699 = state_21687;(statearr_21699[(7)] = inst_21652);
(statearr_21699[(10)] = inst_21667);
(statearr_21699[(8)] = inst_21651);
return statearr_21699;
})();var statearr_21700_21726 = state_21687__$1;(statearr_21700_21726[(2)] = null);
(statearr_21700_21726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (9)))
{var inst_21651 = (state_21687[(8)]);var inst_21665 = cljs.core.vec.call(null,inst_21651);var state_21687__$1 = state_21687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21687__$1,(11),out,inst_21665);
} else
{if((state_val_21688 === (5)))
{var inst_21655 = (state_21687[(9)]);var inst_21660 = (state_21687[(11)]);var inst_21652 = (state_21687[(7)]);var inst_21651 = (state_21687[(8)]);var inst_21659 = (inst_21651[inst_21652] = inst_21655);var inst_21660__$1 = (inst_21652 + (1));var inst_21661 = (inst_21660__$1 < n);var state_21687__$1 = (function (){var statearr_21701 = state_21687;(statearr_21701[(12)] = inst_21659);
(statearr_21701[(11)] = inst_21660__$1);
return statearr_21701;
})();if(cljs.core.truth_(inst_21661))
{var statearr_21702_21727 = state_21687__$1;(statearr_21702_21727[(1)] = (8));
} else
{var statearr_21703_21728 = state_21687__$1;(statearr_21703_21728[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (14)))
{var inst_21680 = (state_21687[(2)]);var inst_21681 = cljs.core.async.close_BANG_.call(null,out);var state_21687__$1 = (function (){var statearr_21705 = state_21687;(statearr_21705[(13)] = inst_21680);
return statearr_21705;
})();var statearr_21706_21729 = state_21687__$1;(statearr_21706_21729[(2)] = inst_21681);
(statearr_21706_21729[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (10)))
{var inst_21671 = (state_21687[(2)]);var state_21687__$1 = state_21687;var statearr_21707_21730 = state_21687__$1;(statearr_21707_21730[(2)] = inst_21671);
(statearr_21707_21730[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21688 === (8)))
{var inst_21660 = (state_21687[(11)]);var inst_21651 = (state_21687[(8)]);var tmp21704 = inst_21651;var inst_21651__$1 = tmp21704;var inst_21652 = inst_21660;var state_21687__$1 = (function (){var statearr_21708 = state_21687;(statearr_21708[(7)] = inst_21652);
(statearr_21708[(8)] = inst_21651__$1);
return statearr_21708;
})();var statearr_21709_21731 = state_21687__$1;(statearr_21709_21731[(2)] = null);
(statearr_21709_21731[(1)] = (2));
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
});})(c__5708__auto___21717,out))
;return ((function (switch__5693__auto__,c__5708__auto___21717,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21713[(0)] = state_machine__5694__auto__);
(statearr_21713[(1)] = (1));
return statearr_21713;
});
var state_machine__5694__auto____1 = (function (state_21687){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21714){if((e21714 instanceof Object))
{var ex__5697__auto__ = e21714;var statearr_21715_21732 = state_21687;(statearr_21715_21732[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21714;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21733 = state_21687;
state_21687 = G__21733;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21687){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21717,out))
})();var state__5710__auto__ = (function (){var statearr_21716 = f__5709__auto__.call(null);(statearr_21716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21717);
return statearr_21716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21717,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21876,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21876,out){
return (function (state_21846){var state_val_21847 = (state_21846[(1)]);if((state_val_21847 === (7)))
{var inst_21842 = (state_21846[(2)]);var state_21846__$1 = state_21846;var statearr_21848_21877 = state_21846__$1;(statearr_21848_21877[(2)] = inst_21842);
(statearr_21848_21877[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (1)))
{var inst_21805 = [];var inst_21806 = inst_21805;var inst_21807 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21846__$1 = (function (){var statearr_21849 = state_21846;(statearr_21849[(7)] = inst_21807);
(statearr_21849[(8)] = inst_21806);
return statearr_21849;
})();var statearr_21850_21878 = state_21846__$1;(statearr_21850_21878[(2)] = null);
(statearr_21850_21878[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (4)))
{var inst_21810 = (state_21846[(9)]);var inst_21810__$1 = (state_21846[(2)]);var inst_21811 = (inst_21810__$1 == null);var inst_21812 = cljs.core.not.call(null,inst_21811);var state_21846__$1 = (function (){var statearr_21851 = state_21846;(statearr_21851[(9)] = inst_21810__$1);
return statearr_21851;
})();if(inst_21812)
{var statearr_21852_21879 = state_21846__$1;(statearr_21852_21879[(1)] = (5));
} else
{var statearr_21853_21880 = state_21846__$1;(statearr_21853_21880[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (15)))
{var inst_21836 = (state_21846[(2)]);var state_21846__$1 = state_21846;var statearr_21854_21881 = state_21846__$1;(statearr_21854_21881[(2)] = inst_21836);
(statearr_21854_21881[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (13)))
{var state_21846__$1 = state_21846;var statearr_21855_21882 = state_21846__$1;(statearr_21855_21882[(2)] = null);
(statearr_21855_21882[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (6)))
{var inst_21806 = (state_21846[(8)]);var inst_21831 = inst_21806.length;var inst_21832 = (inst_21831 > (0));var state_21846__$1 = state_21846;if(cljs.core.truth_(inst_21832))
{var statearr_21856_21883 = state_21846__$1;(statearr_21856_21883[(1)] = (12));
} else
{var statearr_21857_21884 = state_21846__$1;(statearr_21857_21884[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (3)))
{var inst_21844 = (state_21846[(2)]);var state_21846__$1 = state_21846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21846__$1,inst_21844);
} else
{if((state_val_21847 === (12)))
{var inst_21806 = (state_21846[(8)]);var inst_21834 = cljs.core.vec.call(null,inst_21806);var state_21846__$1 = state_21846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21846__$1,(15),out,inst_21834);
} else
{if((state_val_21847 === (2)))
{var state_21846__$1 = state_21846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21846__$1,(4),ch);
} else
{if((state_val_21847 === (11)))
{var inst_21814 = (state_21846[(10)]);var inst_21810 = (state_21846[(9)]);var inst_21824 = (state_21846[(2)]);var inst_21825 = [];var inst_21826 = inst_21825.push(inst_21810);var inst_21806 = inst_21825;var inst_21807 = inst_21814;var state_21846__$1 = (function (){var statearr_21858 = state_21846;(statearr_21858[(7)] = inst_21807);
(statearr_21858[(11)] = inst_21826);
(statearr_21858[(12)] = inst_21824);
(statearr_21858[(8)] = inst_21806);
return statearr_21858;
})();var statearr_21859_21885 = state_21846__$1;(statearr_21859_21885[(2)] = null);
(statearr_21859_21885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (9)))
{var inst_21806 = (state_21846[(8)]);var inst_21822 = cljs.core.vec.call(null,inst_21806);var state_21846__$1 = state_21846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21846__$1,(11),out,inst_21822);
} else
{if((state_val_21847 === (5)))
{var inst_21807 = (state_21846[(7)]);var inst_21814 = (state_21846[(10)]);var inst_21810 = (state_21846[(9)]);var inst_21814__$1 = f.call(null,inst_21810);var inst_21815 = cljs.core._EQ_.call(null,inst_21814__$1,inst_21807);var inst_21816 = cljs.core.keyword_identical_QMARK_.call(null,inst_21807,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21817 = (inst_21815) || (inst_21816);var state_21846__$1 = (function (){var statearr_21860 = state_21846;(statearr_21860[(10)] = inst_21814__$1);
return statearr_21860;
})();if(cljs.core.truth_(inst_21817))
{var statearr_21861_21886 = state_21846__$1;(statearr_21861_21886[(1)] = (8));
} else
{var statearr_21862_21887 = state_21846__$1;(statearr_21862_21887[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (14)))
{var inst_21839 = (state_21846[(2)]);var inst_21840 = cljs.core.async.close_BANG_.call(null,out);var state_21846__$1 = (function (){var statearr_21864 = state_21846;(statearr_21864[(13)] = inst_21839);
return statearr_21864;
})();var statearr_21865_21888 = state_21846__$1;(statearr_21865_21888[(2)] = inst_21840);
(statearr_21865_21888[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (10)))
{var inst_21829 = (state_21846[(2)]);var state_21846__$1 = state_21846;var statearr_21866_21889 = state_21846__$1;(statearr_21866_21889[(2)] = inst_21829);
(statearr_21866_21889[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21847 === (8)))
{var inst_21814 = (state_21846[(10)]);var inst_21810 = (state_21846[(9)]);var inst_21806 = (state_21846[(8)]);var inst_21819 = inst_21806.push(inst_21810);var tmp21863 = inst_21806;var inst_21806__$1 = tmp21863;var inst_21807 = inst_21814;var state_21846__$1 = (function (){var statearr_21867 = state_21846;(statearr_21867[(7)] = inst_21807);
(statearr_21867[(14)] = inst_21819);
(statearr_21867[(8)] = inst_21806__$1);
return statearr_21867;
})();var statearr_21868_21890 = state_21846__$1;(statearr_21868_21890[(2)] = null);
(statearr_21868_21890[(1)] = (2));
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
});})(c__5708__auto___21876,out))
;return ((function (switch__5693__auto__,c__5708__auto___21876,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21872[(0)] = state_machine__5694__auto__);
(statearr_21872[(1)] = (1));
return statearr_21872;
});
var state_machine__5694__auto____1 = (function (state_21846){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21846);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21873){if((e21873 instanceof Object))
{var ex__5697__auto__ = e21873;var statearr_21874_21891 = state_21846;(statearr_21874_21891[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21873;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21892 = state_21846;
state_21846 = G__21892;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21846){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21876,out))
})();var state__5710__auto__ = (function (){var statearr_21875 = f__5709__auto__.call(null);(statearr_21875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21876);
return statearr_21875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21876,out))
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
