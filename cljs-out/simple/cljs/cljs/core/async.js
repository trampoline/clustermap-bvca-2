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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34264 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34264 = (function (f,fn_handler,meta34265){
this.f = f;
this.fn_handler = fn_handler;
this.meta34265 = meta34265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34264.cljs$lang$type = true;
cljs.core.async.t34264.cljs$lang$ctorStr = "cljs.core.async/t34264";
cljs.core.async.t34264.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34264");
});
cljs.core.async.t34264.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34266){var self__ = this;
var _34266__$1 = this;return self__.meta34265;
});
cljs.core.async.t34264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34266,meta34265__$1){var self__ = this;
var _34266__$1 = this;return (new cljs.core.async.t34264(self__.f,self__.fn_handler,meta34265__$1));
});
cljs.core.async.__GT_t34264 = (function __GT_t34264(f__$1,fn_handler__$1,meta34265){return (new cljs.core.async.t34264(f__$1,fn_handler__$1,meta34265));
});
}
return (new cljs.core.async.t34264(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34268 = buff;if(G__34268)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__34268.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34268.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34268);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34268);
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
{var val_34269 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34269);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_34269,ret){
return (function (){return fn1.call(null,val_34269);
});})(val_34269,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___34270 = n;var x_34271 = (0);while(true){
if((x_34271 < n__4414__auto___34270))
{(a[x_34271] = (0));
{
var G__34272 = (x_34271 + (1));
x_34271 = G__34272;
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
var G__34273 = (i + (1));
i = G__34273;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34277 = (function (flag,alt_flag,meta34278){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34278 = meta34278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34277.cljs$lang$type = true;
cljs.core.async.t34277.cljs$lang$ctorStr = "cljs.core.async/t34277";
cljs.core.async.t34277.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34277");
});})(flag))
;
cljs.core.async.t34277.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t34277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t34277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34279){var self__ = this;
var _34279__$1 = this;return self__.meta34278;
});})(flag))
;
cljs.core.async.t34277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34279,meta34278__$1){var self__ = this;
var _34279__$1 = this;return (new cljs.core.async.t34277(self__.flag,self__.alt_flag,meta34278__$1));
});})(flag))
;
cljs.core.async.__GT_t34277 = ((function (flag){
return (function __GT_t34277(flag__$1,alt_flag__$1,meta34278){return (new cljs.core.async.t34277(flag__$1,alt_flag__$1,meta34278));
});})(flag))
;
}
return (new cljs.core.async.t34277(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34283 = (function (cb,flag,alt_handler,meta34284){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34284 = meta34284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34283.cljs$lang$type = true;
cljs.core.async.t34283.cljs$lang$ctorStr = "cljs.core.async/t34283";
cljs.core.async.t34283.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34283");
});
cljs.core.async.t34283.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34285){var self__ = this;
var _34285__$1 = this;return self__.meta34284;
});
cljs.core.async.t34283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34285,meta34284__$1){var self__ = this;
var _34285__$1 = this;return (new cljs.core.async.t34283(self__.cb,self__.flag,self__.alt_handler,meta34284__$1));
});
cljs.core.async.__GT_t34283 = (function __GT_t34283(cb__$1,flag__$1,alt_handler__$1,meta34284){return (new cljs.core.async.t34283(cb__$1,flag__$1,alt_handler__$1,meta34284));
});
}
return (new cljs.core.async.t34283(cb,flag,alt_handler,null));
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
return (function (p1__34286_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34286_SHARP_,port], null));
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
var G__34287 = (i + (1));
i = G__34287;
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
var alts_BANG___delegate = function (ports,p__34288){var map__34290 = p__34288;var map__34290__$1 = ((cljs.core.seq_QMARK_.call(null,map__34290))?cljs.core.apply.call(null,cljs.core.hash_map,map__34290):map__34290);var opts = map__34290__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__34288 = null;if (arguments.length > 1) {
  p__34288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34288);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34291){
var ports = cljs.core.first(arglist__34291);
var p__34288 = cljs.core.rest(arglist__34291);
return alts_BANG___delegate(ports,p__34288);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34299 = (function (ch,f,map_LT_,meta34300){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34300 = meta34300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34299.cljs$lang$type = true;
cljs.core.async.t34299.cljs$lang$ctorStr = "cljs.core.async/t34299";
cljs.core.async.t34299.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34299");
});
cljs.core.async.t34299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34302 = (function (fn1,_,meta34300,ch,f,map_LT_,meta34303){
this.fn1 = fn1;
this._ = _;
this.meta34300 = meta34300;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34303 = meta34303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34302.cljs$lang$type = true;
cljs.core.async.t34302.cljs$lang$ctorStr = "cljs.core.async/t34302";
cljs.core.async.t34302.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34302");
});})(___$1))
;
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__34292_SHARP_){return f1.call(null,(((p1__34292_SHARP_ == null))?null:self__.f.call(null,p1__34292_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t34302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34304){var self__ = this;
var _34304__$1 = this;return self__.meta34303;
});})(___$1))
;
cljs.core.async.t34302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34304,meta34303__$1){var self__ = this;
var _34304__$1 = this;return (new cljs.core.async.t34302(self__.fn1,self__._,self__.meta34300,self__.ch,self__.f,self__.map_LT_,meta34303__$1));
});})(___$1))
;
cljs.core.async.__GT_t34302 = ((function (___$1){
return (function __GT_t34302(fn1__$1,___$2,meta34300__$1,ch__$2,f__$2,map_LT___$2,meta34303){return (new cljs.core.async.t34302(fn1__$1,___$2,meta34300__$1,ch__$2,f__$2,map_LT___$2,meta34303));
});})(___$1))
;
}
return (new cljs.core.async.t34302(fn1,___$1,self__.meta34300,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34299.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34301){var self__ = this;
var _34301__$1 = this;return self__.meta34300;
});
cljs.core.async.t34299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34301,meta34300__$1){var self__ = this;
var _34301__$1 = this;return (new cljs.core.async.t34299(self__.ch,self__.f,self__.map_LT_,meta34300__$1));
});
cljs.core.async.__GT_t34299 = (function __GT_t34299(ch__$1,f__$1,map_LT___$1,meta34300){return (new cljs.core.async.t34299(ch__$1,f__$1,map_LT___$1,meta34300));
});
}
return (new cljs.core.async.t34299(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34308 = (function (ch,f,map_GT_,meta34309){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34309 = meta34309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34308.cljs$lang$type = true;
cljs.core.async.t34308.cljs$lang$ctorStr = "cljs.core.async/t34308";
cljs.core.async.t34308.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34308");
});
cljs.core.async.t34308.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34308.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34308.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34310){var self__ = this;
var _34310__$1 = this;return self__.meta34309;
});
cljs.core.async.t34308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34310,meta34309__$1){var self__ = this;
var _34310__$1 = this;return (new cljs.core.async.t34308(self__.ch,self__.f,self__.map_GT_,meta34309__$1));
});
cljs.core.async.__GT_t34308 = (function __GT_t34308(ch__$1,f__$1,map_GT___$1,meta34309){return (new cljs.core.async.t34308(ch__$1,f__$1,map_GT___$1,meta34309));
});
}
return (new cljs.core.async.t34308(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34314 = (function (ch,p,filter_GT_,meta34315){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34315 = meta34315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34314.cljs$lang$type = true;
cljs.core.async.t34314.cljs$lang$ctorStr = "cljs.core.async/t34314";
cljs.core.async.t34314.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34314");
});
cljs.core.async.t34314.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34314.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34314.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34316){var self__ = this;
var _34316__$1 = this;return self__.meta34315;
});
cljs.core.async.t34314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34316,meta34315__$1){var self__ = this;
var _34316__$1 = this;return (new cljs.core.async.t34314(self__.ch,self__.p,self__.filter_GT_,meta34315__$1));
});
cljs.core.async.__GT_t34314 = (function __GT_t34314(ch__$1,p__$1,filter_GT___$1,meta34315){return (new cljs.core.async.t34314(ch__$1,p__$1,filter_GT___$1,meta34315));
});
}
return (new cljs.core.async.t34314(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___34399 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34399,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34399,out){
return (function (state_34378){var state_val_34379 = (state_34378[(1)]);if((state_val_34379 === (7)))
{var inst_34374 = (state_34378[(2)]);var state_34378__$1 = state_34378;var statearr_34380_34400 = state_34378__$1;(statearr_34380_34400[(2)] = inst_34374);
(statearr_34380_34400[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (1)))
{var state_34378__$1 = state_34378;var statearr_34381_34401 = state_34378__$1;(statearr_34381_34401[(2)] = null);
(statearr_34381_34401[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (4)))
{var inst_34360 = (state_34378[(7)]);var inst_34360__$1 = (state_34378[(2)]);var inst_34361 = (inst_34360__$1 == null);var state_34378__$1 = (function (){var statearr_34382 = state_34378;(statearr_34382[(7)] = inst_34360__$1);
return statearr_34382;
})();if(cljs.core.truth_(inst_34361))
{var statearr_34383_34402 = state_34378__$1;(statearr_34383_34402[(1)] = (5));
} else
{var statearr_34384_34403 = state_34378__$1;(statearr_34384_34403[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (6)))
{var inst_34360 = (state_34378[(7)]);var inst_34365 = p.call(null,inst_34360);var state_34378__$1 = state_34378;if(cljs.core.truth_(inst_34365))
{var statearr_34385_34404 = state_34378__$1;(statearr_34385_34404[(1)] = (8));
} else
{var statearr_34386_34405 = state_34378__$1;(statearr_34386_34405[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (3)))
{var inst_34376 = (state_34378[(2)]);var state_34378__$1 = state_34378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34378__$1,inst_34376);
} else
{if((state_val_34379 === (2)))
{var state_34378__$1 = state_34378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34378__$1,(4),ch);
} else
{if((state_val_34379 === (11)))
{var inst_34368 = (state_34378[(2)]);var state_34378__$1 = state_34378;var statearr_34387_34406 = state_34378__$1;(statearr_34387_34406[(2)] = inst_34368);
(statearr_34387_34406[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (9)))
{var state_34378__$1 = state_34378;var statearr_34388_34407 = state_34378__$1;(statearr_34388_34407[(2)] = null);
(statearr_34388_34407[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (5)))
{var inst_34363 = cljs.core.async.close_BANG_.call(null,out);var state_34378__$1 = state_34378;var statearr_34389_34408 = state_34378__$1;(statearr_34389_34408[(2)] = inst_34363);
(statearr_34389_34408[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (10)))
{var inst_34371 = (state_34378[(2)]);var state_34378__$1 = (function (){var statearr_34390 = state_34378;(statearr_34390[(8)] = inst_34371);
return statearr_34390;
})();var statearr_34391_34409 = state_34378__$1;(statearr_34391_34409[(2)] = null);
(statearr_34391_34409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34379 === (8)))
{var inst_34360 = (state_34378[(7)]);var state_34378__$1 = state_34378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34378__$1,(11),out,inst_34360);
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
});})(c__5708__auto___34399,out))
;return ((function (switch__5693__auto__,c__5708__auto___34399,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34395 = [null,null,null,null,null,null,null,null,null];(statearr_34395[(0)] = state_machine__5694__auto__);
(statearr_34395[(1)] = (1));
return statearr_34395;
});
var state_machine__5694__auto____1 = (function (state_34378){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34378);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34396){if((e34396 instanceof Object))
{var ex__5697__auto__ = e34396;var statearr_34397_34410 = state_34378;(statearr_34397_34410[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34396;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34411 = state_34378;
state_34378 = G__34411;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34378){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34399,out))
})();var state__5710__auto__ = (function (){var statearr_34398 = f__5709__auto__.call(null);(statearr_34398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34399);
return statearr_34398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34399,out))
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
return (function (state_34563){var state_val_34564 = (state_34563[(1)]);if((state_val_34564 === (7)))
{var inst_34559 = (state_34563[(2)]);var state_34563__$1 = state_34563;var statearr_34565_34602 = state_34563__$1;(statearr_34565_34602[(2)] = inst_34559);
(statearr_34565_34602[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (20)))
{var inst_34534 = (state_34563[(7)]);var inst_34545 = (state_34563[(2)]);var inst_34546 = cljs.core.next.call(null,inst_34534);var inst_34520 = inst_34546;var inst_34521 = null;var inst_34522 = (0);var inst_34523 = (0);var state_34563__$1 = (function (){var statearr_34566 = state_34563;(statearr_34566[(8)] = inst_34521);
(statearr_34566[(9)] = inst_34523);
(statearr_34566[(10)] = inst_34520);
(statearr_34566[(11)] = inst_34545);
(statearr_34566[(12)] = inst_34522);
return statearr_34566;
})();var statearr_34567_34603 = state_34563__$1;(statearr_34567_34603[(2)] = null);
(statearr_34567_34603[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (1)))
{var state_34563__$1 = state_34563;var statearr_34568_34604 = state_34563__$1;(statearr_34568_34604[(2)] = null);
(statearr_34568_34604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (4)))
{var inst_34509 = (state_34563[(13)]);var inst_34509__$1 = (state_34563[(2)]);var inst_34510 = (inst_34509__$1 == null);var state_34563__$1 = (function (){var statearr_34572 = state_34563;(statearr_34572[(13)] = inst_34509__$1);
return statearr_34572;
})();if(cljs.core.truth_(inst_34510))
{var statearr_34573_34605 = state_34563__$1;(statearr_34573_34605[(1)] = (5));
} else
{var statearr_34574_34606 = state_34563__$1;(statearr_34574_34606[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (15)))
{var state_34563__$1 = state_34563;var statearr_34575_34607 = state_34563__$1;(statearr_34575_34607[(2)] = null);
(statearr_34575_34607[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (13)))
{var inst_34521 = (state_34563[(8)]);var inst_34523 = (state_34563[(9)]);var inst_34520 = (state_34563[(10)]);var inst_34522 = (state_34563[(12)]);var inst_34530 = (state_34563[(2)]);var inst_34531 = (inst_34523 + (1));var tmp34569 = inst_34521;var tmp34570 = inst_34520;var tmp34571 = inst_34522;var inst_34520__$1 = tmp34570;var inst_34521__$1 = tmp34569;var inst_34522__$1 = tmp34571;var inst_34523__$1 = inst_34531;var state_34563__$1 = (function (){var statearr_34576 = state_34563;(statearr_34576[(8)] = inst_34521__$1);
(statearr_34576[(9)] = inst_34523__$1);
(statearr_34576[(10)] = inst_34520__$1);
(statearr_34576[(12)] = inst_34522__$1);
(statearr_34576[(14)] = inst_34530);
return statearr_34576;
})();var statearr_34577_34608 = state_34563__$1;(statearr_34577_34608[(2)] = null);
(statearr_34577_34608[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (6)))
{var inst_34509 = (state_34563[(13)]);var inst_34514 = f.call(null,inst_34509);var inst_34519 = cljs.core.seq.call(null,inst_34514);var inst_34520 = inst_34519;var inst_34521 = null;var inst_34522 = (0);var inst_34523 = (0);var state_34563__$1 = (function (){var statearr_34578 = state_34563;(statearr_34578[(8)] = inst_34521);
(statearr_34578[(9)] = inst_34523);
(statearr_34578[(10)] = inst_34520);
(statearr_34578[(12)] = inst_34522);
return statearr_34578;
})();var statearr_34579_34609 = state_34563__$1;(statearr_34579_34609[(2)] = null);
(statearr_34579_34609[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (17)))
{var inst_34534 = (state_34563[(7)]);var inst_34538 = cljs.core.chunk_first.call(null,inst_34534);var inst_34539 = cljs.core.chunk_rest.call(null,inst_34534);var inst_34540 = cljs.core.count.call(null,inst_34538);var inst_34520 = inst_34539;var inst_34521 = inst_34538;var inst_34522 = inst_34540;var inst_34523 = (0);var state_34563__$1 = (function (){var statearr_34580 = state_34563;(statearr_34580[(8)] = inst_34521);
(statearr_34580[(9)] = inst_34523);
(statearr_34580[(10)] = inst_34520);
(statearr_34580[(12)] = inst_34522);
return statearr_34580;
})();var statearr_34581_34610 = state_34563__$1;(statearr_34581_34610[(2)] = null);
(statearr_34581_34610[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (3)))
{var inst_34561 = (state_34563[(2)]);var state_34563__$1 = state_34563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34563__$1,inst_34561);
} else
{if((state_val_34564 === (12)))
{var inst_34554 = (state_34563[(2)]);var state_34563__$1 = state_34563;var statearr_34582_34611 = state_34563__$1;(statearr_34582_34611[(2)] = inst_34554);
(statearr_34582_34611[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (2)))
{var state_34563__$1 = state_34563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34563__$1,(4),in$);
} else
{if((state_val_34564 === (19)))
{var inst_34549 = (state_34563[(2)]);var state_34563__$1 = state_34563;var statearr_34583_34612 = state_34563__$1;(statearr_34583_34612[(2)] = inst_34549);
(statearr_34583_34612[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (11)))
{var inst_34534 = (state_34563[(7)]);var inst_34520 = (state_34563[(10)]);var inst_34534__$1 = cljs.core.seq.call(null,inst_34520);var state_34563__$1 = (function (){var statearr_34584 = state_34563;(statearr_34584[(7)] = inst_34534__$1);
return statearr_34584;
})();if(inst_34534__$1)
{var statearr_34585_34613 = state_34563__$1;(statearr_34585_34613[(1)] = (14));
} else
{var statearr_34586_34614 = state_34563__$1;(statearr_34586_34614[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (9)))
{var inst_34556 = (state_34563[(2)]);var state_34563__$1 = (function (){var statearr_34587 = state_34563;(statearr_34587[(15)] = inst_34556);
return statearr_34587;
})();var statearr_34588_34615 = state_34563__$1;(statearr_34588_34615[(2)] = null);
(statearr_34588_34615[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (5)))
{var inst_34512 = cljs.core.async.close_BANG_.call(null,out);var state_34563__$1 = state_34563;var statearr_34589_34616 = state_34563__$1;(statearr_34589_34616[(2)] = inst_34512);
(statearr_34589_34616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (14)))
{var inst_34534 = (state_34563[(7)]);var inst_34536 = cljs.core.chunked_seq_QMARK_.call(null,inst_34534);var state_34563__$1 = state_34563;if(inst_34536)
{var statearr_34590_34617 = state_34563__$1;(statearr_34590_34617[(1)] = (17));
} else
{var statearr_34591_34618 = state_34563__$1;(statearr_34591_34618[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (16)))
{var inst_34552 = (state_34563[(2)]);var state_34563__$1 = state_34563;var statearr_34592_34619 = state_34563__$1;(statearr_34592_34619[(2)] = inst_34552);
(statearr_34592_34619[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34564 === (10)))
{var inst_34521 = (state_34563[(8)]);var inst_34523 = (state_34563[(9)]);var inst_34528 = cljs.core._nth.call(null,inst_34521,inst_34523);var state_34563__$1 = state_34563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34563__$1,(13),out,inst_34528);
} else
{if((state_val_34564 === (18)))
{var inst_34534 = (state_34563[(7)]);var inst_34543 = cljs.core.first.call(null,inst_34534);var state_34563__$1 = state_34563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34563__$1,(20),out,inst_34543);
} else
{if((state_val_34564 === (8)))
{var inst_34523 = (state_34563[(9)]);var inst_34522 = (state_34563[(12)]);var inst_34525 = (inst_34523 < inst_34522);var inst_34526 = inst_34525;var state_34563__$1 = state_34563;if(cljs.core.truth_(inst_34526))
{var statearr_34593_34620 = state_34563__$1;(statearr_34593_34620[(1)] = (10));
} else
{var statearr_34594_34621 = state_34563__$1;(statearr_34594_34621[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_34598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34598[(0)] = state_machine__5694__auto__);
(statearr_34598[(1)] = (1));
return statearr_34598;
});
var state_machine__5694__auto____1 = (function (state_34563){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34563);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34599){if((e34599 instanceof Object))
{var ex__5697__auto__ = e34599;var statearr_34600_34622 = state_34563;(statearr_34600_34622[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34623 = state_34563;
state_34563 = G__34623;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34563){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34601 = f__5709__auto__.call(null);(statearr_34601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34601;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___34704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34704){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34704){
return (function (state_34683){var state_val_34684 = (state_34683[(1)]);if((state_val_34684 === (7)))
{var inst_34679 = (state_34683[(2)]);var state_34683__$1 = state_34683;var statearr_34685_34705 = state_34683__$1;(statearr_34685_34705[(2)] = inst_34679);
(statearr_34685_34705[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34684 === (1)))
{var state_34683__$1 = state_34683;var statearr_34686_34706 = state_34683__$1;(statearr_34686_34706[(2)] = null);
(statearr_34686_34706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34684 === (4)))
{var inst_34666 = (state_34683[(7)]);var inst_34666__$1 = (state_34683[(2)]);var inst_34667 = (inst_34666__$1 == null);var state_34683__$1 = (function (){var statearr_34687 = state_34683;(statearr_34687[(7)] = inst_34666__$1);
return statearr_34687;
})();if(cljs.core.truth_(inst_34667))
{var statearr_34688_34707 = state_34683__$1;(statearr_34688_34707[(1)] = (5));
} else
{var statearr_34689_34708 = state_34683__$1;(statearr_34689_34708[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34684 === (6)))
{var inst_34666 = (state_34683[(7)]);var state_34683__$1 = state_34683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34683__$1,(11),to,inst_34666);
} else
{if((state_val_34684 === (3)))
{var inst_34681 = (state_34683[(2)]);var state_34683__$1 = state_34683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34683__$1,inst_34681);
} else
{if((state_val_34684 === (2)))
{var state_34683__$1 = state_34683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34683__$1,(4),from);
} else
{if((state_val_34684 === (11)))
{var inst_34676 = (state_34683[(2)]);var state_34683__$1 = (function (){var statearr_34690 = state_34683;(statearr_34690[(8)] = inst_34676);
return statearr_34690;
})();var statearr_34691_34709 = state_34683__$1;(statearr_34691_34709[(2)] = null);
(statearr_34691_34709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34684 === (9)))
{var state_34683__$1 = state_34683;var statearr_34692_34710 = state_34683__$1;(statearr_34692_34710[(2)] = null);
(statearr_34692_34710[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34684 === (5)))
{var state_34683__$1 = state_34683;if(cljs.core.truth_(close_QMARK_))
{var statearr_34693_34711 = state_34683__$1;(statearr_34693_34711[(1)] = (8));
} else
{var statearr_34694_34712 = state_34683__$1;(statearr_34694_34712[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34684 === (10)))
{var inst_34673 = (state_34683[(2)]);var state_34683__$1 = state_34683;var statearr_34695_34713 = state_34683__$1;(statearr_34695_34713[(2)] = inst_34673);
(statearr_34695_34713[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34684 === (8)))
{var inst_34670 = cljs.core.async.close_BANG_.call(null,to);var state_34683__$1 = state_34683;var statearr_34696_34714 = state_34683__$1;(statearr_34696_34714[(2)] = inst_34670);
(statearr_34696_34714[(1)] = (10));
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
});})(c__5708__auto___34704))
;return ((function (switch__5693__auto__,c__5708__auto___34704){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34700 = [null,null,null,null,null,null,null,null,null];(statearr_34700[(0)] = state_machine__5694__auto__);
(statearr_34700[(1)] = (1));
return statearr_34700;
});
var state_machine__5694__auto____1 = (function (state_34683){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34683);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34701){if((e34701 instanceof Object))
{var ex__5697__auto__ = e34701;var statearr_34702_34715 = state_34683;(statearr_34702_34715[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34683);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34716 = state_34683;
state_34683 = G__34716;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34683){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34704))
})();var state__5710__auto__ = (function (){var statearr_34703 = f__5709__auto__.call(null);(statearr_34703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34704);
return statearr_34703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34704))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___34803 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34803,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34803,tc,fc){
return (function (state_34781){var state_val_34782 = (state_34781[(1)]);if((state_val_34782 === (7)))
{var inst_34777 = (state_34781[(2)]);var state_34781__$1 = state_34781;var statearr_34783_34804 = state_34781__$1;(statearr_34783_34804[(2)] = inst_34777);
(statearr_34783_34804[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34782 === (1)))
{var state_34781__$1 = state_34781;var statearr_34784_34805 = state_34781__$1;(statearr_34784_34805[(2)] = null);
(statearr_34784_34805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34782 === (4)))
{var inst_34762 = (state_34781[(7)]);var inst_34762__$1 = (state_34781[(2)]);var inst_34763 = (inst_34762__$1 == null);var state_34781__$1 = (function (){var statearr_34785 = state_34781;(statearr_34785[(7)] = inst_34762__$1);
return statearr_34785;
})();if(cljs.core.truth_(inst_34763))
{var statearr_34786_34806 = state_34781__$1;(statearr_34786_34806[(1)] = (5));
} else
{var statearr_34787_34807 = state_34781__$1;(statearr_34787_34807[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34782 === (6)))
{var inst_34762 = (state_34781[(7)]);var inst_34768 = p.call(null,inst_34762);var state_34781__$1 = state_34781;if(cljs.core.truth_(inst_34768))
{var statearr_34788_34808 = state_34781__$1;(statearr_34788_34808[(1)] = (9));
} else
{var statearr_34789_34809 = state_34781__$1;(statearr_34789_34809[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34782 === (3)))
{var inst_34779 = (state_34781[(2)]);var state_34781__$1 = state_34781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34781__$1,inst_34779);
} else
{if((state_val_34782 === (2)))
{var state_34781__$1 = state_34781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34781__$1,(4),ch);
} else
{if((state_val_34782 === (11)))
{var inst_34762 = (state_34781[(7)]);var inst_34772 = (state_34781[(2)]);var state_34781__$1 = state_34781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34781__$1,(8),inst_34772,inst_34762);
} else
{if((state_val_34782 === (9)))
{var state_34781__$1 = state_34781;var statearr_34790_34810 = state_34781__$1;(statearr_34790_34810[(2)] = tc);
(statearr_34790_34810[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34782 === (5)))
{var inst_34765 = cljs.core.async.close_BANG_.call(null,tc);var inst_34766 = cljs.core.async.close_BANG_.call(null,fc);var state_34781__$1 = (function (){var statearr_34791 = state_34781;(statearr_34791[(8)] = inst_34765);
return statearr_34791;
})();var statearr_34792_34811 = state_34781__$1;(statearr_34792_34811[(2)] = inst_34766);
(statearr_34792_34811[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34782 === (10)))
{var state_34781__$1 = state_34781;var statearr_34793_34812 = state_34781__$1;(statearr_34793_34812[(2)] = fc);
(statearr_34793_34812[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34782 === (8)))
{var inst_34774 = (state_34781[(2)]);var state_34781__$1 = (function (){var statearr_34794 = state_34781;(statearr_34794[(9)] = inst_34774);
return statearr_34794;
})();var statearr_34795_34813 = state_34781__$1;(statearr_34795_34813[(2)] = null);
(statearr_34795_34813[(1)] = (2));
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
});})(c__5708__auto___34803,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___34803,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34799 = [null,null,null,null,null,null,null,null,null,null];(statearr_34799[(0)] = state_machine__5694__auto__);
(statearr_34799[(1)] = (1));
return statearr_34799;
});
var state_machine__5694__auto____1 = (function (state_34781){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34781);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object))
{var ex__5697__auto__ = e34800;var statearr_34801_34814 = state_34781;(statearr_34801_34814[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34800;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34815 = state_34781;
state_34781 = G__34815;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34781){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34803,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_34802 = f__5709__auto__.call(null);(statearr_34802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34803);
return statearr_34802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34803,tc,fc))
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
return (function (state_34862){var state_val_34863 = (state_34862[(1)]);if((state_val_34863 === (7)))
{var inst_34858 = (state_34862[(2)]);var state_34862__$1 = state_34862;var statearr_34864_34880 = state_34862__$1;(statearr_34864_34880[(2)] = inst_34858);
(statearr_34864_34880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34863 === (6)))
{var inst_34848 = (state_34862[(7)]);var inst_34851 = (state_34862[(8)]);var inst_34855 = f.call(null,inst_34848,inst_34851);var inst_34848__$1 = inst_34855;var state_34862__$1 = (function (){var statearr_34865 = state_34862;(statearr_34865[(7)] = inst_34848__$1);
return statearr_34865;
})();var statearr_34866_34881 = state_34862__$1;(statearr_34866_34881[(2)] = null);
(statearr_34866_34881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34863 === (5)))
{var inst_34848 = (state_34862[(7)]);var state_34862__$1 = state_34862;var statearr_34867_34882 = state_34862__$1;(statearr_34867_34882[(2)] = inst_34848);
(statearr_34867_34882[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34863 === (4)))
{var inst_34851 = (state_34862[(8)]);var inst_34851__$1 = (state_34862[(2)]);var inst_34852 = (inst_34851__$1 == null);var state_34862__$1 = (function (){var statearr_34868 = state_34862;(statearr_34868[(8)] = inst_34851__$1);
return statearr_34868;
})();if(cljs.core.truth_(inst_34852))
{var statearr_34869_34883 = state_34862__$1;(statearr_34869_34883[(1)] = (5));
} else
{var statearr_34870_34884 = state_34862__$1;(statearr_34870_34884[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34863 === (3)))
{var inst_34860 = (state_34862[(2)]);var state_34862__$1 = state_34862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34862__$1,inst_34860);
} else
{if((state_val_34863 === (2)))
{var state_34862__$1 = state_34862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34862__$1,(4),ch);
} else
{if((state_val_34863 === (1)))
{var inst_34848 = init;var state_34862__$1 = (function (){var statearr_34871 = state_34862;(statearr_34871[(7)] = inst_34848);
return statearr_34871;
})();var statearr_34872_34885 = state_34862__$1;(statearr_34872_34885[(2)] = null);
(statearr_34872_34885[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_34876 = [null,null,null,null,null,null,null,null,null];(statearr_34876[(0)] = state_machine__5694__auto__);
(statearr_34876[(1)] = (1));
return statearr_34876;
});
var state_machine__5694__auto____1 = (function (state_34862){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34862);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34877){if((e34877 instanceof Object))
{var ex__5697__auto__ = e34877;var statearr_34878_34886 = state_34862;(statearr_34878_34886[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34877;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34887 = state_34862;
state_34862 = G__34887;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34862){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34879 = f__5709__auto__.call(null);(statearr_34879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34879;
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
return (function (state_34949){var state_val_34950 = (state_34949[(1)]);if((state_val_34950 === (7)))
{var inst_34930 = (state_34949[(7)]);var inst_34935 = (state_34949[(2)]);var inst_34936 = cljs.core.next.call(null,inst_34930);var inst_34930__$1 = inst_34936;var state_34949__$1 = (function (){var statearr_34951 = state_34949;(statearr_34951[(7)] = inst_34930__$1);
(statearr_34951[(8)] = inst_34935);
return statearr_34951;
})();var statearr_34952_34970 = state_34949__$1;(statearr_34952_34970[(2)] = null);
(statearr_34952_34970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34950 === (1)))
{var inst_34929 = cljs.core.seq.call(null,coll);var inst_34930 = inst_34929;var state_34949__$1 = (function (){var statearr_34953 = state_34949;(statearr_34953[(7)] = inst_34930);
return statearr_34953;
})();var statearr_34954_34971 = state_34949__$1;(statearr_34954_34971[(2)] = null);
(statearr_34954_34971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34950 === (4)))
{var inst_34930 = (state_34949[(7)]);var inst_34933 = cljs.core.first.call(null,inst_34930);var state_34949__$1 = state_34949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34949__$1,(7),ch,inst_34933);
} else
{if((state_val_34950 === (6)))
{var inst_34945 = (state_34949[(2)]);var state_34949__$1 = state_34949;var statearr_34955_34972 = state_34949__$1;(statearr_34955_34972[(2)] = inst_34945);
(statearr_34955_34972[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34950 === (3)))
{var inst_34947 = (state_34949[(2)]);var state_34949__$1 = state_34949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34949__$1,inst_34947);
} else
{if((state_val_34950 === (2)))
{var inst_34930 = (state_34949[(7)]);var state_34949__$1 = state_34949;if(cljs.core.truth_(inst_34930))
{var statearr_34956_34973 = state_34949__$1;(statearr_34956_34973[(1)] = (4));
} else
{var statearr_34957_34974 = state_34949__$1;(statearr_34957_34974[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34950 === (9)))
{var state_34949__$1 = state_34949;var statearr_34958_34975 = state_34949__$1;(statearr_34958_34975[(2)] = null);
(statearr_34958_34975[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34950 === (5)))
{var state_34949__$1 = state_34949;if(cljs.core.truth_(close_QMARK_))
{var statearr_34959_34976 = state_34949__$1;(statearr_34959_34976[(1)] = (8));
} else
{var statearr_34960_34977 = state_34949__$1;(statearr_34960_34977[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34950 === (10)))
{var inst_34943 = (state_34949[(2)]);var state_34949__$1 = state_34949;var statearr_34961_34978 = state_34949__$1;(statearr_34961_34978[(2)] = inst_34943);
(statearr_34961_34978[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34950 === (8)))
{var inst_34940 = cljs.core.async.close_BANG_.call(null,ch);var state_34949__$1 = state_34949;var statearr_34962_34979 = state_34949__$1;(statearr_34962_34979[(2)] = inst_34940);
(statearr_34962_34979[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_34966 = [null,null,null,null,null,null,null,null,null];(statearr_34966[(0)] = state_machine__5694__auto__);
(statearr_34966[(1)] = (1));
return statearr_34966;
});
var state_machine__5694__auto____1 = (function (state_34949){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34949);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34967){if((e34967 instanceof Object))
{var ex__5697__auto__ = e34967;var statearr_34968_34980 = state_34949;(statearr_34968_34980[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34949);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34967;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34981 = state_34949;
state_34949 = G__34981;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34949){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34969 = f__5709__auto__.call(null);(statearr_34969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34969;
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
cljs.core.async.Mux = (function (){var obj34983 = {};return obj34983;
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
cljs.core.async.Mult = (function (){var obj34985 = {};return obj34985;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35209 = (function (cs,ch,mult,meta35210){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35210 = meta35210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35209.cljs$lang$type = true;
cljs.core.async.t35209.cljs$lang$ctorStr = "cljs.core.async/t35209";
cljs.core.async.t35209.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35209");
});})(cs))
;
cljs.core.async.t35209.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35209.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35209.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35209.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35209.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35211){var self__ = this;
var _35211__$1 = this;return self__.meta35210;
});})(cs))
;
cljs.core.async.t35209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35211,meta35210__$1){var self__ = this;
var _35211__$1 = this;return (new cljs.core.async.t35209(self__.cs,self__.ch,self__.mult,meta35210__$1));
});})(cs))
;
cljs.core.async.__GT_t35209 = ((function (cs){
return (function __GT_t35209(cs__$1,ch__$1,mult__$1,meta35210){return (new cljs.core.async.t35209(cs__$1,ch__$1,mult__$1,meta35210));
});})(cs))
;
}
return (new cljs.core.async.t35209(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___35432 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35432,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35432,cs,m,dchan,dctr,done){
return (function (state_35346){var state_val_35347 = (state_35346[(1)]);if((state_val_35347 === (7)))
{var inst_35342 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35348_35433 = state_35346__$1;(statearr_35348_35433[(2)] = inst_35342);
(statearr_35348_35433[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (20)))
{var inst_35243 = (state_35346[(7)]);var inst_35253 = cljs.core.first.call(null,inst_35243);var inst_35254 = cljs.core.nth.call(null,inst_35253,(0),null);var inst_35255 = cljs.core.nth.call(null,inst_35253,(1),null);var state_35346__$1 = (function (){var statearr_35349 = state_35346;(statearr_35349[(8)] = inst_35254);
return statearr_35349;
})();if(cljs.core.truth_(inst_35255))
{var statearr_35350_35434 = state_35346__$1;(statearr_35350_35434[(1)] = (22));
} else
{var statearr_35351_35435 = state_35346__$1;(statearr_35351_35435[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (27)))
{var inst_35285 = (state_35346[(9)]);var inst_35283 = (state_35346[(10)]);var inst_35290 = cljs.core._nth.call(null,inst_35283,inst_35285);var state_35346__$1 = (function (){var statearr_35352 = state_35346;(statearr_35352[(11)] = inst_35290);
return statearr_35352;
})();var statearr_35353_35436 = state_35346__$1;(statearr_35353_35436[(2)] = null);
(statearr_35353_35436[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (1)))
{var state_35346__$1 = state_35346;var statearr_35354_35437 = state_35346__$1;(statearr_35354_35437[(2)] = null);
(statearr_35354_35437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (24)))
{var inst_35243 = (state_35346[(7)]);var inst_35260 = (state_35346[(2)]);var inst_35261 = cljs.core.next.call(null,inst_35243);var inst_35223 = inst_35261;var inst_35224 = null;var inst_35225 = (0);var inst_35226 = (0);var state_35346__$1 = (function (){var statearr_35355 = state_35346;(statearr_35355[(12)] = inst_35224);
(statearr_35355[(13)] = inst_35260);
(statearr_35355[(14)] = inst_35225);
(statearr_35355[(15)] = inst_35226);
(statearr_35355[(16)] = inst_35223);
return statearr_35355;
})();var statearr_35356_35438 = state_35346__$1;(statearr_35356_35438[(2)] = null);
(statearr_35356_35438[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (39)))
{var inst_35303 = (state_35346[(17)]);var inst_35321 = (state_35346[(2)]);var inst_35322 = cljs.core.next.call(null,inst_35303);var inst_35282 = inst_35322;var inst_35283 = null;var inst_35284 = (0);var inst_35285 = (0);var state_35346__$1 = (function (){var statearr_35360 = state_35346;(statearr_35360[(18)] = inst_35282);
(statearr_35360[(19)] = inst_35284);
(statearr_35360[(9)] = inst_35285);
(statearr_35360[(20)] = inst_35321);
(statearr_35360[(10)] = inst_35283);
return statearr_35360;
})();var statearr_35361_35439 = state_35346__$1;(statearr_35361_35439[(2)] = null);
(statearr_35361_35439[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (4)))
{var inst_35214 = (state_35346[(21)]);var inst_35214__$1 = (state_35346[(2)]);var inst_35215 = (inst_35214__$1 == null);var state_35346__$1 = (function (){var statearr_35362 = state_35346;(statearr_35362[(21)] = inst_35214__$1);
return statearr_35362;
})();if(cljs.core.truth_(inst_35215))
{var statearr_35363_35440 = state_35346__$1;(statearr_35363_35440[(1)] = (5));
} else
{var statearr_35364_35441 = state_35346__$1;(statearr_35364_35441[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (15)))
{var inst_35224 = (state_35346[(12)]);var inst_35225 = (state_35346[(14)]);var inst_35226 = (state_35346[(15)]);var inst_35223 = (state_35346[(16)]);var inst_35239 = (state_35346[(2)]);var inst_35240 = (inst_35226 + (1));var tmp35357 = inst_35224;var tmp35358 = inst_35225;var tmp35359 = inst_35223;var inst_35223__$1 = tmp35359;var inst_35224__$1 = tmp35357;var inst_35225__$1 = tmp35358;var inst_35226__$1 = inst_35240;var state_35346__$1 = (function (){var statearr_35365 = state_35346;(statearr_35365[(22)] = inst_35239);
(statearr_35365[(12)] = inst_35224__$1);
(statearr_35365[(14)] = inst_35225__$1);
(statearr_35365[(15)] = inst_35226__$1);
(statearr_35365[(16)] = inst_35223__$1);
return statearr_35365;
})();var statearr_35366_35442 = state_35346__$1;(statearr_35366_35442[(2)] = null);
(statearr_35366_35442[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (21)))
{var inst_35264 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35367_35443 = state_35346__$1;(statearr_35367_35443[(2)] = inst_35264);
(statearr_35367_35443[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (31)))
{var inst_35290 = (state_35346[(11)]);var inst_35291 = (state_35346[(2)]);var inst_35292 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35293 = cljs.core.async.untap_STAR_.call(null,m,inst_35290);var state_35346__$1 = (function (){var statearr_35368 = state_35346;(statearr_35368[(23)] = inst_35292);
(statearr_35368[(24)] = inst_35291);
return statearr_35368;
})();var statearr_35369_35444 = state_35346__$1;(statearr_35369_35444[(2)] = inst_35293);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35346__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (32)))
{var inst_35290 = (state_35346[(11)]);var inst_35214 = (state_35346[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35346,(31),Object,null,(30));var inst_35297 = cljs.core.async.put_BANG_.call(null,inst_35290,inst_35214,done);var state_35346__$1 = state_35346;var statearr_35370_35445 = state_35346__$1;(statearr_35370_35445[(2)] = inst_35297);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35346__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (40)))
{var inst_35312 = (state_35346[(25)]);var inst_35313 = (state_35346[(2)]);var inst_35314 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35315 = cljs.core.async.untap_STAR_.call(null,m,inst_35312);var state_35346__$1 = (function (){var statearr_35371 = state_35346;(statearr_35371[(26)] = inst_35313);
(statearr_35371[(27)] = inst_35314);
return statearr_35371;
})();var statearr_35372_35446 = state_35346__$1;(statearr_35372_35446[(2)] = inst_35315);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35346__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (33)))
{var inst_35303 = (state_35346[(17)]);var inst_35305 = cljs.core.chunked_seq_QMARK_.call(null,inst_35303);var state_35346__$1 = state_35346;if(inst_35305)
{var statearr_35373_35447 = state_35346__$1;(statearr_35373_35447[(1)] = (36));
} else
{var statearr_35374_35448 = state_35346__$1;(statearr_35374_35448[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (13)))
{var inst_35233 = (state_35346[(28)]);var inst_35236 = cljs.core.async.close_BANG_.call(null,inst_35233);var state_35346__$1 = state_35346;var statearr_35375_35449 = state_35346__$1;(statearr_35375_35449[(2)] = inst_35236);
(statearr_35375_35449[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (22)))
{var inst_35254 = (state_35346[(8)]);var inst_35257 = cljs.core.async.close_BANG_.call(null,inst_35254);var state_35346__$1 = state_35346;var statearr_35376_35450 = state_35346__$1;(statearr_35376_35450[(2)] = inst_35257);
(statearr_35376_35450[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (36)))
{var inst_35303 = (state_35346[(17)]);var inst_35307 = cljs.core.chunk_first.call(null,inst_35303);var inst_35308 = cljs.core.chunk_rest.call(null,inst_35303);var inst_35309 = cljs.core.count.call(null,inst_35307);var inst_35282 = inst_35308;var inst_35283 = inst_35307;var inst_35284 = inst_35309;var inst_35285 = (0);var state_35346__$1 = (function (){var statearr_35377 = state_35346;(statearr_35377[(18)] = inst_35282);
(statearr_35377[(19)] = inst_35284);
(statearr_35377[(9)] = inst_35285);
(statearr_35377[(10)] = inst_35283);
return statearr_35377;
})();var statearr_35378_35451 = state_35346__$1;(statearr_35378_35451[(2)] = null);
(statearr_35378_35451[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (41)))
{var inst_35312 = (state_35346[(25)]);var inst_35214 = (state_35346[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35346,(40),Object,null,(39));var inst_35319 = cljs.core.async.put_BANG_.call(null,inst_35312,inst_35214,done);var state_35346__$1 = state_35346;var statearr_35379_35452 = state_35346__$1;(statearr_35379_35452[(2)] = inst_35319);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35346__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (43)))
{var state_35346__$1 = state_35346;var statearr_35380_35453 = state_35346__$1;(statearr_35380_35453[(2)] = null);
(statearr_35380_35453[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (29)))
{var inst_35330 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35381_35454 = state_35346__$1;(statearr_35381_35454[(2)] = inst_35330);
(statearr_35381_35454[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (44)))
{var inst_35339 = (state_35346[(2)]);var state_35346__$1 = (function (){var statearr_35382 = state_35346;(statearr_35382[(29)] = inst_35339);
return statearr_35382;
})();var statearr_35383_35455 = state_35346__$1;(statearr_35383_35455[(2)] = null);
(statearr_35383_35455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (6)))
{var inst_35274 = (state_35346[(30)]);var inst_35273 = cljs.core.deref.call(null,cs);var inst_35274__$1 = cljs.core.keys.call(null,inst_35273);var inst_35275 = cljs.core.count.call(null,inst_35274__$1);var inst_35276 = cljs.core.reset_BANG_.call(null,dctr,inst_35275);var inst_35281 = cljs.core.seq.call(null,inst_35274__$1);var inst_35282 = inst_35281;var inst_35283 = null;var inst_35284 = (0);var inst_35285 = (0);var state_35346__$1 = (function (){var statearr_35384 = state_35346;(statearr_35384[(18)] = inst_35282);
(statearr_35384[(19)] = inst_35284);
(statearr_35384[(9)] = inst_35285);
(statearr_35384[(30)] = inst_35274__$1);
(statearr_35384[(31)] = inst_35276);
(statearr_35384[(10)] = inst_35283);
return statearr_35384;
})();var statearr_35385_35456 = state_35346__$1;(statearr_35385_35456[(2)] = null);
(statearr_35385_35456[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (28)))
{var inst_35282 = (state_35346[(18)]);var inst_35303 = (state_35346[(17)]);var inst_35303__$1 = cljs.core.seq.call(null,inst_35282);var state_35346__$1 = (function (){var statearr_35386 = state_35346;(statearr_35386[(17)] = inst_35303__$1);
return statearr_35386;
})();if(inst_35303__$1)
{var statearr_35387_35457 = state_35346__$1;(statearr_35387_35457[(1)] = (33));
} else
{var statearr_35388_35458 = state_35346__$1;(statearr_35388_35458[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (25)))
{var inst_35284 = (state_35346[(19)]);var inst_35285 = (state_35346[(9)]);var inst_35287 = (inst_35285 < inst_35284);var inst_35288 = inst_35287;var state_35346__$1 = state_35346;if(cljs.core.truth_(inst_35288))
{var statearr_35389_35459 = state_35346__$1;(statearr_35389_35459[(1)] = (27));
} else
{var statearr_35390_35460 = state_35346__$1;(statearr_35390_35460[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (34)))
{var state_35346__$1 = state_35346;var statearr_35391_35461 = state_35346__$1;(statearr_35391_35461[(2)] = null);
(statearr_35391_35461[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (17)))
{var state_35346__$1 = state_35346;var statearr_35392_35462 = state_35346__$1;(statearr_35392_35462[(2)] = null);
(statearr_35392_35462[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (3)))
{var inst_35344 = (state_35346[(2)]);var state_35346__$1 = state_35346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35346__$1,inst_35344);
} else
{if((state_val_35347 === (12)))
{var inst_35269 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35393_35463 = state_35346__$1;(statearr_35393_35463[(2)] = inst_35269);
(statearr_35393_35463[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (2)))
{var state_35346__$1 = state_35346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35346__$1,(4),ch);
} else
{if((state_val_35347 === (23)))
{var state_35346__$1 = state_35346;var statearr_35394_35464 = state_35346__$1;(statearr_35394_35464[(2)] = null);
(statearr_35394_35464[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (35)))
{var inst_35328 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35395_35465 = state_35346__$1;(statearr_35395_35465[(2)] = inst_35328);
(statearr_35395_35465[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (19)))
{var inst_35243 = (state_35346[(7)]);var inst_35247 = cljs.core.chunk_first.call(null,inst_35243);var inst_35248 = cljs.core.chunk_rest.call(null,inst_35243);var inst_35249 = cljs.core.count.call(null,inst_35247);var inst_35223 = inst_35248;var inst_35224 = inst_35247;var inst_35225 = inst_35249;var inst_35226 = (0);var state_35346__$1 = (function (){var statearr_35396 = state_35346;(statearr_35396[(12)] = inst_35224);
(statearr_35396[(14)] = inst_35225);
(statearr_35396[(15)] = inst_35226);
(statearr_35396[(16)] = inst_35223);
return statearr_35396;
})();var statearr_35397_35466 = state_35346__$1;(statearr_35397_35466[(2)] = null);
(statearr_35397_35466[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (11)))
{var inst_35243 = (state_35346[(7)]);var inst_35223 = (state_35346[(16)]);var inst_35243__$1 = cljs.core.seq.call(null,inst_35223);var state_35346__$1 = (function (){var statearr_35398 = state_35346;(statearr_35398[(7)] = inst_35243__$1);
return statearr_35398;
})();if(inst_35243__$1)
{var statearr_35399_35467 = state_35346__$1;(statearr_35399_35467[(1)] = (16));
} else
{var statearr_35400_35468 = state_35346__$1;(statearr_35400_35468[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (9)))
{var inst_35271 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35401_35469 = state_35346__$1;(statearr_35401_35469[(2)] = inst_35271);
(statearr_35401_35469[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (5)))
{var inst_35221 = cljs.core.deref.call(null,cs);var inst_35222 = cljs.core.seq.call(null,inst_35221);var inst_35223 = inst_35222;var inst_35224 = null;var inst_35225 = (0);var inst_35226 = (0);var state_35346__$1 = (function (){var statearr_35402 = state_35346;(statearr_35402[(12)] = inst_35224);
(statearr_35402[(14)] = inst_35225);
(statearr_35402[(15)] = inst_35226);
(statearr_35402[(16)] = inst_35223);
return statearr_35402;
})();var statearr_35403_35470 = state_35346__$1;(statearr_35403_35470[(2)] = null);
(statearr_35403_35470[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (14)))
{var state_35346__$1 = state_35346;var statearr_35404_35471 = state_35346__$1;(statearr_35404_35471[(2)] = null);
(statearr_35404_35471[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (45)))
{var inst_35336 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35405_35472 = state_35346__$1;(statearr_35405_35472[(2)] = inst_35336);
(statearr_35405_35472[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (26)))
{var inst_35274 = (state_35346[(30)]);var inst_35332 = (state_35346[(2)]);var inst_35333 = cljs.core.seq.call(null,inst_35274);var state_35346__$1 = (function (){var statearr_35406 = state_35346;(statearr_35406[(32)] = inst_35332);
return statearr_35406;
})();if(inst_35333)
{var statearr_35407_35473 = state_35346__$1;(statearr_35407_35473[(1)] = (42));
} else
{var statearr_35408_35474 = state_35346__$1;(statearr_35408_35474[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (16)))
{var inst_35243 = (state_35346[(7)]);var inst_35245 = cljs.core.chunked_seq_QMARK_.call(null,inst_35243);var state_35346__$1 = state_35346;if(inst_35245)
{var statearr_35412_35475 = state_35346__$1;(statearr_35412_35475[(1)] = (19));
} else
{var statearr_35413_35476 = state_35346__$1;(statearr_35413_35476[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (38)))
{var inst_35325 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35414_35477 = state_35346__$1;(statearr_35414_35477[(2)] = inst_35325);
(statearr_35414_35477[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (30)))
{var inst_35282 = (state_35346[(18)]);var inst_35284 = (state_35346[(19)]);var inst_35285 = (state_35346[(9)]);var inst_35283 = (state_35346[(10)]);var inst_35299 = (state_35346[(2)]);var inst_35300 = (inst_35285 + (1));var tmp35409 = inst_35282;var tmp35410 = inst_35284;var tmp35411 = inst_35283;var inst_35282__$1 = tmp35409;var inst_35283__$1 = tmp35411;var inst_35284__$1 = tmp35410;var inst_35285__$1 = inst_35300;var state_35346__$1 = (function (){var statearr_35415 = state_35346;(statearr_35415[(18)] = inst_35282__$1);
(statearr_35415[(19)] = inst_35284__$1);
(statearr_35415[(9)] = inst_35285__$1);
(statearr_35415[(33)] = inst_35299);
(statearr_35415[(10)] = inst_35283__$1);
return statearr_35415;
})();var statearr_35416_35478 = state_35346__$1;(statearr_35416_35478[(2)] = null);
(statearr_35416_35478[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (10)))
{var inst_35224 = (state_35346[(12)]);var inst_35226 = (state_35346[(15)]);var inst_35232 = cljs.core._nth.call(null,inst_35224,inst_35226);var inst_35233 = cljs.core.nth.call(null,inst_35232,(0),null);var inst_35234 = cljs.core.nth.call(null,inst_35232,(1),null);var state_35346__$1 = (function (){var statearr_35417 = state_35346;(statearr_35417[(28)] = inst_35233);
return statearr_35417;
})();if(cljs.core.truth_(inst_35234))
{var statearr_35418_35479 = state_35346__$1;(statearr_35418_35479[(1)] = (13));
} else
{var statearr_35419_35480 = state_35346__$1;(statearr_35419_35480[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (18)))
{var inst_35267 = (state_35346[(2)]);var state_35346__$1 = state_35346;var statearr_35420_35481 = state_35346__$1;(statearr_35420_35481[(2)] = inst_35267);
(statearr_35420_35481[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (42)))
{var state_35346__$1 = state_35346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35346__$1,(45),dchan);
} else
{if((state_val_35347 === (37)))
{var inst_35303 = (state_35346[(17)]);var inst_35312 = cljs.core.first.call(null,inst_35303);var state_35346__$1 = (function (){var statearr_35421 = state_35346;(statearr_35421[(25)] = inst_35312);
return statearr_35421;
})();var statearr_35422_35482 = state_35346__$1;(statearr_35422_35482[(2)] = null);
(statearr_35422_35482[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35347 === (8)))
{var inst_35225 = (state_35346[(14)]);var inst_35226 = (state_35346[(15)]);var inst_35228 = (inst_35226 < inst_35225);var inst_35229 = inst_35228;var state_35346__$1 = state_35346;if(cljs.core.truth_(inst_35229))
{var statearr_35423_35483 = state_35346__$1;(statearr_35423_35483[(1)] = (10));
} else
{var statearr_35424_35484 = state_35346__$1;(statearr_35424_35484[(1)] = (11));
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
});})(c__5708__auto___35432,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___35432,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35428[(0)] = state_machine__5694__auto__);
(statearr_35428[(1)] = (1));
return statearr_35428;
});
var state_machine__5694__auto____1 = (function (state_35346){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35346);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35429){if((e35429 instanceof Object))
{var ex__5697__auto__ = e35429;var statearr_35430_35485 = state_35346;(statearr_35430_35485[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35429;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35486 = state_35346;
state_35346 = G__35486;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35346){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35432,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_35431 = f__5709__auto__.call(null);(statearr_35431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35432);
return statearr_35431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35432,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj35488 = {};return obj35488;
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
;var m = (function (){if(typeof cljs.core.async.t35598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35598 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35599){
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
this.meta35599 = meta35599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35598.cljs$lang$type = true;
cljs.core.async.t35598.cljs$lang$ctorStr = "cljs.core.async/t35598";
cljs.core.async.t35598.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35598");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35598.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35600){var self__ = this;
var _35600__$1 = this;return self__.meta35599;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35600,meta35599__$1){var self__ = this;
var _35600__$1 = this;return (new cljs.core.async.t35598(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35599__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35598 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35598(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35599){return (new cljs.core.async.t35598(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35599));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35598(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___35707 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35665){var state_val_35666 = (state_35665[(1)]);if((state_val_35666 === (7)))
{var inst_35614 = (state_35665[(7)]);var inst_35619 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35614);var state_35665__$1 = state_35665;var statearr_35667_35708 = state_35665__$1;(statearr_35667_35708[(2)] = inst_35619);
(statearr_35667_35708[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (20)))
{var inst_35629 = (state_35665[(8)]);var state_35665__$1 = state_35665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35665__$1,(23),out,inst_35629);
} else
{if((state_val_35666 === (1)))
{var inst_35604 = (state_35665[(9)]);var inst_35604__$1 = calc_state.call(null);var inst_35605 = cljs.core.seq_QMARK_.call(null,inst_35604__$1);var state_35665__$1 = (function (){var statearr_35668 = state_35665;(statearr_35668[(9)] = inst_35604__$1);
return statearr_35668;
})();if(inst_35605)
{var statearr_35669_35709 = state_35665__$1;(statearr_35669_35709[(1)] = (2));
} else
{var statearr_35670_35710 = state_35665__$1;(statearr_35670_35710[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (4)))
{var inst_35604 = (state_35665[(9)]);var inst_35610 = (state_35665[(2)]);var inst_35611 = cljs.core.get.call(null,inst_35610,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35612 = cljs.core.get.call(null,inst_35610,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35613 = cljs.core.get.call(null,inst_35610,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_35614 = inst_35604;var state_35665__$1 = (function (){var statearr_35671 = state_35665;(statearr_35671[(10)] = inst_35613);
(statearr_35671[(11)] = inst_35612);
(statearr_35671[(7)] = inst_35614);
(statearr_35671[(12)] = inst_35611);
return statearr_35671;
})();var statearr_35672_35711 = state_35665__$1;(statearr_35672_35711[(2)] = null);
(statearr_35672_35711[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (15)))
{var state_35665__$1 = state_35665;var statearr_35673_35712 = state_35665__$1;(statearr_35673_35712[(2)] = null);
(statearr_35673_35712[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (21)))
{var state_35665__$1 = state_35665;var statearr_35674_35713 = state_35665__$1;(statearr_35674_35713[(2)] = null);
(statearr_35674_35713[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (13)))
{var inst_35661 = (state_35665[(2)]);var state_35665__$1 = state_35665;var statearr_35675_35714 = state_35665__$1;(statearr_35675_35714[(2)] = inst_35661);
(statearr_35675_35714[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (22)))
{var inst_35622 = (state_35665[(13)]);var inst_35658 = (state_35665[(2)]);var inst_35614 = inst_35622;var state_35665__$1 = (function (){var statearr_35676 = state_35665;(statearr_35676[(7)] = inst_35614);
(statearr_35676[(14)] = inst_35658);
return statearr_35676;
})();var statearr_35677_35715 = state_35665__$1;(statearr_35677_35715[(2)] = null);
(statearr_35677_35715[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (6)))
{var inst_35663 = (state_35665[(2)]);var state_35665__$1 = state_35665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35665__$1,inst_35663);
} else
{if((state_val_35666 === (17)))
{var inst_35644 = (state_35665[(15)]);var state_35665__$1 = state_35665;var statearr_35678_35716 = state_35665__$1;(statearr_35678_35716[(2)] = inst_35644);
(statearr_35678_35716[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (3)))
{var inst_35604 = (state_35665[(9)]);var state_35665__$1 = state_35665;var statearr_35679_35717 = state_35665__$1;(statearr_35679_35717[(2)] = inst_35604);
(statearr_35679_35717[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (12)))
{var inst_35625 = (state_35665[(16)]);var inst_35644 = (state_35665[(15)]);var inst_35630 = (state_35665[(17)]);var inst_35644__$1 = inst_35625.call(null,inst_35630);var state_35665__$1 = (function (){var statearr_35680 = state_35665;(statearr_35680[(15)] = inst_35644__$1);
return statearr_35680;
})();if(cljs.core.truth_(inst_35644__$1))
{var statearr_35681_35718 = state_35665__$1;(statearr_35681_35718[(1)] = (17));
} else
{var statearr_35682_35719 = state_35665__$1;(statearr_35682_35719[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (2)))
{var inst_35604 = (state_35665[(9)]);var inst_35607 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35604);var state_35665__$1 = state_35665;var statearr_35683_35720 = state_35665__$1;(statearr_35683_35720[(2)] = inst_35607);
(statearr_35683_35720[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (23)))
{var inst_35655 = (state_35665[(2)]);var state_35665__$1 = state_35665;var statearr_35684_35721 = state_35665__$1;(statearr_35684_35721[(2)] = inst_35655);
(statearr_35684_35721[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (19)))
{var inst_35652 = (state_35665[(2)]);var state_35665__$1 = state_35665;if(cljs.core.truth_(inst_35652))
{var statearr_35685_35722 = state_35665__$1;(statearr_35685_35722[(1)] = (20));
} else
{var statearr_35686_35723 = state_35665__$1;(statearr_35686_35723[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (11)))
{var inst_35629 = (state_35665[(8)]);var inst_35635 = (inst_35629 == null);var state_35665__$1 = state_35665;if(cljs.core.truth_(inst_35635))
{var statearr_35687_35724 = state_35665__$1;(statearr_35687_35724[(1)] = (14));
} else
{var statearr_35688_35725 = state_35665__$1;(statearr_35688_35725[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (9)))
{var inst_35622 = (state_35665[(13)]);var inst_35622__$1 = (state_35665[(2)]);var inst_35623 = cljs.core.get.call(null,inst_35622__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35624 = cljs.core.get.call(null,inst_35622__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35625 = cljs.core.get.call(null,inst_35622__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_35665__$1 = (function (){var statearr_35689 = state_35665;(statearr_35689[(16)] = inst_35625);
(statearr_35689[(18)] = inst_35624);
(statearr_35689[(13)] = inst_35622__$1);
return statearr_35689;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35665__$1,(10),inst_35623);
} else
{if((state_val_35666 === (5)))
{var inst_35614 = (state_35665[(7)]);var inst_35617 = cljs.core.seq_QMARK_.call(null,inst_35614);var state_35665__$1 = state_35665;if(inst_35617)
{var statearr_35690_35726 = state_35665__$1;(statearr_35690_35726[(1)] = (7));
} else
{var statearr_35691_35727 = state_35665__$1;(statearr_35691_35727[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (14)))
{var inst_35630 = (state_35665[(17)]);var inst_35637 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35630);var state_35665__$1 = state_35665;var statearr_35692_35728 = state_35665__$1;(statearr_35692_35728[(2)] = inst_35637);
(statearr_35692_35728[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (16)))
{var inst_35640 = (state_35665[(2)]);var inst_35641 = calc_state.call(null);var inst_35614 = inst_35641;var state_35665__$1 = (function (){var statearr_35693 = state_35665;(statearr_35693[(19)] = inst_35640);
(statearr_35693[(7)] = inst_35614);
return statearr_35693;
})();var statearr_35694_35729 = state_35665__$1;(statearr_35694_35729[(2)] = null);
(statearr_35694_35729[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (10)))
{var inst_35629 = (state_35665[(8)]);var inst_35630 = (state_35665[(17)]);var inst_35628 = (state_35665[(2)]);var inst_35629__$1 = cljs.core.nth.call(null,inst_35628,(0),null);var inst_35630__$1 = cljs.core.nth.call(null,inst_35628,(1),null);var inst_35631 = (inst_35629__$1 == null);var inst_35632 = cljs.core._EQ_.call(null,inst_35630__$1,change);var inst_35633 = (inst_35631) || (inst_35632);var state_35665__$1 = (function (){var statearr_35695 = state_35665;(statearr_35695[(8)] = inst_35629__$1);
(statearr_35695[(17)] = inst_35630__$1);
return statearr_35695;
})();if(cljs.core.truth_(inst_35633))
{var statearr_35696_35730 = state_35665__$1;(statearr_35696_35730[(1)] = (11));
} else
{var statearr_35697_35731 = state_35665__$1;(statearr_35697_35731[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (18)))
{var inst_35625 = (state_35665[(16)]);var inst_35630 = (state_35665[(17)]);var inst_35624 = (state_35665[(18)]);var inst_35647 = cljs.core.empty_QMARK_.call(null,inst_35625);var inst_35648 = inst_35624.call(null,inst_35630);var inst_35649 = cljs.core.not.call(null,inst_35648);var inst_35650 = (inst_35647) && (inst_35649);var state_35665__$1 = state_35665;var statearr_35698_35732 = state_35665__$1;(statearr_35698_35732[(2)] = inst_35650);
(statearr_35698_35732[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35666 === (8)))
{var inst_35614 = (state_35665[(7)]);var state_35665__$1 = state_35665;var statearr_35699_35733 = state_35665__$1;(statearr_35699_35733[(2)] = inst_35614);
(statearr_35699_35733[(1)] = (9));
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
});})(c__5708__auto___35707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___35707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35703[(0)] = state_machine__5694__auto__);
(statearr_35703[(1)] = (1));
return statearr_35703;
});
var state_machine__5694__auto____1 = (function (state_35665){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35665);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35704){if((e35704 instanceof Object))
{var ex__5697__auto__ = e35704;var statearr_35705_35734 = state_35665;(statearr_35705_35734[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35704;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35735 = state_35665;
state_35665 = G__35735;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35665){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_35706 = f__5709__auto__.call(null);(statearr_35706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35707);
return statearr_35706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj35737 = {};return obj35737;
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
return (function (p1__35738_SHARP_){if(cljs.core.truth_(p1__35738_SHARP_.call(null,topic)))
{return p1__35738_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35738_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35863 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35864){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35864 = meta35864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35863.cljs$lang$type = true;
cljs.core.async.t35863.cljs$lang$ctorStr = "cljs.core.async/t35863";
cljs.core.async.t35863.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35863");
});})(mults,ensure_mult))
;
cljs.core.async.t35863.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35863.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35863.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35863.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35865){var self__ = this;
var _35865__$1 = this;return self__.meta35864;
});})(mults,ensure_mult))
;
cljs.core.async.t35863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35865,meta35864__$1){var self__ = this;
var _35865__$1 = this;return (new cljs.core.async.t35863(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35864__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35863 = ((function (mults,ensure_mult){
return (function __GT_t35863(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35864){return (new cljs.core.async.t35863(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35864));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35863(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___35987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35987,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35987,mults,ensure_mult,p){
return (function (state_35939){var state_val_35940 = (state_35939[(1)]);if((state_val_35940 === (7)))
{var inst_35935 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35941_35988 = state_35939__$1;(statearr_35941_35988[(2)] = inst_35935);
(statearr_35941_35988[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (20)))
{var state_35939__$1 = state_35939;var statearr_35942_35989 = state_35939__$1;(statearr_35942_35989[(2)] = null);
(statearr_35942_35989[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (1)))
{var state_35939__$1 = state_35939;var statearr_35943_35990 = state_35939__$1;(statearr_35943_35990[(2)] = null);
(statearr_35943_35990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (24)))
{var inst_35918 = (state_35939[(7)]);var inst_35868 = (state_35939[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35939,(23),Object,null,(22));var inst_35925 = cljs.core.async.muxch_STAR_.call(null,inst_35918);var state_35939__$1 = state_35939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35939__$1,(25),inst_35925,inst_35868);
} else
{if((state_val_35940 === (4)))
{var inst_35868 = (state_35939[(8)]);var inst_35868__$1 = (state_35939[(2)]);var inst_35869 = (inst_35868__$1 == null);var state_35939__$1 = (function (){var statearr_35944 = state_35939;(statearr_35944[(8)] = inst_35868__$1);
return statearr_35944;
})();if(cljs.core.truth_(inst_35869))
{var statearr_35945_35991 = state_35939__$1;(statearr_35945_35991[(1)] = (5));
} else
{var statearr_35946_35992 = state_35939__$1;(statearr_35946_35992[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (15)))
{var inst_35910 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35947_35993 = state_35939__$1;(statearr_35947_35993[(2)] = inst_35910);
(statearr_35947_35993[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (21)))
{var inst_35932 = (state_35939[(2)]);var state_35939__$1 = (function (){var statearr_35948 = state_35939;(statearr_35948[(9)] = inst_35932);
return statearr_35948;
})();var statearr_35949_35994 = state_35939__$1;(statearr_35949_35994[(2)] = null);
(statearr_35949_35994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (13)))
{var inst_35892 = (state_35939[(10)]);var inst_35894 = cljs.core.chunked_seq_QMARK_.call(null,inst_35892);var state_35939__$1 = state_35939;if(inst_35894)
{var statearr_35950_35995 = state_35939__$1;(statearr_35950_35995[(1)] = (16));
} else
{var statearr_35951_35996 = state_35939__$1;(statearr_35951_35996[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (22)))
{var inst_35929 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35952_35997 = state_35939__$1;(statearr_35952_35997[(2)] = inst_35929);
(statearr_35952_35997[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (6)))
{var inst_35916 = (state_35939[(11)]);var inst_35918 = (state_35939[(7)]);var inst_35868 = (state_35939[(8)]);var inst_35916__$1 = topic_fn.call(null,inst_35868);var inst_35917 = cljs.core.deref.call(null,mults);var inst_35918__$1 = cljs.core.get.call(null,inst_35917,inst_35916__$1);var state_35939__$1 = (function (){var statearr_35953 = state_35939;(statearr_35953[(11)] = inst_35916__$1);
(statearr_35953[(7)] = inst_35918__$1);
return statearr_35953;
})();if(cljs.core.truth_(inst_35918__$1))
{var statearr_35954_35998 = state_35939__$1;(statearr_35954_35998[(1)] = (19));
} else
{var statearr_35955_35999 = state_35939__$1;(statearr_35955_35999[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (25)))
{var inst_35927 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35956_36000 = state_35939__$1;(statearr_35956_36000[(2)] = inst_35927);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (17)))
{var inst_35892 = (state_35939[(10)]);var inst_35901 = cljs.core.first.call(null,inst_35892);var inst_35902 = cljs.core.async.muxch_STAR_.call(null,inst_35901);var inst_35903 = cljs.core.async.close_BANG_.call(null,inst_35902);var inst_35904 = cljs.core.next.call(null,inst_35892);var inst_35878 = inst_35904;var inst_35879 = null;var inst_35880 = (0);var inst_35881 = (0);var state_35939__$1 = (function (){var statearr_35957 = state_35939;(statearr_35957[(12)] = inst_35879);
(statearr_35957[(13)] = inst_35881);
(statearr_35957[(14)] = inst_35903);
(statearr_35957[(15)] = inst_35880);
(statearr_35957[(16)] = inst_35878);
return statearr_35957;
})();var statearr_35958_36001 = state_35939__$1;(statearr_35958_36001[(2)] = null);
(statearr_35958_36001[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (3)))
{var inst_35937 = (state_35939[(2)]);var state_35939__$1 = state_35939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35939__$1,inst_35937);
} else
{if((state_val_35940 === (12)))
{var inst_35912 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35959_36002 = state_35939__$1;(statearr_35959_36002[(2)] = inst_35912);
(statearr_35959_36002[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (2)))
{var state_35939__$1 = state_35939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35939__$1,(4),ch);
} else
{if((state_val_35940 === (23)))
{var inst_35916 = (state_35939[(11)]);var inst_35920 = (state_35939[(2)]);var inst_35921 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35916);var state_35939__$1 = (function (){var statearr_35960 = state_35939;(statearr_35960[(17)] = inst_35920);
return statearr_35960;
})();var statearr_35961_36003 = state_35939__$1;(statearr_35961_36003[(2)] = inst_35921);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (19)))
{var state_35939__$1 = state_35939;var statearr_35962_36004 = state_35939__$1;(statearr_35962_36004[(2)] = null);
(statearr_35962_36004[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (11)))
{var inst_35892 = (state_35939[(10)]);var inst_35878 = (state_35939[(16)]);var inst_35892__$1 = cljs.core.seq.call(null,inst_35878);var state_35939__$1 = (function (){var statearr_35963 = state_35939;(statearr_35963[(10)] = inst_35892__$1);
return statearr_35963;
})();if(inst_35892__$1)
{var statearr_35964_36005 = state_35939__$1;(statearr_35964_36005[(1)] = (13));
} else
{var statearr_35965_36006 = state_35939__$1;(statearr_35965_36006[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (9)))
{var inst_35914 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35966_36007 = state_35939__$1;(statearr_35966_36007[(2)] = inst_35914);
(statearr_35966_36007[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (5)))
{var inst_35875 = cljs.core.deref.call(null,mults);var inst_35876 = cljs.core.vals.call(null,inst_35875);var inst_35877 = cljs.core.seq.call(null,inst_35876);var inst_35878 = inst_35877;var inst_35879 = null;var inst_35880 = (0);var inst_35881 = (0);var state_35939__$1 = (function (){var statearr_35967 = state_35939;(statearr_35967[(12)] = inst_35879);
(statearr_35967[(13)] = inst_35881);
(statearr_35967[(15)] = inst_35880);
(statearr_35967[(16)] = inst_35878);
return statearr_35967;
})();var statearr_35968_36008 = state_35939__$1;(statearr_35968_36008[(2)] = null);
(statearr_35968_36008[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (14)))
{var state_35939__$1 = state_35939;var statearr_35972_36009 = state_35939__$1;(statearr_35972_36009[(2)] = null);
(statearr_35972_36009[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (16)))
{var inst_35892 = (state_35939[(10)]);var inst_35896 = cljs.core.chunk_first.call(null,inst_35892);var inst_35897 = cljs.core.chunk_rest.call(null,inst_35892);var inst_35898 = cljs.core.count.call(null,inst_35896);var inst_35878 = inst_35897;var inst_35879 = inst_35896;var inst_35880 = inst_35898;var inst_35881 = (0);var state_35939__$1 = (function (){var statearr_35973 = state_35939;(statearr_35973[(12)] = inst_35879);
(statearr_35973[(13)] = inst_35881);
(statearr_35973[(15)] = inst_35880);
(statearr_35973[(16)] = inst_35878);
return statearr_35973;
})();var statearr_35974_36010 = state_35939__$1;(statearr_35974_36010[(2)] = null);
(statearr_35974_36010[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (10)))
{var inst_35879 = (state_35939[(12)]);var inst_35881 = (state_35939[(13)]);var inst_35880 = (state_35939[(15)]);var inst_35878 = (state_35939[(16)]);var inst_35886 = cljs.core._nth.call(null,inst_35879,inst_35881);var inst_35887 = cljs.core.async.muxch_STAR_.call(null,inst_35886);var inst_35888 = cljs.core.async.close_BANG_.call(null,inst_35887);var inst_35889 = (inst_35881 + (1));var tmp35969 = inst_35879;var tmp35970 = inst_35880;var tmp35971 = inst_35878;var inst_35878__$1 = tmp35971;var inst_35879__$1 = tmp35969;var inst_35880__$1 = tmp35970;var inst_35881__$1 = inst_35889;var state_35939__$1 = (function (){var statearr_35975 = state_35939;(statearr_35975[(18)] = inst_35888);
(statearr_35975[(12)] = inst_35879__$1);
(statearr_35975[(13)] = inst_35881__$1);
(statearr_35975[(15)] = inst_35880__$1);
(statearr_35975[(16)] = inst_35878__$1);
return statearr_35975;
})();var statearr_35976_36011 = state_35939__$1;(statearr_35976_36011[(2)] = null);
(statearr_35976_36011[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (18)))
{var inst_35907 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35977_36012 = state_35939__$1;(statearr_35977_36012[(2)] = inst_35907);
(statearr_35977_36012[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (8)))
{var inst_35881 = (state_35939[(13)]);var inst_35880 = (state_35939[(15)]);var inst_35883 = (inst_35881 < inst_35880);var inst_35884 = inst_35883;var state_35939__$1 = state_35939;if(cljs.core.truth_(inst_35884))
{var statearr_35978_36013 = state_35939__$1;(statearr_35978_36013[(1)] = (10));
} else
{var statearr_35979_36014 = state_35939__$1;(statearr_35979_36014[(1)] = (11));
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
});})(c__5708__auto___35987,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___35987,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35983[(0)] = state_machine__5694__auto__);
(statearr_35983[(1)] = (1));
return statearr_35983;
});
var state_machine__5694__auto____1 = (function (state_35939){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35939);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35984){if((e35984 instanceof Object))
{var ex__5697__auto__ = e35984;var statearr_35985_36015 = state_35939;(statearr_35985_36015[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35984;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36016 = state_35939;
state_35939 = G__36016;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35939){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35987,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_35986 = f__5709__auto__.call(null);(statearr_35986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35987);
return statearr_35986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35987,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___36153 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36123){var state_val_36124 = (state_36123[(1)]);if((state_val_36124 === (7)))
{var state_36123__$1 = state_36123;var statearr_36125_36154 = state_36123__$1;(statearr_36125_36154[(2)] = null);
(statearr_36125_36154[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (1)))
{var state_36123__$1 = state_36123;var statearr_36126_36155 = state_36123__$1;(statearr_36126_36155[(2)] = null);
(statearr_36126_36155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (4)))
{var inst_36087 = (state_36123[(7)]);var inst_36089 = (inst_36087 < cnt);var state_36123__$1 = state_36123;if(cljs.core.truth_(inst_36089))
{var statearr_36127_36156 = state_36123__$1;(statearr_36127_36156[(1)] = (6));
} else
{var statearr_36128_36157 = state_36123__$1;(statearr_36128_36157[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (15)))
{var inst_36119 = (state_36123[(2)]);var state_36123__$1 = state_36123;var statearr_36129_36158 = state_36123__$1;(statearr_36129_36158[(2)] = inst_36119);
(statearr_36129_36158[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (13)))
{var inst_36112 = cljs.core.async.close_BANG_.call(null,out);var state_36123__$1 = state_36123;var statearr_36130_36159 = state_36123__$1;(statearr_36130_36159[(2)] = inst_36112);
(statearr_36130_36159[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (6)))
{var state_36123__$1 = state_36123;var statearr_36131_36160 = state_36123__$1;(statearr_36131_36160[(2)] = null);
(statearr_36131_36160[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (3)))
{var inst_36121 = (state_36123[(2)]);var state_36123__$1 = state_36123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36123__$1,inst_36121);
} else
{if((state_val_36124 === (12)))
{var inst_36109 = (state_36123[(8)]);var inst_36109__$1 = (state_36123[(2)]);var inst_36110 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36109__$1);var state_36123__$1 = (function (){var statearr_36132 = state_36123;(statearr_36132[(8)] = inst_36109__$1);
return statearr_36132;
})();if(cljs.core.truth_(inst_36110))
{var statearr_36133_36161 = state_36123__$1;(statearr_36133_36161[(1)] = (13));
} else
{var statearr_36134_36162 = state_36123__$1;(statearr_36134_36162[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (2)))
{var inst_36086 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36087 = (0);var state_36123__$1 = (function (){var statearr_36135 = state_36123;(statearr_36135[(9)] = inst_36086);
(statearr_36135[(7)] = inst_36087);
return statearr_36135;
})();var statearr_36136_36163 = state_36123__$1;(statearr_36136_36163[(2)] = null);
(statearr_36136_36163[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (11)))
{var inst_36087 = (state_36123[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36123,(10),Object,null,(9));var inst_36096 = chs__$1.call(null,inst_36087);var inst_36097 = done.call(null,inst_36087);var inst_36098 = cljs.core.async.take_BANG_.call(null,inst_36096,inst_36097);var state_36123__$1 = state_36123;var statearr_36137_36164 = state_36123__$1;(statearr_36137_36164[(2)] = inst_36098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36123__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (9)))
{var inst_36087 = (state_36123[(7)]);var inst_36100 = (state_36123[(2)]);var inst_36101 = (inst_36087 + (1));var inst_36087__$1 = inst_36101;var state_36123__$1 = (function (){var statearr_36138 = state_36123;(statearr_36138[(7)] = inst_36087__$1);
(statearr_36138[(10)] = inst_36100);
return statearr_36138;
})();var statearr_36139_36165 = state_36123__$1;(statearr_36139_36165[(2)] = null);
(statearr_36139_36165[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (5)))
{var inst_36107 = (state_36123[(2)]);var state_36123__$1 = (function (){var statearr_36140 = state_36123;(statearr_36140[(11)] = inst_36107);
return statearr_36140;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36123__$1,(12),dchan);
} else
{if((state_val_36124 === (14)))
{var inst_36109 = (state_36123[(8)]);var inst_36114 = cljs.core.apply.call(null,f,inst_36109);var state_36123__$1 = state_36123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36123__$1,(16),out,inst_36114);
} else
{if((state_val_36124 === (16)))
{var inst_36116 = (state_36123[(2)]);var state_36123__$1 = (function (){var statearr_36141 = state_36123;(statearr_36141[(12)] = inst_36116);
return statearr_36141;
})();var statearr_36142_36166 = state_36123__$1;(statearr_36142_36166[(2)] = null);
(statearr_36142_36166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (10)))
{var inst_36091 = (state_36123[(2)]);var inst_36092 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36123__$1 = (function (){var statearr_36143 = state_36123;(statearr_36143[(13)] = inst_36091);
return statearr_36143;
})();var statearr_36144_36167 = state_36123__$1;(statearr_36144_36167[(2)] = inst_36092);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36123__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36124 === (8)))
{var inst_36105 = (state_36123[(2)]);var state_36123__$1 = state_36123;var statearr_36145_36168 = state_36123__$1;(statearr_36145_36168[(2)] = inst_36105);
(statearr_36145_36168[(1)] = (5));
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
});})(c__5708__auto___36153,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___36153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36149[(0)] = state_machine__5694__auto__);
(statearr_36149[(1)] = (1));
return statearr_36149;
});
var state_machine__5694__auto____1 = (function (state_36123){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36123);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36150){if((e36150 instanceof Object))
{var ex__5697__auto__ = e36150;var statearr_36151_36169 = state_36123;(statearr_36151_36169[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36150;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36170 = state_36123;
state_36123 = G__36170;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36123){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36153,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_36152 = f__5709__auto__.call(null);(statearr_36152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36153);
return statearr_36152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36153,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36278 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36278,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36278,out){
return (function (state_36254){var state_val_36255 = (state_36254[(1)]);if((state_val_36255 === (7)))
{var inst_36233 = (state_36254[(7)]);var inst_36234 = (state_36254[(8)]);var inst_36233__$1 = (state_36254[(2)]);var inst_36234__$1 = cljs.core.nth.call(null,inst_36233__$1,(0),null);var inst_36235 = cljs.core.nth.call(null,inst_36233__$1,(1),null);var inst_36236 = (inst_36234__$1 == null);var state_36254__$1 = (function (){var statearr_36256 = state_36254;(statearr_36256[(7)] = inst_36233__$1);
(statearr_36256[(8)] = inst_36234__$1);
(statearr_36256[(9)] = inst_36235);
return statearr_36256;
})();if(cljs.core.truth_(inst_36236))
{var statearr_36257_36279 = state_36254__$1;(statearr_36257_36279[(1)] = (8));
} else
{var statearr_36258_36280 = state_36254__$1;(statearr_36258_36280[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36255 === (1)))
{var inst_36225 = cljs.core.vec.call(null,chs);var inst_36226 = inst_36225;var state_36254__$1 = (function (){var statearr_36259 = state_36254;(statearr_36259[(10)] = inst_36226);
return statearr_36259;
})();var statearr_36260_36281 = state_36254__$1;(statearr_36260_36281[(2)] = null);
(statearr_36260_36281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36255 === (4)))
{var inst_36226 = (state_36254[(10)]);var state_36254__$1 = state_36254;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36254__$1,(7),inst_36226);
} else
{if((state_val_36255 === (6)))
{var inst_36250 = (state_36254[(2)]);var state_36254__$1 = state_36254;var statearr_36261_36282 = state_36254__$1;(statearr_36261_36282[(2)] = inst_36250);
(statearr_36261_36282[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36255 === (3)))
{var inst_36252 = (state_36254[(2)]);var state_36254__$1 = state_36254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36254__$1,inst_36252);
} else
{if((state_val_36255 === (2)))
{var inst_36226 = (state_36254[(10)]);var inst_36228 = cljs.core.count.call(null,inst_36226);var inst_36229 = (inst_36228 > (0));var state_36254__$1 = state_36254;if(cljs.core.truth_(inst_36229))
{var statearr_36263_36283 = state_36254__$1;(statearr_36263_36283[(1)] = (4));
} else
{var statearr_36264_36284 = state_36254__$1;(statearr_36264_36284[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36255 === (11)))
{var inst_36226 = (state_36254[(10)]);var inst_36243 = (state_36254[(2)]);var tmp36262 = inst_36226;var inst_36226__$1 = tmp36262;var state_36254__$1 = (function (){var statearr_36265 = state_36254;(statearr_36265[(11)] = inst_36243);
(statearr_36265[(10)] = inst_36226__$1);
return statearr_36265;
})();var statearr_36266_36285 = state_36254__$1;(statearr_36266_36285[(2)] = null);
(statearr_36266_36285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36255 === (9)))
{var inst_36234 = (state_36254[(8)]);var state_36254__$1 = state_36254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36254__$1,(11),out,inst_36234);
} else
{if((state_val_36255 === (5)))
{var inst_36248 = cljs.core.async.close_BANG_.call(null,out);var state_36254__$1 = state_36254;var statearr_36267_36286 = state_36254__$1;(statearr_36267_36286[(2)] = inst_36248);
(statearr_36267_36286[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36255 === (10)))
{var inst_36246 = (state_36254[(2)]);var state_36254__$1 = state_36254;var statearr_36268_36287 = state_36254__$1;(statearr_36268_36287[(2)] = inst_36246);
(statearr_36268_36287[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36255 === (8)))
{var inst_36233 = (state_36254[(7)]);var inst_36234 = (state_36254[(8)]);var inst_36235 = (state_36254[(9)]);var inst_36226 = (state_36254[(10)]);var inst_36238 = (function (){var c = inst_36235;var v = inst_36234;var vec__36231 = inst_36233;var cs = inst_36226;return ((function (c,v,vec__36231,cs,inst_36233,inst_36234,inst_36235,inst_36226,state_val_36255,c__5708__auto___36278,out){
return (function (p1__36171_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36171_SHARP_);
});
;})(c,v,vec__36231,cs,inst_36233,inst_36234,inst_36235,inst_36226,state_val_36255,c__5708__auto___36278,out))
})();var inst_36239 = cljs.core.filterv.call(null,inst_36238,inst_36226);var inst_36226__$1 = inst_36239;var state_36254__$1 = (function (){var statearr_36269 = state_36254;(statearr_36269[(10)] = inst_36226__$1);
return statearr_36269;
})();var statearr_36270_36288 = state_36254__$1;(statearr_36270_36288[(2)] = null);
(statearr_36270_36288[(1)] = (2));
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
});})(c__5708__auto___36278,out))
;return ((function (switch__5693__auto__,c__5708__auto___36278,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36274 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36274[(0)] = state_machine__5694__auto__);
(statearr_36274[(1)] = (1));
return statearr_36274;
});
var state_machine__5694__auto____1 = (function (state_36254){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36254);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36275){if((e36275 instanceof Object))
{var ex__5697__auto__ = e36275;var statearr_36276_36289 = state_36254;(statearr_36276_36289[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36275;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36290 = state_36254;
state_36254 = G__36290;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36254){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36278,out))
})();var state__5710__auto__ = (function (){var statearr_36277 = f__5709__auto__.call(null);(statearr_36277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36278);
return statearr_36277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36278,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36383,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36383,out){
return (function (state_36360){var state_val_36361 = (state_36360[(1)]);if((state_val_36361 === (7)))
{var inst_36342 = (state_36360[(7)]);var inst_36342__$1 = (state_36360[(2)]);var inst_36343 = (inst_36342__$1 == null);var inst_36344 = cljs.core.not.call(null,inst_36343);var state_36360__$1 = (function (){var statearr_36362 = state_36360;(statearr_36362[(7)] = inst_36342__$1);
return statearr_36362;
})();if(inst_36344)
{var statearr_36363_36384 = state_36360__$1;(statearr_36363_36384[(1)] = (8));
} else
{var statearr_36364_36385 = state_36360__$1;(statearr_36364_36385[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (1)))
{var inst_36337 = (0);var state_36360__$1 = (function (){var statearr_36365 = state_36360;(statearr_36365[(8)] = inst_36337);
return statearr_36365;
})();var statearr_36366_36386 = state_36360__$1;(statearr_36366_36386[(2)] = null);
(statearr_36366_36386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (4)))
{var state_36360__$1 = state_36360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36360__$1,(7),ch);
} else
{if((state_val_36361 === (6)))
{var inst_36355 = (state_36360[(2)]);var state_36360__$1 = state_36360;var statearr_36367_36387 = state_36360__$1;(statearr_36367_36387[(2)] = inst_36355);
(statearr_36367_36387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (3)))
{var inst_36357 = (state_36360[(2)]);var inst_36358 = cljs.core.async.close_BANG_.call(null,out);var state_36360__$1 = (function (){var statearr_36368 = state_36360;(statearr_36368[(9)] = inst_36357);
return statearr_36368;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36360__$1,inst_36358);
} else
{if((state_val_36361 === (2)))
{var inst_36337 = (state_36360[(8)]);var inst_36339 = (inst_36337 < n);var state_36360__$1 = state_36360;if(cljs.core.truth_(inst_36339))
{var statearr_36369_36388 = state_36360__$1;(statearr_36369_36388[(1)] = (4));
} else
{var statearr_36370_36389 = state_36360__$1;(statearr_36370_36389[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (11)))
{var inst_36337 = (state_36360[(8)]);var inst_36347 = (state_36360[(2)]);var inst_36348 = (inst_36337 + (1));var inst_36337__$1 = inst_36348;var state_36360__$1 = (function (){var statearr_36371 = state_36360;(statearr_36371[(10)] = inst_36347);
(statearr_36371[(8)] = inst_36337__$1);
return statearr_36371;
})();var statearr_36372_36390 = state_36360__$1;(statearr_36372_36390[(2)] = null);
(statearr_36372_36390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (9)))
{var state_36360__$1 = state_36360;var statearr_36373_36391 = state_36360__$1;(statearr_36373_36391[(2)] = null);
(statearr_36373_36391[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (5)))
{var state_36360__$1 = state_36360;var statearr_36374_36392 = state_36360__$1;(statearr_36374_36392[(2)] = null);
(statearr_36374_36392[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (10)))
{var inst_36352 = (state_36360[(2)]);var state_36360__$1 = state_36360;var statearr_36375_36393 = state_36360__$1;(statearr_36375_36393[(2)] = inst_36352);
(statearr_36375_36393[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36361 === (8)))
{var inst_36342 = (state_36360[(7)]);var state_36360__$1 = state_36360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36360__$1,(11),out,inst_36342);
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
});})(c__5708__auto___36383,out))
;return ((function (switch__5693__auto__,c__5708__auto___36383,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36379 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36379[(0)] = state_machine__5694__auto__);
(statearr_36379[(1)] = (1));
return statearr_36379;
});
var state_machine__5694__auto____1 = (function (state_36360){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36380){if((e36380 instanceof Object))
{var ex__5697__auto__ = e36380;var statearr_36381_36394 = state_36360;(statearr_36381_36394[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36395 = state_36360;
state_36360 = G__36395;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36360){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36383,out))
})();var state__5710__auto__ = (function (){var statearr_36382 = f__5709__auto__.call(null);(statearr_36382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36383);
return statearr_36382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36383,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36492 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36492,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36492,out){
return (function (state_36467){var state_val_36468 = (state_36467[(1)]);if((state_val_36468 === (7)))
{var inst_36462 = (state_36467[(2)]);var state_36467__$1 = state_36467;var statearr_36469_36493 = state_36467__$1;(statearr_36469_36493[(2)] = inst_36462);
(statearr_36469_36493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36468 === (1)))
{var inst_36444 = null;var state_36467__$1 = (function (){var statearr_36470 = state_36467;(statearr_36470[(7)] = inst_36444);
return statearr_36470;
})();var statearr_36471_36494 = state_36467__$1;(statearr_36471_36494[(2)] = null);
(statearr_36471_36494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36468 === (4)))
{var inst_36447 = (state_36467[(8)]);var inst_36447__$1 = (state_36467[(2)]);var inst_36448 = (inst_36447__$1 == null);var inst_36449 = cljs.core.not.call(null,inst_36448);var state_36467__$1 = (function (){var statearr_36472 = state_36467;(statearr_36472[(8)] = inst_36447__$1);
return statearr_36472;
})();if(inst_36449)
{var statearr_36473_36495 = state_36467__$1;(statearr_36473_36495[(1)] = (5));
} else
{var statearr_36474_36496 = state_36467__$1;(statearr_36474_36496[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36468 === (6)))
{var state_36467__$1 = state_36467;var statearr_36475_36497 = state_36467__$1;(statearr_36475_36497[(2)] = null);
(statearr_36475_36497[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36468 === (3)))
{var inst_36464 = (state_36467[(2)]);var inst_36465 = cljs.core.async.close_BANG_.call(null,out);var state_36467__$1 = (function (){var statearr_36476 = state_36467;(statearr_36476[(9)] = inst_36464);
return statearr_36476;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36467__$1,inst_36465);
} else
{if((state_val_36468 === (2)))
{var state_36467__$1 = state_36467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36467__$1,(4),ch);
} else
{if((state_val_36468 === (11)))
{var inst_36447 = (state_36467[(8)]);var inst_36456 = (state_36467[(2)]);var inst_36444 = inst_36447;var state_36467__$1 = (function (){var statearr_36477 = state_36467;(statearr_36477[(7)] = inst_36444);
(statearr_36477[(10)] = inst_36456);
return statearr_36477;
})();var statearr_36478_36498 = state_36467__$1;(statearr_36478_36498[(2)] = null);
(statearr_36478_36498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36468 === (9)))
{var inst_36447 = (state_36467[(8)]);var state_36467__$1 = state_36467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36467__$1,(11),out,inst_36447);
} else
{if((state_val_36468 === (5)))
{var inst_36447 = (state_36467[(8)]);var inst_36444 = (state_36467[(7)]);var inst_36451 = cljs.core._EQ_.call(null,inst_36447,inst_36444);var state_36467__$1 = state_36467;if(inst_36451)
{var statearr_36480_36499 = state_36467__$1;(statearr_36480_36499[(1)] = (8));
} else
{var statearr_36481_36500 = state_36467__$1;(statearr_36481_36500[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36468 === (10)))
{var inst_36459 = (state_36467[(2)]);var state_36467__$1 = state_36467;var statearr_36482_36501 = state_36467__$1;(statearr_36482_36501[(2)] = inst_36459);
(statearr_36482_36501[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36468 === (8)))
{var inst_36444 = (state_36467[(7)]);var tmp36479 = inst_36444;var inst_36444__$1 = tmp36479;var state_36467__$1 = (function (){var statearr_36483 = state_36467;(statearr_36483[(7)] = inst_36444__$1);
return statearr_36483;
})();var statearr_36484_36502 = state_36467__$1;(statearr_36484_36502[(2)] = null);
(statearr_36484_36502[(1)] = (2));
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
});})(c__5708__auto___36492,out))
;return ((function (switch__5693__auto__,c__5708__auto___36492,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36488 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36488[(0)] = state_machine__5694__auto__);
(statearr_36488[(1)] = (1));
return statearr_36488;
});
var state_machine__5694__auto____1 = (function (state_36467){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36467);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36489){if((e36489 instanceof Object))
{var ex__5697__auto__ = e36489;var statearr_36490_36503 = state_36467;(statearr_36490_36503[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36489;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36504 = state_36467;
state_36467 = G__36504;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36467){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36492,out))
})();var state__5710__auto__ = (function (){var statearr_36491 = f__5709__auto__.call(null);(statearr_36491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36492);
return statearr_36491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36492,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36639 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36639,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36639,out){
return (function (state_36609){var state_val_36610 = (state_36609[(1)]);if((state_val_36610 === (7)))
{var inst_36605 = (state_36609[(2)]);var state_36609__$1 = state_36609;var statearr_36611_36640 = state_36609__$1;(statearr_36611_36640[(2)] = inst_36605);
(statearr_36611_36640[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (1)))
{var inst_36572 = (new Array(n));var inst_36573 = inst_36572;var inst_36574 = (0);var state_36609__$1 = (function (){var statearr_36612 = state_36609;(statearr_36612[(7)] = inst_36574);
(statearr_36612[(8)] = inst_36573);
return statearr_36612;
})();var statearr_36613_36641 = state_36609__$1;(statearr_36613_36641[(2)] = null);
(statearr_36613_36641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (4)))
{var inst_36577 = (state_36609[(9)]);var inst_36577__$1 = (state_36609[(2)]);var inst_36578 = (inst_36577__$1 == null);var inst_36579 = cljs.core.not.call(null,inst_36578);var state_36609__$1 = (function (){var statearr_36614 = state_36609;(statearr_36614[(9)] = inst_36577__$1);
return statearr_36614;
})();if(inst_36579)
{var statearr_36615_36642 = state_36609__$1;(statearr_36615_36642[(1)] = (5));
} else
{var statearr_36616_36643 = state_36609__$1;(statearr_36616_36643[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (15)))
{var inst_36599 = (state_36609[(2)]);var state_36609__$1 = state_36609;var statearr_36617_36644 = state_36609__$1;(statearr_36617_36644[(2)] = inst_36599);
(statearr_36617_36644[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (13)))
{var state_36609__$1 = state_36609;var statearr_36618_36645 = state_36609__$1;(statearr_36618_36645[(2)] = null);
(statearr_36618_36645[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (6)))
{var inst_36574 = (state_36609[(7)]);var inst_36595 = (inst_36574 > (0));var state_36609__$1 = state_36609;if(cljs.core.truth_(inst_36595))
{var statearr_36619_36646 = state_36609__$1;(statearr_36619_36646[(1)] = (12));
} else
{var statearr_36620_36647 = state_36609__$1;(statearr_36620_36647[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (3)))
{var inst_36607 = (state_36609[(2)]);var state_36609__$1 = state_36609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36609__$1,inst_36607);
} else
{if((state_val_36610 === (12)))
{var inst_36573 = (state_36609[(8)]);var inst_36597 = cljs.core.vec.call(null,inst_36573);var state_36609__$1 = state_36609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36609__$1,(15),out,inst_36597);
} else
{if((state_val_36610 === (2)))
{var state_36609__$1 = state_36609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36609__$1,(4),ch);
} else
{if((state_val_36610 === (11)))
{var inst_36589 = (state_36609[(2)]);var inst_36590 = (new Array(n));var inst_36573 = inst_36590;var inst_36574 = (0);var state_36609__$1 = (function (){var statearr_36621 = state_36609;(statearr_36621[(7)] = inst_36574);
(statearr_36621[(8)] = inst_36573);
(statearr_36621[(10)] = inst_36589);
return statearr_36621;
})();var statearr_36622_36648 = state_36609__$1;(statearr_36622_36648[(2)] = null);
(statearr_36622_36648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (9)))
{var inst_36573 = (state_36609[(8)]);var inst_36587 = cljs.core.vec.call(null,inst_36573);var state_36609__$1 = state_36609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36609__$1,(11),out,inst_36587);
} else
{if((state_val_36610 === (5)))
{var inst_36574 = (state_36609[(7)]);var inst_36577 = (state_36609[(9)]);var inst_36573 = (state_36609[(8)]);var inst_36582 = (state_36609[(11)]);var inst_36581 = (inst_36573[inst_36574] = inst_36577);var inst_36582__$1 = (inst_36574 + (1));var inst_36583 = (inst_36582__$1 < n);var state_36609__$1 = (function (){var statearr_36623 = state_36609;(statearr_36623[(11)] = inst_36582__$1);
(statearr_36623[(12)] = inst_36581);
return statearr_36623;
})();if(cljs.core.truth_(inst_36583))
{var statearr_36624_36649 = state_36609__$1;(statearr_36624_36649[(1)] = (8));
} else
{var statearr_36625_36650 = state_36609__$1;(statearr_36625_36650[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (14)))
{var inst_36602 = (state_36609[(2)]);var inst_36603 = cljs.core.async.close_BANG_.call(null,out);var state_36609__$1 = (function (){var statearr_36627 = state_36609;(statearr_36627[(13)] = inst_36602);
return statearr_36627;
})();var statearr_36628_36651 = state_36609__$1;(statearr_36628_36651[(2)] = inst_36603);
(statearr_36628_36651[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (10)))
{var inst_36593 = (state_36609[(2)]);var state_36609__$1 = state_36609;var statearr_36629_36652 = state_36609__$1;(statearr_36629_36652[(2)] = inst_36593);
(statearr_36629_36652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36610 === (8)))
{var inst_36573 = (state_36609[(8)]);var inst_36582 = (state_36609[(11)]);var tmp36626 = inst_36573;var inst_36573__$1 = tmp36626;var inst_36574 = inst_36582;var state_36609__$1 = (function (){var statearr_36630 = state_36609;(statearr_36630[(7)] = inst_36574);
(statearr_36630[(8)] = inst_36573__$1);
return statearr_36630;
})();var statearr_36631_36653 = state_36609__$1;(statearr_36631_36653[(2)] = null);
(statearr_36631_36653[(1)] = (2));
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
});})(c__5708__auto___36639,out))
;return ((function (switch__5693__auto__,c__5708__auto___36639,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36635[(0)] = state_machine__5694__auto__);
(statearr_36635[(1)] = (1));
return statearr_36635;
});
var state_machine__5694__auto____1 = (function (state_36609){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36609);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36636){if((e36636 instanceof Object))
{var ex__5697__auto__ = e36636;var statearr_36637_36654 = state_36609;(statearr_36637_36654[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36609);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36636;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36655 = state_36609;
state_36609 = G__36655;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36609){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36639,out))
})();var state__5710__auto__ = (function (){var statearr_36638 = f__5709__auto__.call(null);(statearr_36638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36639);
return statearr_36638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36639,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36798 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36798,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36798,out){
return (function (state_36768){var state_val_36769 = (state_36768[(1)]);if((state_val_36769 === (7)))
{var inst_36764 = (state_36768[(2)]);var state_36768__$1 = state_36768;var statearr_36770_36799 = state_36768__$1;(statearr_36770_36799[(2)] = inst_36764);
(statearr_36770_36799[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (1)))
{var inst_36727 = [];var inst_36728 = inst_36727;var inst_36729 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_36768__$1 = (function (){var statearr_36771 = state_36768;(statearr_36771[(7)] = inst_36729);
(statearr_36771[(8)] = inst_36728);
return statearr_36771;
})();var statearr_36772_36800 = state_36768__$1;(statearr_36772_36800[(2)] = null);
(statearr_36772_36800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (4)))
{var inst_36732 = (state_36768[(9)]);var inst_36732__$1 = (state_36768[(2)]);var inst_36733 = (inst_36732__$1 == null);var inst_36734 = cljs.core.not.call(null,inst_36733);var state_36768__$1 = (function (){var statearr_36773 = state_36768;(statearr_36773[(9)] = inst_36732__$1);
return statearr_36773;
})();if(inst_36734)
{var statearr_36774_36801 = state_36768__$1;(statearr_36774_36801[(1)] = (5));
} else
{var statearr_36775_36802 = state_36768__$1;(statearr_36775_36802[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (15)))
{var inst_36758 = (state_36768[(2)]);var state_36768__$1 = state_36768;var statearr_36776_36803 = state_36768__$1;(statearr_36776_36803[(2)] = inst_36758);
(statearr_36776_36803[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (13)))
{var state_36768__$1 = state_36768;var statearr_36777_36804 = state_36768__$1;(statearr_36777_36804[(2)] = null);
(statearr_36777_36804[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (6)))
{var inst_36728 = (state_36768[(8)]);var inst_36753 = inst_36728.length;var inst_36754 = (inst_36753 > (0));var state_36768__$1 = state_36768;if(cljs.core.truth_(inst_36754))
{var statearr_36778_36805 = state_36768__$1;(statearr_36778_36805[(1)] = (12));
} else
{var statearr_36779_36806 = state_36768__$1;(statearr_36779_36806[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (3)))
{var inst_36766 = (state_36768[(2)]);var state_36768__$1 = state_36768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36768__$1,inst_36766);
} else
{if((state_val_36769 === (12)))
{var inst_36728 = (state_36768[(8)]);var inst_36756 = cljs.core.vec.call(null,inst_36728);var state_36768__$1 = state_36768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36768__$1,(15),out,inst_36756);
} else
{if((state_val_36769 === (2)))
{var state_36768__$1 = state_36768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36768__$1,(4),ch);
} else
{if((state_val_36769 === (11)))
{var inst_36736 = (state_36768[(10)]);var inst_36732 = (state_36768[(9)]);var inst_36746 = (state_36768[(2)]);var inst_36747 = [];var inst_36748 = inst_36747.push(inst_36732);var inst_36728 = inst_36747;var inst_36729 = inst_36736;var state_36768__$1 = (function (){var statearr_36780 = state_36768;(statearr_36780[(7)] = inst_36729);
(statearr_36780[(11)] = inst_36748);
(statearr_36780[(8)] = inst_36728);
(statearr_36780[(12)] = inst_36746);
return statearr_36780;
})();var statearr_36781_36807 = state_36768__$1;(statearr_36781_36807[(2)] = null);
(statearr_36781_36807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (9)))
{var inst_36728 = (state_36768[(8)]);var inst_36744 = cljs.core.vec.call(null,inst_36728);var state_36768__$1 = state_36768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36768__$1,(11),out,inst_36744);
} else
{if((state_val_36769 === (5)))
{var inst_36736 = (state_36768[(10)]);var inst_36729 = (state_36768[(7)]);var inst_36732 = (state_36768[(9)]);var inst_36736__$1 = f.call(null,inst_36732);var inst_36737 = cljs.core._EQ_.call(null,inst_36736__$1,inst_36729);var inst_36738 = cljs.core.keyword_identical_QMARK_.call(null,inst_36729,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_36739 = (inst_36737) || (inst_36738);var state_36768__$1 = (function (){var statearr_36782 = state_36768;(statearr_36782[(10)] = inst_36736__$1);
return statearr_36782;
})();if(cljs.core.truth_(inst_36739))
{var statearr_36783_36808 = state_36768__$1;(statearr_36783_36808[(1)] = (8));
} else
{var statearr_36784_36809 = state_36768__$1;(statearr_36784_36809[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (14)))
{var inst_36761 = (state_36768[(2)]);var inst_36762 = cljs.core.async.close_BANG_.call(null,out);var state_36768__$1 = (function (){var statearr_36786 = state_36768;(statearr_36786[(13)] = inst_36761);
return statearr_36786;
})();var statearr_36787_36810 = state_36768__$1;(statearr_36787_36810[(2)] = inst_36762);
(statearr_36787_36810[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (10)))
{var inst_36751 = (state_36768[(2)]);var state_36768__$1 = state_36768;var statearr_36788_36811 = state_36768__$1;(statearr_36788_36811[(2)] = inst_36751);
(statearr_36788_36811[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36769 === (8)))
{var inst_36736 = (state_36768[(10)]);var inst_36732 = (state_36768[(9)]);var inst_36728 = (state_36768[(8)]);var inst_36741 = inst_36728.push(inst_36732);var tmp36785 = inst_36728;var inst_36728__$1 = tmp36785;var inst_36729 = inst_36736;var state_36768__$1 = (function (){var statearr_36789 = state_36768;(statearr_36789[(7)] = inst_36729);
(statearr_36789[(14)] = inst_36741);
(statearr_36789[(8)] = inst_36728__$1);
return statearr_36789;
})();var statearr_36790_36812 = state_36768__$1;(statearr_36790_36812[(2)] = null);
(statearr_36790_36812[(1)] = (2));
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
});})(c__5708__auto___36798,out))
;return ((function (switch__5693__auto__,c__5708__auto___36798,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36794[(0)] = state_machine__5694__auto__);
(statearr_36794[(1)] = (1));
return statearr_36794;
});
var state_machine__5694__auto____1 = (function (state_36768){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36795){if((e36795 instanceof Object))
{var ex__5697__auto__ = e36795;var statearr_36796_36813 = state_36768;(statearr_36796_36813[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36795;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36814 = state_36768;
state_36768 = G__36814;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36768){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36798,out))
})();var state__5710__auto__ = (function (){var statearr_36797 = f__5709__auto__.call(null);(statearr_36797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36798);
return statearr_36797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36798,out))
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
