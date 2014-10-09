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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34258 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34258 = (function (f,fn_handler,meta34259){
this.f = f;
this.fn_handler = fn_handler;
this.meta34259 = meta34259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34258.cljs$lang$type = true;
cljs.core.async.t34258.cljs$lang$ctorStr = "cljs.core.async/t34258";
cljs.core.async.t34258.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34258");
});
cljs.core.async.t34258.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34260){var self__ = this;
var _34260__$1 = this;return self__.meta34259;
});
cljs.core.async.t34258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34260,meta34259__$1){var self__ = this;
var _34260__$1 = this;return (new cljs.core.async.t34258(self__.f,self__.fn_handler,meta34259__$1));
});
cljs.core.async.__GT_t34258 = (function __GT_t34258(f__$1,fn_handler__$1,meta34259){return (new cljs.core.async.t34258(f__$1,fn_handler__$1,meta34259));
});
}
return (new cljs.core.async.t34258(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34262 = buff;if(G__34262)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__34262.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34262.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34262);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34262);
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
{var val_34263 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34263);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_34263,ret){
return (function (){return fn1.call(null,val_34263);
});})(val_34263,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___34264 = n;var x_34265 = (0);while(true){
if((x_34265 < n__4414__auto___34264))
{(a[x_34265] = (0));
{
var G__34266 = (x_34265 + (1));
x_34265 = G__34266;
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
var G__34267 = (i + (1));
i = G__34267;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34271 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34271 = (function (flag,alt_flag,meta34272){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34272 = meta34272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34271.cljs$lang$type = true;
cljs.core.async.t34271.cljs$lang$ctorStr = "cljs.core.async/t34271";
cljs.core.async.t34271.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34271");
});})(flag))
;
cljs.core.async.t34271.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t34271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t34271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34273){var self__ = this;
var _34273__$1 = this;return self__.meta34272;
});})(flag))
;
cljs.core.async.t34271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34273,meta34272__$1){var self__ = this;
var _34273__$1 = this;return (new cljs.core.async.t34271(self__.flag,self__.alt_flag,meta34272__$1));
});})(flag))
;
cljs.core.async.__GT_t34271 = ((function (flag){
return (function __GT_t34271(flag__$1,alt_flag__$1,meta34272){return (new cljs.core.async.t34271(flag__$1,alt_flag__$1,meta34272));
});})(flag))
;
}
return (new cljs.core.async.t34271(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34277 = (function (cb,flag,alt_handler,meta34278){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34278 = meta34278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34277.cljs$lang$type = true;
cljs.core.async.t34277.cljs$lang$ctorStr = "cljs.core.async/t34277";
cljs.core.async.t34277.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34277");
});
cljs.core.async.t34277.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34279){var self__ = this;
var _34279__$1 = this;return self__.meta34278;
});
cljs.core.async.t34277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34279,meta34278__$1){var self__ = this;
var _34279__$1 = this;return (new cljs.core.async.t34277(self__.cb,self__.flag,self__.alt_handler,meta34278__$1));
});
cljs.core.async.__GT_t34277 = (function __GT_t34277(cb__$1,flag__$1,alt_handler__$1,meta34278){return (new cljs.core.async.t34277(cb__$1,flag__$1,alt_handler__$1,meta34278));
});
}
return (new cljs.core.async.t34277(cb,flag,alt_handler,null));
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
return (function (p1__34280_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34280_SHARP_,port], null));
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
var G__34281 = (i + (1));
i = G__34281;
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
var alts_BANG___delegate = function (ports,p__34282){var map__34284 = p__34282;var map__34284__$1 = ((cljs.core.seq_QMARK_.call(null,map__34284))?cljs.core.apply.call(null,cljs.core.hash_map,map__34284):map__34284);var opts = map__34284__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__34282 = null;if (arguments.length > 1) {
  p__34282 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34282);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34285){
var ports = cljs.core.first(arglist__34285);
var p__34282 = cljs.core.rest(arglist__34285);
return alts_BANG___delegate(ports,p__34282);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34293 = (function (ch,f,map_LT_,meta34294){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34294 = meta34294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34293.cljs$lang$type = true;
cljs.core.async.t34293.cljs$lang$ctorStr = "cljs.core.async/t34293";
cljs.core.async.t34293.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34293");
});
cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34296 = (function (fn1,_,meta34294,ch,f,map_LT_,meta34297){
this.fn1 = fn1;
this._ = _;
this.meta34294 = meta34294;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34297 = meta34297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34296.cljs$lang$type = true;
cljs.core.async.t34296.cljs$lang$ctorStr = "cljs.core.async/t34296";
cljs.core.async.t34296.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34296");
});})(___$1))
;
cljs.core.async.t34296.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t34296.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t34296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__34286_SHARP_){return f1.call(null,(((p1__34286_SHARP_ == null))?null:self__.f.call(null,p1__34286_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t34296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34298){var self__ = this;
var _34298__$1 = this;return self__.meta34297;
});})(___$1))
;
cljs.core.async.t34296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34298,meta34297__$1){var self__ = this;
var _34298__$1 = this;return (new cljs.core.async.t34296(self__.fn1,self__._,self__.meta34294,self__.ch,self__.f,self__.map_LT_,meta34297__$1));
});})(___$1))
;
cljs.core.async.__GT_t34296 = ((function (___$1){
return (function __GT_t34296(fn1__$1,___$2,meta34294__$1,ch__$2,f__$2,map_LT___$2,meta34297){return (new cljs.core.async.t34296(fn1__$1,___$2,meta34294__$1,ch__$2,f__$2,map_LT___$2,meta34297));
});})(___$1))
;
}
return (new cljs.core.async.t34296(fn1,___$1,self__.meta34294,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34295){var self__ = this;
var _34295__$1 = this;return self__.meta34294;
});
cljs.core.async.t34293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34295,meta34294__$1){var self__ = this;
var _34295__$1 = this;return (new cljs.core.async.t34293(self__.ch,self__.f,self__.map_LT_,meta34294__$1));
});
cljs.core.async.__GT_t34293 = (function __GT_t34293(ch__$1,f__$1,map_LT___$1,meta34294){return (new cljs.core.async.t34293(ch__$1,f__$1,map_LT___$1,meta34294));
});
}
return (new cljs.core.async.t34293(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34302 = (function (ch,f,map_GT_,meta34303){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34303 = meta34303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34302.cljs$lang$type = true;
cljs.core.async.t34302.cljs$lang$ctorStr = "cljs.core.async/t34302";
cljs.core.async.t34302.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34302");
});
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34304){var self__ = this;
var _34304__$1 = this;return self__.meta34303;
});
cljs.core.async.t34302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34304,meta34303__$1){var self__ = this;
var _34304__$1 = this;return (new cljs.core.async.t34302(self__.ch,self__.f,self__.map_GT_,meta34303__$1));
});
cljs.core.async.__GT_t34302 = (function __GT_t34302(ch__$1,f__$1,map_GT___$1,meta34303){return (new cljs.core.async.t34302(ch__$1,f__$1,map_GT___$1,meta34303));
});
}
return (new cljs.core.async.t34302(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34308 = (function (ch,p,filter_GT_,meta34309){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
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
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
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
var _34310__$1 = this;return (new cljs.core.async.t34308(self__.ch,self__.p,self__.filter_GT_,meta34309__$1));
});
cljs.core.async.__GT_t34308 = (function __GT_t34308(ch__$1,p__$1,filter_GT___$1,meta34309){return (new cljs.core.async.t34308(ch__$1,p__$1,filter_GT___$1,meta34309));
});
}
return (new cljs.core.async.t34308(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___34393 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34393,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34393,out){
return (function (state_34372){var state_val_34373 = (state_34372[(1)]);if((state_val_34373 === (7)))
{var inst_34368 = (state_34372[(2)]);var state_34372__$1 = state_34372;var statearr_34374_34394 = state_34372__$1;(statearr_34374_34394[(2)] = inst_34368);
(statearr_34374_34394[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (1)))
{var state_34372__$1 = state_34372;var statearr_34375_34395 = state_34372__$1;(statearr_34375_34395[(2)] = null);
(statearr_34375_34395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (4)))
{var inst_34354 = (state_34372[(7)]);var inst_34354__$1 = (state_34372[(2)]);var inst_34355 = (inst_34354__$1 == null);var state_34372__$1 = (function (){var statearr_34376 = state_34372;(statearr_34376[(7)] = inst_34354__$1);
return statearr_34376;
})();if(cljs.core.truth_(inst_34355))
{var statearr_34377_34396 = state_34372__$1;(statearr_34377_34396[(1)] = (5));
} else
{var statearr_34378_34397 = state_34372__$1;(statearr_34378_34397[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (6)))
{var inst_34354 = (state_34372[(7)]);var inst_34359 = p.call(null,inst_34354);var state_34372__$1 = state_34372;if(cljs.core.truth_(inst_34359))
{var statearr_34379_34398 = state_34372__$1;(statearr_34379_34398[(1)] = (8));
} else
{var statearr_34380_34399 = state_34372__$1;(statearr_34380_34399[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (3)))
{var inst_34370 = (state_34372[(2)]);var state_34372__$1 = state_34372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34372__$1,inst_34370);
} else
{if((state_val_34373 === (2)))
{var state_34372__$1 = state_34372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34372__$1,(4),ch);
} else
{if((state_val_34373 === (11)))
{var inst_34362 = (state_34372[(2)]);var state_34372__$1 = state_34372;var statearr_34381_34400 = state_34372__$1;(statearr_34381_34400[(2)] = inst_34362);
(statearr_34381_34400[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (9)))
{var state_34372__$1 = state_34372;var statearr_34382_34401 = state_34372__$1;(statearr_34382_34401[(2)] = null);
(statearr_34382_34401[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (5)))
{var inst_34357 = cljs.core.async.close_BANG_.call(null,out);var state_34372__$1 = state_34372;var statearr_34383_34402 = state_34372__$1;(statearr_34383_34402[(2)] = inst_34357);
(statearr_34383_34402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (10)))
{var inst_34365 = (state_34372[(2)]);var state_34372__$1 = (function (){var statearr_34384 = state_34372;(statearr_34384[(8)] = inst_34365);
return statearr_34384;
})();var statearr_34385_34403 = state_34372__$1;(statearr_34385_34403[(2)] = null);
(statearr_34385_34403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34373 === (8)))
{var inst_34354 = (state_34372[(7)]);var state_34372__$1 = state_34372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34372__$1,(11),out,inst_34354);
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
});})(c__5708__auto___34393,out))
;return ((function (switch__5693__auto__,c__5708__auto___34393,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34389 = [null,null,null,null,null,null,null,null,null];(statearr_34389[(0)] = state_machine__5694__auto__);
(statearr_34389[(1)] = (1));
return statearr_34389;
});
var state_machine__5694__auto____1 = (function (state_34372){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34390){if((e34390 instanceof Object))
{var ex__5697__auto__ = e34390;var statearr_34391_34404 = state_34372;(statearr_34391_34404[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34390;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34405 = state_34372;
state_34372 = G__34405;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34372){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34393,out))
})();var state__5710__auto__ = (function (){var statearr_34392 = f__5709__auto__.call(null);(statearr_34392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34393);
return statearr_34392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34393,out))
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
return (function (state_34557){var state_val_34558 = (state_34557[(1)]);if((state_val_34558 === (7)))
{var inst_34553 = (state_34557[(2)]);var state_34557__$1 = state_34557;var statearr_34559_34596 = state_34557__$1;(statearr_34559_34596[(2)] = inst_34553);
(statearr_34559_34596[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (20)))
{var inst_34528 = (state_34557[(7)]);var inst_34539 = (state_34557[(2)]);var inst_34540 = cljs.core.next.call(null,inst_34528);var inst_34514 = inst_34540;var inst_34515 = null;var inst_34516 = (0);var inst_34517 = (0);var state_34557__$1 = (function (){var statearr_34560 = state_34557;(statearr_34560[(8)] = inst_34515);
(statearr_34560[(9)] = inst_34514);
(statearr_34560[(10)] = inst_34517);
(statearr_34560[(11)] = inst_34516);
(statearr_34560[(12)] = inst_34539);
return statearr_34560;
})();var statearr_34561_34597 = state_34557__$1;(statearr_34561_34597[(2)] = null);
(statearr_34561_34597[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (1)))
{var state_34557__$1 = state_34557;var statearr_34562_34598 = state_34557__$1;(statearr_34562_34598[(2)] = null);
(statearr_34562_34598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (4)))
{var inst_34503 = (state_34557[(13)]);var inst_34503__$1 = (state_34557[(2)]);var inst_34504 = (inst_34503__$1 == null);var state_34557__$1 = (function (){var statearr_34566 = state_34557;(statearr_34566[(13)] = inst_34503__$1);
return statearr_34566;
})();if(cljs.core.truth_(inst_34504))
{var statearr_34567_34599 = state_34557__$1;(statearr_34567_34599[(1)] = (5));
} else
{var statearr_34568_34600 = state_34557__$1;(statearr_34568_34600[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (15)))
{var state_34557__$1 = state_34557;var statearr_34569_34601 = state_34557__$1;(statearr_34569_34601[(2)] = null);
(statearr_34569_34601[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (13)))
{var inst_34515 = (state_34557[(8)]);var inst_34514 = (state_34557[(9)]);var inst_34517 = (state_34557[(10)]);var inst_34516 = (state_34557[(11)]);var inst_34524 = (state_34557[(2)]);var inst_34525 = (inst_34517 + (1));var tmp34563 = inst_34515;var tmp34564 = inst_34514;var tmp34565 = inst_34516;var inst_34514__$1 = tmp34564;var inst_34515__$1 = tmp34563;var inst_34516__$1 = tmp34565;var inst_34517__$1 = inst_34525;var state_34557__$1 = (function (){var statearr_34570 = state_34557;(statearr_34570[(8)] = inst_34515__$1);
(statearr_34570[(9)] = inst_34514__$1);
(statearr_34570[(14)] = inst_34524);
(statearr_34570[(10)] = inst_34517__$1);
(statearr_34570[(11)] = inst_34516__$1);
return statearr_34570;
})();var statearr_34571_34602 = state_34557__$1;(statearr_34571_34602[(2)] = null);
(statearr_34571_34602[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (6)))
{var inst_34503 = (state_34557[(13)]);var inst_34508 = f.call(null,inst_34503);var inst_34513 = cljs.core.seq.call(null,inst_34508);var inst_34514 = inst_34513;var inst_34515 = null;var inst_34516 = (0);var inst_34517 = (0);var state_34557__$1 = (function (){var statearr_34572 = state_34557;(statearr_34572[(8)] = inst_34515);
(statearr_34572[(9)] = inst_34514);
(statearr_34572[(10)] = inst_34517);
(statearr_34572[(11)] = inst_34516);
return statearr_34572;
})();var statearr_34573_34603 = state_34557__$1;(statearr_34573_34603[(2)] = null);
(statearr_34573_34603[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (17)))
{var inst_34528 = (state_34557[(7)]);var inst_34532 = cljs.core.chunk_first.call(null,inst_34528);var inst_34533 = cljs.core.chunk_rest.call(null,inst_34528);var inst_34534 = cljs.core.count.call(null,inst_34532);var inst_34514 = inst_34533;var inst_34515 = inst_34532;var inst_34516 = inst_34534;var inst_34517 = (0);var state_34557__$1 = (function (){var statearr_34574 = state_34557;(statearr_34574[(8)] = inst_34515);
(statearr_34574[(9)] = inst_34514);
(statearr_34574[(10)] = inst_34517);
(statearr_34574[(11)] = inst_34516);
return statearr_34574;
})();var statearr_34575_34604 = state_34557__$1;(statearr_34575_34604[(2)] = null);
(statearr_34575_34604[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (3)))
{var inst_34555 = (state_34557[(2)]);var state_34557__$1 = state_34557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34557__$1,inst_34555);
} else
{if((state_val_34558 === (12)))
{var inst_34548 = (state_34557[(2)]);var state_34557__$1 = state_34557;var statearr_34576_34605 = state_34557__$1;(statearr_34576_34605[(2)] = inst_34548);
(statearr_34576_34605[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (2)))
{var state_34557__$1 = state_34557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34557__$1,(4),in$);
} else
{if((state_val_34558 === (19)))
{var inst_34543 = (state_34557[(2)]);var state_34557__$1 = state_34557;var statearr_34577_34606 = state_34557__$1;(statearr_34577_34606[(2)] = inst_34543);
(statearr_34577_34606[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (11)))
{var inst_34514 = (state_34557[(9)]);var inst_34528 = (state_34557[(7)]);var inst_34528__$1 = cljs.core.seq.call(null,inst_34514);var state_34557__$1 = (function (){var statearr_34578 = state_34557;(statearr_34578[(7)] = inst_34528__$1);
return statearr_34578;
})();if(inst_34528__$1)
{var statearr_34579_34607 = state_34557__$1;(statearr_34579_34607[(1)] = (14));
} else
{var statearr_34580_34608 = state_34557__$1;(statearr_34580_34608[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (9)))
{var inst_34550 = (state_34557[(2)]);var state_34557__$1 = (function (){var statearr_34581 = state_34557;(statearr_34581[(15)] = inst_34550);
return statearr_34581;
})();var statearr_34582_34609 = state_34557__$1;(statearr_34582_34609[(2)] = null);
(statearr_34582_34609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (5)))
{var inst_34506 = cljs.core.async.close_BANG_.call(null,out);var state_34557__$1 = state_34557;var statearr_34583_34610 = state_34557__$1;(statearr_34583_34610[(2)] = inst_34506);
(statearr_34583_34610[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (14)))
{var inst_34528 = (state_34557[(7)]);var inst_34530 = cljs.core.chunked_seq_QMARK_.call(null,inst_34528);var state_34557__$1 = state_34557;if(inst_34530)
{var statearr_34584_34611 = state_34557__$1;(statearr_34584_34611[(1)] = (17));
} else
{var statearr_34585_34612 = state_34557__$1;(statearr_34585_34612[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (16)))
{var inst_34546 = (state_34557[(2)]);var state_34557__$1 = state_34557;var statearr_34586_34613 = state_34557__$1;(statearr_34586_34613[(2)] = inst_34546);
(statearr_34586_34613[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34558 === (10)))
{var inst_34515 = (state_34557[(8)]);var inst_34517 = (state_34557[(10)]);var inst_34522 = cljs.core._nth.call(null,inst_34515,inst_34517);var state_34557__$1 = state_34557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34557__$1,(13),out,inst_34522);
} else
{if((state_val_34558 === (18)))
{var inst_34528 = (state_34557[(7)]);var inst_34537 = cljs.core.first.call(null,inst_34528);var state_34557__$1 = state_34557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34557__$1,(20),out,inst_34537);
} else
{if((state_val_34558 === (8)))
{var inst_34517 = (state_34557[(10)]);var inst_34516 = (state_34557[(11)]);var inst_34519 = (inst_34517 < inst_34516);var inst_34520 = inst_34519;var state_34557__$1 = state_34557;if(cljs.core.truth_(inst_34520))
{var statearr_34587_34614 = state_34557__$1;(statearr_34587_34614[(1)] = (10));
} else
{var statearr_34588_34615 = state_34557__$1;(statearr_34588_34615[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_34592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34592[(0)] = state_machine__5694__auto__);
(statearr_34592[(1)] = (1));
return statearr_34592;
});
var state_machine__5694__auto____1 = (function (state_34557){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34557);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34593){if((e34593 instanceof Object))
{var ex__5697__auto__ = e34593;var statearr_34594_34616 = state_34557;(statearr_34594_34616[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34557);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34593;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34617 = state_34557;
state_34557 = G__34617;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34557){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34595 = f__5709__auto__.call(null);(statearr_34595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34595;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___34698 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34698){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34698){
return (function (state_34677){var state_val_34678 = (state_34677[(1)]);if((state_val_34678 === (7)))
{var inst_34673 = (state_34677[(2)]);var state_34677__$1 = state_34677;var statearr_34679_34699 = state_34677__$1;(statearr_34679_34699[(2)] = inst_34673);
(statearr_34679_34699[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34678 === (1)))
{var state_34677__$1 = state_34677;var statearr_34680_34700 = state_34677__$1;(statearr_34680_34700[(2)] = null);
(statearr_34680_34700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34678 === (4)))
{var inst_34660 = (state_34677[(7)]);var inst_34660__$1 = (state_34677[(2)]);var inst_34661 = (inst_34660__$1 == null);var state_34677__$1 = (function (){var statearr_34681 = state_34677;(statearr_34681[(7)] = inst_34660__$1);
return statearr_34681;
})();if(cljs.core.truth_(inst_34661))
{var statearr_34682_34701 = state_34677__$1;(statearr_34682_34701[(1)] = (5));
} else
{var statearr_34683_34702 = state_34677__$1;(statearr_34683_34702[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34678 === (6)))
{var inst_34660 = (state_34677[(7)]);var state_34677__$1 = state_34677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34677__$1,(11),to,inst_34660);
} else
{if((state_val_34678 === (3)))
{var inst_34675 = (state_34677[(2)]);var state_34677__$1 = state_34677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34677__$1,inst_34675);
} else
{if((state_val_34678 === (2)))
{var state_34677__$1 = state_34677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34677__$1,(4),from);
} else
{if((state_val_34678 === (11)))
{var inst_34670 = (state_34677[(2)]);var state_34677__$1 = (function (){var statearr_34684 = state_34677;(statearr_34684[(8)] = inst_34670);
return statearr_34684;
})();var statearr_34685_34703 = state_34677__$1;(statearr_34685_34703[(2)] = null);
(statearr_34685_34703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34678 === (9)))
{var state_34677__$1 = state_34677;var statearr_34686_34704 = state_34677__$1;(statearr_34686_34704[(2)] = null);
(statearr_34686_34704[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34678 === (5)))
{var state_34677__$1 = state_34677;if(cljs.core.truth_(close_QMARK_))
{var statearr_34687_34705 = state_34677__$1;(statearr_34687_34705[(1)] = (8));
} else
{var statearr_34688_34706 = state_34677__$1;(statearr_34688_34706[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34678 === (10)))
{var inst_34667 = (state_34677[(2)]);var state_34677__$1 = state_34677;var statearr_34689_34707 = state_34677__$1;(statearr_34689_34707[(2)] = inst_34667);
(statearr_34689_34707[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34678 === (8)))
{var inst_34664 = cljs.core.async.close_BANG_.call(null,to);var state_34677__$1 = state_34677;var statearr_34690_34708 = state_34677__$1;(statearr_34690_34708[(2)] = inst_34664);
(statearr_34690_34708[(1)] = (10));
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
});})(c__5708__auto___34698))
;return ((function (switch__5693__auto__,c__5708__auto___34698){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34694 = [null,null,null,null,null,null,null,null,null];(statearr_34694[(0)] = state_machine__5694__auto__);
(statearr_34694[(1)] = (1));
return statearr_34694;
});
var state_machine__5694__auto____1 = (function (state_34677){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34677);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34695){if((e34695 instanceof Object))
{var ex__5697__auto__ = e34695;var statearr_34696_34709 = state_34677;(statearr_34696_34709[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34677);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34695;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34710 = state_34677;
state_34677 = G__34710;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34677){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34698))
})();var state__5710__auto__ = (function (){var statearr_34697 = f__5709__auto__.call(null);(statearr_34697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34698);
return statearr_34697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34698))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___34797 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34797,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34797,tc,fc){
return (function (state_34775){var state_val_34776 = (state_34775[(1)]);if((state_val_34776 === (7)))
{var inst_34771 = (state_34775[(2)]);var state_34775__$1 = state_34775;var statearr_34777_34798 = state_34775__$1;(statearr_34777_34798[(2)] = inst_34771);
(statearr_34777_34798[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34776 === (1)))
{var state_34775__$1 = state_34775;var statearr_34778_34799 = state_34775__$1;(statearr_34778_34799[(2)] = null);
(statearr_34778_34799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34776 === (4)))
{var inst_34756 = (state_34775[(7)]);var inst_34756__$1 = (state_34775[(2)]);var inst_34757 = (inst_34756__$1 == null);var state_34775__$1 = (function (){var statearr_34779 = state_34775;(statearr_34779[(7)] = inst_34756__$1);
return statearr_34779;
})();if(cljs.core.truth_(inst_34757))
{var statearr_34780_34800 = state_34775__$1;(statearr_34780_34800[(1)] = (5));
} else
{var statearr_34781_34801 = state_34775__$1;(statearr_34781_34801[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34776 === (6)))
{var inst_34756 = (state_34775[(7)]);var inst_34762 = p.call(null,inst_34756);var state_34775__$1 = state_34775;if(cljs.core.truth_(inst_34762))
{var statearr_34782_34802 = state_34775__$1;(statearr_34782_34802[(1)] = (9));
} else
{var statearr_34783_34803 = state_34775__$1;(statearr_34783_34803[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34776 === (3)))
{var inst_34773 = (state_34775[(2)]);var state_34775__$1 = state_34775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34775__$1,inst_34773);
} else
{if((state_val_34776 === (2)))
{var state_34775__$1 = state_34775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34775__$1,(4),ch);
} else
{if((state_val_34776 === (11)))
{var inst_34756 = (state_34775[(7)]);var inst_34766 = (state_34775[(2)]);var state_34775__$1 = state_34775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34775__$1,(8),inst_34766,inst_34756);
} else
{if((state_val_34776 === (9)))
{var state_34775__$1 = state_34775;var statearr_34784_34804 = state_34775__$1;(statearr_34784_34804[(2)] = tc);
(statearr_34784_34804[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34776 === (5)))
{var inst_34759 = cljs.core.async.close_BANG_.call(null,tc);var inst_34760 = cljs.core.async.close_BANG_.call(null,fc);var state_34775__$1 = (function (){var statearr_34785 = state_34775;(statearr_34785[(8)] = inst_34759);
return statearr_34785;
})();var statearr_34786_34805 = state_34775__$1;(statearr_34786_34805[(2)] = inst_34760);
(statearr_34786_34805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34776 === (10)))
{var state_34775__$1 = state_34775;var statearr_34787_34806 = state_34775__$1;(statearr_34787_34806[(2)] = fc);
(statearr_34787_34806[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34776 === (8)))
{var inst_34768 = (state_34775[(2)]);var state_34775__$1 = (function (){var statearr_34788 = state_34775;(statearr_34788[(9)] = inst_34768);
return statearr_34788;
})();var statearr_34789_34807 = state_34775__$1;(statearr_34789_34807[(2)] = null);
(statearr_34789_34807[(1)] = (2));
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
});})(c__5708__auto___34797,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___34797,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34793 = [null,null,null,null,null,null,null,null,null,null];(statearr_34793[(0)] = state_machine__5694__auto__);
(statearr_34793[(1)] = (1));
return statearr_34793;
});
var state_machine__5694__auto____1 = (function (state_34775){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34794){if((e34794 instanceof Object))
{var ex__5697__auto__ = e34794;var statearr_34795_34808 = state_34775;(statearr_34795_34808[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34794;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34809 = state_34775;
state_34775 = G__34809;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34775){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34797,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_34796 = f__5709__auto__.call(null);(statearr_34796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34797);
return statearr_34796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34797,tc,fc))
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
return (function (state_34856){var state_val_34857 = (state_34856[(1)]);if((state_val_34857 === (7)))
{var inst_34852 = (state_34856[(2)]);var state_34856__$1 = state_34856;var statearr_34858_34874 = state_34856__$1;(statearr_34858_34874[(2)] = inst_34852);
(statearr_34858_34874[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34857 === (6)))
{var inst_34845 = (state_34856[(7)]);var inst_34842 = (state_34856[(8)]);var inst_34849 = f.call(null,inst_34842,inst_34845);var inst_34842__$1 = inst_34849;var state_34856__$1 = (function (){var statearr_34859 = state_34856;(statearr_34859[(8)] = inst_34842__$1);
return statearr_34859;
})();var statearr_34860_34875 = state_34856__$1;(statearr_34860_34875[(2)] = null);
(statearr_34860_34875[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34857 === (5)))
{var inst_34842 = (state_34856[(8)]);var state_34856__$1 = state_34856;var statearr_34861_34876 = state_34856__$1;(statearr_34861_34876[(2)] = inst_34842);
(statearr_34861_34876[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34857 === (4)))
{var inst_34845 = (state_34856[(7)]);var inst_34845__$1 = (state_34856[(2)]);var inst_34846 = (inst_34845__$1 == null);var state_34856__$1 = (function (){var statearr_34862 = state_34856;(statearr_34862[(7)] = inst_34845__$1);
return statearr_34862;
})();if(cljs.core.truth_(inst_34846))
{var statearr_34863_34877 = state_34856__$1;(statearr_34863_34877[(1)] = (5));
} else
{var statearr_34864_34878 = state_34856__$1;(statearr_34864_34878[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34857 === (3)))
{var inst_34854 = (state_34856[(2)]);var state_34856__$1 = state_34856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34856__$1,inst_34854);
} else
{if((state_val_34857 === (2)))
{var state_34856__$1 = state_34856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34856__$1,(4),ch);
} else
{if((state_val_34857 === (1)))
{var inst_34842 = init;var state_34856__$1 = (function (){var statearr_34865 = state_34856;(statearr_34865[(8)] = inst_34842);
return statearr_34865;
})();var statearr_34866_34879 = state_34856__$1;(statearr_34866_34879[(2)] = null);
(statearr_34866_34879[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_34870 = [null,null,null,null,null,null,null,null,null];(statearr_34870[(0)] = state_machine__5694__auto__);
(statearr_34870[(1)] = (1));
return statearr_34870;
});
var state_machine__5694__auto____1 = (function (state_34856){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34856);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34871){if((e34871 instanceof Object))
{var ex__5697__auto__ = e34871;var statearr_34872_34880 = state_34856;(statearr_34872_34880[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34871;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34881 = state_34856;
state_34856 = G__34881;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34856){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34873 = f__5709__auto__.call(null);(statearr_34873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34873;
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
return (function (state_34943){var state_val_34944 = (state_34943[(1)]);if((state_val_34944 === (7)))
{var inst_34924 = (state_34943[(7)]);var inst_34929 = (state_34943[(2)]);var inst_34930 = cljs.core.next.call(null,inst_34924);var inst_34924__$1 = inst_34930;var state_34943__$1 = (function (){var statearr_34945 = state_34943;(statearr_34945[(8)] = inst_34929);
(statearr_34945[(7)] = inst_34924__$1);
return statearr_34945;
})();var statearr_34946_34964 = state_34943__$1;(statearr_34946_34964[(2)] = null);
(statearr_34946_34964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34944 === (1)))
{var inst_34923 = cljs.core.seq.call(null,coll);var inst_34924 = inst_34923;var state_34943__$1 = (function (){var statearr_34947 = state_34943;(statearr_34947[(7)] = inst_34924);
return statearr_34947;
})();var statearr_34948_34965 = state_34943__$1;(statearr_34948_34965[(2)] = null);
(statearr_34948_34965[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34944 === (4)))
{var inst_34924 = (state_34943[(7)]);var inst_34927 = cljs.core.first.call(null,inst_34924);var state_34943__$1 = state_34943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34943__$1,(7),ch,inst_34927);
} else
{if((state_val_34944 === (6)))
{var inst_34939 = (state_34943[(2)]);var state_34943__$1 = state_34943;var statearr_34949_34966 = state_34943__$1;(statearr_34949_34966[(2)] = inst_34939);
(statearr_34949_34966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34944 === (3)))
{var inst_34941 = (state_34943[(2)]);var state_34943__$1 = state_34943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34943__$1,inst_34941);
} else
{if((state_val_34944 === (2)))
{var inst_34924 = (state_34943[(7)]);var state_34943__$1 = state_34943;if(cljs.core.truth_(inst_34924))
{var statearr_34950_34967 = state_34943__$1;(statearr_34950_34967[(1)] = (4));
} else
{var statearr_34951_34968 = state_34943__$1;(statearr_34951_34968[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34944 === (9)))
{var state_34943__$1 = state_34943;var statearr_34952_34969 = state_34943__$1;(statearr_34952_34969[(2)] = null);
(statearr_34952_34969[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34944 === (5)))
{var state_34943__$1 = state_34943;if(cljs.core.truth_(close_QMARK_))
{var statearr_34953_34970 = state_34943__$1;(statearr_34953_34970[(1)] = (8));
} else
{var statearr_34954_34971 = state_34943__$1;(statearr_34954_34971[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34944 === (10)))
{var inst_34937 = (state_34943[(2)]);var state_34943__$1 = state_34943;var statearr_34955_34972 = state_34943__$1;(statearr_34955_34972[(2)] = inst_34937);
(statearr_34955_34972[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34944 === (8)))
{var inst_34934 = cljs.core.async.close_BANG_.call(null,ch);var state_34943__$1 = state_34943;var statearr_34956_34973 = state_34943__$1;(statearr_34956_34973[(2)] = inst_34934);
(statearr_34956_34973[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_34960 = [null,null,null,null,null,null,null,null,null];(statearr_34960[(0)] = state_machine__5694__auto__);
(statearr_34960[(1)] = (1));
return statearr_34960;
});
var state_machine__5694__auto____1 = (function (state_34943){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34961){if((e34961 instanceof Object))
{var ex__5697__auto__ = e34961;var statearr_34962_34974 = state_34943;(statearr_34962_34974[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34961;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34975 = state_34943;
state_34943 = G__34975;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34943){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34963 = f__5709__auto__.call(null);(statearr_34963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34963;
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
cljs.core.async.Mux = (function (){var obj34977 = {};return obj34977;
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
cljs.core.async.Mult = (function (){var obj34979 = {};return obj34979;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35203 = (function (cs,ch,mult,meta35204){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35204 = meta35204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35203.cljs$lang$type = true;
cljs.core.async.t35203.cljs$lang$ctorStr = "cljs.core.async/t35203";
cljs.core.async.t35203.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35203");
});})(cs))
;
cljs.core.async.t35203.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35203.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35203.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35203.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35203.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35205){var self__ = this;
var _35205__$1 = this;return self__.meta35204;
});})(cs))
;
cljs.core.async.t35203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35205,meta35204__$1){var self__ = this;
var _35205__$1 = this;return (new cljs.core.async.t35203(self__.cs,self__.ch,self__.mult,meta35204__$1));
});})(cs))
;
cljs.core.async.__GT_t35203 = ((function (cs){
return (function __GT_t35203(cs__$1,ch__$1,mult__$1,meta35204){return (new cljs.core.async.t35203(cs__$1,ch__$1,mult__$1,meta35204));
});})(cs))
;
}
return (new cljs.core.async.t35203(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___35426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35426,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35426,cs,m,dchan,dctr,done){
return (function (state_35340){var state_val_35341 = (state_35340[(1)]);if((state_val_35341 === (7)))
{var inst_35336 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35342_35427 = state_35340__$1;(statearr_35342_35427[(2)] = inst_35336);
(statearr_35342_35427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (20)))
{var inst_35237 = (state_35340[(7)]);var inst_35247 = cljs.core.first.call(null,inst_35237);var inst_35248 = cljs.core.nth.call(null,inst_35247,(0),null);var inst_35249 = cljs.core.nth.call(null,inst_35247,(1),null);var state_35340__$1 = (function (){var statearr_35343 = state_35340;(statearr_35343[(8)] = inst_35248);
return statearr_35343;
})();if(cljs.core.truth_(inst_35249))
{var statearr_35344_35428 = state_35340__$1;(statearr_35344_35428[(1)] = (22));
} else
{var statearr_35345_35429 = state_35340__$1;(statearr_35345_35429[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (27)))
{var inst_35279 = (state_35340[(9)]);var inst_35277 = (state_35340[(10)]);var inst_35284 = cljs.core._nth.call(null,inst_35277,inst_35279);var state_35340__$1 = (function (){var statearr_35346 = state_35340;(statearr_35346[(11)] = inst_35284);
return statearr_35346;
})();var statearr_35347_35430 = state_35340__$1;(statearr_35347_35430[(2)] = null);
(statearr_35347_35430[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (1)))
{var state_35340__$1 = state_35340;var statearr_35348_35431 = state_35340__$1;(statearr_35348_35431[(2)] = null);
(statearr_35348_35431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (24)))
{var inst_35237 = (state_35340[(7)]);var inst_35254 = (state_35340[(2)]);var inst_35255 = cljs.core.next.call(null,inst_35237);var inst_35217 = inst_35255;var inst_35218 = null;var inst_35219 = (0);var inst_35220 = (0);var state_35340__$1 = (function (){var statearr_35349 = state_35340;(statearr_35349[(12)] = inst_35217);
(statearr_35349[(13)] = inst_35219);
(statearr_35349[(14)] = inst_35254);
(statearr_35349[(15)] = inst_35218);
(statearr_35349[(16)] = inst_35220);
return statearr_35349;
})();var statearr_35350_35432 = state_35340__$1;(statearr_35350_35432[(2)] = null);
(statearr_35350_35432[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (39)))
{var inst_35297 = (state_35340[(17)]);var inst_35315 = (state_35340[(2)]);var inst_35316 = cljs.core.next.call(null,inst_35297);var inst_35276 = inst_35316;var inst_35277 = null;var inst_35278 = (0);var inst_35279 = (0);var state_35340__$1 = (function (){var statearr_35354 = state_35340;(statearr_35354[(18)] = inst_35278);
(statearr_35354[(9)] = inst_35279);
(statearr_35354[(19)] = inst_35276);
(statearr_35354[(20)] = inst_35315);
(statearr_35354[(10)] = inst_35277);
return statearr_35354;
})();var statearr_35355_35433 = state_35340__$1;(statearr_35355_35433[(2)] = null);
(statearr_35355_35433[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (4)))
{var inst_35208 = (state_35340[(21)]);var inst_35208__$1 = (state_35340[(2)]);var inst_35209 = (inst_35208__$1 == null);var state_35340__$1 = (function (){var statearr_35356 = state_35340;(statearr_35356[(21)] = inst_35208__$1);
return statearr_35356;
})();if(cljs.core.truth_(inst_35209))
{var statearr_35357_35434 = state_35340__$1;(statearr_35357_35434[(1)] = (5));
} else
{var statearr_35358_35435 = state_35340__$1;(statearr_35358_35435[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (15)))
{var inst_35217 = (state_35340[(12)]);var inst_35219 = (state_35340[(13)]);var inst_35218 = (state_35340[(15)]);var inst_35220 = (state_35340[(16)]);var inst_35233 = (state_35340[(2)]);var inst_35234 = (inst_35220 + (1));var tmp35351 = inst_35217;var tmp35352 = inst_35219;var tmp35353 = inst_35218;var inst_35217__$1 = tmp35351;var inst_35218__$1 = tmp35353;var inst_35219__$1 = tmp35352;var inst_35220__$1 = inst_35234;var state_35340__$1 = (function (){var statearr_35359 = state_35340;(statearr_35359[(12)] = inst_35217__$1);
(statearr_35359[(13)] = inst_35219__$1);
(statearr_35359[(22)] = inst_35233);
(statearr_35359[(15)] = inst_35218__$1);
(statearr_35359[(16)] = inst_35220__$1);
return statearr_35359;
})();var statearr_35360_35436 = state_35340__$1;(statearr_35360_35436[(2)] = null);
(statearr_35360_35436[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (21)))
{var inst_35258 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35361_35437 = state_35340__$1;(statearr_35361_35437[(2)] = inst_35258);
(statearr_35361_35437[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (31)))
{var inst_35284 = (state_35340[(11)]);var inst_35285 = (state_35340[(2)]);var inst_35286 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35287 = cljs.core.async.untap_STAR_.call(null,m,inst_35284);var state_35340__$1 = (function (){var statearr_35362 = state_35340;(statearr_35362[(23)] = inst_35286);
(statearr_35362[(24)] = inst_35285);
return statearr_35362;
})();var statearr_35363_35438 = state_35340__$1;(statearr_35363_35438[(2)] = inst_35287);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (32)))
{var inst_35208 = (state_35340[(21)]);var inst_35284 = (state_35340[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35340,(31),Object,null,(30));var inst_35291 = cljs.core.async.put_BANG_.call(null,inst_35284,inst_35208,done);var state_35340__$1 = state_35340;var statearr_35364_35439 = state_35340__$1;(statearr_35364_35439[(2)] = inst_35291);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (40)))
{var inst_35306 = (state_35340[(25)]);var inst_35307 = (state_35340[(2)]);var inst_35308 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35309 = cljs.core.async.untap_STAR_.call(null,m,inst_35306);var state_35340__$1 = (function (){var statearr_35365 = state_35340;(statearr_35365[(26)] = inst_35307);
(statearr_35365[(27)] = inst_35308);
return statearr_35365;
})();var statearr_35366_35440 = state_35340__$1;(statearr_35366_35440[(2)] = inst_35309);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (33)))
{var inst_35297 = (state_35340[(17)]);var inst_35299 = cljs.core.chunked_seq_QMARK_.call(null,inst_35297);var state_35340__$1 = state_35340;if(inst_35299)
{var statearr_35367_35441 = state_35340__$1;(statearr_35367_35441[(1)] = (36));
} else
{var statearr_35368_35442 = state_35340__$1;(statearr_35368_35442[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (13)))
{var inst_35227 = (state_35340[(28)]);var inst_35230 = cljs.core.async.close_BANG_.call(null,inst_35227);var state_35340__$1 = state_35340;var statearr_35369_35443 = state_35340__$1;(statearr_35369_35443[(2)] = inst_35230);
(statearr_35369_35443[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (22)))
{var inst_35248 = (state_35340[(8)]);var inst_35251 = cljs.core.async.close_BANG_.call(null,inst_35248);var state_35340__$1 = state_35340;var statearr_35370_35444 = state_35340__$1;(statearr_35370_35444[(2)] = inst_35251);
(statearr_35370_35444[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (36)))
{var inst_35297 = (state_35340[(17)]);var inst_35301 = cljs.core.chunk_first.call(null,inst_35297);var inst_35302 = cljs.core.chunk_rest.call(null,inst_35297);var inst_35303 = cljs.core.count.call(null,inst_35301);var inst_35276 = inst_35302;var inst_35277 = inst_35301;var inst_35278 = inst_35303;var inst_35279 = (0);var state_35340__$1 = (function (){var statearr_35371 = state_35340;(statearr_35371[(18)] = inst_35278);
(statearr_35371[(9)] = inst_35279);
(statearr_35371[(19)] = inst_35276);
(statearr_35371[(10)] = inst_35277);
return statearr_35371;
})();var statearr_35372_35445 = state_35340__$1;(statearr_35372_35445[(2)] = null);
(statearr_35372_35445[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (41)))
{var inst_35208 = (state_35340[(21)]);var inst_35306 = (state_35340[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35340,(40),Object,null,(39));var inst_35313 = cljs.core.async.put_BANG_.call(null,inst_35306,inst_35208,done);var state_35340__$1 = state_35340;var statearr_35373_35446 = state_35340__$1;(statearr_35373_35446[(2)] = inst_35313);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (43)))
{var state_35340__$1 = state_35340;var statearr_35374_35447 = state_35340__$1;(statearr_35374_35447[(2)] = null);
(statearr_35374_35447[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (29)))
{var inst_35324 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35375_35448 = state_35340__$1;(statearr_35375_35448[(2)] = inst_35324);
(statearr_35375_35448[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (44)))
{var inst_35333 = (state_35340[(2)]);var state_35340__$1 = (function (){var statearr_35376 = state_35340;(statearr_35376[(29)] = inst_35333);
return statearr_35376;
})();var statearr_35377_35449 = state_35340__$1;(statearr_35377_35449[(2)] = null);
(statearr_35377_35449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (6)))
{var inst_35268 = (state_35340[(30)]);var inst_35267 = cljs.core.deref.call(null,cs);var inst_35268__$1 = cljs.core.keys.call(null,inst_35267);var inst_35269 = cljs.core.count.call(null,inst_35268__$1);var inst_35270 = cljs.core.reset_BANG_.call(null,dctr,inst_35269);var inst_35275 = cljs.core.seq.call(null,inst_35268__$1);var inst_35276 = inst_35275;var inst_35277 = null;var inst_35278 = (0);var inst_35279 = (0);var state_35340__$1 = (function (){var statearr_35378 = state_35340;(statearr_35378[(18)] = inst_35278);
(statearr_35378[(30)] = inst_35268__$1);
(statearr_35378[(31)] = inst_35270);
(statearr_35378[(9)] = inst_35279);
(statearr_35378[(19)] = inst_35276);
(statearr_35378[(10)] = inst_35277);
return statearr_35378;
})();var statearr_35379_35450 = state_35340__$1;(statearr_35379_35450[(2)] = null);
(statearr_35379_35450[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (28)))
{var inst_35297 = (state_35340[(17)]);var inst_35276 = (state_35340[(19)]);var inst_35297__$1 = cljs.core.seq.call(null,inst_35276);var state_35340__$1 = (function (){var statearr_35380 = state_35340;(statearr_35380[(17)] = inst_35297__$1);
return statearr_35380;
})();if(inst_35297__$1)
{var statearr_35381_35451 = state_35340__$1;(statearr_35381_35451[(1)] = (33));
} else
{var statearr_35382_35452 = state_35340__$1;(statearr_35382_35452[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (25)))
{var inst_35278 = (state_35340[(18)]);var inst_35279 = (state_35340[(9)]);var inst_35281 = (inst_35279 < inst_35278);var inst_35282 = inst_35281;var state_35340__$1 = state_35340;if(cljs.core.truth_(inst_35282))
{var statearr_35383_35453 = state_35340__$1;(statearr_35383_35453[(1)] = (27));
} else
{var statearr_35384_35454 = state_35340__$1;(statearr_35384_35454[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (34)))
{var state_35340__$1 = state_35340;var statearr_35385_35455 = state_35340__$1;(statearr_35385_35455[(2)] = null);
(statearr_35385_35455[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (17)))
{var state_35340__$1 = state_35340;var statearr_35386_35456 = state_35340__$1;(statearr_35386_35456[(2)] = null);
(statearr_35386_35456[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (3)))
{var inst_35338 = (state_35340[(2)]);var state_35340__$1 = state_35340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35340__$1,inst_35338);
} else
{if((state_val_35341 === (12)))
{var inst_35263 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35387_35457 = state_35340__$1;(statearr_35387_35457[(2)] = inst_35263);
(statearr_35387_35457[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (2)))
{var state_35340__$1 = state_35340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35340__$1,(4),ch);
} else
{if((state_val_35341 === (23)))
{var state_35340__$1 = state_35340;var statearr_35388_35458 = state_35340__$1;(statearr_35388_35458[(2)] = null);
(statearr_35388_35458[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (35)))
{var inst_35322 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35389_35459 = state_35340__$1;(statearr_35389_35459[(2)] = inst_35322);
(statearr_35389_35459[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (19)))
{var inst_35237 = (state_35340[(7)]);var inst_35241 = cljs.core.chunk_first.call(null,inst_35237);var inst_35242 = cljs.core.chunk_rest.call(null,inst_35237);var inst_35243 = cljs.core.count.call(null,inst_35241);var inst_35217 = inst_35242;var inst_35218 = inst_35241;var inst_35219 = inst_35243;var inst_35220 = (0);var state_35340__$1 = (function (){var statearr_35390 = state_35340;(statearr_35390[(12)] = inst_35217);
(statearr_35390[(13)] = inst_35219);
(statearr_35390[(15)] = inst_35218);
(statearr_35390[(16)] = inst_35220);
return statearr_35390;
})();var statearr_35391_35460 = state_35340__$1;(statearr_35391_35460[(2)] = null);
(statearr_35391_35460[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (11)))
{var inst_35217 = (state_35340[(12)]);var inst_35237 = (state_35340[(7)]);var inst_35237__$1 = cljs.core.seq.call(null,inst_35217);var state_35340__$1 = (function (){var statearr_35392 = state_35340;(statearr_35392[(7)] = inst_35237__$1);
return statearr_35392;
})();if(inst_35237__$1)
{var statearr_35393_35461 = state_35340__$1;(statearr_35393_35461[(1)] = (16));
} else
{var statearr_35394_35462 = state_35340__$1;(statearr_35394_35462[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (9)))
{var inst_35265 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35395_35463 = state_35340__$1;(statearr_35395_35463[(2)] = inst_35265);
(statearr_35395_35463[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (5)))
{var inst_35215 = cljs.core.deref.call(null,cs);var inst_35216 = cljs.core.seq.call(null,inst_35215);var inst_35217 = inst_35216;var inst_35218 = null;var inst_35219 = (0);var inst_35220 = (0);var state_35340__$1 = (function (){var statearr_35396 = state_35340;(statearr_35396[(12)] = inst_35217);
(statearr_35396[(13)] = inst_35219);
(statearr_35396[(15)] = inst_35218);
(statearr_35396[(16)] = inst_35220);
return statearr_35396;
})();var statearr_35397_35464 = state_35340__$1;(statearr_35397_35464[(2)] = null);
(statearr_35397_35464[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (14)))
{var state_35340__$1 = state_35340;var statearr_35398_35465 = state_35340__$1;(statearr_35398_35465[(2)] = null);
(statearr_35398_35465[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (45)))
{var inst_35330 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35399_35466 = state_35340__$1;(statearr_35399_35466[(2)] = inst_35330);
(statearr_35399_35466[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (26)))
{var inst_35268 = (state_35340[(30)]);var inst_35326 = (state_35340[(2)]);var inst_35327 = cljs.core.seq.call(null,inst_35268);var state_35340__$1 = (function (){var statearr_35400 = state_35340;(statearr_35400[(32)] = inst_35326);
return statearr_35400;
})();if(inst_35327)
{var statearr_35401_35467 = state_35340__$1;(statearr_35401_35467[(1)] = (42));
} else
{var statearr_35402_35468 = state_35340__$1;(statearr_35402_35468[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (16)))
{var inst_35237 = (state_35340[(7)]);var inst_35239 = cljs.core.chunked_seq_QMARK_.call(null,inst_35237);var state_35340__$1 = state_35340;if(inst_35239)
{var statearr_35406_35469 = state_35340__$1;(statearr_35406_35469[(1)] = (19));
} else
{var statearr_35407_35470 = state_35340__$1;(statearr_35407_35470[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (38)))
{var inst_35319 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35408_35471 = state_35340__$1;(statearr_35408_35471[(2)] = inst_35319);
(statearr_35408_35471[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (30)))
{var inst_35278 = (state_35340[(18)]);var inst_35279 = (state_35340[(9)]);var inst_35276 = (state_35340[(19)]);var inst_35277 = (state_35340[(10)]);var inst_35293 = (state_35340[(2)]);var inst_35294 = (inst_35279 + (1));var tmp35403 = inst_35278;var tmp35404 = inst_35276;var tmp35405 = inst_35277;var inst_35276__$1 = tmp35404;var inst_35277__$1 = tmp35405;var inst_35278__$1 = tmp35403;var inst_35279__$1 = inst_35294;var state_35340__$1 = (function (){var statearr_35409 = state_35340;(statearr_35409[(18)] = inst_35278__$1);
(statearr_35409[(33)] = inst_35293);
(statearr_35409[(9)] = inst_35279__$1);
(statearr_35409[(19)] = inst_35276__$1);
(statearr_35409[(10)] = inst_35277__$1);
return statearr_35409;
})();var statearr_35410_35472 = state_35340__$1;(statearr_35410_35472[(2)] = null);
(statearr_35410_35472[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (10)))
{var inst_35218 = (state_35340[(15)]);var inst_35220 = (state_35340[(16)]);var inst_35226 = cljs.core._nth.call(null,inst_35218,inst_35220);var inst_35227 = cljs.core.nth.call(null,inst_35226,(0),null);var inst_35228 = cljs.core.nth.call(null,inst_35226,(1),null);var state_35340__$1 = (function (){var statearr_35411 = state_35340;(statearr_35411[(28)] = inst_35227);
return statearr_35411;
})();if(cljs.core.truth_(inst_35228))
{var statearr_35412_35473 = state_35340__$1;(statearr_35412_35473[(1)] = (13));
} else
{var statearr_35413_35474 = state_35340__$1;(statearr_35413_35474[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (18)))
{var inst_35261 = (state_35340[(2)]);var state_35340__$1 = state_35340;var statearr_35414_35475 = state_35340__$1;(statearr_35414_35475[(2)] = inst_35261);
(statearr_35414_35475[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (42)))
{var state_35340__$1 = state_35340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35340__$1,(45),dchan);
} else
{if((state_val_35341 === (37)))
{var inst_35297 = (state_35340[(17)]);var inst_35306 = cljs.core.first.call(null,inst_35297);var state_35340__$1 = (function (){var statearr_35415 = state_35340;(statearr_35415[(25)] = inst_35306);
return statearr_35415;
})();var statearr_35416_35476 = state_35340__$1;(statearr_35416_35476[(2)] = null);
(statearr_35416_35476[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35341 === (8)))
{var inst_35219 = (state_35340[(13)]);var inst_35220 = (state_35340[(16)]);var inst_35222 = (inst_35220 < inst_35219);var inst_35223 = inst_35222;var state_35340__$1 = state_35340;if(cljs.core.truth_(inst_35223))
{var statearr_35417_35477 = state_35340__$1;(statearr_35417_35477[(1)] = (10));
} else
{var statearr_35418_35478 = state_35340__$1;(statearr_35418_35478[(1)] = (11));
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
});})(c__5708__auto___35426,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___35426,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35422[(0)] = state_machine__5694__auto__);
(statearr_35422[(1)] = (1));
return statearr_35422;
});
var state_machine__5694__auto____1 = (function (state_35340){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35340);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35423){if((e35423 instanceof Object))
{var ex__5697__auto__ = e35423;var statearr_35424_35479 = state_35340;(statearr_35424_35479[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35423;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35480 = state_35340;
state_35340 = G__35480;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35340){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35426,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_35425 = f__5709__auto__.call(null);(statearr_35425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35426);
return statearr_35425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35426,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj35482 = {};return obj35482;
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
;var m = (function (){if(typeof cljs.core.async.t35592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35592 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35593){
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
this.meta35593 = meta35593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35592.cljs$lang$type = true;
cljs.core.async.t35592.cljs$lang$ctorStr = "cljs.core.async/t35592";
cljs.core.async.t35592.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35592");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35592.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35594){var self__ = this;
var _35594__$1 = this;return self__.meta35593;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35594,meta35593__$1){var self__ = this;
var _35594__$1 = this;return (new cljs.core.async.t35592(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35593__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35592 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35592(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35593){return (new cljs.core.async.t35592(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35593));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35592(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___35701 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35659){var state_val_35660 = (state_35659[(1)]);if((state_val_35660 === (7)))
{var inst_35608 = (state_35659[(7)]);var inst_35613 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35608);var state_35659__$1 = state_35659;var statearr_35661_35702 = state_35659__$1;(statearr_35661_35702[(2)] = inst_35613);
(statearr_35661_35702[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (20)))
{var inst_35623 = (state_35659[(8)]);var state_35659__$1 = state_35659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35659__$1,(23),out,inst_35623);
} else
{if((state_val_35660 === (1)))
{var inst_35598 = (state_35659[(9)]);var inst_35598__$1 = calc_state.call(null);var inst_35599 = cljs.core.seq_QMARK_.call(null,inst_35598__$1);var state_35659__$1 = (function (){var statearr_35662 = state_35659;(statearr_35662[(9)] = inst_35598__$1);
return statearr_35662;
})();if(inst_35599)
{var statearr_35663_35703 = state_35659__$1;(statearr_35663_35703[(1)] = (2));
} else
{var statearr_35664_35704 = state_35659__$1;(statearr_35664_35704[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (4)))
{var inst_35598 = (state_35659[(9)]);var inst_35604 = (state_35659[(2)]);var inst_35605 = cljs.core.get.call(null,inst_35604,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35606 = cljs.core.get.call(null,inst_35604,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35607 = cljs.core.get.call(null,inst_35604,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_35608 = inst_35598;var state_35659__$1 = (function (){var statearr_35665 = state_35659;(statearr_35665[(10)] = inst_35605);
(statearr_35665[(7)] = inst_35608);
(statearr_35665[(11)] = inst_35606);
(statearr_35665[(12)] = inst_35607);
return statearr_35665;
})();var statearr_35666_35705 = state_35659__$1;(statearr_35666_35705[(2)] = null);
(statearr_35666_35705[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (15)))
{var state_35659__$1 = state_35659;var statearr_35667_35706 = state_35659__$1;(statearr_35667_35706[(2)] = null);
(statearr_35667_35706[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (21)))
{var state_35659__$1 = state_35659;var statearr_35668_35707 = state_35659__$1;(statearr_35668_35707[(2)] = null);
(statearr_35668_35707[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (13)))
{var inst_35655 = (state_35659[(2)]);var state_35659__$1 = state_35659;var statearr_35669_35708 = state_35659__$1;(statearr_35669_35708[(2)] = inst_35655);
(statearr_35669_35708[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (22)))
{var inst_35616 = (state_35659[(13)]);var inst_35652 = (state_35659[(2)]);var inst_35608 = inst_35616;var state_35659__$1 = (function (){var statearr_35670 = state_35659;(statearr_35670[(14)] = inst_35652);
(statearr_35670[(7)] = inst_35608);
return statearr_35670;
})();var statearr_35671_35709 = state_35659__$1;(statearr_35671_35709[(2)] = null);
(statearr_35671_35709[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (6)))
{var inst_35657 = (state_35659[(2)]);var state_35659__$1 = state_35659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35659__$1,inst_35657);
} else
{if((state_val_35660 === (17)))
{var inst_35638 = (state_35659[(15)]);var state_35659__$1 = state_35659;var statearr_35672_35710 = state_35659__$1;(statearr_35672_35710[(2)] = inst_35638);
(statearr_35672_35710[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (3)))
{var inst_35598 = (state_35659[(9)]);var state_35659__$1 = state_35659;var statearr_35673_35711 = state_35659__$1;(statearr_35673_35711[(2)] = inst_35598);
(statearr_35673_35711[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (12)))
{var inst_35638 = (state_35659[(15)]);var inst_35624 = (state_35659[(16)]);var inst_35619 = (state_35659[(17)]);var inst_35638__$1 = inst_35619.call(null,inst_35624);var state_35659__$1 = (function (){var statearr_35674 = state_35659;(statearr_35674[(15)] = inst_35638__$1);
return statearr_35674;
})();if(cljs.core.truth_(inst_35638__$1))
{var statearr_35675_35712 = state_35659__$1;(statearr_35675_35712[(1)] = (17));
} else
{var statearr_35676_35713 = state_35659__$1;(statearr_35676_35713[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (2)))
{var inst_35598 = (state_35659[(9)]);var inst_35601 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35598);var state_35659__$1 = state_35659;var statearr_35677_35714 = state_35659__$1;(statearr_35677_35714[(2)] = inst_35601);
(statearr_35677_35714[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (23)))
{var inst_35649 = (state_35659[(2)]);var state_35659__$1 = state_35659;var statearr_35678_35715 = state_35659__$1;(statearr_35678_35715[(2)] = inst_35649);
(statearr_35678_35715[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (19)))
{var inst_35646 = (state_35659[(2)]);var state_35659__$1 = state_35659;if(cljs.core.truth_(inst_35646))
{var statearr_35679_35716 = state_35659__$1;(statearr_35679_35716[(1)] = (20));
} else
{var statearr_35680_35717 = state_35659__$1;(statearr_35680_35717[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (11)))
{var inst_35623 = (state_35659[(8)]);var inst_35629 = (inst_35623 == null);var state_35659__$1 = state_35659;if(cljs.core.truth_(inst_35629))
{var statearr_35681_35718 = state_35659__$1;(statearr_35681_35718[(1)] = (14));
} else
{var statearr_35682_35719 = state_35659__$1;(statearr_35682_35719[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (9)))
{var inst_35616 = (state_35659[(13)]);var inst_35616__$1 = (state_35659[(2)]);var inst_35617 = cljs.core.get.call(null,inst_35616__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35618 = cljs.core.get.call(null,inst_35616__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35619 = cljs.core.get.call(null,inst_35616__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_35659__$1 = (function (){var statearr_35683 = state_35659;(statearr_35683[(13)] = inst_35616__$1);
(statearr_35683[(18)] = inst_35618);
(statearr_35683[(17)] = inst_35619);
return statearr_35683;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35659__$1,(10),inst_35617);
} else
{if((state_val_35660 === (5)))
{var inst_35608 = (state_35659[(7)]);var inst_35611 = cljs.core.seq_QMARK_.call(null,inst_35608);var state_35659__$1 = state_35659;if(inst_35611)
{var statearr_35684_35720 = state_35659__$1;(statearr_35684_35720[(1)] = (7));
} else
{var statearr_35685_35721 = state_35659__$1;(statearr_35685_35721[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (14)))
{var inst_35624 = (state_35659[(16)]);var inst_35631 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35624);var state_35659__$1 = state_35659;var statearr_35686_35722 = state_35659__$1;(statearr_35686_35722[(2)] = inst_35631);
(statearr_35686_35722[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (16)))
{var inst_35634 = (state_35659[(2)]);var inst_35635 = calc_state.call(null);var inst_35608 = inst_35635;var state_35659__$1 = (function (){var statearr_35687 = state_35659;(statearr_35687[(19)] = inst_35634);
(statearr_35687[(7)] = inst_35608);
return statearr_35687;
})();var statearr_35688_35723 = state_35659__$1;(statearr_35688_35723[(2)] = null);
(statearr_35688_35723[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (10)))
{var inst_35624 = (state_35659[(16)]);var inst_35623 = (state_35659[(8)]);var inst_35622 = (state_35659[(2)]);var inst_35623__$1 = cljs.core.nth.call(null,inst_35622,(0),null);var inst_35624__$1 = cljs.core.nth.call(null,inst_35622,(1),null);var inst_35625 = (inst_35623__$1 == null);var inst_35626 = cljs.core._EQ_.call(null,inst_35624__$1,change);var inst_35627 = (inst_35625) || (inst_35626);var state_35659__$1 = (function (){var statearr_35689 = state_35659;(statearr_35689[(16)] = inst_35624__$1);
(statearr_35689[(8)] = inst_35623__$1);
return statearr_35689;
})();if(cljs.core.truth_(inst_35627))
{var statearr_35690_35724 = state_35659__$1;(statearr_35690_35724[(1)] = (11));
} else
{var statearr_35691_35725 = state_35659__$1;(statearr_35691_35725[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (18)))
{var inst_35618 = (state_35659[(18)]);var inst_35624 = (state_35659[(16)]);var inst_35619 = (state_35659[(17)]);var inst_35641 = cljs.core.empty_QMARK_.call(null,inst_35619);var inst_35642 = inst_35618.call(null,inst_35624);var inst_35643 = cljs.core.not.call(null,inst_35642);var inst_35644 = (inst_35641) && (inst_35643);var state_35659__$1 = state_35659;var statearr_35692_35726 = state_35659__$1;(statearr_35692_35726[(2)] = inst_35644);
(statearr_35692_35726[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35660 === (8)))
{var inst_35608 = (state_35659[(7)]);var state_35659__$1 = state_35659;var statearr_35693_35727 = state_35659__$1;(statearr_35693_35727[(2)] = inst_35608);
(statearr_35693_35727[(1)] = (9));
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
});})(c__5708__auto___35701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___35701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35697[(0)] = state_machine__5694__auto__);
(statearr_35697[(1)] = (1));
return statearr_35697;
});
var state_machine__5694__auto____1 = (function (state_35659){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35659);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35698){if((e35698 instanceof Object))
{var ex__5697__auto__ = e35698;var statearr_35699_35728 = state_35659;(statearr_35699_35728[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35698;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35729 = state_35659;
state_35659 = G__35729;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35659){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_35700 = f__5709__auto__.call(null);(statearr_35700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35701);
return statearr_35700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj35731 = {};return obj35731;
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
return (function (p1__35732_SHARP_){if(cljs.core.truth_(p1__35732_SHARP_.call(null,topic)))
{return p1__35732_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35732_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35857 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35858){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35858 = meta35858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35857.cljs$lang$type = true;
cljs.core.async.t35857.cljs$lang$ctorStr = "cljs.core.async/t35857";
cljs.core.async.t35857.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35857");
});})(mults,ensure_mult))
;
cljs.core.async.t35857.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35857.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35857.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35857.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35859){var self__ = this;
var _35859__$1 = this;return self__.meta35858;
});})(mults,ensure_mult))
;
cljs.core.async.t35857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35859,meta35858__$1){var self__ = this;
var _35859__$1 = this;return (new cljs.core.async.t35857(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35858__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35857 = ((function (mults,ensure_mult){
return (function __GT_t35857(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35858){return (new cljs.core.async.t35857(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35858));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35857(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___35981 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35981,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35981,mults,ensure_mult,p){
return (function (state_35933){var state_val_35934 = (state_35933[(1)]);if((state_val_35934 === (7)))
{var inst_35929 = (state_35933[(2)]);var state_35933__$1 = state_35933;var statearr_35935_35982 = state_35933__$1;(statearr_35935_35982[(2)] = inst_35929);
(statearr_35935_35982[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (20)))
{var state_35933__$1 = state_35933;var statearr_35936_35983 = state_35933__$1;(statearr_35936_35983[(2)] = null);
(statearr_35936_35983[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (1)))
{var state_35933__$1 = state_35933;var statearr_35937_35984 = state_35933__$1;(statearr_35937_35984[(2)] = null);
(statearr_35937_35984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (24)))
{var inst_35912 = (state_35933[(7)]);var inst_35862 = (state_35933[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35933,(23),Object,null,(22));var inst_35919 = cljs.core.async.muxch_STAR_.call(null,inst_35912);var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35933__$1,(25),inst_35919,inst_35862);
} else
{if((state_val_35934 === (4)))
{var inst_35862 = (state_35933[(8)]);var inst_35862__$1 = (state_35933[(2)]);var inst_35863 = (inst_35862__$1 == null);var state_35933__$1 = (function (){var statearr_35938 = state_35933;(statearr_35938[(8)] = inst_35862__$1);
return statearr_35938;
})();if(cljs.core.truth_(inst_35863))
{var statearr_35939_35985 = state_35933__$1;(statearr_35939_35985[(1)] = (5));
} else
{var statearr_35940_35986 = state_35933__$1;(statearr_35940_35986[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (15)))
{var inst_35904 = (state_35933[(2)]);var state_35933__$1 = state_35933;var statearr_35941_35987 = state_35933__$1;(statearr_35941_35987[(2)] = inst_35904);
(statearr_35941_35987[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (21)))
{var inst_35926 = (state_35933[(2)]);var state_35933__$1 = (function (){var statearr_35942 = state_35933;(statearr_35942[(9)] = inst_35926);
return statearr_35942;
})();var statearr_35943_35988 = state_35933__$1;(statearr_35943_35988[(2)] = null);
(statearr_35943_35988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (13)))
{var inst_35886 = (state_35933[(10)]);var inst_35888 = cljs.core.chunked_seq_QMARK_.call(null,inst_35886);var state_35933__$1 = state_35933;if(inst_35888)
{var statearr_35944_35989 = state_35933__$1;(statearr_35944_35989[(1)] = (16));
} else
{var statearr_35945_35990 = state_35933__$1;(statearr_35945_35990[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (22)))
{var inst_35923 = (state_35933[(2)]);var state_35933__$1 = state_35933;var statearr_35946_35991 = state_35933__$1;(statearr_35946_35991[(2)] = inst_35923);
(statearr_35946_35991[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (6)))
{var inst_35912 = (state_35933[(7)]);var inst_35862 = (state_35933[(8)]);var inst_35910 = (state_35933[(11)]);var inst_35910__$1 = topic_fn.call(null,inst_35862);var inst_35911 = cljs.core.deref.call(null,mults);var inst_35912__$1 = cljs.core.get.call(null,inst_35911,inst_35910__$1);var state_35933__$1 = (function (){var statearr_35947 = state_35933;(statearr_35947[(7)] = inst_35912__$1);
(statearr_35947[(11)] = inst_35910__$1);
return statearr_35947;
})();if(cljs.core.truth_(inst_35912__$1))
{var statearr_35948_35992 = state_35933__$1;(statearr_35948_35992[(1)] = (19));
} else
{var statearr_35949_35993 = state_35933__$1;(statearr_35949_35993[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (25)))
{var inst_35921 = (state_35933[(2)]);var state_35933__$1 = state_35933;var statearr_35950_35994 = state_35933__$1;(statearr_35950_35994[(2)] = inst_35921);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (17)))
{var inst_35886 = (state_35933[(10)]);var inst_35895 = cljs.core.first.call(null,inst_35886);var inst_35896 = cljs.core.async.muxch_STAR_.call(null,inst_35895);var inst_35897 = cljs.core.async.close_BANG_.call(null,inst_35896);var inst_35898 = cljs.core.next.call(null,inst_35886);var inst_35872 = inst_35898;var inst_35873 = null;var inst_35874 = (0);var inst_35875 = (0);var state_35933__$1 = (function (){var statearr_35951 = state_35933;(statearr_35951[(12)] = inst_35872);
(statearr_35951[(13)] = inst_35875);
(statearr_35951[(14)] = inst_35873);
(statearr_35951[(15)] = inst_35897);
(statearr_35951[(16)] = inst_35874);
return statearr_35951;
})();var statearr_35952_35995 = state_35933__$1;(statearr_35952_35995[(2)] = null);
(statearr_35952_35995[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (3)))
{var inst_35931 = (state_35933[(2)]);var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35933__$1,inst_35931);
} else
{if((state_val_35934 === (12)))
{var inst_35906 = (state_35933[(2)]);var state_35933__$1 = state_35933;var statearr_35953_35996 = state_35933__$1;(statearr_35953_35996[(2)] = inst_35906);
(statearr_35953_35996[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (2)))
{var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,(4),ch);
} else
{if((state_val_35934 === (23)))
{var inst_35910 = (state_35933[(11)]);var inst_35914 = (state_35933[(2)]);var inst_35915 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35910);var state_35933__$1 = (function (){var statearr_35954 = state_35933;(statearr_35954[(17)] = inst_35914);
return statearr_35954;
})();var statearr_35955_35997 = state_35933__$1;(statearr_35955_35997[(2)] = inst_35915);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (19)))
{var state_35933__$1 = state_35933;var statearr_35956_35998 = state_35933__$1;(statearr_35956_35998[(2)] = null);
(statearr_35956_35998[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (11)))
{var inst_35872 = (state_35933[(12)]);var inst_35886 = (state_35933[(10)]);var inst_35886__$1 = cljs.core.seq.call(null,inst_35872);var state_35933__$1 = (function (){var statearr_35957 = state_35933;(statearr_35957[(10)] = inst_35886__$1);
return statearr_35957;
})();if(inst_35886__$1)
{var statearr_35958_35999 = state_35933__$1;(statearr_35958_35999[(1)] = (13));
} else
{var statearr_35959_36000 = state_35933__$1;(statearr_35959_36000[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (9)))
{var inst_35908 = (state_35933[(2)]);var state_35933__$1 = state_35933;var statearr_35960_36001 = state_35933__$1;(statearr_35960_36001[(2)] = inst_35908);
(statearr_35960_36001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (5)))
{var inst_35869 = cljs.core.deref.call(null,mults);var inst_35870 = cljs.core.vals.call(null,inst_35869);var inst_35871 = cljs.core.seq.call(null,inst_35870);var inst_35872 = inst_35871;var inst_35873 = null;var inst_35874 = (0);var inst_35875 = (0);var state_35933__$1 = (function (){var statearr_35961 = state_35933;(statearr_35961[(12)] = inst_35872);
(statearr_35961[(13)] = inst_35875);
(statearr_35961[(14)] = inst_35873);
(statearr_35961[(16)] = inst_35874);
return statearr_35961;
})();var statearr_35962_36002 = state_35933__$1;(statearr_35962_36002[(2)] = null);
(statearr_35962_36002[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (14)))
{var state_35933__$1 = state_35933;var statearr_35966_36003 = state_35933__$1;(statearr_35966_36003[(2)] = null);
(statearr_35966_36003[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (16)))
{var inst_35886 = (state_35933[(10)]);var inst_35890 = cljs.core.chunk_first.call(null,inst_35886);var inst_35891 = cljs.core.chunk_rest.call(null,inst_35886);var inst_35892 = cljs.core.count.call(null,inst_35890);var inst_35872 = inst_35891;var inst_35873 = inst_35890;var inst_35874 = inst_35892;var inst_35875 = (0);var state_35933__$1 = (function (){var statearr_35967 = state_35933;(statearr_35967[(12)] = inst_35872);
(statearr_35967[(13)] = inst_35875);
(statearr_35967[(14)] = inst_35873);
(statearr_35967[(16)] = inst_35874);
return statearr_35967;
})();var statearr_35968_36004 = state_35933__$1;(statearr_35968_36004[(2)] = null);
(statearr_35968_36004[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (10)))
{var inst_35872 = (state_35933[(12)]);var inst_35875 = (state_35933[(13)]);var inst_35873 = (state_35933[(14)]);var inst_35874 = (state_35933[(16)]);var inst_35880 = cljs.core._nth.call(null,inst_35873,inst_35875);var inst_35881 = cljs.core.async.muxch_STAR_.call(null,inst_35880);var inst_35882 = cljs.core.async.close_BANG_.call(null,inst_35881);var inst_35883 = (inst_35875 + (1));var tmp35963 = inst_35872;var tmp35964 = inst_35873;var tmp35965 = inst_35874;var inst_35872__$1 = tmp35963;var inst_35873__$1 = tmp35964;var inst_35874__$1 = tmp35965;var inst_35875__$1 = inst_35883;var state_35933__$1 = (function (){var statearr_35969 = state_35933;(statearr_35969[(12)] = inst_35872__$1);
(statearr_35969[(13)] = inst_35875__$1);
(statearr_35969[(18)] = inst_35882);
(statearr_35969[(14)] = inst_35873__$1);
(statearr_35969[(16)] = inst_35874__$1);
return statearr_35969;
})();var statearr_35970_36005 = state_35933__$1;(statearr_35970_36005[(2)] = null);
(statearr_35970_36005[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (18)))
{var inst_35901 = (state_35933[(2)]);var state_35933__$1 = state_35933;var statearr_35971_36006 = state_35933__$1;(statearr_35971_36006[(2)] = inst_35901);
(statearr_35971_36006[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35934 === (8)))
{var inst_35875 = (state_35933[(13)]);var inst_35874 = (state_35933[(16)]);var inst_35877 = (inst_35875 < inst_35874);var inst_35878 = inst_35877;var state_35933__$1 = state_35933;if(cljs.core.truth_(inst_35878))
{var statearr_35972_36007 = state_35933__$1;(statearr_35972_36007[(1)] = (10));
} else
{var statearr_35973_36008 = state_35933__$1;(statearr_35973_36008[(1)] = (11));
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
});})(c__5708__auto___35981,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___35981,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35977[(0)] = state_machine__5694__auto__);
(statearr_35977[(1)] = (1));
return statearr_35977;
});
var state_machine__5694__auto____1 = (function (state_35933){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35978){if((e35978 instanceof Object))
{var ex__5697__auto__ = e35978;var statearr_35979_36009 = state_35933;(statearr_35979_36009[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35978;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36010 = state_35933;
state_35933 = G__36010;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35981,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_35980 = f__5709__auto__.call(null);(statearr_35980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35981);
return statearr_35980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35981,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___36147 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36147,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36147,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36117){var state_val_36118 = (state_36117[(1)]);if((state_val_36118 === (7)))
{var state_36117__$1 = state_36117;var statearr_36119_36148 = state_36117__$1;(statearr_36119_36148[(2)] = null);
(statearr_36119_36148[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (1)))
{var state_36117__$1 = state_36117;var statearr_36120_36149 = state_36117__$1;(statearr_36120_36149[(2)] = null);
(statearr_36120_36149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (4)))
{var inst_36081 = (state_36117[(7)]);var inst_36083 = (inst_36081 < cnt);var state_36117__$1 = state_36117;if(cljs.core.truth_(inst_36083))
{var statearr_36121_36150 = state_36117__$1;(statearr_36121_36150[(1)] = (6));
} else
{var statearr_36122_36151 = state_36117__$1;(statearr_36122_36151[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (15)))
{var inst_36113 = (state_36117[(2)]);var state_36117__$1 = state_36117;var statearr_36123_36152 = state_36117__$1;(statearr_36123_36152[(2)] = inst_36113);
(statearr_36123_36152[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (13)))
{var inst_36106 = cljs.core.async.close_BANG_.call(null,out);var state_36117__$1 = state_36117;var statearr_36124_36153 = state_36117__$1;(statearr_36124_36153[(2)] = inst_36106);
(statearr_36124_36153[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (6)))
{var state_36117__$1 = state_36117;var statearr_36125_36154 = state_36117__$1;(statearr_36125_36154[(2)] = null);
(statearr_36125_36154[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (3)))
{var inst_36115 = (state_36117[(2)]);var state_36117__$1 = state_36117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36117__$1,inst_36115);
} else
{if((state_val_36118 === (12)))
{var inst_36103 = (state_36117[(8)]);var inst_36103__$1 = (state_36117[(2)]);var inst_36104 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36103__$1);var state_36117__$1 = (function (){var statearr_36126 = state_36117;(statearr_36126[(8)] = inst_36103__$1);
return statearr_36126;
})();if(cljs.core.truth_(inst_36104))
{var statearr_36127_36155 = state_36117__$1;(statearr_36127_36155[(1)] = (13));
} else
{var statearr_36128_36156 = state_36117__$1;(statearr_36128_36156[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (2)))
{var inst_36080 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36081 = (0);var state_36117__$1 = (function (){var statearr_36129 = state_36117;(statearr_36129[(9)] = inst_36080);
(statearr_36129[(7)] = inst_36081);
return statearr_36129;
})();var statearr_36130_36157 = state_36117__$1;(statearr_36130_36157[(2)] = null);
(statearr_36130_36157[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (11)))
{var inst_36081 = (state_36117[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36117,(10),Object,null,(9));var inst_36090 = chs__$1.call(null,inst_36081);var inst_36091 = done.call(null,inst_36081);var inst_36092 = cljs.core.async.take_BANG_.call(null,inst_36090,inst_36091);var state_36117__$1 = state_36117;var statearr_36131_36158 = state_36117__$1;(statearr_36131_36158[(2)] = inst_36092);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36117__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (9)))
{var inst_36081 = (state_36117[(7)]);var inst_36094 = (state_36117[(2)]);var inst_36095 = (inst_36081 + (1));var inst_36081__$1 = inst_36095;var state_36117__$1 = (function (){var statearr_36132 = state_36117;(statearr_36132[(7)] = inst_36081__$1);
(statearr_36132[(10)] = inst_36094);
return statearr_36132;
})();var statearr_36133_36159 = state_36117__$1;(statearr_36133_36159[(2)] = null);
(statearr_36133_36159[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (5)))
{var inst_36101 = (state_36117[(2)]);var state_36117__$1 = (function (){var statearr_36134 = state_36117;(statearr_36134[(11)] = inst_36101);
return statearr_36134;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36117__$1,(12),dchan);
} else
{if((state_val_36118 === (14)))
{var inst_36103 = (state_36117[(8)]);var inst_36108 = cljs.core.apply.call(null,f,inst_36103);var state_36117__$1 = state_36117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36117__$1,(16),out,inst_36108);
} else
{if((state_val_36118 === (16)))
{var inst_36110 = (state_36117[(2)]);var state_36117__$1 = (function (){var statearr_36135 = state_36117;(statearr_36135[(12)] = inst_36110);
return statearr_36135;
})();var statearr_36136_36160 = state_36117__$1;(statearr_36136_36160[(2)] = null);
(statearr_36136_36160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (10)))
{var inst_36085 = (state_36117[(2)]);var inst_36086 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36117__$1 = (function (){var statearr_36137 = state_36117;(statearr_36137[(13)] = inst_36085);
return statearr_36137;
})();var statearr_36138_36161 = state_36117__$1;(statearr_36138_36161[(2)] = inst_36086);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36117__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36118 === (8)))
{var inst_36099 = (state_36117[(2)]);var state_36117__$1 = state_36117;var statearr_36139_36162 = state_36117__$1;(statearr_36139_36162[(2)] = inst_36099);
(statearr_36139_36162[(1)] = (5));
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
});})(c__5708__auto___36147,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___36147,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36143[(0)] = state_machine__5694__auto__);
(statearr_36143[(1)] = (1));
return statearr_36143;
});
var state_machine__5694__auto____1 = (function (state_36117){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36117);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36144){if((e36144 instanceof Object))
{var ex__5697__auto__ = e36144;var statearr_36145_36163 = state_36117;(statearr_36145_36163[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36144;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36164 = state_36117;
state_36117 = G__36164;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36117){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36147,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_36146 = f__5709__auto__.call(null);(statearr_36146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36147);
return statearr_36146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36147,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36272 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36272,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36272,out){
return (function (state_36248){var state_val_36249 = (state_36248[(1)]);if((state_val_36249 === (7)))
{var inst_36227 = (state_36248[(7)]);var inst_36228 = (state_36248[(8)]);var inst_36227__$1 = (state_36248[(2)]);var inst_36228__$1 = cljs.core.nth.call(null,inst_36227__$1,(0),null);var inst_36229 = cljs.core.nth.call(null,inst_36227__$1,(1),null);var inst_36230 = (inst_36228__$1 == null);var state_36248__$1 = (function (){var statearr_36250 = state_36248;(statearr_36250[(7)] = inst_36227__$1);
(statearr_36250[(9)] = inst_36229);
(statearr_36250[(8)] = inst_36228__$1);
return statearr_36250;
})();if(cljs.core.truth_(inst_36230))
{var statearr_36251_36273 = state_36248__$1;(statearr_36251_36273[(1)] = (8));
} else
{var statearr_36252_36274 = state_36248__$1;(statearr_36252_36274[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36249 === (1)))
{var inst_36219 = cljs.core.vec.call(null,chs);var inst_36220 = inst_36219;var state_36248__$1 = (function (){var statearr_36253 = state_36248;(statearr_36253[(10)] = inst_36220);
return statearr_36253;
})();var statearr_36254_36275 = state_36248__$1;(statearr_36254_36275[(2)] = null);
(statearr_36254_36275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36249 === (4)))
{var inst_36220 = (state_36248[(10)]);var state_36248__$1 = state_36248;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36248__$1,(7),inst_36220);
} else
{if((state_val_36249 === (6)))
{var inst_36244 = (state_36248[(2)]);var state_36248__$1 = state_36248;var statearr_36255_36276 = state_36248__$1;(statearr_36255_36276[(2)] = inst_36244);
(statearr_36255_36276[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36249 === (3)))
{var inst_36246 = (state_36248[(2)]);var state_36248__$1 = state_36248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36248__$1,inst_36246);
} else
{if((state_val_36249 === (2)))
{var inst_36220 = (state_36248[(10)]);var inst_36222 = cljs.core.count.call(null,inst_36220);var inst_36223 = (inst_36222 > (0));var state_36248__$1 = state_36248;if(cljs.core.truth_(inst_36223))
{var statearr_36257_36277 = state_36248__$1;(statearr_36257_36277[(1)] = (4));
} else
{var statearr_36258_36278 = state_36248__$1;(statearr_36258_36278[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36249 === (11)))
{var inst_36220 = (state_36248[(10)]);var inst_36237 = (state_36248[(2)]);var tmp36256 = inst_36220;var inst_36220__$1 = tmp36256;var state_36248__$1 = (function (){var statearr_36259 = state_36248;(statearr_36259[(11)] = inst_36237);
(statearr_36259[(10)] = inst_36220__$1);
return statearr_36259;
})();var statearr_36260_36279 = state_36248__$1;(statearr_36260_36279[(2)] = null);
(statearr_36260_36279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36249 === (9)))
{var inst_36228 = (state_36248[(8)]);var state_36248__$1 = state_36248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36248__$1,(11),out,inst_36228);
} else
{if((state_val_36249 === (5)))
{var inst_36242 = cljs.core.async.close_BANG_.call(null,out);var state_36248__$1 = state_36248;var statearr_36261_36280 = state_36248__$1;(statearr_36261_36280[(2)] = inst_36242);
(statearr_36261_36280[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36249 === (10)))
{var inst_36240 = (state_36248[(2)]);var state_36248__$1 = state_36248;var statearr_36262_36281 = state_36248__$1;(statearr_36262_36281[(2)] = inst_36240);
(statearr_36262_36281[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36249 === (8)))
{var inst_36227 = (state_36248[(7)]);var inst_36229 = (state_36248[(9)]);var inst_36228 = (state_36248[(8)]);var inst_36220 = (state_36248[(10)]);var inst_36232 = (function (){var c = inst_36229;var v = inst_36228;var vec__36225 = inst_36227;var cs = inst_36220;return ((function (c,v,vec__36225,cs,inst_36227,inst_36229,inst_36228,inst_36220,state_val_36249,c__5708__auto___36272,out){
return (function (p1__36165_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36165_SHARP_);
});
;})(c,v,vec__36225,cs,inst_36227,inst_36229,inst_36228,inst_36220,state_val_36249,c__5708__auto___36272,out))
})();var inst_36233 = cljs.core.filterv.call(null,inst_36232,inst_36220);var inst_36220__$1 = inst_36233;var state_36248__$1 = (function (){var statearr_36263 = state_36248;(statearr_36263[(10)] = inst_36220__$1);
return statearr_36263;
})();var statearr_36264_36282 = state_36248__$1;(statearr_36264_36282[(2)] = null);
(statearr_36264_36282[(1)] = (2));
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
});})(c__5708__auto___36272,out))
;return ((function (switch__5693__auto__,c__5708__auto___36272,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36268 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36268[(0)] = state_machine__5694__auto__);
(statearr_36268[(1)] = (1));
return statearr_36268;
});
var state_machine__5694__auto____1 = (function (state_36248){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36248);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36269){if((e36269 instanceof Object))
{var ex__5697__auto__ = e36269;var statearr_36270_36283 = state_36248;(statearr_36270_36283[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36269;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36284 = state_36248;
state_36248 = G__36284;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36248){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36272,out))
})();var state__5710__auto__ = (function (){var statearr_36271 = f__5709__auto__.call(null);(statearr_36271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36272);
return statearr_36271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36272,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36377,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36377,out){
return (function (state_36354){var state_val_36355 = (state_36354[(1)]);if((state_val_36355 === (7)))
{var inst_36336 = (state_36354[(7)]);var inst_36336__$1 = (state_36354[(2)]);var inst_36337 = (inst_36336__$1 == null);var inst_36338 = cljs.core.not.call(null,inst_36337);var state_36354__$1 = (function (){var statearr_36356 = state_36354;(statearr_36356[(7)] = inst_36336__$1);
return statearr_36356;
})();if(inst_36338)
{var statearr_36357_36378 = state_36354__$1;(statearr_36357_36378[(1)] = (8));
} else
{var statearr_36358_36379 = state_36354__$1;(statearr_36358_36379[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (1)))
{var inst_36331 = (0);var state_36354__$1 = (function (){var statearr_36359 = state_36354;(statearr_36359[(8)] = inst_36331);
return statearr_36359;
})();var statearr_36360_36380 = state_36354__$1;(statearr_36360_36380[(2)] = null);
(statearr_36360_36380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (4)))
{var state_36354__$1 = state_36354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36354__$1,(7),ch);
} else
{if((state_val_36355 === (6)))
{var inst_36349 = (state_36354[(2)]);var state_36354__$1 = state_36354;var statearr_36361_36381 = state_36354__$1;(statearr_36361_36381[(2)] = inst_36349);
(statearr_36361_36381[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (3)))
{var inst_36351 = (state_36354[(2)]);var inst_36352 = cljs.core.async.close_BANG_.call(null,out);var state_36354__$1 = (function (){var statearr_36362 = state_36354;(statearr_36362[(9)] = inst_36351);
return statearr_36362;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36354__$1,inst_36352);
} else
{if((state_val_36355 === (2)))
{var inst_36331 = (state_36354[(8)]);var inst_36333 = (inst_36331 < n);var state_36354__$1 = state_36354;if(cljs.core.truth_(inst_36333))
{var statearr_36363_36382 = state_36354__$1;(statearr_36363_36382[(1)] = (4));
} else
{var statearr_36364_36383 = state_36354__$1;(statearr_36364_36383[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (11)))
{var inst_36331 = (state_36354[(8)]);var inst_36341 = (state_36354[(2)]);var inst_36342 = (inst_36331 + (1));var inst_36331__$1 = inst_36342;var state_36354__$1 = (function (){var statearr_36365 = state_36354;(statearr_36365[(10)] = inst_36341);
(statearr_36365[(8)] = inst_36331__$1);
return statearr_36365;
})();var statearr_36366_36384 = state_36354__$1;(statearr_36366_36384[(2)] = null);
(statearr_36366_36384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (9)))
{var state_36354__$1 = state_36354;var statearr_36367_36385 = state_36354__$1;(statearr_36367_36385[(2)] = null);
(statearr_36367_36385[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (5)))
{var state_36354__$1 = state_36354;var statearr_36368_36386 = state_36354__$1;(statearr_36368_36386[(2)] = null);
(statearr_36368_36386[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (10)))
{var inst_36346 = (state_36354[(2)]);var state_36354__$1 = state_36354;var statearr_36369_36387 = state_36354__$1;(statearr_36369_36387[(2)] = inst_36346);
(statearr_36369_36387[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36355 === (8)))
{var inst_36336 = (state_36354[(7)]);var state_36354__$1 = state_36354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36354__$1,(11),out,inst_36336);
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
});})(c__5708__auto___36377,out))
;return ((function (switch__5693__auto__,c__5708__auto___36377,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36373 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36373[(0)] = state_machine__5694__auto__);
(statearr_36373[(1)] = (1));
return statearr_36373;
});
var state_machine__5694__auto____1 = (function (state_36354){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36374){if((e36374 instanceof Object))
{var ex__5697__auto__ = e36374;var statearr_36375_36388 = state_36354;(statearr_36375_36388[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36374;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36389 = state_36354;
state_36354 = G__36389;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36354){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36377,out))
})();var state__5710__auto__ = (function (){var statearr_36376 = f__5709__auto__.call(null);(statearr_36376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36377);
return statearr_36376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36377,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36486 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36486,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36486,out){
return (function (state_36461){var state_val_36462 = (state_36461[(1)]);if((state_val_36462 === (7)))
{var inst_36456 = (state_36461[(2)]);var state_36461__$1 = state_36461;var statearr_36463_36487 = state_36461__$1;(statearr_36463_36487[(2)] = inst_36456);
(statearr_36463_36487[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36462 === (1)))
{var inst_36438 = null;var state_36461__$1 = (function (){var statearr_36464 = state_36461;(statearr_36464[(7)] = inst_36438);
return statearr_36464;
})();var statearr_36465_36488 = state_36461__$1;(statearr_36465_36488[(2)] = null);
(statearr_36465_36488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36462 === (4)))
{var inst_36441 = (state_36461[(8)]);var inst_36441__$1 = (state_36461[(2)]);var inst_36442 = (inst_36441__$1 == null);var inst_36443 = cljs.core.not.call(null,inst_36442);var state_36461__$1 = (function (){var statearr_36466 = state_36461;(statearr_36466[(8)] = inst_36441__$1);
return statearr_36466;
})();if(inst_36443)
{var statearr_36467_36489 = state_36461__$1;(statearr_36467_36489[(1)] = (5));
} else
{var statearr_36468_36490 = state_36461__$1;(statearr_36468_36490[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36462 === (6)))
{var state_36461__$1 = state_36461;var statearr_36469_36491 = state_36461__$1;(statearr_36469_36491[(2)] = null);
(statearr_36469_36491[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36462 === (3)))
{var inst_36458 = (state_36461[(2)]);var inst_36459 = cljs.core.async.close_BANG_.call(null,out);var state_36461__$1 = (function (){var statearr_36470 = state_36461;(statearr_36470[(9)] = inst_36458);
return statearr_36470;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36461__$1,inst_36459);
} else
{if((state_val_36462 === (2)))
{var state_36461__$1 = state_36461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36461__$1,(4),ch);
} else
{if((state_val_36462 === (11)))
{var inst_36441 = (state_36461[(8)]);var inst_36450 = (state_36461[(2)]);var inst_36438 = inst_36441;var state_36461__$1 = (function (){var statearr_36471 = state_36461;(statearr_36471[(7)] = inst_36438);
(statearr_36471[(10)] = inst_36450);
return statearr_36471;
})();var statearr_36472_36492 = state_36461__$1;(statearr_36472_36492[(2)] = null);
(statearr_36472_36492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36462 === (9)))
{var inst_36441 = (state_36461[(8)]);var state_36461__$1 = state_36461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36461__$1,(11),out,inst_36441);
} else
{if((state_val_36462 === (5)))
{var inst_36438 = (state_36461[(7)]);var inst_36441 = (state_36461[(8)]);var inst_36445 = cljs.core._EQ_.call(null,inst_36441,inst_36438);var state_36461__$1 = state_36461;if(inst_36445)
{var statearr_36474_36493 = state_36461__$1;(statearr_36474_36493[(1)] = (8));
} else
{var statearr_36475_36494 = state_36461__$1;(statearr_36475_36494[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36462 === (10)))
{var inst_36453 = (state_36461[(2)]);var state_36461__$1 = state_36461;var statearr_36476_36495 = state_36461__$1;(statearr_36476_36495[(2)] = inst_36453);
(statearr_36476_36495[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36462 === (8)))
{var inst_36438 = (state_36461[(7)]);var tmp36473 = inst_36438;var inst_36438__$1 = tmp36473;var state_36461__$1 = (function (){var statearr_36477 = state_36461;(statearr_36477[(7)] = inst_36438__$1);
return statearr_36477;
})();var statearr_36478_36496 = state_36461__$1;(statearr_36478_36496[(2)] = null);
(statearr_36478_36496[(1)] = (2));
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
});})(c__5708__auto___36486,out))
;return ((function (switch__5693__auto__,c__5708__auto___36486,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36482 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36482[(0)] = state_machine__5694__auto__);
(statearr_36482[(1)] = (1));
return statearr_36482;
});
var state_machine__5694__auto____1 = (function (state_36461){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36461);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36483){if((e36483 instanceof Object))
{var ex__5697__auto__ = e36483;var statearr_36484_36497 = state_36461;(statearr_36484_36497[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36483;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36498 = state_36461;
state_36461 = G__36498;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36461){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36486,out))
})();var state__5710__auto__ = (function (){var statearr_36485 = f__5709__auto__.call(null);(statearr_36485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36486);
return statearr_36485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36486,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36633 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36633,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36633,out){
return (function (state_36603){var state_val_36604 = (state_36603[(1)]);if((state_val_36604 === (7)))
{var inst_36599 = (state_36603[(2)]);var state_36603__$1 = state_36603;var statearr_36605_36634 = state_36603__$1;(statearr_36605_36634[(2)] = inst_36599);
(statearr_36605_36634[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (1)))
{var inst_36566 = (new Array(n));var inst_36567 = inst_36566;var inst_36568 = (0);var state_36603__$1 = (function (){var statearr_36606 = state_36603;(statearr_36606[(7)] = inst_36568);
(statearr_36606[(8)] = inst_36567);
return statearr_36606;
})();var statearr_36607_36635 = state_36603__$1;(statearr_36607_36635[(2)] = null);
(statearr_36607_36635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (4)))
{var inst_36571 = (state_36603[(9)]);var inst_36571__$1 = (state_36603[(2)]);var inst_36572 = (inst_36571__$1 == null);var inst_36573 = cljs.core.not.call(null,inst_36572);var state_36603__$1 = (function (){var statearr_36608 = state_36603;(statearr_36608[(9)] = inst_36571__$1);
return statearr_36608;
})();if(inst_36573)
{var statearr_36609_36636 = state_36603__$1;(statearr_36609_36636[(1)] = (5));
} else
{var statearr_36610_36637 = state_36603__$1;(statearr_36610_36637[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (15)))
{var inst_36593 = (state_36603[(2)]);var state_36603__$1 = state_36603;var statearr_36611_36638 = state_36603__$1;(statearr_36611_36638[(2)] = inst_36593);
(statearr_36611_36638[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (13)))
{var state_36603__$1 = state_36603;var statearr_36612_36639 = state_36603__$1;(statearr_36612_36639[(2)] = null);
(statearr_36612_36639[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (6)))
{var inst_36568 = (state_36603[(7)]);var inst_36589 = (inst_36568 > (0));var state_36603__$1 = state_36603;if(cljs.core.truth_(inst_36589))
{var statearr_36613_36640 = state_36603__$1;(statearr_36613_36640[(1)] = (12));
} else
{var statearr_36614_36641 = state_36603__$1;(statearr_36614_36641[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (3)))
{var inst_36601 = (state_36603[(2)]);var state_36603__$1 = state_36603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36603__$1,inst_36601);
} else
{if((state_val_36604 === (12)))
{var inst_36567 = (state_36603[(8)]);var inst_36591 = cljs.core.vec.call(null,inst_36567);var state_36603__$1 = state_36603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36603__$1,(15),out,inst_36591);
} else
{if((state_val_36604 === (2)))
{var state_36603__$1 = state_36603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36603__$1,(4),ch);
} else
{if((state_val_36604 === (11)))
{var inst_36583 = (state_36603[(2)]);var inst_36584 = (new Array(n));var inst_36567 = inst_36584;var inst_36568 = (0);var state_36603__$1 = (function (){var statearr_36615 = state_36603;(statearr_36615[(10)] = inst_36583);
(statearr_36615[(7)] = inst_36568);
(statearr_36615[(8)] = inst_36567);
return statearr_36615;
})();var statearr_36616_36642 = state_36603__$1;(statearr_36616_36642[(2)] = null);
(statearr_36616_36642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (9)))
{var inst_36567 = (state_36603[(8)]);var inst_36581 = cljs.core.vec.call(null,inst_36567);var state_36603__$1 = state_36603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36603__$1,(11),out,inst_36581);
} else
{if((state_val_36604 === (5)))
{var inst_36571 = (state_36603[(9)]);var inst_36576 = (state_36603[(11)]);var inst_36568 = (state_36603[(7)]);var inst_36567 = (state_36603[(8)]);var inst_36575 = (inst_36567[inst_36568] = inst_36571);var inst_36576__$1 = (inst_36568 + (1));var inst_36577 = (inst_36576__$1 < n);var state_36603__$1 = (function (){var statearr_36617 = state_36603;(statearr_36617[(11)] = inst_36576__$1);
(statearr_36617[(12)] = inst_36575);
return statearr_36617;
})();if(cljs.core.truth_(inst_36577))
{var statearr_36618_36643 = state_36603__$1;(statearr_36618_36643[(1)] = (8));
} else
{var statearr_36619_36644 = state_36603__$1;(statearr_36619_36644[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (14)))
{var inst_36596 = (state_36603[(2)]);var inst_36597 = cljs.core.async.close_BANG_.call(null,out);var state_36603__$1 = (function (){var statearr_36621 = state_36603;(statearr_36621[(13)] = inst_36596);
return statearr_36621;
})();var statearr_36622_36645 = state_36603__$1;(statearr_36622_36645[(2)] = inst_36597);
(statearr_36622_36645[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (10)))
{var inst_36587 = (state_36603[(2)]);var state_36603__$1 = state_36603;var statearr_36623_36646 = state_36603__$1;(statearr_36623_36646[(2)] = inst_36587);
(statearr_36623_36646[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36604 === (8)))
{var inst_36576 = (state_36603[(11)]);var inst_36567 = (state_36603[(8)]);var tmp36620 = inst_36567;var inst_36567__$1 = tmp36620;var inst_36568 = inst_36576;var state_36603__$1 = (function (){var statearr_36624 = state_36603;(statearr_36624[(7)] = inst_36568);
(statearr_36624[(8)] = inst_36567__$1);
return statearr_36624;
})();var statearr_36625_36647 = state_36603__$1;(statearr_36625_36647[(2)] = null);
(statearr_36625_36647[(1)] = (2));
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
});})(c__5708__auto___36633,out))
;return ((function (switch__5693__auto__,c__5708__auto___36633,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36629[(0)] = state_machine__5694__auto__);
(statearr_36629[(1)] = (1));
return statearr_36629;
});
var state_machine__5694__auto____1 = (function (state_36603){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36630){if((e36630 instanceof Object))
{var ex__5697__auto__ = e36630;var statearr_36631_36648 = state_36603;(statearr_36631_36648[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36603);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36630;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36649 = state_36603;
state_36603 = G__36649;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36603){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36633,out))
})();var state__5710__auto__ = (function (){var statearr_36632 = f__5709__auto__.call(null);(statearr_36632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36633);
return statearr_36632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36633,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36792 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36792,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36792,out){
return (function (state_36762){var state_val_36763 = (state_36762[(1)]);if((state_val_36763 === (7)))
{var inst_36758 = (state_36762[(2)]);var state_36762__$1 = state_36762;var statearr_36764_36793 = state_36762__$1;(statearr_36764_36793[(2)] = inst_36758);
(statearr_36764_36793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (1)))
{var inst_36721 = [];var inst_36722 = inst_36721;var inst_36723 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_36762__$1 = (function (){var statearr_36765 = state_36762;(statearr_36765[(7)] = inst_36722);
(statearr_36765[(8)] = inst_36723);
return statearr_36765;
})();var statearr_36766_36794 = state_36762__$1;(statearr_36766_36794[(2)] = null);
(statearr_36766_36794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (4)))
{var inst_36726 = (state_36762[(9)]);var inst_36726__$1 = (state_36762[(2)]);var inst_36727 = (inst_36726__$1 == null);var inst_36728 = cljs.core.not.call(null,inst_36727);var state_36762__$1 = (function (){var statearr_36767 = state_36762;(statearr_36767[(9)] = inst_36726__$1);
return statearr_36767;
})();if(inst_36728)
{var statearr_36768_36795 = state_36762__$1;(statearr_36768_36795[(1)] = (5));
} else
{var statearr_36769_36796 = state_36762__$1;(statearr_36769_36796[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (15)))
{var inst_36752 = (state_36762[(2)]);var state_36762__$1 = state_36762;var statearr_36770_36797 = state_36762__$1;(statearr_36770_36797[(2)] = inst_36752);
(statearr_36770_36797[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (13)))
{var state_36762__$1 = state_36762;var statearr_36771_36798 = state_36762__$1;(statearr_36771_36798[(2)] = null);
(statearr_36771_36798[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (6)))
{var inst_36722 = (state_36762[(7)]);var inst_36747 = inst_36722.length;var inst_36748 = (inst_36747 > (0));var state_36762__$1 = state_36762;if(cljs.core.truth_(inst_36748))
{var statearr_36772_36799 = state_36762__$1;(statearr_36772_36799[(1)] = (12));
} else
{var statearr_36773_36800 = state_36762__$1;(statearr_36773_36800[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (3)))
{var inst_36760 = (state_36762[(2)]);var state_36762__$1 = state_36762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36762__$1,inst_36760);
} else
{if((state_val_36763 === (12)))
{var inst_36722 = (state_36762[(7)]);var inst_36750 = cljs.core.vec.call(null,inst_36722);var state_36762__$1 = state_36762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36762__$1,(15),out,inst_36750);
} else
{if((state_val_36763 === (2)))
{var state_36762__$1 = state_36762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36762__$1,(4),ch);
} else
{if((state_val_36763 === (11)))
{var inst_36730 = (state_36762[(10)]);var inst_36726 = (state_36762[(9)]);var inst_36740 = (state_36762[(2)]);var inst_36741 = [];var inst_36742 = inst_36741.push(inst_36726);var inst_36722 = inst_36741;var inst_36723 = inst_36730;var state_36762__$1 = (function (){var statearr_36774 = state_36762;(statearr_36774[(11)] = inst_36740);
(statearr_36774[(7)] = inst_36722);
(statearr_36774[(8)] = inst_36723);
(statearr_36774[(12)] = inst_36742);
return statearr_36774;
})();var statearr_36775_36801 = state_36762__$1;(statearr_36775_36801[(2)] = null);
(statearr_36775_36801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (9)))
{var inst_36722 = (state_36762[(7)]);var inst_36738 = cljs.core.vec.call(null,inst_36722);var state_36762__$1 = state_36762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36762__$1,(11),out,inst_36738);
} else
{if((state_val_36763 === (5)))
{var inst_36730 = (state_36762[(10)]);var inst_36726 = (state_36762[(9)]);var inst_36723 = (state_36762[(8)]);var inst_36730__$1 = f.call(null,inst_36726);var inst_36731 = cljs.core._EQ_.call(null,inst_36730__$1,inst_36723);var inst_36732 = cljs.core.keyword_identical_QMARK_.call(null,inst_36723,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_36733 = (inst_36731) || (inst_36732);var state_36762__$1 = (function (){var statearr_36776 = state_36762;(statearr_36776[(10)] = inst_36730__$1);
return statearr_36776;
})();if(cljs.core.truth_(inst_36733))
{var statearr_36777_36802 = state_36762__$1;(statearr_36777_36802[(1)] = (8));
} else
{var statearr_36778_36803 = state_36762__$1;(statearr_36778_36803[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (14)))
{var inst_36755 = (state_36762[(2)]);var inst_36756 = cljs.core.async.close_BANG_.call(null,out);var state_36762__$1 = (function (){var statearr_36780 = state_36762;(statearr_36780[(13)] = inst_36755);
return statearr_36780;
})();var statearr_36781_36804 = state_36762__$1;(statearr_36781_36804[(2)] = inst_36756);
(statearr_36781_36804[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (10)))
{var inst_36745 = (state_36762[(2)]);var state_36762__$1 = state_36762;var statearr_36782_36805 = state_36762__$1;(statearr_36782_36805[(2)] = inst_36745);
(statearr_36782_36805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36763 === (8)))
{var inst_36730 = (state_36762[(10)]);var inst_36722 = (state_36762[(7)]);var inst_36726 = (state_36762[(9)]);var inst_36735 = inst_36722.push(inst_36726);var tmp36779 = inst_36722;var inst_36722__$1 = tmp36779;var inst_36723 = inst_36730;var state_36762__$1 = (function (){var statearr_36783 = state_36762;(statearr_36783[(7)] = inst_36722__$1);
(statearr_36783[(8)] = inst_36723);
(statearr_36783[(14)] = inst_36735);
return statearr_36783;
})();var statearr_36784_36806 = state_36762__$1;(statearr_36784_36806[(2)] = null);
(statearr_36784_36806[(1)] = (2));
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
});})(c__5708__auto___36792,out))
;return ((function (switch__5693__auto__,c__5708__auto___36792,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36788[(0)] = state_machine__5694__auto__);
(statearr_36788[(1)] = (1));
return statearr_36788;
});
var state_machine__5694__auto____1 = (function (state_36762){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36762);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36789){if((e36789 instanceof Object))
{var ex__5697__auto__ = e36789;var statearr_36790_36807 = state_36762;(statearr_36790_36807[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36789;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36808 = state_36762;
state_36762 = G__36808;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36762){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36792,out))
})();var state__5710__auto__ = (function (){var statearr_36791 = f__5709__auto__.call(null);(statearr_36791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36792);
return statearr_36791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36792,out))
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
