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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15874 = (function (f,fn_handler,meta15875){
this.f = f;
this.fn_handler = fn_handler;
this.meta15875 = meta15875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15874.cljs$lang$type = true;
cljs.core.async.t15874.cljs$lang$ctorStr = "cljs.core.async/t15874";
cljs.core.async.t15874.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15874");
});
cljs.core.async.t15874.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15876){var self__ = this;
var _15876__$1 = this;return self__.meta15875;
});
cljs.core.async.t15874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15876,meta15875__$1){var self__ = this;
var _15876__$1 = this;return (new cljs.core.async.t15874(self__.f,self__.fn_handler,meta15875__$1));
});
cljs.core.async.__GT_t15874 = (function __GT_t15874(f__$1,fn_handler__$1,meta15875){return (new cljs.core.async.t15874(f__$1,fn_handler__$1,meta15875));
});
}
return (new cljs.core.async.t15874(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15878 = buff;if(G__15878)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__15878.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15878.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15878);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15878);
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
{var val_15879 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15879);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15879,ret){
return (function (){return fn1.call(null,val_15879);
});})(val_15879,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___15880 = n;var x_15881 = (0);while(true){
if((x_15881 < n__4414__auto___15880))
{(a[x_15881] = (0));
{
var G__15882 = (x_15881 + (1));
x_15881 = G__15882;
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
var G__15883 = (i + (1));
i = G__15883;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15887 = (function (flag,alt_flag,meta15888){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15888 = meta15888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15887.cljs$lang$type = true;
cljs.core.async.t15887.cljs$lang$ctorStr = "cljs.core.async/t15887";
cljs.core.async.t15887.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15887");
});})(flag))
;
cljs.core.async.t15887.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15889){var self__ = this;
var _15889__$1 = this;return self__.meta15888;
});})(flag))
;
cljs.core.async.t15887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15889,meta15888__$1){var self__ = this;
var _15889__$1 = this;return (new cljs.core.async.t15887(self__.flag,self__.alt_flag,meta15888__$1));
});})(flag))
;
cljs.core.async.__GT_t15887 = ((function (flag){
return (function __GT_t15887(flag__$1,alt_flag__$1,meta15888){return (new cljs.core.async.t15887(flag__$1,alt_flag__$1,meta15888));
});})(flag))
;
}
return (new cljs.core.async.t15887(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15893 = (function (cb,flag,alt_handler,meta15894){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15894 = meta15894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15893.cljs$lang$type = true;
cljs.core.async.t15893.cljs$lang$ctorStr = "cljs.core.async/t15893";
cljs.core.async.t15893.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15893");
});
cljs.core.async.t15893.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15895){var self__ = this;
var _15895__$1 = this;return self__.meta15894;
});
cljs.core.async.t15893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15895,meta15894__$1){var self__ = this;
var _15895__$1 = this;return (new cljs.core.async.t15893(self__.cb,self__.flag,self__.alt_handler,meta15894__$1));
});
cljs.core.async.__GT_t15893 = (function __GT_t15893(cb__$1,flag__$1,alt_handler__$1,meta15894){return (new cljs.core.async.t15893(cb__$1,flag__$1,alt_handler__$1,meta15894));
});
}
return (new cljs.core.async.t15893(cb,flag,alt_handler,null));
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
return (function (p1__15896_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15896_SHARP_,port], null));
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
var G__15897 = (i + (1));
i = G__15897;
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
var alts_BANG___delegate = function (ports,p__15898){var map__15900 = p__15898;var map__15900__$1 = ((cljs.core.seq_QMARK_.call(null,map__15900))?cljs.core.apply.call(null,cljs.core.hash_map,map__15900):map__15900);var opts = map__15900__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__15898 = null;if (arguments.length > 1) {
  p__15898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15898);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15901){
var ports = cljs.core.first(arglist__15901);
var p__15898 = cljs.core.rest(arglist__15901);
return alts_BANG___delegate(ports,p__15898);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15909 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15909 = (function (ch,f,map_LT_,meta15910){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15910 = meta15910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15909.cljs$lang$type = true;
cljs.core.async.t15909.cljs$lang$ctorStr = "cljs.core.async/t15909";
cljs.core.async.t15909.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15909");
});
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15912 = (function (fn1,_,meta15910,ch,f,map_LT_,meta15913){
this.fn1 = fn1;
this._ = _;
this.meta15910 = meta15910;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15913 = meta15913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15912.cljs$lang$type = true;
cljs.core.async.t15912.cljs$lang$ctorStr = "cljs.core.async/t15912";
cljs.core.async.t15912.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15912");
});})(___$1))
;
cljs.core.async.t15912.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15912.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15902_SHARP_){return f1.call(null,(((p1__15902_SHARP_ == null))?null:self__.f.call(null,p1__15902_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15914){var self__ = this;
var _15914__$1 = this;return self__.meta15913;
});})(___$1))
;
cljs.core.async.t15912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15914,meta15913__$1){var self__ = this;
var _15914__$1 = this;return (new cljs.core.async.t15912(self__.fn1,self__._,self__.meta15910,self__.ch,self__.f,self__.map_LT_,meta15913__$1));
});})(___$1))
;
cljs.core.async.__GT_t15912 = ((function (___$1){
return (function __GT_t15912(fn1__$1,___$2,meta15910__$1,ch__$2,f__$2,map_LT___$2,meta15913){return (new cljs.core.async.t15912(fn1__$1,___$2,meta15910__$1,ch__$2,f__$2,map_LT___$2,meta15913));
});})(___$1))
;
}
return (new cljs.core.async.t15912(fn1,___$1,self__.meta15910,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15911){var self__ = this;
var _15911__$1 = this;return self__.meta15910;
});
cljs.core.async.t15909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15911,meta15910__$1){var self__ = this;
var _15911__$1 = this;return (new cljs.core.async.t15909(self__.ch,self__.f,self__.map_LT_,meta15910__$1));
});
cljs.core.async.__GT_t15909 = (function __GT_t15909(ch__$1,f__$1,map_LT___$1,meta15910){return (new cljs.core.async.t15909(ch__$1,f__$1,map_LT___$1,meta15910));
});
}
return (new cljs.core.async.t15909(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15918 = (function (ch,f,map_GT_,meta15919){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15919 = meta15919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15918.cljs$lang$type = true;
cljs.core.async.t15918.cljs$lang$ctorStr = "cljs.core.async/t15918";
cljs.core.async.t15918.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15918");
});
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15920){var self__ = this;
var _15920__$1 = this;return self__.meta15919;
});
cljs.core.async.t15918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15920,meta15919__$1){var self__ = this;
var _15920__$1 = this;return (new cljs.core.async.t15918(self__.ch,self__.f,self__.map_GT_,meta15919__$1));
});
cljs.core.async.__GT_t15918 = (function __GT_t15918(ch__$1,f__$1,map_GT___$1,meta15919){return (new cljs.core.async.t15918(ch__$1,f__$1,map_GT___$1,meta15919));
});
}
return (new cljs.core.async.t15918(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15924 = (function (ch,p,filter_GT_,meta15925){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15925 = meta15925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15924.cljs$lang$type = true;
cljs.core.async.t15924.cljs$lang$ctorStr = "cljs.core.async/t15924";
cljs.core.async.t15924.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15924");
});
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15926){var self__ = this;
var _15926__$1 = this;return self__.meta15925;
});
cljs.core.async.t15924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15926,meta15925__$1){var self__ = this;
var _15926__$1 = this;return (new cljs.core.async.t15924(self__.ch,self__.p,self__.filter_GT_,meta15925__$1));
});
cljs.core.async.__GT_t15924 = (function __GT_t15924(ch__$1,p__$1,filter_GT___$1,meta15925){return (new cljs.core.async.t15924(ch__$1,p__$1,filter_GT___$1,meta15925));
});
}
return (new cljs.core.async.t15924(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___16009 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16009,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16009,out){
return (function (state_15988){var state_val_15989 = (state_15988[(1)]);if((state_val_15989 === (7)))
{var inst_15984 = (state_15988[(2)]);var state_15988__$1 = state_15988;var statearr_15990_16010 = state_15988__$1;(statearr_15990_16010[(2)] = inst_15984);
(statearr_15990_16010[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (1)))
{var state_15988__$1 = state_15988;var statearr_15991_16011 = state_15988__$1;(statearr_15991_16011[(2)] = null);
(statearr_15991_16011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (4)))
{var inst_15970 = (state_15988[(7)]);var inst_15970__$1 = (state_15988[(2)]);var inst_15971 = (inst_15970__$1 == null);var state_15988__$1 = (function (){var statearr_15992 = state_15988;(statearr_15992[(7)] = inst_15970__$1);
return statearr_15992;
})();if(cljs.core.truth_(inst_15971))
{var statearr_15993_16012 = state_15988__$1;(statearr_15993_16012[(1)] = (5));
} else
{var statearr_15994_16013 = state_15988__$1;(statearr_15994_16013[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (6)))
{var inst_15970 = (state_15988[(7)]);var inst_15975 = p.call(null,inst_15970);var state_15988__$1 = state_15988;if(cljs.core.truth_(inst_15975))
{var statearr_15995_16014 = state_15988__$1;(statearr_15995_16014[(1)] = (8));
} else
{var statearr_15996_16015 = state_15988__$1;(statearr_15996_16015[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (3)))
{var inst_15986 = (state_15988[(2)]);var state_15988__$1 = state_15988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15988__$1,inst_15986);
} else
{if((state_val_15989 === (2)))
{var state_15988__$1 = state_15988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15988__$1,(4),ch);
} else
{if((state_val_15989 === (11)))
{var inst_15978 = (state_15988[(2)]);var state_15988__$1 = state_15988;var statearr_15997_16016 = state_15988__$1;(statearr_15997_16016[(2)] = inst_15978);
(statearr_15997_16016[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (9)))
{var state_15988__$1 = state_15988;var statearr_15998_16017 = state_15988__$1;(statearr_15998_16017[(2)] = null);
(statearr_15998_16017[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (5)))
{var inst_15973 = cljs.core.async.close_BANG_.call(null,out);var state_15988__$1 = state_15988;var statearr_15999_16018 = state_15988__$1;(statearr_15999_16018[(2)] = inst_15973);
(statearr_15999_16018[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (10)))
{var inst_15981 = (state_15988[(2)]);var state_15988__$1 = (function (){var statearr_16000 = state_15988;(statearr_16000[(8)] = inst_15981);
return statearr_16000;
})();var statearr_16001_16019 = state_15988__$1;(statearr_16001_16019[(2)] = null);
(statearr_16001_16019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15989 === (8)))
{var inst_15970 = (state_15988[(7)]);var state_15988__$1 = state_15988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15988__$1,(11),out,inst_15970);
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
});})(c__5708__auto___16009,out))
;return ((function (switch__5693__auto__,c__5708__auto___16009,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16005 = [null,null,null,null,null,null,null,null,null];(statearr_16005[(0)] = state_machine__5694__auto__);
(statearr_16005[(1)] = (1));
return statearr_16005;
});
var state_machine__5694__auto____1 = (function (state_15988){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15988);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16006){if((e16006 instanceof Object))
{var ex__5697__auto__ = e16006;var statearr_16007_16020 = state_15988;(statearr_16007_16020[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16006;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16021 = state_15988;
state_15988 = G__16021;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15988){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16009,out))
})();var state__5710__auto__ = (function (){var statearr_16008 = f__5709__auto__.call(null);(statearr_16008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16009);
return statearr_16008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16009,out))
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
return (function (state_16173){var state_val_16174 = (state_16173[(1)]);if((state_val_16174 === (7)))
{var inst_16169 = (state_16173[(2)]);var state_16173__$1 = state_16173;var statearr_16175_16212 = state_16173__$1;(statearr_16175_16212[(2)] = inst_16169);
(statearr_16175_16212[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (20)))
{var inst_16144 = (state_16173[(7)]);var inst_16155 = (state_16173[(2)]);var inst_16156 = cljs.core.next.call(null,inst_16144);var inst_16130 = inst_16156;var inst_16131 = null;var inst_16132 = (0);var inst_16133 = (0);var state_16173__$1 = (function (){var statearr_16176 = state_16173;(statearr_16176[(8)] = inst_16155);
(statearr_16176[(9)] = inst_16131);
(statearr_16176[(10)] = inst_16133);
(statearr_16176[(11)] = inst_16130);
(statearr_16176[(12)] = inst_16132);
return statearr_16176;
})();var statearr_16177_16213 = state_16173__$1;(statearr_16177_16213[(2)] = null);
(statearr_16177_16213[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (1)))
{var state_16173__$1 = state_16173;var statearr_16178_16214 = state_16173__$1;(statearr_16178_16214[(2)] = null);
(statearr_16178_16214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (4)))
{var inst_16119 = (state_16173[(13)]);var inst_16119__$1 = (state_16173[(2)]);var inst_16120 = (inst_16119__$1 == null);var state_16173__$1 = (function (){var statearr_16182 = state_16173;(statearr_16182[(13)] = inst_16119__$1);
return statearr_16182;
})();if(cljs.core.truth_(inst_16120))
{var statearr_16183_16215 = state_16173__$1;(statearr_16183_16215[(1)] = (5));
} else
{var statearr_16184_16216 = state_16173__$1;(statearr_16184_16216[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (15)))
{var state_16173__$1 = state_16173;var statearr_16185_16217 = state_16173__$1;(statearr_16185_16217[(2)] = null);
(statearr_16185_16217[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (13)))
{var inst_16131 = (state_16173[(9)]);var inst_16133 = (state_16173[(10)]);var inst_16130 = (state_16173[(11)]);var inst_16132 = (state_16173[(12)]);var inst_16140 = (state_16173[(2)]);var inst_16141 = (inst_16133 + (1));var tmp16179 = inst_16131;var tmp16180 = inst_16130;var tmp16181 = inst_16132;var inst_16130__$1 = tmp16180;var inst_16131__$1 = tmp16179;var inst_16132__$1 = tmp16181;var inst_16133__$1 = inst_16141;var state_16173__$1 = (function (){var statearr_16186 = state_16173;(statearr_16186[(9)] = inst_16131__$1);
(statearr_16186[(10)] = inst_16133__$1);
(statearr_16186[(11)] = inst_16130__$1);
(statearr_16186[(14)] = inst_16140);
(statearr_16186[(12)] = inst_16132__$1);
return statearr_16186;
})();var statearr_16187_16218 = state_16173__$1;(statearr_16187_16218[(2)] = null);
(statearr_16187_16218[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (6)))
{var inst_16119 = (state_16173[(13)]);var inst_16124 = f.call(null,inst_16119);var inst_16129 = cljs.core.seq.call(null,inst_16124);var inst_16130 = inst_16129;var inst_16131 = null;var inst_16132 = (0);var inst_16133 = (0);var state_16173__$1 = (function (){var statearr_16188 = state_16173;(statearr_16188[(9)] = inst_16131);
(statearr_16188[(10)] = inst_16133);
(statearr_16188[(11)] = inst_16130);
(statearr_16188[(12)] = inst_16132);
return statearr_16188;
})();var statearr_16189_16219 = state_16173__$1;(statearr_16189_16219[(2)] = null);
(statearr_16189_16219[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (17)))
{var inst_16144 = (state_16173[(7)]);var inst_16148 = cljs.core.chunk_first.call(null,inst_16144);var inst_16149 = cljs.core.chunk_rest.call(null,inst_16144);var inst_16150 = cljs.core.count.call(null,inst_16148);var inst_16130 = inst_16149;var inst_16131 = inst_16148;var inst_16132 = inst_16150;var inst_16133 = (0);var state_16173__$1 = (function (){var statearr_16190 = state_16173;(statearr_16190[(9)] = inst_16131);
(statearr_16190[(10)] = inst_16133);
(statearr_16190[(11)] = inst_16130);
(statearr_16190[(12)] = inst_16132);
return statearr_16190;
})();var statearr_16191_16220 = state_16173__$1;(statearr_16191_16220[(2)] = null);
(statearr_16191_16220[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (3)))
{var inst_16171 = (state_16173[(2)]);var state_16173__$1 = state_16173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16173__$1,inst_16171);
} else
{if((state_val_16174 === (12)))
{var inst_16164 = (state_16173[(2)]);var state_16173__$1 = state_16173;var statearr_16192_16221 = state_16173__$1;(statearr_16192_16221[(2)] = inst_16164);
(statearr_16192_16221[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (2)))
{var state_16173__$1 = state_16173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16173__$1,(4),in$);
} else
{if((state_val_16174 === (19)))
{var inst_16159 = (state_16173[(2)]);var state_16173__$1 = state_16173;var statearr_16193_16222 = state_16173__$1;(statearr_16193_16222[(2)] = inst_16159);
(statearr_16193_16222[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (11)))
{var inst_16130 = (state_16173[(11)]);var inst_16144 = (state_16173[(7)]);var inst_16144__$1 = cljs.core.seq.call(null,inst_16130);var state_16173__$1 = (function (){var statearr_16194 = state_16173;(statearr_16194[(7)] = inst_16144__$1);
return statearr_16194;
})();if(inst_16144__$1)
{var statearr_16195_16223 = state_16173__$1;(statearr_16195_16223[(1)] = (14));
} else
{var statearr_16196_16224 = state_16173__$1;(statearr_16196_16224[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (9)))
{var inst_16166 = (state_16173[(2)]);var state_16173__$1 = (function (){var statearr_16197 = state_16173;(statearr_16197[(15)] = inst_16166);
return statearr_16197;
})();var statearr_16198_16225 = state_16173__$1;(statearr_16198_16225[(2)] = null);
(statearr_16198_16225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (5)))
{var inst_16122 = cljs.core.async.close_BANG_.call(null,out);var state_16173__$1 = state_16173;var statearr_16199_16226 = state_16173__$1;(statearr_16199_16226[(2)] = inst_16122);
(statearr_16199_16226[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (14)))
{var inst_16144 = (state_16173[(7)]);var inst_16146 = cljs.core.chunked_seq_QMARK_.call(null,inst_16144);var state_16173__$1 = state_16173;if(inst_16146)
{var statearr_16200_16227 = state_16173__$1;(statearr_16200_16227[(1)] = (17));
} else
{var statearr_16201_16228 = state_16173__$1;(statearr_16201_16228[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (16)))
{var inst_16162 = (state_16173[(2)]);var state_16173__$1 = state_16173;var statearr_16202_16229 = state_16173__$1;(statearr_16202_16229[(2)] = inst_16162);
(statearr_16202_16229[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16174 === (10)))
{var inst_16131 = (state_16173[(9)]);var inst_16133 = (state_16173[(10)]);var inst_16138 = cljs.core._nth.call(null,inst_16131,inst_16133);var state_16173__$1 = state_16173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16173__$1,(13),out,inst_16138);
} else
{if((state_val_16174 === (18)))
{var inst_16144 = (state_16173[(7)]);var inst_16153 = cljs.core.first.call(null,inst_16144);var state_16173__$1 = state_16173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16173__$1,(20),out,inst_16153);
} else
{if((state_val_16174 === (8)))
{var inst_16133 = (state_16173[(10)]);var inst_16132 = (state_16173[(12)]);var inst_16135 = (inst_16133 < inst_16132);var inst_16136 = inst_16135;var state_16173__$1 = state_16173;if(cljs.core.truth_(inst_16136))
{var statearr_16203_16230 = state_16173__$1;(statearr_16203_16230[(1)] = (10));
} else
{var statearr_16204_16231 = state_16173__$1;(statearr_16204_16231[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_16208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16208[(0)] = state_machine__5694__auto__);
(statearr_16208[(1)] = (1));
return statearr_16208;
});
var state_machine__5694__auto____1 = (function (state_16173){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16173);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16209){if((e16209 instanceof Object))
{var ex__5697__auto__ = e16209;var statearr_16210_16232 = state_16173;(statearr_16210_16232[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16209;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16233 = state_16173;
state_16173 = G__16233;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16173){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16211 = f__5709__auto__.call(null);(statearr_16211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16211;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___16314 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16314){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16314){
return (function (state_16293){var state_val_16294 = (state_16293[(1)]);if((state_val_16294 === (7)))
{var inst_16289 = (state_16293[(2)]);var state_16293__$1 = state_16293;var statearr_16295_16315 = state_16293__$1;(statearr_16295_16315[(2)] = inst_16289);
(statearr_16295_16315[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16294 === (1)))
{var state_16293__$1 = state_16293;var statearr_16296_16316 = state_16293__$1;(statearr_16296_16316[(2)] = null);
(statearr_16296_16316[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16294 === (4)))
{var inst_16276 = (state_16293[(7)]);var inst_16276__$1 = (state_16293[(2)]);var inst_16277 = (inst_16276__$1 == null);var state_16293__$1 = (function (){var statearr_16297 = state_16293;(statearr_16297[(7)] = inst_16276__$1);
return statearr_16297;
})();if(cljs.core.truth_(inst_16277))
{var statearr_16298_16317 = state_16293__$1;(statearr_16298_16317[(1)] = (5));
} else
{var statearr_16299_16318 = state_16293__$1;(statearr_16299_16318[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16294 === (6)))
{var inst_16276 = (state_16293[(7)]);var state_16293__$1 = state_16293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16293__$1,(11),to,inst_16276);
} else
{if((state_val_16294 === (3)))
{var inst_16291 = (state_16293[(2)]);var state_16293__$1 = state_16293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16293__$1,inst_16291);
} else
{if((state_val_16294 === (2)))
{var state_16293__$1 = state_16293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16293__$1,(4),from);
} else
{if((state_val_16294 === (11)))
{var inst_16286 = (state_16293[(2)]);var state_16293__$1 = (function (){var statearr_16300 = state_16293;(statearr_16300[(8)] = inst_16286);
return statearr_16300;
})();var statearr_16301_16319 = state_16293__$1;(statearr_16301_16319[(2)] = null);
(statearr_16301_16319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16294 === (9)))
{var state_16293__$1 = state_16293;var statearr_16302_16320 = state_16293__$1;(statearr_16302_16320[(2)] = null);
(statearr_16302_16320[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16294 === (5)))
{var state_16293__$1 = state_16293;if(cljs.core.truth_(close_QMARK_))
{var statearr_16303_16321 = state_16293__$1;(statearr_16303_16321[(1)] = (8));
} else
{var statearr_16304_16322 = state_16293__$1;(statearr_16304_16322[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16294 === (10)))
{var inst_16283 = (state_16293[(2)]);var state_16293__$1 = state_16293;var statearr_16305_16323 = state_16293__$1;(statearr_16305_16323[(2)] = inst_16283);
(statearr_16305_16323[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16294 === (8)))
{var inst_16280 = cljs.core.async.close_BANG_.call(null,to);var state_16293__$1 = state_16293;var statearr_16306_16324 = state_16293__$1;(statearr_16306_16324[(2)] = inst_16280);
(statearr_16306_16324[(1)] = (10));
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
});})(c__5708__auto___16314))
;return ((function (switch__5693__auto__,c__5708__auto___16314){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16310 = [null,null,null,null,null,null,null,null,null];(statearr_16310[(0)] = state_machine__5694__auto__);
(statearr_16310[(1)] = (1));
return statearr_16310;
});
var state_machine__5694__auto____1 = (function (state_16293){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16293);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16311){if((e16311 instanceof Object))
{var ex__5697__auto__ = e16311;var statearr_16312_16325 = state_16293;(statearr_16312_16325[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16326 = state_16293;
state_16293 = G__16326;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16293){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16314))
})();var state__5710__auto__ = (function (){var statearr_16313 = f__5709__auto__.call(null);(statearr_16313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16314);
return statearr_16313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16314))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___16413 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16413,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16413,tc,fc){
return (function (state_16391){var state_val_16392 = (state_16391[(1)]);if((state_val_16392 === (7)))
{var inst_16387 = (state_16391[(2)]);var state_16391__$1 = state_16391;var statearr_16393_16414 = state_16391__$1;(statearr_16393_16414[(2)] = inst_16387);
(statearr_16393_16414[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16392 === (1)))
{var state_16391__$1 = state_16391;var statearr_16394_16415 = state_16391__$1;(statearr_16394_16415[(2)] = null);
(statearr_16394_16415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16392 === (4)))
{var inst_16372 = (state_16391[(7)]);var inst_16372__$1 = (state_16391[(2)]);var inst_16373 = (inst_16372__$1 == null);var state_16391__$1 = (function (){var statearr_16395 = state_16391;(statearr_16395[(7)] = inst_16372__$1);
return statearr_16395;
})();if(cljs.core.truth_(inst_16373))
{var statearr_16396_16416 = state_16391__$1;(statearr_16396_16416[(1)] = (5));
} else
{var statearr_16397_16417 = state_16391__$1;(statearr_16397_16417[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16392 === (6)))
{var inst_16372 = (state_16391[(7)]);var inst_16378 = p.call(null,inst_16372);var state_16391__$1 = state_16391;if(cljs.core.truth_(inst_16378))
{var statearr_16398_16418 = state_16391__$1;(statearr_16398_16418[(1)] = (9));
} else
{var statearr_16399_16419 = state_16391__$1;(statearr_16399_16419[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16392 === (3)))
{var inst_16389 = (state_16391[(2)]);var state_16391__$1 = state_16391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16391__$1,inst_16389);
} else
{if((state_val_16392 === (2)))
{var state_16391__$1 = state_16391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16391__$1,(4),ch);
} else
{if((state_val_16392 === (11)))
{var inst_16372 = (state_16391[(7)]);var inst_16382 = (state_16391[(2)]);var state_16391__$1 = state_16391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16391__$1,(8),inst_16382,inst_16372);
} else
{if((state_val_16392 === (9)))
{var state_16391__$1 = state_16391;var statearr_16400_16420 = state_16391__$1;(statearr_16400_16420[(2)] = tc);
(statearr_16400_16420[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16392 === (5)))
{var inst_16375 = cljs.core.async.close_BANG_.call(null,tc);var inst_16376 = cljs.core.async.close_BANG_.call(null,fc);var state_16391__$1 = (function (){var statearr_16401 = state_16391;(statearr_16401[(8)] = inst_16375);
return statearr_16401;
})();var statearr_16402_16421 = state_16391__$1;(statearr_16402_16421[(2)] = inst_16376);
(statearr_16402_16421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16392 === (10)))
{var state_16391__$1 = state_16391;var statearr_16403_16422 = state_16391__$1;(statearr_16403_16422[(2)] = fc);
(statearr_16403_16422[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16392 === (8)))
{var inst_16384 = (state_16391[(2)]);var state_16391__$1 = (function (){var statearr_16404 = state_16391;(statearr_16404[(9)] = inst_16384);
return statearr_16404;
})();var statearr_16405_16423 = state_16391__$1;(statearr_16405_16423[(2)] = null);
(statearr_16405_16423[(1)] = (2));
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
});})(c__5708__auto___16413,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___16413,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16409 = [null,null,null,null,null,null,null,null,null,null];(statearr_16409[(0)] = state_machine__5694__auto__);
(statearr_16409[(1)] = (1));
return statearr_16409;
});
var state_machine__5694__auto____1 = (function (state_16391){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16410){if((e16410 instanceof Object))
{var ex__5697__auto__ = e16410;var statearr_16411_16424 = state_16391;(statearr_16411_16424[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16410;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16425 = state_16391;
state_16391 = G__16425;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16391){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16413,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_16412 = f__5709__auto__.call(null);(statearr_16412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16413);
return statearr_16412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16413,tc,fc))
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
return (function (state_16472){var state_val_16473 = (state_16472[(1)]);if((state_val_16473 === (7)))
{var inst_16468 = (state_16472[(2)]);var state_16472__$1 = state_16472;var statearr_16474_16490 = state_16472__$1;(statearr_16474_16490[(2)] = inst_16468);
(statearr_16474_16490[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16473 === (6)))
{var inst_16461 = (state_16472[(7)]);var inst_16458 = (state_16472[(8)]);var inst_16465 = f.call(null,inst_16458,inst_16461);var inst_16458__$1 = inst_16465;var state_16472__$1 = (function (){var statearr_16475 = state_16472;(statearr_16475[(8)] = inst_16458__$1);
return statearr_16475;
})();var statearr_16476_16491 = state_16472__$1;(statearr_16476_16491[(2)] = null);
(statearr_16476_16491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16473 === (5)))
{var inst_16458 = (state_16472[(8)]);var state_16472__$1 = state_16472;var statearr_16477_16492 = state_16472__$1;(statearr_16477_16492[(2)] = inst_16458);
(statearr_16477_16492[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16473 === (4)))
{var inst_16461 = (state_16472[(7)]);var inst_16461__$1 = (state_16472[(2)]);var inst_16462 = (inst_16461__$1 == null);var state_16472__$1 = (function (){var statearr_16478 = state_16472;(statearr_16478[(7)] = inst_16461__$1);
return statearr_16478;
})();if(cljs.core.truth_(inst_16462))
{var statearr_16479_16493 = state_16472__$1;(statearr_16479_16493[(1)] = (5));
} else
{var statearr_16480_16494 = state_16472__$1;(statearr_16480_16494[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16473 === (3)))
{var inst_16470 = (state_16472[(2)]);var state_16472__$1 = state_16472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16472__$1,inst_16470);
} else
{if((state_val_16473 === (2)))
{var state_16472__$1 = state_16472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16472__$1,(4),ch);
} else
{if((state_val_16473 === (1)))
{var inst_16458 = init;var state_16472__$1 = (function (){var statearr_16481 = state_16472;(statearr_16481[(8)] = inst_16458);
return statearr_16481;
})();var statearr_16482_16495 = state_16472__$1;(statearr_16482_16495[(2)] = null);
(statearr_16482_16495[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_16486 = [null,null,null,null,null,null,null,null,null];(statearr_16486[(0)] = state_machine__5694__auto__);
(statearr_16486[(1)] = (1));
return statearr_16486;
});
var state_machine__5694__auto____1 = (function (state_16472){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16472);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16487){if((e16487 instanceof Object))
{var ex__5697__auto__ = e16487;var statearr_16488_16496 = state_16472;(statearr_16488_16496[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16472);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16487;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16497 = state_16472;
state_16472 = G__16497;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16472){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16489 = f__5709__auto__.call(null);(statearr_16489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16489;
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
return (function (state_16559){var state_val_16560 = (state_16559[(1)]);if((state_val_16560 === (7)))
{var inst_16540 = (state_16559[(7)]);var inst_16545 = (state_16559[(2)]);var inst_16546 = cljs.core.next.call(null,inst_16540);var inst_16540__$1 = inst_16546;var state_16559__$1 = (function (){var statearr_16561 = state_16559;(statearr_16561[(8)] = inst_16545);
(statearr_16561[(7)] = inst_16540__$1);
return statearr_16561;
})();var statearr_16562_16580 = state_16559__$1;(statearr_16562_16580[(2)] = null);
(statearr_16562_16580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16560 === (1)))
{var inst_16539 = cljs.core.seq.call(null,coll);var inst_16540 = inst_16539;var state_16559__$1 = (function (){var statearr_16563 = state_16559;(statearr_16563[(7)] = inst_16540);
return statearr_16563;
})();var statearr_16564_16581 = state_16559__$1;(statearr_16564_16581[(2)] = null);
(statearr_16564_16581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16560 === (4)))
{var inst_16540 = (state_16559[(7)]);var inst_16543 = cljs.core.first.call(null,inst_16540);var state_16559__$1 = state_16559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16559__$1,(7),ch,inst_16543);
} else
{if((state_val_16560 === (6)))
{var inst_16555 = (state_16559[(2)]);var state_16559__$1 = state_16559;var statearr_16565_16582 = state_16559__$1;(statearr_16565_16582[(2)] = inst_16555);
(statearr_16565_16582[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16560 === (3)))
{var inst_16557 = (state_16559[(2)]);var state_16559__$1 = state_16559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16559__$1,inst_16557);
} else
{if((state_val_16560 === (2)))
{var inst_16540 = (state_16559[(7)]);var state_16559__$1 = state_16559;if(cljs.core.truth_(inst_16540))
{var statearr_16566_16583 = state_16559__$1;(statearr_16566_16583[(1)] = (4));
} else
{var statearr_16567_16584 = state_16559__$1;(statearr_16567_16584[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16560 === (9)))
{var state_16559__$1 = state_16559;var statearr_16568_16585 = state_16559__$1;(statearr_16568_16585[(2)] = null);
(statearr_16568_16585[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16560 === (5)))
{var state_16559__$1 = state_16559;if(cljs.core.truth_(close_QMARK_))
{var statearr_16569_16586 = state_16559__$1;(statearr_16569_16586[(1)] = (8));
} else
{var statearr_16570_16587 = state_16559__$1;(statearr_16570_16587[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16560 === (10)))
{var inst_16553 = (state_16559[(2)]);var state_16559__$1 = state_16559;var statearr_16571_16588 = state_16559__$1;(statearr_16571_16588[(2)] = inst_16553);
(statearr_16571_16588[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16560 === (8)))
{var inst_16550 = cljs.core.async.close_BANG_.call(null,ch);var state_16559__$1 = state_16559;var statearr_16572_16589 = state_16559__$1;(statearr_16572_16589[(2)] = inst_16550);
(statearr_16572_16589[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_16576 = [null,null,null,null,null,null,null,null,null];(statearr_16576[(0)] = state_machine__5694__auto__);
(statearr_16576[(1)] = (1));
return statearr_16576;
});
var state_machine__5694__auto____1 = (function (state_16559){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16577){if((e16577 instanceof Object))
{var ex__5697__auto__ = e16577;var statearr_16578_16590 = state_16559;(statearr_16578_16590[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16577;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16591 = state_16559;
state_16559 = G__16591;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16559){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16579 = f__5709__auto__.call(null);(statearr_16579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16579;
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
cljs.core.async.Mux = (function (){var obj16593 = {};return obj16593;
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
cljs.core.async.Mult = (function (){var obj16595 = {};return obj16595;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16819 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16819 = (function (cs,ch,mult,meta16820){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16820 = meta16820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16819.cljs$lang$type = true;
cljs.core.async.t16819.cljs$lang$ctorStr = "cljs.core.async/t16819";
cljs.core.async.t16819.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16819");
});})(cs))
;
cljs.core.async.t16819.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16819.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16819.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16819.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16819.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16821){var self__ = this;
var _16821__$1 = this;return self__.meta16820;
});})(cs))
;
cljs.core.async.t16819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16821,meta16820__$1){var self__ = this;
var _16821__$1 = this;return (new cljs.core.async.t16819(self__.cs,self__.ch,self__.mult,meta16820__$1));
});})(cs))
;
cljs.core.async.__GT_t16819 = ((function (cs){
return (function __GT_t16819(cs__$1,ch__$1,mult__$1,meta16820){return (new cljs.core.async.t16819(cs__$1,ch__$1,mult__$1,meta16820));
});})(cs))
;
}
return (new cljs.core.async.t16819(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___17042 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17042,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17042,cs,m,dchan,dctr,done){
return (function (state_16956){var state_val_16957 = (state_16956[(1)]);if((state_val_16957 === (7)))
{var inst_16952 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_16958_17043 = state_16956__$1;(statearr_16958_17043[(2)] = inst_16952);
(statearr_16958_17043[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (20)))
{var inst_16853 = (state_16956[(7)]);var inst_16863 = cljs.core.first.call(null,inst_16853);var inst_16864 = cljs.core.nth.call(null,inst_16863,(0),null);var inst_16865 = cljs.core.nth.call(null,inst_16863,(1),null);var state_16956__$1 = (function (){var statearr_16959 = state_16956;(statearr_16959[(8)] = inst_16864);
return statearr_16959;
})();if(cljs.core.truth_(inst_16865))
{var statearr_16960_17044 = state_16956__$1;(statearr_16960_17044[(1)] = (22));
} else
{var statearr_16961_17045 = state_16956__$1;(statearr_16961_17045[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (27)))
{var inst_16893 = (state_16956[(9)]);var inst_16895 = (state_16956[(10)]);var inst_16900 = cljs.core._nth.call(null,inst_16893,inst_16895);var state_16956__$1 = (function (){var statearr_16962 = state_16956;(statearr_16962[(11)] = inst_16900);
return statearr_16962;
})();var statearr_16963_17046 = state_16956__$1;(statearr_16963_17046[(2)] = null);
(statearr_16963_17046[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (1)))
{var state_16956__$1 = state_16956;var statearr_16964_17047 = state_16956__$1;(statearr_16964_17047[(2)] = null);
(statearr_16964_17047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (24)))
{var inst_16853 = (state_16956[(7)]);var inst_16870 = (state_16956[(2)]);var inst_16871 = cljs.core.next.call(null,inst_16853);var inst_16833 = inst_16871;var inst_16834 = null;var inst_16835 = (0);var inst_16836 = (0);var state_16956__$1 = (function (){var statearr_16965 = state_16956;(statearr_16965[(12)] = inst_16833);
(statearr_16965[(13)] = inst_16835);
(statearr_16965[(14)] = inst_16870);
(statearr_16965[(15)] = inst_16834);
(statearr_16965[(16)] = inst_16836);
return statearr_16965;
})();var statearr_16966_17048 = state_16956__$1;(statearr_16966_17048[(2)] = null);
(statearr_16966_17048[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (39)))
{var inst_16913 = (state_16956[(17)]);var inst_16931 = (state_16956[(2)]);var inst_16932 = cljs.core.next.call(null,inst_16913);var inst_16892 = inst_16932;var inst_16893 = null;var inst_16894 = (0);var inst_16895 = (0);var state_16956__$1 = (function (){var statearr_16970 = state_16956;(statearr_16970[(18)] = inst_16894);
(statearr_16970[(9)] = inst_16893);
(statearr_16970[(19)] = inst_16892);
(statearr_16970[(20)] = inst_16931);
(statearr_16970[(10)] = inst_16895);
return statearr_16970;
})();var statearr_16971_17049 = state_16956__$1;(statearr_16971_17049[(2)] = null);
(statearr_16971_17049[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (4)))
{var inst_16824 = (state_16956[(21)]);var inst_16824__$1 = (state_16956[(2)]);var inst_16825 = (inst_16824__$1 == null);var state_16956__$1 = (function (){var statearr_16972 = state_16956;(statearr_16972[(21)] = inst_16824__$1);
return statearr_16972;
})();if(cljs.core.truth_(inst_16825))
{var statearr_16973_17050 = state_16956__$1;(statearr_16973_17050[(1)] = (5));
} else
{var statearr_16974_17051 = state_16956__$1;(statearr_16974_17051[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (15)))
{var inst_16833 = (state_16956[(12)]);var inst_16835 = (state_16956[(13)]);var inst_16834 = (state_16956[(15)]);var inst_16836 = (state_16956[(16)]);var inst_16849 = (state_16956[(2)]);var inst_16850 = (inst_16836 + (1));var tmp16967 = inst_16833;var tmp16968 = inst_16835;var tmp16969 = inst_16834;var inst_16833__$1 = tmp16967;var inst_16834__$1 = tmp16969;var inst_16835__$1 = tmp16968;var inst_16836__$1 = inst_16850;var state_16956__$1 = (function (){var statearr_16975 = state_16956;(statearr_16975[(12)] = inst_16833__$1);
(statearr_16975[(13)] = inst_16835__$1);
(statearr_16975[(22)] = inst_16849);
(statearr_16975[(15)] = inst_16834__$1);
(statearr_16975[(16)] = inst_16836__$1);
return statearr_16975;
})();var statearr_16976_17052 = state_16956__$1;(statearr_16976_17052[(2)] = null);
(statearr_16976_17052[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (21)))
{var inst_16874 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_16977_17053 = state_16956__$1;(statearr_16977_17053[(2)] = inst_16874);
(statearr_16977_17053[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (31)))
{var inst_16900 = (state_16956[(11)]);var inst_16901 = (state_16956[(2)]);var inst_16902 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16903 = cljs.core.async.untap_STAR_.call(null,m,inst_16900);var state_16956__$1 = (function (){var statearr_16978 = state_16956;(statearr_16978[(23)] = inst_16901);
(statearr_16978[(24)] = inst_16902);
return statearr_16978;
})();var statearr_16979_17054 = state_16956__$1;(statearr_16979_17054[(2)] = inst_16903);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16956__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (32)))
{var inst_16900 = (state_16956[(11)]);var inst_16824 = (state_16956[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16956,(31),Object,null,(30));var inst_16907 = cljs.core.async.put_BANG_.call(null,inst_16900,inst_16824,done);var state_16956__$1 = state_16956;var statearr_16980_17055 = state_16956__$1;(statearr_16980_17055[(2)] = inst_16907);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16956__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (40)))
{var inst_16922 = (state_16956[(25)]);var inst_16923 = (state_16956[(2)]);var inst_16924 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16925 = cljs.core.async.untap_STAR_.call(null,m,inst_16922);var state_16956__$1 = (function (){var statearr_16981 = state_16956;(statearr_16981[(26)] = inst_16924);
(statearr_16981[(27)] = inst_16923);
return statearr_16981;
})();var statearr_16982_17056 = state_16956__$1;(statearr_16982_17056[(2)] = inst_16925);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16956__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (33)))
{var inst_16913 = (state_16956[(17)]);var inst_16915 = cljs.core.chunked_seq_QMARK_.call(null,inst_16913);var state_16956__$1 = state_16956;if(inst_16915)
{var statearr_16983_17057 = state_16956__$1;(statearr_16983_17057[(1)] = (36));
} else
{var statearr_16984_17058 = state_16956__$1;(statearr_16984_17058[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (13)))
{var inst_16843 = (state_16956[(28)]);var inst_16846 = cljs.core.async.close_BANG_.call(null,inst_16843);var state_16956__$1 = state_16956;var statearr_16985_17059 = state_16956__$1;(statearr_16985_17059[(2)] = inst_16846);
(statearr_16985_17059[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (22)))
{var inst_16864 = (state_16956[(8)]);var inst_16867 = cljs.core.async.close_BANG_.call(null,inst_16864);var state_16956__$1 = state_16956;var statearr_16986_17060 = state_16956__$1;(statearr_16986_17060[(2)] = inst_16867);
(statearr_16986_17060[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (36)))
{var inst_16913 = (state_16956[(17)]);var inst_16917 = cljs.core.chunk_first.call(null,inst_16913);var inst_16918 = cljs.core.chunk_rest.call(null,inst_16913);var inst_16919 = cljs.core.count.call(null,inst_16917);var inst_16892 = inst_16918;var inst_16893 = inst_16917;var inst_16894 = inst_16919;var inst_16895 = (0);var state_16956__$1 = (function (){var statearr_16987 = state_16956;(statearr_16987[(18)] = inst_16894);
(statearr_16987[(9)] = inst_16893);
(statearr_16987[(19)] = inst_16892);
(statearr_16987[(10)] = inst_16895);
return statearr_16987;
})();var statearr_16988_17061 = state_16956__$1;(statearr_16988_17061[(2)] = null);
(statearr_16988_17061[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (41)))
{var inst_16922 = (state_16956[(25)]);var inst_16824 = (state_16956[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16956,(40),Object,null,(39));var inst_16929 = cljs.core.async.put_BANG_.call(null,inst_16922,inst_16824,done);var state_16956__$1 = state_16956;var statearr_16989_17062 = state_16956__$1;(statearr_16989_17062[(2)] = inst_16929);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16956__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (43)))
{var state_16956__$1 = state_16956;var statearr_16990_17063 = state_16956__$1;(statearr_16990_17063[(2)] = null);
(statearr_16990_17063[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (29)))
{var inst_16940 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_16991_17064 = state_16956__$1;(statearr_16991_17064[(2)] = inst_16940);
(statearr_16991_17064[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (44)))
{var inst_16949 = (state_16956[(2)]);var state_16956__$1 = (function (){var statearr_16992 = state_16956;(statearr_16992[(29)] = inst_16949);
return statearr_16992;
})();var statearr_16993_17065 = state_16956__$1;(statearr_16993_17065[(2)] = null);
(statearr_16993_17065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (6)))
{var inst_16884 = (state_16956[(30)]);var inst_16883 = cljs.core.deref.call(null,cs);var inst_16884__$1 = cljs.core.keys.call(null,inst_16883);var inst_16885 = cljs.core.count.call(null,inst_16884__$1);var inst_16886 = cljs.core.reset_BANG_.call(null,dctr,inst_16885);var inst_16891 = cljs.core.seq.call(null,inst_16884__$1);var inst_16892 = inst_16891;var inst_16893 = null;var inst_16894 = (0);var inst_16895 = (0);var state_16956__$1 = (function (){var statearr_16994 = state_16956;(statearr_16994[(18)] = inst_16894);
(statearr_16994[(9)] = inst_16893);
(statearr_16994[(31)] = inst_16886);
(statearr_16994[(30)] = inst_16884__$1);
(statearr_16994[(19)] = inst_16892);
(statearr_16994[(10)] = inst_16895);
return statearr_16994;
})();var statearr_16995_17066 = state_16956__$1;(statearr_16995_17066[(2)] = null);
(statearr_16995_17066[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (28)))
{var inst_16913 = (state_16956[(17)]);var inst_16892 = (state_16956[(19)]);var inst_16913__$1 = cljs.core.seq.call(null,inst_16892);var state_16956__$1 = (function (){var statearr_16996 = state_16956;(statearr_16996[(17)] = inst_16913__$1);
return statearr_16996;
})();if(inst_16913__$1)
{var statearr_16997_17067 = state_16956__$1;(statearr_16997_17067[(1)] = (33));
} else
{var statearr_16998_17068 = state_16956__$1;(statearr_16998_17068[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (25)))
{var inst_16894 = (state_16956[(18)]);var inst_16895 = (state_16956[(10)]);var inst_16897 = (inst_16895 < inst_16894);var inst_16898 = inst_16897;var state_16956__$1 = state_16956;if(cljs.core.truth_(inst_16898))
{var statearr_16999_17069 = state_16956__$1;(statearr_16999_17069[(1)] = (27));
} else
{var statearr_17000_17070 = state_16956__$1;(statearr_17000_17070[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (34)))
{var state_16956__$1 = state_16956;var statearr_17001_17071 = state_16956__$1;(statearr_17001_17071[(2)] = null);
(statearr_17001_17071[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (17)))
{var state_16956__$1 = state_16956;var statearr_17002_17072 = state_16956__$1;(statearr_17002_17072[(2)] = null);
(statearr_17002_17072[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (3)))
{var inst_16954 = (state_16956[(2)]);var state_16956__$1 = state_16956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16956__$1,inst_16954);
} else
{if((state_val_16957 === (12)))
{var inst_16879 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_17003_17073 = state_16956__$1;(statearr_17003_17073[(2)] = inst_16879);
(statearr_17003_17073[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (2)))
{var state_16956__$1 = state_16956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16956__$1,(4),ch);
} else
{if((state_val_16957 === (23)))
{var state_16956__$1 = state_16956;var statearr_17004_17074 = state_16956__$1;(statearr_17004_17074[(2)] = null);
(statearr_17004_17074[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (35)))
{var inst_16938 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_17005_17075 = state_16956__$1;(statearr_17005_17075[(2)] = inst_16938);
(statearr_17005_17075[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (19)))
{var inst_16853 = (state_16956[(7)]);var inst_16857 = cljs.core.chunk_first.call(null,inst_16853);var inst_16858 = cljs.core.chunk_rest.call(null,inst_16853);var inst_16859 = cljs.core.count.call(null,inst_16857);var inst_16833 = inst_16858;var inst_16834 = inst_16857;var inst_16835 = inst_16859;var inst_16836 = (0);var state_16956__$1 = (function (){var statearr_17006 = state_16956;(statearr_17006[(12)] = inst_16833);
(statearr_17006[(13)] = inst_16835);
(statearr_17006[(15)] = inst_16834);
(statearr_17006[(16)] = inst_16836);
return statearr_17006;
})();var statearr_17007_17076 = state_16956__$1;(statearr_17007_17076[(2)] = null);
(statearr_17007_17076[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (11)))
{var inst_16833 = (state_16956[(12)]);var inst_16853 = (state_16956[(7)]);var inst_16853__$1 = cljs.core.seq.call(null,inst_16833);var state_16956__$1 = (function (){var statearr_17008 = state_16956;(statearr_17008[(7)] = inst_16853__$1);
return statearr_17008;
})();if(inst_16853__$1)
{var statearr_17009_17077 = state_16956__$1;(statearr_17009_17077[(1)] = (16));
} else
{var statearr_17010_17078 = state_16956__$1;(statearr_17010_17078[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (9)))
{var inst_16881 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_17011_17079 = state_16956__$1;(statearr_17011_17079[(2)] = inst_16881);
(statearr_17011_17079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (5)))
{var inst_16831 = cljs.core.deref.call(null,cs);var inst_16832 = cljs.core.seq.call(null,inst_16831);var inst_16833 = inst_16832;var inst_16834 = null;var inst_16835 = (0);var inst_16836 = (0);var state_16956__$1 = (function (){var statearr_17012 = state_16956;(statearr_17012[(12)] = inst_16833);
(statearr_17012[(13)] = inst_16835);
(statearr_17012[(15)] = inst_16834);
(statearr_17012[(16)] = inst_16836);
return statearr_17012;
})();var statearr_17013_17080 = state_16956__$1;(statearr_17013_17080[(2)] = null);
(statearr_17013_17080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (14)))
{var state_16956__$1 = state_16956;var statearr_17014_17081 = state_16956__$1;(statearr_17014_17081[(2)] = null);
(statearr_17014_17081[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (45)))
{var inst_16946 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_17015_17082 = state_16956__$1;(statearr_17015_17082[(2)] = inst_16946);
(statearr_17015_17082[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (26)))
{var inst_16884 = (state_16956[(30)]);var inst_16942 = (state_16956[(2)]);var inst_16943 = cljs.core.seq.call(null,inst_16884);var state_16956__$1 = (function (){var statearr_17016 = state_16956;(statearr_17016[(32)] = inst_16942);
return statearr_17016;
})();if(inst_16943)
{var statearr_17017_17083 = state_16956__$1;(statearr_17017_17083[(1)] = (42));
} else
{var statearr_17018_17084 = state_16956__$1;(statearr_17018_17084[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (16)))
{var inst_16853 = (state_16956[(7)]);var inst_16855 = cljs.core.chunked_seq_QMARK_.call(null,inst_16853);var state_16956__$1 = state_16956;if(inst_16855)
{var statearr_17022_17085 = state_16956__$1;(statearr_17022_17085[(1)] = (19));
} else
{var statearr_17023_17086 = state_16956__$1;(statearr_17023_17086[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (38)))
{var inst_16935 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_17024_17087 = state_16956__$1;(statearr_17024_17087[(2)] = inst_16935);
(statearr_17024_17087[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (30)))
{var inst_16894 = (state_16956[(18)]);var inst_16893 = (state_16956[(9)]);var inst_16892 = (state_16956[(19)]);var inst_16895 = (state_16956[(10)]);var inst_16909 = (state_16956[(2)]);var inst_16910 = (inst_16895 + (1));var tmp17019 = inst_16894;var tmp17020 = inst_16893;var tmp17021 = inst_16892;var inst_16892__$1 = tmp17021;var inst_16893__$1 = tmp17020;var inst_16894__$1 = tmp17019;var inst_16895__$1 = inst_16910;var state_16956__$1 = (function (){var statearr_17025 = state_16956;(statearr_17025[(18)] = inst_16894__$1);
(statearr_17025[(9)] = inst_16893__$1);
(statearr_17025[(19)] = inst_16892__$1);
(statearr_17025[(33)] = inst_16909);
(statearr_17025[(10)] = inst_16895__$1);
return statearr_17025;
})();var statearr_17026_17088 = state_16956__$1;(statearr_17026_17088[(2)] = null);
(statearr_17026_17088[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (10)))
{var inst_16834 = (state_16956[(15)]);var inst_16836 = (state_16956[(16)]);var inst_16842 = cljs.core._nth.call(null,inst_16834,inst_16836);var inst_16843 = cljs.core.nth.call(null,inst_16842,(0),null);var inst_16844 = cljs.core.nth.call(null,inst_16842,(1),null);var state_16956__$1 = (function (){var statearr_17027 = state_16956;(statearr_17027[(28)] = inst_16843);
return statearr_17027;
})();if(cljs.core.truth_(inst_16844))
{var statearr_17028_17089 = state_16956__$1;(statearr_17028_17089[(1)] = (13));
} else
{var statearr_17029_17090 = state_16956__$1;(statearr_17029_17090[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (18)))
{var inst_16877 = (state_16956[(2)]);var state_16956__$1 = state_16956;var statearr_17030_17091 = state_16956__$1;(statearr_17030_17091[(2)] = inst_16877);
(statearr_17030_17091[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (42)))
{var state_16956__$1 = state_16956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16956__$1,(45),dchan);
} else
{if((state_val_16957 === (37)))
{var inst_16913 = (state_16956[(17)]);var inst_16922 = cljs.core.first.call(null,inst_16913);var state_16956__$1 = (function (){var statearr_17031 = state_16956;(statearr_17031[(25)] = inst_16922);
return statearr_17031;
})();var statearr_17032_17092 = state_16956__$1;(statearr_17032_17092[(2)] = null);
(statearr_17032_17092[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16957 === (8)))
{var inst_16835 = (state_16956[(13)]);var inst_16836 = (state_16956[(16)]);var inst_16838 = (inst_16836 < inst_16835);var inst_16839 = inst_16838;var state_16956__$1 = state_16956;if(cljs.core.truth_(inst_16839))
{var statearr_17033_17093 = state_16956__$1;(statearr_17033_17093[(1)] = (10));
} else
{var statearr_17034_17094 = state_16956__$1;(statearr_17034_17094[(1)] = (11));
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
});})(c__5708__auto___17042,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___17042,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17038[(0)] = state_machine__5694__auto__);
(statearr_17038[(1)] = (1));
return statearr_17038;
});
var state_machine__5694__auto____1 = (function (state_16956){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16956);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17039){if((e17039 instanceof Object))
{var ex__5697__auto__ = e17039;var statearr_17040_17095 = state_16956;(statearr_17040_17095[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16956);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17039;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17096 = state_16956;
state_16956 = G__17096;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16956){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17042,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_17041 = f__5709__auto__.call(null);(statearr_17041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17042);
return statearr_17041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17042,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj17098 = {};return obj17098;
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
;var m = (function (){if(typeof cljs.core.async.t17208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17208 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17209){
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
this.meta17209 = meta17209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17208.cljs$lang$type = true;
cljs.core.async.t17208.cljs$lang$ctorStr = "cljs.core.async/t17208";
cljs.core.async.t17208.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17208");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17208.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17210){var self__ = this;
var _17210__$1 = this;return self__.meta17209;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17210,meta17209__$1){var self__ = this;
var _17210__$1 = this;return (new cljs.core.async.t17208(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17209__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17208 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17208(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17209){return (new cljs.core.async.t17208(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17209));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17208(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___17317 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17275){var state_val_17276 = (state_17275[(1)]);if((state_val_17276 === (7)))
{var inst_17224 = (state_17275[(7)]);var inst_17229 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17224);var state_17275__$1 = state_17275;var statearr_17277_17318 = state_17275__$1;(statearr_17277_17318[(2)] = inst_17229);
(statearr_17277_17318[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (20)))
{var inst_17239 = (state_17275[(8)]);var state_17275__$1 = state_17275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17275__$1,(23),out,inst_17239);
} else
{if((state_val_17276 === (1)))
{var inst_17214 = (state_17275[(9)]);var inst_17214__$1 = calc_state.call(null);var inst_17215 = cljs.core.seq_QMARK_.call(null,inst_17214__$1);var state_17275__$1 = (function (){var statearr_17278 = state_17275;(statearr_17278[(9)] = inst_17214__$1);
return statearr_17278;
})();if(inst_17215)
{var statearr_17279_17319 = state_17275__$1;(statearr_17279_17319[(1)] = (2));
} else
{var statearr_17280_17320 = state_17275__$1;(statearr_17280_17320[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (4)))
{var inst_17214 = (state_17275[(9)]);var inst_17220 = (state_17275[(2)]);var inst_17221 = cljs.core.get.call(null,inst_17220,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17222 = cljs.core.get.call(null,inst_17220,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17223 = cljs.core.get.call(null,inst_17220,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17224 = inst_17214;var state_17275__$1 = (function (){var statearr_17281 = state_17275;(statearr_17281[(7)] = inst_17224);
(statearr_17281[(10)] = inst_17223);
(statearr_17281[(11)] = inst_17222);
(statearr_17281[(12)] = inst_17221);
return statearr_17281;
})();var statearr_17282_17321 = state_17275__$1;(statearr_17282_17321[(2)] = null);
(statearr_17282_17321[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (15)))
{var state_17275__$1 = state_17275;var statearr_17283_17322 = state_17275__$1;(statearr_17283_17322[(2)] = null);
(statearr_17283_17322[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (21)))
{var state_17275__$1 = state_17275;var statearr_17284_17323 = state_17275__$1;(statearr_17284_17323[(2)] = null);
(statearr_17284_17323[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (13)))
{var inst_17271 = (state_17275[(2)]);var state_17275__$1 = state_17275;var statearr_17285_17324 = state_17275__$1;(statearr_17285_17324[(2)] = inst_17271);
(statearr_17285_17324[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (22)))
{var inst_17232 = (state_17275[(13)]);var inst_17268 = (state_17275[(2)]);var inst_17224 = inst_17232;var state_17275__$1 = (function (){var statearr_17286 = state_17275;(statearr_17286[(7)] = inst_17224);
(statearr_17286[(14)] = inst_17268);
return statearr_17286;
})();var statearr_17287_17325 = state_17275__$1;(statearr_17287_17325[(2)] = null);
(statearr_17287_17325[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (6)))
{var inst_17273 = (state_17275[(2)]);var state_17275__$1 = state_17275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17275__$1,inst_17273);
} else
{if((state_val_17276 === (17)))
{var inst_17254 = (state_17275[(15)]);var state_17275__$1 = state_17275;var statearr_17288_17326 = state_17275__$1;(statearr_17288_17326[(2)] = inst_17254);
(statearr_17288_17326[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (3)))
{var inst_17214 = (state_17275[(9)]);var state_17275__$1 = state_17275;var statearr_17289_17327 = state_17275__$1;(statearr_17289_17327[(2)] = inst_17214);
(statearr_17289_17327[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (12)))
{var inst_17235 = (state_17275[(16)]);var inst_17254 = (state_17275[(15)]);var inst_17240 = (state_17275[(17)]);var inst_17254__$1 = inst_17235.call(null,inst_17240);var state_17275__$1 = (function (){var statearr_17290 = state_17275;(statearr_17290[(15)] = inst_17254__$1);
return statearr_17290;
})();if(cljs.core.truth_(inst_17254__$1))
{var statearr_17291_17328 = state_17275__$1;(statearr_17291_17328[(1)] = (17));
} else
{var statearr_17292_17329 = state_17275__$1;(statearr_17292_17329[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (2)))
{var inst_17214 = (state_17275[(9)]);var inst_17217 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17214);var state_17275__$1 = state_17275;var statearr_17293_17330 = state_17275__$1;(statearr_17293_17330[(2)] = inst_17217);
(statearr_17293_17330[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (23)))
{var inst_17265 = (state_17275[(2)]);var state_17275__$1 = state_17275;var statearr_17294_17331 = state_17275__$1;(statearr_17294_17331[(2)] = inst_17265);
(statearr_17294_17331[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (19)))
{var inst_17262 = (state_17275[(2)]);var state_17275__$1 = state_17275;if(cljs.core.truth_(inst_17262))
{var statearr_17295_17332 = state_17275__$1;(statearr_17295_17332[(1)] = (20));
} else
{var statearr_17296_17333 = state_17275__$1;(statearr_17296_17333[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (11)))
{var inst_17239 = (state_17275[(8)]);var inst_17245 = (inst_17239 == null);var state_17275__$1 = state_17275;if(cljs.core.truth_(inst_17245))
{var statearr_17297_17334 = state_17275__$1;(statearr_17297_17334[(1)] = (14));
} else
{var statearr_17298_17335 = state_17275__$1;(statearr_17298_17335[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (9)))
{var inst_17232 = (state_17275[(13)]);var inst_17232__$1 = (state_17275[(2)]);var inst_17233 = cljs.core.get.call(null,inst_17232__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17234 = cljs.core.get.call(null,inst_17232__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17235 = cljs.core.get.call(null,inst_17232__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17275__$1 = (function (){var statearr_17299 = state_17275;(statearr_17299[(16)] = inst_17235);
(statearr_17299[(13)] = inst_17232__$1);
(statearr_17299[(18)] = inst_17234);
return statearr_17299;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17275__$1,(10),inst_17233);
} else
{if((state_val_17276 === (5)))
{var inst_17224 = (state_17275[(7)]);var inst_17227 = cljs.core.seq_QMARK_.call(null,inst_17224);var state_17275__$1 = state_17275;if(inst_17227)
{var statearr_17300_17336 = state_17275__$1;(statearr_17300_17336[(1)] = (7));
} else
{var statearr_17301_17337 = state_17275__$1;(statearr_17301_17337[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (14)))
{var inst_17240 = (state_17275[(17)]);var inst_17247 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17240);var state_17275__$1 = state_17275;var statearr_17302_17338 = state_17275__$1;(statearr_17302_17338[(2)] = inst_17247);
(statearr_17302_17338[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (16)))
{var inst_17250 = (state_17275[(2)]);var inst_17251 = calc_state.call(null);var inst_17224 = inst_17251;var state_17275__$1 = (function (){var statearr_17303 = state_17275;(statearr_17303[(7)] = inst_17224);
(statearr_17303[(19)] = inst_17250);
return statearr_17303;
})();var statearr_17304_17339 = state_17275__$1;(statearr_17304_17339[(2)] = null);
(statearr_17304_17339[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (10)))
{var inst_17240 = (state_17275[(17)]);var inst_17239 = (state_17275[(8)]);var inst_17238 = (state_17275[(2)]);var inst_17239__$1 = cljs.core.nth.call(null,inst_17238,(0),null);var inst_17240__$1 = cljs.core.nth.call(null,inst_17238,(1),null);var inst_17241 = (inst_17239__$1 == null);var inst_17242 = cljs.core._EQ_.call(null,inst_17240__$1,change);var inst_17243 = (inst_17241) || (inst_17242);var state_17275__$1 = (function (){var statearr_17305 = state_17275;(statearr_17305[(17)] = inst_17240__$1);
(statearr_17305[(8)] = inst_17239__$1);
return statearr_17305;
})();if(cljs.core.truth_(inst_17243))
{var statearr_17306_17340 = state_17275__$1;(statearr_17306_17340[(1)] = (11));
} else
{var statearr_17307_17341 = state_17275__$1;(statearr_17307_17341[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (18)))
{var inst_17235 = (state_17275[(16)]);var inst_17240 = (state_17275[(17)]);var inst_17234 = (state_17275[(18)]);var inst_17257 = cljs.core.empty_QMARK_.call(null,inst_17235);var inst_17258 = inst_17234.call(null,inst_17240);var inst_17259 = cljs.core.not.call(null,inst_17258);var inst_17260 = (inst_17257) && (inst_17259);var state_17275__$1 = state_17275;var statearr_17308_17342 = state_17275__$1;(statearr_17308_17342[(2)] = inst_17260);
(statearr_17308_17342[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (8)))
{var inst_17224 = (state_17275[(7)]);var state_17275__$1 = state_17275;var statearr_17309_17343 = state_17275__$1;(statearr_17309_17343[(2)] = inst_17224);
(statearr_17309_17343[(1)] = (9));
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
});})(c__5708__auto___17317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___17317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17313[(0)] = state_machine__5694__auto__);
(statearr_17313[(1)] = (1));
return statearr_17313;
});
var state_machine__5694__auto____1 = (function (state_17275){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17275);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17314){if((e17314 instanceof Object))
{var ex__5697__auto__ = e17314;var statearr_17315_17344 = state_17275;(statearr_17315_17344[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17275);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17314;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17345 = state_17275;
state_17275 = G__17345;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17275){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_17316 = f__5709__auto__.call(null);(statearr_17316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17317);
return statearr_17316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17347 = {};return obj17347;
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
return (function (p1__17348_SHARP_){if(cljs.core.truth_(p1__17348_SHARP_.call(null,topic)))
{return p1__17348_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17348_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17473 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17474){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17474 = meta17474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17473.cljs$lang$type = true;
cljs.core.async.t17473.cljs$lang$ctorStr = "cljs.core.async/t17473";
cljs.core.async.t17473.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17473");
});})(mults,ensure_mult))
;
cljs.core.async.t17473.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17473.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17473.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17473.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17473.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17473.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17475){var self__ = this;
var _17475__$1 = this;return self__.meta17474;
});})(mults,ensure_mult))
;
cljs.core.async.t17473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17475,meta17474__$1){var self__ = this;
var _17475__$1 = this;return (new cljs.core.async.t17473(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17474__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17473 = ((function (mults,ensure_mult){
return (function __GT_t17473(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17474){return (new cljs.core.async.t17473(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17474));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17473(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___17597 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17597,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17597,mults,ensure_mult,p){
return (function (state_17549){var state_val_17550 = (state_17549[(1)]);if((state_val_17550 === (7)))
{var inst_17545 = (state_17549[(2)]);var state_17549__$1 = state_17549;var statearr_17551_17598 = state_17549__$1;(statearr_17551_17598[(2)] = inst_17545);
(statearr_17551_17598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (20)))
{var state_17549__$1 = state_17549;var statearr_17552_17599 = state_17549__$1;(statearr_17552_17599[(2)] = null);
(statearr_17552_17599[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (1)))
{var state_17549__$1 = state_17549;var statearr_17553_17600 = state_17549__$1;(statearr_17553_17600[(2)] = null);
(statearr_17553_17600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (24)))
{var inst_17478 = (state_17549[(7)]);var inst_17528 = (state_17549[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17549,(23),Object,null,(22));var inst_17535 = cljs.core.async.muxch_STAR_.call(null,inst_17528);var state_17549__$1 = state_17549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17549__$1,(25),inst_17535,inst_17478);
} else
{if((state_val_17550 === (4)))
{var inst_17478 = (state_17549[(7)]);var inst_17478__$1 = (state_17549[(2)]);var inst_17479 = (inst_17478__$1 == null);var state_17549__$1 = (function (){var statearr_17554 = state_17549;(statearr_17554[(7)] = inst_17478__$1);
return statearr_17554;
})();if(cljs.core.truth_(inst_17479))
{var statearr_17555_17601 = state_17549__$1;(statearr_17555_17601[(1)] = (5));
} else
{var statearr_17556_17602 = state_17549__$1;(statearr_17556_17602[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (15)))
{var inst_17520 = (state_17549[(2)]);var state_17549__$1 = state_17549;var statearr_17557_17603 = state_17549__$1;(statearr_17557_17603[(2)] = inst_17520);
(statearr_17557_17603[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (21)))
{var inst_17542 = (state_17549[(2)]);var state_17549__$1 = (function (){var statearr_17558 = state_17549;(statearr_17558[(9)] = inst_17542);
return statearr_17558;
})();var statearr_17559_17604 = state_17549__$1;(statearr_17559_17604[(2)] = null);
(statearr_17559_17604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (13)))
{var inst_17502 = (state_17549[(10)]);var inst_17504 = cljs.core.chunked_seq_QMARK_.call(null,inst_17502);var state_17549__$1 = state_17549;if(inst_17504)
{var statearr_17560_17605 = state_17549__$1;(statearr_17560_17605[(1)] = (16));
} else
{var statearr_17561_17606 = state_17549__$1;(statearr_17561_17606[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (22)))
{var inst_17539 = (state_17549[(2)]);var state_17549__$1 = state_17549;var statearr_17562_17607 = state_17549__$1;(statearr_17562_17607[(2)] = inst_17539);
(statearr_17562_17607[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (6)))
{var inst_17478 = (state_17549[(7)]);var inst_17528 = (state_17549[(8)]);var inst_17526 = (state_17549[(11)]);var inst_17526__$1 = topic_fn.call(null,inst_17478);var inst_17527 = cljs.core.deref.call(null,mults);var inst_17528__$1 = cljs.core.get.call(null,inst_17527,inst_17526__$1);var state_17549__$1 = (function (){var statearr_17563 = state_17549;(statearr_17563[(8)] = inst_17528__$1);
(statearr_17563[(11)] = inst_17526__$1);
return statearr_17563;
})();if(cljs.core.truth_(inst_17528__$1))
{var statearr_17564_17608 = state_17549__$1;(statearr_17564_17608[(1)] = (19));
} else
{var statearr_17565_17609 = state_17549__$1;(statearr_17565_17609[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (25)))
{var inst_17537 = (state_17549[(2)]);var state_17549__$1 = state_17549;var statearr_17566_17610 = state_17549__$1;(statearr_17566_17610[(2)] = inst_17537);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17549__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (17)))
{var inst_17502 = (state_17549[(10)]);var inst_17511 = cljs.core.first.call(null,inst_17502);var inst_17512 = cljs.core.async.muxch_STAR_.call(null,inst_17511);var inst_17513 = cljs.core.async.close_BANG_.call(null,inst_17512);var inst_17514 = cljs.core.next.call(null,inst_17502);var inst_17488 = inst_17514;var inst_17489 = null;var inst_17490 = (0);var inst_17491 = (0);var state_17549__$1 = (function (){var statearr_17567 = state_17549;(statearr_17567[(12)] = inst_17490);
(statearr_17567[(13)] = inst_17491);
(statearr_17567[(14)] = inst_17488);
(statearr_17567[(15)] = inst_17489);
(statearr_17567[(16)] = inst_17513);
return statearr_17567;
})();var statearr_17568_17611 = state_17549__$1;(statearr_17568_17611[(2)] = null);
(statearr_17568_17611[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (3)))
{var inst_17547 = (state_17549[(2)]);var state_17549__$1 = state_17549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17549__$1,inst_17547);
} else
{if((state_val_17550 === (12)))
{var inst_17522 = (state_17549[(2)]);var state_17549__$1 = state_17549;var statearr_17569_17612 = state_17549__$1;(statearr_17569_17612[(2)] = inst_17522);
(statearr_17569_17612[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (2)))
{var state_17549__$1 = state_17549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17549__$1,(4),ch);
} else
{if((state_val_17550 === (23)))
{var inst_17526 = (state_17549[(11)]);var inst_17530 = (state_17549[(2)]);var inst_17531 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17526);var state_17549__$1 = (function (){var statearr_17570 = state_17549;(statearr_17570[(17)] = inst_17530);
return statearr_17570;
})();var statearr_17571_17613 = state_17549__$1;(statearr_17571_17613[(2)] = inst_17531);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17549__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (19)))
{var state_17549__$1 = state_17549;var statearr_17572_17614 = state_17549__$1;(statearr_17572_17614[(2)] = null);
(statearr_17572_17614[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (11)))
{var inst_17488 = (state_17549[(14)]);var inst_17502 = (state_17549[(10)]);var inst_17502__$1 = cljs.core.seq.call(null,inst_17488);var state_17549__$1 = (function (){var statearr_17573 = state_17549;(statearr_17573[(10)] = inst_17502__$1);
return statearr_17573;
})();if(inst_17502__$1)
{var statearr_17574_17615 = state_17549__$1;(statearr_17574_17615[(1)] = (13));
} else
{var statearr_17575_17616 = state_17549__$1;(statearr_17575_17616[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (9)))
{var inst_17524 = (state_17549[(2)]);var state_17549__$1 = state_17549;var statearr_17576_17617 = state_17549__$1;(statearr_17576_17617[(2)] = inst_17524);
(statearr_17576_17617[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (5)))
{var inst_17485 = cljs.core.deref.call(null,mults);var inst_17486 = cljs.core.vals.call(null,inst_17485);var inst_17487 = cljs.core.seq.call(null,inst_17486);var inst_17488 = inst_17487;var inst_17489 = null;var inst_17490 = (0);var inst_17491 = (0);var state_17549__$1 = (function (){var statearr_17577 = state_17549;(statearr_17577[(12)] = inst_17490);
(statearr_17577[(13)] = inst_17491);
(statearr_17577[(14)] = inst_17488);
(statearr_17577[(15)] = inst_17489);
return statearr_17577;
})();var statearr_17578_17618 = state_17549__$1;(statearr_17578_17618[(2)] = null);
(statearr_17578_17618[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (14)))
{var state_17549__$1 = state_17549;var statearr_17582_17619 = state_17549__$1;(statearr_17582_17619[(2)] = null);
(statearr_17582_17619[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (16)))
{var inst_17502 = (state_17549[(10)]);var inst_17506 = cljs.core.chunk_first.call(null,inst_17502);var inst_17507 = cljs.core.chunk_rest.call(null,inst_17502);var inst_17508 = cljs.core.count.call(null,inst_17506);var inst_17488 = inst_17507;var inst_17489 = inst_17506;var inst_17490 = inst_17508;var inst_17491 = (0);var state_17549__$1 = (function (){var statearr_17583 = state_17549;(statearr_17583[(12)] = inst_17490);
(statearr_17583[(13)] = inst_17491);
(statearr_17583[(14)] = inst_17488);
(statearr_17583[(15)] = inst_17489);
return statearr_17583;
})();var statearr_17584_17620 = state_17549__$1;(statearr_17584_17620[(2)] = null);
(statearr_17584_17620[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (10)))
{var inst_17490 = (state_17549[(12)]);var inst_17491 = (state_17549[(13)]);var inst_17488 = (state_17549[(14)]);var inst_17489 = (state_17549[(15)]);var inst_17496 = cljs.core._nth.call(null,inst_17489,inst_17491);var inst_17497 = cljs.core.async.muxch_STAR_.call(null,inst_17496);var inst_17498 = cljs.core.async.close_BANG_.call(null,inst_17497);var inst_17499 = (inst_17491 + (1));var tmp17579 = inst_17490;var tmp17580 = inst_17488;var tmp17581 = inst_17489;var inst_17488__$1 = tmp17580;var inst_17489__$1 = tmp17581;var inst_17490__$1 = tmp17579;var inst_17491__$1 = inst_17499;var state_17549__$1 = (function (){var statearr_17585 = state_17549;(statearr_17585[(12)] = inst_17490__$1);
(statearr_17585[(18)] = inst_17498);
(statearr_17585[(13)] = inst_17491__$1);
(statearr_17585[(14)] = inst_17488__$1);
(statearr_17585[(15)] = inst_17489__$1);
return statearr_17585;
})();var statearr_17586_17621 = state_17549__$1;(statearr_17586_17621[(2)] = null);
(statearr_17586_17621[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (18)))
{var inst_17517 = (state_17549[(2)]);var state_17549__$1 = state_17549;var statearr_17587_17622 = state_17549__$1;(statearr_17587_17622[(2)] = inst_17517);
(statearr_17587_17622[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17550 === (8)))
{var inst_17490 = (state_17549[(12)]);var inst_17491 = (state_17549[(13)]);var inst_17493 = (inst_17491 < inst_17490);var inst_17494 = inst_17493;var state_17549__$1 = state_17549;if(cljs.core.truth_(inst_17494))
{var statearr_17588_17623 = state_17549__$1;(statearr_17588_17623[(1)] = (10));
} else
{var statearr_17589_17624 = state_17549__$1;(statearr_17589_17624[(1)] = (11));
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
});})(c__5708__auto___17597,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___17597,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17593[(0)] = state_machine__5694__auto__);
(statearr_17593[(1)] = (1));
return statearr_17593;
});
var state_machine__5694__auto____1 = (function (state_17549){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17549);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17594){if((e17594 instanceof Object))
{var ex__5697__auto__ = e17594;var statearr_17595_17625 = state_17549;(statearr_17595_17625[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17626 = state_17549;
state_17549 = G__17626;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17549){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17597,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_17596 = f__5709__auto__.call(null);(statearr_17596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17597);
return statearr_17596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17597,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___17763 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17733){var state_val_17734 = (state_17733[(1)]);if((state_val_17734 === (7)))
{var state_17733__$1 = state_17733;var statearr_17735_17764 = state_17733__$1;(statearr_17735_17764[(2)] = null);
(statearr_17735_17764[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (1)))
{var state_17733__$1 = state_17733;var statearr_17736_17765 = state_17733__$1;(statearr_17736_17765[(2)] = null);
(statearr_17736_17765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (4)))
{var inst_17697 = (state_17733[(7)]);var inst_17699 = (inst_17697 < cnt);var state_17733__$1 = state_17733;if(cljs.core.truth_(inst_17699))
{var statearr_17737_17766 = state_17733__$1;(statearr_17737_17766[(1)] = (6));
} else
{var statearr_17738_17767 = state_17733__$1;(statearr_17738_17767[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (15)))
{var inst_17729 = (state_17733[(2)]);var state_17733__$1 = state_17733;var statearr_17739_17768 = state_17733__$1;(statearr_17739_17768[(2)] = inst_17729);
(statearr_17739_17768[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (13)))
{var inst_17722 = cljs.core.async.close_BANG_.call(null,out);var state_17733__$1 = state_17733;var statearr_17740_17769 = state_17733__$1;(statearr_17740_17769[(2)] = inst_17722);
(statearr_17740_17769[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (6)))
{var state_17733__$1 = state_17733;var statearr_17741_17770 = state_17733__$1;(statearr_17741_17770[(2)] = null);
(statearr_17741_17770[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (3)))
{var inst_17731 = (state_17733[(2)]);var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17733__$1,inst_17731);
} else
{if((state_val_17734 === (12)))
{var inst_17719 = (state_17733[(8)]);var inst_17719__$1 = (state_17733[(2)]);var inst_17720 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17719__$1);var state_17733__$1 = (function (){var statearr_17742 = state_17733;(statearr_17742[(8)] = inst_17719__$1);
return statearr_17742;
})();if(cljs.core.truth_(inst_17720))
{var statearr_17743_17771 = state_17733__$1;(statearr_17743_17771[(1)] = (13));
} else
{var statearr_17744_17772 = state_17733__$1;(statearr_17744_17772[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (2)))
{var inst_17696 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17697 = (0);var state_17733__$1 = (function (){var statearr_17745 = state_17733;(statearr_17745[(7)] = inst_17697);
(statearr_17745[(9)] = inst_17696);
return statearr_17745;
})();var statearr_17746_17773 = state_17733__$1;(statearr_17746_17773[(2)] = null);
(statearr_17746_17773[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (11)))
{var inst_17697 = (state_17733[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17733,(10),Object,null,(9));var inst_17706 = chs__$1.call(null,inst_17697);var inst_17707 = done.call(null,inst_17697);var inst_17708 = cljs.core.async.take_BANG_.call(null,inst_17706,inst_17707);var state_17733__$1 = state_17733;var statearr_17747_17774 = state_17733__$1;(statearr_17747_17774[(2)] = inst_17708);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17733__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (9)))
{var inst_17697 = (state_17733[(7)]);var inst_17710 = (state_17733[(2)]);var inst_17711 = (inst_17697 + (1));var inst_17697__$1 = inst_17711;var state_17733__$1 = (function (){var statearr_17748 = state_17733;(statearr_17748[(7)] = inst_17697__$1);
(statearr_17748[(10)] = inst_17710);
return statearr_17748;
})();var statearr_17749_17775 = state_17733__$1;(statearr_17749_17775[(2)] = null);
(statearr_17749_17775[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (5)))
{var inst_17717 = (state_17733[(2)]);var state_17733__$1 = (function (){var statearr_17750 = state_17733;(statearr_17750[(11)] = inst_17717);
return statearr_17750;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17733__$1,(12),dchan);
} else
{if((state_val_17734 === (14)))
{var inst_17719 = (state_17733[(8)]);var inst_17724 = cljs.core.apply.call(null,f,inst_17719);var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17733__$1,(16),out,inst_17724);
} else
{if((state_val_17734 === (16)))
{var inst_17726 = (state_17733[(2)]);var state_17733__$1 = (function (){var statearr_17751 = state_17733;(statearr_17751[(12)] = inst_17726);
return statearr_17751;
})();var statearr_17752_17776 = state_17733__$1;(statearr_17752_17776[(2)] = null);
(statearr_17752_17776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (10)))
{var inst_17701 = (state_17733[(2)]);var inst_17702 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17733__$1 = (function (){var statearr_17753 = state_17733;(statearr_17753[(13)] = inst_17701);
return statearr_17753;
})();var statearr_17754_17777 = state_17733__$1;(statearr_17754_17777[(2)] = inst_17702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17733__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (8)))
{var inst_17715 = (state_17733[(2)]);var state_17733__$1 = state_17733;var statearr_17755_17778 = state_17733__$1;(statearr_17755_17778[(2)] = inst_17715);
(statearr_17755_17778[(1)] = (5));
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
});})(c__5708__auto___17763,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___17763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17759[(0)] = state_machine__5694__auto__);
(statearr_17759[(1)] = (1));
return statearr_17759;
});
var state_machine__5694__auto____1 = (function (state_17733){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17760){if((e17760 instanceof Object))
{var ex__5697__auto__ = e17760;var statearr_17761_17779 = state_17733;(statearr_17761_17779[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17760;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17780 = state_17733;
state_17733 = G__17780;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17733){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17763,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_17762 = f__5709__auto__.call(null);(statearr_17762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17763);
return statearr_17762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17763,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17888 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17888,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17888,out){
return (function (state_17864){var state_val_17865 = (state_17864[(1)]);if((state_val_17865 === (7)))
{var inst_17844 = (state_17864[(7)]);var inst_17843 = (state_17864[(8)]);var inst_17843__$1 = (state_17864[(2)]);var inst_17844__$1 = cljs.core.nth.call(null,inst_17843__$1,(0),null);var inst_17845 = cljs.core.nth.call(null,inst_17843__$1,(1),null);var inst_17846 = (inst_17844__$1 == null);var state_17864__$1 = (function (){var statearr_17866 = state_17864;(statearr_17866[(7)] = inst_17844__$1);
(statearr_17866[(9)] = inst_17845);
(statearr_17866[(8)] = inst_17843__$1);
return statearr_17866;
})();if(cljs.core.truth_(inst_17846))
{var statearr_17867_17889 = state_17864__$1;(statearr_17867_17889[(1)] = (8));
} else
{var statearr_17868_17890 = state_17864__$1;(statearr_17868_17890[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17865 === (1)))
{var inst_17835 = cljs.core.vec.call(null,chs);var inst_17836 = inst_17835;var state_17864__$1 = (function (){var statearr_17869 = state_17864;(statearr_17869[(10)] = inst_17836);
return statearr_17869;
})();var statearr_17870_17891 = state_17864__$1;(statearr_17870_17891[(2)] = null);
(statearr_17870_17891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17865 === (4)))
{var inst_17836 = (state_17864[(10)]);var state_17864__$1 = state_17864;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17864__$1,(7),inst_17836);
} else
{if((state_val_17865 === (6)))
{var inst_17860 = (state_17864[(2)]);var state_17864__$1 = state_17864;var statearr_17871_17892 = state_17864__$1;(statearr_17871_17892[(2)] = inst_17860);
(statearr_17871_17892[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17865 === (3)))
{var inst_17862 = (state_17864[(2)]);var state_17864__$1 = state_17864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17864__$1,inst_17862);
} else
{if((state_val_17865 === (2)))
{var inst_17836 = (state_17864[(10)]);var inst_17838 = cljs.core.count.call(null,inst_17836);var inst_17839 = (inst_17838 > (0));var state_17864__$1 = state_17864;if(cljs.core.truth_(inst_17839))
{var statearr_17873_17893 = state_17864__$1;(statearr_17873_17893[(1)] = (4));
} else
{var statearr_17874_17894 = state_17864__$1;(statearr_17874_17894[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17865 === (11)))
{var inst_17836 = (state_17864[(10)]);var inst_17853 = (state_17864[(2)]);var tmp17872 = inst_17836;var inst_17836__$1 = tmp17872;var state_17864__$1 = (function (){var statearr_17875 = state_17864;(statearr_17875[(11)] = inst_17853);
(statearr_17875[(10)] = inst_17836__$1);
return statearr_17875;
})();var statearr_17876_17895 = state_17864__$1;(statearr_17876_17895[(2)] = null);
(statearr_17876_17895[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17865 === (9)))
{var inst_17844 = (state_17864[(7)]);var state_17864__$1 = state_17864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17864__$1,(11),out,inst_17844);
} else
{if((state_val_17865 === (5)))
{var inst_17858 = cljs.core.async.close_BANG_.call(null,out);var state_17864__$1 = state_17864;var statearr_17877_17896 = state_17864__$1;(statearr_17877_17896[(2)] = inst_17858);
(statearr_17877_17896[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17865 === (10)))
{var inst_17856 = (state_17864[(2)]);var state_17864__$1 = state_17864;var statearr_17878_17897 = state_17864__$1;(statearr_17878_17897[(2)] = inst_17856);
(statearr_17878_17897[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17865 === (8)))
{var inst_17836 = (state_17864[(10)]);var inst_17844 = (state_17864[(7)]);var inst_17845 = (state_17864[(9)]);var inst_17843 = (state_17864[(8)]);var inst_17848 = (function (){var c = inst_17845;var v = inst_17844;var vec__17841 = inst_17843;var cs = inst_17836;return ((function (c,v,vec__17841,cs,inst_17836,inst_17844,inst_17845,inst_17843,state_val_17865,c__5708__auto___17888,out){
return (function (p1__17781_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17781_SHARP_);
});
;})(c,v,vec__17841,cs,inst_17836,inst_17844,inst_17845,inst_17843,state_val_17865,c__5708__auto___17888,out))
})();var inst_17849 = cljs.core.filterv.call(null,inst_17848,inst_17836);var inst_17836__$1 = inst_17849;var state_17864__$1 = (function (){var statearr_17879 = state_17864;(statearr_17879[(10)] = inst_17836__$1);
return statearr_17879;
})();var statearr_17880_17898 = state_17864__$1;(statearr_17880_17898[(2)] = null);
(statearr_17880_17898[(1)] = (2));
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
});})(c__5708__auto___17888,out))
;return ((function (switch__5693__auto__,c__5708__auto___17888,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17884 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17884[(0)] = state_machine__5694__auto__);
(statearr_17884[(1)] = (1));
return statearr_17884;
});
var state_machine__5694__auto____1 = (function (state_17864){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17864);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17885){if((e17885 instanceof Object))
{var ex__5697__auto__ = e17885;var statearr_17886_17899 = state_17864;(statearr_17886_17899[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17885;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17900 = state_17864;
state_17864 = G__17900;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17864){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17888,out))
})();var state__5710__auto__ = (function (){var statearr_17887 = f__5709__auto__.call(null);(statearr_17887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17888);
return statearr_17887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17888,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17993 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17993,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17993,out){
return (function (state_17970){var state_val_17971 = (state_17970[(1)]);if((state_val_17971 === (7)))
{var inst_17952 = (state_17970[(7)]);var inst_17952__$1 = (state_17970[(2)]);var inst_17953 = (inst_17952__$1 == null);var inst_17954 = cljs.core.not.call(null,inst_17953);var state_17970__$1 = (function (){var statearr_17972 = state_17970;(statearr_17972[(7)] = inst_17952__$1);
return statearr_17972;
})();if(inst_17954)
{var statearr_17973_17994 = state_17970__$1;(statearr_17973_17994[(1)] = (8));
} else
{var statearr_17974_17995 = state_17970__$1;(statearr_17974_17995[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (1)))
{var inst_17947 = (0);var state_17970__$1 = (function (){var statearr_17975 = state_17970;(statearr_17975[(8)] = inst_17947);
return statearr_17975;
})();var statearr_17976_17996 = state_17970__$1;(statearr_17976_17996[(2)] = null);
(statearr_17976_17996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (4)))
{var state_17970__$1 = state_17970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17970__$1,(7),ch);
} else
{if((state_val_17971 === (6)))
{var inst_17965 = (state_17970[(2)]);var state_17970__$1 = state_17970;var statearr_17977_17997 = state_17970__$1;(statearr_17977_17997[(2)] = inst_17965);
(statearr_17977_17997[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (3)))
{var inst_17967 = (state_17970[(2)]);var inst_17968 = cljs.core.async.close_BANG_.call(null,out);var state_17970__$1 = (function (){var statearr_17978 = state_17970;(statearr_17978[(9)] = inst_17967);
return statearr_17978;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17970__$1,inst_17968);
} else
{if((state_val_17971 === (2)))
{var inst_17947 = (state_17970[(8)]);var inst_17949 = (inst_17947 < n);var state_17970__$1 = state_17970;if(cljs.core.truth_(inst_17949))
{var statearr_17979_17998 = state_17970__$1;(statearr_17979_17998[(1)] = (4));
} else
{var statearr_17980_17999 = state_17970__$1;(statearr_17980_17999[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (11)))
{var inst_17947 = (state_17970[(8)]);var inst_17957 = (state_17970[(2)]);var inst_17958 = (inst_17947 + (1));var inst_17947__$1 = inst_17958;var state_17970__$1 = (function (){var statearr_17981 = state_17970;(statearr_17981[(8)] = inst_17947__$1);
(statearr_17981[(10)] = inst_17957);
return statearr_17981;
})();var statearr_17982_18000 = state_17970__$1;(statearr_17982_18000[(2)] = null);
(statearr_17982_18000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (9)))
{var state_17970__$1 = state_17970;var statearr_17983_18001 = state_17970__$1;(statearr_17983_18001[(2)] = null);
(statearr_17983_18001[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (5)))
{var state_17970__$1 = state_17970;var statearr_17984_18002 = state_17970__$1;(statearr_17984_18002[(2)] = null);
(statearr_17984_18002[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (10)))
{var inst_17962 = (state_17970[(2)]);var state_17970__$1 = state_17970;var statearr_17985_18003 = state_17970__$1;(statearr_17985_18003[(2)] = inst_17962);
(statearr_17985_18003[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17971 === (8)))
{var inst_17952 = (state_17970[(7)]);var state_17970__$1 = state_17970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17970__$1,(11),out,inst_17952);
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
});})(c__5708__auto___17993,out))
;return ((function (switch__5693__auto__,c__5708__auto___17993,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17989 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17989[(0)] = state_machine__5694__auto__);
(statearr_17989[(1)] = (1));
return statearr_17989;
});
var state_machine__5694__auto____1 = (function (state_17970){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17990){if((e17990 instanceof Object))
{var ex__5697__auto__ = e17990;var statearr_17991_18004 = state_17970;(statearr_17991_18004[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17990;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18005 = state_17970;
state_17970 = G__18005;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17970){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17993,out))
})();var state__5710__auto__ = (function (){var statearr_17992 = f__5709__auto__.call(null);(statearr_17992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17993);
return statearr_17992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17993,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18102 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18102,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18102,out){
return (function (state_18077){var state_val_18078 = (state_18077[(1)]);if((state_val_18078 === (7)))
{var inst_18072 = (state_18077[(2)]);var state_18077__$1 = state_18077;var statearr_18079_18103 = state_18077__$1;(statearr_18079_18103[(2)] = inst_18072);
(statearr_18079_18103[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18078 === (1)))
{var inst_18054 = null;var state_18077__$1 = (function (){var statearr_18080 = state_18077;(statearr_18080[(7)] = inst_18054);
return statearr_18080;
})();var statearr_18081_18104 = state_18077__$1;(statearr_18081_18104[(2)] = null);
(statearr_18081_18104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18078 === (4)))
{var inst_18057 = (state_18077[(8)]);var inst_18057__$1 = (state_18077[(2)]);var inst_18058 = (inst_18057__$1 == null);var inst_18059 = cljs.core.not.call(null,inst_18058);var state_18077__$1 = (function (){var statearr_18082 = state_18077;(statearr_18082[(8)] = inst_18057__$1);
return statearr_18082;
})();if(inst_18059)
{var statearr_18083_18105 = state_18077__$1;(statearr_18083_18105[(1)] = (5));
} else
{var statearr_18084_18106 = state_18077__$1;(statearr_18084_18106[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18078 === (6)))
{var state_18077__$1 = state_18077;var statearr_18085_18107 = state_18077__$1;(statearr_18085_18107[(2)] = null);
(statearr_18085_18107[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18078 === (3)))
{var inst_18074 = (state_18077[(2)]);var inst_18075 = cljs.core.async.close_BANG_.call(null,out);var state_18077__$1 = (function (){var statearr_18086 = state_18077;(statearr_18086[(9)] = inst_18074);
return statearr_18086;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18077__$1,inst_18075);
} else
{if((state_val_18078 === (2)))
{var state_18077__$1 = state_18077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18077__$1,(4),ch);
} else
{if((state_val_18078 === (11)))
{var inst_18057 = (state_18077[(8)]);var inst_18066 = (state_18077[(2)]);var inst_18054 = inst_18057;var state_18077__$1 = (function (){var statearr_18087 = state_18077;(statearr_18087[(7)] = inst_18054);
(statearr_18087[(10)] = inst_18066);
return statearr_18087;
})();var statearr_18088_18108 = state_18077__$1;(statearr_18088_18108[(2)] = null);
(statearr_18088_18108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18078 === (9)))
{var inst_18057 = (state_18077[(8)]);var state_18077__$1 = state_18077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18077__$1,(11),out,inst_18057);
} else
{if((state_val_18078 === (5)))
{var inst_18057 = (state_18077[(8)]);var inst_18054 = (state_18077[(7)]);var inst_18061 = cljs.core._EQ_.call(null,inst_18057,inst_18054);var state_18077__$1 = state_18077;if(inst_18061)
{var statearr_18090_18109 = state_18077__$1;(statearr_18090_18109[(1)] = (8));
} else
{var statearr_18091_18110 = state_18077__$1;(statearr_18091_18110[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18078 === (10)))
{var inst_18069 = (state_18077[(2)]);var state_18077__$1 = state_18077;var statearr_18092_18111 = state_18077__$1;(statearr_18092_18111[(2)] = inst_18069);
(statearr_18092_18111[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18078 === (8)))
{var inst_18054 = (state_18077[(7)]);var tmp18089 = inst_18054;var inst_18054__$1 = tmp18089;var state_18077__$1 = (function (){var statearr_18093 = state_18077;(statearr_18093[(7)] = inst_18054__$1);
return statearr_18093;
})();var statearr_18094_18112 = state_18077__$1;(statearr_18094_18112[(2)] = null);
(statearr_18094_18112[(1)] = (2));
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
});})(c__5708__auto___18102,out))
;return ((function (switch__5693__auto__,c__5708__auto___18102,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18098 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18098[(0)] = state_machine__5694__auto__);
(statearr_18098[(1)] = (1));
return statearr_18098;
});
var state_machine__5694__auto____1 = (function (state_18077){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18077);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18099){if((e18099 instanceof Object))
{var ex__5697__auto__ = e18099;var statearr_18100_18113 = state_18077;(statearr_18100_18113[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18077);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18099;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18114 = state_18077;
state_18077 = G__18114;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18077){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18102,out))
})();var state__5710__auto__ = (function (){var statearr_18101 = f__5709__auto__.call(null);(statearr_18101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18102);
return statearr_18101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18102,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18249 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18249,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18249,out){
return (function (state_18219){var state_val_18220 = (state_18219[(1)]);if((state_val_18220 === (7)))
{var inst_18215 = (state_18219[(2)]);var state_18219__$1 = state_18219;var statearr_18221_18250 = state_18219__$1;(statearr_18221_18250[(2)] = inst_18215);
(statearr_18221_18250[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (1)))
{var inst_18182 = (new Array(n));var inst_18183 = inst_18182;var inst_18184 = (0);var state_18219__$1 = (function (){var statearr_18222 = state_18219;(statearr_18222[(7)] = inst_18183);
(statearr_18222[(8)] = inst_18184);
return statearr_18222;
})();var statearr_18223_18251 = state_18219__$1;(statearr_18223_18251[(2)] = null);
(statearr_18223_18251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (4)))
{var inst_18187 = (state_18219[(9)]);var inst_18187__$1 = (state_18219[(2)]);var inst_18188 = (inst_18187__$1 == null);var inst_18189 = cljs.core.not.call(null,inst_18188);var state_18219__$1 = (function (){var statearr_18224 = state_18219;(statearr_18224[(9)] = inst_18187__$1);
return statearr_18224;
})();if(inst_18189)
{var statearr_18225_18252 = state_18219__$1;(statearr_18225_18252[(1)] = (5));
} else
{var statearr_18226_18253 = state_18219__$1;(statearr_18226_18253[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (15)))
{var inst_18209 = (state_18219[(2)]);var state_18219__$1 = state_18219;var statearr_18227_18254 = state_18219__$1;(statearr_18227_18254[(2)] = inst_18209);
(statearr_18227_18254[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (13)))
{var state_18219__$1 = state_18219;var statearr_18228_18255 = state_18219__$1;(statearr_18228_18255[(2)] = null);
(statearr_18228_18255[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (6)))
{var inst_18184 = (state_18219[(8)]);var inst_18205 = (inst_18184 > (0));var state_18219__$1 = state_18219;if(cljs.core.truth_(inst_18205))
{var statearr_18229_18256 = state_18219__$1;(statearr_18229_18256[(1)] = (12));
} else
{var statearr_18230_18257 = state_18219__$1;(statearr_18230_18257[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (3)))
{var inst_18217 = (state_18219[(2)]);var state_18219__$1 = state_18219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18219__$1,inst_18217);
} else
{if((state_val_18220 === (12)))
{var inst_18183 = (state_18219[(7)]);var inst_18207 = cljs.core.vec.call(null,inst_18183);var state_18219__$1 = state_18219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18219__$1,(15),out,inst_18207);
} else
{if((state_val_18220 === (2)))
{var state_18219__$1 = state_18219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18219__$1,(4),ch);
} else
{if((state_val_18220 === (11)))
{var inst_18199 = (state_18219[(2)]);var inst_18200 = (new Array(n));var inst_18183 = inst_18200;var inst_18184 = (0);var state_18219__$1 = (function (){var statearr_18231 = state_18219;(statearr_18231[(7)] = inst_18183);
(statearr_18231[(8)] = inst_18184);
(statearr_18231[(10)] = inst_18199);
return statearr_18231;
})();var statearr_18232_18258 = state_18219__$1;(statearr_18232_18258[(2)] = null);
(statearr_18232_18258[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (9)))
{var inst_18183 = (state_18219[(7)]);var inst_18197 = cljs.core.vec.call(null,inst_18183);var state_18219__$1 = state_18219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18219__$1,(11),out,inst_18197);
} else
{if((state_val_18220 === (5)))
{var inst_18183 = (state_18219[(7)]);var inst_18187 = (state_18219[(9)]);var inst_18192 = (state_18219[(11)]);var inst_18184 = (state_18219[(8)]);var inst_18191 = (inst_18183[inst_18184] = inst_18187);var inst_18192__$1 = (inst_18184 + (1));var inst_18193 = (inst_18192__$1 < n);var state_18219__$1 = (function (){var statearr_18233 = state_18219;(statearr_18233[(12)] = inst_18191);
(statearr_18233[(11)] = inst_18192__$1);
return statearr_18233;
})();if(cljs.core.truth_(inst_18193))
{var statearr_18234_18259 = state_18219__$1;(statearr_18234_18259[(1)] = (8));
} else
{var statearr_18235_18260 = state_18219__$1;(statearr_18235_18260[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (14)))
{var inst_18212 = (state_18219[(2)]);var inst_18213 = cljs.core.async.close_BANG_.call(null,out);var state_18219__$1 = (function (){var statearr_18237 = state_18219;(statearr_18237[(13)] = inst_18212);
return statearr_18237;
})();var statearr_18238_18261 = state_18219__$1;(statearr_18238_18261[(2)] = inst_18213);
(statearr_18238_18261[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (10)))
{var inst_18203 = (state_18219[(2)]);var state_18219__$1 = state_18219;var statearr_18239_18262 = state_18219__$1;(statearr_18239_18262[(2)] = inst_18203);
(statearr_18239_18262[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18220 === (8)))
{var inst_18183 = (state_18219[(7)]);var inst_18192 = (state_18219[(11)]);var tmp18236 = inst_18183;var inst_18183__$1 = tmp18236;var inst_18184 = inst_18192;var state_18219__$1 = (function (){var statearr_18240 = state_18219;(statearr_18240[(7)] = inst_18183__$1);
(statearr_18240[(8)] = inst_18184);
return statearr_18240;
})();var statearr_18241_18263 = state_18219__$1;(statearr_18241_18263[(2)] = null);
(statearr_18241_18263[(1)] = (2));
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
});})(c__5708__auto___18249,out))
;return ((function (switch__5693__auto__,c__5708__auto___18249,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18245[(0)] = state_machine__5694__auto__);
(statearr_18245[(1)] = (1));
return statearr_18245;
});
var state_machine__5694__auto____1 = (function (state_18219){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18219);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18246){if((e18246 instanceof Object))
{var ex__5697__auto__ = e18246;var statearr_18247_18264 = state_18219;(statearr_18247_18264[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18219);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18246;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18265 = state_18219;
state_18219 = G__18265;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18219){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18249,out))
})();var state__5710__auto__ = (function (){var statearr_18248 = f__5709__auto__.call(null);(statearr_18248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18249);
return statearr_18248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18249,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18408 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18408,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18408,out){
return (function (state_18378){var state_val_18379 = (state_18378[(1)]);if((state_val_18379 === (7)))
{var inst_18374 = (state_18378[(2)]);var state_18378__$1 = state_18378;var statearr_18380_18409 = state_18378__$1;(statearr_18380_18409[(2)] = inst_18374);
(statearr_18380_18409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (1)))
{var inst_18337 = [];var inst_18338 = inst_18337;var inst_18339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18378__$1 = (function (){var statearr_18381 = state_18378;(statearr_18381[(7)] = inst_18339);
(statearr_18381[(8)] = inst_18338);
return statearr_18381;
})();var statearr_18382_18410 = state_18378__$1;(statearr_18382_18410[(2)] = null);
(statearr_18382_18410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (4)))
{var inst_18342 = (state_18378[(9)]);var inst_18342__$1 = (state_18378[(2)]);var inst_18343 = (inst_18342__$1 == null);var inst_18344 = cljs.core.not.call(null,inst_18343);var state_18378__$1 = (function (){var statearr_18383 = state_18378;(statearr_18383[(9)] = inst_18342__$1);
return statearr_18383;
})();if(inst_18344)
{var statearr_18384_18411 = state_18378__$1;(statearr_18384_18411[(1)] = (5));
} else
{var statearr_18385_18412 = state_18378__$1;(statearr_18385_18412[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (15)))
{var inst_18368 = (state_18378[(2)]);var state_18378__$1 = state_18378;var statearr_18386_18413 = state_18378__$1;(statearr_18386_18413[(2)] = inst_18368);
(statearr_18386_18413[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (13)))
{var state_18378__$1 = state_18378;var statearr_18387_18414 = state_18378__$1;(statearr_18387_18414[(2)] = null);
(statearr_18387_18414[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (6)))
{var inst_18338 = (state_18378[(8)]);var inst_18363 = inst_18338.length;var inst_18364 = (inst_18363 > (0));var state_18378__$1 = state_18378;if(cljs.core.truth_(inst_18364))
{var statearr_18388_18415 = state_18378__$1;(statearr_18388_18415[(1)] = (12));
} else
{var statearr_18389_18416 = state_18378__$1;(statearr_18389_18416[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (3)))
{var inst_18376 = (state_18378[(2)]);var state_18378__$1 = state_18378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18378__$1,inst_18376);
} else
{if((state_val_18379 === (12)))
{var inst_18338 = (state_18378[(8)]);var inst_18366 = cljs.core.vec.call(null,inst_18338);var state_18378__$1 = state_18378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18378__$1,(15),out,inst_18366);
} else
{if((state_val_18379 === (2)))
{var state_18378__$1 = state_18378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18378__$1,(4),ch);
} else
{if((state_val_18379 === (11)))
{var inst_18342 = (state_18378[(9)]);var inst_18346 = (state_18378[(10)]);var inst_18356 = (state_18378[(2)]);var inst_18357 = [];var inst_18358 = inst_18357.push(inst_18342);var inst_18338 = inst_18357;var inst_18339 = inst_18346;var state_18378__$1 = (function (){var statearr_18390 = state_18378;(statearr_18390[(11)] = inst_18356);
(statearr_18390[(12)] = inst_18358);
(statearr_18390[(7)] = inst_18339);
(statearr_18390[(8)] = inst_18338);
return statearr_18390;
})();var statearr_18391_18417 = state_18378__$1;(statearr_18391_18417[(2)] = null);
(statearr_18391_18417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (9)))
{var inst_18338 = (state_18378[(8)]);var inst_18354 = cljs.core.vec.call(null,inst_18338);var state_18378__$1 = state_18378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18378__$1,(11),out,inst_18354);
} else
{if((state_val_18379 === (5)))
{var inst_18339 = (state_18378[(7)]);var inst_18342 = (state_18378[(9)]);var inst_18346 = (state_18378[(10)]);var inst_18346__$1 = f.call(null,inst_18342);var inst_18347 = cljs.core._EQ_.call(null,inst_18346__$1,inst_18339);var inst_18348 = cljs.core.keyword_identical_QMARK_.call(null,inst_18339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18349 = (inst_18347) || (inst_18348);var state_18378__$1 = (function (){var statearr_18392 = state_18378;(statearr_18392[(10)] = inst_18346__$1);
return statearr_18392;
})();if(cljs.core.truth_(inst_18349))
{var statearr_18393_18418 = state_18378__$1;(statearr_18393_18418[(1)] = (8));
} else
{var statearr_18394_18419 = state_18378__$1;(statearr_18394_18419[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (14)))
{var inst_18371 = (state_18378[(2)]);var inst_18372 = cljs.core.async.close_BANG_.call(null,out);var state_18378__$1 = (function (){var statearr_18396 = state_18378;(statearr_18396[(13)] = inst_18371);
return statearr_18396;
})();var statearr_18397_18420 = state_18378__$1;(statearr_18397_18420[(2)] = inst_18372);
(statearr_18397_18420[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (10)))
{var inst_18361 = (state_18378[(2)]);var state_18378__$1 = state_18378;var statearr_18398_18421 = state_18378__$1;(statearr_18398_18421[(2)] = inst_18361);
(statearr_18398_18421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18379 === (8)))
{var inst_18338 = (state_18378[(8)]);var inst_18342 = (state_18378[(9)]);var inst_18346 = (state_18378[(10)]);var inst_18351 = inst_18338.push(inst_18342);var tmp18395 = inst_18338;var inst_18338__$1 = tmp18395;var inst_18339 = inst_18346;var state_18378__$1 = (function (){var statearr_18399 = state_18378;(statearr_18399[(7)] = inst_18339);
(statearr_18399[(14)] = inst_18351);
(statearr_18399[(8)] = inst_18338__$1);
return statearr_18399;
})();var statearr_18400_18422 = state_18378__$1;(statearr_18400_18422[(2)] = null);
(statearr_18400_18422[(1)] = (2));
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
});})(c__5708__auto___18408,out))
;return ((function (switch__5693__auto__,c__5708__auto___18408,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18404[(0)] = state_machine__5694__auto__);
(statearr_18404[(1)] = (1));
return statearr_18404;
});
var state_machine__5694__auto____1 = (function (state_18378){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18378);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18405){if((e18405 instanceof Object))
{var ex__5697__auto__ = e18405;var statearr_18406_18423 = state_18378;(statearr_18406_18423[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18405;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18424 = state_18378;
state_18378 = G__18424;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18378){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18408,out))
})();var state__5710__auto__ = (function (){var statearr_18407 = f__5709__auto__.call(null);(statearr_18407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18408);
return statearr_18407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18408,out))
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
