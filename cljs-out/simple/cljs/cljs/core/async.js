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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28058 = (function (f,fn_handler,meta28059){
this.f = f;
this.fn_handler = fn_handler;
this.meta28059 = meta28059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28058.cljs$lang$type = true;
cljs.core.async.t28058.cljs$lang$ctorStr = "cljs.core.async/t28058";
cljs.core.async.t28058.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28058");
});
cljs.core.async.t28058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28060){var self__ = this;
var _28060__$1 = this;return self__.meta28059;
});
cljs.core.async.t28058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28060,meta28059__$1){var self__ = this;
var _28060__$1 = this;return (new cljs.core.async.t28058(self__.f,self__.fn_handler,meta28059__$1));
});
cljs.core.async.__GT_t28058 = (function __GT_t28058(f__$1,fn_handler__$1,meta28059){return (new cljs.core.async.t28058(f__$1,fn_handler__$1,meta28059));
});
}
return (new cljs.core.async.t28058(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28062 = buff;if(G__28062)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__28062.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28062.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28062);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28062);
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
{var val_28063 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28063);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28063,ret){
return (function (){return fn1.call(null,val_28063);
});})(val_28063,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___28064 = n;var x_28065 = (0);while(true){
if((x_28065 < n__4414__auto___28064))
{(a[x_28065] = (0));
{
var G__28066 = (x_28065 + (1));
x_28065 = G__28066;
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
var G__28067 = (i + (1));
i = G__28067;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t28071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28071 = (function (flag,alt_flag,meta28072){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28072 = meta28072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28071.cljs$lang$type = true;
cljs.core.async.t28071.cljs$lang$ctorStr = "cljs.core.async/t28071";
cljs.core.async.t28071.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28071");
});})(flag))
;
cljs.core.async.t28071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t28071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t28071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28073){var self__ = this;
var _28073__$1 = this;return self__.meta28072;
});})(flag))
;
cljs.core.async.t28071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28073,meta28072__$1){var self__ = this;
var _28073__$1 = this;return (new cljs.core.async.t28071(self__.flag,self__.alt_flag,meta28072__$1));
});})(flag))
;
cljs.core.async.__GT_t28071 = ((function (flag){
return (function __GT_t28071(flag__$1,alt_flag__$1,meta28072){return (new cljs.core.async.t28071(flag__$1,alt_flag__$1,meta28072));
});})(flag))
;
}
return (new cljs.core.async.t28071(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t28077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28077 = (function (cb,flag,alt_handler,meta28078){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28078 = meta28078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28077.cljs$lang$type = true;
cljs.core.async.t28077.cljs$lang$ctorStr = "cljs.core.async/t28077";
cljs.core.async.t28077.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28077");
});
cljs.core.async.t28077.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t28077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t28077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28079){var self__ = this;
var _28079__$1 = this;return self__.meta28078;
});
cljs.core.async.t28077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28079,meta28078__$1){var self__ = this;
var _28079__$1 = this;return (new cljs.core.async.t28077(self__.cb,self__.flag,self__.alt_handler,meta28078__$1));
});
cljs.core.async.__GT_t28077 = (function __GT_t28077(cb__$1,flag__$1,alt_handler__$1,meta28078){return (new cljs.core.async.t28077(cb__$1,flag__$1,alt_handler__$1,meta28078));
});
}
return (new cljs.core.async.t28077(cb,flag,alt_handler,null));
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
return (function (p1__28080_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28080_SHARP_,port], null));
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
var G__28081 = (i + (1));
i = G__28081;
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
var alts_BANG___delegate = function (ports,p__28082){var map__28084 = p__28082;var map__28084__$1 = ((cljs.core.seq_QMARK_.call(null,map__28084))?cljs.core.apply.call(null,cljs.core.hash_map,map__28084):map__28084);var opts = map__28084__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__28082 = null;if (arguments.length > 1) {
  p__28082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__28082);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28085){
var ports = cljs.core.first(arglist__28085);
var p__28082 = cljs.core.rest(arglist__28085);
return alts_BANG___delegate(ports,p__28082);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28093 = (function (ch,f,map_LT_,meta28094){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28094 = meta28094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28093.cljs$lang$type = true;
cljs.core.async.t28093.cljs$lang$ctorStr = "cljs.core.async/t28093";
cljs.core.async.t28093.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28093");
});
cljs.core.async.t28093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t28093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28096 = (function (fn1,_,meta28094,ch,f,map_LT_,meta28097){
this.fn1 = fn1;
this._ = _;
this.meta28094 = meta28094;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28097 = meta28097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28096.cljs$lang$type = true;
cljs.core.async.t28096.cljs$lang$ctorStr = "cljs.core.async/t28096";
cljs.core.async.t28096.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28096");
});})(___$1))
;
cljs.core.async.t28096.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28096.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28086_SHARP_){return f1.call(null,(((p1__28086_SHARP_ == null))?null:self__.f.call(null,p1__28086_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28098){var self__ = this;
var _28098__$1 = this;return self__.meta28097;
});})(___$1))
;
cljs.core.async.t28096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28098,meta28097__$1){var self__ = this;
var _28098__$1 = this;return (new cljs.core.async.t28096(self__.fn1,self__._,self__.meta28094,self__.ch,self__.f,self__.map_LT_,meta28097__$1));
});})(___$1))
;
cljs.core.async.__GT_t28096 = ((function (___$1){
return (function __GT_t28096(fn1__$1,___$2,meta28094__$1,ch__$2,f__$2,map_LT___$2,meta28097){return (new cljs.core.async.t28096(fn1__$1,___$2,meta28094__$1,ch__$2,f__$2,map_LT___$2,meta28097));
});})(___$1))
;
}
return (new cljs.core.async.t28096(fn1,___$1,self__.meta28094,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t28093.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28095){var self__ = this;
var _28095__$1 = this;return self__.meta28094;
});
cljs.core.async.t28093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28095,meta28094__$1){var self__ = this;
var _28095__$1 = this;return (new cljs.core.async.t28093(self__.ch,self__.f,self__.map_LT_,meta28094__$1));
});
cljs.core.async.__GT_t28093 = (function __GT_t28093(ch__$1,f__$1,map_LT___$1,meta28094){return (new cljs.core.async.t28093(ch__$1,f__$1,map_LT___$1,meta28094));
});
}
return (new cljs.core.async.t28093(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28102 = (function (ch,f,map_GT_,meta28103){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28103 = meta28103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28102.cljs$lang$type = true;
cljs.core.async.t28102.cljs$lang$ctorStr = "cljs.core.async/t28102";
cljs.core.async.t28102.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28102");
});
cljs.core.async.t28102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t28102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28102.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28104){var self__ = this;
var _28104__$1 = this;return self__.meta28103;
});
cljs.core.async.t28102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28104,meta28103__$1){var self__ = this;
var _28104__$1 = this;return (new cljs.core.async.t28102(self__.ch,self__.f,self__.map_GT_,meta28103__$1));
});
cljs.core.async.__GT_t28102 = (function __GT_t28102(ch__$1,f__$1,map_GT___$1,meta28103){return (new cljs.core.async.t28102(ch__$1,f__$1,map_GT___$1,meta28103));
});
}
return (new cljs.core.async.t28102(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28108 = (function (ch,p,filter_GT_,meta28109){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28109 = meta28109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28108.cljs$lang$type = true;
cljs.core.async.t28108.cljs$lang$ctorStr = "cljs.core.async/t28108";
cljs.core.async.t28108.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28108");
});
cljs.core.async.t28108.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t28108.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28108.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28110){var self__ = this;
var _28110__$1 = this;return self__.meta28109;
});
cljs.core.async.t28108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28110,meta28109__$1){var self__ = this;
var _28110__$1 = this;return (new cljs.core.async.t28108(self__.ch,self__.p,self__.filter_GT_,meta28109__$1));
});
cljs.core.async.__GT_t28108 = (function __GT_t28108(ch__$1,p__$1,filter_GT___$1,meta28109){return (new cljs.core.async.t28108(ch__$1,p__$1,filter_GT___$1,meta28109));
});
}
return (new cljs.core.async.t28108(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___28193 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28193,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28193,out){
return (function (state_28172){var state_val_28173 = (state_28172[(1)]);if((state_val_28173 === (7)))
{var inst_28168 = (state_28172[(2)]);var state_28172__$1 = state_28172;var statearr_28174_28194 = state_28172__$1;(statearr_28174_28194[(2)] = inst_28168);
(statearr_28174_28194[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (1)))
{var state_28172__$1 = state_28172;var statearr_28175_28195 = state_28172__$1;(statearr_28175_28195[(2)] = null);
(statearr_28175_28195[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (4)))
{var inst_28154 = (state_28172[(7)]);var inst_28154__$1 = (state_28172[(2)]);var inst_28155 = (inst_28154__$1 == null);var state_28172__$1 = (function (){var statearr_28176 = state_28172;(statearr_28176[(7)] = inst_28154__$1);
return statearr_28176;
})();if(cljs.core.truth_(inst_28155))
{var statearr_28177_28196 = state_28172__$1;(statearr_28177_28196[(1)] = (5));
} else
{var statearr_28178_28197 = state_28172__$1;(statearr_28178_28197[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (6)))
{var inst_28154 = (state_28172[(7)]);var inst_28159 = p.call(null,inst_28154);var state_28172__$1 = state_28172;if(cljs.core.truth_(inst_28159))
{var statearr_28179_28198 = state_28172__$1;(statearr_28179_28198[(1)] = (8));
} else
{var statearr_28180_28199 = state_28172__$1;(statearr_28180_28199[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (3)))
{var inst_28170 = (state_28172[(2)]);var state_28172__$1 = state_28172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28172__$1,inst_28170);
} else
{if((state_val_28173 === (2)))
{var state_28172__$1 = state_28172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(4),ch);
} else
{if((state_val_28173 === (11)))
{var inst_28162 = (state_28172[(2)]);var state_28172__$1 = state_28172;var statearr_28181_28200 = state_28172__$1;(statearr_28181_28200[(2)] = inst_28162);
(statearr_28181_28200[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (9)))
{var state_28172__$1 = state_28172;var statearr_28182_28201 = state_28172__$1;(statearr_28182_28201[(2)] = null);
(statearr_28182_28201[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (5)))
{var inst_28157 = cljs.core.async.close_BANG_.call(null,out);var state_28172__$1 = state_28172;var statearr_28183_28202 = state_28172__$1;(statearr_28183_28202[(2)] = inst_28157);
(statearr_28183_28202[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (10)))
{var inst_28165 = (state_28172[(2)]);var state_28172__$1 = (function (){var statearr_28184 = state_28172;(statearr_28184[(8)] = inst_28165);
return statearr_28184;
})();var statearr_28185_28203 = state_28172__$1;(statearr_28185_28203[(2)] = null);
(statearr_28185_28203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28173 === (8)))
{var inst_28154 = (state_28172[(7)]);var state_28172__$1 = state_28172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28172__$1,(11),out,inst_28154);
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
});})(c__5708__auto___28193,out))
;return ((function (switch__5693__auto__,c__5708__auto___28193,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28189 = [null,null,null,null,null,null,null,null,null];(statearr_28189[(0)] = state_machine__5694__auto__);
(statearr_28189[(1)] = (1));
return statearr_28189;
});
var state_machine__5694__auto____1 = (function (state_28172){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28172);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28190){if((e28190 instanceof Object))
{var ex__5697__auto__ = e28190;var statearr_28191_28204 = state_28172;(statearr_28191_28204[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28190;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28205 = state_28172;
state_28172 = G__28205;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28172){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28193,out))
})();var state__5710__auto__ = (function (){var statearr_28192 = f__5709__auto__.call(null);(statearr_28192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28193);
return statearr_28192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28193,out))
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
return (function (state_28357){var state_val_28358 = (state_28357[(1)]);if((state_val_28358 === (7)))
{var inst_28353 = (state_28357[(2)]);var state_28357__$1 = state_28357;var statearr_28359_28396 = state_28357__$1;(statearr_28359_28396[(2)] = inst_28353);
(statearr_28359_28396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (20)))
{var inst_28328 = (state_28357[(7)]);var inst_28339 = (state_28357[(2)]);var inst_28340 = cljs.core.next.call(null,inst_28328);var inst_28314 = inst_28340;var inst_28315 = null;var inst_28316 = (0);var inst_28317 = (0);var state_28357__$1 = (function (){var statearr_28360 = state_28357;(statearr_28360[(8)] = inst_28317);
(statearr_28360[(9)] = inst_28315);
(statearr_28360[(10)] = inst_28316);
(statearr_28360[(11)] = inst_28314);
(statearr_28360[(12)] = inst_28339);
return statearr_28360;
})();var statearr_28361_28397 = state_28357__$1;(statearr_28361_28397[(2)] = null);
(statearr_28361_28397[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (1)))
{var state_28357__$1 = state_28357;var statearr_28362_28398 = state_28357__$1;(statearr_28362_28398[(2)] = null);
(statearr_28362_28398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (4)))
{var inst_28303 = (state_28357[(13)]);var inst_28303__$1 = (state_28357[(2)]);var inst_28304 = (inst_28303__$1 == null);var state_28357__$1 = (function (){var statearr_28366 = state_28357;(statearr_28366[(13)] = inst_28303__$1);
return statearr_28366;
})();if(cljs.core.truth_(inst_28304))
{var statearr_28367_28399 = state_28357__$1;(statearr_28367_28399[(1)] = (5));
} else
{var statearr_28368_28400 = state_28357__$1;(statearr_28368_28400[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (15)))
{var state_28357__$1 = state_28357;var statearr_28369_28401 = state_28357__$1;(statearr_28369_28401[(2)] = null);
(statearr_28369_28401[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (13)))
{var inst_28317 = (state_28357[(8)]);var inst_28315 = (state_28357[(9)]);var inst_28316 = (state_28357[(10)]);var inst_28314 = (state_28357[(11)]);var inst_28324 = (state_28357[(2)]);var inst_28325 = (inst_28317 + (1));var tmp28363 = inst_28315;var tmp28364 = inst_28316;var tmp28365 = inst_28314;var inst_28314__$1 = tmp28365;var inst_28315__$1 = tmp28363;var inst_28316__$1 = tmp28364;var inst_28317__$1 = inst_28325;var state_28357__$1 = (function (){var statearr_28370 = state_28357;(statearr_28370[(8)] = inst_28317__$1);
(statearr_28370[(9)] = inst_28315__$1);
(statearr_28370[(10)] = inst_28316__$1);
(statearr_28370[(11)] = inst_28314__$1);
(statearr_28370[(14)] = inst_28324);
return statearr_28370;
})();var statearr_28371_28402 = state_28357__$1;(statearr_28371_28402[(2)] = null);
(statearr_28371_28402[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (6)))
{var inst_28303 = (state_28357[(13)]);var inst_28308 = f.call(null,inst_28303);var inst_28313 = cljs.core.seq.call(null,inst_28308);var inst_28314 = inst_28313;var inst_28315 = null;var inst_28316 = (0);var inst_28317 = (0);var state_28357__$1 = (function (){var statearr_28372 = state_28357;(statearr_28372[(8)] = inst_28317);
(statearr_28372[(9)] = inst_28315);
(statearr_28372[(10)] = inst_28316);
(statearr_28372[(11)] = inst_28314);
return statearr_28372;
})();var statearr_28373_28403 = state_28357__$1;(statearr_28373_28403[(2)] = null);
(statearr_28373_28403[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (17)))
{var inst_28328 = (state_28357[(7)]);var inst_28332 = cljs.core.chunk_first.call(null,inst_28328);var inst_28333 = cljs.core.chunk_rest.call(null,inst_28328);var inst_28334 = cljs.core.count.call(null,inst_28332);var inst_28314 = inst_28333;var inst_28315 = inst_28332;var inst_28316 = inst_28334;var inst_28317 = (0);var state_28357__$1 = (function (){var statearr_28374 = state_28357;(statearr_28374[(8)] = inst_28317);
(statearr_28374[(9)] = inst_28315);
(statearr_28374[(10)] = inst_28316);
(statearr_28374[(11)] = inst_28314);
return statearr_28374;
})();var statearr_28375_28404 = state_28357__$1;(statearr_28375_28404[(2)] = null);
(statearr_28375_28404[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (3)))
{var inst_28355 = (state_28357[(2)]);var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28357__$1,inst_28355);
} else
{if((state_val_28358 === (12)))
{var inst_28348 = (state_28357[(2)]);var state_28357__$1 = state_28357;var statearr_28376_28405 = state_28357__$1;(statearr_28376_28405[(2)] = inst_28348);
(statearr_28376_28405[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (2)))
{var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28357__$1,(4),in$);
} else
{if((state_val_28358 === (19)))
{var inst_28343 = (state_28357[(2)]);var state_28357__$1 = state_28357;var statearr_28377_28406 = state_28357__$1;(statearr_28377_28406[(2)] = inst_28343);
(statearr_28377_28406[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (11)))
{var inst_28314 = (state_28357[(11)]);var inst_28328 = (state_28357[(7)]);var inst_28328__$1 = cljs.core.seq.call(null,inst_28314);var state_28357__$1 = (function (){var statearr_28378 = state_28357;(statearr_28378[(7)] = inst_28328__$1);
return statearr_28378;
})();if(inst_28328__$1)
{var statearr_28379_28407 = state_28357__$1;(statearr_28379_28407[(1)] = (14));
} else
{var statearr_28380_28408 = state_28357__$1;(statearr_28380_28408[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (9)))
{var inst_28350 = (state_28357[(2)]);var state_28357__$1 = (function (){var statearr_28381 = state_28357;(statearr_28381[(15)] = inst_28350);
return statearr_28381;
})();var statearr_28382_28409 = state_28357__$1;(statearr_28382_28409[(2)] = null);
(statearr_28382_28409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (5)))
{var inst_28306 = cljs.core.async.close_BANG_.call(null,out);var state_28357__$1 = state_28357;var statearr_28383_28410 = state_28357__$1;(statearr_28383_28410[(2)] = inst_28306);
(statearr_28383_28410[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (14)))
{var inst_28328 = (state_28357[(7)]);var inst_28330 = cljs.core.chunked_seq_QMARK_.call(null,inst_28328);var state_28357__$1 = state_28357;if(inst_28330)
{var statearr_28384_28411 = state_28357__$1;(statearr_28384_28411[(1)] = (17));
} else
{var statearr_28385_28412 = state_28357__$1;(statearr_28385_28412[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (16)))
{var inst_28346 = (state_28357[(2)]);var state_28357__$1 = state_28357;var statearr_28386_28413 = state_28357__$1;(statearr_28386_28413[(2)] = inst_28346);
(statearr_28386_28413[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28358 === (10)))
{var inst_28317 = (state_28357[(8)]);var inst_28315 = (state_28357[(9)]);var inst_28322 = cljs.core._nth.call(null,inst_28315,inst_28317);var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28357__$1,(13),out,inst_28322);
} else
{if((state_val_28358 === (18)))
{var inst_28328 = (state_28357[(7)]);var inst_28337 = cljs.core.first.call(null,inst_28328);var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28357__$1,(20),out,inst_28337);
} else
{if((state_val_28358 === (8)))
{var inst_28317 = (state_28357[(8)]);var inst_28316 = (state_28357[(10)]);var inst_28319 = (inst_28317 < inst_28316);var inst_28320 = inst_28319;var state_28357__$1 = state_28357;if(cljs.core.truth_(inst_28320))
{var statearr_28387_28414 = state_28357__$1;(statearr_28387_28414[(1)] = (10));
} else
{var statearr_28388_28415 = state_28357__$1;(statearr_28388_28415[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_28392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28392[(0)] = state_machine__5694__auto__);
(statearr_28392[(1)] = (1));
return statearr_28392;
});
var state_machine__5694__auto____1 = (function (state_28357){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28357);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28393){if((e28393 instanceof Object))
{var ex__5697__auto__ = e28393;var statearr_28394_28416 = state_28357;(statearr_28394_28416[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28417 = state_28357;
state_28357 = G__28417;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28357){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_28395 = f__5709__auto__.call(null);(statearr_28395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28395;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___28498 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28498){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28498){
return (function (state_28477){var state_val_28478 = (state_28477[(1)]);if((state_val_28478 === (7)))
{var inst_28473 = (state_28477[(2)]);var state_28477__$1 = state_28477;var statearr_28479_28499 = state_28477__$1;(statearr_28479_28499[(2)] = inst_28473);
(statearr_28479_28499[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28478 === (1)))
{var state_28477__$1 = state_28477;var statearr_28480_28500 = state_28477__$1;(statearr_28480_28500[(2)] = null);
(statearr_28480_28500[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28478 === (4)))
{var inst_28460 = (state_28477[(7)]);var inst_28460__$1 = (state_28477[(2)]);var inst_28461 = (inst_28460__$1 == null);var state_28477__$1 = (function (){var statearr_28481 = state_28477;(statearr_28481[(7)] = inst_28460__$1);
return statearr_28481;
})();if(cljs.core.truth_(inst_28461))
{var statearr_28482_28501 = state_28477__$1;(statearr_28482_28501[(1)] = (5));
} else
{var statearr_28483_28502 = state_28477__$1;(statearr_28483_28502[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28478 === (6)))
{var inst_28460 = (state_28477[(7)]);var state_28477__$1 = state_28477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28477__$1,(11),to,inst_28460);
} else
{if((state_val_28478 === (3)))
{var inst_28475 = (state_28477[(2)]);var state_28477__$1 = state_28477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28477__$1,inst_28475);
} else
{if((state_val_28478 === (2)))
{var state_28477__$1 = state_28477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28477__$1,(4),from);
} else
{if((state_val_28478 === (11)))
{var inst_28470 = (state_28477[(2)]);var state_28477__$1 = (function (){var statearr_28484 = state_28477;(statearr_28484[(8)] = inst_28470);
return statearr_28484;
})();var statearr_28485_28503 = state_28477__$1;(statearr_28485_28503[(2)] = null);
(statearr_28485_28503[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28478 === (9)))
{var state_28477__$1 = state_28477;var statearr_28486_28504 = state_28477__$1;(statearr_28486_28504[(2)] = null);
(statearr_28486_28504[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28478 === (5)))
{var state_28477__$1 = state_28477;if(cljs.core.truth_(close_QMARK_))
{var statearr_28487_28505 = state_28477__$1;(statearr_28487_28505[(1)] = (8));
} else
{var statearr_28488_28506 = state_28477__$1;(statearr_28488_28506[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28478 === (10)))
{var inst_28467 = (state_28477[(2)]);var state_28477__$1 = state_28477;var statearr_28489_28507 = state_28477__$1;(statearr_28489_28507[(2)] = inst_28467);
(statearr_28489_28507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28478 === (8)))
{var inst_28464 = cljs.core.async.close_BANG_.call(null,to);var state_28477__$1 = state_28477;var statearr_28490_28508 = state_28477__$1;(statearr_28490_28508[(2)] = inst_28464);
(statearr_28490_28508[(1)] = (10));
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
});})(c__5708__auto___28498))
;return ((function (switch__5693__auto__,c__5708__auto___28498){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28494 = [null,null,null,null,null,null,null,null,null];(statearr_28494[(0)] = state_machine__5694__auto__);
(statearr_28494[(1)] = (1));
return statearr_28494;
});
var state_machine__5694__auto____1 = (function (state_28477){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28477);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28495){if((e28495 instanceof Object))
{var ex__5697__auto__ = e28495;var statearr_28496_28509 = state_28477;(statearr_28496_28509[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28495;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28510 = state_28477;
state_28477 = G__28510;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28477){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28498))
})();var state__5710__auto__ = (function (){var statearr_28497 = f__5709__auto__.call(null);(statearr_28497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28498);
return statearr_28497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28498))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___28597 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28597,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28597,tc,fc){
return (function (state_28575){var state_val_28576 = (state_28575[(1)]);if((state_val_28576 === (7)))
{var inst_28571 = (state_28575[(2)]);var state_28575__$1 = state_28575;var statearr_28577_28598 = state_28575__$1;(statearr_28577_28598[(2)] = inst_28571);
(statearr_28577_28598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28576 === (1)))
{var state_28575__$1 = state_28575;var statearr_28578_28599 = state_28575__$1;(statearr_28578_28599[(2)] = null);
(statearr_28578_28599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28576 === (4)))
{var inst_28556 = (state_28575[(7)]);var inst_28556__$1 = (state_28575[(2)]);var inst_28557 = (inst_28556__$1 == null);var state_28575__$1 = (function (){var statearr_28579 = state_28575;(statearr_28579[(7)] = inst_28556__$1);
return statearr_28579;
})();if(cljs.core.truth_(inst_28557))
{var statearr_28580_28600 = state_28575__$1;(statearr_28580_28600[(1)] = (5));
} else
{var statearr_28581_28601 = state_28575__$1;(statearr_28581_28601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28576 === (6)))
{var inst_28556 = (state_28575[(7)]);var inst_28562 = p.call(null,inst_28556);var state_28575__$1 = state_28575;if(cljs.core.truth_(inst_28562))
{var statearr_28582_28602 = state_28575__$1;(statearr_28582_28602[(1)] = (9));
} else
{var statearr_28583_28603 = state_28575__$1;(statearr_28583_28603[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28576 === (3)))
{var inst_28573 = (state_28575[(2)]);var state_28575__$1 = state_28575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28575__$1,inst_28573);
} else
{if((state_val_28576 === (2)))
{var state_28575__$1 = state_28575;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28575__$1,(4),ch);
} else
{if((state_val_28576 === (11)))
{var inst_28556 = (state_28575[(7)]);var inst_28566 = (state_28575[(2)]);var state_28575__$1 = state_28575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28575__$1,(8),inst_28566,inst_28556);
} else
{if((state_val_28576 === (9)))
{var state_28575__$1 = state_28575;var statearr_28584_28604 = state_28575__$1;(statearr_28584_28604[(2)] = tc);
(statearr_28584_28604[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28576 === (5)))
{var inst_28559 = cljs.core.async.close_BANG_.call(null,tc);var inst_28560 = cljs.core.async.close_BANG_.call(null,fc);var state_28575__$1 = (function (){var statearr_28585 = state_28575;(statearr_28585[(8)] = inst_28559);
return statearr_28585;
})();var statearr_28586_28605 = state_28575__$1;(statearr_28586_28605[(2)] = inst_28560);
(statearr_28586_28605[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28576 === (10)))
{var state_28575__$1 = state_28575;var statearr_28587_28606 = state_28575__$1;(statearr_28587_28606[(2)] = fc);
(statearr_28587_28606[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28576 === (8)))
{var inst_28568 = (state_28575[(2)]);var state_28575__$1 = (function (){var statearr_28588 = state_28575;(statearr_28588[(9)] = inst_28568);
return statearr_28588;
})();var statearr_28589_28607 = state_28575__$1;(statearr_28589_28607[(2)] = null);
(statearr_28589_28607[(1)] = (2));
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
});})(c__5708__auto___28597,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___28597,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28593 = [null,null,null,null,null,null,null,null,null,null];(statearr_28593[(0)] = state_machine__5694__auto__);
(statearr_28593[(1)] = (1));
return statearr_28593;
});
var state_machine__5694__auto____1 = (function (state_28575){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28575);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28594){if((e28594 instanceof Object))
{var ex__5697__auto__ = e28594;var statearr_28595_28608 = state_28575;(statearr_28595_28608[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28575);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28609 = state_28575;
state_28575 = G__28609;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28575){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28597,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_28596 = f__5709__auto__.call(null);(statearr_28596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28597);
return statearr_28596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28597,tc,fc))
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
return (function (state_28656){var state_val_28657 = (state_28656[(1)]);if((state_val_28657 === (7)))
{var inst_28652 = (state_28656[(2)]);var state_28656__$1 = state_28656;var statearr_28658_28674 = state_28656__$1;(statearr_28658_28674[(2)] = inst_28652);
(statearr_28658_28674[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (6)))
{var inst_28642 = (state_28656[(7)]);var inst_28645 = (state_28656[(8)]);var inst_28649 = f.call(null,inst_28642,inst_28645);var inst_28642__$1 = inst_28649;var state_28656__$1 = (function (){var statearr_28659 = state_28656;(statearr_28659[(7)] = inst_28642__$1);
return statearr_28659;
})();var statearr_28660_28675 = state_28656__$1;(statearr_28660_28675[(2)] = null);
(statearr_28660_28675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (5)))
{var inst_28642 = (state_28656[(7)]);var state_28656__$1 = state_28656;var statearr_28661_28676 = state_28656__$1;(statearr_28661_28676[(2)] = inst_28642);
(statearr_28661_28676[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (4)))
{var inst_28645 = (state_28656[(8)]);var inst_28645__$1 = (state_28656[(2)]);var inst_28646 = (inst_28645__$1 == null);var state_28656__$1 = (function (){var statearr_28662 = state_28656;(statearr_28662[(8)] = inst_28645__$1);
return statearr_28662;
})();if(cljs.core.truth_(inst_28646))
{var statearr_28663_28677 = state_28656__$1;(statearr_28663_28677[(1)] = (5));
} else
{var statearr_28664_28678 = state_28656__$1;(statearr_28664_28678[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (3)))
{var inst_28654 = (state_28656[(2)]);var state_28656__$1 = state_28656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28656__$1,inst_28654);
} else
{if((state_val_28657 === (2)))
{var state_28656__$1 = state_28656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28656__$1,(4),ch);
} else
{if((state_val_28657 === (1)))
{var inst_28642 = init;var state_28656__$1 = (function (){var statearr_28665 = state_28656;(statearr_28665[(7)] = inst_28642);
return statearr_28665;
})();var statearr_28666_28679 = state_28656__$1;(statearr_28666_28679[(2)] = null);
(statearr_28666_28679[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_28670 = [null,null,null,null,null,null,null,null,null];(statearr_28670[(0)] = state_machine__5694__auto__);
(statearr_28670[(1)] = (1));
return statearr_28670;
});
var state_machine__5694__auto____1 = (function (state_28656){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28656);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28671){if((e28671 instanceof Object))
{var ex__5697__auto__ = e28671;var statearr_28672_28680 = state_28656;(statearr_28672_28680[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28671;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28681 = state_28656;
state_28656 = G__28681;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28656){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_28673 = f__5709__auto__.call(null);(statearr_28673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28673;
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
return (function (state_28743){var state_val_28744 = (state_28743[(1)]);if((state_val_28744 === (7)))
{var inst_28724 = (state_28743[(7)]);var inst_28729 = (state_28743[(2)]);var inst_28730 = cljs.core.next.call(null,inst_28724);var inst_28724__$1 = inst_28730;var state_28743__$1 = (function (){var statearr_28745 = state_28743;(statearr_28745[(7)] = inst_28724__$1);
(statearr_28745[(8)] = inst_28729);
return statearr_28745;
})();var statearr_28746_28764 = state_28743__$1;(statearr_28746_28764[(2)] = null);
(statearr_28746_28764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28744 === (1)))
{var inst_28723 = cljs.core.seq.call(null,coll);var inst_28724 = inst_28723;var state_28743__$1 = (function (){var statearr_28747 = state_28743;(statearr_28747[(7)] = inst_28724);
return statearr_28747;
})();var statearr_28748_28765 = state_28743__$1;(statearr_28748_28765[(2)] = null);
(statearr_28748_28765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28744 === (4)))
{var inst_28724 = (state_28743[(7)]);var inst_28727 = cljs.core.first.call(null,inst_28724);var state_28743__$1 = state_28743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28743__$1,(7),ch,inst_28727);
} else
{if((state_val_28744 === (6)))
{var inst_28739 = (state_28743[(2)]);var state_28743__$1 = state_28743;var statearr_28749_28766 = state_28743__$1;(statearr_28749_28766[(2)] = inst_28739);
(statearr_28749_28766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28744 === (3)))
{var inst_28741 = (state_28743[(2)]);var state_28743__$1 = state_28743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28743__$1,inst_28741);
} else
{if((state_val_28744 === (2)))
{var inst_28724 = (state_28743[(7)]);var state_28743__$1 = state_28743;if(cljs.core.truth_(inst_28724))
{var statearr_28750_28767 = state_28743__$1;(statearr_28750_28767[(1)] = (4));
} else
{var statearr_28751_28768 = state_28743__$1;(statearr_28751_28768[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28744 === (9)))
{var state_28743__$1 = state_28743;var statearr_28752_28769 = state_28743__$1;(statearr_28752_28769[(2)] = null);
(statearr_28752_28769[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28744 === (5)))
{var state_28743__$1 = state_28743;if(cljs.core.truth_(close_QMARK_))
{var statearr_28753_28770 = state_28743__$1;(statearr_28753_28770[(1)] = (8));
} else
{var statearr_28754_28771 = state_28743__$1;(statearr_28754_28771[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28744 === (10)))
{var inst_28737 = (state_28743[(2)]);var state_28743__$1 = state_28743;var statearr_28755_28772 = state_28743__$1;(statearr_28755_28772[(2)] = inst_28737);
(statearr_28755_28772[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28744 === (8)))
{var inst_28734 = cljs.core.async.close_BANG_.call(null,ch);var state_28743__$1 = state_28743;var statearr_28756_28773 = state_28743__$1;(statearr_28756_28773[(2)] = inst_28734);
(statearr_28756_28773[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_28760 = [null,null,null,null,null,null,null,null,null];(statearr_28760[(0)] = state_machine__5694__auto__);
(statearr_28760[(1)] = (1));
return statearr_28760;
});
var state_machine__5694__auto____1 = (function (state_28743){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28743);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28761){if((e28761 instanceof Object))
{var ex__5697__auto__ = e28761;var statearr_28762_28774 = state_28743;(statearr_28762_28774[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28775 = state_28743;
state_28743 = G__28775;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28743){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_28763 = f__5709__auto__.call(null);(statearr_28763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28763;
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
cljs.core.async.Mux = (function (){var obj28777 = {};return obj28777;
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
cljs.core.async.Mult = (function (){var obj28779 = {};return obj28779;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t29003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29003 = (function (cs,ch,mult,meta29004){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29004 = meta29004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29003.cljs$lang$type = true;
cljs.core.async.t29003.cljs$lang$ctorStr = "cljs.core.async/t29003";
cljs.core.async.t29003.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29003");
});})(cs))
;
cljs.core.async.t29003.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t29003.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t29003.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t29003.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t29003.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t29003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29005){var self__ = this;
var _29005__$1 = this;return self__.meta29004;
});})(cs))
;
cljs.core.async.t29003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29005,meta29004__$1){var self__ = this;
var _29005__$1 = this;return (new cljs.core.async.t29003(self__.cs,self__.ch,self__.mult,meta29004__$1));
});})(cs))
;
cljs.core.async.__GT_t29003 = ((function (cs){
return (function __GT_t29003(cs__$1,ch__$1,mult__$1,meta29004){return (new cljs.core.async.t29003(cs__$1,ch__$1,mult__$1,meta29004));
});})(cs))
;
}
return (new cljs.core.async.t29003(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___29226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29226,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29226,cs,m,dchan,dctr,done){
return (function (state_29140){var state_val_29141 = (state_29140[(1)]);if((state_val_29141 === (7)))
{var inst_29136 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29142_29227 = state_29140__$1;(statearr_29142_29227[(2)] = inst_29136);
(statearr_29142_29227[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (20)))
{var inst_29037 = (state_29140[(7)]);var inst_29047 = cljs.core.first.call(null,inst_29037);var inst_29048 = cljs.core.nth.call(null,inst_29047,(0),null);var inst_29049 = cljs.core.nth.call(null,inst_29047,(1),null);var state_29140__$1 = (function (){var statearr_29143 = state_29140;(statearr_29143[(8)] = inst_29048);
return statearr_29143;
})();if(cljs.core.truth_(inst_29049))
{var statearr_29144_29228 = state_29140__$1;(statearr_29144_29228[(1)] = (22));
} else
{var statearr_29145_29229 = state_29140__$1;(statearr_29145_29229[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (27)))
{var inst_29077 = (state_29140[(9)]);var inst_29079 = (state_29140[(10)]);var inst_29084 = cljs.core._nth.call(null,inst_29077,inst_29079);var state_29140__$1 = (function (){var statearr_29146 = state_29140;(statearr_29146[(11)] = inst_29084);
return statearr_29146;
})();var statearr_29147_29230 = state_29140__$1;(statearr_29147_29230[(2)] = null);
(statearr_29147_29230[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (1)))
{var state_29140__$1 = state_29140;var statearr_29148_29231 = state_29140__$1;(statearr_29148_29231[(2)] = null);
(statearr_29148_29231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (24)))
{var inst_29037 = (state_29140[(7)]);var inst_29054 = (state_29140[(2)]);var inst_29055 = cljs.core.next.call(null,inst_29037);var inst_29017 = inst_29055;var inst_29018 = null;var inst_29019 = (0);var inst_29020 = (0);var state_29140__$1 = (function (){var statearr_29149 = state_29140;(statearr_29149[(12)] = inst_29018);
(statearr_29149[(13)] = inst_29019);
(statearr_29149[(14)] = inst_29020);
(statearr_29149[(15)] = inst_29017);
(statearr_29149[(16)] = inst_29054);
return statearr_29149;
})();var statearr_29150_29232 = state_29140__$1;(statearr_29150_29232[(2)] = null);
(statearr_29150_29232[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (39)))
{var inst_29097 = (state_29140[(17)]);var inst_29115 = (state_29140[(2)]);var inst_29116 = cljs.core.next.call(null,inst_29097);var inst_29076 = inst_29116;var inst_29077 = null;var inst_29078 = (0);var inst_29079 = (0);var state_29140__$1 = (function (){var statearr_29154 = state_29140;(statearr_29154[(18)] = inst_29076);
(statearr_29154[(19)] = inst_29115);
(statearr_29154[(20)] = inst_29078);
(statearr_29154[(9)] = inst_29077);
(statearr_29154[(10)] = inst_29079);
return statearr_29154;
})();var statearr_29155_29233 = state_29140__$1;(statearr_29155_29233[(2)] = null);
(statearr_29155_29233[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (4)))
{var inst_29008 = (state_29140[(21)]);var inst_29008__$1 = (state_29140[(2)]);var inst_29009 = (inst_29008__$1 == null);var state_29140__$1 = (function (){var statearr_29156 = state_29140;(statearr_29156[(21)] = inst_29008__$1);
return statearr_29156;
})();if(cljs.core.truth_(inst_29009))
{var statearr_29157_29234 = state_29140__$1;(statearr_29157_29234[(1)] = (5));
} else
{var statearr_29158_29235 = state_29140__$1;(statearr_29158_29235[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (15)))
{var inst_29018 = (state_29140[(12)]);var inst_29019 = (state_29140[(13)]);var inst_29020 = (state_29140[(14)]);var inst_29017 = (state_29140[(15)]);var inst_29033 = (state_29140[(2)]);var inst_29034 = (inst_29020 + (1));var tmp29151 = inst_29018;var tmp29152 = inst_29019;var tmp29153 = inst_29017;var inst_29017__$1 = tmp29153;var inst_29018__$1 = tmp29151;var inst_29019__$1 = tmp29152;var inst_29020__$1 = inst_29034;var state_29140__$1 = (function (){var statearr_29159 = state_29140;(statearr_29159[(12)] = inst_29018__$1);
(statearr_29159[(13)] = inst_29019__$1);
(statearr_29159[(14)] = inst_29020__$1);
(statearr_29159[(15)] = inst_29017__$1);
(statearr_29159[(22)] = inst_29033);
return statearr_29159;
})();var statearr_29160_29236 = state_29140__$1;(statearr_29160_29236[(2)] = null);
(statearr_29160_29236[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (21)))
{var inst_29058 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29161_29237 = state_29140__$1;(statearr_29161_29237[(2)] = inst_29058);
(statearr_29161_29237[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (31)))
{var inst_29084 = (state_29140[(11)]);var inst_29085 = (state_29140[(2)]);var inst_29086 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29087 = cljs.core.async.untap_STAR_.call(null,m,inst_29084);var state_29140__$1 = (function (){var statearr_29162 = state_29140;(statearr_29162[(23)] = inst_29086);
(statearr_29162[(24)] = inst_29085);
return statearr_29162;
})();var statearr_29163_29238 = state_29140__$1;(statearr_29163_29238[(2)] = inst_29087);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (32)))
{var inst_29008 = (state_29140[(21)]);var inst_29084 = (state_29140[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29140,(31),Object,null,(30));var inst_29091 = cljs.core.async.put_BANG_.call(null,inst_29084,inst_29008,done);var state_29140__$1 = state_29140;var statearr_29164_29239 = state_29140__$1;(statearr_29164_29239[(2)] = inst_29091);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (40)))
{var inst_29106 = (state_29140[(25)]);var inst_29107 = (state_29140[(2)]);var inst_29108 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29109 = cljs.core.async.untap_STAR_.call(null,m,inst_29106);var state_29140__$1 = (function (){var statearr_29165 = state_29140;(statearr_29165[(26)] = inst_29107);
(statearr_29165[(27)] = inst_29108);
return statearr_29165;
})();var statearr_29166_29240 = state_29140__$1;(statearr_29166_29240[(2)] = inst_29109);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (33)))
{var inst_29097 = (state_29140[(17)]);var inst_29099 = cljs.core.chunked_seq_QMARK_.call(null,inst_29097);var state_29140__$1 = state_29140;if(inst_29099)
{var statearr_29167_29241 = state_29140__$1;(statearr_29167_29241[(1)] = (36));
} else
{var statearr_29168_29242 = state_29140__$1;(statearr_29168_29242[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (13)))
{var inst_29027 = (state_29140[(28)]);var inst_29030 = cljs.core.async.close_BANG_.call(null,inst_29027);var state_29140__$1 = state_29140;var statearr_29169_29243 = state_29140__$1;(statearr_29169_29243[(2)] = inst_29030);
(statearr_29169_29243[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (22)))
{var inst_29048 = (state_29140[(8)]);var inst_29051 = cljs.core.async.close_BANG_.call(null,inst_29048);var state_29140__$1 = state_29140;var statearr_29170_29244 = state_29140__$1;(statearr_29170_29244[(2)] = inst_29051);
(statearr_29170_29244[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (36)))
{var inst_29097 = (state_29140[(17)]);var inst_29101 = cljs.core.chunk_first.call(null,inst_29097);var inst_29102 = cljs.core.chunk_rest.call(null,inst_29097);var inst_29103 = cljs.core.count.call(null,inst_29101);var inst_29076 = inst_29102;var inst_29077 = inst_29101;var inst_29078 = inst_29103;var inst_29079 = (0);var state_29140__$1 = (function (){var statearr_29171 = state_29140;(statearr_29171[(18)] = inst_29076);
(statearr_29171[(20)] = inst_29078);
(statearr_29171[(9)] = inst_29077);
(statearr_29171[(10)] = inst_29079);
return statearr_29171;
})();var statearr_29172_29245 = state_29140__$1;(statearr_29172_29245[(2)] = null);
(statearr_29172_29245[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (41)))
{var inst_29008 = (state_29140[(21)]);var inst_29106 = (state_29140[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29140,(40),Object,null,(39));var inst_29113 = cljs.core.async.put_BANG_.call(null,inst_29106,inst_29008,done);var state_29140__$1 = state_29140;var statearr_29173_29246 = state_29140__$1;(statearr_29173_29246[(2)] = inst_29113);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (43)))
{var state_29140__$1 = state_29140;var statearr_29174_29247 = state_29140__$1;(statearr_29174_29247[(2)] = null);
(statearr_29174_29247[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (29)))
{var inst_29124 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29175_29248 = state_29140__$1;(statearr_29175_29248[(2)] = inst_29124);
(statearr_29175_29248[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (44)))
{var inst_29133 = (state_29140[(2)]);var state_29140__$1 = (function (){var statearr_29176 = state_29140;(statearr_29176[(29)] = inst_29133);
return statearr_29176;
})();var statearr_29177_29249 = state_29140__$1;(statearr_29177_29249[(2)] = null);
(statearr_29177_29249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (6)))
{var inst_29068 = (state_29140[(30)]);var inst_29067 = cljs.core.deref.call(null,cs);var inst_29068__$1 = cljs.core.keys.call(null,inst_29067);var inst_29069 = cljs.core.count.call(null,inst_29068__$1);var inst_29070 = cljs.core.reset_BANG_.call(null,dctr,inst_29069);var inst_29075 = cljs.core.seq.call(null,inst_29068__$1);var inst_29076 = inst_29075;var inst_29077 = null;var inst_29078 = (0);var inst_29079 = (0);var state_29140__$1 = (function (){var statearr_29178 = state_29140;(statearr_29178[(30)] = inst_29068__$1);
(statearr_29178[(18)] = inst_29076);
(statearr_29178[(31)] = inst_29070);
(statearr_29178[(20)] = inst_29078);
(statearr_29178[(9)] = inst_29077);
(statearr_29178[(10)] = inst_29079);
return statearr_29178;
})();var statearr_29179_29250 = state_29140__$1;(statearr_29179_29250[(2)] = null);
(statearr_29179_29250[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (28)))
{var inst_29076 = (state_29140[(18)]);var inst_29097 = (state_29140[(17)]);var inst_29097__$1 = cljs.core.seq.call(null,inst_29076);var state_29140__$1 = (function (){var statearr_29180 = state_29140;(statearr_29180[(17)] = inst_29097__$1);
return statearr_29180;
})();if(inst_29097__$1)
{var statearr_29181_29251 = state_29140__$1;(statearr_29181_29251[(1)] = (33));
} else
{var statearr_29182_29252 = state_29140__$1;(statearr_29182_29252[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (25)))
{var inst_29078 = (state_29140[(20)]);var inst_29079 = (state_29140[(10)]);var inst_29081 = (inst_29079 < inst_29078);var inst_29082 = inst_29081;var state_29140__$1 = state_29140;if(cljs.core.truth_(inst_29082))
{var statearr_29183_29253 = state_29140__$1;(statearr_29183_29253[(1)] = (27));
} else
{var statearr_29184_29254 = state_29140__$1;(statearr_29184_29254[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (34)))
{var state_29140__$1 = state_29140;var statearr_29185_29255 = state_29140__$1;(statearr_29185_29255[(2)] = null);
(statearr_29185_29255[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (17)))
{var state_29140__$1 = state_29140;var statearr_29186_29256 = state_29140__$1;(statearr_29186_29256[(2)] = null);
(statearr_29186_29256[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (3)))
{var inst_29138 = (state_29140[(2)]);var state_29140__$1 = state_29140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29140__$1,inst_29138);
} else
{if((state_val_29141 === (12)))
{var inst_29063 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29187_29257 = state_29140__$1;(statearr_29187_29257[(2)] = inst_29063);
(statearr_29187_29257[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (2)))
{var state_29140__$1 = state_29140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29140__$1,(4),ch);
} else
{if((state_val_29141 === (23)))
{var state_29140__$1 = state_29140;var statearr_29188_29258 = state_29140__$1;(statearr_29188_29258[(2)] = null);
(statearr_29188_29258[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (35)))
{var inst_29122 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29189_29259 = state_29140__$1;(statearr_29189_29259[(2)] = inst_29122);
(statearr_29189_29259[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (19)))
{var inst_29037 = (state_29140[(7)]);var inst_29041 = cljs.core.chunk_first.call(null,inst_29037);var inst_29042 = cljs.core.chunk_rest.call(null,inst_29037);var inst_29043 = cljs.core.count.call(null,inst_29041);var inst_29017 = inst_29042;var inst_29018 = inst_29041;var inst_29019 = inst_29043;var inst_29020 = (0);var state_29140__$1 = (function (){var statearr_29190 = state_29140;(statearr_29190[(12)] = inst_29018);
(statearr_29190[(13)] = inst_29019);
(statearr_29190[(14)] = inst_29020);
(statearr_29190[(15)] = inst_29017);
return statearr_29190;
})();var statearr_29191_29260 = state_29140__$1;(statearr_29191_29260[(2)] = null);
(statearr_29191_29260[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (11)))
{var inst_29037 = (state_29140[(7)]);var inst_29017 = (state_29140[(15)]);var inst_29037__$1 = cljs.core.seq.call(null,inst_29017);var state_29140__$1 = (function (){var statearr_29192 = state_29140;(statearr_29192[(7)] = inst_29037__$1);
return statearr_29192;
})();if(inst_29037__$1)
{var statearr_29193_29261 = state_29140__$1;(statearr_29193_29261[(1)] = (16));
} else
{var statearr_29194_29262 = state_29140__$1;(statearr_29194_29262[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (9)))
{var inst_29065 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29195_29263 = state_29140__$1;(statearr_29195_29263[(2)] = inst_29065);
(statearr_29195_29263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (5)))
{var inst_29015 = cljs.core.deref.call(null,cs);var inst_29016 = cljs.core.seq.call(null,inst_29015);var inst_29017 = inst_29016;var inst_29018 = null;var inst_29019 = (0);var inst_29020 = (0);var state_29140__$1 = (function (){var statearr_29196 = state_29140;(statearr_29196[(12)] = inst_29018);
(statearr_29196[(13)] = inst_29019);
(statearr_29196[(14)] = inst_29020);
(statearr_29196[(15)] = inst_29017);
return statearr_29196;
})();var statearr_29197_29264 = state_29140__$1;(statearr_29197_29264[(2)] = null);
(statearr_29197_29264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (14)))
{var state_29140__$1 = state_29140;var statearr_29198_29265 = state_29140__$1;(statearr_29198_29265[(2)] = null);
(statearr_29198_29265[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (45)))
{var inst_29130 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29199_29266 = state_29140__$1;(statearr_29199_29266[(2)] = inst_29130);
(statearr_29199_29266[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (26)))
{var inst_29068 = (state_29140[(30)]);var inst_29126 = (state_29140[(2)]);var inst_29127 = cljs.core.seq.call(null,inst_29068);var state_29140__$1 = (function (){var statearr_29200 = state_29140;(statearr_29200[(32)] = inst_29126);
return statearr_29200;
})();if(inst_29127)
{var statearr_29201_29267 = state_29140__$1;(statearr_29201_29267[(1)] = (42));
} else
{var statearr_29202_29268 = state_29140__$1;(statearr_29202_29268[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (16)))
{var inst_29037 = (state_29140[(7)]);var inst_29039 = cljs.core.chunked_seq_QMARK_.call(null,inst_29037);var state_29140__$1 = state_29140;if(inst_29039)
{var statearr_29206_29269 = state_29140__$1;(statearr_29206_29269[(1)] = (19));
} else
{var statearr_29207_29270 = state_29140__$1;(statearr_29207_29270[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (38)))
{var inst_29119 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29208_29271 = state_29140__$1;(statearr_29208_29271[(2)] = inst_29119);
(statearr_29208_29271[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (30)))
{var inst_29076 = (state_29140[(18)]);var inst_29078 = (state_29140[(20)]);var inst_29077 = (state_29140[(9)]);var inst_29079 = (state_29140[(10)]);var inst_29093 = (state_29140[(2)]);var inst_29094 = (inst_29079 + (1));var tmp29203 = inst_29076;var tmp29204 = inst_29078;var tmp29205 = inst_29077;var inst_29076__$1 = tmp29203;var inst_29077__$1 = tmp29205;var inst_29078__$1 = tmp29204;var inst_29079__$1 = inst_29094;var state_29140__$1 = (function (){var statearr_29209 = state_29140;(statearr_29209[(18)] = inst_29076__$1);
(statearr_29209[(33)] = inst_29093);
(statearr_29209[(20)] = inst_29078__$1);
(statearr_29209[(9)] = inst_29077__$1);
(statearr_29209[(10)] = inst_29079__$1);
return statearr_29209;
})();var statearr_29210_29272 = state_29140__$1;(statearr_29210_29272[(2)] = null);
(statearr_29210_29272[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (10)))
{var inst_29018 = (state_29140[(12)]);var inst_29020 = (state_29140[(14)]);var inst_29026 = cljs.core._nth.call(null,inst_29018,inst_29020);var inst_29027 = cljs.core.nth.call(null,inst_29026,(0),null);var inst_29028 = cljs.core.nth.call(null,inst_29026,(1),null);var state_29140__$1 = (function (){var statearr_29211 = state_29140;(statearr_29211[(28)] = inst_29027);
return statearr_29211;
})();if(cljs.core.truth_(inst_29028))
{var statearr_29212_29273 = state_29140__$1;(statearr_29212_29273[(1)] = (13));
} else
{var statearr_29213_29274 = state_29140__$1;(statearr_29213_29274[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (18)))
{var inst_29061 = (state_29140[(2)]);var state_29140__$1 = state_29140;var statearr_29214_29275 = state_29140__$1;(statearr_29214_29275[(2)] = inst_29061);
(statearr_29214_29275[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (42)))
{var state_29140__$1 = state_29140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29140__$1,(45),dchan);
} else
{if((state_val_29141 === (37)))
{var inst_29097 = (state_29140[(17)]);var inst_29106 = cljs.core.first.call(null,inst_29097);var state_29140__$1 = (function (){var statearr_29215 = state_29140;(statearr_29215[(25)] = inst_29106);
return statearr_29215;
})();var statearr_29216_29276 = state_29140__$1;(statearr_29216_29276[(2)] = null);
(statearr_29216_29276[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29141 === (8)))
{var inst_29019 = (state_29140[(13)]);var inst_29020 = (state_29140[(14)]);var inst_29022 = (inst_29020 < inst_29019);var inst_29023 = inst_29022;var state_29140__$1 = state_29140;if(cljs.core.truth_(inst_29023))
{var statearr_29217_29277 = state_29140__$1;(statearr_29217_29277[(1)] = (10));
} else
{var statearr_29218_29278 = state_29140__$1;(statearr_29218_29278[(1)] = (11));
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
});})(c__5708__auto___29226,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___29226,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29222[(0)] = state_machine__5694__auto__);
(statearr_29222[(1)] = (1));
return statearr_29222;
});
var state_machine__5694__auto____1 = (function (state_29140){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29140);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29223){if((e29223 instanceof Object))
{var ex__5697__auto__ = e29223;var statearr_29224_29279 = state_29140;(statearr_29224_29279[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29223;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29280 = state_29140;
state_29140 = G__29280;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29140){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29226,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_29225 = f__5709__auto__.call(null);(statearr_29225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29226);
return statearr_29225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29226,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj29282 = {};return obj29282;
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
;var m = (function (){if(typeof cljs.core.async.t29392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29392 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29393){
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
this.meta29393 = meta29393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29392.cljs$lang$type = true;
cljs.core.async.t29392.cljs$lang$ctorStr = "cljs.core.async/t29392";
cljs.core.async.t29392.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29392");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29392.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29394){var self__ = this;
var _29394__$1 = this;return self__.meta29393;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29394,meta29393__$1){var self__ = this;
var _29394__$1 = this;return (new cljs.core.async.t29392(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29393__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29392 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29392(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29393){return (new cljs.core.async.t29392(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29393));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29392(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___29501 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29459){var state_val_29460 = (state_29459[(1)]);if((state_val_29460 === (7)))
{var inst_29408 = (state_29459[(7)]);var inst_29413 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29408);var state_29459__$1 = state_29459;var statearr_29461_29502 = state_29459__$1;(statearr_29461_29502[(2)] = inst_29413);
(statearr_29461_29502[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (20)))
{var inst_29423 = (state_29459[(8)]);var state_29459__$1 = state_29459;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29459__$1,(23),out,inst_29423);
} else
{if((state_val_29460 === (1)))
{var inst_29398 = (state_29459[(9)]);var inst_29398__$1 = calc_state.call(null);var inst_29399 = cljs.core.seq_QMARK_.call(null,inst_29398__$1);var state_29459__$1 = (function (){var statearr_29462 = state_29459;(statearr_29462[(9)] = inst_29398__$1);
return statearr_29462;
})();if(inst_29399)
{var statearr_29463_29503 = state_29459__$1;(statearr_29463_29503[(1)] = (2));
} else
{var statearr_29464_29504 = state_29459__$1;(statearr_29464_29504[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (4)))
{var inst_29398 = (state_29459[(9)]);var inst_29404 = (state_29459[(2)]);var inst_29405 = cljs.core.get.call(null,inst_29404,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29406 = cljs.core.get.call(null,inst_29404,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29407 = cljs.core.get.call(null,inst_29404,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29408 = inst_29398;var state_29459__$1 = (function (){var statearr_29465 = state_29459;(statearr_29465[(10)] = inst_29407);
(statearr_29465[(7)] = inst_29408);
(statearr_29465[(11)] = inst_29406);
(statearr_29465[(12)] = inst_29405);
return statearr_29465;
})();var statearr_29466_29505 = state_29459__$1;(statearr_29466_29505[(2)] = null);
(statearr_29466_29505[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (15)))
{var state_29459__$1 = state_29459;var statearr_29467_29506 = state_29459__$1;(statearr_29467_29506[(2)] = null);
(statearr_29467_29506[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (21)))
{var state_29459__$1 = state_29459;var statearr_29468_29507 = state_29459__$1;(statearr_29468_29507[(2)] = null);
(statearr_29468_29507[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (13)))
{var inst_29455 = (state_29459[(2)]);var state_29459__$1 = state_29459;var statearr_29469_29508 = state_29459__$1;(statearr_29469_29508[(2)] = inst_29455);
(statearr_29469_29508[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (22)))
{var inst_29416 = (state_29459[(13)]);var inst_29452 = (state_29459[(2)]);var inst_29408 = inst_29416;var state_29459__$1 = (function (){var statearr_29470 = state_29459;(statearr_29470[(7)] = inst_29408);
(statearr_29470[(14)] = inst_29452);
return statearr_29470;
})();var statearr_29471_29509 = state_29459__$1;(statearr_29471_29509[(2)] = null);
(statearr_29471_29509[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (6)))
{var inst_29457 = (state_29459[(2)]);var state_29459__$1 = state_29459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29459__$1,inst_29457);
} else
{if((state_val_29460 === (17)))
{var inst_29438 = (state_29459[(15)]);var state_29459__$1 = state_29459;var statearr_29472_29510 = state_29459__$1;(statearr_29472_29510[(2)] = inst_29438);
(statearr_29472_29510[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (3)))
{var inst_29398 = (state_29459[(9)]);var state_29459__$1 = state_29459;var statearr_29473_29511 = state_29459__$1;(statearr_29473_29511[(2)] = inst_29398);
(statearr_29473_29511[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (12)))
{var inst_29424 = (state_29459[(16)]);var inst_29438 = (state_29459[(15)]);var inst_29419 = (state_29459[(17)]);var inst_29438__$1 = inst_29419.call(null,inst_29424);var state_29459__$1 = (function (){var statearr_29474 = state_29459;(statearr_29474[(15)] = inst_29438__$1);
return statearr_29474;
})();if(cljs.core.truth_(inst_29438__$1))
{var statearr_29475_29512 = state_29459__$1;(statearr_29475_29512[(1)] = (17));
} else
{var statearr_29476_29513 = state_29459__$1;(statearr_29476_29513[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (2)))
{var inst_29398 = (state_29459[(9)]);var inst_29401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29398);var state_29459__$1 = state_29459;var statearr_29477_29514 = state_29459__$1;(statearr_29477_29514[(2)] = inst_29401);
(statearr_29477_29514[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (23)))
{var inst_29449 = (state_29459[(2)]);var state_29459__$1 = state_29459;var statearr_29478_29515 = state_29459__$1;(statearr_29478_29515[(2)] = inst_29449);
(statearr_29478_29515[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (19)))
{var inst_29446 = (state_29459[(2)]);var state_29459__$1 = state_29459;if(cljs.core.truth_(inst_29446))
{var statearr_29479_29516 = state_29459__$1;(statearr_29479_29516[(1)] = (20));
} else
{var statearr_29480_29517 = state_29459__$1;(statearr_29480_29517[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (11)))
{var inst_29423 = (state_29459[(8)]);var inst_29429 = (inst_29423 == null);var state_29459__$1 = state_29459;if(cljs.core.truth_(inst_29429))
{var statearr_29481_29518 = state_29459__$1;(statearr_29481_29518[(1)] = (14));
} else
{var statearr_29482_29519 = state_29459__$1;(statearr_29482_29519[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (9)))
{var inst_29416 = (state_29459[(13)]);var inst_29416__$1 = (state_29459[(2)]);var inst_29417 = cljs.core.get.call(null,inst_29416__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29418 = cljs.core.get.call(null,inst_29416__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29419 = cljs.core.get.call(null,inst_29416__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29459__$1 = (function (){var statearr_29483 = state_29459;(statearr_29483[(18)] = inst_29418);
(statearr_29483[(13)] = inst_29416__$1);
(statearr_29483[(17)] = inst_29419);
return statearr_29483;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29459__$1,(10),inst_29417);
} else
{if((state_val_29460 === (5)))
{var inst_29408 = (state_29459[(7)]);var inst_29411 = cljs.core.seq_QMARK_.call(null,inst_29408);var state_29459__$1 = state_29459;if(inst_29411)
{var statearr_29484_29520 = state_29459__$1;(statearr_29484_29520[(1)] = (7));
} else
{var statearr_29485_29521 = state_29459__$1;(statearr_29485_29521[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (14)))
{var inst_29424 = (state_29459[(16)]);var inst_29431 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29424);var state_29459__$1 = state_29459;var statearr_29486_29522 = state_29459__$1;(statearr_29486_29522[(2)] = inst_29431);
(statearr_29486_29522[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (16)))
{var inst_29434 = (state_29459[(2)]);var inst_29435 = calc_state.call(null);var inst_29408 = inst_29435;var state_29459__$1 = (function (){var statearr_29487 = state_29459;(statearr_29487[(7)] = inst_29408);
(statearr_29487[(19)] = inst_29434);
return statearr_29487;
})();var statearr_29488_29523 = state_29459__$1;(statearr_29488_29523[(2)] = null);
(statearr_29488_29523[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (10)))
{var inst_29424 = (state_29459[(16)]);var inst_29423 = (state_29459[(8)]);var inst_29422 = (state_29459[(2)]);var inst_29423__$1 = cljs.core.nth.call(null,inst_29422,(0),null);var inst_29424__$1 = cljs.core.nth.call(null,inst_29422,(1),null);var inst_29425 = (inst_29423__$1 == null);var inst_29426 = cljs.core._EQ_.call(null,inst_29424__$1,change);var inst_29427 = (inst_29425) || (inst_29426);var state_29459__$1 = (function (){var statearr_29489 = state_29459;(statearr_29489[(16)] = inst_29424__$1);
(statearr_29489[(8)] = inst_29423__$1);
return statearr_29489;
})();if(cljs.core.truth_(inst_29427))
{var statearr_29490_29524 = state_29459__$1;(statearr_29490_29524[(1)] = (11));
} else
{var statearr_29491_29525 = state_29459__$1;(statearr_29491_29525[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (18)))
{var inst_29424 = (state_29459[(16)]);var inst_29418 = (state_29459[(18)]);var inst_29419 = (state_29459[(17)]);var inst_29441 = cljs.core.empty_QMARK_.call(null,inst_29419);var inst_29442 = inst_29418.call(null,inst_29424);var inst_29443 = cljs.core.not.call(null,inst_29442);var inst_29444 = (inst_29441) && (inst_29443);var state_29459__$1 = state_29459;var statearr_29492_29526 = state_29459__$1;(statearr_29492_29526[(2)] = inst_29444);
(statearr_29492_29526[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29460 === (8)))
{var inst_29408 = (state_29459[(7)]);var state_29459__$1 = state_29459;var statearr_29493_29527 = state_29459__$1;(statearr_29493_29527[(2)] = inst_29408);
(statearr_29493_29527[(1)] = (9));
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
});})(c__5708__auto___29501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___29501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29497[(0)] = state_machine__5694__auto__);
(statearr_29497[(1)] = (1));
return statearr_29497;
});
var state_machine__5694__auto____1 = (function (state_29459){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29459);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29498){if((e29498 instanceof Object))
{var ex__5697__auto__ = e29498;var statearr_29499_29528 = state_29459;(statearr_29499_29528[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29459);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29498;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29529 = state_29459;
state_29459 = G__29529;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29459){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_29500 = f__5709__auto__.call(null);(statearr_29500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29501);
return statearr_29500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj29531 = {};return obj29531;
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
return (function (p1__29532_SHARP_){if(cljs.core.truth_(p1__29532_SHARP_.call(null,topic)))
{return p1__29532_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29532_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29657 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29657 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29658){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29658 = meta29658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29657.cljs$lang$type = true;
cljs.core.async.t29657.cljs$lang$ctorStr = "cljs.core.async/t29657";
cljs.core.async.t29657.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29657");
});})(mults,ensure_mult))
;
cljs.core.async.t29657.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29657.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29657.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29657.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29657.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29657.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29657.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29659){var self__ = this;
var _29659__$1 = this;return self__.meta29658;
});})(mults,ensure_mult))
;
cljs.core.async.t29657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29659,meta29658__$1){var self__ = this;
var _29659__$1 = this;return (new cljs.core.async.t29657(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29658__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29657 = ((function (mults,ensure_mult){
return (function __GT_t29657(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29658){return (new cljs.core.async.t29657(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29658));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29657(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___29781 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29781,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29781,mults,ensure_mult,p){
return (function (state_29733){var state_val_29734 = (state_29733[(1)]);if((state_val_29734 === (7)))
{var inst_29729 = (state_29733[(2)]);var state_29733__$1 = state_29733;var statearr_29735_29782 = state_29733__$1;(statearr_29735_29782[(2)] = inst_29729);
(statearr_29735_29782[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (20)))
{var state_29733__$1 = state_29733;var statearr_29736_29783 = state_29733__$1;(statearr_29736_29783[(2)] = null);
(statearr_29736_29783[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (1)))
{var state_29733__$1 = state_29733;var statearr_29737_29784 = state_29733__$1;(statearr_29737_29784[(2)] = null);
(statearr_29737_29784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (24)))
{var inst_29712 = (state_29733[(7)]);var inst_29662 = (state_29733[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29733,(23),Object,null,(22));var inst_29719 = cljs.core.async.muxch_STAR_.call(null,inst_29712);var state_29733__$1 = state_29733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29733__$1,(25),inst_29719,inst_29662);
} else
{if((state_val_29734 === (4)))
{var inst_29662 = (state_29733[(8)]);var inst_29662__$1 = (state_29733[(2)]);var inst_29663 = (inst_29662__$1 == null);var state_29733__$1 = (function (){var statearr_29738 = state_29733;(statearr_29738[(8)] = inst_29662__$1);
return statearr_29738;
})();if(cljs.core.truth_(inst_29663))
{var statearr_29739_29785 = state_29733__$1;(statearr_29739_29785[(1)] = (5));
} else
{var statearr_29740_29786 = state_29733__$1;(statearr_29740_29786[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (15)))
{var inst_29704 = (state_29733[(2)]);var state_29733__$1 = state_29733;var statearr_29741_29787 = state_29733__$1;(statearr_29741_29787[(2)] = inst_29704);
(statearr_29741_29787[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (21)))
{var inst_29726 = (state_29733[(2)]);var state_29733__$1 = (function (){var statearr_29742 = state_29733;(statearr_29742[(9)] = inst_29726);
return statearr_29742;
})();var statearr_29743_29788 = state_29733__$1;(statearr_29743_29788[(2)] = null);
(statearr_29743_29788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (13)))
{var inst_29686 = (state_29733[(10)]);var inst_29688 = cljs.core.chunked_seq_QMARK_.call(null,inst_29686);var state_29733__$1 = state_29733;if(inst_29688)
{var statearr_29744_29789 = state_29733__$1;(statearr_29744_29789[(1)] = (16));
} else
{var statearr_29745_29790 = state_29733__$1;(statearr_29745_29790[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (22)))
{var inst_29723 = (state_29733[(2)]);var state_29733__$1 = state_29733;var statearr_29746_29791 = state_29733__$1;(statearr_29746_29791[(2)] = inst_29723);
(statearr_29746_29791[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (6)))
{var inst_29710 = (state_29733[(11)]);var inst_29712 = (state_29733[(7)]);var inst_29662 = (state_29733[(8)]);var inst_29710__$1 = topic_fn.call(null,inst_29662);var inst_29711 = cljs.core.deref.call(null,mults);var inst_29712__$1 = cljs.core.get.call(null,inst_29711,inst_29710__$1);var state_29733__$1 = (function (){var statearr_29747 = state_29733;(statearr_29747[(11)] = inst_29710__$1);
(statearr_29747[(7)] = inst_29712__$1);
return statearr_29747;
})();if(cljs.core.truth_(inst_29712__$1))
{var statearr_29748_29792 = state_29733__$1;(statearr_29748_29792[(1)] = (19));
} else
{var statearr_29749_29793 = state_29733__$1;(statearr_29749_29793[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (25)))
{var inst_29721 = (state_29733[(2)]);var state_29733__$1 = state_29733;var statearr_29750_29794 = state_29733__$1;(statearr_29750_29794[(2)] = inst_29721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29733__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (17)))
{var inst_29686 = (state_29733[(10)]);var inst_29695 = cljs.core.first.call(null,inst_29686);var inst_29696 = cljs.core.async.muxch_STAR_.call(null,inst_29695);var inst_29697 = cljs.core.async.close_BANG_.call(null,inst_29696);var inst_29698 = cljs.core.next.call(null,inst_29686);var inst_29672 = inst_29698;var inst_29673 = null;var inst_29674 = (0);var inst_29675 = (0);var state_29733__$1 = (function (){var statearr_29751 = state_29733;(statearr_29751[(12)] = inst_29675);
(statearr_29751[(13)] = inst_29674);
(statearr_29751[(14)] = inst_29697);
(statearr_29751[(15)] = inst_29672);
(statearr_29751[(16)] = inst_29673);
return statearr_29751;
})();var statearr_29752_29795 = state_29733__$1;(statearr_29752_29795[(2)] = null);
(statearr_29752_29795[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (3)))
{var inst_29731 = (state_29733[(2)]);var state_29733__$1 = state_29733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29733__$1,inst_29731);
} else
{if((state_val_29734 === (12)))
{var inst_29706 = (state_29733[(2)]);var state_29733__$1 = state_29733;var statearr_29753_29796 = state_29733__$1;(statearr_29753_29796[(2)] = inst_29706);
(statearr_29753_29796[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (2)))
{var state_29733__$1 = state_29733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29733__$1,(4),ch);
} else
{if((state_val_29734 === (23)))
{var inst_29710 = (state_29733[(11)]);var inst_29714 = (state_29733[(2)]);var inst_29715 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29710);var state_29733__$1 = (function (){var statearr_29754 = state_29733;(statearr_29754[(17)] = inst_29714);
return statearr_29754;
})();var statearr_29755_29797 = state_29733__$1;(statearr_29755_29797[(2)] = inst_29715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29733__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (19)))
{var state_29733__$1 = state_29733;var statearr_29756_29798 = state_29733__$1;(statearr_29756_29798[(2)] = null);
(statearr_29756_29798[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (11)))
{var inst_29672 = (state_29733[(15)]);var inst_29686 = (state_29733[(10)]);var inst_29686__$1 = cljs.core.seq.call(null,inst_29672);var state_29733__$1 = (function (){var statearr_29757 = state_29733;(statearr_29757[(10)] = inst_29686__$1);
return statearr_29757;
})();if(inst_29686__$1)
{var statearr_29758_29799 = state_29733__$1;(statearr_29758_29799[(1)] = (13));
} else
{var statearr_29759_29800 = state_29733__$1;(statearr_29759_29800[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (9)))
{var inst_29708 = (state_29733[(2)]);var state_29733__$1 = state_29733;var statearr_29760_29801 = state_29733__$1;(statearr_29760_29801[(2)] = inst_29708);
(statearr_29760_29801[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (5)))
{var inst_29669 = cljs.core.deref.call(null,mults);var inst_29670 = cljs.core.vals.call(null,inst_29669);var inst_29671 = cljs.core.seq.call(null,inst_29670);var inst_29672 = inst_29671;var inst_29673 = null;var inst_29674 = (0);var inst_29675 = (0);var state_29733__$1 = (function (){var statearr_29761 = state_29733;(statearr_29761[(12)] = inst_29675);
(statearr_29761[(13)] = inst_29674);
(statearr_29761[(15)] = inst_29672);
(statearr_29761[(16)] = inst_29673);
return statearr_29761;
})();var statearr_29762_29802 = state_29733__$1;(statearr_29762_29802[(2)] = null);
(statearr_29762_29802[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (14)))
{var state_29733__$1 = state_29733;var statearr_29766_29803 = state_29733__$1;(statearr_29766_29803[(2)] = null);
(statearr_29766_29803[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (16)))
{var inst_29686 = (state_29733[(10)]);var inst_29690 = cljs.core.chunk_first.call(null,inst_29686);var inst_29691 = cljs.core.chunk_rest.call(null,inst_29686);var inst_29692 = cljs.core.count.call(null,inst_29690);var inst_29672 = inst_29691;var inst_29673 = inst_29690;var inst_29674 = inst_29692;var inst_29675 = (0);var state_29733__$1 = (function (){var statearr_29767 = state_29733;(statearr_29767[(12)] = inst_29675);
(statearr_29767[(13)] = inst_29674);
(statearr_29767[(15)] = inst_29672);
(statearr_29767[(16)] = inst_29673);
return statearr_29767;
})();var statearr_29768_29804 = state_29733__$1;(statearr_29768_29804[(2)] = null);
(statearr_29768_29804[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (10)))
{var inst_29675 = (state_29733[(12)]);var inst_29674 = (state_29733[(13)]);var inst_29672 = (state_29733[(15)]);var inst_29673 = (state_29733[(16)]);var inst_29680 = cljs.core._nth.call(null,inst_29673,inst_29675);var inst_29681 = cljs.core.async.muxch_STAR_.call(null,inst_29680);var inst_29682 = cljs.core.async.close_BANG_.call(null,inst_29681);var inst_29683 = (inst_29675 + (1));var tmp29763 = inst_29674;var tmp29764 = inst_29672;var tmp29765 = inst_29673;var inst_29672__$1 = tmp29764;var inst_29673__$1 = tmp29765;var inst_29674__$1 = tmp29763;var inst_29675__$1 = inst_29683;var state_29733__$1 = (function (){var statearr_29769 = state_29733;(statearr_29769[(12)] = inst_29675__$1);
(statearr_29769[(13)] = inst_29674__$1);
(statearr_29769[(18)] = inst_29682);
(statearr_29769[(15)] = inst_29672__$1);
(statearr_29769[(16)] = inst_29673__$1);
return statearr_29769;
})();var statearr_29770_29805 = state_29733__$1;(statearr_29770_29805[(2)] = null);
(statearr_29770_29805[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (18)))
{var inst_29701 = (state_29733[(2)]);var state_29733__$1 = state_29733;var statearr_29771_29806 = state_29733__$1;(statearr_29771_29806[(2)] = inst_29701);
(statearr_29771_29806[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29734 === (8)))
{var inst_29675 = (state_29733[(12)]);var inst_29674 = (state_29733[(13)]);var inst_29677 = (inst_29675 < inst_29674);var inst_29678 = inst_29677;var state_29733__$1 = state_29733;if(cljs.core.truth_(inst_29678))
{var statearr_29772_29807 = state_29733__$1;(statearr_29772_29807[(1)] = (10));
} else
{var statearr_29773_29808 = state_29733__$1;(statearr_29773_29808[(1)] = (11));
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
});})(c__5708__auto___29781,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___29781,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29777[(0)] = state_machine__5694__auto__);
(statearr_29777[(1)] = (1));
return statearr_29777;
});
var state_machine__5694__auto____1 = (function (state_29733){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29778){if((e29778 instanceof Object))
{var ex__5697__auto__ = e29778;var statearr_29779_29809 = state_29733;(statearr_29779_29809[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29778;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29810 = state_29733;
state_29733 = G__29810;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29733){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29781,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_29780 = f__5709__auto__.call(null);(statearr_29780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29781);
return statearr_29780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29781,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___29947 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29947,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29947,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29917){var state_val_29918 = (state_29917[(1)]);if((state_val_29918 === (7)))
{var state_29917__$1 = state_29917;var statearr_29919_29948 = state_29917__$1;(statearr_29919_29948[(2)] = null);
(statearr_29919_29948[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (1)))
{var state_29917__$1 = state_29917;var statearr_29920_29949 = state_29917__$1;(statearr_29920_29949[(2)] = null);
(statearr_29920_29949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (4)))
{var inst_29881 = (state_29917[(7)]);var inst_29883 = (inst_29881 < cnt);var state_29917__$1 = state_29917;if(cljs.core.truth_(inst_29883))
{var statearr_29921_29950 = state_29917__$1;(statearr_29921_29950[(1)] = (6));
} else
{var statearr_29922_29951 = state_29917__$1;(statearr_29922_29951[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (15)))
{var inst_29913 = (state_29917[(2)]);var state_29917__$1 = state_29917;var statearr_29923_29952 = state_29917__$1;(statearr_29923_29952[(2)] = inst_29913);
(statearr_29923_29952[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (13)))
{var inst_29906 = cljs.core.async.close_BANG_.call(null,out);var state_29917__$1 = state_29917;var statearr_29924_29953 = state_29917__$1;(statearr_29924_29953[(2)] = inst_29906);
(statearr_29924_29953[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (6)))
{var state_29917__$1 = state_29917;var statearr_29925_29954 = state_29917__$1;(statearr_29925_29954[(2)] = null);
(statearr_29925_29954[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (3)))
{var inst_29915 = (state_29917[(2)]);var state_29917__$1 = state_29917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29917__$1,inst_29915);
} else
{if((state_val_29918 === (12)))
{var inst_29903 = (state_29917[(8)]);var inst_29903__$1 = (state_29917[(2)]);var inst_29904 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29903__$1);var state_29917__$1 = (function (){var statearr_29926 = state_29917;(statearr_29926[(8)] = inst_29903__$1);
return statearr_29926;
})();if(cljs.core.truth_(inst_29904))
{var statearr_29927_29955 = state_29917__$1;(statearr_29927_29955[(1)] = (13));
} else
{var statearr_29928_29956 = state_29917__$1;(statearr_29928_29956[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (2)))
{var inst_29880 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29881 = (0);var state_29917__$1 = (function (){var statearr_29929 = state_29917;(statearr_29929[(9)] = inst_29880);
(statearr_29929[(7)] = inst_29881);
return statearr_29929;
})();var statearr_29930_29957 = state_29917__$1;(statearr_29930_29957[(2)] = null);
(statearr_29930_29957[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (11)))
{var inst_29881 = (state_29917[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29917,(10),Object,null,(9));var inst_29890 = chs__$1.call(null,inst_29881);var inst_29891 = done.call(null,inst_29881);var inst_29892 = cljs.core.async.take_BANG_.call(null,inst_29890,inst_29891);var state_29917__$1 = state_29917;var statearr_29931_29958 = state_29917__$1;(statearr_29931_29958[(2)] = inst_29892);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29917__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (9)))
{var inst_29881 = (state_29917[(7)]);var inst_29894 = (state_29917[(2)]);var inst_29895 = (inst_29881 + (1));var inst_29881__$1 = inst_29895;var state_29917__$1 = (function (){var statearr_29932 = state_29917;(statearr_29932[(7)] = inst_29881__$1);
(statearr_29932[(10)] = inst_29894);
return statearr_29932;
})();var statearr_29933_29959 = state_29917__$1;(statearr_29933_29959[(2)] = null);
(statearr_29933_29959[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (5)))
{var inst_29901 = (state_29917[(2)]);var state_29917__$1 = (function (){var statearr_29934 = state_29917;(statearr_29934[(11)] = inst_29901);
return statearr_29934;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29917__$1,(12),dchan);
} else
{if((state_val_29918 === (14)))
{var inst_29903 = (state_29917[(8)]);var inst_29908 = cljs.core.apply.call(null,f,inst_29903);var state_29917__$1 = state_29917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29917__$1,(16),out,inst_29908);
} else
{if((state_val_29918 === (16)))
{var inst_29910 = (state_29917[(2)]);var state_29917__$1 = (function (){var statearr_29935 = state_29917;(statearr_29935[(12)] = inst_29910);
return statearr_29935;
})();var statearr_29936_29960 = state_29917__$1;(statearr_29936_29960[(2)] = null);
(statearr_29936_29960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (10)))
{var inst_29885 = (state_29917[(2)]);var inst_29886 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29917__$1 = (function (){var statearr_29937 = state_29917;(statearr_29937[(13)] = inst_29885);
return statearr_29937;
})();var statearr_29938_29961 = state_29917__$1;(statearr_29938_29961[(2)] = inst_29886);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29917__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (8)))
{var inst_29899 = (state_29917[(2)]);var state_29917__$1 = state_29917;var statearr_29939_29962 = state_29917__$1;(statearr_29939_29962[(2)] = inst_29899);
(statearr_29939_29962[(1)] = (5));
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
});})(c__5708__auto___29947,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___29947,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29943[(0)] = state_machine__5694__auto__);
(statearr_29943[(1)] = (1));
return statearr_29943;
});
var state_machine__5694__auto____1 = (function (state_29917){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29917);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object))
{var ex__5697__auto__ = e29944;var statearr_29945_29963 = state_29917;(statearr_29945_29963[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29964 = state_29917;
state_29917 = G__29964;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29917){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29947,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_29946 = f__5709__auto__.call(null);(statearr_29946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29947);
return statearr_29946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29947,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30072 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30072,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30072,out){
return (function (state_30048){var state_val_30049 = (state_30048[(1)]);if((state_val_30049 === (7)))
{var inst_30028 = (state_30048[(7)]);var inst_30027 = (state_30048[(8)]);var inst_30027__$1 = (state_30048[(2)]);var inst_30028__$1 = cljs.core.nth.call(null,inst_30027__$1,(0),null);var inst_30029 = cljs.core.nth.call(null,inst_30027__$1,(1),null);var inst_30030 = (inst_30028__$1 == null);var state_30048__$1 = (function (){var statearr_30050 = state_30048;(statearr_30050[(7)] = inst_30028__$1);
(statearr_30050[(8)] = inst_30027__$1);
(statearr_30050[(9)] = inst_30029);
return statearr_30050;
})();if(cljs.core.truth_(inst_30030))
{var statearr_30051_30073 = state_30048__$1;(statearr_30051_30073[(1)] = (8));
} else
{var statearr_30052_30074 = state_30048__$1;(statearr_30052_30074[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30049 === (1)))
{var inst_30019 = cljs.core.vec.call(null,chs);var inst_30020 = inst_30019;var state_30048__$1 = (function (){var statearr_30053 = state_30048;(statearr_30053[(10)] = inst_30020);
return statearr_30053;
})();var statearr_30054_30075 = state_30048__$1;(statearr_30054_30075[(2)] = null);
(statearr_30054_30075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30049 === (4)))
{var inst_30020 = (state_30048[(10)]);var state_30048__$1 = state_30048;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30048__$1,(7),inst_30020);
} else
{if((state_val_30049 === (6)))
{var inst_30044 = (state_30048[(2)]);var state_30048__$1 = state_30048;var statearr_30055_30076 = state_30048__$1;(statearr_30055_30076[(2)] = inst_30044);
(statearr_30055_30076[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30049 === (3)))
{var inst_30046 = (state_30048[(2)]);var state_30048__$1 = state_30048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30048__$1,inst_30046);
} else
{if((state_val_30049 === (2)))
{var inst_30020 = (state_30048[(10)]);var inst_30022 = cljs.core.count.call(null,inst_30020);var inst_30023 = (inst_30022 > (0));var state_30048__$1 = state_30048;if(cljs.core.truth_(inst_30023))
{var statearr_30057_30077 = state_30048__$1;(statearr_30057_30077[(1)] = (4));
} else
{var statearr_30058_30078 = state_30048__$1;(statearr_30058_30078[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30049 === (11)))
{var inst_30020 = (state_30048[(10)]);var inst_30037 = (state_30048[(2)]);var tmp30056 = inst_30020;var inst_30020__$1 = tmp30056;var state_30048__$1 = (function (){var statearr_30059 = state_30048;(statearr_30059[(10)] = inst_30020__$1);
(statearr_30059[(11)] = inst_30037);
return statearr_30059;
})();var statearr_30060_30079 = state_30048__$1;(statearr_30060_30079[(2)] = null);
(statearr_30060_30079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30049 === (9)))
{var inst_30028 = (state_30048[(7)]);var state_30048__$1 = state_30048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30048__$1,(11),out,inst_30028);
} else
{if((state_val_30049 === (5)))
{var inst_30042 = cljs.core.async.close_BANG_.call(null,out);var state_30048__$1 = state_30048;var statearr_30061_30080 = state_30048__$1;(statearr_30061_30080[(2)] = inst_30042);
(statearr_30061_30080[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30049 === (10)))
{var inst_30040 = (state_30048[(2)]);var state_30048__$1 = state_30048;var statearr_30062_30081 = state_30048__$1;(statearr_30062_30081[(2)] = inst_30040);
(statearr_30062_30081[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30049 === (8)))
{var inst_30020 = (state_30048[(10)]);var inst_30028 = (state_30048[(7)]);var inst_30027 = (state_30048[(8)]);var inst_30029 = (state_30048[(9)]);var inst_30032 = (function (){var c = inst_30029;var v = inst_30028;var vec__30025 = inst_30027;var cs = inst_30020;return ((function (c,v,vec__30025,cs,inst_30020,inst_30028,inst_30027,inst_30029,state_val_30049,c__5708__auto___30072,out){
return (function (p1__29965_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29965_SHARP_);
});
;})(c,v,vec__30025,cs,inst_30020,inst_30028,inst_30027,inst_30029,state_val_30049,c__5708__auto___30072,out))
})();var inst_30033 = cljs.core.filterv.call(null,inst_30032,inst_30020);var inst_30020__$1 = inst_30033;var state_30048__$1 = (function (){var statearr_30063 = state_30048;(statearr_30063[(10)] = inst_30020__$1);
return statearr_30063;
})();var statearr_30064_30082 = state_30048__$1;(statearr_30064_30082[(2)] = null);
(statearr_30064_30082[(1)] = (2));
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
});})(c__5708__auto___30072,out))
;return ((function (switch__5693__auto__,c__5708__auto___30072,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30068 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30068[(0)] = state_machine__5694__auto__);
(statearr_30068[(1)] = (1));
return statearr_30068;
});
var state_machine__5694__auto____1 = (function (state_30048){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30048);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30069){if((e30069 instanceof Object))
{var ex__5697__auto__ = e30069;var statearr_30070_30083 = state_30048;(statearr_30070_30083[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30069;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30084 = state_30048;
state_30048 = G__30084;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30048){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30072,out))
})();var state__5710__auto__ = (function (){var statearr_30071 = f__5709__auto__.call(null);(statearr_30071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30072);
return statearr_30071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30072,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30177 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30177,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30177,out){
return (function (state_30154){var state_val_30155 = (state_30154[(1)]);if((state_val_30155 === (7)))
{var inst_30136 = (state_30154[(7)]);var inst_30136__$1 = (state_30154[(2)]);var inst_30137 = (inst_30136__$1 == null);var inst_30138 = cljs.core.not.call(null,inst_30137);var state_30154__$1 = (function (){var statearr_30156 = state_30154;(statearr_30156[(7)] = inst_30136__$1);
return statearr_30156;
})();if(inst_30138)
{var statearr_30157_30178 = state_30154__$1;(statearr_30157_30178[(1)] = (8));
} else
{var statearr_30158_30179 = state_30154__$1;(statearr_30158_30179[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (1)))
{var inst_30131 = (0);var state_30154__$1 = (function (){var statearr_30159 = state_30154;(statearr_30159[(8)] = inst_30131);
return statearr_30159;
})();var statearr_30160_30180 = state_30154__$1;(statearr_30160_30180[(2)] = null);
(statearr_30160_30180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (4)))
{var state_30154__$1 = state_30154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30154__$1,(7),ch);
} else
{if((state_val_30155 === (6)))
{var inst_30149 = (state_30154[(2)]);var state_30154__$1 = state_30154;var statearr_30161_30181 = state_30154__$1;(statearr_30161_30181[(2)] = inst_30149);
(statearr_30161_30181[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (3)))
{var inst_30151 = (state_30154[(2)]);var inst_30152 = cljs.core.async.close_BANG_.call(null,out);var state_30154__$1 = (function (){var statearr_30162 = state_30154;(statearr_30162[(9)] = inst_30151);
return statearr_30162;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30154__$1,inst_30152);
} else
{if((state_val_30155 === (2)))
{var inst_30131 = (state_30154[(8)]);var inst_30133 = (inst_30131 < n);var state_30154__$1 = state_30154;if(cljs.core.truth_(inst_30133))
{var statearr_30163_30182 = state_30154__$1;(statearr_30163_30182[(1)] = (4));
} else
{var statearr_30164_30183 = state_30154__$1;(statearr_30164_30183[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (11)))
{var inst_30131 = (state_30154[(8)]);var inst_30141 = (state_30154[(2)]);var inst_30142 = (inst_30131 + (1));var inst_30131__$1 = inst_30142;var state_30154__$1 = (function (){var statearr_30165 = state_30154;(statearr_30165[(8)] = inst_30131__$1);
(statearr_30165[(10)] = inst_30141);
return statearr_30165;
})();var statearr_30166_30184 = state_30154__$1;(statearr_30166_30184[(2)] = null);
(statearr_30166_30184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (9)))
{var state_30154__$1 = state_30154;var statearr_30167_30185 = state_30154__$1;(statearr_30167_30185[(2)] = null);
(statearr_30167_30185[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (5)))
{var state_30154__$1 = state_30154;var statearr_30168_30186 = state_30154__$1;(statearr_30168_30186[(2)] = null);
(statearr_30168_30186[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (10)))
{var inst_30146 = (state_30154[(2)]);var state_30154__$1 = state_30154;var statearr_30169_30187 = state_30154__$1;(statearr_30169_30187[(2)] = inst_30146);
(statearr_30169_30187[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30155 === (8)))
{var inst_30136 = (state_30154[(7)]);var state_30154__$1 = state_30154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30154__$1,(11),out,inst_30136);
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
});})(c__5708__auto___30177,out))
;return ((function (switch__5693__auto__,c__5708__auto___30177,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30173 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30173[(0)] = state_machine__5694__auto__);
(statearr_30173[(1)] = (1));
return statearr_30173;
});
var state_machine__5694__auto____1 = (function (state_30154){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30154);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30174){if((e30174 instanceof Object))
{var ex__5697__auto__ = e30174;var statearr_30175_30188 = state_30154;(statearr_30175_30188[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30154);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30174;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30189 = state_30154;
state_30154 = G__30189;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30154){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30177,out))
})();var state__5710__auto__ = (function (){var statearr_30176 = f__5709__auto__.call(null);(statearr_30176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30177);
return statearr_30176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30177,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30286 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30286,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30286,out){
return (function (state_30261){var state_val_30262 = (state_30261[(1)]);if((state_val_30262 === (7)))
{var inst_30256 = (state_30261[(2)]);var state_30261__$1 = state_30261;var statearr_30263_30287 = state_30261__$1;(statearr_30263_30287[(2)] = inst_30256);
(statearr_30263_30287[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30262 === (1)))
{var inst_30238 = null;var state_30261__$1 = (function (){var statearr_30264 = state_30261;(statearr_30264[(7)] = inst_30238);
return statearr_30264;
})();var statearr_30265_30288 = state_30261__$1;(statearr_30265_30288[(2)] = null);
(statearr_30265_30288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30262 === (4)))
{var inst_30241 = (state_30261[(8)]);var inst_30241__$1 = (state_30261[(2)]);var inst_30242 = (inst_30241__$1 == null);var inst_30243 = cljs.core.not.call(null,inst_30242);var state_30261__$1 = (function (){var statearr_30266 = state_30261;(statearr_30266[(8)] = inst_30241__$1);
return statearr_30266;
})();if(inst_30243)
{var statearr_30267_30289 = state_30261__$1;(statearr_30267_30289[(1)] = (5));
} else
{var statearr_30268_30290 = state_30261__$1;(statearr_30268_30290[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30262 === (6)))
{var state_30261__$1 = state_30261;var statearr_30269_30291 = state_30261__$1;(statearr_30269_30291[(2)] = null);
(statearr_30269_30291[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30262 === (3)))
{var inst_30258 = (state_30261[(2)]);var inst_30259 = cljs.core.async.close_BANG_.call(null,out);var state_30261__$1 = (function (){var statearr_30270 = state_30261;(statearr_30270[(9)] = inst_30258);
return statearr_30270;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30261__$1,inst_30259);
} else
{if((state_val_30262 === (2)))
{var state_30261__$1 = state_30261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30261__$1,(4),ch);
} else
{if((state_val_30262 === (11)))
{var inst_30241 = (state_30261[(8)]);var inst_30250 = (state_30261[(2)]);var inst_30238 = inst_30241;var state_30261__$1 = (function (){var statearr_30271 = state_30261;(statearr_30271[(7)] = inst_30238);
(statearr_30271[(10)] = inst_30250);
return statearr_30271;
})();var statearr_30272_30292 = state_30261__$1;(statearr_30272_30292[(2)] = null);
(statearr_30272_30292[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30262 === (9)))
{var inst_30241 = (state_30261[(8)]);var state_30261__$1 = state_30261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30261__$1,(11),out,inst_30241);
} else
{if((state_val_30262 === (5)))
{var inst_30238 = (state_30261[(7)]);var inst_30241 = (state_30261[(8)]);var inst_30245 = cljs.core._EQ_.call(null,inst_30241,inst_30238);var state_30261__$1 = state_30261;if(inst_30245)
{var statearr_30274_30293 = state_30261__$1;(statearr_30274_30293[(1)] = (8));
} else
{var statearr_30275_30294 = state_30261__$1;(statearr_30275_30294[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30262 === (10)))
{var inst_30253 = (state_30261[(2)]);var state_30261__$1 = state_30261;var statearr_30276_30295 = state_30261__$1;(statearr_30276_30295[(2)] = inst_30253);
(statearr_30276_30295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30262 === (8)))
{var inst_30238 = (state_30261[(7)]);var tmp30273 = inst_30238;var inst_30238__$1 = tmp30273;var state_30261__$1 = (function (){var statearr_30277 = state_30261;(statearr_30277[(7)] = inst_30238__$1);
return statearr_30277;
})();var statearr_30278_30296 = state_30261__$1;(statearr_30278_30296[(2)] = null);
(statearr_30278_30296[(1)] = (2));
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
});})(c__5708__auto___30286,out))
;return ((function (switch__5693__auto__,c__5708__auto___30286,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30282 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30282[(0)] = state_machine__5694__auto__);
(statearr_30282[(1)] = (1));
return statearr_30282;
});
var state_machine__5694__auto____1 = (function (state_30261){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30261);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30283){if((e30283 instanceof Object))
{var ex__5697__auto__ = e30283;var statearr_30284_30297 = state_30261;(statearr_30284_30297[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30283;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30298 = state_30261;
state_30261 = G__30298;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30261){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30286,out))
})();var state__5710__auto__ = (function (){var statearr_30285 = f__5709__auto__.call(null);(statearr_30285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30286);
return statearr_30285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30286,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30433 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30433,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30433,out){
return (function (state_30403){var state_val_30404 = (state_30403[(1)]);if((state_val_30404 === (7)))
{var inst_30399 = (state_30403[(2)]);var state_30403__$1 = state_30403;var statearr_30405_30434 = state_30403__$1;(statearr_30405_30434[(2)] = inst_30399);
(statearr_30405_30434[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (1)))
{var inst_30366 = (new Array(n));var inst_30367 = inst_30366;var inst_30368 = (0);var state_30403__$1 = (function (){var statearr_30406 = state_30403;(statearr_30406[(7)] = inst_30368);
(statearr_30406[(8)] = inst_30367);
return statearr_30406;
})();var statearr_30407_30435 = state_30403__$1;(statearr_30407_30435[(2)] = null);
(statearr_30407_30435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (4)))
{var inst_30371 = (state_30403[(9)]);var inst_30371__$1 = (state_30403[(2)]);var inst_30372 = (inst_30371__$1 == null);var inst_30373 = cljs.core.not.call(null,inst_30372);var state_30403__$1 = (function (){var statearr_30408 = state_30403;(statearr_30408[(9)] = inst_30371__$1);
return statearr_30408;
})();if(inst_30373)
{var statearr_30409_30436 = state_30403__$1;(statearr_30409_30436[(1)] = (5));
} else
{var statearr_30410_30437 = state_30403__$1;(statearr_30410_30437[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (15)))
{var inst_30393 = (state_30403[(2)]);var state_30403__$1 = state_30403;var statearr_30411_30438 = state_30403__$1;(statearr_30411_30438[(2)] = inst_30393);
(statearr_30411_30438[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (13)))
{var state_30403__$1 = state_30403;var statearr_30412_30439 = state_30403__$1;(statearr_30412_30439[(2)] = null);
(statearr_30412_30439[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (6)))
{var inst_30368 = (state_30403[(7)]);var inst_30389 = (inst_30368 > (0));var state_30403__$1 = state_30403;if(cljs.core.truth_(inst_30389))
{var statearr_30413_30440 = state_30403__$1;(statearr_30413_30440[(1)] = (12));
} else
{var statearr_30414_30441 = state_30403__$1;(statearr_30414_30441[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (3)))
{var inst_30401 = (state_30403[(2)]);var state_30403__$1 = state_30403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30403__$1,inst_30401);
} else
{if((state_val_30404 === (12)))
{var inst_30367 = (state_30403[(8)]);var inst_30391 = cljs.core.vec.call(null,inst_30367);var state_30403__$1 = state_30403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30403__$1,(15),out,inst_30391);
} else
{if((state_val_30404 === (2)))
{var state_30403__$1 = state_30403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30403__$1,(4),ch);
} else
{if((state_val_30404 === (11)))
{var inst_30383 = (state_30403[(2)]);var inst_30384 = (new Array(n));var inst_30367 = inst_30384;var inst_30368 = (0);var state_30403__$1 = (function (){var statearr_30415 = state_30403;(statearr_30415[(7)] = inst_30368);
(statearr_30415[(10)] = inst_30383);
(statearr_30415[(8)] = inst_30367);
return statearr_30415;
})();var statearr_30416_30442 = state_30403__$1;(statearr_30416_30442[(2)] = null);
(statearr_30416_30442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (9)))
{var inst_30367 = (state_30403[(8)]);var inst_30381 = cljs.core.vec.call(null,inst_30367);var state_30403__$1 = state_30403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30403__$1,(11),out,inst_30381);
} else
{if((state_val_30404 === (5)))
{var inst_30368 = (state_30403[(7)]);var inst_30376 = (state_30403[(11)]);var inst_30367 = (state_30403[(8)]);var inst_30371 = (state_30403[(9)]);var inst_30375 = (inst_30367[inst_30368] = inst_30371);var inst_30376__$1 = (inst_30368 + (1));var inst_30377 = (inst_30376__$1 < n);var state_30403__$1 = (function (){var statearr_30417 = state_30403;(statearr_30417[(11)] = inst_30376__$1);
(statearr_30417[(12)] = inst_30375);
return statearr_30417;
})();if(cljs.core.truth_(inst_30377))
{var statearr_30418_30443 = state_30403__$1;(statearr_30418_30443[(1)] = (8));
} else
{var statearr_30419_30444 = state_30403__$1;(statearr_30419_30444[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (14)))
{var inst_30396 = (state_30403[(2)]);var inst_30397 = cljs.core.async.close_BANG_.call(null,out);var state_30403__$1 = (function (){var statearr_30421 = state_30403;(statearr_30421[(13)] = inst_30396);
return statearr_30421;
})();var statearr_30422_30445 = state_30403__$1;(statearr_30422_30445[(2)] = inst_30397);
(statearr_30422_30445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (10)))
{var inst_30387 = (state_30403[(2)]);var state_30403__$1 = state_30403;var statearr_30423_30446 = state_30403__$1;(statearr_30423_30446[(2)] = inst_30387);
(statearr_30423_30446[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30404 === (8)))
{var inst_30376 = (state_30403[(11)]);var inst_30367 = (state_30403[(8)]);var tmp30420 = inst_30367;var inst_30367__$1 = tmp30420;var inst_30368 = inst_30376;var state_30403__$1 = (function (){var statearr_30424 = state_30403;(statearr_30424[(7)] = inst_30368);
(statearr_30424[(8)] = inst_30367__$1);
return statearr_30424;
})();var statearr_30425_30447 = state_30403__$1;(statearr_30425_30447[(2)] = null);
(statearr_30425_30447[(1)] = (2));
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
});})(c__5708__auto___30433,out))
;return ((function (switch__5693__auto__,c__5708__auto___30433,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30429[(0)] = state_machine__5694__auto__);
(statearr_30429[(1)] = (1));
return statearr_30429;
});
var state_machine__5694__auto____1 = (function (state_30403){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30430){if((e30430 instanceof Object))
{var ex__5697__auto__ = e30430;var statearr_30431_30448 = state_30403;(statearr_30431_30448[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30430;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30449 = state_30403;
state_30403 = G__30449;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30403){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30433,out))
})();var state__5710__auto__ = (function (){var statearr_30432 = f__5709__auto__.call(null);(statearr_30432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30433);
return statearr_30432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30433,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30592 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30592,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30592,out){
return (function (state_30562){var state_val_30563 = (state_30562[(1)]);if((state_val_30563 === (7)))
{var inst_30558 = (state_30562[(2)]);var state_30562__$1 = state_30562;var statearr_30564_30593 = state_30562__$1;(statearr_30564_30593[(2)] = inst_30558);
(statearr_30564_30593[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (1)))
{var inst_30521 = [];var inst_30522 = inst_30521;var inst_30523 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30562__$1 = (function (){var statearr_30565 = state_30562;(statearr_30565[(7)] = inst_30522);
(statearr_30565[(8)] = inst_30523);
return statearr_30565;
})();var statearr_30566_30594 = state_30562__$1;(statearr_30566_30594[(2)] = null);
(statearr_30566_30594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (4)))
{var inst_30526 = (state_30562[(9)]);var inst_30526__$1 = (state_30562[(2)]);var inst_30527 = (inst_30526__$1 == null);var inst_30528 = cljs.core.not.call(null,inst_30527);var state_30562__$1 = (function (){var statearr_30567 = state_30562;(statearr_30567[(9)] = inst_30526__$1);
return statearr_30567;
})();if(inst_30528)
{var statearr_30568_30595 = state_30562__$1;(statearr_30568_30595[(1)] = (5));
} else
{var statearr_30569_30596 = state_30562__$1;(statearr_30569_30596[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (15)))
{var inst_30552 = (state_30562[(2)]);var state_30562__$1 = state_30562;var statearr_30570_30597 = state_30562__$1;(statearr_30570_30597[(2)] = inst_30552);
(statearr_30570_30597[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (13)))
{var state_30562__$1 = state_30562;var statearr_30571_30598 = state_30562__$1;(statearr_30571_30598[(2)] = null);
(statearr_30571_30598[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (6)))
{var inst_30522 = (state_30562[(7)]);var inst_30547 = inst_30522.length;var inst_30548 = (inst_30547 > (0));var state_30562__$1 = state_30562;if(cljs.core.truth_(inst_30548))
{var statearr_30572_30599 = state_30562__$1;(statearr_30572_30599[(1)] = (12));
} else
{var statearr_30573_30600 = state_30562__$1;(statearr_30573_30600[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (3)))
{var inst_30560 = (state_30562[(2)]);var state_30562__$1 = state_30562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30562__$1,inst_30560);
} else
{if((state_val_30563 === (12)))
{var inst_30522 = (state_30562[(7)]);var inst_30550 = cljs.core.vec.call(null,inst_30522);var state_30562__$1 = state_30562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30562__$1,(15),out,inst_30550);
} else
{if((state_val_30563 === (2)))
{var state_30562__$1 = state_30562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,(4),ch);
} else
{if((state_val_30563 === (11)))
{var inst_30530 = (state_30562[(10)]);var inst_30526 = (state_30562[(9)]);var inst_30540 = (state_30562[(2)]);var inst_30541 = [];var inst_30542 = inst_30541.push(inst_30526);var inst_30522 = inst_30541;var inst_30523 = inst_30530;var state_30562__$1 = (function (){var statearr_30574 = state_30562;(statearr_30574[(7)] = inst_30522);
(statearr_30574[(11)] = inst_30542);
(statearr_30574[(12)] = inst_30540);
(statearr_30574[(8)] = inst_30523);
return statearr_30574;
})();var statearr_30575_30601 = state_30562__$1;(statearr_30575_30601[(2)] = null);
(statearr_30575_30601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (9)))
{var inst_30522 = (state_30562[(7)]);var inst_30538 = cljs.core.vec.call(null,inst_30522);var state_30562__$1 = state_30562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30562__$1,(11),out,inst_30538);
} else
{if((state_val_30563 === (5)))
{var inst_30530 = (state_30562[(10)]);var inst_30526 = (state_30562[(9)]);var inst_30523 = (state_30562[(8)]);var inst_30530__$1 = f.call(null,inst_30526);var inst_30531 = cljs.core._EQ_.call(null,inst_30530__$1,inst_30523);var inst_30532 = cljs.core.keyword_identical_QMARK_.call(null,inst_30523,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30533 = (inst_30531) || (inst_30532);var state_30562__$1 = (function (){var statearr_30576 = state_30562;(statearr_30576[(10)] = inst_30530__$1);
return statearr_30576;
})();if(cljs.core.truth_(inst_30533))
{var statearr_30577_30602 = state_30562__$1;(statearr_30577_30602[(1)] = (8));
} else
{var statearr_30578_30603 = state_30562__$1;(statearr_30578_30603[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (14)))
{var inst_30555 = (state_30562[(2)]);var inst_30556 = cljs.core.async.close_BANG_.call(null,out);var state_30562__$1 = (function (){var statearr_30580 = state_30562;(statearr_30580[(13)] = inst_30555);
return statearr_30580;
})();var statearr_30581_30604 = state_30562__$1;(statearr_30581_30604[(2)] = inst_30556);
(statearr_30581_30604[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (10)))
{var inst_30545 = (state_30562[(2)]);var state_30562__$1 = state_30562;var statearr_30582_30605 = state_30562__$1;(statearr_30582_30605[(2)] = inst_30545);
(statearr_30582_30605[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30563 === (8)))
{var inst_30522 = (state_30562[(7)]);var inst_30530 = (state_30562[(10)]);var inst_30526 = (state_30562[(9)]);var inst_30535 = inst_30522.push(inst_30526);var tmp30579 = inst_30522;var inst_30522__$1 = tmp30579;var inst_30523 = inst_30530;var state_30562__$1 = (function (){var statearr_30583 = state_30562;(statearr_30583[(7)] = inst_30522__$1);
(statearr_30583[(14)] = inst_30535);
(statearr_30583[(8)] = inst_30523);
return statearr_30583;
})();var statearr_30584_30606 = state_30562__$1;(statearr_30584_30606[(2)] = null);
(statearr_30584_30606[(1)] = (2));
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
});})(c__5708__auto___30592,out))
;return ((function (switch__5693__auto__,c__5708__auto___30592,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30588[(0)] = state_machine__5694__auto__);
(statearr_30588[(1)] = (1));
return statearr_30588;
});
var state_machine__5694__auto____1 = (function (state_30562){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30562);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30589){if((e30589 instanceof Object))
{var ex__5697__auto__ = e30589;var statearr_30590_30607 = state_30562;(statearr_30590_30607[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30589;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30608 = state_30562;
state_30562 = G__30608;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30562){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30592,out))
})();var state__5710__auto__ = (function (){var statearr_30591 = f__5709__auto__.call(null);(statearr_30591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30592);
return statearr_30591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30592,out))
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
