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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t50869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50869 = (function (f,fn_handler,meta50870){
this.f = f;
this.fn_handler = fn_handler;
this.meta50870 = meta50870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50869.cljs$lang$type = true;
cljs.core.async.t50869.cljs$lang$ctorStr = "cljs.core.async/t50869";
cljs.core.async.t50869.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50869");
});
cljs.core.async.t50869.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t50869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t50869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50871){var self__ = this;
var _50871__$1 = this;return self__.meta50870;
});
cljs.core.async.t50869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50871,meta50870__$1){var self__ = this;
var _50871__$1 = this;return (new cljs.core.async.t50869(self__.f,self__.fn_handler,meta50870__$1));
});
cljs.core.async.__GT_t50869 = (function __GT_t50869(f__$1,fn_handler__$1,meta50870){return (new cljs.core.async.t50869(f__$1,fn_handler__$1,meta50870));
});
}
return (new cljs.core.async.t50869(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__50873 = buff;if(G__50873)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__50873.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__50873.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__50873);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__50873);
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
{var val_50874 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_50874);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_50874,ret){
return (function (){return fn1.call(null,val_50874);
});})(val_50874,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___50875 = n;var x_50876 = (0);while(true){
if((x_50876 < n__4399__auto___50875))
{(a[x_50876] = (0));
{
var G__50877 = (x_50876 + (1));
x_50876 = G__50877;
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
var G__50878 = (i + (1));
i = G__50878;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t50882 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50882 = (function (flag,alt_flag,meta50883){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta50883 = meta50883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50882.cljs$lang$type = true;
cljs.core.async.t50882.cljs$lang$ctorStr = "cljs.core.async/t50882";
cljs.core.async.t50882.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50882");
});})(flag))
;
cljs.core.async.t50882.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t50882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t50882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50884){var self__ = this;
var _50884__$1 = this;return self__.meta50883;
});})(flag))
;
cljs.core.async.t50882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50884,meta50883__$1){var self__ = this;
var _50884__$1 = this;return (new cljs.core.async.t50882(self__.flag,self__.alt_flag,meta50883__$1));
});})(flag))
;
cljs.core.async.__GT_t50882 = ((function (flag){
return (function __GT_t50882(flag__$1,alt_flag__$1,meta50883){return (new cljs.core.async.t50882(flag__$1,alt_flag__$1,meta50883));
});})(flag))
;
}
return (new cljs.core.async.t50882(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t50888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50888 = (function (cb,flag,alt_handler,meta50889){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta50889 = meta50889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50888.cljs$lang$type = true;
cljs.core.async.t50888.cljs$lang$ctorStr = "cljs.core.async/t50888";
cljs.core.async.t50888.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50888");
});
cljs.core.async.t50888.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t50888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t50888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50890){var self__ = this;
var _50890__$1 = this;return self__.meta50889;
});
cljs.core.async.t50888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50890,meta50889__$1){var self__ = this;
var _50890__$1 = this;return (new cljs.core.async.t50888(self__.cb,self__.flag,self__.alt_handler,meta50889__$1));
});
cljs.core.async.__GT_t50888 = (function __GT_t50888(cb__$1,flag__$1,alt_handler__$1,meta50889){return (new cljs.core.async.t50888(cb__$1,flag__$1,alt_handler__$1,meta50889));
});
}
return (new cljs.core.async.t50888(cb,flag,alt_handler,null));
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
return (function (p1__50891_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50891_SHARP_,port], null));
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
var G__50892 = (i + (1));
i = G__50892;
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
var alts_BANG___delegate = function (ports,p__50893){var map__50895 = p__50893;var map__50895__$1 = ((cljs.core.seq_QMARK_.call(null,map__50895))?cljs.core.apply.call(null,cljs.core.hash_map,map__50895):map__50895);var opts = map__50895__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__50893 = null;if (arguments.length > 1) {
  p__50893 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__50893);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__50896){
var ports = cljs.core.first(arglist__50896);
var p__50893 = cljs.core.rest(arglist__50896);
return alts_BANG___delegate(ports,p__50893);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t50904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50904 = (function (ch,f,map_LT_,meta50905){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50905 = meta50905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50904.cljs$lang$type = true;
cljs.core.async.t50904.cljs$lang$ctorStr = "cljs.core.async/t50904";
cljs.core.async.t50904.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50904");
});
cljs.core.async.t50904.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t50904.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t50907 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50907 = (function (fn1,_,meta50905,ch,f,map_LT_,meta50908){
this.fn1 = fn1;
this._ = _;
this.meta50905 = meta50905;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50908 = meta50908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50907.cljs$lang$type = true;
cljs.core.async.t50907.cljs$lang$ctorStr = "cljs.core.async/t50907";
cljs.core.async.t50907.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50907");
});})(___$1))
;
cljs.core.async.t50907.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t50907.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t50907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__50897_SHARP_){return f1.call(null,(((p1__50897_SHARP_ == null))?null:self__.f.call(null,p1__50897_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t50907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50909){var self__ = this;
var _50909__$1 = this;return self__.meta50908;
});})(___$1))
;
cljs.core.async.t50907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50909,meta50908__$1){var self__ = this;
var _50909__$1 = this;return (new cljs.core.async.t50907(self__.fn1,self__._,self__.meta50905,self__.ch,self__.f,self__.map_LT_,meta50908__$1));
});})(___$1))
;
cljs.core.async.__GT_t50907 = ((function (___$1){
return (function __GT_t50907(fn1__$1,___$2,meta50905__$1,ch__$2,f__$2,map_LT___$2,meta50908){return (new cljs.core.async.t50907(fn1__$1,___$2,meta50905__$1,ch__$2,f__$2,map_LT___$2,meta50908));
});})(___$1))
;
}
return (new cljs.core.async.t50907(fn1,___$1,self__.meta50905,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t50904.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50906){var self__ = this;
var _50906__$1 = this;return self__.meta50905;
});
cljs.core.async.t50904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50906,meta50905__$1){var self__ = this;
var _50906__$1 = this;return (new cljs.core.async.t50904(self__.ch,self__.f,self__.map_LT_,meta50905__$1));
});
cljs.core.async.__GT_t50904 = (function __GT_t50904(ch__$1,f__$1,map_LT___$1,meta50905){return (new cljs.core.async.t50904(ch__$1,f__$1,map_LT___$1,meta50905));
});
}
return (new cljs.core.async.t50904(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t50913 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50913 = (function (ch,f,map_GT_,meta50914){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta50914 = meta50914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50913.cljs$lang$type = true;
cljs.core.async.t50913.cljs$lang$ctorStr = "cljs.core.async/t50913";
cljs.core.async.t50913.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50913");
});
cljs.core.async.t50913.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t50913.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t50913.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50915){var self__ = this;
var _50915__$1 = this;return self__.meta50914;
});
cljs.core.async.t50913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50915,meta50914__$1){var self__ = this;
var _50915__$1 = this;return (new cljs.core.async.t50913(self__.ch,self__.f,self__.map_GT_,meta50914__$1));
});
cljs.core.async.__GT_t50913 = (function __GT_t50913(ch__$1,f__$1,map_GT___$1,meta50914){return (new cljs.core.async.t50913(ch__$1,f__$1,map_GT___$1,meta50914));
});
}
return (new cljs.core.async.t50913(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t50919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50919 = (function (ch,p,filter_GT_,meta50920){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta50920 = meta50920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50919.cljs$lang$type = true;
cljs.core.async.t50919.cljs$lang$ctorStr = "cljs.core.async/t50919";
cljs.core.async.t50919.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50919");
});
cljs.core.async.t50919.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t50919.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t50919.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50921){var self__ = this;
var _50921__$1 = this;return self__.meta50920;
});
cljs.core.async.t50919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50921,meta50920__$1){var self__ = this;
var _50921__$1 = this;return (new cljs.core.async.t50919(self__.ch,self__.p,self__.filter_GT_,meta50920__$1));
});
cljs.core.async.__GT_t50919 = (function __GT_t50919(ch__$1,p__$1,filter_GT___$1,meta50920){return (new cljs.core.async.t50919(ch__$1,p__$1,filter_GT___$1,meta50920));
});
}
return (new cljs.core.async.t50919(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___51004 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51004,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51004,out){
return (function (state_50983){var state_val_50984 = (state_50983[(1)]);if((state_val_50984 === (7)))
{var inst_50979 = (state_50983[(2)]);var state_50983__$1 = state_50983;var statearr_50985_51005 = state_50983__$1;(statearr_50985_51005[(2)] = inst_50979);
(statearr_50985_51005[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (1)))
{var state_50983__$1 = state_50983;var statearr_50986_51006 = state_50983__$1;(statearr_50986_51006[(2)] = null);
(statearr_50986_51006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (4)))
{var inst_50965 = (state_50983[(7)]);var inst_50965__$1 = (state_50983[(2)]);var inst_50966 = (inst_50965__$1 == null);var state_50983__$1 = (function (){var statearr_50987 = state_50983;(statearr_50987[(7)] = inst_50965__$1);
return statearr_50987;
})();if(cljs.core.truth_(inst_50966))
{var statearr_50988_51007 = state_50983__$1;(statearr_50988_51007[(1)] = (5));
} else
{var statearr_50989_51008 = state_50983__$1;(statearr_50989_51008[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (6)))
{var inst_50965 = (state_50983[(7)]);var inst_50970 = p.call(null,inst_50965);var state_50983__$1 = state_50983;if(cljs.core.truth_(inst_50970))
{var statearr_50990_51009 = state_50983__$1;(statearr_50990_51009[(1)] = (8));
} else
{var statearr_50991_51010 = state_50983__$1;(statearr_50991_51010[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (3)))
{var inst_50981 = (state_50983[(2)]);var state_50983__$1 = state_50983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50983__$1,inst_50981);
} else
{if((state_val_50984 === (2)))
{var state_50983__$1 = state_50983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50983__$1,(4),ch);
} else
{if((state_val_50984 === (11)))
{var inst_50973 = (state_50983[(2)]);var state_50983__$1 = state_50983;var statearr_50992_51011 = state_50983__$1;(statearr_50992_51011[(2)] = inst_50973);
(statearr_50992_51011[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (9)))
{var state_50983__$1 = state_50983;var statearr_50993_51012 = state_50983__$1;(statearr_50993_51012[(2)] = null);
(statearr_50993_51012[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (5)))
{var inst_50968 = cljs.core.async.close_BANG_.call(null,out);var state_50983__$1 = state_50983;var statearr_50994_51013 = state_50983__$1;(statearr_50994_51013[(2)] = inst_50968);
(statearr_50994_51013[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (10)))
{var inst_50976 = (state_50983[(2)]);var state_50983__$1 = (function (){var statearr_50995 = state_50983;(statearr_50995[(8)] = inst_50976);
return statearr_50995;
})();var statearr_50996_51014 = state_50983__$1;(statearr_50996_51014[(2)] = null);
(statearr_50996_51014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50984 === (8)))
{var inst_50965 = (state_50983[(7)]);var state_50983__$1 = state_50983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50983__$1,(11),out,inst_50965);
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
});})(c__5693__auto___51004,out))
;return ((function (switch__5678__auto__,c__5693__auto___51004,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51000 = [null,null,null,null,null,null,null,null,null];(statearr_51000[(0)] = state_machine__5679__auto__);
(statearr_51000[(1)] = (1));
return statearr_51000;
});
var state_machine__5679__auto____1 = (function (state_50983){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50983);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51001){if((e51001 instanceof Object))
{var ex__5682__auto__ = e51001;var statearr_51002_51015 = state_50983;(statearr_51002_51015[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51016 = state_50983;
state_50983 = G__51016;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50983){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51004,out))
})();var state__5695__auto__ = (function (){var statearr_51003 = f__5694__auto__.call(null);(statearr_51003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51004);
return statearr_51003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51004,out))
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
return (function (state_51168){var state_val_51169 = (state_51168[(1)]);if((state_val_51169 === (7)))
{var inst_51164 = (state_51168[(2)]);var state_51168__$1 = state_51168;var statearr_51170_51207 = state_51168__$1;(statearr_51170_51207[(2)] = inst_51164);
(statearr_51170_51207[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (20)))
{var inst_51139 = (state_51168[(7)]);var inst_51150 = (state_51168[(2)]);var inst_51151 = cljs.core.next.call(null,inst_51139);var inst_51125 = inst_51151;var inst_51126 = null;var inst_51127 = (0);var inst_51128 = (0);var state_51168__$1 = (function (){var statearr_51171 = state_51168;(statearr_51171[(8)] = inst_51126);
(statearr_51171[(9)] = inst_51150);
(statearr_51171[(10)] = inst_51125);
(statearr_51171[(11)] = inst_51127);
(statearr_51171[(12)] = inst_51128);
return statearr_51171;
})();var statearr_51172_51208 = state_51168__$1;(statearr_51172_51208[(2)] = null);
(statearr_51172_51208[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (1)))
{var state_51168__$1 = state_51168;var statearr_51173_51209 = state_51168__$1;(statearr_51173_51209[(2)] = null);
(statearr_51173_51209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (4)))
{var inst_51114 = (state_51168[(13)]);var inst_51114__$1 = (state_51168[(2)]);var inst_51115 = (inst_51114__$1 == null);var state_51168__$1 = (function (){var statearr_51177 = state_51168;(statearr_51177[(13)] = inst_51114__$1);
return statearr_51177;
})();if(cljs.core.truth_(inst_51115))
{var statearr_51178_51210 = state_51168__$1;(statearr_51178_51210[(1)] = (5));
} else
{var statearr_51179_51211 = state_51168__$1;(statearr_51179_51211[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (15)))
{var state_51168__$1 = state_51168;var statearr_51180_51212 = state_51168__$1;(statearr_51180_51212[(2)] = null);
(statearr_51180_51212[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (13)))
{var inst_51126 = (state_51168[(8)]);var inst_51125 = (state_51168[(10)]);var inst_51127 = (state_51168[(11)]);var inst_51128 = (state_51168[(12)]);var inst_51135 = (state_51168[(2)]);var inst_51136 = (inst_51128 + (1));var tmp51174 = inst_51126;var tmp51175 = inst_51125;var tmp51176 = inst_51127;var inst_51125__$1 = tmp51175;var inst_51126__$1 = tmp51174;var inst_51127__$1 = tmp51176;var inst_51128__$1 = inst_51136;var state_51168__$1 = (function (){var statearr_51181 = state_51168;(statearr_51181[(8)] = inst_51126__$1);
(statearr_51181[(10)] = inst_51125__$1);
(statearr_51181[(11)] = inst_51127__$1);
(statearr_51181[(12)] = inst_51128__$1);
(statearr_51181[(14)] = inst_51135);
return statearr_51181;
})();var statearr_51182_51213 = state_51168__$1;(statearr_51182_51213[(2)] = null);
(statearr_51182_51213[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (6)))
{var inst_51114 = (state_51168[(13)]);var inst_51119 = f.call(null,inst_51114);var inst_51124 = cljs.core.seq.call(null,inst_51119);var inst_51125 = inst_51124;var inst_51126 = null;var inst_51127 = (0);var inst_51128 = (0);var state_51168__$1 = (function (){var statearr_51183 = state_51168;(statearr_51183[(8)] = inst_51126);
(statearr_51183[(10)] = inst_51125);
(statearr_51183[(11)] = inst_51127);
(statearr_51183[(12)] = inst_51128);
return statearr_51183;
})();var statearr_51184_51214 = state_51168__$1;(statearr_51184_51214[(2)] = null);
(statearr_51184_51214[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (17)))
{var inst_51139 = (state_51168[(7)]);var inst_51143 = cljs.core.chunk_first.call(null,inst_51139);var inst_51144 = cljs.core.chunk_rest.call(null,inst_51139);var inst_51145 = cljs.core.count.call(null,inst_51143);var inst_51125 = inst_51144;var inst_51126 = inst_51143;var inst_51127 = inst_51145;var inst_51128 = (0);var state_51168__$1 = (function (){var statearr_51185 = state_51168;(statearr_51185[(8)] = inst_51126);
(statearr_51185[(10)] = inst_51125);
(statearr_51185[(11)] = inst_51127);
(statearr_51185[(12)] = inst_51128);
return statearr_51185;
})();var statearr_51186_51215 = state_51168__$1;(statearr_51186_51215[(2)] = null);
(statearr_51186_51215[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (3)))
{var inst_51166 = (state_51168[(2)]);var state_51168__$1 = state_51168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51168__$1,inst_51166);
} else
{if((state_val_51169 === (12)))
{var inst_51159 = (state_51168[(2)]);var state_51168__$1 = state_51168;var statearr_51187_51216 = state_51168__$1;(statearr_51187_51216[(2)] = inst_51159);
(statearr_51187_51216[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (2)))
{var state_51168__$1 = state_51168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51168__$1,(4),in$);
} else
{if((state_val_51169 === (19)))
{var inst_51154 = (state_51168[(2)]);var state_51168__$1 = state_51168;var statearr_51188_51217 = state_51168__$1;(statearr_51188_51217[(2)] = inst_51154);
(statearr_51188_51217[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (11)))
{var inst_51139 = (state_51168[(7)]);var inst_51125 = (state_51168[(10)]);var inst_51139__$1 = cljs.core.seq.call(null,inst_51125);var state_51168__$1 = (function (){var statearr_51189 = state_51168;(statearr_51189[(7)] = inst_51139__$1);
return statearr_51189;
})();if(inst_51139__$1)
{var statearr_51190_51218 = state_51168__$1;(statearr_51190_51218[(1)] = (14));
} else
{var statearr_51191_51219 = state_51168__$1;(statearr_51191_51219[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (9)))
{var inst_51161 = (state_51168[(2)]);var state_51168__$1 = (function (){var statearr_51192 = state_51168;(statearr_51192[(15)] = inst_51161);
return statearr_51192;
})();var statearr_51193_51220 = state_51168__$1;(statearr_51193_51220[(2)] = null);
(statearr_51193_51220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (5)))
{var inst_51117 = cljs.core.async.close_BANG_.call(null,out);var state_51168__$1 = state_51168;var statearr_51194_51221 = state_51168__$1;(statearr_51194_51221[(2)] = inst_51117);
(statearr_51194_51221[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (14)))
{var inst_51139 = (state_51168[(7)]);var inst_51141 = cljs.core.chunked_seq_QMARK_.call(null,inst_51139);var state_51168__$1 = state_51168;if(inst_51141)
{var statearr_51195_51222 = state_51168__$1;(statearr_51195_51222[(1)] = (17));
} else
{var statearr_51196_51223 = state_51168__$1;(statearr_51196_51223[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (16)))
{var inst_51157 = (state_51168[(2)]);var state_51168__$1 = state_51168;var statearr_51197_51224 = state_51168__$1;(statearr_51197_51224[(2)] = inst_51157);
(statearr_51197_51224[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51169 === (10)))
{var inst_51126 = (state_51168[(8)]);var inst_51128 = (state_51168[(12)]);var inst_51133 = cljs.core._nth.call(null,inst_51126,inst_51128);var state_51168__$1 = state_51168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51168__$1,(13),out,inst_51133);
} else
{if((state_val_51169 === (18)))
{var inst_51139 = (state_51168[(7)]);var inst_51148 = cljs.core.first.call(null,inst_51139);var state_51168__$1 = state_51168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51168__$1,(20),out,inst_51148);
} else
{if((state_val_51169 === (8)))
{var inst_51127 = (state_51168[(11)]);var inst_51128 = (state_51168[(12)]);var inst_51130 = (inst_51128 < inst_51127);var inst_51131 = inst_51130;var state_51168__$1 = state_51168;if(cljs.core.truth_(inst_51131))
{var statearr_51198_51225 = state_51168__$1;(statearr_51198_51225[(1)] = (10));
} else
{var statearr_51199_51226 = state_51168__$1;(statearr_51199_51226[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_51203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51203[(0)] = state_machine__5679__auto__);
(statearr_51203[(1)] = (1));
return statearr_51203;
});
var state_machine__5679__auto____1 = (function (state_51168){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51168);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51204){if((e51204 instanceof Object))
{var ex__5682__auto__ = e51204;var statearr_51205_51227 = state_51168;(statearr_51205_51227[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51168);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51228 = state_51168;
state_51168 = G__51228;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51168){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51206 = f__5694__auto__.call(null);(statearr_51206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51206;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___51309 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51309){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51309){
return (function (state_51288){var state_val_51289 = (state_51288[(1)]);if((state_val_51289 === (7)))
{var inst_51284 = (state_51288[(2)]);var state_51288__$1 = state_51288;var statearr_51290_51310 = state_51288__$1;(statearr_51290_51310[(2)] = inst_51284);
(statearr_51290_51310[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51289 === (1)))
{var state_51288__$1 = state_51288;var statearr_51291_51311 = state_51288__$1;(statearr_51291_51311[(2)] = null);
(statearr_51291_51311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51289 === (4)))
{var inst_51271 = (state_51288[(7)]);var inst_51271__$1 = (state_51288[(2)]);var inst_51272 = (inst_51271__$1 == null);var state_51288__$1 = (function (){var statearr_51292 = state_51288;(statearr_51292[(7)] = inst_51271__$1);
return statearr_51292;
})();if(cljs.core.truth_(inst_51272))
{var statearr_51293_51312 = state_51288__$1;(statearr_51293_51312[(1)] = (5));
} else
{var statearr_51294_51313 = state_51288__$1;(statearr_51294_51313[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51289 === (6)))
{var inst_51271 = (state_51288[(7)]);var state_51288__$1 = state_51288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51288__$1,(11),to,inst_51271);
} else
{if((state_val_51289 === (3)))
{var inst_51286 = (state_51288[(2)]);var state_51288__$1 = state_51288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51288__$1,inst_51286);
} else
{if((state_val_51289 === (2)))
{var state_51288__$1 = state_51288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51288__$1,(4),from);
} else
{if((state_val_51289 === (11)))
{var inst_51281 = (state_51288[(2)]);var state_51288__$1 = (function (){var statearr_51295 = state_51288;(statearr_51295[(8)] = inst_51281);
return statearr_51295;
})();var statearr_51296_51314 = state_51288__$1;(statearr_51296_51314[(2)] = null);
(statearr_51296_51314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51289 === (9)))
{var state_51288__$1 = state_51288;var statearr_51297_51315 = state_51288__$1;(statearr_51297_51315[(2)] = null);
(statearr_51297_51315[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51289 === (5)))
{var state_51288__$1 = state_51288;if(cljs.core.truth_(close_QMARK_))
{var statearr_51298_51316 = state_51288__$1;(statearr_51298_51316[(1)] = (8));
} else
{var statearr_51299_51317 = state_51288__$1;(statearr_51299_51317[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51289 === (10)))
{var inst_51278 = (state_51288[(2)]);var state_51288__$1 = state_51288;var statearr_51300_51318 = state_51288__$1;(statearr_51300_51318[(2)] = inst_51278);
(statearr_51300_51318[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51289 === (8)))
{var inst_51275 = cljs.core.async.close_BANG_.call(null,to);var state_51288__$1 = state_51288;var statearr_51301_51319 = state_51288__$1;(statearr_51301_51319[(2)] = inst_51275);
(statearr_51301_51319[(1)] = (10));
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
});})(c__5693__auto___51309))
;return ((function (switch__5678__auto__,c__5693__auto___51309){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51305 = [null,null,null,null,null,null,null,null,null];(statearr_51305[(0)] = state_machine__5679__auto__);
(statearr_51305[(1)] = (1));
return statearr_51305;
});
var state_machine__5679__auto____1 = (function (state_51288){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51288);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51306){if((e51306 instanceof Object))
{var ex__5682__auto__ = e51306;var statearr_51307_51320 = state_51288;(statearr_51307_51320[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51321 = state_51288;
state_51288 = G__51321;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51288){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51309))
})();var state__5695__auto__ = (function (){var statearr_51308 = f__5694__auto__.call(null);(statearr_51308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51309);
return statearr_51308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51309))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___51408 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51408,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51408,tc,fc){
return (function (state_51386){var state_val_51387 = (state_51386[(1)]);if((state_val_51387 === (7)))
{var inst_51382 = (state_51386[(2)]);var state_51386__$1 = state_51386;var statearr_51388_51409 = state_51386__$1;(statearr_51388_51409[(2)] = inst_51382);
(statearr_51388_51409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51387 === (1)))
{var state_51386__$1 = state_51386;var statearr_51389_51410 = state_51386__$1;(statearr_51389_51410[(2)] = null);
(statearr_51389_51410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51387 === (4)))
{var inst_51367 = (state_51386[(7)]);var inst_51367__$1 = (state_51386[(2)]);var inst_51368 = (inst_51367__$1 == null);var state_51386__$1 = (function (){var statearr_51390 = state_51386;(statearr_51390[(7)] = inst_51367__$1);
return statearr_51390;
})();if(cljs.core.truth_(inst_51368))
{var statearr_51391_51411 = state_51386__$1;(statearr_51391_51411[(1)] = (5));
} else
{var statearr_51392_51412 = state_51386__$1;(statearr_51392_51412[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51387 === (6)))
{var inst_51367 = (state_51386[(7)]);var inst_51373 = p.call(null,inst_51367);var state_51386__$1 = state_51386;if(cljs.core.truth_(inst_51373))
{var statearr_51393_51413 = state_51386__$1;(statearr_51393_51413[(1)] = (9));
} else
{var statearr_51394_51414 = state_51386__$1;(statearr_51394_51414[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51387 === (3)))
{var inst_51384 = (state_51386[(2)]);var state_51386__$1 = state_51386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51386__$1,inst_51384);
} else
{if((state_val_51387 === (2)))
{var state_51386__$1 = state_51386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51386__$1,(4),ch);
} else
{if((state_val_51387 === (11)))
{var inst_51367 = (state_51386[(7)]);var inst_51377 = (state_51386[(2)]);var state_51386__$1 = state_51386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51386__$1,(8),inst_51377,inst_51367);
} else
{if((state_val_51387 === (9)))
{var state_51386__$1 = state_51386;var statearr_51395_51415 = state_51386__$1;(statearr_51395_51415[(2)] = tc);
(statearr_51395_51415[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51387 === (5)))
{var inst_51370 = cljs.core.async.close_BANG_.call(null,tc);var inst_51371 = cljs.core.async.close_BANG_.call(null,fc);var state_51386__$1 = (function (){var statearr_51396 = state_51386;(statearr_51396[(8)] = inst_51370);
return statearr_51396;
})();var statearr_51397_51416 = state_51386__$1;(statearr_51397_51416[(2)] = inst_51371);
(statearr_51397_51416[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51387 === (10)))
{var state_51386__$1 = state_51386;var statearr_51398_51417 = state_51386__$1;(statearr_51398_51417[(2)] = fc);
(statearr_51398_51417[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51387 === (8)))
{var inst_51379 = (state_51386[(2)]);var state_51386__$1 = (function (){var statearr_51399 = state_51386;(statearr_51399[(9)] = inst_51379);
return statearr_51399;
})();var statearr_51400_51418 = state_51386__$1;(statearr_51400_51418[(2)] = null);
(statearr_51400_51418[(1)] = (2));
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
});})(c__5693__auto___51408,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___51408,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51404 = [null,null,null,null,null,null,null,null,null,null];(statearr_51404[(0)] = state_machine__5679__auto__);
(statearr_51404[(1)] = (1));
return statearr_51404;
});
var state_machine__5679__auto____1 = (function (state_51386){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51386);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51405){if((e51405 instanceof Object))
{var ex__5682__auto__ = e51405;var statearr_51406_51419 = state_51386;(statearr_51406_51419[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51420 = state_51386;
state_51386 = G__51420;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51386){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51408,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_51407 = f__5694__auto__.call(null);(statearr_51407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51408);
return statearr_51407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51408,tc,fc))
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
return (function (state_51467){var state_val_51468 = (state_51467[(1)]);if((state_val_51468 === (7)))
{var inst_51463 = (state_51467[(2)]);var state_51467__$1 = state_51467;var statearr_51469_51485 = state_51467__$1;(statearr_51469_51485[(2)] = inst_51463);
(statearr_51469_51485[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51468 === (6)))
{var inst_51453 = (state_51467[(7)]);var inst_51456 = (state_51467[(8)]);var inst_51460 = f.call(null,inst_51453,inst_51456);var inst_51453__$1 = inst_51460;var state_51467__$1 = (function (){var statearr_51470 = state_51467;(statearr_51470[(7)] = inst_51453__$1);
return statearr_51470;
})();var statearr_51471_51486 = state_51467__$1;(statearr_51471_51486[(2)] = null);
(statearr_51471_51486[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51468 === (5)))
{var inst_51453 = (state_51467[(7)]);var state_51467__$1 = state_51467;var statearr_51472_51487 = state_51467__$1;(statearr_51472_51487[(2)] = inst_51453);
(statearr_51472_51487[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51468 === (4)))
{var inst_51456 = (state_51467[(8)]);var inst_51456__$1 = (state_51467[(2)]);var inst_51457 = (inst_51456__$1 == null);var state_51467__$1 = (function (){var statearr_51473 = state_51467;(statearr_51473[(8)] = inst_51456__$1);
return statearr_51473;
})();if(cljs.core.truth_(inst_51457))
{var statearr_51474_51488 = state_51467__$1;(statearr_51474_51488[(1)] = (5));
} else
{var statearr_51475_51489 = state_51467__$1;(statearr_51475_51489[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51468 === (3)))
{var inst_51465 = (state_51467[(2)]);var state_51467__$1 = state_51467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51467__$1,inst_51465);
} else
{if((state_val_51468 === (2)))
{var state_51467__$1 = state_51467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51467__$1,(4),ch);
} else
{if((state_val_51468 === (1)))
{var inst_51453 = init;var state_51467__$1 = (function (){var statearr_51476 = state_51467;(statearr_51476[(7)] = inst_51453);
return statearr_51476;
})();var statearr_51477_51490 = state_51467__$1;(statearr_51477_51490[(2)] = null);
(statearr_51477_51490[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_51481 = [null,null,null,null,null,null,null,null,null];(statearr_51481[(0)] = state_machine__5679__auto__);
(statearr_51481[(1)] = (1));
return statearr_51481;
});
var state_machine__5679__auto____1 = (function (state_51467){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51467);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51482){if((e51482 instanceof Object))
{var ex__5682__auto__ = e51482;var statearr_51483_51491 = state_51467;(statearr_51483_51491[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51492 = state_51467;
state_51467 = G__51492;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51467){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51484 = f__5694__auto__.call(null);(statearr_51484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51484;
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
return (function (state_51554){var state_val_51555 = (state_51554[(1)]);if((state_val_51555 === (7)))
{var inst_51535 = (state_51554[(7)]);var inst_51540 = (state_51554[(2)]);var inst_51541 = cljs.core.next.call(null,inst_51535);var inst_51535__$1 = inst_51541;var state_51554__$1 = (function (){var statearr_51556 = state_51554;(statearr_51556[(8)] = inst_51540);
(statearr_51556[(7)] = inst_51535__$1);
return statearr_51556;
})();var statearr_51557_51575 = state_51554__$1;(statearr_51557_51575[(2)] = null);
(statearr_51557_51575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51555 === (1)))
{var inst_51534 = cljs.core.seq.call(null,coll);var inst_51535 = inst_51534;var state_51554__$1 = (function (){var statearr_51558 = state_51554;(statearr_51558[(7)] = inst_51535);
return statearr_51558;
})();var statearr_51559_51576 = state_51554__$1;(statearr_51559_51576[(2)] = null);
(statearr_51559_51576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51555 === (4)))
{var inst_51535 = (state_51554[(7)]);var inst_51538 = cljs.core.first.call(null,inst_51535);var state_51554__$1 = state_51554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51554__$1,(7),ch,inst_51538);
} else
{if((state_val_51555 === (6)))
{var inst_51550 = (state_51554[(2)]);var state_51554__$1 = state_51554;var statearr_51560_51577 = state_51554__$1;(statearr_51560_51577[(2)] = inst_51550);
(statearr_51560_51577[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51555 === (3)))
{var inst_51552 = (state_51554[(2)]);var state_51554__$1 = state_51554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51554__$1,inst_51552);
} else
{if((state_val_51555 === (2)))
{var inst_51535 = (state_51554[(7)]);var state_51554__$1 = state_51554;if(cljs.core.truth_(inst_51535))
{var statearr_51561_51578 = state_51554__$1;(statearr_51561_51578[(1)] = (4));
} else
{var statearr_51562_51579 = state_51554__$1;(statearr_51562_51579[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51555 === (9)))
{var state_51554__$1 = state_51554;var statearr_51563_51580 = state_51554__$1;(statearr_51563_51580[(2)] = null);
(statearr_51563_51580[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51555 === (5)))
{var state_51554__$1 = state_51554;if(cljs.core.truth_(close_QMARK_))
{var statearr_51564_51581 = state_51554__$1;(statearr_51564_51581[(1)] = (8));
} else
{var statearr_51565_51582 = state_51554__$1;(statearr_51565_51582[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51555 === (10)))
{var inst_51548 = (state_51554[(2)]);var state_51554__$1 = state_51554;var statearr_51566_51583 = state_51554__$1;(statearr_51566_51583[(2)] = inst_51548);
(statearr_51566_51583[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51555 === (8)))
{var inst_51545 = cljs.core.async.close_BANG_.call(null,ch);var state_51554__$1 = state_51554;var statearr_51567_51584 = state_51554__$1;(statearr_51567_51584[(2)] = inst_51545);
(statearr_51567_51584[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_51571 = [null,null,null,null,null,null,null,null,null];(statearr_51571[(0)] = state_machine__5679__auto__);
(statearr_51571[(1)] = (1));
return statearr_51571;
});
var state_machine__5679__auto____1 = (function (state_51554){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51572){if((e51572 instanceof Object))
{var ex__5682__auto__ = e51572;var statearr_51573_51585 = state_51554;(statearr_51573_51585[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51586 = state_51554;
state_51554 = G__51586;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51554){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51574 = f__5694__auto__.call(null);(statearr_51574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51574;
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
cljs.core.async.Mux = (function (){var obj51588 = {};return obj51588;
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
cljs.core.async.Mult = (function (){var obj51590 = {};return obj51590;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t51814 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51814 = (function (cs,ch,mult,meta51815){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta51815 = meta51815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51814.cljs$lang$type = true;
cljs.core.async.t51814.cljs$lang$ctorStr = "cljs.core.async/t51814";
cljs.core.async.t51814.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51814");
});})(cs))
;
cljs.core.async.t51814.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t51814.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t51814.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t51814.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t51814.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t51814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t51814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51816){var self__ = this;
var _51816__$1 = this;return self__.meta51815;
});})(cs))
;
cljs.core.async.t51814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51816,meta51815__$1){var self__ = this;
var _51816__$1 = this;return (new cljs.core.async.t51814(self__.cs,self__.ch,self__.mult,meta51815__$1));
});})(cs))
;
cljs.core.async.__GT_t51814 = ((function (cs){
return (function __GT_t51814(cs__$1,ch__$1,mult__$1,meta51815){return (new cljs.core.async.t51814(cs__$1,ch__$1,mult__$1,meta51815));
});})(cs))
;
}
return (new cljs.core.async.t51814(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___52037 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52037,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52037,cs,m,dchan,dctr,done){
return (function (state_51951){var state_val_51952 = (state_51951[(1)]);if((state_val_51952 === (7)))
{var inst_51947 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_51953_52038 = state_51951__$1;(statearr_51953_52038[(2)] = inst_51947);
(statearr_51953_52038[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (20)))
{var inst_51848 = (state_51951[(7)]);var inst_51858 = cljs.core.first.call(null,inst_51848);var inst_51859 = cljs.core.nth.call(null,inst_51858,(0),null);var inst_51860 = cljs.core.nth.call(null,inst_51858,(1),null);var state_51951__$1 = (function (){var statearr_51954 = state_51951;(statearr_51954[(8)] = inst_51859);
return statearr_51954;
})();if(cljs.core.truth_(inst_51860))
{var statearr_51955_52039 = state_51951__$1;(statearr_51955_52039[(1)] = (22));
} else
{var statearr_51956_52040 = state_51951__$1;(statearr_51956_52040[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (27)))
{var inst_51888 = (state_51951[(9)]);var inst_51890 = (state_51951[(10)]);var inst_51895 = cljs.core._nth.call(null,inst_51888,inst_51890);var state_51951__$1 = (function (){var statearr_51957 = state_51951;(statearr_51957[(11)] = inst_51895);
return statearr_51957;
})();var statearr_51958_52041 = state_51951__$1;(statearr_51958_52041[(2)] = null);
(statearr_51958_52041[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (1)))
{var state_51951__$1 = state_51951;var statearr_51959_52042 = state_51951__$1;(statearr_51959_52042[(2)] = null);
(statearr_51959_52042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (24)))
{var inst_51848 = (state_51951[(7)]);var inst_51865 = (state_51951[(2)]);var inst_51866 = cljs.core.next.call(null,inst_51848);var inst_51828 = inst_51866;var inst_51829 = null;var inst_51830 = (0);var inst_51831 = (0);var state_51951__$1 = (function (){var statearr_51960 = state_51951;(statearr_51960[(12)] = inst_51831);
(statearr_51960[(13)] = inst_51865);
(statearr_51960[(14)] = inst_51829);
(statearr_51960[(15)] = inst_51830);
(statearr_51960[(16)] = inst_51828);
return statearr_51960;
})();var statearr_51961_52043 = state_51951__$1;(statearr_51961_52043[(2)] = null);
(statearr_51961_52043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (39)))
{var inst_51908 = (state_51951[(17)]);var inst_51926 = (state_51951[(2)]);var inst_51927 = cljs.core.next.call(null,inst_51908);var inst_51887 = inst_51927;var inst_51888 = null;var inst_51889 = (0);var inst_51890 = (0);var state_51951__$1 = (function (){var statearr_51965 = state_51951;(statearr_51965[(18)] = inst_51887);
(statearr_51965[(9)] = inst_51888);
(statearr_51965[(19)] = inst_51889);
(statearr_51965[(10)] = inst_51890);
(statearr_51965[(20)] = inst_51926);
return statearr_51965;
})();var statearr_51966_52044 = state_51951__$1;(statearr_51966_52044[(2)] = null);
(statearr_51966_52044[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (4)))
{var inst_51819 = (state_51951[(21)]);var inst_51819__$1 = (state_51951[(2)]);var inst_51820 = (inst_51819__$1 == null);var state_51951__$1 = (function (){var statearr_51967 = state_51951;(statearr_51967[(21)] = inst_51819__$1);
return statearr_51967;
})();if(cljs.core.truth_(inst_51820))
{var statearr_51968_52045 = state_51951__$1;(statearr_51968_52045[(1)] = (5));
} else
{var statearr_51969_52046 = state_51951__$1;(statearr_51969_52046[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (15)))
{var inst_51831 = (state_51951[(12)]);var inst_51829 = (state_51951[(14)]);var inst_51830 = (state_51951[(15)]);var inst_51828 = (state_51951[(16)]);var inst_51844 = (state_51951[(2)]);var inst_51845 = (inst_51831 + (1));var tmp51962 = inst_51829;var tmp51963 = inst_51830;var tmp51964 = inst_51828;var inst_51828__$1 = tmp51964;var inst_51829__$1 = tmp51962;var inst_51830__$1 = tmp51963;var inst_51831__$1 = inst_51845;var state_51951__$1 = (function (){var statearr_51970 = state_51951;(statearr_51970[(12)] = inst_51831__$1);
(statearr_51970[(22)] = inst_51844);
(statearr_51970[(14)] = inst_51829__$1);
(statearr_51970[(15)] = inst_51830__$1);
(statearr_51970[(16)] = inst_51828__$1);
return statearr_51970;
})();var statearr_51971_52047 = state_51951__$1;(statearr_51971_52047[(2)] = null);
(statearr_51971_52047[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (21)))
{var inst_51869 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_51972_52048 = state_51951__$1;(statearr_51972_52048[(2)] = inst_51869);
(statearr_51972_52048[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (31)))
{var inst_51895 = (state_51951[(11)]);var inst_51896 = (state_51951[(2)]);var inst_51897 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_51898 = cljs.core.async.untap_STAR_.call(null,m,inst_51895);var state_51951__$1 = (function (){var statearr_51973 = state_51951;(statearr_51973[(23)] = inst_51897);
(statearr_51973[(24)] = inst_51896);
return statearr_51973;
})();var statearr_51974_52049 = state_51951__$1;(statearr_51974_52049[(2)] = inst_51898);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51951__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (32)))
{var inst_51895 = (state_51951[(11)]);var inst_51819 = (state_51951[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51951,(31),Object,null,(30));var inst_51902 = cljs.core.async.put_BANG_.call(null,inst_51895,inst_51819,done);var state_51951__$1 = state_51951;var statearr_51975_52050 = state_51951__$1;(statearr_51975_52050[(2)] = inst_51902);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51951__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (40)))
{var inst_51917 = (state_51951[(25)]);var inst_51918 = (state_51951[(2)]);var inst_51919 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_51920 = cljs.core.async.untap_STAR_.call(null,m,inst_51917);var state_51951__$1 = (function (){var statearr_51976 = state_51951;(statearr_51976[(26)] = inst_51919);
(statearr_51976[(27)] = inst_51918);
return statearr_51976;
})();var statearr_51977_52051 = state_51951__$1;(statearr_51977_52051[(2)] = inst_51920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51951__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (33)))
{var inst_51908 = (state_51951[(17)]);var inst_51910 = cljs.core.chunked_seq_QMARK_.call(null,inst_51908);var state_51951__$1 = state_51951;if(inst_51910)
{var statearr_51978_52052 = state_51951__$1;(statearr_51978_52052[(1)] = (36));
} else
{var statearr_51979_52053 = state_51951__$1;(statearr_51979_52053[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (13)))
{var inst_51838 = (state_51951[(28)]);var inst_51841 = cljs.core.async.close_BANG_.call(null,inst_51838);var state_51951__$1 = state_51951;var statearr_51980_52054 = state_51951__$1;(statearr_51980_52054[(2)] = inst_51841);
(statearr_51980_52054[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (22)))
{var inst_51859 = (state_51951[(8)]);var inst_51862 = cljs.core.async.close_BANG_.call(null,inst_51859);var state_51951__$1 = state_51951;var statearr_51981_52055 = state_51951__$1;(statearr_51981_52055[(2)] = inst_51862);
(statearr_51981_52055[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (36)))
{var inst_51908 = (state_51951[(17)]);var inst_51912 = cljs.core.chunk_first.call(null,inst_51908);var inst_51913 = cljs.core.chunk_rest.call(null,inst_51908);var inst_51914 = cljs.core.count.call(null,inst_51912);var inst_51887 = inst_51913;var inst_51888 = inst_51912;var inst_51889 = inst_51914;var inst_51890 = (0);var state_51951__$1 = (function (){var statearr_51982 = state_51951;(statearr_51982[(18)] = inst_51887);
(statearr_51982[(9)] = inst_51888);
(statearr_51982[(19)] = inst_51889);
(statearr_51982[(10)] = inst_51890);
return statearr_51982;
})();var statearr_51983_52056 = state_51951__$1;(statearr_51983_52056[(2)] = null);
(statearr_51983_52056[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (41)))
{var inst_51917 = (state_51951[(25)]);var inst_51819 = (state_51951[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51951,(40),Object,null,(39));var inst_51924 = cljs.core.async.put_BANG_.call(null,inst_51917,inst_51819,done);var state_51951__$1 = state_51951;var statearr_51984_52057 = state_51951__$1;(statearr_51984_52057[(2)] = inst_51924);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51951__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (43)))
{var state_51951__$1 = state_51951;var statearr_51985_52058 = state_51951__$1;(statearr_51985_52058[(2)] = null);
(statearr_51985_52058[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (29)))
{var inst_51935 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_51986_52059 = state_51951__$1;(statearr_51986_52059[(2)] = inst_51935);
(statearr_51986_52059[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (44)))
{var inst_51944 = (state_51951[(2)]);var state_51951__$1 = (function (){var statearr_51987 = state_51951;(statearr_51987[(29)] = inst_51944);
return statearr_51987;
})();var statearr_51988_52060 = state_51951__$1;(statearr_51988_52060[(2)] = null);
(statearr_51988_52060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (6)))
{var inst_51879 = (state_51951[(30)]);var inst_51878 = cljs.core.deref.call(null,cs);var inst_51879__$1 = cljs.core.keys.call(null,inst_51878);var inst_51880 = cljs.core.count.call(null,inst_51879__$1);var inst_51881 = cljs.core.reset_BANG_.call(null,dctr,inst_51880);var inst_51886 = cljs.core.seq.call(null,inst_51879__$1);var inst_51887 = inst_51886;var inst_51888 = null;var inst_51889 = (0);var inst_51890 = (0);var state_51951__$1 = (function (){var statearr_51989 = state_51951;(statearr_51989[(18)] = inst_51887);
(statearr_51989[(9)] = inst_51888);
(statearr_51989[(19)] = inst_51889);
(statearr_51989[(10)] = inst_51890);
(statearr_51989[(30)] = inst_51879__$1);
(statearr_51989[(31)] = inst_51881);
return statearr_51989;
})();var statearr_51990_52061 = state_51951__$1;(statearr_51990_52061[(2)] = null);
(statearr_51990_52061[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (28)))
{var inst_51887 = (state_51951[(18)]);var inst_51908 = (state_51951[(17)]);var inst_51908__$1 = cljs.core.seq.call(null,inst_51887);var state_51951__$1 = (function (){var statearr_51991 = state_51951;(statearr_51991[(17)] = inst_51908__$1);
return statearr_51991;
})();if(inst_51908__$1)
{var statearr_51992_52062 = state_51951__$1;(statearr_51992_52062[(1)] = (33));
} else
{var statearr_51993_52063 = state_51951__$1;(statearr_51993_52063[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (25)))
{var inst_51889 = (state_51951[(19)]);var inst_51890 = (state_51951[(10)]);var inst_51892 = (inst_51890 < inst_51889);var inst_51893 = inst_51892;var state_51951__$1 = state_51951;if(cljs.core.truth_(inst_51893))
{var statearr_51994_52064 = state_51951__$1;(statearr_51994_52064[(1)] = (27));
} else
{var statearr_51995_52065 = state_51951__$1;(statearr_51995_52065[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (34)))
{var state_51951__$1 = state_51951;var statearr_51996_52066 = state_51951__$1;(statearr_51996_52066[(2)] = null);
(statearr_51996_52066[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (17)))
{var state_51951__$1 = state_51951;var statearr_51997_52067 = state_51951__$1;(statearr_51997_52067[(2)] = null);
(statearr_51997_52067[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (3)))
{var inst_51949 = (state_51951[(2)]);var state_51951__$1 = state_51951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51951__$1,inst_51949);
} else
{if((state_val_51952 === (12)))
{var inst_51874 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_51998_52068 = state_51951__$1;(statearr_51998_52068[(2)] = inst_51874);
(statearr_51998_52068[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (2)))
{var state_51951__$1 = state_51951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51951__$1,(4),ch);
} else
{if((state_val_51952 === (23)))
{var state_51951__$1 = state_51951;var statearr_51999_52069 = state_51951__$1;(statearr_51999_52069[(2)] = null);
(statearr_51999_52069[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (35)))
{var inst_51933 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_52000_52070 = state_51951__$1;(statearr_52000_52070[(2)] = inst_51933);
(statearr_52000_52070[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (19)))
{var inst_51848 = (state_51951[(7)]);var inst_51852 = cljs.core.chunk_first.call(null,inst_51848);var inst_51853 = cljs.core.chunk_rest.call(null,inst_51848);var inst_51854 = cljs.core.count.call(null,inst_51852);var inst_51828 = inst_51853;var inst_51829 = inst_51852;var inst_51830 = inst_51854;var inst_51831 = (0);var state_51951__$1 = (function (){var statearr_52001 = state_51951;(statearr_52001[(12)] = inst_51831);
(statearr_52001[(14)] = inst_51829);
(statearr_52001[(15)] = inst_51830);
(statearr_52001[(16)] = inst_51828);
return statearr_52001;
})();var statearr_52002_52071 = state_51951__$1;(statearr_52002_52071[(2)] = null);
(statearr_52002_52071[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (11)))
{var inst_51848 = (state_51951[(7)]);var inst_51828 = (state_51951[(16)]);var inst_51848__$1 = cljs.core.seq.call(null,inst_51828);var state_51951__$1 = (function (){var statearr_52003 = state_51951;(statearr_52003[(7)] = inst_51848__$1);
return statearr_52003;
})();if(inst_51848__$1)
{var statearr_52004_52072 = state_51951__$1;(statearr_52004_52072[(1)] = (16));
} else
{var statearr_52005_52073 = state_51951__$1;(statearr_52005_52073[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (9)))
{var inst_51876 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_52006_52074 = state_51951__$1;(statearr_52006_52074[(2)] = inst_51876);
(statearr_52006_52074[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (5)))
{var inst_51826 = cljs.core.deref.call(null,cs);var inst_51827 = cljs.core.seq.call(null,inst_51826);var inst_51828 = inst_51827;var inst_51829 = null;var inst_51830 = (0);var inst_51831 = (0);var state_51951__$1 = (function (){var statearr_52007 = state_51951;(statearr_52007[(12)] = inst_51831);
(statearr_52007[(14)] = inst_51829);
(statearr_52007[(15)] = inst_51830);
(statearr_52007[(16)] = inst_51828);
return statearr_52007;
})();var statearr_52008_52075 = state_51951__$1;(statearr_52008_52075[(2)] = null);
(statearr_52008_52075[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (14)))
{var state_51951__$1 = state_51951;var statearr_52009_52076 = state_51951__$1;(statearr_52009_52076[(2)] = null);
(statearr_52009_52076[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (45)))
{var inst_51941 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_52010_52077 = state_51951__$1;(statearr_52010_52077[(2)] = inst_51941);
(statearr_52010_52077[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (26)))
{var inst_51879 = (state_51951[(30)]);var inst_51937 = (state_51951[(2)]);var inst_51938 = cljs.core.seq.call(null,inst_51879);var state_51951__$1 = (function (){var statearr_52011 = state_51951;(statearr_52011[(32)] = inst_51937);
return statearr_52011;
})();if(inst_51938)
{var statearr_52012_52078 = state_51951__$1;(statearr_52012_52078[(1)] = (42));
} else
{var statearr_52013_52079 = state_51951__$1;(statearr_52013_52079[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (16)))
{var inst_51848 = (state_51951[(7)]);var inst_51850 = cljs.core.chunked_seq_QMARK_.call(null,inst_51848);var state_51951__$1 = state_51951;if(inst_51850)
{var statearr_52017_52080 = state_51951__$1;(statearr_52017_52080[(1)] = (19));
} else
{var statearr_52018_52081 = state_51951__$1;(statearr_52018_52081[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (38)))
{var inst_51930 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_52019_52082 = state_51951__$1;(statearr_52019_52082[(2)] = inst_51930);
(statearr_52019_52082[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (30)))
{var inst_51887 = (state_51951[(18)]);var inst_51888 = (state_51951[(9)]);var inst_51889 = (state_51951[(19)]);var inst_51890 = (state_51951[(10)]);var inst_51904 = (state_51951[(2)]);var inst_51905 = (inst_51890 + (1));var tmp52014 = inst_51887;var tmp52015 = inst_51888;var tmp52016 = inst_51889;var inst_51887__$1 = tmp52014;var inst_51888__$1 = tmp52015;var inst_51889__$1 = tmp52016;var inst_51890__$1 = inst_51905;var state_51951__$1 = (function (){var statearr_52020 = state_51951;(statearr_52020[(18)] = inst_51887__$1);
(statearr_52020[(9)] = inst_51888__$1);
(statearr_52020[(19)] = inst_51889__$1);
(statearr_52020[(33)] = inst_51904);
(statearr_52020[(10)] = inst_51890__$1);
return statearr_52020;
})();var statearr_52021_52083 = state_51951__$1;(statearr_52021_52083[(2)] = null);
(statearr_52021_52083[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (10)))
{var inst_51831 = (state_51951[(12)]);var inst_51829 = (state_51951[(14)]);var inst_51837 = cljs.core._nth.call(null,inst_51829,inst_51831);var inst_51838 = cljs.core.nth.call(null,inst_51837,(0),null);var inst_51839 = cljs.core.nth.call(null,inst_51837,(1),null);var state_51951__$1 = (function (){var statearr_52022 = state_51951;(statearr_52022[(28)] = inst_51838);
return statearr_52022;
})();if(cljs.core.truth_(inst_51839))
{var statearr_52023_52084 = state_51951__$1;(statearr_52023_52084[(1)] = (13));
} else
{var statearr_52024_52085 = state_51951__$1;(statearr_52024_52085[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (18)))
{var inst_51872 = (state_51951[(2)]);var state_51951__$1 = state_51951;var statearr_52025_52086 = state_51951__$1;(statearr_52025_52086[(2)] = inst_51872);
(statearr_52025_52086[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (42)))
{var state_51951__$1 = state_51951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51951__$1,(45),dchan);
} else
{if((state_val_51952 === (37)))
{var inst_51908 = (state_51951[(17)]);var inst_51917 = cljs.core.first.call(null,inst_51908);var state_51951__$1 = (function (){var statearr_52026 = state_51951;(statearr_52026[(25)] = inst_51917);
return statearr_52026;
})();var statearr_52027_52087 = state_51951__$1;(statearr_52027_52087[(2)] = null);
(statearr_52027_52087[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51952 === (8)))
{var inst_51831 = (state_51951[(12)]);var inst_51830 = (state_51951[(15)]);var inst_51833 = (inst_51831 < inst_51830);var inst_51834 = inst_51833;var state_51951__$1 = state_51951;if(cljs.core.truth_(inst_51834))
{var statearr_52028_52088 = state_51951__$1;(statearr_52028_52088[(1)] = (10));
} else
{var statearr_52029_52089 = state_51951__$1;(statearr_52029_52089[(1)] = (11));
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
});})(c__5693__auto___52037,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___52037,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52033[(0)] = state_machine__5679__auto__);
(statearr_52033[(1)] = (1));
return statearr_52033;
});
var state_machine__5679__auto____1 = (function (state_51951){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52034){if((e52034 instanceof Object))
{var ex__5682__auto__ = e52034;var statearr_52035_52090 = state_51951;(statearr_52035_52090[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52091 = state_51951;
state_51951 = G__52091;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51951){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52037,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_52036 = f__5694__auto__.call(null);(statearr_52036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52037);
return statearr_52036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52037,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj52093 = {};return obj52093;
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
;var m = (function (){if(typeof cljs.core.async.t52203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52203 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52204){
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
this.meta52204 = meta52204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52203.cljs$lang$type = true;
cljs.core.async.t52203.cljs$lang$ctorStr = "cljs.core.async/t52203";
cljs.core.async.t52203.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52203");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t52203.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52205){var self__ = this;
var _52205__$1 = this;return self__.meta52204;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52205,meta52204__$1){var self__ = this;
var _52205__$1 = this;return (new cljs.core.async.t52203(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52204__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t52203 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t52203(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52204){return (new cljs.core.async.t52203(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52204));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t52203(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___52312 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52270){var state_val_52271 = (state_52270[(1)]);if((state_val_52271 === (7)))
{var inst_52219 = (state_52270[(7)]);var inst_52224 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52219);var state_52270__$1 = state_52270;var statearr_52272_52313 = state_52270__$1;(statearr_52272_52313[(2)] = inst_52224);
(statearr_52272_52313[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (20)))
{var inst_52234 = (state_52270[(8)]);var state_52270__$1 = state_52270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52270__$1,(23),out,inst_52234);
} else
{if((state_val_52271 === (1)))
{var inst_52209 = (state_52270[(9)]);var inst_52209__$1 = calc_state.call(null);var inst_52210 = cljs.core.seq_QMARK_.call(null,inst_52209__$1);var state_52270__$1 = (function (){var statearr_52273 = state_52270;(statearr_52273[(9)] = inst_52209__$1);
return statearr_52273;
})();if(inst_52210)
{var statearr_52274_52314 = state_52270__$1;(statearr_52274_52314[(1)] = (2));
} else
{var statearr_52275_52315 = state_52270__$1;(statearr_52275_52315[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (4)))
{var inst_52209 = (state_52270[(9)]);var inst_52215 = (state_52270[(2)]);var inst_52216 = cljs.core.get.call(null,inst_52215,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_52217 = cljs.core.get.call(null,inst_52215,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_52218 = cljs.core.get.call(null,inst_52215,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_52219 = inst_52209;var state_52270__$1 = (function (){var statearr_52276 = state_52270;(statearr_52276[(10)] = inst_52217);
(statearr_52276[(11)] = inst_52218);
(statearr_52276[(12)] = inst_52216);
(statearr_52276[(7)] = inst_52219);
return statearr_52276;
})();var statearr_52277_52316 = state_52270__$1;(statearr_52277_52316[(2)] = null);
(statearr_52277_52316[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (15)))
{var state_52270__$1 = state_52270;var statearr_52278_52317 = state_52270__$1;(statearr_52278_52317[(2)] = null);
(statearr_52278_52317[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (21)))
{var state_52270__$1 = state_52270;var statearr_52279_52318 = state_52270__$1;(statearr_52279_52318[(2)] = null);
(statearr_52279_52318[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (13)))
{var inst_52266 = (state_52270[(2)]);var state_52270__$1 = state_52270;var statearr_52280_52319 = state_52270__$1;(statearr_52280_52319[(2)] = inst_52266);
(statearr_52280_52319[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (22)))
{var inst_52227 = (state_52270[(13)]);var inst_52263 = (state_52270[(2)]);var inst_52219 = inst_52227;var state_52270__$1 = (function (){var statearr_52281 = state_52270;(statearr_52281[(14)] = inst_52263);
(statearr_52281[(7)] = inst_52219);
return statearr_52281;
})();var statearr_52282_52320 = state_52270__$1;(statearr_52282_52320[(2)] = null);
(statearr_52282_52320[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (6)))
{var inst_52268 = (state_52270[(2)]);var state_52270__$1 = state_52270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52270__$1,inst_52268);
} else
{if((state_val_52271 === (17)))
{var inst_52249 = (state_52270[(15)]);var state_52270__$1 = state_52270;var statearr_52283_52321 = state_52270__$1;(statearr_52283_52321[(2)] = inst_52249);
(statearr_52283_52321[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (3)))
{var inst_52209 = (state_52270[(9)]);var state_52270__$1 = state_52270;var statearr_52284_52322 = state_52270__$1;(statearr_52284_52322[(2)] = inst_52209);
(statearr_52284_52322[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (12)))
{var inst_52230 = (state_52270[(16)]);var inst_52235 = (state_52270[(17)]);var inst_52249 = (state_52270[(15)]);var inst_52249__$1 = inst_52230.call(null,inst_52235);var state_52270__$1 = (function (){var statearr_52285 = state_52270;(statearr_52285[(15)] = inst_52249__$1);
return statearr_52285;
})();if(cljs.core.truth_(inst_52249__$1))
{var statearr_52286_52323 = state_52270__$1;(statearr_52286_52323[(1)] = (17));
} else
{var statearr_52287_52324 = state_52270__$1;(statearr_52287_52324[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (2)))
{var inst_52209 = (state_52270[(9)]);var inst_52212 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52209);var state_52270__$1 = state_52270;var statearr_52288_52325 = state_52270__$1;(statearr_52288_52325[(2)] = inst_52212);
(statearr_52288_52325[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (23)))
{var inst_52260 = (state_52270[(2)]);var state_52270__$1 = state_52270;var statearr_52289_52326 = state_52270__$1;(statearr_52289_52326[(2)] = inst_52260);
(statearr_52289_52326[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (19)))
{var inst_52257 = (state_52270[(2)]);var state_52270__$1 = state_52270;if(cljs.core.truth_(inst_52257))
{var statearr_52290_52327 = state_52270__$1;(statearr_52290_52327[(1)] = (20));
} else
{var statearr_52291_52328 = state_52270__$1;(statearr_52291_52328[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (11)))
{var inst_52234 = (state_52270[(8)]);var inst_52240 = (inst_52234 == null);var state_52270__$1 = state_52270;if(cljs.core.truth_(inst_52240))
{var statearr_52292_52329 = state_52270__$1;(statearr_52292_52329[(1)] = (14));
} else
{var statearr_52293_52330 = state_52270__$1;(statearr_52293_52330[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (9)))
{var inst_52227 = (state_52270[(13)]);var inst_52227__$1 = (state_52270[(2)]);var inst_52228 = cljs.core.get.call(null,inst_52227__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_52229 = cljs.core.get.call(null,inst_52227__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_52230 = cljs.core.get.call(null,inst_52227__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_52270__$1 = (function (){var statearr_52294 = state_52270;(statearr_52294[(16)] = inst_52230);
(statearr_52294[(13)] = inst_52227__$1);
(statearr_52294[(18)] = inst_52229);
return statearr_52294;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_52270__$1,(10),inst_52228);
} else
{if((state_val_52271 === (5)))
{var inst_52219 = (state_52270[(7)]);var inst_52222 = cljs.core.seq_QMARK_.call(null,inst_52219);var state_52270__$1 = state_52270;if(inst_52222)
{var statearr_52295_52331 = state_52270__$1;(statearr_52295_52331[(1)] = (7));
} else
{var statearr_52296_52332 = state_52270__$1;(statearr_52296_52332[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (14)))
{var inst_52235 = (state_52270[(17)]);var inst_52242 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_52235);var state_52270__$1 = state_52270;var statearr_52297_52333 = state_52270__$1;(statearr_52297_52333[(2)] = inst_52242);
(statearr_52297_52333[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (16)))
{var inst_52245 = (state_52270[(2)]);var inst_52246 = calc_state.call(null);var inst_52219 = inst_52246;var state_52270__$1 = (function (){var statearr_52298 = state_52270;(statearr_52298[(19)] = inst_52245);
(statearr_52298[(7)] = inst_52219);
return statearr_52298;
})();var statearr_52299_52334 = state_52270__$1;(statearr_52299_52334[(2)] = null);
(statearr_52299_52334[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (10)))
{var inst_52234 = (state_52270[(8)]);var inst_52235 = (state_52270[(17)]);var inst_52233 = (state_52270[(2)]);var inst_52234__$1 = cljs.core.nth.call(null,inst_52233,(0),null);var inst_52235__$1 = cljs.core.nth.call(null,inst_52233,(1),null);var inst_52236 = (inst_52234__$1 == null);var inst_52237 = cljs.core._EQ_.call(null,inst_52235__$1,change);var inst_52238 = (inst_52236) || (inst_52237);var state_52270__$1 = (function (){var statearr_52300 = state_52270;(statearr_52300[(8)] = inst_52234__$1);
(statearr_52300[(17)] = inst_52235__$1);
return statearr_52300;
})();if(cljs.core.truth_(inst_52238))
{var statearr_52301_52335 = state_52270__$1;(statearr_52301_52335[(1)] = (11));
} else
{var statearr_52302_52336 = state_52270__$1;(statearr_52302_52336[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (18)))
{var inst_52230 = (state_52270[(16)]);var inst_52235 = (state_52270[(17)]);var inst_52229 = (state_52270[(18)]);var inst_52252 = cljs.core.empty_QMARK_.call(null,inst_52230);var inst_52253 = inst_52229.call(null,inst_52235);var inst_52254 = cljs.core.not.call(null,inst_52253);var inst_52255 = (inst_52252) && (inst_52254);var state_52270__$1 = state_52270;var statearr_52303_52337 = state_52270__$1;(statearr_52303_52337[(2)] = inst_52255);
(statearr_52303_52337[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52271 === (8)))
{var inst_52219 = (state_52270[(7)]);var state_52270__$1 = state_52270;var statearr_52304_52338 = state_52270__$1;(statearr_52304_52338[(2)] = inst_52219);
(statearr_52304_52338[(1)] = (9));
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
});})(c__5693__auto___52312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___52312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52308[(0)] = state_machine__5679__auto__);
(statearr_52308[(1)] = (1));
return statearr_52308;
});
var state_machine__5679__auto____1 = (function (state_52270){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52270);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52309){if((e52309 instanceof Object))
{var ex__5682__auto__ = e52309;var statearr_52310_52339 = state_52270;(statearr_52310_52339[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52270);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52340 = state_52270;
state_52270 = G__52340;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52270){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_52311 = f__5694__auto__.call(null);(statearr_52311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52312);
return statearr_52311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj52342 = {};return obj52342;
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
return (function (p1__52343_SHARP_){if(cljs.core.truth_(p1__52343_SHARP_.call(null,topic)))
{return p1__52343_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__52343_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t52468 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52468 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta52469){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta52469 = meta52469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52468.cljs$lang$type = true;
cljs.core.async.t52468.cljs$lang$ctorStr = "cljs.core.async/t52468";
cljs.core.async.t52468.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52468");
});})(mults,ensure_mult))
;
cljs.core.async.t52468.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t52468.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t52468.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t52468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t52468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t52468.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t52468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52470){var self__ = this;
var _52470__$1 = this;return self__.meta52469;
});})(mults,ensure_mult))
;
cljs.core.async.t52468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52470,meta52469__$1){var self__ = this;
var _52470__$1 = this;return (new cljs.core.async.t52468(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta52469__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t52468 = ((function (mults,ensure_mult){
return (function __GT_t52468(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52469){return (new cljs.core.async.t52468(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52469));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t52468(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___52592 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52592,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52592,mults,ensure_mult,p){
return (function (state_52544){var state_val_52545 = (state_52544[(1)]);if((state_val_52545 === (7)))
{var inst_52540 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52546_52593 = state_52544__$1;(statearr_52546_52593[(2)] = inst_52540);
(statearr_52546_52593[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (20)))
{var state_52544__$1 = state_52544;var statearr_52547_52594 = state_52544__$1;(statearr_52547_52594[(2)] = null);
(statearr_52547_52594[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (1)))
{var state_52544__$1 = state_52544;var statearr_52548_52595 = state_52544__$1;(statearr_52548_52595[(2)] = null);
(statearr_52548_52595[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (24)))
{var inst_52473 = (state_52544[(7)]);var inst_52523 = (state_52544[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52544,(23),Object,null,(22));var inst_52530 = cljs.core.async.muxch_STAR_.call(null,inst_52523);var state_52544__$1 = state_52544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52544__$1,(25),inst_52530,inst_52473);
} else
{if((state_val_52545 === (4)))
{var inst_52473 = (state_52544[(7)]);var inst_52473__$1 = (state_52544[(2)]);var inst_52474 = (inst_52473__$1 == null);var state_52544__$1 = (function (){var statearr_52549 = state_52544;(statearr_52549[(7)] = inst_52473__$1);
return statearr_52549;
})();if(cljs.core.truth_(inst_52474))
{var statearr_52550_52596 = state_52544__$1;(statearr_52550_52596[(1)] = (5));
} else
{var statearr_52551_52597 = state_52544__$1;(statearr_52551_52597[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (15)))
{var inst_52515 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52552_52598 = state_52544__$1;(statearr_52552_52598[(2)] = inst_52515);
(statearr_52552_52598[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (21)))
{var inst_52537 = (state_52544[(2)]);var state_52544__$1 = (function (){var statearr_52553 = state_52544;(statearr_52553[(9)] = inst_52537);
return statearr_52553;
})();var statearr_52554_52599 = state_52544__$1;(statearr_52554_52599[(2)] = null);
(statearr_52554_52599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (13)))
{var inst_52497 = (state_52544[(10)]);var inst_52499 = cljs.core.chunked_seq_QMARK_.call(null,inst_52497);var state_52544__$1 = state_52544;if(inst_52499)
{var statearr_52555_52600 = state_52544__$1;(statearr_52555_52600[(1)] = (16));
} else
{var statearr_52556_52601 = state_52544__$1;(statearr_52556_52601[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (22)))
{var inst_52534 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52557_52602 = state_52544__$1;(statearr_52557_52602[(2)] = inst_52534);
(statearr_52557_52602[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (6)))
{var inst_52473 = (state_52544[(7)]);var inst_52523 = (state_52544[(8)]);var inst_52521 = (state_52544[(11)]);var inst_52521__$1 = topic_fn.call(null,inst_52473);var inst_52522 = cljs.core.deref.call(null,mults);var inst_52523__$1 = cljs.core.get.call(null,inst_52522,inst_52521__$1);var state_52544__$1 = (function (){var statearr_52558 = state_52544;(statearr_52558[(8)] = inst_52523__$1);
(statearr_52558[(11)] = inst_52521__$1);
return statearr_52558;
})();if(cljs.core.truth_(inst_52523__$1))
{var statearr_52559_52603 = state_52544__$1;(statearr_52559_52603[(1)] = (19));
} else
{var statearr_52560_52604 = state_52544__$1;(statearr_52560_52604[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (25)))
{var inst_52532 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52561_52605 = state_52544__$1;(statearr_52561_52605[(2)] = inst_52532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52544__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (17)))
{var inst_52497 = (state_52544[(10)]);var inst_52506 = cljs.core.first.call(null,inst_52497);var inst_52507 = cljs.core.async.muxch_STAR_.call(null,inst_52506);var inst_52508 = cljs.core.async.close_BANG_.call(null,inst_52507);var inst_52509 = cljs.core.next.call(null,inst_52497);var inst_52483 = inst_52509;var inst_52484 = null;var inst_52485 = (0);var inst_52486 = (0);var state_52544__$1 = (function (){var statearr_52562 = state_52544;(statearr_52562[(12)] = inst_52508);
(statearr_52562[(13)] = inst_52484);
(statearr_52562[(14)] = inst_52485);
(statearr_52562[(15)] = inst_52486);
(statearr_52562[(16)] = inst_52483);
return statearr_52562;
})();var statearr_52563_52606 = state_52544__$1;(statearr_52563_52606[(2)] = null);
(statearr_52563_52606[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (3)))
{var inst_52542 = (state_52544[(2)]);var state_52544__$1 = state_52544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52544__$1,inst_52542);
} else
{if((state_val_52545 === (12)))
{var inst_52517 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52564_52607 = state_52544__$1;(statearr_52564_52607[(2)] = inst_52517);
(statearr_52564_52607[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (2)))
{var state_52544__$1 = state_52544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52544__$1,(4),ch);
} else
{if((state_val_52545 === (23)))
{var inst_52521 = (state_52544[(11)]);var inst_52525 = (state_52544[(2)]);var inst_52526 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_52521);var state_52544__$1 = (function (){var statearr_52565 = state_52544;(statearr_52565[(17)] = inst_52525);
return statearr_52565;
})();var statearr_52566_52608 = state_52544__$1;(statearr_52566_52608[(2)] = inst_52526);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52544__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (19)))
{var state_52544__$1 = state_52544;var statearr_52567_52609 = state_52544__$1;(statearr_52567_52609[(2)] = null);
(statearr_52567_52609[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (11)))
{var inst_52497 = (state_52544[(10)]);var inst_52483 = (state_52544[(16)]);var inst_52497__$1 = cljs.core.seq.call(null,inst_52483);var state_52544__$1 = (function (){var statearr_52568 = state_52544;(statearr_52568[(10)] = inst_52497__$1);
return statearr_52568;
})();if(inst_52497__$1)
{var statearr_52569_52610 = state_52544__$1;(statearr_52569_52610[(1)] = (13));
} else
{var statearr_52570_52611 = state_52544__$1;(statearr_52570_52611[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (9)))
{var inst_52519 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52571_52612 = state_52544__$1;(statearr_52571_52612[(2)] = inst_52519);
(statearr_52571_52612[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (5)))
{var inst_52480 = cljs.core.deref.call(null,mults);var inst_52481 = cljs.core.vals.call(null,inst_52480);var inst_52482 = cljs.core.seq.call(null,inst_52481);var inst_52483 = inst_52482;var inst_52484 = null;var inst_52485 = (0);var inst_52486 = (0);var state_52544__$1 = (function (){var statearr_52572 = state_52544;(statearr_52572[(13)] = inst_52484);
(statearr_52572[(14)] = inst_52485);
(statearr_52572[(15)] = inst_52486);
(statearr_52572[(16)] = inst_52483);
return statearr_52572;
})();var statearr_52573_52613 = state_52544__$1;(statearr_52573_52613[(2)] = null);
(statearr_52573_52613[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (14)))
{var state_52544__$1 = state_52544;var statearr_52577_52614 = state_52544__$1;(statearr_52577_52614[(2)] = null);
(statearr_52577_52614[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (16)))
{var inst_52497 = (state_52544[(10)]);var inst_52501 = cljs.core.chunk_first.call(null,inst_52497);var inst_52502 = cljs.core.chunk_rest.call(null,inst_52497);var inst_52503 = cljs.core.count.call(null,inst_52501);var inst_52483 = inst_52502;var inst_52484 = inst_52501;var inst_52485 = inst_52503;var inst_52486 = (0);var state_52544__$1 = (function (){var statearr_52578 = state_52544;(statearr_52578[(13)] = inst_52484);
(statearr_52578[(14)] = inst_52485);
(statearr_52578[(15)] = inst_52486);
(statearr_52578[(16)] = inst_52483);
return statearr_52578;
})();var statearr_52579_52615 = state_52544__$1;(statearr_52579_52615[(2)] = null);
(statearr_52579_52615[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (10)))
{var inst_52484 = (state_52544[(13)]);var inst_52485 = (state_52544[(14)]);var inst_52486 = (state_52544[(15)]);var inst_52483 = (state_52544[(16)]);var inst_52491 = cljs.core._nth.call(null,inst_52484,inst_52486);var inst_52492 = cljs.core.async.muxch_STAR_.call(null,inst_52491);var inst_52493 = cljs.core.async.close_BANG_.call(null,inst_52492);var inst_52494 = (inst_52486 + (1));var tmp52574 = inst_52484;var tmp52575 = inst_52485;var tmp52576 = inst_52483;var inst_52483__$1 = tmp52576;var inst_52484__$1 = tmp52574;var inst_52485__$1 = tmp52575;var inst_52486__$1 = inst_52494;var state_52544__$1 = (function (){var statearr_52580 = state_52544;(statearr_52580[(13)] = inst_52484__$1);
(statearr_52580[(14)] = inst_52485__$1);
(statearr_52580[(18)] = inst_52493);
(statearr_52580[(15)] = inst_52486__$1);
(statearr_52580[(16)] = inst_52483__$1);
return statearr_52580;
})();var statearr_52581_52616 = state_52544__$1;(statearr_52581_52616[(2)] = null);
(statearr_52581_52616[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (18)))
{var inst_52512 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52582_52617 = state_52544__$1;(statearr_52582_52617[(2)] = inst_52512);
(statearr_52582_52617[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (8)))
{var inst_52485 = (state_52544[(14)]);var inst_52486 = (state_52544[(15)]);var inst_52488 = (inst_52486 < inst_52485);var inst_52489 = inst_52488;var state_52544__$1 = state_52544;if(cljs.core.truth_(inst_52489))
{var statearr_52583_52618 = state_52544__$1;(statearr_52583_52618[(1)] = (10));
} else
{var statearr_52584_52619 = state_52544__$1;(statearr_52584_52619[(1)] = (11));
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
});})(c__5693__auto___52592,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___52592,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52588[(0)] = state_machine__5679__auto__);
(statearr_52588[(1)] = (1));
return statearr_52588;
});
var state_machine__5679__auto____1 = (function (state_52544){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52544);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52589){if((e52589 instanceof Object))
{var ex__5682__auto__ = e52589;var statearr_52590_52620 = state_52544;(statearr_52590_52620[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52621 = state_52544;
state_52544 = G__52621;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52544){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52592,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_52591 = f__5694__auto__.call(null);(statearr_52591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52592);
return statearr_52591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52592,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___52758 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52728){var state_val_52729 = (state_52728[(1)]);if((state_val_52729 === (7)))
{var state_52728__$1 = state_52728;var statearr_52730_52759 = state_52728__$1;(statearr_52730_52759[(2)] = null);
(statearr_52730_52759[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (1)))
{var state_52728__$1 = state_52728;var statearr_52731_52760 = state_52728__$1;(statearr_52731_52760[(2)] = null);
(statearr_52731_52760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (4)))
{var inst_52692 = (state_52728[(7)]);var inst_52694 = (inst_52692 < cnt);var state_52728__$1 = state_52728;if(cljs.core.truth_(inst_52694))
{var statearr_52732_52761 = state_52728__$1;(statearr_52732_52761[(1)] = (6));
} else
{var statearr_52733_52762 = state_52728__$1;(statearr_52733_52762[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (15)))
{var inst_52724 = (state_52728[(2)]);var state_52728__$1 = state_52728;var statearr_52734_52763 = state_52728__$1;(statearr_52734_52763[(2)] = inst_52724);
(statearr_52734_52763[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (13)))
{var inst_52717 = cljs.core.async.close_BANG_.call(null,out);var state_52728__$1 = state_52728;var statearr_52735_52764 = state_52728__$1;(statearr_52735_52764[(2)] = inst_52717);
(statearr_52735_52764[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (6)))
{var state_52728__$1 = state_52728;var statearr_52736_52765 = state_52728__$1;(statearr_52736_52765[(2)] = null);
(statearr_52736_52765[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (3)))
{var inst_52726 = (state_52728[(2)]);var state_52728__$1 = state_52728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52728__$1,inst_52726);
} else
{if((state_val_52729 === (12)))
{var inst_52714 = (state_52728[(8)]);var inst_52714__$1 = (state_52728[(2)]);var inst_52715 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52714__$1);var state_52728__$1 = (function (){var statearr_52737 = state_52728;(statearr_52737[(8)] = inst_52714__$1);
return statearr_52737;
})();if(cljs.core.truth_(inst_52715))
{var statearr_52738_52766 = state_52728__$1;(statearr_52738_52766[(1)] = (13));
} else
{var statearr_52739_52767 = state_52728__$1;(statearr_52739_52767[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (2)))
{var inst_52691 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_52692 = (0);var state_52728__$1 = (function (){var statearr_52740 = state_52728;(statearr_52740[(9)] = inst_52691);
(statearr_52740[(7)] = inst_52692);
return statearr_52740;
})();var statearr_52741_52768 = state_52728__$1;(statearr_52741_52768[(2)] = null);
(statearr_52741_52768[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (11)))
{var inst_52692 = (state_52728[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52728,(10),Object,null,(9));var inst_52701 = chs__$1.call(null,inst_52692);var inst_52702 = done.call(null,inst_52692);var inst_52703 = cljs.core.async.take_BANG_.call(null,inst_52701,inst_52702);var state_52728__$1 = state_52728;var statearr_52742_52769 = state_52728__$1;(statearr_52742_52769[(2)] = inst_52703);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52728__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (9)))
{var inst_52692 = (state_52728[(7)]);var inst_52705 = (state_52728[(2)]);var inst_52706 = (inst_52692 + (1));var inst_52692__$1 = inst_52706;var state_52728__$1 = (function (){var statearr_52743 = state_52728;(statearr_52743[(10)] = inst_52705);
(statearr_52743[(7)] = inst_52692__$1);
return statearr_52743;
})();var statearr_52744_52770 = state_52728__$1;(statearr_52744_52770[(2)] = null);
(statearr_52744_52770[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (5)))
{var inst_52712 = (state_52728[(2)]);var state_52728__$1 = (function (){var statearr_52745 = state_52728;(statearr_52745[(11)] = inst_52712);
return statearr_52745;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52728__$1,(12),dchan);
} else
{if((state_val_52729 === (14)))
{var inst_52714 = (state_52728[(8)]);var inst_52719 = cljs.core.apply.call(null,f,inst_52714);var state_52728__$1 = state_52728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52728__$1,(16),out,inst_52719);
} else
{if((state_val_52729 === (16)))
{var inst_52721 = (state_52728[(2)]);var state_52728__$1 = (function (){var statearr_52746 = state_52728;(statearr_52746[(12)] = inst_52721);
return statearr_52746;
})();var statearr_52747_52771 = state_52728__$1;(statearr_52747_52771[(2)] = null);
(statearr_52747_52771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (10)))
{var inst_52696 = (state_52728[(2)]);var inst_52697 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_52728__$1 = (function (){var statearr_52748 = state_52728;(statearr_52748[(13)] = inst_52696);
return statearr_52748;
})();var statearr_52749_52772 = state_52728__$1;(statearr_52749_52772[(2)] = inst_52697);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52728__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52729 === (8)))
{var inst_52710 = (state_52728[(2)]);var state_52728__$1 = state_52728;var statearr_52750_52773 = state_52728__$1;(statearr_52750_52773[(2)] = inst_52710);
(statearr_52750_52773[(1)] = (5));
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
});})(c__5693__auto___52758,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___52758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52754[(0)] = state_machine__5679__auto__);
(statearr_52754[(1)] = (1));
return statearr_52754;
});
var state_machine__5679__auto____1 = (function (state_52728){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52755){if((e52755 instanceof Object))
{var ex__5682__auto__ = e52755;var statearr_52756_52774 = state_52728;(statearr_52756_52774[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52775 = state_52728;
state_52728 = G__52775;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52728){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52758,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_52757 = f__5694__auto__.call(null);(statearr_52757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52758);
return statearr_52757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52758,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52883 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52883,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52883,out){
return (function (state_52859){var state_val_52860 = (state_52859[(1)]);if((state_val_52860 === (7)))
{var inst_52839 = (state_52859[(7)]);var inst_52838 = (state_52859[(8)]);var inst_52838__$1 = (state_52859[(2)]);var inst_52839__$1 = cljs.core.nth.call(null,inst_52838__$1,(0),null);var inst_52840 = cljs.core.nth.call(null,inst_52838__$1,(1),null);var inst_52841 = (inst_52839__$1 == null);var state_52859__$1 = (function (){var statearr_52861 = state_52859;(statearr_52861[(7)] = inst_52839__$1);
(statearr_52861[(8)] = inst_52838__$1);
(statearr_52861[(9)] = inst_52840);
return statearr_52861;
})();if(cljs.core.truth_(inst_52841))
{var statearr_52862_52884 = state_52859__$1;(statearr_52862_52884[(1)] = (8));
} else
{var statearr_52863_52885 = state_52859__$1;(statearr_52863_52885[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52860 === (1)))
{var inst_52830 = cljs.core.vec.call(null,chs);var inst_52831 = inst_52830;var state_52859__$1 = (function (){var statearr_52864 = state_52859;(statearr_52864[(10)] = inst_52831);
return statearr_52864;
})();var statearr_52865_52886 = state_52859__$1;(statearr_52865_52886[(2)] = null);
(statearr_52865_52886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52860 === (4)))
{var inst_52831 = (state_52859[(10)]);var state_52859__$1 = state_52859;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_52859__$1,(7),inst_52831);
} else
{if((state_val_52860 === (6)))
{var inst_52855 = (state_52859[(2)]);var state_52859__$1 = state_52859;var statearr_52866_52887 = state_52859__$1;(statearr_52866_52887[(2)] = inst_52855);
(statearr_52866_52887[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52860 === (3)))
{var inst_52857 = (state_52859[(2)]);var state_52859__$1 = state_52859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52859__$1,inst_52857);
} else
{if((state_val_52860 === (2)))
{var inst_52831 = (state_52859[(10)]);var inst_52833 = cljs.core.count.call(null,inst_52831);var inst_52834 = (inst_52833 > (0));var state_52859__$1 = state_52859;if(cljs.core.truth_(inst_52834))
{var statearr_52868_52888 = state_52859__$1;(statearr_52868_52888[(1)] = (4));
} else
{var statearr_52869_52889 = state_52859__$1;(statearr_52869_52889[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52860 === (11)))
{var inst_52831 = (state_52859[(10)]);var inst_52848 = (state_52859[(2)]);var tmp52867 = inst_52831;var inst_52831__$1 = tmp52867;var state_52859__$1 = (function (){var statearr_52870 = state_52859;(statearr_52870[(10)] = inst_52831__$1);
(statearr_52870[(11)] = inst_52848);
return statearr_52870;
})();var statearr_52871_52890 = state_52859__$1;(statearr_52871_52890[(2)] = null);
(statearr_52871_52890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52860 === (9)))
{var inst_52839 = (state_52859[(7)]);var state_52859__$1 = state_52859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52859__$1,(11),out,inst_52839);
} else
{if((state_val_52860 === (5)))
{var inst_52853 = cljs.core.async.close_BANG_.call(null,out);var state_52859__$1 = state_52859;var statearr_52872_52891 = state_52859__$1;(statearr_52872_52891[(2)] = inst_52853);
(statearr_52872_52891[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52860 === (10)))
{var inst_52851 = (state_52859[(2)]);var state_52859__$1 = state_52859;var statearr_52873_52892 = state_52859__$1;(statearr_52873_52892[(2)] = inst_52851);
(statearr_52873_52892[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52860 === (8)))
{var inst_52831 = (state_52859[(10)]);var inst_52839 = (state_52859[(7)]);var inst_52838 = (state_52859[(8)]);var inst_52840 = (state_52859[(9)]);var inst_52843 = (function (){var c = inst_52840;var v = inst_52839;var vec__52836 = inst_52838;var cs = inst_52831;return ((function (c,v,vec__52836,cs,inst_52831,inst_52839,inst_52838,inst_52840,state_val_52860,c__5693__auto___52883,out){
return (function (p1__52776_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__52776_SHARP_);
});
;})(c,v,vec__52836,cs,inst_52831,inst_52839,inst_52838,inst_52840,state_val_52860,c__5693__auto___52883,out))
})();var inst_52844 = cljs.core.filterv.call(null,inst_52843,inst_52831);var inst_52831__$1 = inst_52844;var state_52859__$1 = (function (){var statearr_52874 = state_52859;(statearr_52874[(10)] = inst_52831__$1);
return statearr_52874;
})();var statearr_52875_52893 = state_52859__$1;(statearr_52875_52893[(2)] = null);
(statearr_52875_52893[(1)] = (2));
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
});})(c__5693__auto___52883,out))
;return ((function (switch__5678__auto__,c__5693__auto___52883,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52879 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52879[(0)] = state_machine__5679__auto__);
(statearr_52879[(1)] = (1));
return statearr_52879;
});
var state_machine__5679__auto____1 = (function (state_52859){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52859);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52880){if((e52880 instanceof Object))
{var ex__5682__auto__ = e52880;var statearr_52881_52894 = state_52859;(statearr_52881_52894[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52895 = state_52859;
state_52859 = G__52895;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52859){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52883,out))
})();var state__5695__auto__ = (function (){var statearr_52882 = f__5694__auto__.call(null);(statearr_52882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52883);
return statearr_52882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52883,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52988 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52988,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52988,out){
return (function (state_52965){var state_val_52966 = (state_52965[(1)]);if((state_val_52966 === (7)))
{var inst_52947 = (state_52965[(7)]);var inst_52947__$1 = (state_52965[(2)]);var inst_52948 = (inst_52947__$1 == null);var inst_52949 = cljs.core.not.call(null,inst_52948);var state_52965__$1 = (function (){var statearr_52967 = state_52965;(statearr_52967[(7)] = inst_52947__$1);
return statearr_52967;
})();if(inst_52949)
{var statearr_52968_52989 = state_52965__$1;(statearr_52968_52989[(1)] = (8));
} else
{var statearr_52969_52990 = state_52965__$1;(statearr_52969_52990[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (1)))
{var inst_52942 = (0);var state_52965__$1 = (function (){var statearr_52970 = state_52965;(statearr_52970[(8)] = inst_52942);
return statearr_52970;
})();var statearr_52971_52991 = state_52965__$1;(statearr_52971_52991[(2)] = null);
(statearr_52971_52991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (4)))
{var state_52965__$1 = state_52965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52965__$1,(7),ch);
} else
{if((state_val_52966 === (6)))
{var inst_52960 = (state_52965[(2)]);var state_52965__$1 = state_52965;var statearr_52972_52992 = state_52965__$1;(statearr_52972_52992[(2)] = inst_52960);
(statearr_52972_52992[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (3)))
{var inst_52962 = (state_52965[(2)]);var inst_52963 = cljs.core.async.close_BANG_.call(null,out);var state_52965__$1 = (function (){var statearr_52973 = state_52965;(statearr_52973[(9)] = inst_52962);
return statearr_52973;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52965__$1,inst_52963);
} else
{if((state_val_52966 === (2)))
{var inst_52942 = (state_52965[(8)]);var inst_52944 = (inst_52942 < n);var state_52965__$1 = state_52965;if(cljs.core.truth_(inst_52944))
{var statearr_52974_52993 = state_52965__$1;(statearr_52974_52993[(1)] = (4));
} else
{var statearr_52975_52994 = state_52965__$1;(statearr_52975_52994[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (11)))
{var inst_52942 = (state_52965[(8)]);var inst_52952 = (state_52965[(2)]);var inst_52953 = (inst_52942 + (1));var inst_52942__$1 = inst_52953;var state_52965__$1 = (function (){var statearr_52976 = state_52965;(statearr_52976[(8)] = inst_52942__$1);
(statearr_52976[(10)] = inst_52952);
return statearr_52976;
})();var statearr_52977_52995 = state_52965__$1;(statearr_52977_52995[(2)] = null);
(statearr_52977_52995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (9)))
{var state_52965__$1 = state_52965;var statearr_52978_52996 = state_52965__$1;(statearr_52978_52996[(2)] = null);
(statearr_52978_52996[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (5)))
{var state_52965__$1 = state_52965;var statearr_52979_52997 = state_52965__$1;(statearr_52979_52997[(2)] = null);
(statearr_52979_52997[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (10)))
{var inst_52957 = (state_52965[(2)]);var state_52965__$1 = state_52965;var statearr_52980_52998 = state_52965__$1;(statearr_52980_52998[(2)] = inst_52957);
(statearr_52980_52998[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (8)))
{var inst_52947 = (state_52965[(7)]);var state_52965__$1 = state_52965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52965__$1,(11),out,inst_52947);
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
});})(c__5693__auto___52988,out))
;return ((function (switch__5678__auto__,c__5693__auto___52988,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52984 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_52984[(0)] = state_machine__5679__auto__);
(statearr_52984[(1)] = (1));
return statearr_52984;
});
var state_machine__5679__auto____1 = (function (state_52965){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52965);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52985){if((e52985 instanceof Object))
{var ex__5682__auto__ = e52985;var statearr_52986_52999 = state_52965;(statearr_52986_52999[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53000 = state_52965;
state_52965 = G__53000;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52965){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52988,out))
})();var state__5695__auto__ = (function (){var statearr_52987 = f__5694__auto__.call(null);(statearr_52987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52988);
return statearr_52987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52988,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53097 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53097,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53097,out){
return (function (state_53072){var state_val_53073 = (state_53072[(1)]);if((state_val_53073 === (7)))
{var inst_53067 = (state_53072[(2)]);var state_53072__$1 = state_53072;var statearr_53074_53098 = state_53072__$1;(statearr_53074_53098[(2)] = inst_53067);
(statearr_53074_53098[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53073 === (1)))
{var inst_53049 = null;var state_53072__$1 = (function (){var statearr_53075 = state_53072;(statearr_53075[(7)] = inst_53049);
return statearr_53075;
})();var statearr_53076_53099 = state_53072__$1;(statearr_53076_53099[(2)] = null);
(statearr_53076_53099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53073 === (4)))
{var inst_53052 = (state_53072[(8)]);var inst_53052__$1 = (state_53072[(2)]);var inst_53053 = (inst_53052__$1 == null);var inst_53054 = cljs.core.not.call(null,inst_53053);var state_53072__$1 = (function (){var statearr_53077 = state_53072;(statearr_53077[(8)] = inst_53052__$1);
return statearr_53077;
})();if(inst_53054)
{var statearr_53078_53100 = state_53072__$1;(statearr_53078_53100[(1)] = (5));
} else
{var statearr_53079_53101 = state_53072__$1;(statearr_53079_53101[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53073 === (6)))
{var state_53072__$1 = state_53072;var statearr_53080_53102 = state_53072__$1;(statearr_53080_53102[(2)] = null);
(statearr_53080_53102[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53073 === (3)))
{var inst_53069 = (state_53072[(2)]);var inst_53070 = cljs.core.async.close_BANG_.call(null,out);var state_53072__$1 = (function (){var statearr_53081 = state_53072;(statearr_53081[(9)] = inst_53069);
return statearr_53081;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53072__$1,inst_53070);
} else
{if((state_val_53073 === (2)))
{var state_53072__$1 = state_53072;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53072__$1,(4),ch);
} else
{if((state_val_53073 === (11)))
{var inst_53052 = (state_53072[(8)]);var inst_53061 = (state_53072[(2)]);var inst_53049 = inst_53052;var state_53072__$1 = (function (){var statearr_53082 = state_53072;(statearr_53082[(7)] = inst_53049);
(statearr_53082[(10)] = inst_53061);
return statearr_53082;
})();var statearr_53083_53103 = state_53072__$1;(statearr_53083_53103[(2)] = null);
(statearr_53083_53103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53073 === (9)))
{var inst_53052 = (state_53072[(8)]);var state_53072__$1 = state_53072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53072__$1,(11),out,inst_53052);
} else
{if((state_val_53073 === (5)))
{var inst_53052 = (state_53072[(8)]);var inst_53049 = (state_53072[(7)]);var inst_53056 = cljs.core._EQ_.call(null,inst_53052,inst_53049);var state_53072__$1 = state_53072;if(inst_53056)
{var statearr_53085_53104 = state_53072__$1;(statearr_53085_53104[(1)] = (8));
} else
{var statearr_53086_53105 = state_53072__$1;(statearr_53086_53105[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53073 === (10)))
{var inst_53064 = (state_53072[(2)]);var state_53072__$1 = state_53072;var statearr_53087_53106 = state_53072__$1;(statearr_53087_53106[(2)] = inst_53064);
(statearr_53087_53106[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53073 === (8)))
{var inst_53049 = (state_53072[(7)]);var tmp53084 = inst_53049;var inst_53049__$1 = tmp53084;var state_53072__$1 = (function (){var statearr_53088 = state_53072;(statearr_53088[(7)] = inst_53049__$1);
return statearr_53088;
})();var statearr_53089_53107 = state_53072__$1;(statearr_53089_53107[(2)] = null);
(statearr_53089_53107[(1)] = (2));
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
});})(c__5693__auto___53097,out))
;return ((function (switch__5678__auto__,c__5693__auto___53097,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53093 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_53093[(0)] = state_machine__5679__auto__);
(statearr_53093[(1)] = (1));
return statearr_53093;
});
var state_machine__5679__auto____1 = (function (state_53072){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53072);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53094){if((e53094 instanceof Object))
{var ex__5682__auto__ = e53094;var statearr_53095_53108 = state_53072;(statearr_53095_53108[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53072);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53109 = state_53072;
state_53072 = G__53109;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53072){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53097,out))
})();var state__5695__auto__ = (function (){var statearr_53096 = f__5694__auto__.call(null);(statearr_53096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53097);
return statearr_53096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53097,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53244 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53244,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53244,out){
return (function (state_53214){var state_val_53215 = (state_53214[(1)]);if((state_val_53215 === (7)))
{var inst_53210 = (state_53214[(2)]);var state_53214__$1 = state_53214;var statearr_53216_53245 = state_53214__$1;(statearr_53216_53245[(2)] = inst_53210);
(statearr_53216_53245[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (1)))
{var inst_53177 = (new Array(n));var inst_53178 = inst_53177;var inst_53179 = (0);var state_53214__$1 = (function (){var statearr_53217 = state_53214;(statearr_53217[(7)] = inst_53178);
(statearr_53217[(8)] = inst_53179);
return statearr_53217;
})();var statearr_53218_53246 = state_53214__$1;(statearr_53218_53246[(2)] = null);
(statearr_53218_53246[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (4)))
{var inst_53182 = (state_53214[(9)]);var inst_53182__$1 = (state_53214[(2)]);var inst_53183 = (inst_53182__$1 == null);var inst_53184 = cljs.core.not.call(null,inst_53183);var state_53214__$1 = (function (){var statearr_53219 = state_53214;(statearr_53219[(9)] = inst_53182__$1);
return statearr_53219;
})();if(inst_53184)
{var statearr_53220_53247 = state_53214__$1;(statearr_53220_53247[(1)] = (5));
} else
{var statearr_53221_53248 = state_53214__$1;(statearr_53221_53248[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (15)))
{var inst_53204 = (state_53214[(2)]);var state_53214__$1 = state_53214;var statearr_53222_53249 = state_53214__$1;(statearr_53222_53249[(2)] = inst_53204);
(statearr_53222_53249[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (13)))
{var state_53214__$1 = state_53214;var statearr_53223_53250 = state_53214__$1;(statearr_53223_53250[(2)] = null);
(statearr_53223_53250[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (6)))
{var inst_53179 = (state_53214[(8)]);var inst_53200 = (inst_53179 > (0));var state_53214__$1 = state_53214;if(cljs.core.truth_(inst_53200))
{var statearr_53224_53251 = state_53214__$1;(statearr_53224_53251[(1)] = (12));
} else
{var statearr_53225_53252 = state_53214__$1;(statearr_53225_53252[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (3)))
{var inst_53212 = (state_53214[(2)]);var state_53214__$1 = state_53214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53214__$1,inst_53212);
} else
{if((state_val_53215 === (12)))
{var inst_53178 = (state_53214[(7)]);var inst_53202 = cljs.core.vec.call(null,inst_53178);var state_53214__$1 = state_53214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53214__$1,(15),out,inst_53202);
} else
{if((state_val_53215 === (2)))
{var state_53214__$1 = state_53214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53214__$1,(4),ch);
} else
{if((state_val_53215 === (11)))
{var inst_53194 = (state_53214[(2)]);var inst_53195 = (new Array(n));var inst_53178 = inst_53195;var inst_53179 = (0);var state_53214__$1 = (function (){var statearr_53226 = state_53214;(statearr_53226[(10)] = inst_53194);
(statearr_53226[(7)] = inst_53178);
(statearr_53226[(8)] = inst_53179);
return statearr_53226;
})();var statearr_53227_53253 = state_53214__$1;(statearr_53227_53253[(2)] = null);
(statearr_53227_53253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (9)))
{var inst_53178 = (state_53214[(7)]);var inst_53192 = cljs.core.vec.call(null,inst_53178);var state_53214__$1 = state_53214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53214__$1,(11),out,inst_53192);
} else
{if((state_val_53215 === (5)))
{var inst_53182 = (state_53214[(9)]);var inst_53178 = (state_53214[(7)]);var inst_53187 = (state_53214[(11)]);var inst_53179 = (state_53214[(8)]);var inst_53186 = (inst_53178[inst_53179] = inst_53182);var inst_53187__$1 = (inst_53179 + (1));var inst_53188 = (inst_53187__$1 < n);var state_53214__$1 = (function (){var statearr_53228 = state_53214;(statearr_53228[(12)] = inst_53186);
(statearr_53228[(11)] = inst_53187__$1);
return statearr_53228;
})();if(cljs.core.truth_(inst_53188))
{var statearr_53229_53254 = state_53214__$1;(statearr_53229_53254[(1)] = (8));
} else
{var statearr_53230_53255 = state_53214__$1;(statearr_53230_53255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (14)))
{var inst_53207 = (state_53214[(2)]);var inst_53208 = cljs.core.async.close_BANG_.call(null,out);var state_53214__$1 = (function (){var statearr_53232 = state_53214;(statearr_53232[(13)] = inst_53207);
return statearr_53232;
})();var statearr_53233_53256 = state_53214__$1;(statearr_53233_53256[(2)] = inst_53208);
(statearr_53233_53256[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (10)))
{var inst_53198 = (state_53214[(2)]);var state_53214__$1 = state_53214;var statearr_53234_53257 = state_53214__$1;(statearr_53234_53257[(2)] = inst_53198);
(statearr_53234_53257[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53215 === (8)))
{var inst_53178 = (state_53214[(7)]);var inst_53187 = (state_53214[(11)]);var tmp53231 = inst_53178;var inst_53178__$1 = tmp53231;var inst_53179 = inst_53187;var state_53214__$1 = (function (){var statearr_53235 = state_53214;(statearr_53235[(7)] = inst_53178__$1);
(statearr_53235[(8)] = inst_53179);
return statearr_53235;
})();var statearr_53236_53258 = state_53214__$1;(statearr_53236_53258[(2)] = null);
(statearr_53236_53258[(1)] = (2));
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
});})(c__5693__auto___53244,out))
;return ((function (switch__5678__auto__,c__5693__auto___53244,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53240[(0)] = state_machine__5679__auto__);
(statearr_53240[(1)] = (1));
return statearr_53240;
});
var state_machine__5679__auto____1 = (function (state_53214){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53214);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53241){if((e53241 instanceof Object))
{var ex__5682__auto__ = e53241;var statearr_53242_53259 = state_53214;(statearr_53242_53259[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53260 = state_53214;
state_53214 = G__53260;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53214){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53244,out))
})();var state__5695__auto__ = (function (){var statearr_53243 = f__5694__auto__.call(null);(statearr_53243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53244);
return statearr_53243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53244,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53403 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53403,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53403,out){
return (function (state_53373){var state_val_53374 = (state_53373[(1)]);if((state_val_53374 === (7)))
{var inst_53369 = (state_53373[(2)]);var state_53373__$1 = state_53373;var statearr_53375_53404 = state_53373__$1;(statearr_53375_53404[(2)] = inst_53369);
(statearr_53375_53404[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (1)))
{var inst_53332 = [];var inst_53333 = inst_53332;var inst_53334 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_53373__$1 = (function (){var statearr_53376 = state_53373;(statearr_53376[(7)] = inst_53333);
(statearr_53376[(8)] = inst_53334);
return statearr_53376;
})();var statearr_53377_53405 = state_53373__$1;(statearr_53377_53405[(2)] = null);
(statearr_53377_53405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (4)))
{var inst_53337 = (state_53373[(9)]);var inst_53337__$1 = (state_53373[(2)]);var inst_53338 = (inst_53337__$1 == null);var inst_53339 = cljs.core.not.call(null,inst_53338);var state_53373__$1 = (function (){var statearr_53378 = state_53373;(statearr_53378[(9)] = inst_53337__$1);
return statearr_53378;
})();if(inst_53339)
{var statearr_53379_53406 = state_53373__$1;(statearr_53379_53406[(1)] = (5));
} else
{var statearr_53380_53407 = state_53373__$1;(statearr_53380_53407[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (15)))
{var inst_53363 = (state_53373[(2)]);var state_53373__$1 = state_53373;var statearr_53381_53408 = state_53373__$1;(statearr_53381_53408[(2)] = inst_53363);
(statearr_53381_53408[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (13)))
{var state_53373__$1 = state_53373;var statearr_53382_53409 = state_53373__$1;(statearr_53382_53409[(2)] = null);
(statearr_53382_53409[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (6)))
{var inst_53333 = (state_53373[(7)]);var inst_53358 = inst_53333.length;var inst_53359 = (inst_53358 > (0));var state_53373__$1 = state_53373;if(cljs.core.truth_(inst_53359))
{var statearr_53383_53410 = state_53373__$1;(statearr_53383_53410[(1)] = (12));
} else
{var statearr_53384_53411 = state_53373__$1;(statearr_53384_53411[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (3)))
{var inst_53371 = (state_53373[(2)]);var state_53373__$1 = state_53373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53373__$1,inst_53371);
} else
{if((state_val_53374 === (12)))
{var inst_53333 = (state_53373[(7)]);var inst_53361 = cljs.core.vec.call(null,inst_53333);var state_53373__$1 = state_53373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53373__$1,(15),out,inst_53361);
} else
{if((state_val_53374 === (2)))
{var state_53373__$1 = state_53373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53373__$1,(4),ch);
} else
{if((state_val_53374 === (11)))
{var inst_53337 = (state_53373[(9)]);var inst_53341 = (state_53373[(10)]);var inst_53351 = (state_53373[(2)]);var inst_53352 = [];var inst_53353 = inst_53352.push(inst_53337);var inst_53333 = inst_53352;var inst_53334 = inst_53341;var state_53373__$1 = (function (){var statearr_53385 = state_53373;(statearr_53385[(7)] = inst_53333);
(statearr_53385[(11)] = inst_53351);
(statearr_53385[(8)] = inst_53334);
(statearr_53385[(12)] = inst_53353);
return statearr_53385;
})();var statearr_53386_53412 = state_53373__$1;(statearr_53386_53412[(2)] = null);
(statearr_53386_53412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (9)))
{var inst_53333 = (state_53373[(7)]);var inst_53349 = cljs.core.vec.call(null,inst_53333);var state_53373__$1 = state_53373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53373__$1,(11),out,inst_53349);
} else
{if((state_val_53374 === (5)))
{var inst_53337 = (state_53373[(9)]);var inst_53334 = (state_53373[(8)]);var inst_53341 = (state_53373[(10)]);var inst_53341__$1 = f.call(null,inst_53337);var inst_53342 = cljs.core._EQ_.call(null,inst_53341__$1,inst_53334);var inst_53343 = cljs.core.keyword_identical_QMARK_.call(null,inst_53334,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_53344 = (inst_53342) || (inst_53343);var state_53373__$1 = (function (){var statearr_53387 = state_53373;(statearr_53387[(10)] = inst_53341__$1);
return statearr_53387;
})();if(cljs.core.truth_(inst_53344))
{var statearr_53388_53413 = state_53373__$1;(statearr_53388_53413[(1)] = (8));
} else
{var statearr_53389_53414 = state_53373__$1;(statearr_53389_53414[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (14)))
{var inst_53366 = (state_53373[(2)]);var inst_53367 = cljs.core.async.close_BANG_.call(null,out);var state_53373__$1 = (function (){var statearr_53391 = state_53373;(statearr_53391[(13)] = inst_53366);
return statearr_53391;
})();var statearr_53392_53415 = state_53373__$1;(statearr_53392_53415[(2)] = inst_53367);
(statearr_53392_53415[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (10)))
{var inst_53356 = (state_53373[(2)]);var state_53373__$1 = state_53373;var statearr_53393_53416 = state_53373__$1;(statearr_53393_53416[(2)] = inst_53356);
(statearr_53393_53416[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53374 === (8)))
{var inst_53333 = (state_53373[(7)]);var inst_53337 = (state_53373[(9)]);var inst_53341 = (state_53373[(10)]);var inst_53346 = inst_53333.push(inst_53337);var tmp53390 = inst_53333;var inst_53333__$1 = tmp53390;var inst_53334 = inst_53341;var state_53373__$1 = (function (){var statearr_53394 = state_53373;(statearr_53394[(7)] = inst_53333__$1);
(statearr_53394[(14)] = inst_53346);
(statearr_53394[(8)] = inst_53334);
return statearr_53394;
})();var statearr_53395_53417 = state_53373__$1;(statearr_53395_53417[(2)] = null);
(statearr_53395_53417[(1)] = (2));
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
});})(c__5693__auto___53403,out))
;return ((function (switch__5678__auto__,c__5693__auto___53403,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53399[(0)] = state_machine__5679__auto__);
(statearr_53399[(1)] = (1));
return statearr_53399;
});
var state_machine__5679__auto____1 = (function (state_53373){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53373);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53400){if((e53400 instanceof Object))
{var ex__5682__auto__ = e53400;var statearr_53401_53418 = state_53373;(statearr_53401_53418[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53419 = state_53373;
state_53373 = G__53419;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53373){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53403,out))
})();var state__5695__auto__ = (function (){var statearr_53402 = f__5694__auto__.call(null);(statearr_53402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53403);
return statearr_53402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53403,out))
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

//# sourceMappingURL=async.js.map