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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28010 = (function (f,fn_handler,meta28011){
this.f = f;
this.fn_handler = fn_handler;
this.meta28011 = meta28011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28010.cljs$lang$type = true;
cljs.core.async.t28010.cljs$lang$ctorStr = "cljs.core.async/t28010";
cljs.core.async.t28010.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28010");
});
cljs.core.async.t28010.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28012){var self__ = this;
var _28012__$1 = this;return self__.meta28011;
});
cljs.core.async.t28010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28012,meta28011__$1){var self__ = this;
var _28012__$1 = this;return (new cljs.core.async.t28010(self__.f,self__.fn_handler,meta28011__$1));
});
cljs.core.async.__GT_t28010 = (function __GT_t28010(f__$1,fn_handler__$1,meta28011){return (new cljs.core.async.t28010(f__$1,fn_handler__$1,meta28011));
});
}
return (new cljs.core.async.t28010(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28014 = buff;if(G__28014)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__28014.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28014.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28014);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28014);
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
{var val_28015 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28015);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28015,ret){
return (function (){return fn1.call(null,val_28015);
});})(val_28015,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___28016 = n;var x_28017 = (0);while(true){
if((x_28017 < n__4414__auto___28016))
{(a[x_28017] = (0));
{
var G__28018 = (x_28017 + (1));
x_28017 = G__28018;
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
var G__28019 = (i + (1));
i = G__28019;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t28023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28023 = (function (flag,alt_flag,meta28024){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28024 = meta28024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28023.cljs$lang$type = true;
cljs.core.async.t28023.cljs$lang$ctorStr = "cljs.core.async/t28023";
cljs.core.async.t28023.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28023");
});})(flag))
;
cljs.core.async.t28023.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t28023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t28023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28025){var self__ = this;
var _28025__$1 = this;return self__.meta28024;
});})(flag))
;
cljs.core.async.t28023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28025,meta28024__$1){var self__ = this;
var _28025__$1 = this;return (new cljs.core.async.t28023(self__.flag,self__.alt_flag,meta28024__$1));
});})(flag))
;
cljs.core.async.__GT_t28023 = ((function (flag){
return (function __GT_t28023(flag__$1,alt_flag__$1,meta28024){return (new cljs.core.async.t28023(flag__$1,alt_flag__$1,meta28024));
});})(flag))
;
}
return (new cljs.core.async.t28023(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t28029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28029 = (function (cb,flag,alt_handler,meta28030){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28030 = meta28030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28029.cljs$lang$type = true;
cljs.core.async.t28029.cljs$lang$ctorStr = "cljs.core.async/t28029";
cljs.core.async.t28029.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28029");
});
cljs.core.async.t28029.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t28029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t28029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28031){var self__ = this;
var _28031__$1 = this;return self__.meta28030;
});
cljs.core.async.t28029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28031,meta28030__$1){var self__ = this;
var _28031__$1 = this;return (new cljs.core.async.t28029(self__.cb,self__.flag,self__.alt_handler,meta28030__$1));
});
cljs.core.async.__GT_t28029 = (function __GT_t28029(cb__$1,flag__$1,alt_handler__$1,meta28030){return (new cljs.core.async.t28029(cb__$1,flag__$1,alt_handler__$1,meta28030));
});
}
return (new cljs.core.async.t28029(cb,flag,alt_handler,null));
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
return (function (p1__28032_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28032_SHARP_,port], null));
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
var G__28033 = (i + (1));
i = G__28033;
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
var alts_BANG___delegate = function (ports,p__28034){var map__28036 = p__28034;var map__28036__$1 = ((cljs.core.seq_QMARK_.call(null,map__28036))?cljs.core.apply.call(null,cljs.core.hash_map,map__28036):map__28036);var opts = map__28036__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__28034 = null;if (arguments.length > 1) {
  p__28034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__28034);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28037){
var ports = cljs.core.first(arglist__28037);
var p__28034 = cljs.core.rest(arglist__28037);
return alts_BANG___delegate(ports,p__28034);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28045 = (function (ch,f,map_LT_,meta28046){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28046 = meta28046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28045.cljs$lang$type = true;
cljs.core.async.t28045.cljs$lang$ctorStr = "cljs.core.async/t28045";
cljs.core.async.t28045.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28045");
});
cljs.core.async.t28045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t28045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28048 = (function (fn1,_,meta28046,ch,f,map_LT_,meta28049){
this.fn1 = fn1;
this._ = _;
this.meta28046 = meta28046;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28049 = meta28049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28048.cljs$lang$type = true;
cljs.core.async.t28048.cljs$lang$ctorStr = "cljs.core.async/t28048";
cljs.core.async.t28048.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28048");
});})(___$1))
;
cljs.core.async.t28048.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28048.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28038_SHARP_){return f1.call(null,(((p1__28038_SHARP_ == null))?null:self__.f.call(null,p1__28038_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28050){var self__ = this;
var _28050__$1 = this;return self__.meta28049;
});})(___$1))
;
cljs.core.async.t28048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28050,meta28049__$1){var self__ = this;
var _28050__$1 = this;return (new cljs.core.async.t28048(self__.fn1,self__._,self__.meta28046,self__.ch,self__.f,self__.map_LT_,meta28049__$1));
});})(___$1))
;
cljs.core.async.__GT_t28048 = ((function (___$1){
return (function __GT_t28048(fn1__$1,___$2,meta28046__$1,ch__$2,f__$2,map_LT___$2,meta28049){return (new cljs.core.async.t28048(fn1__$1,___$2,meta28046__$1,ch__$2,f__$2,map_LT___$2,meta28049));
});})(___$1))
;
}
return (new cljs.core.async.t28048(fn1,___$1,self__.meta28046,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t28045.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28047){var self__ = this;
var _28047__$1 = this;return self__.meta28046;
});
cljs.core.async.t28045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28047,meta28046__$1){var self__ = this;
var _28047__$1 = this;return (new cljs.core.async.t28045(self__.ch,self__.f,self__.map_LT_,meta28046__$1));
});
cljs.core.async.__GT_t28045 = (function __GT_t28045(ch__$1,f__$1,map_LT___$1,meta28046){return (new cljs.core.async.t28045(ch__$1,f__$1,map_LT___$1,meta28046));
});
}
return (new cljs.core.async.t28045(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28054 = (function (ch,f,map_GT_,meta28055){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28055 = meta28055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28054.cljs$lang$type = true;
cljs.core.async.t28054.cljs$lang$ctorStr = "cljs.core.async/t28054";
cljs.core.async.t28054.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28054");
});
cljs.core.async.t28054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t28054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28054.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28056){var self__ = this;
var _28056__$1 = this;return self__.meta28055;
});
cljs.core.async.t28054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28056,meta28055__$1){var self__ = this;
var _28056__$1 = this;return (new cljs.core.async.t28054(self__.ch,self__.f,self__.map_GT_,meta28055__$1));
});
cljs.core.async.__GT_t28054 = (function __GT_t28054(ch__$1,f__$1,map_GT___$1,meta28055){return (new cljs.core.async.t28054(ch__$1,f__$1,map_GT___$1,meta28055));
});
}
return (new cljs.core.async.t28054(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28060 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28060 = (function (ch,p,filter_GT_,meta28061){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28061 = meta28061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28060.cljs$lang$type = true;
cljs.core.async.t28060.cljs$lang$ctorStr = "cljs.core.async/t28060";
cljs.core.async.t28060.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28060");
});
cljs.core.async.t28060.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t28060.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28060.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28062){var self__ = this;
var _28062__$1 = this;return self__.meta28061;
});
cljs.core.async.t28060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28062,meta28061__$1){var self__ = this;
var _28062__$1 = this;return (new cljs.core.async.t28060(self__.ch,self__.p,self__.filter_GT_,meta28061__$1));
});
cljs.core.async.__GT_t28060 = (function __GT_t28060(ch__$1,p__$1,filter_GT___$1,meta28061){return (new cljs.core.async.t28060(ch__$1,p__$1,filter_GT___$1,meta28061));
});
}
return (new cljs.core.async.t28060(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___28145 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28145,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28145,out){
return (function (state_28124){var state_val_28125 = (state_28124[(1)]);if((state_val_28125 === (7)))
{var inst_28120 = (state_28124[(2)]);var state_28124__$1 = state_28124;var statearr_28126_28146 = state_28124__$1;(statearr_28126_28146[(2)] = inst_28120);
(statearr_28126_28146[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (1)))
{var state_28124__$1 = state_28124;var statearr_28127_28147 = state_28124__$1;(statearr_28127_28147[(2)] = null);
(statearr_28127_28147[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (4)))
{var inst_28106 = (state_28124[(7)]);var inst_28106__$1 = (state_28124[(2)]);var inst_28107 = (inst_28106__$1 == null);var state_28124__$1 = (function (){var statearr_28128 = state_28124;(statearr_28128[(7)] = inst_28106__$1);
return statearr_28128;
})();if(cljs.core.truth_(inst_28107))
{var statearr_28129_28148 = state_28124__$1;(statearr_28129_28148[(1)] = (5));
} else
{var statearr_28130_28149 = state_28124__$1;(statearr_28130_28149[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (6)))
{var inst_28106 = (state_28124[(7)]);var inst_28111 = p.call(null,inst_28106);var state_28124__$1 = state_28124;if(cljs.core.truth_(inst_28111))
{var statearr_28131_28150 = state_28124__$1;(statearr_28131_28150[(1)] = (8));
} else
{var statearr_28132_28151 = state_28124__$1;(statearr_28132_28151[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (3)))
{var inst_28122 = (state_28124[(2)]);var state_28124__$1 = state_28124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28124__$1,inst_28122);
} else
{if((state_val_28125 === (2)))
{var state_28124__$1 = state_28124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(4),ch);
} else
{if((state_val_28125 === (11)))
{var inst_28114 = (state_28124[(2)]);var state_28124__$1 = state_28124;var statearr_28133_28152 = state_28124__$1;(statearr_28133_28152[(2)] = inst_28114);
(statearr_28133_28152[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (9)))
{var state_28124__$1 = state_28124;var statearr_28134_28153 = state_28124__$1;(statearr_28134_28153[(2)] = null);
(statearr_28134_28153[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (5)))
{var inst_28109 = cljs.core.async.close_BANG_.call(null,out);var state_28124__$1 = state_28124;var statearr_28135_28154 = state_28124__$1;(statearr_28135_28154[(2)] = inst_28109);
(statearr_28135_28154[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (10)))
{var inst_28117 = (state_28124[(2)]);var state_28124__$1 = (function (){var statearr_28136 = state_28124;(statearr_28136[(8)] = inst_28117);
return statearr_28136;
})();var statearr_28137_28155 = state_28124__$1;(statearr_28137_28155[(2)] = null);
(statearr_28137_28155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28125 === (8)))
{var inst_28106 = (state_28124[(7)]);var state_28124__$1 = state_28124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28124__$1,(11),out,inst_28106);
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
});})(c__5708__auto___28145,out))
;return ((function (switch__5693__auto__,c__5708__auto___28145,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28141 = [null,null,null,null,null,null,null,null,null];(statearr_28141[(0)] = state_machine__5694__auto__);
(statearr_28141[(1)] = (1));
return statearr_28141;
});
var state_machine__5694__auto____1 = (function (state_28124){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28124);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28142){if((e28142 instanceof Object))
{var ex__5697__auto__ = e28142;var statearr_28143_28156 = state_28124;(statearr_28143_28156[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28142;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28157 = state_28124;
state_28124 = G__28157;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28124){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28145,out))
})();var state__5710__auto__ = (function (){var statearr_28144 = f__5709__auto__.call(null);(statearr_28144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28145);
return statearr_28144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28145,out))
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
return (function (state_28309){var state_val_28310 = (state_28309[(1)]);if((state_val_28310 === (7)))
{var inst_28305 = (state_28309[(2)]);var state_28309__$1 = state_28309;var statearr_28311_28348 = state_28309__$1;(statearr_28311_28348[(2)] = inst_28305);
(statearr_28311_28348[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (20)))
{var inst_28280 = (state_28309[(7)]);var inst_28291 = (state_28309[(2)]);var inst_28292 = cljs.core.next.call(null,inst_28280);var inst_28266 = inst_28292;var inst_28267 = null;var inst_28268 = (0);var inst_28269 = (0);var state_28309__$1 = (function (){var statearr_28312 = state_28309;(statearr_28312[(8)] = inst_28268);
(statearr_28312[(9)] = inst_28269);
(statearr_28312[(10)] = inst_28267);
(statearr_28312[(11)] = inst_28266);
(statearr_28312[(12)] = inst_28291);
return statearr_28312;
})();var statearr_28313_28349 = state_28309__$1;(statearr_28313_28349[(2)] = null);
(statearr_28313_28349[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (1)))
{var state_28309__$1 = state_28309;var statearr_28314_28350 = state_28309__$1;(statearr_28314_28350[(2)] = null);
(statearr_28314_28350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (4)))
{var inst_28255 = (state_28309[(13)]);var inst_28255__$1 = (state_28309[(2)]);var inst_28256 = (inst_28255__$1 == null);var state_28309__$1 = (function (){var statearr_28318 = state_28309;(statearr_28318[(13)] = inst_28255__$1);
return statearr_28318;
})();if(cljs.core.truth_(inst_28256))
{var statearr_28319_28351 = state_28309__$1;(statearr_28319_28351[(1)] = (5));
} else
{var statearr_28320_28352 = state_28309__$1;(statearr_28320_28352[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (15)))
{var state_28309__$1 = state_28309;var statearr_28321_28353 = state_28309__$1;(statearr_28321_28353[(2)] = null);
(statearr_28321_28353[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (13)))
{var inst_28268 = (state_28309[(8)]);var inst_28269 = (state_28309[(9)]);var inst_28267 = (state_28309[(10)]);var inst_28266 = (state_28309[(11)]);var inst_28276 = (state_28309[(2)]);var inst_28277 = (inst_28269 + (1));var tmp28315 = inst_28268;var tmp28316 = inst_28267;var tmp28317 = inst_28266;var inst_28266__$1 = tmp28317;var inst_28267__$1 = tmp28316;var inst_28268__$1 = tmp28315;var inst_28269__$1 = inst_28277;var state_28309__$1 = (function (){var statearr_28322 = state_28309;(statearr_28322[(14)] = inst_28276);
(statearr_28322[(8)] = inst_28268__$1);
(statearr_28322[(9)] = inst_28269__$1);
(statearr_28322[(10)] = inst_28267__$1);
(statearr_28322[(11)] = inst_28266__$1);
return statearr_28322;
})();var statearr_28323_28354 = state_28309__$1;(statearr_28323_28354[(2)] = null);
(statearr_28323_28354[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (6)))
{var inst_28255 = (state_28309[(13)]);var inst_28260 = f.call(null,inst_28255);var inst_28265 = cljs.core.seq.call(null,inst_28260);var inst_28266 = inst_28265;var inst_28267 = null;var inst_28268 = (0);var inst_28269 = (0);var state_28309__$1 = (function (){var statearr_28324 = state_28309;(statearr_28324[(8)] = inst_28268);
(statearr_28324[(9)] = inst_28269);
(statearr_28324[(10)] = inst_28267);
(statearr_28324[(11)] = inst_28266);
return statearr_28324;
})();var statearr_28325_28355 = state_28309__$1;(statearr_28325_28355[(2)] = null);
(statearr_28325_28355[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (17)))
{var inst_28280 = (state_28309[(7)]);var inst_28284 = cljs.core.chunk_first.call(null,inst_28280);var inst_28285 = cljs.core.chunk_rest.call(null,inst_28280);var inst_28286 = cljs.core.count.call(null,inst_28284);var inst_28266 = inst_28285;var inst_28267 = inst_28284;var inst_28268 = inst_28286;var inst_28269 = (0);var state_28309__$1 = (function (){var statearr_28326 = state_28309;(statearr_28326[(8)] = inst_28268);
(statearr_28326[(9)] = inst_28269);
(statearr_28326[(10)] = inst_28267);
(statearr_28326[(11)] = inst_28266);
return statearr_28326;
})();var statearr_28327_28356 = state_28309__$1;(statearr_28327_28356[(2)] = null);
(statearr_28327_28356[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (3)))
{var inst_28307 = (state_28309[(2)]);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28309__$1,inst_28307);
} else
{if((state_val_28310 === (12)))
{var inst_28300 = (state_28309[(2)]);var state_28309__$1 = state_28309;var statearr_28328_28357 = state_28309__$1;(statearr_28328_28357[(2)] = inst_28300);
(statearr_28328_28357[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (2)))
{var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,(4),in$);
} else
{if((state_val_28310 === (19)))
{var inst_28295 = (state_28309[(2)]);var state_28309__$1 = state_28309;var statearr_28329_28358 = state_28309__$1;(statearr_28329_28358[(2)] = inst_28295);
(statearr_28329_28358[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (11)))
{var inst_28280 = (state_28309[(7)]);var inst_28266 = (state_28309[(11)]);var inst_28280__$1 = cljs.core.seq.call(null,inst_28266);var state_28309__$1 = (function (){var statearr_28330 = state_28309;(statearr_28330[(7)] = inst_28280__$1);
return statearr_28330;
})();if(inst_28280__$1)
{var statearr_28331_28359 = state_28309__$1;(statearr_28331_28359[(1)] = (14));
} else
{var statearr_28332_28360 = state_28309__$1;(statearr_28332_28360[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (9)))
{var inst_28302 = (state_28309[(2)]);var state_28309__$1 = (function (){var statearr_28333 = state_28309;(statearr_28333[(15)] = inst_28302);
return statearr_28333;
})();var statearr_28334_28361 = state_28309__$1;(statearr_28334_28361[(2)] = null);
(statearr_28334_28361[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (5)))
{var inst_28258 = cljs.core.async.close_BANG_.call(null,out);var state_28309__$1 = state_28309;var statearr_28335_28362 = state_28309__$1;(statearr_28335_28362[(2)] = inst_28258);
(statearr_28335_28362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (14)))
{var inst_28280 = (state_28309[(7)]);var inst_28282 = cljs.core.chunked_seq_QMARK_.call(null,inst_28280);var state_28309__$1 = state_28309;if(inst_28282)
{var statearr_28336_28363 = state_28309__$1;(statearr_28336_28363[(1)] = (17));
} else
{var statearr_28337_28364 = state_28309__$1;(statearr_28337_28364[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (16)))
{var inst_28298 = (state_28309[(2)]);var state_28309__$1 = state_28309;var statearr_28338_28365 = state_28309__$1;(statearr_28338_28365[(2)] = inst_28298);
(statearr_28338_28365[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (10)))
{var inst_28269 = (state_28309[(9)]);var inst_28267 = (state_28309[(10)]);var inst_28274 = cljs.core._nth.call(null,inst_28267,inst_28269);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(13),out,inst_28274);
} else
{if((state_val_28310 === (18)))
{var inst_28280 = (state_28309[(7)]);var inst_28289 = cljs.core.first.call(null,inst_28280);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(20),out,inst_28289);
} else
{if((state_val_28310 === (8)))
{var inst_28268 = (state_28309[(8)]);var inst_28269 = (state_28309[(9)]);var inst_28271 = (inst_28269 < inst_28268);var inst_28272 = inst_28271;var state_28309__$1 = state_28309;if(cljs.core.truth_(inst_28272))
{var statearr_28339_28366 = state_28309__$1;(statearr_28339_28366[(1)] = (10));
} else
{var statearr_28340_28367 = state_28309__$1;(statearr_28340_28367[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_28344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28344[(0)] = state_machine__5694__auto__);
(statearr_28344[(1)] = (1));
return statearr_28344;
});
var state_machine__5694__auto____1 = (function (state_28309){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28309);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28345){if((e28345 instanceof Object))
{var ex__5697__auto__ = e28345;var statearr_28346_28368 = state_28309;(statearr_28346_28368[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28345;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28369 = state_28309;
state_28309 = G__28369;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28309){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_28347 = f__5709__auto__.call(null);(statearr_28347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28347;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___28450 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28450){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28450){
return (function (state_28429){var state_val_28430 = (state_28429[(1)]);if((state_val_28430 === (7)))
{var inst_28425 = (state_28429[(2)]);var state_28429__$1 = state_28429;var statearr_28431_28451 = state_28429__$1;(statearr_28431_28451[(2)] = inst_28425);
(statearr_28431_28451[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28430 === (1)))
{var state_28429__$1 = state_28429;var statearr_28432_28452 = state_28429__$1;(statearr_28432_28452[(2)] = null);
(statearr_28432_28452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28430 === (4)))
{var inst_28412 = (state_28429[(7)]);var inst_28412__$1 = (state_28429[(2)]);var inst_28413 = (inst_28412__$1 == null);var state_28429__$1 = (function (){var statearr_28433 = state_28429;(statearr_28433[(7)] = inst_28412__$1);
return statearr_28433;
})();if(cljs.core.truth_(inst_28413))
{var statearr_28434_28453 = state_28429__$1;(statearr_28434_28453[(1)] = (5));
} else
{var statearr_28435_28454 = state_28429__$1;(statearr_28435_28454[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28430 === (6)))
{var inst_28412 = (state_28429[(7)]);var state_28429__$1 = state_28429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28429__$1,(11),to,inst_28412);
} else
{if((state_val_28430 === (3)))
{var inst_28427 = (state_28429[(2)]);var state_28429__$1 = state_28429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28429__$1,inst_28427);
} else
{if((state_val_28430 === (2)))
{var state_28429__$1 = state_28429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28429__$1,(4),from);
} else
{if((state_val_28430 === (11)))
{var inst_28422 = (state_28429[(2)]);var state_28429__$1 = (function (){var statearr_28436 = state_28429;(statearr_28436[(8)] = inst_28422);
return statearr_28436;
})();var statearr_28437_28455 = state_28429__$1;(statearr_28437_28455[(2)] = null);
(statearr_28437_28455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28430 === (9)))
{var state_28429__$1 = state_28429;var statearr_28438_28456 = state_28429__$1;(statearr_28438_28456[(2)] = null);
(statearr_28438_28456[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28430 === (5)))
{var state_28429__$1 = state_28429;if(cljs.core.truth_(close_QMARK_))
{var statearr_28439_28457 = state_28429__$1;(statearr_28439_28457[(1)] = (8));
} else
{var statearr_28440_28458 = state_28429__$1;(statearr_28440_28458[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28430 === (10)))
{var inst_28419 = (state_28429[(2)]);var state_28429__$1 = state_28429;var statearr_28441_28459 = state_28429__$1;(statearr_28441_28459[(2)] = inst_28419);
(statearr_28441_28459[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28430 === (8)))
{var inst_28416 = cljs.core.async.close_BANG_.call(null,to);var state_28429__$1 = state_28429;var statearr_28442_28460 = state_28429__$1;(statearr_28442_28460[(2)] = inst_28416);
(statearr_28442_28460[(1)] = (10));
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
});})(c__5708__auto___28450))
;return ((function (switch__5693__auto__,c__5708__auto___28450){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28446 = [null,null,null,null,null,null,null,null,null];(statearr_28446[(0)] = state_machine__5694__auto__);
(statearr_28446[(1)] = (1));
return statearr_28446;
});
var state_machine__5694__auto____1 = (function (state_28429){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28429);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28447){if((e28447 instanceof Object))
{var ex__5697__auto__ = e28447;var statearr_28448_28461 = state_28429;(statearr_28448_28461[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28447;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28462 = state_28429;
state_28429 = G__28462;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28429){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28450))
})();var state__5710__auto__ = (function (){var statearr_28449 = f__5709__auto__.call(null);(statearr_28449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28450);
return statearr_28449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28450))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___28549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28549,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28549,tc,fc){
return (function (state_28527){var state_val_28528 = (state_28527[(1)]);if((state_val_28528 === (7)))
{var inst_28523 = (state_28527[(2)]);var state_28527__$1 = state_28527;var statearr_28529_28550 = state_28527__$1;(statearr_28529_28550[(2)] = inst_28523);
(statearr_28529_28550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28528 === (1)))
{var state_28527__$1 = state_28527;var statearr_28530_28551 = state_28527__$1;(statearr_28530_28551[(2)] = null);
(statearr_28530_28551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28528 === (4)))
{var inst_28508 = (state_28527[(7)]);var inst_28508__$1 = (state_28527[(2)]);var inst_28509 = (inst_28508__$1 == null);var state_28527__$1 = (function (){var statearr_28531 = state_28527;(statearr_28531[(7)] = inst_28508__$1);
return statearr_28531;
})();if(cljs.core.truth_(inst_28509))
{var statearr_28532_28552 = state_28527__$1;(statearr_28532_28552[(1)] = (5));
} else
{var statearr_28533_28553 = state_28527__$1;(statearr_28533_28553[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28528 === (6)))
{var inst_28508 = (state_28527[(7)]);var inst_28514 = p.call(null,inst_28508);var state_28527__$1 = state_28527;if(cljs.core.truth_(inst_28514))
{var statearr_28534_28554 = state_28527__$1;(statearr_28534_28554[(1)] = (9));
} else
{var statearr_28535_28555 = state_28527__$1;(statearr_28535_28555[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28528 === (3)))
{var inst_28525 = (state_28527[(2)]);var state_28527__$1 = state_28527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28527__$1,inst_28525);
} else
{if((state_val_28528 === (2)))
{var state_28527__$1 = state_28527;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28527__$1,(4),ch);
} else
{if((state_val_28528 === (11)))
{var inst_28508 = (state_28527[(7)]);var inst_28518 = (state_28527[(2)]);var state_28527__$1 = state_28527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28527__$1,(8),inst_28518,inst_28508);
} else
{if((state_val_28528 === (9)))
{var state_28527__$1 = state_28527;var statearr_28536_28556 = state_28527__$1;(statearr_28536_28556[(2)] = tc);
(statearr_28536_28556[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28528 === (5)))
{var inst_28511 = cljs.core.async.close_BANG_.call(null,tc);var inst_28512 = cljs.core.async.close_BANG_.call(null,fc);var state_28527__$1 = (function (){var statearr_28537 = state_28527;(statearr_28537[(8)] = inst_28511);
return statearr_28537;
})();var statearr_28538_28557 = state_28527__$1;(statearr_28538_28557[(2)] = inst_28512);
(statearr_28538_28557[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28528 === (10)))
{var state_28527__$1 = state_28527;var statearr_28539_28558 = state_28527__$1;(statearr_28539_28558[(2)] = fc);
(statearr_28539_28558[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28528 === (8)))
{var inst_28520 = (state_28527[(2)]);var state_28527__$1 = (function (){var statearr_28540 = state_28527;(statearr_28540[(9)] = inst_28520);
return statearr_28540;
})();var statearr_28541_28559 = state_28527__$1;(statearr_28541_28559[(2)] = null);
(statearr_28541_28559[(1)] = (2));
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
});})(c__5708__auto___28549,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___28549,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28545 = [null,null,null,null,null,null,null,null,null,null];(statearr_28545[(0)] = state_machine__5694__auto__);
(statearr_28545[(1)] = (1));
return statearr_28545;
});
var state_machine__5694__auto____1 = (function (state_28527){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28527);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28546){if((e28546 instanceof Object))
{var ex__5697__auto__ = e28546;var statearr_28547_28560 = state_28527;(statearr_28547_28560[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28527);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28561 = state_28527;
state_28527 = G__28561;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28527){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28549,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_28548 = f__5709__auto__.call(null);(statearr_28548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28549);
return statearr_28548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28549,tc,fc))
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
return (function (state_28608){var state_val_28609 = (state_28608[(1)]);if((state_val_28609 === (7)))
{var inst_28604 = (state_28608[(2)]);var state_28608__$1 = state_28608;var statearr_28610_28626 = state_28608__$1;(statearr_28610_28626[(2)] = inst_28604);
(statearr_28610_28626[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28609 === (6)))
{var inst_28597 = (state_28608[(7)]);var inst_28594 = (state_28608[(8)]);var inst_28601 = f.call(null,inst_28594,inst_28597);var inst_28594__$1 = inst_28601;var state_28608__$1 = (function (){var statearr_28611 = state_28608;(statearr_28611[(8)] = inst_28594__$1);
return statearr_28611;
})();var statearr_28612_28627 = state_28608__$1;(statearr_28612_28627[(2)] = null);
(statearr_28612_28627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28609 === (5)))
{var inst_28594 = (state_28608[(8)]);var state_28608__$1 = state_28608;var statearr_28613_28628 = state_28608__$1;(statearr_28613_28628[(2)] = inst_28594);
(statearr_28613_28628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28609 === (4)))
{var inst_28597 = (state_28608[(7)]);var inst_28597__$1 = (state_28608[(2)]);var inst_28598 = (inst_28597__$1 == null);var state_28608__$1 = (function (){var statearr_28614 = state_28608;(statearr_28614[(7)] = inst_28597__$1);
return statearr_28614;
})();if(cljs.core.truth_(inst_28598))
{var statearr_28615_28629 = state_28608__$1;(statearr_28615_28629[(1)] = (5));
} else
{var statearr_28616_28630 = state_28608__$1;(statearr_28616_28630[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28609 === (3)))
{var inst_28606 = (state_28608[(2)]);var state_28608__$1 = state_28608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28608__$1,inst_28606);
} else
{if((state_val_28609 === (2)))
{var state_28608__$1 = state_28608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28608__$1,(4),ch);
} else
{if((state_val_28609 === (1)))
{var inst_28594 = init;var state_28608__$1 = (function (){var statearr_28617 = state_28608;(statearr_28617[(8)] = inst_28594);
return statearr_28617;
})();var statearr_28618_28631 = state_28608__$1;(statearr_28618_28631[(2)] = null);
(statearr_28618_28631[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_28622 = [null,null,null,null,null,null,null,null,null];(statearr_28622[(0)] = state_machine__5694__auto__);
(statearr_28622[(1)] = (1));
return statearr_28622;
});
var state_machine__5694__auto____1 = (function (state_28608){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28608);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28623){if((e28623 instanceof Object))
{var ex__5697__auto__ = e28623;var statearr_28624_28632 = state_28608;(statearr_28624_28632[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28608);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28623;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28633 = state_28608;
state_28608 = G__28633;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28608){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_28625 = f__5709__auto__.call(null);(statearr_28625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28625;
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
return (function (state_28695){var state_val_28696 = (state_28695[(1)]);if((state_val_28696 === (7)))
{var inst_28676 = (state_28695[(7)]);var inst_28681 = (state_28695[(2)]);var inst_28682 = cljs.core.next.call(null,inst_28676);var inst_28676__$1 = inst_28682;var state_28695__$1 = (function (){var statearr_28697 = state_28695;(statearr_28697[(8)] = inst_28681);
(statearr_28697[(7)] = inst_28676__$1);
return statearr_28697;
})();var statearr_28698_28716 = state_28695__$1;(statearr_28698_28716[(2)] = null);
(statearr_28698_28716[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28696 === (1)))
{var inst_28675 = cljs.core.seq.call(null,coll);var inst_28676 = inst_28675;var state_28695__$1 = (function (){var statearr_28699 = state_28695;(statearr_28699[(7)] = inst_28676);
return statearr_28699;
})();var statearr_28700_28717 = state_28695__$1;(statearr_28700_28717[(2)] = null);
(statearr_28700_28717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28696 === (4)))
{var inst_28676 = (state_28695[(7)]);var inst_28679 = cljs.core.first.call(null,inst_28676);var state_28695__$1 = state_28695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28695__$1,(7),ch,inst_28679);
} else
{if((state_val_28696 === (6)))
{var inst_28691 = (state_28695[(2)]);var state_28695__$1 = state_28695;var statearr_28701_28718 = state_28695__$1;(statearr_28701_28718[(2)] = inst_28691);
(statearr_28701_28718[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28696 === (3)))
{var inst_28693 = (state_28695[(2)]);var state_28695__$1 = state_28695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28695__$1,inst_28693);
} else
{if((state_val_28696 === (2)))
{var inst_28676 = (state_28695[(7)]);var state_28695__$1 = state_28695;if(cljs.core.truth_(inst_28676))
{var statearr_28702_28719 = state_28695__$1;(statearr_28702_28719[(1)] = (4));
} else
{var statearr_28703_28720 = state_28695__$1;(statearr_28703_28720[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28696 === (9)))
{var state_28695__$1 = state_28695;var statearr_28704_28721 = state_28695__$1;(statearr_28704_28721[(2)] = null);
(statearr_28704_28721[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28696 === (5)))
{var state_28695__$1 = state_28695;if(cljs.core.truth_(close_QMARK_))
{var statearr_28705_28722 = state_28695__$1;(statearr_28705_28722[(1)] = (8));
} else
{var statearr_28706_28723 = state_28695__$1;(statearr_28706_28723[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28696 === (10)))
{var inst_28689 = (state_28695[(2)]);var state_28695__$1 = state_28695;var statearr_28707_28724 = state_28695__$1;(statearr_28707_28724[(2)] = inst_28689);
(statearr_28707_28724[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28696 === (8)))
{var inst_28686 = cljs.core.async.close_BANG_.call(null,ch);var state_28695__$1 = state_28695;var statearr_28708_28725 = state_28695__$1;(statearr_28708_28725[(2)] = inst_28686);
(statearr_28708_28725[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_28712 = [null,null,null,null,null,null,null,null,null];(statearr_28712[(0)] = state_machine__5694__auto__);
(statearr_28712[(1)] = (1));
return statearr_28712;
});
var state_machine__5694__auto____1 = (function (state_28695){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28713){if((e28713 instanceof Object))
{var ex__5697__auto__ = e28713;var statearr_28714_28726 = state_28695;(statearr_28714_28726[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28713;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28727 = state_28695;
state_28695 = G__28727;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28695){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_28715 = f__5709__auto__.call(null);(statearr_28715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28715;
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
cljs.core.async.Mux = (function (){var obj28729 = {};return obj28729;
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
cljs.core.async.Mult = (function (){var obj28731 = {};return obj28731;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28955 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28955 = (function (cs,ch,mult,meta28956){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28956 = meta28956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28955.cljs$lang$type = true;
cljs.core.async.t28955.cljs$lang$ctorStr = "cljs.core.async/t28955";
cljs.core.async.t28955.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28955");
});})(cs))
;
cljs.core.async.t28955.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28955.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28955.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28955.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28955.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28957){var self__ = this;
var _28957__$1 = this;return self__.meta28956;
});})(cs))
;
cljs.core.async.t28955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28957,meta28956__$1){var self__ = this;
var _28957__$1 = this;return (new cljs.core.async.t28955(self__.cs,self__.ch,self__.mult,meta28956__$1));
});})(cs))
;
cljs.core.async.__GT_t28955 = ((function (cs){
return (function __GT_t28955(cs__$1,ch__$1,mult__$1,meta28956){return (new cljs.core.async.t28955(cs__$1,ch__$1,mult__$1,meta28956));
});})(cs))
;
}
return (new cljs.core.async.t28955(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___29178 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29178,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29178,cs,m,dchan,dctr,done){
return (function (state_29092){var state_val_29093 = (state_29092[(1)]);if((state_val_29093 === (7)))
{var inst_29088 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29094_29179 = state_29092__$1;(statearr_29094_29179[(2)] = inst_29088);
(statearr_29094_29179[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (20)))
{var inst_28989 = (state_29092[(7)]);var inst_28999 = cljs.core.first.call(null,inst_28989);var inst_29000 = cljs.core.nth.call(null,inst_28999,(0),null);var inst_29001 = cljs.core.nth.call(null,inst_28999,(1),null);var state_29092__$1 = (function (){var statearr_29095 = state_29092;(statearr_29095[(8)] = inst_29000);
return statearr_29095;
})();if(cljs.core.truth_(inst_29001))
{var statearr_29096_29180 = state_29092__$1;(statearr_29096_29180[(1)] = (22));
} else
{var statearr_29097_29181 = state_29092__$1;(statearr_29097_29181[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (27)))
{var inst_29029 = (state_29092[(9)]);var inst_29031 = (state_29092[(10)]);var inst_29036 = cljs.core._nth.call(null,inst_29029,inst_29031);var state_29092__$1 = (function (){var statearr_29098 = state_29092;(statearr_29098[(11)] = inst_29036);
return statearr_29098;
})();var statearr_29099_29182 = state_29092__$1;(statearr_29099_29182[(2)] = null);
(statearr_29099_29182[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (1)))
{var state_29092__$1 = state_29092;var statearr_29100_29183 = state_29092__$1;(statearr_29100_29183[(2)] = null);
(statearr_29100_29183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (24)))
{var inst_28989 = (state_29092[(7)]);var inst_29006 = (state_29092[(2)]);var inst_29007 = cljs.core.next.call(null,inst_28989);var inst_28969 = inst_29007;var inst_28970 = null;var inst_28971 = (0);var inst_28972 = (0);var state_29092__$1 = (function (){var statearr_29101 = state_29092;(statearr_29101[(12)] = inst_28970);
(statearr_29101[(13)] = inst_28969);
(statearr_29101[(14)] = inst_28972);
(statearr_29101[(15)] = inst_28971);
(statearr_29101[(16)] = inst_29006);
return statearr_29101;
})();var statearr_29102_29184 = state_29092__$1;(statearr_29102_29184[(2)] = null);
(statearr_29102_29184[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (39)))
{var inst_29049 = (state_29092[(17)]);var inst_29067 = (state_29092[(2)]);var inst_29068 = cljs.core.next.call(null,inst_29049);var inst_29028 = inst_29068;var inst_29029 = null;var inst_29030 = (0);var inst_29031 = (0);var state_29092__$1 = (function (){var statearr_29106 = state_29092;(statearr_29106[(9)] = inst_29029);
(statearr_29106[(18)] = inst_29067);
(statearr_29106[(19)] = inst_29030);
(statearr_29106[(10)] = inst_29031);
(statearr_29106[(20)] = inst_29028);
return statearr_29106;
})();var statearr_29107_29185 = state_29092__$1;(statearr_29107_29185[(2)] = null);
(statearr_29107_29185[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (4)))
{var inst_28960 = (state_29092[(21)]);var inst_28960__$1 = (state_29092[(2)]);var inst_28961 = (inst_28960__$1 == null);var state_29092__$1 = (function (){var statearr_29108 = state_29092;(statearr_29108[(21)] = inst_28960__$1);
return statearr_29108;
})();if(cljs.core.truth_(inst_28961))
{var statearr_29109_29186 = state_29092__$1;(statearr_29109_29186[(1)] = (5));
} else
{var statearr_29110_29187 = state_29092__$1;(statearr_29110_29187[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (15)))
{var inst_28970 = (state_29092[(12)]);var inst_28969 = (state_29092[(13)]);var inst_28972 = (state_29092[(14)]);var inst_28971 = (state_29092[(15)]);var inst_28985 = (state_29092[(2)]);var inst_28986 = (inst_28972 + (1));var tmp29103 = inst_28970;var tmp29104 = inst_28969;var tmp29105 = inst_28971;var inst_28969__$1 = tmp29104;var inst_28970__$1 = tmp29103;var inst_28971__$1 = tmp29105;var inst_28972__$1 = inst_28986;var state_29092__$1 = (function (){var statearr_29111 = state_29092;(statearr_29111[(12)] = inst_28970__$1);
(statearr_29111[(13)] = inst_28969__$1);
(statearr_29111[(14)] = inst_28972__$1);
(statearr_29111[(15)] = inst_28971__$1);
(statearr_29111[(22)] = inst_28985);
return statearr_29111;
})();var statearr_29112_29188 = state_29092__$1;(statearr_29112_29188[(2)] = null);
(statearr_29112_29188[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (21)))
{var inst_29010 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29113_29189 = state_29092__$1;(statearr_29113_29189[(2)] = inst_29010);
(statearr_29113_29189[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (31)))
{var inst_29036 = (state_29092[(11)]);var inst_29037 = (state_29092[(2)]);var inst_29038 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29039 = cljs.core.async.untap_STAR_.call(null,m,inst_29036);var state_29092__$1 = (function (){var statearr_29114 = state_29092;(statearr_29114[(23)] = inst_29037);
(statearr_29114[(24)] = inst_29038);
return statearr_29114;
})();var statearr_29115_29190 = state_29092__$1;(statearr_29115_29190[(2)] = inst_29039);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (32)))
{var inst_28960 = (state_29092[(21)]);var inst_29036 = (state_29092[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29092,(31),Object,null,(30));var inst_29043 = cljs.core.async.put_BANG_.call(null,inst_29036,inst_28960,done);var state_29092__$1 = state_29092;var statearr_29116_29191 = state_29092__$1;(statearr_29116_29191[(2)] = inst_29043);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (40)))
{var inst_29058 = (state_29092[(25)]);var inst_29059 = (state_29092[(2)]);var inst_29060 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29061 = cljs.core.async.untap_STAR_.call(null,m,inst_29058);var state_29092__$1 = (function (){var statearr_29117 = state_29092;(statearr_29117[(26)] = inst_29060);
(statearr_29117[(27)] = inst_29059);
return statearr_29117;
})();var statearr_29118_29192 = state_29092__$1;(statearr_29118_29192[(2)] = inst_29061);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (33)))
{var inst_29049 = (state_29092[(17)]);var inst_29051 = cljs.core.chunked_seq_QMARK_.call(null,inst_29049);var state_29092__$1 = state_29092;if(inst_29051)
{var statearr_29119_29193 = state_29092__$1;(statearr_29119_29193[(1)] = (36));
} else
{var statearr_29120_29194 = state_29092__$1;(statearr_29120_29194[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (13)))
{var inst_28979 = (state_29092[(28)]);var inst_28982 = cljs.core.async.close_BANG_.call(null,inst_28979);var state_29092__$1 = state_29092;var statearr_29121_29195 = state_29092__$1;(statearr_29121_29195[(2)] = inst_28982);
(statearr_29121_29195[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (22)))
{var inst_29000 = (state_29092[(8)]);var inst_29003 = cljs.core.async.close_BANG_.call(null,inst_29000);var state_29092__$1 = state_29092;var statearr_29122_29196 = state_29092__$1;(statearr_29122_29196[(2)] = inst_29003);
(statearr_29122_29196[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (36)))
{var inst_29049 = (state_29092[(17)]);var inst_29053 = cljs.core.chunk_first.call(null,inst_29049);var inst_29054 = cljs.core.chunk_rest.call(null,inst_29049);var inst_29055 = cljs.core.count.call(null,inst_29053);var inst_29028 = inst_29054;var inst_29029 = inst_29053;var inst_29030 = inst_29055;var inst_29031 = (0);var state_29092__$1 = (function (){var statearr_29123 = state_29092;(statearr_29123[(9)] = inst_29029);
(statearr_29123[(19)] = inst_29030);
(statearr_29123[(10)] = inst_29031);
(statearr_29123[(20)] = inst_29028);
return statearr_29123;
})();var statearr_29124_29197 = state_29092__$1;(statearr_29124_29197[(2)] = null);
(statearr_29124_29197[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (41)))
{var inst_28960 = (state_29092[(21)]);var inst_29058 = (state_29092[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29092,(40),Object,null,(39));var inst_29065 = cljs.core.async.put_BANG_.call(null,inst_29058,inst_28960,done);var state_29092__$1 = state_29092;var statearr_29125_29198 = state_29092__$1;(statearr_29125_29198[(2)] = inst_29065);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (43)))
{var state_29092__$1 = state_29092;var statearr_29126_29199 = state_29092__$1;(statearr_29126_29199[(2)] = null);
(statearr_29126_29199[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (29)))
{var inst_29076 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29127_29200 = state_29092__$1;(statearr_29127_29200[(2)] = inst_29076);
(statearr_29127_29200[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (44)))
{var inst_29085 = (state_29092[(2)]);var state_29092__$1 = (function (){var statearr_29128 = state_29092;(statearr_29128[(29)] = inst_29085);
return statearr_29128;
})();var statearr_29129_29201 = state_29092__$1;(statearr_29129_29201[(2)] = null);
(statearr_29129_29201[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (6)))
{var inst_29020 = (state_29092[(30)]);var inst_29019 = cljs.core.deref.call(null,cs);var inst_29020__$1 = cljs.core.keys.call(null,inst_29019);var inst_29021 = cljs.core.count.call(null,inst_29020__$1);var inst_29022 = cljs.core.reset_BANG_.call(null,dctr,inst_29021);var inst_29027 = cljs.core.seq.call(null,inst_29020__$1);var inst_29028 = inst_29027;var inst_29029 = null;var inst_29030 = (0);var inst_29031 = (0);var state_29092__$1 = (function (){var statearr_29130 = state_29092;(statearr_29130[(9)] = inst_29029);
(statearr_29130[(31)] = inst_29022);
(statearr_29130[(19)] = inst_29030);
(statearr_29130[(10)] = inst_29031);
(statearr_29130[(30)] = inst_29020__$1);
(statearr_29130[(20)] = inst_29028);
return statearr_29130;
})();var statearr_29131_29202 = state_29092__$1;(statearr_29131_29202[(2)] = null);
(statearr_29131_29202[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (28)))
{var inst_29049 = (state_29092[(17)]);var inst_29028 = (state_29092[(20)]);var inst_29049__$1 = cljs.core.seq.call(null,inst_29028);var state_29092__$1 = (function (){var statearr_29132 = state_29092;(statearr_29132[(17)] = inst_29049__$1);
return statearr_29132;
})();if(inst_29049__$1)
{var statearr_29133_29203 = state_29092__$1;(statearr_29133_29203[(1)] = (33));
} else
{var statearr_29134_29204 = state_29092__$1;(statearr_29134_29204[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (25)))
{var inst_29030 = (state_29092[(19)]);var inst_29031 = (state_29092[(10)]);var inst_29033 = (inst_29031 < inst_29030);var inst_29034 = inst_29033;var state_29092__$1 = state_29092;if(cljs.core.truth_(inst_29034))
{var statearr_29135_29205 = state_29092__$1;(statearr_29135_29205[(1)] = (27));
} else
{var statearr_29136_29206 = state_29092__$1;(statearr_29136_29206[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (34)))
{var state_29092__$1 = state_29092;var statearr_29137_29207 = state_29092__$1;(statearr_29137_29207[(2)] = null);
(statearr_29137_29207[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (17)))
{var state_29092__$1 = state_29092;var statearr_29138_29208 = state_29092__$1;(statearr_29138_29208[(2)] = null);
(statearr_29138_29208[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (3)))
{var inst_29090 = (state_29092[(2)]);var state_29092__$1 = state_29092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29092__$1,inst_29090);
} else
{if((state_val_29093 === (12)))
{var inst_29015 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29139_29209 = state_29092__$1;(statearr_29139_29209[(2)] = inst_29015);
(statearr_29139_29209[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (2)))
{var state_29092__$1 = state_29092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29092__$1,(4),ch);
} else
{if((state_val_29093 === (23)))
{var state_29092__$1 = state_29092;var statearr_29140_29210 = state_29092__$1;(statearr_29140_29210[(2)] = null);
(statearr_29140_29210[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (35)))
{var inst_29074 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29141_29211 = state_29092__$1;(statearr_29141_29211[(2)] = inst_29074);
(statearr_29141_29211[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (19)))
{var inst_28989 = (state_29092[(7)]);var inst_28993 = cljs.core.chunk_first.call(null,inst_28989);var inst_28994 = cljs.core.chunk_rest.call(null,inst_28989);var inst_28995 = cljs.core.count.call(null,inst_28993);var inst_28969 = inst_28994;var inst_28970 = inst_28993;var inst_28971 = inst_28995;var inst_28972 = (0);var state_29092__$1 = (function (){var statearr_29142 = state_29092;(statearr_29142[(12)] = inst_28970);
(statearr_29142[(13)] = inst_28969);
(statearr_29142[(14)] = inst_28972);
(statearr_29142[(15)] = inst_28971);
return statearr_29142;
})();var statearr_29143_29212 = state_29092__$1;(statearr_29143_29212[(2)] = null);
(statearr_29143_29212[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (11)))
{var inst_28969 = (state_29092[(13)]);var inst_28989 = (state_29092[(7)]);var inst_28989__$1 = cljs.core.seq.call(null,inst_28969);var state_29092__$1 = (function (){var statearr_29144 = state_29092;(statearr_29144[(7)] = inst_28989__$1);
return statearr_29144;
})();if(inst_28989__$1)
{var statearr_29145_29213 = state_29092__$1;(statearr_29145_29213[(1)] = (16));
} else
{var statearr_29146_29214 = state_29092__$1;(statearr_29146_29214[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (9)))
{var inst_29017 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29147_29215 = state_29092__$1;(statearr_29147_29215[(2)] = inst_29017);
(statearr_29147_29215[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (5)))
{var inst_28967 = cljs.core.deref.call(null,cs);var inst_28968 = cljs.core.seq.call(null,inst_28967);var inst_28969 = inst_28968;var inst_28970 = null;var inst_28971 = (0);var inst_28972 = (0);var state_29092__$1 = (function (){var statearr_29148 = state_29092;(statearr_29148[(12)] = inst_28970);
(statearr_29148[(13)] = inst_28969);
(statearr_29148[(14)] = inst_28972);
(statearr_29148[(15)] = inst_28971);
return statearr_29148;
})();var statearr_29149_29216 = state_29092__$1;(statearr_29149_29216[(2)] = null);
(statearr_29149_29216[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (14)))
{var state_29092__$1 = state_29092;var statearr_29150_29217 = state_29092__$1;(statearr_29150_29217[(2)] = null);
(statearr_29150_29217[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (45)))
{var inst_29082 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29151_29218 = state_29092__$1;(statearr_29151_29218[(2)] = inst_29082);
(statearr_29151_29218[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (26)))
{var inst_29020 = (state_29092[(30)]);var inst_29078 = (state_29092[(2)]);var inst_29079 = cljs.core.seq.call(null,inst_29020);var state_29092__$1 = (function (){var statearr_29152 = state_29092;(statearr_29152[(32)] = inst_29078);
return statearr_29152;
})();if(inst_29079)
{var statearr_29153_29219 = state_29092__$1;(statearr_29153_29219[(1)] = (42));
} else
{var statearr_29154_29220 = state_29092__$1;(statearr_29154_29220[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (16)))
{var inst_28989 = (state_29092[(7)]);var inst_28991 = cljs.core.chunked_seq_QMARK_.call(null,inst_28989);var state_29092__$1 = state_29092;if(inst_28991)
{var statearr_29158_29221 = state_29092__$1;(statearr_29158_29221[(1)] = (19));
} else
{var statearr_29159_29222 = state_29092__$1;(statearr_29159_29222[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (38)))
{var inst_29071 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29160_29223 = state_29092__$1;(statearr_29160_29223[(2)] = inst_29071);
(statearr_29160_29223[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (30)))
{var inst_29029 = (state_29092[(9)]);var inst_29030 = (state_29092[(19)]);var inst_29031 = (state_29092[(10)]);var inst_29028 = (state_29092[(20)]);var inst_29045 = (state_29092[(2)]);var inst_29046 = (inst_29031 + (1));var tmp29155 = inst_29029;var tmp29156 = inst_29030;var tmp29157 = inst_29028;var inst_29028__$1 = tmp29157;var inst_29029__$1 = tmp29155;var inst_29030__$1 = tmp29156;var inst_29031__$1 = inst_29046;var state_29092__$1 = (function (){var statearr_29161 = state_29092;(statearr_29161[(9)] = inst_29029__$1);
(statearr_29161[(19)] = inst_29030__$1);
(statearr_29161[(10)] = inst_29031__$1);
(statearr_29161[(33)] = inst_29045);
(statearr_29161[(20)] = inst_29028__$1);
return statearr_29161;
})();var statearr_29162_29224 = state_29092__$1;(statearr_29162_29224[(2)] = null);
(statearr_29162_29224[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (10)))
{var inst_28970 = (state_29092[(12)]);var inst_28972 = (state_29092[(14)]);var inst_28978 = cljs.core._nth.call(null,inst_28970,inst_28972);var inst_28979 = cljs.core.nth.call(null,inst_28978,(0),null);var inst_28980 = cljs.core.nth.call(null,inst_28978,(1),null);var state_29092__$1 = (function (){var statearr_29163 = state_29092;(statearr_29163[(28)] = inst_28979);
return statearr_29163;
})();if(cljs.core.truth_(inst_28980))
{var statearr_29164_29225 = state_29092__$1;(statearr_29164_29225[(1)] = (13));
} else
{var statearr_29165_29226 = state_29092__$1;(statearr_29165_29226[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (18)))
{var inst_29013 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29166_29227 = state_29092__$1;(statearr_29166_29227[(2)] = inst_29013);
(statearr_29166_29227[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (42)))
{var state_29092__$1 = state_29092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29092__$1,(45),dchan);
} else
{if((state_val_29093 === (37)))
{var inst_29049 = (state_29092[(17)]);var inst_29058 = cljs.core.first.call(null,inst_29049);var state_29092__$1 = (function (){var statearr_29167 = state_29092;(statearr_29167[(25)] = inst_29058);
return statearr_29167;
})();var statearr_29168_29228 = state_29092__$1;(statearr_29168_29228[(2)] = null);
(statearr_29168_29228[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (8)))
{var inst_28972 = (state_29092[(14)]);var inst_28971 = (state_29092[(15)]);var inst_28974 = (inst_28972 < inst_28971);var inst_28975 = inst_28974;var state_29092__$1 = state_29092;if(cljs.core.truth_(inst_28975))
{var statearr_29169_29229 = state_29092__$1;(statearr_29169_29229[(1)] = (10));
} else
{var statearr_29170_29230 = state_29092__$1;(statearr_29170_29230[(1)] = (11));
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
});})(c__5708__auto___29178,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___29178,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29174[(0)] = state_machine__5694__auto__);
(statearr_29174[(1)] = (1));
return statearr_29174;
});
var state_machine__5694__auto____1 = (function (state_29092){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29092);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29175){if((e29175 instanceof Object))
{var ex__5697__auto__ = e29175;var statearr_29176_29231 = state_29092;(statearr_29176_29231[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29175;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29232 = state_29092;
state_29092 = G__29232;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29092){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29178,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_29177 = f__5709__auto__.call(null);(statearr_29177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29178);
return statearr_29177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29178,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj29234 = {};return obj29234;
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
;var m = (function (){if(typeof cljs.core.async.t29344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29344 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29345){
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
this.meta29345 = meta29345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29344.cljs$lang$type = true;
cljs.core.async.t29344.cljs$lang$ctorStr = "cljs.core.async/t29344";
cljs.core.async.t29344.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29344");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29344.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29346){var self__ = this;
var _29346__$1 = this;return self__.meta29345;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29346,meta29345__$1){var self__ = this;
var _29346__$1 = this;return (new cljs.core.async.t29344(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29345__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29344 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29344(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29345){return (new cljs.core.async.t29344(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29345));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29344(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___29453 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29453,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29453,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29411){var state_val_29412 = (state_29411[(1)]);if((state_val_29412 === (7)))
{var inst_29360 = (state_29411[(7)]);var inst_29365 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29360);var state_29411__$1 = state_29411;var statearr_29413_29454 = state_29411__$1;(statearr_29413_29454[(2)] = inst_29365);
(statearr_29413_29454[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (20)))
{var inst_29375 = (state_29411[(8)]);var state_29411__$1 = state_29411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29411__$1,(23),out,inst_29375);
} else
{if((state_val_29412 === (1)))
{var inst_29350 = (state_29411[(9)]);var inst_29350__$1 = calc_state.call(null);var inst_29351 = cljs.core.seq_QMARK_.call(null,inst_29350__$1);var state_29411__$1 = (function (){var statearr_29414 = state_29411;(statearr_29414[(9)] = inst_29350__$1);
return statearr_29414;
})();if(inst_29351)
{var statearr_29415_29455 = state_29411__$1;(statearr_29415_29455[(1)] = (2));
} else
{var statearr_29416_29456 = state_29411__$1;(statearr_29416_29456[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (4)))
{var inst_29350 = (state_29411[(9)]);var inst_29356 = (state_29411[(2)]);var inst_29357 = cljs.core.get.call(null,inst_29356,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29358 = cljs.core.get.call(null,inst_29356,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29359 = cljs.core.get.call(null,inst_29356,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29360 = inst_29350;var state_29411__$1 = (function (){var statearr_29417 = state_29411;(statearr_29417[(10)] = inst_29357);
(statearr_29417[(11)] = inst_29359);
(statearr_29417[(12)] = inst_29358);
(statearr_29417[(7)] = inst_29360);
return statearr_29417;
})();var statearr_29418_29457 = state_29411__$1;(statearr_29418_29457[(2)] = null);
(statearr_29418_29457[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (15)))
{var state_29411__$1 = state_29411;var statearr_29419_29458 = state_29411__$1;(statearr_29419_29458[(2)] = null);
(statearr_29419_29458[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (21)))
{var state_29411__$1 = state_29411;var statearr_29420_29459 = state_29411__$1;(statearr_29420_29459[(2)] = null);
(statearr_29420_29459[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (13)))
{var inst_29407 = (state_29411[(2)]);var state_29411__$1 = state_29411;var statearr_29421_29460 = state_29411__$1;(statearr_29421_29460[(2)] = inst_29407);
(statearr_29421_29460[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (22)))
{var inst_29368 = (state_29411[(13)]);var inst_29404 = (state_29411[(2)]);var inst_29360 = inst_29368;var state_29411__$1 = (function (){var statearr_29422 = state_29411;(statearr_29422[(14)] = inst_29404);
(statearr_29422[(7)] = inst_29360);
return statearr_29422;
})();var statearr_29423_29461 = state_29411__$1;(statearr_29423_29461[(2)] = null);
(statearr_29423_29461[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (6)))
{var inst_29409 = (state_29411[(2)]);var state_29411__$1 = state_29411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29411__$1,inst_29409);
} else
{if((state_val_29412 === (17)))
{var inst_29390 = (state_29411[(15)]);var state_29411__$1 = state_29411;var statearr_29424_29462 = state_29411__$1;(statearr_29424_29462[(2)] = inst_29390);
(statearr_29424_29462[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (3)))
{var inst_29350 = (state_29411[(9)]);var state_29411__$1 = state_29411;var statearr_29425_29463 = state_29411__$1;(statearr_29425_29463[(2)] = inst_29350);
(statearr_29425_29463[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (12)))
{var inst_29390 = (state_29411[(15)]);var inst_29371 = (state_29411[(16)]);var inst_29376 = (state_29411[(17)]);var inst_29390__$1 = inst_29371.call(null,inst_29376);var state_29411__$1 = (function (){var statearr_29426 = state_29411;(statearr_29426[(15)] = inst_29390__$1);
return statearr_29426;
})();if(cljs.core.truth_(inst_29390__$1))
{var statearr_29427_29464 = state_29411__$1;(statearr_29427_29464[(1)] = (17));
} else
{var statearr_29428_29465 = state_29411__$1;(statearr_29428_29465[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (2)))
{var inst_29350 = (state_29411[(9)]);var inst_29353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29350);var state_29411__$1 = state_29411;var statearr_29429_29466 = state_29411__$1;(statearr_29429_29466[(2)] = inst_29353);
(statearr_29429_29466[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (23)))
{var inst_29401 = (state_29411[(2)]);var state_29411__$1 = state_29411;var statearr_29430_29467 = state_29411__$1;(statearr_29430_29467[(2)] = inst_29401);
(statearr_29430_29467[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (19)))
{var inst_29398 = (state_29411[(2)]);var state_29411__$1 = state_29411;if(cljs.core.truth_(inst_29398))
{var statearr_29431_29468 = state_29411__$1;(statearr_29431_29468[(1)] = (20));
} else
{var statearr_29432_29469 = state_29411__$1;(statearr_29432_29469[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (11)))
{var inst_29375 = (state_29411[(8)]);var inst_29381 = (inst_29375 == null);var state_29411__$1 = state_29411;if(cljs.core.truth_(inst_29381))
{var statearr_29433_29470 = state_29411__$1;(statearr_29433_29470[(1)] = (14));
} else
{var statearr_29434_29471 = state_29411__$1;(statearr_29434_29471[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (9)))
{var inst_29368 = (state_29411[(13)]);var inst_29368__$1 = (state_29411[(2)]);var inst_29369 = cljs.core.get.call(null,inst_29368__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29370 = cljs.core.get.call(null,inst_29368__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29371 = cljs.core.get.call(null,inst_29368__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29411__$1 = (function (){var statearr_29435 = state_29411;(statearr_29435[(16)] = inst_29371);
(statearr_29435[(13)] = inst_29368__$1);
(statearr_29435[(18)] = inst_29370);
return statearr_29435;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29411__$1,(10),inst_29369);
} else
{if((state_val_29412 === (5)))
{var inst_29360 = (state_29411[(7)]);var inst_29363 = cljs.core.seq_QMARK_.call(null,inst_29360);var state_29411__$1 = state_29411;if(inst_29363)
{var statearr_29436_29472 = state_29411__$1;(statearr_29436_29472[(1)] = (7));
} else
{var statearr_29437_29473 = state_29411__$1;(statearr_29437_29473[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (14)))
{var inst_29376 = (state_29411[(17)]);var inst_29383 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29376);var state_29411__$1 = state_29411;var statearr_29438_29474 = state_29411__$1;(statearr_29438_29474[(2)] = inst_29383);
(statearr_29438_29474[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (16)))
{var inst_29386 = (state_29411[(2)]);var inst_29387 = calc_state.call(null);var inst_29360 = inst_29387;var state_29411__$1 = (function (){var statearr_29439 = state_29411;(statearr_29439[(19)] = inst_29386);
(statearr_29439[(7)] = inst_29360);
return statearr_29439;
})();var statearr_29440_29475 = state_29411__$1;(statearr_29440_29475[(2)] = null);
(statearr_29440_29475[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (10)))
{var inst_29375 = (state_29411[(8)]);var inst_29376 = (state_29411[(17)]);var inst_29374 = (state_29411[(2)]);var inst_29375__$1 = cljs.core.nth.call(null,inst_29374,(0),null);var inst_29376__$1 = cljs.core.nth.call(null,inst_29374,(1),null);var inst_29377 = (inst_29375__$1 == null);var inst_29378 = cljs.core._EQ_.call(null,inst_29376__$1,change);var inst_29379 = (inst_29377) || (inst_29378);var state_29411__$1 = (function (){var statearr_29441 = state_29411;(statearr_29441[(8)] = inst_29375__$1);
(statearr_29441[(17)] = inst_29376__$1);
return statearr_29441;
})();if(cljs.core.truth_(inst_29379))
{var statearr_29442_29476 = state_29411__$1;(statearr_29442_29476[(1)] = (11));
} else
{var statearr_29443_29477 = state_29411__$1;(statearr_29443_29477[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (18)))
{var inst_29371 = (state_29411[(16)]);var inst_29370 = (state_29411[(18)]);var inst_29376 = (state_29411[(17)]);var inst_29393 = cljs.core.empty_QMARK_.call(null,inst_29371);var inst_29394 = inst_29370.call(null,inst_29376);var inst_29395 = cljs.core.not.call(null,inst_29394);var inst_29396 = (inst_29393) && (inst_29395);var state_29411__$1 = state_29411;var statearr_29444_29478 = state_29411__$1;(statearr_29444_29478[(2)] = inst_29396);
(statearr_29444_29478[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29412 === (8)))
{var inst_29360 = (state_29411[(7)]);var state_29411__$1 = state_29411;var statearr_29445_29479 = state_29411__$1;(statearr_29445_29479[(2)] = inst_29360);
(statearr_29445_29479[(1)] = (9));
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
});})(c__5708__auto___29453,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___29453,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29449[(0)] = state_machine__5694__auto__);
(statearr_29449[(1)] = (1));
return statearr_29449;
});
var state_machine__5694__auto____1 = (function (state_29411){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29411);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29450){if((e29450 instanceof Object))
{var ex__5697__auto__ = e29450;var statearr_29451_29480 = state_29411;(statearr_29451_29480[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29411);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29450;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29481 = state_29411;
state_29411 = G__29481;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29411){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29453,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_29452 = f__5709__auto__.call(null);(statearr_29452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29453);
return statearr_29452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29453,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj29483 = {};return obj29483;
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
return (function (p1__29484_SHARP_){if(cljs.core.truth_(p1__29484_SHARP_.call(null,topic)))
{return p1__29484_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29484_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29609 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29610){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29610 = meta29610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29609.cljs$lang$type = true;
cljs.core.async.t29609.cljs$lang$ctorStr = "cljs.core.async/t29609";
cljs.core.async.t29609.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29609");
});})(mults,ensure_mult))
;
cljs.core.async.t29609.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29609.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29609.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29609.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29611){var self__ = this;
var _29611__$1 = this;return self__.meta29610;
});})(mults,ensure_mult))
;
cljs.core.async.t29609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29611,meta29610__$1){var self__ = this;
var _29611__$1 = this;return (new cljs.core.async.t29609(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29610__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29609 = ((function (mults,ensure_mult){
return (function __GT_t29609(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29610){return (new cljs.core.async.t29609(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29610));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29609(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___29733 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29733,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29733,mults,ensure_mult,p){
return (function (state_29685){var state_val_29686 = (state_29685[(1)]);if((state_val_29686 === (7)))
{var inst_29681 = (state_29685[(2)]);var state_29685__$1 = state_29685;var statearr_29687_29734 = state_29685__$1;(statearr_29687_29734[(2)] = inst_29681);
(statearr_29687_29734[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (20)))
{var state_29685__$1 = state_29685;var statearr_29688_29735 = state_29685__$1;(statearr_29688_29735[(2)] = null);
(statearr_29688_29735[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (1)))
{var state_29685__$1 = state_29685;var statearr_29689_29736 = state_29685__$1;(statearr_29689_29736[(2)] = null);
(statearr_29689_29736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (24)))
{var inst_29614 = (state_29685[(7)]);var inst_29664 = (state_29685[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29685,(23),Object,null,(22));var inst_29671 = cljs.core.async.muxch_STAR_.call(null,inst_29664);var state_29685__$1 = state_29685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29685__$1,(25),inst_29671,inst_29614);
} else
{if((state_val_29686 === (4)))
{var inst_29614 = (state_29685[(7)]);var inst_29614__$1 = (state_29685[(2)]);var inst_29615 = (inst_29614__$1 == null);var state_29685__$1 = (function (){var statearr_29690 = state_29685;(statearr_29690[(7)] = inst_29614__$1);
return statearr_29690;
})();if(cljs.core.truth_(inst_29615))
{var statearr_29691_29737 = state_29685__$1;(statearr_29691_29737[(1)] = (5));
} else
{var statearr_29692_29738 = state_29685__$1;(statearr_29692_29738[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (15)))
{var inst_29656 = (state_29685[(2)]);var state_29685__$1 = state_29685;var statearr_29693_29739 = state_29685__$1;(statearr_29693_29739[(2)] = inst_29656);
(statearr_29693_29739[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (21)))
{var inst_29678 = (state_29685[(2)]);var state_29685__$1 = (function (){var statearr_29694 = state_29685;(statearr_29694[(9)] = inst_29678);
return statearr_29694;
})();var statearr_29695_29740 = state_29685__$1;(statearr_29695_29740[(2)] = null);
(statearr_29695_29740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (13)))
{var inst_29638 = (state_29685[(10)]);var inst_29640 = cljs.core.chunked_seq_QMARK_.call(null,inst_29638);var state_29685__$1 = state_29685;if(inst_29640)
{var statearr_29696_29741 = state_29685__$1;(statearr_29696_29741[(1)] = (16));
} else
{var statearr_29697_29742 = state_29685__$1;(statearr_29697_29742[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (22)))
{var inst_29675 = (state_29685[(2)]);var state_29685__$1 = state_29685;var statearr_29698_29743 = state_29685__$1;(statearr_29698_29743[(2)] = inst_29675);
(statearr_29698_29743[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (6)))
{var inst_29614 = (state_29685[(7)]);var inst_29664 = (state_29685[(8)]);var inst_29662 = (state_29685[(11)]);var inst_29662__$1 = topic_fn.call(null,inst_29614);var inst_29663 = cljs.core.deref.call(null,mults);var inst_29664__$1 = cljs.core.get.call(null,inst_29663,inst_29662__$1);var state_29685__$1 = (function (){var statearr_29699 = state_29685;(statearr_29699[(8)] = inst_29664__$1);
(statearr_29699[(11)] = inst_29662__$1);
return statearr_29699;
})();if(cljs.core.truth_(inst_29664__$1))
{var statearr_29700_29744 = state_29685__$1;(statearr_29700_29744[(1)] = (19));
} else
{var statearr_29701_29745 = state_29685__$1;(statearr_29701_29745[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (25)))
{var inst_29673 = (state_29685[(2)]);var state_29685__$1 = state_29685;var statearr_29702_29746 = state_29685__$1;(statearr_29702_29746[(2)] = inst_29673);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29685__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (17)))
{var inst_29638 = (state_29685[(10)]);var inst_29647 = cljs.core.first.call(null,inst_29638);var inst_29648 = cljs.core.async.muxch_STAR_.call(null,inst_29647);var inst_29649 = cljs.core.async.close_BANG_.call(null,inst_29648);var inst_29650 = cljs.core.next.call(null,inst_29638);var inst_29624 = inst_29650;var inst_29625 = null;var inst_29626 = (0);var inst_29627 = (0);var state_29685__$1 = (function (){var statearr_29703 = state_29685;(statearr_29703[(12)] = inst_29649);
(statearr_29703[(13)] = inst_29627);
(statearr_29703[(14)] = inst_29624);
(statearr_29703[(15)] = inst_29625);
(statearr_29703[(16)] = inst_29626);
return statearr_29703;
})();var statearr_29704_29747 = state_29685__$1;(statearr_29704_29747[(2)] = null);
(statearr_29704_29747[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (3)))
{var inst_29683 = (state_29685[(2)]);var state_29685__$1 = state_29685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29685__$1,inst_29683);
} else
{if((state_val_29686 === (12)))
{var inst_29658 = (state_29685[(2)]);var state_29685__$1 = state_29685;var statearr_29705_29748 = state_29685__$1;(statearr_29705_29748[(2)] = inst_29658);
(statearr_29705_29748[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (2)))
{var state_29685__$1 = state_29685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29685__$1,(4),ch);
} else
{if((state_val_29686 === (23)))
{var inst_29662 = (state_29685[(11)]);var inst_29666 = (state_29685[(2)]);var inst_29667 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29662);var state_29685__$1 = (function (){var statearr_29706 = state_29685;(statearr_29706[(17)] = inst_29666);
return statearr_29706;
})();var statearr_29707_29749 = state_29685__$1;(statearr_29707_29749[(2)] = inst_29667);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29685__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (19)))
{var state_29685__$1 = state_29685;var statearr_29708_29750 = state_29685__$1;(statearr_29708_29750[(2)] = null);
(statearr_29708_29750[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (11)))
{var inst_29638 = (state_29685[(10)]);var inst_29624 = (state_29685[(14)]);var inst_29638__$1 = cljs.core.seq.call(null,inst_29624);var state_29685__$1 = (function (){var statearr_29709 = state_29685;(statearr_29709[(10)] = inst_29638__$1);
return statearr_29709;
})();if(inst_29638__$1)
{var statearr_29710_29751 = state_29685__$1;(statearr_29710_29751[(1)] = (13));
} else
{var statearr_29711_29752 = state_29685__$1;(statearr_29711_29752[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (9)))
{var inst_29660 = (state_29685[(2)]);var state_29685__$1 = state_29685;var statearr_29712_29753 = state_29685__$1;(statearr_29712_29753[(2)] = inst_29660);
(statearr_29712_29753[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (5)))
{var inst_29621 = cljs.core.deref.call(null,mults);var inst_29622 = cljs.core.vals.call(null,inst_29621);var inst_29623 = cljs.core.seq.call(null,inst_29622);var inst_29624 = inst_29623;var inst_29625 = null;var inst_29626 = (0);var inst_29627 = (0);var state_29685__$1 = (function (){var statearr_29713 = state_29685;(statearr_29713[(13)] = inst_29627);
(statearr_29713[(14)] = inst_29624);
(statearr_29713[(15)] = inst_29625);
(statearr_29713[(16)] = inst_29626);
return statearr_29713;
})();var statearr_29714_29754 = state_29685__$1;(statearr_29714_29754[(2)] = null);
(statearr_29714_29754[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (14)))
{var state_29685__$1 = state_29685;var statearr_29718_29755 = state_29685__$1;(statearr_29718_29755[(2)] = null);
(statearr_29718_29755[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (16)))
{var inst_29638 = (state_29685[(10)]);var inst_29642 = cljs.core.chunk_first.call(null,inst_29638);var inst_29643 = cljs.core.chunk_rest.call(null,inst_29638);var inst_29644 = cljs.core.count.call(null,inst_29642);var inst_29624 = inst_29643;var inst_29625 = inst_29642;var inst_29626 = inst_29644;var inst_29627 = (0);var state_29685__$1 = (function (){var statearr_29719 = state_29685;(statearr_29719[(13)] = inst_29627);
(statearr_29719[(14)] = inst_29624);
(statearr_29719[(15)] = inst_29625);
(statearr_29719[(16)] = inst_29626);
return statearr_29719;
})();var statearr_29720_29756 = state_29685__$1;(statearr_29720_29756[(2)] = null);
(statearr_29720_29756[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (10)))
{var inst_29627 = (state_29685[(13)]);var inst_29624 = (state_29685[(14)]);var inst_29625 = (state_29685[(15)]);var inst_29626 = (state_29685[(16)]);var inst_29632 = cljs.core._nth.call(null,inst_29625,inst_29627);var inst_29633 = cljs.core.async.muxch_STAR_.call(null,inst_29632);var inst_29634 = cljs.core.async.close_BANG_.call(null,inst_29633);var inst_29635 = (inst_29627 + (1));var tmp29715 = inst_29624;var tmp29716 = inst_29625;var tmp29717 = inst_29626;var inst_29624__$1 = tmp29715;var inst_29625__$1 = tmp29716;var inst_29626__$1 = tmp29717;var inst_29627__$1 = inst_29635;var state_29685__$1 = (function (){var statearr_29721 = state_29685;(statearr_29721[(13)] = inst_29627__$1);
(statearr_29721[(14)] = inst_29624__$1);
(statearr_29721[(15)] = inst_29625__$1);
(statearr_29721[(18)] = inst_29634);
(statearr_29721[(16)] = inst_29626__$1);
return statearr_29721;
})();var statearr_29722_29757 = state_29685__$1;(statearr_29722_29757[(2)] = null);
(statearr_29722_29757[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (18)))
{var inst_29653 = (state_29685[(2)]);var state_29685__$1 = state_29685;var statearr_29723_29758 = state_29685__$1;(statearr_29723_29758[(2)] = inst_29653);
(statearr_29723_29758[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29686 === (8)))
{var inst_29627 = (state_29685[(13)]);var inst_29626 = (state_29685[(16)]);var inst_29629 = (inst_29627 < inst_29626);var inst_29630 = inst_29629;var state_29685__$1 = state_29685;if(cljs.core.truth_(inst_29630))
{var statearr_29724_29759 = state_29685__$1;(statearr_29724_29759[(1)] = (10));
} else
{var statearr_29725_29760 = state_29685__$1;(statearr_29725_29760[(1)] = (11));
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
});})(c__5708__auto___29733,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___29733,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29729[(0)] = state_machine__5694__auto__);
(statearr_29729[(1)] = (1));
return statearr_29729;
});
var state_machine__5694__auto____1 = (function (state_29685){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29730){if((e29730 instanceof Object))
{var ex__5697__auto__ = e29730;var statearr_29731_29761 = state_29685;(statearr_29731_29761[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29730;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29762 = state_29685;
state_29685 = G__29762;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29685){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29733,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_29732 = f__5709__auto__.call(null);(statearr_29732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29733);
return statearr_29732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29733,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___29899 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29899,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29899,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29869){var state_val_29870 = (state_29869[(1)]);if((state_val_29870 === (7)))
{var state_29869__$1 = state_29869;var statearr_29871_29900 = state_29869__$1;(statearr_29871_29900[(2)] = null);
(statearr_29871_29900[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (1)))
{var state_29869__$1 = state_29869;var statearr_29872_29901 = state_29869__$1;(statearr_29872_29901[(2)] = null);
(statearr_29872_29901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (4)))
{var inst_29833 = (state_29869[(7)]);var inst_29835 = (inst_29833 < cnt);var state_29869__$1 = state_29869;if(cljs.core.truth_(inst_29835))
{var statearr_29873_29902 = state_29869__$1;(statearr_29873_29902[(1)] = (6));
} else
{var statearr_29874_29903 = state_29869__$1;(statearr_29874_29903[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (15)))
{var inst_29865 = (state_29869[(2)]);var state_29869__$1 = state_29869;var statearr_29875_29904 = state_29869__$1;(statearr_29875_29904[(2)] = inst_29865);
(statearr_29875_29904[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (13)))
{var inst_29858 = cljs.core.async.close_BANG_.call(null,out);var state_29869__$1 = state_29869;var statearr_29876_29905 = state_29869__$1;(statearr_29876_29905[(2)] = inst_29858);
(statearr_29876_29905[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (6)))
{var state_29869__$1 = state_29869;var statearr_29877_29906 = state_29869__$1;(statearr_29877_29906[(2)] = null);
(statearr_29877_29906[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (3)))
{var inst_29867 = (state_29869[(2)]);var state_29869__$1 = state_29869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29869__$1,inst_29867);
} else
{if((state_val_29870 === (12)))
{var inst_29855 = (state_29869[(8)]);var inst_29855__$1 = (state_29869[(2)]);var inst_29856 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29855__$1);var state_29869__$1 = (function (){var statearr_29878 = state_29869;(statearr_29878[(8)] = inst_29855__$1);
return statearr_29878;
})();if(cljs.core.truth_(inst_29856))
{var statearr_29879_29907 = state_29869__$1;(statearr_29879_29907[(1)] = (13));
} else
{var statearr_29880_29908 = state_29869__$1;(statearr_29880_29908[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (2)))
{var inst_29832 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29833 = (0);var state_29869__$1 = (function (){var statearr_29881 = state_29869;(statearr_29881[(9)] = inst_29832);
(statearr_29881[(7)] = inst_29833);
return statearr_29881;
})();var statearr_29882_29909 = state_29869__$1;(statearr_29882_29909[(2)] = null);
(statearr_29882_29909[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (11)))
{var inst_29833 = (state_29869[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29869,(10),Object,null,(9));var inst_29842 = chs__$1.call(null,inst_29833);var inst_29843 = done.call(null,inst_29833);var inst_29844 = cljs.core.async.take_BANG_.call(null,inst_29842,inst_29843);var state_29869__$1 = state_29869;var statearr_29883_29910 = state_29869__$1;(statearr_29883_29910[(2)] = inst_29844);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29869__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (9)))
{var inst_29833 = (state_29869[(7)]);var inst_29846 = (state_29869[(2)]);var inst_29847 = (inst_29833 + (1));var inst_29833__$1 = inst_29847;var state_29869__$1 = (function (){var statearr_29884 = state_29869;(statearr_29884[(7)] = inst_29833__$1);
(statearr_29884[(10)] = inst_29846);
return statearr_29884;
})();var statearr_29885_29911 = state_29869__$1;(statearr_29885_29911[(2)] = null);
(statearr_29885_29911[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (5)))
{var inst_29853 = (state_29869[(2)]);var state_29869__$1 = (function (){var statearr_29886 = state_29869;(statearr_29886[(11)] = inst_29853);
return statearr_29886;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29869__$1,(12),dchan);
} else
{if((state_val_29870 === (14)))
{var inst_29855 = (state_29869[(8)]);var inst_29860 = cljs.core.apply.call(null,f,inst_29855);var state_29869__$1 = state_29869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29869__$1,(16),out,inst_29860);
} else
{if((state_val_29870 === (16)))
{var inst_29862 = (state_29869[(2)]);var state_29869__$1 = (function (){var statearr_29887 = state_29869;(statearr_29887[(12)] = inst_29862);
return statearr_29887;
})();var statearr_29888_29912 = state_29869__$1;(statearr_29888_29912[(2)] = null);
(statearr_29888_29912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (10)))
{var inst_29837 = (state_29869[(2)]);var inst_29838 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29869__$1 = (function (){var statearr_29889 = state_29869;(statearr_29889[(13)] = inst_29837);
return statearr_29889;
})();var statearr_29890_29913 = state_29869__$1;(statearr_29890_29913[(2)] = inst_29838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29869__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29870 === (8)))
{var inst_29851 = (state_29869[(2)]);var state_29869__$1 = state_29869;var statearr_29891_29914 = state_29869__$1;(statearr_29891_29914[(2)] = inst_29851);
(statearr_29891_29914[(1)] = (5));
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
});})(c__5708__auto___29899,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___29899,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29895[(0)] = state_machine__5694__auto__);
(statearr_29895[(1)] = (1));
return statearr_29895;
});
var state_machine__5694__auto____1 = (function (state_29869){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29869);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29896){if((e29896 instanceof Object))
{var ex__5697__auto__ = e29896;var statearr_29897_29915 = state_29869;(statearr_29897_29915[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29896;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29916 = state_29869;
state_29869 = G__29916;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29869){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29899,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_29898 = f__5709__auto__.call(null);(statearr_29898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29899);
return statearr_29898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29899,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30024 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30024,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30024,out){
return (function (state_30000){var state_val_30001 = (state_30000[(1)]);if((state_val_30001 === (7)))
{var inst_29980 = (state_30000[(7)]);var inst_29979 = (state_30000[(8)]);var inst_29979__$1 = (state_30000[(2)]);var inst_29980__$1 = cljs.core.nth.call(null,inst_29979__$1,(0),null);var inst_29981 = cljs.core.nth.call(null,inst_29979__$1,(1),null);var inst_29982 = (inst_29980__$1 == null);var state_30000__$1 = (function (){var statearr_30002 = state_30000;(statearr_30002[(7)] = inst_29980__$1);
(statearr_30002[(9)] = inst_29981);
(statearr_30002[(8)] = inst_29979__$1);
return statearr_30002;
})();if(cljs.core.truth_(inst_29982))
{var statearr_30003_30025 = state_30000__$1;(statearr_30003_30025[(1)] = (8));
} else
{var statearr_30004_30026 = state_30000__$1;(statearr_30004_30026[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30001 === (1)))
{var inst_29971 = cljs.core.vec.call(null,chs);var inst_29972 = inst_29971;var state_30000__$1 = (function (){var statearr_30005 = state_30000;(statearr_30005[(10)] = inst_29972);
return statearr_30005;
})();var statearr_30006_30027 = state_30000__$1;(statearr_30006_30027[(2)] = null);
(statearr_30006_30027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30001 === (4)))
{var inst_29972 = (state_30000[(10)]);var state_30000__$1 = state_30000;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30000__$1,(7),inst_29972);
} else
{if((state_val_30001 === (6)))
{var inst_29996 = (state_30000[(2)]);var state_30000__$1 = state_30000;var statearr_30007_30028 = state_30000__$1;(statearr_30007_30028[(2)] = inst_29996);
(statearr_30007_30028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30001 === (3)))
{var inst_29998 = (state_30000[(2)]);var state_30000__$1 = state_30000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30000__$1,inst_29998);
} else
{if((state_val_30001 === (2)))
{var inst_29972 = (state_30000[(10)]);var inst_29974 = cljs.core.count.call(null,inst_29972);var inst_29975 = (inst_29974 > (0));var state_30000__$1 = state_30000;if(cljs.core.truth_(inst_29975))
{var statearr_30009_30029 = state_30000__$1;(statearr_30009_30029[(1)] = (4));
} else
{var statearr_30010_30030 = state_30000__$1;(statearr_30010_30030[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30001 === (11)))
{var inst_29972 = (state_30000[(10)]);var inst_29989 = (state_30000[(2)]);var tmp30008 = inst_29972;var inst_29972__$1 = tmp30008;var state_30000__$1 = (function (){var statearr_30011 = state_30000;(statearr_30011[(11)] = inst_29989);
(statearr_30011[(10)] = inst_29972__$1);
return statearr_30011;
})();var statearr_30012_30031 = state_30000__$1;(statearr_30012_30031[(2)] = null);
(statearr_30012_30031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30001 === (9)))
{var inst_29980 = (state_30000[(7)]);var state_30000__$1 = state_30000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30000__$1,(11),out,inst_29980);
} else
{if((state_val_30001 === (5)))
{var inst_29994 = cljs.core.async.close_BANG_.call(null,out);var state_30000__$1 = state_30000;var statearr_30013_30032 = state_30000__$1;(statearr_30013_30032[(2)] = inst_29994);
(statearr_30013_30032[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30001 === (10)))
{var inst_29992 = (state_30000[(2)]);var state_30000__$1 = state_30000;var statearr_30014_30033 = state_30000__$1;(statearr_30014_30033[(2)] = inst_29992);
(statearr_30014_30033[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30001 === (8)))
{var inst_29980 = (state_30000[(7)]);var inst_29981 = (state_30000[(9)]);var inst_29979 = (state_30000[(8)]);var inst_29972 = (state_30000[(10)]);var inst_29984 = (function (){var c = inst_29981;var v = inst_29980;var vec__29977 = inst_29979;var cs = inst_29972;return ((function (c,v,vec__29977,cs,inst_29980,inst_29981,inst_29979,inst_29972,state_val_30001,c__5708__auto___30024,out){
return (function (p1__29917_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29917_SHARP_);
});
;})(c,v,vec__29977,cs,inst_29980,inst_29981,inst_29979,inst_29972,state_val_30001,c__5708__auto___30024,out))
})();var inst_29985 = cljs.core.filterv.call(null,inst_29984,inst_29972);var inst_29972__$1 = inst_29985;var state_30000__$1 = (function (){var statearr_30015 = state_30000;(statearr_30015[(10)] = inst_29972__$1);
return statearr_30015;
})();var statearr_30016_30034 = state_30000__$1;(statearr_30016_30034[(2)] = null);
(statearr_30016_30034[(1)] = (2));
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
});})(c__5708__auto___30024,out))
;return ((function (switch__5693__auto__,c__5708__auto___30024,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30020 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30020[(0)] = state_machine__5694__auto__);
(statearr_30020[(1)] = (1));
return statearr_30020;
});
var state_machine__5694__auto____1 = (function (state_30000){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30000);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30021){if((e30021 instanceof Object))
{var ex__5697__auto__ = e30021;var statearr_30022_30035 = state_30000;(statearr_30022_30035[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30021;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30036 = state_30000;
state_30000 = G__30036;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30000){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30024,out))
})();var state__5710__auto__ = (function (){var statearr_30023 = f__5709__auto__.call(null);(statearr_30023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30024);
return statearr_30023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30024,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30129 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30129,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30129,out){
return (function (state_30106){var state_val_30107 = (state_30106[(1)]);if((state_val_30107 === (7)))
{var inst_30088 = (state_30106[(7)]);var inst_30088__$1 = (state_30106[(2)]);var inst_30089 = (inst_30088__$1 == null);var inst_30090 = cljs.core.not.call(null,inst_30089);var state_30106__$1 = (function (){var statearr_30108 = state_30106;(statearr_30108[(7)] = inst_30088__$1);
return statearr_30108;
})();if(inst_30090)
{var statearr_30109_30130 = state_30106__$1;(statearr_30109_30130[(1)] = (8));
} else
{var statearr_30110_30131 = state_30106__$1;(statearr_30110_30131[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (1)))
{var inst_30083 = (0);var state_30106__$1 = (function (){var statearr_30111 = state_30106;(statearr_30111[(8)] = inst_30083);
return statearr_30111;
})();var statearr_30112_30132 = state_30106__$1;(statearr_30112_30132[(2)] = null);
(statearr_30112_30132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (4)))
{var state_30106__$1 = state_30106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30106__$1,(7),ch);
} else
{if((state_val_30107 === (6)))
{var inst_30101 = (state_30106[(2)]);var state_30106__$1 = state_30106;var statearr_30113_30133 = state_30106__$1;(statearr_30113_30133[(2)] = inst_30101);
(statearr_30113_30133[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (3)))
{var inst_30103 = (state_30106[(2)]);var inst_30104 = cljs.core.async.close_BANG_.call(null,out);var state_30106__$1 = (function (){var statearr_30114 = state_30106;(statearr_30114[(9)] = inst_30103);
return statearr_30114;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30106__$1,inst_30104);
} else
{if((state_val_30107 === (2)))
{var inst_30083 = (state_30106[(8)]);var inst_30085 = (inst_30083 < n);var state_30106__$1 = state_30106;if(cljs.core.truth_(inst_30085))
{var statearr_30115_30134 = state_30106__$1;(statearr_30115_30134[(1)] = (4));
} else
{var statearr_30116_30135 = state_30106__$1;(statearr_30116_30135[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (11)))
{var inst_30083 = (state_30106[(8)]);var inst_30093 = (state_30106[(2)]);var inst_30094 = (inst_30083 + (1));var inst_30083__$1 = inst_30094;var state_30106__$1 = (function (){var statearr_30117 = state_30106;(statearr_30117[(8)] = inst_30083__$1);
(statearr_30117[(10)] = inst_30093);
return statearr_30117;
})();var statearr_30118_30136 = state_30106__$1;(statearr_30118_30136[(2)] = null);
(statearr_30118_30136[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (9)))
{var state_30106__$1 = state_30106;var statearr_30119_30137 = state_30106__$1;(statearr_30119_30137[(2)] = null);
(statearr_30119_30137[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (5)))
{var state_30106__$1 = state_30106;var statearr_30120_30138 = state_30106__$1;(statearr_30120_30138[(2)] = null);
(statearr_30120_30138[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (10)))
{var inst_30098 = (state_30106[(2)]);var state_30106__$1 = state_30106;var statearr_30121_30139 = state_30106__$1;(statearr_30121_30139[(2)] = inst_30098);
(statearr_30121_30139[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30107 === (8)))
{var inst_30088 = (state_30106[(7)]);var state_30106__$1 = state_30106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30106__$1,(11),out,inst_30088);
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
});})(c__5708__auto___30129,out))
;return ((function (switch__5693__auto__,c__5708__auto___30129,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30125 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30125[(0)] = state_machine__5694__auto__);
(statearr_30125[(1)] = (1));
return statearr_30125;
});
var state_machine__5694__auto____1 = (function (state_30106){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30106);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30126){if((e30126 instanceof Object))
{var ex__5697__auto__ = e30126;var statearr_30127_30140 = state_30106;(statearr_30127_30140[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30126;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30141 = state_30106;
state_30106 = G__30141;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30106){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30129,out))
})();var state__5710__auto__ = (function (){var statearr_30128 = f__5709__auto__.call(null);(statearr_30128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30129);
return statearr_30128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30129,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30238 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30238,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30238,out){
return (function (state_30213){var state_val_30214 = (state_30213[(1)]);if((state_val_30214 === (7)))
{var inst_30208 = (state_30213[(2)]);var state_30213__$1 = state_30213;var statearr_30215_30239 = state_30213__$1;(statearr_30215_30239[(2)] = inst_30208);
(statearr_30215_30239[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30214 === (1)))
{var inst_30190 = null;var state_30213__$1 = (function (){var statearr_30216 = state_30213;(statearr_30216[(7)] = inst_30190);
return statearr_30216;
})();var statearr_30217_30240 = state_30213__$1;(statearr_30217_30240[(2)] = null);
(statearr_30217_30240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30214 === (4)))
{var inst_30193 = (state_30213[(8)]);var inst_30193__$1 = (state_30213[(2)]);var inst_30194 = (inst_30193__$1 == null);var inst_30195 = cljs.core.not.call(null,inst_30194);var state_30213__$1 = (function (){var statearr_30218 = state_30213;(statearr_30218[(8)] = inst_30193__$1);
return statearr_30218;
})();if(inst_30195)
{var statearr_30219_30241 = state_30213__$1;(statearr_30219_30241[(1)] = (5));
} else
{var statearr_30220_30242 = state_30213__$1;(statearr_30220_30242[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30214 === (6)))
{var state_30213__$1 = state_30213;var statearr_30221_30243 = state_30213__$1;(statearr_30221_30243[(2)] = null);
(statearr_30221_30243[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30214 === (3)))
{var inst_30210 = (state_30213[(2)]);var inst_30211 = cljs.core.async.close_BANG_.call(null,out);var state_30213__$1 = (function (){var statearr_30222 = state_30213;(statearr_30222[(9)] = inst_30210);
return statearr_30222;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30213__$1,inst_30211);
} else
{if((state_val_30214 === (2)))
{var state_30213__$1 = state_30213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(4),ch);
} else
{if((state_val_30214 === (11)))
{var inst_30193 = (state_30213[(8)]);var inst_30202 = (state_30213[(2)]);var inst_30190 = inst_30193;var state_30213__$1 = (function (){var statearr_30223 = state_30213;(statearr_30223[(7)] = inst_30190);
(statearr_30223[(10)] = inst_30202);
return statearr_30223;
})();var statearr_30224_30244 = state_30213__$1;(statearr_30224_30244[(2)] = null);
(statearr_30224_30244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30214 === (9)))
{var inst_30193 = (state_30213[(8)]);var state_30213__$1 = state_30213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30213__$1,(11),out,inst_30193);
} else
{if((state_val_30214 === (5)))
{var inst_30193 = (state_30213[(8)]);var inst_30190 = (state_30213[(7)]);var inst_30197 = cljs.core._EQ_.call(null,inst_30193,inst_30190);var state_30213__$1 = state_30213;if(inst_30197)
{var statearr_30226_30245 = state_30213__$1;(statearr_30226_30245[(1)] = (8));
} else
{var statearr_30227_30246 = state_30213__$1;(statearr_30227_30246[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30214 === (10)))
{var inst_30205 = (state_30213[(2)]);var state_30213__$1 = state_30213;var statearr_30228_30247 = state_30213__$1;(statearr_30228_30247[(2)] = inst_30205);
(statearr_30228_30247[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30214 === (8)))
{var inst_30190 = (state_30213[(7)]);var tmp30225 = inst_30190;var inst_30190__$1 = tmp30225;var state_30213__$1 = (function (){var statearr_30229 = state_30213;(statearr_30229[(7)] = inst_30190__$1);
return statearr_30229;
})();var statearr_30230_30248 = state_30213__$1;(statearr_30230_30248[(2)] = null);
(statearr_30230_30248[(1)] = (2));
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
});})(c__5708__auto___30238,out))
;return ((function (switch__5693__auto__,c__5708__auto___30238,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30234 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30234[(0)] = state_machine__5694__auto__);
(statearr_30234[(1)] = (1));
return statearr_30234;
});
var state_machine__5694__auto____1 = (function (state_30213){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30235){if((e30235 instanceof Object))
{var ex__5697__auto__ = e30235;var statearr_30236_30249 = state_30213;(statearr_30236_30249[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30250 = state_30213;
state_30213 = G__30250;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30213){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30238,out))
})();var state__5710__auto__ = (function (){var statearr_30237 = f__5709__auto__.call(null);(statearr_30237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30238);
return statearr_30237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30238,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30385 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30385,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30385,out){
return (function (state_30355){var state_val_30356 = (state_30355[(1)]);if((state_val_30356 === (7)))
{var inst_30351 = (state_30355[(2)]);var state_30355__$1 = state_30355;var statearr_30357_30386 = state_30355__$1;(statearr_30357_30386[(2)] = inst_30351);
(statearr_30357_30386[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (1)))
{var inst_30318 = (new Array(n));var inst_30319 = inst_30318;var inst_30320 = (0);var state_30355__$1 = (function (){var statearr_30358 = state_30355;(statearr_30358[(7)] = inst_30320);
(statearr_30358[(8)] = inst_30319);
return statearr_30358;
})();var statearr_30359_30387 = state_30355__$1;(statearr_30359_30387[(2)] = null);
(statearr_30359_30387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (4)))
{var inst_30323 = (state_30355[(9)]);var inst_30323__$1 = (state_30355[(2)]);var inst_30324 = (inst_30323__$1 == null);var inst_30325 = cljs.core.not.call(null,inst_30324);var state_30355__$1 = (function (){var statearr_30360 = state_30355;(statearr_30360[(9)] = inst_30323__$1);
return statearr_30360;
})();if(inst_30325)
{var statearr_30361_30388 = state_30355__$1;(statearr_30361_30388[(1)] = (5));
} else
{var statearr_30362_30389 = state_30355__$1;(statearr_30362_30389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (15)))
{var inst_30345 = (state_30355[(2)]);var state_30355__$1 = state_30355;var statearr_30363_30390 = state_30355__$1;(statearr_30363_30390[(2)] = inst_30345);
(statearr_30363_30390[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (13)))
{var state_30355__$1 = state_30355;var statearr_30364_30391 = state_30355__$1;(statearr_30364_30391[(2)] = null);
(statearr_30364_30391[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (6)))
{var inst_30320 = (state_30355[(7)]);var inst_30341 = (inst_30320 > (0));var state_30355__$1 = state_30355;if(cljs.core.truth_(inst_30341))
{var statearr_30365_30392 = state_30355__$1;(statearr_30365_30392[(1)] = (12));
} else
{var statearr_30366_30393 = state_30355__$1;(statearr_30366_30393[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (3)))
{var inst_30353 = (state_30355[(2)]);var state_30355__$1 = state_30355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30355__$1,inst_30353);
} else
{if((state_val_30356 === (12)))
{var inst_30319 = (state_30355[(8)]);var inst_30343 = cljs.core.vec.call(null,inst_30319);var state_30355__$1 = state_30355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30355__$1,(15),out,inst_30343);
} else
{if((state_val_30356 === (2)))
{var state_30355__$1 = state_30355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30355__$1,(4),ch);
} else
{if((state_val_30356 === (11)))
{var inst_30335 = (state_30355[(2)]);var inst_30336 = (new Array(n));var inst_30319 = inst_30336;var inst_30320 = (0);var state_30355__$1 = (function (){var statearr_30367 = state_30355;(statearr_30367[(10)] = inst_30335);
(statearr_30367[(7)] = inst_30320);
(statearr_30367[(8)] = inst_30319);
return statearr_30367;
})();var statearr_30368_30394 = state_30355__$1;(statearr_30368_30394[(2)] = null);
(statearr_30368_30394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (9)))
{var inst_30319 = (state_30355[(8)]);var inst_30333 = cljs.core.vec.call(null,inst_30319);var state_30355__$1 = state_30355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30355__$1,(11),out,inst_30333);
} else
{if((state_val_30356 === (5)))
{var inst_30323 = (state_30355[(9)]);var inst_30328 = (state_30355[(11)]);var inst_30320 = (state_30355[(7)]);var inst_30319 = (state_30355[(8)]);var inst_30327 = (inst_30319[inst_30320] = inst_30323);var inst_30328__$1 = (inst_30320 + (1));var inst_30329 = (inst_30328__$1 < n);var state_30355__$1 = (function (){var statearr_30369 = state_30355;(statearr_30369[(12)] = inst_30327);
(statearr_30369[(11)] = inst_30328__$1);
return statearr_30369;
})();if(cljs.core.truth_(inst_30329))
{var statearr_30370_30395 = state_30355__$1;(statearr_30370_30395[(1)] = (8));
} else
{var statearr_30371_30396 = state_30355__$1;(statearr_30371_30396[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (14)))
{var inst_30348 = (state_30355[(2)]);var inst_30349 = cljs.core.async.close_BANG_.call(null,out);var state_30355__$1 = (function (){var statearr_30373 = state_30355;(statearr_30373[(13)] = inst_30348);
return statearr_30373;
})();var statearr_30374_30397 = state_30355__$1;(statearr_30374_30397[(2)] = inst_30349);
(statearr_30374_30397[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (10)))
{var inst_30339 = (state_30355[(2)]);var state_30355__$1 = state_30355;var statearr_30375_30398 = state_30355__$1;(statearr_30375_30398[(2)] = inst_30339);
(statearr_30375_30398[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30356 === (8)))
{var inst_30328 = (state_30355[(11)]);var inst_30319 = (state_30355[(8)]);var tmp30372 = inst_30319;var inst_30319__$1 = tmp30372;var inst_30320 = inst_30328;var state_30355__$1 = (function (){var statearr_30376 = state_30355;(statearr_30376[(7)] = inst_30320);
(statearr_30376[(8)] = inst_30319__$1);
return statearr_30376;
})();var statearr_30377_30399 = state_30355__$1;(statearr_30377_30399[(2)] = null);
(statearr_30377_30399[(1)] = (2));
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
});})(c__5708__auto___30385,out))
;return ((function (switch__5693__auto__,c__5708__auto___30385,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30381[(0)] = state_machine__5694__auto__);
(statearr_30381[(1)] = (1));
return statearr_30381;
});
var state_machine__5694__auto____1 = (function (state_30355){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30355);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30382){if((e30382 instanceof Object))
{var ex__5697__auto__ = e30382;var statearr_30383_30400 = state_30355;(statearr_30383_30400[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30401 = state_30355;
state_30355 = G__30401;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30355){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30385,out))
})();var state__5710__auto__ = (function (){var statearr_30384 = f__5709__auto__.call(null);(statearr_30384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30385);
return statearr_30384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30385,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30544 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30544,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30544,out){
return (function (state_30514){var state_val_30515 = (state_30514[(1)]);if((state_val_30515 === (7)))
{var inst_30510 = (state_30514[(2)]);var state_30514__$1 = state_30514;var statearr_30516_30545 = state_30514__$1;(statearr_30516_30545[(2)] = inst_30510);
(statearr_30516_30545[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (1)))
{var inst_30473 = [];var inst_30474 = inst_30473;var inst_30475 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30514__$1 = (function (){var statearr_30517 = state_30514;(statearr_30517[(7)] = inst_30474);
(statearr_30517[(8)] = inst_30475);
return statearr_30517;
})();var statearr_30518_30546 = state_30514__$1;(statearr_30518_30546[(2)] = null);
(statearr_30518_30546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (4)))
{var inst_30478 = (state_30514[(9)]);var inst_30478__$1 = (state_30514[(2)]);var inst_30479 = (inst_30478__$1 == null);var inst_30480 = cljs.core.not.call(null,inst_30479);var state_30514__$1 = (function (){var statearr_30519 = state_30514;(statearr_30519[(9)] = inst_30478__$1);
return statearr_30519;
})();if(inst_30480)
{var statearr_30520_30547 = state_30514__$1;(statearr_30520_30547[(1)] = (5));
} else
{var statearr_30521_30548 = state_30514__$1;(statearr_30521_30548[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (15)))
{var inst_30504 = (state_30514[(2)]);var state_30514__$1 = state_30514;var statearr_30522_30549 = state_30514__$1;(statearr_30522_30549[(2)] = inst_30504);
(statearr_30522_30549[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (13)))
{var state_30514__$1 = state_30514;var statearr_30523_30550 = state_30514__$1;(statearr_30523_30550[(2)] = null);
(statearr_30523_30550[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (6)))
{var inst_30474 = (state_30514[(7)]);var inst_30499 = inst_30474.length;var inst_30500 = (inst_30499 > (0));var state_30514__$1 = state_30514;if(cljs.core.truth_(inst_30500))
{var statearr_30524_30551 = state_30514__$1;(statearr_30524_30551[(1)] = (12));
} else
{var statearr_30525_30552 = state_30514__$1;(statearr_30525_30552[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (3)))
{var inst_30512 = (state_30514[(2)]);var state_30514__$1 = state_30514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30514__$1,inst_30512);
} else
{if((state_val_30515 === (12)))
{var inst_30474 = (state_30514[(7)]);var inst_30502 = cljs.core.vec.call(null,inst_30474);var state_30514__$1 = state_30514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30514__$1,(15),out,inst_30502);
} else
{if((state_val_30515 === (2)))
{var state_30514__$1 = state_30514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30514__$1,(4),ch);
} else
{if((state_val_30515 === (11)))
{var inst_30478 = (state_30514[(9)]);var inst_30482 = (state_30514[(10)]);var inst_30492 = (state_30514[(2)]);var inst_30493 = [];var inst_30494 = inst_30493.push(inst_30478);var inst_30474 = inst_30493;var inst_30475 = inst_30482;var state_30514__$1 = (function (){var statearr_30526 = state_30514;(statearr_30526[(7)] = inst_30474);
(statearr_30526[(8)] = inst_30475);
(statearr_30526[(11)] = inst_30492);
(statearr_30526[(12)] = inst_30494);
return statearr_30526;
})();var statearr_30527_30553 = state_30514__$1;(statearr_30527_30553[(2)] = null);
(statearr_30527_30553[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (9)))
{var inst_30474 = (state_30514[(7)]);var inst_30490 = cljs.core.vec.call(null,inst_30474);var state_30514__$1 = state_30514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30514__$1,(11),out,inst_30490);
} else
{if((state_val_30515 === (5)))
{var inst_30478 = (state_30514[(9)]);var inst_30475 = (state_30514[(8)]);var inst_30482 = (state_30514[(10)]);var inst_30482__$1 = f.call(null,inst_30478);var inst_30483 = cljs.core._EQ_.call(null,inst_30482__$1,inst_30475);var inst_30484 = cljs.core.keyword_identical_QMARK_.call(null,inst_30475,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30485 = (inst_30483) || (inst_30484);var state_30514__$1 = (function (){var statearr_30528 = state_30514;(statearr_30528[(10)] = inst_30482__$1);
return statearr_30528;
})();if(cljs.core.truth_(inst_30485))
{var statearr_30529_30554 = state_30514__$1;(statearr_30529_30554[(1)] = (8));
} else
{var statearr_30530_30555 = state_30514__$1;(statearr_30530_30555[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (14)))
{var inst_30507 = (state_30514[(2)]);var inst_30508 = cljs.core.async.close_BANG_.call(null,out);var state_30514__$1 = (function (){var statearr_30532 = state_30514;(statearr_30532[(13)] = inst_30507);
return statearr_30532;
})();var statearr_30533_30556 = state_30514__$1;(statearr_30533_30556[(2)] = inst_30508);
(statearr_30533_30556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (10)))
{var inst_30497 = (state_30514[(2)]);var state_30514__$1 = state_30514;var statearr_30534_30557 = state_30514__$1;(statearr_30534_30557[(2)] = inst_30497);
(statearr_30534_30557[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30515 === (8)))
{var inst_30478 = (state_30514[(9)]);var inst_30474 = (state_30514[(7)]);var inst_30482 = (state_30514[(10)]);var inst_30487 = inst_30474.push(inst_30478);var tmp30531 = inst_30474;var inst_30474__$1 = tmp30531;var inst_30475 = inst_30482;var state_30514__$1 = (function (){var statearr_30535 = state_30514;(statearr_30535[(7)] = inst_30474__$1);
(statearr_30535[(8)] = inst_30475);
(statearr_30535[(14)] = inst_30487);
return statearr_30535;
})();var statearr_30536_30558 = state_30514__$1;(statearr_30536_30558[(2)] = null);
(statearr_30536_30558[(1)] = (2));
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
});})(c__5708__auto___30544,out))
;return ((function (switch__5693__auto__,c__5708__auto___30544,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30540[(0)] = state_machine__5694__auto__);
(statearr_30540[(1)] = (1));
return statearr_30540;
});
var state_machine__5694__auto____1 = (function (state_30514){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30541){if((e30541 instanceof Object))
{var ex__5697__auto__ = e30541;var statearr_30542_30559 = state_30514;(statearr_30542_30559[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30541;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30560 = state_30514;
state_30514 = G__30560;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30514){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30544,out))
})();var state__5710__auto__ = (function (){var statearr_30543 = f__5709__auto__.call(null);(statearr_30543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30544);
return statearr_30543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30544,out))
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
